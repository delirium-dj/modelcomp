# Grok 4.20 — findings by MiMo 2.6 Flash

- Source: Artificial Analysis (deprecated-model page for Grok 4.20 0309 v2), BenchLM (Meta Muse Spark chart / Vals / ARC Prize / OpenRouter rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 — xAI's **Mar 2026 multi-agent generation** (four-agent council; `0309` snapshot naming), with AA's **0309 v2 (Reasoning) release dated 2026-04-07**. **Deprecated on AA** ("results historical… consider Grok 4.3 instead"), so its AA index is an estimate. Sibling: Grok 4.20 Multi-agent (BenchLM, uncomputed).
- **Short description:** A reasoning-tier entry with a **four-agent council** architecture, **1M–2M context** (variant-dependent; AA/BenchLM measure the 2M serving), **strong tool use and science at value pricing, weak long-context QA** (repo meta). AA: index **26 (estimated), at class median (26)** — "below average in intelligence but well priced," 117.2 t/s (#39/225, notably fast), TTFT 19.9 s. BenchLM: 57.38/100, #55/887 (24/623, conservative).
- **Provider / access:** xAI API (2 providers per AA). Proprietary. No free id (meta).
- **Release / knowledge:** Mar 2026 (meta) / AA's measured v2 snapshot 2026-04-07.
- **Context window:** **1,000,000–2,000,000 (variant-dependent; multi-agent 1M)** — AA/BenchLM measure **2M**.
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$1.25 / $2.50 per 1M under 200K; $2.50 / $5.00 at ≥200K** (meta; AA $1.25/$2.50, **cache 84%**).

### Raw benchmarks found

> Primary: AA's independent (historical) rows; BenchLM rows sourced mostly from
> **Meta's Muse Spark comparison chart** (third-party transcription), Vals AI
> re-runs, ARC Prize, OpenRouter. Long-context: **no LCR/MRCR row anywhere** —
> meta's "weak long-context QA" stands uncontradicted.

Agentic / tool use:

- **Terminal-Bench 2.1 (Vals): 44.2**, **Terminal-Bench 2.0: 47.1** (Meta chart) — weak; DeepSearchQA 62.8; Gert Labs 38.36; Design Arena Website Elo 1236.
- No OSWorld/τ²/BrowseComp/GDPval row.

Coding:

- **SWE-bench Verified: 76.7** (Meta chart), SWE-bench 72.2 (Vals), **LiveCodeBench Pro: 74.2**, LCB 84.3 (Vals), SWE-bench Pro 51.8 (under mid), **Vibe Code Bench: 4.06** (bottom-of-board).

Reasoning & knowledge:

- **GPQA Diamond: 88.5 / 88.6 (Vals)** — just under the 90 reference. **HLE w/o tools: 31.6** — misses 40.
- **ARC-AGI-2: 53.3** (Meta chart) — strong pattern reasoning for the era; ARC-AGI-3 0.1.
- **AA Intelligence Index: 26 (estimated)** — at class median; MMLU-Pro 86.3 (Vals); HealthBench Hard 20.3.

Multimodal / long context:

- **MMMU-Pro: 75.2**, CharXiv 60.9, ERQA 54.1, SimpleVQA 57.4, MedXpertQA-MM 65.8 — solid image band.
- **No long-context retrieval row** despite 1M–2M window.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.0 47.1 / TB2.1 44.2 are weak terminal-agent rows and DeepSearchQA 62.8 is mid; no OSWorld/τ²/BrowseComp-class evidence at all — the "strong tool use" positioning is not visible in third-party rows.
- **Reasoning: 80/100.** GPQA 88.5 near-reference, ARC-AGI-2 53.3 strong, index 26 at class median; HLE 31.6 misses 40 — overall a competent-but-not-frontier reasoning profile.
- **Context window: 91/100.** 1M–2M window earns the 1M-class band, but zero retrieval rows plus meta's explicit "weak long-context QA" keep it well under the 95 floor.
- **Multimodal: 69/100.** Text+image with MMMU-Pro 75.2 (top of image band) and a deep chart/document spread — image band, nothing beyond it.
- **Coding: 81/100.** SWE-V 76.7, LCB Pro 74.2 and LCB 84.3 are strong mid-band rows; SWE-Pro 51.8 and Vibe 4.06 (near-bottom) pull it down from the mid-80s.
- **Cost efficiency: 91/100** (excluded from Overall). $1.25/$2.50 under 200K beats the $1.25/$4.25 ≈ 88 anchor on output, the ≥200K tier ($2.50/$5) stays far below flagship tariffs, cache is 84% off, and 117 t/s throughput is above class — deprecated status keeps it from the mid-90s.
- **Overall Score: 79/100.** (75+80+91+69+81)/5 = 79.2 → 79 — xAI's value-priced 2M-context generation: GPQA 88.5, ARC-AGI-2 53.3, SWE-V 76.7 at $1.25/$2.50 — weighed against weak terminal-agent rows, a sub-reference HLE, bottom-of-board Vibe, no long-context proof, and an estimated at-median index on a deprecated model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model page (release/snapshot date, deprecation notice, estimated index 26, speed/latency, pricing/cache, 2M context), BenchLM (24 rows with per-row provenance: Meta Muse Spark comparison chart, Vals AI leaderboards, ARC Prize, OpenRouter; family scores; updated 2026-10-07), repo meta (multi-agent positioning, 1M–2M variant range, pricing tiers, long-context-QA weakness). Scores are normalized 1–100 interpretations, not official vendor scores; deprecated/estimated readings and third-party-transcribed rows flagged; family ordering checked against own Grok 4 (77), 4.3 (81), 4.5 (84), 4.6 (85) and 4.7 (84) reports.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Grok 4.20 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/Grok 4.20
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (xAI API model; reasoning / non-reasoning / multi-agent variants)
- **Short description:** xAI's general-purpose reasoning flagship shipped between Grok 4 and Grok 4.3, positioned for broad assistant, research and tool-use work rather than a coding-only checkpoint. Headline differentiator at release: the lowest hallucination rate measured by Artificial Analysis at the time, plus a runtime reasoning toggle and very long context.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Chat Completions; reasoning and multi-agent slugs), Grok consumer web/mobile apps, OpenRouter and other aggregators. **Not on OpenCode Zen** as of 2026-09-25 (open feature request `anomalyco/opencode#18945`).
- **Release / knowledge:** public beta 2026-02-17, GA in March 2026 (docs refresh 2026-03-24); xAI system card dated 2026-04-07. Knowledge cutoff November 2024 (TopReviewed secondary coverage).
- **IDs:** `grok-4.20-0309-reasoning` (alias `grok-4.20`), `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309` (docs.x.ai). **No Free ID exists on OpenCode Zen** as of 2026-09-25 — score on paid xAI pricing.
- **Context window:** 1,000,000 tokens on the current xAI docs card for the reasoning/non-reasoning and multi-agent slugs (docs.x.ai, verified 2026-09-25); 2,000,000 tokens at launch and still shown by Artificial Analysis / OpenRouter / multi-agent listings — the 1M-vs-2M discrepancy is unresolved across sources. Max output up to 1M on xAI-hosted routes (modelbenchmark.io host table).
- **Modalities:** text + image in; text out; reasoning toggle exposed as separate slugs plus `reasoning_effort`; function/tool calling; no audio or video input; no non-text output.
- **Pricing (as of 2026-09-25):** $1.25 input / $2.50 output / $0.20 cached input per 1M tokens below 200K prompts (docs.x.ai canonical, repriced down from the $2/$6 launch rates); at ≥200K prompts the whole request bills at $2.50 / $5.00 / $0.40 cached (modelbenchmark.io long-context tier). Free access only via grok.com / X apps with daily caps — no free API tier. Artificial Analysis still displays the older $2/$6 card.
- **Architecture:** proprietary; xAI system card describes single-agent (`Grok 4.2 SA`) and multi-agent (`Grok 4.2 MA`) deployment modes. Parameter count and architecture not disclosed (third-party 1.7–3T MoE estimates are unverified speculation).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Tau2-Bench Telecom: **96.5%** (BenchmarkList, 97th pct, rank 11 of 332, observed 2026-06-10)
- Terminal-Bench 2.1: **44.2%** (BenchmarkList/Artificial Analysis, 59th pct, rank 76 of 182)
- Terminal-Bench 2.0: **40.4%** (rank 34 of 68); Terminal-Bench Hard (AA subset): **40.9%** (91st pct, rank 30 of 326)
- GDPval-AA: **1171 Elo** (81st pct, rank 66 of 340, observed 2026-05-28)
- IFBench: **82.9%** (97th pct, rank 2 of 38, verified 2026-08-28)
- Claw Bench: **92 points** (58th pct); ClawProBench: **43.04** (9th pct, rank 44 of 48)
- Tau3-Banking / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.6%** (BenchmarkList/Vals, 78th pct, rank 26 of 117); vendor/secondary coverage cites 88.9% (HokAI) and 78.5% (launch coverage) — sources disagree, harness versions differ
- Humanity's Last Exam: **34.5%** (90th pct, rank 46 of 466)
- MMLU Pro: **86.3%** (rank 35 of 116); MMMU Pro: **83.5%**
- Artificial Analysis Intelligence Index: **48** (v4.0, 2026-03, the-decoder) / **38** (BenchmarkList current observation) / **26** (AA release page, v4.3.2 reasoning build) — index version-dependent, all three cited
- AA-Omniscience non-hallucination rate: **78%** — record for any model tested at release (Artificial Analysis via the-decoder / winbuzzer, 2026-03)
- ARC-AGI-2: **65.1%** (77th pct, rank 24 of 99); ARC-AGI-1: **89.5%**
- CritPt / AA-LCR / MRCR: **no verified public score found**

Coding:

- SWE-bench Verified: **72.2%** (BenchmarkList/Vals, 42nd pct, rank 42 of 72); BenchLM lists **76.7%** — both cited, disagreement noted
- SWE-bench Pro: **51.8%** (BenchLM)
- LiveCodeBench: **84.3%** (75th pct, rank 32 of 123); LiveCodeBench Pro: **74.2%** (LMSpeed/BenchLM, rank 3 of 4 on that harness)
- SciCode: **45.6%** (88th pct, rank 57 of 458)
- Vibe Code Bench v1.1: **4.1%** (13th pct, rank 62 of 71)
- ALE-Bench: **1150.28** (82nd pct); IOI: **30.2%**; Arena AI WebDev Arena: **1373.64 Elo**

Long context:

- Window documented at 1M (docs.x.ai) / 2M (launch, AA, OpenRouter); MRCR / RULER / GraphWalks retrieval quality: **no verified public score found** — only unverified community claims of strong recall past 500K (HokAI)

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2-Bench Telecom 96.5% (97th pct), IFBench 82.9% (#2/38) and GDPval-AA 1171 Elo (81st pct) are solidly upper-mid; Terminal-Bench 2.1 at 44.2% and TB-Hard at 40.9% sit just under the mid-band's upper half and are what cap it — no Tau3/GDPval-frontier numbers to push higher.
- **Reasoning: 84/100.** GPQA Diamond 88.6%, HLE 34.5% (90th pct), MMLU-Pro 86.3% plus the record 78% AA-Omniscience non-hallucination rate; capped below frontier because HLE stays under 40% and the AA Intelligence Index (38–48 depending on version) trails leaders at ~57.
- **Context window: 96/100.** ≥1M tier maps to 95–100 and current xAI docs confirm 1,000,000 tokens (2M on launch/AA/OpenRouter listings); held off 100 because no measured retrieval curve (MRCR/RULER) is published and the 1M-vs-2M discrepancy is unresolved.
- **Multimodal: 68/100.** Image input with MMMU Pro 83.5% lands in the upper half of the +image band (60–70); no video/audio input and text-only output keep it out of the 75+ tiers.
- **Coding: 75/100.** LiveCodeBench 84.3%, SWE-bench Verified 72.2–76.7%, SciCode 45.6% and LiveCodeBench Pro 74.2% are comfortably mid-band and above the "LiveCode 80 but SciCode <40" reference; Vibe Code Bench 4.1% and Terminal-Bench 2.1 44.2% are the caps.
- **Cost efficiency: 90/100.** $1.25/$2.50 with $0.20 cached is far below the $3/$15 reference and cheaper on output than the $1.25/$4.25 ≈ 88 anchor; the ≥200K tier ($2.50/$5.00, whole-request repricing) is the only drag.
- **Overall Score: 79/100.** (72 + 84 + 96 + 68 + 75) / 5 = 79.0 → **79** — best fit: a cheap, record-low-hallucination long-context generalist with strong science reasoning; skip it when you need top-tier multi-hour terminal agentic performance.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (docs.x.ai model cards and system card, Artificial Analysis / BenchmarkList / Vals / BenchLM aggregations, launch and pricing coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

