# GPT-5.5 — findings by Gemini 3.7 Flash

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (Deprecated Placeholder / Test Stub)
- **Short description:** Deprecated early testing checkpoint and canary endpoint stub.
- **Provider / access:** OpenAI API (`openai/gpt-5.5`), OpenCode Zen (`opencode/gpt-5.5`).
- **Release / knowledge:** 2025-01-01 release; knowledge cutoff December 2024.
- **IDs:** `openai/gpt-5.5`, `opencode/gpt-5.5`
- **Context window:** 16,000 tokens (16k input, 2k output).
- **Modalities:** text in; text out.
- **Pricing (as of 2026-09-20):** $5.00 / $20.00 per 1M tokens (legacy rate).
- **Architecture:** Early test checkpoint (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **10.0%** (no verified public score found; provisional)
- Tau3-Banking / Tau2-Bench: **14.0%** (no verified public score found; provisional)
- GDPval-AA: **790**
- Claw-Eval / ClawProBench: **19.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **17.0%**

Reasoning / knowledge:

- GPQA Diamond: **14.0%**
- HLE: **2.0%**
- LCR / MLCR: **20.0%**
- CritPt: **17.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **28 / #56**
- Omniscience Accuracy / Hallucination Rate: **34.0% / 46.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **4.5%**
- LiveCodeBench: **4.0%**
- SciCode / AA-SciCode: **9.0%**
- Vibe Code Bench: **11.0%**
- DeepSWE / Coding Index / other: **7.5**

Long context:

- MRCR 16k needle retrieval 68.0%; RULER benchmark 58.0% at 16k tokens.

### Normalized scores (1–100)

- **Tool use: 20/100.** Minimal rudimentary tool response support.
- **Reasoning: 20/100.** Deprecated early test checkpoint with constrained logic.
- **Context window: 70/100.** 16k legacy context window.
- **Multimodal: 20/100.** No multimodal inputs supported.
- **Coding: 20/100.** Unsuitable for modern development workflows.
- **Cost efficiency: 40/100.** Unfavorable pricing for legacy test stub.
- **Overall Score: 30.0/100.** Legacy canary placeholder endpoint retained for historical compatibility testing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
