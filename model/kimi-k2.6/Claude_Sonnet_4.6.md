# Kimi K2.6 — findings by Claude Sonnet 4.6

- Source: Moonshot AI (`opencode/kimi-k2.6`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight 1.06T/32B-active multimodal MoE with 256K context; proven for long-horizon coding and 300-agent swarm orchestration at moderate pricing.
- **Provider / access:** Moonshot AI (`opencode/kimi-k2.6`) / OpenRouter — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/kimi-k2.6` (no Free ID on Zen); also via OpenRouter
- **Context window:** 262,144 tokens input / ~236,000 tokens output
- **Modalities:** Text, image in; text out; tool calls; multi-agent swarm support
- **Pricing (as of 2026-10-21):** $0.95/$4.00 per 1M (Moonshot list); $0.80/$3.40 via OpenRouter; $0.16 cached
- **Architecture:** Sparse MoE — ~1.06T total / 32B active; open weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (DeepInfra / Moonshot)
- HLE with tools: **54.0%** (DataNorth.ai — outperforms Claude Opus 4.6 and GPT-5.4)

Reasoning / knowledge:

- GPQA Diamond: **90.5–91.2%** (DeepInfra / Kimi official)
- HLE (full with tools): **54.0%** (DataNorth.ai)

Coding:

- SWE-bench Verified: **80.2%** (DeepInfra)
- SWE-bench Pro: **58.6%** (DeepInfra — beats GPT-5.4 at 57.7%)
- LiveCodeBench v6: **89.6%** (DeepInfra)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 66.7% and HLE-tools 54.0% show strong agentic capability; 300-agent swarm architecture verified.
- **Reasoning: 88/100.** GPQA Diamond 90.5–91.2% is excellent; HLE-tools 54.0% surpasses contemporaries.
- **Context window: 78/100.** 262,144-token native context → tier 256K = 78.
- **Multimodal: 60/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 88/100.** SWE-bench Pro 58.6% leads GPT-5.4; LiveCodeBench 89.6% is class-leading; SWE-bench Verified 80.2%.
- **Cost efficiency: 93/100.** $0.80/$3.40 per 1M via OpenRouter for a trillion-parameter MoE — exceptional value.
- **Overall Score: 80/100.** (84+88+78+60+88)/5 = 79.6 → 80. Best fit: open-weight multi-agent coding swarms with strong reasoning.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (DeepInfra, Kimi.ai, DataNorth.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
