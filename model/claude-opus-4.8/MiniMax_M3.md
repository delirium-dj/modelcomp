# Claude Opus 4.8 — findings by MiniMax M3

- Source: Anthropic (`anthropic/claude-opus-4-8`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model (28 May 2026) with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking. Modest but tangible improvement on Opus 4.7.
- **Provider / access:** Anthropic API (`claude-opus-4-8`); Claude Code, claude.ai, Cowork, Vertex AI, Amazon Bedrock. Chat Completions + Messages API.
- **Release / knowledge:** Release 28 May 2026.
- **IDs:** `anthropic/claude-opus-4-8`; no free ID.
- **Context window:** 200,000 tokens (per meta.json; morphllm reports 1M for some Opus variants). Confirmed at 200K from official Anthropic pricing tier.
- **Modalities:** Text, image in; text out. Reasoning: yes (high default; xhigh, max available via effort control). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** $5 input / $25 output per 1M (unchanged from 4.7); Fast Mode $10 / $50 (3× cheaper than previous generation's fast mode). Paid.
- **Architecture:** Proprietary. Built on Opus 4.7; modest capability lift. New "Dynamic Workflows" feature for Claude Code (parallel subagents) launches with this version.

### Raw benchmarks found

Agent / tool use:

- Online-Mind2Web: **84%** — strongest computer-use and browser-agent score (Anthropic launch).
- Super-Agent benchmark: **only model to complete every case end-to-end**, beating prior Opus + GPT-5.5 at parity on cost (Anthropic launch).
- CursorBench: **exceeds prior Opus across every effort level**; tool calling uses fewer steps for the same intelligence.
- Legal Agent Benchmark: **highest score recorded; first to break 10% all-pass standard** (Anthropic launch).
- GDPval-AA: **1,890 Elo** (CodingFleet, 29 May 2026) — implies ~67% win rate over GPT-5.5.
- Terminal-Bench 2.1: **78.9%** (Anthropic-reported; verified entry top at the time) (Codersera) — up from 66.1% on 4.7.
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- **~4× less likely than Opus 4.7 to allow flaws in code to pass unremarked** (Anthropic internal eval).
- **Alignment assessment**: "new highs on prosocial traits like supporting user autonomy"; misaligned behavior rates substantially lower than 4.7, similar to Mythos Preview.
- Honesty uplift: more likely to flag uncertainties, less likely to make unsupported claims.
- AA Intelligence Index / GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model/ID.

Coding:

- SWE-bench Verified: **88.6%** (morphllm benchmarks table; Anthropic launch).
- SWE-Bench Pro: **69.2%** (up from 64.3% on Opus 4.7) (unifically).
- Terminal-Bench 2.1: 78.9% (Anthropic) / 74.6% (unifically, prior model reported) — leading Anthropic at launch.
- OSWorld-Verified: **82.8%** (Anthropic; updated 4.7 to 82.3% with new harness).
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model/ID.

Long context:

- 200K context window. Strong long-context retention.
- Dynamic workflows feature enables parallel subagents carrying context across long-running tasks.
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 90/100.** Online-Mind2Web 84% (strongest computer-use). Super-Agent benchmark only model to complete every case. CursorBench exceeds prior Opus. Terminal-Bench 2.1 78.9%. Capped because Toolathlon / MCP-Atlas not published.
- **Reasoning: 91/100.** 4× less likely to allow code flaws to pass unremarked. Best-in-class Legal Agent Benchmark. Strong alignment profile similar to Mythos Preview. Capped because HLE/GPQA not separately published.
- **Context window: 92/100.** 200K context. Capped at 92 (vs cohort leaders at 95-96) because Opus 4.8 stays at the 200K tier while competitors moved to 1M.
- **Multimodal: 78/100.** Text+image in, no native video/audio. Databricks Genie: 61% cheaper token cost than Opus 4.7 for multimodal PDF/diagram reasoning. Capped because MMMU-Pro not published.
- **Coding: 92/100.** SWE-bench Verified 88.6% (LEADS the Anthropic cohort). SWE-Bench Pro 69.2% (up from 64.3%). OSWorld 82.8%. Capped because LiveCodeBench / SciCode not published.
- **Cost efficiency: 50/100.** $5/$25 is parity with prior Opus. Fast Mode 3× cheaper than previous generation. 61% cheaper than 4.7 for some workloads (Databricks Genie). Capped at 50 because raw input/output is 2.5× GPT-6.1 Sol ($2/$10).
- **Overall Score: 89/100** Half-up mean of Tool 90, Reasoning 91, Context 92, Multimodal 78, Coding 92 = 443/5 = 88.6 → half-up 89. Claude Opus 4.8 is the most honest and reliable Opus to date — strong coding (SWE-bench 88.6%) and agentic execution (Super-Agent full pass), with a 200K context that lags the 1M cohort ceiling.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Anthropic launch, morphllm benchmarks table, CodingFleet, Codersera, unifically, myclaw.ai). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8_Anthropic.md`, using the same headings.

