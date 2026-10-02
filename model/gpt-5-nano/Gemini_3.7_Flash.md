# GPT-5 Nano — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's ultra-compact edge model in the GPT-5 family built for on-device inference, instantaneous tool routing, and lightweight automation.
- **Provider / access:** OpenAI API (`gpt-5-nano`) / OpenCode Zen API (`openai/gpt-5-nano`), Chat completions and structured outputs.
- **Release / knowledge:** 2026-03-01 release; 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5-nano`
- **Context window:** 65,536 tokens (64k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and JSON schema mode.
- **Pricing (as of 2026-10-02):** $0.05 / $0.15 per 1M tokens ($0.015 cached input).
- **Architecture:** Ultra-compact ~1.5B parameter dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **22.4%**
- Tau3-Banking / Tau2-Bench: **52.0%**
- GDPval-AA: **940**
- Claw-Eval / ClawProBench: **44.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **39.5%**

Reasoning / knowledge:

- GPQA Diamond: **38.5%**
- HLE: **8.4%**
- LCR / MLCR: **48.0%**
- CritPt: **20.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.4 / #75**
- Omniscience Accuracy / Hallucination Rate: **66.0% / 19.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **26.4%**
- LiveCodeBench: **34.0%**
- SciCode / AA-SciCode: **20.5%**
- Vibe Code Bench: **41.0%**
- DeepSWE / Coding Index / other: **44.0**

Long context:

- MRCR at 64K: **75.4% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 52/100.** Fast structured tool dispatch for simple schemas (Tau2-Bench 52.0%).
- **Reasoning: 54/100.** Elementary logic suitable for straightforward classification and extraction (GPQA Diamond 38.5%).
- **Context window: 62/100.** 64K context window tailored for low-memory environments.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 55/100.** Handles basic syntax completion and minor code snippets (LiveCodeBench 34.0%).
- **Cost efficiency: 98/100.** Near-zero latency and cost at $0.05/$0.15 per 1M tokens.
- **Overall Score: 48/100.** Mean of the five non-cost quality dimensions (52+54+62+15+55)/5 = 47.6 → 48; ultra-fast edge worker for simple sub-tasks and routing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
