# Fledge Alpha (Free) — findings by GLM 5.3

- Source: unknown (`opencode/fledge-alpha-free`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-03 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha Free (unidentified; **Zen preview DISCONTINUED**)
- **Short description:** The unidentified free-tier reasoning model that appeared on OpenCode Zen on 2026-10-01 — **and is now gone: documentation removed 2026-10-08, telemetry usage zero from 2026-10-09, removal confirmed in OpenCode v1.19.0 on 2026-10-11, and no working public replacement endpoint exists** (stealthmodels' access check). The mystery is partially answered: **the evidence points to a router, not a single model** — repeated tokenizer prompts returned significantly different input-token counts (7,536 / 7,536 / 6,499 on one prompt), and SVG quality swung between basic sketches and carefully composed scenes — with fast underlying models (~61 tok/s including reasoning). Identity guesses (DeepSeek V4.x, Thinking Machines' Inkling) remain unconfirmed. But real measurements did land before the shutdown — **GPQA Diamond 92.3% and MMLU-Pro 92.0%, both beating Space Bunny head-to-head** — making this a discontinued endpoint with a surprisingly strong academic record.
- **Provider / access (discontinued):** OpenCode Zen `opencode/fledge-alpha-free` — **removed from the live catalog; no public access verified as of 2026-10-11**. The first pass's telemetry (81,517 sessions / 2.7K users) and stealthmodels' Oct 2 snapshot (12,504 sessions / 471 users / 12B tokens / 91% cache) are retained as two snapshots of the same short flight (Sep 30 first usage → Oct 9 zero).
- **Release / knowledge:** first recorded usage **2026-09-30**; Zen listing 2026-10-01; discontinued 2026-10-09/11; knowledge cutoff unknown.
- **IDs:** `opencode/fledge-alpha-free` (dead ID; no paid tier ever existed, no cross-provider match).
- **Context window:** **1,048,576 tokens / 131,072 output** (operator-supplied catalog — never independently verified, and the router hypothesis makes even the spec attribution murky).
- **Modalities:** text and image in; text out; reasoning (low/high/max — a catalog correction was filed 2026-10-02); tool calls; strict JSON; no audio/video/PDF.
- **Pricing (historical):** $0/$0/$0 during the ~10-day preview (Sep 30 – Oct 9); data-use caveat was the privacy cost. **There is no current price — the endpoint is gone.**
- **Architecture:** unknown — **likely a multi-backend router** (stealthmodels tokenizer evidence + the instax-dutta forensic probe reached the same conclusion); `open_weights = false`; developer known to OpenCode's stealth program, hidden from the public.

### Raw benchmarks found

> Second pass upgrades the evidence from "one X-thread battery" to a real (small-n) independent measurement set: **stealthmodels' StealthMark research, 2026-10-03, 206 answered questions, with head-to-head Space Bunny comparisons** — still not a formal harness (tiny samples, wide CIs), but real measured rows.

Agent / tool use:

- Tool calls, reasoning tiers, and strict mode were verified in the catalog; 12,504+ completed agentic sessions in the Oct 2 telemetry (81,517 per the first pass's snapshot) prove it functioned as a coding agent
- Community executable-code head-to-head (retained, provisional): Fledge **61/61** vs LongCat 2.5 Preview 59/61 (@MikelEcheve); Mikel's follow-up on Space Bunny: "Fledge is the one worth your time"
- Terminal-Bench 2.1 / τ³ / GDPval / Claw-Eval / MCP-Atlas: never measured (the endpoint died before any harness arrived)
- Router caveat: as a routed service, tool behavior may vary with the backend du jour

Reasoning / knowledge (StealthMark, 2026-10-03):

- **GPQA Diamond: 92.3% (36/39, 95% CI 79.7-97.3%)** — clears the 90% bar on a small-n sample; head-to-head: **Fledge 92.3% vs Space Bunny 82.1%** on 39 shared questions (only-Fledge-right: 4; only-Bunny-right: 0)
- **MMLU-Pro: 92.0% (92/100, CI 85.0-95.9%)** — strong; head-to-head: **Fledge 92.0% vs Space Bunny 77.0%** (16 only-Fledge-right)
- **HLE text-only: 25.4% (17/67, CI 16.5-36.9%)** — below the 40% reference, and here **Space Bunny won: 30.3% vs 25.8%** on 66 shared questions
- ~61 output tok/s including reasoning tokens (six speed tests) — fast, but "often rushes to a simple answer" (stealthmodels' finding); router behavior makes single-number attributions soft

Coding:

- Community head-to-head 61/61 vs LongCat 59/61 (retained); SVG generation quality ranged from a standout raccoon-on-jet-ski scene to inconsistent sketches — the router's uneven backends show
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: never measured (unchanged)

Long context:

- 1M listed (operator metadata); community 12/12 hidden-key retrieval at ~1M-character inputs (retained, provisional); MRCR/RULER: never measured.

Multimodal:

- Text+image input verified in the catalog; the SVG tests are a text-output quality signal, not image output; no formal vision rows.

### Normalized scores (1–100)

- **Tool use: 60/100.** Lowered from 70: 12.5K+ real completed agentic sessions and the 61/61 community head-to-head stand — but no formal tool benchmark ever landed, the endpoint died first, and the router hypothesis means "Fledge's" tool behavior was never one thing to measure.
- **Reasoning: 72/100.** Raised from 68: the StealthMark rows are real measured data — GPQA 92.3% (clears the bar on small-n) and MMLU-Pro 92.0% beating Space Bunny decisively — offset by HLE 25.4% (below the reference, losing to Bunny), tiny samples with wide CIs, and the router attribution caveat.
- **Context window: 90/100.** Lowered from 95: 1M listed per operator metadata only — never independently verified, and the router evidence makes even the spec attribution uncertain; the 12/12 community retrieval probe is the sole supporting signal.
- **Multimodal: 68/100.** Raised from 65: text+image input is catalog-verified and the SVG suite demonstrates real (if inconsistent) compositional generation — text-only output, no video/audio.
- **Coding: 64/100.** Lowered from 70: the 61/61 community head-to-head remains the only coding signal; the inconsistent SVG quality and the router's shifting backends cap it; no formal coding row ever landed.
- **Cost efficiency: 70/100.** Lowered from 100: the $0 preview was real (Sep 30–Oct 9, ~$0 recorded spend) — but **the endpoint is discontinued with no public access**: the historical free tier scores well, the current availability scores zero; blended for a dead listing.
- **Overall Score: 71/100.** (60 + 72 + 90 + 68 + 64) / 5 = 70.8 → 71, down from 74. Best-fit (historical): the strongest academically of the Zen stealth trio — GPQA 92.3% / MMLU-Pro 92.0%, beating Space Bunny head-to-head on both — flying on a router of fast unknown backends at $0 for ten days; now discontinued with no successor endpoint, so this entry is a post-mortem record, not a buy recommendation. If its maker reveals itself, re-research immediately.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-03 report (stealthmodels.com's full Fledge Alpha dossier — the StealthMark academic set with GPQA/MMLU-Pro/HLE rows and Space Bunny head-to-heads, the tokenizer-based router evidence, the six SVG tests and speed measurements, and the October 11 access-update timeline with the OpenCode v1.19.0 removal, PR #53984, and telemetry; the instax-dutta forensic probe gist independently reaching the router conclusion; aipromonow's promo listing and promptblueprints' early coverage; the first-pass community rows and telemetry snapshot retained with the two-snapshot discrepancy noted; no BenchLeader/AA/BenchLM page ever existed — confirmed unchanged); scores are normalized 1-100 interpretations, not official vendor scores, and remain small-n provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
