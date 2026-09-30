# GPT-6.1 Sol — findings by Muse Spark 1.3

- Source: OpenAI/GPT-6.1-Sol (`gpt-6.1-sol`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model (DevDay, Sept 2026) delivering near-Astra performance on agentic coding, computer use, and professional work at one-fifth of Astra's list price. Top use case is high-volume coding/document/computer-use agents where per-task cost decides.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Chat Completions / Responses API); also in ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, Edu (not yet in ChatGPT Chat). OpenCode Zen route unverified at research time.
- **Release / knowledge:** 2026-09-29 release (OpenAI DevDay; system-card addendum same day); knowledge cutoff 2026-04-30
- **IDs:** `openai/gpt-6.1-sol` (native API ID; state explicitly: no Zen Free ID verified — cost scored on paid pricing)
- **Context window:** 1,050,000 total with 128K max output (OpenAI API docs + llm-stats launch brief) — verified via listings/docs only, not via capability measurement
- **Modalities:** text + image in; text out; reasoning yes (five effort levels low/medium(default)/high/xhigh/max; no none/minimal); tool calls yes; no audio/video in or out, no fine-tuning support
- **Pricing (as of 2026-09-29):** Standard $2.00 in / $10.00 out per 1M, cached input $0.10, cache writes $2.50 (one-fifth of Astra $10/$50); Batch/Flex 50% off; prompts over 272K input tokens bill 2x input/cache and 1.5x output for the full request
- **Architecture:** proprietary (undisclosed params/training)

### Raw benchmarks found

> All capability numbers below are OpenAI vendor-run announcement charts / system-card addendum (2026-09-29) except where marked independent. No same-harness third-party text-agent runs (Terminal-Bench 2.1, Tau3, GDPval-AA) found for this ID as of 2026-09-30.

Agent / tool use:

- OSWorld 2.0 offline partial: **71.42%** at Max effort, $1.27/task (vendor; +7pp vs GPT-6 Sol Max at less than half the cost; within 2.1pp of Astra Max at ~1/7 the cost)
- AutomationBench: **36.10%** at Max, $0.30/task (vendor; +2.2pp vs Claude Opus 5.5 at medium at ~1/3 the cost; +4.8pp vs GPT-6 Sol same setting)
- GDP.pdf (professional document agent): **32.0%** at High, $0.35/task (vendor; above Opus 5.5 with fallbacks at <1/2 cost, approaching Astra at ~1/5 cost)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** at max effort, index v4.3.2 (independent, via HokAI checked 2026-09-30; Opus 5.5 at 58, ~1pt under Astra)
- Terminal-Bench Science 0.1: **57.02%** at Max, ~$5.47/task (vendor; Astra peak 68.1% still leads; 2x+ GPT-6 Sol Max at <1/2 that cost)
- HealthBench (system-card addendum, length-adjusted): Professional **64.2** (+3.4 vs GPT-6 Sol, within 0.5pp of Astra 64.7); HealthBench **58.5** (+5.3); Hard **36.2** (+6.1); Consensus **96.0** (-0.2, near ceiling)
- MentalHealthBench overall: **57.9%** (vendor; Astra 58.7, GPT-6 Sol 54.2)
- Factual-error rate on flagged hard conversations: **7.7%** at low effort vs 11.4% GPT-6 Sol (vendor; within 1.9pp of Astra across settings)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **75.22%** at High, $0.65/task (vendor; matches Astra at ~1/5 cost; +6.4pp over GPT-6 Sol best at lower effort; effort ladder Low 64.38 / Medium 73.01 / High 75.22 / Xhigh-Max 71.90)
- SEC-Bench Pro (JS-engine vuln discovery): **78.8%** pass@1 (vendor; Astra 85.4, GPT-6 Sol 66.3)
- ExploitGym intended-vuln success: **35.1%**/attempt (vendor; Astra 42.4, GPT-6 Sol 22.1, shorter mean solution length)
- ExploitBench: **99.7%** at max effort (vendor; Astra 100, GPT-6 Sol 81.7; vendor notes possible contamination inflation)
- Internal Research Debugging rubric: **75.52%** mean (vendor; Astra 78.05, GPT-6 Sol 64.20)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1,050,000-token window and 128K max output are listing ceilings only, with a 2x/1.5x price multiplier above 272K input

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 71.42% near Astra plus AutomationBench/GDP.pdf leads over Opus 5.5 at a fraction of cost; capped by zero same-harness text-agent runs (TB2.1/Tau3/GDPval) and vendor-run sourcing.
- **Reasoning: 84/100.** Independent AA Index 52 (~1pt under Astra) with near-Astra HealthBench/cyber-eval cluster; capped by the TB-Science gap to Astra (57.02 vs 68.1) and no GPQA/HLE.
- **Context window: 97/100.** Verified 1.05M window clears the ≥1M tier with 128K max output; capped below 100 by zero measured retrieval-at-scale and the >272K price multiplier caveat.
- **Multimodal: 65/100.** Text + image in covers the +image band; capped by text-only output and no audio/video either direction.
- **Coding: 89/100.** DeepSWE 75.22% at Astra parity with strong SEC-Bench/debugging support; capped below frontier by vendor-run sourcing (no independent SWE/LiveCode confirmation yet).
- **Cost efficiency: 78/100.** $2/$10 standard (one-fifth Astra) with $0.10 cache reads is strong paid value; capped by paid-only access and the >272K long-prompt multiplier.
- **Overall Score: 84/100.** Mean of the five quality dims (85 + 84 + 97 + 65 + 89) / 5; best fit as the high-volume near-Astra coding/agent workhorse — reach for Astra only when peak science score outweighs 5x cost.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-30
- Method: public internet research (OpenAI launch post + API model page + GPT-6.1 Sol system-card addendum 2026-09-29, TechCrunch DevDay report, llm-stats launch brief with effort ladders, HokAI/AA composite checked 2026-09-30); scores are normalized 1–100 interpretations, not official vendor scores. No own twin existed in this folder; no peer findings files were read.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
