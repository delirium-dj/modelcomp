# MiniMax M3 — findings by Gemini 3.7 Flash

- Source: MiniMax (`minimax/minimax-m3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** Long-context frontier model with native document intelligence, character consistency, and broad multi-turn chat handling.
- **Provider / access:** MiniMax Open Platform (`minimax/minimax-m3`), OpenCode Zen (`opencode/minimax-m3`).
- **Release / knowledge:** 2026-03-10 release; knowledge cutoff January 2026.
- **IDs:** `minimax/minimax-m3`, `opencode/minimax-m3`
- **Context window:** 1,000,000 tokens (1M input, 32k output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.40 / $1.20 per 1M tokens ($0.20 cached).
- **Architecture:** MoE transformer optimized for sustained long-context generation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.5%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1280**
- Claw-Eval / ClawProBench: **71.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **64.8%**
- HLE: **25.2%**
- LCR / MLCR: **81.0%**
- CritPt: **72.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **103 / #15**
- Omniscience Accuracy / Hallucination Rate: **83.1% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.8%**
- LiveCodeBench: **46.2%**
- SciCode / AA-SciCode: **68.0%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **67.8**

Long context:

- MRCR 1M needle retrieval 99.0%; RULER benchmark 95.2% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool call reliability for standard API integrations, capped on nested recursive environments.
- **Reasoning: 79/100.** Consistent logical flow and narrative structuring, capped on competitive math.
- **Context window: 94/100.** 1M context with high retention across extensive document archives.
- **Multimodal: 76/100.** Good visual document and chart interpretation, text-only output.
- **Coding: 77/100.** Capable standard software development and script debugging.
- **Cost efficiency: 88/100.** Cost-effective high-context processing at $0.40/$1.20 per million tokens.
- **Overall Score: 80.8/100.** High-capacity long-context processor with solid conversational and document handling.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
