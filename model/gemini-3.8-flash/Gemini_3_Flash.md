# Gemini 3.8 Flash — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-efficiency frontier model from the Gemini 3.8 family, optimized for speed, low latency, and strong agentic performance in a lightweight footprint.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`), Vertex AI.
- **Release / knowledge:** September 2026 release; knowledge cutoff June 2026.
- **IDs:** `google/gemini-3.8-flash` (Available via paid Gemini API and Google AI Studio).
- **Context window:** 1,000,000 total tokens (verified via Google model documentation and BenchLM).
- **Modalities:** Text and image input; text output; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $0.10 per 1M input / $0.40 per 1M output; Cached input: $0.025 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **89.4%** (Google) / **87.6%** (Artificial Analysis)
- Terminal-Bench 4.0: **19.7%** (Artificial Analysis)
- OSWorld 2.0: **59.0%** (Google)
- AutomationBench: **59.9%** (Artificial Analysis)
- AA Briefcase: **1203 Elo** (Artificial Analysis)
- Tau3-Banking: **44.9%** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **95.3%** (Artificial Analysis) / **94.4%** (Vals AI)
- HLE: **47.8%** (Artificial Analysis) / **54.9%** (Google Verified)
- ARC-AGI-1: **98.5%** (ARC Prize)
- Artificial Analysis Intelligence Index: **40.9** (Artificial Analysis)

Coding:
- DeepSWE: **73.8%** (DeepSWE v1.1)
- SWE-bench: **80.0%** (Vals AI)
- LiveCodeBench: **89.5%** (Vals AI)
- AA Coding Index: **76.3** (Artificial Analysis)

Long context:
- AA-LCR: **81.3%** (Artificial Analysis)
- LVBench: **87.1%** (Google)

### Normalized scores (1-100)
- **Tool use: 88/100.** Strong performance on Terminal-Bench 2.1 (89.4%) and solid agentic capabilities across OSWorld and AutomationBench.
- **Reasoning: 95/100.** Excellent performance on GPQA Diamond (95.3%) and HLE (47.8%), matching frontier reasoning capabilities for a flash model.
- **Context window: 100/100.** Verified 1M token window with high retrieval efficiency.
- **Multimodal: 70/100.** Supports text and image inputs; specialized multimodal variants exist for audio/video.
- **Coding: 92/100.** Strong results on SWE-bench (80.0%) and LiveCodeBench (89.5%), making it highly capable for rapid software iteration.
- **Cost efficiency: 98/100.** Extremely cost-effective at $0.10/$0.40 pricing, providing flagship-level reasoning at a fraction of the cost.
- **Overall Score: 89/100.** Best-in-class efficiency model; recommended for high-volume agentic tasks and cost-sensitive production deployments.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Google DeepMind, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
