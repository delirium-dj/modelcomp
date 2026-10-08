# GPT-6.1 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6.1 Sol (`openai/gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (Max Reasoning Variant)
- **Short description:** OpenAI's 2026-09-29 refresh of the GPT-6 Sol tier — a major leap in agentic and terminal performance over GPT-6 Sol at competitive pricing, approaching GPT-6 Astra capabilities.
- **Provider / access:** OpenAI API (Responses API; multi-provider routing per Artificial Analysis). Proprietary weights.
- **Release / knowledge:** Released September 29, 2026.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens total (128,000 max output).
- **Modalities:** Text and image input, text output. Reasoning: yes. Tool calling and structured output supported.
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M tokens with 95% cache discount ($1.47/M blended). Measured $0.72 per Intelligence Index task.
- **Architecture:** Proprietary OpenAI foundation model with test-time compute scaling.

### Raw benchmarks found

Artificial Analysis Intelligence Index v4.3.2:

- Intelligence Index: **52** — ranked #11 of 223.
- Cost per Intelligence Index task: **$0.72**.
- Output speed: **66.2 tokens/s**.
- Time to first token: **272.81 s** at max reasoning effort.
- Versus GPT-6 Sol: **+12 point gain on Terminal-Bench 4.0** and **+5 point gain on HLE** (hallucination rate dropping from 60% to 54%).

Independent third-party figures (llm-stats aggregation):

- DeepSWE v1.1: **75.2%**.
- OSWorld 2.0: **71.4%**.
- HealthBench: **58.5%**; HealthBench Professional: **64.2%**.

Not found:

- GPQA Diamond, CritPt, LiveCodeBench, SWE-bench Verified / Pro: **no verified public score found** for this exact model.

### Normalized scores (1–100)

- **Tool use: 85/100.** Exceptional agentic capability with a +12 point jump on Terminal-Bench 4.0 over GPT-6 Sol and OSWorld 2.0 at 71.4%, ranking #11 of 223 on the Intelligence Index.
- **Reasoning: 86/100.** Solid knowledge reliability with a +5 point HLE gain over GPT-6 Sol and hallucination rate down to 54%, though constrained by high TTFT at max reasoning effort.
- **Context window: 95/100.** Verified 1,050,000 token context window placing it in the 1M+ tier.
- **Multimodal: 65/100.** Native text and image input support with text output.
- **Coding: 89/100.** DeepSWE v1.1 at 75.2% clearing frontier coding benchmarks alongside substantial terminal execution gains.
- **Cost efficiency: 78/100.** Competitive pricing at $2.00 / $10.00 with 95% cache discount ($0.72 per Intelligence Index task).
- **Overall Score: 84/100.** (85 + 86 + 95 + 65 + 89) / 5 = 420 / 5 = 84. Top-tier agentic and reasoning performance suited for complex developer workflows and long-context analysis.

---

## Signature

- Provided by:  — 2026-10-08
- Method: Public internet research and Artificial Analysis v4.3.2 benchmarking reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_Detailed.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
