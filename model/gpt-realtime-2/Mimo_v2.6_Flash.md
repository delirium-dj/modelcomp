# GPT Realtime 2 — findings by Mimo v2.6 Flash

- Source: OpenAI / GPT Realtime 2
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's second-generation realtime speech-to-speech voice model (May 2026), marketed as its most capable realtime voice model — GPT-5-class with configurable reasoning effort and reliable tool use for voice agents. Not an alias of legacy `gpt-realtime` (BenchmarkList's VideoFDB row belongs to that older ID) or of GPT-Realtime-1.5.
- **Provider / access:** OpenAI API — Realtime endpoints (`v1/realtime`, Live `v1/live/sessions`, transcription/translation sessions, WebRTC/WebSockets) plus Chat Completions, Responses and Batch; also routed via OpenCode Zen `opencode/gpt-realtime-2` (tracked Zen entry).
- **Release / knowledge:** 2026-05-07 (LLM Reference, refreshed 2026-05-16); knowledge cutoff 2024-09-30 (official model page) — a notably old cutoff.
- **IDs:** `gpt-realtime-2` (snapshot `gpt-realtime-2`). No Free tier: official rate-limit table shows "Free — Not supported"; no Zen Free ID verified.
- **Context window:** 128,000 tokens total / 32,000 max output (official OpenAI model docs; LLM Reference rounds to 131k).
- **Modalities:** text, audio, image in; text, audio out; video not supported; reasoning yes (configurable effort, five intensity levels); tool calls yes (function calling supported, parallel tool calls, spoken preambles, failed-task recovery); structured outputs **not supported** (official docs); fine-tuning not supported.
- **Pricing (as of 2026-09-26):** text $4.00 / 1M input, $24.00 / 1M output, cached $0.40; audio $32.00 / 1M input, $64.00 / 1M output, cached $0.40; image $5.00 / 1M input, cached $0.50 (official OpenAI pricing tables). Paid only.
- **Architecture:** proprietary (OpenAI); "GPT-5-class" per LLM Reference; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0/2.1, Tau2/Tau3, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (voice-model product surface; no published agent-harness numbers).

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR / MLCR, CritPt, Artificial Analysis Intelligence Index, AA-Omniscience: no verified public score found.

Coding:

- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE / Coding Index: no verified public score found.

Multimodal / voice:

- Big Bench Audio: **96.6** (LLM Reference, observed 2026-06-07) — the only published benchmark score found for this exact ID.
- VideoFDB (full-duplex vision-speech, 2.75 overall, self-reported 2026-06-28) is measured on the older `openai gpt-realtime`, not on `gpt-realtime-2` — not counted here.

Long context:

- 128K window (official); MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** Official docs confirm function calling, parallel tool calls and failed-task recovery for voice agents, but no Terminal-Bench/τ/GDPval/Claw-Eval number exists for this ID — scored low-mid on capability signals alone, never on invented numbers.
- **Reasoning: 55/100.** Five-level configurable reasoning and the vendor's "GPT-5-class" framing support a mid-low score, but there is zero public GPQA/HLE/Index evidence and the knowledge cutoff is 2024-09-30 — capped accordingly.
- **Context window: 56/100.** 128K total falls in the 100K–200K tier (50–64); 32K max output is within normal bounds.
- **Multimodal: 95/100.** Audio in **and** audio out plus image input places it in the 90–100 band (text-only out would be disqualifying), backed by Big Bench Audio 96.6; no video input keeps it below 100.
- **Coding: 45/100.** No SWE-bench/LiveCodeBench/SciCode evidence whatsoever for a realtime voice model — conservative mid-low score reflecting missing evidence, not measured weakness.
- **Cost efficiency: 35/100.** Audio at $32/$64 per 1M is far above the $10/$50 ≈ 30 anchor; even text at $4/$24 sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points — expensive for its primary voice workload.
- **Overall Score: 59/100.** Half-up mean of Tool 45, Reasoning 55, Context 56, Multimodal 95, Coding 45 = 59.2. Best fit: premium voice agents needing audio I/O and tool calls; poor default for text reasoning, coding, or cost-sensitive workloads.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (OpenAI official model docs, LLM Reference, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

