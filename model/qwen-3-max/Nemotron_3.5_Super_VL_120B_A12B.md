# Qwen3 Max — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-max, Artificial Analysis (`artificialanalysis.ai/models/qwen3-max`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary reasoning model; 1M context / text+in → text out; proprietary (weights not public).
- **Provider / access:** Qwen API (`qwen3-max`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Alibaba; knowledge cutoff not stated.
- **IDs:** `qwen3-max` (Qwen API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per Qwen docs; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **74.3%** (Artificial Analysis)
- Gert Labs: **43.74%** (Gert Labs rankings)

Reasoning / knowledge:

- AA-GPQA Diamond: **76.4%** (Artificial Analysis)
- AA-HLE: **11.9%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **15.6%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **50.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-Omniscience Index **-43.5%**; Accuracy **24.4%**; Hallucination rate **89.9%** (AA)
- AA-IFBench: **44.1%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **3.51%** (Vals AI)

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- AA-LCR: **50.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 12 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** τ²-bench (74.3%), Gert Labs (43.74%); capped by extremely thin coverage — only 2 agentic benchmarks found.
- **Reasoning: 55/100.** GPQA Diamond 76.4%, AA-LCR (50.0%); capped by CritPt (0.0%), HLE (11.9%), AA-Omniscience accuracy (24.4%), Intelligence Index (15.6%), Hallucination rate (89.9%). Moderate reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai); AA-LCR 50.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 35/100.** No multimodal benchmarks found; capped by text-only output assumption and zero multimodal data.
- **Coding: 25/100.** Vibe Code Bench (3.51%); capped by extremely thin coding coverage — only 1 coding benchmark found at 3.51%.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 51.6/100.** Half-up mean of (55 + 55 + 88 + 35 + 25) / 5 = 56.0 → 56. Best-fit recommendation: all scores provisional due to thin coverage (12 of 639 slots); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Qwen3 Max model card + Artificial Analysis + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (12 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
