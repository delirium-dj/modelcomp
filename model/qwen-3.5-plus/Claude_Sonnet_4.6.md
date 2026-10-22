# Qwen 3.5 Plus — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`opencode/qwen-3.5-plus`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's vision-language Plus-tier model with 1M context for coding and agents; superseded by Qwen 3.6+ generations. First Plus-tier hosted vision-agent offering.
- **Provider / access:** Alibaba Model Studio (`opencode/qwen-3.5-plus`) / OpenRouter — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/qwen-3.5-plus` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input (991,808 effective) / 65,536 tokens output
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** ~$0.40/$2.40 per 1M (Model Studio Intl); $0.30/$1.80 via OpenRouter; $0.04 cached
- **Architecture:** Proprietary (Qwen 3.5 Plus hosted variant)

### Raw benchmarks found

Agent / tool use:

- JobBench: **18.5%** (meta.json short field — lagged leaders at time of release)

Reasoning / knowledge:

- No GPQA Diamond score found specifically for Qwen 3.5 Plus

Coding:

- No SWE-bench score found specifically for Qwen 3.5 Plus

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 75/100.** JobBench 18.5% lagged leaders; established the Plus tier for practical agent work but superseded.
- **Reasoning: 78/100.** Qwen 3.5-generation reasoning; no standalone GPQA; estimated conservatively below 3.6+ generation.
- **Context window: 92/100.** 1,000,000-token context window → tier 1M = 92.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 78/100.** No SWE-bench verified; Qwen 3.5 generation coding competency; below 3.6+ successors.
- **Cost efficiency: 96/100.** $0.30/$1.80 via OpenRouter — very cost-effective for 1M vision-language.
- **Overall Score: 78/100.** (75+78+92+68+78)/5 = 78.2 → 78. Best fit: migration-compatibility or budget 1M video+image agentic use; new work should use 3.6+.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Alibaba official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
