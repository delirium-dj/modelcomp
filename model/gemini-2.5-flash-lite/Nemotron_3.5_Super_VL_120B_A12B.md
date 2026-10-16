# Gemini 2.5 Flash-Lite — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Artificial Analysis (`artificialanalysis.ai/models/gemini-2-5-flash-lite`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's proprietary non-reasoning model (released June 17, 2025 per AA); deprecated by Gemini 2.5 Flash-Lite Preview (Sep '25); 1M context / text+image+speech+video in → text out; $0.10/$0.40 per MTok; 1 API provider per AA; very fast (283.3 t/s).
- **Provider / access:** Google API (`gemini-2.5-flash-lite`), 1 API provider per AA; proprietary (weights not public).
- **Release / knowledge:** Released June 17, 2025 (AA); knowledge cutoff Jan 2025.
- **IDs:** `gemini-2.5-flash-lite` (Google API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (AA). Verified.
- **Modalities:** Text, image, speech, and video in; text out per AA; reasoning type: Non-Reasoning per AA; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.10/M input, $0.40/M output (AA; cache discount 90%, blended rate $0.07).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

All benchmarks below come from Artificial Analysis only; no benchlm.ai page exists for this model.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **7** (#51 of 71 non-reasoning; estimated)
- No GPQA, HLE, MMLU-Pro, ARC-AGI, FrontierMath, or other reasoning/knowledge benchmarks found beyond the Intelligence Index composite.

Coding:

- No coding benchmarks found.

Agentic / tool use:

- No agentic benchmarks found.

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- No long context benchmarks found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (only Intelligence Index available).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 15/100.** No agentic benchmarks found; scored conservatively due to zero data.
- **Reasoning: 35/100.** Intelligence Index 7 (below median for its class); capped by zero reasoning benchmarks found beyond the Intelligence Index composite.
- **Context window: 88/100.** Verified 1M tokens (AA); capped because no public full-depth needle-recall score found.
- **Multimodal: 65/100.** Text + image + speech + video in, text out per AA; capped by text-only output and zero multimodal benchmark data found.
- **Coding: 15/100.** No coding benchmarks found; scored conservatively due to zero data.
- **Cost efficiency: 85/100.** $0.10/$0.40 very competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 43.6/100.** Half-up mean of (15 + 35 + 88 + 65 + 15) / 5 = 43.6 → 44. Best-fit recommendation: all scores provisional due to extremely thin benchmark coverage (Intelligence Index only); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Artificial Analysis gemini-2-5-flash-lite page; benchlm.ai page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (Intelligence Index only) — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
