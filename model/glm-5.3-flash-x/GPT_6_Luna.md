# GLM-5.3-FlashX — findings by GPT-6 Luna

- Source: Z.ai/GLM-5.3-FlashX
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's high-speed serving tier for GLM-5.3-Flash, using the same model weights with faster inference. It is a serving profile, not a distinct checkpoint; the findings here describe the canonical Flash weights and the FlashX price/latency tier.
- **Provider / access:** Z.ai API; model code `glm-5.3-flashx`. API compatibility and availability depend on region/account.
- **Release / knowledge:** Flash released 2026-08-26; FlashX launch date was not verified in a primary source.
- **IDs:** API `glm-5.3-flashx`; underlying checkpoint `zai-org/GLM-5.3-Flash`.
- **Context window:** 1,000,000 tokens; max output 128,000 tokens.
- **Modalities:** Text, image, video, and file input; text output. Function calling, web search, structured output, and visual coding are supported.
- **Pricing (as of 2026-10-28):** Z.ai lists $0.37 input, $1.25 output, and $0.075 cached input per 1M tokens for FlashX. Standard GLM-5.3-Flash is lower at $0.15/$0.50; FlashX's premium buys throughput, not different weights.
- **Architecture:** Same GLM-5.3-Flash model: 320B total / 18B active MoE, hybrid sparse and linear attention, mHC; publicly available weights. Exact license details should be checked in the Hugging Face repository.

### Raw benchmarks found

Z.ai's benchmark table is for the GLM-5.3-Flash checkpoint, not a separately trained FlashX model. FlashX inherits those model results; throughput is a serving claim.

Agent / tool use:

- Toolathlon Verified: **78.4%**.
- AutomationBench v1.0.6: **48.8%**.
- Agents' Last Exam: **26.3%**.
- GDPval-AA v2: **1773 Elo** (Artificial Analysis evaluation).
- OSWorld 2.0: **59.1%**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **57**; Z.ai also reports **$0.045 per task** during discounted pricing.
- HLE with tools: **55.3%**.
- CharXiv Reasoning with tools: **89.4%**.

Coding:

- Terminal-Bench 2.1: **84.3%**.
- DeepSWE v1.1: **63.4%**.
- NL2Repo: **56.3%**.
- Z.ai Code Bench v1.0: **29.0** at max effort versus Opus 4.8 at 29.5; vendor-developed evaluation.

Long context:

- 1M context specified; no MRCR/RULER/GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong Toolathlon, AutomationBench, and GDPval results; capped for vendor-reported suites and lower Agents' Last Exam score.
- **Reasoning: 92/100.** AA Index 57 and strong HLE/CharXiv results indicate frontier-level reasoning, with vendor/harness limitations noted.
- **Context window: 90/100.** 1M capacity reaches the top tier, but no retrieval accuracy score supports 95–100.
- **Multimodal: 95/100.** Image, video, and document/file understanding are documented; no audio input or non-text output verified.
- **Coding: 92/100.** Terminal-Bench 84.3 and DeepSWE 63.4 are strong; capped for vendor evaluations and no independent common-harness replication.
- **Cost efficiency: 96/100.** FlashX pricing of $0.37/$1.25 per million is very low relative to the reported capability, though the base Flash tier is cheaper and the claimed $0.045 task cost is discounted.
- **Overall Score: 92/100.** Half-up mean of the five quality dimensions; a strong multimodal agent and coding model, where FlashX is justified mainly by latency needs.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; benchmark figures are attributed to Z.ai's Flash checkpoint card and are not represented as independent FlashX-specific measurements. Normalized scores are independent interpretations.
- Sources: [Z.ai GLM-5.3-Flash/FlashX documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash); [Z.ai pricing](https://docs.z.ai/guides/overview/pricing); [Z.ai launch and benchmark report](https://z.ai/blog/glm-5.3-flash); [Hugging Face checkpoint](https://huggingface.co/zai-org/GLM-5.3-Flash).
