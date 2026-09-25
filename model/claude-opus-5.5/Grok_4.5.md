# Claude Opus 5.5 — findings by Grok 4.5 (xAI/grok-4.5)

- Source: Anthropic/`claude-opus-5-5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s latest Opus-class frontier model (first in the Claude 5.5 family), optimized for long-running agentic coding, knowledge work, and computer use. It matches or exceeds Claude Fable 5.1 on most tasks while costing ~40% less than Opus 5 on typical workloads.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`); also Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. Messages API (Chat Completions-style).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5` (no Free-tier ID on OpenCode Zen or equivalent free hosts found).
- **Context window:** 1M tokens total (verified via official Anthropic platform docs and announcement); max output 128K tokens (synchronous; up to 300K on Batches API with beta header).
- **Modalities:** Text + image in → text out; adaptive thinking (always on, effort-controlled); tool calls / computer use supported; JSON mode available; no native audio/video in or non-text out reported.
- **Pricing (as of 2026-09-25):** $4 / $20 per 1M input/output tokens; cache reads $0.20 / 1M; cache writes $5 (5m) / $8 (1h) per 1M; Fast mode $8/$40; Batch API 50% off. Paid only (no free tier); subscription usage limits raised 20% on Pro/Max/Team/Enterprise.
- **Architecture:** Proprietary (closed weights); hybrid reasoning model with adaptive thinking; parameter count not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.64%** (Vals.ai, #1; high effort; with fallbacks; drops to 79.77% counting fallbacks as failures)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1846** Elo (Anthropic / Artificial Analysis GDPval-AA v2.1)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh effort, ±2.6; safeguards on); **61.62%** (Vals.ai); **59.6%** (Artificial Analysis, max)
- OSWorld 2.0: **81.8%** partial / **48.7%** strict (Anthropic)
- AutomationBench: **40.0%** (Zapier / Anthropic)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **67.7%** with tools (Anthropic); **61.4%** (Artificial Analysis); **64.4%** no tools (System Card)
- LCR / MLCR: no verified public score found (AA-LCR mentioned as trailing)
- CritPt: no verified public score found (trails on AA Index)
- Artificial Analysis Intelligence Index / BenchLM overall: **58** / #1 (Artificial Analysis, max effort)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index **46** (leads); hallucination rate **59%** (Artificial Analysis)

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** SWE-bench Pro (Anthropic System Card / BenchLM)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis)
- Vibe Code Bench: **90.29%** (Vals.ai, #2)
- DeepSWE / Coding Index / other: **74.2%** DeepSWE v1.1 (System Card); FrontierCode v1.1 Main **54.4%** (Anthropic); CursorBench 4.0 **57.8%** (Anthropic)

Long context:

- no long-context retrieval reported (1M window confirmed; AA-LCR trails peers)

### Normalized scores (1-100)

- **Tool use: 95/100.** Terminal-Bench 2.1 87.64% (Vals) and TB 4.0 59.6–66.4% plus GDPval-AA 1846 and OSWorld 81.8% partial place it at frontier (TB2.1 ~88%+, GDPval ~1750+ = 90-100); minor harness variance and safeguard fallbacks cap below 100.
- **Reasoning: 92/100.** AA Index 58 (#1), HLE 61.4–67.7%, SciCode 66.9% are frontier (HLE 40%+ / Index 60+ = 90-100); no GPQA/CritPt public scores and trailing on some AA sub-tests prevent higher.
- **Context window: 95/100.** Verified 1M total (tier ≥1M = 95-100); no public ≥98% retrieval at 512K+ (e.g. MRCR/RULER) so not 100.
- **Multimodal: 65/100.** Text + image in → text out (tier +image in = 60-70); no video/PDF/audio in or non-text out reported.
- **Coding: 95/100.** SWE-bench Pro 89.9%, DeepSWE 74.2%, SciCode 66.9%, Vibe 90.29%, strong agentic coding (TB/FrontierCode/CursorBench) meet frontier thresholds (DeepSWE 74%+, SciCode 55%+); LiveCodeBench absent and some harness gaps keep it from 100.
- **Cost efficiency: 75/100.** $4/$20 (approx. between $1.25/$4.25 ~88 and $3/$15 ~60); cache reads $0.20 improve effective agentic cost; not free.
- **Overall Score: 88.4/100.** Mean of five non-cost dims (95+92+95+65+95)/5 = 88.4 (half-up). Best-fit for long-horizon agentic coding and knowledge-work agents where cost-per-task and 1M context matter more than pure multimodal or free-tier use.

---

## Signature

- Provided by: **Grok 4.5 (xAI/grok-4.5)** — 2026-09-25
- Method: public internet research (Anthropic official announcement + platform docs + System Card, Artificial Analysis, Vals.ai, BenchLM, secondary reporting of those sources); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
