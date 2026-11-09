# MiniMax M3.1 Flash Preview — findings by Beam

- Source: MiniMax/MiniMax M3.1 Flash Preview, `minimax/minimax-m3.1-flash-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview model (Sep 27, 2026): 428B total / 23B active MoE, 1M context, 512K max output. Text/image/video in. Always-on reasoning (5 effort levels). No published benchmarks. Subscription-only (MiniMax Code).
- **Provider / access:** MiniMax Code; Token Plan subscription. No pay-as-you-go API.
- **Release / knowledge:** Released 2026-09-27; knowledge cutoff not stated.
- **IDs:** `minimax/minimax-m3.1-flash-preview`
- **Context window:** 1,000,000 tokens; max output 512,000.
- **Modalities:** text, image, video in; text out; reasoning yes (always on, 5 levels); tool calling yes.
- **Pricing (as of 2026-10-17):** Not published (subscription-only).
- **Architecture:** MoE, 428B total / 23B active, sparse attention, native visual encoder. Params not fully published.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. KingBench 66.25% (third-party video review, anecdotal).
- OSWorld: not reported.
- Tool calling: supported (per MiniMax docs).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks.
- GPQA: not reported.
- HLE: not reported.
- MMLU-Pro: not reported.
- AA Intelligence Index: not reported.

Coding:

- Coding: no verified public benchmarks. SWE-bench not reported.
- KingBench 66.25% (third-party, anecdotal, 8 projects).

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text/image/video in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (no published benchmarks).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 50/100.** No verified coding benchmarks; KingBench 66.25% (anecdotal).
- **Cost efficiency: 70/100.** Subscription-only (no published per-token price).
- **Overall Score: 58/100.** Provisional mean; low-confidence (zero verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (MiniMax official, zmime, Volanea, AlphaSignal, MiniMax-AI.chat); no verified public benchmarks found. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (MiniMax M3.1 Flash Preview has zero verified benchmarks, candidate for exclusion.)