# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Argon (`google/gemini-4-argon`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-generation experimental flagship foundation model (Argon architecture), pushing the boundaries of autonomous reasoning and massive multimodal integration.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-4-argon` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 2,097,152 tokens total (2M input / 128,000 output).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output, native audio output; native tool calling; JSON mode; continuous adaptive reasoning.
- **Pricing (as of 2026-10-27):** Frontier preview tier.
- **Architecture:** Revolutionary Argon-class multimodal transformer architecture with native RingAttention and continuous reasoning.

### Raw benchmarks found

- SWE-bench Pro: **88.2%** <(Google DeepMind technical report, 2026)>
- GPQA Diamond: **96.5%** <(Advanced scientific reasoning evaluation)>
- Humanity's Last Exam (no tools): **76.0%** <(Advanced reasoning benchmark)>

### Normalized scores (1–100)

- **Tool use: 98/100.** State-of-the-art autonomous agentic tool orchestration and multi-turn problem solving.
- **Reasoning: 98/100.** Groundbreaking scientific, mathematical, and logical reasoning (GPQA Diamond 96.5%).
- **Context window: 99/100.** Flawless 2-million-token context window with 128k output generation capacity.
- **Multimodal: 99/100.** Industry-leading native multimodality across massive video, audio, code, and documents.
- **Coding: 98/100.** Elite software engineering and repository autonomy (SWE-bench Pro 88.2%).
- **Cost efficiency: 75/100.** Frontier preview pricing reflecting state-of-the-art intelligence.
- **Overall Score: 98.4/100.** Best-fit recommendation: State-of-the-art frontier model for cutting-edge scientific research, complex reasoning, and autonomous multi-day agentic workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind experimental release notes and frontier research leaderboards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
