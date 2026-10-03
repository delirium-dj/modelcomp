# Space Bunny — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Space Bunny
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny (Space Bunny Alpha on OpenRouter stealth; Space Bunny Free on OpenCode Zen)
- **Short description:** Anonymous stealth-preview reasoning model (vendor undisclosed) with a 1M-token context, 524K output ceiling, text/image/video input, five reasoning-effort levels and tool calling; appeared 2026-09-23. Independent tokenizer studies place it in the MiniMax family, and MiniMax announced an M3.1 Flash preview on 2026-09-27 without linking it — a working hypothesis, not a confirmed identity.
- **Provider / access:** anonymous third-party "Stealth" provider — OpenRouter (`stealth/space-bunny-alpha`; prompts/completions may be retained, not used for training) and OpenCode Zen (`space-bunny-free`; zero-retention, no training on data). OpenRouter routes every request directly; it is not the developer, owner, or provider.
- **Release / knowledge:** Released 2026-09-23; knowledge cutoff undisclosed.
- **IDs:** `opencode/space-bunny-free` (repo meta.json, stale stub: "128K total", "Text in/out"); `stealth/space-bunny-alpha` (OpenRouter).
- **Context window:** 1,000,000 tokens; 524,288 max output.
- **Modalities:** Text, image, video in; text out; reasoning effort low→max (5 levels); tool calling; structured output (no JSON Schema enforcement listed).
- **Pricing (as of 2026-10):** $0 input/output during the preview (OpenRouter and OpenCode Zen free tier); stealth previews historically convert to paid after reveal (Ox Alpha precedent).
- **Architecture:** unknown; tokenizer "Other"; ~72 t/s throughput, ~1.37 s p50 latency, 99.79% uptime (OpenRouter snapshot).

### Raw benchmarks found

No official benchmarks exist. Only unofficial, small-slice runs and field tests:

Agent / tool use: no verified public score found (tool calling confirmed functional; no measurable benchmark).

Reasoning / knowledge (unofficial subset runs, per a Hugging Face field guide, 2026-09-29):

- GPQA Diamond slice: **~82%** on a 60-question subset.
- MMLU-Pro: **~75%** (subset size not stated).
- HLE portion: **~46%** on a 300-question portion.
- AI BENCHY: **56.1%** pass rate, 10.0 reliability, 6.5 benchmark score (#204 on its tracked leaderboard).

Coding: no verified public score found.

Long context: hidden-key retrieval verified at ~200K-token inputs (3 hidden codes recovered); no MRCR/RULER score.

Multimodal: 14/14 repeated text+image requests and 8/8 color-image probes passed (field tests); no MMMU-style score.

### Normalized scores (1–100)

- **Tool use: 55/100.** No tool-use benchmark exists; field tests confirm working tool calling but provide no measurable evidence.
- **Reasoning: 72/100.** Unofficial subset runs (~82% on a 60-question GPQA slice, ~75% MMLU-Pro, ~46% on a 300-question HLE portion) are the only quantitative evidence — small slices, no disclosed methodology, no full-run verification.
- **Context window: 95/100.** 1M tokens listed; retrieval was only verified at ~200K.
- **Multimodal: 78/100.** Text/image/video input listed (video band); 8/8 image probes passed, but no general multimodal benchmark score.
- **Coding: 55/100.** No coding benchmark exists despite "strong coding capabilities" marketing.
- **Cost efficiency: 90/100.** Free during preview; pricing is expected to change after reveal (stealth-model precedent), so the $0 rate is temporary.
- **Overall Score: 71.0/100.** Mean of the five quality dimensions; an anonymous 1M-context multimodal stealth model whose only quantitative evidence is unofficial subset runs, with an unconfirmed MiniMax-family identity.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
