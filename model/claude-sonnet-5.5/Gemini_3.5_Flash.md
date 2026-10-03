# Claude Sonnet 5.5 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's everyday-workhorse Sonnet-class model, offering state-of-the-art thinking, active reasoning effort control, and excellent coding proficiency.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-5.5`
- **Release / knowledge:** 2026-09-28; knowledge cutoff around 2026
- **IDs:** `anthropic/claude-sonnet-5.5`
- **Context window:** 1M context window (1,048,576 tokens)
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at $2.00 input / $10.00 output per 1M tokens
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **93.1%**
- Tau3-Banking / Tau2-Bench: **90.4%**
- GDPval-AA: **1890**
- Claw-Eval / ClawProBench: **91.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **95.2%**

Reasoning / knowledge:

- GPQA Diamond: **92.8%**
- HLE: **64.5%**
- LCR / MLCR: **97.6%**
- CritPt: **92.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #3**
- Omniscience Accuracy / Hallucination Rate: **96.5% / 0.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.2%**
- LiveCodeBench: **87.6%**
- SciCode / AA-SciCode: **67.4%**
- Vibe Code Bench: **90.5%**
- DeepSWE / Coding Index / other: **83.1%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.7% at 1M context.

### Normalized scores (1–100)

- **Tool use: 95/100.** Extremely advanced tool selection and sequential logic, proving highly reliable on Terminal-Bench.
- **Reasoning: 95/100.** Premier cognitive depth with effort control, achieving outstanding scores on GPQA Diamond.
- **Context window: 100/100.** Full 1M context window supported with 99.7% retrieval accuracy.
- **Multimodal: 90/100.** Rich visual and image ingestion, capped at text output.
- **Coding: 92/100.** State-of-the-art coding and debugging performance, ideal for agentic engineering workflows.
- **Cost efficiency: 75/100.** highly competitive cost-to-performance ratio ($2.00 input / $10.00 output per 1M tokens).
- **Overall Score: 94/100.** Stellar frontier model, representing an incredible sweet spot of elite intelligence, high speed, and affordable pricing.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
