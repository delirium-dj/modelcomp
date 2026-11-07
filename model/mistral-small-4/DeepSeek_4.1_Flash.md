# Mistral Small 4 — findings by DeepSeek 4.1 Flash

- Source: Mistral/Mistral Small 4 (`mistral-small-2603`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's compact open-weights hybrid (Apache 2.0) that unifies instruct chat, reasoning (Magistral), multimodal (Pixtral) and agentic coding (Devstral) in one 119B-A6.5B MoE with a per-request `reasoning_effort` switch.
- **Provider / access:** Mistral AI La Plateforme (`mistral-small-2603`), OpenRouter, NVIDIA NIM; OpenAI-compatible Chat Completions. Dataset route: `opencode/mistral-small-4`.
- **Release / knowledge:** 2026-03-16 release; knowledge cutoff not disclosed.
- **IDs:** `mistralai/mistral-small-2603` (Mistral API); weights `mistralai/Mistral-Small-4-119B-2603`.
- **Context window:** 262,144 total (256K); up to 256K output (llm-stats.com); verified from official docs/HF card.
- **Modalities:** text and image in; text out; reasoning (configurable effort `none`/`high`); tool calls; JSON/structured output.
- **Pricing (as of 2026-11-07):** $0.15 / $0.60 per 1M in/out; cached read $0.015 (Mistral AI; also on OpenRouter/NIM).
- **Architecture:** MoE, 128 experts / 4 active, 119B total / 6.5B active per token (8B incl. embeddings); open weights, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / GDPval-AA / MCP-Atlas: no verified public score found for this exact model (vendor positions it as agentic with native function calling; Benchable's suite has no agentic category)
- AA Index suite includes AA-Briefcase v1.1 / AutomationBench-AA / Terminal-Bench 4.0 (basket AA Intelligence Index v5.0.1, value 4)

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (Hugging Face eval-results leaderboard, community run, lineage-verified to this checkpoint, marked * on the card)
- Artificial Analysis Intelligence Index: **4** (v5.0.1, reasoning variant; non-reasoning not scored)
- Benchable Mathematics category: **92%** accuracy (Benchable harness, Oct–Nov 2026 runs)
- AA-LCR: **0.72** (vendor-reported, with 1.6K chars output)

Coding:

- LiveCodeBench: outperforms GPT-OSS 120B with ~20% less output (vendor-reported, no exact score published)
- Benchable Coding category: **93%** accuracy, claimed "most accurate among models of comparable speed" (83rd percentile of the speed cohort)
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- No long-context retrieval score found at 256K (AA-LCR 0.72 above is the closest; no MRCR/RULER figures published)

### Normalized scores (1–100)

- **Tool use: 58/100.** Native function calling + agentic positioning, but zero published agentic-benchmark numbers (no TB/Tau/GDPval) — capped by missing agentic evidence.
- **Reasoning: 60/100.** GPQA 71.2 and Benchable math 92% are solid for a 6.5B-active open model; AA Index 4 (v5.0.1) shows a wide gap to frontier; capped by the low composite index.
- **Context window: 80/100.** 256K total (=256K output) sits clearly in the mid-high tier; no measured retrieval at full window lowers confidence slightly.
- **Multimodal: 45/100.** Text+image input with vision reasoning; no audio/video/generation — mid coverage, capped by modality breadth.
- **Coding: 65/100.** Benchable coding 93% (83rd pct) + vendor LCB-before-GPT-OSS-120B claim; capped by absence of SWE-bench-class agentic coding numbers.
- **Cost efficiency: 85/100.** $0.15/$0.60 with $0.015 cache read and $0.04/AA-task is aggressive for an open 119B MoE; not free, so below the $0 tier.
- **Overall Score: 61.6/100.** Best-fit: budget-conscious deployments that want one open model for chat, light visual work and coding with configurable reasoning; not a frontier reasoner.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-07
- Method: public internet research (official Mistral blog/docs, HF model card, Artificial Analysis, LLM-Stats, Benchable, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Small 4 (official)](https://mistral.ai/news/mistral-small-4/)
  - [Mistral Docs — Mistral Small 4 model card](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
  - [Hugging Face — Mistral-Small-4-119B-2603 (benchmarks + eval results)](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [Artificial Analysis — Mistral Small 4 release analysis](https://artificialanalysis.ai/models/releases/mistral-small-4)
  - [LLM-Stats — Mistral Small 4](https://llm-stats.com/models/mistral-small-latest)
  - [Benchable — Mistral Small 4](https://benchable.ai/models/mistralai/mistral-small-2603)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
