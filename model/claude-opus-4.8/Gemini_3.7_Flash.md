# Claude Opus 4.8 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-opus-4.8`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** High-capacity enterprise reasoning and synthesis model with enhanced agency and nuanced multi-turn document generation.
- **Provider / access:** Anthropic Messages API (`anthropic/claude-opus-4.8`), OpenCode Zen (`opencode/claude-opus-4.8`).
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff December 2025.
- **IDs:** `anthropic/claude-opus-4.8`, `opencode/claude-opus-4.8`
- **Context window:** 300,000 tokens (300k input, 16k max output).
- **Modalities:** text, image in; text out; tool use, computer use, extended thinking.
- **Pricing (as of 2026-09-20):** $5.00 / $25.00 per 1M tokens ($2.50 cached).
- **Architecture:** Large autoregressive transformer with constitutional RL (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.8%**
- Tau3-Banking / Tau2-Bench: **81.5%**
- GDPval-AA: **1330**
- Claw-Eval / ClawProBench: **76.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.1%**

Reasoning / knowledge:

- GPQA Diamond: **70.4%**
- HLE: **31.5%**
- LCR / MLCR: **84.8%**
- CritPt: **78.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **111 / #9**
- Omniscience Accuracy / Hallucination Rate: **87.2% / 4.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.8%**
- LiveCodeBench: **53.4%**
- SciCode / AA-SciCode: **74.6%**
- Vibe Code Bench: **80.1%**
- DeepSWE / Coding Index / other: **75.4**

Long context:

- MRCR 300k needle retrieval 99.1%; RULER benchmark 95.4% at 300k tokens.

### Normalized scores (1–100)

- **Tool use: 84/100.** Deliberate, reliable multi-tool orchestration with strong error detection.
- **Reasoning: 88/100.** Deep conceptual coherence, sophisticated policy reasoning, and nuanced judgment.
- **Context window: 89/100.** 300k context with strong retrieval accuracy across long technical files.
- **Multimodal: 86/100.** High-fidelity image parsing, chart reading, and layout understanding.
- **Coding: 85/100.** Structured software architecture, refactoring, and code review.
- **Cost efficiency: 50/100.** High price point reflects heavy compute footprint.
- **Overall Score: 86.4/100.** Exceptional prose, deep synthesis, and dependable reasoning for complex knowledge work.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
