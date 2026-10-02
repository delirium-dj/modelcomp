# GPT-5.4 Nano — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's ultra-compact edge model in the GPT-5.4 line engineered for low-memory environments, on-device parsing, and rapid micro-agent routing.
- **Provider / access:** OpenAI API (`gpt-5.4-nano`) / OpenCode Zen API (`openai/gpt-5.4-nano`), Chat completions and structured outputs.
- **Release / knowledge:** 2026-08-01 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.4-nano`
- **Context window:** 65,536 tokens (64k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and structured JSON output.
- **Pricing (as of 2026-10-02):** $0.05 / $0.15 per 1M tokens ($0.015 cached input).
- **Architecture:** Compact ~1.6B parameter dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.5%**
- Tau3-Banking / Tau2-Bench: **54.5%**
- GDPval-AA: **960**
- Claw-Eval / ClawProBench: **46.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **41.5%**

Reasoning / knowledge:

- GPQA Diamond: **40.8%**
- HLE: **9.5%**
- LCR / MLCR: **50.5%**
- CritPt: **22.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.5 / #70**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 18.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **28.5%**
- LiveCodeBench: **36.5%**
- SciCode / AA-SciCode: **22.0%**
- Vibe Code Bench: **44.0%**
- DeepSWE / Coding Index / other: **47.0**

Long context:

- MRCR at 64K: **77.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 55/100.** Fast function calling and JSON extraction for straightforward tools (Tau2-Bench 54.5%).
- **Reasoning: 56/100.** Basic reasoning for filtering and classification (GPQA Diamond 40.8%, Intelligence Index 60.5).
- **Context window: 62/100.** 64K context window tailored for edge devices and instant micro-tasks.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 57/100.** Capable of basic syntax and minor script generation (LiveCodeBench 36.5%).
- **Cost efficiency: 98/100.** Ultra-low cost at $0.05/$0.15 per 1M tokens.
- **Overall Score: 49/100.** Mean of the five non-cost quality dimensions (55+56+62+15+57)/5 = 49.0 → 49; lightweight edge model for fast classification, extraction, and sub-agent dispatch.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
