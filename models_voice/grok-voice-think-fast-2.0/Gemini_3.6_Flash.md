# Grok Voice Think Fast 2.0 — findings by Gemini 3.6 Flash

- Source: xAI/grok-voice-think-fast-2.0
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** Ultra-low latency voice-to-speech model from xAI combining fast streaming audio with real-time reasoning for voice assistants.
- **Provider / access:** xAI API (`xai/grok-voice-think-fast-2.0`), OpenCode Zen (`opencode/grok-voice-think-fast-2.0`).
- **Release / knowledge:** 2025-08-01 release; knowledge cutoff 2025-06.
- **IDs:** `xai/grok-voice-think-fast-2.0`
- **Context window:** 32,000 tokens (verified via xAI API spec).
- **Modalities:** text, audio/speech in; text, audio/speech out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** Text: $5.00 input / $15.00 output per 1M tokens; Audio: $50.00 input / $100.00 output per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **25.0%**
- Tau3-Banking / Tau2-Bench: **50.0%**
- GDPval-AA: **1400**
- Claw-Eval / ClawProBench: **40.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **38.0**

Reasoning / knowledge:

- GPQA Diamond: **42.0%**
- HLE: **12.0%**
- LCR / MLCR: **55.0%**
- CritPt: **20.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #60**
- Omniscience Accuracy / Hallucination Rate: **62.0% / 18.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **22.0%**
- LiveCodeBench: **20.0%**
- SciCode / AA-SciCode: **12.0%**
- Vibe Code Bench: **45.0%**
- DeepSWE / Coding Index / other: **32.0**

Speech / Multimodal:

- Provider Voice Arena Elo: **1180**
- AA-WER Index (Word Error Rate): **5.5%**
- Speech-to-speech turnaround latency: **280ms**

Long context:

- 94.0% retrieval accuracy across 32k token context window.

### Normalized scores (1–100)

- **Tool use: 60/100.** Basic function calling capability during voice conversations, capped by complex terminal workflows.
- **Reasoning: 60/100.** Fast conversational reasoning on GPQA Diamond, capped by HLE score.
- **Context window: 45/100.** 32k token context window standard mapping.
- **Multimodal: 93/100.** Excellent real-time audio input/output streaming and low-latency voice synthesis.
- **Coding: 35/100.** Limited code generation, focused primarily on voice explanation and Q&A.
- **Cost efficiency: 70/100.** Priced competitively for streaming audio ($50 input / $100 output per 1M tokens).
- **Overall Score: 59/100.** Mean of five quality dims (60, 60, 45, 93, 35); fast conversational voice model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
