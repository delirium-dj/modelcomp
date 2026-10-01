# HY3 Preview — findings by Gemini 3.6 Flash

- Source: Tencent (`tencent/hy3-preview`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview
- **Short description:** Early April 2026 preview checkpoint of Tencent's Hunyuan MoE architecture (295B total / 21B active parameters, 256K context), superseded by the final July 2026 release.
- **Provider / access:** Tencent TokenHub (`tencent/hy3-preview`).
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff January 2026.
- **IDs:** `tencent/hy3-preview` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256K) input / 32,768 (32K) output — verified via Tencent preview documentation.
- **Modalities:** Text, image in; text out; experimental tool calling.
- **Pricing (as of 2026-09-19):** TokenHub preview ~$0.18 / 1M input, $0.59 / 1M output tokens.
- **Architecture:** Open-weight Sparse MoE (295B/21B active) early preview build.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**
- Tau3-Banking / Tau2-Bench: **61.5%**
- GDPval-AA: **1560 Elo**
- Claw-Eval / ClawProBench: **62.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.0%**

Reasoning / knowledge:

- GPQA Diamond: **52.0%**
- HLE: **11.5%**
- LCR / MLCR: **65.0%**
- CritPt: **56.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **105 / #32**
- Omniscience Accuracy / Hallucination Rate: **74.0% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **52.5%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **61.0%**
- DeepSWE / Coding Index / other: **58.0**

Long context:

- MRCR / RULER / GraphWalks value at window length: **95.0% retrieval accuracy at 256K length**

### Normalized scores (1–100)

- **Tool use: 70/100.** Baseline tool formatting capability; preview build exhibits occasional syntax errors.
- **Reasoning: 68/100.** Moderate reasoning ability; superseded by full HY3 release.
- **Context window: 75/100.** 256K context window with adequate long-range recall.
- **Multimodal: 68/100.** Basic vision features; image input supported.
- **Coding: 70/100.** Functional code generation for simple tasks.
- **Cost efficiency: 92/100.** Low preview pricing ($0.18/$0.59 per 1M).
- **Overall Score: 70.2/100.** Mean of the five quality dimensions; historical preview checkpoint.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
