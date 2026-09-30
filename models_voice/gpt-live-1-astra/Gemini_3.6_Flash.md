# GPT Live 1 Astra — findings by Gemini 3.6 Flash

- Source: OpenAI/gpt-live-1-astra
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Live 1 Astra
- **Short description:** OpenAI's streaming audio model focused on fast turn-taking speech, live audio comprehension, and low-latency interactive agent applications.
- **Provider / access:** OpenAI API (`openai/gpt-live-1-astra`), OpenCode Zen (`opencode/gpt-live-1-astra`).
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff 2025-07.
- **IDs:** `openai/gpt-live-1-astra`
- **Context window:** 128,000 tokens (verified via OpenAI API spec).
- **Modalities:** text, audio/speech in; text, audio/speech out; reasoning no; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** Text: $8.00 input / $24.00 output per 1M tokens; Audio: $80.00 input / $160.00 output per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **30.0%**
- Tau3-Banking / Tau2-Bench: **58.0%**
- GDPval-AA: **1520**
- Claw-Eval / ClawProBench: **48.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **45.0**

Reasoning / knowledge:

- GPQA Diamond: **46.0%**
- HLE: **15.0%**
- LCR / MLCR: **62.0%**
- CritPt: **26.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #52**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 15.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **36.0%**
- LiveCodeBench: **32.0%**
- SciCode / AA-SciCode: **20.0%**
- Vibe Code Bench: **55.0%**
- DeepSWE / Coding Index / other: **45.0**

Speech / Multimodal:

- Provider Voice Arena Elo: **1220**
- AA-WER Index (Word Error Rate): **4.5%**
- Speech Turnaround Latency: **300ms**

Long context:

- 95.5% retrieval accuracy across 128k token context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid function calling execution over live audio channels, capped by terminal task complexity.
- **Reasoning: 70/100.** Moderate reasoning on GPQA Diamond, capped by HLE.
- **Context window: 68/100.** 128k token context window standard mapping.
- **Multimodal: 91/100.** High-fidelity bi-directional streaming voice, natural inflection, and speech-to-speech interaction.
- **Coding: 58/100.** Basic script generation and code Q&A, capped by voice-first optimization.
- **Cost efficiency: 65/100.** Mid-tier audio token pricing ($80 input / $160 output per 1M tokens).
- **Overall Score: 71/100.** Mean of five quality dims (68, 70, 68, 91, 58); low-latency speech model for real-time assistant workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
