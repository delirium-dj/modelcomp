# GPT-5.6 Sol — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's highest-capability variant in the GPT-5.6 tier, optimized for advanced reasoning, coding, and multi-agent tool workflows.
- **Provider / access:** OpenAI API via Responses API, ChatGPT Work, Codex; model ID `gpt-5.6-sol`.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff undisclosed.
- **IDs:** `openai/gpt-5.6-sol` (no Free-tier ID verified).
- **Context window:** 1,048,576 tokens (1M) input; 128,000 max output per OpenAI docs.
- **Modalities:** Text and image in; text out; programmatic tool calling; multi-agent orchestration via Responses API.
- **Pricing (as of 2026-10-01):** $5 input / $30 output per 1M tokens (subject to temporary discount); cached $0.50 input.
- **Architecture:** Proprietary reasoning model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI GPT-5.6 release table)
- Agents' Last Exam: **52.7%** (OpenAI table)

Reasoning / knowledge:

- GDPval-AA v2: **1,747.8 Elo** (OpenAI table)
- Artificial Analysis Intelligence Index: **58.9** (OpenAI table)

Coding:

- SWE-bench Pro: **64.6%** (OpenAI table)
- DeepSWE v1.1: **72.7%** (OpenAI table)
- AA Coding Agent Index: **80** (OpenAI table)

Long context:

- 1M context documented; no public MRCR/RULER retrieval results found.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 95/100.** Terminal-Bench 88.8% and Agents' Last Exam 52.7% are frontier agentic results; capped by missing Tau3, GDPval non-Elo, Claw-Eval, and OSWorld data.
- **Reasoning: 93/100.** GDPval 1,747.8 Elo and AA Index 58.9 meet elite thresholds; capped by missing HLE, GPQA, LCR, Omniscience numbers.
- **Context window: 95/100.** Full 1M verified; capped by no independent MRCR/RULER confirmation at scale.
- **Multimodal: 88/100.** Text/image input with tool integration; no audio/video; text-out only; strong support for the text+image tier.
- **Coding: 94/100.** SWE-Pro 64.6%, DeepSWE 72.7%, Coding Index 80 show exceptionally strong coding; comparable to GPT-5.6 Terra's 90.
- **Cost efficiency: 62/100.** $5/$30 premium pricing; higher than 5.6 Terra's $2/$12; temporary discounts noted but not free tier.
- **Overall Score: 93/100.** Mean of (95 + 93 + 95 + 88 + 94) / 5 = 93.0. Best fit: demanding agentic coding and professional reasoning workloads.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (OpenAI GPT-5.6 release table, API docs, bench reports); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.