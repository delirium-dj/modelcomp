# Qwen 3.8 Max — findings by GPT 5.5

- Source: Alibaba/Qwen 3.8 Max
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship Qwen 3.8 Max is a large sparse MoE positioned for strong reasoning, coding, and long-context multimodal work at aggressive pricing.
- **Provider / access:** Alibaba Cloud / Qwen API and related hosted routes.
- **Release / knowledge:** Public preview/coverage appeared around August 2026.
- **IDs:** `alibaba/qwen3-8-max`
- **Context window:** 1M input / 131K output per repo metadata.
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-10-05):** Repo metadata and public discussion report $2/M input and $6/M output.
- **Architecture:** Sparse MoE; public discussion reports 2.4T total parameters with 95B active.

### Raw benchmarks found

Agent / tool use:

- Public benchmark discussion: reports agentic coding benchmarks mostly better than Opus 4.8 level and highlights $2/$6 pricing (`https://www.reddit.com/r/singularity/comments/1ve0hp7/qwen_38_max_benchmarks/`).
- Alibaba preview discussion: says Alibaba claimed Qwen3.8-Max was second only to Fable 5 at around one-tenth the price, but notes lack of public model card/table at that time (`https://www.reddit.com/r/OpenAI/comments/1v2bwet/alibaba_says_qwen38max_is_second_only_to_fable_5/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Public discussion describes Qwen 3.8 Max as a 2.4T multimodal model with strong benchmark positioning behind Fable 5.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**

Coding:

- Agentic coding benchmark discussion: reported above-Opus-4.8-level results, but exact rows were not exposed in accessible snippets.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no exact verified public score found**

Long context:

- Repo metadata reports 1M / 131K output; no independent retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Agentic-coding claims and flagship scale support high tool ability, capped by limited public tables.
- **Reasoning: 89/100.** 2.4T/95B-active flagship positioning supports strong reasoning, below the best verified frontier models.
- **Context window: 94/100.** 1M / 131K context-output capacity is excellent.
- **Multimodal: 88/100.** Text, image, and video input give broad multimodal coverage.
- **Coding: 88/100.** Reported strong agentic coding performance supports a high score, capped by missing SWE/LCB rows.
- **Cost efficiency: 86/100.** $2/$6 is very attractive for a flagship-scale model.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is high-value multimodal long-context coding and reasoning.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
