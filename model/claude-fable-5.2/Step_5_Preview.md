# Claude Fable 5.2 — findings by Step 5 Preview

- Source: Anthropic / `claude-fable-5-2` (`claude-fable-5-2` on the Claude API; `opencode/claude-fable-5-2` on OpenCode Console)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's top-tier frontier model for the most demanding technical work (agentic coding, reasoning, vision), released 2026-11-09 as the safeguarded, generally available deployment of the same underlying model as Claude Mythos 5.2 (verification-program access only). Anthropic itself recommends Claude Opus 5.5 as the daily driver and Fable 5.2 for the hardest long-horizon work.
- **Provider / access:** Anthropic direct (`claude-fable-5-2`, Claude Platform, AWS Bedrock, Google Cloud, Microsoft Foundry) and OpenCode Console as `opencode/claude-fable-5-2` via `https://opencode.ai/inference/anthropic/v1/messages` (Anthropic Messages API; Console pricing identical to Anthropic list). Optional fast mode (`speed: "fast"`, up to 2.5x output tokens/s) at $16/$80 per 1M.
- **Release / knowledge:** released 2026-11-09; knowledge cutoff June 2026 (same as Opus 5.5).
- **IDs:** `anthropic/claude-fable-5-2`; OpenCode route `opencode/claude-fable-5-2`. No Free ID exists on OpenCode — paid only.
- **Context window:** 1,000,000 tokens total (1M) with 128K max output — verified on Artificial Analysis, llm-stats.com and Anthropic pricing docs (independent of vendor benchmark table).
- **Modalities:** text + image input, text output; reasoning model with extended thinking (effort levels low→max, API default high); tool calls supported. No audio/video input or non-text output documented.
- **Pricing (as of 2026-11-10):** $8.00 / 1M input, $0.20 / 1M cached-input read, $10.00 / 1M 5-minute cache write, $40.00 / 1M output (20% below Fable 5.1's $10/$50); fast mode $16/$80. No free tier. Covered Model: 30-day safety-monitoring retention; zero data retention only where Anthropic expressly authorizes it.
- **Architecture:** proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (offline set, partial credit): **89.3%** (Anthropic launch table, 2026-11-09; Opus 5.5 87.2%, GPT-6 Astra 79.5%)
- WANDR (relaxed score, agentic search): **82.1%** (Anthropic launch table; Opus 5.5 72.3%)
- Remote Labor Index (RLI): **41.3%** at high effort (Scale AI benchmark via Anthropic table; ~2x Opus 5.5 21.3% and GPT-6 Astra 20.8%)
- AutomationBench (business workflows): **51.4%** (Anthropic table; Gemini 4 Carbon 53.9% leads — not generally available)
- Vals Index v2.2: **71.31%** at high effort — **#1 of 36 models** (Vals AI, updated 2026-11-09, via WidelAI comparison)
- Terminal-Bench 2.1: no verified public score found for this model (closest measured proxy: Vals Terminal-Bench 4.0 **65.15%**, 1st of 63, tied with Opus 5.5)
- Tau3-Banking / Tau2-Bench: no verified public score found (provisional only)
- GDPval-AA: no standalone per-model score published (input to the AA Intelligence Index composite, not itemized)
- Claw-Eval / ClawProBench: no verified public score found — noted N/A, no hallucinated value
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Anthropic launch table; Opus 5.5 67.7%, GPT-6 Astra 57.2%)
- Artificial Analysis Intelligence Index v5.0.1: **65** at max effort — **#1 of 73 models**; 62 at high (API default), 56 at medium, 54 at low (Artificial Analysis, checked 2026-11-10; index = 9 evals incl. HLE-Diamond, CritPt v2 Hard, GDP.pdf, AA-Omniscience)
- CritPt v2 (Hard Subset): no standalone score published (component of AA index)
- GPQA Diamond: no verified public score found for this model
- LCR / MLCR: no verified public score found
- Omniscience Accuracy / Hallucination Rate: not yet published for Fable 5.2 (Artificial Analysis had no AA-Omniscience result as of 2026-11-10)

Coding:

- FrontierCode 2.0 (agentic coding, maintainer-merge scored): **49.1%** at xhigh effort — highest of any released model tested (Anthropic table; Opus 5.5 45.5%, GPT-6 Astra 42.8%); at high effort 45.3%, level with Opus 5.5 at max for ~half the cost per task
- FrontierSWE v2 (agentic coding, long engineering tasks): **69.9%** (Anthropic table; Opus 5.5 62.3%, GPT-6 Astra 65.5%)
- Vibe Code Bench v1.1: **93.77%** — **#1 of 127** (Vals AI, Fable 5.2 at high)
- ProgramBench: **19.00%** — **#1 of 66** (Vals AI; Opus 5.5 18.50%, GPT-6 Astra 5.50%)
- Code Migration v1.1: **83.27%** — 2nd of 30 (Vals AI; Opus 5.5 81.01%)
- SWE-bench Multimodal: **62.29%** — 2nd of 22 (Vals AI; Opus 5.5 leads at 70.21%)
- Terminal-Bench 4.0: **65.15%** — 1st of 63, tied with Opus 5.5 (Vals AI)
- SWE-bench Verified (text): no verified public score found for this model
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (Terminal-Bench-Science proxies below)
- Terminal-Bench-Science 0.1: **74.6%** (Anthropic run; 2nd on Vals' independent harness at 55.71%, behind GPT-6 Astra 62.86% — contested between evaluators)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M-token window verified (Artificial Analysis, llm-stats.com, Anthropic docs); no long-context retrieval (MRCR / RULER / GraphWalks) score reported at any window length — capped below the top context tier.

### Normalized scores (1–100)

- **Tool use: 91/100.** Leads both independent indices (Vals #1 of 36 at 71.31%; AA Intelligence Index #1 of 73) plus OSWorld 2.1 89.3% and WANDR 82.1% — squarely in the frontier band. Capped below the mid-90s because Tau3-Banking, GDPval-AA and Claw-Eval have no published per-model values, AutomationBench 51.4% trails Gemini 4 Carbon's 53.9%, and Vals runs no CUA-bench result yet.
- **Reasoning: 93/100.** HLE with tools 74.2% (frontier reference is 40%+) and the AA Intelligence Index 65 — first of 73 models — put it at the top of the reasoning class. Capped because GPQA Diamond, standalone CritPt v2 and Omniscience hallucination numbers are unpublished for this model.
- **Context window: 96/100.** 1,048,576-token total window with 128K max output (verified by three independent sources) sits in the ≥1M tier (95–100); the 100 level needs ≥98% retrieval at 512K+ and no MRCR/RULER retrieval figure is published, so it stays at 96.
- **Multimodal: 68/100.** Text + image input with text output (no audio/video in, no non-text out) puts it in the +image-in band (60–70); Chartography 73.4% without tools and strong visual chart reasoning justify the upper part of that band.
- **Coding: 91/100.** Vibe Code Bench 93.77% (#1 of 127), ProgramBench #1 of 66, Code Migration 83.27%, FrontierCode 2.0 49.1% (best released model) and FrontierSWE v2 69.9% are elite agentic-coding evidence. Capped by the missing SWE-bench Verified / LiveCodeBench / SciCode numbers and by SWE-bench Multimodal trailing Opus 5.5 by eight points.
- **Cost efficiency: 45/100.** $8/$40 per 1M with no free tier — between the $3/$15 (~60) and $10/$50 (~30) reference points; partially offset per task by the effort dial ($9.08 per AA-index task at high effort beats Opus 5.5 at max for a higher score), but per token it is twice Opus 5.5.
- **Overall Score: 88/100.** Mean of Tool use 91, Reasoning 93, Context window 96, Multimodal 68, Coding 91. Best fit: the strongest model available for hard, long-horizon agentic coding and research tasks at high effort; Anthropic itself still recommends Opus 5.5 for everyday work, and legal/tax/visual-frontend work routes elsewhere.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (vendor announcement + model docs, Artificial Analysis model page, Vals AI board figures via an independent comparison write-up, OpenCode Console catalog, LLM Stats specs); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. All numbers carry their source above; unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2 (launch benchmarks, 2026-11-09)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic — Claude Fable model page (availability, API id)](https://www.anthropic.com/claude/fable)
  - [Artificial Analysis — Claude Fable 5.2 (Intelligence Index v5.0.1, pricing, specs)](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [WidelAI — Claude Fable 5.2 vs Opus 5.5, GPT-6 Astra, Gemini 4 Argon (Vals AI boards, cost-per-task, 2026-11-10)](https://www.widelai.com/blog/claude-fable-5-2-vs-opus-5-5-gpt-6-astra-gemini-4-argon)
  - [OpenCode Console docs — model catalog, routes and pricing](https://opencode.ai/docs/zen/)
  - [LLM Stats — Claude Fable 5.2 specs, pricing, context window](https://llm-stats.com/models/claude-fable-5-2)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
