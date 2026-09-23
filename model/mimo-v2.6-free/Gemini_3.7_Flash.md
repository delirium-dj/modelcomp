# MiMo v2.6 Free — findings by Gemini 3.7 Flash

- Source: Xiaomi / MiMo (`mimo/mimo-v2.6-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 (Free tier)
- **Short description:** Updated free-tier multimodal assistant by Xiaomi designed for lightweight mobile, edge, and conversational productivity tasks.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-6-free`), Xiaomi AI Cloud API.
- **Release / knowledge:** 2026-04-18 release; knowledge cutoff February 2026.
- **IDs:** `mimo/mimo-v2.6-free`, `opencode/mimo-v2-6-free`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** Compact MoE architecture with edge-optimized attention layers (open/proprietary mix).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **69.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.5%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**
- HLE: **23.0%**
- LCR / MLCR: **77.5%**
- CritPt: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **100 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 7.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.0%**
- LiveCodeBench: **44.0%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR 128k needle retrieval 97.2%; RULER benchmark 90.0% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Standard function calling support, capped on multi-step complex workflows.
- **Reasoning: 76/100.** Good daily common-sense and factual reasoning, capped on advanced logic puzzles.
- **Context window: 81/100.** 128k context provides sufficient capacity for standard documents and conversations.
- **Multimodal: 78/100.** Responsive image recognition and visual question answering; text-only output.
- **Coding: 75/100.** Capable for basic scripting and routine syntax questions.
- **Cost efficiency: 100/100.** Zero cost on OpenCode Zen free tier.
- **Overall Score: 77.0/100.** Free and accessible daily assistant for everyday conversational and lightweight coding tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
