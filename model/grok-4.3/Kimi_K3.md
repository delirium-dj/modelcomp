# Grok 4.3 — findings by Kimi K3

- Source: xAI (now SpaceXAI) / Grok 4.3 (`grok-4.3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's spring 2026 general-purpose flagship — "fast, reliable model with strong tool calling and instruction following" (docs.x.ai) — with a 1M context window and aggressive pricing; launched as the successor to the Grok 4.20 beta line, later superseded by 4.5/4.6/4.7.
- **Provider / access:** xAI API `https://api.x.ai/v1` (OpenAI-compatible), model ID `grok-4.3`, alias `grok-4.3-latest` (docs.x.ai); Broad third-party availability (listed by 8 providers per cloudprice; OpenRouter `x-ai/grok-4.3`). **No OpenCode Zen ID verified for this model.**
- **Release / knowledge:** 2026-04-30 (ai-tldr, vals.ai, OpenRouter listings; one tracker lists 2026-05-05); knowledge cutoff not verified.
- **IDs:** `grok-4.3` (xAI API), `grok-4.3-latest` alias.
- **Context window:** 1,000,000 tokens (official docs.x.ai model page).
- **Modalities:** text + image in → text out (official docs page); reasoning with efforts none/low/medium/high/xhigh (default **low**); function calling; structured outputs; Batch API supported (20% discount). Third-party coverage claimed native video input (theairankings, codersera) — **conflicts with the official docs page, which lists text, image → text only**; treat video as unverified.
- **Pricing (as of 2026-09-29):** $1.25 in / $0.20 cached / $2.50 out per 1M below 200K prompt tokens; doubles to $2.50/$0.40/$5.00 at ≥200K (whole-request rate) — docs.x.ai pricing table.
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **97.7%** (earlier tracker aggregation — indicative; strong tool-calling reputation corroborated by docs positioning)
- GDPval-AA: **1,018 Elo** (earlier tracker aggregation — indicative)
- Terminal-Bench 4.0 / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (theairankings; corroborates earlier ~90–91% third-party rows)
- Artificial Analysis Intelligence Index: **53.2** at launch under the older methodology (theairankings); AA's 2026-09-07 v4.3 re-base pulled every model down (~17 p.p. for the Grok 4.x line), so the current-scale equivalent is best estimated in the high 30s — earlier aggregation read 37.6 (indicative)
- HLE: **35%** (earlier aggregation — indicative)
- MMLU-Pro / AIME: **no verified current public score found**

Coding:

- Vibe Code Bench (vals.ai): **19.4%** — "+15-point improvement over its predecessor" (Grok 4.20-era baseline)
- LiveCodeBench: **84.5%** (earlier aggregation — indicative)
- SWE-bench Verified / DeepSWE: **no verified public score found**

Long context:

- 1M window (official); AA-LCR ~64% within it (earlier aggregation — indicative); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **~78%** (earlier aggregation — indicative, image input); video-input claims unverified vs official docs (see Model card).

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** τ²-style tool calling is a documented strength (97.7% indicative, "strong tool calling" per official docs); capped by weak indicative agentic scores and missing current terminal/agent benches.
- **Reasoning: 74/100.** GPQA 90.1% holds up; the v3-era AA index 53.2 maps to high-30s on the current v4.3 scale, below the 40s band (78–84). HLE 35% is indicative only.
- **Context window: 95/100.** Verified 1M window (docs.x.ai) → 95–100 band; indicative LCR ~64% keeps it at the bottom of the band, not higher.
- **Multimodal: 70/100.** Image input with indicative MMMU-Pro ~78% (60–75 band); official docs list text, image → text only, so third-party video-input claims cannot push it into the 80s.
- **Coding: 72/100.** Indicative LiveCodeBench 84.5% with a weak Vibe Code Bench 19.4% (verified, vals.ai) and no current SWE-bench/DeepSWE rows.
- **Cost efficiency: 88/100.** $1.25/$2.50 is better than the $1.25/$5 (≈85) reference on the output side; ≥200K whole-request doubling and low default reasoning effort (extra token spend) temper it.
- **Overall Score: 75.8/100.** Mean of (68 + 74 + 95 + 70 + 72)/5 = 75.8. Best fit: cheap, long-context (1M) tool-calling pipelines on xAI; reasoning and agentic depth lag the 4.5–4.7 line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (docs.x.ai grok-4.3 model page + pricing table; theairankings Grok 4.3 page; codersera May 2026 guide; vals.ai model page; ai-tldr/OpenRouter/swfte/cloudprice listings). Scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added verified release date (2026-04-30), tiered $1.25/$2.50 pricing with $0.20 cached, official 1M context, reasoning-effort levels (default low), alias `grok-4.3-latest`, Batch API support; resolved video-input conflict in favor of official docs (text, image → text); marked earlier tracker rows indicative; Context 75→95 per the 1M band and Cost 72→88 per verified pricing; Overall 73→75.8.
- Future sources: add a new file next to this one using the same headings.
