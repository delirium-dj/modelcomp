# Ling 3.1 Flash — findings by GPT 6 Astra

- Source: InclusionAI / Ling-3.1-flash
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Ling 3.1 Flash.
- **Short description:** Ant Group InclusionAI hybrid reasoning model for text coding and tool-using workflows.
- **Provider / access:** Vercel AI Gateway and OpenRouter via Novita, with Chat Completions-compatible access.
- **Release / knowledge:** Vercel announcement September 30, 2026; OpenRouter listing October 2. Cutoff unverified.
- **IDs:** `inclusionai/ling-3.1-flash`; Vercel also `inclusionai/ling-3.1-flash-free`. Free Zen ID not independently verified.
- **Context window:** Gateway route 262,144 tokens with 32,768 completion limit. Artificial Analysis lists 1M for its evaluated offering; the free gateway does not expose that capacity.
- **Modalities:** Text input/output, reasoning and function calling; OpenRouter does not support enforced response_format JSON for this route.
- **Pricing (as of 2026-10-08):** Vercel free through October 13; standard ID starts billing afterward, while -free stops serving. Provider terms apply; no retention/training guarantee independently verified here.
- **Architecture:** MoE, 560B total / 25B active; open weights and final license not verified as released.

Sources: [Vercel launch](https://vercel.com/changelog/ling-3-1-flash-is-now-available-on-ai-gateway), [free route](https://vercel.com/ai-gateway/models/ling-3.1-flash-free), [OpenRouter specifications](https://openrouter.ai/inclusionai/ling-3.1-flash).

### Raw benchmarks found

Artificial Analysis reasoning evaluation, current v4.3.2 generation, displayed rounded values:
- **Tools:** AA-Briefcase v1.1 **1,400 Elo**, GDPval-AA v2.1 **1,622 Elo**, AutomationBench-AA **62%**.
- **Reasoning:** HLE **39%**, CritPt **18%**, Intelligence Index **41**, AA-Omniscience net index **2** (not accuracy or hallucination rate).
- **Coding:** Terminal-Bench **4.0 33%**, SciCode **54%**. SciCode and CritPt are marked under review on the model page, so confidence is provisional.
- **Long context:** AA-LCR v1.1 **83%**; not a 1M retrieval guarantee.
- **Missing:** GPQA, TB2.1, Tau3, Claw-Eval, MCP-Atlas, SWE-bench Verified/Pro, LiveCodeBench and Vibe Code Bench: no verified public score found in inspected primary sources.

[Evaluator comparison](https://artificialanalysis.ai/models/comparisons/ling-3-1-flash-vs-deepseek-v4-1-flash), [version and review flags](https://artificialanalysis.ai/models/ling-3-1-flash). Evaluation settings need not match the free route; no local tests performed.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong professional-work and automation results, capped below frontier autonomy.
- **Reasoning: 85/100.** HLE 39% and LCR 83% support strong reasoning; under-review CritPt is supplementary.
- **Context window: 74/100.** Scores the verified 262k gateway route, not an untested 1M deployment.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 81/100.** TB4 supports useful terminal coding; provisional SciCode evidence and missing repository suites limit confidence.
- **Cost efficiency: 100/100.** Currently free promotional route; this rating expires with the offer.
- **Overall Score: 68/100.** Half-up mean: (84 + 85 + 74 + 15 + 81) / 5 = 67.8. Strong text agents with route-specific context limits.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh provider and primary evaluator research; normalized scores are independent interpretations.
- Future sources: Add a separate signed report alongside this file.

