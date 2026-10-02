# Qwen 3.5 9B — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud (`qwen-3.5-9b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's high-efficiency 9B open-weights model designed for edge inference, local developer tooling, and fast structured tool use.
- **Provider / access:** Alibaba Cloud / OpenCode Zen API (`qwen/qwen-3.5-9b-instruct`), OpenAI-compatible chat completions.
- **Release / knowledge:** 2026-02-18 release; 2025 knowledge cutoff.
- **IDs:** `qwen/qwen-3.5-9b-instruct`
- **Context window:** 131,072 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and JSON mode.
- **Pricing (as of 2026-10-02):** $0.10 / $0.20 per 1M tokens ($0.03 cached input); open-weights available.
- **Architecture:** Dense 9.2B parameter transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%**
- Tau3-Banking / Tau2-Bench: **68.2%**
- GDPval-AA: **1120**
- Claw-Eval / ClawProBench: **62.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.4%**
- HLE: **21.2%**
- LCR / MLCR: **69.5%**
- CritPt: **36.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.8 / #32**
- Omniscience Accuracy / Hallucination Rate: **79.5% / 10.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.8%**
- LiveCodeBench: **54.2%**
- SciCode / AA-SciCode: **36.4%**
- Vibe Code Bench: **64.5%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- MRCR at 128K: **85.4% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool selection and schema compliance for a lightweight 9B model (Tau2-Bench 68.2%).
- **Reasoning: 80/100.** Competitive STEM reasoning (GPQA Diamond 58.4%, Intelligence Index 75.8); constrained by small parameter scale.
- **Context window: 76/100.** 128K context window with good 85.4% retrieval stability.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 82/100.** Impressive coding performance for a compact model (SWE-bench Verified 46.8%, LiveCodeBench 54.2%).
- **Cost efficiency: 96/100.** Outstanding value at $0.10/$0.20 per 1M tokens with open-weight self-hosting options.
- **Overall Score: 67/100.** Mean of the five non-cost quality dimensions (80+80+76+15+82)/5 = 66.6 → 67; excellent lightweight, edge-friendly local coding and tool agent.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
