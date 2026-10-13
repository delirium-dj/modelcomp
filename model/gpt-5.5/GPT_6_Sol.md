# GPT-5.5 — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 2026 flagship reasoning model for coding, computer use and professional knowledge work; **not** the separate, higher-priced `gpt-5.5-pro` variant ([OpenAI introduction](https://openai.com/index/introducing-gpt-5-5/)).
- **Provider / access:** OpenAI API `gpt-5.5` (snapshot `gpt-5.5-2026-04-23`) via **Responses or Chat Completions**, and ChatGPT/Codex subscriptions ([OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)). No verified free OpenCode Zen ID for this model.
- **Release / knowledge:** April 23, 2026; knowledge cutoff December 1, 2025 ([OpenAI documentation](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **IDs:** `openai/gpt-5.5`, API ID `gpt-5.5`, snapshot `gpt-5.5-2026-04-23`; `gpt-5.5-pro` scores must not be substituted.
- **Context window:** **1,050,000 total, 128,000 max output** for API; Codex subscription uses a separate 400K window ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.5), [launch](https://openai.com/index/introducing-gpt-5-5/)).
- **Modalities:** Text/image input → text output; reasoning efforts none/low/medium/high/xhigh, structured outputs, function calls and Responses hosted tools (including computer use); no native audio/video input or output ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **Pricing (as of 2026-10-13):** OpenAI API **$5 input / $0.50 cached input / $30 output per 1M tokens**; requests with >272K input cost **2× input and 1.5× output** for the whole session. Batch/Flex halve standard prices; paid, not a verified Zen free route ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **Architecture:** Proprietary weights, undisclosed parameter count ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.5)).

### Raw benchmarks found

OpenAI's [launch evaluation table](https://openai.com/index/introducing-gpt-5-5/) used **xhigh effort in a research environment**; independent [Vals](https://www.vals.ai/models/openai_gpt-5.5) also labels its default provider/effort **OpenAI xhigh**. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5) lists xhigh Index **38**, but its current index version differs from the older version quoted in OpenAI's launch article. These figures are neither GPT-5.5 Pro nor default-medium measurements.

Agent / tool use:

- [OpenAI Terminal-Bench 2.0 **82.7%**, OSWorld-Verified **78.7%**, BrowseComp **84.4%**, MCP Atlas April update **75.3%**, Toolathlon **55.6%**, Tau2 Telecom original prompts **98.0%**](https://openai.com/index/introducing-gpt-5-5/). Independent [Vals Terminal-Bench 2.1 **76.40% ±0.65**, Code Migration **45.16% ±4.16**, Finance Agent v2 **51.76% ±0.55**](https://www.vals.ai/models/openai_gpt-5.5); versions and harnesses differ from OpenAI's.
- [Vals SRE Bench **3.82%**, ProgramBench **0.50%**, Harvey Legal Agent **3.75%**](https://www.vals.ai/models/openai_gpt-5.5) qualify reliability on longer specialised tasks; no verified Claw-Eval score found for this exact ID.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **93.6%**, HLE **41.4% without tools / 52.2% with tools**, FrontierMath Tier 4 **35.4%**, ARC-AGI-2 Verified **85.0%**](https://openai.com/index/introducing-gpt-5-5/). [Vals GPQA **93.18% ±1.29**, MMLU Pro **88.14% ±0.32**](https://www.vals.ai/models/openai_gpt-5.5).
- [Artificial Analysis current Intelligence Index **38**](https://artificialanalysis.ai/models/gpt-5-5) (v4.3.2, deprecated-model coverage restricted); [BenchLM](https://benchlm.ai/models/gpt-5-5) attributes AA HLE **45.8%**, SciCode **55.8%** and CritPt **27.1%** to the AA evaluation, not to OpenAI's launch harness.

Coding:

- [OpenAI SWE-bench Pro (Public) **58.6%**, Terminal-Bench 2.0 **82.7%**, Expert-SWE internal **73.1%**](https://openai.com/index/introducing-gpt-5-5/); internal Expert-SWE is not an independent public suite.
- [Vals SWE-bench **82.60% ±1.70**, LiveCodeBench **85.30% ±1.02**, Vibe Code Bench v1.1 **69.85% ±4.54**](https://www.vals.ai/models/openai_gpt-5.5). SWE-bench Verified and SWE-bench Pro are distinct tests.

Long context / vision:

- [OpenAI Graphwalks BFS F1 **73.7% at 256K / 45.4% at 1M** and MRCR v2 eight-needle **81.5% at 256–512K / 74.0% at 512K–1M**](https://openai.com/index/introducing-gpt-5-5/). Capacity is not perfect retrieval, especially at the longest inputs.
- [OpenAI MMMU-Pro **81.2% without tools / 83.2% with tools**](https://openai.com/index/introducing-gpt-5-5/); [Vals MMMU-Pro **88.27% ±0.77**](https://www.vals.ai/models/openai_gpt-5.5) measures a separate configuration.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong independent TB2.1 76.4% and vendor OSWorld-Verified 78.7%, tempered by Vals SRE 3.82% and narrow-domain failures.
- **Reasoning: 92/100.** GPQA 93%+, ARC-AGI-2 85% and HLE 41–52% support elite xhigh reasoning; AA Index 38 on a later index vintage limits comparisons.
- **Context window: 95/100.** API 1.05M/128K with 74% MRCR at 512K–1M; 45.4% Graphwalks BFS at 1M and long-context price uplift cap usable value.
- **Multimodal: 68/100.** Vision + file/tool workflows are strong (MMMU-Pro 81–88%) but input is text/images only and native output is text-only.
- **Coding: 92/100.** TB2.0 82.7%, SWE Verified 82.6% and Pro 58.6% are strong; Vals ProgramBench 0.5% limits sustained autonomy.
- **Cost efficiency: 39/100.** Paid $5/$30 and long-context premiums are expensive against newer models; no verified free ID.
- **Overall Score: 87/100.** (89 + 92 + 95 + 68 + 92) / 5 = 87.2, half-up 87; best for demanding vision-assisted coding and research at xhigh effort when API costs fit the task.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh official model/API documentation cross-checked against Vals and Artificial Analysis; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
