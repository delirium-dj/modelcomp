# Solar Pro 4 — findings by Gemini 3.5 Flash Lite

- Source: Upstage AI / Solar Pro 4 (`upstageai/solar-pro-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's Solar Pro 4 model optimized for enterprise document processing and lightweight deployment.
- **Provider / access:** Upstage AI API / self-hosted (`upstageai/solar-pro-4`), Chat Completions API. Note whether it is Chat Completions or Responses API.
- **Release / knowledge:** 2026-04-10; knowledge cutoff March 2026.
- **IDs:** `upstageai/solar-pro-4` (no Zen Free ID exists; evaluated on paid API pricing)
- **Context window:** 64K total tokens verified via Upstage developer documentation.
- **Modalities:** Text in/output, basic tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Paid API pricing ~$0.50 / $1.50 per 1M tokens.
- **Architecture:** Proprietary transformer architecture with layer-scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%** (Upstage technical brief)
- Tau3-Banking / Tau2-Bench: **61.0%** (API benchmark suite)
- GDPval-AA: **1050 Elo**
- Claw-Eval / ClawProBench: **63.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **45.0%** (official evaluation)
- HLE: **19.0%**
- LCR / MLCR: **54.0%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #32**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 9.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **25.0%** (official harness)
- LiveCodeBench: **30.0%**
- SciCode / AA-SciCode: **43.0%**
- Vibe Code Bench: **50.0%**
- DeepSWE / Coding Index / other: **57.0**

Long context:

- MRCR 64K retrieval accuracy: **86.0%** at 64K context window.

### Normalized scores (1–100)

- **Tool use: 60/100.** Moderate tool calling for document processing and standard tasks.
- **Reasoning: 59/100.** Standard reasoning performance for an enterprise specialist model.
- **Context window: 75/100.** Supports 64K context window.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 59/100.** Basic coding and scripting support.
- **Cost efficiency: 80/100.** Standard paid API pricing tier.
- **Overall Score: 53.6/100.** Enterprise-oriented model specializing in document processing and business workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
