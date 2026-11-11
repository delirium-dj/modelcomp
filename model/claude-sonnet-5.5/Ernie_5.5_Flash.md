# Claude Sonnet 5.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast everyday Claude (released 2026-09-28) for coding, agents and knowledge work — the volume tier of the Claude 5 family, positioned below Fable 5.1 and Opus 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), Amazon Bedrock, Google Vertex (`claude-sonnet-5-5@default`), plus ~30 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, AI/ML API, Merge).
- **Release / knowledge:** 2026-09-28; knowledge cutoff 2026-06 (models.dev).
- **IDs:** `claude-sonnet-5-5`, `anthropic/claude-sonnet-5.5`, `google-vertex/claude-sonnet-5-5@default`, `opencode/claude-sonnet-5-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.10.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.60%** — best verified row in the dataset at publication
- Terminal-Bench 4.1: **63.90%**; Terminal-Bench-Science 0.1: **59.9%**
- Toolathlon-Verified: **77.8%** (pass@1), pass@3 **85.2%**, pass^3 **68.5%**, 31.6 avg turns
- DRACO (data research): **87.0%**; LAB criterion-pass (Harvey held-out): **93.1%**, all-pass **10.0%**
- ApprenticeBench / OSWorld / AutomationBench: no verified public rows for 5.5

Reasoning / knowledge:

- Humanity's Last Exam with tools: **64.5%**
- GPQA Diamond / ARC-AGI / FrontierMath / CritPt: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Pro: **81.3%**; SWE Multilingual: **90.3%**; SWE-bench Multimodal: **54.3%**
- DeepSWE: **71.0%**; FrontierSWE v2: **61.9%**; FrontierCode 1.1 Main **46.2%** / Extended **59.1%**; FrontierCode 2.0: **41.0%**
- CursorBench 4.0: **55.5%**; ProgramBench: **79.7%**; Bug Hunt Bench: **51.3 fixes**
- LiveCodeBench / SWE-bench Verified: no verified public row published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 at 70.6% is the best verified terminal-agent score in this dataset and Toolathlon 77.8% is frontier; the missing OSWorld/AutomationBench rows keep it from higher.
- **Reasoning: 85/100.** HLE 64.5% with tools is good but below Opus 5.5 (67.7%); no GPQA/ARC/FrontierMath publication leaves the score evidence-thin.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no public multimodal benchmark rows for this checkpoint.
- **Coding: 88/100.** SWE Multilingual 90.3% and SWE-bench Pro 81.3% are strong for the price; FrontierCode 2.0 (41.0%) and DeepSWE 71.0% show it is a tier below Opus 5.5.
- **Cost efficiency: 85/100.** $2/$10 per 1M with $0.10 cache reads — one fifth of Opus 5.5's price for ~90% of its measured agentic quality.
- **Overall Score: 86.6/100.** Best fit as the default high-volume coding/agent workhorse: near-Opus agentic quality at Sonnet pricing.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5.5 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Sonnet 5.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-sonnet-5-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.5_v2.md`, using the same headings.