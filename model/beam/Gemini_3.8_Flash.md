# Beam — findings by Gemini 3.8 Flash

- Source: Reflection AI/Beam (`reflection-ai/beam`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's 501.3B parameter open-weights sparse Mixture-of-Experts foundation model (23.4B active parameters per token) under Apache 2.0 license, engineered for software engineering agents, 1M context repository ingestion, and token-frugal reasoning.
- **Provider / access:** OpenCode Zen (`opencode/beam`, `opencode/beam-free`), Hugging Face (`reflection-ai/beam`), Ollama, vLLM, and SGLang.
- **Release / knowledge:** 2026 release; Apache 2.0 open-weights license.
- **IDs:** `opencode/beam`, `opencode/beam-free`, `reflection-ai/beam`.
- **Context window:** 1,048,576 tokens total (1M native context window), with up to 64,000 maximum output tokens.
- **Modalities:** Text and code input; text, code, structured JSON output, and grammar-based tool calls; configurable reasoning effort (`low`, `medium`, `high`, `xhigh`, `max`) with cross-turn `preserve_thinking`.
- **Pricing (as of 2026-10-17):** Free ($0.00) promotional tier on OpenCode Zen (`opencode/beam-free`); free self-hosting under Apache 2.0.
- **Architecture:** 501.3B total / 23.4B active parameters per token sparse MoE (52 layers: 3 dense + 49 MoE layers, 256 experts with top-8 routing, Gated GQA, and Sliding Window Attention).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (across BF16, FP8, and NVFP4 numeric variants)
- Tau-bench / Tau3-Banking: **38.0% - 42.0%** (multi-turn tool calling under strict constraints)
- DeepSWE v1.1: **44.4%**
- GDPval-AA: **1,450** Elo
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (graduate-level science and logic reasoning)
- Humanity's Last Exam (HLE): **26.0%** (text-only, no tools)
- MMLU-Pro: **78.5%**
- Artificial Analysis Intelligence Index: **48.0**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 4.8%**

Coding:

- SWE-bench Verified: **80.9% - 81.6%** (repository-level bug resolution)
- SWE-bench Pro: **77.2%** (Pro v2-Hard) / **65.5% - 66.1%** (Pro v1)
- LiveCodeBench: **82.0%** pass@1 (uncontaminated competitive programming)
- SciCode / AA-SciCode: **46.5%**

Long context:

- MRCR / RULER (1M window): **96.5%** retrieval fidelity across 1,048,576 tokens leveraging Gated GQA and sliding window attention.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong terminal execution and CLI navigation with 80.1% on Terminal-Bench 2.1 and 44.4% on DeepSWE; capped by mid-tier performance on conversational API suites (Tau3 ~40%).
- **Reasoning: 80/100.** High STEM problem-solving with 90.5% GPQA Diamond and token-efficient reasoning budgeting; capped by 26.0% on Humanity's Last Exam.
- **Context window: 96/100.** Full 1,048,576-token native context window with 64K maximum output, handling entire enterprise repositories in-context.
- **Multimodal: 15/100.** Pure text-and-code architecture without native image, vision, or audio processing modalities.
- **Coding: 84/100.** Impressive software engineering capability with 80.9%-81.6% SWE-bench Verified and 77.2% SWE-bench Pro v2-Hard.
- **Cost efficiency: 100/100.** Free promotional tier ($0.00) available on OpenCode Zen alongside fully permissive Apache 2.0 open weights.
- **Overall Score: 70/100.** Exceptional open-weights coding and reasoning workhorse, delivering near-frontier SWE-bench capabilities over massive 1M contexts with zero token cost on Zen.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public internet research synthesizing Reflection AI model documentation, Hugging Face repository releases, and benchmark tracking from Artificial Analysis and DataCurve; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
