# GPT-6 Astra — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-6 Astra
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary model for complex reasoning, coding, computer use and professional research.
- **Provider / access:** OpenAI Responses and Chat Completions APIs, plus Azure and AWS Bedrock ([OpenAI](https://openai.com/index/gpt-6-astra)).
- **Release / knowledge:** Released 2026-09-03 per [Vals](https://www.vals.ai/models/openai_gpt-6-astra); knowledge cutoff 2026-04-30 per [OpenAI](https://developers.openai.com/api/docs/models/gpt-6-astra).
- **IDs:** OpenAI `gpt-6-astra`; OpenRouter `openai/gpt-6-astra`. No free API tier verified.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens ([OpenAI](https://developers.openai.com/api/docs/models/gpt-6-astra)).
- **Modalities:** Text and image input, text output; reasoning, function calling and computer-use tools supported.
- **Pricing (2026-11-01):** OpenAI standard $10 input / $1 cached input / $50 output per million tokens. Above 272K input tokens, the full request uses 2× input/cache and 1.5× output rates ([OpenAI model page](https://developers.openai.com/api/docs/models/gpt-6-astra)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports Terminal-Bench 4.0 **57.9%**, Agents' Last Exam **59.3%**, and OSWorld 2.0 offline **72.6% partial** ([announcement](https://openai.com/index/gpt-6-astra)).
- Vals independently reports Terminal-Bench 4.0 **59.60% ± 4.40**, and Vals Index **65.02% ± 1.10** ([Vals](https://www.vals.ai/models/openai_gpt-6-astra)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified public score found in this research.

Reasoning / knowledge:

- GPQA Diamond **96.0%**, Humanity's Last Exam **57.2% with tools**, FrontierMath Tier 4 v2 **97.6%**, and ARC-AGI-3 **99.9%**, OpenAI maximum-effort results ([OpenAI](https://openai.com/index/gpt-6-astra)); the ARC result uses OpenAI's specified Responses API harness.
- Vals ProofBench v1.1 **99.00% ± 1.00** ([Vals](https://www.vals.ai/models/openai_gpt-6-astra)). CritPt and general hallucination rate: no verified public score found here.

Coding:

- DeepSWE v1.1 **74.1%** and FrontierCode v1.1 Main **53.3%**, OpenAI reported results; FrontierCode uses the developer message described in its footnote ([OpenAI](https://openai.com/index/gpt-6-astra)).
- Vals Vibe Code Bench v1.1 **89.59% ± 2.17** and Code Migration v1.1 **80.58% ± 2.34** ([Vals](https://www.vals.ai/models/openai_gpt-6-astra)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified public score found in this research.

Long context:

- OpenAI MRCR v2 8-needle **100.0% at 256K–512K**, **96.3% at 512K–1M**, vendor reported ([OpenAI](https://openai.com/index/gpt-6-astra)).

### Normalized scores (1–100)

- **Tool use: 96/100.** Strong computer-use and independently measured terminal results indicate frontier agent capability, though harnesses differ.
- **Reasoning: 98/100.** GPQA, HLE with tools, FrontierMath and independently evaluated proof tasks support a high score; benchmark saturation and effort choices limit generalization.
- **Context window: 98/100.** A 1.05M window and strong MRCR support the top tier; the 512K–1M result is below the methodology's 98% condition for 100.
- **Multimodal: 72/100.** Text and image input are supported, but audio/video input and non-text output are not documented on the model page.
- **Coding: 96/100.** DeepSWE and Vals code-migration results are strong, with performance varying by benchmark and harness.
- **Cost efficiency: 60/100.** $10/$50 standard rates and higher long-context rates make routine workloads costly despite cache discounts.
- **Overall Score: 92/100.** (96 + 98 + 98 + 72 + 96) / 5 = 92; best reserved for high-value complex tasks when price is acceptable.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor maxima and independently measured results are distinguished.
- Reference URLs:
  - [OpenAI launch and benchmark tables](https://openai.com/index/gpt-6-astra)
  - [OpenAI API model specification and pricing](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [Vals independent evaluations](https://www.vals.ai/models/openai_gpt-6-astra)
- Future sources: add a new file next to this one using the same headings.
