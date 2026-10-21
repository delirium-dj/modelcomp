# Qwen 3.6 Plus — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen 3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Qwen-team MoE flagship released March 2026 with 1M native context and multimodal input for agentic coding and real-world agent work; superseded by later 3.7/3.8 generations but remains a strong cost-efficient coding agent.
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.6-plus`; OpenCode Zen `opencode/qwen-3.6-plus`. Chat Completions API.
- **Release / knowledge:** 2026-03-31 release; knowledge cutoff not publicly disclosed
- **IDs:** `opencode/qwen-3.6-plus` — no Free Zen ID confirmed
- **Context window:** 1,000,000 total; 65,536 max output — verified via provider pages and LLM Stats
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-20):** $0.50/$3.00 per 1M <=256K input; $2.00/$6.00 per 1M 256K-1M input; $0.325/$1.95 via OpenRouter. No $0 free tier confirmed.
- **Architecture:** proprietary MoE, 397B total / 17B active parameters, proprietary weights

### Raw benchmarks found

> List measured numbers with source for traceability. No verified public score found where missing.

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Qwen Qwen3.6-Plus blog)
- Terminal-Bench 2.1 Vals: **53.2%** (Vals AI Terminal-Bench 2.1 leaderboard)
- τ³-bench: **70.7%** (Qwen Qwen3.6-Plus blog)
- τ²-bench: **97.7%** (Artificial Analysis model benchmarks)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard)
- QwenClawBench: **57.2%** (Qwen Qwen3.6-Plus blog)
- Toolathon: **39.8%** (Qwen Qwen3.6-Plus blog)
- MCP Atlas: **48.2%** (Qwen Qwen3.6-Plus blog)
- MCP-Tasks: **74.1%** (Qwen Qwen3.6-Plus blog)
- WideResearch: **74.3%** (Qwen Qwen3.6-Plus blog)

Reasoning / knowledge:

- GPQA: **90.4%** (Qwen Qwen3.6-Plus blog)
- GPQA Diamond AA: **88.2%** (Artificial Analysis model benchmarks)
- SuperGPQA: **71.6%** (Qwen Qwen3.6-Plus blog)
- MMLU-Pro: **88.5%** (Qwen Qwen3.6-Plus blog)
- MMLU-Redux: **94.5%** (Qwen Qwen3.6-Plus blog)
- C-Eval: **93.3%** (Qwen Qwen3.6-Plus blog)
- HLE: **28.8%** (Qwen Qwen3.6-Plus blog)
- AA Intelligence Index: **27.0%** (Artificial Analysis model benchmarks)
- AA-LCR: **78.3%** (Artificial Analysis model benchmarks)
- CritPt: **2.9%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified: **78.8%** (Qwen Qwen3.6-Plus blog)
- SWE-bench Pro: **56.6%** (Qwen Qwen3.6-Plus blog)
- SWE Multilingual: **73.8%** (Qwen Qwen3.6-Plus blog)
- LiveCodeBench v6: **87.1%** (Qwen Qwen3.6-Plus blog)
- Vibe Code Bench v1.1: **25.56%** (Vals AI Vibe Code Bench)
- AA Coding Index: **54.5%** (Artificial Analysis model benchmarks)

Multimodal & grounded:

- MMMU: **86.0%** (Qwen Qwen3.6-Plus blog)
- MMMU-Pro: **78.8%** (Qwen Qwen3.6-Plus blog)
- MathVision: **88.0%** (Qwen Qwen3.6-Plus blog)
- VideoMMMU: **84.0%** (Qwen Qwen3.6-Plus blog)
- ScreenSpot Pro: **68.2%** (Qwen Qwen3.6-Plus blog)
- V*: **96.9%** (Qwen Qwen3.6-Plus blog)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found; 1M window verified with no retrieval score published

### Normalized scores (1–100)

- **Tool use: 73/100.** TB2.0 61.6% and τ³ 70.7% with τ² 97.7% show strong agent tooling; capped below frontier by TB2.1 53.2%, Toolathon 39.8% and missing GDPval-AA.
- **Reasoning: 87/100.** GPQA 90.4% and MMLU-Pro 88.5% near-frontier; capped by HLE 28.8%, CritPt 2.9% and AA Intelligence Index 27.0%.
- **Context window: 98/100.** 1M total / 65K output meets ≥1M band; capped low-end with no MRCR/RULER retrieval evidence.
- **Multimodal: 84/100.** Text/image/video in with MMMU 86.0% and VideoMMMU 84.0%; capped below audio-in / non-text-out band.
- **Coding: 86/100.** SWE-Verified 78.8% + LiveCodeBench 87.1% + SWE-Pro 56.6% is frontier-adjacent; capped by Vibe Code 25.56% and AA Coding Index 54.5%.
- **Cost efficiency: 85/100.** $0.50/$3.00 per 1M undercuts frontier ~30×; capped below $0 free tier 100 and below cheapest Qwen tier.
- **Overall Score: 86/100.** Mean of five quality dims (73+87+98+84+86)/5=85.6 → best-fit for cheap 1M agentic coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
