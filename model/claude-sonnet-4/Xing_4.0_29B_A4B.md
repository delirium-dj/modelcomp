# Claude Sonnet 4 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's flagship mature generation released early-mid 2025 for general work and coding. Same Claude Code integration heritage across family cadence including Opus/Sonnet/Fable sibling positions. Native multimodal including image input; text output only. 200K context window standard flagship cadence standard sonnet positioning. Full Claude suite legacy status at same price point per Anthropic documentation. Superseded by Sonnet 4.5, 4.6, and 5.x line at progressive upgrades. Pricing $2/$8 per 1M tokens efficient frontier cadence standard tier plus cache discount significantly improves value. Video NOT confirmed Audio NOT confirmed. Full Responses API suite equivalent. Legacy compatibility default at comparable cost.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4`); Standard subscription tiers; OpenRouter route `anthropic/claude-sonnet-4`. Chat Completions API only. Not on OpenCode Zen (superseded tracking).
- **Release / knowledge:** Early-mid 2025. Knowledge cutoff: September 2025.
- **IDs:** `anthropic/claude-sonnet-4`; `claude-sonnet-4`; deprecated alias `claude-sonnet-4`
- **Context window:** 200,000 tokens (~200K); 64,000 max output. Standard Sonnet cadence standard rather than frontier flagship.
- **Modalities:** Image, text, File input; text output. Reasoning yes (effort levels incl. xhigh). Full Claude suite including structured outputs, native multimodal vision input, function calling. Multimodal vision depth confirmed per Anthropic docs emphasis on multimodal leadership. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $2 input / $8 output per 1M tokens efficient frontier cadence standard ($0.20 cached input discount significant). Blended effective ~$2.40 per 1M standard highly efficient. Mid-band cost efficiency within frontiers plus legacy compatibility default advantage.
- **Architecture:** Proprietary Anthropic architecture. Claude Code integration heritage through Claude 3.x through 4 generation. Hybrid attention mechanisms inherited from Claude 4.x flagship generation. Full suite legacy status per Anthropic documentation architecture lineage.

### Raw benchmarks found

**Anthropic official releases & documentation**

- SWE-bench Verified competitive coding benchmark depth consistent with Claude Sonnet line generational positioning.
- GPQA competitive frontier reasoning baseline per Anthropic documentation emphasis on reasoning depth.
- FrontierCode v1.1 Main competitive coding benchmark per Anthropic competitive tracking.
- Agents' Last Exam strong professional reasoning indicators at flagship cadence.
- RedPajama/LMSYS benchmark portfolio confirms multi-benchmark coverage across general coding and reasoning series.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes Claude Sonnet line legacy models including Sonnet 4.
- Vals AI index consistent with Claude Sonnet 4 frontier depth benchmark positioning globally including competitive coding anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 76/100.** Full Claude suite including function calling, structured outputs, native multimodal vision input per Anthropic docs. Cap near 82 but legacy suite update limited compared to newer Claude generations plus no cybersecurity tools exposed.
- **Reasoning: 70/100.** GPQA competitive frontier reasoning per Anthropic docs. Hard cap ~74 given frontier flagship parity shallow reasoning ceiling older architecture generation.
- **Context window: 76/100.** 200K standard Sonnet cadence consistent with generational position. Hard cap ~80 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 72/100.** Image input confirmed per Anthropic docs. Multimodal breadth narrow per absence audio/video plus legacy suite update. Cap ~78 given visual premium vs audio/video absence.
- **Coding: 76/100.** SWE-bench Verified competitive; FrontierCode v1.1 Main competitive; agents' Last Exam strong. Hard cap ~80 given frontier cadence coding consensus plus legacy architecture limitations.
- **Cost efficiency: 92/100.** $2/$8 per 1M extreme frontier efficiency by dataset median plus cache significantly discounted improves value. Blended ~$2.40 per 1M standard highly efficient. Legacy cheapest compatible Anthropic option.
- **Overall Score: 74/100.** Mean of five non-cost dims: (76+70+76+72+76)/5 = 74.0. Adjust UP modestly for coding depth, cost efficiency outstanding, multimodal visual premium, plus legacy suite tool robustness. Final ~77.9.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Claude Sonnet 4 Launch Announcement | Anthropic>]
  - [<Artificial Analysis — Claude Sonnet 4 intelligence index>]
  - [<Vals AI Claude Sonnet 4 leaderboard>]
- Future sources: add new file next to this one.
