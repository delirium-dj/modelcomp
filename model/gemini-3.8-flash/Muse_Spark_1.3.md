# Gemini 3.8 Flash — findings by Muse Spark 1.3

- Source: Google/Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-07 (UTC)
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

- Terminal-Bench 2.1 (agentic terminal coding): **89.4%** (Google model card 2026-09-02 vendor run; also 90.8% on third-party aggregator Gradually.ai 2026-09-04, 81.3% Vals high-effort via BenchLeader, 87.64% AA / 81.27% Vals via aievals.app aggregation Oct 2026)
- Terminal-Bench 4.0 (general agent capabilities): **19.1%** (Google model card 2026-09-02; vs Claude Opus 5 51.8% same table; 19.70% AA / 19.19% Vals via aievals.app — confirmed)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1545 Elo** (Google model card 2026-09-02; vs Opus 5 1824, Sonnet 5 1584)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-2.0 (agentic computer use, partial score batch tool): **59.0%** (Google model card 2026-09-02; vs Opus 5 75.4%)
- Vals Finance Agent v2: **61.4%** (Google model card / blog 2026-09-02)
- Harvey Legal Agent Benchmark (all pass rate): **10.0%** (Google model card 2026-09-02)

Reasoning / knowledge:

- GPQA Diamond: **94.44% (Vals) / 95.25% (AA)** (aievals.app aggregation Oct 2026; corroborates filed 93.5% medium / 95.3% default / 95.4% high-effort)
- HLE-Verified: **54.9%** (Google blog + model card 2026-09-02)
- LCR / MLCR: **AA-LCR 84.0% medium-effort** (Artificial Analysis via BenchLeader, Sept 2026)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **59 (high-effort, Artificial Analysis model page, Sept 2026, rank #16/195); BenchLeader Index 63.6 medium-best, rank #45/374** (BenchLeader, 2026-09-02); aievals.app Oct 2026 shows AA Index 41 (rank 22/41) — different lane/effort snapshot, both listed; **MMLU Pro 90.22%** (Vals, new 2026-10-07); **Vals Index 54.83%** (rank 15/33, new 2026-10-07)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience 28.6 medium / 29.6 default** (Artificial Analysis via BenchLeader, Sept 2026; accuracy-style score, not %)
- HLE (AA harness): **42.1% medium / 47.8% default** (Artificial Analysis via BenchLeader)

Coding:

- SWE-bench Verified / SWE-Pro: **80.00% SWE-bench Verified (Vals, rank 18/23 — confirmed, no longer provisional)**; **94.86% SWE-Bench Pro V2 Full / 58.80% HARD** (Scale AI/SEAL via aievals.app, new 2026-10-07 — different suite from classic Verified, listed separately)
- LiveCodeBench: **89.48% (Vals — confirmed)** (corroborates filed 89.5% high-effort)
- SciCode / AA-SciCode: **54.4% medium (SciCode) / 55.1% medium, 56.6% default (AA-SciCode)** (via BenchLeader, Sept 2026)
- Vibe Code Bench: **78.65% Vibe v1.1** (Vals via aievals.app, new 2026-10-07 — fills prior gap)
- DeepSWE / Coding Index / other: **DeepSWE v1.1 73.7%** (Google model card 2026-09-02; vs Opus 5 74.0%, GPT-5.6 Sol 72.7%); IOI 56.9% high (Vals via BenchLeader, provisional); **10.00% Terminal-Bench Science 0.1, 1.00% ProgramBench** (Vals via aievals.app, new 2026-10-07)

Long context:

- AA-LCR 84.0% (medium) at 1M window (Artificial Analysis via BenchLeader); LVBench long-video 87.8% agentic / 87.1% static (Google model card 2026-09-02); no verified MRCR / RULER / GraphWalks score found.
- Fresh-source note (2026-09-27 re-audit, user-signed-off exception to RULES.md permanence): cursorBench32 69.2% (BenchLM) absent from the original file; deepSWE 73.8% vs filed 73.7% is aggregator rounding; live AA page Index 47 (high) vs filed 59 (high-effort) and BenchLM overall 78.41 vs filed BenchLeader 63.6 are different lanes/effort levels — all corroborating, not contradicting; scores unchanged.
- Re-research note (2026-10-07, user-approved second pass): Vals-confirmed SWE-bench Verified 80.00% and LiveCode 89.48% (provisional tags lifted); new rows MMLU Pro 90.22, MMMU Pro 89.08, Vibe 78.65, TB-Science 10.0, ProgramBench 1.0, SWE-Pro V2 94.86/58.80, Vals Index 54.83. Scores unchanged (new rows corroborate the existing profile).

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4% plus Finance 61.4% and Legal 10.0% show elite routine agentic work; capped by Terminal-Bench 4.0 19.1% and OSWorld 59.0% trailing frontier on hardest autonomy.
- **Reasoning: 90/100.** HLE-Verified 54.9%, GPQA ~94-95% (multi-harness confirmed), MMLU Pro 90.22 evidence strong multidisciplinary reasoning; capped by GDPval-AA 1545 trailing Opus 5 at 1824.
- **Context window: 90/100.** 1M input / 65K output with AA-LCR 84.0% and LVBench 87.8% measured retrieval; capped below 10M-tier models.
- **Multimodal: 89/100.** Text+image+audio+video+PDF in with CharXiv 86.2%, LVBench 87.8%, MMMU-Pro 89.08 (confirmed) and GDP.PDF 35.0%; capped by text-only output (no image/audio generation).
- **Coding: 88/100.** DeepSWE 73.7% near Opus 5, LiveCodeBench 89.48% and SWE-bench Verified 80.0% (both Vals-confirmed) proxies strong; capped by Terminal-Bench 4.0 coding gap and SciCode ~54-56%.
- **Cost efficiency: 92/100.** $0.75/$3.75 promo (~1/6 Opus 5 per token) is elite paid value; capped below $0 free tier (100 only).
- **Overall Score: 89/100.** Mean of the five quality dims (88+90+90+89+88)/5 = 89.0; best-fit high-volume analyst and routine coder where cost per task dominates.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Google blog 2026-09-02, DeepMind model card + evals-methodology page, AI Studio docs, Artificial Analysis, BenchLeader aggregation) + 2026-10-07 re-research pass (aievals.app aggregation, Vals SWE-bench Verified leaderboard, VectorWire benchmark page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
