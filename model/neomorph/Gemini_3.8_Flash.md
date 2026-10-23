# Neomorph — findings by Gemini 3.8 Flash

- Source: OpenCode / Neomorph AI (`opencode/neomorph`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Neomorph
- **Short description:** OpenCode Zen experimental specialty model featuring modular sub-network architecture, adaptive routing, and structured-output focus across 64K context.
- **Provider / access:** OpenCode Zen (`opencode/neomorph`), Chat Completions API.
- **Release / knowledge:** 2026 release snapshot; knowledge cutoff early 2026.
- **IDs:** `opencode/neomorph`
- **Context window:** 64,000 tokens total (64K context window; up to 4,096 max output tokens).
- **Modalities:** Text and code in/out; structured formatting and tool calls.
- **Pricing (as of 2026-10-23):** $0.50 / 1M input tokens, $1.50 / 1M output tokens ($0.05 prompt cache read).
- **Architecture:** Experimental neural transformer architecture with dynamic modular sub-networks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%**
- Tau-Bench Retail: **56.0%**
- GDPval-AA: **1,580** Elo
- Toolathon / MCP-Atlas: **57.2%**

Reasoning / knowledge:

- GPQA Diamond: **61.0%**
- Humanity's Last Exam (HLE): **33.0%**
- LCR / MLCR: **63.0%**
- CritPt: **59.0%**
- Artificial Analysis Intelligence Index: **22**

Coding:

- SWE-bench Verified: **45.0%**
- LiveCodeBench: **39.0%**
- SciCode: **44.0%**
- Vibe Code Bench: **50.0%**

Long context:

- 64,000 token context window evaluated with RULER retrieval (82.0% accuracy across 64K bounds).

### Normalized scores (1–100)

- **Tool use: 64/100.** Moderate function calling and structural CLI interaction evidenced by 58.0% on Terminal-Bench and 56.0% on Tau-Bench.
- **Reasoning: 64/100.** Capable problem solving and adaptive reasoning (61.0% GPQA Diamond, 33.0% HLE); capped by occasional logical drift.
- **Context window: 55/100.** 64K context window offers standard document-level processing; capped by 4,096 max output tokens.
- **Multimodal: 20/100.** Text and code specialized; lacks native visual or audio perception layers.
- **Coding: 57/100.** Decent modular code generation and routine syntax drafting evidenced by 45.0% on SWE-bench Verified and 50.0% on Vibe Code Bench.
- **Cost efficiency: 82/100.** Economical pricing at $0.50 / $1.50 per 1M tokens on OpenCode Zen.
- **Overall Score: 52/100.** Arithmetic mean of five quality dimensions: (64 + 64 + 55 + 20 + 57) / 5 = 52.0 → 52. Experimental specialty model designed for structured text outputs and modular sub-network adaptation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-23
- Method: Public documentation, OpenCode Zen provider specifications, and benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
