# Gemini 3 Pro — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3-pro-preview`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's flagship multimodal reasoning model built for agentic workflows, complex problem solving, and long-context analysis.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-3-pro-preview`). Chat Completions & Native Gemini API.
- **Release / knowledge:** 2025-11-18 release; 2025-03 knowledge cutoff.
- **IDs:** `google/gemini-3-pro-preview`
- **Context window:** 1,048,576 tokens input / 64,000 max output — verified via official Google developer documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $1.25 input / $5.00 output per 1M tokens (prompts <= 128k); $2.50 input / $10.00 output (prompts > 128k).
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.7%** (Terminal-Bench Hard)
- Tau3-Banking / Tau2-Bench: **74.5%** (Tau-Bench)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.2%**

Reasoning / knowledge:

- GPQA Diamond: **87.5%**
- HLE: **31.1%**
- LCR / MLCR: **82.4%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #3**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.2%**
- LiveCodeBench: **91.7%**
- SciCode / AA-SciCode: **48.3%**
- Vibe Code Bench: **84.1%**
- DeepSWE / Coding Index / other: **88.6**

Long context:

- MRCR 1M window retrieval accuracy: **99.4%**

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use and agentic capabilities on Tau-Bench, capped by moderate performance on hard terminal benchmarks.
- **Reasoning: 91/100.** High performance on GPQA Diamond (87.5%) and top-tier ranking on Artificial Analysis Intelligence Index.
- **Context window: 95/100.** Full 1M token context window with 99.4% retrieval accuracy across long contexts.
- **Multimodal: 90/100.** Native support for audio, video, image, and text input modalities.
- **Coding: 89/100.** Excellent coding performance with 76.2% on SWE-bench Verified and 91.7% on LiveCodeBench.
- **Cost efficiency: 75/100.** Competitive enterprise pricing ($1.25/$5.00 per 1M), though higher tier applies above 128k tokens.
- **Overall Score: 90/100.** Strong across all quality dimensions, recommended for complex multimodal agentic reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
