# GPT-6 Sol — findings by GPT 6 Sol

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September 2026 mainstream GPT-6 reasoning/coding model for agentic work, lower-priced than Astra and distinct from the subsequently released GPT-6.1 Sol ([OpenAI introduction](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [API reference](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **Provider / access:** OpenAI **Responses API** `gpt-6-sol` for hosted tools and function calls; **Chat Completions** supports function calls **only when reasoning effort is `none`** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)). No verified free Zen ID.
- **Release / knowledge:** September 22, 2026 ([Vals](https://www.vals.ai/models/openai_gpt-6-sol)); April 20, 2026 knowledge cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **IDs:** OpenAI `gpt-6-sol` (default snapshot), project route `opencode/gpt-6-sol`; a live/free OpenCode listing for the latter is not inferred solely from metadata.
- **Context window:** 1,050,000 total, **922,000 max input / 128,000 max output** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **Modalities:** Text/image input → text output; none/low/medium/high/xhigh/max reasoning, structured outputs and Responses tools (web/file search, code interpreter, shell, computer use, MCP). No native audio/video I/O ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **Pricing (as of 2026-10-13):** **$2 input / $0.20 cached input / $2.50 cache write / $10 output per 1M**. >272K input doubles input/cache rates and multiplies output by 1.5 **for the entire request**; Batch/Flex half price, Fast double price ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **Architecture:** Proprietary; weights and parameter count unpublished ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-sol)).

### Raw benchmarks found

OpenAI's [September launch](https://openai.com/index/introducing-gpt-6-sol-and-luna/) specifies max or xhigh effort on separate tests, while independent [Vals](https://www.vals.ai/models/openai_gpt-6-sol) uses **max** and [AA](https://artificialanalysis.ai/models/gpt-6-sol) uses its own evolving evaluation suite. [BenchLM](https://benchlm.ai/models/gpt-6-sol) catalogs attributed benchmark results, not a separate test. Launch OSWorld 2.0 *offline partial reward* is not OSWorld-Verified success rate; September Vals news quotes an earlier cohort than its current rows.

Agent / tool use:

- [OpenAI Agents' Last Exam v1 **56.4% at max**, AutomationBench 1.0.6 **33.2% at xhigh**, OSWorld 2.0 offline **60.5% partial reward at xhigh**](https://openai.com/index/introducing-gpt-6-sol-and-luna/). [AA TB4.0 **43.9%**, AA AutomationBench **61.6%**, GDPval-AA **1508 Elo**](https://benchlm.ai/models/gpt-6-sol) use different task sets and scoring scales from OpenAI's vendor tests.
- [Vals TB4.0 **44.44% ±3.54**, SRE Bench **30.53% ±2.85**, Code Migration **57.20% ±4.21**, CyberBench v1.1 **77.98% ±5.11**, Finance Agent v2 **49.05% ±0.58**, Harvey Legal Agent **1.67% ±0.82**](https://www.vals.ai/models/openai_gpt-6-sol); professional-domain agent accuracy remains uneven.

Reasoning / knowledge:

- [ARC Prize GPT-6 Sol **Max** ARC-AGI-1 **95.5%**, ARC-AGI-2 **89.6%**, ARC-AGI-3 **4.6%**](https://arcprize.org/results/openai-gpt-6-sol) as indexed by [BenchLM](https://benchlm.ai/models/gpt-6-sol); the three versions test substantially different difficulty levels.
- [AA HLE **47.9%**, CritPt **30.9%**, Intelligence Index **47.6**, AA-LCR **83.7%**](https://benchlm.ai/models/gpt-6-sol) (AA attribution); [Vals ProofBench v1.1 **83.00% ±3.77**, BioMysteryBench **74.81% ±2.43**](https://www.vals.ai/models/openai_gpt-6-sol). No exact-ID GPQA Diamond score verified in these sources.

Coding:

- [OpenAI DeepSWE v1.1 **68.8% at max**](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [AA SciCode **57.6%**](https://benchlm.ai/models/gpt-6-sol). [Vals Vibe Code Bench v1.1 **87.82% ±2.53**, TB4.0 **44.44% ±3.54**, ProgramBench **2.00% ±0.99**](https://www.vals.ai/models/openai_gpt-6-sol); no directly matched SWE-bench Pro number found for this ID.

Long context / vision:

- [OpenAI 1.05M / 128K API capacity](https://developers.openai.com/api/docs/models/gpt-6-sol) and [AA-LCR **83.7%**](https://benchlm.ai/models/gpt-6-sol). A measured **1M** eight-needle MRCR score for this Sol snapshot: **no verified public score found** in reviewed sources; long prompts carry a pricing uplift.
- [AA MMMU-Pro **82.9%**](https://benchlm.ai/models/gpt-6-sol) under its own visual harness; official API supports image input, but native audio/video input remains unsupported.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vals TB4 44.4% and SRE 30.5% plus ALE 56.4% show strong agents; Harvey 1.67% and Finance v2 49.05% expose specialist limits.
- **Reasoning: 93/100.** ARC-AGI-2 89.6%, AA HLE 47.9% and CritPt 30.9% support high-effort reasoning; ARC-AGI-3 4.6% remains hard.
- **Context window: 94/100.** 1.05M/128K and AA-LCR 83.7%; no exact 1M MRCR result and >272K premium keep it below perfect.
- **Multimodal: 68/100.** Strong visual test (MMMU-Pro 82.9%) but only text/image in, text out natively.
- **Coding: 89/100.** DeepSWE 68.8%, Vals Vibe Code 87.82%, SciCode 57.6% and TB4 44.44%; ProgramBench 2% caps full autonomy.
- **Cost efficiency: 74/100.** $2/$10 and $0.20 cache read are competitive for this tier, but cache writes and long requests have premiums.
- **Overall Score: 86/100.** (88 + 93 + 94 + 68 + 89) / 5 = 86.4, half-up 86; solid text/image agentic engineering at moderate token prices when effort and provider tool support are specified.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh OpenAI primary API specs/announcement checked against independent Vals and attributed AA/ARC results; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
