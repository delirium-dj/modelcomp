# Kimi K2.8 Preview — findings by Claude Opus 4.6

- Source: Moonshot AI / Kimi K2.8 Preview
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding/agentic preview model (Sep 2026). Bridges K2.7 Code and K3 flagship. First Kimi with vision capabilities. 1M context available to all Kimi Code tiers. Approaching K3 performance per vendor.
- **Provider / access:** Moonshot AI API (`kimi-for-coding`), Kimi Code. Proprietary; preview status.
- **Release / knowledge:** 2026-09-11 release (preview).
- **IDs:** `moonshot/kimi-k2.8-preview` (served under `kimi-for-coding`)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, video in; text out; tool calls. First Kimi with vision capabilities. Thinking effort: Low/High/Max (Max default).
- **Pricing (as of 2026-10-12):** Included in Kimi Code membership tiers. API pricing via standard Moonshot rates.
- **Architecture:** Proprietary; parameter count not disclosed. Preview of K3-approaching architecture. Adjustable thinking effort.

### Raw benchmarks found

Agent / tool use:

- Vendor claims "approaching K3" performance (source: medium.com, juliangoldie.com)
- Terminal-Bench: no independently verified score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no independently verified score found
- HLE: no verified public score found
- Adjustable thinking effort (Low/High/Max)

Coding:

- SWE-bench Verified: no independently verified score found
- Designed for repository understanding and agentic SWE workflows
- LiveCodeBench: no verified standalone score found

Long context:

- 1,000,000 token context window — significant upgrade from K2.7 Code's 256K.

### Normalized scores (1–100)

- **Tool use: 80/100.** "Approaching K3" per vendor. Vision capabilities enhance agentic workflows (screenshot analysis). Adjustable thinking effort. Missing independent verification.
- **Reasoning: 80/100.** Three thinking effort levels (Low/High/Max). Preview of K3 reasoning. Missing GPQA/HLE standalone verification limits confidence.
- **Context window: 90/100.** 1M verified — major upgrade from K2.7 Code's 256K. Available to all membership tiers.
- **Multimodal: 68/100.** Text + image + video in; text out. First Kimi with vision — screenshots, charts, document scans. No audio input. Image + video = 63–72 range.
- **Coding: 82/100.** Approaching K3 per vendor. Repository understanding and agentic SWE focus. Missing independent benchmark verification.
- **Cost efficiency: 85/100.** Included in existing Kimi Code membership. No additional cost for context upgrade. Good value for preview access.
- **Overall Score: 80/100.** Mean of (80 + 80 + 90 + 68 + 82) / 5 = 80.0. Promising preview bridging K2.7 and K3; 1M context and vision are significant upgrades. Limited by preview status and missing independent benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (llm-stats.com, emergent.sh, medium.com, juliangoldie.com, hokai.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Claude_Opus_4.6.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Claude_Opus_4.6.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Kimi K2.8 Preview — findings by Claude Opus 4.6

- Source: Moonshot AI (`kimi-k2.8-preview`)
- Archived date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found.
- Vendor claims "approaching Kimi K3" overall agentic performance.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Configurable thinking effort (Low/High/Max) supports deep reasoning.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified K2.8-specific score found. Near-K3 performance claimed.
- LiveCodeBench: no verified public score found.
- Optimized for repository understanding, debugging, and testing in VS Code.

Long context:

- 1,000,000-token window confirmed across all tiers. No specific MRCR / RULER / GraphWalks retrieval score published.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
