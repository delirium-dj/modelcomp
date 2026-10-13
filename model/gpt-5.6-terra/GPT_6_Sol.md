# GPT-5.6 Terra — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's July 2026 balanced-price GPT-5.6 reasoning tier (roughly the earlier mini position), distinct from higher-priced Sol and smaller Luna ([OpenAI introduction](https://openai.com/index/gpt-5-6/), [API documentation](https://developers.openai.com/api/docs/models/gpt-5.6-terra)).
- **Provider / access:** API ID `gpt-5.6-terra`, both **Responses and Chat Completions**; ChatGPT Work/Codex access also exists. Free ChatGPT/Codex subscription access does not establish a free Zen API route ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [launch](https://openai.com/index/gpt-5-6/)).
- **Release / knowledge:** July 9, 2026; cutoff February 16, 2026 ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra)).
- **IDs:** `openai/gpt-5.6-terra`; API model/snapshot `gpt-5.6-terra`. Sol/Ultra multi-agent measurements are **not** Terra measurements.
- **Context window:** **1,050,000 total, max 922,000 input / 128,000 output** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra)).
- **Modalities:** Text/image in → text out; none/low/medium/high/xhigh/max reasoning, structured outputs, functions and Responses tools. Native audio/video input and audio/video output are **not** listed for Terra by [OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-terra); PDF/file input can be mediated by the host, not evidence of a native audio/video encoder.
- **Pricing (as of 2026-10-13):** [Current OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra) **$2 input / $0.20 cached input / $12 output per 1M**, after the July 30 price cut (the July 9 [original launch table](https://openai.com/index/gpt-5-6/) retains **$2.50/$15**). Prompts >272K input double input and multiply output by 1.5 for the entire request; cache writes billed at 1.25× uncached input. Paid, no verified free Zen API ID.
- **Architecture:** Proprietary; parameter count undisclosed ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra)).

### Raw benchmarks found

Terra's column in the [OpenAI GPT-5.6 launch tables](https://openai.com/index/gpt-5-6/) provides model-specific scores; independent [Vals](https://www.vals.ai/models/openai_gpt-5.6-terra) explicitly tests **max reasoning**, and [AA](https://artificialanalysis.ai/models/gpt-5-6-terra) labels its listing **Max** (current Intelligence Index v4.3.2 **42**, different from OpenAI's quoted v4.1 **55**). Harnesses, versions and effort settings should not be mixed.

Agent / tool use:

- [OpenAI Terminal-Bench 2.1 **87.4%**, BrowseComp **87.5%**, OSWorld **2.0 50.2%**, Toolathlon **53.1%**, AutomationBench **15.2%**, GDPval-AA v2 **1593 Elo**, Agents' Last Exam **50.4%**](https://openai.com/index/gpt-5-6/). OSWorld 2.0 is not OSWorld-Verified.
- [Vals Terminal-Bench **4.0 22.73% ±2.31**, SRE Bench **9.54% ±1.82**, Finance Agent v2 **54.44% ±2.07**, Code Migration **47.80% ±4.28**, ProgramBench **0.50%**](https://www.vals.ai/models/openai_gpt-5.6-terra); much harder or differently configured tasks expose autonomy limits. No verified Claw-Eval score for this exact ID.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **92.9%**, FrontierMath v2 Tier 1–3 **84.9% / Tier 4 **68.3%**, AA Intelligence Index v4.1 **55**, GeneBench Pro **23.3%**](https://openai.com/index/gpt-5-6/). Current [AA Index **42**](https://artificialanalysis.ai/models/gpt-5-6-terra) uses v4.3.2 and cannot be interpreted as a 13-point capability drop without controlling for the revision.
- [Vals GPQA **90.91% ±1.91**, MMLU Pro **86.66% ±0.33**, ProofBench v1.1 **74.00% ±4.41**](https://www.vals.ai/models/openai_gpt-5.6-terra); [BenchLM](https://benchlm.ai/models/gpt-5-6-terra) attributes AA HLE **42.9%**, CritPt **30.0%** to third-party evaluations.

Coding:

- [OpenAI SWE-bench Pro **63.4%**, DeepSWE v1.1 **69.6%**, Terminal-Bench 2.1 **87.4%**, AA Coding Agent Index v1.1 **77.4**](https://openai.com/index/gpt-5-6/). DeepSWE is a specified agent harness, not the plain SWE-bench dataset.
- [Vals SWE-bench **95.40% ±0.94**, LiveCodeBench **85.93% ±1.02**, Vibe Code Bench v1.1 **74.59% ±4.20**, TB4.0 **22.73% ±2.31**](https://www.vals.ai/models/openai_gpt-5.6-terra). Do not equate SWE-bench and SWE-bench Pro.

Long context / multimodal:

- [OpenAI MRCR v2 eight-needle **89.6% at 256–512K / 72.5% at 512K–1M**, GraphWalks BFS F1 **76.9% at 256K / 71.2% at 1M**](https://openai.com/index/gpt-5-6/); 1M capacity has meaningful but imperfect long-range retrieval.
- [OpenAI MMMU-Pro **80.7% without tools / 82.0% with tools**, gdp.pdf **24.7%**](https://openai.com/index/gpt-5-6/); [Vals MMMU Pro **86.47% ±0.82**](https://www.vals.ai/models/openai_gpt-5.6-terra) under an independent configuration.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 87.4% and BrowseComp 87.5% are strong, but TB4 22.73%, OSWorld 2.0 50.2% and AutomationBench 15.2% limit hard unattended workflows.
- **Reasoning: 89/100.** GPQA ~91–93%, FrontierMath Tier 4 68.3% and solid professional tests; scores depend on high/max effort and index revision.
- **Context window: 94/100.** Documented 1.05M / 128K with 72.5% MRCR near 1M; >272K pricing and imperfect retrieval cap use.
- **Multimodal: 66/100.** Good image understanding (MMMU-Pro ~81–86%) but text/image-only native input and text output, not a general audio/video model.
- **Coding: 90/100.** SWE-Pro 63.4%, DeepSWE 69.6%, LiveCodeBench 85.93% and TB2.1 87.4% support coding agents; TB4 and ProgramBench expose limits.
- **Cost efficiency: 68/100.** Post-cut $2/$12 with 90% cache-read discount is competitive for this performance, subject to cache-write and long-prompt premiums.
- **Overall Score: 85/100.** (84 + 89 + 94 + 66 + 90) / 5 = 84.6, half-up 85; suitable for tool-driven text/image coding and research where Sol's extra spend is unnecessary.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh official OpenAI docs/launch compared with Vals, AA and BenchLM-attributed third-party figures; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
