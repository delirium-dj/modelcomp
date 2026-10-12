# GPT-5.5 Pro — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.5-pro` / `gpt-5.5-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-compute reasoning model featuring parallel test-time compute, 1.05M context window, and computer-use automation.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), Azure OpenAI Service. Responses and Chat Completions API.
- **Release / knowledge:** 2026-04-23 release; February 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI documentation.
- **Modalities:** text, image in; text out; reasoning yes (test-time compute with configurable effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $30.00 input / $180.00 output / $7.50 cached per 1M tokens.
- **Architecture:** Proprietary high-capacity multimodal transformer with test-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **82.7%** (OpenAI technical disclosure)
- OSWorld-Verified: **78.7%**
- Tau3-Banking / Tau2-Bench: **98.0%** (Tau2-Bench Telecom)
- GDPval-AA: **79.4%**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%–94.0%**
- FrontierMath: **51.7%** (Tiers 1–3; Tier 4 leadership)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **49**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **86.2%–88.0%** (Verified) / **58.6%** (SWE-bench Pro)
- LiveCodeBench: **high competitive tier**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: **99.6%** needle-in-a-haystack retrieval accuracy across 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading computer and tool automation backed by 82.7% on Terminal-Bench 2.0, 78.7% on OSWorld, and 98.0% on Tau2-Bench.
- **Reasoning: 94/100.** Exceptional mathematical and scientific deduction highlighted by 94.0% on GPQA Diamond and Tier 4 FrontierMath mastery.
- **Context window: 92/100.** Verified 1.05M token input window with 128K output capacity and 99.6% RULER retrieval accuracy.
- **Multimodal: 82/100.** Robust visual perception and document analysis; lacks native audio/video generation.
- **Coding: 89/100.** SOTA verification capabilities with 86.2% SWE-bench Verified, though SWE-bench Pro reaches 58.6%.
- **Cost efficiency: 45/100.** Significant price premium ($30.00 / $180.00 per 1M) for high-stakes accuracy applications.
- **Overall Score: 90/100.** Enterprise-grade high-precision model for mission-critical reasoning, deep research, and computer automation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI technical disclosures, Artificial Analysis evaluations, and third-party benchmark suites; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
