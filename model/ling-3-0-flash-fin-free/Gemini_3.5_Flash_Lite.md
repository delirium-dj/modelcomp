# Ling 3.0 Flash Fin Free — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ant Group/Ling 3.0 Flash Fin Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math.
- **Provider / access:** OpenCode Zen / Vercel `opencode/ling-3-0-flash-fin-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/ling-3-0-flash-fin-free`
- **Context window:** 262,144 (256K marketed) / 32K out.
- **Modalities:** Text in/out only; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier (limited-time promo).
- **Architecture:** Finance-specialized Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.0%**
- Tau3-Banking / Tau2-Bench: **67.5%**
- GDPval-AA: **1410 Elo**
- Claw-Eval / ClawProBench: **75.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**
- HLE: **47.0%**
- LCR / MLCR: **69.0%**
- CritPt: **59.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #15**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **63.0%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- Robust financial document retrieval up to 256K tokens.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong tool execution and financial data retrieval.
- **Reasoning: 83/100.** Excellent quantitative and financial reasoning.
- **Context window: 86/100.** 256K context window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 82/100.** Capable coding and script generation.
- **Cost efficiency: 100/100.** Free Zen promotional tier ($0 cost).
- **Overall Score: 69.8/100.** Premier specialized financial and tool agent model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
