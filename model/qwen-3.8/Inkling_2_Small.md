# Qwen 3.8 — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.8`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (family: hosted Qwen3.8-Max + open checkpoints Qwen3.8-2.4T-A95B and Qwen3.8-27B)
- **Short description:** Alibaba's Aug 2026 release family — hosted multimodal Qwen3.8-Max plus the first Max-tier open-weight checkpoint (2.4T-A95B, text-only under the Qwen3.8-Max License).
- **Provider / access:** Alibaba Model Studio (`qwen3.8-max`), OpenRouter, Hugging Face/ModelScope for the open checkpoints (Aug 12–14, 2026).
- **Release / knowledge:** GA Aug 3, 2026; open weights Aug 12, 2026.
- **IDs:** `qwen/qwen3.8-max`; HF `Qwen/Qwen3.8-2.4T-A95B`
- **Context window:** 1M (2.4T checkpoint runs 256K native, extensible to ~1M).
- **Modalities:** hosted Max: text+image+video in, text out; open 2.4T checkpoint: text-only; 27B: vision-language.
- **Pricing (as of 2026-10-02):** $2/M in, $6/M out flat (hosted Max); open checkpoints free-to-download.
- **Architecture:** 2.4T total / 95B active sparse MoE (hosted + 2.4T checkpoint); 27B dense VL with Gated DeltaNet hybrid attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba) / **81.3%** (AA independent)
- OSWorld-Verified: **86.1%**; OSWorld 2.0 19.4/46.7 (subset restated)
- AutomationBench Pass@1: **27.3%**; Agents' Last Exam: 27.0/52.4
- ScreenSpot Pro: **84.5%**; AndroidWorld: **85.3%**; WebArena-Verified: 66.8%

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA-confirmed ~92.6–93.5)
- HLE: **43.6%**; HLE w/tools: **56.2%**
- IFBench: **82.8%** (family lead); MRCR v2 256K: **92.9%**

Coding:

- SWE-bench Pro: **67.7%**; DeepSWE v1.1: **56.6%**; FrontierSWE: **73.5%**
- PaperBench: **93.0%** (family lead); NL2Repo-Bench 55.9; QwenSWEBench 80.7 (internal)

Multimodal:

- MMMU-Pro: **82.3%**; MathVision 95.2/97.7; VideoMME 90.4; OmniDocBench 1.5 92.1

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 86.6% (AA-confirmed ~81) and OSWorld 86.1%; AutomationBench 27.3% caps breadth.
- **Reasoning: 79/100.** GPQA 92.6% and IFBench 82.8% (family lead); HLE 43.6% trails flagship tier.
- **Context window: 91/100.** 1M window with 92.9% MRCR at 256K; the open 2.4T checkpoint is 256K-native, which caps its long-context score relative to the hosted tier.
- **Multimodal: 90/100.** Hosted Max covers text/image/video natively; the open 2.4T checkpoint is text-only, and only the 27B is a VL. Reported as the hosted-family ceiling.
- **Coding: 78/100.** SWE-bench Pro 67.7% and PaperBench 93.0% lead on paper tasks; DeepSWE 56.6% trails peers.
- **Cost efficiency: 80/100.** $2/$6 flat, cheaper than Fable 5.1/GPT-5.6 Sol at a comparable tier; open checkpoint removes per-token cost for offline use.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for multimodal, high-volume agent work, with the open-weights path limited to text-only inference.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Qwen 3.8 release notes, HF model cards, AA, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
