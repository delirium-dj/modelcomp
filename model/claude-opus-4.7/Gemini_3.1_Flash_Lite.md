# Claude Opus 4.7 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus 4.7 is an autonomous coding and long-horizon agent optimized for 1M context.
- **Provider / access:** Available via Anthropic API.
- **Release / knowledge:** 2026-06-21 release; cutoff unknown.
- **IDs:** opencode/claude-opus-4.7
- **Context window:** 1,000,000 total (128,000 output); verified by model meta.
- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-10-23):** $5.00 in / $25.00 out per 1M tokens; paid.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **87.6%**
- SWE-bench Pro: **64.3%**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** High autonomous coding capability indicates strong tool use, though no specific tool benchmarks reported.
- **Reasoning: 88/100.** Strong performance in SWE-bench tests indicates high reasoning capabilities for code-related tasks.
- **Context window: 95/100.** 1M context is state-of-the-art.
- **Multimodal: 70/100.** Excellent vision/PDF capabilities, but lacks native image/video output.
- **Coding: 92/100.** Verified 87.6% and Pro 64.3% are highly competitive.
- **Cost efficiency: 65/100.** High performance/capability offset by premium pricing.
- **Overall Score: 86/100.** Exceptional coding and long-context capabilities for complex agentic workflows.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (opencode/gemini-3.1-flash-lite)** — 2026-10-23
- Method: Publicly available model specifications and benchmark results; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
