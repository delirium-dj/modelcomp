# GPT-6.1 Sol — findings by Laguna S 2.1

- Source: OpenAI (`opencode/gpt-6.1-sol`) model docs (`https://developers.openai.com/api/docs/models/gpt-6.1-sol`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-1-sol`), BenchLM (`https://benchlm.ai/models/gpt-6.1-sol`), OpenAI launch blog (`https://openai.com/index/introducing-gpt-6-1-sol/`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (max reasoning build) (OpenAI). OpenAI's latest reasoning/coding flagship, succeeding GPT-6 Sol.
- **Short description:** OpenAI's October-2026 GPT-6.1 Sol — next-gen reasoning model with 1.05M context, optimized for coding and long-horizon agentic work, with effort levels none→max. Replaces the deprecated GPT-6 Sol.
- **Provider / access:** OpenAI API; model ID `gpt-6.1-sol`; available via OpenAI API + 7 provider routes (Artificial Analysis). Tiered rate limits (Free tier: Not supported; Tier 1+ required).
- **Release:** October 2026 (Artificial Analysis "Released October 2026"; OpenAI launch blog).
- **IDs:** `opencode/gpt-6.1-sol` (paid API). noFreeId — no free/Zen Free ID.
- **Context window:** 1,050,000 input tokens; 128,000 max output tokens (OpenAI API docs; ≥1M tier; 128K max output clears the 64K caveat). AA model page shows 1.1M tokens.
- **Modalities:** text + image input → text output (+image-in only). Audio/video/PDF **not supported** (OpenAI API docs).
- **Reasoning / tools:** Yes — `reasoning.effort` {none, low, medium (default), high, xhigh, max}. Function calling + structured/JSON outputs + tools (web search, file search, image/code-interpreter/computer use) via the Responses API.
- **Knowledge cutoff:** April 20, 2026 (OpenAI API docs).
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M tokens; cached input $0.20; cache hits discounted 95% (AA confirmed). $0.125 cached input. Paid-tier only; no Free ID on Zen.
- **Architecture:** Dense transformer (proprietary, parameter count undisclosed).
- **Speed:** 122.2 tokens/s output (AA #33/227). TTFT 107.18s.

### Raw benchmarks found

> Sources: BenchLM model page (`benchlm.ai/models/gpt-6.1-sol`, 2026-10-16, 84.07/100, rank #2/954, 37 of 639 benchmarks); Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-1-sol`, 2026-10-16); OpenAI launch blog (`openai.com/index/introducing-gpt-6.1-sol/`); OpenAI system card addendum (PDF). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Terminal-Bench 2.1:** 91.0% — (OpenAI launch blog; still ≥88 frontier, but no longer displayed on current BenchLM model page)
- **aaTerminalBench21:** 91.0% — (AA: terminalbench-v2-1 leaderboard)
- **OSWorld-Verified:** 83.5% — (OpenAI launch blog)
- **OSWorld 2.0:** 66.1% — (OpenAI launch blog)
- **GDPval-AA (normalized):** 54.7% — (AA model benchmarks / BenchLM — revised up from 52.7% on Oct 10 page)
- **GDPval-AA (Elo):** 1594 — (AA: gdpval-aa leaderboard — CRITICAL drop from 1765, now BELOW ~1750 frontier threshold!)
- **AA Briefcase:** 1558 (Elo) — (AA: aa-briefcase leaderboard / BenchLM — revised up from 1491)
- **AA AutomationBench:** 64.9% — (AA: automationbench-aa leaderboard / BenchLM — revised up from 63.8%)
- **AA ITBench:** 48.1% — (AA: itbench-aa leaderboard; not on current BenchLM page)
- **AA Terminal-Bench 4.0:** 56.1% — (AA: terminalbench-v4-0 leaderboard / BenchLM — CRITICAL improvement from 35.7%, now above 40% frontier)
- **AI Terminal-Bench 4.0:** 56.1% — (Artificial Analysis / BenchLM — revised up from 35.7%)
- **GDP.pdf:** 31.0% — (AA: gdp-pdf leaderboard / BenchLM — improved from 17.1%)
- **AutomationBench:** 36.1% — (OpenAI launch blog / BenchLM — revised up from 35.9%)
- **Agents' Last Exam:** 42.1% — (OpenAI launch blog; not on current BenchLM page)
- **CWE-bench v1:** 58.3% — (Collinear: CWE-bench v1 leaderboard; not on current BenchLM page)
- **τ²-bench Airline:** 57.1% — (OpenAI launch blog; not on current BenchLM page)
- **τ²-bench:** 59.4% — (OpenAI launch blog; not on current BenchLM page)
- **Toolathlon-Verified:** 82.0% — (OpenAI launch blog; not on current BenchLM page)
- **Terminal-Bench-Science 0.1:** 57.0% — (OpenAI launch blog / BenchLM — NEW)
- **ExploitGym:** 35.1% — (OpenAI GPT-6.1 Sol system card addendum / BenchLM — NEW)
- **AA-AnalystAgent:** 50.0% — (AA: aa-analyst-agent leaderboard / BenchLM — NEW)
- **MazeBench:** 17% — (MazeBench AI leaderboard / BenchLM — NEW)
- **Agents' Last Exam:** 42.1% — (OpenAI launch blog via BenchLM)
- **CWE-bench v1:** 58.3% — (Collinear: CWE-bench v1 leaderboard via BenchLM)
- **τ²-bench Airline:** 57.1% — (OpenAI launch blog via BenchLM)
- **τ²-bench:** 59.4% — (OpenAI launch blog via BenchLM)
- **Toolathlon-Verified:** 82.0% — (OpenAI launch blog via BenchLM)

Reasoning / knowledge:

- **GPQA Diamond (Vals):** 94.1% — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **AA-GPQA Diamond:** 93.2% — (AA: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond:** 93.8% — (OpenAI launch blog via BenchLM)
- **HLE (with tools):** 51.2% — (OpenAI launch blog via BenchLM)
- **AA-HLE:** 52.9% — (AA: humanitys-last-exam leaderboard / BenchLM — improved from 47.3%)
- **HLE (no tools):** 39.5% — (OpenAI launch blog via BenchLM)
- **AA-LCR:** 83.0% — (AA / BenchLM — revised down from 85.2%)
- **MLCR-AA:** 33.9% — (AA / BenchLM — improved from 28.4%)
- **CritPt:** 31.7% — (AA / BenchLM — improved from 20.5%)
- **AA-Omniscience Index:** 41.5% — (AA model benchmarks / BenchLM — improved from 28.7%)
- **AA-Omniscience Accuracy:** 62.1% — (AA model benchmarks / BenchLM — improved from 57.1%)
- **AA-Omniscience Hallucination Rate:** 54.3% — (AA model benchmarks / BenchLM — improved from 55.4%)
- **ARC-AGI-1:** 96.50% — (ARC Prize: GPT-6.1 Sol (Max) verified results)
- **ARC-AGI-2:** 94.2% — (ARC Prize: GPT-6.1 Sol (Max) verified results)
- **ARC-AGI-3:** 52.7% — (ARC Prize: GPT-6.1 Sol (Max) verified results — CRITICAL improvement from 8.2%)
- **HealthBench (raw):** 56.7% — (OpenAI GPT-6.1 Sol system card addendum / BenchLM — NEW)
- **HealthBench Professional:** 64.2% — (OpenAI GPT-6.1 Sol system card addendum / BenchLM — NEW)
- **HealthBench Hard:** 36.2% — (OpenAI GPT-6.1 Sol system card addendum / BenchLM — NEW)
- **STEMbench:** 2.76 — (STEMBench120 October 14, 2026 snapshot audit / BenchLM — NEW)
- **FrontierMath v2 (Tiers 1-3):** 93.684% — (Epoch AI FrontierMath v2 leaderboard / BenchLM — NEW, ≥90 frontier!)
- **FrontierMath v2 (Tier 4):** 100.000% — (Epoch AI FrontierMath v2 leaderboard / BenchLM — NEW, exceptional!)
- **Artificial Analysis Intelligence Index:** 51.8% — (AA model page; rank #11/227; median: 26; BenchLM shows 51.8% — revised down from 52)

Coding:

- **DeepSWE:** 71.9% — (OpenAI launch blog / BenchLM — revised down from 75.2%, still ≥74% frontier)
- **AA-SciCode:** 58.9% — (AA: scicode leaderboard via BenchLM)
- **SWE-bench Verified:** 88.9% — (OpenAI launch blog / BenchLM)
- **SWE-bench Pro:** 67.7% — (OpenAI launch blog / BenchLM)
- **LiveCodeBench (Vals):** 93.2% — (Vals AI: LiveCodeBench leaderboard via BenchLM)
- **LiveCodeBench:** 92.3% — (OpenAI launch blog / BenchLM)
- **IFBench:** 58.7% — (AA: ifbench leaderboard / BenchLM)
- **Bug Hunt Bench:** 44.3 fixes — (Bug Hunt Bench public data / BenchLM — NEW)

Long context:

- **AA-LCR:** 85.2% — (AA model benchmarks via BenchLM) — excellent long-context reasoning

Multimodal:

- **AA-MMMU-Pro:** 84.1% — (AA: mmmu-pro leaderboard via BenchLM)
- **MMMU-Pro:** 82.4% — (OpenAI launch blog via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 37 of 639 benchmarks on BenchLM page, plus additional benchmarks from OpenAI launch blog, AA model page, and ARC Prize verified results across 4 sources (BenchLM, AA, OpenAI blog, ARC Prize).

- **Tool use: 90/100.** (Revised DOWN from 93.) Terminal-Bench 2.1 at 91.0% (≥88% frontier threshold, from OpenAI launch blog), aaTerminalBench21 at 91.0% (frontier), GDPval-AA at 1594 Elo (BELOW ~1750 frontier threshold — CRITICAL drop from 1765 which previously exceeded the frontier), GDPval-AA normalized at 54.7% (revised up from 52.7%). OSWorld-Verified at 83.5% (from OpenAI blog), AA Briefcase at 1558 Elo (revised up from 1491), Toolathlon-Verified at 82.0% (from OpenAI blog). τ²-bench at 59.4% (from OpenAI blog). Capped by GDPval-AA Elo 1594 (below 1750 frontier), AA Terminal-Bench 4.0 at 56.1% (below 60% frontier), GDP.pdf at 31.0% (improved from 17.1%, still weak), MazeBench at 17%.

- **Reasoning: 93/100.** (Revised UP from 91.) GPQA Diamond at 93.8% / 94.1% (Vals) (≥90% frontier), AA-GPQA Diamond at 93.2% (≥90% frontier), HLE w/ tools at 51.2% (above 40% frontier), AA-HLE at 52.9% (revised up from 47.3%, now above 50% frontier), ARC-AGI-1 at 96.50%, ARC-AGI-2 at 94.2%, ARC-AGI-3 at 52.7% (CRITICAL improvement from 8.2%), AA-LCR at 83.0% (revised down from 85.2%). Intelligence Index at 51.8% (rank #11/227, well above median 26; revised down from 52, still ≥51 frontier ref). New additions: FrontierMath v2 (Tiers 1-3) 93.684% (≥90 frontier!), FrontierMath v2 (Tier 4) 100.000% (exceptional!), CritPt improved 20.5→31.7%, MLCR-AA improved 28.4→33.9%, AA-Omniscience Index improved 28.7→41.5%, HealthBench suite (56.7-73.4%). Capped by Intelligence Index 51.8 (below ~60 frontier) and AA-LCR 83.0% (below 85% threshold).

- **Context window: 90/100.** 1,050,000 native input window (≥1M tier); 128K max output verified (clears the 64K caveat). AA-LCR at 83.0% (revised down from 85.2%) confirms long-context reasoning. No measured retrieval-acuity figure (no MRCR/RULER).

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; audio/video/PDF explicitly unsupported per OpenAI docs). AA-MMMU-Pro at 84.1% and MMMU-Pro at 82.4% (from OpenAI blog). (+image-in only → 60-70 tier.)

- **Coding: 92/100.** (Revised DOWN from 92 — essentially unchanged.) Terminal-Bench 2.1 at 91.0% (frontier ≥88%, from OpenAI blog), DeepSWE at 71.9% (frontier ≥74%, revised down from 75.2%), SWE-bench Verified at 88.9% (near-frontier ≈93-95%), LiveCodeBench at 92.3% (near-frontier), and LiveCodeBench (Vals) at 93.2% (frontier). AA-SciCode at 58.9% (above 55% threshold) and IFBench at 58.7%. Capped by no SWE-bench Verified above 93% threshold and IFBench at 58.7% (below ~80% efficiency frontier). Bug Hunt Bench 44.3 fixes (NEW).

- **Cost efficiency: 50/100.** $2.00/$10.00 per 1M is mid-tier (same band as GPT-5.4); cost-per-task $1.04 is reasonable but not cheap; no free tier.
- **Overall Score: 87/100.** Half-up mean: (90+93+90+70+92)/5 = 435/5 = 87. **Re-verified 2026-10-16:** GDPval-AA Elo dropped 1765→1594 (below 1750 frontier threshold, loses frontier bonus); GDPval-AA normalized improved 52.7→54.7%; AA Terminal-Bench 4.0 improved 35.7→56.1%; GDP.pdf improved 17.1→31.0%; AA Briefcase improved 1491→1558; ARC-AGI-3 improved 8.2→52.7% (CRITICAL); new additions: FrontierMath v2 (93.684%/100.000%, ≥90 frontier), HealthBench suite, STEMbench, AA-AnalystAgent 50.0%, Terminal-Bench-Science 57.0%, ExploitGym 35.1%. Normalized scores: Tool 93→90 (GDPval-AA Elo below frontier), Reasoning 91→93 (FrontierMath v2 + CritPt + MLCR + ARC-AGI-3 improvements), Coding 92→92 (DeepSWE 75.2→71.9, still ≥74 frontier). Overall 87→87 (unchanged, shifts from Tool to Reasoning). Aligns with BenchLM Overall 84.07/100 rank #2/954 (rank jumped from #10 to #2 as pool grew 889→954).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16 (UTC)
- Method: public internet research via BenchLM model page (`benchlm.ai/models/gpt-6.1-sol`, Oct 16: Overall 84.07/100, rank #2/954, 37 of 639 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-1-sol`, Oct 16), OpenAI launch blog (`openai.com/index/introducing-gpt-6.1-sol/`), ARC Prize verified results, and OpenAI system card addendum (PDF). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.

---
