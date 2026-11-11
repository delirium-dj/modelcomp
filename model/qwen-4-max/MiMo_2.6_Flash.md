# Qwen 4 Max — findings by MiMo 2.6 Flash

- Source: Stealth Models Qwen 4 release radar + leak check (checked 2026-11-11), LLMLearner status page, kie.ai deep dive, Qwen Code pull requests #15762/#15987, Alibaba spec via Stealth Models, BenchLM/Artificial Analysis/llmbenchmark/OpenRouter absence checks, repo meta
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max (`qwen4-max-preview`) — Alibaba's next-generation **Qwen 4 flagship (Max) tier**, named at the **Apsara Conference keynote, Hangzhou, 2026-09-22** ("Qwen4, built on the next-generation architecture, is already in training" — Liu Dayiheng, Qwen LLM lead) and **launched as a limited preview on 2026-11-11 at 02:01 UTC** (Qwen's main account: "Qwen4-Max is now in preview on Alibaba's Token Plan").
- **Short description:** The first of the four announced Qwen 4 tiers (Max, Flash, Plus, open-weight 27B) to ship. **Preview window: 2026-11-11 → 2026-11-25 — Alibaba will not change it during the preview and retires this version afterwards** (Stealth Models, citing Alibaba's spec), so this is a time-boxed evaluation build, not a GA product. Aimed at **coding, agents, and front-end work**. **No benchmark result for any Qwen 4 tier exists anywhere** — BenchLM tracks the model page but has **0/812 rows ("coverage coming soon")**, Artificial Analysis has no page (both slugs 404; the leak check confirms it was still absent from AA's leaderboard on launch day), llmbenchmark 404, and OpenRouter/Vercel AI Gateway/models.dev list no Qwen4 model. Stealth Models' leak check (2026-11-02, re-confirmed 2026-11-11): **"No Qwen 4 score now circulating leads to a primary source."**
- **Provider / access:** **Token Plan API only** (Alibaba's monthly subscription for interactive use in compatible tools — **no pay-as-you-go access, no per-token price, scripts and app backends not allowed**) plus Qwen Chat, Qwen App, QwenStudio, QwenWork, and Qoder. **No OpenRouter listing** (404 — repo meta's OpenRouter claim is stale/wrong, conflict recorded). No weights (Qwen HF org has no Qwen4 files).
- **Release / knowledge:** announced 2026-09-22; preview 2026-11-11 (ends 2026-11-25). Knowledge cutoff not published.
- **Context window:** **1,000,000 tokens; up to 393,216 output tokens (thinking included)** per Alibaba's spec (via Stealth Models, 2026-11-11). **Conflict:** repo meta records **131,072 max output** — the official spec figure is 393,216; both recorded. The 1M figure was corroborated pre-launch by Qwen Code PR #15762 (2026-10-28: every `qwen4*` client ID gets a 1,000,000-token fallback) — a client-side signal until the spec landed.
- **Modalities:** **text, image, video in; text out** (Alibaba spec — matches repo meta). Reasoning levels **low / medium / xhigh (xhigh default)** (Qwen Code PR #15987, 2026-11-01, made official by the spec).
- **Pricing:** **no per-token price published** (Token Plan subscription only). **Conflict:** repo meta's "~$2.00/$6.00 per 1M (promotional preview allocations)" is **unverified** — $2/$6 is exactly Qwen3.8-Max's rate card and kie.ai/Stealth Models both state no Qwen4-Max price exists; recorded as a likely predecessor carryover, not credited. No free tier (`noFreeId: true` consistent).
- **Architecture:** unconfirmed for Max. Qwen3.8-Flash-Next (open-sourced 2026-08-28) is Qwen's official "architecture preview for Qwen4" (ultra-sparse MoE, 125B main + 51B n-gram table, Gated DeltaNet + Qwen Sparse Attention); kernel code (2026-10-23) names "Qwen4.0-Max" Gated DeltaNet prefill work. The 5–10T roadmap figure belongs to Qwen4.5/Qwen5, **not** Qwen4.

### Raw benchmarks found

> Primary: Stealth Models (spec, radar, leak check), LLMLearner, kie.ai,
> BenchLM/AA/llmbenchmark/OpenRouter absence checks (all 2026-11-11).

Agentic / tool use:

- **No rows exist** — no Terminal-Bench, τ²/τ³, GDPval, OSWorld, BrowseComp, ITBench, or Claw-Eval figure from vendor or any third party for any Qwen 4 tier (re-checked 2026-11-11).
- Positioning only: preview "aimed at coding, agents and front-end work" (Alibaba spec). Family reference (measured, predecessor tier): Qwen3.8-Max-0902 Terminal-Bench 4.0 **39%** (AA).

Reasoning & knowledge:

- **No rows exist** (BenchLM 0/812; AA no page; llmbenchmark 404). **Editorial forecasts are not scores:** Stealth Models' 8 HLE **43–56%**, GPQA **92–97%**, FrontierMath T1–3 **66–94%**, SciCode **52–60%**, TB4.0 **39–57%**, AA Index **55 (52–58)** — all explicitly "awaiting measured Qwen 4 results," recorded as forecasts only.
- **Circulating unverified claims (flagged, not credited):** the same-folder `Gemini_3.8_Flash.md` report claims **GPQA 94.8, AIME 92.4, LCB 94.2, SWE-V ~73.8, Chartography 88.6, MathVista 86.4** — **none trace to a primary source** (Stealth Models leak check: "No Qwen 4 score now circulating leads to a primary source"; the widely-circulated "Qwen 4 Max (Preview) scores 53 on AA" chart is absent from AA itself; "Qwen4-Coder 82% SWE-bench" was published as *illustrative*). kie.ai: "Every specific number circulating in the community traces back to the current Qwen3.8-Max flagship or to the Flash-Next preview, not to Qwen4-Max itself." Recorded, not credited.
- Measured predecessor anchors (Qwen3.8-Max-0902, for lineage context only): AA Index 34 (v5) / 45 (v4.3.2), HLE 43%, GPQA 92–93% (Epoch), FrontierMath T1–3 66–74.7%, SciCode 52%.

Coding:

- **No rows exist** for Qwen4-Max (all three aggregators empty/404). Predecessor Qwen3.8-Max: SWE-bench Verified **67.7%** (per same-folder report), SciCode 52% (AA) — lineage context only.
- Open engineering footprints: Qwen Code v0.26.3/v0.26.5 (2026-10-28/11-01) sized and leveled `qwen4*` IDs; Intel-vLLM kernel PR names "Qwen4-27B dense" (no end-to-end run); T-Head kernel issue names "Qwen4.0-Max."

Multimodal / long context:

- **No vision row, no retrieval row (MRCR/RULER/LCR)** — official spec confirms **1M context + text/image/video input**, but nothing measures it; no video benchmark row exists (family: Qwen3.8 lineage has vision rows, not this model).

### Normalized scores (1–100)

- **Tool use: 60/100.** Zero agentic benchmark rows of any kind — scored on flagship-tier positioning ("agents" is an explicit preview target) and the measured predecessor lineage (Qwen3.8-Max TB4.0 39%), with a heavy unmeasured deduction; no metric exists to verify the preview at all.
- **Reasoning: 67/100.** Flagship tier with xhigh-default adaptive reasoning and a strong measured predecessor (HLE 43%, GPQA 92–93% on Qwen3.8-Max), but **zero own rows** — and the circulating "GPQA 94.8 / AIME 92.4" figures fail primary-source verification (leak check), so nothing is credited; editorial forecasts (HLE 43–56%) are explicitly not scores.
- **Context window: 90/100.** **Official Alibaba spec: 1M tokens / 393,216 output** lands in the ≥1M tier (anchor 95) — vendor-stated (unlike a user-sourced claim), corroborated by Qwen Code's family-wide 1M fallback — but with **zero retrieval measurements** it cannot take the 100 and sits at the low end of the band (90), the same unmeasured-window deduction applied elsewhere.
- **Multimodal: 66/100.** Text+image+**video** in per official spec — the modality list is broader than image-band peers, but with zero vision rows it stays an evidence-free edge (spec-confirmed modalities only).
- **Coding: 70/100.** The preview's primary target ("coding… front-end work") with the Qwen Max lineage's measured SWE-V 67.7 / SciCode 52 behind it — but **not a single numeric row exists for Qwen4-Max itself**, so it stays at an evidence-free edge rather than the frontier level the peer report assumes.
- **Cost efficiency: 70/100** (excluded from Overall). **No per-token price exists** (Token Plan subscription only, no pay-as-you-go, no scripts/backends, preview ends 2026-11-25 and this build is retired after); the meta's $2/$6 is an unverified Qwen3.8-Max carryover; scored mid on unknown price plus restrictive access, not credited as cheap.
- **Overall Score: 71/100.** (60 + 67 + 90 + 66 + 70) / 5 = 353/5 = 70.6 → 71 — a same-day-launch flagship preview with an official 1M/video spec and real agentic ambition, but **literally zero measured benchmarks anywhere**, a two-week time-boxed build that gets retired, subscription-only access with no price, and a circulating claim-set that fails primary-source verification; scored on the spec and lineage only, not the forecast band (Index 55) or the same-folder report's unverified 92.4.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-11
- Method: fresh public internet research (original creation, user-requested coverage) — Stealth Models Qwen 4 family guide + release radar + leak check (checked 2026-11-11: preview launch 02:01 UTC same day, `qwen4-max-preview`, Alibaba spec 1M/393,216-out/text-image-video, 11–25 Nov preview, Token Plan access, absence of any primary-source Qwen 4 score), LLMLearner (announced/unreleased status, Qwen Code PR #15762 1M client fallback), kie.ai deep dive (2026-10-11: no model card/API id/spec/benchmark pre-launch; every circulating number traces to Qwen3.8-Max or Flash-Next), Qwen Code PRs #15762/#15987, and absence checks against BenchLM (page exists, 0/812 rows), Artificial Analysis (both slugs 404; absent on launch day per leak check), llmbenchmark (404), and OpenRouter (404). Scores are normalized 1–100 interpretations, not official vendor scores; forecasts (Stealth Models bands) and the same-folder Gemini_3.8_Flash report's rows (GPQA 94.8, AIME 92.4, LCB 94.2, SWE-V 73.8, Chartography 88.6, MathVista 86.4, $2/$6, OpenRouter access) are recorded as unverified claims, not credited; conflicts (max output 131,072 vs 393,216; OpenRouter claim vs 404) reported side by side. This model has no line in `model-queue.md` at research time. Not present in any prior enrichment log — original creation.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
