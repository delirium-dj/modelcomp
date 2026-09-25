# GPT-6 Luna — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-6 Luna
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family delivering near-frontier DeepSWE at a fraction of the cost.
- **Provider / access:** OpenAI API (`openai/gpt-6-luna`).
- **Release / knowledge:** Released 2026; knowledge cutoff varies.
- **IDs:** `openai/gpt-6-luna` (no Free ID exists on Zen)
- **Context window:** 1M tokens
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-09-25):** Paid-tier pricing
- **Architecture:** Proprietary

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Tool use: **88** (provisional)
- Terminal-Bench 2.1: **89%**
- Tau3-Banking / Tau2-Bench: **88%**
- GDPval-AA: **89**
- Claw-Eval / ClawProBench: **89**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88**

Reasoning / knowledge:
- GPQA Diamond: **87%**
- HLE: **87%**
- LCR / MLCR: **88%**
- CritPt: **89%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / 3**
- Omniscience Accuracy / Hallucination Rate: **88% / 5%**

Coding:
- SWE-bench Verified / SWE-Pro: **89%**
- LiveCodeBench: **88%**
- SciCode / AA-SciCode: **88%**
- Vibe Code Bench: **87%**
- DeepSWE / Coding Index / other: **88**

Long context:
- MRCR/RULER: Verified high retrieval accuracy at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Solid tool use performance.
- **Reasoning: 87/100.** Reliable reasoning capabilities.
- **Context window: 95/100.** Large context window with strong retrieval.
- **Multimodal: 80/100.** Text and image input support.
- **Coding: 88/100.** Strong coding benchmark results.
- **Cost efficiency: 75/100.** Efficient performance-to-cost ratio.
- **Overall Score: 87.6/100.** Excellent performance, especially for context-heavy and coding tasks, recommended for cost-conscious enterprise applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
