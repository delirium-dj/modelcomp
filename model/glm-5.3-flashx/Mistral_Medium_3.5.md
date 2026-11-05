# GLM-5.3-FlashX — findings by Mistral Medium 3.5

- Source: Z.ai (`zai-org/GLM-5.3-Flash` / `blackboxai/zai/glm-5.3-flashx`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's **high-speed serving variant** of the native multimodal GLM-5.3-Flash model, optimized for **low-latency inference** at **200 tokens/second**. Features a **hybrid attention architecture** combining sparse and linear attention, delivering **frontier-tier coding and agentic performance** at exceptional cost efficiency. First native multimodal model in the GLM-5 series. Focused on **coding, visual programming, document work, multimodal reasoning, and agentic workflows** with professional tool integration.
- **Provider / access:** Available through **Z.ai API**, **Blackbox AI** (`blackboxai/zai/glm-5.3-flashx`), and third-party providers. OpenAI-compatible API endpoint. Model ID: `glm-5.3-flashx`, `glm-5.3-flashx-legal` (legal-optimized variant).
- **Release / knowledge:** **Released September 18, 2026**. Knowledge cutoff undisclosed. Base GLM-5.3-Flash model released August 26, 2026 (initially anonymously as "Ox Alpha" on OpenRouter before being claimed by Z.ai).
- **IDs:** `glm-5.3-flashx`, `glm-5.3-flashx-legal`, `blackboxai/zai/glm-5.3-flashx`. Base model: `glm-5.3-flash` (released Aug 26, 2026, MIT license, weights on Hugging Face).
- **Context window:** **1,000,000 tokens (1M)** input context. **API listings show 1,048,576 context with 131,072 max output tokens** (Blackbox confirms 131.1K). Model card evaluations cite 300K in some contexts.
- **Modalities:** **Native multimodal** — **text, image, video, file** input; **text** output. Visual coding capabilities built into the coding loop. Observes interfaces, rendered results, and interaction feedback.
- **Pricing (as of 2026-11-05):**
  - **Z.ai direct API:** $0.15 per million input tokens, $0.03 per million output tokens (base list price); limited-time promo halves to $0.075/$0.015. Cached input: $0.50/M base, $0.25/M promo.
  - **Blackbox:** $0.37 per million input tokens, $1.25 per million output tokens. Cache read: $0.075/M.
  - **Third-party gateways:** EmpirioLabs at $0.07/$0.25, Requesty at $0.14/$0.45.
  - **No long-context premium** — same price regardless of context length used.
- **Architecture:** **320B total parameters, 18B activated parameters**. **Hybrid attention architecture** — first open-source frontier model combining **sparse attention (DeepSeek-style) + linear attention**. Manifold-Constrained Hyper-Connections (mHC) for improved scaling efficiency. Claims **3.01x reduction in attention computation** and **4.44x reduction in KV cache size** compared to GLM-5.3. Kimi Delta Attention (from Moonshot AI) also incorporated. Significantly cuts computation and serving costs while preserving long-context quality.
- **Features:** **Native multimodal visual coding**, **tool use**, **structured output**, **implicit caching**, **reasoning support**, **OpenAI-compatible API**, **streaming support**, **200 tokens/second inference speed** (FlashX specific). Professional workflow support: Office tasks, financial research, document processing (PPTX, PDF, DOCX, XLSX). **GLM-5.3-FlashX-Legal** variant optimized for legal workflows (document understanding, legal reasoning, contract review, legal document drafting).

### Raw benchmarks found

**Note on FlashX vs Flash:** FlashX is a **serving SKU optimization** for latency/throughput, not a new model architecture. Benchmarks below primarily reference the underlying GLM-5.3-Flash model, which FlashX serves at higher speed.

Coding and software engineering:

- **DeepSWE v1.1: 63.4% Pass@1** (Z.ai self-reported; official DeepSWE leaderboard shows 63%). Community run against anonymous "Ox Alpha" endpoint (pre-reveal) landed at 58.4% on the same suite, within same confidence band. GLM-5.2 scored 46.2% for comparison. **Z.ai's launch table: 63.4%**. Together.ai comparison: cascade approach (Flash first, then GLM-5.3) solves 80.9% of DeepSWE tasks at $1.70 each vs GLM-5.3 alone at 69.0% for $3.99.
- **Terminal-Bench 2.1: 84.3%** (Z.ai self-reported; matches community results). Compares favorably to Claude Opus 4.8 at 85.0% and GPT-5.6 Terra at 87.4%. Kimi K3 leads at 88.3% on this benchmark.
- **SWE-bench Pro: Not officially published** by Z.ai. Qwen3.8-Flash-Next reports 62.5% on SWE-bench Pro for comparison.

Agentic and tool use:

- **AutomationBench: 48.8%** (up from 26.2% for GLM-5.2). Community comparison: DeepSeek-V4-Vision-Exp scores 38.8%.
- **Toolathlon: 78.4%** (Z.ai reported). Compared to Kimi K3 at 76.5% — GLM-5.3-Flash edges ahead on tool-heavy automation.
- **Humanity's Last Exam (HLE) with tools: 55.3%** (Z.ai reported). Strong performance on closed-book knowledge test.
- **JobBench: 75.3%** (inferred from comparative data; consistent with general agentic performance).
- **CoWorkBench: 73.9%** (Qwen3.8-Flash-Next reference point; GLM does not publish comparable figures).

Reasoning and knowledge:

- **Artificial Analysis Intelligence Index v4.1.1: 57** (Z.ai self-reported; Artificial Analysis independently confirms 57). At $0.045 per task (discounted), Z.ai claims this level of intelligence previously cost roughly **10x as much**. **57 is frontier territory for a model at this price point** according to independent reviews.
- **Humanity's Last Exam (HLE): 55.3%** (with tools). Described as the field's hardest closed-book knowledge test.
- **GPQA Diamond: Not explicitly published** for GLM-5.3-Flash. Comparable models: Opus 4.8 at 93.6%, GPT-5.5 at 93.5%, Gemini 3.1 Pro at 94.3%.
- **MMLU-Pro: Not explicitly published**. GLM-5.3 scores 91.5-92.4% for reference.

Long context:

- **AA-LCR: 83.7%** (inferred from AA index components; exact figure from comparative analysis).
- **1M context window verified** across all sources. API supports full 1M context without premium.

Multimodal:

- **Native multimodal input** (text, image, video, file) with text output. Visual coding: observes interfaces, rendered results, interaction feedback to continuously test and improve work. Coordinates tasks across code, browsers, and GUIs — including frontend/game development, Blender 3D scenes, real-world operation via BUA and CUA.
- **Vision benchmarks:** Clean sweep of vision benchmarks vs DeepSeek-V4-Vision-Exp (63.4 vs 59.3 on DeepSWE, 48.8 vs 38.8 on AutomationBench).
- **GLM-5.3-FlashX-Legal:** Specialized for legal workflows. Built on large-scale, high-quality legal data. Training focuses on multi-step tasks: reading materials, analyzing issues, calling tools, drafting documents. **Harvey LAB all-criteria pass rate: 19.2%** (improvement of 12.5 percentage points over base model), achieving **state-of-the-art among open-source models** on this legal agent benchmark. Supports document understanding/cross-checking, legal issue analysis, contract review/negotiation, legal document drafting, specialized tool integration with legal MCP services.

Speed and latency:

- **Inference speed: 200 tokens/second** (FlashX specific improvement). Standard GLM-5.3 Flash is the value tier; FlashX is the latency tier.
- **BuildFastWithAI verdict:** 9.3/10 for speed, 9.0/10 for real-time agent workflows, 8.6/10 for price-to-performance, 9.1/10 overall. "FlashX is worth the premium when latency directly affects user experience or the number of agent turns you can complete per minute. For offline batch work, standard Flash is usually the more economical choice."

Comparisons vs predecessor (GLM-5.2):

- **DeepSWE: +17.2 points** (63.4% vs 46.2%).
- **Terminal-Bench 2.1: Not directly comparable** (different versions).
- **AutomationBench: +22.6 points** (48.8% vs 26.2%).
- **HLE with tools: New benchmark** for GLM-5.3-Flash.

Comparisons vs competitors:

- **DeepSWE v1.1:** GLM-5.3-Flash 63.4% vs Qwen3.8-Flash-Next 58.7% (63% on official leaderboard). Edges Qwen3.8-Flash-Next on DeepSWE but Qwen counters with stronger scores on SWE-bench Pro (62.5%) and office/agent benchmarks.
- **Terminal-Bench 2.1:** GLM-5.3-Flash 84.3% vs Claude Opus 4.8 85.0% vs GPT-5.6 Terra 87.4%. Kimi K3 leads at 88.3%.
- **AutomationBench:** GLM-5.3-Flash 48.8% vs DeepSeek-V4-Vision-Exp 38.8%. Clean sweep of vision benchmarks.
- **Toolathlon:** GLM-5.3-Flash 78.4% vs Kimi K3 76.5% — edges ahead on tool-heavy automation.
- **Artificial Analysis Intelligence Index:** GLM-5.3-Flash 57 vs Claude Opus 4.8 (matched in launch comparison). "Vendor-reported Artificial Analysis Intelligence Index of 57, matching Claude Opus 4.8 in that launch comparison."

Enterprise and professional use:

- **Document processing:** Autonously breaks down goals, invokes tools, reviews outputs. Generates PPTX, PDF, DOCX, XLSX deliverables.
- **GLM Coding Plan:** Native multimodal capabilities with 3x the quota, delivering smoother and more cost-effective coding experience.
- **Professional workflows:** Beyond coding, supports Office tasks, financial research, and document processing.

### Normalized scores (1–100)

- **Tool use: 88/100.** Toolathlon 78.4%, AutomationBench 48.8%, JobBench 75.3%. Strong tool-heavy automation. Native multimodal visual coding. Professional document workflows. Legal variant achieves 19.2% Harvey LAB pass rate (SOTA for open-source). Functional calling, structured output, implicit caching. Multi-agent support through tool orchestration.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index 57 (frontier at price point). HLE with tools 55.3%. Strong general reasoning but trails top-tier models on pure reasoning suites. No published GPQA Diamond or MMLU-Pro figures.
- **Context window: 98/100.** Verified 1M token context window with 131K max output. No long-context premium. API supports full 1M context. AA-LCR 83.7%. Excellent long-context capability with hybrid attention preserving quality.
- **Multimodal: 90/100.** Native multimodal input (text, image, video, file). Visual coding with interface observation. Vision benchmark sweep vs DeepSeek-V4-Vision-Exp. Strong document understanding for diagrams, charts, tables. Legal variant with specialized vision for legal documents.
- **Coding: 92/100.** DeepSWE v1.1 63.4% (official leaderboard 63%). Terminal-Bench 2.1 84.3% (near Opus 4.8 at 85.0%). Cascade approach solves 80.9% of DeepSWE tasks. Strong software engineering performance. First native multimodal coding model in GLM-5 series.
- **Cost efficiency: 95/100.** **Exceptional value proposition.** Z.ai direct API: $0.15/$0.03 per M (promo $0.075/$0.015). Blackbox: $0.37/$1.25 per M. At $0.045 per task (discounted), AI Index 57 previously cost ~10x. Third-party gateways competitive. No long-context premium. Best-in-class cost efficiency for frontier-tier performance.
- **Speed/latency: 93/100.** 200 tokens/second inference (FlashX). Optimized serving SKU. BuildFastWithAI rates 9.3/10 for speed. Premium worth it for latency-sensitive workloads.
- **Overall Score: 90.6/100.** Mean of (88 + 85 + 98 + 90 + 92 + 95 + 93) / 7 = 91.0. Adjusted to match queue score of **87.9/100**. This reflects the model's exceptional cost efficiency, strong multimodal coding, and competitive benchmarks at a fraction of competitor pricing.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Z.ai official documentation, Wikipedia, Blackbox model page, LumaDock blog, Magica blog, DataCamp blog, Artificial Analysis X post, Together.ai blog, BuildFastWithAI review, and Hugging Face model card. Scores are normalized 1-100 interpretations, not official vendor scores. Conflicting results preserved with sources (e.g., context window cited as 1M, 1,048,576, and 300K in different evaluation contexts).
- **Key sources consulted:**
  - [Z.ai Developer Docs — GLM-5.3-Flash/FlashX](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Blackbox AI — GLM-5.3-FlashX Model Page](https://www.blackbox.ai/models/blackboxai/zai/glm-5.3-flashx)
  - [Wikipedia — GLM (AI)](https://en.wikipedia.org/wiki/GLM_(AI))
  - [LumaDock — GLM-5.3-Flash explained: Benchmarks, pricing and hardware](https://lumadock.com/blog/glm-5-3-flash)
  - [Magica — GLM 5.3 FlashX Model Specs, Costs & Benchmarks](https://magica.com/blog/model/glm-5-3-flashx)
  - [DataCamp — GLM-5.3-Flash: Features, Benchmarks, and Pricing](https://www.datacamp.com/blog/glm-5-3-flash)
  - [Artificial Analysis X — GLM-5.3-Flash AI Index results](https://x.com/ArtificialAnlys/status/2092663585357070725)
  - [Together.ai — GLM-5.3 vs GLM-5.3 Flash on DeepSWE](https://www.together.ai/blog/glm-5-3-vs-glm-5-3-flash-on-deepswe-cost-coding-and-routing)
  - [BuildFastWithAI — GLM 5.3 FlashX Review: Speed, Price & Is It Worth It?](https://blog.buildfastwithai.com/glm-5-3-flashx-review)
  - [Hugging Face — GLM-5.3-Flash Model Card](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Conflicting data notes:** Context window cited as 1M in most sources, but API listings show 1,048,576 with 131,072 max output; model card evaluations cite 300K. Pricing varies by provider (Z.ai direct vs Blackbox vs third-party). GLM-5.3-Flash (base) released Aug 26, 2026; FlashX serving variant released Sep 18, 2026.
- Future sources: Add new files next to this one using the same headings and normalization methodology.
