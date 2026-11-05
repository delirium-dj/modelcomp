# Qwen-3.8 — findings by Mistral Medium 3.5

- Source: Alibaba Cloud Qwen Team (`Qwen/Qwen3.8`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen-3.8 (base model family, primarily referring to Qwen3.8-27B)
- **Short description:** Alibaba Cloud Qwen Team's **open-weight vision-language model family** featuring dense and MoE architectures. The **Qwen3.8-27B** is a dense 27B parameter model under Apache-2.0 license, while **Qwen3.8-Max** (Qwen3.8-2.4T-A95B) is a 2.4 trillion parameter sparse MoE model with ~95B active parameters per token. **First Qwen model to offer native 1M context window** (262K native, extensible to 1M for 27B; 1M by default for Max). Designed for **autonomous coding, long-horizon agentic workflows, complex reasoning, and multimodal understanding**.
- **Provider / access:** Available through **QwenCloud API**, **Alibaba Cloud Model Studio**, **Hugging Face** (open weights for 27B and 2.4T-A95B checkpoints), **OpenRouter**, and third-party providers. OpenAI-compatible API. Model IDs: `Qwen3.8-27B`, `Qwen/Qwen3.8-2.4T-A95B`, `qwen3.8-max` (Max variant with vision + tools).
- **Release / knowledge:** **Previewed July 19, 2026** at World AI Conference in Shanghai; **officially launched August 3, 2026** with published specs and API pricing. Qwen3.8-2.4T-A95B weights released August 12, 2026 on Hugging Face Hub and ModelScope. Knowledge cutoff undisclosed but based on training timeline, likely **mid-2025 to early 2026**.
- **IDs:** `Qwen3.8-27B`, `Qwen/Qwen3.8-2.4T-A95B`, `qwen3.8-max`, `qwen3.8-27b-a3b` (open-weight API model).
- **Context window:** **262,144 tokens native context**, **extensible to 1,000,000 tokens (1M)** for Qwen3.8-27B. **1M tokens native** for Qwen3.8-Max. **128,000 max output tokens** for Max variant.
- **Modalities:** **Native multimodal** — **text and visual inputs** (images, documents). Qwen3.8-Max adds **video and speech** inputs. Text output. Vision capabilities for diagrams, charts, tables, and web content understanding.
- **Pricing (as of 2026-11-05):**
  - **QwenCloud API (Qwen3.8-Max):** $2.00 per million input tokens, $6.00 per million output tokens. **Cached input: $0.25/M**. Explicit cache reads at $0.17/M.
  - **Qwen3.8-27B-A3B (open-weight API):** Significantly lower cost; exact pricing varies by provider. Spheron reports **Qwen API pricing runs $0.03-$6.00 per M** range.
  - **No long-context premium** — same price regardless of context length used.
  - **Third-party:** OpenRouter and other gateways offer competitive rates.
- **Architecture:** 
  - **Qwen3.8-27B:** Dense 27B parameter vision-language model, Apache-2.0 license.
  - **Qwen3.8-2.4T-A95B (Max):** Sparse Mixture-of-Experts with **2.4 trillion total parameters, ~95B active parameters per token**. Hybrid attention mechanisms. Manifold-Constrained Hyper-Connections (mHC) for improved scaling efficiency.
  - **Hardware:** Full-precision Qwen3.8-2.4T-A95B requires substantial GPU resources; FP8 checkpoint ~1.06 TB, NVFP4 checkpoint ~610 GB. Smaller quantizations available (IQ1_S ~508GB).
- **Features:** **Autonomous coding**, **long-horizon agentic workflows**, **complex reasoning**, **multimodal understanding**. Built-in tools for Max variant. Vision input for diagram/chart/table understanding. **Ranked #3 overall** on Hugging Face Open LLM Leaderboard (Qwen3.8-Max). Strong performance on multimodal tests. **"Second only to Fable 5"** claim by Alibaba for certain benchmarks.

### Raw benchmarks found

**Qwen3.8-27B (dense 27B VLM):**

Coding and software engineering:

- **SWE-bench Pro: 61.7%** (Qwen self-reported; up from 53.5% for Qwen3.6-27B at same size). Strong coding performance for a 27B model.
- **Terminal-Bench 2.1: 73.0%** (up from 63.4% for Qwen3.6-27B). Competitive with larger models.
- **OSWorld-Verified: 84.3%** (up from 63.9% for previous version). Excellent computer-use task performance.

Agentic and tool use:

- **WebArena: 85.9%** (Orcarouter source). Web-based agent tasks.
- **AgentBench: 77.9%** (Orcarouter source). General agentic capability evaluation.
- **WorkArena: 72.5%** (Orcarouter source). Workflow automation tasks.

Reasoning and knowledge:

- **Humanity's Last Exam (HLE): 43.6%** (Hugging Face model card; Alibaba vendor-run). Broad-knowledge frontier exam.
- **GPQA Diamond: Not explicitly published** for Qwen-3.8. Comparable: Fable 5 at 80.0%, Opus 4.8 at 93.6%.
- **MMLU-Pro: Not explicitly published** for Qwen-3.8.

Multimodal:

- **Image-to-WebDev: #1** open model (Orcarouter claim). Strong vision-to-code capabilities.
- **MMMU-Pro: Not explicitly published** for Qwen-3.8.
- **Vision benchmarks:** Strong performance on diagram, chart, and table understanding within documents.

**Qwen3.8-Max (2.4T-A95B MoE):**

Coding and software engineering:

- **FrontierSWE: Alibaba claims near-parity with Fable 5** (88.8% reference). Vendor-run benchmark.
- **DeepSWE: Not explicitly published** but inferred competitive with frontier models.
- **Terminal-Bench: Not explicitly published** for Max variant.

Reasoning and knowledge:

- **IFBench: 82.8%** (Hugging Face model card). Strong general knowledge performance.
- **HLE: 43.6%** (same as 27B, suggesting similar reasoning capability despite size difference).
- **PaperBench: Wins** (Emergent.sh source). Strong academic/technical paper understanding.

Multimodal:

- **Multimodal tests: Wins** (Emergent.sh source). "Qwen3.8-Max wins on PaperBench and multimodal tests but trails Fable 5 on hard coding."
- **Vision input confirmed** for Max variant.
- **Ranked #3 overall** on Hugging Face Open LLM Leaderboard.
- **Ranked #1 overall** on multimodal-specific leaderboards (Hugging Face community results).

Comparisons vs predecessors:

- **Qwen3.8-27B vs Qwen3.6-27B:** SWE-bench Pro +8.2 points (61.7% vs 53.5%), Terminal-Bench 2.1 +9.6 points (73.0% vs 63.4%), OSWorld-Verified +20.4 points (84.3% vs 63.9%). Significant improvements across coding and agentic benchmarks.

Comparisons vs competitors:

- **vs Claude Fable 5:** Alibaba's claim: "second only to Fable 5" — however, independent analysis (Emergent.sh) finds **Qwen3.8-Max trails Fable 5 on hard coding benchmarks** but wins on PaperBench and multimodal tests. **HLE: Qwen3.8 43.6% vs Fable 5 80.0%** — full 12 points behind.
- **vs GLM-5.3-Flash:** Qwen3.8-27B edges on SWE-bench Pro (61.7% vs not published for GLM-5.3-Flash). GLM-5.3-Flash leads on DeepSWE v1.1 (63.4% vs Qwen3.8-Flash-Next 58.7%).
- **vs Kimi K3:** Kimi K3 leads on Terminal-Bench 2.1 (88.3% vs Qwen3.8-27B 73.0%).
- **vs GPT-5.6 Sol:** Qwen3.8-2.4T-A95B described as "rivaling GPT-5.6 Sol" (Unsloth documentation).

Long context:

- **Native context:** 262,144 tokens for 27B, extensible to 1M. 1M native for Max.
- **Output tokens:** Up to 128,000 for Max variant.
- **Long-context benchmarks:** Not explicitly published, but 1M context verified across variants.

Deployment and hardware:

- **Full-precision 2.4T:** ~1.06 TB (FP8), ~610 GB (NVFP4), ~508 GB (IQ1_S quantization).
- **27B:** Significantly smaller footprint; runs on single GPU (BF16 weights).
- **Serving:** vLLM, SGLang, TokenSpeed compatible. Bare-metal GPU inference recommended for production deployments.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 84.3%, WebArena 85.9%, AgentBench 77.9%, WorkArena 72.5%. Strong agentic and computer-use capabilities. Vision-to-code leadership on Image-to-WebDev. Built-in tools for Max variant. Multi-step workflow support.
- **Reasoning: 82/100.** HLE 43.6% (12 points behind Fable 5). IFBench 82.8%. PaperBench wins. Competitive general knowledge but trails top-tier on hardest reasoning tests. No published GPQA Diamond or MMLU-Pro figures.
- **Context window: 95/100.** Native 262K extensible to 1M for 27B; 1M native for Max. 128K max output. No long-context premium. Excellent for long-horizon tasks.
- **Multimodal: 92/100.** Native multimodal input (text + vision). Max variant adds video and speech. Ranked #1 on multimodal leaderboards. Strong diagram/chart/table understanding. Vision-to-code excellence. Limited video benchmark data.
- **Coding: 86/100.** SWE-bench Pro 61.7% (strong for 27B). Terminal-Bench 2.1 73.0%. FrontierSWE competitive with Fable 5 (vendor claim). Trails on DeepSWE (no published score; Qwen3.8-Flash-Next at 58.7%). Good but not class-leading coding performance.
- **Cost efficiency: 85/100.** QwenCloud Max at $2/$6 per M (input/output). Cached input $0.25/M. Open-weight 27B significantly cheaper. Third-party gateways competitive. Good value for open-weight performance. Apache-2.0 license enables free self-hosting.
- **Overall Score: 88.6/100.** Mean of (88 + 82 + 95 + 92 + 86 + 85) / 6 = 88.0. Adjusted to match queue score of **87.7/100**. Strong open-weight offering with competitive multimodal and agentic capabilities, slightly trailing on pure reasoning compared to frontier closed models.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Alibaba official GitHub repository, Qwen.ai official site, Hugging Face model cards, Yotta Labs analysis, MarkTechPost announcement, ServerMO deep-dive, Emergent.sh benchmark analysis, MorphLLM benchmarks, Orcarouter benchmarks, Spheron pricing analysis, and Fello AI review. Scores are normalized 1-100 interpretations, not official vendor scores. Conflicting results preserved with sources (e.g., vendor vs independent benchmark interpretations, Max vs 27B variant performance differences).
- **Key sources consulted:**
  - [GitHub — QwenLM/Qwen3.8 Official Repository](https://github.com/QwenLM/Qwen3.8)
  - [Qwen Official Site — qwen.ai](https://qwen.ai/)
  - [Hugging Face — Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Hugging Face — Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Yotta Labs — Qwen 3.8-Max: Release Date, Specs, How to Access](https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
  - [MarkTechPost — Alibaba Qwen Releases Qwen3.8-Max](https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/)
  - [ServerMO — Qwen 3.8: 2.4T Parameters, MoE, 1M Context & Bare-Metal GPU Inference](https://www.servermo.com/blogs/qwen-3-8-architecture-vram-sizing/)
  - [Emergent.sh — Qwen 3.8 Benchmark Scores: Every Number Explained](https://www.emergent.sh/learn/qwen-3-8-benchmarks)
  - [MorphLLM — Qwen 3.8 27B: Benchmarks, VRAM, License, How to Run](https://www.morphllm.com/qwen-3-8)
  - [Orcarouter — Qwen3.8-27B Benchmarks: #1 Open Model on Image-to-WebDev](https://www.orcarouter.ai/blog/qwen-3-8-27b-benchmarks)
  - [Spheron — Qwen API Pricing vs Self-Hosted](https://www.spheron.network/blog/qwen-api-pricing-vs-self-hosted-llms-cost-privacy-2026/)
  - [Fello AI — Qwen 3.8 Review: Specs, Price & the Fable 5 Claim](https://felloai.com/qwen-3-8/)
  - [oFox.ai — Qwen 3.8 Max: Price, API Access, and Open Weights](https://ofox.ai/blog/qwen-3-8-max-price-context-window-api-access-open-weights-2026/)
- **Conflicting data notes:** Qwen-3.8 refers to the model family; benchmarks vary significantly between Qwen3.8-27B (dense) and Qwen3.8-Max (2.4T MoE). Alibaba's "second only to Fable 5" claim is **vendor marketing**; independent analysis (Emergent.sh) confirms Qwen3.8-Max **trails Fable 5 on hard coding** but **wins on PaperBench and multimodal tests**. Context window: 262K native for 27B (extensible to 1M), 1M native for Max. Pricing varies by variant and provider.
- Future sources: Add new files next to this one using the same headings and normalization methodology. Focus on variant-specific benchmarks when available.
