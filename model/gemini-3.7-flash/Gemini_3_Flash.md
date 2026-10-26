# Gemini 3.7 Flash — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-efficiency frontier model from the Gemini 3.7 family, designed for fast agentic reasoning, multimodal analysis, and high-throughput production workloads.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`), Vertex AI.
- **Release / knowledge:** August 2026 release; knowledge cutoff April 2026.
- **IDs:** `google/gemini-3.7-flash` (Available via paid Gemini API and Google AI Studio).
- **Context window:** 1,000,000 total tokens (verified via Google model card and BenchLM).
- **Modalities:** Text and image input; text output; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $0.15 per 1M input / $0.60 per 1M output; Cached input: $0.0375 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **85.8%** (Google / Artificial Analysis)
- Terminal-Bench 3.0: **14.9%** (Google)
- OSWorld 2.0: **47.9%** (Google)
- AutomationBench: **30.4%** (Google)
- AA Harvey LAB v1.0: **90.7%** (Google)
- AA-AnalystAgent: **60.0** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **94.5%** (Artificial Analysis) / **93.9%** (Vals AI)
- HLE: **47.9%** (Artificial Analysis) / **53.6%** (Google Verified)
- ARC-AGI-1 / 2: **95.5% / 84.6%** (ARC Prize)
- Artificial Analysis Intelligence Index: **39.1** (Artificial Analysis)

Coding:
- DeepSWE: **65.3%** (Google)
- SWE-bench (Vals): **80.8%** (Vals AI)
- LiveCodeBench (Vals): **88.7%** (Vals AI)
- FrontierCode 1.1 Main: **43.6%** (Google)

Long context:
- AA-LCR: **81.7%** (Artificial Analysis)
- MRCR v2 (64K-128K): **97%** (Google)

### Normalized scores (1-100)
- **Tool use: 85/100.** Strong results in specialized legal agents (Harvey LAB 90.7%) and solid terminal performance, though trails 3.8/4 variants in complex OS navigation.
- **Reasoning: 94/100.** High-fidelity reasoning on GPQA Diamond (94.5%) and strong results on ARC-AGI-1 (95.5%).
- **Context window: 100/100.** Verified 1M token window with high retrieval efficiency.
- **Multimodal: 70/100.** Supports high-fidelity text and image inputs (MMMU-Pro 85.5%).
- **Coding: 90/100.** Very capable coding model with strong results on SWE-bench (80.8%) and LiveCodeBench (88.7%).
- **Cost efficiency: 97/100.** Extremely cost-effective at $0.15/$0.60, offering near-frontier performance for a fraction of flagship pricing.
- **Overall Score: 87.8/100.** (Rounded for queue: 88) High-performance efficiency model; recommended for agentic legal workflows and large-scale multimodal processing.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Google DeepMind, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
