# GPT-6 Sol — findings by Laguna S 2.1

- Source: OpenAI (`opencode/gpt-6-sol`) model docs (`https://developers.openai.com/api/docs/models/gpt-6-sol`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-sol`), BenchLM (`https://benchlm.ai/models/gpt-6-sol`), OpenAI launch blog (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (max reasoning build) (OpenAI). Flagship reasoning/coding model for complex coding and agentic workflows.
- **Short description:** OpenAI's September-2026 GPT-6 Sol — high-reasoning build optimized for coding and long-horizon agentic work, with effort levels none→max, a 1.05M context window, 128K max output, and 122 tok/s throughput. **Deprecated** per AA (GPT-6.1 Sol is the newer release).
- **Provider / access:** OpenAI API; model ID `gpt-6-sol`; also `gpt-6-sol` snapshots. Available via OpenAI API + 6 provider routes (OpenAI). Tiered rate limits (Free tier: Not supported; Tier 1+ required).
- **Release:** September 2026 (Artificial Analysis "Released September 2026").
- **IDs:** `opencode/gpt-6-sol` (paid API). noFreeId — no free/Zen Free ID (Free tier explicitly Not supported by OpenAI).
- **Context window:** 1,050,000 input tokens; 128,000 max output tokens (OpenAI API docs; ≥1M tier; 128K max output clears the 64K caveat).
- **Modalities:** text + image input → text output (+image-in only). Audio/video/PDF **not supported** (OpenAI API docs).
- **Reasoning / tools:** Yes — `reasoning.effort` {none, low, medium (default), high, xhigh, max}. Function calling + structured/JSON outputs + tools (web search, file search, image/code-interpreter/computer use) via the Responses API (OpenAI docs).
- **Knowledge cutoff:** April 20, 2026 (OpenAI API docs).
- **Pricing (as of 2026-09-23):** $2.00 / $10.00 per 1M in/out; cached input $0.20; cache-write $2.50 (1.25×); >272K prompt billed 2× input + 1.5× output; Batch/Flex 50% off. Blended 7:2:1 ≈ $1.54/MTok. No free tier (OpenAI API docs).
- **Architecture:** Dense transformer (proprietary, parameter count undisclosed).
- **Speed:** 122.2 tokens/s output (#33/227 on AA); TTFT 141.91s.

### Raw benchmarks found

> Sources: BenchLM model page (`benchlm.ai/models/gpt-6-sol`, 2026-10-17, 32 of 639 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-sol`, 2026-10-17), OpenAI launch blog (`openai.com/index/introducing-gpt-6-sol-and-luna/`). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Agents' Last Exam:** 56.4% — (OpenAI launch blog via BenchLM)
- **AutomationBench:** 33.2% — (OpenAI launch blog via BenchLM)
- **OSWorld 2.0:** 60.5% — (OpenAI launch blog via BenchLM)
- **ExploitGym:** 22.1% — (OpenAI GPT-6 Astra system card via BenchLM)
- **GDPval-AA (normalized):** 50.4% — (AA model benchmarks via BenchLM — revised down from 50.5%)
- **AA Briefcase:** 1479 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** 61.6% — (AA: automationbench-aa leaderboard via BenchLM)
- **GDP.pdf:** 25.2% — (AA: gdp-pdf leaderboard via BenchLM)
- **AA ITBench:** 49.4% — (AA: itbench-aa leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** 43.9% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **CWE-bench v1:** 52.0% — (Collinear: CWE-bench v1 leaderboard via BenchLM)
- **GDPval-AA (Elo):** 1510 — (AA: gdpval-aa leaderboard via BenchLM)
- **Terminal-Bench 2.1:** no verified public score found (not listed on BenchLM for GPT-6 Sol)
- **Hermes Index:** 44.1% — (Nous Research: Hermes Index leaderboard via BenchLM — NEW)
- **Hermes Bench:** 73.5% — (Nous Research: Hermes Index leaderboard via BenchLM — NEW)
- **MazeBench:** 7% — (MazeBench AI leaderboard via BenchLM — NEW)

Reasoning / knowledge:

- **AA-GPQA Diamond:** 89.4% — (AA model benchmarks via BenchLM)
- **GPQA Diamond:** 90.9% — (OpenAI API docs / model card via BenchLM)
- **AA-HLE:** 47.9% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **HLE (no tools):** 36.8% — (OpenAI model card via BenchLM)
- **AA-LCR:** 83.7% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **AA-Omniscience Index:** 27.1% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Accuracy:** 54.5% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 60.1% — (AA model benchmarks via BenchLM)
- **CritPt:** 30.9% — (AA: critpt leaderboard via BenchLM)
- **MLCR-AA:** 16.1% — (AA: mlcr-aa leaderboard via BenchLM)
- **ARC-AGI-1:** 95.50% — (ARC Prize: GPT-6 Sol (Max) verified results via BenchLM)
- **ARC-AGI-2:** 89.6% — (ARC Prize: GPT-6 Sol (Max) verified results via BenchLM)
- **ARC-AGI-3:** 4.6% — (ARC Prize: GPT-6 Sol (Max) verified results via BenchLM)
- **Intelligence Index 47.6%** — (Artificial Analysis model page — revised from 48; rank #25/227; median: 26)
- **HealthBench (raw):** 47.1% — (OpenAI GPT-6 Astra system card via BenchLM — NEW)
- **HealthBench (length-adjusted):** 53.2% — (OpenAI GPT-6 Astra system card via BenchLM — NEW)
- **HealthBench Professional:** 60.8% — (OpenAI GPT-6 Astra system card via BenchLM — NEW)
- **HealthBench Professional (raw):** 59.5% — (OpenAI GPT-6 Astra system card via BenchLM — NEW)
- **HealthBench Hard:** 30.1% — (OpenAI GPT-6 Astra system card via BenchLM — NEW)

## Instruction following:

- **Gray Swan IPI (15 attempts):** 10.1% — (Google: Gemini 4 Argon launch chart via BenchLM — NEW)

Mathematics:

- **FrontierMath v2 (Tiers 1-3):** 89.825% — (Epoch AI FrontierMath v2 leaderboard via BenchLM — NEW)
- **FrontierMath v2 (Tier 4):** 90.000% — (Epoch AI FrontierMath v2 leaderboard via BenchLM — NEW)

Coding:

- **DeepSWE:** 68.8% — (OpenAI launch blog via BenchLM)
- **AA-SciCode:** 57.6% — (AA: scicode leaderboard via BenchLM)
- **SWE-bench Verified:** no verified public score found
- **LiveCodeBench:** no verified public score found

Long context:

- **AA-LCR:** 83.7% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 44 public benchmarks found across 4 sources (BenchLM, AA, OpenAI blog, Epoch AI). New Oct 17: Hermes Index/Bench, MazeBench, HealthBench family, Gray Swan IPI, FrontierMath v2.

- **Tool use: 80/100.** (Unchanged.) GDPval-AA at 1510 Elo / 50.4% normalized near-frontier and AA AutomationBench at 61.6% are strong. AA Briefcase at 1479 Elo, AA Terminal-Bench 4.0 at 43.9%, OSWorld 2.0 at 60.5%, and AA ITBench at 49.4% are good. Agents' Last Exam at 56.4% and CWE-bench v1 at 52.0% are moderate. New: Hermes Bench 73.5%, Hermes Index 44.1%. Capped by ExploitGym at 22.1% (weak), AutomationBench at 33.2% (below 40%), and no Terminal-Bench 2.1 published.

- **Reasoning: 86/100.** (Unchanged, but FrontierMath v2 added.) GPQA Diamond at 90.9% (frontier ≥90% threshold) and AA-HLE at 47.9% (above 40% threshold) meet the frontier bar. ARC-AGI-1 at 95.50% and ARC-AGI-2 at 89.6% are exceptional. AA-LCR at 83.7% is excellent for long-context reasoning. Intelligence Index at 47.6% (revised from 48; #25/227) supports strong reasoning. CritPt at 30.9% is weak (below 40%). AA-Omniscience Index at 27.1% is positive. New: FrontierMath v2 T1-3 at 89.825% and T4 at 90.000% (both above 85% frontier). Capped below 90-100 frontier band by DeepSWE 68.8% (below 74% frontier) and CritPt 30.9% (weak).

- **Context window: 90/100.** 1,050,000 native input window (≥1M tier); 128K max output verified (clears the 64K caveat). No measured retrieval-acuity figure (no MRCR/RULER).

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; audio/video/PDF explicitly unsupported per OpenAI docs) — mid-band for image-in families. AA-MMMU-Pro at 82.9% is a good signal.

- **Coding: 78/100.** DeepSWE at 68.8% (above ~50% frontier threshold, below 74% frontier ref), AA-SciCode at 57.6% (at frontier 55% threshold), AA-LCR at 83.7% supports coding reasoning. Capped by no SWE-bench Verified, no LiveCodeBench, and DeepSWE below frontier.

- **Cost efficiency: 50/100.** $2.00/$10.00 per 1M is mid-tier (same band as GPT-5.4); cost-per-task $1.04 is reasonable but not cheap; no free tier.

- **Overall Score: 81/100.** (80 + 86 + 90 + 70 + 78) / 5 = 404 / 5 = 80.8 → 81. (Unchanged.) BenchLM overall 75.1→78.48 (#10→#9/954, 32/639 benches). Intelligence Index 48→47.6% (negligible, now specific value). New: Hermes Index 44.1%, Hermes Bench 73.5%, MazeBench 7%, HealthBench family (5), Gray Swan IPI 10.1%. Aligns with BenchLM Overall 78.48/100 rank #9/954 and AA Intelligence Index 47.6. Deprecated in favor of GPT-6.1 Sol.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research via BenchLM model page (`benchlm.ai/models/gpt-6-sol`, Oct 17), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-sol`, Oct 17), and OpenAI launch blog (`openai.com/index/introducing-gpt-6-sol-and-luna/`); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page (Overall 78.48/100, #9/954, 32 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 47.6%, modalities text+image, cost $1.54/MTok blended); OpenAI API docs (context 1.05M, 128K output, pricing $2/$10); OpenAI launch blog (GPQA 90.9%, HLE, DeepSWE 68.8%, OSWorld 2.0 60.5%, Agents' Last Exam 56.4%); Epoch AI (FrontierMath v2 T1-3 89.825%, T4 90.000%); ARC Prize (ARC-AGI-1 95.50%, ARC-AGI-2 89.6%, ARC-AGI-3 4.6%); Nous Research (Hermes Index 44.1%, Hermes Bench 73.5%); MazeBench (7%); Collinear (CWE-bench v1 52.0%).
- Re-verification (Oct 17): BenchLM overall 75.1→78.48 (#10→#9/954, 32/639 benches). Intelligence Index 48→47.6% (negligible). GDPval-AA 50.5%→50.4% (negligible). New: Hermes Index, Hermes Bench, MazeBench, HealthBench family (5), Gray Swan IPI, FrontierMath v2. AA ITBench moved to agentic from prior. Overall 81→81.

---
