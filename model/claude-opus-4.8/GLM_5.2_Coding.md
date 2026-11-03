# Claude Opus 4.8 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus upgrade over 4.7, launched same-price with a "modest but tangible improvement" profile and an **honesty** headline: ~4x less likely than 4.7 to let flaws in its own code pass unremarked; flags uncertainty instead of overclaiming. Shipped with three product moves: effort control on claude.ai/Cowork, dynamic workflows in Claude Code (hundreds of parallel subagents, codebase-scale migrations), and fast mode at 3x cheaper than prior models. Alignment: prosocial-trait new highs; misalignment (deception/misuse-cooperation) substantially lower than 4.7, on par with best-aligned Mythos Preview.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), claude.ai + Cowork (effort control, all plans), Claude Code (+ Enterprise/Team/Max dynamic workflows research preview); fast mode $10/$50. Default effort: high; extra (xhigh)/max optional.
- **Release / knowledge:** released per launch post (2026, between Opus 4.7 and Opus 5's 2026-07-24 reference to "same price as predecessor 4.8"; LLM Stats date not captured this session — earlier session data says 2026-06). Knowledge cutoff not stated in post.
- **IDs:** `anthropic/claude-opus-4-8`. Family chain: 4.7 → 4.8 (this) → Opus 5 (2026-07-24, $5/$25 same price, "more than doubles 4.8's Frontier-Bench performance") → Opus 5.5 (2026-09-22, $4/$20 cheaper). Fallback role: 4.8 is what Opus 5/5.5's cyber classifiers fall back TO — it remains Anthropic's cyber-work-permitted default.
- **Context window:** 1M in / 128K out (per family docs pattern of the era; LLM Stats page stubbed this session — low-confidence flag, verify on next pass).
- **Modalities:** text + image in, text out; effort dial low→max; tool use, computer use, code execution; parallel subagents via dynamic workflows.
- **Pricing (as of 2026-10-09):** $5 / $25 per 1M (unchanged from 4.7); fast mode $10/$50 (2.5x speed, 3x cheaper than previous fast modes); cached rates not restated in post.
- **Architecture:** proprietary, closed weights; params undisclosed.

### Raw benchmarks found

> Primary: Anthropic launch post (vendor). The comparison table is an image — no numeric values surfaced in prose beyond the honesty eval; System Card holds the wide set. Cross-vendor rows from session tables where Opus 4.8 appears.

Agent / tool use:

- Dynamic workflows: codebase-scale migrations across hundreds of thousands of lines, kickoff→merge with existing test suite as bar (qualitative capability claim).
- Kimi K3's kernel-optimization study (2026-07-16): Opus 4.8 "substantially outperformed" by K3 and competitive-with-Fable-5 K3; i.e. 4.8 was mid-field there — logged as third-party context.
- GDPval-AA v2: 4.8 row absent from session tables (Opus 5's 1,824 led Google's table; 4.8 predates v2 or wasn't run).

Coding:

- Honesty eval: **~4x less likely than Opus 4.7** to let code flaws pass unremarked (Anthropic, system-card-linked) — the launch's flagship metric.
- Terminal-Bench 4.0: no 4.8 row in session tables (Fable 5.1's launch table jumped straight to Opus 5 at 52.3%).
- Lovable internal (via Opus 5 post): Opus 4.7-based comparison "up 22% over Opus 4.7" implies 4.8's baseline era; not a 4.8 number.

Reasoning / knowledge:

- Alignment assessment: misalignment rates substantially lower than 4.7; prosocial new highs (system card).
- No HLE/GPQA/AA rows for 4.8 in session tables.

Safety (secondary):

- Project Glasswing: Mythos Preview class (above 4.8) required stronger cyber safeguards — 4.8 sat below that line at GA.

Long context:

- No MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Opus 4.8's launch deliberately led with reliability/honesty over benchmark jumps; numeric table absent from readable sources this session — dims placed on verified qualitative claims, cross-vendor context rows, and family positioning (between 4.7 at 89.7 and Opus 5 at 92.1 on LLM Stats aggregates).

- **Tool use: 84/100.** Dynamic workflows (hundreds of parallel subagents) is a real agent-infrastructure headline; effort dial + fast mode 3x-cheaper enable production loops; no TB/OSWorld rows verified.
- **Reasoning: 84/100.** "Modest but tangible" over 4.7 (89.7 aggregate); honesty/uncertainty-flagging evals are reasoning-adjacent quality signals; alignment new-highs.
- **Context window: 92/100.** 1M in / 128K out (family-era spec, low-confidence flag); no retrieval score.
- **Multimodal: 70/100.** Text + image in, text out.
- **Coding: 86/100.** Honesty-first code quality (4x fewer unremarked flaws) + dynamic-workflow codebase migrations; superseded by Opus 5's "more than doubles Frontier-Bench" jump weeks later.
- **Cost efficiency: 62/100.** $5/$25 held steady, but Opus 5 (same price, big jump) and then Opus 5.5 ($4/$20, better) compressed 4.8's value case within ~3 months; fast-mode $10/$50 is still the cheaper throughput path of its era.
- **Overall Score: 83/100.** (84 + 84 + 92 + 70 + 86) / 5 = 83.2 → 83. Best-fit: the honest-workhorse tier — code-review-grade reliability, uncertainty flagging, and cyber-permitted fallback status keep it in production rotation; new builds should start at Opus 5.5 unless the cyber-fallback or fast-mode economics specifically apply.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Anthropic launch post claude-opus-4-8 primary — honesty eval, dynamic workflows, effort/fast-mode pricing, Glasswing context, alignment summary; Kimi K3 kernel study as third-party context); LLM Stats page returned a stub this session — context-window row flagged low-confidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.