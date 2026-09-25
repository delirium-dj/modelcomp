# Muse Glimmer 30B — findings by Gemini 3.6 Flash

- Source: Meta (`meta/muse-glimmer-30b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's 30B open-weights dense multimodal model with a dedicated perception encoder for local agentic workflows.
- **Provider / access:** Hugging Face, Ollama & OpenRouter (`meta/muse-glimmer-30b`). Apache 2.0 license.
- **Release / knowledge:** 2026-08-10 release; 2026-07 knowledge cutoff.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 tokens input / 8,192 max output — verified via Meta release docs.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.15 input / $0.45 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 30B dense params + 1.8B perception encoder (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.4%**
- Tau3-Banking / Tau2-Bench: **61.5%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.5%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **83.5%**
- HLE: **21.0%**
- LCR / MLCR: **74.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **77 / #24**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%** (SWE-bench Pro)
- LiveCodeBench: **77.0%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **72.1%**
- DeepSWE / Coding Index / other: **74.5**

Long context:

- MRCR 131k window retrieval accuracy: **97.6%**

### Normalized scores (1–100)

- **Tool use: 75/100.** Effective tool use and local agent support (75.5% on MCP Atlas).
- **Reasoning: 83/100.** Strong reasoning performance relative to size (83.5% GPQA Diamond).
- **Context window: 84/100.** 131k context window optimized for consumer hardware.
- **Multimodal: 85/100.** Integrated 1.8B vision/perception encoder providing high visual reasoning.
- **Coding: 76/100.** Good open-weights coding capabilities (77.0% LiveCodeBench, 51.2% SWE-bench Pro).
- **Cost efficiency: 95/100.** Free open weights under Apache 2.0 with low host costs.
- **Overall Score: 81/100.** Excellent compact multimodal open-weights model for local desktop and developer agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
