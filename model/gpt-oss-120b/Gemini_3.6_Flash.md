# GPT-OSS 120B — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's 120B parameter open-weights model designed for high-efficiency local deployment, reasoning, and developer tooling.
- **Provider / access:** HuggingFace (`openai/gpt-oss-120b`), OpenCode Zen (`opencode/gpt-oss-120b`). Chat Completions API.
- **Release / knowledge:** 2025-10 release; knowledge cutoff September 2025.
- **IDs:** `openai/gpt-oss-120b`, `opencode/gpt-oss-120b`
- **Context window:** 131,072 tokens total (128K context window); verified via open repository configuration.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** Open weights (Apache 2.0); API provider rates ~$0.05 / 1M input, $0.15 / 1M output.
- **Architecture:** Open-weights dense 120B parameter transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **30.5%**
- Tau3-Banking / Tau2-Bench: **64.0%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **46.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.0%**
- HLE: **12.5%**
- LCR / MLCR: **58.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **71 / #28**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 14.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.0%**
- LiveCodeBench: **36.5%**
- SciCode / AA-SciCode: **25.0%**
- Vibe Code Bench: **61.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 97.5% needle retrieval accuracy across native 128K context window.

### Normalized scores (1–100)

- **Tool use: 71/100.** Reliable function execution performance with 64.0% Tau-Bench accuracy.
- **Reasoning: 77/100.** Solid analytical reasoning capacity backed by 55.0% GPQA Diamond accuracy.
- **Context window: 58/100.** Standard 128K context window with high recall across mid-length inputs.
- **Multimodal: 15/100.** Text-only modality support (no native vision or audio processing).
- **Coding: 71/100.** Dependable open-weight coding capacity with 41.0% SWE-bench Verified performance.
- **Cost efficiency: 96/100.** Ultra-low self-hosting and inference costs across open platforms.
- **Overall Score: 58/100.** Arithmetic mean of non-cost dimensions (71 + 77 + 58 + 15 + 71) / 5 = 58.4 -> 58. Great low-cost open option for self-hosted text agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
