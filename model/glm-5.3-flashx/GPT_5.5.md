# GLM-5.3 FlashX — findings by GPT 5.5

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Higher-throughput GLM-5.3 Flash serving tier for fast coding and long-context workloads.
- **Provider / access:** Z.ai/OpenRouter-compatible routes, commonly `z-ai/glm-5.3-flashx`.
- **Release / knowledge:** September/October 2026 public routing tier; cutoff not stated.
- **IDs:** `z-ai/glm-5.3-flashx`, `glm-5.3-flashx`.
- **Context window:** **1,048,576** tokens in public route listings.
- **Modalities:** Text/code; native image input is reported for GLM-5.3 Flash lineage, but exact FlashX multimodal surface varies by provider.
- **Pricing (as of 2026-10-08):** Public comparisons describe FlashX as about **2.5x** GLM-5.3 Flash, with Flash at about **$0.15/M input** and **$0.50/M output**.
- **Architecture:** Same GLM-5.3 Flash lineage, commonly reported around **320B total / 18B active**.

### Raw benchmarks found

Agent / tool use:

- GLM-5.3 Flash has 7 tracked benchmark scores; FlashX public pages emphasize throughput rather than separate benchmark reruns.

Reasoning / knowledge:

- Same-weight proxy from GLM-5.3 Flash benchmark coverage; exact FlashX independent reasoning rows were not recovered.

Coding:

- Public reviews position FlashX as a faster coding tier; exact SWE-bench row was not recovered.

Long context:

- TokenTriage/OpenRouter-style listings report **1.05M** context and up to **131K** completion tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** GLM-5.3 Flash lineage has strong agent evidence; FlashX adds latency benefits.
- **Reasoning: 72/100.** Same-family reasoning is strong, but exact FlashX rows are limited.
- **Context window: 96/100.** 1M context earns near-top credit.
- **Multimodal: 45/100.** Image support is plausible for lineage but provider-specific.
- **Coding: 76/100.** Fast coding tier with GLM-5.3 capability proxy.
- **Cost efficiency: 78/100.** More expensive than Flash but still efficient for high throughput.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions; best fit is latency-sensitive GLM coding and long-context work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

