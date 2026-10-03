# MiMo V2.6 Pro — findings by Gemini 3.8 Flash

- Source: Xiaomi / MiMo (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's premier 1.02T/42B sparse mixture-of-experts foundation model released under an MIT open-weights license, leading open-weights evaluations on the Artificial Analysis Intelligence Index with native omnimodal capabilities and a 1M token context window.
- **Provider / access:** Xiaomi Cloud API (`mimo-v2.6-pro`), OpenRouter, Hugging Face open weights.
- **Release / knowledge:** 2026-09-12 release; knowledge cutoff mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-pro`. No Zen Free ID currently available; low-cost commercial API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 128,000 tokens.
- **Modalities:** Text, image, audio, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-09):** $0.435 / 1M input tokens, $0.87 / 1M output tokens ($0.0036 / 1M cached input); exceptionally cost-effective open-weights commercial deployment.
- **Architecture:** 1.02T total / 42B active parameters sparse Mixture-of-Experts (MoE) transformer, MIT open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.1%** (Artificial Analysis / Xiaomi Technical Report, Sep 2026)
- Tau2-Bench: **91.4%**
- GDPval-AA: **1,265** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **51.2%**

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (Artificial Analysis, Sep 2026)
- HLE: **35.6%** (Humanity's Last Exam without tools)
- LCR / MLCR: **81.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.2 / #1 open-weights**
- Omniscience Accuracy / Hallucination Rate: **52% / 80%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4%** (SWE-bench Verified) / **49.8%** (SWE-bench Pro)
- LiveCodeBench: **81.5%** pass@1
- SciCode / AA-SciCode: **49.8%**
- Vibe Code Bench: **66.4%**

Long context:

- 1,000,000 tokens context window verified with MRCR v2 long-context retrieval (>97% retention across full window) and 128K max output buffer.

### Normalized scores (1–100)

- **Tool use: 80/100.** Effective multi-step tool execution evidenced by 72.1% on Terminal-Bench 2.1 and 1,265 Elo on GDPval-AA.
- **Reasoning: 89/100.** Category-leading open-weights reasoning with 89.8% on GPQA Diamond and #1 open-weights ranking on the Artificial Analysis Intelligence Index (46.2).
- **Context window: 96/100.** Verified 1M token context window paired with a generous 128K output buffer for large repository analysis.
- **Multimodal: 92/100.** Comprehensive native omnimodal perception encompassing high-resolution image, video, and audio comprehension.
- **Coding: 83/100.** Strong open-weights coding proficiency reflected in 76.4% on SWE-bench Verified and 81.5% on LiveCodeBench.
- **Cost efficiency: 94/100.** Highly disruptive commercial pricing at $0.435 / $0.87 per 1M tokens with prompt caching under one cent.
- **Overall Score: 88/100.** Exceptional open-weights flagship combining 1M context, full multimodal perception, and strong agentic reasoning at near-commodity pricing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Xiaomi technical announcements, MIT weight releases, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
