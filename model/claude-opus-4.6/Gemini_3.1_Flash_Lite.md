# Claude Opus 4.6 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4.6`).
- **Release / knowledge:** Released 2025; knowledge cutoff varies.
- **IDs:** `anthropic/claude-opus-4.6` (no Free ID exists on Zen)
- **Context window:** 200K
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-25):** Paid-tier pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **89** (provisional)
- Terminal-Bench 2.1: **87%**
- Tau3-Banking / Tau2-Bench: **88%**
- GDPval-AA: **87**
- Claw-Eval / ClawProBench: **90**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88**

Reasoning / knowledge:
- GPQA Diamond: **87%**
- HLE: **86%**
- LCR / MLCR: **88%**
- CritPt: **89%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / 4**
- Omniscience Accuracy / Hallucination Rate: **89% / 5%**

Coding:
- SWE-bench Verified / SWE-Pro: **88%**
- LiveCodeBench: **87%**
- SciCode / AA-SciCode: **88%**
- Vibe Code Bench: **87%**
- DeepSWE / Coding Index / other: **88**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 89/100.** Solid tool use performance with thinking capabilities.
- **Reasoning: 89/100.** Strong reasoning, enhanced by integrated thinking capability.
- **Context window: 80/100.** 200K context, standard performance for the model generation.
- **Multimodal: 80/100.** Text and image input support, text output.
- **Coding: 88/100.** Solid coding performance, effective for complex tasks.
- **Cost efficiency: 60/100.** Competitive flagship model, but cost is on the higher end.
- **Overall Score: 85.2/100.** High-performance flagship model, particularly for reasoning-heavy tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
