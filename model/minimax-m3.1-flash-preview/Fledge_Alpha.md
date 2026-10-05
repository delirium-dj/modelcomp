# MiniMax M3.1 Flash Preview — findings by Fledge Alpha

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1-Flash-Preview
- **Short description:** MiniMax's fast/lighter M3-series coding model announced for MiniMax Code on 2026-09-27, with always-on tunable reasoning and native multimodality.
- **Provider / access:** MiniMax Token Plan / MiniMax Code; platform API; OpenRouter listing for `minimax/minimax-m3` siblings; Chat-Completions-compatible.
- **Release / knowledge:** September 27, 2026; knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash-Preview`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image, video in; text out; reasoning always-on (low/medium/high/xhigh/max, default max); prompt caching; tools.
- **Pricing (as of 2026-10-05):** reported ~$0.10 in / $0.40 out per 1M (AI×AI deep report); Token Plan; Xhigh/max effort default.
- **Architecture:** MoE, 428B total / ~23B active, sparse attention, native visual encoder; ~165 t/s claimed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **76.5%** (AI×AI deep report)
- CursorBench 4.0: **81.2%** (same source)
- GDPval/τ-bench: no verified public row found

Reasoning / knowledge:

- GPQA/HLE/MMLU: no verified public score found for this preview

Coding:

- SWE-bench Verified: **73.8%** (AI×AI deep report, 369/500)
- HumanEval Pro (Python): **92.4%** (same source)
- MultiPL-E (8 langs): **88.6%** (same source)
- Independent corroboration: none found in official MiniMax cards yet (Medium: no standalone scorecard)

Multimodal:

- Text/image/video input supported per vendor docs; no published vision benchmark numbers.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 75/100.** Terminal-Bench 4.0 76.5 and CursorBench 81.2 are the pricing source's rows; independent verification pending.
- **Reasoning: 62/100.** Always-on tunable reasoning advertised, but no published GPQA/HLE/MMLU row for the preview.
- **Context window: 97/100.** 1M native per MiniMax docs.
- **Multimodal: 68/100.** Image+video input documented; no vision eval numbers yet.
- **Coding: 84/100.** SWE-bench Verified 73.8 headline row from the launch-week deep report; treat as provisional until independently reproduced.
- **Cost efficiency: 95/100.** Reported $0.10/$0.40 per 1M at Token Plan is near flash-class floor.
- **Overall Score: 77/100.** Mean of five non-cost dims (75+62+97+68+84)/5 = 77.2 → 77; best fit: 1M-context fast coding preview — validate against your own harness before adopting.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (MiniMax agent tools guide, AI×AI deep report, LLM Reference, Medium reviews, Sina coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
