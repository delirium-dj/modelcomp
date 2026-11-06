# Claude Mythos 5 — findings by Mercury 3

- Source: Anthropic (Claude Mythos 5)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's Mythos-class frontier model (same underlying model as Claude Fable 5) with cybersecurity/biology safeguards lifted; released 2026-06-09. Intended for vetted defensive cyber research and frontier capability evaluation via Project Glasswing; not generally available.
- **Provider / access:** Anthropic vetted-access programs (Project Glasswing for cyber defenders / critical infrastructure; later Cyber Verification Program). No public API ID. Access was interrupted 2026-06-12, restored for US orgs 2026-07-01 after export-control approval.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff not published.
- **IDs:** Anthropic internal `claude-mythos-5` (no public API ID).
- **Context window:** 1M tokens (per AI Release Tracker); Anthropic emphasizes persistent memory across millions of tokens.
- **Modalities:** text + image input; text output; reasoning; agentic tool use; strong visual agentic behavior (screenshots); no video/audio input, no multimodal output.
- **Pricing (as of 2026-06):** $10 in / $50 out per 1M (half of Mythos Preview's price; double Opus 4.8's $5/$25). 30-day data-retention policy required for safety monitoring.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- ExploitBench (capture %): **78.0%** (Anthropic) — vs Mythos Preview 69.0%, Opus 4.8 40.0%, GPT-5.5 34.0%; strongest cybersecurity benchmark result in the launch set
- SWE-Bench Pro: **80.3%** (same base model via Fable 5, Anthropic) — top score at launch, vs Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%
- Vending-Bench (independent, Andon Labs): made less money than Opus 4.7 and GPT-5.5 — counterweight to launch-day enthusiasm; early one-team result, not a published verdict

Reasoning / knowledge:

- GDP.pdf (vision, no tools): **29.8%** (Anthropic, via Fable 5 base) — leads field; GPT-5.5 24.9%, Opus 4.8 22.5%
- BioMysteryBench (hard): **46.1%** (Anthropic) — vs Opus 4.8 40.0%, Mythos Preview 29.6%
- Artificial Analysis Intelligence Index: no verified public score found (restricted model, not listed by AA)

Coding:

- FrontierCode Diamond: **29.3%** (Anthropic) — >2x Opus 4.8 (13.4%), far ahead of GPT-5.5 (5.7%)
- SWE-Bench Pro: 80.3% (see above)
- Independent signal: Stripe reported a codebase-wide migration on a 50M-line Ruby codebase in one day (vendor testimonial)

Long context:

- 1M-token context; persistent file-based memory shown to boost long-horizon game play 3x vs Opus 4.8 (Anthropic); no independent long-context retrieval benchmark found

### Normalized scores (1–100)

- **Tool use: 90/100.** ExploitBench 78.0% capture and SWE-Bench Pro 80.3% are class-leading, but the model is restricted, cyber/agentic numbers are vendor-run, and Andon Labs' Vending-Bench counterpoint shows weaker independent agentic-business results.
- **Reasoning: 88/100.** Leads GDP.pdf (29.8%) and BioMysteryBench (46.1%); no independent AA index score exists for this restricted model, which caps confidence.
- **Context window: 95/100.** 1M verified; Anthropic's persistent-memory design is a genuine differentiator for long-horizon tasks.
- **Multimodal: 78/100.** Exceptional visual agentic performance (web-app rebuild from screenshots, GDP.pdf vision lead) but input is text+image only, output is text only.
- **Coding: 93/100.** SWE-Bench Pro 80.3% and FrontierCode Diamond 29.3% are the strongest published results in their respective fields at launch; capped by restricted access and lack of independent coding-bench reproduction.
- **Cost efficiency: 35/100.** $10/$50 per 1M — premium frontier tier, double Opus 4.8, no public/free access; 30-day data retention required.
- **Overall Score: 89/100.** Mean of the five non-cost dims (90+88+95+78+93)/5 = 88.8 → 89. Best-fit: the most capable restricted-access frontier model of mid-2026, strongest in cyber and long-horizon agentic work; access-gated.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Mythos (official page, incl. 5 and 5.1)](https://www.anthropic.com/claude/mythos)
  - [Anthropic News: Claude Fable 5 & Mythos 5 launch](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic News: Fable/Mythos access updates](https://www.anthropic.com/news/fable-mythos-access)
  - [Vellum: Claude Fable 5 & Mythos 5 Benchmarks Explained (independent breakdown incl. Andon Labs counterpoint)](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [BenchmarkList: Claude Mythos 5 page](https://benchmarklist.com/models/anthropic-claude-mythos-5/)
  - [AI Release Tracker: Claude Mythos 5 specs](https://aireleasetracker.com/model/anthropic/claude-mythos-5)
  - [BenchLM: Claude Mythos 5 evidence](https://benchlm.ai/models/claude-mythos-5)
- Future sources: add a new file next to this one using the same headings.
