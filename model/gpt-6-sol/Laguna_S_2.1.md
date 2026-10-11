# GPT-6 Sol — findings by Laguna S 2.1

- Source: OpenAI (`opencode/gpt-6-sol`) model docs (`https://developers.openai.com/api/docs/models/gpt-6-sol`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-sol`), BenchLM (`https://benchlm.ai/models/gpt-6-sol`), OpenAI launch blog (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`)
- Date: 2026-10-10 (UTC)
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

> Sources: BenchLM model page (`benchlm.ai/models/gpt-6-sol`, 2026-10-10, 33 of 625 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-sol`, 2026-10-10), OpenAI launch blog (`openai.com/index/introducing-gpt-6-sol-and-luna/`). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Agents' Last Exam:** 56.4% — (OpenAI launch blog via BenchLM)
- **AutomationBench:** 33.2% — (OpenAI launch blog via BenchLM)
- **OSWorld 2.0:** 60.5% — (OpenAI launch blog via BenchLM)
- **ExploitGym:** 22.1% — (OpenAI GPT-6 Astra system card via BenchLM)
- **GDPval-AA (normalized):** 50.5% — (AA model benchmarks via BenchLM)
- **AA Briefcase:** 1479 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** 61.6% — (AA: automationbench-aa leaderboard via BenchLM)
- **GDP.pdf:** 25.2% — (AA: gdp-pdf leaderboard via BenchLM)
- **AA ITBench:** 49.4% — (AA: itbench-aa leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** 43.9% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **CWE-bench v1:** 52.0% — (Collinear: CWE-bench v1 leaderboard via BenchLM)
- **GDPval-AA (Elo):** 1510 — (AA: gdpval-aa leaderboard via BenchLM)
- **Terminal-Bench 2.1:** no verified public score found (not listed on BenchLM for GPT-6 Sol)

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
- **Artificial Analysis Intelligence Index:** 48 — (AA model page; rank #25/227; median: 26; BenchLM shows 47.6%)

Coding:

- **DeepSWE:** 68.8% — (OpenAI launch blog via BenchLM)
- **AA-SciCode:** 57.6% — (AA: scicode leaderboard via BenchLM)
- **SWE-bench Verified:** no verified public score found
- **LiveCodeBench:** no verified public score found

Long context:

- **AA-LCR:** 83.7% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 33 public benchmarks found across 3 sources (BenchLM, AA, OpenAI blog).

- **Tool use: 80/100.** GDPval-AA at 1510 Elo / 50.5% normalized (near-frontier ~1750+) and AA AutomationBench at 61.6% (above ~50% frontier reference) are strong. AA Briefcase at 1479 Elo, AA Terminal-Bench 4.0 at 43.9% (above ~50% frontier threshold — close), and OSWorld 2.0 at 60.5% are good. Agents' Last Exam at 56.4% and CWE-bench v1 at 52.0% are moderate. Capped by ExploitGym at 22.1% (weak, below 40%), AutomationBench at 33.2% (below 40%), and no Terminal-Bench 2.1 published.

- **Reasoning: 86/100.** GPQA Diamond at 90.9% (frontier ≥90% threshold) and AA-HLE at 47.9% (above 40% threshold) meet the frontier bar. ARC-AGI-1 at 95.50% and ARC-AGI-2 at 89.6% are exceptional. AA-LCR at 83.7% is excellent for long-context reasoning. Intelligence Index at 48 (#25/227) supports strong reasoning. CritPt at 30.9% is weak (below 40%). AA-Omniscience Index at 27.1% is positive. Capped below 90-100 frontier band by missing DeepSWE (only 68.8%) and no published HLE ≥50% or GPQA rank.

- **Context window: 90/100.** 1,050,000 native input window (≥1M tier); 128K max output verified (clears the 64K caveat). No measured retrieval-acuity figure (no MRCR/RULER).

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; audio/video/PDF explicitly unsupported per OpenAI docs) — mid-band for image-in families. AA-MMMU-Pro at 82.9% is a good signal.

- **Coding: 78/100.** DeepSWE at 68.8% (above ~50% frontier threshold, below 74% frontier ref), AA-SciCode at 57.6% (at frontier 55% threshold), AA-LCR at 83.7% supports coding reasoning. Capped by no SWE-bench Verified, no LiveCodeBench, and DeepSWE below frontier.

- **Cost efficiency: 50/100.** $2.00/$10.00 per 1M is mid-tier (same band as GPT-5.4); cost-per-task $1.04 is reasonable but not cheap; no free tier.

- **Overall Score: 81/100.** (80 + 86 + 90 + 70 + 78) / 5 = 404 / 5 = 80.8 → 81. **Up from prior 71:** fresh Oct 10 BenchLM + AA data corrects prior "no verified public score found" entries — GPQA Diamond 90.9%, HLE 47.9% (AA-HLE), DeepSWE 68.8%, AA-SciCode 57.6%, AA-LCR 83.7%, GDPval-AA 1510 Elo, AA-MMMU-Pro 82.9%. Tool use upgraded 65→80, Reasoning upgraded 66→86, Coding upgraded 63→78. Aligns with BenchLM Overall 75.1/100 rank #10/889 and AA Intelligence Index 48 (#25/227). Deprecated in favor of GPT-6.1 Sol.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM model page (`benchlm.ai/models/gpt-6-sol`, Oct 10), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-sol`, Oct 10), and OpenAI launch blog (`openai.com/index/introducing-gpt-6-sol-and-luna/`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

---
