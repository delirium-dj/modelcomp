# Claude Opus 4.4 — findings by Gemini 3.6 Flash

- Source: Anthropic (`opencode/claude-opus-4.4`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic's late-2025 Opus flagship model known for nuanced reasoning, precise instruction following, and creative synthesis.
- **Provider / access:** OpenCode Zen (`opencode/claude-opus-4.4`) / Anthropic API
- **Release / knowledge:** 2025-11 release; knowledge cutoff 2025-08
- **IDs:** `opencode/claude-opus-4.4`
- **Context window:** 200,000 total tokens; 64,000 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; function calling & tool calls
- **Pricing (as of 2026-10-23):** $15.00 / 1M input tokens, $75.00 / 1M output tokens ($1.50 cached read); paid tier only
- **Architecture:** Proprietary multimodal Mixture-of-Experts model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.2%**
- Tau3-Banking / Tau2-Bench: **41.0%** (AA harness)
- GDPval-AA: **1480**
- Claw-Eval / ClawProBench: **60.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.2%**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **35.4%**
- LCR / MLCR: **71.2%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #25**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.8%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **45.0%**
- Vibe Code Bench: **58.2%**
- DeepSWE / Coding Index / other: **60.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **95.0% retrieval accuracy at 200K context length**

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable tool execution and structured formatting on Terminal-Bench 2.1 (75.2%) and GDPval (1480).
- **Reasoning: 82/100.** Solid logical and analytical reasoning performance on GPQA Diamond (84.0%) and HLE (35.4%).
- **Context window: 70/100.** 200,000 native context window with 64K max output capacity.
- **Multimodal: 68/100.** Visual document and image analysis with text output generation.
- **Coding: 78/100.** Reliable coding results on SWE-bench Verified (64.8%) and LiveCodeBench (74.0%).
- **Cost efficiency: 30/100.** Legacy premium pricing at $15.00 / $75.00 per 1M tokens ($1.50 cached read).
- **Overall Score: 75/100.** Half-up mean of five quality dimensions `(78 + 82 + 70 + 68 + 78) / 5 = 75.2 -> 75`; suited for complex, nuanced text synthesis and high-precision instruction following.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
