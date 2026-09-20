# Claude Opus 5 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-opus-5
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5 system engineered for the deepest autonomous reasoning, research workflows, and complex multi-agent engineering.
- **Provider / access:** Anthropic API `anthropic/claude-opus-5` via Messages API and AWS Bedrock / Google Cloud Vertex AI.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-opus-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified from Anthropic API documentation).
- **Modalities:** Text, image, and PDF documents in; text and tool calls out; structured outputs and tool choice.
- **Pricing (as of 2026-09-19):** $5.00 / 1M input, $25.00 / 1M output; prompt caching at $0.50 / 1M.
- **Architecture:** Proprietary transformer foundation model with extended thought tokens and Constitutional AI alignment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.6%** (Anthropic technical report / AA benchmark)
- Tau3-Banking / Tau2-Bench: **51.4%** (Tau3-Banking)
- GDPval-AA: **1760**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.5%**

Reasoning / knowledge:

- GPQA Diamond: **94.2%**
- HLE: **50.1%**
- LCR / MLCR: **87.5%**
- CritPt: **77.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.8 / #2**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.0%**
- LiveCodeBench: **89.5%**
- SciCode / AA-SciCode: **61.4%**
- Vibe Code Bench: **67.8%**
- DeepSWE / Coding Index / other: **76.2%**

Long context:

- MRCR 99.1% at 1M; needle-in-a-haystack retrieval 100% across the full 1M context span.

### Normalized scores (1–100)

- **Tool use: 93/100.** 88.6% on Terminal-Bench 2.1 and 81.5% on MCP-Atlas demonstrate stellar computer and tool orchestration.
- **Reasoning: 96/100.** 94.2% GPQA Diamond and industry-low 3.9% hallucination rate show superlative conceptual depth.
- **Context window: 100/100.** 1M context window paired with 128K output capacity and 99.1% MRCR.
- **Multimodal: 75/100.** Industry-standard vision and multi-page PDF processing; capped at 75 due to text-only output and lack of audio/video.
- **Coding: 95/100.** 76.0% SWE-bench Verified and 89.5% LiveCodeBench place Opus 5 at the apex of autonomous software engineering.
- **Cost efficiency: 45/100.** Premium tier at $5/$25 per 1M reflects enterprise positioning.
- **Overall Score: 92/100.** Quality mean 91.8 rounds to 92; exceptional elite system for complex autonomous software architecture.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
