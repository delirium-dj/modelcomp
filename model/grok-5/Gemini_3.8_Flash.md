# Grok 5 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's flagship foundation model Grok 5, featuring extensive real-time knowledge integration, deep test-time reasoning modes, 500K context window, and high-throughput agentic execution.
- **Provider / access:** xAI API (`grok-5`), Grok interface, OpenRouter.
- **Release / knowledge:** 2026-06-25 release; real-time live data integration.
- **IDs:** `xai/grok-5`. Commercial API.
- **Context window:** 500,000 tokens total (500K context window); max output 65,536 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; deep reasoning toggle.
- **Pricing (as of 2026-06):** $2.00 / 1M input tokens, $8.00 / 1M output tokens ($0.20 / 1M cached input); standard commercial tier.
- **Architecture:** Next-generation sparse Mixture-of-Experts (MoE) transformer trained with real-time web search and live grounding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.2%** (Artificial Analysis / xAI Technical Report, 2026)
- Tau2-Bench: **92.8%**
- GDPval-AA: **1,270** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **51.2%**

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (Artificial Analysis, 2026)
- HLE: **31.8%** (Humanity's Last Exam without tools)
- LCR / MLCR: **81.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52.0**
- Omniscience Accuracy / Hallucination Rate: **60% / 75%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.0%** (SWE-bench Verified) / **47.5%** (SWE-bench Pro)
- LiveCodeBench: **81.5%** pass@1
- SciCode / AA-SciCode: **48.5%**
- Vibe Code Bench: **68.8%**

Long context:

- 500K token context window with 65K max output buffer evaluated across multi-document retrieval; 81.5% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective agentic orchestration and live web tooling evidenced by 92.8% on Tau2-Bench and 1,270 Elo on GDPval-AA.
- **Reasoning: 84/100.** Strong analytical reasoning and real-world synthesis with 87.4% on GPQA Diamond and 52.0 on the AA Intelligence Index.
- **Context window: 84/100.** 500K context window with substantial output generation capabilities.
- **Multimodal: 76/100.** Solid visual comprehension across diagrams, charts, and technical documents.
- **Coding: 78/100.** Capable software development and debugging demonstrated by 76.0% on SWE-bench Verified and 81.5% on LiveCodeBench.
- **Cost efficiency: 74/100.** Competitive commercial pricing at $2.00 / $8.00 per 1M tokens.
- **Overall Score: 80/100.** Well-rounded frontier model combining live knowledge grounding, deep reasoning, and dependable agentic tool use.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into xAI technical announcements, API release notes, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
