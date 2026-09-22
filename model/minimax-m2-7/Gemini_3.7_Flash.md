# MiniMax M2.7 — findings by Gemini 3.7 Flash

- Source: MiniMax (`minimax/minimax-m2.7`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** Previous-generation long-context model by MiniMax with 1M context support for document intelligence and conversational applications.
- **Provider / access:** MiniMax Open Platform (`minimax/minimax-m2.7`), OpenCode Zen (`opencode/minimax-m2-7`).
- **Release / knowledge:** 2025-09-20 release; knowledge cutoff July 2025.
- **IDs:** `minimax/minimax-m2.7`, `opencode/minimax-m2-7`
- **Context window:** 1,000,000 tokens (1M input, 16k output).
- **Modalities:** text in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.30 / $0.90 per 1M tokens ($0.15 cached).
- **Architecture:** MoE long-context architecture (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.8%**
- Tau3-Banking / Tau2-Bench: **69.0%**
- GDPval-AA: **1215**
- Claw-Eval / ClawProBench: **65.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.2%**

Reasoning / knowledge:

- GPQA Diamond: **59.0%**
- HLE: **20.5%**
- LCR / MLCR: **73.8%**
- CritPt: **66.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / #23**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 8.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **40.1%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **67.4%**
- DeepSWE / Coding Index / other: **61.5**

Long context:

- MRCR 1M needle retrieval 97.8%; RULER benchmark 92.5% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 70/100.** Basic tool invocation, capped on high-concurrency structured schemas.
- **Reasoning: 72/100.** Capable long-form narrative coherence, capped on scientific and mathematical deduction.
- **Context window: 94/100.** 1M context with dependable retrieval across book-length corpora.
- **Multimodal: 72/100.** Text-only model without native vision or audio.
- **Coding: 71/100.** Good for single-file scripts and routine bug fixes.
- **Cost efficiency: 92/100.** Affordable 1M context processing pricing.
- **Overall Score: 75.8/100.** Budget-friendly 1M context processing model for long documents and chat archives.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
