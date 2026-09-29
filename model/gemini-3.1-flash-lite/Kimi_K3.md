# Gemini 3.1 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cheapest Gemini 3.1 tier — 1M context, non-reasoning; decent static QA (MMLU-Pro 86.2%) and competitive LiveCodeBench (80.1%), but weak agentic scores and a 0% Vibe Code Bench row. Superseded upward by Gemini 3.5 Flash-Lite (current lite tier on deepmind.google and Zen).
- **Provider / access:** Google Gemini API (`gemini-3.1-flash-lite`), AI Studio. Not listed on OpenCode Zen (verified 2026-09-29 — Zen carries 3.5 Flash Lite at $0.30/$2.50 instead).
- **Release / knowledge:** 2026 (exact date not verified in my sources; referenced as a shipping model in the Palo Alto Networks quote on deepmind.google's Gemini page); cutoff not verified.
- **IDs:** `google/gemini-3.1-flash-lite` (no OpenCode Zen ID — verified 2026-09-29).
- **Context window:** 1M tokens (benchlm.ai, updated 2026-09-28); max output not verified.
- **Modalities:** text/image in (CharXiv measured); text out; reasoning: no (non-reasoning per benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** no verified public price found in my sources; cheapest 3.1 tier — provisional. (Successor 3.5 Flash Lite sits at $0.30/$2.50 on Zen.)
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use (all benchlm.ai, page updated 2026-09-28):

- Terminal-Bench 2.1 (Vals): **34.1%**; Gert Labs: **38.5%**
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.1%** (benchlm.ai)
- MMLU-Pro (Vals): **86.2%** (benchlm.ai)
- HLE / LCR / CritPt / AA indices: no verified public score found
- BenchLM overall: **50.03/100, #86 of 512** (benchlm.ai, updated 2026-09-28 — up from 48.51 #82/507 in the prior snapshot; coverage: 8 of 486 benchmarks, score flagged as conservative)

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
- **Context window: 95/100.** 1M spec tier (95–100 band); no retrieval measurement exists, so scored at the band floor rather than above.
- **Multimodal: 68/100.** CharXiv 73.2% image input; text-only output caps it.
- **Coding: 68/100.** LiveCodeBench 80.1% is genuinely good; capped by Vibe Code Bench 0.0% and SWE-bench 62.8%.
- **Cost efficiency: 93/100.** Cheapest Gemini 3.1 tier (provisional — price unverified; successor 3.5 Flash Lite is $0.30/$2.50 as a reference).
- **Overall Score: 70/100.** Mean of the five quality dims (52+66+95+68+68)/5 = 69.8 → 70. Best fit: cheap high-volume chat/extraction with occasional light coding; superseded by 3.5 Flash-Lite for new work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard updated 2026-09-28; deepmind.google Gemini lineup page; OpenCode Zen docs updated 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: BenchLM overall/rank drifted to 50.03 #86/512; confirmed not on Zen (3.5 Flash Lite is the current lite tier); Context 76→95 per 1M band floor; Overall 66→70.
- Future sources: add a new file next to this one using the same headings.
