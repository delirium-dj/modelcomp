# Qwen 3.5 Flash — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.5 Flash (`opencode/qwen-3.5-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Qwen 3.5 Flash tier on Model Studio for fast, cheap multimodal agentic work. Hosted-only. Superseded by the 3.6/3.7 flash tiers.
- **Provider / access:** OpenRouter `opencode/qwen-3.5-flash` (qwen3.5-flash-02-23). No Zen Free ID.
- **Release / knowledge:** Early 2026 release; superseded by newer flash tiers.
- **IDs:** `opencode/qwen-3.5-flash` (no Free ID)
- **Context window:** Unverified — tracker-reported ~1M; 65,536 max output. Per meta.json.
- **Modalities:** Text input/output (vision support unverified).
- **Pricing (as of 2026-10-20):** ~$0.065/$0.26 per 1M (OpenRouter). No free tier.
- **Architecture:** Proprietary hosted. Alibaba Model Studio hosted flash variant. Architecture details not publicly disclosed for the hosted flash tier.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmarks found for the hosted Flash tier

Reasoning / knowledge:

- No verified public benchmarks specific to Flash tier

Coding:

- No verified public benchmarks specific to Flash tier

Long context:

- ~1M reported by trackers. Unverified. No retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 42/100.** No published benchmarks. Qwen 3.5 family supports tool-calling. Scored conservatively for a hosted flash variant.
- **Reasoning: 48/100.** No flash-specific benchmarks. Likely a distilled/faster variant of the Qwen 3.5 family — trades reasoning depth for speed. Scored below the larger variants.
- **Context window: 88/100.** Tracker-reported ~1M (unverified). If accurate, per tier mapping (1M = 90-95). Scored at 88 with unverified caveat.
- **Multimodal: 18/100.** Vision support unverified. Primarily text. Scored slightly above 15 for potential unverified multimodal.
- **Coding: 42/100.** No published coding benchmarks. Flash tier likely trades coding depth for speed. Scored conservatively.
- **Cost efficiency: 90/100.** ~$0.065/$0.26 per 1M is extremely cheap. Excellent for high-volume use.
- **Overall Score: 48/100.** Mean of (42 + 48 + 88 + 18 + 42) / 5 = 47.6 → 48. A cheap, fast hosted model with potentially large context. Superseded by newer flash tiers. Best for budget agentic work in the Alibaba ecosystem.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Qwen blog documentation; scores are normalized 1–100 interpretations with some provisional estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
