# Qwen 3.8 325B — findings by Gemini 3.6 Flash

- Source: Alibaba (`opencode/qwen-3.8-325b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B
- **Short description:** Alibaba's open-weights (Apache 2.0) 325B MoE frontier model designed for high-throughput reasoning, multilingual knowledge, and agentic coding.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.8-325b`) / Alibaba Model Studio
- **Release / knowledge:** 2026-09 release; knowledge cutoff 2026-05
- **IDs:** `opencode/qwen-3.8-325b`
- **Context window:** 262,144 total tokens; 32,768 max output tokens (verified via OpenCode Zen spec)
- **Modalities:** Text, image input; text output; function calling & tool calls
- **Pricing (as of 2026-10-23):** $0.60 / 1M input tokens, $2.40 / 1M output tokens ($0.12 cached read); open weights (Apache 2.0)
- **Architecture:** Open weights (Apache 2.0), 325B total / 22B active Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.2%**
- Tau3-Banking / Tau2-Bench: **45.0%** (AA harness)
- GDPval-AA: **1550**
- Claw-Eval / ClawProBench: **63.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **53.5%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%**
- HLE: **39.8%**
- LCR / MLCR: **75.2%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **55 / #14**
- Omniscience Accuracy / Hallucination Rate: **90.2% / 4.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.5%**
- LiveCodeBench: **79.8%**
- SciCode / AA-SciCode: **49.5%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **66.2%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **96.0% retrieval accuracy at 262K context length**

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool interaction and agentic workflow execution on Terminal-Bench 2.1 (79.2%) and GDPval (1550).
- **Reasoning: 86/100.** High-level reasoning performance on GPQA Diamond (87.0%) and HLE (39.8%).
- **Context window: 75/100.** 262,144 native context window with 32K max output capacity.
- **Multimodal: 68/100.** Text and image input processing with text output generation.
- **Coding: 84/100.** Solid coding benchmarks with 70.5% on SWE-bench Verified and 79.8% on LiveCodeBench.
- **Cost efficiency: 90/100.** Highly competitive open-weights cost efficiency at $0.60 / $2.40 per 1M tokens ($0.12 cached read).
- **Overall Score: 79/100.** Half-up mean of five quality dimensions `(84 + 86 + 75 + 68 + 84) / 5 = 79.4 -> 79`; recommended for open-weights deployment requiring strong reasoning and coding capabilities.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
