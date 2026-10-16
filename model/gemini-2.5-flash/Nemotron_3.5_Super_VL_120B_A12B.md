# Gemini 2.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-2-5-flash (Google Gemini 2.5 Flash model page), Artificial Analysis (`artificialanalysis.ai/models/gemini-2-5-flash`), OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's proprietary non-reasoning model (released May 20, 2025 per AA); deprecated by Gemini 2.5 Flash Preview (Sep '25); 1M context / text+image+speech+video in → text out; $0.30/$2.50 per MTok; 2 API providers per AA; very fast (210.3 t/s).
- **Provider / access:** Google API (`gemini-2.5-flash`), 2 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released May 20, 2025 (AA); knowledge cutoff Jan 2025.
- **IDs:** `gemini-2.5-flash` (Google API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, speech, and video in; text out per AA; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.30/M input, $2.50/M output (AA; cache discount 90%, blended rate $0.33).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **14.9%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **9.8%** (Artificial Analysis)
- AA-GPQA Diamond: **68.3%** (Artificial Analysis)
- AA-HLE: **4.7%** (Artificial Analysis)
- AA-Omniscience Index **-42.6%**; Accuracy **26.1%**; Hallucination rate **93.0%** (AA)
- AA-LCR (long-context reasoning): **49.9%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- AA-IFBench: **39.0%** (Artificial Analysis)

Coding:

- None found for this variant.

Multimodal & grounded:

- AA-MMMU-Pro: **65.5%** (Artificial Analysis)
- Design Arena Website: **1117** (OpenRouter)

Long context:

- AA-LCR: **49.9%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 12 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** τ²-bench (14.9%); capped by extremely thin coverage — only 1 agentic benchmark found.
- **Reasoning: 45/100.** AA-GPQA Diamond 68.3%, AA-LCR (49.9%); capped by CritPt (1.4%), AA-HLE (4.7%), AA-Omniscience accuracy (26.1%), Intelligence Index (9.8%), Hallucination rate (93.0%). Weak reasoning profile.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 49.9%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 65/100.** Text + image + speech + video in, text out per AA; AA-MMMU-Pro (65.5%), Design Arena Website 1117; capped by text-only output.
- **Coding: 20/100.** No coding benchmarks found for this variant; scored conservatively due to zero data.
- **Cost efficiency: 60/100.** $0.30/$2.50 competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 48.6/100.** Half-up mean of (25 + 45 + 88 + 65 + 20) / 5 = 48.6 → 49. Best-fit recommendation: all scores provisional due to thin coverage (12 of 639 slots); strong multimodal input support but weak reasoning and coding results — verify broadly pending broader benchmark coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Gemini 2.5 Flash model page + Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (12 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
