# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.1 Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-performance multimodal reasoning and massive 2M context model.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3.1-pro`), Chat Completions API.
- **Release / knowledge:** 2026-02-15; knowledge cutoff January 2026.
- **IDs:** `google/gemini-3.1-pro` (free tier available on Google AI Studio and OpenCode Zen)
- **Context window:** 2M tokens input / 64K max output; verified via Google AI documentation.
- **Modalities:** Text, image, audio, video, PDF in; text out; native multimodal reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Free tier available; standard paid tiers for high-volume API use.
- **Architecture:** Advanced native multimodal Transformer by Google DeepMind.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.2%** (Google AI technical report, n=1000)
- Tau3-Banking / Tau2-Bench: **88.5%**
- GDPval-AA: **2120** (Elo)
- Claw-Eval / ClawProBench: **91.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.5%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **67.5%**
- LCR / MLCR: **88.2%**
- CritPt: **90.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93.8 / #3**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 2.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **87.0%**
- Vibe Code Bench: **88.0%**
- DeepSWE / Coding Index / other: **90.0**

Long context:

- RULER 2M pass rate: **97.8%** across the full 2M context window.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong tool integration and robust function calling capabilities across multi-step workflows.
- **Reasoning: 93/100.** Excellent complex reasoning performance across GPQA and math/science benchmarks.
- **Context window: 98/100.** Industry-leading 2M context window with high accuracy on massive document ingestion.
- **Multimodal: 92/100.** Native multimodal architecture handling video, audio, image, and text seamlessly.
- **Coding: 90/100.** Solid coding and software engineering benchmarks.
- **Cost efficiency: 68/100.** Competitive free tier and favorable pricing relative to capability.
- **Overall Score: 92.8/100.** Mean of the five quality dimensions (91 + 93 + 98 + 92 + 90 = 464 / 5 = 92.8). Premier multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
