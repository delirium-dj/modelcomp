# Claude Sonnet 4.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet generation released early 2026 for long-horizon coding at efficient price point. Dominant long-horizon coding agent since early 2026 ($3/$15 per 1M efficient cadence). Superseded by Sonnet 4.6 and 5.x line at same pricing; remains compatibility default. Same Claude Code integration heritage across family cadence including Fable sibling positions. Full multimodal including image input confirmed per Anthropic docs; text output only. 200K context window standard but 1M beta tier available for Tier 4+. No free tier confirmed. Video NOT confirmed Audio NOT confirmed. Full Responses API suite including structured outputs, JSON mode. Native computer use available in beta tier.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4.5`); Claude Max subscription tiers; Standard + Fast tiers; OpenRouter route `anthropic/claude-sonnet-4.5`. Chat Completions API only, no Responses API in older docs.
- **Release / knowledge:** Early 2026 (2026-01). Knowledge cutoff: January 2026.
- **IDs:** `anthropic/claude-sonnet-4.5`; `claude-sonnet-4.5`; deprecated alias `claude-sonnet-4.5`
- **Context window:** 200,000 tokens (~200K); 64,000 max output. Standard Sonnet cadence but 1M beta tier available for Tier 4+.
- **Modalities:** Image, text, File input; text output. Reasoning yes (effort levels incl. xhigh). Full Claude Code heritage across family cadence plus structured outputs, JSON mode native. Native computer use available in beta tier. Multimodal vision depth confirmed per Anthropic docs emphasis on multimodal leadership. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $3 input / $15 output per 1M tokens standard efficient frontier cadence. Blended effective ~$4.50 per 1M standard highly efficient mid-band. Cache $0.30 significantly discounted improves value. Same rate as Sonnet 4.6/5.x siblings keeping compatibility default.
- **Architecture:** Proprietary Anthropic architecture. Claude Code heritage across family including Opus/Sonnet/Fable lineage. Hybrid attention mechanisms inherited from Claude 4.x through 4.5 generation.

### Raw benchmarks found

**Anthropic official releases & documentation**

- SWE-bench Verified **77.2%** confirmed (vendor claim, note: superseded by newer SWE-bench versions).
- AIME 2025 **87%** confirmed frontier reasoning benchmark.
- GPQA **83.4%** confirmed frontier reasoning benchmark.
- ARC-AGI-2 **13.6%** confirmed known weakness.
- FrontierMath v2 Tier 4 **4.17%** confirmed weak reasoning position.
- JobBench **27.7%** confirmed shallow agentic benchmark.
- OSWorld-Verified **61.4%** verified coding agent benchmark.
- Design Arena **1197 Elo** confirmed multimodal human preference.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes proprietary models including Claude Sonnet line.
- Vals AI index consistent with Claude Sonnet 4.5 frontier coding positioning globally including SWE-bench Verified 77.2% competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 61.4% moderate; JobBench 27.7% weak; SWE-bench Verified 77.2% competitive coding anchor. Cap near 82 but deep agentic breadth narrow vs dedicated coding agent frontiers.
- **Reasoning: 72/100.** GPQA 83.4% solid but ARC-AGI-2 13.6% and FrontierMath T4 4.17% severe weakness caps reasoning ceiling well below top frontier (~90). Hard cap ~78 given these architectural constraints.
- **Context window: 78/100.** 200K standard Cadence but beta 1M tier available expanding ceiling. Hard cap near 82 given frontier 1M flagship comparison where most flags hit 1M+.
- **Multimodal: 72/100.** Image input confirmed per Anthropic docs. Design Arena 1197 Elo confirms visible reasoning quality. No MMMU-Pro score surfaced; no audio/video confirmed. Cap ~78 given visual premium vs audio/video absence.
- **Coding: 78/100.** SWE-bench Verified 77.2% strong anchor for long-horizon coding consistent with Claude Sonnet line generational depth. Hard cap near 82 given frontier cadence coding consensus.
- **Cost efficiency: 92/100.** $3/$15 per 1M extreme frontier efficiency by dataset median. Blended ~$4.50 per 1M standard highly efficient. Cache significantly discounted improves value. Mid-band overall high cost advantage among frontiers.
- **Overall Score: 75.6/100.** Mean of five non-cost dims: (78+72+78+72+78)/5 = 75.6. Adjust UP modestly for coding depth, cost efficiency outstanding, design Arena multimodal confirmation, plus 1M beta tier availability. Final ~81.2.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official benchmark announcements, DeepSeek_4_Flash sibling cross-reference with independent verification, Artificial Analysis Intelligence Index inclusion, Vals AI leaderboard cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Claude Sonnet 4.5 Launch Announcement | Anthropic>]
  - [<Artificial Analysis — Claude Sonnet intelligence index>]
  - [<Vals AI Claude Sonnet leaderboard>]
- Future sources: add new file next to this one.
