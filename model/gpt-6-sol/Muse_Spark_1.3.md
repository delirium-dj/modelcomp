# GPT-6 Sol — findings by Muse Spark 1.3

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: TB4.0 row + permanent-price confirmation added; scores hold 81); re-verified 2026-09-29 (UTC, user-signed-off re-research: HLE 47.9 + LiveBench 79.3 + SciCode 57.6 + MLCR 26.1 + MMMU 83 + Omni 54 + GDPval/Briefcase + AutomationBench-AA + DeepSWE-AA + 272K-tier added; Tool 84 → 86, Reasoning 78 → 82, Multimodal 65 → 68, Coding 84 → 86, Overall 81 → 84)
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
- **Pricing (as of 2026-09-23):** $2.00 / $10.00 per 1M in/out (272K+ prompts $4/$15; cached input $0.20; Batch/Flex half, Fast 2x — re-verified 2026-09-29). Paid only; half GPT-5.6 Sol ($4/$20); permanent rates, not promo.
- **Architecture:** proprietary (undisclosed params/license; API only)

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh effort, $0.27/task (OpenAI launch charts via apidog.com/kingy.ai; beats GPT-6 Astra low 30.3% at 3.9x cost and Claude Opus 5 max 26.9% at 11.1x cost)
- Agents' Last Exam V1: **56.4%** at max effort (OpenAI official via docsbot.ai; above Claude Opus 5 best at 60% lower cost per task)
- OSWorld 2.0 offline: **64.4%** at max effort (docsbot.ai citing OpenAI; 60.5% at xhigh per apidog chart)
- Terminal-Bench 4.0: **44%** (Artificial Analysis Codex lane, per CodingFleet TB4.0 roundup)
- GDPval-AA v2.1: **49%/1487 Elo**; AA-Briefcase v1.1: **49%/1483 Elo** (AA-tracked; down vs 5.6 Sol — re-verified 2026-09-29)
- AutomationBench-AA: **61.6%** (AA-tracked variant of 1.0.6 33.2% — re-verified 2026-09-29)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (no tools): **47.9%** (AA independent, max — in-band tie vs 5.6 Sol 49.5% — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **48** (apidog.com model page)
- Omniscience / factuality: **4.5% factual error rate** on internal difficult-prompt eval at xhigh effort, lowest-error config (OpenAI via docsbot.ai; lower is better; not representative of typical usage)
- MMMU-Pro: **83%** (AA-tracked, flat vs 5.6 Sol — re-verified 2026-09-29)
- Agents' Last Exam V1 (reasoning proxy): **56.4%** max (OpenAI official)
- MLCR-AA: **26.1%** (AA-tracked, biggest Sol gain +6.7 — re-verified 2026-09-29)
- Omniscience Accuracy: **54%** (AA-tracked; down 5pts with fewer hallucinations — re-verified 2026-09-29)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (released 2026-09-22; no third-party SWE-bench run published yet)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **68.8%** max vendor (**69.0%** AA Codex-lane independent — re-verified 2026-09-29; within 1.1 pts of Fable 5 xhigh 69.9% at ~20% of cost)
- FrontierCode 1.1 Main: **49.3%** at max effort (OpenAI official via docsbot.ai)
- SciCode: **57.6%** (AA-tracked, +0.5 vs 5.6 Sol — re-verified 2026-09-29)
- LiveBench: **79.3 overall** (independent board, max — re-verified 2026-09-29)
- Coding Index: **57.0** (softreviewed.com cross-reference of Artificial Analysis/AutomationBench data; vs 54.0 GPT-5.6 Sol, 66.4 Claude Opus 5.5)

Long context:

- **no long-context retrieval reported** (no verified MRCR / RULER / GraphWalks score found at 1.05M; improved prompt caching with higher hit rates noted by OpenAI but unquantified publicly)

### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench-AA 61.6% plus GDPval 1487, Briefcase 1483, OSWorld 64.4% and ALE 56.4% show strong autonomy; capped by TB4.0 44% mid-pack and missing TB2.1/Tau same-harness evidence.
- **Reasoning: 82/100.** HLE 47.9% plus AA Index 48, MLCR 26.1%, Omni 54% and ALE 56.4% show solid reasoning; capped by zero verified GPQA/LCR/CritPt scores.
- **Context window: 96/100.** 1.05M window with 128K output sits in the top tier; capped below 100 absent any published ≥512K retrieval-accuracy evidence.
- **Multimodal: 68/100.** Text + image in with MMMU-Pro 83% measured; capped at image-only (no video/audio evidence).
- **Coding: 86/100.** DeepSWE 68.8–69.0% plus SciCode 57.6%, LiveBench 79.3%, FrontierCode 49.3% and Coding Index 57.0 show strong coding; capped by missing SWE-bench Verified/LiveCodeBench same-harness runs.
- **Cost efficiency: 75/100.** Paid $2.00/$10.00 sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) methodology anchors, with 90% cache discount and best-in-class $/task Pareto; no free tier.
- **Overall Score: 84/100.** Mean of the five non-cost dims (86+82+96+68+86)/5 = 83.6 → 84. Best-fit: cost-efficient autonomous coding and multi-app agent workflows where per-task cost matters more than absolute frontier accuracy.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI launch materials via API docs/aggregators, thenewstack.io, apidog.com, kingy.ai, docsbot.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
