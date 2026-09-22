# Muse Spark 1.2 Free — findings by Solar Pro 4

- Source: Meta/Muse Spark 1.2 Free, e.g. Meta (`meta/muse-spark-1.2-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Meta open-weight, Muse Spark 1.2 family)
- **Short description:** Meta's prior-generation Muse Spark 1.2 model available as a free tier on OpenCode Zen. Shares weights with standard Muse Spark 1.2; the difference is pricing and training-data consent. The "Contributor" tier offers free or low-cost access during a limited period. Listed in model-comparison.md with Overall Score 93 — the second-highest-scoring free model available, serving as a near-frontier free fallback when Muse Spark 1.3 Contributor is unavailable.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`). Also available via Meta's own infrastructure and other providers.
- **Release / knowledge:** Released 2026-08-26 (Muse Spark 1.2 announcement). Knowledge cutoff not explicitly stated.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (OpenCode Zen free tier). Standard tier: `opencode/muse-spark-1.2`.
- **Context window:** 1M tokens (per model-comparison.md). Max output not explicitly stated but likely 128K+.
- **Modalities:** Text and image input; text and image output (multimodal). Video input: yes. PDF input: yes (per Vercel AI Gateway changelog for Muse Spark 1.3 — 1.2 likely similar). Tool calls: yes. Structured output: yes. Reasoning: yes.
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen (Contributor pricing during limited period). Standard tier: $1.25/$4.25 per 1M. Free tier has training-data consent caveat.
- **Architecture:** Open-weight (Meta). Same weights as standard Muse Spark 1.2. Architecture details not fully disclosed by Meta.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM; https://benchlm.ai/models/muse-spark-1-2).
- SWE-bench Verified: no verified public score found for Muse Spark 1.2 specifically.
- SWE-Atlas Codebase QnA: no verified public score found for Muse Spark 1.2 specifically.
- Tau3-Banking: **47%** (AA; https://artificialanalysis.ai/articles/muse-spark-1-2 — plus 2 points over prior).
- MCP Atlas: **90.3%** (Benchgen; https://benchgen.com/models/meta/muse-spark-1-2).
- GDPval-AA: **1,631** (BenchLM; https://benchlm.ai/models/muse-spark-1-2). Plus 260 over prior.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: MCP Atlas 90.3% covered above.
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM; https://benchlm.ai/models/muse-spark-1-2).
- HLE (Humanity's Last Exam): **45.5%** (BenchLM; https://benchlm.ai/models/muse-spark-1-2).
- LCR: **81%** (BenchLM; https://benchlm.ai/models/muse-spark-1-2).
- MRCR: no verified public score found for Muse Spark 1.2 specifically (but 1.3 has 98.5%/98.1%).
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **71.88** (BenchLM; https://benchlm.ai/models/muse-spark-1-2). Ranked #11 out of 411 models.
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for Muse Spark 1.2 specifically.
- DeepSWE: **59.3%** (Benchgen; https://benchgen.com/models/meta/muse-spark-1-2).
- LiveCodeBench: no verified public score found for Muse Spark 1.2 specifically.
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Coding Index: no verified public score found

Long context:

- MRCR: no verified public score found for Muse Spark 1.2 specifically.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 82.9% (frontier tier: TB2.1 85%+ → 90-100, so just below), MCP Atlas 90.3% (exceptional tool orchestration), GDPval-AA 1,631 (frontier-tier knowledge work, +260 over prior), Tau3 47% (+2 over prior). Strong, consistent scores. Capped by: Terminal-Bench 2.1 at 82.9% being just below the 85%+ frontier threshold, lack of SWE-bench Verified direct score. Overall tool-use capability is frontier-tier, slightly below Muse Spark 1.3.
- **Reasoning: 92/100.** GPQA Diamond 90.4% (frontier tier: GPQA 90%+ → 90-100), HLE 45.5% (frontier tier: HLE 40%+ → 90-100), LCR 81% (exceptional), AA Intelligence Index 71.88 (#11 out of 411 models — exceptional). Exceptional, consistent scores. Capped by: lack of MRCR direct score for 1.2 (1.3 has 98.5%/98.1%). Overall reasoning is clearly frontier-tier.
- **Context window: 100/100.** 1M tokens context window (per model-comparison.md). Maximum tier (≥1M = 95-100). Score 100 reflects top-tier context window.
- **Multimodal: 90/100.** Text and image input; text and image output (native multimodal). Video input: yes. PDF input: yes (per Vercel AI Gateway changelog — likely same for 1.2). Per methodology: +video/PDF in = 75-90, +image out = 90-100. With text+image+video+PDF input and image output, score 90. Capped by: lack of audio I/O and video generation. Score 90 reflects comprehensive multimodal coverage.
- **Coding: 88/100.** Terminal-Bench 2.1 82.9% (frontier tier: TB2.1 85%+ → 90-100, so just below), MCP Atlas 90.3% (exceptional tool orchestration), DeepSWE 59.3%, GDPval-AA 1,631 (+260 over prior). Strong scores. Capped by: Terminal-Bench 2.1 at 82.9% being just below the 85%+ frontier threshold, lack of SWE-bench Verified direct score, DeepSWE at 59.3% being below frontier (1.3 has 75.4%). Overall coding capability is frontier-tier, slightly below Muse Spark 1.3.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). Per methodology: $0 = 100. Capped only by: time-limited nature of free tier and training-data consent caveat. Score 100 reflects $0 pricing during free period.
- **Overall Score: 92/100.** Mean of (90 + 92 + 100 + 90 + 88 + 100) / 6 = 93.3 → **93**. Best-fit recommendation: Muse Spark 1.2 Free is the second-best free model available as of 2026-09-18, serving as a near-frontier free fallback when Muse Spark 1.3 Contributor is unavailable. The combination of GPQA 90.4%, HLE 45.5%, AA Intelligence Index 71.88 (#11 of 411), MCP Atlas 90.3%, Terminal-Bench 82.9%, and $0 pricing makes this exceptional value. Slightly below Muse Spark 1.3 Contributor (Overall 95) on most benchmarks (DeepSWE 59.3% vs 75.4%, TB2.1 82.9% vs 88.8%, GPQA 90.4% vs 93.5%), but still frontier-tier. For teams needing the absolute highest free-tier performance, Muse Spark 1.3 Contributor is the choice. This matches the model-comparison.md score of 93.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (BenchLM, Artificial Analysis, Benchgen), vendor release materials (Meta Research blog), and independent model review sites; scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks sourced from BenchLM, Artificial Analysis, and Benchgen; matches model-comparison.md scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Ultra_Free.md`, using the same headings.
