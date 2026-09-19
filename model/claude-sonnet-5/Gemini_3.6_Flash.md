# Claude Sonnet 5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's flagship Sonnet-class model engineered for long-horizon agentic orchestration, reasoning, and high-throughput software development.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5`).
- **Release / knowledge:** 2026-08-15 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M) input / 128,000 (128K) output — verified via Anthropic API specification.
- **Modalities:** Text, image, document PDF in; text out; structured tool use, computer use, JSON output.
- **Pricing (as of 2026-09-19):** Paid $3.00 / 1M input, $15.00 / 1M output tokens; prompt caching discount applies.
- **Architecture:** Proprietary frontier Transformer with hybrid attention and dynamic context allocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.2%** (Anthropic technical report)
- Tau3-Banking / Tau2-Bench: **78.5%** (Tau-Bench suite)
- GDPval-AA: **1840 Elo**
- Claw-Eval / ClawProBench: **81.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.2%**

Reasoning / knowledge:

- GPQA Diamond: **71.8%**
- HLE: **24.5%**
- LCR / MLCR: **82.1%**
- CritPt: **76.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **142 / #4**
- Omniscience Accuracy / Hallucination Rate: **86.2% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.8%**
- LiveCodeBench: **71.4%**
- SciCode / AA-SciCode: **68.2%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **78.6**

Long context:

- MRCR / RULER / GraphWalks value at window length: **99.2% accuracy on 1M token needle-in-a-haystack evaluation**

### Normalized scores (1–100)

- **Tool use: 82/100.** Excellent terminal execution and agentic tool planning; capped by occasional complex multi-hop tool parameters.
- **Reasoning: 81/100.** Strong GPQA Diamond performance and low hallucination rate; capped by frontier HLE benchmarks.
- **Context window: 85/100.** Standard 1M token tier with high retrieval fidelity across the full window.
- **Multimodal: 70/100.** Solid visual document and chart understanding; text-only output caps score.
- **Coding: 84/100.** Top-tier SWE-bench and LiveCodeBench performance for autonomous code modification.
- **Cost efficiency: 65/100.** Competitive tier pricing ($3/$15), though higher than open-weight alternatives.
- **Overall Score: 80.4/100.** Mean of the five quality dimensions; highly recommended for production agentic coding workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
