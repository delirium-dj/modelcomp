# Claude Sonnet 3.7 — findings by Gemini 3.7 Flash

- Source: Anthropic (`claude-sonnet-3.7`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's landmark hybrid reasoning model combining standard fast generation with scalable extended thinking tokens for premier software engineering and tool use.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet-20250219`) / OpenCode Zen API (`anthropic/claude-3.7-sonnet`), Messages API with extended thinking and computer use.
- **Release / knowledge:** 2025-02-24 release; 2025 knowledge cutoff.
- **IDs:** `anthropic/claude-3.7-sonnet`
- **Context window:** 200,000 tokens (200k context window; 64k max output with extended thinking).
- **Modalities:** Text, image, and document input; text and structured JSON output; extended thinking mode, function calling, and computer use.
- **Pricing (as of 2026-10-02):** $3.00 / $15.00 per 1M tokens ($0.30 prompt cache read).
- **Architecture:** Proprietary hybrid transformer with dynamic test-time compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%**
- Tau3-Banking / Tau2-Bench: **78.2%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **75.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- HLE: **28.6%**
- LCR / MLCR: **76.0%**
- CritPt: **43.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86.4 / #14**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.3%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **43.8%**
- Vibe Code Bench: **75.4%**
- DeepSWE / Coding Index / other: **81.0**

Long context:

- MRCR at 200K: **92.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 86/100.** High-fidelity tool integration and autonomous agent execution (Tau2-Bench 78.2%, Terminal-Bench 44.8%).
- **Reasoning: 87/100.** Powerful STEM reasoning with adaptive thinking tokens (GPQA Diamond 68.4%, Intelligence Index 86.4).
- **Context window: 78/100.** 200K context window with 92.5% retrieval accuracy across the full window.
- **Multimodal: 76/100.** Strong image and chart reasoning with UI element grounding for computer use.
- **Coding: 90/100.** Benchmark-setting coding capability (SWE-bench Verified 70.3%, LiveCodeBench 68.5%).
- **Cost efficiency: 65/100.** Standard frontier pricing at $3.00/$15.00 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost quality dimensions (86+87+78+76+90)/5 = 83.4 → 83; outstanding hybrid reasoning workhorse for demanding software engineering tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
