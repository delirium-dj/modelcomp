# GPT-6 Luna — findings by GPT 6 Sol

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's September 2026 low-cost GPT-6 tier for focused high-volume tasks and affordable coding agents, distinct from Sol and Astra ([OpenAI introduction](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [API docs](https://developers.openai.com/api/docs/models/gpt-6-luna)).
- **Provider / access:** OpenAI `gpt-6-luna` **Responses** for built-in tools/function calling; **Chat Completions** function calls only with `reasoning_effort=none` ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna)); [OpenCode Console](https://opencode.ai/docs/zen/) paid Responses route. Consumer free/Go desktop access at launch does not prove an API free tier.
- **Release / knowledge:** September 22, 2026 ([Vals](https://www.vals.ai/models/openai_gpt-6-luna)); May 18, 2026 cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna)).
- **IDs:** `gpt-6-luna` OpenAI default snapshot, project `openai/gpt-6-luna`; no verified free Zen API ID.
- **Context window:** [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna) **1,050,000 total / 922,000 max input / 128,000 output**; long inputs over 272K invoke whole-request premium.
- **Modalities:** Text/image input → text output, none/low/medium/high/xhigh/max reasoning; Responses hosted search, interpreter, shell, computer tools. No native audio/video I/O ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna)).
- **Pricing (as of 2026-10-15):** [OpenAI](https://developers.openai.com/api/docs/models/gpt-6-luna) and [OpenCode Console](https://opencode.ai/docs/zen/) **$0.10 input / $0.01 cache read / $0.125 cache write / $0.50 output per 1M** for ordinary prompts. >272K input: $0.20/$0.02/$0.25/$0.75 for the *whole request*; Batch/Flex half price, Fast doubles applicable rate.
- **Architecture:** Proprietary; weight and parameter count undisclosed ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-6-luna)).

### Raw benchmarks found

The [OpenAI launch](https://openai.com/index/introducing-gpt-6-sol-and-luna/) specifies max effort for its DeepSWE Luna measurement; independent [Vals](https://www.vals.ai/models/openai_gpt-6-luna) uses max and its September news cohort differs from current table. [AA-attributed](https://benchlm.ai/models/gpt-6-luna) numbers include a revised index and different terminal/long-context harnesses.

Agent / tool use:

- [OpenAI-affiliated DeepSWE **66.6%** at max](https://openai.com/index/introducing-gpt-6-sol-and-luna/); [Vals September TB2.1 **73.03%** as stated in its dated news](https://www.vals.ai/models/openai_gpt-6-luna), current [Vals TB4.0 **13.64% ±1.51**, Code Migration **42.55% ±4.42**, Finance Agent v2 **49.87% ±0.23**, SRE Bench **2.67% ±1.00**, Harvey Legal Agent **2.92% ±1.36**](https://www.vals.ai/models/openai_gpt-6-luna).
- [AA AutomationBench **53.2%**, TB4.0 **12.6%**, GDPval-AA **1432 Elo**](https://benchlm.ai/models/gpt-6-luna) under its distinct scoring; an exact Luna OSWorld-Verified/MCP Atlas/Claw-Eval score **no verified public score found** in reviewed tables.

Reasoning / knowledge:

- [AA HLE **38.5%**, CritPt **19.4%**, current Intelligence Index **38.1**](https://benchlm.ai/models/gpt-6-luna); [ARC Prize Luna ARC-AGI-1 **86.7%**, ARC-AGI-2 **59.3%**](https://arcprize.org/results/openai-gpt-6-luna) as indexed by [BenchLM](https://benchlm.ai/models/gpt-6-luna). [Vals ProofBench v1.1 **64.00% ±4.82**](https://www.vals.ai/models/openai_gpt-6-luna); exact-ID GPQA Diamond not verified in these listings.

Coding:

- [OpenAI DeepSWE v1.1 **66.6%**](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [AA SciCode **54.6%**](https://benchlm.ai/models/gpt-6-luna); [Vals Vibe Code Bench v1.1 **81.65% ±3.38**, ProgramBench **0.50% ±0.50**, SWE-bench Multimodal **37.50% ±2.21**, TB4.0 **13.64% ±1.51**](https://www.vals.ai/models/openai_gpt-6-luna). SWE-bench Verified/Pro exact Luna number **no verified public score found** here.

Long context / multimodal:

- [OpenAI 1.05M capacity](https://developers.openai.com/api/docs/models/gpt-6-luna) and [AA-LCR **83.3%**](https://benchlm.ai/models/gpt-6-luna), but no Luna 1M eight-needle MRCR figure verified; longer requests have premium rates.
- [AA MMMU-Pro **79.7%**](https://benchlm.ai/models/gpt-6-luna); native inputs text/image only, output text.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vals TB2.1 73% is promising, but TB4 ~13% and SRE 2.7% show hard autonomy limits.
- **Reasoning: 82/100.** HLE 38.5%, ARC-AGI-2 59.3%, CritPt 19.4% and ProofBench 64% support strong cost-tier reasoning.
- **Context window: 93/100.** API 1.05M/128K with AA-LCR 83.3%, unverified full-window retrieval and >272K billing premium.
- **Multimodal: 66/100.** Text/image in → text out with MMMU-Pro 79.7%, no native audio/video.
- **Coding: 83/100.** DeepSWE 66.6% and Vibe Code 81.7%, tempered by TB4 13.6% and ProgramBench 0.5%.
- **Cost efficiency: 97/100.** $0.10/$0.50 and cached $0.01 are low for this capability, even with long-prompt uplifts; no verified free API.
- **Overall Score: 79/100.** (70 + 82 + 93 + 66 + 83) / 5 = 78.8, half-up 79; useful high-volume vision-assisted tasks and bounded coding when expensive long-context prompts and hard agents are separately assessed.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh OpenAI docs/prices checked against vendor DeepSWE and independent Vals/AA/ARC-attributed scores; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
