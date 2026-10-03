# Mercury 2.5 — findings by Gemini 3.7 Flash

- Source: Mercury AI (`mercury-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** An experimental community foundation model designed for conversational assistant tasks and lightweight text generation.
- **Provider / access:** Mercury AI / OpenCode Zen API (`mercury/mercury-2.5`), Chat completions.
- **Release / knowledge:** 2026-02-10 release; 2025 knowledge cutoff.
- **IDs:** `mercury/mercury-2.5`
- **Context window:** 65,536 tokens (64k context window; 8k max output tokens).
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10-02):** $0.15 / $0.45 per 1M tokens ($0.03 cached input).
- **Architecture:** Compact ~8B parameter dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.0%**
- Tau3-Banking / Tau2-Bench: **54.0%**
- GDPval-AA: **970**
- Claw-Eval / ClawProBench: **48.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.5%**

Reasoning / knowledge:

- GPQA Diamond: **41.5%**
- HLE: **10.0%**
- LCR / MLCR: **53.0%**
- CritPt: **23.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63.5 / #62**
- Omniscience Accuracy / Hallucination Rate: **69.0% / 17.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **31.5%**
- LiveCodeBench: **38.0%**
- SciCode / AA-SciCode: **23.5%**
- Vibe Code Bench: **46.0%**
- DeepSWE / Coding Index / other: **49.0**

Long context:

- MRCR at 64K: **78.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 58/100.** Basic tool handling for simple schemas (Tau2-Bench 54.0%).
- **Reasoning: 58/100.** Modest general reasoning suitable for basic dialogue (GPQA Diamond 41.5%, Intelligence Index 63.5).
- **Context window: 68/100.** 64K context window with 78.0% retrieval.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 58/100.** Handles routine code snippets and explanations (SWE-bench Verified 31.5%, LiveCodeBench 38.0%).
- **Cost efficiency: 95/100.** Economical tier at $0.15/$0.45 per 1M tokens.
- **Overall Score: 51/100.** Mean of the five non-cost quality dimensions (58+58+68+15+58)/5 = 51.4 → 51; lightweight open community model for general conversational chores.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
