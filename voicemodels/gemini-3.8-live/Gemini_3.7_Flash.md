# Gemini 3.8 Live — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.8-live`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Native bidirectional audio/video real-time conversational model optimized for ultra-low latency interactive voice and vision assistance.
- **Provider / access:** Google Multimodal Live API (`google/gemini-3.8-live`), OpenCode Zen (`opencode/gemini-3.8-live`).
- **Release / knowledge:** 2026-08-10 release; knowledge cutoff June 2026.
- **IDs:** `google/gemini-3.8-live`, `opencode/gemini-3.8-live`
- **Context window:** 256,000 tokens (256k input, streaming bidirectional output).
- **Modalities:** real-time audio, video, image, text in; real-time audio and text out; live function calling, interruption handling.
- **Pricing (as of 2026-09-20):** $1.00 / $3.00 per 1M tokens ($0.50 cached; audio/video streaming pricing apply).
- **Architecture:** Dense end-to-end multimodal transformer with continuous real-time audio tokenizer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%**
- Tau3-Banking / Tau2-Bench: **76.2%**
- GDPval-AA: **1285**
- Claw-Eval / ClawProBench: **72.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **63.4%**
- HLE: **24.0%**
- LCR / MLCR: **77.8%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **101 / #17**
- Omniscience Accuracy / Hallucination Rate: **82.4% / 6.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.2%**
- LiveCodeBench: **44.0%**
- SciCode / AA-SciCode: **65.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **65.2**

Long context:

- MRCR 256k needle retrieval 98.2%; RULER benchmark 93.6% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast live function calling during conversational streaming, capped on complex headless terminal scripting.
- **Reasoning: 76/100.** Good interactive reasoning and situational awareness, capped on deep mathematical proofs.
- **Context window: 86/100.** 256k context tailored for lengthy audio/video interactive sessions.
- **Multimodal: 96/100.** Industry-leading native bidirectional audio and video streaming with sub-300ms turnaround.
- **Coding: 73/100.** Capable live pair-programming conversational advice, capped on large autonomous refactoring.
- **Cost efficiency: 84/100.** Competitive pricing for live multimodal streaming infrastructure.
- **Overall Score: 81.8/100.** Peerless real-time voice and vision conversational capabilities for interactive agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
