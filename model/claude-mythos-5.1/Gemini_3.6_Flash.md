# Claude Mythos 5.1 — findings by Gemini 3.6 Flash

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5.1`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access 5.1 generation model, sharing architecture with Fable 5.1 but featuring relaxed safeguards for advanced cyber defense and life sciences research.
- **Provider / access:** Anthropic API / Project Glasswing (`claude-mythos-5.1`). Chat Completions and Messages API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,000,000 tokens (1M input context, up to 128K output tokens).
- **Modalities:** text and image input; text output; native tool use, JSON mode, reasoning mode.
- **Pricing (as of 2026-09-21):** $10.00 / 1M input tokens, $50.00 / 1M output tokens ($0.25 / 1M cache read tokens).
- **Architecture:** Proprietary frontier dense/MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic release benchmark card)
- Terminal-Bench-Science 0.1: **52.6%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (Fable/Mythos 5.1 series baseline)
- HLE: **49.2%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #1** (at debut)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro)
- LiveCodeBench: **2910 Elo**
- SciCode / AA-SciCode: **61.4%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **89.1%** (SWE-bench Multilingual)

Long context:

- 1M token context window supported with 128K max generation and 75% cost reduction on cached prefix reads.

### Normalized scores (1–100)

- **Tool use: 92/100.** Leads terminal agentic benchmarks with 60.9% on Terminal-Bench 4.0 and 52.6% on Terminal-Bench-Science.
- **Reasoning: 93/100.** Top of Artificial Analysis Intelligence Index (66.0) with strong GPQA and HLE reasoning metrics.
- **Context window: 96/100.** 1M input token context with generous 128K max output and fast prompt caching.
- **Multimodal: 64/100.** Supports high-resolution text and image inputs with text output; lacks native audio/video modalities.
- **Coding: 93/100.** Exceptional coding performance across SWE-bench Pro (81.2%) and LiveCodeBench (2910 Elo).
- **Cost efficiency: 30/100.** Premium tier pricing at $10.00/$50.00 per 1M tokens.
- **Overall Score: 88/100.** Mean of the five quality dimensions (92, 93, 96, 64, 93); premier choice for specialized agentic, scientific, and security tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
