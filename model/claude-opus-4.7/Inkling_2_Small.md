# Claude Opus 4.7 — findings by Inkling 2 Small

- Source: Anthropic (`claude-opus-4.7`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's legacy Opus-tier model from April 2026 — strong general reasoning and coding, superseded by Claude Opus 5.5 as the current Opus. Adaptive thinking (default effort `high`). The "(Adaptive)" listing is the same weights at a different effort setting, not a separate model.
- **Provider / access:** Claude API (`claude-opus-4-7`), Amazon Bedrock, Google Cloud (Google managed + Anthropic managed), Microsoft Foundry, Claude Platform on AWS; Messages API.
- **Release / knowledge:** Released 2026-04-16; reliable knowledge cutoff Jan 2026. Active (legacy); retirement not before 2027-04-16.
- **IDs:** `claude-opus-4-7` (Claude API); `anthropic.claude-opus-4-7` (Bedrock)
- **Context window:** 1,000,000 tokens (~555k words); max output 128K (300K Batch beta).
- **Modalities:** text and images in; text out; adaptive thinking; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-10):** $5.00 / 1M input, $25.00 / 1M output; cache read $0.50; batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **68.5%** (Vals AI)
- τ²-bench: **74%** (Artificial Analysis)
- terminalBenchHard: **54.5%** (Artificial Analysis)
- OSWorld 2.0: **13.9%** (OSWorld 2.0 paper, arXiv:2606.29537)
- ResearchClawBench: **20.7%** (researchclawbench leaderboard)
- ApprenticeBench (GUI): **7%** (NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (AA); **90.2%** (Vals)
- MMLU-Pro (Vals): **89.9%**
- FrontierMath v2 (Tiers 1–3): **70.2%**; Tier 4: **31.7%** (Epoch AI)
- AA Intelligence Index: **30.9%** (AA, non-reasoning config); BenchLM overall **64.83** (#33/1020)
- AA-HLE: **33.3%**; CritPt: **5.1%**; ARC-AGI-3: **0.2%**
- AA-Omniscience: Index **14.8**, Accuracy **44.7%**, Hallucination **54.1%**
- AA-IFBench: **43.6%**

Coding:

- LiveCodeBench (Vals): **85.1%**
- SWE-bench (Vals): **82.0%**
- React Native Evals: **82.8%**
- Vibe Code Bench v1.1: **71.0%** (Vals)
- FrontierCode 1.1 Main: **38.5%** (Cognition)
- PostTrainBench v1.1: **28.6%**

Long context:

- AA-LCR: **75.7%** at 1M tokens (AA, non-reasoning config).

Multimodal:

- AA-MMMU-Pro: **76.4%** (AA, non-reasoning config)
- ParseBench: **63.34%** (LlamaIndex leaderboard)

### Normalized scores (1–100)

- **Tool use: 69/100.** τ²-bench 74%, Terminal-Bench 2.1 68.5%; capped hard by OSWorld 13.9% and ApprenticeBench 7% — weak GUI/computer-use follow-through.
- **Reasoning: 68/100.** GPQA 88.5–90.2%, MMLU-Pro 89.9%, FrontierMath T1–3 70.2%; capped by AA Index 30.9, HLE 33.3%, ARC-AGI-3 0.2% and an unfavorable Omniscience profile (54.1% hallucination).
- **Context window: 90/100.** 1M tokens, 128K max output, AA-LCR 75.7%.
- **Multimodal: 70/100.** Text+image in, text out; MMMU-Pro 76.4%, ParseBench 63.3%; no audio/video I/O.
- **Coding: 78/100.** LCB 85.1%, SWE-bench 82.0%, React Native Evals 82.8%, Vibe Code 71.0%; capped by FrontierCode 1.1 38.5% and PostTrainBench 28.6%.
- **Cost efficiency: 30/100.** $5/$25 per 1M — premium pricing for a legacy model.
- **Overall Score: 75/100.** (69 + 68 + 90 + 70 + 78) / 5 = 75.0 → 75. Best fit: legacy deployments already integrated with Opus 4.7; migrate to Opus 5.5 for new work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Anthropic platform docs, Artificial Analysis, Vals AI, BenchLM, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.7 — Claude Platform Docs](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Claude Opus 4.7 — BenchLM](https://benchlm.ai/models/claude-opus-4-7)
  - [Claude Opus 4.7 (non-reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7-non-reasoning)
  - [Claude Opus 4.7 — Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
