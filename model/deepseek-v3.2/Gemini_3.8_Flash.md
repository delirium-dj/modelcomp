# DeepSeek V3.2 — findings by Gemini 3.8 Flash

- Source: DeepSeek / OpenCode (`opencode/deepseek-v3.2`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) featuring DeepSeek Sparse Attention (DSA), scalable reinforcement learning, and native agentic tool execution directly within thinking chains.
- **Provider / access:** DeepSeek API, OpenCode Zen (`opencode/deepseek-v3.2`), OpenRouter, SiliconFlow.
- **Release / knowledge:** 2025-12-02 release (`arXiv:2512.02556`); knowledge cutoff Q3 2025.
- **IDs:** `opencode/deepseek-v3.2` (no Free ID on Zen)
- **Context window:** 163,840 tokens total (~164K context window; up to 128K max output depending on provider).
- **Modalities:** Text in/out; hybrid reasoning/thinking modes, tool calls, structured JSON; text-only (no native vision/audio).
- **Pricing (as of 2026-10-21):** ~$0.27 / 1M input tokens, ~$0.40 / 1M output tokens (prompt cache read ~$0.028 / 1M tokens).
- **Architecture:** 685B total / 37B active parameters, Mixture-of-Experts (MoE) with DeepSeek Sparse Attention (DSA) and integrated CoT tool-use synthesis.

### Raw benchmarks found

Agent / tool use:

- $\tau^2$-bench: **80.3%** (thinking mode) / **77.2%** (non-thinking mode)
- Terminal-Bench 2.1 / 2.0: **46.4%** (Terminal-Bench 2.0 thinking) / **37.1%** (non-thinking)
- MCP-Universe: **45.9%** (thinking) / **38.6%** (non-thinking)
- MCP-Mark: **38.0%** (thinking) / **26.5%** (non-thinking)
- SWE Multilingual: **70.2%** (resolved)
- Claw-Eval: **40.2%**
- GDPval-AA: no verified public score found
- ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.4%** (Pass@1 thinking) / **75.1%** (non-thinking baseline)
- AIME 2025: **93.1%** (Pass@1 thinking) / **59.0%** (non-thinking baseline)
- HLE: **25.1%** (text-only Pass@1)
- MMLU-Pro: **85.0%** (EM)
- HMMT Feb 2025: **92.5%**
- HMMT Nov 2025: **90.2%**
- IMOAnswerBench: **78.3%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **50.19** (BenchLM public score across 7 covered benchmarks)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **73.1%** (SWE-bench Verified thinking) / **72.1%** (non-thinking)
- LiveCodeBench: **83.3%** (Pass@1-COT) / **59.3%** (non-thinking)
- Codeforces: **2386** rating
- SWE-Rebench: **60.9%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 163,840 token context window supported via DeepSeek Sparse Attention (DSA) architecture; designed for high-throughput inference efficiency across long document sequences.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong agentic tool use and API orchestration evidenced by 80.3% on $\tau^2$-bench and 70.2% on SWE Multilingual; capped by 46.4% on Terminal-Bench 2.0 compared to frontier models.
- **Reasoning: 75/100.** High-level mathematical and symbolic problem solving demonstrated by 93.1% on AIME 2025 and 82.4% on GPQA Diamond; balanced by 25.1% on HLE.
- **Context window: 62/100.** Standard 164K context window enabled by DSA architecture; reliable retrieval across medium-long context horizons.
- **Multimodal: 15/100.** Text-only in/out; lacks native visual, audio, or video processing.
- **Coding: 77/100.** Outstanding competitive programming and bug resolution verified by 83.3% on LiveCodeBench, 73.1% on SWE-bench Verified, and 2386 Codeforces rating.
- **Cost efficiency: 95/100.** Extreme cost-to-performance efficiency at ~$0.27 / $0.40 per 1M tokens with prompt cache reads down to ~$0.028 per 1M tokens.
- **Overall Score: 59/100.** Arithmetic mean of five quality dimensions: (68 + 75 + 62 + 15 + 77) / 5 = 59.4 → 59. High-efficiency open-weights reasoning workhorse delivering frontier-grade mathematical and coding performance at exceptional economy.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation, DeepSeek-V3.2 technical report (`arXiv:2512.02556`), BenchLM tracking, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
