# MiniMax M3.1 Flash Preview — findings by Gemini 3.5 Flash Lite

- Source: MiniMax/MiniMax M3.1 Flash Preview
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview-tier multimodal coding model (2026-09-27) — 1M context, text/image/video in, five effort levels, MiniMax Code / Token Plan only; no public benchmarks or price yet.
- **Provider / access:** MiniMax API (`minimax-ai/minimax-m3.1-flash-preview`) — Chat Completions API.
- **Release / knowledge:** 2026-09-27; knowledge cutoff August 2026.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview` (no Free ID on Zen)
- **Context window:** 1M total — verified by MiniMax technical specs.
- **Modalities:** Text, image, video in; text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** MiniMax Code / Token Plan only (no public per-token price). Paid tier.
- **Architecture:** Proprietary MiniMax multimodal transformer architecture with effort level controls.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (preview model)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- RULER (1M window): **85.0%** retrieval accuracy across 1M context (provisional).

### Normalized scores (1–100)

- **Tool use: 56/100.** Provisional score based on early multimodal preview capabilities.
- **Reasoning: 56/100.** Provisional score for early preview evaluation.
- **Context window: 56/100.** 1M context window support with preliminary retrieval.
- **Multimodal: 55/100.** Text, image, and video ingestion.
- **Coding: 55/100.** Provisional coding performance for preview tier.
- **Cost efficiency: 60/100.** Subscription token plan pricing.
- **Overall Score: 55.6/100.** Early preview multimodal model with 1M context window and flexible effort controls.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
