# Gemini 3.1 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cheapest Gemini 3.1 tier — 1M context, non-reasoning; decent static QA (MMLU-Pro 86.2%) and competitive LiveCodeBench (80.1%), but weak agentic scores and a 0% Vibe Code Bench row.
- **Provider / access:** Google Gemini API (`gemini-3.1-flash-lite`), AI Studio.
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemini-3.1-flash-lite` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (CharXiv measured); text out; reasoning: no (non-reasoning per benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; cheapest 3.1 tier — provisional.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **34.1%**; Gert Labs: **38.5%** (benchlm.ai)
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.1%** (benchlm.ai)
- MMLU-Pro (Vals): **86.2%** (benchlm.ai)
- HLE / LCR / CritPt / AA indices: no verified public score found
- BenchLM overall: **48.51/100, #82 of 507**

Coding:

- SWE-bench (Vals): **62.8%** (benchlm.ai)
- LiveCodeBench (Vals): **80.1%** (benchlm.ai)
- Vibe Code Bench: **0.0%** (benchlm.ai)
- SciCode / DeepSWE: no verified public score found

Long context:

- 1M window by spec; no retrieval measurement (no MRCR/RULER/LCR row) found.

Multimodal:

- CharXiv: **73.2%** (benchlm.ai); no MMMU row.

### Normalized scores (1–100)

- **Tool use: 52/100.** TB 2.1 (Vals) 34.1% and Gert Labs 38.5% are weak; it's a chat-first lite tier. Capped by missing everything else.
- **Reasoning: 66/100.** GPQA 81.1% / MMLU-Pro 86.2% respectable for a lite model; non-reasoning classification and zero hard-reasoning rows cap it.
- **Context window: 76/100.** 1M window on paper; no retrieval evidence to support full-window usability.
- **Multimodal: 68/100.** CharXiv 73.2% image input; text-only output caps it.
- **Coding: 68/100.** LiveCodeBench 80.1% is genuinely good; capped by Vibe Code Bench 0.0% and SWE-bench 62.8%.
- **Cost efficiency: 93/100.** Cheapest Gemini 3.1 tier (provisional — price unverified).
- **Overall Score: 66/100.** Mean of the five quality dims (52+66+76+68+68)/5 = 66.0 → 66. Best fit: cheap high-volume chat/extraction with occasional light coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
