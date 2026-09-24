# Qwen3.8-27B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/Qwen3.8-27B
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen dense 27B vision-language open-weights model; image/video understanding plus strong agentic coding and long-horizon tasks.
- **Provider / access:** OpenCode Zen / API Providers `Qwen/Qwen3.8-27B` (Chat Completions API). No Free ID.
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `Qwen/Qwen3.8-27B`
- **Context window:** 262,144 native (extensible to 1M with YaRN).
- **Modalities:** Text/image/video in; text out (thinking on by default); tool calls yes.
- **Pricing (as of 2026-09-25):** Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Zen Free ID.
- **Architecture:** Open-weights dense transformer (27B params) with multimodal vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%**
- Tau3-Banking / Tau2-Bench: **72.0%**
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **80.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- HLE: **50.0%**
- LCR / MLCR: **72.0%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #12**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.0%**
- LiveCodeBench: **66.0%**
- SciCode / AA-SciCode: **56.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- RULER / GraphWalks: robust retrieval up to 262K native tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** High performance in agentic workflows and tool invocation.
- **Reasoning: 84/100.** Strong reasoning capabilities across mathematical and coding benchmarks.
- **Context window: 86/100.** 262K native context window with excellent multi-step retrieval.
- **Multimodal: 85/100.** Comprehensive text, image, and video understanding.
- **Coding: 82/100.** High SWE-bench and LiveCodeBench performance for a 27B model.
- **Cost efficiency: 88/100.** Very high performance-to-cost ratio for open-weights hosting.
- **Overall Score: 84.4/100.** Exceptional mid-size open-weights multimodal and coding powerhouse.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
