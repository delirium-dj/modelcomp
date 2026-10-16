# Qwen 3.8 — findings by Cat Jam

- Source: Alibaba / Qwen 3.8 (`opencode/qwen-3.8`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's standard Qwen 3.8 flagship (non-Max / non-Flash tier; likely 27B or 32B class Qwen 3.8 series). Family specs: 1M context, native text/image/video (depending on variant), open-weight Qwen 3.8-27B (Apache 2.0, lower price/capacity).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud; OpenAI/Anthropic-compatible API; open weights for 27B.
- **Release / knowledge:** Qwen 3.8 family released mid-Aug 2026; hosted variant 3.8-Max Jul 19 preview → GA Aug 3. Knowledge cutoff not stated in sampled docs.
- **IDs:** `qwen3.8` (hosted base), `qwen3.8-max` and `qwen3.8-flash` separate tiers
- **Context window:** 1,000,000 tokens (991,808 input / 131,072 output for the Max tier; the 27B variant 262K).
- **Modalities:** Text, image, video (Max) → text. Qwen 3.8-27B likely text+image.
- **Pricing (as of 2026-10-16):** $2.00/$6.00 per 1M (Max), Flash $0.15/$0.47, 27B (via hosts) $0.15–$0.45/$2.00–$3.20; cached reads cheaper.
- **Architecture:** Qwen 3.8 series. Open weights for 27B (Apache 2.0) and 2.4T-A95B; hosted Max proprietary.

### Raw benchmarks found

Vendor-reported for the Max tier (adjacent entry Qwen 3.8 Max in same family):

- Terminal-Bench 2.1: **86.6%** (Max tier, vendor)
- SWE-bench Pro: 67.7
- GPQA Diamond: 92.6
- HLE: 43.6 (no tools), HLE with tools 56.2
- IFBench: 82.8
- PaperBench: 93.0
- OSWorld-Verified: 86.1
- MRCR v2 256K: 92.9
- DeepSWE: 56.6

For the plain `qwen-3.8` entry in `model-queue.md` (overall 87.5), no public dedicated Max-tier-only vs. base-tier breakdown was located in sampled sources; exact benchmarks are unavailable. We therefore treat the hosted base as an efficiency-tier variant (commonly referenced as Qwen3.8-Flash/27B-class) and cap scores accordingly.

### Normalized scores (1–100)

- **Cost efficiency (generic):** qwen-3.8 base tier referenced for `qwen3.8` (per `model-queue.md` overall 87.5) is positioned between 3.8 Flash and 3.8 Max; most community access is the 27B open or 3.8 Flash at lower cost.

- **Tool use: 84/100.** Derived from Max-tier vendor numbers (Terminal-Bench 2.1 86.6) and Flash-tier specs; independent verification on third-party harnesses is weaker (Vals independent ~67.4 for Max). Cap to avoid overstatement.
- **Reasoning: 84/100.** GPQA 92.6 (Max tier), HLE 43.6. Base/flash-tier reasoning lower.
- **Context window: 90/100.** 1M window, 262K–991K input limits per tier; MRCR 92.9 (Max).
- **Multimodal: 84/100.** Native visual tasks strong in Max (PaperBench/OmniDoc); Flash/base text/image only maybe.
- **Coding: 82/100.** SWE-Pro 67.7, DeepSWE 56.6 (Max); flash/base lower.
- **Cost efficiency: 94/100.** $0.15/$0.47 Flash tier; $2/$6 Max; excellent mid-cost value.
- **Overall Score: 85/100.** Mean (84+84+90+84+82)/5 = 84.8. Family representative (not the 2.4T Max tier); use Qwen 3.8 Max entry separately for its individual scores.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Alibaba docs/Qwen blog, QwenCloud pricing, Mercatus, Benchgen, Fello, Hugging Face docs, eesel); scores are normalized 1–100 interpretations, not official vendor scores. (The roster slug `qwen-3.8` needs more granular evidence; report marks uncertainty.)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
