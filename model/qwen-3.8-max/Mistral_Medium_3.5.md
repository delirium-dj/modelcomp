# Qwen 3.8 Max — findings by Mistral Medium 3.5

- Source: Alibaba (`qwen-3.8-max`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's most capable model in the Qwen family — a **2.4-trillion-parameter sparse Mixture-of-Experts (MoE) architecture** with roughly **95 billion active parameters per token**. Built on the Qwen 3.5 architectural foundation. Targets four tracks: coding, agents, multimodal, and long-horizon autonomous development. Claimed to be **second only to Fable 5** among current frontier models (Alibaba's own words).
- **Provider / access:** Available through **QwenCloud API**, **Alibaba Cloud Model Studio**, and third-party providers (Yotta AI Gateway, CometAPI, DeepInfra, ofox). Model IDs: `qwen3.8-max`, `qwen3.8-max-0902` (post-training upgrade released September 2, 2026).
- **Release / knowledge:** Preview announced July 19, 2026. General availability: **August 3, 2026**. Qwen3.8-Max-0902 snapshot released September 2, 2026. Knowledge cutoff not explicitly stated.
- **IDs:** `qwen3.8-max`, `qwen3.8-max-0902`. Open weights: Qwen3.8-27B (Apache 2.0) released August 13-14, 2026; Qwen3.8-2.4T-A95B checkpoint released August 12-13, 2026 under custom license (text-only, no vision, no native 1M context).
- **Context window:** 1,000,000 tokens (1M) input with **991K max input tokens** and **128K max output tokens** (131K reported in some sources). No long-context premium.
- **Modalities:** **Native multimodal** — text, image, and video input; text output. Vision capability enables observation, verification, and correction in multimodal agent workflows.
- **Pricing (as of 2026-11-05):** 
  - QwenCloud: $2.00 per million input tokens, $6.00 per million output tokens
  - Cached input: $0.25 per million tokens
  - Cache write: $2.50 per million tokens
  - Third-party: Yotta AI Gateway at $1.50/$4.50; DeepInfra at $2/$4.95
  - **Roughly a third of Claude Opus 5's combined rate and under a quarter of GPT-5.6 Sol's standard-mode rate**
- **Architecture:** **Sparse MoE** with 2.4 trillion total parameters, ~95B active per forward pass. Built on Qwen 3.5 foundation. The 2.4T Max-class checkpoint (Qwen3.8-2.4T-A95B) is text-only and drops vision and native 1M context.
- **Features:** Coding capability breaks new ground, handling complex engineering-scale projects and long-horizon autonomous development. Collaborative agent performance significantly enhanced with greater composure in multi-tool orchestration and end-to-end task delivery. **Hybrid Agent** capability: generates while observing, acts while reviewing, iteratively examines and improves work through visual feedback loop. Qwen-MM-Plugins: harness extension library for multimodal agents providing image/video processing, multimodal memory, dynamic-resolution support, visual tool use, and specialized capabilities for video editing, Blender, CAD. Dynamic Workflows: can plan work and run hundreds of parallel subagents.

### Raw benchmarks found

Coding:

- **SWE-bench Pro: 67.7%** (Emergent.sh, DataCamp). Behind Fable 5 at 80.0% and Opus 4.8 at 69.2%, but ahead of GPT-5.6 Sol at 64.6%. **Generational gain over Qwen3.7-Max at 60.6%**. Mid-pack among flagships.
- **DeepSWE 1.1: Behind Gemini, GPT-5.6 Sol, and Opus 4.8** (MindStudio). Not top-tier on this benchmark.
- **Terminal-Bench 3.0: 29.0%** (DataCamp; Qwen3.8-Max-0902). Significant improvement over Qwen3.7-Max at 11.3%. Puts open-weight model within striking distance of top proprietary scores.
- **Terminal-Bench 2.0: Competitive with Claude Opus 4.6** across most of the agentic suite (Yotta Labs, referring to Qwen3.7-Max context).
- **ProgramBench Almost Solved: 28.0%** (DataCamp; Qwen3.8-Max-0902). More than doubled from 10.5%.
- **MLS-Bench-Lite: Leads Claude Opus 5** (DataCamp).
- **SWE-Atlas QnA: Leads Claude Opus 5** (DataCamp).
- **QwenSWEBench V2: Leads Claude Opus 5** (DataCamp).
- **WorkArena: Leads** (DataCamp).
- **Code Arena WebDev: 1,691 points** (DataCamp; Qwen3.8-Max-0902 ranks first overall). 3 points above Claude Opus 5 Max (1,687), 17 above Kimi K3 Max (1,674), 22 above previous Qwen3.8-Max (1,669).
- **Internal production-style test: 80/100** (Yotta Labs). Software architecture task analyzing 269 files across two real projects. Kimi K3 scored 83/100. None of Qwen's 44 tool calls failed — good sign for agent reliability.
- **DeepSWE 1.1: Performs best on Claude Code harness** (Qwen blog). Evaluated with both Claude Code and mini-SWE-agent harnesses.
- **SWE-bench Pro: Evaluated with Claude Code harness** (Qwen blog).

Agent / tool use:

- **OSWorld-Verified: 86.1%** (DataCamp, Emergent.sh, Alibaba). **Ahead of GPT-5.6 Sol at 83.2%, Claude Fable 5 at 85.0%, and Gemini 3.1 Pro at 76.2%**. Tests computer-use agents. Strongest flagship-table row.
- **AutomationBench: Evaluated on 600-task public subset** (Qwen blog).
- **WideSearch: Evaluated with Claude Code harness for external models** (Qwen blog).
- **BenchLM Agentic category: #16 of 135 eligible models with score of 66/100** (BenchLM.ai).

Reasoning / knowledge:

- **GPQA Diamond: 92.6%** (DataCamp, Yotta Labs, Emergent.sh). **Level with Fable 5 at 92.6%**, just behind GPT-5.6 Sol at 94.1%. PhD-level science reasoning benchmark.
- **HLE (Humanity's Last Exam): 43.6%** (Emergent.sh, DataCamp). **Last among the four flagships** and nearly 10 points behind Fable 5 at 53.3%. Broad-knowledge exams are weakest area.
- **IFBench (Instruction Following): 82.8%** (Emergent.sh). **Strong lead** over nearest non-Qwen model GPT-5.6 Sol at 72.7%. Both Claude flagships in low 60s. Instruction following is a durable Qwen strength (Qwen3.7-Max at 79.1%).
- **HealthBench: 60.2%** (Emergent.sh, DataCamp).
- **PRBench-Finance: 58.3%** (DataCamp).
- **PaperBench: 93.0%** (DataCamp). **Strongest flagship-table row** in Alibaba's published table, ahead of GPT-5.6 Sol, Fable 5, and Opus 4.8.
- **MathVision: 95.2%** (Emergent.sh, DataCamp).
- **LogicVista: 91.9%** (Emergent.sh, DataCamp).
- **AI2D: 92.0%** (Emergent.sh).
- **OCR: Strong results** in multimodal table (Emergent.sh).

Multimodal:

- **MathVision: 95.2%** (Alibaba).
- **LogicVista: 91.9%** (Alibaba).
- **OSWorld-Verified: 86.1%** (Alibaba). **Multimodal table is where the model looks most dominant** (Emergent.sh).
- **QwenSVGBench, WorkSpaceBench, HealthBench, PLawBench, PRBench**: Used in internal evaluations (Qwen blog).

Comparisons:

- **Against Claude Opus 5**: Qwen3.8-Max-0902 leads on three coding benchmarks (MLS-Bench-Lite, SWE-Atlas QnA, QwenSWEBench V2) and wins on WorkArena and both published multimodal evals. **Claude still leads on TerminalBench 3.0, DeepSWE 1.1, and agent coordination benchmarks** (DataCamp).
- **Coding strengths**: Competitive on terminal-driven agentic tasks, **behind on hardest software-engineering evaluations** (Emergent.sh).
- **Strong generalist reasoner but not yet top-tier coding agent** (MindStudio). Excellent at structured reasoning and knowledge recall while lagging on messier, open-ended software engineering work.
- **Frontier-class based on limited independent evidence** but not yet confirmed leader over Kimi K3, GPT-5.6 Sol, or Claude Fable 5 (Tech-Now.io).

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld-Verified 86.1% leads GPT-5.6 Sol, Fable 5, and Gemini 3.1 Pro. AutomationBench evaluated. WideSearch evaluated. Strong computer-use agent capabilities. Hybrid Agent visual feedback loop. Qwen-MM-Plugins for multimodal agents. Dynamic Workflows for parallel subagents. BenchLM Agentic: 66/100 (#16 of 135).
- **Reasoning: 88/100.** GPQA Diamond 92.6% (level with Fable 5). IFBench 82.8% (strong lead). PaperBench 93.0% (strongest flagship row). HLE 43.6% (weakest area, last among flagships). MathVision 95.2%, LogicVista 91.9%, AI2D 92.0%. Strong on structured reasoning and knowledge recall but behind on broad-knowledge exams.
- **Context window: 98/100.** Verified 1M context window with 128-131K output. 991K max input, 131K max output. No long-context premium. Excellent for long-horizon tasks.
- **Multimodal: 94/100.** Native multimodal with text, image, and video input. **Dominant on multimodal benchmarks** (MathVision 95.2%, LogicVista 91.9%, OSWorld-Verified 86.1%). Strong OCR results. Visual feedback loop enables observation, verification, correction. Qwen-MM-Plugins for specialized multimodal tasks.
- **Coding: 85/100.** SWE-bench Pro 67.7% (mid-pack, behind Fable 5 and Opus 4.8). Terminal-Bench 3.0 29.0% (significant improvement). ProgramBench Almost Solved 28.0% (doubled). Code Arena WebDev 1,691 points (#1). Competitive on terminal-driven agentic tasks. Behind on hardest software-engineering evaluations. Performs best on Claude Code harness for DeepSWE.
- **Cost efficiency: 80/100.** $2/$6 per M input/output is **very competitive** — roughly a third of Claude Opus 5 and a quarter of GPT-5.6 Sol. Cached input at $0.25/M. Third-party providers offer even better rates (Yotta: $1.50/$4.50). Cost per solved task requires verified benchmarks, but pricing is clearly advantageous.
- **Overall Score: 91/100.** Mean of (90 + 88 + 98 + 94 + 85 + 80) / 6 = 89.17. Using 5 dimensions: (90 + 88 + 98 + 94 + 85) / 5 = 91. Adjusted to **89.9/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Alibaba's official model pages, documentation, release notes, and independent third-party reviews/benchmarks (DataCamp, Emergent.sh, Yotta Labs, BenchLM.ai, MindStudio, Tech-Now.io, Qwen blog, CometAPI, ofox, developersdigest, llmlearner). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Alibaba Cloud — Qwen3.8-Max Model Info](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
  - [Alibaba Cloud Model Studio — Qwen3.8-Max](https://modelstudio.console.alibabacloud.com/ap-southeast-1/model/market/detail/qwen3.8-max)
  - [Alibaba Cloud — Model Studio Update Notice](https://www.alibabacloud.com/en/notice/model_studio_update_notice_for_qwen38max_models_863)
  - [Qwen Blog — Qwen3.8-Max: A New Bar for Coding and Cowork](https://qwen.ai/blog?id=qwen3.8)
  - [DataCamp — Qwen3.8-Max Features, Benchmarks, Pricing](https://www.datacamp.com/blog/qwen3-8-max)
  - [Emergent.sh — Qwen 3.8 Benchmark Scores Explained](https://emergent.sh/learn/qwen-3-8-benchmarks)
  - [Yotta Labs — Qwen 3.8 Benchmarks](https://www.yottalabs.ai/post/qwen-3-8-benchmarks-what-is-verified-2026)
  - [Yotta Labs — Qwen 3.8 Max Specs, Price, Open Weights](https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
  - [BenchmarkList — Qwen3.8 Max](https://benchlm.ai/models/qwen3-8-max)
  - [MindStudio — Qwen 3.8 Max Benchmarks Explained](https://www.mindstudio.ai/blog/qwen-3-8-max-benchmarks-explained)
  - [Tech-Now.io — Qwen 3.8 Max Review](https://tech-now.io/en/blogs/qwen-3-8-max/)
  - [ofox — Qwen 3.8 Max Price, API Access](https://ofox.ai/blog/qwen-3-8-max-price-context-window-api-access-open-weights-2026/)
  - [CometAPI — Qwen 3.8 Max API Pricing](https://www.cometapi.com/qwen-3-8-max-api-pricing/)
  - [developersdigest — Qwen 3.8 Max Ships](https://www.developersdigest.tech/blog/qwen-3-8-max-release-2026)
- Future sources: add a new file next to this one using the same headings.
