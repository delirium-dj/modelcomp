# Gemini 2.5 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-2-5-pro (Google Gemini 2.5 Pro model card), Artificial Analysis (`artificialanalysis.ai/models/gemini-2-5-pro`), Vals AI, Epoch AI, Phi-4-reasoning-plus model card
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's legacy flagship model (released June 5, 2025 per AA); deprecated by Gemini 3 Pro Preview; 1M context / text+image+speech+video in → text out; $1.25/$10 per MTok; knowledge cutoff Jan 2025; 2 API providers per AA.
- **Provider / access:** Google API (`gemini-2.5-pro`), 2 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released June 5, 2025 (AA); knowledge cutoff Jan 2025.
- **IDs:** `gemini-2.5-pro` (Google API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, speech, and video in; text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $10.00/M output (AA; cache discount 90%, blended rate $1.34).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **54.1%** (Artificial Analysis)
- GDPval-AA: **616 Elo** (Artificial Analysis); normalized **0.0%**
- AA Agentic Index: **3.5%** (Artificial Analysis)
- Gert Labs: **42.01%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA: **83%** (Google Gemini 2.5 Pro model page)
- GPQA Diamond: **84.4%** (Artificial Analysis)
- HLE: **18.8%** (Google Gemini 2.5 Pro model page); AA-HLE **22.5%**
- AIME 2024: **92%** (Phi-4-reasoning-plus model card comparison table — cross-ref)
- Artificial Analysis Intelligence Index: **16.1%** (#174 of 216; median 27)
- AA-LCR (long-context reasoning): **69.0%** (Artificial Analysis)
- CritPt: **2.6%** (Artificial Analysis)
- AA-Omniscience Index **-16.3%**; Accuracy **39.1%**; Hallucination rate **90.9%** (AA)
- AA-IFBench: **48.7%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **24.561%** (Epoch AI)
- FrontierMath v2 Tier 4: **0.000%** (Epoch AI)

Coding:

- SWE-bench Verified: **63.8%** (Google Gemini 2.5 Pro model page)
- SWE-bench (Vals): **54.4%** (Vals AI)
- Vibe Code Bench: **0.40%** (Vals AI)
- AA-SciCode: **46.3%** (Artificial Analysis)
- AA Coding Index: **33.3%** (Artificial Analysis)

Multimodal & grounded:

- AA-MMMU-Pro: **74.9%** (Artificial Analysis)
- Design Arena Website: **1169** (OpenRouter)

Long context:

- AA-LCR: **69.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** τ²-bench (54.1%), Gert Labs (42.01%); capped by very weak GDPval-AA normalized (0.0%), AA Agentic Index (3.5%), GDPval-AA (616 Elo). Weak agentic tool-use profile.
- **Reasoning: 58/100.** GPQA 83%, GPQA Diamond 84.4%, AIME 2024 92%, AA-LCR (69.0%); capped by CritPt (2.6%), HLE (18.8%), AA-HLE (22.5%), AA-Omniscience accuracy (39.1%), Intelligence Index (16.1%), FrontierMath Tier 4 (0.0%). Strong math/GPQA knowledge reasoning, weakest on HLE and open-ended reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 69.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 72/100.** Text + image + speech + video in, text out; AA-MMMU-Pro (74.9%), Design Arena Website 1169; capped by text-only output.
- **Coding: 49/100.** SWE-bench Verified (63.8%), AA-SciCode (46.3%), SWE-bench Vals (54.4%); capped by Vibe Code Bench (0.40%), AA Coding Index (33.3%). Moderate coding.
- **Cost efficiency: 85/100.** $1.25/$10 competitive pricing with 90% cache discount, $0.33/task; not counted toward Overall.
- **Overall Score: 61.8/100.** Half-up mean of (40 + 58 + 90 + 72 + 49) / 5 = 61.8 → 62. Best-fit recommendation: strong context window and GPQA/math reasoning at competitive price; verify on HLE-class and agentic coding tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Google Gemini 2.5 Pro model card + Artificial Analysis + Vals AI + Epoch AI + Phi-4-reasoning-plus model card independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
