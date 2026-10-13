# Union Alpha — findings by GLM 5.3

- Source: Unbiased.ai / Circuit & Chisel (`stealth/union-alpha` → `unbiased/pareto` on OpenRouter)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — **REVEALED: Unbiased.ai's Pareto 26.9** (built by Circuit & Chisel, a distributed US/Canada team)
- **Short description:** Second pass resolves the mystery the first pass left open: **Union Alpha was revealed on 2026-09-18 (two days after the stealth listing) as Pareto 26.9 — a multimodal COMPOSITE model that runs several frontier and open models per request and keeps the best answer** (union-alpha.com/capitalandcompute/eneralabs). "The product is the orchestration layer, not a secret foundation model" (llmrumors) — which explains the anomalous community numbers (DeepSWE 74% beating GPT-5.6 Sol is best-of-N sampling, not one model's capability). **The free stealth preview ended early** (demand far beyond server capacity — yomimono/GIGAZINE reporting) and the endpoint moved to paid access; the formal launch was scheduled 2026-10-10. Positioning: "frontier AI at a quarter of GPT-6 Astra's price." Top use case: frontier-class coding/research answers at mid-tier prices, with the caveat that you're buying an ensemble router, not an auditable single model.
- **Provider / access:** OpenRouter **`unbiased/pareto`** ($2.50/$7.50, OpenAI-compatible; formerly `stealth/union-alpha`); OpenCode Go `opencode-go/union-alpha` (the free preview route has ended); Cloudflare AI Gateway proxying. OpenRouter states it is not the developer.
- **Release / knowledge:** stealth listing **2026-09-16**; reveal **2026-09-18**; free preview ended ~2026-09-17-23 (early); formal launch scheduled **2026-10-10**; knowledge cutoff not disclosed.
- **IDs:** `unbiased/pareto` (current), `stealth/union-alpha` (historical), `opencode-go/union-alpha` (Go, preview-ended).
- **Context window:** **262,144 tokens total / 131,072 max output** (confirmed on the paid OpenRouter listing).
- **Modalities:** text + image in; text out; tool calls (`tools`, `tool_choice`); structured output (`response_format`); streaming; no video/audio/PDF; no `reasoning_effort` control (the composite routes internally).
- **Pricing (as of 2026-10-13):** **$2.50 in / $7.50 out per 1M** — the free preview is over; the composite mechanism means each request internally consumes multiple member-model calls, so the margin math is Unbiased's problem and the buyer sees a single mid-tier rate; privacy: the OpenRouter route's upstream retention caveats remain.
- **Architecture:** **composite/orchestration layer over several frontier and open models** (identity confirmed by the vendor and corroborated by yfarmx's tokenizer-signature analysis — "consistent with the Pareto multi-model blend" family); no parameter count, weights, or license — there is no single underlying model to disclose; community theories (GLM, Kimi) superseded by the official reveal; do not conflate with Ox Alpha (Z.ai GLM-5.3-Flash).

### Raw benchmarks found

> Still no standardized harness rows exist for the endpoint (BenchLM's Pareto 26.9 page: 4 source-displayable rows, no overall score). The community measurements below are now *explained* by the best-of-N composite mechanism — treat them as the product's achieved scores, not a single model's.

Agent / tool use:

- Terminal-Bench v4.0: **~51% at ~$1.50/task** (community/developer report, AA 149-model context) — a plausible best-of-frontier result; τ³ / GDPval / Claw-Eval / MCP-Atlas: still no verified public score
- The launch-day OpenCode 23.14/40 coding snapshot misattribution (belongs to Omen Alpha) remains excluded

Reasoning / knowledge:

- **"Matches GPT-6 Astra benchmarks at 1/4 the price"** (eneralabs — vendor-adjacent positioning claim); "ties Astra on DeepSWE" (capitalandcompute)
- Benchable internal suite (retained, suite-internal): Reasoning 98.0% (90th pct), Hallucination/General Knowledge/Ethics 100%, Coding 94.0%, Mathematics 94.9%, Email Classification 99.0%, IF 76.0%
- GPQA / HLE / LCR / CritPt / AA Index: still no verified public score for the endpoint

Coding:

- **DeepSWE: 74% (community)** — edging GPT-5.6 Sol (explainx); the composite mechanism (best of several models per request) explains the super-single-model result
- Software-engineering chart ~73% vs ~74% GPT/Opus-class at ~$0.65/task (MindStudio, retained); SWE-bench Verified / LiveCodeBench / SciCode / Vibe: still no verified public score

Long context:

- 262,144-token window confirmed on the paid listing; no MRCR/RULER data; community reports of inconsistent context recall retained (plausible for a router whose members have heterogeneous windows).

Multimodal:

- Text+image in, text out — confirmed; exercised in the MindStudio vision-reasoning hands-on (retained).

### Normalized scores (1–100)

- **Tool use: 62/100.** Held: the composite mechanism supports the community TB4 ~51% row being real (best-of-frontier per request), and `tools`/`tool_choice` are verified — but no standardized τ³/GDPval/Claw rows exist, and an orchestration layer's tool behavior is only as good as its member routing, which is unaudited.
- **Reasoning: 62/100.** Raised from 60: the reveal explains the strong internal-harness numbers (best-of-N picks the best member's answer), and the "matches Astra" positioning is at least mechanism-plausible — still no standardized GPQA/HLE rows for the endpoint itself, keeping it provisional.
- **Context window: 72/100.** Held: 262,144/131,072 confirmed on the paid listing; no measured retrieval; member-window heterogeneity makes the effective window opaque.
- **Multimodal: 65/100.** Held: text+image in, text out; one real vision-reasoning exercise; no video/PDF/audio.
- **Coding: 74/100.** Raised from 72: the DeepSWE 74% community row (beating GPT-5.6 Sol) and SE ~73% near GPT/Opus-class are now mechanistically credible for a best-of-N composite — still capped by the absence of SWE-bench Verified/LiveCodeBench rows and the unaudited router.
- **Cost efficiency: 70/100.** Lowered from 100: **the free preview is over** — $2.50/$7.50 is mid-tier pricing; the value pitch is "Astra-class at ~1/4 of Astra's $10/$50," which is genuine if the composite really matches Astra, but you now pay real money for an unaudited ensemble.
- **Overall Score: 67/100.** (62 + 62 + 72 + 65 + 74) / 5 = 67.0, up from 66. Best-fit: a frontier-oracle router — best-of-several-models per request at $2.50/$7.50, credible DeepSWE-74-class coding answers, and no longer free; fine for benchmarking and cost-capped frontier work, but it is an orchestration product, not a model — identity, member list, and per-request routing remain unaudited, so don't make it a load-bearing production dependency.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (DDG-lite searches surfacing the official reveal ecosystem — union-alpha.com ("Now Pareto 26.9… the free stealth preview has ended. Paid API pricing: $2.50/$7.50"), cellcog's minute-by-minute 2026-09-16 listing timeline, eneralabs' "Astra at 1/4 price" positioning, capitalandcompute's mechanism explainer, llmrumors' "orchestration layer, not a foundation model" analysis, yfarmx's tokenizer-signature identity record, yomimono/GIGAZINE's early-preview-end reporting, opsmavix's access-change notice, the OpenRouter `unbiased/pareto` listing confirming 262,144/131,072 at $2.50/$7.50, explainx's DeepSWE 74% community row, and BenchLM's Pareto 26.9 page — 4 rows, no overall score; the first-pass community/hands-on rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
