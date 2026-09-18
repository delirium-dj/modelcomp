# GLM 5.1 Coding — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM 5.1 Coding
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA). No Zen Free ID; priced paid.
- **Provider / access:** OpenCode Zen / Z.AI API `opencode/glm-5.1` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/glm-5.1` (no Free ID)
- **Context window:** 200K–205K / 128K out.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $1.40/$4.40 per 1M tokens (no Free ID).
- **Architecture:** Open-weights Mixture-of-Experts optimized for coding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%**
- Tau3-Banking / Tau2-Bench: **81.0%**
- GDPval-AA: **1620 Elo**
- Claw-Eval / ClawProBench: **88.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- HLE: **62.0%**
- LCR / MLCR: **81.0%**
- CritPt: **73.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.5 / #3**
- Omniscience Accuracy / Hallucination Rate: **95.5% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.5%**
- LiveCodeBench: **82.0%**
- SciCode / AA-SciCode: **75.5%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **93.0**

Long context:

- Robust code retrieval across 205K context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional agentic tool coordination for software engineering tasks.
- **Reasoning: 92/100.** Advanced code reasoning and logic comprehension.
- **Context window: 83/100.** 205K coding-optimized context window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 94/100.** State-of-the-art SWE-bench and coding benchmark results.
- **Cost efficiency: 70/100.** Competitive paid pricing ($1.40/$4.40).
- **Overall Score: 74.8/100.** Elite open-weights model for autonomous software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
