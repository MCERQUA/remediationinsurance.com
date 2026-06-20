#!/usr/bin/env bash
# Generate all images for remediationinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/remediationinsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — ENVIRONMENTAL REMEDIATION INSURANCE ===

gen "hero.jpg" \
  "Photorealistic wide shot of environmental remediation contractors in full Level B PPE hazmat suits working at a contaminated soil excavation site, professional industrial photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of an environmental remediation site with containment tents, excavation equipment, and decontamination zones visible, professional photography, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a confident environmental remediation contractor in hard hat and safety vest at an outdoor cleanup site, natural light, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide panoramic photo of hazmat remediation crew working at a brownfield site cleanup, heavy equipment and environmental containment visible, professional photography, no text" 4 1216 640

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of environmental remediation contractors in hazmat PPE collecting soil samples at a contaminated site, professional environmental photography, no text" 4

gen "general-liability.jpg" \
  "Photorealistic photo of remediation contractor team in safety gear working at a remediation project site, professional construction photography, no text" 4

gen "professional-liability.jpg" \
  "Photorealistic photo of environmental consultant reviewing remediation project plans at a clean desk with site maps and regulatory documents, professional business photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of hazmat workers in full encapsulating suits working safely at a contaminated site, decontamination equipment visible, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of environmental remediation contractor vehicles including vacuum truck and work trucks parked at a remediation site, professional photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of environmental remediation equipment including monitoring wells, soil vapor extraction equipment, and sampling tools laid out at a remediation site, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of remediation company executive in meeting with regulatory officials reviewing environmental compliance documents, professional business setting, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of environmental remediation contractor signing a government environmental remediation contract, formal professional setting, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
