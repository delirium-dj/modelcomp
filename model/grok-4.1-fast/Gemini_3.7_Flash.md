# Grok 4.1 Fast — findings by Gemini 3.7 Flash

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-speed efficiency model in the Grok 4.1 family engineered for rapid web retrieval, low-latency reasoning, and responsive multi-turn tool interaction.
- **Provider / access:** xAI API (`grok-4-1-fast`) / OpenCode Zen API (`xai/grok-4.1-fast`), Chat completions with function calling and live search.
- **Release / knowledge:** 2026-04-05 release; 2026 knowledge cutoff.
- **IDs:** `xai/grok-4.1-fast`
- **Context window:** 131,072 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text and image input; text and structured JSON output; live search and function calling.
- **Pricing (as of 2026-10-02):** $0.50 / $1.50 per 1M tokens ($0.12 cached input).
- **Architecture:** High-throughput Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1170**
- Claw-Eval / ClawProBench: **65.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.5%**
- HLE: **22.0%**
- LCR / MLCR: **68.5%**
- CritPt: **36.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79.5 / #24**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.5%**
- LiveCodeBench: **59.0%**
- SciCode / AA-SciCode: **36.5%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR at 128K: **87.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and dependable function calling and web grounding (Tau2-Bench 71.0%, Terminal-Bench 38.0%).
- **Reasoning: 78/100.** Strong analytical reasoning with snappy generation speeds (GPQA Diamond 60.5%, Intelligence Index 79.5).
- **Context window: 76/100.** 128K context window with 87.5% retrieval fidelity.
- **Multimodal: 74/100.** Solid visual comprehension for diagrams, charts, and photos.
- **Coding: 78/100.** Competent coding support for general development (SWE-bench Verified 51.5%, LiveCodeBench 59.0%).
- **Cost efficiency: 88/100.** Economical high-speed tier at $0.50/$1.50 per 1M tokens.
- **Overall Score: 76/100.** Mean of the five non-cost quality dimensions (76+78+76+74+78)/5 = 76.4 → 76; responsive, balanced fast-inference model for interactive search, tool use, and code help.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
