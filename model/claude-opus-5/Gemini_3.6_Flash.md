# Claude Opus 5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's initial 5th-generation flagship model delivering frontier reasoning, deep multi-file software engineering, computer use, and 1M context at $5/$25 pricing.
- **Provider / access:** Anthropic API (`claude-opus-5`). Messages API with extended output support.
- **Release / knowledge:** 2026-07-24 release; February 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic official documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calls yes (computer use); JSON mode yes
- **Pricing (as of 2026-10-01):** $5.00 input / $25.00 output per 1M tokens; prompt caching discounts available.
- **Architecture:** Proprietary frontier transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.5%** (Terminal-Bench 4.0: **52.3%**)
- Tau3-Banking / Tau2-Bench: **86.1%** (Tau2-Bench Airline)
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.1%**

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Anthropic technical report / Vals AI)
- HLE: **35.0%**
- LCR / MLCR: **74.5%**
- CritPt: **70.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.1 / #3**
- Omniscience Accuracy / Hallucination Rate: **90.4% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **96.0%** (SWE-bench Verified) / **79.2%** (SWE-bench Pro)
- LiveCodeBench: **89.03%** (competitive coding benchmark)
- SciCode / AA-SciCode: **71.5%**
- Vibe Code Bench: **79.2%**
- DeepSWE / Coding Index / other: **84.1%**

Long context:

- MRCR / RULER: **98.4%** retrieval accuracy across 1,000,000-token context window.

### Normalized scores (1–100)

- **Tool use: 91/100.** Industry-leading computer use and tool integration highlighted by 86.1% on Tau2-Bench and 80.5% on Terminal-Bench 2.1.
- **Reasoning: 93/100.** Powerful multi-step logical deduction evidenced by 93.2% on GPQA Diamond and top-tier Artificial Analysis ratings.
- **Context window: 95/100.** 1M context input with 128K maximum output token generation depth.
- **Multimodal: 84/100.** Native visual comprehension for high-resolution images, technical diagrams, and complex PDFs.
- **Coding: 93/100.** Elite coding capability with 96.0% SWE-bench Verified, 79.2% SWE-bench Pro, and 89.03% LiveCodeBench.
- **Cost efficiency: 45/100.** $5.00/$25.00 per 1M tokens reflects high-tier frontier compute costs.
- **Overall Score: 91/100.** Landmark frontier model providing exceptional autonomy for repository maintenance and deep analytical research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic release cards, Vals AI benchmarks, and independent leaderboards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
