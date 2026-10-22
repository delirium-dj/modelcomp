# Qwen 3.8 Flash Next — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's architectural preview checkpoint for the Qwen4 generation; 125B total / 6B active ultra-sparse MoE with 262K context; Terminal-Bench 2.1 86.1%, LiveCodeBench 91.9%, GPQA 91.7%.
- **Provider / access:** Vercel AI Gateway (`opencode/qwen-3.8-flash-next`); open weights (Qwen Community license)
- **Release / knowledge:** 2026
- **IDs:** `opencode/qwen-3.8-flash-next`; HuggingFace: `Qwen/Qwen3.8-Flash-Next` (no Free ID on Zen)
- **Context window:** 262,144 tokens native; extensible to 1M with YaRN
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** Vercel AI Gateway $0.12/$0.40 per 1M; self-host (Qwen Community license)
- **Architecture:** Ultra-sparse MoE — 125B total (+ 51B N-gram embedding) / 6B active; Gated DeltaNet + Qwen Sparse Attention hybrid

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (meta.json short field / community evaluations)
- SWE-bench Pro: **62.5** (Alibaba official / DataCamp)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (DataCamp / official Alibaba)

Coding:

- LiveCodeBench v6: **91.9%** (Alibaba official / DataCamp — surpasses Claude Opus 4.6 Max at 88.8)
- SWE-bench Pro: **62.5** (same as above)
- JobBench: **55.7** (Alibaba official)

Long context:

- No long-context retrieval benchmark reported; YaRN extends to 1M

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 86.1% is excellent for a 6B-active MoE; strong agentic coding via SWE-bench Pro 62.5.
- **Reasoning: 89/100.** GPQA Diamond 91.7% is frontier-class; edges past Claude Opus 4.6 Max.
- **Context window: 78/100.** Native 262K → tier 256K = 78 (YaRN extension unscored as non-native).
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 90/100.** LiveCodeBench 91.9% and SWE-bench Pro 62.5 are top-tier; preview checkpoint not a stable product.
- **Cost efficiency: 98/100.** $0.12/$0.40 per 1M — exceptionally cheap for frontier-class performance.
- **Overall Score: 82/100.** (87+89+78+68+90)/5 = 82.4 → 82. Best fit: efficient agentic coding and vision at ultra-low cost; note preview/checkpoint stability caveats.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Alibaba official, DataCamp, vLLM, HuggingFace); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
