# Muse Spark 1.1 — findings by Qwen 3.8 27B

- Source: Meta Superintelligence Labs (`opencode/muse-spark-1.1`; vendor API: Meta Model API, OpenRouter `meta/muse-spark-1.1`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model built for agentic tasks (tool use, computer use, coding, long-running agents); Meta's first developer-facing proprietary model, shipped with the Meta Model API.
- **Provider / access:** Meta Model API public preview (developer.meta.com/ai); OpenRouter `meta/muse-spark-1.1`; "Thinking" mode in the Meta AI app. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-09 (Meta blog + evaluation report); knowledge cutoff not publicly documented.
- **IDs:** `opencode/muse-spark-1.1` (repo registry); vendor `meta/muse-spark-1.1`. No Free ID on Zen — paid Meta Model API.
- **Context window:** 1M tokens with active context management/compaction (Meta evaluation report; OpenRouter lists 1,048,576). Note: repo `meta.json` still says 128K.
- **Modalities:** Multimodal in (text, image, video, PDF; audio use cases discussed in the launch post); text out. Tool calling, function calling, developer prompts, multi-agent orchestration, planning mode.
- **Pricing (as of 2026-09-28):** $1.25 input / $4.25 output per 1M; cached input $0.15/1M (llm-stats); Reuters-syndicated report cites $20 free launch credits.
- **Architecture:** Proprietary (Meta); parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1** (Meta evaluation report, xhigh; leads Claude Opus 4.8 / Muse Spark 1.0 at 82.2, Gemini 3.1 Pro 78.2, GPT-5.5 75.3)
- Toolathlon-Verified: **75.6%** (Meta evaluation report; Opus 4.8 76.2%)
- OSWorld-Verified: **80.8%** (Meta evaluation report; Opus 4.8 83.4%)
- WebArena-Verified: **69.0%** (Meta evaluation report; Opus 4.8 71.2%)
- DeepSearchQA: **84.9%** (Meta evaluation report; GPT-5.5 87.8%)
- JobBench: **54.7%** (Meta evaluation report; leads Opus 4.8 48.4%, GPT-5.5 38.3%)
- GDPval-AA (v2): **1381 Elo** (Meta evaluation report; Opus 4.8 1600, GPT-5.5 1494)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE (with tools): **62.1%** (Meta evaluation report; leads Opus 4.8 57.9%, GPT-5.5 52.2%)
- HLE (no tools): **52.2%** (Meta evaluation report; leads Opus 4.8 49.8%)
- LCR / MLCR: MRCR Long Context @1M: **54.1%** (Meta evaluation report; GPT-5.5 74.0%)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Terminal-Bench 2.1: **80.0%** (Meta evaluation report; GPT-5.5 83.4%, Opus 4.8 82.7%)
- SWE-bench Pro: **61.5%** (Meta evaluation report; Opus 4.8 69.2%, GPT-5.5 58.6%)
- DeepSWE 1.1: **53.3%** (Meta evaluation report; GPT-5.5 67.0%, Opus 4.8 59.0%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench (v1.1) / SWE Atlas Codebase QnA: Meta reports large gains over Muse Spark 1.0; no absolute third-party value found

Long context:

- MRCR Long Context @1M: **54.1%** (Meta evaluation report; GPT-5.5 leads at 74.0%) — measured retrieval well below nominal 1M window.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 88.1 (table leader), Toolathlon 75.6, OSWorld-Verified 80.8, JobBench lead; GDPval-AA 1381 trails Opus 4.8 (1600) and GPT-5.5 (1494), capping it.
- **Reasoning: 84/100.** HLE with-tools 62.1 and no-tools 52.2 both lead the comparison set (frontier HLE 40%+ band), but MRCR@1M 54.1% and no GPQA published cap it below Opus-class.
- **Context window: 90/100.** 1M window is top tier, but measured MRCR@1M 54.1% (vs 74.0% leader) shows effective reliable retrieval well under the nominal window; scored below the ≥1M band floor to reflect the measured limit.
- **Multimodal: 84/100.** Image/video/PDF input with strong CharXiv Reasoning (with tools) 88.4 and BabyVision 76.3; audio use cases claimed but unverified in benchmarks, text-only out.
- **Coding: 78/100.** TB2.1 80.0 is near-frontier, but SWE-bench Pro 61.5 and DeepSWE 1.1 53.3 trail the GPT-5.5/Opus 4.8 leaders — strong orchestrator, not the deepest coder.
- **Cost efficiency: 88/100.** $1.25/$4.25 with $0.15 cache matches the ~$1.25/$4.25 = ~88 reference point, plus $20 launch credits; no free tier.
- **Overall Score: 84/100.** (84 + 84 + 90 + 84 + 78) / 5 = 84.0; best-fit for high-volume agentic/orchestration workloads where tool-use reliability and cost-per-task beat raw coding depth.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (Meta Muse Spark 1.1 evaluation report via kingy.ai breakdown, llm-stats.com, OpenRouter, buildfastwithai.com, Reuters-syndicated coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
