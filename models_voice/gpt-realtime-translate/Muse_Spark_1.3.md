# GPT Realtime Translate — findings by Muse Spark 1.3

- Source: OpenAI/GPT-Realtime-Translate (`gpt-realtime-translate`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Translate
- **Short description:** OpenAI's live speech-to-speech translation model in the Realtime API: 70+ input languages into 13 output languages with translated audio plus transcript deltas while source audio is still arriving. Top use case is live multilingual voice (support, sales, events, creator platforms).
- **Provider / access:** OpenAI Realtime API (`/v1/realtime/translations`, WebRTC/WebSocket; listen-along and conversational patterns per OpenAI guide). Realtime translation model — no Zen Free ID verified.
- **Release / knowledge:** 2026-05-07 release (OpenAI "Advancing voice intelligence" launch, with GPT-Realtime-2 and Whisper); knowledge cutoff undisclosed
- **IDs:** `openai/gpt-realtime-translate` (native); no Zen ID verified for this slug
- **Context window:** unverified (no public window spec found for this ID; conversational-translation sessions imply multi-turn buffering — unmeasured)
- **Modalities:** speech in (70+ input languages); translated speech + transcript deltas out (13 output languages); reasoning undisclosed; tool calls not documented for this ID
- **Pricing (as of 2026-05):** $0.034 per audio minute (duration-based, not token-based — OpenAI launch pricing). Paid only.
- **Architecture:** proprietary (undisclosed params/training)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Hindi/Tamil/Telugu customer eval (voice AI for India): **12.5% lower Word Error Rate than any other model tested**, with lower fallback rates, higher task completion, latency sustaining natural conversation (OpenAI launch page quoting customer evals — vendor-relayed, provisional weight, not an independent harness)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Translation quality (BLEU/COMET/FLEURS): **no verified public score found** (language counts 70+/13 are specs, not quality measurements)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- (No public code benchmark exists for this translation-first ID; scored low on absence of evidence, not on a failed result.)

Long context:

- no long-context retrieval reported (no window spec published; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 30/100.** No function-calling or text-agent evidence for this ID; the single customer WER claim shows live voice handling but no tool-use measurement; capped at 30.
- **Reasoning: 45/100.** Provisional 12.5% lower WER on Hindi/Tamil/Telugu suggests strong multilingual acoustic robustness, but vendor-relayed with no harness and no GPQA/HLE/text reasoning to test understanding; capped at 45.
- **Context window: 50/100.** No verified window spec; conversational translation implies session buffering only; capped at the tier floor.
- **Multimodal: 92/100.** Speech in (70+ languages) with non-text translated-speech out hits the top band (audio in or non-text out = 90–100); held at 92 as a single-task translation profile, not a general voice agent.
- **Coding: 35/100.** Zero public code benchmarks for this ID; scored low purely on absence of evidence (no failed result exists to cite) — re-score if code evals publish.
- **Cost efficiency: 75/100.** $0.034/min duration pricing (≈$2.04/hr of audio) — 2x the Whisper STT minute with translation + audio generation included; capped as paid with no free tier.
- **Overall Score: 50/100.** Mean of the five non-cost dims (30+45+50+92+35)/5 = 50.4 → 50; best fit strictly as a live-translation model — do not read this Overall against text-coding peers.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (OpenAI May-2026 voice launch post, OpenAI API translate model page, developer community realtime guides); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
