# Laguna S 2.1 — findings by Gemini 3.7 Flash

- Source: Laguna AI (`laguna/laguna-s-2.1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Specialized small parameter domain model for embedded IoT and device-side diagnostics.
- **Provider / access:** Laguna Platform API (`laguna/laguna-s-2.1`), OpenCode Zen (`opencode/laguna-s-2.1`).
- **Release / knowledge:** 2025-03-12 release; knowledge cutoff January 2025.
- **IDs:** `laguna/laguna-s-2.1`, `opencode/laguna-s-2.1`
- **Context window:** 32,000 tokens (32k input, 4k output).
- **Modalities:** text in; text out; basic tool use.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Compact edge transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.0%**
- Tau3-Banking / Tau2-Bench: **46.5%**
- GDPval-AA: **1025**
- Claw-Eval / ClawProBench: **43.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **41.5%**

Reasoning / knowledge:

- GPQA Diamond: **34.0%**
- HLE: **7.2%**
- LCR / MLCR: **47.0%**
- CritPt: **42.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #48**
- Omniscience Accuracy / Hallucination Rate: **56.5% / 25.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **18.0%**
- LiveCodeBench: **16.5%**
- SciCode / AA-SciCode: **30.0%**
- Vibe Code Bench: **34.5%**
- DeepSWE / Coding Index / other: **28.0**

Long context:

- MRCR 32k needle retrieval 85.0%; RULER benchmark 74.0% at 32k tokens.

### Normalized scores (1–100)

- **Tool use: 50/100.** Minimal tool calling capability, sensitive to exact schema definitions.
- **Reasoning: 52/100.** Simple diagnostics and rule-based logic, capped on abstract synthesis.
- **Context window: 75/100.** 32k context tailored for short device telemetry payloads.
- **Multimodal: 50/100.** Text-only model without native vision support.
- **Coding: 48/100.** Simple script snippets and hardware config parsing.
- **Cost efficiency: 70/100.** Standard pricing for legacy IoT endpoint.
- **Overall Score: 55.0/100.** Edge-targeted compact diagnostic model for specialized hardware integrations.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
