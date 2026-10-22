# Qwen 3.7 Max — findings by Muse Glimmer 30B

- Source: Alibaba/qwen3-7-max
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's Qwen3.7 Max proprietary agent model (1M context, text-only) for long-horizon coding and office automation; SWE-bench Verified 80.4%, SWE Pro 60.6%.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope `qwen3.7-max`, OpenRouter `qwen/qwen3.7-max`, OpenCode Zen `opencode/qwen-3.7-max`. Hosted-only, proprietary weights.
- **Release / knowledge:** 2026-05-21 vendor release (OpenRouter listing); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen-3.7-max`
- **Context window:** 1,000,000 total (131,072 max output) — verified via meta.json and OpenRouter spec.
- **Modalities:** Text in / text out; reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-10-20):** $1.48 in / $4.43 out per 1M tokens on OpenRouter (meta.json $1.48/$4.43); cached ~$0.25. Paid tier, no persistent free ID.
- **Architecture:** Proprietary closed weights; agent-centric flagship in Qwen3.7 series.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%**; Terminal-Bench 2.1: **74.5%** (llm-stats / global newswire leaderboard; Qwen3.7 Max launch reporting).
- MCP-Mark: **60.8%**; SkillsBench: **59.2%**; SpreadSheetBench: **87.0%** (Alibaba launch table via FrankX / GIGAZINE).
- BFCL-V4: **75.0%** (BenchLM sourced row).
- Toolathlon / OSWorld-Verified / GDPval-AA: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index: **56.6** (Artificial Analysis v4.0 headline).
- HLE with tools: **41.4%** (llm-stats).
- GPQA Diamond / MMLU-Pro: no verified public score found for the exact `qwen3.7-max` ID in accessible sources.

Coding:

- SWE-bench Verified: **80.4%** (meta.json short description; vendor launch table).
- SWE-bench Pro: **60.6%** (meta.json; peer-leading vs Kimi K2.6 Thinking and DeepSeek V4 Pro Max).
- SWE-Multilingual: **78.3%** (llm-stats).
- LiveCodeBench v6: **91.6%** (llm-stats).
- DeepSWE 1.1: no verified public score found.

Long context:

- MRCR 128K: **90.4%** (llm-stats).
- 1M window advertised with 35-hour autonomous kernel optimization demo (1,158 tool calls) — no independent ≥512K retrieval percentage verified.

Multimodal:

- Text-only base interface; no verified image/video benchmark for May 2026 snapshot.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 69.7% and MCP-Mark 60.8% plus BFCL 75.0% and SpreadSheetBench 87.0% show solid agentic orchestration; lack of Toolathlon/OSWorld verified numbers caps the score below frontier 85+.
- **Reasoning: 87/100.** AA Intelligence Index 56.6 is top-tier for Chinese models and HLE 41.4% with tools clears a mid-frontier threshold; absence of GPQA Diamond and HLE without-tools numbers keeps it below the 90+ band.
- **Context window: 90/100.** Documented 1M total with 131K output and strong 128K MRCR 90.4%; no verified 512K+ needle retrieval keeps it below 95.
- **Multimodal: 20/100.** Pure-text interface per meta.json; vision only on later snapshots, not scored for this ID.
- **Coding: 84/100.** SWE-bench Verified 80.4% and SWE-Pro 60.6% with LiveCodeBench v6 91.6% are near-frontier; no DeepSWE flagship number caps the score below 90.
- **Cost efficiency: 84/100.** $1.48/$4.43 per 1M is competitive premium pricing vs $2.50/$7.50+ frontier peers; no free tier.
- **Overall Score: 72/100.** Mean of Tool 78 + Reasoning 87 + Context 90 + Multimodal 20 + Coding 84 = 71.8 → 72. Best fit for long-horizon text-only agentic coding and office automation at mid-premium price; multimodal use cases require a different snapshot.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research (meta.json, OpenRouter `qwen/qwen3.7-max` benchmarks page, llm-stats / global newswire leaderboards, Alibaba launch tables via FrankX/GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
