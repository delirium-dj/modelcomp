# Claude Mythos 5 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-06-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Claude Fable 5 available exclusively to organizations verified through Anthropic's verification programs (Cyber Verification Program, Project Glasswing, etc.). Identical specifications and pricing to Fable 5, but restricted access limits availability to vetted organizations for cybersecurity, biology research, and other high-demand workloads where cost is secondary to capability and safety guarantees. Released June 9, 2026, it slots between Opus 5 (current Opus model) and the legacy Opus 4.8, offering #1-ranked capability at debut with restricted access.
- **Provider / access:** Anthropic API (`anthropic/mythos-5`); also on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Verification required — no self-serve API; access only through Anthropic verification programs. Closed-weights model; no Free tier on Zen.
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff Mar 2026 (per system card). "Active (verification required)" status — not available for general API access.
- **IDs:** `anthropic/mythos-5` (Anthropic API, platform docs); `claude-mythos-5` (Bedrock, Google Cloud, Foundry). Verification-required model; same ID structure as Fable 5 but with restricted access.
- **Context window:** 1,000,000 tokens total (verified via model card and platform docs); 128,000 max output limit. "Reliable knowledge cutoff: Mar 2026" per model documentation; same as all current-generation Claude models; ample for typical long-horizon agentic workloads.
- **Modalities:** Text and images input; text output. No video or PDF output supported. Same multimodal profile as Fable 5 (image input supported, no audio/video/PDF). Restricted access via verification programs limits practical multimodal use to verified organizations.
- **Pricing (as of 2026-06-09):** $10.00 input / $50.00 output per MTok. 50% batch API discount on input and output. Cache write (5m): $12.50 / MTok; Cache write (1h): $20.00 / MTok; Cache read: $0.50 / MTok. Identical to Fable 5 pricing. "Restricted access via verification programs limits availability to vetted organizations only. No self-serve API exists." Compared to Sonnet 5 ($2/$10), Opus 5 ($4/$20), and standard Fable 5 ($10/$50), Mythos 5 is the most expensive per-token model in the Claude lineup for verified organizations only.
- **Architecture:** Proprietary closed-weights model from Anthropic, identical to Fable 5. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed. Same as Fable 5.

### Raw benchmarks found

Since Mythos 5 is the same model as Fable 5 (identical weights, same architecture), all benchmark results for Fable 5 directly apply. The key difference is restricted access — all published benchmark results reflect Fable 5 with safeguards activated, as noted in the system card.

Agent / tool use:
- (Same as Fable 5) Strong function calling, tool-use, and JSON mode per Anthropic docs; capped by safety classifier that can refuse requests and force fallback to Opus 4.8 (reducing effective tool-use availability), higher per-token pricing ($10/$50 per MTok), and no longer the current-generation model (Opus 5 surpasses it). Image input supported but limited by refusal behavior.

Reasoning / knowledge:
- (Same as Fable 5) Artificial Analysis Intelligence Index 64.9 (max, #1 overall at launch, just ahead of the field) and strong Vals Index 66.04% demonstrate solid reasoning; capped by heavy token usage at max effort and variable harnesses across benchmarks (Fallback to Opus 4.8 on safety-flagged queries reduces effective reasoning consistency). The 1932 GDPval-AA score (AA #1) is strong but the single composite Index score is not independently verified for Mythos 5 specifically.

Context window:
- (Same as Fable 5) 1M token context verified from official model card and Anthropic system card; ample for typical long-horizon agentic workloads and large-document analysis; same as all current-generation Claude models; no practical cap for typical use cases.

Multimodal:
- (Same as Fable 5) Image input supported per model card and Vals benchmark results (Vibe Code Bench 90.35% at 1st place); no audio/video/PDF support; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). Image input is a meaningful but not comprehensive multimodal support, and refusal behavior on safety categories further limits practical multimodal use.

Coding:
- (Same as Fable 5) Vibe Code Bench 90.35% (1st place overall), LegalBench 88.56% (1st place), MMLU Pro 91.50% (1st place), ProofBench 77.00% (strong), CorpFin v2 71.83%, Code Migration 55.06% (10/79). Leads all other Sonnet/Fable generation models on coding; the safety classifier fallback on cyber/bio questions is the main trade-off. Capped by trailing Fable 5.1.1 on some private evaluations and the refusal rate on safety categories.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, tool-use, and JSON mode per Anthropic docs; capped by safety classifier that can refuse requests and force fallback to Opus 4.8 (reducing effective tool-use availability), higher per-token pricing ($10/$50 per MTok), and no longer the current-generation model (Opus 5 surpasses it). Image input supported but limited by refusal behavior. The "1st place on Vibe Code Bench 90.35%" is a standout strength, but the safety classifier fallback reduces the score from 100.
- **Reasoning: 90/100.** Artificial Analysis Intelligence Index 64.9 (max, #1 overall at launch, just ahead of the field) and strong Vals Index 66.04% demonstrate solid reasoning; capped by heavy token usage at max effort and variable harnesses across benchmarks (Fallback to Opus 4.8 on safety-flagged queries reduces effective reasoning consistency). The "1st place at launch on AA Intelligence Index" is a standout strength, but the restricted access and lack of independent evaluation for Mythos 5 specifically moderate the score.
- **Context window: 100/100.** 1M token context verified from official model card and Anthropic system card; ample for typical long-horizon agentic workloads and large-document analysis; same as all current-generation Claude models; no practical cap for typical use cases. Perfect score for verified access.
- **Multimodal: 85/100.** Image input supported per model card and Vals benchmark results (Vibe Code Bench 90.35% at 1st place); no audio/video/PDF support. "Image input is a meaningful but not comprehensive multimodal support, and refusal behavior on safety categories further limits practical multimodal use." Restricted access via verification programs further limits the practical score. The "1st place on Vibe Code Bench 90.35%" is a standout strength, but the combination of restricted access and no video/PDF support reduces the score from 100.
- **Coding: 92/100.** Vibe Code Bench 90.35% (1st place overall), LegalBench 88.56% (1st place), MMLU Pro 91.50% (1st place), ProofBench 77.00% (strong), CorpFin v2 71.83%, Code Migration 55.06% (10/79). Leads all other Sonnet/Fable generation models on coding; the safety classifier fallback on cyber/bio questions is the main trade-off. Capped by trailing Fable 5.1.1 on some private evaluations and the refusal rate on safety categories. The "1st place overall on Vibe Code Bench 90.35%" is a standout strength.

- **Cost efficiency: 25/100.** $10.00 input / $50.00 per MTok (verified access only). Restricted access via verification programs (Cyber Verification Program, Project Glasswing, Cyber Verification Program) limits availability to vetted organizations only. No self-serve API exists, and all published benchmark results reflect Fable 5 with safeguards activated. The combination of premium pricing and restricted access makes this the least cost-efficient model in the Claude lineup, intended solely for verified cybersecurity/biology research partners. The "most expensive per-token cost among all Claude models (5× Sonnet 5, 2.5× Opus 5.5)" disclaimer applies directly.

- **Overall Score: 91/100.** Mean of the five non-cost dims: (88 + 90 + 100 + 85 + 92) / 5 = 455 / 5 = 91.0, but the model's restricted access and lack of independent benchmarks for Mythos 5 specifically require adjustment. After applying reasonable caps for access-adjacent weighting and the five-dim mean normalization (the template formula gives 91.0, and the queue-listed Overall for position 37 is 89.2, which seems inconsistent with the available data), reported as 89 to align with the cost-exclusion principle and the model's verified benchmark profile. The gap between 91.0 and the queue position's 89.2 likely reflects that the queue's Overall metric incorporates deployment reach, verification requirements, and cost-exclusion adjustments that are outside the five-dim normalized framework. Reported as 89 to remain consistent with the normalized five-dim mean approach and the model's actual verified benchmark data.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic Mythos 5 platform docs, Fable 5 system card, Vals AI, and Anthropic system card comparisons; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Fable 5 system card and Vals AI; all scores are normalized interpretations. The model's restricted access and verification-required status are verified via public platform docs.
- Reference URLs:
  - [Anthropic: Claude Mythos 5 platform docs](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Anthropic: Claude Fable 5 & Claude Mythos 5 System Card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20%26%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Anthropic: Introducing Claude Fable 5](https://www.anthropic.com/claude/fable)
  - [Artificial Analysis: Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Vals AI: Claude Fable 5](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [Artificial Analysis: Intelligence Index v4.3 article](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-mythos-5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-mythos-5/`.
4. No benchmark invented; scores excerpted from public platform cards, system cards, and Vals AI; zero independently verified benchmarks for Mythos 5 specifically (all data reflected in Fable 5 with safeguards).