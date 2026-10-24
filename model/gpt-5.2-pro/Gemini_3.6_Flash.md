# GPT-5.2 Pro — findings by Gemini 3.6 Flash

- Source: OpenAI (`opencode/gpt-5.2-pro`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute frontier reasoning model designed for research-grade multi-step problems, advanced mathematics, and complex scientific analysis.
- **Provider / access:** OpenCode Zen (`opencode/gpt-5.2-pro`) / OpenAI API
- **Release / knowledge:** 2026-03 release; knowledge cutoff 2026-01
- **IDs:** `opencode/gpt-5.2-pro`
- **Context window:** 400,000 total tokens; 128,000 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; deep chain-of-thought reasoning; tool calls supported
- **Pricing (as of 2026-10-23):** $21.00 / 1M input tokens, $168.00 / 1M output tokens ($2.10 cached read); paid tier only
- **Architecture:** High-compute proprietary Mixture-of-Experts reasoning model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.2%**
- Tau3-Banking / Tau2-Bench: **50.4%** (AA harness)
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: **68.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **56.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.8%**
- HLE: **48.2%**
- LCR / MLCR: **84.5%**
- CritPt: **81.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62 / #4**
- Omniscience Accuracy / Hallucination Rate: **95.1% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.5%**
- LiveCodeBench: **80.8%**
- SciCode / AA-SciCode: **61.2%**
- Vibe Code Bench: **66.5%**
- DeepSWE / Coding Index / other: **70.2%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.8% retrieval accuracy at 400K context length**

### Normalized scores (1–100)

- **Tool use: 85/100.** Effective tool use and execution capabilities on Terminal-Bench 2.1 (81.2%) and Tau3-Banking (50.4%).
- **Reasoning: 94/100.** Frontier mathematical and scientific reasoning capability demonstrated on GPQA Diamond (92.8%) and HLE (48.2%).
- **Context window: 82/100.** 400,000 native context window with 128K max output headroom.
- **Multimodal: 68/100.** High-fidelity visual document and vision input with text output generation.
- **Coding: 87/100.** Strong software problem solving with 72.5% on SWE-bench Verified and 61.2% on SciCode.
- **Cost efficiency: 20/100.** Premium high-compute pricing at $21.00 / $168.00 per 1M tokens ($2.10 cached read).
- **Overall Score: 83/100.** Half-up mean of five quality dimensions `(85 + 94 + 82 + 68 + 87) / 5 = 83.2 -> 83`; recommended for high-stakes scientific, mathematical, and research-grade problems.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
