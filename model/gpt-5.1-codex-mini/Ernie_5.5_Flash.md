# GPT-5.1 Codex Mini — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.1 Codex Mini (`gpt-5.1-codex-mini`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini (display style per vendor: GPT-5.1-Codex-Mini)
- **Short description:** OpenAI's fast, low-cost coding-optimized tier of the GPT-5.1 Codex family (released 2025-11-12/13) for quick code completion, simple refactoring and routine programming.
- **Provider / access:** OpenAI API / Responses (`gpt-5.1-codex-mini`), Azure OpenAI, OpenRouter (`openai/gpt-5.1-codex-mini`) and ~16 gateway routes.
- **Release / knowledge:** 2025-11-12; knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5.1-codex-mini`, `openai/gpt-5.1-codex-mini`, `azure/gpt-5.1-codex-mini`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-13):** $0.25 in / $2.00 out per 1M; cache read $0.025.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> Independent tracker rows (BenchmarkList / Artificial Analysis leaderboards, sampled 2026-07-21) — these are the first per-benchmark rows for this exact ID.

Agent / tool use:

- Terminal-Bench Hard: **33.3%** (rank 58/326, 82nd percentile)
- GDPval-AA: **1053 Elo** (rank 108/359, 70th percentile)
- Tau2-Bench Telecom: **62.9%** (rank 124/337, 63rd percentile)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30.63** (rank 99/325, 70th percentile)
- GPQA Diamond: **81.3%** (rank 130/481, 73rd percentile)
- Humanity's Last Exam: **18.5%** (high setting 16.9%, $64.4 per run; rank 141/491, 71st percentile)
- MMLU-Pro: **82.0%**; AIME 2025: **91.7%** (92nd percentile); CritPt: **0.0%**
- AA-Omniscience: **−16.52 points**

Coding:

- CCBench: **42.2%** (rank 5/6 — but the field leader is this model)
- Arena AI WebDev Arena: **1244.4 Elo** (rank 130/142, 9th percentile — the weakest coding row)
- SciCode: **42.6%** (from the AA Index row)

Long context:

- AA-LCR: **66.7%** (rank 156/425, 63rd percentile); 400K declared window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench Hard 33.3% and Tau2-Telecom 62.9% are mid-tier; GDPval-AA 1053 is well below the frontier (1866). The agentic rows exist but sit in the 63rd–82nd percentile band.
- **Reasoning: 70/100.** GPQA 81.3% and MMLU-Pro 82.0% are solid, AIME 2025 91.7% is strong, but HLE 18.5% and the AA Index 30.63 (70th pct) are mid-pack for 2026. CritPt 0.0% caps the science-reasoning ceiling.
- **Context window: 88/100.** 400K total (272K in / 128K out) — tier 200K–500K high band; AA-LCR 66.7% shows usable long-context reasoning.
- **Multimodal: 45/100.** Text + image + PDF in documented, but the only measured row is Design Arena 1132 Elo (30th percentile); no MMMU/MathVista-class evidence.
- **Coding: 55/100.** CCBench 42.2% leads its small field but WebDev Arena 1244 (9th pct) and SciCode 42.6% are weak; this is a budget coding tier, not a frontier one — the tracker's own head-to-head shows −71 to −91 pt coding deficits vs every peer.
- **Cost efficiency: 96/100.** $0.25/$2.00 per 1M — very cheap for the capability, though not the cheapest in its class.
- **Overall Score: 66/100.** Best fit for high-volume routine coding, quick completions and cheap agent steps where 400K context and low latency matter more than frontier quality; the weak WebDev/HLE rows keep it out of the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (BenchmarkList model record with Artificial Analysis leaderboard rows, LLM Stats pricing/context, OpenAI model docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1-Codex-Mini — BenchmarkList (12 benchmark rows)](https://benchmarklist.com/models/openai-gpt-5.1-codex-mini/)
  - [GPT-5.1 Codex Mini: Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/gpt-5.1-codex-mini)
  - [GPT-5.1 Codex — OpenAI platform docs](https://platform.openai.com/docs/models/gpt-5.1-codex)
  - [GPT-5.1-Codex-Mini — OpenRouter](https://openrouter.ai/openai/gpt-5.1-codex-mini)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.