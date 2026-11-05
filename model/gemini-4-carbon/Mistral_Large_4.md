# Gemini 4 Carbon — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-4-carbon`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's second Gemini 4 model, announced 2026-10-28 — two weeks after Argon — and described by Google as its "strongest model" with state-of-the-art cybersecurity and long-horizon capabilities. A distinct model from Argon (not a tier): same $2/$10 intro price, higher scores, currently Fairwind-limited with no public GA endpoint.
- **Provider / access:** Fairwind Program trusted cyber defenders / critical-infrastructure operators first (rolling); as of 2026-10-29 the public Gemini API model list contained only Argon — no public `gemini-4-carbon` endpoint yet; no GA date given. Expected channels: Gemini API / AI Studio / Vertex once GA.
- **Release / knowledge:** Announced 2026-10-28; knowledge cutoff not restated in reviewed sources.
- **IDs:** `gemini-4-carbon` (expected stable ID at GA); not yet on the public API list (orcarouter check 2026-10-29).
- **Context window:** 1,000,000 tokens (Artificial Analysis lists 1M for Carbon; Argon's published unified 1M not restated for Carbon — noted as proxy).
- **Modalities:** Gemini 4 family natively multimodal — text/image/audio/video/PDF in, text out; thinking effort levels; function calling, computer use.
- **Pricing (as of 2026-11-05):** Same introductory $2 / $10 per 1M in/out as Argon (datastudios comparison "at the same $2/$10 price"); cached input $0.20/M. No public price page while Fairwind-limited.
- **Architecture:** Proprietary, params not disclosed; Gemini 4 family.

### Raw benchmarks found

Google blog + independent coverage, cross-checked against AA, DataStudios, laozhang, VentureBeat, orcarouter, explainx; conflicts listed side by side:

Agent / tool use:

- Leads agentic categories on AA Index v5 (article: "scoring 9..." rows; datastudios comparison) — exact per-benchmark % not fully captured; no Claw-Eval/Toolathon number found
- OSWorld / AutomationBench: no verified public score found for carbon specifically

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **60 (High) on the current live leaderboard — #1 of 97 models** (AA models page) vs **59.4** (laozhang, v5.0) vs **59** (datastudios/explainx, v5.0) — version drift across readings, all cited; ahead of Opus 5.5 (Max, 59) on the live board
- GPQA / HLE / MMLU: no verified public score found for carbon in reviewed sources

Coding:

- FrontierCode 2.0: **40.6%** vs Argon's **25.7%** (laozhang.ai head-to-head) — the clearest Carbon-over-Argon gain
- DeepSWE / SWE-bench / TB 4.0: no verified public score found for carbon specifically

Long context:

- 1M window (AA listing, Argon-family proxy); no verified GraphWalks/MRCR number for carbon

### Normalized scores (1–100)

- **Tool use: 91/100.** Current AA #1 with gains concentrated in agentic work, but most tool-use numbers are index-level, not per-benchmark public rows.
- **Reasoning: 93/100.** AA Intelligence Index 59–60, #1 on the live board — top of the 60+ frontier band; no GPQA/HLE published yet.
- **Context window: 96/100.** 1M (AA listing / Argon-family proxy) in the 95–100 tier; no verified retrieval-at-512K+ for this ID, so not 100.
- **Multimodal: 90/100.** Full Gemini 4 multimodal input stack; text-only output; no per-benchmark multimodal row captured for carbon.
- **Coding: 90/100.** FrontierCode 2.0 40.6% is a ~15-point jump over Argon's 25.7% and leads the family; no DeepSWE/TB number published for carbon yet.
- **Cost efficiency: 75/100.** Same $2/$10 intro as Argon (~78 band) but Fairwind-only access with no public endpoint caps practical availability; no free tier.
- **Overall Score: 92/100.** Half-up mean of (91 + 93 + 96 + 90 + 90) / 5 = 92.0 → 92. Best fit: current #1 on the AA live index for reasoning/agentic work once GA; until then Argon is the only publicly callable Gemini 4.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official Google blog fetched, 2026-11-05 UTC); official blog/DeepMind pages prioritized, cross-checked against Artificial Analysis, DataStudios, laozhang, VentureBeat, orcarouter, explainx, phpscientist; conflicting index readings (60 vs 59.4 vs 59) and the no-public-endpoint finding listed explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon — Google blog (official, 2026-10-28)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini — Google DeepMind models page](https://deepmind.google/models/gemini/)
  - [Artificial Analysis — live leaderboard (Carbon High 60, #1)](https://artificialanalysis.ai/models)
  - [Artificial Analysis — Gemini 4 Carbon #1 article](https://artificialanalysis.ai/articles/gemini-4-carbon-number-1)
  - [DataStudios — Carbon vs Argon (Index 59 vs 50, same $2/$10)](https://www.datastudios.org/post/gemini-4-carbon-vs-gemini-4-argon-comparison)
  - [laozhang.ai — Carbon vs Argon (FrontierCode 2.0: 40.6% vs 25.7%; Index 59.4 vs 50.4)](https://blog.laozhang.ai/en/posts/gemini-4-carbon-vs-gemini-4-argon)
  - [orcarouter — only Argon on public API list as of 2026-10-29](https://www.orcarouter.ai/blog/gemini-4-carbon-vs-gemini-4-argon)
  - [VentureBeat — Carbon unveiled, limited release](https://venturebeat.com/ai/google-unveils-gemini-4-carbon-its-strongest-model-yet-in-limited-release)
  - [explainx.ai — Carbon vs Argon two-week update](https://explainx.ai/blog/gemini-4-carbon-vs-gemini-4-argon-what-changed-in-two-weeks-2026)
  - [shattered.io — Carbon 59 vs Opus 5.5](https://shattered.io/gemini-4-carbon-scores-59-vs-claude-opus-5-5-2026/)
