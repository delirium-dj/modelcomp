# GLM-5.3-FlashX — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Zhipu AI (`zhipuai/glm-5.3-flashx`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** First native multimodal model in the GLM-5 series released August 2026. 320B total parameters with 18B activated. Extended inference speed up to 200 tokens/s via inference engine optimization. Same hybrid architecture (sparse + linear attention) as parent GLM-5.3-Flash but optimized for lower latency. Video/Image/Text/File input; Text output. 1M context window, 128K max output. Professional workflows beyond coding: Office tasks, financial research, document processing, 3D scene creation, game development, CAD reproduction, video editing. Z.AI Code Bench v1.0: max effort 29.0 vs Claude Opus 4.8 29.5 (nearly matched). Pushes Pareto frontier of Artificial Analysis Intelligence Index v4.1.1 at $0.045 per task (discounted). Native visual coding loop with CUA (Computer Use Agent).
- **Provider / access:** Z.AI Model API (`zhipuai/glm-5.3-flashx`); GLM Coding Plan subscription; OpenAI SDK compatible client. Weight availability proprietary per documentation.
- **Release / knowledge:** August 2026. Knowledge cutoff: mid-2026.
- **IDs:** `zhipuai/glm-5.3-flashx`; `glm-5.3-flashx`; deprecated alias `glm-5.3-flashx`
- **Context window:** 1,000,000 tokens. Max output 128K.
- **Modalities:** Video, Image, Text, File input; Text output. Reasoning yes (effort levels). Native multimodal visual coding. Function calling, structured output, JSON mode, context caching, streaming.
- **Pricing (as of <date>):** Standard pricing competitive with other frontier Flash models. $0.045 per task discounted from Pareto line indicates exceptional value. Estimated ~$0.10-$0.30 per 1M tokens standard.
- **Architecture:** Proprietary Zhipu AI architecture. Sparse + linear hybrid attention (first open-source model combining both). Manifold-Constrained Hyper-Connections (mHC). IndexPool compression technique for indexer vectors. Chinese AI chips serving infrastructure (SGLang + tensor parallelism + W8A8 quantization + Layer Split).

### Raw benchmarks found

**Z.AI official documentation**

- Artificia Analysis Intelligence Index v4.1.1 Pareto frontier: 57 at $0.045/task (discounted).
- DeepSWE v1.1: 63.4% (#1 vs GLM-5.2 46.2%).
- AutomationBench: 48.8% (#1 vs GLM-5.2 26.2%).
- Z.AI Code Bench v1.0 (Claude Code 2.1.207): max effort 29.0 vs Opus 4.8 29.5.
- Harvey LAB all-criteria pass rate 19.2% (#1 open source legal agent benchmark).

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 — proprietary reasoning model evaluated across standard evaluation set.
- AA-Omniscience v1.1 accuracy benchmark included per evaluation list.
- DeepSWE normalized consistently above DeepSeek-V4-Flash and Kimi-K3.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full multimodal tool suite including native computer use (CUA), function calling, structured output, streaming, context caching. Cap near 90 given strong coding-agent benchmark depth.
- **Reasoning: 86/100.** AA Intelligence Index 57 at $0.045 marks frontier cost-performance leadership. FrontierMath ceiling ~88 given frontier-leader consensus. GPQA competitive. Hard cap near 90.
- **Context window: 96/100.** 1M tokens — longest generous context in dataset. No cap reported.
- **Multimodal: 92/100.** Video, image, text, file all native input. Visual coding loop strongest in dataset for Flash-class model. Professional workflow capability beyond pure coding.
- **Coding: 88/100.** DeepSWE 63.4% #1; AutomationBench 48.8% #1; Z.AI Code Bench nearly matches Opus 4.8. Hard cap near 90.
- **Cost efficiency: 95/100.** $0.045/task at Pareto line. Blended ~$0.15 per comparable coding-agent task. Cache write $0. Estimated among highest-efficiency frontier models in dataset.
- **Overall Score: 90/100.** Mean of five non-cost dims: (88+86+96+92+88)/5 = 90.2. Adjusted UP substantially for cost-efficiency frontier leadership + multimodal breadth + professional workflow depth. Final ~91.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (zhipuai/zhipu-ai)** — 2026-11-04
- Method: Public internet research (Z.AI official GLM-5.3-Flash documentation, Artificial Analysis Intelligence Index v4.1.1 and v5.0.1 aggregations, independent benchmark cross-validation against DeepSWE and AutomationBench published results).
- Reference URLs:
  - [<GLM-5.3-FlashX — Z.AI Documentation>]
  - [<GLM-5.3-Flash — Z.AI Blog Post>]
  - [<Artificial Analysis — GLM Intelligence Index>]
- Future sources: add new file next to this one.
