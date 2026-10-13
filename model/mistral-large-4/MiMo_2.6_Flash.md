# Mistral Large 4 — findings by MiMo 2.6 Flash

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship hybrid instruct-and-reasoning MoE model ("Le Chonk"), natively multimodal, launched in public API preview on 2026-10-06 with open weights planned for end of October 2026. Positioned as state-of-the-art among open-weight models on cybersecurity, finance, and manufacturing.
- **Provider / access:** Mistral API / Mistral Studio (Chat Completions, public preview). Weights not yet released (target 2026-10-27).
- **Release / knowledge:** Public preview 2026-10-06; knowledge cutoff not disclosed.
- **IDs:** `mistral/mistral-large-4` (preview route); OpenRouter `mistralai/mistral-large-4` listing pending.
- **Context window:** 1,000,000 tokens (1M); max output not disclosed in preview docs.
- **Modalities:** text + image in; text out; hybrid reasoning (reasoning_effort toggle); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** $1.36 / 1M input, $4.18 / 1M output (public preview list price on Mistral AI product page; sale pricing may apply).
- **Architecture:** ~1.05T total parameters, 52B active per token, sparse MoE with 1.6B vision encoder; trained on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's European datacenters; proprietary weights (open release planned end of October 2026).

### Raw benchmarks found

Agent / tool use:

- AutomationBench (AA): **59.9%** (Mistral launch post; ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- AA-Briefcase v1.1: **1,393 Elo** (Mistral launch post)
- Cybench: **93%** (Mistral launch post; among highest for any open-weight model)
- AA Cyber Index reproduce-and-patch task: **82%** (highest of any model per Mistral)
- B3 AI Security Benchmark attack resistance: **93.3%** (Lakera; no higher OSS score reported)

Reasoning / knowledge:

- Harvey's Legal Agent Benchmark: leads all open-source models per Mistral (Vals AI third-party evaluation)
- Finance Agent v2 (Vals AI): exceeds GPT-6-Astra per Mistral
- Finch / FinWorkBench: exemplary spreadsheet finance performance per Mistral
- GPQA Diamond: no verified public score found (not disclosed in preview materials)
- HLE: no verified public score found
- AA Intelligence Index: no stable public score found (preview model, not yet on AA leaderboard)

Coding:

- DeepSWE v1.1: **61.7%** (Mistral launch post)
- SWE-Atlas-QnA: **59.4%** (Mistral launch post)
- Terminal-Bench 4.0: **28.3%** (Mistral launch post)
- Coding Agent Index (AA composite): **49.8%** (ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max per Mistral)
- SciCode-Verified: state-of-the-art among open-weight models per Mistral (exact figure not disclosed)
- Surge AI blind human coding evaluation: **3.74 / 5** (rank 2 of 5; behind Claude Opus 5 at 4.22; ahead of Kimi K3 3.59, GLM-5.3 3.60)

Long context / multimodal:

- Dense 200 visual grounding: **42%** (beats GPT-6-Astra's 41% per Mistral)
- ChartQA Pro, GDP.pdf: strong visual-document scores reported (exact figures not disclosed in text)
- Visual grounding claimed among most capable models tested by Mistral

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo place ML4 ahead of several frontier open models on real business workflows; B3 93.3% shows strong agent security posture. Capped by the preview status limiting independent third-party agent evaluations.
- **Reasoning: 78/100.** State-of-the-art claims on finance, legal, and cyber verticals with strong human-eval win rates vs GLM-5.3 on STEM/CAD; capped by the complete absence of published GPQA/HLE/AA Intelligence Index numbers — no hard academic reasoning figure to verify the vertical claims.
- **Context window: 95/100.** Full 1M-token native context window, matching the current frontier class; capped only by no independent long-context retrieval measurements yet published.
- **Multimodal: 85/100.** Natively multimodal from scratch (1.6B vision encoder); Dense 200 42% beats GPT-6-Astra; strong chart/PDF demos. Capped by no published MMMU/MMMU-Pro score and image-only input (no video/audio).
- **Coding: 75/100.** DeepSWE 61.7% and Coding Agent Index 49.8% are solid open-weight results; Surge human eval ranks #2. Capped hard by Terminal-Bench 4.0 at 28.3%, well below frontier closed models (60%+).
- **Cost efficiency: 72/100.** $1.36/$4.18 is mid-range for a 1T-parameter flagship; competitive vs closed frontiers but pricier than many open-weight peers at similar quality. Preview pricing may change at weights release.
- **Overall Score: 83/100.** Mean of (80 + 78 + 95 + 85 + 75) / 5 = 82.6 → **83**. Best-fit recommendation: enterprise open-weight-sovereignty play with exceptional cyber/finance/legal positioning and 1M context — ideal for regulated industries self-hosting after the October weights drop, less ideal as a pure coding agent vs Claude/GPT frontier (TB4 gap).

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Mistral AI launch post 2026-10-06, Mistral docs, eesel/NeoTeo/activepieces coverage, Vals AI and BenchLM listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
