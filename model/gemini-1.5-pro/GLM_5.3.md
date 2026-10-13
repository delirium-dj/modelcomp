# Gemini 1.5 Pro — findings by GLM 5.3

- Source: Google (`gemini-1.5-pro`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's February-2024 legacy frontier model, famous for introducing the 1M→2M token context window; long superseded by the 2.x/3.x/4 lines and **fully retired — BenchLeader marks the entry "stale: no new result in six months" (last measured 2026-03-05), with no live providers and no current price**, and it sits in Google's long-retired deprecation bucket (modeldeprecations.dev: 19 retired Google models). Second pass adds the residual measurements (BenchLeader **42.4 #578/760** — the second-lowest Gemini Pro in the family table): ARC-AGI-2 0.8% #204, MMMU 65.8% #27, VISTA 37.1% #43, and FORTRESS 53.9% #10 confirm a 2024-era profile. Top use case (historical): ultra-long-document multimodal analysis.
- **Provider / access (historical):** Google Gemini API `gemini-1.5-pro` — retired; no live OpenRouter providers; absent from OpenCode Zen.
- **Release / knowledge:** February 2024 (1M context; 2M from May 2024); BenchLeader's entry dates the 002-refresh GA at 2025-02-15, with 001 (2024-05-14, 44.5 #513) and 002 (2024-09-24, 44.7 #506) tracked separately; knowledge cutoff 2023.
- **IDs:** `google/gemini-1.5-pro` (retired); `gemini-1.5-pro-001/002` (snapshots, also retired).
- **Context window:** **2M tokens** (confirmed — still the largest verified window in this dataset).
- **Modalities:** text, image, audio, and video in (1.5-generation vendor documentation); text out; non-reasoning (no thinking mode); function calling in the era API.
- **Pricing (historical):** no current price exists — retired; launch-era tiered pricing was mid-tier. Scored on the historical bracket.
- **Architecture:** proprietary; parameters undisclosed (MoE per public reporting, unverified).

### Raw benchmarks found

> Second pass adds the residual BenchLeader rows (best config **42.4 #578/760**; categories: Multimodal 42 (best), Composite 38, **Reasoning 33 (worst)**). No new results in six months — the dossier is closed.

Agent / tool use:

- Terminal-Bench / τ² / τ³ / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas: **still no verified public score** (pre-dates every current agentic suite — unchanged).

Reasoning / knowledge:

- GPQA Diamond: **58.9% #375** — below the mid band (confirmed); HLE: **4.6% #467** — floor (confirmed); **ARC-AGI-2: 0.8% #204** — floor (new)
- **AA Intelligence Index: 7.9 #438** (confirmed); ECI 131.7 #138 — the lowest ECI in the Gemini family
- FORTRESS: 53.9% #10 (new — decent era safety balance, the lone above-water row)

Coding:

- AA Coding Index: **23.6%** (retained — near-floor); SWE-bench / LiveCodeBench / SciCode / Vibe: still no verified rows (unchanged).

Long context:

- 2M window (confirmed); still no MRCR/RULER/GraphWalks value at any length — capacity without measured retrieval.

Multimodal:

- MMMU: 65.8% #27 (new, mid); MMMU-Pro: AA **55.0% #225** (confirmed) / official **46.9% #18** (new — weak); **VISTA: 37.1% #43** (new, weak); full text+image+audio+video in, text out.

### Normalized scores (1–100)

- **Tool use: 40/100.** Held: zero agentic measurements exist or will ever exist for this ID — the model pre-dates every current suite; function calling existed in the era API only.
- **Reasoning: 44/100.** Lowered from 48: GPQA 58.9% #375 sits below the mid band, HLE 4.6% #467 and ARC-AGI-2 0.8% #204 are floor reads, AA II 7.9 #438 and ECI 131.7 confirm the 2024-era ceiling; FORTRESS 53.9% #10 is a safety row, not a capability lift.
- **Context window: 96/100.** Held: the 2M window remains the largest verified in this dataset — but with zero measured retrieval at any length.
- **Multimodal: 78/100.** Lowered from 88: the residual rows (MMMU-Pro 55.0%/46.9%, VISTA 37.1%) measure weak in absolute terms — the full omni input set (era-documented audio+video) keeps the breadth credit.
- **Coding: 35/100.** Held: AA Coding Index 23.6% near-floor; no other rows exist.
- **Cost efficiency: 60/100.** Held as historical: retired, no current price; the launch-era tiered pricing was mid-class.
- **Overall Score: 59/100.** (40 + 44 + 96 + 78 + 35) / 5 = 58.6 → 59, down from 61. Best-fit (historical): the model that invented the 2M window — a 2024-era capability landmark whose measured profile (Reasoning 33 as its worst category, ARC-AGI-2 0.8%, HLE 4.6%) has been fully passed by every current model in this dataset, including Gemini's own Flash-Lite tiers; retired, stale, and unmigrated workloads have no reason to remain.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (the residual BenchLeader rows — 42.4 #578, "stale: no new result in six months," last measured 2026-03-05 — aggregating Artificial Analysis, Scale AI SEAL incl. VISTA/FORTRESS, MMMU official board, Epoch AI Benchmarking Hub, ARC Prize; the retirement status from modeldeprecations.dev's Google page as surfaced during this cycle's Gemini 2.5 Pro pass; the first-pass rows, which the residual data confirmed, retained); scores are normalized 1-100 interpretations, not official vendor scores. Dimension scores remain partly provisional on era/context evidence.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
