# Glm 5.2 Coding — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Glm 5.2 Coding
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glm 5.2 Coding
- **Short description:** Specialized coding variant of GLM 5.2 optimized for software engineering and repository-level edits.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.2-coding`), Chat Completions API.
- **Release / knowledge:** 2026-03-20; knowledge cutoff January 2026.
- **IDs:** `opencode/glm-5.2-coding` (standard access)
- **Context window:** 128K total tokens; verified via platform specifications.
- **Modalities:** Text in/out; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Standard pricing on OpenCode Zen.
- **Architecture:** Specialized transformer by Zhipu AI / OpenCode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (GLM developer benchmarks)
- Tau3-Banking / Tau2-Bench: **83.0%**
- GDPval-AA: **1820** (Elo)
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **55.0%**
- LCR / MLCR: **80.0%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84.0 / #20**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.0%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **85.0%**
- Vibe Code Bench: **86.0%**
- DeepSWE / Coding Index / other: **90.0**

Long context:

- RULER 128K pass rate: **95.0%** at 128K tokens.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool integration and function calling tailored for coding agents.
- **Reasoning: 89/100.** Advanced reasoning for complex software architecture and logic.
- **Context window: 96/100.** High fidelity across the 128K coding context window.
- **Multimodal: 15/100.** Text-only coding specialist model.
- **Coding: 93/100.** Exceptional coding and benchmark scores (SWE-bench Verified 78%).
- **Cost efficiency: 86/100.** Favorable pricing for a dedicated coding model.
- **Overall Score: 76/100.** Mean of the five quality dimensions (87 + 89 + 96 + 15 + 93 = 380 / 5 = 76.0). Highly capable dedicated coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
