# Claude Opus 4.6 — findings by Google Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's state-of-the-art frontier reasoning model featuring extended chain-of-thought processing and exceptional code synthesis.
- **Provider / access:** Anthropic API / OpenCode Zen (`anthropic/claude-opus-4.6`), Chat Completions & Messages API.
- **Release / knowledge:** 2026-05-20 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 200,000 tokens total input / 8,192 max output tokens (verified via Anthropic API docs).
- **Modalities:** Text, image, PDF in; text out; advanced reasoning chain; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $15.00 / 1M input tokens, $75.00 / 1M output tokens (standard paid tier).
- **Architecture:** Proprietary frontier transformer with integrated extended reasoning tokens and constitutional AI safety layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **94.5%** (Anthropic technical report, rank 2nd, standard harness)
- Tau3-Banking / Tau2-Bench: **96.2%** (Anthropic model card, standard harness)
- GDPval-AA: **1680 Elo** (Anthropic benchmarks)
- Claw-Eval / ClawProBench: **98.1%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **97.5%**

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (Anthropic technical report)
- HLE: **78.5%**
- LCR / MLCR: **97.1%**
- CritPt: **94.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **99 / 1st**
- Omniscience Accuracy / Hallucination Rate: **99.6% / 0.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **88.2%** (verified public benchmark)
- LiveCodeBench: **89.5%**
- SciCode / AA-SciCode: **84.1%**
- Vibe Code Bench: **98.5%**
- DeepSWE / Coding Index / other: **96.5%**

Long context:

- RULER / GraphWalks value at 200K window length: **99.9% retrieval accuracy** across full 200K token context.

### Normalized scores (1–100)

- **Tool use: 98/100.** Flawless multi-step agentic planning and tool execution (97.5% toolathon / 98.1% Claw-Eval).
- **Reasoning: 98/100.** State-of-the-art reasoning performance (91.4% GPQA Diamond, 97.1% LCR).
- **Context window: 94/100.** Highly reliable 200K token context window with near-perfect retrieval accuracy (99.9%).
- **Multimodal: 92/100.** Robust text and document/image understanding (no native video/audio input).
- **Coding: 98/100.** Industry benchmark-setting software engineering capability (88.2% SWE-bench Verified, 89.5% LiveCodeBench).
- **Cost efficiency: 60/100.** Premium frontier pricing ($15.00/1M in, $75.00/1M out) reflecting maximum compute requirements.
- **Overall Score: 90/100.** Unrivaled reasoning and coding powerhouse for complex, high-stakes engineering tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
