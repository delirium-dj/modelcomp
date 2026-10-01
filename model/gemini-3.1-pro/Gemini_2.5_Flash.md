# Gemini 3.1 Pro Preview — findings by Gemini 2.5 Flash

- Source: Google / `google/gemini-3.1-pro-preview`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview (includes free access tier via Google AI Studio / Gemini CLI)
- **Short description:** Google's flagship frontier reasoning model featuring dynamic thinking levels and optimized agentic capabilities. It is designed for complex reasoning, multimodal analysis, and high-context software engineering.
- **Provider / access:** Google DeepMind / Google AI Studio / Vertex AI; accessible via OpenRouter (`google/gemini-3.1-pro-preview`) and OpenCode Zen (`opencode/google/gemini-3.1-pro-preview`). Supports standard Chat Completions and Google AI Studio REST/SDK APIs.
- **Release / knowledge:** 2026-02-19 (Preview release); Knowledge cutoff: 2025-01.
- **IDs:** `google/gemini-3.1-pro-preview` (API ID); OpenCode Zen ID: `opencode/google/gemini-3.1-pro-preview`
- **Context window:** 1,048,576 tokens total (1M input / 64K max output tokens), verified via official Google AI Studio and Artificial Analysis specs.
- **Modalities:** Native multimodal input (Text, Image, Audio, Video, PDF); Text output. Supports chain-of-thought reasoning (configurable thinking levels: low, medium, high, max), native tool calling, and JSON mode.
- **Pricing (as of 2026-10-01):** $2.00 / 1M input tokens; $12.00 / 1M output tokens; $0.50 / 1M cached input tokens. Free tier available via Google AI Studio (60 RPM / 1,000 RPD) with standard Google API privacy usage terms for free tiers.
- **Architecture:** Dense/MoE hybrid transformer architecture (exact active parameter count unannounced/proprietary). Proprietary closed-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.80%** (Thinking Mode, DataLearner / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **21.40%** (Tau3-Banking, Thinking Mode); **90.80%** (τ²-Bench, HighTools)
- GDPval-AA: **13.8%** (Artificial Analysis / OpenRouter)
- Claw-Eval / ClawProBench: **86.70%** (Pinch Bench, DataLearner)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.20%** (MCP-Atlas, DataLearner)

Reasoning / knowledge:

- GPQA Diamond: **94.10%** (Artificial Analysis / OpenRouter)
- HLE: **47.00%** (Artificial Analysis); **51.40%** (DataLearner HighTools)
- LCR / MLCR: **82.00%** (AA-LCR, Artificial Analysis)
- CritPt: **17.70%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **29.7 / #1** (Artificial Analysis Index as of launch)
- Omniscience Accuracy / Hallucination Rate: **54.80% / 50.90%** (AA-Omniscience Accuracy / Non-Hallucination 49.10%, Artificial Analysis)

Coding:

- SWE-bench Verified / SWE-Pro: **80.60%** (SWE-bench Verified, DataLearner); **54.20%** (SWE-Bench Pro Public)
- LiveCodeBench: **91.70%** (DataLearner / HighTools)
- SciCode / AA-SciCode: **58.70%** (Artificial Analysis / DataLearner)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **11.73%** (DeepSWE, DataLearner); **68.8** (Artificial Analysis Coding Index)

Long context:

- GDM-MRCR v2 (8-needle, 128K): **84.90%**; GDM-MRCR v2 (8-needle, 1M): **26.30%** (DataLearner / GDM)

### Normalized scores (1-100)

- **Tool use: 85/100.** Strong terminal execution (73.80% on TB2.1) and high MCP tool coordination (78.20%), though capped by mid-range performance on Tau3-Banking (21.40%) and GDPval-AA (13.8%).
- **Reasoning: 95/100.** Frontier-grade performance across GPQA Diamond (94.10%), HLE (47.0% - 51.4%), and ranking #1 on the Artificial Analysis Intelligence Index.
- **Context window: 95/100.** 1M verified context window tier (>=1M); score capped at 95 due to drop-off in high-density retrieval at 1M scale (26.30% GDM-MRCR at 1M).
- **Multimodal: 88/100.** Full native ingestion support for text, image, video, audio, and PDF inputs, returning text and code outputs.
- **Coding: 92/100.** High score on LiveCodeBench (91.70%), SWE-bench Verified (80.60%), and SciCode (58.70%), though lowered slightly by DeepSWE hard agentic benchmarks (11.73%).
- **Cost efficiency: 88/100.** Priced at $2.00 / $12.00 per 1M tokens on paid production tiers with free evaluation tiers available via AI Studio.
- **Overall Score: 91/100.** Calculated as $(85 + 95 + 95 + 88 + 92) / 5 = 91.0$. Best-fit recommendation: Premier choice for complex scientific reasoning, deep codebase refactoring, and high-context multimodal agent workflows.

---

## Signature

- Provided by: **Gemini 2.5 Flash (google/gemini-2.5-flash)** — 2026-10-01
- Method: Public internet search across vendor documentation, Artificial Analysis, and DataLearner benchmark tracking; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
