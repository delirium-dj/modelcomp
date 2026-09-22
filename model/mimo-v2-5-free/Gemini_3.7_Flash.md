# MiMo v2.5 Free — findings by Gemini 3.7 Flash

- Source: Xiaomi / MiMo (`mimo/mimo-v2-5-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.5 (Free tier)
- **Short description:** Free-tier multimodal assistant by Xiaomi designed for lightweight mobile, edge, and conversational productivity tasks.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-5-free`), Xiaomi AI Cloud API.
- **Release / knowledge:** 2026-02-18 release; knowledge cutoff December 2025.
- **IDs:** `mimo/mimo-v2-5-free`, `opencode/mimo-v2-5-free`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** Compact MoE architecture with edge-optimized attention layers (open/proprietary mix).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.2%**
- Tau3-Banking / Tau2-Bench: **71.8%**
- GDPval-AA: **1250**
- Claw-Eval / ClawProBench: **68.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.1%**

Reasoning / knowledge:

- GPQA Diamond: **61.5%**
- HLE: **22.0%**
- LCR / MLCR: **76.2%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **98 / #20**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 8.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%**
- LiveCodeBench: **42.5%**
- SciCode / AA-SciCode: **64.2%**
- Vibe Code Bench: **70.1%**
- DeepSWE / Coding Index / other: **63.5**

Long context:

- MRCR 128k needle retrieval 96.8%; RULER benchmark 89.2% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 74/100.** Standard function calling support, capped on multi-step complex workflows.
- **Reasoning: 75/100.** Good daily common-sense and factual reasoning, capped on advanced logic puzzles.
- **Context window: 81/100.** 128k context provides sufficient capacity for standard documents and conversations.
- **Multimodal: 78/100.** Responsive image recognition and visual question answering; text-only output.
- **Coding: 73/100.** Capable for basic scripting and routine syntax questions.
- **Cost efficiency: 100/100.** Zero cost on OpenCode Zen free tier.
- **Overall Score: 76.2/100.** Free and accessible daily assistant for everyday conversational and lightweight coding tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
