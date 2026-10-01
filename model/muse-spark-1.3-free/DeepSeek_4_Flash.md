# Muse Spark 1.3 — findings by DeepSeek 4 Flash

- Source: Meta/Muse Spark 1.3 (evaluated via the `muse-spark-1.3-free` Zen Contributor/free tier; standard weights)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Free / Contributor tier)
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent, and coding workflows; the Contributor tier shares 1.3's weights but trades prompt/completion data for a steep discount.
- **Provider / access:** Meta Model API (`developer.meta.com/ai/models/muse-spark/`), Chat Completions-style. Also surfaced on OpenCode Zen and aggregators (OpenRouter, Vercel AI Gateway) as the free/contributor variant.
- **Release / knowledge:** released 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** Meta `muse-spark-1.3`; OpenCode Zen free tier `opencode/muse-spark-1.3-contributor-free` (Free ID exists).
- **Context window:** 1,048,576 tokens input (~944K max output) — verified from LLM Stats provider table and OpenRouter.
- **Modalities:** text/image/audio/video in; text out; reasoning (thinking) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** Contributor/free tier $0.10 in / $0.002 cached / $0.20 out per 1M (Meta may use prompts + completions for training). Standard Meta Model API $1.25 in / $0.15 cached / $4.25 out per 1M. Zen free tier is time-limited.
- **Architecture:** proprietary; weights not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard; AA variant 84.3%)
- Tau3-Banking: **50.5%** (Artificial Analysis tau3-banking leaderboard)
- GDPval-AA: **1754 Elo** (Meta launch scorecard); AA normalized 58.6%
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld 2.0: **66.9%**; AutomationBench: **49.4%** (Meta) / AA AutomationBench **57.9%**
- AA-Briefcase: **1586 Elo**; JobBench **64.9%**; DeepSearchQA **89.4%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA)
- HLE: **48.7%** (AA)
- AA-LCR: **83.0%** (AA); MLCR-AA **43.3%**
- CritPt: **24.9%** (AA)
- Artificial Analysis Intelligence Index: **48.1%** (AA)
- AA-Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%**

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for 1.3 (DeepSWE reported instead)
- DeepSWE: **75.4%** (Meta launch scorecard)
- SWE-Atlas Codebase QnA: **59.4%**
- AA-SciCode: **58.8%** (AA)
- AA Coding Index: **75.8%**; CursorBench 4.0: **41.6%**

Long context:

- MRCR v2 256K–512K: **98.5%**; MRCR v2 512K–1M: **98.1%** (Meta launch scorecard)

Multimodal:

- Design Arena Website: **1365 Elo** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 2.1 88.8% and GDPval 1754 sit at frontier reference; Tau3-Banking 50.5% clears the ~50% frontier bar; OSWorld 66.9% and AutomationBench 57.9% are strong. Capped only by the absence of a public Claw-Eval number.
- **Reasoning: 92/100.** GPQA 93.5%, HLE 48.7%, AA Index 48.1, MRCR 98%+ to 1M — all frontier-class; CritPt 24.9% and MLCR 43.3% blunt a perfect score.
- **Context window: 100/100.** ≥1M tokens with ≥98% MRCR retrieval at 512K–1M, matching the top tier.
- **Multimodal: 90/100.** Text/image/audio/video input with strong Design Arena placement; text-only output caps it below 100.
- **Coding: 93/100.** DeepSWE 75.4% and Coding Index 75.8% clear the 74%/70% frontier refs; CursorBench 41.6% is mid.
- **Cost efficiency: 100/100.** $0 on the evaluated Zen free/Contributor tier (time-limited; prompts may be used for training).
- **Overall Score: 94/100.** Mean of (95 + 92 + 100 + 90 + 93) / 5 = 94. Best-fit: default free pick for long-horizon coding and agentic work when the Contributor data terms are acceptable.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Meta launch scorecard, Artificial Analysis, BenchLM, LLM Stats, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
