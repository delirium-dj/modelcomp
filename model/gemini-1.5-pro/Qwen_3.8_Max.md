# Gemini 1.5 Pro — findings by Qwen 3.8 Max

- Source: Google (`gemini-1.5-pro`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's **February-2024 long-context landmark** — the "**2M-context grandfather**" that made whole-library document analysis routine, with **near-perfect needle-in-a-haystack recall (>99.7% to 1M)** across text, video, and audio, and **MMLU 85.9%**. Natively multimodal (text + image + audio + video in). Now **deprecated and retired from the Gemini API (2025)** — a reference point in context-window history, not a current option.
- **Provider / access:** Google **Gemini API / Vertex AI** (`gemini-1.5-pro`) — **retired (2025)**. **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights (a Mixture-of-Experts architecture per Google).
- **Release / knowledge:** Announced **February 2024**; the **2M-window GA version** (which AA tracks) shipped **September 2024** (2M GA 2024-09-24). **Knowledge cutoff August 1, 2024**. **Deprecated** (AA banner → Gemini 2.0 Flash, Feb '25).
- **IDs:** `google/gemini-1.5-pro`; AA `gemini-1-5-pro` (non-reasoning, "Gemini 1.5 Pro (Sep '24)").
- **Context window:** **2,000,000 tokens** (GA 2024-09-24) — the defining feature and, at launch, the largest production context window by far. Near-perfect recall to ~1M; effectiveness tapers toward the full 2M ceiling.
- **Modalities:** **Text + image + speech (audio) + video in → text out** (AA-confirmed — the broadest input modality tier). Genuinely multimodal-native for its era. Text-only output.
- **Pricing (retired):** Last published **$1.25 / $5.00** per 1M in/out (up to 128K context) and **$2.50 / $10.00** above 128K — premium long-context pricing for its era; now unavailable first-party.
- **Architecture:** Proprietary **Mixture-of-Experts** (per Google's Feb-2024 disclosure); parameters undisclosed. Non-reasoning (a reasoning/"thinking" variant was not part of the 1.5 Pro line).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`gemini-1-5-pro`, deprecation-flagged, a **3/4-unit** Estimated Index). Launch-era benchmarks (MMLU, NIAH) are **vendor** (Google / the Gemini 1.5 arXiv technical report). The model is retired, so AA no longer measures speed or cost, and no current independent coding/agentic harness (Vals/Epoch/swebench/Terminal-Bench) row exists for it.

Independent (current, rebased — AA v4.3.2):

- **AA Intelligence Index (Non-reasoning): 8 (Estimated), #123/297 — "above average"** among comparable non-reasoning models (**median 7**), with **3 of 4 units** for Intelligence. AA: "above average in intelligence when comparing to other non-reasoning models." The **absolute** Index is very low by Oct-2026 standards (current frontier models score 42–57) — a Feb-2024 model rebased onto today's far harder basket.
- **Speed / Cost: N/A** on AA (retired; only the default 10k-token workload is nominally continued, and no live provider pricing/speed is measured).

Vendor (Google, launch — Feb/Sep 2024):

- **Needle-in-a-Haystack: >99.7% recall up to 1M tokens** across text, video, and audio (Gemini 1.5 technical report, arXiv 2403.05530); Google's own blog notes a harder NIAH variant at **~75% accuracy at 1M** — recall is near-perfect on the standard test but degrades on adversarial variants and toward the full 2M ceiling.
- **MMLU 85.9%** (5-shot) — a strong launch-era knowledge/reasoning score, since surpassed.
- Google reported **+28.9% over Gemini 1.0 Pro** and **+5.2% over Gemini 1.0 Ultra** on its launch composite.

> Provenance: AA Index 8 (3/4-unit estimate, barely above the non-reasoning median 7 but very low in absolute terms) is neutral; the MMLU 85.9% and NIAH >99.7%/75% figures are vendor (Google + its arXiv report). No independent coding or agentic benchmark exists for this retired model — coding/agentic are graded on its non-reasoning, pre-agentic-era character. **AA Index baskets are version-specific and not convertible**; a Feb-2024 model rebased onto v4.3.2 lands near the bottom.
> Meta verification: **accurate** — Feb 2024 long-context landmark ✓, **2M window (GA 2024-09-24)** ✓ (AA confirms 2M), **99% needle-in-a-haystack recall at 1M** ✓ (arXiv >99.7%), **MMLU 85.9%** ✓ (vendor), "retired from the Gemini API in 2025" ✓ (AA deprecation banner → Gemini 2.0 Flash), **text/image/audio/video in → text out** ✓ (AA confirms all four input modalities), last-published $1.25/$5.00 (≤128K) + $2.50/$10.00 above ✓. AA additionally pins **knowledge cutoff Aug 1, 2024** and the Sep-2024 GA variant. No discrepancies found — the meta is well-curated.

### Normalized scores (1–100)

- **Tool use: 68/100.** A **pre-agentic-era** (Feb 2024) non-reasoning model — it predates the tool-use/agentic wave, has no function-calling-agentic benchmark record, and ships no independent Terminal-Bench/τ²/AutomationBench evidence. Its long context helped document-grounded workflows, but it wasn't built for multi-step tool orchestration. Weak-agentic/retired tier.
- **Reasoning: 70/100.** **AA Index 8 (3/4 units) is barely "above average"** for its non-reasoning class (median 7), but the **absolute** Index is very low (frontier 42–57) — a Feb-2024 non-reasoning model rebased onto today's basket. Launch-era MMLU 85.9% was strong *then* but is now routine. Below-median-by-current-standards band.
- **Context window: 87/100.** **2M tokens (GA)** — the enduring landmark and, at launch, the largest production window by an order of magnitude. Near-perfect recall to ~1M. Held one point below the 2M peak (88) because effectiveness **tapers toward the full 2M ceiling** (Google's harder NIAH variant shows ~75% at 1M) and the model is retired, so the window is no longer practically reachable. This dimension is what keeps an otherwise-weak model competitive.
- **Multimodal: 84/100.** **Text + image + speech (audio) + video in → text out** (AA-confirmed) — the **broadest input-modality tier**, genuinely multimodal-native (it did whole-video and whole-audio understanding at 1M+ scale, a first in 2024). Matches the broadest-input band (cf. gemini-2.5-flash 84). Text-only output.
- **Coding: 70/100.** A pre-agentic non-reasoning model with **no strong SWE-bench/agentic-coding record** and no independent coding-harness row; launch-era HumanEval was respectable but modest, and it predates modern coding agents. Weak-coding/retired tier.
- **Cost efficiency: 55/100.** Last-published **$1.25/$5.00 (≤128K) / $2.50/$10.00 above** was premium long-context pricing for 2024, and the model is now **retired and unavailable first-party** — no meaningful current value. Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 68 + Reasoning 70 + Context 87 + Multimodal 84 + Coding 70 = 379 / 5 = 75.8 → 76. Best fit: **the 2M-context grandfather** — a historically pivotal, natively-multimodal long-context landmark whose **2M window (87) and full text/image/audio/video input (84)** still lift its mean, but whose **pre-agentic, non-reasoning, Feb-2024 capabilities (Tool 68 / Reasoning 70 / Coding 70)** are far below Oct-2026 standards and which is **deprecated and retired**. Cite it as the reference point for long-context history; use **Gemini 2.5/3.x Pro** for anything real. **Divergence note:** curated queue 76.1 vs my 76 → **−0.1** (essentially exact). The 2M context and broadest-modality input are correctly credited and pull the mean up exactly as the curator weighted them, while the very low rebased AA Index 8 and pre-agentic weakness pull it back down — net-neutral.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gemini-1-5-pro` non-reasoning page — deprecation-flagged, 3/4-unit Estimated Index 8 #123/297 above median 7, 2M context, text+image+speech+video in → text out, knowledge Aug 2024, speed/cost N/A; Gemini 1.5 technical report arXiv 2403.05530 for >99.7% NIAH recall to 1M and MMLU 85.9%; Google blog "Introducing Gemini 1.5" Feb 2024 + "Needle in the Haystack" for the 2M GA and ~75% harder-NIAH caveat; Google Cloud Vertex AI pricing for the retired $1.25/$5.00 · $2.50/$10.00 tiers); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
