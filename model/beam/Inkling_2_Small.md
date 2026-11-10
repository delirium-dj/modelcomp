# Beam — findings by Inkling 2 Small

- Source: Reflection (`beam`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Reflection Beam 1.0)
- **Short description:** Reflection AI's open-weight 501B-total / 23B-active sparse MoE — built for coding, reasoning, and agentic workloads with ~3x token-efficient inference. Released Oct 2026; BF16/FP8/NVFP4 numerics; free via OpenCode (`opencode/beam-free`). (Formerly tracked under the stealth handle `cat-jam`, merged into this folder.)
- **Provider / access:** Open weights on Hugging Face (`reflection/beam-*` collection); Reflection platform API (`platform.reflection.ai`); free OpenCode Console route `opencode/beam-free`; docs at developers.reflection.ai.
- **Release / knowledge:** Released Oct 2026 (blog Oct 2026; card ©2026); knowledge cutoff 2026-06-30. Developed predominantly for English.
- **IDs:** `reflection/beam-1.0` weights (see Hugging Face collection); `opencode/beam-free` (OpenCode route)
- **Context window:** 1,000,000 tokens; max output undisclosed (modified Harmony chat template).
- **Modalities:** text in → text out (text-only); reasoning yes (token-efficient); tool calls yes (MCP-based agentic, browsing); coding harness integration.
- **Pricing (as of 2026-11-10):** open weights (BF16/FP8/NVFP4) — self-host free; free OpenCode route `opencode/beam-free`; Reflection API pricing not verified on card (platform.reflection.ai).
- **Architecture:** sparse MoE, 501.3B total / 23.4B active, 52 layers (3 dense + 49 MoE), Gated GQA + sliding window attention, 256 experts, 152K vocab.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **80.1%** (BF16; vendor model card)
- SWE-bench Verified: **81.6%** (BF16) / **80.2%** (FP8) / **80.7%** (NVFP4) (vendor card)
- SWE-bench Pro v1: **66.1%** (BF16); SWE-bench Pro v2-Hard: **76.5%** (BF16) (vendor card)
- SWE-bench Multilingual: **78.3%** (BF16) (vendor card)
- DeepSWE v1.1: **43.3%** (BF16) (vendor card)

Reasoning / knowledge:

- No GPQA/HLE/Index rows published on the model card — no verified public reasoning score found. AIME/BigBench-class rows: not found.

Coding:

- SWE-bench Verified: **81.6%**; SWE-bench Pro v2-Hard: **76.5%**; Multilingual: **78.3%** (vendor card, BF16)
- SWE Atlas Codebase QnA: **31.8%** (vendor card)

Long context:

- 1M window; no separate long-context retrieval benchmark published on the card — no verified public long-context retrieval score found.

Multimodal:

- Text-only — score 15 by the text-only rule; no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 80.1% and SWE-bench Verified 81.6% (vendor) verify strong agentic execution; no MCP/τ³/GDPval rows published — capped.
- **Reasoning: 62/100.** Provisional — no public reasoning rows on the card; inferred from SWE-Pro v2-Hard 76.5% and token-efficient reasoning claims; unverified.
- **Context window: 88/100.** 1M tokens; retrieval unmeasured publicly — scored on window + general agentic evidence.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 79/100.** SWE-bench Verified 81.6%, Multilingual 78.3%, Pro v2-Hard 76.5%, Terminal-Bench 80.1%; capped by DeepSWE 43.3% and SWE Atlas QnA 31.8%.
- **Cost efficiency: 92/100.** Open weights in three numerics + free OpenCode route — exceptional value.
- **Overall Score: 64/100.** (74 + 62 + 88 + 15 + 79) / 5 = 63.6 → 64. Best fit: open-weight agentic coding at zero license cost (free on OpenCode); reasoning/multimodal needs unverified — run your own evals.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Reflection Beam model card, technical report link, OpenCode Console); scores are normalized 1–100 interpretations, not official vendor scores. Reasoning rows marked provisional — vendor card lacks them.
- Reference URLs:
  - [Beam Model card — Reflection](https://reflection.ai/beam-model-card)
  - [Beam weights — Hugging Face collections](https://huggingface.co/collections/reflection/beam-10)
  - [Introducing Beam — Reflection blog](https://reflection.ai/blog/introducing-beam)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
