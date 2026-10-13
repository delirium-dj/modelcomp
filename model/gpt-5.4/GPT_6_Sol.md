# GPT-5.4 — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 general-purpose reasoning model for professional work and computer use, distinct from the more-expensive GPT-5.4 Pro ([OpenAI launch](https://openai.com/index/introducing-gpt-5-4/)).
- **Provider / access:** OpenAI API `gpt-5.4` (snapshot `gpt-5.4-2026-03-05`) via **Responses or Chat Completions**; Responses provides hosted computer-use and search tools ([OpenAI documentation](https://developers.openai.com/api/docs/models/gpt-5.4)). No verified free Zen route.
- **Release / knowledge:** March 5, 2026; August 31, 2025 cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4)).
- **IDs:** `openai/gpt-5.4`, API `gpt-5.4` and dated snapshot; project `opencode/gpt-5.4` is not proof of a zero-dollar entitlement.
- **Context window:** [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4) **1,050,000 total / 128,000 max output**; >272K input requests are higher-priced for every token.
- **Modalities:** Text/image input → text output, reasoning none (API default) through xhigh, function calls, structured output, hosted search/code/computer use in Responses. No native audio/video I/O ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4)).
- **Pricing (as of 2026-10-13):** First-party [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4) **$2.50 input / $0.25 cached input / $15 output per 1M**, with **2× input and 1.5× output** applied to the whole session when >272K input. The older $1.25/$7.50 direct figure in project display metadata is not supported by current model docs.
- **Architecture:** Proprietary, undisclosed model size ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4)).

### Raw benchmarks found

The [OpenAI March evaluation table](https://openai.com/index/introducing-gpt-5-4/) used **xhigh effort in a research environment** unless specified; [Vals](https://www.vals.ai/models/openai_gpt-5.4-2026-03-05) used xhigh except its TB2.0 high run. AA's independently attributed current index metrics come via [BenchLM](https://benchlm.ai/models/gpt-5-4); do not substitute the Pro column.

Agent / tool use:

- [OpenAI Terminal-Bench 2.0 **75.1%**, OSWorld-Verified **75.0%**, BrowseComp **82.7%**, Toolathlon **54.6%**, GDPval wins-or-ties **83.0%**](https://openai.com/index/introducing-gpt-5-4/). [April-revised MCP Atlas **70.6%** for 5.4](https://openai.com/index/introducing-gpt-5-5/) uses an updated test, not the original March 67.2%.
- [Vals TB2.0 **58.43% ±5.25** at high effort, Code Migration **34.98% ±4.11**, Harvey Legal Agent **0.00%**, SkillsBench **51.71% ±4.72**](https://www.vals.ai/models/openai_gpt-5.4-2026-03-05). Independent [Claw-Eval **60.3%**](https://claw-eval.github.io/) as attributed in [BenchLM](https://benchlm.ai/models/gpt-5-4); terminal/tool scores depend heavily on effort and harness.

Reasoning / knowledge:

- [OpenAI GPQA **92.8%**, HLE **39.8% without tools / 52.1% with tools**, ARC-AGI-2 Verified **73.3%**, FrontierMath Tier 4 **27.1%**](https://openai.com/index/introducing-gpt-5-4/); [Vals GPQA **91.67% ±1.91**, MMLU-Pro **87.48% ±0.42**](https://www.vals.ai/models/openai_gpt-5.4-2026-03-05).
- [AA-attributed Intelligence Index **39**, HLE **43.7%**, CritPt **23.4%**](https://benchlm.ai/models/gpt-5-4) from a separate methodology; tool-assisted HLE should not be compared directly with no-tool HLE.

Coding:

- [OpenAI SWE-bench Pro (Public) **57.7%**, TB2.0 **75.1%**](https://openai.com/index/introducing-gpt-5-4/); [Vals SWE-bench **78.20% ±1.85**, LiveCodeBench **84.14% ±1.04**, Vibe Code v1.1 **67.42% ±4.84**, ProgramBench **0.00%**](https://www.vals.ai/models/openai_gpt-5.4-2026-03-05). SWE-Pro and SWE Verified are different datasets; Vals TB2.0 uses lower effort.

Long context / vision:

- [OpenAI Graphwalks BFS F1 **21.4% averaged across 256K–1M** and MRCR v2 eight-needle **57.5% at 256–512K / 36.6% at 512K–1M**](https://openai.com/index/introducing-gpt-5-4/): nominal 1M input does not imply high-quality retrieval at the limit.
- [OpenAI MMMU-Pro **81.2% without tools / 82.1% with tools**](https://openai.com/index/introducing-gpt-5-4/); [Vals MMMU-Pro **87.51% ±0.80**](https://www.vals.ai/models/openai_gpt-5.4-2026-03-05), a different evaluation configuration.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor TB2.0 75.1%, OSWorld-Verified 75% and BrowseComp 82.7%; Vals TB2.0 58.4% and Harvey 0% limit difficult unattended tasks.
- **Reasoning: 88/100.** GPQA ~92%, ARC-AGI-2 73.3% and HLE 40–52%, tempered by FrontierMath Tier 4 27.1% and AA Index 39.
- **Context window: 88/100.** 1.05M/128K native API, but 36.6% MRCR at 512K–1M and long-input price uplift cap useful retention.
- **Multimodal: 67/100.** Strong MMMU visual scores, only text/image input and text output.
- **Coding: 83/100.** SWE-Pro 57.7%, SWE Verified 78.2% and LiveCodeBench 84.1%; Vals ProgramBench 0% restrains sustained autonomy.
- **Cost efficiency: 59/100.** Current $2.50/$15 and $0.25 cache read, with >272K premium; metadata's cheaper direct quote requires correction by a separate curated-data owner.
- **Overall Score: 82/100.** (82 + 88 + 88 + 67 + 83) / 5 = 81.6, half-up 82; suitable for vision-assisted professional coding within shorter prompts when actual API effort is controlled.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh OpenAI docs/launch compared with Vals and AA-attributed independent results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
