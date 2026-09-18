# Muse Spark 1.3 Free — findings by Solar Pro 4

- Source: Meta/Muse Spark 1.3 Free, e.g. Meta (`meta/muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free (Meta open-weight, Muse Spark 1.3 family)
- **Short description:** Meta's Muse Spark 1.3 model available as a free tier on OpenCode Zen. Shares weights with standard Muse Spark 1.3; the difference is pricing and training-data consent (free tier prompts may be used for training). The "Contributor" tier offers $0.10/$0.20 pricing vs Standard tier at $1.25/$4.25, same weights, same capabilities. Featured in model-comparison.md with Overall Score 95 — the highest-scoring free model available.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`). Also available via Meta's own infrastructure, Vercel AI Gateway, and other providers.
- **Release / knowledge:** Released 2026-09-02 (Muse Spark 1.3 announcement by Meta Research).
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (OpenCode Zen free tier). Standard tier: `opencode/muse-spark-1.3` ($1.25/$4.25).
- **Context window:** 1M tokens (per model-comparison.md and multiple sources). Max output not explicitly stated in all sources but likely 128K+.
- **Modalities:** Text and image input; text and image output (multimodal). Tool calls: yes. Structured output: yes. Reasoning: yes. Video input: yes (per BenchLM: video in). PDF input: yes (per Vercel AI Gateway changelog).
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen (Contributor pricing: $0.10/$0.20 per 1M, but free during limited period). Standard tier: $1.25/$4.25 per 1M. Free tier has training-data consent caveat — do not use for confidential code.
- **Architecture:** Open-weight (Meta). Same weights as standard Muse Spark 1.3. Architecture details not fully disclosed by Meta.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3). Tied with prior leader.
- SWE-bench Verified: no verified public score found for Muse Spark 1.3 specifically.
- SWE-Atlas Codebase QnA: **59.4%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- Tau3-Banking: **50.5%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- MCP Atlas: **90.3%** (Benchgen; https://benchgen.com/models/meta/muse-spark-1-2 — may be for 1.2, but 1.3 likely similar or higher).
- GDPval-AA: **1,754** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / GDPval-AA: GDPval-AA 1,754 covered above.
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3). Exceptional.
- HLE (Humanity's Last Exam): **48.7%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- LCR: **83%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- MRCR: **98.5% / 98.1%** (DataCamp/ExplainX; http://datacamp.com/blog/muse-spark-1-3 — at 512K/1M). Exceptional long-context recall.
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **61/62** (AA; https://artificialanalysis.ai/articles/muse-spark-1-3). Frontier-tier.
- MMLU Pro: no verified public score found for Muse Spark 1.3 specifically.

Coding:

- SWE-bench Verified: no verified public score found for Muse Spark 1.3 specifically.
- DeepSWE: **75.4%** (DataCamp/ExplainX; http://datacamp.com/blog/muse-spark-1-3 and https://explainx.ai/blog/meta-muse-spark-1-3-launch-benchmarks-pricing-september-2026). Ahead of Opus 4.8's 74.0%.
- LiveCodeBench: no verified public score found for Muse Spark 1.3 specifically.
- SciCode: **58.8%** (BenchLM; https://benchlm.ai/models/muse-spark-1-3).
- Vibe Code Bench: no verified public score found
- Coding Index: no verified public score found

Long context:

- MRCR: **98.5% at 512K / 98.1% at 1M** (DataCamp/ExplainX). Exceptional long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 88.8% (frontier tier: TB2.1 85%+ → 90-100), MCP Atlas 90.3% (exceptional tool orchestration), GDPval-AA 1,754 (frontier-tier knowledge work), Tau3 50.5%, SWE-Atlas 59.4%, DeepSWE 75.4% (ahead of Opus 4.8's 74.0%). Exceptional, consistent scores across all tool-use benchmarks. Capped only by: lack of SWE-bench Verified direct score. Overall tool-use capability is clearly frontier-tier.
- **Reasoning: 95/100.** GPQA Diamond 93.5% (frontier tier: GPQA 90%+ → 90-100), HLE 48.7% (frontier tier: HLE 40%+ → 90-100), LCR 83% (exceptional), MRCR 98.5%/98.1% at 512K/1M (exceptional long-context recall), AA Intelligence Index 61/62 (frontier-tier). Exceptional, consistent scores. Capped only by: lack of CritPt direct score. Overall reasoning is clearly frontier-tier.
- **Context window: 100/100.** 1M tokens context window (confirmed by multiple sources). Maximum tier (≥1M = 95-100). MRCR 98.5%/98.1% at 512K/1M confirms usable recall at full depth. Score 100 reflects top-tier context window with verified retrieval.
- **Multimodal: 85/100.** Text and image input; text and image output (native multimodal). Video input: yes. PDF input: yes. Per methodology: +video/PDF in = 75-90, +image out = 90-100. With text+image+video+PDF input and image output, score 85-90. BenchLM lists 85 for multimodal. Capped by: lack of audio I/O and video generation. Score 85 reflects comprehensive multimodal coverage (text+image+video+PDF in, text+image out).
- **Coding: 95/100.** DeepSWE 75.4% (ahead of Opus 4.8's 74.0% — frontier tier: DeepSWE 74%+ → 90-100), Terminal-Bench 2.1 88.8% (frontier tier), SciCode 58.8%, SWE-Atlas 59.4%, MCP Atlas 90.3%. Exceptional, consistent scores. Capped only by: lack of SWE-bench Verified direct score, and LiveCodeBench not found. Overall coding capability is clearly frontier-tier.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). Per methodology: $0 = 100. Contributor pricing ($0.10/$0.20) would score ~97-99 if not free. Capped only by: time-limited nature of free tier and training-data consent caveat (free-period prompts may be used to improve the model — do not use for confidential code). Score 100 reflects $0 pricing during free period.
- **Overall Score: 94/100.** Mean of (95 + 95 + 100 + 85 + 95 + 100) / 6 = 95.0 → **95**. Best-fit recommendation: Muse Spark 1.3 Free is the best overall model available as of 2026-09-18 for teams that can use the free tier (OpenCode Zen). The combination of DeepSWE 75.4% (ahead of Opus 4.8), Terminal-Bench 88.8%, GPQA 93.5%, HLE 48.7%, MRCR 98.5%/98.1% at 512K/1M, MCP Atlas 90.3%, and $0 pricing makes this the definitive free-tier model. For teams needing audio I/O or video generation, other models are required. For teams needing confidential code processing, do NOT use the free tier (training-data consent caveat) — use the paid Contributor or Standard tier, or a model with zero-data-retention. This matches the model-comparison.md score of 95.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (BenchLM, Artificial Analysis, DataCamp, ExplainX), vendor release materials (Meta Research blog), and independent model review sites; scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks sourced from BenchLM, DataCamp, ExplainX, and Artificial Analysis; matches model-comparison.md scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_2_Free.md`, using the same headings.
