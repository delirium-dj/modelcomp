# GPT-6 Sol — findings by Muse Spark 1.3

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's balanced, lower-cost GPT-6 tier for complex coding and agentic workflows; Astra-level reliability at much lower cost. Not the same model as GPT-5.6 Sol despite the reused tier name.
- **Provider / access:** OpenAI API (model ID `gpt-6-sol`); OpenCode Zen `opencode/gpt-6-sol`. Chat Completions and Batch endpoints (plus ChatGPT Work and Codex); streaming, structured outputs, function calling, file search, image input, web search, prompt caching supported.
- **Release / knowledge:** 2026-09-22 release (alongside GPT-6 Luna); knowledge cutoff 2026-04-20
- **IDs:** `openai/gpt-6-sol` (no Free ID exists on Zen; evaluated ID `opencode/gpt-6-sol`)
- **Context window:** 1,050,000 total tokens (128K max output) — verified via OpenAI API docs, docsbot.ai, and ai-tldr.dev model pages
- **Modalities:** text + image in; text out; configurable reasoning effort (none/low/medium/high/xhigh/max); function calling, web/file search, computer use; no audio/video in-out
- **Pricing (as of 2026-09-23):** $2.00 / $10.00 per 1M in/out; cached input $0.20 per 1M (90% discount). Paid only; half the price of GPT-5.6 Sol ($4/$20); 5x cheaper than GPT-6 Astra ($10/$50).
- **Architecture:** proprietary (undisclosed params/license; API only)

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh effort, $0.27/task (OpenAI launch charts via apidog.com/kingy.ai; beats GPT-6 Astra low 30.3% at 3.9x cost and Claude Opus 5 max 26.9% at 11.1x cost)
- Agents' Last Exam V1: **56.4%** at max effort (OpenAI official via docsbot.ai; above Claude Opus 5 best at 60% lower cost per task)
- OSWorld 2.0 offline: **64.4%** at max effort (docsbot.ai citing OpenAI; 60.5% at xhigh per apidog chart)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **48** (apidog.com model page)
- Omniscience / factuality: **4.5% factual error rate** on internal difficult-prompt eval at xhigh effort, lowest-error config (OpenAI via docsbot.ai; lower is better; not representative of typical usage)
- Agents' Last Exam V1 (reasoning proxy): **56.4%** max (OpenAI official)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (released 2026-09-22; no third-party SWE-bench run published yet)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **68.8%** at max effort (OpenAI official via docsbot.ai/thenewstack.io; within 1.1 pts of Claude Fable 5 xhigh 69.9% at ~20% of cost)
- FrontierCode 1.1 Main: **49.3%** at max effort (OpenAI official via docsbot.ai)
- Coding Index: **57.0** (softreviewed.com cross-reference of Artificial Analysis/AutomationBench data; vs 54.0 GPT-5.6 Sol, 66.4 Claude Opus 5.5)

Long context:

- **no long-context retrieval reported** (no verified MRCR / RULER / GraphWalks score found at 1.05M; improved prompt caching with higher hit rates noted by OpenAI but unquantified publicly)

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 33.2% leads frontier rivals at a fraction of cost plus OSWorld 2.0 64.4% and Agents' Last Exam 56.4% show strong autonomy; capped by missing Terminal-Bench/Tau/GDPval same-harness evidence.
- **Reasoning: 78/100.** AA Index 48 plus Agents' Last Exam 56.4% and a low 4.5% difficult-prompt factual error rate indicate solid professional reasoning; capped by zero verified GPQA/HLE/LCR/CritPt scores one day post-launch.
- **Context window: 96/100.** 1.05M window with 128K output sits in the top tier; capped below 100 absent any published ≥512K retrieval-accuracy evidence.
- **Multimodal: 65/100.** Text + image in, text out with agent tool suite; capped at image-only (no video/audio/PDF-out evidence).
- **Coding: 84/100.** DeepSWE 68.8% near frontier (74%+ band) plus FrontierCode 49.3% and Coding Index 57.0; capped by missing SWE-bench Verified/LiveCodeBench/SciCode same-harness runs.
- **Cost efficiency: 75/100.** Paid $2.00/$10.00 sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) methodology anchors, with 90% cache discount and best-in-class $/task Pareto; no free tier.
- **Overall Score: 81/100.** Mean of the five non-cost dims (84+78+96+65+84)/5 = 81.4 → 81. Best-fit: cost-efficient autonomous coding and multi-app agent workflows where per-task cost matters more than absolute frontier accuracy.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI launch materials via API docs/aggregators, thenewstack.io, apidog.com, kingy.ai, docsbot.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
