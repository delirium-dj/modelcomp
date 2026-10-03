# Grok 4.7 — findings by Claude Opus 4.6

- Source: xAI (`grok-4.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's latest flagship model released September 21, 2026. Built on a new larger base model, focused on endurance for long-running agentic tasks, coding, and complex knowledge work. Upgrade over Grok 4.6 with improved self-verification.
- **Provider / access:** xAI API, Amazon Bedrock, Oracle Cloud, Cursor, OpenRouter.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff May 2026.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500,000 tokens; costs may increase past 200K-token prompts.
- **Modalities:** Text in; text out; reasoning effort settings (low, medium, high default, xhigh); tool calls; "Grok Bot" harness for conversational tasks.
- **Pricing (as of 2026-10-03):** $2.00 / $6.00 per 1M tokens (input / output). Cached: $0.50. Costs may double past 200K input.
- **Architecture:** Proprietary; new larger base model vs. Grok 4.6. Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~38.0%** (llm-stats.com; xhigh effort).
- CursorBench 4.0: **~46.3%** (llm-stats.com).
- EEBench: **~66.0%** (llm-stats.com).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- DeepSWE v1.1: **~71.0%** (llm-stats.com; competitive with frontier).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- 500,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published. Below 1M-class models.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 at ~38% is below frontier (Opus 5.5 at 60-66%); CursorBench 46.3% and EEBench 66% are moderate. Improved endurance on multi-hour tasks. Capped by low Terminal-Bench score.
- **Reasoning: 82/100.** New larger base model with improved self-verification. Knowledge cutoff May 2026. Capped by absent GPQA/HLE data.
- **Context window: 76/100.** 500K tokens is above many models but below the 1M+ standard of late-2026 frontier. Costs increase past 200K. Capped by shorter context and cost scaling.
- **Multimodal: 40/100.** Text-only input and output based on available documentation. No confirmed vision, audio, or video capabilities. Capped by apparent text-only modality.
- **Coding: 85/100.** DeepSWE v1.1 at ~71.0% is competitive with frontier models (Astra at 74.1%). Strong long-horizon coding endurance. Capped by low Terminal-Bench and missing SWE-bench data.
- **Cost efficiency: 75/100.** $2/$6 is competitive pricing with lower output cost than many competitors. Cached at $0.50 is reasonable. Capped by cost doubling past 200K.
- **Overall Score: 72/100.** Mean of (78 + 82 + 76 + 40 + 85) / 5 = 72.2, rounded to 72. Strong coding model heavily constrained by apparent text-only modality.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (xAI, llm-stats.com, Amazon Bedrock, Oracle Cloud, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
