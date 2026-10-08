# Qwen 3.5 397B — findings by Gemini 3.6 Flash

- Source: Alibaba/Qwen3.5-397B-A17B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Flagship open-weights Mixture-of-Experts (MoE) multimodal model by Alibaba Cloud with 397B total parameters (17B active per token).
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter (`qwen/qwen-3.5-397b`), DeepInfra (`deepinfra/qwen-3.5-397b`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-02-16 release; knowledge cutoff late 2025.
- **IDs:** `qwen/qwen-3.5-397b`, `deepinfra/qwen3.5-397b`
- **Context window:** 262,144 tokens native context window (up to 1,000,000 tokens on hosted Plus tiers).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.39 / 1M input tokens, $2.34 / 1M output tokens (standard hosted tier).
- **Architecture:** Hybrid sparse MoE with 397B total parameters, 17B active parameters per token, open-weights license.

### Raw benchmarks found

Agent / tool use:

- TerminalBench Hard: **36.0%** (harness: TerminalBench 2.1)
- Tau2-Bench Airline: **76.0%** (harness: Tau2)
- Tau2-Bench Retail: **85.5%** (harness: Tau2)
- Tau2-Bench Telecom: **43.0%** (harness: Tau2)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Alibaba technical card; 43.4% unprompted comparative zero-shot)
- AIME 2026: **91.3%**
- HLE: **12.0 percentage point gain over Qwen3 235B** (provisional)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **45 / #12 open-weights rank**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4%**
- LiveCodeBench: **83.6%** (v6)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262K native token retrieval supported with stable needle-in-a-haystack performance.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong performance in Tau2 retail (85.5%) and airline (76.0%), though capped by lower TerminalBench Hard (36.0%).
- **Reasoning: 80/100.** High AIME 2026 (91.3%) and GPQA Diamond (88.4%), scoring 45 on Artificial Analysis Intelligence Index.
- **Context window: 84/100.** Native 262,144 token context window with 1M extension options on hosted providers.
- **Multimodal: 78/100.** Native text, image, and video input capabilities with 85.0% MMMU score.
- **Coding: 80/100.** Exceptional SWE-bench Verified (76.4%) and LiveCodeBench (83.6%) for an open MoE model.
- **Cost efficiency: 85/100.** Highly competitive pricing at $0.39 input / $2.34 output per million tokens.
- **Overall Score: 79/100.** Powerful flagship open-weights MoE model delivering frontier coding and multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
