# Qwen3.7 — findings by Flint

- Source: Alibaba — Qwen3.7 (Qwen3.7 Plus)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 (Plus-tier flagship)
- **Short description:** Alibaba's Qwen3.7 generation reasoning model family flagship (Qwen3.7 Plus scored); proprietary weights, multimodal (text, image, video input; text output), 1M context, reasoning.
- **Provider / access:** Alibaba API (`qwen`); proprietary; no open-weights variant verified for the Plus tier.
- **Release / knowledge:** Released 2026-06-01 UTC (verified via Artificial Analysis release page); knowledge cutoff not publicly disclosed in verified sources.
- **IDs:** `alibaba/qwen3.7` (proprietary); Plus tier configuration.
- **Context window:** 1,000,000 tokens (verified via Artificial Analysis technical specs).
- **Modalities:** Text, image, video input; text output; reasoning (extended thinking) enabled; multimodal (video in).
- **Pricing (as of 2026-10-26):** $0.40 per 1M input tokens, $1.60 per 1M output tokens; cache-read discount 80%; blended ~$0.30 per 1M tokens; AA cost-per-task $0.22 (rank #48 / 66, expensive).
- **Architecture:** Proprietary; parameter count not disclosed by vendor.

### Raw benchmarks found

- Agent / tool use: no standalone verified public tool-use benchmark number surfaced for Qwen3.7 Plus.
- Reasoning / knowledge: Artificial Analysis Intelligence Index v4.3.2 — **25** (rank #36 / 173, well above average among comparable models; median 13). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Speed: 57.0 tok/s (rank #123 / 150, notably slow, median 114). TTFT 2.32 s. Cost per task $0.22 (rank #48 / 66).
- Coding: no standalone verified public coding-specific benchmark number surfaced for Qwen3.7 Plus.
- Long context: AA-LCR v1.1 evaluated; context window 1M verified.
- Conflicts: Qwen3.7 Plus is proprietary with a single verified API provider; independent benchmarking placed it well above average on intelligence but notably slower and more expensive than comparable models.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public tool-use benchmark found → conservative mid-band value.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index 25 → mid band (methodology: Index 20–35 → mid 55–65).
- **Context window: 95/100.** 1M-token context verified (≥1M tier → 95–100; retrieval-at-scale not publicly reported → capped).
- **Multimodal: 80/100.** Text + image + video input, text output (video-in tier 75–90).
- **Coding: 50/100.** No verified public coding score → conservative mid-band value.
- **Cost efficiency: 65/100.** $0.40 / $1.60 per 1M input/output, cache discount 80% → ~65 on methodology cost bands.
- **Overall Score: 66/100.** Mean of five quality dims (Cost excluded): (45 + 60 + 95 + 80 + 50) / 5 = **66**.

## Signature

- Provided by: **Flint** — 2026-10-26
- Method: public internet research — official Alibaba Qwen3.7 model information plus independent Artificial Analysis benchmark pages; scores are normalized 1–100 interpretations, not official vendor scores.
