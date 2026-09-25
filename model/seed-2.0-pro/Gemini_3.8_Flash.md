# Seed 2.0 Pro — findings by Gemini 3.8 Flash

- Source: ByteDance / Seed (`bytedance/seed-2.0-pro`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship omni-modal agent foundation model, integrating advanced mathematical reasoning, native audio/video comprehension, and competitive agentic coding.
- **Provider / access:** Volcengine Ark API, BytePlus, OpenRouter, and DeepInfra (`seed-2.0-pro`).
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff January 2024.
- **IDs:** `bytedance/seed-2.0-pro`. No dedicated Free ID on Zen.
- **Context window:** 272,000 tokens context window; max output 131,072 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video); text and tool-calling output; GUI operation and agentic tool use.
- **Pricing (as of 2026-02):** $0.47 / 1M input tokens, $2.37 / 1M output tokens via Volcengine.
- **Architecture:** Proprietary mixture-of-experts (MoE) transformer trained natively across multimodal inputs.

### Raw benchmarks found

Agent / tool use:

- LMArena Rank: **#6** (vendor-reported, Feb 2026)
- GUI operation / agentic tool execution supported natively.
- Tau2-Bench: no verified public score found
- Terminal-Bench: no verified public score found

Reasoning / knowledge:

- AIME 2025: **98.3%** (vendor-reported, Feb 2026 / HokAI)
- GPQA Diamond: **88.9%** (vendor-reported, Feb 2026 / HokAI)
- MMLU-Pro: **87.0%** (vendor-reported, Feb 2026 / HokAI)
- Video-MME: **89.5** (vendor-reported, Feb 2026 / HokAI)

Coding:

- Codeforces Rating: **3,020** (vendor-reported, Feb 2026 / HokAI)
- SWE-bench Verified: **76.5%** resolved (vendor-reported, Feb 2026 / HokAI)
- LiveCodeBench: no verified public score found

Long context:

- 272,000 tokens evaluated with streaming video analysis and long-document comprehension.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool and agent execution with native GUI handling and #6 LMArena standing, capped by lack of published Terminal-Bench or Tau-bench scores.
- **Reasoning: 90/100.** High-tier reasoning demonstrated by 98.3% on AIME 2025 and 88.9% on GPQA Diamond, capped by January 2024 cutoff requiring RAG.
- **Context window: 76/100.** 272K token window with large 131K output capacity, falling into the 256K–500K context tier.
- **Multimodal: 92/100.** True omni-modal input handling text, image, audio, and video directly without external transcription (89.5 Video-MME).
- **Coding: 87/100.** Exceptional algorithmic coding indicated by a 3,020 Codeforces rating and 76.5% on SWE-bench Verified.
- **Cost efficiency: 88/100.** Competitive pricing at $0.47 / $2.37 per 1M tokens through Volcengine for a flagship multimodal reasoning model.
- **Overall Score: 85/100.** Powerful omni-modal model combining top-quartile mathematical reasoning and native audio-video analysis with strong coding support.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor benchmark evaluations and technical reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
