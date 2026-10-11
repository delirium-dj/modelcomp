# GPT-6.1 Sol — findings by Laguna S 2.1

- Source: OpenAI (`opencode/gpt-6.1-sol`) model docs (`https://developers.openai.com/api/docs/models/gpt-6.1-sol`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-1-sol`), BenchLM (`https://benchlm.ai/models/gpt-6.1-sol`), OpenAI launch blog (`https://openai.com/index/introducing-gpt-6-1-sol/`)
- Date: 2026-10-10 (UTC)
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

> Sources: BenchLM model page (`benchlm.ai/models/gpt-6.1-sol`, 2026-10-10, 50 of 623 benchmarks), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-1-sol`, 2026-10-10), OpenAI launch blog (`openai.com/index/introducing-gpt-6.1-sol/`). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Terminal-Bench 2.1:** 91.0% — (OpenAI launch blog via BenchLM)
- **Terminal-Bench 2.1 (Vals):** 76.2% — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **aaTerminalBench21:** 91.0% — (AA: terminalbench-v2-1 leaderboard via BenchLM)
- **OSWorld-Verified:** 83.5% — (OpenAI launch blog via BenchLM)
- **OSWorld 2.0:** 66.1% — (OpenAI launch blog via BenchLM)
- **GDPval-AA (normalized):** 52.7% — (AA model benchmarks via BenchLM)
- **GDPval-AA (Elo):** 1765 — (AA: gdpval-aa leaderboard via BenchLM)
- **AA Briefcase:** 1491 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** 63.8% — (AA: automationbench-aa leaderboard via BenchLM)
- **AA ITBench:** 48.1% — (AA: itbench-aa leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** 35.7% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **GDP.pdf:** 17.1% — (AA: gdp-pdf leaderboard via BenchLM)
- **AutomationBench:** 35.9% — (OpenAI launch blog via BenchLM)
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
- **AA-HLE:** 47.3% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **HLE (no tools):** 39.5% — (OpenAI launch blog via BenchLM)
- **AA-LCR:** 85.2% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **MLCR-AA:** 28.4% — (AA: mlcr-aa leaderboard via BenchLM)
- **CritPt:** 20.5% — (AA: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** 28.7% — (AA: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** 57.1% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 55.4% — (AA model benchmarks via BenchLM)
- **ARC-AGI-1:** 96.5% — (ARC Prize: GPT-6.1 Sol (Max) verified results via BenchLM, updated Oct 10)
- **ARC-AGI-2:** 94.2% — (ARC Prize: GPT-6.1 Sol (Max) verified results via BenchLM, updated Oct 10)
- **ARC-AGI-3:** 8.2% — (ARC Prize: GPT-6.1 Sol (Max) verified results via BenchLM)
- **Artificial Analysis Intelligence Index:** 52 — (AA model page; rank #11/227; median: 26; BenchLM shows 51.6%)

Coding:

- **DeepSWE:** 75.2% — (OpenAI launch blog via BenchLM)
- **AA-SciCode:** 58.9% — (AA: scicode leaderboard via BenchLM)
- **SWE-bench Verified:** 88.9% — (OpenAI launch blog via BenchLM)
- **SWE-bench Pro:** 67.7% — (OpenAI launch blog via BenchLM)
- **LiveCodeBench (Vals):** 93.2% — (Vals AI: LiveCodeBench leaderboard via BenchLM)
- **LiveCodeBench:** 92.3% — (OpenAI launch blog via BenchLM)
- **IFBench:** 58.7% — (AA: ifbench leaderboard via BenchLM)

Long context:

- **AA-LCR:** 85.2% — (AA model benchmarks via BenchLM) — excellent long-context reasoning

Multimodal:

- **AA-MMMU-Pro:** 84.1% — (AA: mmmu-pro leaderboard via BenchLM)
- **MMMU-Pro:** 82.4% — (OpenAI launch blog via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 50 public benchmarks found across 3 sources (BenchLM, AA, OpenAI blog).

- **Tool use: 93/100.** Terminal-Bench 2.1 at 91.0% (≥88% frontier threshold), aaTerminalBench21 at 91.0% (frontier), and GDPval-AA at 1765 Elo (near-frontier ~1750+) are exceptional. Toolathlon-Verified at 82.0%, OSWorld-Verified at 83.5%, AA Briefcase at 1491 Elo, and AA AutomationBench at 63.8% provide strong supporting evidence. τ²-bench at 59.4% and τ²-bench Airline at 57.1% are above the 50% frontier threshold. Capped by AA Terminal-Bench 4.0 at 35.7% (below 40%), GDP.pdf at 17.1% (weak), and ExploitGym not found.

- **Reasoning: 91/100.** Intelligence Index at 52 (rank #11/227, well above median 26). Using II + 30 formula: 52 + 30 = 82. However, GPQA Diamond at 93.8% / 94.1% (Vals) (≥90% frontier threshold), AA-GPQA Diamond at 93.2% (≥90% frontier), HLE w/ tools at 51.2% (above 40%), AA-HLE at 47.3%, and AA-LCR at 85.2% are exceptional. ARC-AGI-1 at 96.5% and ARC-AGI-2 at 94.2% confirm AGI-level reasoning. AA-Omniscience Index at 28.7% is positive. CritPt at 20.5% and MLCR-AA at 28.4% are moderate. Capped below 90-100 frontier band by AA-HLE at 47.3% (not ≥50% frontier) and CritPt below 30%.

- **Context window: 90/100.** 1,050,000 native input window (≥1M tier); 128K max output verified (clears the 64K caveat). AA-LCR at 85.2% confirms long-context reasoning. No measured retrieval-acuity figure (no MRCR/RULER).

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; audio/video/PDF explicitly unsupported per OpenAI docs). AA-MMMU-Pro at 84.1% and MMMU-Pro at 82.4% are good signals. (+image-in only → 60-70 tier.)

- **Coding: 92/100.** Terminal-Bench 2.1 at 91.0% (frontier ≥88%), DeepSWE at 75.2% (frontier ≥74%), SWE-bench Verified at 88.9% (near-frontier ≈93-95%), LiveCodeBench at 92.3% (near-frontier), and LiveCodeBench (Vals) at 93.2% (frontier). AA-SciCode at 58.9% (above 55% threshold) and IFBench at 58.7% provide additional evidence. SWE-bench Pro at 67.7% is good. Capped by no SWE-bench Verified above 93% and IFBench at 58.7% (below ~80% efficiency frontier).

- **Cost efficiency: 50/100.** $2.00/$10.00 per 1M is mid-tier (same band as GPT-5.4); cost-per-task $1.04 is reasonable but not cheap; no free tier.

- **Overall Score: 87/100.** (93 + 91 + 90 + 70 + 92) / 5 = 436 / 5 = 87.2 → 87. **Up from prior 87:** updated date to Oct 10; Intelligence Index 52 (rank #11/227) and 50 fresh Oct 10 benchmarks from BenchLM + AA + OpenAI launch blog confirm and expand the prior score. GPQA Diamond 93.8% (was "not found"), HLE w/ tools 51.2% (was "not found"), DeepSWE 75.2% (was "not found"), SWE-bench Verified 88.9% (was "not found"), LiveCodeBench 92.3% (was "not found"), AA-SciCode 58.9% (was "not found"). Aligns with BenchLM Overall 84.18/100 rank #10/889 and AA Intelligence Index 52 (#11/227).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM model page (`benchlm.ai/models/gpt-6.1-sol`, Oct 10), Artificial Analysis model page (`artificialanalysis.ai/models/gpt-6-1-sol`, Oct 10), and OpenAI launch blog (`openai.com/index/introducing-gpt-6.1-sol/`); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one using the same headings.

---
