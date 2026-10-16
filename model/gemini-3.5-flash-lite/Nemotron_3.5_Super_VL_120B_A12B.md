# Gemini 3.5 Flash-Lite — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-3-5-flash-lite (Google Gemini 3.5 Flash-Lite launch page), Artificial Analysis (`artificialanalysis.ai/models/gemini-3-5-flash-lite`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's proprietary reasoning model (released July 21, 2026 per AA); 1M context / text+image+speech+video in → text out; $0.30/$2.50 per MTok; sibling: Gemini 3.1 Flash-Lite; 4 API providers per AA; very fast (452.6 t/s).
- **Provider / access:** Google API (`gemini-3.5-flash-lite`), 4 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released July 21, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `gemini-3.5-flash-lite` (Google API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, speech, and video in; text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.30/M input, $2.50/M output (AA; cache discount 90%, blended rate $0.33).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google launch page; Vals AI 50.2%)
- OSWorld-Verified: **74%** (Google launch page)
- GDPval-AA: **1139 Elo** (Google launch page); normalized **24.2%** (AA)
- AA Agentic Index: **15.9%** (Artificial Analysis)

Reasoning / knowledge:

- MRCRv2: **72.2%** (Google launch page)
- Artificial Analysis Intelligence Index: **22.2%** (#40 of 171; median 13)
- AA-LCR (long-context reasoning): **76.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-HLE: **18.8%** (Artificial Analysis)
- AA-GPQA Diamond: **83.8%** (Artificial Analysis)
- GPQA Diamond (Vals): **83.8%** (Vals AI)
- MMLU-Pro: **85.8%** (Vals AI)
- AA-Omniscience Index **5.2%**; Accuracy **29.5%**; Hallucination rate **34.4%** (AA)
- FrontierMath v2 Tiers 1-3: **25.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **0.000%** (Epoch AI)

Coding:

- SWE-bench Pro: **54.2%** (Google launch page)
- AA-SciCode: **41.3%** (Artificial Analysis)
- LiveCodeBench v6: **79.0%** (Vals AI)
- SWE-bench (Vals): **75.0%** (Vals AI)
- AA Coding Index: **49.3%** (Artificial Analysis)

Multimodal & grounded:

- AA-MMMU-Pro: **79.0%** (Artificial Analysis)

Long context:

- AA-LCR: **76.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Terminal-Bench 2.1 (54.0%), OSWorld-Verified (74%), GDPval-AA (1139 Elo); capped by weak GDPval-AA normalized (24.2%), AA Agentic Index (15.9%). Moderate agentic tool-use profile.
- **Reasoning: 66/100.** MRCRv2 (72.2%), AA-GPQA Diamond (83.8%), MMLU-Pro (85.8%), AA-LCR (76.0%); capped by CritPt (0.0%), AA-HLE (18.8%), Intelligence Index (22.2%), FrontierMath Tier 4 (0.0%). Strong knowledge/GPQA reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 76.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 72/100.** Text + image + speech + video in, text out; AA-MMMU-Pro (79.0%); capped by text-only output.
- **Coding: 57/100.** SWE-bench Pro (54.2%), LiveCodeBench v6 (79.0%), SWE-bench Vals (75.0%), AA-SciCode (41.3%); capped by AA Coding Index (49.3%). Moderate verified coding.
- **Cost efficiency: 75/100.** $0.30/$2.50 competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 68/100.** Half-up mean of (55 + 66 + 90 + 72 + 57) / 5 = 68.0 → 68. Best-fit recommendation: strong context window and GPQA/MMLU-Pro knowledge reasoning at 1M context with competitive pricing and fast output (452.6 t/s); verify on HLE-class and agentic tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Google Gemini 3.5 Flash-Lite launch page + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
