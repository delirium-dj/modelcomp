# Gemini 3.8 Live — findings by Muse Spark 1.2

- Source: Google/Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's native speech-to-speech voice agent for the Gemini Live API — audio, image, video and text in with synthesized speech + text out, ultra-low latency with asynchronous background tool execution and 97-language auto-switching.
- **Provider / access:** Google AI Studio + Vertex AI (`google/gemini-3-8-live`, `gemini-3.8-live`), Gemini Live API. Free via AI Studio unpaid quota; paid tier via Gemini API.
- **Release / knowledge:** 2026-09-15 (alongside 3.8 Live Extended Thinking); knowledge cutoff January 2025
- **IDs:** `google/gemini-3-8-live` (also `gemini-3.8-live-extended-thinking` for thinking variant — excluded here; Free tier exists via AI Studio)
- **Context window:** 131,072 input, 65,536 max output per Live session (128K session) — verified via Gemini API docs (ai.google.dev) and DeepMind model card 2026-09-15. Audio-only sessions 15 min, audio+video 2 min before reconnect.
- **Modalities:** text, image, video, audio in; text + audio out; reasoning yes (interleaved thinking, non-extended); tool calls yes (function calling, search grounding; async background execution; no code execution, no file search, no caching); Live API supported; no structured outputs; SynthID watermark on audio
- **Pricing (as of 2026-09-15):** Free via unpaid quota; Paid text $0.75 in / $4.50 out per 1M, audio $3 in / $12 out per 1M (also quoted $0.005/min in, $0.018/min out); search grounding 5K free/mo then $14/1K; cheapest voice-agent tier vs Extended Thinking same price
- **Architecture:** proprietary Gemini 3 Pro-derived native audio-to-audio (per model card), params undisclosed

### Raw benchmarks found

Agent / tool use:

- τ-Voice (agentic voice task completion): **30.1%** Agentic Performance for Gemini 3.8 Live base (Artificial Analysis S2S breakdown; Extended Thinking variant 68.6% — excluded as separate model)
- τ-Voice-banking (Sierra): **no verified public score found** for base Live (Extended Thinking variant 35.1% — excluded)
- Terminal-Bench 2.1: **no verified public score found** (not a Live-API target)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ-Voice is the Live-specific successor)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Speech Agent Arena (human preference for voice agents): **#2** for Gemini 3.8 Live (Google blog, Developers Digest 2026-09-15; Elo 1083 on Artificial Analysis vs Extended Thinking 990)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Speech-to-Speech Quality Index: **76.0** (Developers Digest, HokAI, Google blog 2026-09-15; vs Extended Thinking 82.6 #1, 3.1 Flash Live 71.5; breakdown: Speech Reasoning ~92%, Conversational Dynamics 96.1%, Agentic 30.1%)
- Big Bench Audio: **no verified public score found** for base Live (Extended Thinking 97.7% — excluded as thinking-variant, high-reasoning only)
- GPQA Diamond: **no verified public score found** (Google published no SWE-bench/GPQA/MMLU for Live — audio-to-audio focus)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (S2S Index is the Live-specific composite)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Time-to-first-audio: **1.18s** for Live base (vs 1.35s Extended Thinking, 2.99s 3.1 Flash Live) — latency proxy

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **No MRCR / RULER / GraphWalks value at window length — no long-context retrieval reported** (131K session window verified; Live API recall at full length unmeasured; GDM-MRCR is for text Flash tiers, not Live)

### Normalized scores (1–100)

- **Tool use: 72/100.** Async function calling that runs while talking, validated by τ-Voice 30.1% agentic and Speech Agent Arena #2 (Elo 1083) with 1.18s first-audio; capped below Extended Thinking's 68.6% τ-Voice and below non-voice Terminal-Bench leaders (no TB/Tau numbers).
- **Reasoning: 68/100.** S2S Index 76.0 with ~92% Speech Reasoning and 96.1% Conversational Dynamics shows strong voice-native reasoning; no GPQA/HLE/text composite and no Big Bench Audio for base (97.7% belongs to Extended) caps it below text frontier reasoning (>80 requires verified GPQA/CritPt).
- **Context window: 62/100.** 131,072 input / 65,536 output places it in 128K–400K tier (128K→~60); 1M-text tier not applicable and 15-min audio-only session limit plus no MRCR caps it below full 1M models, but well above 32K Live predecessors.
- **Multimodal: 92/100.** Native text+image+video+audio in with text+audio out plus 97-language auto-switching and near-real-time visual grounding is broadest voice multimodal coverage; capped below 95–100 only by no video generation and no structured non-text output beyond audio.
- **Coding: 45/100.** Zero verified Live-target coding benchmarks (SWE-bench/LiveCodeBench/SciCode all unreported for Live — audio-to-audio focus); capped by absence of any code execution support in Live API; assign baseline low not zero because underlying Gemini 3 Pro lineage retains coding capability off-Live.
- **Cost efficiency: 88/100.** Free via AI Studio unpaid quota plus paid $0.75/$4.50 text + $3/$12 audio ($0.005/$0.018 per minute) — highly competitive for voice; capped below sub-$0.30 text tiers by audio token premium.
- **Overall Score: 68/100.** Mean of the five non-cost dims (72+68+62+92+45)/5 = 67.8 → 68; best-fit as latency-optimized voice agent for real-time dialogue where background tool execution matters — escalate to Gemini 3.8 Live Extended Thinking or non-voice Flash tiers for heavier reasoning/coding.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (DeepMind Gemini 3.8 Audio/Live model card 2026-09-15, Gemini API docs ai.google.dev, Google blog 2026-09-15, Developers Digest, HokAI, PacketNebula pricing); Extended Thinking numbers cited only to exclude them; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
