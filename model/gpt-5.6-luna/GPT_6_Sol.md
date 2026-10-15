# GPT-5.6 Luna — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's July 2026 cost-sensitive/high-throughput 5.6 tier, roughly filling an earlier nano role, distinct from Terra, Sol and newer GPT-6 Luna ([OpenAI family announcement](https://openai.com/index/gpt-5-6/), [API docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna)).
- **Provider / access:** OpenAI `gpt-5.6-luna` on **Responses and Chat Completions**, with first-party built-in tools in Responses; [OpenCode Console](https://opencode.ai/docs/zen/) has a paid `gpt-5.6-luna` Responses route. Free ChatGPT Work tier access at launch is not a free API entitlement.
- **Release / knowledge:** July 9, 2026 ([OpenAI](https://openai.com/index/gpt-5-6/)); February 16, 2026 knowledge cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna)).
- **IDs:** `gpt-5.6-luna` first-party, project `openai/gpt-5.6-luna`; no verified Zen Free ID.
- **Context window:** [OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-luna) **1,050,000 total / 922,000 max input / 128,000 max output**; input >272K causes a whole-request billing uplift.
- **Modalities:** Text/image input → text output, none/low/medium/high/xhigh/max reasoning, function/structured output and Responses tools including computer use ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna)); no native audio/video input/output.
- **Pricing (as of 2026-10-15):** [Current OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna) and [OpenCode Console](https://opencode.ai/docs/zen/) **$0.20 input / $0.02 cached input / $1.20 output per 1M**; cache writes 1.25× input, >272K input **2× input and 1.5× output for full request**. [July launch](https://openai.com/index/gpt-5-6/) originally announced $1/$6 before the July 30 price cut; do not use its old list rate.
- **Architecture:** Proprietary, no parameter count published ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna)).

### Raw benchmarks found

OpenAI [July 5.6 family launch table](https://openai.com/index/gpt-5-6/) reports Luna's own column; [Vals](https://www.vals.ai/models/openai_gpt-5.6-luna) evaluates at **max** effort and [AA-attributed results](https://benchlm.ai/models/gpt-5-6-luna) may use an updated index. OpenAI's Index **51.2 (v4.1)** should not be directly compared with a later index methodology. Luna scores are not Terra or Sol results.

Agent / tool use:

- [OpenAI Terminal-Bench 2.1 **84.7%**, BrowseComp **83.3%**, OSWorld **2.0 45.6%**, Toolathlon **53.4%**, AutomationBench **14.9%**, GDPval-AA v2 **1591.8 Elo**](https://openai.com/index/gpt-5-6/). [Vals TB2.1 **79.0%** attributed by BenchLM, TB4.0 **11.62% ±1.01**, Finance Agent v2 **55.04% ±0.31**, Code Migration **44.55% ±4.24**, SRE Bench **1.53% ±0.76**, Harvey Legal Agent **1.25%**](https://www.vals.ai/models/openai_gpt-5.6-luna).
- OSWorld 2.0 is not OSWorld-Verified. MCP Atlas/Claw-Eval for this exact Luna ID **no verified public score found** in reviewed sources.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **92.3%**, FrontierMath v2 Tier 1–3 **78.6% / Tier 4 **58.5%**](https://openai.com/index/gpt-5-6/) under original release settings. [Vals GPQA **91.67% ±1.74**, MMLU Pro **86.04% ±0.35**, ProofBench **60.00% ±4.92**](https://www.vals.ai/models/openai_gpt-5.6-luna).
- [AA HLE **39.5%**, CritPt **20.6%**, AA Omniscience Accuracy **42.7%**](https://benchlm.ai/models/gpt-5-6-luna) independently attributed; [ARC Prize Luna Max ARC-AGI-1 **88.0%**](https://arcprize.org/results/openai-gpt-5-6-luna) as attributed by BenchLM. Do not assume the family ARC-AGI-2 entry measured Luna if it lacks a Luna-specific label.

Coding:

- [OpenAI SWE-bench Pro **62.7%**, DeepSWE v1.1 **67.2%**, TB2.1 **84.7%**](https://openai.com/index/gpt-5-6/). [Vals SWE-bench **93.00% ±1.14**, Vibe Code Bench v1.1 **77.06% ±3.07**, TB4.0 **11.62% ±1.01**, ProgramBench **0.00%**](https://www.vals.ai/models/openai_gpt-5.6-luna). SWE-Pro and SWE Verified are separate; hard autonomy remains uneven.

Long context / multimodal:

- [OpenAI MRCR v2 eight-needle **41.3% at 256–512K and 41.3% at 512K–1M**, GraphWalks BFS F1 **51.2% at 1M**](https://openai.com/index/gpt-5-6/), far below its full nominal context capacity; [AA-LCR **83.7%**](https://benchlm.ai/models/gpt-5-6-luna) is a separate eval.
- [OpenAI MMMU-Pro **78.4% no tools / 79.5% with tools**](https://openai.com/index/gpt-5-6/); [Vals MMMU-Pro **85.03% ±0.86**](https://www.vals.ai/models/openai_gpt-5.6-luna) uses another setup. Native input only text/image.

### Normalized scores (1–100)

- **Tool use: 79/100.** Vendor TB2.1 84.7%, Vals ~79%, BrowseComp 83.3%; TB4 11.6% and specialist agent tests ~1% cap hard autonomy.
- **Reasoning: 87/100.** GPQA ~92%, FrontierMath T4 58.5%, HLE 39.5% and CritPt 20.6%, effort and index vintage noted.
- **Context window: 91/100.** 1.05M/128K with only 41.3% MRCR near full window and 272K pricing premium.
- **Multimodal: 66/100.** Good vision scores with text/image input; no native audio/video input or output.
- **Coding: 87/100.** SWE-Pro 62.7%, DeepSWE 67.2%, Vals SWE 93% and Vibe Code 77%; hard TB4/ProgramBench lag.
- **Cost efficiency: 94/100.** Post-cut $0.20/$1.20 and cached $0.02 are highly economical for results, with long-context surcharge still relevant.
- **Overall Score: 82/100.** (79 + 87 + 91 + 66 + 87) / 5 = 82.0; affordable high-effort coding/visual question answering for bounded tasks, but verify difficult autonomy and very-long retrieval.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh OpenAI model pricing and Luna-column launch scores compared with Vals and AA-attributed independent results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
