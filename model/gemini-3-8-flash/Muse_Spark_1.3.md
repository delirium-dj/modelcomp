# Gemini 3.8 Flash — findings by Muse Spark 1.3

- Source: Google/Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash workhorse model, delivering frontier-adjacent reasoning and coding at Flash speed and cost. Top use case is high-volume agentic coding, analysis, and enterprise knowledge workflows.
- **Provider / access:** Google AI Studio + Vertex AI (`gemini-3.8-flash`); Gemini API / AI Studio; Chat Completions-compatible via OpenAI-compat endpoint and native Gemini API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff March 2026 for some domains, January 2025 for others (per vendor docs).
- **IDs:** `google/gemini-3.8-flash` (state explicitly if no Free ID exists on Zen)
- **Context window:** 1,048,576 input tokens; 65,536 max output tokens — verified via Google AI docs model page and model card (2026-09-02).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes (low/medium/high effort levels); tool calls yes (function calling, code execution, search grounding, computer use preview); JSON mode yes (structured outputs).
- **Pricing (as of 2026-09-19):** $0.75 / $3.75 per 1M input/output tokens promo through 2026-12-31, $1.50 / $7.50 regular after; paid tier only ($). Caching supported; no free-tier data-privacy caveat applicable.
- **Architecture:** proprietary (Google does not publish parameter count or architecture).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (agentic terminal coding): **89.4%** (Google model card 2026-09-02 vendor run; also 90.8% on third-party aggregator Gradually.ai 2026-09-04, 81.3% Vals high-effort via BenchLeader)
- Terminal-Bench 4.0 (general agent capabilities): **19.1%** (Google model card 2026-09-02; vs Claude Opus 5 51.8% same table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1545 Elo** (Google model card 2026-09-02; vs Opus 5 1824, Sonnet 5 1584)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-2.0 (agentic computer use, partial score batch tool): **59.0%** (Google model card 2026-09-02; vs Opus 5 75.4%)
- Vals Finance Agent v2: **61.4%** (Google model card / blog 2026-09-02)
- Harvey Legal Agent Benchmark (all pass rate): **10.0%** (Google model card 2026-09-02)

Reasoning / knowledge:

- GPQA Diamond: **93.5% medium-effort / 95.3% default (Artificial Analysis via BenchLeader, Sept 2026); 95.4% high-effort (Epoch AI Benchmarking Hub via BenchLeader)** (all third-party aggregations; vendor card does not list GPQA)
- HLE-Verified: **54.9%** (Google blog + model card 2026-09-02)
- LCR / MLCR: **AA-LCR 84.0% medium-effort** (Artificial Analysis via BenchLeader, Sept 2026)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **59 (high-effort, Artificial Analysis model page, Sept 2026, rank #16/195); BenchLeader Index 63.6 medium-best, rank #45/374** (BenchLeader, 2026-09-02)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience 28.6 medium / 29.6 default** (Artificial Analysis via BenchLeader, Sept 2026; accuracy-style score, not %)
- HLE (AA harness): **42.1% medium / 47.8% default** (Artificial Analysis via BenchLeader)

Coding:

- SWE-bench Verified / SWE-Pro: **80.0% high-effort (Vals harness via BenchLeader, Sept 2026)** (provisional — harness/mapping not vendor-confirmed; no verified SWE-bench Verified official leaderboard entry found)
- LiveCodeBench: **89.5% high-effort** (Vals AI via BenchLeader, Sept 2026; provisional third-party aggregation)
- SciCode / AA-SciCode: **54.4% medium (SciCode) / 55.1% medium, 56.6% default (AA-SciCode)** (via BenchLeader, Sept 2026)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 73.7%** (Google model card 2026-09-02; vs Opus 5 74.0%, GPT-5.6 Sol 72.7%); IOI 56.9% high (Vals via BenchLeader, provisional)

Long context:

- AA-LCR 84.0% (medium) at 1M window (Artificial Analysis via BenchLeader); LVBench long-video 87.8% agentic / 87.1% static (Google model card 2026-09-02); no verified MRCR / RULER / GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4% plus Finance 61.4% and Legal 10.0% show elite routine agentic work; capped by Terminal-Bench 4.0 19.1% and OSWorld 59.0% trailing frontier on hardest autonomy.
- **Reasoning: 90/100.** HLE-Verified 54.9%, GPQA ~93-95%, Finance/Legal leads over Opus 5 evidence strong multidisciplinary reasoning; capped by GDPval-AA 1545 trailing Opus 5 at 1824.
- **Context window: 90/100.** 1M input / 65K output with AA-LCR 84.0% and LVBench 87.8% measured retrieval; capped below 10M-tier models.
- **Multimodal: 89/100.** Text+image+audio+video+PDF in with CharXiv 86.2%, LVBench 87.8%, MMMU-Pro ~84-85% and GDP.PDF 35.0%; capped by text-only output (no image/audio generation).
- **Coding: 88/100.** DeepSWE 73.7% near Opus 5, LiveCodeBench 89.5% and Vals SWE-bench 80.0% proxies strong; capped by Terminal-Bench 4.0 coding gap and SciCode ~54-56%.
- **Cost efficiency: 92/100.** $0.75/$3.75 promo (~1/6 Opus 5 per token) is elite paid value; capped below $0 free tier (100 only).
- **Overall Score: 89/100.** Mean of the five quality dims (88+90+90+89+88)/5 = 89.0; best-fit high-volume analyst and routine coder where cost per task dominates.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-19
- Method: public internet research (Google blog 2026-09-02, DeepMind model card, AI Studio docs, Artificial Analysis, BenchLeader aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
