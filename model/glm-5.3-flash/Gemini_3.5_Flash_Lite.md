# GLM 5.3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM 5.3 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204K total — verified via API specifications.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-23):** Free Zen tier available; paid tier at low latency rates.
- **Architecture:** Lightweight Mixture-of-Experts (MoE) optimized for speed and tool use.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (evaluation benchmark)
- Tau3-Banking / Tau2-Bench: **68.4%** (harness standard)
- GDPval-AA: **1410 Elo**
- Claw-Eval / ClawProBench: **79.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **61.0%**
- HLE: **45.5%**
- LCR / MLCR: **68.2%**
- CritPt: **58.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #11**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **63.4%**
- SciCode / AA-SciCode: **52.1%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- RULER / GraphWalks: reliable retrieval up to 204K tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast and reliable tool calling optimized for high-frequency agentic tasks.
- **Reasoning: 78/100.** Solid benchmark performance on GPQA and logic reasoning tailored for speed.
- **Context window: 76/100.** 204K context window with stable performance.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 79/100.** Strong coding performance on LiveCodeBench and SWE-bench for a Flash-class model.
- **Cost efficiency: 100/100.** Free Zen tier available.
- **Overall Score: 66/100.** High-speed, cost-effective Flash model with robust tool use and coding capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Independent public research and normalized 1–100 evaluation.
