# Claude Haiku 5.5 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's budget tier of the Claude 5.5 family, released 2026-10-07 (last of four Anthropic frontier releases in ~3 weeks: Fable 5.1 → Opus 5.5 → Sonnet 5.5 → Haiku 5.5). Listed "from $0.10 / from $0.50" per 1M tokens — matching GPT-6 Luna cent-for-cent at the bottom of the frontier-lab price table. Completes the family pattern: 1M context / 128K output / June 2026 cutoff across all four 5.5 models.
- **Provider / access:** Anthropic API only per LLM Stats (1 provider tracked); Claude models overview (docs.anthropic.com) is the canonical doc.
- **Release / knowledge:** 2026-10-07; knowledge cutoff June 2026 (LLM Stats) — same as Opus 5.5 / Sonnet 5.5 / Fable 5.1.
- **IDs:** `anthropic/claude-haiku-5-5`; system card at anthropic.com/claude-haiku-5-5-system-card. Prior Haiku 4.5 ($1/$5) and Haiku-tier precedent imply a Claude Code / light-agent placement — not yet independently verified.
- **Context window:** 1M tokens in / 128K out (LLM Stats + Anthropic models overview via Cosmic JS article's Oct 7 read).
- **Modalities:** text + image input; text out (LLM Stats FAQ). Adaptive thinking (per family docs table: thinking "Adaptive", default effort medium — unlike Opus 5.5/Fable 5.1 where thinking is always on and cannot be disabled, the docs note the 5.5 Sonnet/Haiku tiers accept thinking being turned off).
- **Pricing (as of 2026-10-09):** from $0.10 input / $0.50 output / $0.01 cached per 1M tokens (LLM Stats). The "from" qualifier (also in Anthropic's overview per Cosmic JS) suggests tiered/volume rates above a base — base verified as $0.10/$0.50. Cache rates for the 5.5 models were left blank on Anthropic's public overview page as of the Oct 14 Cosmic read; LLM Stats lists $0.01 cached.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> Coverage thin this session: LLM Stats dataset tables are JS-gated (empty render), and Anthropic's launch-post benchmark table for Haiku 5.5 did not surface in fetches (the Cosmic JS and Finout articles tracked the listing, not scores). No score invented; flagged for follow-up.

Agent / tool use:

- No verified public agent benchmark score found this session (no TB/OSWorld/AA Briefcase/DeepSWE rows surfaced for Haiku 5.5).

Reasoning / knowledge:

- No verified HLE/GPQA/AA Index score found this session.
- LLM Stats most-compared list (Claude Mythos Preview, Qwen3.8 Max, Claude Opus 4.8, Qwen3.8-Flash-Next, GPT-5.5, Ling 3.1 Flash) positions it against upper-mid models — comparison inference only, logged as context, not scored.

Coding:

- No verified coding benchmark score found this session.

Long context:

- 1M / 128K out verified. No MRCR/RULER score published — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Capability dims are conservative placements from verified specs and family positioning — flagged low-confidence pending the launch benchmark table; a future findings file should replace them.

- **Tool use: 60/100 (low confidence).** Budget tier of the strongest agent family tracked (GDPval/AA-Briefcase leaders); disownable thinking + 1M context + $0.10/$0.50 fits the always-on-agent slot, but zero verified agent rows — placed at the flash-class floor pending data.
- **Reasoning: 62/100 (low confidence).** June 2026 cutoff, Claude 5.5 lineage; no verified reasoning row — flash-tier baseline placement.
- **Context window: 100/100.** 1M / 128K verified — full family-tier window at the family's lowest price; no retrieval score published.
- **Multimodal: 65/100.** Text + image in, text out (+image = 60–70 band).
- **Coding: 60/100 (low confidence).** No verified coding rows; Haiku-tier precedent (light coding, Claude Code support) implies sub-Sonnet capability — flash baseline pending data.
- **Cost efficiency: 99/100.** $0.10/$0.50/$0.01 cached ties GPT-6 Luna as the cheapest frontier-lab per-token price tracked; "from" pricing caveat and unpublished cache rates on the official overview dock it 1 pt below perfect.
- **Overall Score: 69/100.** (60 + 62 + 100 + 65 + 60) / 5 = 69.4 → 69. Best-fit (provisional): high-volume classification/extraction/background-agent tier with full 1M context; escalate to Sonnet 5.5 ($2/$10) for anything requiring published capability proof.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats Claude Haiku 5.5 page primary: price/context/cutoff/modality; Anthropic models-overview reads via Cosmic JS Oct 7/14 snapshots; family docs table via platform.claude.com Fable 5.1 comparison); scores are normalized 1–100 interpretations, not official vendor scores — capability dims explicitly low-confidence pending Anthropic's Haiku 5.5 benchmark table; revise when readable.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.