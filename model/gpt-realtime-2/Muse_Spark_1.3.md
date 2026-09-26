# GPT Realtime 2 — findings by Muse Spark 1.3

- Source: OpenAI/GPT Realtime 2 (`opencode/gpt-realtime-2`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's May 2026 second-generation speech-to-speech voice model with GPT-5-class reasoning inside the audio loop: five effort levels, parallel tool calls with spoken preambles, topping Scale AI's Audio MultiChallenge and AA Conversational Dynamics. Top use case: production voice agents (single model replaces transcribe → reason → synthesize stacks).
- **Provider / access:** OpenAI Realtime API (`gpt-realtime-2`); also via Azure AI and Vercel AI Gateway; OpenCode Zen ID `opencode/gpt-realtime-2`.
- **Release / knowledge:** 2026-05-07/08 release (OpenAI; TNW; DeepLearning.AI The Batch 2026-05-15); knowledge cutoff 2024-09-30.
- **IDs:** `opencode/gpt-realtime-2` (Zen-hosted; OpenAI native `gpt-realtime-2`).
- **Context window:** 128,000 tokens in (text/audio/image), 32,000 out (DeepLearning.AI spec table; Pass Index 128K). No public retrieval-at-length numbers found.
- **Modalities:** Text + audio + image in; text + audio out; reasoning yes (minimal/low/medium/high/xhigh); function calling yes (parallel calls + narration); first audio 1.12s (minimal) / 2.33s (high).
- **Pricing (as of 2026-05):** Audio: $32 input / $0.40 cached / $64 output per 1M; text: $4/$0.40/$24; image: $5/$0.50 (OpenAI via DeepLearning.AI/LLMReference). Paid only.
- **Architecture:** Proprietary decoder-only (undisclosed params/training).

### Raw benchmarks found

Agent / tool use:

- Scale AI Audio MultiChallenge (audio-output instruction following): **#1, 46.45% avg pass rate** — +13.8% over GPT-Realtime-1.5 at xhigh (OpenAI via TNW/DeepLearning.AI; Scale has not tested Grok Voice Think Fast or Step-Audio R1.1 — noted)
- AA Conversational Dynamics (turn-taking/interruptions): **96.1%, #1** at minimal reasoning (DeepLearning.AI, from AA)
- Tau3-Voice: **51.2, 7th of 16** (Pass Index standing)
- Zillow adversarial call-success bench (customer): **95%, +26 pts over prior model** (OpenAI via TNW — customer benchmark, provisional weight)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking (text) / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- AA Big Bench Audio (audio reasoning QA): **96.6% at high reasoning** — ties Gemini 3.1 Flash Live (high), behind Step-Audio R1.1 Realtime 97.6% and Grok Voice Think Fast 1.0 97.1%; drops to 71.8% at minimal reasoning (DeepLearning.AI, from AA)
- AA Speech Reasoning leaderboard: **trails the two leaders** (both faster; DeepLearning.AI)
- GPQA Diamond: **no verified public score found** (GPT-5-class reasoning is an OpenAI product claim, unvalidated on text reasoning benches)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- (No public code benchmark exists for this voice-first ID; scored low on absence of evidence, not on a failed result.)

Long context:

- no long-context retrieval reported (128K window verified via spec tables; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 68/100.** Verified parallel tool calls with spoken preambles plus Audio MultiChallenge #1 and Conversational Dynamics 96.1% evidence real voice-agent tool use; Tau3-Voice 51.2 (7/16) and zero text-agent numbers (TB/Tau/GDPval) cap it at 68.
- **Reasoning: 72/100.** Big Bench Audio 96.6% (high effort) is strong in-modality reasoning, but the Speech Reasoning leaderboard trails faster rivals, minimal-effort collapses to 71.8%, and no text GPQA/HLE exists to test the GPT-5-class claim; capped at 72.
- **Context window: 56/100.** Verified 128K in / 32K out sits low in the 100K–200K tier (50–64); no retrieval evidence.
- **Multimodal: 92/100.** Text+audio+image in with non-text (audio) out hits the top tier (audio in or non-text out = 90–100); held at 92 as a voice-first (not omni-task) profile.
- **Coding: 45/100.** Zero public code benchmarks for this ID; scored low purely on absence of evidence in the coding dimension (no failed result exists to cite) — re-score if code evals publish.
- **Cost efficiency: 35/100.** Audio-first pricing ($32/$64) exceeds even the $10/$50 (≈30) reference; the text leg ($4/$24 ≈ 45) is noted but the model is bought for voice.
- **Overall Score: 67/100.** Mean of the five non-cost dims (68 + 72 + 56 + 92 + 45) / 5 = 66.6 → 67; best fit strictly as a voice-agent model — do not read this Overall against text-coding peers.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (DeepLearning.AI The Batch spec/benchmark tables, OpenAI pricing page, TNW launch coverage, Pass Index τ³-Voice standing, LLMReference specs, BenchLM compare pages confirming no text-bench coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
