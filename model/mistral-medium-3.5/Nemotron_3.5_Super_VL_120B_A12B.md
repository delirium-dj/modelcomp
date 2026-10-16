# Mistral Medium 3.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Artificial Analysis (`artificialanalysis.ai/models/mistral-medium-3-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights reasoning model (released April 29, 2026 per AA); 128B parameters; 256K context / text+image in → text out; $1.50/$7.50 per MTok; Modified MIT License; sibling: none listed.
- **Provider / access:** Mistral API (`mistral-medium-3.5`), 2 API providers per AA; open weights on Hugging Face (`mistralai/Mistral-Medium-3.5-128B`).
- **Release / knowledge:** Released April 29, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `mistral-medium-3.5` (Mistral API), `mistralai/Mistral-Medium-3.5-128B` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (AA). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.50/M input, $7.50/M output (AA; cache discount 90%, cost per task $0.50).
- **Architecture:** Open-weights model, 128B parameters, Modified MIT License (commercial use allowed with restrictions).

### Raw benchmarks found

All benchmarks below come from Artificial Analysis only; no benchlm.ai page exists for this model.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14** (#8 of 67 open-weights; median 8)
- No GPQA, HLE, MMLU-Pro, ARC-AGI, FrontierMath, or other reasoning/knowledge benchmarks found.

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
- **Reasoning: 50/100.** Intelligence Index 14 (above median for its class); capped by zero reasoning benchmarks found beyond the Intelligence Index composite.
- **Context window: 75/100.** Verified 256K tokens (AA); capped because context below 1M frontier and no public full-depth needle-recall score found.
- **Multimodal: 45/100.** Text+image in, text out per AA; capped by text-only output and zero multimodal benchmark data found.
- **Coding: 15/100.** No coding benchmarks found; scored conservatively due to zero data.
- **Cost efficiency: 40/100.** $1.50/$7.50 expensive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 40/100.** Half-up mean of (15 + 50 + 75 + 45 + 15) / 5 = 40.0 → 40. Best-fit recommendation: all scores provisional due to extremely thin benchmark coverage (Intelligence Index only); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Artificial Analysis mistral-medium-3-5 page; benchlm.ai page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (Intelligence Index only) — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
