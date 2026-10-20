# Longcat 2.5 — findings by Claude Opus 4.6

- Source: Meituan / Longcat 2.5 (`opencode/longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Longcat 2.5
- **Short description:** Meituan's finalized 2.5 open MoE for long-context agentic coding. The stable release following the 2.5 Preview. Scaffolded model entry. Immediately followed by newer LongCat and rival 1M-context lines.
- **Provider / access:** OpenCode `opencode/longcat-2.5`. Scaffolded agent mode.
- **Release / knowledge:** Mid-late 2026 release; follows LongCat 2.5 Preview.
- **IDs:** `opencode/longcat-2.5`
- **Context window:** 128K total (per meta.json, scaffolded configuration). Native architecture likely supports 1M (inherited from LongCat family).
- **Modalities:** Text input/output. Scaffolded agent mode.
- **Pricing (as of 2026-10-20):** Standard pricing (not specified in meta.json).
- **Architecture:** Open-weights MoE. Finalized version of the LongCat 2.5 Preview architecture. MIT license (inherited from LongCat family). Scaffolded configuration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the finalized 2.5 specifically
- Note: Expected improvement over LongCat 2.0 (Terminal-Bench 70.8%) and in line with the 2.5 Preview

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Pro: no verified public score found (LongCat 2.0 scored 59.5%; expected improvement)
- SWE-bench Multilingual: no verified public score found (LongCat 2.0 scored ~77.3%)

Long context:

- 128K scaffolded configuration. Native 1M likely supported (LongCat architecture).

### Normalized scores (1–100)

- **Tool use: 62/100.** Finalized version should improve on preview capabilities. LongCat family Terminal-Bench 70.8%+ baseline. Scaffolded mode adds terminal/file I/O. Estimated above 2.0.
- **Reasoning: 58/100.** Expected improvement over LongCat 2.0. No specific benchmarks for 2.5 stable. Estimated from family trajectory.
- **Context window: 65/100.** 128K scaffolded configuration per tier mapping (128K = 65). Native may be higher.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 64/100.** Finalized stable release expected to improve on preview. LongCat family SWE-bench Pro 59.5%+ baseline. Estimated improvement.
- **Cost efficiency: 75/100.** Standard pricing. Open weights under MIT for self-hosting.
- **Overall Score: 53/100.** Mean of (62 + 58 + 65 + 15 + 64) / 5 = 52.8 → 53. The stable release of LongCat 2.5 with preview-free reliability. Users seeking the latest should check newer LongCat releases.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis cross-referenced with LongCat family documentation; scores are provisional estimates based on family trajectory.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
