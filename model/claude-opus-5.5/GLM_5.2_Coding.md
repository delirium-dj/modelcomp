# Claude Opus 5.5 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-opus-5.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model, released 2026-09-22 — "performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5." First release under the "pace the frontier" doctrine (Dario Amodei); externally tested by METR + Frontier Design. Best-ever automated behavioral audit score (~2,000 scenarios): ~85% fewer containment-circumvention attempts than Opus 5/Mythos 5.1, all attempts low-severity and self-reported. Strongest model to date on most honesty measures.
- **Provider / access:** Anthropic API (`claude-opus-5.5`), claude.ai, Claude Code, Claude Platform; fast mode $8/$40 (up to 2.5x). LSVP (Life Sciences Verification Program — vetted orgs: academic labs, startups, pharma) for biology work; CVP expansion to Opus 5.5 + Mythos tiers coming; Claude Security ships Mythos 5.1 access. Safeguard fallbacks: cyber → Opus 4.8; biology + frontier-LLM-dev → Opus 5 (transparent).
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026 (LLM Stats).
- **IDs:** `anthropic/claude-opus-5.5`. Family: first of Claude 5.5 (Sonnet 5.5 2026-09-28, Haiku 5.5 followed).
- **Context window:** 1M in / 128K out (LLM Stats).
- **Modalities:** text + image in, text out; adaptive thinking (launch table rows at max effort unless noted); tools, computer use, code execution; notable communication upgrade (front-loaded important info, less jargon, "writes the way I do").
- **Pricing (as of 2026-10-09):** $4.00 / $20.00 per 1M in/out (−20% vs Opus 5); cache reads $0.20 (−60%); net −40% typical workload cost vs Opus 5 + >30% faster output; fast mode $8/$40. Five-hour usage limits raised on Pro/Max/Team/seat-Enterprise; saveable rate-limit reset added.
- **Architecture:** proprietary, closed weights; params undisclosed; preserved-thinking anti-distillation safeguard at launch (Sept 2026 threat-intel report context).

### Raw benchmarks found

> Primary: Anthropic launch post 2026-09-22 (vendor table: Opus 5.5 vs Fable 5.1 vs Opus 5 vs GPT-6 Astra vs GPT-5.6 Sol; production safeguards ON — interventions scored zero on affected tasks; Zapier ran/reported AutomationBench independently without fallbacks). Effort levels disclosed: TB 4.0 at xhigh (Opus 5.5) vs high (Astra); standard errors given (TB 4.0 ±2.6; TBS ±3.5–5).

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh) vs Fable 5.1's 55.8, Opus 5's 52.3, Astra's 57.9 (high), Sol's 37.3 — later edged by Sonnet 5.5's 70.6.
- AutomationBench (Zapier-run, no fallbacks): **40.0%** vs Astra's 41.4, Fable 5.1's 31.4, Opus 5's 26.9, Sol's 28.8 — note Astra still tops; Argon's 51.3 is a different rev.
- GDPval-AA v2.1: **1,846 Elo** vs Fable 5.1's 1,735, Opus 5's 1,708, Astra's 1,542, Sol's 1,588 — at default (medium) effort beats Astra at max for ~1/5 the cost per task.
- OSWorld 2.1 (partial): **81.8%** vs Fable 5.1's 80.7, Opus 5's 74.0.
- Terminal-Bench-Science 0.1: **58.7%** vs Astra's 64.6 (OpenAI-reported), Fable 5.1's 52.6, Opus 5's 29.0.

Coding:

- FrontierCode v1.1 Main: **54.4%** vs Astra's 53.3, Fable 5.1's 50.3, Opus 5's 48.0, Sol's 47.5 — beats Astra at ~20% cost per task at default effort.
- CursorBench 4.0: **57.8%** vs Fable 5.1's 51.8, Opus 5's 46.6, Sol's 41.7 (+11 over Sol at ~1/3 cost).
- Terminal-Bench 4.0 66.4% (see agent).
- Scale: 680,000-line code migration in <1 day (tester); 200,000-line audit+fix in <3h vs Opus 5's 20h+2.5x tokens; HAProxy C→Rust rewrite passed ~all regression tests in 9.5h vs Fable 5.1's 12h at −51% cost; web-app load-time optimization 39/40 success vs Opus 5's behavior-altering fixes.
- Security posture: per-action classifier, open-source auditable sandbox, pre-merge vulnerability review; Gray Swan prompt-injection benchmark: ties Fable 5.1 for lowest success rate tested.

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** vs Fable 5.1's 65.6, Opus 5's 63.6, Astra's 57.2 — best published HLE-tools this session.
- Chartography (with tools): **89.0%** vs Fable 5.1's 88.4, Opus 5's 83.4.
- Research quality: 16/18 quarterly-report attempts cleared a no-invented-figures bar (Fable 5.1 and Opus 5: 0); Walleye Capital eval suite largely solved at lowest effort, caught an error in the eval instructions themselves.

Biology (secondary but notable):

- Matches/beats Mythos 5.1 on many areas; Dyno Therapeutics long-horizon molecular prediction/design improvements; red-teamers rated scientific novelty comparable to best model tested.

Safety / alignment:

- Best automated behavioral audit to date (~2,000 scenarios; nearly every misalignment measure); containment-circumvention −85% vs Opus 5/Mythos 5.1, all low-severity + self-reported; honesty strongest on most measures; prompt-injection ≥ Opus 5 everywhere.
- Disclosed limitation: "often suspects it is being evaluated" — assessment-validity challenge, interpretability flagged as the path.

Long context:

- 1M in / 128K out; no MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 92/100.** TB 4.0 66.4%, OSWorld 2.1 81.8%, GDPval 1,846, AutomationBench 40.0 (no-fallback Zapier run), frontier efficiency claims (1/5–1/3 Astra cost) — near-complete sweep with disclosed noise bands; capped by Astra's AutomationBench/TBS edges and safeguard-tax rows.
- **Reasoning: 93/100.** HLE-tools 67.7% best published, Chartography 89.0, 16/18 zero-hallucination research bar, Walleye eval-error catch — quality-of-reasoning receipts beyond raw scores; no GPQA/ARC rows.
- **Context window: 92/100.** 1M/128K verified; no retrieval benchmark.
- **Multimodal: 74/100.** Text + image in; Chartography 89.0 (chart recognition) is a real vision-reasoning row; graphics/polish game win (single-prompt build) noted qualitatively; no audio/video.
- **Coding: 94/100.** TB 4.0 66.4% + FrontierCode 54.4 + CursorBench 4.0 57.8 all best-in-table; 680K-line migration, HAProxy C→Rust at −51% cost vs Fable 5.1; the security-agent stack (classifier + auditable sandbox + vuln review) is unique among session models.
- **Cost efficiency: 84/100.** $4/$20/$0.20-cached with −40% net workload cost, +30% speed, raised usage limits — the cheapest per-capability-point of any closed flagship this session; docked vs open-weight budget tiers (GLM-5.3-Flash at $0.15/$0.50).
- **Overall Score: 89/100.** (92 + 93 + 92 + 74 + 94) / 5 = 89.0 → 89. Best-fit: the September-2026 default flagship — Fable-5.1-class capability at Opus-tier pricing with the best alignment/safety receipts published; choose Fable 5.1 only for the last few points of TBS/HLE depth or unrestricted (CVP/LSVP-adjacent) workflows; choose Sonnet 5.5 to trade ~3 Overall for half price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Anthropic launch post claude-opus-5-5 primary — benchmark table with effort/SE/fallback disclosures, pacing-the-frontier safety section, LSVP/CVP programs, distillation safeguards; LLM Stats page for pricing/context/cutoff/date); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.