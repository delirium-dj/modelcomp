# GPT-5.3 Codex Spark — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-high-speed research preview coding model running on wafer-scale Cerebras WSE-3 hardware at over 1,000 tokens/second, engineered for instantaneous interactive refactoring, autocomplete, and real-time agent loops.
- **Provider / access:** OpenAI API (design-partner preview), ChatGPT Pro research preview, GitHub Copilot Spark, [Cerebras AI](https://cerebras.ai).
- **Release / knowledge:** February 12, 2026.
- **IDs:** `openai/gpt-5.3-codex-spark`. Research preview endpoint; no public per-token billing.
- **Context window:** 128,000 tokens total (128K context window); max output 16,384 tokens.
- **Modalities:** Text in; text and code out (text-only preview); structured JSON and tool calling.
- **Pricing (as of 2026-10-11):** Included with ChatGPT Pro subscription / enterprise design partner agreements; no standard per-token list price.
- **Architecture:** Compact distilled Codex transformer deployed on Cerebras WSE-3 wafer-scale inference hardware.

### Raw benchmarks found

Agent / tool use:

- Generation speed: **1,000+ tokens/sec** (Cerebras WSE-3 hardware)
- Terminal-Bench 2.0: **58.4%** (Terminus harness)
- Terminal-Bench 2.1: **65.0%** (OpenAI technical evals)
- Tau2-Bench: **86.5%**
- GDPval-AA: **1,215 Elo**
- Toolathon / SWE Atlas: **44.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.5%**
- Humanity's Last Exam (HLE): **18.5%**
- AA-LCR: **72.0%**
- Artificial Analysis Intelligence Index: **36.5**

Coding:

- SWE-bench Pro: **~56.0%**
- SWE-bench Verified: **73.5%**
- LiveCodeBench: **79.5%** pass@1
- SciCode: **41.0%**

Long context:

- 128K token context window evaluated on single-repo file navigation and low-latency edits.

### Normalized scores (1–100)

- **Tool use: 74/100.** Exceptional tool execution velocity with 86.5% on Tau2-Bench and 58.4%–65.0% on Terminal-Bench, tailored for rapid interactive IDE loops.
- **Reasoning: 75/100.** Solid code-level logic and reasoning with 76.5% on GPQA Diamond and 36.5 on the AA Intelligence Index.
- **Context window: 75/100.** 128K context window provides sufficient depth for typical module-level editing tasks.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 86/100.** High-caliber programming accuracy demonstrated by 56.0% on SWE-bench Pro, 73.5% on SWE-bench Verified, and 79.5% on LiveCodeBench at 1,000+ tok/s.
- **Cost efficiency: 75/100.** Accessible via ChatGPT Pro subscription tier for research preview partners.
- **Overall Score: 65/100.** Arithmetic mean of non-cost metrics: (74 + 75 + 75 + 15 + 86) / 5 = 65.0. Groundbreaking ultra-fast coding preview delivering frontier programming accuracy at blistering speeds, with overall score capped by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of OpenAI technical announcements, Cerebras partnership briefings, and programming benchmark evaluations.
