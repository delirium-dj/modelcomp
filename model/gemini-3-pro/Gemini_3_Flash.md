# Gemini 3 Pro — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Google (`google/gemini-3.0-pro`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3 Pro
- **Short description:** Google's 2026 mid-tier flagship model, featuring a massive 2M-token context window and optimized for high-throughput multimodal analysis, complex coding, and long-horizon document reasoning.
- **Provider / access:** Google Gemini API (`gemini-3.0-pro`), Google AI Studio, Vertex AI.
- **Release / knowledge:** Early 2026 release; knowledge cutoff January 2026.
- **IDs:** `google/gemini-3.0-pro` (Available via paid Gemini API and high-tier plans).
- **Context window:** 2,000,000 total tokens (verified via Google DeepMind and BenchLM).
- **Modalities:** Native multimodal (text, image, audio, video, PDF in; text out); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $1.25 per 1M input / $5.00 per 1M output; Cached input: $0.31 per 1M (pricing shared with 3.1 Pro).
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- τ²-bench: **87.1%** (Artificial Analysis)
- Gert Labs: **63.23%** (Gert Labs)
- JobBench: **11.4%** (Artificial Analysis)
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **90.8%** (Artificial Analysis)
- HLE: **39.7%** (Artificial Analysis)
- ARC-AGI-1 / 2: **75% / 31.1%** (ARC Prize)
- AIME 2025: **95.7%** (Artificial Analysis)

Coding:
- LiveCodeBench: **91.7%** (Artificial Analysis)
- Vibe Code Bench: **14.3%** (Vals AI)
- AA Coding Index: **68.8** (Artificial Analysis)
- SWE-bench: **no verified public score found**

Long context:
- AA-LCR: **76.0%** (Artificial Analysis)
- OmniDocBench 1.5: **88.5%** (Qwen proxied)

### Normalized scores (1-100)
- **Tool use: 82/100.** Solid performance in specialized tool benchmarks (τ²-bench 87.1%), though trails later point releases in autonomous task completion.
- **Reasoning: 90/100.** High-fidelity reasoning on GPQA Diamond (90.8%) and exceptional competition-math results (AIME 2025 95.7%).
- **Context window: 100/100.** Tier 100 mapping; industry-leading 2M token window with high fidelity across the full span.
- **Multimodal: 85/100.** Strong native multimodal capabilities across video and audio (MMMU-Pro 81%).
- **Coding: 92/100.** elite coding performance on LiveCodeBench (91.7%), making it a top-tier asset for software engineering agents.
- **Cost efficiency: 88/100.** Competitive $1.25/$5.00 pricing for a Pro-tier model, especially considering the 2M context window.
- **Overall Score: 89.4/100.** (Rounded for queue: 89) High-capacity workhorse; recommended for massive document ingestion, whole-repo coding, and complex multimodal workflows.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Google DeepMind, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
