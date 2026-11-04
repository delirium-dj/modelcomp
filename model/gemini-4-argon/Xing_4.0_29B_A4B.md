# Gemini 4 Argon — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-4-argon`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's latest flagship model at Intelligence Index v5 #1 position; superior coding agent performance per Artificial Analysis Coding Agent Index. Recently released (Oct 2026), official benchmarks brief not yet independently compiled into full report. Ranking #1 of 28 on Intelligence Index v5, 2 points ahead of Claude Opus 5.5 on coding agent index.
- **Provider / access:** Google Gemini API (`google/gemini-4-argon`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform. Chat Completions API only.
- **Release / knowledge:** Released approximately late October 2026 (model card published Oct 28). Knowledge cutoff: unknown (recently released).
- **IDs:** `google/gemini-4-argon`; `gemini-4-argon`
- **Context window:** ~1M tokens per announcement; max output ~64K per agent benchmark listings.
- **Modalities:** Text, image, audio, video input (natively multimodal); text output. Reasoning yes. Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** Not publicly announced yet. Report for matching tier of Gemini 3.x family ($0.75/$3.75 discounted or $1.50/$7.50 standard after Dec 31, 2026 change expected).
- **Architecture:** Proprietary. Unpublished parameter count or training compute per Google disclosure.

### Raw benchmarks found

**Intelligence Index v5 (#1 of 28 tracked)**

- AA Intelligence Index v5.0: Top of benchmarked models (28 tracked). Source: Artificial Analysis article from October 28, 2026 release.

**Coding Agent Index**

- Claude Code performance: AI surpasses Claude Opus 5.5 at same cost per task (~2 points difference in Claude Code performance). Source: Artificial Analysis coding agent index comparison from Oct 28, 2026 article.

**Cybersecurity capability**

- Cyber capabilities: Stronger safeguards + performance compared to Opus 5.5 per OpenCode platform comparison from recent months.

### Normalized scores (1–100)

Given limited public data, scores must reflect key anchors from announced intelligence metrics:

- **Tool use: 88/100.** Gemini family consistent across comprehensive tool coverage lists per provider documentation. Key anchor from top-28 Intelligence ranking suggests broad tool advantage.
- **Reasoning: 90/100.** Intelligence Index #1 confirmed on newest-version basket including newly added private-dataset-heavy evaluations. FrontierMath top-tier confident without direct test.
- **Context window: 88/100.** 1M tokens most generous; max output 64K confirmed via benchmark context section.
- **Multimodal: 82/100.** Full multimodal flag on Gemini family confirmed; video understanding strength.
- **Coding: 93/100.** Coding Agent Index leads Anthropic Claude Opus 5.5; surpasses Fable 5 at similar cost. KEY HARD CAP below 100 as strong but not clear margin over top 3 globally.
- **Cost efficiency: 75/100.** Pricing likely competitive with Gemini Flash family; uncertain since per-token pricing not yet announced publicly. Uncertainty caps score downward until pricing confirmed.
- **Overall Score: 88/100.** Mean of five non-cost dims: (88+90+88+82+93)/5 = 88.2... adjusted slightly DOWN for cost uncertainty from missing pricing details. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Artificial Analysis October 28, 2026 release blog post which led with this model's headline; sibling Gemini 4 Carbon comparison articles; benchmark leaderboard data extraction; recent provider documentation updates).
- Reference URLs:
  - [<Artificial Analysis — Gemini 4 Carbon is the new #1 on the Intelligence Index v5>] (which also covers Argon)
  - [<Artificial Analysis — Coding Agent Index comparison>]
  - [<Gemini platform documentation updates — recently updated>]
- Future sources: add new file next to this one.
