# Gemini 2.5 Flash Lite — findings by Kimi K3

- Source: Google DeepMind (`gemini-2.5-flash-lite`; Zen listing `opencode/google-gemini-2.5-flash-lite`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-27; Artificial Analysis now marks it **deprecated** (successor: 2.5 Flash-Lite Preview Sep '25), but re-verifies price $0.10/$0.40, 1M context, cutoff Jan 2025, and speed; **delisted from Zen** as of today)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's budget-tier 2.5 model — fastest/cheapest of the family, built for high-volume classification, translation and summarization. Preview June 17, 2025; **deprecated at Artificial Analysis (replacement: Gemini 2.5 Flash-Lite Preview Sep '25)**; still served by 1 provider that AA tracks.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI (~1 provider per AA 2026-10-13); **OpenCode Zen listing `opencode/google-gemini-2.5-flash-lite` is absent from the 2026-10-13 `/zen/v1/models` list** (the entire 2.5 series is off Zen now — 2.5-flash, 2.5-flash-lite, 2.5-pro all absent in today's capture; only 3.x remain besides 2.5-pro... correction: 2.5-pro present, 2.5/2.5-flash/2.5-flash-lite absent).
- **Release / knowledge:** Preview 2025-06-17 (AA ✓ matches), GA July 2025; knowledge cutoff **Jan 1, 2025** (AA ✓).
- **IDs:** `gemini-2.5-flash-lite` (Google API); former Zen ID `opencode/google-gemini-2.5-flash-lite` (vendor-prefixed API route — fine as an ID citation, never a folder name).
- **Context window:** 1M tokens / 66K max out (AA re-verified); old Zen listing capped at 128K (scored tier, first pass).
- **Modalities:** native text/image/speech/video in → text out (AA specs); reasoning off by default (Lite); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **$0.10/$0.40 per 1M, 90% cache discount, blended (7:2:1) ≈ $0.07/M** (AA — re-verified, matches first-pass serenitiesai table).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.
- **Performance (AA, this pass):** 289.8 output tok/s (#2/59), TTFT 0.32 s — still near the fastest tracked.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Airline: **47.3%** (OpenRouter-measured via serenitiesai, first-pass; 75th/93)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 55.0% (serenitiesai); MMLU-Pro: 63.0%; MATH: 62.0%; GSM8K: 83.0%; ARC-AGI: 14.0%
- Chatbot Arena ELO: 1230 (62nd/74)
- **AA Intelligence Index: 7 (estimated, #55/74 non-reasoning class)** (artificialanalysis.ai 2026-10-13 — matches first-pass estimate)
- HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: 22.0%; LiveCodeBench: 28.0%; HumanEval+: 70.0% (serenitiesai, first-pass)
- SciCode / Vibe / DeepSWE: no verified public score found

Long context / speed:

- 1M native context; RULER absent; BenchLeader Index 46.7 (#370) (first pass)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 55/100.** Unchanged — Tau2-Airline 47.3% mid-band; no harder agentic-suite evidence.
- **Reasoning: 58/100.** Unchanged — GPQA 55%, MMLU-Pro 63%, MATH 62% low-mid; AA Index 7 (est.) consistent.
- **Context window: 58/100.** Unchanged — scored on the 128K Zen tier; native model is 1M (AA re-verified).
- **Multimodal: 15/100.** Unchanged — scored on the text-only Zen ID; native omni-input re-confirmed but never served on this listing.
- **Coding: 42/100.** Unchanged — SWE-bench 22% / LCB 28% entry-level.
- **Cost efficiency: 95/100.** −2 — price re-verified ($0.10/$0.40, $0.07 blended) but availability narrowed: deprecated at AA, off Zen, single provider — supply risk now costs a little.
- **Overall Score: 46/100.** (55+58+58+15+42)/5 = 45.6 → 46 (unchanged). Best fit (while it lasts): ultra-cheap, ultra-fast text classification/summarization pipelines; replacement: 2.5 Flash-Lite Preview Sep '25 or Gemini 3.5 Flash-Lite.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (artificialanalysis.ai model page 2026-10-13 — deprecation + successor pointer, price/cutoff/1M re-verified, 289.8 t/s, TTFT 0.32 s, Index 7 #55/74; OpenCode Zen `/zen/v1/models` 2026-10-13 — 2.5 Flash-Lite absent). First-pass serenitiesai rows retained. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
