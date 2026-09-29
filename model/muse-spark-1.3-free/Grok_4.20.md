# Muse Spark 1.3 Contributor — findings by Grok 4.20

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free)
- **Short description:** Limited-time free OpenCode Zen access to Meta's Muse Spark 1.3, a September 2026 frontier coding and agent model. Same weights as paid 1.3; the free Contributor path trades training-data consent for $0. Not a separate model from standard 1.3.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` at `https://opencode.ai/zen/v1/responses` (Responses API). Paid twin on Zen is `opencode/muse-spark-1.3`. OpenRouter Chat Completions ID `meta/muse-spark-1.3-contributor` is the paid Contributor tier ($0.10/$0.20), not this free ID.
- **Release / knowledge:** Muse Spark 1.3 released 2026-09-02; max reasoning generally available 2026-09-04 (Fello AI, citing Meta). Knowledge cutoff not verified.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`. Paid Contributor: `meta/muse-spark-1.3-contributor`. Standard: `muse-spark-1.3`.
- **Context window:** 1,048,576 tokens (1M), unchanged from 1.2 (Artificial Analysis, OpenCode Zen model list). Max output not separately verified.
- **Modalities:** Text, image, and video in; text out (Artificial Analysis). Reasoning yes (xhigh and max). Tool calls yes. JSON mode not separately verified. Audio in/out not documented.
- **Pricing (as of 2026-09-29):** OpenCode Zen Free / Free / Free for this ID, limited time (Zen pricing table). Privacy note: prompts and completions may train future Meta models. Paid Contributor $0.10 / $0.20 per 1M (cached input $0.002); standard $1.25 / $4.25, cached input $0.15 (Fello AI, Zen, Artificial Analysis). Scored on the $0 Zen free tier.
- **Architecture:** Proprietary. Open weights not shipped (Fello AI). Parameter count not disclosed.

### Raw benchmarks found

Numbers are for Muse Spark 1.3 weights (max vs xhigh called out). No separate free-tier eval was found; Zen documents this ID as the Contributor free path to 1.3.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch chart, max, tie with GPT-5.6 Sol max; Fello AI). Artificial Analysis: max **86%**, xhigh **85%** (vs 80% for 1.2). BenchLM **88.8%**; Vals **72.3%**; AA harness **84.3%**
- Tau3-Banking: Artificial Analysis max **52%** (#1 on that eval), xhigh **47%**. BenchLM AA Tau3-Banking **50.5%**
- GDPval-AA: max **1754** Elo, xhigh **1709** (Artificial Analysis; Meta chart 1754 vs Opus 5 max 1824)
- OSWorld 2.0: **66.9%** (Meta chart, vs Opus 5 max 68.3%)
- AutomationBench: **49.4%** (Meta chart); AA AutomationBench **57.9%** (BenchLM)
- JobBench: **64.9%**; DeepSearchQA: **89.4%** (Meta chart)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- SWE-Atlas Codebase QnA: **59.4%** (Meta chart / BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM AA-GPQA); Artificial Analysis **94%** (xhigh, +4 vs 1.2; max ties xhigh)
- HLE: Artificial Analysis xhigh **47%**, max about **49%** (+2); BenchLM AA-HLE **48.7%**
- MRCR v2 256K–512K: **98.5%**; 512K–1M: **98.1%** (Meta chart / BenchLM)
- AA-LCR: BenchLM **83.0%**; Artificial Analysis article says both 1.3 variants **79%** (−4 vs 1.2). Conflict left unresolved
- CritPt: BenchLM **24.9%**; Artificial Analysis xhigh **26%** (+8 vs 1.2), max −1 vs xhigh
- Artificial Analysis Intelligence Index: xhigh **61**, max **62** (AA article, v4.1.1 per Fello AI). BenchLM lists **48.1%**, which does not match AA's published index — not averaged
- Omniscience Accuracy / Hallucination Rate: BenchLM **43.6% / 32.9%**; AA notes xhigh accuracy **42%** (down on higher abstention) and a lower hallucination rate

Coding:

- DeepSWE / DeepSWE v1.1: **75.4%** (Meta chart, vs Opus 5 max 74.0 and 1.2 xhigh 55.0)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- AA-SciCode: **58.8%** (BenchLM); Artificial Analysis ~**59%** (xhigh, +2–3 vs 1.2)
- AA Coding Index: **75.8%** (BenchLM)
- SWE-Atlas Codebase QnA: **59.4%**

Long context:

- MRCR v2 **98.5%** at 256K–512K and **98.1%** at 512K–1M (Meta chart). That is the retrieval figure at the top of the 1M window.

### Normalized scores (1–100)

- **Tool use: 91/100.** At max, TB2.1 88.8%, Tau3-Banking 52%, and GDPval-AA 1754 clear the frontier refs; OSWorld 66.9% and JobBench 64.9% agree. Capped because AutomationBench is 49.4%, AA's xhigh run is softer (TB 85%, Tau3 47%, GDPval 1709), and Meta's own chart loses the agent rows to Opus 5 or GPT-5.6 Sol. No Claw-Eval.
- **Reasoning: 93/100.** GPQA ~94%, HLE ~47–49%, Index 61–62, and MRCR 98%+ are frontier. CritPt ~25% and the AA-LCR regression (79–83%) are what keep it out of the high 90s.
- **Context window: 100/100.** 1M tokens with MRCR v2 98.1% on the 512K–1M band meets the ≥98% retrieval bar for a 100.
- **Multimodal: 86/100.** Text, image, and video in with text out sit in the 75–90 video/PDF band. No verified audio in or non-text out, so it does not enter 90–100.
- **Coding: 93/100.** DeepSWE 75.4%, TB2.1 85–88.8%, SciCode ~59%, and Coding Index 75.8% all clear frontier refs; SWE-Atlas QnA 59.4% supports codebase work. Capped by missing SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 100/100.** Zen lists this ID at $0 input/output/cache. Flagged: limited time, and Zen's privacy note says prompts and completions may train future Meta models. Paid Contributor ($0.10/$0.20) would be ~98; standard $1.25/$4.25 would be ~88. Scored on the free tier actually evaluated.
- **Overall Score: 92.6/100.** Half-up mean of 91, 93, 100, 86, and 93. Best fit: default free coding agent when training-data consent is acceptable; use paid standard if prompts must stay out of Meta training.

---

## Signature

- Provided by: **Grok 4.20 (openrouter/~x-ai/grok-latest)** — 2026-09-29
- Method: public internet research (OpenCode Zen docs, Artificial Analysis launch article, BenchLM tables, Fello AI reading of Meta's launch chart); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
