# GPT Realtime 2.1 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-Realtime-2.1 (`gpt-realtime-2.1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2.1
- **Short description:** OpenAI's speech-to-speech realtime voice model (July 2026) updating GPT-Realtime-2 with better alphanumeric recognition, silence/noise handling, and interruption behavior. Top use case is production voice agents needing strong realtime reasoning, tool use, and instruction following in one live session.
- **Provider / access:** OpenAI Realtime API `gpt-realtime-2.1` over WebRTC, WebSocket, or SIP; testable in the OpenAI Playground. Realtime API (speech-to-speech session events, not Chat Completions).
- **Release / knowledge:** 2026-07-06 release (OpenAI developer community announcement); knowledge cutoff 2024-09-30 (same as GPT-Realtime-2)
- **IDs:** `openai/gpt-realtime-2.1` (snapshot alias `gpt-realtime-2.1`); sibling `gpt-realtime-2.1-mini` (cheaper/faster) is a different model and is NOT scored here
- **Context window:** 128K total with 32K max output — verified 2026-07-29 by benchr recheck against official provider sources
- **Modalities:** text/audio/image in; text/audio out; reasoning yes (configurable effort; higher effort raises latency and token use); tool calls yes (function calling; no structured outputs)
- **Pricing (as of 2026-07-29):** Text $4.00 in / $0.40 cached / $24.00 out per 1M; audio $32.00 in / $0.40 cached / $64.00 out per 1M; image $5.00 in / $0.50 cached. Paid only; OpenAI reports p95 latency down ≥25% vs prior via improved caching (vendor-measured, unverified independently).
- **Architecture:** proprietary (undisclosed params/training)

### Raw benchmarks found

Agent / tool use:

- Cekura live-telephony voice-agent benchmark, frozen v1 (cekura.ai, 2026-08-07, 82 scenarios x 3 runs, default deployment tested directly by Cekura — OpenAI submitted no configuration): pass¹ **81.30%** of 246 runs, pass³ **64.63%** of scenarios (4th of 7), task completion **92.68%**, infrastructure-clean 95.53%, interruption 4.98/5, mean response **1.58s** (2nd-fastest; measured at main-agent layer)
- Terminal-Bench 2.1: **no verified public score found** (voice model; no text-agent harness run published)
- Tau3-Banking (text) / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Zillow adversarial call-success lift 95% vs 69% after prompt optimization (OpenAI May-2026 launch post): GPT-Realtime-2 checkpoint, family proxy only — NOT counted as a 2.1 number

Reasoning / knowledge:

- Artificial Analysis Speech-to-Speech Index (via BetaNews 2026-07-30): GPT-Realtime-2.1 High **79.1%**, below Qwen Audio 3.0 Realtime Plus 84.1%
- OpenAI audio evals for predecessor GPT-Realtime-2 (May-2026 launch post): Big Bench Audio +15.2% vs GPT-Realtime-1.5, Audio MultiChallenge +13.8% — family proxy only, NOT counted as 2.1 numbers
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 128K context / 32K max output are verified capacity ceilings (benchr 2026-07-29), not measured retention

### Normalized scores (1–100)

- **Tool use: 70/100.** Cekura pass³ 64.63% with 92.68% task completion (4th/7, default config) plus OpenAI's improved tool-use claims; capped by the noisy-audio digit-loss/tool-skip failure mode and zero text-agent harness numbers.
- **Reasoning: 75/100.** AA Speech-to-Speech Index 79.1% with configurable reasoning effort in GPT-5-class lineage; capped by no GPQA/HLE for this ID and trailing Qwen Audio 3.0 (84.1%).
- **Context window: 55/100.** Verified 128K/32K lands in the 100K–200K tier (200K = 70); capped by zero measured long-context retrieval.
- **Multimodal: 90/100.** Audio in plus non-text (audio) out with image input billed and verified; capped at 90 by no measured vision benchmark and no video input.
- **Coding: 40/100.** Zero verified coding benchmarks for this ID; provisional floor for a text-capable function-calling model, capped hard until a measured coding run exists.
- **Cost efficiency: 30/100.** Paid audio-first billing ($32/$64 per 1M audio in/out) far above text-model rates; text path ($4/$24) alone would be ~45 but audio dominates voice workloads.
- **Overall Score: 66/100.** Mean of the five quality dims (70 + 75 + 55 + 90 + 40) / 5; best fit as a production voice-agent realtime model, not a text coding/reasoning pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-30
- Method: public internet research (OpenAI API model page, OpenAI developer community announcement 2026-07-06, Cekura live-telephony benchmark 2026-08-07, AA Speech-to-Speech Index via BetaNews 2026-07-30, benchr.org review rechecked 2026-07-29, PacketNebula analysis 2026-07-07); scores are normalized 1–100 interpretations, not official vendor scores. Re-research of own `.md.excluded` twin (2026-09-29): new verified evidence for this exact ID (Cekura pass¹/pass³, AA S2S 79.1%, verified 128K/32K window) justifies this fresh scored file.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
