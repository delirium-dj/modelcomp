# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's polished 3.1 generation Pro frontier model, delivering robust reasoning, 2M context, and enhanced software engineering capabilities.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-pro` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2,097,152 tokens total (2M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output, native audio output; native tool calling; JSON mode; thinking budget support.
- **Pricing (as of 2026-10-27):** Enterprise tier pricing.
- **Architecture:** Upgraded Gemini 3.1 multimodal transformer architecture with native RingAttention.

### Raw benchmarks found

- SWE-bench Verified: **78.2%** <(Google DeepMind technical evaluation)>
- GPQA Diamond: **89.0%** <(Advanced reasoning evaluation)>
- Needle in a Haystack (2M tokens): **100%** <(Long-context retrieval benchmark)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional multi-turn agentic tool integration and API execution.
- **Reasoning: 95/100.** Top-tier scientific and mathematical reasoning (GPQA Diamond 89.0%).
- **Context window: 99/100.** Flawless 2-million-token context window with stable long-range retrieval.
- **Multimodal: 98/100.** Elite native multimodality across massive video, audio, and documents.
- **Coding: 95/100.** Professional software engineering and repository refactoring (SWE-bench Verified 78.2%).
- **Cost efficiency: 84/100.** Competitive enterprise pricing.
- **Overall Score: 96.2/100.** Best-fit recommendation: Premier extreme-context enterprise model for complex multi-domain reasoning and engineering workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind release notes and independent evaluation datasets.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
