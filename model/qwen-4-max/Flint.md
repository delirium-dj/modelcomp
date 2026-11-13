# Qwen 4 Max — findings by Flint

- Source: Alibaba / Qwen 4 Max (`alibaba/qwen-4-max`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's Qwen 4 generation flagship — the first of the four announced Qwen4 family tiers (Max, Flash, Plus, 27B) to ship — released 2026-11-11 as a time-boxed **Qwen4-Max-Preview** on the Alibaba Cloud Token Plan, aimed at coding, office productivity, frontend design, and complex agentic tasks, with multimodal text/image/video understanding plus deep reasoning, web search, tool calling, and structured outputs, OpenAI + Anthropic API compatible.
- **Provider / access:** Alibaba Cloud (Qwen / QwenCloud); API model ID `qwen4-max-preview`; Token Plan only (monthly subscription — no pay-as-you-go tier, no per-token public price, no downloadable weights); early access through Qwen Work, Qoder, Qwen App, QwenStudio and Qwen Chat; scripts/app backends not permitted on the preview.
- **Release / knowledge:** Preview release 2026-11-11 UTC (announced 02:01 UTC); knowledge cutoff not established.
- **IDs:** `alibaba/qwen-4-max` (curated subject identity) / `qwen4-max-preview` (live Token Plan model ID).
- **Context window:** 1,000,000 tokens context / up to 393,216 max output tokens (vendor spec via QwenCloud latest-model page, corroborated by Qwen Code v0.26.3 + v0.26.5, both fetched this pass); flagged conflict: curated folder metadata claims 2M context / 128K out (unverified against the preview).
- **Modalities:** Preview: text + image + video input; text output; reasoning (thinking default on; reasoning_effort low/medium/xhigh, default xhigh) + tool calling + web search + structured outputs; audio input not confirmed for the Max tier.
- **Pricing (as of 2026-11-13):** Preview: no public per-token price (Token Plan subscription); no pay-as-you-go tier, no free tier, no downloadable weights (QwenCloud latest-model + Stealth Models).
- **Architecture:** Qwen4 disclosed via the Qwen3.8-Flash-Next precursor (125B main + 51B learned n-gram; Gated DeltaNet + Qwen Sparse Attention; Muon; multi-token prediction); no Qwen4-Max parameter/MoE counts disclosed.

### Raw benchmarks found

- StealthMark (Stealth Models): StealthMark **58.8/100** overall (**Estimated** — one scene estimated), rank **12/58**; General Intelligence **54.6/100**, Visual Intelligence **66.3/100**; benchmark date **2026-11-11** (Qwen4-Max-Preview at xhigh reasoning plus the Latch and Foresight games).
- StealthMark head-to-head vs Qwen3.8-Max-0902: **62.4** (3.6 higher) — Qwen4-Max-Preview higher in visual intelligence (led by Mona Lisa and Selfie), lower in general intelligence, where both games fell.
- StealthMark SVG benchmarks: Mona Lisa **55.2/100**, Selfie **75.9/100**, Beach **78.4/100**, Pelican **77.3/100**, Raccoon **71.0/100**, Ground Truth **49.7/100**, Newton’s Mirror **48.8/100**.
- StealthMark games: Foresight **57.5/100** (survived 1 of 3), Latch **67.3/100** (cleared 5 of 5).
- StealthMark reasoning efficiency: single-step **51**, multi-step **60**.
- Artificial Analysis: no verified public score — Qwen4-Max-Preview absent from the leaderboard/posts as of 2026-11-11; the "53" figure carries no primary source.
- No verified public score found for GPQA Diamond, HLE, LCR, CritPt, agentic tool-use rows (Tau3/GDPval/OSWorld), SWE-bench, LiveCodeBench, SciCode, long-context retrieval (MRCR/RULER) on this exact ID.

### Normalized scores (1–100)

- **Tool use: 55/100.** Measured StealthMark agentic-execution games: Latch cleared 5 of 5 (**67.3/100**), Foresight **57.5/100** (survived 1 of 3); no dedicated Terminal-Bench / Tau3 / GDPval / OSWorld rows exist for the `qwen4-max-preview` ID → mid-band placement, capped below the frontier band (TB2.1 ~45–60% → 50–70) pending a real tool-use harness.
- **Reasoning: 58/100.** StealthMark General Intelligence **54.6/100** and composite **58.8/100** (rank 12/58) for Qwen4-Max-Preview; vs Qwen3.8-Max-0902 (**62.4**, +3.6) — trailed slightly on general intelligence; mid-band placement.
- **Context window: 95/100.** Vendor-verified **1,000,000-token** context / **393,216** max output → ≥1M tier (95–100); 100 reserved for ≥98% retrieval at 512K+ (not verified) → 95.
- **Multimodal: 80/100.** Vendor-verified preview coverage: text + image + video in, text out; audio input not confirmed for the Max tier → image+video-inclusive band (75–90), below the audio-inclusive 90–100.
- **Coding: 50/100.** No verified coding harness rows (SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, TB) for the `qwen4-max-preview` ID; vendor coding positioning unmeasured → provisional low floor.
- **Cost efficiency: 50/100.** Preview is Token Plan-only (subscription); no public per-token price, no pay-as-you-go tier, no free tier → inverse-pricing value not evaluable; provisional low floor.
- **Overall Score: 68/100.** Mean of Tool use 55 + Reasoning 58 + Context window 95 + Multimodal 80 + Coding 50 = 338 / 5 = 67.6, half-up → **68**. Cost efficiency excluded (v4 methodology, 2026-09-18).

Best fit: Qwen4-Max-Preview on Token Plan at xhigh reasoning for multimodal flagship reasoning + agentic coding positioning at 1M context — final Qwen4-Max (post-preview) pending.

---

## Signature

- Provided by: **Flint** — 2026-11-13
- Method: Fresh public-web research this pass (web search unavailable — HTTP 402 → webfetch fallback per RULES.md § Web-research fallback; QwenCloud changelog + latest-model + pricing pages, Stealth Models Qwen 4 coverage + StealthMark benchmark pages).
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources) — never a guessed or local-file URL. On re-research: (1) first re-check existing links for score changes (maintenance); (2) append new external links discovered from independent search (successful new search).
  - [QwenCloud — Model releases: qwen4-max-preview (2026-11-11)](https://docs.qwencloud.com/changelog/models)
  - [QwenCloud — Getting started: latest model / Qwen4-Max-Preview](https://docs.qwencloud.com/developer-guides/getting-started/latest-model)
  - [QwenCloud — Model pricing](https://docs.qwencloud.com/developer-guides/getting-started/model-prices)
  - [Stealth Models — Qwen 4 family guide](https://stealthmodels.com/qwen-4)
  - [StealthMark — Qwen4-Max-Preview benchmarks](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)

- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
