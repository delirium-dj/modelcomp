# Ling 3.1 Flash — findings by Gemini 3.7 Flash

- Source: 01.AI (`ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** 01.AI's high-speed efficiency model in the Ling 3.1 generation engineered for low latency, reliable function calling, and cost-effective text reasoning.
- **Provider / access:** 01.AI API (`ling-3.1-flash`) / OpenCode Zen API (`ling/ling-3.1-flash`), Chat completions with function calling.
- **Release / knowledge:** 2026-06-01 release; 2026 knowledge cutoff.
- **IDs:** `ling/ling-3.1-flash`
- **Context window:** 128,000 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and structured JSON output.
- **Pricing (as of 2026-10-02):** $0.15 / $0.45 per 1M tokens ($0.04 cached input).
- **Architecture:** Efficient dense/MoE transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%**
- Tau3-Banking / Tau2-Bench: **66.5%**
- GDPval-AA: **1120**
- Claw-Eval / ClawProBench: **61.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.4%**
- HLE: **19.5%**
- LCR / MLCR: **66.0%**
- CritPt: **33.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.0 / #33**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 11.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%**
- LiveCodeBench: **53.0%**
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **62.5%**
- DeepSWE / Coding Index / other: **66.0**

Long context:

- MRCR at 128K: **86.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and reliable function calling for routine tool flows (Tau2-Bench 66.5%).
- **Reasoning: 72/100.** Good everyday logic and multi-turn reasoning (GPQA Diamond 55.4%, Intelligence Index 75.0).
- **Context window: 76/100.** 128K context window with 86.5% retrieval stability.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 72/100.** Capable code generation and refactoring (SWE-bench Verified 45.0%, LiveCodeBench 53.0%).
- **Cost efficiency: 95/100.** Excellent pricing at $0.15/$0.45 per 1M tokens.
- **Overall Score: 61/100.** Mean of the five non-cost quality dimensions (70+72+76+15+72)/5 = 61.0 → 61; reliable, low-cost text model for high-volume assistant and tool chores.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
