# Grok 4.20 — findings by Qwen 3.8 Max

- Source: xAI (`grok-4.20`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's March/April-2026 reasoning model whose signature trick is a **multi-agent mode — a leader agent plus 4 or 16 parallel agents inside a single call** ("a different reasoning shape for hard research and coding"). Fast (123 tok/s) with a huge **2M context**, but its independent composite scores are **mid-pack** (AA Index 26, *below* median; Vals Index #13/33; BenchAlign #62/228), and the line is **deprecated for Grok 4.3**.
- **Provider / access:** xAI API `x-ai/grok-4.20` and OpenRouter `x-ai/grok-4.20`; **not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights. AA tracks it as "Grok 4.20 0309 v2."
- **Release / knowledge:** Released **March–April 2026** (0309 beta → v2); knowledge cutoff not published.
- **IDs:** `x-ai/grok-4.20`; AA `grok-4-20` (reasoning); a `grok-4.20-multi-agent-beta` route also exists.
- **Context window:** **2M** per AA / OpenRouter / BenchLM; **xAI's own docs list 1M with 30K max output** — a documentation discrepancy (⚠ flagged). Either way it is a very large window with a modest ~30K write allowance.
- **Modalities:** AA independently confirms **text + image in → text out**; meta additionally claims **file/PDF**. Reasoning yes. No video/audio; text-only output. (A **Vals Multimodal Index** row confirms it handles multimodal tasks.)
- **Pricing (as of 2026-10-26):** **$1.25 / $2.50** per 1M in/out under a 200K prompt, **$2.50 / $5.00** at ≥200K; **$0.20 cached**, **84% cache discount**. AA calls both base rates "competitively priced" (medians $2.00/$10.00). Multi-agent runs cost more per request.
- **Architecture:** Closed weights; parameters undisclosed. Distinguished by the leader + 4/16 parallel-agent orchestration mode.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (deprecation-flagged, 2/4-unit estimate), Vals AI (Index + Multimodal Index), and BenchLM/BenchAlign. Vendor figures (SWE-bench, LiveCodeBench) are xAI's, "by harness." Grok 4.20 is deprecated (AA suggests Grok 4.3), so AA runs only the default 10k workload.

Independent (current, rebased):

- **AA Intelligence Index v4.3.2: 26 (Estimated), #124/221** — **below the comparable median of 28** ("below average in intelligence"); only **2 of 4** units, so a weak-signal estimate. AA speed **122.8 tok/s** (#44/188, "**notably fast**" vs 83; **4/4** units) — a real strength.
- **Vals Index: #13/33 (57.70% accuracy)**; **Vals Multimodal Index: #14/23 (53.96%)** — mid-pack on both composites.
- **BenchAlign (BenchLM): #62/228, score 57.39/100** (evidence status "Estimated") — top ~27%, i.e. respectable but not frontier.

Vendor (xAI, "by harness"):

- **SWE-bench 72–77%** (range depends on harness); **LiveCodeBench 84.3%**. For scale, current leaders are far higher (Grok 4.6 tops SWE-bench Verified at 95.6%; Claude Opus 5.5 leads SWE-bench Pro at 89.9%), so Grok 4.20's coding is mid-pack in Oct 2026.
- Multi-agent mode (leader + 4/16 agents) positioned for hard research/coding.

> Provenance: AA (26, 2/4-unit estimate), Vals Index (#13/33, 57.70%), Vals Multimodal (#14/23, 53.96%), and BenchAlign (#62/228, 57.39) are independent and consistently **mid-pack**; SWE-bench 72–77% / LiveCodeBench 84.3% are vendor. The multi-agent mode is a genuine architectural differentiator but is not separately scored by the neutral harnesses (single-call evals), and it costs more per request.
> Meta verification: accurate — multi-agent (leader + 4/16) ✓, SWE-bench 72–77% ✓ / LiveCodeBench 84.3% ✓ (vendor), `$1.25/$2.50` (<200K) / `$2.50/$5.00` (≥200K) + `$0.20 cached` ✓ (AA/xAI), "deprecated for Grok 4.3" ✓ (AA banner), `noFreeId` / not on Zen ✓. **One flag:** context is **2M per AA/OpenRouter/BenchLM but 1M per xAI docs** (with 30K output) — unresolved discrepancy, documented. Enriched from AA/Vals/BenchLM: Index **26 (est, #124/221, below median 28)**, **122.8 tok/s (notably fast, 4/4)**, **Vals Index #13/33 (57.70%)**, **BenchAlign #62/228 (57.39)**, released **Mar–Apr 2026**.

### Normalized scores (1–100)

- **Tool use: 78/100.** The **multi-agent mode (leader + 4/16 parallel agents)** is a distinctive agentic capability, and fast throughput (123 tok/s) + a 2M context suit long agent sweeps. Held to mid-band because the neutral composites are mid-pack (**Vals Index #13/33**), the multi-agent trick isn't captured by single-call harnesses and costs more per request, and the model is deprecated.
- **Reasoning: 76/100.** Mixed-to-mid independent signals: **AA Index 26 is below the median 28** (though only a 2/4-unit estimate), **Vals Index 57.70% (#13/33)** and **BenchAlign 57.39/100 (#62/228)** are respectable-but-mid-pack. The multi-agent mode offers a different reasoning shape for hard problems, but the absolute composite is not frontier, and it's deprecated for Grok 4.3.
- **Context window: 87/100.** **2M** per AA/OpenRouter/BenchLM — the largest tier (2× proven-1M at 85–86) — but tempered to just below the full 2M band (88) by **xAI's own docs listing 1M** with a modest ~30K max output, plus deprecation and no independent long-context *retrieval* validation.
- **Multimodal: 79/100.** AA verifies **text + image**; meta adds **file/PDF** (vendor-claimed); a **Vals Multimodal Index (#14/23, 53.96%)** confirms mid-pack multimodal capability. No video/audio, text-only output — image(+file) tier, mid-pack quality.
- **Coding: 78/100.** Vendor **SWE-bench 72–77%** and **LiveCodeBench 84.3%** are solid but **mid-pack** against current leaders (SWE-Verified 95.6%), there is no independent Vals *SWE-bench* row (the Vals Index is a composite), and the model is deprecated. Vendor-strong-published tier.
- **Cost efficiency: 84/100.** **$1.25/$2.50** (<200K) with an **84% cache discount**, $0.20 cached, and fast 123 tok/s — AA calls it "well priced" for its band, cheaper than $3/$15 flagships. Docked for the ≥200K price doubling ($2.50/$5.00), the multi-agent per-request premium, and deprecation. Not counted toward Overall.
- **Overall Score: 80/100.** Mean of Tool 78 + Reasoning 76 + Context 87 + Multimodal 79 + Coding 78 = 398 / 5 = 79.6 → 80. Best fit: a **fast, huge-context, multi-agent reasoning model** whose distinctive leader+agents mode suits parallelizable research/coding, but whose neutral composites are mid-pack and which is deprecated — adopt Grok 4.3+ or a current leader for new work; consider 4.20 only if the multi-agent shape specifically fits an existing pipeline. **Divergence note:** curated queue 79.9 vs my 80 → **+0.1** (essentially aligned — one of my tightest matches). The strong *features* (2M context 87, multi-agent tool use, 123 tok/s, competitive pricing) balance the mid-pack *composite* (AA 26 below median, Vals #13/33, BenchAlign #62/228) and deprecation, landing right on the curated score. Unlike grok-4 (−4.6) or grok-4.1-fast (−1.5), here the curated 79.9 already reflects the same mid-pack-but-feature-rich reality I measured.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `grok-4-20` page, deprecation-flagged with estimated Index; Vals AI Grok 4.20 Reasoning Index + Multimodal Index; BenchLM/BenchAlign leaderboard; xAI docs and OpenRouter listing for pricing/context/multi-agent; onyx.app coding-LLM context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
