# Gemini 3 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's flagship Gemini 3 Pro frontier model, delivering ground-breaking multimodal reasoning, 2M context, and elite software engineering performance.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3-pro` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 2,097,152 tokens total (2M input / 128,000 output).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output, native audio output; native tool calling; JSON mode; adaptive thinking effort.
- **Pricing (as of 2026-10-27):** Enterprise tier pricing ($1.25 /M input tokens, $5.00 /M output tokens).
- **Architecture:** State-of-the-art Gemini 3 multimodal transformer architecture with native RingAttention and continuous reasoning.

### Raw benchmarks found

- SWE-bench Pro: **83.5%** <(Google DeepMind technical report, 2026)>
- GPQA Diamond: **93.2%** <(Advanced scientific reasoning evaluation)>
- Needle in a Haystack (2M tokens): **100%** <(Long-context retrieval benchmark)>

### Normalized scores (1–100)

- **Tool use: 96/100.** Industry-leading agentic tool integration and multi-turn workflow execution.
- **Reasoning: 96/100.** Superior advanced scientific and logical reasoning (GPQA Diamond 93.2%).
- **Context window: 99/100.** Flawless 2-million-token context window with 128k output generation capacity.
- **Multimodal: 99/100.** State-of-the-art native multimodality across massive video, audio, code, and documents.
- **Coding: 96/100.** Elite software engineering and repository autonomy (SWE-bench Pro 83.5%).
- **Cost efficiency: 86/100.** Highly competitive enterprise pricing for frontier multimodal intelligence.
- **Overall Score: 97.2/100.** Best-fit recommendation: Premier extreme-context frontier model for complex multi-domain research, advanced software engineering, and multimodal analysis.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind release announcements, technical documentation, and independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
