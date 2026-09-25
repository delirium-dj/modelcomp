# Claude Opus 5.5 — findings by Grok (xAI/grok-4)

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s latest Opus-class frontier model (first in the Claude 5.5 family), optimized for long-running agentic coding, computer use, and complex knowledge work. Matches or approaches Claude Fable 5.1 capability at substantially lower cost/token and higher efficiency than Claude Opus 5; adaptive reasoning always on.
- **Provider / access:** Anthropic Claude API / Messages API (`claude-opus-5-5`); also Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. Available on Claude.ai (Pro/Max/Team/Enterprise).
- **Release / knowledge:** 2026-09-22 release; reliable knowledge / training data cutoff Jun 2026.
- **IDs:** `anthropic/claude-opus-5-5` or `claude-opus-5-5` (no Free-tier ID confirmed on OpenCode Zen)
- **Context window:** 1M tokens total (verified via official Anthropic platform docs and Artificial Analysis); max output 128K tokens (synchronous; up to 300K on Message Batches API beta).
- **Modalities:** text + image in; text out; adaptive reasoning (always on, effort-steerable: low/medium/high/xhigh/max); tool calls / computer use; JSON schema mode; no native audio/video out.
- **Pricing (as of 2026-09-25):** $4 / $20 per 1M input/output tokens (standard); cache read $0.20 / MTok, 5m cache write $5 / MTok, 1h $8 / MTok; Fast mode $8 / $40; Batch 50% off. Paid API (Claude.ai subscription tiers available separately); free-tier privacy caveat N/A for pure API paid use.
- **Architecture:** proprietary (params total/active, MoE details undisclosed); closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.64%** (Vals.ai, high effort, with fallbacks; 79.77% counting fallbacks as failures)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1846** Elo (v2.1, Anthropic max effort / AA)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Terminal-Bench 4.0: **66.4%** (Anthropic xhigh); **59.6%** (Artificial Analysis max); **61.62%** (Vals.ai)
- AutomationBench: **40.0%** (Zapier / Anthropic)
- OSWorld 2.0: **81.8%** partial (Anthropic)
- AA-Briefcase v1.1: **1822** Elo (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **61.4%** (Artificial Analysis); **67.7%** with tools (Anthropic max)
- LCR / MLCR: no verified public score found (AA-LCR v1.1 evaluated but no numeric score extracted)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** (AA Index v4.3.2, max effort with fallback)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** SWE-bench Pro (Anthropic system card / BenchLM leaderboard)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis)
- Vibe Code Bench: **90.29%** (Vals.ai v1.1)
- DeepSWE / Coding Index / other: **74.2%** DeepSWE v1.1 (Anthropic system card); FrontierCode v1.1 Main **54.4%** (Anthropic); CursorBench 4.0 **57.8%** (Anthropic); ProgramBench **91.2%** / **18.50%** fully resolved (system card / Vals)

Long context:

- no long-context retrieval reported (1M window confirmed; AA-LCR evaluated but no numeric public score found)

### Normalized scores (1-100)

- **Tool use: 93/100.** Frontier-level Terminal-Bench 2.1 (~87.6% Vals), GDPval-AA 1846 Elo (well above ~1750 frontier threshold), strong AutomationBench/OSWorld/AA-Briefcase; capped slightly by harness variance on TB 4.0 (59.6–66.4%) and missing Tau3.
- **Reasoning: 94/100.** HLE 61.4% (AA; >40% frontier) + 67.7% w/ tools (Anthropic) and #1 AA Intelligence Index 58; capped by missing GPQA Diamond / CritPt / detailed LCR numbers.
- **Context window: 95/100.** Verified 1M total (official docs + AA); tier >=1M maps 95-100, 100 reserved for confirmed >=98% retrieval at 512K+ (MRCR/RULER etc. not reported).
- **Multimodal: 65/100.** Text + image in, text out (official); no video/PDF-as-native/audio in or non-text out (maps to 60-70 band).
- **Coding: 96/100.** DeepSWE 74.2% (frontier 74%+), SWE-bench Pro 89.9% (leader), SciCode 66.9%, strong Vibe/FrontierCode/CursorBench/ProgramBench; near-ceiling with minor harness caveats.
- **Cost efficiency: 72/100.** $4/$20 list (better than prior Opus $5/$25 and far below Fable $10/$50); excellent $0.20 cache reads + reported ~40% lower effective cost on agentic workloads vs Opus 5; maps between ~$3/$15 (~60) and lower mid-tier points, boosted by efficiency.
- **Overall Score: 88.6/100.** Mean of five non-cost dims (93+94+95+65+96)/5 = 88.6 (half-up); best-fit recommendation: primary daily driver for long-horizon agentic coding, computer use, and professional knowledge work where cost-per-task and reliability matter more than pure max-effort Fable-class peaks.

---

## Signature

- Provided by: **Grok (xAI/grok-4)** — 2026-09-25
- Method: fresh public internet research (Anthropic official docs/announcement/system card, Artificial Analysis model page + article, Vals.ai, BenchLM, platform.claude.com, cross-checked secondary reports); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
