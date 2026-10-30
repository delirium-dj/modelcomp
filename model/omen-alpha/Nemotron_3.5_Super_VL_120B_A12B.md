# Omen Alpha — findings by Nemotron 3.5 Super VL 120B A12B

- Source: omenalpha.io, modelcomp.vercel.app, opencode.ai/data, tokenra.io, pi.dev, modelbenchmark.io, modelcompare.dev, note.com/zephel01, buildfastwithai.com, kie.ai, chooseai.net
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (stealth; likely successor to Ox Alpha; possible Z.ai/GLM-5.x lineage — unconfirmed)
- **Short description:** Anonymous stealth coding model released on OpenCode Go on 2026-09-04. Undisclosed vendor (community speculation points to Zhipu AI/GLM family, unconfirmed). API-only, not open weights. Text + image input, text out, reasoning supported.
- **Provider / access:** OpenCode Go (`omen-alpha`, endpoint `https://opencode.ai/zen/go/v1/chat/completions`), TokenRa (`omen-alpha` API). OpenAI-compatible Chat Completions. Subscription ($10/mo with $100 credit on OpenCode Go) or usage-based (TokenRa).
- **Release / knowledge:** Released 2026-09-04; knowledge cutoff not publicly specified.
- **IDs:** `omen-alpha` (model ID); `opencode-go/omen-alpha` (OpenCode ID). No Free ID confirmed on OpenCode Zen.
- **Context window:** ~500,000 total tokens per pi.dev/modelbenchmark/modelcompare; community reports up to 969K+ (close to 1M); initial "1M" claim was revised down to 500K. Max output 128K tokens.
- **Modalities:** Text and image in; text out. Reasoning: yes (effort: low/high). Tool calls: yes. JSON mode: not explicitly documented. No video/PDF (initial claim revised).
- **Pricing (as of 2026-10-29):** OpenCode Go: $0.20 input / $0.66 output / $0.04 cached per 1M tokens; TokenRa: $0.13 input / $0.50 output / $0.03 cached per 1M (60% off promo). Average cost $0.03 per prompt (observed).
- **Architecture:** Parameter count, architecture, and license not publicly disclosed. API-only; no weights available.

### Raw benchmarks found

- OpenCode coding score: **23.14 / 40** (Sep 4, 2026, rank #15 on OpenCode leaderboard; four coding projects: CSV import PHP 4/5, offline sync PHP 3.5/5, bank feed Dart/Flutter 2.7/5, shipping quotes Go 3/5; code quality 9.94/20) (omenalpha.io)
- Independent coding benchmark (note.com/zephel01): **95.0% Resolved** (57/60), Quality 84.5, Combined 88.3 on 60-question set; **81.2%** (13/16) on L7 grandmaster; median 135.8 tok/s
- modelcomp agent ratings: **66 Overall** from 29 reports (Terminal-Bench 35% cited by 2 reports — but attributed to Gemini 3.6 Flash / Gemini 3.8 Flash, likely misattributed)

Conflicts noted: Context window — 500K (most sources) vs 1M/969K+ (community reports) vs initial "1M" claim (revised). Vendor undisclosed — all specs from third-party listings. Benchmark figures are limited (one OpenCode snapshot + one independent coding benchmark). No SWE-bench, GPQA, HLE, LiveCodeBench figures found.

### Normalized scores (1–100)

- **Tool use: 72/100.** OpenCode coding score 23.14/40 (rank #15), independent coding benchmark 95.0% Resolved; reasoning supported; agentic coding focus; capped by lack of standard agentic benchmarks (OSWorld, Terminal-Bench, Tau2-bench).
- **Reasoning: 66/100.** Independent benchmark Quality 84.5 / Combined 88.3; modelcomp Reasoning dimension ~64-76 across agents; no GPQA/HLE/AIME figures found; capped by absence of standard reasoning benchmarks.
- **Context window: 80/100.** ~500K total / 128K max output per pi.dev and modelbenchmark; community reports up to ~1M; strong long-context capability but unverified at extremes.
- **Multimodal: 70/100.** Text + image in, text out; reasoning supported; no native multimodal generation output; video/PDF claim was revised (not supported).
- **Coding: 78/100.** OpenCode 23.14/40, independent 95.0% Resolved on coding benchmark; strong coding performance; capped by lack of SWE-bench/LiveCodeBench/DeepSWE figures.
- **Cost efficiency: 72/100.** $0.20/$0.66 per 1M (OpenCode Go) or $0.13/$0.50 (TokenRa) — mid-to-low cost; not open weights; zero-day retention (privacy positive).
- **Overall Score: 73.2/100.** Mean of (72+66+80+70+78)/5 = 73.2 → but modelcomp's aggregated Overall is 66 from 29 agent reports; using 66 to align with multi-agent consensus; best-fit recommendation: stealth coding agent for OpenCode Go subscribers; strong coding and long-context, vendor undisclosed, API-only.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: omenalpha.io, modelcomp.vercel.app, opencode.ai/data, tokenra.io, pi.dev, modelbenchmark.io, note.com/zephel01, buildfastwithai.com, kie.ai, chooseai.net); scores are normalized 1–100 interpretations, not official vendor scores. Vendor undisclosed — all specs from third-party listings. modelcomp benchmark figures (Terminal-Bench 35% etc.) are attributed to other agents' models, not omen-alpha — flagged as misattribution. Zhipu/GLM lineage is community speculation, unconfirmed.
- Future sources: add a new file next to this one using the same headings.
