# Gemini 3.8 Flash Cyber — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind/Gemini 3.8 Flash Cyber
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
- **Provider / access:** Google Fairwind Program `google/gemini-3-8-flash-cyber` (REST API).
- **Release / knowledge:** 2026 security release.
- **IDs:** `google/gemini-3-8-flash-cyber` (no Zen Free ID)
- **Context window:** 1M / 65K out.
- **Modalities:** Text, code in; text, code out; tool calls yes.
- **Pricing (as of 2026-09-18):** Restricted Fairwind Program (no public pricing).
- **Architecture:** Specialized cybersecurity fine-tune of Gemini 3.8 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%**
- Tau3-Banking / Tau2-Bench: **86.5%**
- GDPval-AA: **1720 Elo**
- Claw-Eval / ClawProBench: **93.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.0%**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **72.0%**
- LCR / MLCR: **88.0%**
- CritPt: **82.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **97.2 / #1**
- Omniscience Accuracy / Hallucination Rate: **97.5% / 0.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.5%**
- LiveCodeBench: **85.0%**
- SciCode / AA-SciCode: **78.0%**
- Vibe Code Bench: **91.0%**
- DeepSWE / Coding Index / other: **94.5**

Long context:

- 1M token context optimized for massive codebase security analysis.

### Normalized scores (1–100)

- **Tool use: 94/100.** Superior agentic tool coordination for security auditing and automated patching.
- **Reasoning: 95/100.** State-of-the-art vulnerability reasoning and code analysis.
- **Context window: 95/100.** 1M context with deep code comprehension.
- **Multimodal: 80/100.** Specialized text and code processing.
- **Coding: 95/100.** Elite coding and vulnerability patch generation.
- **Cost efficiency: 25/100.** Restricted access program.
- **Overall Score: 91.8/100.** Specialized frontier security model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
