# GPT-5.4 — findings by Mercury 3

- Source: OpenAI (GPT-5.4)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's unified frontier model (released 2026-03-05) folding reasoning, coding, and computer use into one model with configurable reasoning effort; first model to beat the human-expert baseline on OSWorld (75% vs 72.4%). Superseded as flagship by GPT-5.5 on 2026-04-23 but remains the value pick of the GPT-5 line.
- **Provider / access:** OpenAI API (`gpt-5.4`; Responses + Chat Completions), ChatGPT (as GPT-5.4 Thinking), Codex; also Microsoft Azure (Foundry) and third-party routers. Variants: `gpt-5.4-pro` ($30/$180), `gpt-5.4-mini` (~$0.40/$1.60), `gpt-5.4-nano`.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31 (per modelcosts/model page).
- **IDs:** `openai/gpt-5.4`.
- **Context window:** ~1.05M–1.1M tokens total; max output 128K; Codex experimental 1M support; requests >272K count at 2x usage/price rates.
- **Modalities:** text + image + file input; text output; reasoning (none→xhigh); native computer use; tool search; no audio/video input, no multimodal output.
- **Pricing (as of 2026-03):** $2.50 in / $0.25 cached / $15 out per 1M; Batch/Flex at half rate; Priority 2x; Pro $30/$180.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (OpenAI) — first model past the 72.4% human-expert baseline; vs GPT-5.2 47.3%, GPT-5.3-Codex 74.0%
- WebArena-Verified: **67.3%**; Online-Mind2Web: **92.8%** (screenshot-only) (OpenAI)
- Toolathlon: **54.6%** (vs GPT-5.2 45.7%); MCP Atlas: **67.2%** (vs 60.6%); Tau2-bench Telecom: **98.9%**; BrowseComp: **82.7%** (Pro 89.3% SOTA) (OpenAI)
- Tool search (MCP-Atlas 250 tasks): −47% tokens at same accuracy vs all-tools-in-context (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (Pro 94.4%) (OpenAI)
- HLE: **39.8%** no tools / **52.1%** with tools (Pro 58.7%) (OpenAI)
- GDPval: **83.0%** — new SOTA at launch (vs GPT-5.2 70.9%) (OpenAI)
- ARC-AGI-1 Verified **93.7%**; ARC-AGI-2 Verified **73.3%** (Pro 83.3%) (OpenAI)
- FrontierMath Tier 1–3 **47.6%**; Tier 4 **27.1%** (OpenAI)
- Factuality (flagged-error set): claims 33% less likely false, responses 18% less likely to contain errors vs GPT-5.2 (OpenAI)

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI; ~59% on standardized public leaderboard — leads on accuracy-per-dollar per The AI Rankings)
- Terminal-Bench 2.0: **75.1%** (vs GPT-5.3-Codex 77.3%)
- Note: The AI Rankings flags GPT-5.4 trails Claude on the hardest coding benchmarks; value is its edge.

Long context:

- Graphwalks BFS: 93.0% at 0K–128K but **21.4% at 256K–1M**; parents accuracy 89.8% at 0–128K, 32.4% at 256K–1M (OpenAI)
- OpenAI MRCR v2 8-needle: 97.3% at 4K–8K down to 57.5% at 256K–512K and **36.6% at 512K–1M** (OpenAI)

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld 75% (first past human baseline), Toolathlon 54.6%, MCP Atlas 67.2%, Tau2 Telecom 98.9%, BrowseComp 82.7% — strongest agentic tool/computer-use suite at launch; all numbers vendor-run, which caps confidence.
- **Reasoning: 88/100.** GPQA Diamond 92.8%, HLE 39.8%/52.1%, GDPval 83.0% SOTA; frontier-class for its era, below later GPT-5.5/6 flagships.
- **Context window: 85/100.** Window is 1.05M–1.1M, but verified retrieval degrades severely beyond 256K (Graphwalks BFS 256K–1M only 21.4%, MRCR 512K–1M 36.6%).
- **Multimodal: 80/100.** Text+image/file input with strong vision (MMMU-Pro 81.2%, OmniDocBench 0.109, original-fidelity image detail); text-only output, no audio/video input.
- **Coding: 86/100.** SWE-Bench Pro 57.7% (OpenAI) / ~59% standardized; Terminal-Bench 2.0 75.1%; strong-but-not-class-leading — Claude leads the hardest coding benchmarks.
- **Cost efficiency: 70/100.** $2.50/$15 with $0.25 cached — half the price of GPT-5.5 and the field's accuracy-per-dollar leader on standardized SWE-bench Pro; still a paid flagship-range tier.
- **Overall Score: 86/100.** Mean of the five non-cost dims (91+88+85+80+86)/5 = 86.0. Best-fit: best-value former flagship for computer use and knowledge work; superseded in raw capability by GPT-5.5.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.4 (official, incl. full eval tables)](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI API docs: GPT-5.4 model page](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [The AI Rankings: GPT-5.4 review/benchmarks](https://theairankings.com/openai/gpt-5-4/)
  - [Artificial Analysis: GPT-5.4 release page](https://artificialanalysis.ai/models/releases/gpt-5-4)
  - [BenchLM: GPT-5.4 benchmarks & pricing](https://benchlm.ai/models/gpt-5-4)
  - [ModelCosts: GPT-5.4 specs](https://modelcosts.com/model/gpt-5.4)
- Future sources: add a new file next to this one using the same headings.
