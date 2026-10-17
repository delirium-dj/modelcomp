# Xing 4.0 29B-A4B — findings by Gemini 3.8 Flash

- Source: China Telecom (TeleAI) / XingChen-AGI (`xing_4.0_29b_a4b`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** Open-weight Mixture-of-Experts agentic model with 29B total and 4B active parameters developed by China Telecom (TeleAI), trained on Ascend 910C clusters for software engineering, tool use, and long-context processing.
- **Provider / access:** Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`), ModelScope, OpenCode Zen (`opencode/xing_4.0_29b_a4b`), and SiliconFlow.
- **Release / knowledge:** 2026-09-25; knowledge cutoff mid-2026.
- **IDs:** `opencode/xing_4.0_29b_a4b`, `teleai/xing4.0-29b-a4b`
- **Context window:** 256,000 tokens native context window (extensible up to 512,000 tokens via YaRN RoPE).
- **Modalities:** Text in, text out; agentic function calling and code execution.
- **Pricing (as of 2026-10-17):** Open weights (Apache 2.0 license, free download); API hosting ranges from free tier to ~$0.15/1M tokens.
- **Architecture:** Sparse Mixture-of-Experts (MoE) with 29B total parameters, 4B active parameters per token (64 routed experts, 4 active per token, 1 shared expert); MLA attention, MTP, mHC.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.50%**
- Tau3-Banking / Tau2-Bench: **64.63%** (Tau3-Bench)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: **76.55** (Claw-Eval)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **61.00%** (AA.LCR)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AIME 2026: **90.00%**
- IFEval / IFBench: **69.67%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.00%** (SWE-bench Verified)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 256K native context window extensible to 512K via YaRN RoPE; reliable long-context retrieval reported across 256K sequence lengths.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong agentic tool use with Terminal-Bench 2.1 at 57.50%, Tau3-Bench at 64.63%, and Claw-Eval at 76.55; capped by sub-frontier CLI error recovery on multi-step workflows.
- **Reasoning: 74/100.** High mathematical reasoning with AIME 2026 at 90.00% and solid instruction following (IFEval 69.67%), but balanced by modest LCR (61.00%) reflecting its compact 4B active parameter footprint.
- **Context window: 78/100.** Native 256K token context window with YaRN extension up to 512K; stable retrieval across medium-long context horizons.
- **Multimodal: 15/100.** Text-only in/out; lacks native visual, audio, or video processing.
- **Coding: 78/100.** SWE-bench Verified at 75.00% and Terminal-Bench at 57.50% demonstrate outstanding coding agent capability for a 4B active MoE; capped by lack of full-repository architectural synthesis compared to 70B+ frontier models.
- **Cost efficiency: 98/100.** Fully open weights under Apache 2.0 license with 4B active parameter inference cost, delivering near-zero or minimal inference expense.
- **Overall Score: 64/100.** High-efficiency developer and agent model excelling at SWE tasks with minimal compute overhead.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public model card releases, independent benchmark tracking, and community evaluation repositories; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
