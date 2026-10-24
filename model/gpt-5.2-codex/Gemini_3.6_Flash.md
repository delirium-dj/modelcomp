# GPT-5.2 Codex — findings by Gemini 3.6 Flash

- Source: OpenAI (`opencode/gpt-5.2-codex`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's specialized agentic coding model featuring native context compaction, fast code generation, and multi-file repository editing capabilities.
- **Provider / access:** OpenCode Zen (`opencode/gpt-5.2-codex`) / OpenAI API
- **Release / knowledge:** 2026-02 release; knowledge cutoff 2025-12
- **IDs:** `opencode/gpt-5.2-codex`
- **Context window:** 400,000 total tokens; 272,000 max input; 128,000 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; native context compaction; function calling & tool calls
- **Pricing (as of 2026-10-23):** $1.75 / 1M input tokens, $14.00 / 1M output tokens ($0.175 cached read); paid tier only
- **Architecture:** Proprietary code-optimized Mixture-of-Experts model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%**
- Tau3-Banking / Tau2-Bench: **49.2%** (AA harness)
- GDPval-AA: **1620**
- Claw-Eval / ClawProBench: **66.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.5%**

Reasoning / knowledge:

- GPQA Diamond: **87.5%**
- HLE: **39.0%**
- LCR / MLCR: **76.0%**
- CritPt: **70.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57 / #10**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.2%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **54.2%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **76.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.5% retrieval accuracy at 400K context length**

### Normalized scores (1–100)

- **Tool use: 88/100.** Outstanding code execution and terminal handling on Terminal-Bench 2.1 (84.0%) and GDPval (1620).
- **Reasoning: 86/100.** Strong structured problem-solving reasoning on GPQA Diamond (87.5%) and HLE (39.0%).
- **Context window: 82/100.** 400,000 native context window with 128K max output headroom and native context compaction.
- **Multimodal: 68/100.** High-fidelity code screenshot and image input processing with text output.
- **Coding: 93/100.** Industry-leading coding benchmark performance with 78.2% on SWE-bench Verified and 86.5% on LiveCodeBench.
- **Cost efficiency: 68/100.** Competitive developer pricing at $1.75 / $14.00 per 1M tokens ($0.175 cached read).
- **Overall Score: 83/100.** Half-up mean of five quality dimensions `(88 + 86 + 82 + 68 + 93) / 5 = 83.4 -> 83`; recommended for high-volume developer agent workflows and multi-file code editing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
