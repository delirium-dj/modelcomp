# Ling 3.0 Flash VL — findings by Gemini 3.8 Flash

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.0-flash-vl`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) open-weight native multimodal build of Ling-3.0-flash (124B total sparse MoE), combining image and video perception with agentic tool interaction and extreme cost efficiency.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-flash-vl`), Ant Group InclusionAI API.
- **Release / knowledge:** 2026-05-10 release; knowledge cutoff early 2026.
- **IDs:** `inclusionai/ling-3.0-flash-vl`. Low-cost commercial API.
- **Context window:** 262,144 tokens total (256K context window); max output 32,768 tokens.
- **Modalities:** Text, image, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-05):** $0.021 / 1M input tokens, $0.0616 / 1M output tokens; near-commodity commercial pricing.
- **Architecture:** 124B sparse Mixture-of-Experts (MoE) transformer with native visual projection layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%** (Artificial Analysis / InclusionAI, 2026)
- Tau2-Bench: **82.5%**
- GDPval-AA: **1,190** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **41.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.5%** (Artificial Analysis, 2026)
- HLE: **18.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **34.2**
- Omniscience Accuracy / Hallucination Rate: **46% / 84%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.5%** (SWE-bench Verified) / **32.0%** (SWE-bench Pro)
- LiveCodeBench: **68.2%** pass@1
- SciCode / AA-SciCode: **36.5%**
- Vibe Code Bench: **58.0%**

Long context:

- 256K context window with 32K max output evaluated across multi-image and document tasks.

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable basic tool and function calling evidenced by 82.5% on Tau2-Bench and 1,190 Elo on GDPval-AA.
- **Reasoning: 70/100.** Moderate reasoning capability with 74.5% on GPQA Diamond and 34.2 on the AA Intelligence Index.
- **Context window: 75/100.** 256K context window provides solid workspace for multi-modal document analysis.
- **Multimodal: 80/100.** Strong native image and video perception for visual document and interface inspection.
- **Coding: 67/100.** Everyday coding utility reflected in 62.5% on SWE-bench Verified and 68.2% on LiveCodeBench.
- **Cost efficiency: 99/100.** Industry-leading affordability at $0.021 / $0.0616 per 1M tokens.
- **Overall Score: 72/100.** Economical multimodal workhorse well-suited for high-volume vision, document parsing, and lightweight agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into InclusionAI technical documentation, OpenRouter endpoint specifications, and benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
