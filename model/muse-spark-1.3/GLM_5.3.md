# Muse Spark 1.3 Max — findings by GLM 5.3

- Source: Meta (`meta/muse-spark-1.3-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** The max-reasoning-effort configuration of Meta's Muse Spark 1.3 — "max reasoning for challenging reasoning and agentic tasks" — the configuration Meta itself benchmarks against GPT 5.6 Sol (max) and Claude Opus 5 (max). Flag: variant/alias of the Muse Spark 1.3 entry (same weights as `muse-spark-1.3` and the Contributor Free tier; `muse-spark-1.3-free/` tracks the contributor pricing tier). Only the effort setting differs.
- **Provider / access:** Meta Model API (dev.meta.ai, OpenAI-SDK-compatible); OpenRouter. On OpenCode Zen as `opencode/muse-spark-1.3` (Responses API) — the max effort is a request setting, not a separate ID.
- **Release / knowledge:** Muse Spark 1.3 released 2026-09-02 (Meta Research launch scorecard). Knowledge cutoff not published.
- **IDs:** `muse-spark-1.3` (max reasoning effort); Zen `opencode/muse-spark-1.3`. No separate Free ID for this configuration.
- **Context window:** 1M tokens (official Meta model page).
- **Modalities:** text, image, and video in, text out ("native multimodal perception... video, images and documents"); reasoning (max); tool calls; computer use; search grounding; agent fan-out (official cookbooks).
- **Pricing (as of 2026-10-02):** shared with the base model — $1.25 / $4.25 per MTok in/out (cached read $0.15); the Contributor tier ($0.10/$0.20, cached $0.002) trades discounted tokens for permission to train on your prompts. Max effort consumes more reasoning tokens per task; launch-era Artificial Analysis measured $0.55/task as a Pareto lead.
- **Architecture:** proprietary, size undisclosed; trained for long-horizon agentic workflows with 20% fewer calls and 25% fewer tokens claimed over 1.2 (launch announcement).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (official launch scorecard, max effort; third-party: Vals 72.3%, AA 84.3%)
- GDPval-AA: **1754** raw (official; normalized 58.6% per AA) — clears the ~1750 frontier reference
- JobBench: **64.9%** (official)
- OSWorld 2.0: **66.9%** partial / **32.0%** binary (official)
- DeepSearchQA: **89.4%** (official)
- AutomationBench: **49.4%** (official; AA: 57.9%)
- Tau3 Banking: **50.5%** (AA leaderboard)
- AA Agentic Index: **55.7%**; AA Briefcase Elo: **1586** (AA via BenchLM)
- CWE-bench v1: **55.0%** (Collinear); ApprenticeBench: **19%** (NeoCognition); AA ITBench: **33.2%**
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA leaderboard — above the 90% frontier bar)
- HLE: **48.7%** (AA leaderboard — above the 40% frontier bar)
- AA Intelligence Index: **48.1%** (current AA leaderboard; the launch-era AA article reported 61-62)
- MRCR v2: **98.5%** at 256K-512K, **98.1%** at 512K-1M (official); AA-LCR: **83.0%**; MLCR-AA: **43.3%**
- CritPt: **24.9%** (AA leaderboard)
- Omniscience: accuracy **43.6%**, hallucination rate **32.9%**, index **25.0%** (AA via BenchLM — good honesty)
- BenchLM composite: not computed (37 of 645 rows covered, unranked)

Coding:

- DeepSWE: **75.4%** (official — above the 74%+ frontier reference)
- SWE-Atlas Codebase QnA: **59.4%** (official)
- AA Coding Index: **75.8%**; AA-SciCode: **58.8%** (AA leaderboards)
- CursorBench 4.0: **41.6%** (Cursor evals)
- Design Arena Website: **1365** (OpenRouter via BenchLM)

Long context:

- MRCR v2 512K-1M: **98.1%** (official) — ≥98% retrieval at 512K+, meeting the full-credit bar

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% (official, max) touches the 88%+ frontier bar, GDPval 1754 clears its ~1750 reference, and JobBench 64.9% / DeepSearchQA 89.4% / Tau3 50.5% are strong. Capped by third-party TB variance (Vals 72.3%) and weak niche benches (ApprenticeBench 19%, ITBench 33.2%, AutomationBench 49.4-57.9%).
- **Reasoning: 90/100.** GPQA 93.5% and HLE 48.7% both clear the frontier references with 98%+ MRCR retrieval and good honesty (32.9% hallucination); CritPt 24.9% and the current AA Intelligence Index 48.1% are the soft spots. Capped by critique weakness and the Index gap to the 60 reference.
- **Context window: 100/100.** 1M window with official MRCR v2 at 98.5% (256K-512K) and 98.1% (512K-1M) — meets the methodology's "100 if ≥98% retrieval at 512K+" bar exactly.
- **Multimodal: 85/100.** Native text, image, video, and document input with visual reasoning through a real execution environment (official); no audio input or non-text output. Top of the video-in band.
- **Coding: 90/100.** DeepSWE 75.4% (frontier reference 74%+), TB2.1 88.8%, AA Coding Index 75.8%, SciCode 58.8%, SWE-Atlas 59.4% — a frontier coding profile with 20% fewer calls claimed over 1.2. Capped by CursorBench 4.0 41.6% and third-party TB variance.
- **Cost efficiency: 90/100.** $1.25/$4.25 per MTok (cached $0.15) is the ~88 bracket, adjusted up for the launch-era $0.55/task Pareto lead; max effort burns more reasoning tokens than lower efforts, and the $0.10/$0.20 Contributor tier exists only with a training-consent caveat.
- **Overall Score: 91/100.** Half-up mean of the five quality dims: (92 + 90 + 100 + 85 + 90) / 5 = 91.4 → 91. The strongest configuration of the strongest open-question agentic model measured in this pass — a frontier default for long-horizon coding and agentic work; prefer lower effort or the Contributor tier when cost matters more than peak accuracy.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (Meta's official Muse Spark 1.3 launch scorecard and developer model page — whose comparison table treats the max-effort configuration as its own column — plus BenchLM/AA/Vals aggregator rows with sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
