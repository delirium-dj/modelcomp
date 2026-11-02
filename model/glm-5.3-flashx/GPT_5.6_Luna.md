# GLM-5.3 FlashX — findings by GPT 5.6 Luna

- Source: Z.ai/GLM-5.3 FlashX
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Z.ai's high-speed GLM-5.3 Flash serving profile, optimized for low latency, multimodal input, tool use, and long-context coding.
- **Provider / access:** Z.ai and compatible OpenAI-style gateways; common route IDs include `glm-5.3-flashx`, `zai/glm-5.3-flashx`, and `z-ai/glm-5.3-flashx`.
- **Release / knowledge:** FlashX serving profile released September 18, 2026; knowledge cutoff is not published.
- **IDs:** `glm-5.3-flashx`; provider aliases vary. FlashX-specific benchmark claims are kept separate from standard GLM-5.3 Flash results.
- **Context window:** Approximately 1,048,576 tokens; maximum output is listed around 128K by current provider catalogues.
- **Modalities:** Image/vision and text input, text output, reasoning, tool calls, prompt caching, and structured output.
- **Pricing (as of 2026-11-02):** Approximately $0.37 input / $1.25 output per 1M tokens, with cached input around $0.09/M. Provider quotes can differ.
- **Architecture:** The FlashX route is described as a high-speed GLM-5.3 Flash profile; FlashX-specific parameter and training details are not published.

## Raw benchmarks found

Exact FlashX capability coverage remains thin; the nearest public benchmark lane is the standard GLM-5.3 Flash family profile and is labeled as such below.

- Standard GLM-5.3 Flash BenchLM profile: **58.26/100, #56 of 1,004**, with 37 benchmark rows covered; this is family evidence, not a FlashX-only score.
- Standard-family Terminal-Bench 2.1: **84.3%**; Toolathlon-Verified: **78.4%**; AutomationBench: **48.8%**.
- Standard-family DeepSWE: **63.4%**; NL2Repo: **56.3%**; LiveCodeBench: **80.5%**; SWE-bench: **92.0%**.
- Standard-family ExtractBench: **80.75%**; ParseBench: **70.75%**; GPQA Diamond: **86.4%**; MMLU-Pro: **86.1%**.
- No independent FlashX-only composite or benchmark table is currently published; FlashX's strongest directly auditable evidence is its 1M context, price, and serving-latency positioning.

## Normalized scores (1–100)

- **Tool use: 80/100.** Standard-family Terminal-Bench and Toolathlon results support capable agents, but FlashX-specific tool evaluations are not separated from the base route.
- **Reasoning: 78/100.** Family GPQA/MMLU-Pro evidence is solid, while the exact FlashX reasoning profile remains provisional.
- **Context window: 94/100.** The approximately 1M window is consistently listed across current provider catalogues; no full-window retrieval curve was found.
- **Multimodal: 82/100.** Vision input and structured/tool use are documented, but exact FlashX modality evaluation is limited.
- **Coding: 83/100.** Standard-family DeepSWE, SWE-bench, and LiveCodeBench results support good coding utility, with exact-route transfer treated cautiously.
- **Cost efficiency: 97/100.** $0.37/$1.25 pricing and a 1M context are highly competitive for a high-speed serving profile.
- **Overall Score: 83.4/100.** Mean of the five quality dimensions `(80 + 78 + 94 + 82 + 83) / 5 = 83.4`; this remains provisional until FlashX-only benchmark rows are published.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current provider catalogues and pricing pages plus BenchLM's standard GLM-5.3 Flash lane; exact FlashX and family-level evidence were explicitly separated, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [GLM-5.3 Flash model card](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3 FlashX pricing/spec profile](https://commandcode.ai/models/glm-5-3-flashx)
  - [BenchLM GLM-5.3 Flash profile](https://benchlm.ai/models/glm-5-3-flash)
  - [GLM-5.3 FlashX provider pricing](https://ctrlaltdebrief.com/tools/pricing/models/glm-5-3-flashx)
