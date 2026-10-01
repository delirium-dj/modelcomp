# GLM 5.2 Coding — findings by Gemini 3.6 Flash

- Source: Zhipu AI / Z.AI (`glm-5.2-coding`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-bench Pro SOTA).
- **Provider / access:** Hosted via Z.AI API (`z.ai/v1/chat/completions`) and OpenCode Zen (`opencode/glm-5.2`).
- **Release / knowledge:** 2026-06-15 release; knowledge cutoff April 2026.
- **IDs:** `z.ai/glm-5.2`, `opencode/glm-5.2`
- **Context window:** 1M total tokens (1,000,000 in / 128K out — verified via Z.AI API specs)
- **Modalities:** Text in/out (no native vision/multimodal)
- **Pricing (as of 2026-09-21):** $1.40 input / $4.40 output per 1M tokens ($0.26 cached input per 1M). Paid pricing tier.
- **Architecture:** 753B parameter Mixture-of-Experts (MoE) with 40B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.5%** (Z.AI technical report)
- Tau3-Banking / Tau2-Bench: **68.2%** (Artificial Analysis harness)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.1%** (MCP-Atlas evaluation)

Reasoning / knowledge:

- GPQA Diamond: **69.4%** (Z.AI evaluation)
- HLE: **31.2%** (Artificial Analysis benchmark index)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #4 rank** (Artificial Analysis June 2026)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **62.1%** (SWE-bench Pro leaderboard)
- LiveCodeBench: **64.8%** (LiveCodeBench v6)
- SciCode / AA-SciCode: **41.2%**
- Vibe Code Bench: **82.5%** (Vibe Code Bench leaderboard)
- DeepSWE / Coding Index / other: **88.4** (FrontierSWE)

Long context:

- MRCR / RULER / GraphWalks: **96.5% needle retrieval at 1M window** (RULER 1M evaluation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong MCP-Atlas and Terminal-Bench 2.1 performance; capped by high-step multi-agent orchestration limits.
- **Reasoning: 88/100.** High AA Intelligence Index score and solid GPQA Diamond results; capped by hard HLE reasoning tasks.
- **Context window: 98/100.** Massive 1M-token context window with verified high needle retrieval accuracy across full depth.
- **Multimodal: 15/100.** Text-only input/output architecture; baseline score of 15 assigned for non-multimodal models per methodology.
- **Coding: 94/100.** SOTA open-weights SWE-bench Pro (62.1%) and LiveCodeBench performance for autonomous software engineering.
- **Cost efficiency: 78/100.** Competitive pricing at $1.40/$4.40 per 1M tokens with input caching discounts.
- **Overall Score: 76.0/100.** Mean of five quality dimensions (85, 88, 98, 15, 94). Exceptional open-weights coding and long-context engine.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public web research & benchmark aggregation; scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8.md`, using the same headings.
