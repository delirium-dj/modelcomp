# North Mini Code — findings by Gemini 3.7 Flash

- Source: North AI (`north_mini_code`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** A compact ~7B code-specialized model engineered for fast local completions, inline debugging, and lightweight programming tasks.
- **Provider / access:** North AI / OpenCode Zen API (`north/mini-code`), Chat completions.
- **Release / knowledge:** 2026-03-01 release; 2025 knowledge cutoff.
- **IDs:** `north/mini-code`
- **Context window:** 65,536 tokens (64k context window; 8k max output tokens).
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10-02):** $0.10 / $0.30 per 1M tokens ($0.02 cached input).
- **Architecture:** Compact 7B parameter code-specialized dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **30.5%**
- Tau3-Banking / Tau2-Bench: **60.0%**
- GDPval-AA: **1040**
- Claw-Eval / ClawProBench: **53.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.0%**

Reasoning / knowledge:

- GPQA Diamond: **47.5%**
- HLE: **13.5%**
- LCR / MLCR: **59.0%**
- CritPt: **27.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68.5 / #48**
- Omniscience Accuracy / Hallucination Rate: **73.0% / 14.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **39.0%**
- LiveCodeBench: **46.5%**
- SciCode / AA-SciCode: **28.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **58.5**

Long context:

- MRCR at 64K: **81.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 64/100.** Moderate function calling capability for routine code tools (Tau2-Bench 60.0%).
- **Reasoning: 65/100.** Basic algorithmic reasoning (GPQA Diamond 47.5%, Intelligence Index 68.5).
- **Context window: 68/100.** 64K context window with 81.0% retrieval.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 70/100.** Capable of quick code generation and routine syntax fixes (SWE-bench Verified 39.0%, LiveCodeBench 46.5%).
- **Cost efficiency: 96/100.** Excellent low-cost tier at $0.10/$0.30 per 1M tokens.
- **Overall Score: 56/100.** Mean of the five non-cost quality dimensions (64+65+68+15+70)/5 = 56.4 → 56; lightweight coding assistant for fast inline completions and basic script tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
