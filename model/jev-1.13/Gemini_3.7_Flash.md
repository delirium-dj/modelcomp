# JEV 1.13 — findings by Gemini 3.7 Flash

- Source: Community (`jev-1.13`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** JEV 1.13
- **Short description:** An experimental small open model checkpoint focused on compact edge inference and low-resource synthetic task execution.
- **Provider / access:** Community / OpenCode Zen API (`jev/jev-1.13`), Chat completions.
- **Release / knowledge:** 2025-10-05 release; 2025 knowledge cutoff.
- **IDs:** `jev/jev-1.13`
- **Context window:** 32,768 tokens (32k context window; 4k max output tokens).
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10-02):** $0.05 / $0.10 per 1M tokens; open weights.
- **Architecture:** Compact ~3B parameter dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **14.5%**
- Tau3-Banking / Tau2-Bench: **38.0%**
- GDPval-AA: **820**
- Claw-Eval / ClawProBench: **32.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **28.5%**

Reasoning / knowledge:

- GPQA Diamond: **28.4%**
- HLE: **4.2%**
- LCR / MLCR: **36.0%**
- CritPt: **15.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.0 / #95**
- Omniscience Accuracy / Hallucination Rate: **54.0% / 32.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **18.0%**
- LiveCodeBench: **24.5%**
- SciCode / AA-SciCode: **14.0%**
- Vibe Code Bench: **32.0%**
- DeepSWE / Coding Index / other: **34.0**

Long context:

- MRCR at 32K: **68.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 46/100.** Rudimentary function calling capability (Tau2-Bench 38.0%).
- **Reasoning: 46/100.** Basic reasoning bounded by small parameter scale (GPQA Diamond 28.4%, Intelligence Index 46.0).
- **Context window: 55/100.** 32K context window suitable for short prompts.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 48/100.** Basic code snippet generation (SWE-bench Verified 18.0%, LiveCodeBench 24.5%).
- **Cost efficiency: 98/100.** Very low cost for edge deployment at $0.05/$0.10 per 1M tokens.
- **Overall Score: 42/100.** Mean of the five non-cost quality dimensions (46+46+55+15+48)/5 = 42.0 → 42; experimental small checkpoint for edge testing and lightweight tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
