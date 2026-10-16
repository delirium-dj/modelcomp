# GPT-OSS-120B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Hugging Face model card (openai/gpt-oss-120b); Artificial Analysis (`artificialanalysis.ai/models/gpt-5-nano`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B
- **Short description:** OpenAI's proprietary fast reasoning model (released August 7, 2025 per AA); deprecated by GPT-5.4 nano; 400K context / text+image in → text out; $0.05/$0.40 per MTok; knowledge cutoff May 2024; 2 API providers per AA.
- **Provider / access:** OpenAI API (`gpt-5-nano`), 2 API providers per AA; proprietary (weights not public).
- **Release / knowledge:** Released August 7, 2025 (AA); knowledge cutoff May 2024.
- **IDs:** `gpt-5-nano` (OpenAI API / OpenRouter). No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.05/M input, $0.40/M output (AA; cache discount 90%, blended rate $0.05).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

All benchmarks below come from Artificial Analysis only; benchlm.ai page shows 0 benchmarks covered.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **13** (#12 of 51 non-reasoning models; estimated)
- No GPQA, HLE, MMLU-Pro, ARC-AGI, FrontierMath, or other reasoning/knowledge benchmarks found beyond the Intelligence Index composite.

Coding:

- No coding benchmarks found.

Agentic / tool use:

- No agentic benchmarks found.

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- Declared 400K context (benchlm.ai, AA); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (only Intelligence Index available).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** No agentic benchmarks found; scored conservatively due to zero data.
- **Reasoning: 45/100.** Intelligence Index 13 (above median for its class); capped by zero reasoning benchmarks found beyond the Intelligence Index composite.
- **Context window: 75/100.** Verified 400K tokens (benchlm.ai + AA); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 55/100.** Text+image in, text out per AA; capped by zero multimodal benchmark data found.
- **Coding: 25/100.** No coding benchmarks found; scored conservatively due to zero data.
- **Cost efficiency: 75/100.** $0.05/$0.40 competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 45/100.** Half-up mean of (25 + 45 + 75 + 55 + 25) / 5 = 46.0 → 46. Best-fit recommendation: all scores provisional due to extremely thin benchmark coverage (Intelligence Index only); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai GPT-5 nano model page; Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (Intelligence Index only) — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
