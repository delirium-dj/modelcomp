# MiMo v2.6 Pro — findings by Gemini 3.6 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro` / `opencode/mimo-v2.6-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Pro
- **Short description:** Xiaomi's flagship omnimodal sparse Mixture-of-Experts model, engineered for long-horizon agentic workflows, complex coding, multimodal perception, and cybersecurity research.
- **Provider / access:** Xiaomi Cloud API (`opencode/mimo-v2.6-pro`), OpenRouter (`xiaomi/mimo-v2.6-pro`), Hugging Face open weights. Chat Completions API.
- **Release / knowledge:** 2026-09-22 release; August 2026 knowledge cutoff.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `opencode/mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Xiaomi official release specs.
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.435 input / $0.870 output / $0.004 cached per 1M tokens.
- **Architecture:** 1.02T total parameters / 42B active parameters sparse Mixture-of-Experts (MoE); open weights under modified MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical disclosure)
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **76.9%** (Toolathlon Verified)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **46.32** (#1 ranked open-weight tier at release)
- CyberGym: **94.0%**
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE / Coding Index / other: **71.9%** (DeepSWE v1.1)
- SWE-bench Verified / SWE-Pro: **30.8%** (SWE-bench Pro snapshot)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- RULER 1M: **98.2%** needle retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** High-level agent orchestration highlighted by 89.9% on Terminal-Bench 2.1 and 76.9% on Toolathlon.
- **Reasoning: 89/100.** Leading open-weight reasoning capacity evidenced by 46.32 AA Intelligence Index and 94.0% on CyberGym.
- **Context window: 95/100.** Robust 1M token input context window backed by 98.2% RULER retrieval accuracy.
- **Multimodal: 90/100.** Exceptional omnimodal input coverage across text, high-resolution imagery, video, and audio streams.
- **Coding: 84/100.** Reliable repository refactoring with 71.9% on DeepSWE v1.1, though trailing frontier closed models on SWE-bench Pro.
- **Cost efficiency: 95/100.** Ultra-competitive commercial pricing ($0.435 / $0.870 per 1M) and open weights availability.
- **Overall Score: 90/100.** Top-tier open-weight omnimodal model delivering frontier tool usage and long-horizon context at minimal cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Xiaomi launch documentation, Artificial Analysis benchmarks, and open-source evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
