# Grok 4.6 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship multimodal frontier model optimized for long-horizon agentic workflows, complex code synthesis, live platform search integration, and multi-tier reasoning.
- **Provider / access:** xAI API (`xai/grok-4.6`), Cursor, Grok Build, Amazon Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** August 12, 2026 release; knowledge cutoff June 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens (500K tokens) input / 65,536 max output tokens — verified via xAI developer documentation.
- **Modalities:** Multimodal input (text, image, diagrams); text and tool action output; real-time platform search; configurable reasoning effort (`low`, `medium`, `high`, `xhigh`); structured JSON mode.
- **Pricing (as of October 2026):** $2.00 / 1M input, $6.00 / 1M output tokens ($0.20 / 1M cached input).
- **Architecture:** Frontier multimodal transformer with integrated real-time search synthesis and dynamic reasoning compute scaling.

### Raw benchmarks found

Agent / tool use & Real-Time Search:

- Terminal-Bench: High multi-step shell command resolution
- Tau2-Bench: **77.5%**
- Toolathon / SWE Atlas Codebase QnA: **78.5%**
- Real-time News & Social Grounding: Native low-latency search synthesis
- GDPval-AA: **1,810 Elo**

Reasoning / knowledge:

- GPQA Diamond: **95.6%**
- Humanity's Last Exam (HLE): **25.0%**
- Artificial Analysis Intelligence Index: **61 / Top Tier**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.4%**

Coding:

- LiveCodeBench: **94.7%**
- SWE-bench Verified: **Top 4 / 83+** evaluated models (bash-only harness)
- SciCode / AA-SciCode: **69.0%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index: **79.5**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **99.1%** retrieval accuracy across 500K tokens.
- Vision Understanding: Strong visual parsing across charts, architectural diagrams, and user interfaces.

### Normalized scores (1–100)

- **Tool use: 85/100.** Versatile agentic execution powered by native real-time X search and robust error recovery.
- **Reasoning: 89/100.** Top-tier graduate reasoning backed by 95.6% on GPQA Diamond and flexible multi-tier reasoning effort.
- **Context window: 90/100.** 500K token context window with 99.1% retrieval consistency across large repositories.
- **Multimodal: 81/100.** Dependable multimodal image and diagram interpretation.
- **Coding: 87/100.** Elite coding capabilities highlighted by 94.7% LiveCodeBench and top-tier SWE-bench Verified standing.
- **Cost efficiency: 78/100.** Highly competitive pricing at $2.00 / $6.00 per 1M tokens with prompt caching discounts.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 89 + 90 + 81 + 87) / 5 = 432 / 5 = 86.4 -> 86/100. Premier agentic reasoning model combining elite coding performance with real-time research grounding.

---

## Sources

- xAI Official Grok 4.6 Announcement & Architecture Notes: https://x.ai/blog/grok-4-6
- Cursor & Emergent AI Developer Evaluation: https://cursor.com/blog/grok-4-6-benchmarks
- Artificial Analysis LLM Intelligence Leaderboard: https://artificialanalysis.ai/models/grok-4-6

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
