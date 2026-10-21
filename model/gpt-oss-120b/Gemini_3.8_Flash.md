# GPT-OSS 120B — findings by Gemini 3.8 Flash

- Source: OpenAI/GPT-OSS 120B (`openai/gpt-oss-120b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's 117B parameter open-weights Mixture-of-Experts reasoning model (5.1B active parameters) under Apache 2.0 license, engineered for single 80GB GPU execution with variable-effort chain-of-thought reasoning and tool calling.
- **Provider / access:** OpenAI API (`gpt-oss-120b`), OpenRouter (`openai/gpt-oss-120b`), Together AI, OpenCode Zen (`opencode/gpt-oss-120b`), and open weights on Hugging Face.
- **Release / knowledge:** August 2025 release; Apache 2.0 permissive license.
- **IDs:** `openai/gpt-oss-120b`, `opencode/gpt-oss-120b`.
- **Context window:** 131,072 tokens (128K context window).
- **Modalities:** Text input and text output; Python code execution sandbox integration, function calling, and structured JSON outputs.
- **Pricing (as of 2026-10-21):** Hosted API ~$0.03 - $0.15 / 1M input tokens, ~$0.17 - $0.60 / 1M output tokens; free self-hosting via Apache 2.0 weights.
- **Architecture:** 117B total / 5.1B active parameters MoE (36 layers, alternating dense and banded-sparse attention layers, native MXFP4 quantization support).

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail: **67.8%** (High reasoning effort) / Tau-Bench Airline: **49.2%**
- Tau2-Bench: **65.8%** (multi-turn tool execution)
- Terminal-Bench 2.0: **18.7% - 22.0%** (Terminus-2 and mini-SWE-agent evaluations)
- Codeforces Elo: **2463** (no tools) / **2622** (with Python/terminal tools)
- GDPval-AA: **1050**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.1%** (no tools, high reasoning effort) / **80.9%** (with tools)
- Humanity's Last Exam (HLE): **14.9%** (no tools) / **19.0%** (with tools)
- AIME 2024: **95.8%** (no tools) / **96.6%** (with tools)
- AIME 2025: **92.5%** (no tools) / **97.9%** (with tools)
- MMLU / MMLU-Pro: **90.0% / 80.8%**
- Artificial Analysis Intelligence Index: **60.5**

Coding:

- SWE-bench Verified: **62.4%** (resolved at high reasoning effort)
- LiveCodeBench v6: **78.6% - 83.2%** (uncontaminated contest programming)
- SciCode: **38.9%** (scientific and numerical computational code)
- Aider Polyglot: **44.4%** (multi-language repository refactoring)

Long context:

- MRCR / RULER (128K window): **94.2%** retrieval fidelity across 131,072 tokens with dense/banded-sparse attention stability.

### Normalized scores (1–100)

- **Tool use: 70/100.** Reliable function calling and Python execution with 67.8% Tau-Bench Retail and 2622 tool-augmented Codeforces Elo; capped by 18.7-22.0% Terminal-Bench scores in raw shell environments.
- **Reasoning: 82/100.** Outstanding mathematical problem-solving with 95.8% AIME 2024 and 80.1% GPQA Diamond; capped by 19.0% on Humanity's Last Exam.
- **Context window: 56/100.** Native 131,072-token window; calibrated accurately within the 100K-200K rubric tier (50-64).
- **Multimodal: 15/100.** Text-only input and output architecture without native vision, image, or audio modalities.
- **Coding: 72/100.** Capable 62.4% SWE-bench Verified and 78.6%-83.2% LiveCodeBench; capped by moderate performance on multi-language refactoring suites (44.4% Aider).
- **Cost efficiency: 97/100.** Fully permissive Apache 2.0 license for local single-GPU deployment combined with dirt-cheap hosted rates ($0.03-$0.15 / $0.17-$0.60 per 1M).
- **Overall Score: 59/100.** Quality arithmetic mean of the 5 core quality dimensions ((70 + 82 + 56 + 15 + 72) / 5 = 59.0). Exceptional open-weights reasoning and mathematical engine.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing OpenAI official model card documentation (arXiv:2508.10925), Hugging Face repository specifications, and independent evaluations from Artificial Analysis and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
