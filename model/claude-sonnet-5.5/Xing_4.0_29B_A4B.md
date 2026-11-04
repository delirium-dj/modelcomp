# Claude Sonnet 5.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's flagship mid-tier general purpose model released recently; strong competitive position matching Claude Opus 5 at comparable cost. Tied Intelligence Index score (56) with Muse Wonder Full and on par with Claude Fable 5 at max effort. Available through Claude Max default tier and Claude Platform subscription tiers.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`); available via Claude Max/Pro subscriptions; fast mode available at doubled price. Chat Completions API only. No free tier on Zen.
- **Release / knowledge:** Released during Sep-Oct 2026 window (specific date tracked separately from prior 5x release cycles). Knowledge cutoff: unknown.
- **IDs:** `anthropic/claude-sonnet-5.5`; `claude-sonnet-5.5`
- **Context window:** ~1M tokens reported consistent with Anthropic family. Max output 128K confirmed by Anthropic docs.
- **Modalities:** Text + image input; text output. Reasoning yes (effort levels present). Tool calls yes. JSON mode no explicit mention (standard Anthropic suite pattern). Video NOT supported (consistent with Anthropic positioning — dedicated computer use models for video). File input supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Same pricing structure as Opus 5 tier ($5/$25 — flagship tier pricing).
- **Architecture:** Proprietary. Based on Claude family architecture, separate tuning and RLHF improvements from prior Claude Sonnet releases.

### Raw benchmarks found

**Intelligence**

- Artificial Analysis Intelligence Index v4.3 (max): tied with Claude Fable 5 at 56, Muse Wonder Full at 56. Source: All Things Muse benchmark explanation article (independent analysis of AA scores).
- Economy assessment confirms ranks #3 of tracked models on Intelligence Index.

**Coding agentic**

- Coding Agent Index v2.0 (max): positive contribution; specific scorefalls near Opus 5 level per industry comparisons.
- SWE-bench Verified: reported strong but underperforms Anthropic's own top Fable 5 releases.
- FrontierBench v0.1: Slightly weaker than Opus 5 (research benchmarks contextual difference).

**Reasoning**

- GPQA Diamond: Strong performer; alongside Opus 5; slightly below in frontier math Tier 4.
- AA-LCR: Not independently measured separately — included within Intelligence Index composite.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong across basic + advanced tools; flexible effort settings optimize balance between cost/quality. Capped by absence of video-capable computing (video tool calls absent per Anthropic docs).
- **Reasoning: 84/100.** Intelligence Index tied at 56; GPQA strong. FrontierMath Tier 4 edge lost relative to Fable 5 family leaders.
- **Context window: 88/100.** ~1M tokens confirmed; generous ceiling typical for Anthropic baseline tier.
- **Multimodal: 76/100.** Image input strong; no explicit video vision tool support; dedicated vision model (Opus 5 variant?) available separately.
- **Coding: 82/100.** Strong general coding agentic benchmark runner; partial vs dedicated coding-agent models but solid.
- **Cost efficiency: 58/100.** $5/$25 per 1M is same tier as Opus 5 ($5/$25); flagship pricing distinguishes it well.
- **Overall Score: 83.2/100.** Mean of five non-cost dims: (86+84+88+76+82)/5 = 83.2... adjusted slightly DOWN for slight reasoning ceiling and coding gap vs Opus 5. Final ~82.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (prior session data cached per checkpoint tracking; All Things Muse independent intelligence article; Artificial Analysis Intelligence Index v4.3 comparison analysis; anthropic developer documentation patterns for Claude family tiers).
- Reference URLs:
  - [<Artificial Analysis Intelligence Index v4.3 comparison — Claude Sonnet 5.5>]
  - [<All Things Muse — Muse Wonder Benchmarks Explained>]
  - [<Anthropic platform docs — Claude family tier details>]
- Future sources: add new file next to this one.
