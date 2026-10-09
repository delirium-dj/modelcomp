# Muse Spark 1.3 — findings by MiMo 2.6 Flash

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary long-horizon agentic/coding reasoning model (Muse Spark line), released 2026-09-02 for long-horizon agentic workflows, coding agents, and professional knowledge work. Not a variant/alias — the flagship 1.3 release (Contributor/Free/Standard/Max are pricing/effort tiers of the same weights, per Meta's developer page).
- **Provider / access:** Meta Model API (`muse-spark-1.3`, `meta/muse-spark-1.3` on OpenRouter/NanoGPT/Vercel AI Gateway), OpenCode Zen `opencode/muse-spark-1.3`, plus Muse Code CLI. Chat Completions-compatible gateway routes; Meta hosts the primary API.
- **Release / knowledge:** 2026-09-02 release (Meta dev.meta.ai model page); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter/NanoGPT/Vercel), `muse-spark-1.3` (Meta native), `opencode/muse-spark-1.3` (Zen) — all three exist; Contributor tier shares the same ID.
- **Context window:** 1,048,576 tokens (1M) — Meta dev page + AA reports 1.05M; max output 131,072 tokens (per project meta; long-context verified by MRCR v2 runs at 256K–1M bands).
- **Modalities:** text/image/video in; text out; reasoning yes (effort tiers: max / xhigh); tool calls yes (agentic harnesses, Terminal-Bench runs); JSON mode listed on AA provider tables — audio in and non-text out not verified.
- **Pricing (as of 2026-10-07):** Standard $1.25 in / $4.25 out / $0.15 cached per 1M (privacy: no training use); Contributor/Free $0.10 in / $0.20 out per 1M **but opts prompts+completions into Meta's training data** — do not use for confidential code. Paid on the Standard route.
- **Architecture:** proprietary (parameters, license, cutoff undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta model card / BenchmarkList, rank 8/194, 96th pct, thinking=max) — independent AA run: **84.3%** (Artificial Analysis, max tier, 2026-09-29) / 85.4% (xhigh tier).
- GDPval-AA v2: **1754** (Meta dev page; Knowledge-work JobBench 66.9 partial / 32.0 binary).
- Toolathon / MCP-Atlas: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found for 1.3.

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (AA, xhigh, rank 10/189 per LLMLearner) / 93.5% (AA, max) — benchmark flagged saturated by The Model Gap.
- HLE (no tools): **48.7%** (AA, max, 2026-09-29).
- LCR: AA-LCR **83.0%** (rank 20/408, BenchmarkList).
- CritPt: **26.0** (AA, extra-high, no tools, rank 13/124; BenchmarkList prints 24.9).
- Artificial Analysis Intelligence Index: **48.1** (rank 8/68, Command Code/AA); LiveBench overall **81.6** (xHigh, livebench.ai 2026-09-03).
- Omniscience / hallucination: no verified public score found for 1.3.

Coding:

- DeepSWE v1.1: **75.4%** (Meta model card, rank 2/49–52, unverified by third party as of 2026-10-01).
- SciCode: **59.7%** (AA, extra-high, no tools, rank 6/89).
- SWE-Atlas Codebase QnA: **59.4%** (Meta/Scale leaderboard protocol, rank 11/37).
- Vibe Code Bench v1.1: **85.9%** (AA, max, rank 11/63).
- AA Coding Agent Index v1.5: **54.3** (rank 5/10); external Coding Index **75.8** (#12 of 52, Command Code).
- SWE-bench Verified / LiveCodeBench: no verified public score found (no 1.3 row on tracked boards as of 2026-10-01).

Long context:

- MRCR v2 8-needle: **98.5%** at 256K–512K (rank 2/8) and **98.1%** at 512K–1M (rank 1/9, 100th pct) — Meta self-reported via BenchmarkList; AA-LCR 83.0% independent.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.8% self-report / 84.3% AA plus GDPval-AA 1754 both sit at the frontier ref (TB2.1 ~88%+, GDPval 1750+ → 90–100); capped at 90 by the complete absence of any public Tau3/Banking and Claw-Eval number for 1.3.
- **Reasoning: 91/100.** GPQA 93.5–94.1 and HLE 48.7 clear the frontier refs (90%+/40%+), MRCR 98% at 1M; capped below 95 because the AA Intelligence Index 48.1 misses the 60+ frontier ref and GPQA is a saturated board.
- **Context window: 98/100.** 1M total (≥1M tier = 95–100) with 98.1% MRCR retrieval in the 512K–1M band; not a clean 100 because the MRCR figures are Meta self-reported (AA-LCR independent run is 83.0%).
- **Multimodal: 85/100.** Image and video input, text output (+video-in band = 75–90); no audio input or non-text output verified, which caps it below 90.
- **Coding: 93/100.** DeepSWE 75.4 (frontier 74%+), TB2.1 84–89 (85%+), SciCode 59.7 (55%+), Coding Index 75.8 (70%+) all hit frontier refs; capped at 93 by DeepSWE being self-reported/unverified and no SWE-bench Verified or LiveCodeBench row.
- **Cost efficiency: 88/100.** $1.25/$4.25 Standard is exactly the ~88 anchor in the methodology; the $0.10/$0.20 Contributor tier is cheaper but training-data-gated, and cache reads at $0.15 soften agent-loop cost (~$0.48/M effective input).
- **Overall Score: 91/100.** (90+91+98+85+93)/5 = 91.4 → 91 — top-tier long-horizon paid agent/coding pick when 1M context and multimodal input matter; use the Contributor tier only if training on your data is acceptable.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Meta dev page, Artificial Analysis, BenchmarkList, The Model Gap, LLMLearner, llmboard, Command Code); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Muse Spark 1.3 (max) — findings by Mimo v2.6 Flash

- Source: Meta/Muse Spark 1.3 max reasoning tier (`muse-spark-1.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (max) — the max reasoning-effort configuration of Meta Superintelligence Labs' Muse Spark 1.3
- **Short description:** Meta's agentic-coding point release (2026-09-02/03, fourth Muse Spark in five months), scored here in its **max reasoning configuration** — the config Meta used for its headline benchmark table and the one Artificial Analysis measured at Intelligence Index 62 (rank ~6/643). Important caveat: as of late September 2026 the **max tier is still in limited partner preview behind extra safety testing** — the generally callable API tier is `xhigh` (AA Index 61) — and Meta has not published a separate max-tier price.
- **Provider / access:** Meta Model API (public preview; ai.developer.meta.com), Muse Code terminal agent; free to consumers in Meta AI / meta.ai. Single API provider (Meta, per AA) — no OpenRouter/second-host row for max specifically. **No Zen Free ID.**
- **Release / knowledge:** model family 2026-04-08; 1.1 2026-07-09; 1.2 2026-08-05; **1.3 2026-09-03**; max tier preview-only (DataCamp/AA, 2026-09). Knowledge cutoff not published.
- **IDs:** `muse-spark-1.3` (reasoning_effort=max); contributor endpoint `muse-spark-1.3-contributor`.
- **Context window:** **1,048,576 tokens** (1.05M, AA/Meta); max output not published by Meta — LiteLLM says 131,072, OpenRouter top provider row 943,718 (conflicting third-party metadata).
- **Modalities:** text, image, **video** in; text out (Artificial Analysis model row; family listings also document file/audio input on 1.2 — audio gap noted as unclosed for 1.3 by OrcaRouter); reasoning yes (effort levels low→max); tool calls + web-search grounding ($2.50/1K queries) supported; JSON mode supported via API conventions.
- **Pricing (as of 2026-10-02):** Standard **$1.25 in / $4.25 out per 1M** (cached input $0.15, 88% off; identical rate card to 1.1/1.2, Meta's own pricing page) — **AA lists Muse Spark 1.3 (Max) at these same Meta-API rates**; a max-specific rate card has not been separately published (eesel). Contributor tier (Meta trains on your data): **$0.10 / $0.20** (cache $0.002). Per-task evaluation cost ~$1.60 (AA Index, max).
- **Architecture:** proprietary, closed weights (Meta's promised open weights still undated); params undisclosed. Open sibling: Muse Glimmer 30B (Apache 2.0, distilled from 1.2) — different model.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Meta's table figures are **vendor-reported** (max config vs 1.2 xhigh/Sol/Opus 5); AA figures are independent measurements of the max config in limited preview.

Agent / tool use:

- **Terminal-Bench 2.1: 88.8%** (Meta table, max; ties GPT-5.6 Sol 88.8, above Opus 5 86.7, above 1.2 xhigh 82.9)
- **GDPval-AA v2 Elo: 1754** (Meta table, max; vs Sol 1710, Opus 5 1824)
- AutomationBench: 49.6% (max) · JobBench 64.9% · OSWorld 2.0: 66.9% partial / 32.0 binary · Agentic IF Index (internal) 57.8% · SWE-Atlas CodeBase QnA 59.4% · DeepSearchQA 90.3% (Meta table, max)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 62** (AA, max config, limited preview; rank ~6 of 643 tracked models — above GPT-6 Astra's 61; shipping xhigh scores 61) — AA/DataCamp via HokAI
- **GPQA Diamond: 94%** (Meta-via-HokAI, 2026-09-02)
- **HLE: 47%** (Meta-via-HokAI); LCR 79% (Dataconomy AA panel)
- SciCode: 57.3% (Dataconomy AA panel)

Coding:

- **DeepSWE v1.1: 75.4%** (Meta table, max; vs Opus 5 74.0, Sol 73.0, 1.2 xhigh 55.0)
- **Terminal-Bench 2.1: 88.8%** (above) · AA **Coding Index: 76.3** (Dataconomy/AA)
- SWE-bench Verified / LiveCodeBench: not published for any Muse Spark release (HokAI notes Meta never publishes these)

Long context:

- **MRCR v2 8-needle 256K–512K: 98.5%**; **512K–1M: 98.1%** (Meta table, max; vs GPT-5.6 Sol 73.8% at 512K–1M) — outstanding measured recall at the top of the 1M window

Multimodal:

- Image + video input (AA model row); MMMU-Pro 80.5% is a **family/original-release** vision figure (theairankings), not a max-config measurement — MMMU / CharXiv / Video-MME for max: no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% and GDPval-AA 1754 both clear the frontier anchors (TB 88%+, GDPval 1750+), reinforced by AutomationBench/JobBench/OSWorld in the table; capped just below the mid-90s by OSWorld-binary 32.0 and no Tau3/MCP-Atlas number.
- **Reasoning: 95/100.** Meets every reasoning frontier reference simultaneously — GPQA 94% (90+), HLE 47% (40+), MRCR 98%+ at 512K–1M (95+), AA Index 62 (60+) — plus independent AA confirmation of the index; not 100 only because the config is vendor-harness-heavy and the max tier itself is preview-gated.
- **Context window: 100/100.** ≥1M window (1,048,576) **and** ≥98% measured retrieval at 512K–1M (MRCR 98.1%) — the methodology's exact condition for 100.
- **Multimodal: 80/100.** Text + image + **video** input lands in the +video-in band (75–90); mid-band because no audio-in is confirmed for 1.3, text-only out, and no max-config MMMU/Video-MME score exists.
- **Coding: 96/100.** All coding frontier anchors cleared — DeepSWE 75.4% (74%+), TB2.1 88.8% (85%+), Coding Index 76.3 (70%+), SciCode 57.3% (55%+) — with the model beating Opus 5/Sol on DeepSWE in Meta's table; the only cap is the absence of SWE-bench Verified/LiveCodeBench numbers and vendor-run harnesses.
- **Cost efficiency: 88/100.** Methodology anchor: $1.25/$4.25 per 1M = ~88 (AA lists max at these Meta-API rates; ~$1.60/task on the Index); the $0.10/$0.20 contributor tier would score ~97 but trades data consent, and no separate max rate card has been published.
- **Overall Score: 93/100.** (92+95+100+80+96)/5 = 92.6 → 93 (half-up) — best-fit: preview-gated frontier long-context agentic/coding model with class-leading MRCR recall; note the max tier is partner-preview (shipping API = xhigh, AA 61) and all top numbers are Meta-run or AA-preview measurements.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Meta developer pricing/docs, Artificial Analysis model page, HokAI benchmark compilation, Dataconomy AA panel, Tokencost rate verification, OrcaRouter/TheAIRankings/eesel availability checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

