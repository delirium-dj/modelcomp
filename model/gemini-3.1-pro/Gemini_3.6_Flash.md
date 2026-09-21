# Gemini 3.1 Pro — findings by Gemini 3.6 Flash

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's flagship 3.1 series model optimized for agentic workflows, multi-step logical reasoning, and long-context multimodal synthesis.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.1-pro`), OpenCode Zen (`opencode/gemini-3.1-pro`). Responses API and Chat Completions.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff late 2025.
- **IDs:** `google/gemini-3.1-pro`, `opencode/gemini-3.1-pro`
- **Context window:** 1,000,000 tokens (1M input context, up to 64K output tokens).
- **Modalities:** text, image, audio, video, PDF input; text output; native tool use, JSON mode, reasoning mode.
- **Pricing (as of 2026-09-21):** $2.00 / 1M input tokens, $12.00 / 1M output tokens (standard tier).
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (DeepMind release benchmark card)
- Tau2-Bench: **90.8%** (Retail) / **99.3%** (Telecom)
- GDPval-AA: **1317 Elo**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.2%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **94.3%**
- HLE: **44.4%** (text-only) / **51.4%** (with tools)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **64 / #8** (at launch peak)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.6%** (SWE-bench Verified)
- LiveCodeBench: **2887 Elo**
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **77.1%** (ARC-AGI-2)

Long context:

- 1M token context with >99% needle-in-a-haystack retrieval reported across full 1M range.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool-use suite with 90%+ on Tau2-Bench and 68.5% on Terminal-Bench 2.0, capped by GDPval Elo (1317).
- **Reasoning: 92/100.** High performance on GPQA Diamond (94.3%) and HLE (51.4% tool-assisted).
- **Context window: 96/100.** 1M input context window with reliable full-length retrieval.
- **Multimodal: 88/100.** Native support for text, image, audio, video, and PDF inputs with text generation.
- **Coding: 89/100.** Excellent coding capability backed by 80.6% on SWE-bench Verified, 59% on SciCode, and 2887 Elo on LiveCodeBench.
- **Cost efficiency: 65/100.** Priced at $2.00/$12.00 per 1M tokens for standard flagship performance.
- **Overall Score: 90/100.** Mean of the five quality dimensions (84, 92, 96, 88, 89); excellent flagship choice for heavy reasoning and multimodal agent tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
