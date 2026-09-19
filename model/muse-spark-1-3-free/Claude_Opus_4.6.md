# Muse Spark 1.3 Free — findings by Claude Opus 4.6

- Source: Meta / Muse Spark 1.3 Contributor Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** Meta's proprietary frontier multimodal reasoning model tuned for long-horizon agentic coding. Free tier shares weights with standard 1.3; aggressive pricing undercuts most frontier peers.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`), Meta Model API, Muse Code CLI. Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not explicitly published, estimated mid-2026.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free tier on Zen)
- **Context window:** 1,048,576 tokens (1M); max output not explicitly stated, large. Verified via Meta research blog and Zen docs.
- **Modalities:** Text, image, video in; text out; reasoning modes; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $0 on Contributor Free tier (training-data consent caveat). Standard: $1.25/$4.25 per 1M. xhigh variant.
- **Architecture:** Proprietary closed-weight multimodal model; Mark Zuckerberg indicated open-weight plans for the future.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agent/tool**): **88.8%** (source: BenchLM, Artificial Analysis; tied with GPT-5.6 Sol)
- GDPval-AA: **1754** Elo (source: Artificial Analysis; $0.55/task Pareto lead)
- Tau3-Banking: **50.5%** (source: BenchLM)
- MCP Atlas: **90.3%** (source: Benchgen, via 1.2 extrapolation)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (source: BenchLM)
- HLE: **48.7%** (source: BenchLM)
- MRCR: **98.5% / 98.1%** (source: BenchLM; at scale)
- LCR: **83%** (source: BenchLM)
- Artificial Analysis Intelligence Index: **61–62** (source: Artificial Analysis)

Coding:

- DeepSWE v1.1: **75.4%** (source: Meta research blog, BenchLM, DataCamp)
- SWE-Atlas Codebase QnA: **59.4%** (source: Meta blog)
- SciCode: **58.8%** (source: BenchLM)
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR: **98.5% / 98.1%** at 1M (source: BenchLM; near-perfect retrieval)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 88.8% is near-frontier; GDPval 1754 is very strong (1750+ = 90–100 ref); Tau3 50.5% is frontier-class. Missing Claw-Eval is a minor cap.
- **Reasoning: 94/100.** GPQA 93.5% is frontier; HLE 48.7% is excellent (40%+ = 90–100); Index 61–62. MRCR 98.5% confirms excellent contextual reasoning. Very slight cap from CritPt missing.
- **Context window: 100/100.** 1M verified; MRCR 98.5%/98.1% at high retrieval accuracy confirms near-perfect utilization. Top score.
- **Multimodal: 85/100.** Text + image + video in; text only out. Strong input coverage but no audio input and no non-text output. Video input pushes to 75–90 range.
- **Coding: 93/100.** DeepSWE 75.4% is frontier-leading (ref: 74%+ = 90–100); SciCode 58.8% strong; SWE-Atlas 59.4%. Missing LiveCodeBench/Vibe marginally caps.
- **Cost efficiency: 100/100.** $0 on Contributor Free tier. Training-data consent caveat noted but pricing is zero.
- **Overall Score: 93/100.** Mean of (93 + 94 + 100 + 85 + 93) / 5 = 93.0. Default for long-horizon agentic coding when free tier is available.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Meta research blog, BenchLM, Artificial Analysis, DataCamp, Benchgen, Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
