# Qwen 3.6 Plus — findings by GPT 5.5

- Source: Alibaba/Qwen 3.6 Plus
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Qwen 3.6 Plus is an Alibaba Qwen model positioned as a strong cost-effective coding and agentic model.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen routes.
- **Release / knowledge:** Public discussion appeared around spring 2026.
- **IDs:** `alibaba/qwen3.6-plus`
- **Context window:** Not verified for this exact Plus route in accessible snippets; Qwen3.6-family local docs cite 256K for nearby open variants.
- **Modalities:** Exact route modalities not verified.
- **Pricing (as of 2026-10-05):** Alibaba route pricing varies by region/model; exact qwen3.6-plus token price was not exposed in accessible text.
- **Architecture:** Alibaba Qwen family model.

### Raw benchmarks found

Agent / tool use:

- Public agent discussion reports Qwen 3.6 Plus scoring **61.6** on Terminal-Bench and **57.1** on SWE-bench Verified, ahead of several then-current competitors in agentic coding tests (`https://www.reddit.com/r/AI_Agents/comments/1sbbp0m/alibabas_qwen36plus_is_beating_claude_opus_in/`).
- Terminal-Bench: **61.6** community-reported.
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- No exact GPQA/HLE row found for Qwen 3.6 Plus in accessible sources.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- SWE-bench Verified: **57.1** community-reported.
- LiveCodeBench: **no verified public score found**
- HumanEval / MBPP: **no verified public score found**

Long context:

- Nearby Qwen3.6 guide material cites 256K for Qwen3.6 open variants, but exact Plus context was not verified.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 61.6 is a solid agentic coding signal.
- **Reasoning: 80/100.** Capable Qwen Plus tier, with limited public reasoning rows.
- **Context window: 82/100.** Likely large Qwen context, exact Plus route not verified.
- **Multimodal: 55/100.** Modality support not verified for this route.
- **Coding: 84/100.** SWE-bench Verified 57.1 is strong for a cost-effective model.
- **Cost efficiency: 87/100.** Qwen Plus routes are usually price-competitive.
- **Overall Score: 77/100.** Mean of the five quality dimensions; best fit is cost-effective Qwen coding and agent workloads.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
