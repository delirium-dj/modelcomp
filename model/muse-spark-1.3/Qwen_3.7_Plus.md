# Muse Spark 1.3 — findings by Qwen 3.7 Plus

- Source: Meta/Muse Spark 1.3 (`opencode/muse-spark-1.3`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent, and coding workflows. Improves on Muse Spark 1.2 in long-horizon collaboration, multitasking, instruction following, tool use, failure recovery, and concise coding execution. Available in Contributor (free/training-consent) and Standard/Max paid tiers with identical weights.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3` (Chat Completions API); Meta Model API; also available via Muse Code terminal agent. Multiple tiers: Free (OpenCode Zen), Contributor ($0.10/$0.20), Standard & Max ($1.25/$4.25 per 1M tokens).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.3` on OpenRouter; `opencode/muse-spark-1.3` on OpenCode Zen. Max and Xhigh variants share weights, differing in reasoning effort and speed.
- **Context window:** 1,048,576 tokens (1M) total; 131,072 max output (verified via Meta documentation and Artificial Analysis).
- **Modalities:** Text, image, video, PDF in; text out. Reasoning yes (extended thinking/chain-of-thought). Tool calls supported. JSON mode supported.
- **Pricing (as of 2026-10-10):** Standard/Max: $1.25 in / $4.25 out / $0.15 cached per 1M tokens. Contributor tier: $0.10/$0.20 per 1M (training-data consent required). Free tier available on OpenCode Zen. Cache discount ~88%.
- **Architecture:** Proprietary; parameter count not disclosed by Meta. Reasoning model with extended thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta evaluation; among top scores on release)
- AutomationBench-AA: **49.4%** (Artificial Analysis)
- GDPval-AA v2.1: **1754** (Elo-500/2000 scale; Artificial Analysis)
- DeepSearchQA: **89.4%** (Meta evaluation)
- OSWorld 2.0: **66.9%** (computer use / GUI automation benchmark)
- SWE Atlas Codebase QnA: **59.4%** (Meta evaluation)
- Agentic IF Index (Internal): **57.8%** (Meta evaluation)
- Job Bench: **64.9%** (Meta evaluation)
- Terminal-Bench 4.0: listed on Artificial Analysis leaderboard (exact score not publicly available)

Reasoning / knowledge:

- GPQA Diamond: **93.8%** (Meta evaluation; among highest reported)
- HLE (Humanity's Last Exam): **49.1%** (54.0% with tools; Meta evaluation — leads GPT models on HLE-Full with tools)
- LCR (Long Context Reasoning): **83%** (Meta evaluation)
- SciCode: **58.8%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **62.1** (ranked #23/687 overall; #23/227 in class)
- AA-Omniscience Accuracy / Non-Hallucination Rate: not publicly available (behind AA paywall)
- CritPt: not publicly available

Coding:

- DeepSWE 1.1: **75.4%** (Meta evaluation; topped leaderboard on release but MindStudio reported real-world gap vs. benchmark score)
- Coding Index (AA): **76.3** (ranked #25/257)
- Terminal-Bench 2.1: **88.8%** (agentic coding & terminal use — also listed under tool use)
- SWE-bench Verified: no verified public third-party score found
- LiveCodeBench: no verified public third-party score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 (8-needle, 256K–512K): **98.5%** (Meta evaluation)
- MRCR v2 (8-needle, 512K–1M): **98.1%** (Meta evaluation)
- LCR: **83%** (long-context reasoning)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 88.8% is top-tier; DeepSearchQA 89.4%, OSWorld 2.0 66.9% (computer use), and GDPval-AA strong Elo all confirm leading agentic capability. AutomationBench at 49.4% is moderate but the breadth of tool-use benchmarks is exceptional. Capped by the moderate AutomationBench score and lack of independent third-party validation on some benchmarks.
- **Reasoning: 92/100.** GPQA Diamond 93.8% is among the highest reported. HLE 49.1% (54.0% with tools) leads GPT models on HLE-Full with tools. Intelligence Index 62.1 ranked #23 overall. LCR 83% confirms strong long-context reasoning. Capped only by the absence of publicly available CritPt and AA-Omniscience scores.
- **Context window: 95/100.** 1M-token context with MRCR 98.5% at 256K–512K and 98.1% at 512K–1M demonstrates near-perfect long-context retrieval across the full window. 131K max output is generous. Among the largest and best-performing context windows available.
- **Multimodal: 80/100.** Supports text, image, video, and PDF input with text output. OSWorld 2.0 at 66.9% demonstrates computer-use / GUI automation capability. No audio input or output. Meta published a dedicated multimodal evaluation methodology. Capped by text-only output and no audio modality.
- **Coding: 85/100.** DeepSWE 1.1 at 75.4% topped the leaderboard on release. Coding Index 76.3 (#25/257) and Terminal-Bench 2.1 at 88.8% confirm strong coding ability. However, MindStudio's independent testing reported a gap between benchmark scores and real-world coding output quality. No independent SWE-bench Verified or LiveCodeBench scores from third parties. Capped by the benchmark-vs-reality gap and absence of third-party coding validation.
- **Cost efficiency: 78/100.** Standard tier at $1.25/$4.25 per 1M is moderate for a frontier reasoning model. Contributor tier at $0.10/$0.20 and free OpenCode Zen tier dramatically reduce cost. ~88% cache discount is generous. The free/training-consent tier makes this very accessible, though Standard pricing is not the cheapest among all models.
- **Overall Score: 88/100.** Mean of five quality dims: (90 + 92 + 95 + 80 + 85) / 5 = 88.4, rounded to 88. A frontier agentic and coding model with best-in-class context window, excellent reasoning, and strong tool use. Best fit for long-horizon coding workflows, multi-agent collaboration, and tasks requiring very large context windows with multimodal input.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Artificial Analysis, Dataconomy, Meta research pages, OpenRouter, MindStudio, Friday Code, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
