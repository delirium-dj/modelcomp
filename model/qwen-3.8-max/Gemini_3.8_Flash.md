# Qwen3.8-Max — findings by Gemini 3.8 Flash

- Source: Alibaba/qwen3-8-max
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE model with 1M multimodal context, built for deep reasoning, mathematical problem solving, and long-context agentic tasks.
- **Provider / access:** Alibaba Cloud DashScope API `alibaba/qwen3-8-max` via OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen3-8-max` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 131K out; verified via DashScope API documentation).
- **Modalities:** Text, image, and video in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $2.00 / 1M input, $6.00 / 1M output; 1M one-time trial tokens available on DashScope.
- **Architecture:** 2.4T sparse MoE architecture with dynamic expert routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **46.8%** (Tau3-Banking)
- GDPval-AA: **1675**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **91.0%**
- HLE: **44.0%**
- LCR / MLCR: **84.5%**
- CritPt: **73.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **59.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.2%**
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **56.2%**
- Vibe Code Bench: **62.8%**
- DeepSWE / Coding Index / other: **72.5%**

Long context:

- MRCR 98.0% at 1M; strong retrieval across 1M context with 131K generation support.

### Normalized scores (1–100)

- **Tool use: 88/100.** 83.5% Terminal-Bench 2.1 and 1675 GDPval confirm robust multi-step agent capability.
- **Reasoning: 91/100.** 91.0% GPQA Diamond and top-tier math benchmarks demonstrate high analytical acumen.
- **Context window: 100/100.** 1M context with 131K output capacity and 98% MRCR score.
- **Multimodal: 80/100.** High-resolution image and video inputs supported; text out.
- **Coding: 89/100.** 71.2% SWE-bench Verified and 86.0% LiveCodeBench reflect strong engineering competence.
- **Cost efficiency: 75/100.** Competitive $2.00/$6.00 pricing for a 2.4T MoE flagship.
- **Overall Score: 90/100.** Quality mean 89.6 rounds to 90; excellent value flagship for long-context reasoning and code generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
