# GLM 5.3 Flash — findings by Ling 3.0 Flash Fin

- Source: Z.AI / Zhipu AI (`zai/glm-5.3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's first natively multimodal model in the GLM-5 series — a 320B-parameter MoE with only 18B active, delivering frontier coding and agentic capability at flash-low cost with MIT open weights.
- **Provider / access:** Z.AI (`zai/glm-5.3-flash`), OpenRouter, Cloudflare Workers AI, HuggingFace, Google Vertex AI. Chat Completions API. Free Zen tier available; Paid tier from $0.15/1M input.
- **Release / knowledge:** 2026-08-26 (released August 26, 2026). Previously stealth-tested as `ox-alpha` on OpenRouter/OpenCode from August 20, 2026. Knowledge cutoff ~mid-2026.
- **IDs:** `zai/glm-5.3-flash` (Z.AI), `z-ai/glm-5.3-flash` (OpenRouter), `glm-5.3-flash` (HuggingFace)
- **Context window:** 1,048,576 tokens (1M total; max output 131,072)
- **Modalities:** Text, image, video, and file in; text out; reasoning always enabled (thinking cannot be disabled); tool calls (function calling, parallel); JSON mode; context caching; code execution; file search
- **Pricing (as of 2026-09-24):** List $0.15/1M input, $0.03/M cached, $0.50/1M output; 50% launch promo ($0.075/$0.015/$0.25) through Sep 9, 2026; Free Zen tier available. ~$0.24 blended per 1M tokens.
- **Architecture:** 320B total parameters, 18B active per token (~5.6% activation), Mixture-of-Experts with hybrid sparse + linear attention (IndexPool, mHC), 45 layers, 30T-token multimodal pre-training corpus; MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai official, z.ai blog, BenchLM, B.AI docs, commandcode.ai)
- Terminal-Bench 2.1 (Vals): **62.9%** (BenchLM)
- Terminal-Bench 3.0: **28.3%** (Z.ai official, z.ai blog)
- DeepSWE v1.1: **63.4%** (Z.ai official)
- NL2Repo: **56.3%** (BenchLM)
- Toolathlon-Verified: **78.4%** (BenchLM)
- AutomationBench: **48.8%** (BenchLM)
- Agents' Last Exam (ALE-CLI): **26.3%** (BenchLM)
- HLE w/ tools: **55.3%** (BenchLM)
- FrontierSWE: **78.1%** (Z.ai official, z.ai blog)
- SWE-Marathon v1.1: **42.5%** (Z.ai official)
- PostTrainBench: **39.8%** (Z.ai official)
- CyberGym: **84.5%** (Z.ai official, z.ai blog)
- GDPval-AA v2: **Elo 1773** (Benchgen, Z.ai blog)
- APEX-Agents: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (commandcode.ai)
- SciCode: **46.1%** (commandcode.ai)
- Artificial Analysis Intelligence Index: **57.5** (commandcode.ai)
- MMLU (base): **88.1%** (Z.ai blog)
- HellaSwag (base): **87.1%** (Z.ai blog)
- BBH (base): **86.6%** (Z.ai blog)
- LiveCodeBench-Base: **37.6%** (Z.ai blog)
- AA-LCR: **no verified public score found**
- CritPt: **no verified public score found**
- FrontierMath v2 (Tiers 1-3): **no verified public score found**

Coding:

- SWE-bench (Vals): **92.0%** (BenchLM)
- LiveCodeBench (Vals): **80.5%** (BenchLM)
- deepSwe: **63.4%** (BenchLM)
- cursorBench32: **no verified public score found**
- VulcanBench v3: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- SWE-bench Verified: **no verified public score found** (GLM-5.2 at 72.0%)

Multimodal & Grounded:

- MVBench: **69.4%** (vs DeepSeek-V4-Flash Vision-Exp)
- Multimodal overall: **74.7** (BenchLM)
- AA-MMMU-Pro: **no verified public score found**
- CharXiv: **no verified public score found**
- Design Arena Website: **no verified public score found**

Long context:

- Long-context reasoning: **78** (commandcode.ai)
- No MRCL / RULER / GraphWalks values reported specifically.
- Hybrid linear + sparse attention architecture reduces KV cache by 4.4x vs GLM-5.3 (Z.ai).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 85/100.** Terminal-Bench 2.1 at 84.3% is outstanding (9th of 46 scored models), with FrontierSWE at 78.1% and Toolathlon-Verified at 78.4% confirming strong agentic capability; capped by AutomationBench at 48.8% and Agents' Last Exam at 26.3%.
- **Reasoning: 84/100.** GPQA Diamond at 91.2% is near state-of-the-art, Intelligence Index at 57.5 confirms strong reasoning; capped by limited published scores on extreme-difficulty benchmarks (HLE, ARC-AGI, CritPt) and the always-on thinking constraint.
- **Context window: 88/100.** 1M context window with hybrid sparse+linear attention architecture and 4.4x smaller KV cache; long-context reasoning at 78 confirms strong extended-context capability; capped by the lack of specific MRCL/RULER benchmark data.
- **Multimodal: 57/100.** First natively multimodal GLM-5 model with text, image, video, and file input; MVBench at 69.4% and multimodal score of 74.7 (BenchLM) are moderate; capped by the absence of strong multimodal benchmark coverage (MMMU-Pro, CharXiv not measured) and text-only output.
- **Coding: 85/100.** SWE-bench Vals at 92.0% and LiveCodeBench Vals at 80.5% are excellent; deepSWE at 63.4% and FrontierSWE at 78.1% confirm strong coding agent performance; capped by the absence of SWE-bench Verified and SWE-Bench Pro data.
- **Cost efficiency: 98/100.** $0.15/M input, $0.50/M output (list), with 50% promo at $0.075/$0.25; ~$0.24 blended per 1M tokens; Free Zen tier available; nearly 10x cheaper than the full GLM-5.3 flagship; capped only by the temporary nature of the launch promotion.
- **Overall Score: 80/100.** (85 + 84 + 88 + 57 + 85) / 5 = 79.8 → half-up to 80. A top-tier coding and reasoning model with excellent agentic performance and near-cheapest pricing in its class, with moderate multimodal capability as a newer addition. Best fit for cost-sensitive coding and agentic workflows with multimodal input needs.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (InclusionAI / Ant Group)** — 2026-09-24
- Method: Public internet research across Z.ai official blog, BenchLM.ai, commandcode.ai, B.AI Doc, llm-stats.com, and CloudPrice; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
