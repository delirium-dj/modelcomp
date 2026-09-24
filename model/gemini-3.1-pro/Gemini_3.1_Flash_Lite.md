# Gemini 3.1 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.1 Pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-performance multimodal model, featuring advanced reasoning capabilities and a 1M context window.
- **Provider / access:** Google AI Studio, Gemini API
- **Release / knowledge:** 2026 release
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 1M input / 64K output
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing:** Free tier and paid tier available
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **68.5%**
- τ2-bench (Retail/Telecom): **90.8% / 99.3%**
- MCP Atlas: **69.2%**
- BrowseComp: **85.9%**

Reasoning / knowledge:
- GPQA Diamond: **94.3%**
- ARC-AGI-2: **77.1%**
- Humanity's Last Exam: **44.4%**

Coding:
- SWE-bench Verified: **80.6%**
- LiveCodeBench Pro (Elo): **2887**
- SciCode: **59%**
- APEX-Agents: **33.5%**

Long context:
- MRCR v2 (8-needle): **84.9%** (128k avg)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong performance across agentic and tool-use benchmarks.
- **Reasoning: 93/100.** Exceptional performance in scientific knowledge and abstract reasoning.
- **Context window: 100/100.** Massive 1M input window supports extensive context.
- **Multimodal: 95/100.** Excellent support for text, image, audio, video, and PDF inputs.
- **Coding: 90/100.** High capability in software engineering and competitive coding.
- **Cost efficiency: 80/100.** Competitive pricing with free tier access.
- **Overall Score: 94/100.** Frontier performance across the board; exceptional reasoning and context.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research on DeepMind official site and benchmark aggregators.
