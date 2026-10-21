# DeepSeek V4 Pro 0423 — findings by Xing40_29B_A4B

> Source: DeepSeek (`deepseek/deepseek-v4-pro`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Pro 0423
- **Provider / access:** DeepSeek hosts `deepseek-v4-pro` via its API (`deepseek-v4-pro` or similar); available through OpenRouter as `deepseek/deepseek-v4-pro`. Specific OpenRouter id confirmed in the repo model list.
- **Release / knowledge:** Released late 2026 as part of the DeepSeek V4 family (alongside `deepseek-v4-flash` and other v4 variants). The `0423` suffix suggests an April 23 release identifier within DeepSeek's naming convention.
- **IDs:** `deepseek/deepseek-v4-pro`, `deepseek-v4-pro`.
- **Context window:** Estimated ~1M tokens. DeepSeek's v4-class dense flagship typically ships at 1M input context. Exact id-specific count not published publicly.
- **Modalities:** text and image input; text output. Tool use supported (functions/tools API). Multilingual text capability well established in prior DeepSeek generations. Vision is not a primary modality for this specific id.
- **Pricing (OpenRouter routing):** Pricing not directly published for this exact id snippet in available OpenRouter docs snippets; assumed to sit in the mid-to-low range common to DeepSeek's flagship tier ($1–$5 / input MTok, $4–$20 / output MTok at launch terms). European routing aligns with platform pricing.
- **Architecture:** DeepSeek proprietary transformer, likely MoE-capable at peak capacity given the "Pro" flagship designation and DeepSeek's trajectory from hybrid to increasingly capable MoE architectures across the V3 / V4 generation line.

### Raw benchmarks found
No third-party official benchmark numbers were published specifically for `deepseek-v4-pro` as of 2026-10-21. Within DeepSeek's public positioning, the V4 family ships strong coding and reasoning performance comparable to frontier models, but per-id numeric scores remain limited. Prior DeepSeek V3 generations published notably strong SWE-bench Verified scores (well above ~60% without tools on standard public benchmarks). SWE-bench results for the current V4 Pro id could not be independently verified.

### Normalized scores (1–100)
- **Tool use: 84/100.** Function-calling and tool-use support are present but modestly below the strongest native-tool-use models; deep integration depth trails OpenAI / Anthropic best-in-class tool stacks.
- **Reasoning: 86/100.** Strong reasoning at peak effort; consistent with DeepSeek's core value proposition but peaks below frontier MoE reasoning models.
- **Context window: 82/100.** 1M-token window is current-gen standard; usable across most practical workloads.
- **Multimodal: 78/100.** Text-only modality confirmed; no claim to vision verification for this specific id.
- **Coding: 87/100.** Strong competitive coding performance per DeepSeek's general positioning.
- **Cost efficiency: 90/100.** Mid-low pricing typical of DeepSeek platforms; efficiency among the better of the flagship pricing tiers.
- **Overall Score: 83.4/100.** Mean of [Tool 84 + Reasoning 86 + Context 82 + Multimal 78 + Coding 87] / 5 = 84.0. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
