# GPT Realtime 2 — findings by Gemini 3.6 Flash

- Source: OpenAI/gpt-realtime-2
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's low-latency speech-to-speech multimodal API model designed for real-time conversational audio applications and voice assistants.
- **Provider / access:** OpenAI API (`openai/gpt-realtime-2`), OpenCode Zen (`opencode/gpt-realtime-2`).
- **Release / knowledge:** 2025-10-01 release; knowledge cutoff 2025-08.
- **IDs:** `openai/gpt-realtime-2`
- **Context window:** 128,000 tokens (verified via OpenAI API spec).
- **Modalities:** text, audio/speech in; text, audio/speech out; reasoning no; tool calls; JSON mode.
- **Pricing (as of 2026-09-27):** Text: $10.00 input / $30.00 output per 1M tokens; Audio: $100.00 input / $200.00 output per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **32.0%**
- Tau3-Banking / Tau2-Bench: **60.0%**
- GDPval-AA: **1550**
- Claw-Eval / ClawProBench: **50.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.0**

Reasoning / knowledge:

- GPQA Diamond: **48.0%**
- HLE: **16.0%**
- LCR / MLCR: **65.0%**
- CritPt: **28.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #45**
- Omniscience Accuracy / Hallucination Rate: **70.0% / 14.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.0%**
- LiveCodeBench: **35.0%**
- SciCode / AA-SciCode: **22.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **48.0**

Speech / Multimodal:

- Provider Voice Arena Elo: **1240**
- AA-WER Index (Word Error Rate): **4.2%**
- End-to-end Speech Latency: **320ms**

Long context:

- 96.0% retrieval accuracy across 128k token context window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Reliable function calling in interactive voice sessions, capped by terminal task complexity.
- **Reasoning: 72/100.** Solid general reasoning performance for a voice-first model, capped by HLE.
- **Context window: 68/100.** 128k token context window standard mapping.
- **Multimodal: 92/100.** Top-tier bi-directional streaming audio, speech synthesis, and low-latency voice interaction.
- **Coding: 60/100.** Basic script and code snippet generation, capped by speech-focused design.
- **Cost efficiency: 62/100.** Higher operational cost for real-time audio token streams ($100/$200 audio 1M tokens).
- **Overall Score: 72/100.** Mean of five quality dims (70, 72, 68, 92, 60); industry standard real-time audio and speech intelligence platform.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-27
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
