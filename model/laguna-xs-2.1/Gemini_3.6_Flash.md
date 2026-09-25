# Laguna XS 2.1 — findings by Gemini 3.6 Flash

- Source: Poolside (`poolside/laguna-xs-2.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B open MoE model designed for lightweight agentic coding, terminal automation, and code editing.
- **Provider / access:** Hugging Face, NVIDIA NIM & OpenRouter (`poolside/laguna-xs-2.1`). OpenMDW-1.1 license.
- **Release / knowledge:** 2026-07-02 release; 2026-06 knowledge cutoff.
- **IDs:** `poolside/laguna-xs-2.1`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via Poolside release docs.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.10 input / $0.30 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 33B total params, 3B active MoE (OpenMDW-1.1)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **66.2%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **18.2%**
- LCR / MLCR: **73.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #28**
- Omniscience Accuracy / Hallucination Rate: **79.2% / 7.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.9%** (SWE-bench Verified)
- LiveCodeBench: **81.4%**
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **76.8%**
- DeepSWE / Coding Index / other: **79.5**

Long context:

- MRCR 256k window retrieval accuracy: **98.2%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable tool call execution for local agent workflows.
- **Reasoning: 76/100.** Moderate general reasoning performance (76.0% GPQA Diamond).
- **Context window: 88/100.** 256k token context window with reliable retrieval.
- **Multimodal: 15/100.** Text-only model; 15/100 per scoring methodology.
- **Coding: 86/100.** Strong coding capabilities for a compact 3B active parameter MoE (70.9% SWE-bench Verified).
- **Cost efficiency: 95/100.** Extremely low hosted cost ($0.10/$0.30 per 1M) and free open weights.
- **Overall Score: 69/100.** Efficient, code-specialized open-weights model for local developer toolchains.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
