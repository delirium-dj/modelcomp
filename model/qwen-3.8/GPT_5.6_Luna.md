# Qwen3.8 — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8 family
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (family entry; variant unspecified)
- **Short description:** Alibaba's Qwen3.8 production family for reasoning, coding, visual understanding, long-context work, and agents. This report is intentionally family-level: Max, Flash, Flash-Next, 27B, and Omni are distinct variants and their benchmark rows are not silently merged into one model claim.
- **Provider / access:** Alibaba Cloud Model Studio/QwenCloud and downstream providers. Current supported concrete IDs include `qwen3.8-max`, `qwen3.8-flash`, `qwen3.8-2.4t-a95b`, `qwen3.8-27b`, and `qwen3.8-omni-flash`; the current API list does not expose a bare `qwen3.8` serving ID.
- **Release / knowledge:** 2026 family release; variant release dates span August 3–26, 2026. Variant-specific knowledge cutoffs are not consistently published.
- **IDs:** Family label `Qwen3.8`; use a concrete variant ID for production calls. Open weights include `Qwen/Qwen3.8-27B` and `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** Hosted Max and Flash default to approximately 1M tokens; open Flash-Next and 27B checkpoints natively expose 262,144 tokens, with Flash-Next documented as extensible to 1M. Hosted 27B supports roughly 991,808 input tokens.
- **Modalities:** Max/Flash/27B support text, image, and video input with text output; Omni adds audio understanding, and realtime Omni is the speech-to-speech route. Tool/function calling and structured output are supported on hosted variants.
- **Pricing (as of 2026-11-02):** Variant-specific. Current references list hosted Max around $2/$6, Flash around $0.15/$0.47, and international hosted 27B around $0.50/$3 per 1M input/output tokens; regional, cache, and reasoning-token billing differ.
- **Architecture:** The family spans a 2.4T/95B-active Max-class MoE, a 125B/6B-active Flash-Next MoE with 51B n-gram embeddings, and a dense 27B vision-language model. These are not one architecture.

## Raw benchmarks found

Variant-specific evidence:

- Qwen3.8-Flash-Next: **125B total / 6B active**; DeepSWE 1.1 **58.7%**, SWE-bench Pro **62.5%**, Toolathlon Verified **73.5%**, JobBench **55.7%**, Agents' Last Exam score **51.2%**, CharXiv **90.6%**, and IFBench **81.3%** (Qwen card/BenchLM).
- Qwen3.8-Flash-Next current BenchLM profile: **55.8/100, #65 of 1,004**, with 25 benchmark rows.
- Qwen3.8-27B: Terminal-Bench 2.1 **73.0%**, SWE-bench Pro **61.7%**, LiveCodeBench v6 **90.3%**, OSWorld **84.3%** (official model-card results).
- Qwen3.8-27B current BenchLM profile: **54.26/100, #80 of 1,004**, with 75 benchmark rows; native context is 262K.
- Hosted Qwen3.8-Max has separate stronger long-context/multimodal results and is covered in `model/qwen-3.8-max/`; those rows are not used to inflate this family-level score.
- Qwen3.8-Flash-Next context: **262K native, extensible to 1M**; hosted Qwen3.8-Flash provides **1M by default** with built-in tools.

## Normalized scores (1–100)

- **Tool use: 83/100.** Flash-Next Toolathlon 73.5%, JobBench 55.7%, official hosted tools, and strong visual-agent rows support good agent use; variant spread prevents a higher family score.
- **Reasoning: 84/100.** Flash-Next and 27B GPQA/IFBench results are solid, but family-level results range widely and vendor harnesses dominate the evidence.
- **Context window: 94/100.** Hosted Max/Flash reach 1M and open Flash-Next is extensible to 1M, but 27B/Flash-Next native serving is 262K and no family-wide retrieval curve exists.
- **Multimodal: 88/100.** Image/video input is standard across the main variants and Flash-Next has strong CharXiv/vision rows; audio is an Omni-specific addition, not a property of every Qwen3.8 model.
- **Coding: 84/100.** Flash-Next SWE-bench Pro 62.5% and 27B LiveCodeBench 90.3% are useful, but exact harnesses and variant identity matter substantially.
- **Cost efficiency: 94/100.** The Flash and hosted 27B prices are exceptionally low, while Max remains competitive; family-level value depends on choosing the correct variant.
- **Overall Score: 86.6/100.** Mean of the five family-level quality dimensions `(83 + 84 + 94 + 88 + 84) / 5 = 86.6`; best practice is to select Max for hosted frontier work, Flash for high-volume agents, and 27B/Flash-Next for open-weight deployment.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Alibaba Cloud/Qwen API model lists, Qwen's official family/model cards, Hugging Face, and BenchLM's variant-specific profiles; variant and harness boundaries were kept explicit, and scores are normalized family-level interpretations rather than official vendor scores.
- Reference URLs:
  - [Alibaba Cloud supported models](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Alibaba Qwen OpenAI-compatible model IDs](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-responses)
  - [Qwen3.8 Flash-Next announcement](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [BenchLM Qwen3.8 Flash-Next profile](https://benchlm.ai/models/qwen3-8-flash-next)
  - [BenchLM Qwen3.8 27B profile](https://benchlm.ai/models/qwen3-8-27b)
