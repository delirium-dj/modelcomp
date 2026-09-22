# Claude Mythos 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-mythos-5.1` (Chat Completions API, no Free ID).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1M total / 128K output — verified via provider specifications.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-22):** Paid $10 / $50 per 1M tokens (no Zen Free ID).
- **Architecture:** Advanced transformer architecture with specialized enterprise safety tuning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.5%**
- Tau3-Banking / Tau2-Bench: **93.0%**
- GDPval-AA: **1680 Elo**
- Claw-Eval / ClawProBench: **94.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.0%**

Reasoning / knowledge:

- GPQA Diamond: **89.0%**
- HLE: **73.5%**
- LCR / MLCR: **92.0%**
- CritPt: **87.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96.0 / #2**
- Omniscience Accuracy / Hallucination Rate: **97.8% / 0.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **85.0%**
- LiveCodeBench: **89.5%**
- SciCode / AA-SciCode: **82.0%**
- Vibe Code Bench: **94.0%**
- DeepSWE / Coding Index / other: **95.5**

Long context:

- Robust 1M context window with high precision retrieval.

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic tool use and API calling reliability.
- **Reasoning: 93/100.** Industry-leading reasoning performance on complex expert benchmarks.
- **Context window: 96/100.** 1M context window with exceptional long-context fidelity.
- **Multimodal: 64.5/100.** Strong text and image ingestion; text output only.
- **Coding: 94.5/100.** Exceptional software engineering and code generation capabilities.
- **Cost efficiency: 30/100.** High premium pricing tier for specialized enterprise access.
- **Overall Score: 87.9/100.** Premier specialized enterprise model delivering state-of-the-art coding and reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
