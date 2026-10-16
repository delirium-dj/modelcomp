# Gemini 2.0 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-2-0-flash (Google Gemini 2.0 Flash model card), Artificial Analysis (`artificialanalysis.ai/models/gemini-2-0-flash`), Google DeepMind Gemini 2.5 technical report (arxiv:2507.06261)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's proprietary non-reasoning model; 1M context / text+in → text out; sibling: Gemini 2.0 Flash-Lite; no public overall score assigned (unranked on benchlm.ai).
- **Provider / access:** Google API (`gemini-2.0-flash`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Google; knowledge cutoff not stated on benchlm.ai.
- **IDs:** `gemini-2.0-flash` (Google API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **29.5%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **65.2%** (Google DeepMind Gemini 2.5 technical report — cross-ref)
- AA-GPQA Diamond: **62.3%** (Artificial Analysis)
- HLE: **4.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **8.9%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **31.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-Omniscience Index **-42.5%**; Accuracy **23.5%**; Hallucination rate **86.2%** (AA)
- AA-IFBench: **40.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **21.4%** (Google DeepMind Gemini 2.5 technical report — cross-ref)

Multimodal & grounded:

- MMMU: **69.3%** (Google DeepMind Gemini 2.5 technical report — cross-ref)

Long context:

- AA-LCR: **31.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 15 of 639 slots, no overall score assigned).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** τ²-bench (29.5%); capped by extremely thin coverage — only 1 agentic benchmark found.
- **Reasoning: 45/100.** GPQA 65.2%, AA-GPQA Diamond 62.3%, AA-LCR (31.3%), IFBench (40.2%); capped by CritPt (0.0%), HLE (4.3%), AA-HLE not found separately, Intelligence Index (8.9%).
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai); AA-LCR 31.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 60/100.** MMMU (69.3%); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 30/100.** SWE-bench Verified (21.4%); capped by extremely thin coverage — only 1 coding benchmark found.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 50.6/100.** Half-up mean of (30 + 45 + 88 + 60 + 30) / 5 = 50.6 → 51. Best-fit recommendation: all scores provisional due to thin coverage (15 of 639 slots, no overall score on benchlm.ai); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Gemini 2.0 Flash model card + Artificial Analysis + Google DeepMind Gemini 2.5 technical report independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (15 of 639 slots, no overall score) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
