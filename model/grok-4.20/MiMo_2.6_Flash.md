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
