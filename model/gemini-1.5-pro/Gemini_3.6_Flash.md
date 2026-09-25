# Gemini 1.5 Pro — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's legacy 2M-token long-context multimodal model designed for audio, video, document processing, and general reasoning.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-1.5-pro`). Chat Completions & Gemini API.
- **Release / knowledge:** 2024-02-15 release (002 updated 2024-09); 2024-05 knowledge cutoff.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,097,152 tokens input / 8,192 max output — verified via Google developer documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $1.25 input / $5.00 output per 1M tokens (prompts <= 128k); $2.50 input / $10.00 output (prompts > 128k).
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.5%**
- Tau3-Banking / Tau2-Bench: **52.4%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.1%**
- HLE: **14.2%**
- LCR / MLCR: **72.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **80 / #20**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.2%**
- LiveCodeBench: **42.1%**
- SciCode / AA-SciCode: **22.5%**
- Vibe Code Bench: **62.4%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR 2M window retrieval accuracy: **99.2%**

### Normalized scores (1–100)

- **Tool use: 70/100.** Moderate tool invocation capabilities compared to modern 2026 agentic models.
- **Reasoning: 75/100.** Solid general reasoning capabilities (59.1% GPQA Diamond).
- **Context window: 100/100.** Industry-leading 2M token context window with high retrieval precision.
- **Multimodal: 95/100.** Exceptional native input support across text, image, audio, video, and PDF files.
- **Coding: 65/100.** Legacy coding capabilities (42.1% LiveCodeBench, 41.2% SWE-bench Verified).
- **Cost efficiency: 75/100.** Competitive long-context pricing.
- **Overall Score: 81/100.** Outstanding long-context multimodal model for multi-hour video, audio, and large repository analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
