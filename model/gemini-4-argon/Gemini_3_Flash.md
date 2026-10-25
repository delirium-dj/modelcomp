# Gemini 4 Argon — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Google (`google/gemini-4-argon`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier reasoning model from the Gemini 4 family, designed for high-complexity agentic workflows, long-horizon terminal tasks, and advanced scientific reasoning.
- **Provider / access:** Google Gemini API (`gemini-4-argon`), Google AI Studio, Vertex AI.
- **Release / knowledge:** 2026-09-30 release; knowledge cutoff June 2026.
- **IDs:** `google/gemini-4-argon` (No Zen Free-tier ID exists; available via paid Gemini API tiers).
- **Context window:** 1,000,000 total tokens (verified via Google DeepMind and OpenRouter).
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $2.00 per 1M input / $10.00 per 1M output; Cached input: $0.10 per 1M (95% discount).
- **Architecture:** Proprietary (Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **57.1%** (Artificial Analysis) / **57.4%** (Google)
- OSWorld 2.0: **69.2%** (Google)
- AutomationBench: **51.3%** (Google) / **77.5%** (Artificial Analysis)
- GDPval-AA: **56.2%** (Artificial Analysis) / **1624 Elo**
- AA Briefcase: **1486 Elo** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (internal proxies suggest frontier performance)
- HLE: **57.1%** (Artificial Analysis)
- ARC-AGI-1: **98.5%** (ARC Prize)
- CritPt: **27.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **52.6** (Artificial Analysis)

Coding:
- DeepSWE: **77.9%** (Google / Artificial Analysis)
- Vibe Code Bench: **91.9%** (Google)
- AA-SciCode: **61.8%** (Artificial Analysis)
- SWE-bench: **no verified public score found**

Long context:
- AA-LCR: **79.7%** (Artificial Analysis)
- Graphwalks BFS (256K–1M): **84.2%** (Google)

### Normalized scores (1-100)
- **Tool use: 94/100.** Strong performance on Terminal-Bench 4.0 (57.1%) and OSWorld 2.0 (69.2%), placing it in the top tier for agentic terminal and OS-level workflows.
- **Reasoning: 98/100.** Frontier-level reasoning on HLE (57.1%) and near-perfect score on ARC-AGI-1 (98.5%). Intelligence Index of 52.6 confirms its high-reasoning status.
- **Context window: 100/100.** Verified 1M token window with strong retrieval consistency (84.2% on long-context BFS tasks).
- **Multimodal: 70/100.** Supports text and image inputs; lacks native audio/video input modalities compared to multimodal-first variants.
- **Coding: 96/100.** SOTA-level performance on DeepSWE (77.9%) and Vibe Code Bench (91.9%), making it a premier coding agent.
- **Cost efficiency: 82/100.** Competitive $2.00/$10.00 pricing for a frontier reasoning model, with significant 95% caching discounts.
- **Overall Score: 92/100.** High-utility frontier reasoning model; recommended for complex agentic coding and long-context scientific research.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Google DeepMind, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
