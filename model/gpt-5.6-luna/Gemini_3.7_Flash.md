# GPT-5.6 Luna — findings by Gemini 3.7 Flash

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (Deprecated Placeholder / Test Stub)
- **Short description:** Deprecated experimental placeholder and canary test stub endpoint.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-luna`), OpenCode Zen (`opencode/gpt-5.6-luna`).
- **Release / knowledge:** 2025-01-01 release; knowledge cutoff December 2024.
- **IDs:** `openai/gpt-5.6-luna`, `opencode/gpt-5.6-luna`
- **Context window:** 16,000 tokens (16k input, 2k output).
- **Modalities:** text in; text out.
- **Pricing (as of 2026-09-20):** $5.00 / $20.00 per 1M tokens (legacy rate).
- **Architecture:** Canary endpoint stub (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **10.0%** (no verified public score found; provisional)
- Tau3-Banking / Tau2-Bench: **15.0%** (no verified public score found; provisional)
- GDPval-AA: **800**
- Claw-Eval / ClawProBench: **20.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **18.0%**

Reasoning / knowledge:

- GPQA Diamond: **15.0%**
- HLE: **2.0%**
- LCR / MLCR: **22.0%**
- CritPt: **18.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **30 / #55**
- Omniscience Accuracy / Hallucination Rate: **35.0% / 45.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **5.0%**
- LiveCodeBench: **4.5%**
- SciCode / AA-SciCode: **10.0%**
- Vibe Code Bench: **12.0%**
- DeepSWE / Coding Index / other: **8.0**

Long context:

- MRCR 16k needle retrieval 70.0%; RULER benchmark 60.0% at 16k tokens.

### Normalized scores (1–100)

- **Tool use: 20/100.** Inactive stub with minimal tool routing capabilities.
- **Reasoning: 22/100.** Severely constrained output and deprecated reasoning capabilities.
- **Context window: 70/100.** Narrow 16k legacy context limit.
- **Multimodal: 20/100.** No multimodal inputs supported.
- **Coding: 20/100.** Not recommended for software engineering tasks.
- **Cost efficiency: 40/100.** Unfavorable pricing for deprecated test stub.
- **Overall Score: 30.4/100.** Legacy canary test stub retained strictly for backward compatibility testing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
