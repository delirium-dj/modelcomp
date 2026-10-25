# Beam — findings by Muse Glimmer 30B

- Source: Reflection / Beam 1.0 501B-A23B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Beam 1.0 501B-A23B
- **Short description:** Reflection AI open-weight sparse Mixture-of-Experts language model built for coding, reasoning and long-horizon agentic work. 501B total / 23B active parameters, Apache 2.0, 1M token context.
- **Provider / access:** Hugging Face `reflection/Beam-1.0-501B-A23B`, OpenCode Zen `opencode/beam-free`, OpenRouter / Vercel AI Gateway. Chat Completions.
- **Release / knowledge:** 2026-10-05 release; knowledge cutoff 2026-06-30.
- **IDs:** `reflection/Beam-1.0-501B-A23B`; Zen `opencode/beam-free`; formerly stealth label Cat Jam.
- **Context window:** 1.0M tokens total, up to 128K output. Verified by Reflection model card, LLM Reference and Artificial Analysis.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, structured outputs yes, JSON mode supported. No image/audio/video.
- **Pricing (as of 2026-10-25):** Free on OpenCode Zen `beam-free` $0/$0 with 30-day retention; Reflection API public beta $0 with daily caps. Hosted median $0.40 / 1M input, $1.20 / 1M output per Artificial Analysis; OpenRouter $1.00/$3.00; Vercel $1.30/$4.30. Self-host $0 under Apache 2.0.
- **Architecture:** 501.3B total parameters, 23.4B active per token, 52 layers (3 dense + 49 MoE, 256 experts), Gated GQA + Sliding Window Attention. Open weights Apache 2.0.

### Raw benchmarks found

> Sources: Reflection Hugging Face model card 2026-10-16, Artificial Analysis model page 2026-10-16, BenchLM reflection-beam 2026-10-23, LLM Reference 2026-10-16.

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (BF16) — Reflection model card / BenchLM
- Tau3-Banking: **36.1%** (BF16) — Reflection model card / BenchLM
- GDPval-AA: **1177 Elo** — BenchLM Artificial Analysis GDPval-AA
- MCP-Atlas: **80.8%** — Reflection model card / BenchLM
- AutomationBench public: **39.3%** — Reflection model card
- BrowseComp w/ context management: **76.8%** — Reflection model card
- DeepSearchQA w/ context management: **80.5%** — Reflection model card

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (BF16) — Reflection model card / BenchLM
- HLE no tools: **36.0%** — Reflection model card
- HLE with tools: **51.1%** — Reflection model card
- LCR / AA-LCR v1.1: **78.2%** — Reflection model card
- CritPt / CriPT AA: **16.3%** — Reflection model card
- Artificial Analysis Intelligence Index v4.3.2: **30** — Artificial Analysis model page, #20/121 open-weight class
- AA-Omniscience Accuracy: **33.1%** — Artificial Analysis model page; Hallucination Rate 47.2%

Coding:

- SWE-bench Verified: **81.6%** — Reflection model card / BenchLM
- SWE-bench Pro v1: **66.1%** — Reflection model card
- SWE-bench Multilingual: **78.3%** — Reflection model card
- DeepSWE v1.1: **43.3%** — Reflection model card / BenchLM
- SciCode: **49.2%** — Reflection model card
- LiveCodeBench: **88.3%** — Reflection model card
- Terminal-Bench 2.1: **80.1%** — see above

Long context:

- AA-LCR v1.1 78.2% at 1M window; LongBench v2 67.5% — Reflection model card
- Context window reported 1M, 128K max output

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 80.1% and MCP-Atlas 80.8% show strong agentic tool use; Tau3-Banking 36.1% and AutomationBench 39.3% cap the score vs frontier 50%+ Tau3.
- **Reasoning: 84/100.** GPQA Diamond 90.6% and AIME 2026 97.7% are frontier level; HLE no-tools 36.0%, CritPt 16.3% and Intelligence Index 30 limit overall reasoning breadth.
- **Context window: 95/100.** Verified 1M token window with 128K output, competitive long-context tier; no public RULER/GraphWalks score.
- **Multimodal: 15/100.** Text-only input/output, reasoning and tool use supported. No image/audio/video.
- **Coding: 78/100.** SWE-bench Verified 81.6%, LiveCodeBench 88.3% and Terminal-Bench 80.1% support strong coding; DeepSWE 43.3% and SciCode 49.2% keep score below frontier.
- **Cost efficiency: 100/100.** $0 on OpenCode Zen beam-free and Reflection API public beta; hosted median $0.40/$1.20 is also highly competitive.
- **Overall Score: 69.6/100.** Mean of five quality dims (76+84+95+15+78)/5 = 69.6 → 70. Best-fit: open-weight long-context coding/agent model with strong reasoning on math/knowledge, text-only, excellent free access.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
