# GPT-5.1 Codex Mini — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini (hyphenated vendor style)
- **Short description:** Smaller, cheaper, less-capable sibling of GPT-5.1-Codex, tuned for fast everyday coding assistance — quick code completion, simple refactoring, high-volume routine work. A distinct RL-trained checkpoint, not a pricing tier. API status: shut down (superseded).
- **Provider / access:** OpenAI API — Responses API only (Chat Completions not supported); also shipped inside Codex surfaces while live (CLI, IDE, web). Status: **Shut down** per the OpenAI model page (checked 2026-11-10).
- **Release / knowledge:** Released November 13, 2025; knowledge cutoff September 30, 2024.
- **IDs:** `gpt-5.1-codex-mini` (default snapshot `gpt-5.1-codex-mini`)
- **Context window:** 400,000 total; max output 128,000 — per the OpenAI API model page (verified 2026-11-10)
- **Modalities:** Text, image in; text out; reasoning token support; function calling, web search, structured outputs, prompt caching
- **Pricing (as of 2026-11-10):** $0.25 / $2.00 per 1M input/output; cached input $0.025 per 1M; Responses API only. Cheap; no free API tier.
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard (Artificial Analysis, 2026-06-10): **33.3%** — 58/326, 82nd percentile
- GDPval-AA (Artificial Analysis Elo, 2026-05-28): **1053** — 108/359, 70th percentile
- Tau2-Bench Telecom (2026-06-10): **62.9%** — 124/337, 63rd percentile
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA run, 2026-07-21, high): **81.3%** — 130/481; eval cost $3.02
- Humanity's Last Exam: **18.5%** (BenchmarkList, 2026-10-29, 141/491) / **16.9%** (AA-sourced HLE run, 2026-07-21)
- MMLU-Pro (2026-06-10): **82.0%** — 75/313, 76th percentile
- AIME 2025 (2026-06-10): **91.7%** — 19/227, 92nd percentile
- CritPt (AA intelligence breakdown, 2026-07-21): **0.0%**
- AA Intelligence Index (2026-07-21): **30.6** — 99/325, 70th percentile; AA-Omniscience **-16.5**
- SciCode (AA run, 2026-07-21, high): **42.6%** — $3.76 per run
- Artificial Analysis Intelligence Index composite lists HLE 16.9%, GPQA 81.3%, SciCode 42.6%, AA-LCR 62.7%

Coding:

- CCBench (2026-05-06): **42.2%** — 5/6, 20th percentile
- Arena AI WebDev Arena (2026-11-10): **1244.4 Elo** — 130/142, 9th percentile, win rate 43.0%
- Design Arena (2026-08-24): **1132** — 264/376, 30th percentile
- SWE-bench Verified: no verified public score found for this exact variant (its big sibling GPT-5.1-Codex is reported at 73.7%)

Long context:

- AA-LCR (2026-10-29): **66.7%** — 156/425, 63rd percentile; the AA intelligence breakdown (2026-07-21) lists 62.7% ($2.64 per run)

### Normalized scores (1–100)

- **Tool use: 58/100.** GDPval-AA 1053 (70th pct) and Tau2 62.9% show workable agentic ability; Terminal-Bench Hard 33.3% (82nd percentile of the hard set) is respectable for a mini model — but no Tau3/MCP-Atlas corroboration.
- **Reasoning: 63/100.** GPQA 81.3 + MMLU-Pro 82.0 + AIME 91.7 are strong; HLE 16.9–18.5, CritPt 0.0 and AA Index 30.6 (70th pct) cap it as a non-frontier reasoner.
- **Context window: 76/100.** 400k total / 128k max output — solid, but behind the 1M class; AA-LCR ~63–67% confirms usable long-context handling.
- **Multimodal: 53/100.** Text + image input only; Design Arena 1132 (30th pct) and WebDev 1244 (9th pct) indicate weak preference results in visual/front-end work.
- **Coding: 56/100.** CCBench 42.2%, SciCode 42.6%, WebDev Arena 1244 — consistently bottom-quartile-to-mid results vs larger siblings; it was positioned as a routine-task assistant, and the numbers back exactly that.
- **Cost efficiency: 90/100.** $0.25/$2 with $0.025 cached input — one of the cheapest Responses-API models; shut down anyway, so historical pricing.
- **Overall Score: 61/100.** Mean of (58 + 63 + 76 + 53 + 56) / 5 = 306/5 = 61.2 → 61. A fast, very cheap routine-coding mini — the right tool for high-volume simple edits, never for hard problems; now shut down.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor docs, Artificial Analysis / BenchmarkList / Vals-style leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: high-volume simple coding assistance at minimal cost; not for hard reasoning or agentic frontier work.
- Reference URLs:
  - [OpenAI API — GPT-5.1-Codex-Mini model page (status: shut down; pricing; limits)](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
  - [BenchmarkList — GPT-5.1-Codex-Mini (12 matched benchmark scores)](https://benchmarklist.com/models/openai-gpt-5.1-codex-mini/)
  - [llm-stats.com — GPT-5.1-Codex-Mini benchmarks, pricing & context window](https://llm-stats.com/models/gpt-5.1-codex-mini)
  - [Benchgen — GPT-5.1 Codex benchmarks (73.7% SWE-bench Verified for the big sibling)](https://benchgen.com/models/openai/gpt-5-1-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
