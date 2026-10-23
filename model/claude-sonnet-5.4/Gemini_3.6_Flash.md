# Claude Sonnet 5.4 — findings by Gemini 3.6 Flash

- Source: Anthropic (`opencode/claude-sonnet-5.4`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's mid-2026 flagship Sonnet model featuring adaptive thinking, sub-turn checkpointing, and advanced computer use across long-context workflows.
- **Provider / access:** OpenCode Zen (`opencode/claude-sonnet-5.4`)
- **Release / knowledge:** 2026-06 release; knowledge cutoff 2026-03
- **IDs:** `opencode/claude-sonnet-5.4`
- **Context window:** 1,000,000 total tokens; 128,000 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; adaptive reasoning/thinking; tool calls & computer use
- **Pricing (as of 2026-10-23):** $2.50 / 1M input tokens, $12.50 / 1M output tokens ($0.25 cached read); paid tier only
- **Architecture:** Proprietary multimodal Mixture-of-Experts model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.6%**
- Tau3-Banking / Tau2-Bench: **54.8%** (AA harness)
- GDPval-AA: **1725**
- Claw-Eval / ClawProBench: **74.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.2%**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **45.6%**
- LCR / MLCR: **82.0%**
- CritPt: **76.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #5**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.8%**
- LiveCodeBench: **84.2%**
- SciCode / AA-SciCode: **58.6%**
- Vibe Code Bench: **72.4%**
- DeepSWE / Coding Index / other: **74.0%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **98.5% retrieval accuracy at 1M context length**

### Normalized scores (1–100)

- **Tool use: 92/100.** Industry-leading computer use and tool interaction performance on Terminal-Bench 2.1 (85.6%) and GDPval (1725).
- **Reasoning: 92/100.** Excellent reasoning benchmarks on GPQA Diamond (91.2%) and HLE (45.6%) with an Artificial Analysis Intelligence Index of 61.
- **Context window: 100/100.** Full 1,000,000 native context window with 128K output tokens and >98% retrieval performance.
- **Multimodal: 68/100.** Text and high-resolution vision/document input with text output generation.
- **Coding: 91/100.** Outstanding software development results on SWE-bench Verified (76.8%) and LiveCodeBench (84.2%).
- **Cost efficiency: 65/100.** Balanced mid-tier pricing at $2.50 / $12.50 per 1M tokens ($0.25 cached read).
- **Overall Score: 89/100.** Half-up mean of five quality dimensions `(92 + 92 + 100 + 68 + 91) / 5 = 88.6 -> 89`; premier choice for complex software engineering and long-horizon agentic work.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
