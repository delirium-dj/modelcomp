# Claude Sonnet 3.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`claude-3.5-sonnet`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's landmark 2024 model that established modern benchmarks for agentic coding, computer use, and vision reasoning.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022`) / OpenCode Zen API (`anthropic/claude-3.5-sonnet`), Messages API with tool use.
- **Release / knowledge:** 2024-10-22 release; 2024 knowledge cutoff.
- **IDs:** `anthropic/claude-3.5-sonnet`
- **Context window:** 200,000 tokens (200k context window; 8k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; computer use and function calling.
- **Pricing (as of 2026-10-02):** $3.00 / $15.00 per 1M tokens ($0.30 prompt cache read).
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.2%**
- Tau3-Banking / Tau2-Bench: **69.4%**
- GDPval-AA: **1150**
- Claw-Eval / ClawProBench: **65.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.2%**

Reasoning / knowledge:

- GPQA Diamond: **59.4%**
- HLE: **22.5%**
- LCR / MLCR: **70.2%**
- CritPt: **36.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78.5 / #28**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **38.8%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR at 200K: **88.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 72/100.** Pioneering computer use and multi-step tool workflows (Tau2-Bench 69.4%); superseded by Sonnet 4.x/5.x.
- **Reasoning: 72/100.** Dependable general and STEM reasoning (GPQA Diamond 59.4%, Intelligence Index 78.5).
- **Context window: 75/100.** 200K context window with solid retrieval fidelity.
- **Multimodal: 72/100.** High-fidelity visual understanding for UI components, diagrams, and scanned documents.
- **Coding: 76/100.** Influential SWE-bench Verified (49.0%) and LiveCodeBench (58.2%) software engineering performance.
- **Cost efficiency: 58/100.** Legacy pricing at $3.00/$15.00 per 1M tokens; outpaced by newer generations in price-to-performance.
- **Overall Score: 73/100.** Mean of the five non-cost quality dimensions (72+72+75+72+76)/5 = 73.4 → 73; historic milestone model, now superseded by newer Claude versions for active deployments.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
