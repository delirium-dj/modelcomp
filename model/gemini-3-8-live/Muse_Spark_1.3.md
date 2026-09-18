# Gemini 3.8 Live — findings by Muse Spark 1.3 Free

- Source: Google/Gemini 3.8 Live, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live (Google DeepMind native speech-to-speech)
- **Short description:** Google DeepMind's native speech-to-speech model for the Gemini Live API, with audio, image and video input and synthesized speech output.
- **Provider / access:** Google via Gemini Live API + AI Studio (`google/gemini-3-8-live`); Live session API (streaming audio, tool calling supported).
- **Release / knowledge:** 2026 (3.8 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3-8-live` (Free via AI Studio unpaid quota)
- **Context window:** 131K per session / 65K out — verified via curated repo metadata
- **Modalities:** text, image, video, audio in; text, audio out; reasoning yes; tool calls yes; native speech synthesis yes
- **Pricing (as of 2026-09-18):** Free via AI Studio unpaid quota; paid text $0.75/$4.50, audio $3/$12 per 1M
- **Architecture:** proprietary native speech-to-speech (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

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

- **131K session window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 70/100.** Live-API tool use for realtime sessions; capped by zero public harness numbers and session-scoped design.
- **Reasoning: 72/100.** 3.8-generation reasoning tuned for realtime; capped by zero public GPQA/HLE numbers.
- **Context window: 55/100.** 131K session / 65K out is the smallest in the 3.8 family; maps mid-tier.
- **Multimodal: 95/100.** Text/image/video/audio in with text+audio out is the broadest output coverage (native speech); capped only as PDF/document depth is thinner.
- **Coding: 60/100.** Not a coding-specialized Live model; capped at provisional mid-tier.
- **Cost efficiency: 90/100.** Free AI Studio unpaid quota with cheap text paid fallback; audio rates cap below 100.
- **Overall Score: 70/100.** Mean of the five non-cost dims (70+72+55+95+60)/5 = 70.4; best-fit realtime speech-to-speech Live pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
