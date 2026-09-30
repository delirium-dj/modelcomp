# GPT Realtime Whisper — findings by Muse Spark 1.3

- Source: OpenAI/GPT-Realtime-Whisper (`gpt-realtime-whisper`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Whisper
- **Short description:** OpenAI's streaming speech-to-text model in the Realtime API: transcribes audio live as the speaker talks with transcript deltas and finalization contracts. Top use case is live captions, meeting notes, and voice-agent input stages needing low-latency STT.
- **Provider / access:** OpenAI Realtime API (streaming transcription endpoint; same-conditions Cekura/Coval harnesses via provider endpoints). Realtime STT model — no Zen Free ID verified.
- **Release / knowledge:** 2026-05-07 release (OpenAI "Advancing voice intelligence" launch, with GPT-Realtime-2 and Translate); knowledge cutoff undisclosed (STT models are not knowledge-gated)
- **IDs:** `openai/gpt-realtime-whisper` (native); no Zen ID verified for this slug
- **Context window:** unverified (no public window spec found for this ID; streaming turns measured, not window length)
- **Modalities:** audio in; text transcript deltas out (streaming STT with finalization contract); reasoning no (transcription-only); tool calls no
- **Pricing (as of 2026-05):** $0.017 per audio minute (duration-based — OpenAI launch pricing). Paid only.
- **Architecture:** proprietary (undisclosed params/training)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Cekura Converse-STT (streaming, same conditions): Pipecat Dataset WER **2.16% (4th of 15**, 1,000 clips; leaders AssemblyAI 1.93%, Chirp 3 2.00%, Reson8 2.10%); Ocular WER **3.53% (4th)**; final-text delay 543ms (12th of 15); time-to-first-text 1.38s p50 (Cekura benchmarks page)
- Coval STT (30-day averages, ~27.5k samples): WER **5.1% (#11 of 26)**; time-to-final-segment 558ms (#17); time-to-first-token 1821ms (Coval model page)
- AA Speech-to-Text WER Index: **page exists for this ID** (AA-WER v2, 3 datasets ~8 hrs; numeric value not extracted in this pass — listed as tracked, not scored)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (STT-only; no reasoning surface)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- WER composition (Coval): substitutions/deletions/insertions split tracked; p50 WER 0.0%, p90 14.3% (distribution noted, not separately scored)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- (No public code benchmark exists for this STT-only ID; scored low on absence of evidence, not on a failed result.)

Long context:

- no long-context retrieval reported (streaming-turn latency measured instead: 543–558ms finalization; no window spec, no MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 25/100.** Transcription-only model with no tool-call surface and zero text-agent numbers; Cekura/Coval STT accuracy shows reliable audio handling but no agentic behavior; capped at 25.
- **Reasoning: 40/100.** No reasoning evals exist for this ID by design (no reasoning surface); WER 2.16–5.1% across three harnesses shows strong acoustic modeling, not understanding; capped at 40.
- **Context window: 50/100.** No verified window spec; streaming latency measured instead of window length; capped at the tier floor.
- **Multimodal: 90/100.** Audio in with text out hits the audio-in band (90–100); held at the band floor as STT-only with no audio out and no image.
- **Coding: 40/100.** Zero public code benchmarks for this ID; scored low purely on absence of evidence (no failed result exists to cite) — re-score if code evals publish.
- **Cost efficiency: 80/100.** $0.017/min duration pricing (≈$1.02/hr of audio) — half the Translate minute and mid-pack among measured STT rows; capped as paid with no free tier.
- **Overall Score: 49/100.** Mean of the five non-cost dims (25+40+50+90+40)/5 = 49.0 → 49; best fit strictly as a streaming-STT model — do not read this Overall against text-coding peers.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (OpenAI May-2026 voice launch post, Cekura Converse-STT page, Coval STT model page with 30-day averages, AA STT model page confirming tracked status); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
