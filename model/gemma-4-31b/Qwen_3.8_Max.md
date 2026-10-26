# Gemma 4 31B — findings by Qwen 3.8 Max

- Source: Google (`gemma-4-31b`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's **laptop-class open-weight workhorse** — a **30.7B dense** (not MoE) Apache-2.0 model "purpose-built for advanced reasoning and agentic workflows," with a generational leap in math (**AIME 2026 89.2%, ~4× Gemma 3 27B's 20.8%**) and competitive coding (**LiveCodeBench v6 80%, Codeforces Elo 2150**) that runs on a single accelerator. **Current** (released April 2026, not deprecated).
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face `google/gemma-4-31B-it`; `google/gemma-4-31b-it` in this dataset; free local deployment + community/standard API hosting (from ~$0.09). Free tier: open weights for local deployment.
- **Release / knowledge:** Released **April 2026**; knowledge cutoff not published.
- **IDs:** `google/gemma-4-31b-it`; AA `gemma-4-31b` (reasoning variant).
- **Context window:** **256K** tokens (AA-confirmed, ~384 A4 pages; llm-stats lists 262K = 256Ki). ⚠ **Meta correction:** the meta `contextWindow` field says "128K context," but AA, the meta's own `short`/`tradeoff` ("256K window"), and llm-stats all confirm **256K** — the 128K field is wrong.
- **Modalities:** AA independently confirms **text + image + video in → text out** (reasoning yes). ⚠ **Meta correction:** the meta `modalities` field says "Text in/out only," which is **wrong** — the model is multimodal (AA verifies image + video, and the meta's own `short` cites **MMMU-Pro 76.9%**, a vision benchmark). No audio; text-only output.
- **Pricing (as of 2026-10-26):** **$0.00 / $0.00** for the open weights (AA #1/23 — the cheapest class); free to self-host under Apache 2.0 (commercial-friendly); hosted routes from ~$0.09.
- **Architecture:** **30.7B dense** transformer (Apache 2.0), native FP8-friendly; reasoning variant. Dense (not MoE) — the "31B depth" that runs on a single accelerator but caps the hardest agentic runs.

### Raw benchmarks found

> Independent anchor: Artificial Analysis (full workload set — this model is current, with a complete **4 of 4** unit Index measurement). Vendor figures (Google) are corroborated across multiple independent secondary sources (towardsdeeplearning, barnacle.ai, dev.to, llm-stats). No Vals AI SWE-bench row found.

Independent:

- **AA Intelligence Index v4.3.2: 15, #19/141** open-weight (median 8 → "well above average"; **4 of 4** units — a full, reliable measurement, not an estimate). Top ~13% of open-weight models.
- AA speed **35.2 tok/s** (#59/64, "**notably slow**" vs 78; 1/4 units) — the clear weakness (dense 31B on a single accelerator). AA verbosity **49M** Index tokens (#10/27, "**fairly concise**" vs median 82M); AA cost **$0.00/task** (#1/23).

Vendor (Google, corroborated by multiple secondary sources):

- Math: **AIME 2026 89.2%** (vs Gemma 3 27B's 20.8% — a ~4× one-generation jump; olympiad-math strength).
- Coding: **LiveCodeBench v6 80%**; **Codeforces Elo 2150** (competitive play).
- Vision: **MMMU-Pro 76.9%** (multimodal — confirms image understanding).
- Positioning: "advanced reasoning and agentic workflows"; strong long-context recall; "last year's best AI model now runs on your laptop."

> Provenance: the AA Index (15, #19/141, full 4/4 units) is independent and decision-critical; AIME/LiveCodeBench/Codeforces/MMMU-Pro are vendor figures but corroborated across several independent secondary sources, so I treat them as reliable-but-not-harness-verified. Tradeoff (meta, accurate): "No hosted frontier sibling for the heavy stuff — the 256K window and 31B depth cap the hardest agentic runs."
> Meta verification: **two fields corrected** — context is **256K** (not the "128K" field) and modality is **text+image+video** (not "Text in/out only"), both per AA. Accurate: 30.7B dense ✓ (AA), Apache 2.0 ✓ (AA), free open weights ✓ (AA $0.00, #1/23), AIME 89.2% ✓ / Codeforces 2150 ✓ / MMMU-Pro 76.9% ✓ (corroborated). Enriched from AA: Index **15 (#19/141, 4/4 units)**, **35.2 tok/s (notably slow)**, **49M verbosity (fairly concise)**, released **April 2026**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Marketed for "agentic workflows," but there is **no dedicated independent tool-use/agentic benchmark** (no τ², Terminal-Bench, or Vals row), and the meta's own tradeoff is explicit that the **"31B depth caps the hardest agentic runs."** The AA Index (15) runs agentic evals but the composite is modest. Scored as agentic-capable-but-depth-limited.
- **Reasoning: 81/100.** A genuine standout for its class — **AIME 2026 89.2%** is elite (frontier-competitive math, ~4× the prior Gemma generation) and the **AA Index of 15 is #19/141 open-weight with a full 4/4-unit measurement** (well above the median 8). Held below the 82+ frontier-open-weight band because the *absolute* composite (15) is modest vs large MoE leaders (GLM-5.3-Flash 42, DeepSeek V4.1-Flash 45) and the 31B dense depth bounds broader reasoning/knowledge.
- **Context window: 78/100.** AA-confirmed **256K** with strong long-context recall — solidly my 256K band, well short of the 400K/1M/2M tiers.
- **Multimodal: 82/100.** AA-verified **text + image + video** input (three modalities) with a decent **MMMU-Pro 76.9%** vision score — the native-video tier. No audio and text-only output, and MMMU-Pro is below dedicated-VL specialists (88–92), so not higher.
- **Coding: 79/100.** Strong published competitive coding — **LiveCodeBench v6 80%** and **Codeforces Elo 2150** (both corroborated) — but **no independent SWE-bench / agentic-coding row**, and the 31B depth caps repo-scale work. Strong-published tier, not the elite Vals-verified tier.
- **Cost efficiency: 94/100.** **Free Apache-2.0 open weights** (AA #1/23 cheapest, $0.00/task), commercial-friendly, and dense-31B tractable on a single accelerator / laptop-class hardware. Docked slightly from 95 by the **notably slow 35.2 tok/s** (#59/64), which raises effective serving time/cost. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 74 + Reasoning 81 + Context 78 + Multimodal 82 + Coding 79 = 394 / 5 = 78.8 → 79. Best fit: the **best free, local, do-anything open-weight 31B** — elite math (AIME 89.2%), solid coding (LCB 80%, Codeforces 2150), genuine multimodality (text+image+video), 256K context, and Apache-2.0 self-hosting; pick it for on-prem reasoning/coding/vision where cost and privacy dominate, and reach for a large MoE (GLM-5.3-Flash, DeepSeek V4.1-Flash) or hosted frontier model when you need hard agentic runs, speed, or top-tier composite intelligence. **Divergence note:** curated queue 80 vs my 79 → **−1.0** (essentially aligned). I land a touch below the queue because the model's *absolute* composite (AA Index 15) is modest and its agentic tooling is unverified/depth-capped, even though its math/coding/multimodal headliners are strong for a free 31B dense model; the very-slow 35 tok/s also tempers it (though Cost, its best dimension at 94, is not counted toward Overall).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `gemma-4-31b` reasoning page with full 4/4-unit Index; Google DeepMind Gemma 4 model page; corroborating secondary sources towardsdeeplearning, barnacle.ai, dev.to, llm-stats, gemma4all for AIME/LiveCodeBench/Codeforces/MMMU-Pro; Hugging Face `google/gemma-4-31B-it`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
