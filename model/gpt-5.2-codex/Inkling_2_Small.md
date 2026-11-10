# GPT-5.2-Codex — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's Codex-tuned upgrade of GPT-5.2 for long-horizon, agentic coding — optimized for Codex and similar environments. **Shut down** per OpenAI's model documentation (superseded by GPT-5.3 Codex / GPT-5.4+ line); kept for historical comparison.
- **Provider / access:** OpenAI Responses API only (Chat Completions not supported); snapshot `gpt-5.2-codex` — Status: Shut down.
- **Release / knowledge:** Released late 2025 (Dec 2025 generation); reliable knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2-codex`
- **Context window:** 400,000 tokens (maximum input 272,000); max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning yes (`low`/`medium`/`high`/`xhigh`); function calling, web search, hosted shell, skills; Responses API only.
- **Pricing (as of 2026-11-10):** $1.75 / 1M input, $14.00 / 1M output, cached input $0.175; no Batch. (Model shut down — pricing retained for record.)
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **92.1%** (Artificial Analysis)
- JobBench: **26.0%** (JobBench paper, arXiv:2605.26329)
- Gert Labs: **51.79%** (Gert Labs rankings)

Reasoning / knowledge:

- AA-GPQA Diamond: **89.9%** (Artificial Analysis)
- AA Intelligence Index: **28.5%** (Artificial Analysis); BenchLM **56.35/100** (#63/1020)
- AA-HLE: **35.7%**; CritPt: **8.7%**
- AA-LCR: **82.3%** (Artificial Analysis LCR leaderboard)
- AA-Omniscience: Index **-2.2**, Accuracy **41.1%**, Hallucination **73.4%**
- AA-IFBench: **77.6%**

Coding:

- LiveCodeBench (Vals): **88.0%** (Vals AI)
- SWE-bench (Vals): **72.4%** (Vals AI)
- Vibe Code Bench v1.1: **37.91%** (Vals AI)

Long context:

- AA-LCR: **82.3%** at 400K (272K effective input cap).

Multimodal:

- AA-MMMU-Pro: **76.3%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 92.1% is excellent for structured tool use; capped by JobBench 26.0% — weak end-to-end agentic work.
- **Reasoning: 58/100.** GPQA 89.9% and LCR 82.3% offset AA Index 28.5, HLE 35.7%, CritPt 8.7%.
- **Context window: 78/100.** 400K window (272K effective input), AA-LCR 82.3%; effective input cap trims the tier.
- **Multimodal: 72/100.** Text+image in, text out; MMMU-Pro 76.3%; no audio/video.
- **Coding: 76/100.** LCB 88.0% (Vals), SWE-bench 72.4% (Vals) — verified agentic coding; capped by Vibe Code Bench 37.9%.
- **Cost efficiency: 62/100.** $1.75/$14 — mid-tier pricing; shut down, so availability is moot.
- **Overall Score: 70/100.** (68 + 58 + 78 + 72 + 76) / 5 = 70.4 → 70. Best fit: historical Codex workloads only — the model is shut down; migrate to a current Codex-class model.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI model docs, Artificial Analysis, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2-Codex — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.2-codex)
  - [GPT-5.2-Codex — BenchLM](https://benchlm.ai/models/gpt-5-2-codex)
  - [GPT-5.2-Codex — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-2-codex)
  - [GPT-5.2-Codex — Vals AI](https://www.vals.ai/models/openai_gpt-5.2-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
