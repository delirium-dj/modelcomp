# Qwen 3.8 27B — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's dense 27B open-weight model (Apache-2.0) optimized for local hosting; excellent agentic coding and vision at 262K native / 1M YaRN context.
- **Provider / access:** HuggingFace (`Qwen/Qwen3.8-27B`) — open weights; API pricing varies by host
- **Release / knowledge:** August 2026
- **IDs:** `Qwen/Qwen3.8-27B` (open weights, Apache-2.0; no Free ID on Zen)
- **Context window:** 262,144 tokens native; extensible to 1,000,000 with YaRN
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** Open weights — free to self-host (Apache-2.0); hosted API pricing varies by provider
- **Architecture:** Dense — 27B parameters; open weights (Apache-2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (HuggingFace model card / Northflank)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (HuggingFace model card official)
- HLE (Humanity's Last Exam): **30.8%** (HuggingFace model card)

Coding:

- SWE-bench Pro: **61.7%** (HuggingFace model card — Claude Code harness, temp=1.0, 256K context)
- LiveCodeBench v6: **90.3%** (HuggingFace model card official)
- SWE-bench Verified: **86.0%** (Vals.ai — per meta.json short field)

Long context:

- No long-context retrieval benchmark reported (YaRN extension tested but not benchmarked)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 73.0% and SWE-bench Verified 86.0% together show strong agentic capability for a 27B dense model.
- **Reasoning: 87/100.** GPQA Diamond 89.2% exceeds many larger models; HLE 30.8% caps the ceiling.
- **Context window: 65/100.** Native 262K context → tier 256K = 78; YaRN extension to 1M is tested but not the served native window. Scored at native 262K.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 89/100.** LiveCodeBench 90.3% is class-leading; SWE-bench Pro 61.7% and Verified 86.0% are top-tier for its parameter class.
- **Cost efficiency: 100/100.** Apache-2.0 open weights — free to self-host.
- **Overall Score: 78/100.** (82+87+65+68+89)/5 = 78.2 → 78. Best fit: self-hosted agentic coding and vision on mid-range hardware.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (HuggingFace model card, Northflank, Reddit, Vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
