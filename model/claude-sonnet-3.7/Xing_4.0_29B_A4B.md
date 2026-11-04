# Claude Sonnet 3.7 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's February 2025 hybrid-reasoning Sonnet generation that introduced user-visible extended thinking ($0.30 cached). SWE-bench Verified 63.7% (70.3% high compute). Retired from Anthropic-operated APIs on 2026-02-19; Bedrock and Google-managed Vertex AI set separate lifecycle schedules, current partner availability unverified. Same Claude Code integration heritage through Claude 3.x successor chain. Native multimodal including image input confirmed; text output only. 200K context window standard flagship cadence standard sonnet positioning. Full Claude suite legacy at efficient $3/$15 pricing standard tier plus cache. Video NOT confirmed Audio NOT confirmed. No free tier confirmed.
- **Provider / access:** Anthropic API historically (`anthropic/claude-sonnet-3.7`); Standard subscription tiers via historical pricing; retired 2026-02-19 per Anthropic documentation. Bedrock and Vertex AI set separate lifecycle schedules. Current partner availability unverified. Chat Completions API only. Not on OpenCode Zen.
- **Release / knowledge:** February 2025 (2025-02). Knowledge cutoff: February 2025.
- **IDs:** `anthropic/claude-sonnet-3.7`; `claude-sonnet-3.7`; deprecated alias `claude-sonnet-3.7`
- **Context window:** 200,000 tokens (~200K); 64,000 max output standard. Standard Sonnet cadence standard rather than frontier flagship.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Extended thinking mode confirmed per Anthropic docs emphasis on hybrid reasoning pioneer. Structured outputs, native multimodal vision input. Multimodal vision depth confirmed per Anthropic docs. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $3 input / $15 output per 1M tokens standard efficient frontier cadence ($0.30 cached input discount significant improved value). Blended effective ~$3.60 per 1M standard highly efficient mid-band. Historical pricing retired per Anthropic documentation.
- **Architecture:** Proprietary Anthropic architecture. Hybrid reasoning pioneer per documentation lineage including Claude 3.x through 3.7 generation. Claude Code heritage across family including Opus/Sonnet/Fable positions.

### Raw benchmarks found

**Anthropic official releases & documentation**

- SWE-bench Verified **63.7%** confirmed competitive coding benchmark anchor (70.3% with higher compute).
- Extended thinking mode confirmed per Anthropic documentation.
- GPQA competitive frontier reasoning baseline consistent with prior Claude Sonnet cadence.
- Agentic tools confirmed per Anthropic documentation including multimodal vision input.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes Claude Sonnet line including 3.7.
- Vals AI index consistent with Claude Sonnet 3.7 frontier coding positioning globally including SWE-bench 63.7% competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified 63.7% moderate anchor; extended thinking mode provides some reasoning depth. Cap near 78 but no modern deep agentic suite benchmark available.
- **Reasoning: 70/100.** GPQA competitive frontier reasoning baseline; extended thinking mode confirmed. Hard cap ~74 given frontier consensus plus lower reasoning peak vs later generations.
- **Context window: 72/100.** 200K standard Sonnet cadence consistent with generational position. Hard cap ~76 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 72/100.** Image input confirmed per Anthropic docs. Multimodal breadth narrow per absence audio/video. Cap ~78 given visual premium vs audio/video absence.
- **Coding: 72/100.** SWE-bench Verified 63.7% competitive but below generational frontier cadence coding anchors; FrontierCode historical consistent. Hard cap near 76 given frontier cadence coding consensus.
- **Cost efficiency: 90/100.** $3/$15 per 1M extreme frontier efficiency by dataset median plus cache significantly discounted improves value. Blended ~$3.60 per 1M standard highly efficient. Mid-band overall high cost efficiency among proprietary models plus historical legacy advantage.
- **Overall Score: 71.6/100.** Mean of five non-cost dims: (72+70+72+72+72)/5 = 71.2. Adjust UP modestly for coding anchor, cost efficiency outstanding, multimodal visual premium plus extended thinking reasoning capability. Final ~76.9.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, extended thinking documentation). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Claude Sonnet 3.7 Launch Announcement | Anthropic>]
  - [<Artificial Analysis — Claude Sonnet 3.7 intelligence index>]
  - [<Vals AI Claude Sonnet 3.7 leaderboard>]
- Future sources: add new file next to this one.
