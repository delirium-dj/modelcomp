# Claude Opus 5.5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship model in the Claude 5.5 family, designed for long-running agentic coding, computer use, and complex knowledge work. Released September 22, 2026, it performs at the level of Claude Fable 5.1 on most tasks while being significantly more cost-efficient.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Chat Completions and Messages API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens (verified via Anthropic docs and OpenRouter).
- **Modalities:** Text + image in; text out; adaptive thinking (always on, default effort "medium"); tool calls; JSON mode.
- **Pricing (as of 2026-10-03):** $4.00 / $20.00 / $0.20 (input / output / cache read) per 1M tokens.
- **Architecture:** Proprietary; parameter count undisclosed. Successor to Claude Opus 5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **66.4%** (Anthropic launch data); independently measured at **59.6%** by Artificial Analysis.
- Artificial Analysis Intelligence Index: **58** (#1 rank as of Oct 2026, per artificialanalysis.ai).
- Tool call efficiency: fewer tool calls and tokens than Opus 5 for comparable outcomes (Anthropic, kiro.dev).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found; Anthropic positions as Fable 5.1-level reasoning.
- HLE (Humanity's Last Exam, with tools): strong performance reported (Anthropic), exact score not publicly pinpointed.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: **58 / #1** (artificialanalysis.ai, Oct 2026).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **89.9%** (widely cited, datacamp.com, morphllm.com, medium.com).
- SWE-bench Verified: no separate Verified score found distinct from Pro.
- LiveCodeBench: no verified public score found (community integration in progress).
- SciCode / AA-SciCode: no verified public score found; frontier models reported ~50–60% range.
- Vibe Code Bench: no verified public score found.
- DeepSWE: no verified public score found; frontier models reported ~74% range.

Long context:

- 1,000,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published yet. Reports indicate reliability for large-scale code migrations but the "rot zone" past 500K tokens common among 1M-class models applies.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 at 59.6–66.4% is top-tier; #1 on AA Intelligence Index (58); robust tool calling with optimized efficiency. Capped by lack of verified Tau/Claw benchmarks.
- **Reasoning: 92/100.** Positioned at Fable 5.1 level by Anthropic; #1 AA Intelligence Index; strong HLE performance with tools. Capped by absence of independently verified GPQA Diamond score.
- **Context window: 88/100.** 1M-token window with 128K output, matching the top tier for 2026 frontier models. Reliable at scale per tester reports; capped by absence of formal MRCR/RULER scores and likely degradation past 500K.
- **Multimodal: 72/100.** Native text + image input with high-fidelity document/chart/screenshot interpretation. No audio/video input or image generation; text-only output. Capped by vision-only multimodal scope.
- **Coding: 93/100.** SWE-bench Pro 89.9% is among the highest publicly reported scores; designed for long-horizon agentic coding; fewer tokens/tool calls than predecessor. Capped slightly by lack of LiveCodeBench/SciCode data.
- **Cost efficiency: 55/100.** $4/$20 per 1M is a premium tier; 40% cheaper than Opus 5 but still costly. Cache reads at $0.20 help with repeated context. Capped by high absolute pricing.
- **Overall Score: 87/100.** Mean of (90 + 92 + 88 + 72 + 93) / 5 = 87.0. A top-tier flagship model excelling in coding and reasoning, constrained by vision-only multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Anthropic announcements, Artificial Analysis, OpenRouter, independent benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
