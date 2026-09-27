# Grok Voice Think Fast 2.0 — findings by Muse Spark 1.3

- Source: xAI/Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI speech-to-speech voice-agent model that listens, reasons in the background, and speaks on a single model path. Top use case is real-time phone and in-app voice agents with tool use.
- **Provider / access:** xAI API model ID `grok-voice-think-fast-2.0` (alias `grok-voice-latest` routes to 2.0 since 2026-08-05; v1 remains pinnable as `grok-voice-think-fast-1.0`). Continuous session over WebSocket plus LiveKit integration.
- **Release / knowledge:** Announced 2026-07-29; alias cutover 2026-08-05; training data collected Jan 2024–Jun 2026 per EU training summary; knowledge cutoff unknown — no verified cutoff found.
- **IDs:** `grok-voice-think-fast-2.0` (alias `grok-voice-latest`)
- **Context window:** 128K total per folder meta.json; session history dropped after 30 minutes of inactivity per API docs — verified via listings/docs only, no retrieval measurement found.
- **Modalities:** Audio in, audio out, plus text input; reasoning yes (background, ~0.4x reasoning tokens per response vs v1); tool calls yes (collections search, web search, X search, MCP, custom functions, server-side execution); no image/video input found.
- **Pricing (as of 2026-09-27):** $0.08 per minute of audio ($4.80/hr) plus $0.004 text input; provisioned number +$0.01/min; tool calls billed separately; paid only — no free tier found.
- **Architecture:** Proprietary (no parameter count, license, or weights published).

### Raw benchmarks found

Agent / tool use:

- τ-voice Bench agentic performance (x.ai launch post 2026-07-29, figures credited to Artificial Analysis): **56.5%** (vs Think Fast 1.0 52.1%, GPT-Realtime-2.1 High 45.7%, Gemini 3.1 Flash High 37.7%; ranked #1 on this bench at launch)
- Full Duplex Bench conversational dynamics (same source): **95.1%** (vs 1.0 77.8%, GPT-Realtime-2.1 95.7%, Gemini 3.1 Flash 74.3%)
- Time to First Audio (same source): **0.70s** (vs 1.0 1.25s, Gemini 3.1 Flash High 2.98s)
- Terminal-Bench 2.1: **no verified public score found** (voice harness differs from terminal harness)
- Tau3-Banking / Tau2-Bench (text): **no verified public score found** (τ-voice is the spoken counterpart, listed above)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Big Bench Audio speech reasoning (x.ai launch post 2026-07-29, credited to Artificial Analysis): **97.2%** (vs 1.0 97.1%, GPT-Realtime-2.1 96.0%, Gemini 3.1 Flash 96.6%)
- AA Speech-to-Speech Quality Index (same source): **82.9%** (vs 1.0 75.7%, GPT-Realtime-2.1 79.1%, Gemini 3.1 Flash 69.5%; #2 overall behind Qwen Audio 3.0 Realtime Plus 84.1% per third-party coverage)
- Provider transcription claim (x.ai launch post, provider-run across thousands of short phrases in 24 languages): **1.5–2.0x lower word-error-rate than Deepgram Nova 3 and ElevenLabs Scribe v2, 1.4x vs v1, ~10x gap in noisy/telephone conditions** — provider claim, not an independent reproducible benchmark package
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index (text) / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks at window length: **no verified public score found** (128K window and 30-minute session history are capacity listings, not retrieval scores)

### Normalized scores (1–100)

- **Tool use: 85/100.** τ-voice 56.5% leads the published voice-agent field by ~11 pts with 0.70s first audio and faster in-session tool calls; capped by the 56.5% absolute ceiling (~2 in 5 hard scenarios still fail) and no text-harness tool numbers.
- **Reasoning: 90/100.** Big Bench Audio 97.2% with background reasoning at 0.4x tokens shows strong spoken reasoning; capped by the provider-run transcription claim counting as claim only and no text GPQA/HLE/Index.
- **Context window: 60/100.** 128K total maps to the 100K–200K tier (50–64); capped with no measured retrieval at length and session history expiry after 30 minutes idle.
- **Multimodal: 90/100.** Audio in plus audio out with background reasoning meets the audio tier (90–100); capped at the band floor with no image/video input found.
- **Coding: 50/100.** No verified coding benchmark found for this voice model; neutral provisional score capped by complete absence of SWE/LiveCode/DeepSWE evidence.
- **Cost efficiency: 70/100.** $0.08/min ($4.80/hr input-audio) plus text/tool/telephone extras, paid only; cheaper than GPT-Realtime-2.1 High measured $10.75/hr but above Gemini 3.1 Flash High $1.75/hr on the same normalization.
- **Overall Score: 75/100.** Mean of the five quality dims (85+90+60+90+50)/5 = 75.0; best fit as a low-latency agentic voice layer for real workflows over phone lines where 0.70s turn-start and tool use matter most.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (x.ai launch post 2026-07-29, Artificial Analysis figures via vendor table, Gigazine/eessl/appwrite/36kr coverage, AI Stack Current and ai-tldr model profiles, EU training-content summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
