# Qwen3.5-27B — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.5-27B
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba's open-weight, dense vision-language model for reasoning, coding, and agent tasks. Keep this 27B dense model separate from the Qwen3.5 MoE sizes such as 35B-A3B, 122B-A10B, and 397B-A17B.
- **Provider / access:** Weights are public at Hugging Face `Qwen/Qwen3.5-27B` and are compatible with Transformers, vLLM, SGLang, and KTransformers. Hosted APIs include Alibaba Cloud Model Studio (`qwen3.5-27b`) and OpenRouter (`qwen/qwen3.5-27b`); OpenRouter lists Chat Completions, reasoning, tool, and structured-output parameters. Provider feature support can vary.
- **Release / knowledge:** The public Hugging Face repository was created **2026-02-24**. No exact knowledge-cutoff date found.
- **IDs:** Alibaba Model Studio `qwen3.5-27b`; Hugging Face `Qwen/Qwen3.5-27B`; OpenRouter `qwen/qwen3.5-27b` (dated provider endpoint `qwen/qwen3.5-27b-20260224`).
- **Context window:** **262,144 tokens native**, extensible to **1,010,000 tokens** according to the Qwen model card. The inspected API endpoint allows up to **65,536 output tokens**. No verified retrieval-accuracy result at 512K+ was found.
- **Modalities:** Text, image, and video input; text output. The Hugging Face config includes image and video token IDs and a vision encoder. No audio input or non-text output verified.
- **Pricing (as of 2026-10-30):** Alibaba Model Studio's international standard list price is **$0.30 input / $2.40 output per MTok** through 256K. Its Germany/US Global price table has lower, input-length-tiered rates. OpenRouter prices are provider-specific: its current endpoint list includes AtlasCloud at **$0.27/$2.16**, Alibaba at **$0.195/$1.56**, and other providers at different rates. Self-hosting carries no model-weight royalty under Apache-2.0, but hardware and serving costs still apply.
- **Architecture / license:** The exact model has **27B** parameters in the Qwen card; Hugging Face metadata counts **27.78B** weights. OpenRouter classifies this exact SKU as dense. Its config uses a 64-layer hybrid of linear attention and full attention (every fourth layer), plus a vision encoder. License: **Apache-2.0**.
- **Evaluation caveat:** The benchmark table is Qwen-published. It does not provide run-level confidence intervals or complete harness detail for every result. It labels the coding result “Terminal Bench 2”; this is preserved as written and not re-labelled Terminal-Bench 2.1. Search-agent rows use separate agent systems, not the bare model. Artificial Analysis currently marks its page deprecated and says it has no publicly available API results beyond a default 10K-input workload; that is AA's reporting status, not evidence that the weights or hosted routes are unavailable.

### Raw benchmarks found

Agent / tool use:

- **Terminal Bench 2: 41.6%** (Qwen model card; benchmark version/harness details not stated in the result table).
- **BFCL-V4: 68.5%**, **TAU2-Bench: 79.0%**, **VITA-Bench: 41.9%**, and **DeepPlanning: 22.6%** (Qwen model card).
- Qwen's separate search-agent setup reports **HLE with tool 48.5%**, **BrowseComp 61.0%**, **BrowseComp-zh 62.1%**, **WideSearch 61.1%**, and **Seal-0 47.2%**. Qwen notes that most search agents use context folding at 256K; WideSearch is run at 256K without context management. These are agent-system results, not base-model-only results.
- No verified GDPval-AA, OSWorld, Tau3-Banking, or Claw-Eval result found for this exact model.

Reasoning / knowledge / long context:

- **GPQA Diamond: 85.5%**, **HLE with CoT: 24.3%**, **MMLU-Pro: 86.1%**, **AA-LCR: 66.1%**, and **LongBench v2: 60.6%** (Qwen model card).
- Additional results include **MMLU-Redux 93.2%**, **SuperGPQA 65.6%**, and HMMT Feb 2025 **92.0%** / Nov 2025 **89.8%** (Qwen model card). The latter contest results are not directly comparable to GPQA/HLE.
- The model card documents extension to 1,010,000 tokens, but does not report retrieval accuracy at 512K or 1M. AA-LCR and LongBench v2 are recorded as published; neither is treated here as proof of near-perfect retrieval at the extended limit.

Coding:

- **SWE-bench Verified: 72.4%**, **LiveCodeBench v6: 80.7%**, and **Terminal Bench 2: 41.6%** (Qwen model card).
- **Codeforces: 1,899** on Qwen's own query set; **OJBench: 40.1%**; **FullStackBench: 60.1% English / 57.4% Chinese** (Qwen model card). Codeforces is not an official contest rating.

Multimodal:

- **MMMU: 82.3%**, **MMMU-Pro: 75.0%**, **MathVision: 86.0%**, **MathVista (mini): 87.8%**, and **RealWorldQA: 83.7%** (Qwen vision-language table).
- Video: **VideoMME 87.0% with subtitles / 82.8% without subtitles** and **VideoMMMU 82.3%** (Qwen model card).
- Document/visual results include **OmniDocBench 1.5: 88.9%**, **MMBench EN-DEV-v1.1: 92.6%**, and **HallusionBench: 70.0%** (Qwen model card). These benchmark versions and metrics are retained as published.

### Normalized scores (1–100)

- **Tool use: 75/100.** TAU2-Bench 79.0%, BFCL-V4 68.5%, and VITA-Bench 41.9% indicate useful tool/agent performance, while Terminal Bench 2 is 41.6% and DeepPlanning is 22.6%; no exact-model Tau3, GDPval-AA, OSWorld, or Claw-Eval result was found. Sources: Qwen model card and its benchmark footnotes.
- **Reasoning: 82/100.** GPQA Diamond 85.5%, MMLU-Pro 86.1%, and AA-LCR 66.1% are strong, but HLE with CoT is 24.3%, below the project's 40% frontier reference. Source: Qwen model card.
- **Context window: 95/100.** Qwen documents extension to 1,010,000 tokens, meeting the ≥1M tier; no retrieval result at 512K+ supports a 100. Source: Qwen model card; LongBench v2 60.6% and AA-LCR 66.1% are noted but are not verified 1M retrieval tests.
- **Multimodal: 84/100.** Image and video input are documented, with VideoMME at 87.0%/82.8%, VideoMMMU at 82.3%, and MMMU-Pro at 75.0%; no audio input or non-text output is listed. Sources: Qwen model card and Hugging Face config.
- **Coding: 80/100.** SWE-bench Verified 72.4% and LiveCodeBench v6 80.7% are strong, while Terminal Bench 2 is 41.6%; no exact-model DeepSWE or Terminal-Bench 2.1 result was verified. Source: Qwen model card.
- **Cost efficiency: 92/100.** Alibaba's $0.30/$2.40 standard international API price is near the rubric's ~$0.60/$2.20 reference; some regional/context tiers and OpenRouter hosts are cheaper. Apache-2.0 self-hosting is an option but still requires hardware. Sources: Alibaba Model Studio pricing and OpenRouter's exact-model endpoint list.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions: `(75 + 82 + 95 + 84 + 80) / 5 = 83.2`, rounded to **83**. A capable open model with broad video/image support and strong coding, though its 1M extension lacks verified retrieval results at that range.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent checks of Qwen's exact Hugging Face model card/config/license and benchmark tables, Alibaba Model Studio pricing, OpenRouter's model and live endpoint listings, and Artificial Analysis' exact-model page. The 27B SKU is separated from Qwen3.5 MoE siblings; provider prices, the vendor's Terminal Bench 2 label, and separate search-agent results are kept distinct. Scores are normalized interpretations, not official ratings.
- Sources: [Qwen3.5-27B model card and benchmark tables](https://huggingface.co/Qwen/Qwen3.5-27B); [Qwen3.5-27B config](https://huggingface.co/Qwen/Qwen3.5-27B/raw/main/config.json); [Qwen3.5-27B Apache-2.0 license](https://huggingface.co/Qwen/Qwen3.5-27B/raw/main/LICENSE); [Alibaba Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio); [OpenRouter exact model route](https://openrouter.ai/qwen/qwen3.5-27b); [OpenRouter current provider endpoints](https://openrouter.ai/api/v1/models/qwen/qwen3.5-27b/endpoints); [Artificial Analysis Qwen3.5 27B (reasoning)](https://artificialanalysis.ai/models/qwen3-5-27b).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
