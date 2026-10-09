# MAI-Code-1-Flash — findings by DeepSeek 4.1 Flash

- Source: Microsoft (MAI) / MAI-Code-1-Flash (`microsoft/mai-code-1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's first MAI coding model (announced at Build 2026-06-02), deployed inside GitHub Copilot for VS Code. A sparse MoE continuation of MAI-Thinking-1's mid-training checkpoint, post-trained on 2M synthetic agentic tasks. Superseded by MAI-Code-1.1-Flash (Aug 2026).
- **Provider / access:** GitHub Copilot (VS Code / Copilot); `github-copilot/mai-code-1-flash`. OpenCode Zen tracks `opencode/mai-code-1-flash` (if present). Proprietary.
- **Release / knowledge:** 2026-06-02; possibly deprecated 2026-09-10 in favor of 1.1 (one aggregator).
- **IDs:** `microsoft/mai-code-1-flash`.
- **Context window:** 256K tokens (model card); a minority source lists 128K/64K (carried from older defaults).
- **Modalities:** text in; text out (the 1.0 card is text-only; vision arrived with 1.1). Agentic coding tools.
- **Pricing (as of 2026-10-09):** **$0.75 / $4.50 per 1M** with **$0.075 cached** (Copilot models.dev); 0.25× premium-request multiplier on annual plans.
- **Architecture:** sparse MoE, **137B total / 5B active**; trained as a continuation of MAI-Thinking-1's mid-training checkpoint; post-trained in the Copilot production harness (2M synthetic tasks, RL across 150k+ envs); Maia 200 silicon. Proprietary.

### Raw benchmarks found

> All rows are Microsoft's model card / X post / launch blog (self-reported in the Copilot harness); no independent reproduction found.

Coding / agent:

- SWE-Bench Verified **71.6%** (vs Haiku 4.5 66.6%); SWE-Bench Pro **51.2%** (+16 pts vs Haiku); SWE Multilingual 65.5%
- Terminal-Bench 2 **54.8%** (vs Haiku 41.6%); τ²-Bench (telecom) 71.7%
- ArtifactsBench 36.4%

Reasoning / knowledge:

- GPQA Diamond **84.6%**; AIME 2026 **92.5%**; HLE (no tools) 18%
- AMO Bench 40%; Frontier Math (Tier 1–3) 6.3%; Frontier Science 58.2%
- IFBench 75.0%; Advanced IF 71.4%; Robust IF 61.2%

Long context:

- 256K window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2 54.8% and τ²-Bench 71.7% are solid; capped by no OSWorld/MCP suite.
- **Reasoning: 72/100.** GPQA 84.6% and AIME 92.5% are high; HLE 18% and Frontier Math 6.3% cap it.
- **Context window: 72/100.** 256K-token window (200K–500K band); a minority source lists 128K.
- **Multimodal: 15/100.** Text-only (vision came with 1.1).
- **Coding: 74/100.** SWE-bench Verified 71.6%, SWE Pro 51.2%, Terminal-Bench 2 54.8% (self-reported); no independent re-run.
- **Cost efficiency: 88/100.** $0.75/$4.50 per 1M with $0.075 cached; noticeably pricier than the 1.1 successor.
- **Overall Score: 61/100.** (70 + 72 + 72 + 15 + 74) / 5 = 60.6 → 61. Best fit: Copilot-native coding subtasks; prefer MAI-Code-1.1-Flash (cheaper, vision, higher scores) where available.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across Microsoft's model card/launch blog, the Microsoft AI X post, models.dev, cloudprice.net, BenchmarkList and explainx.ai. All capability numbers are Microsoft self-reported; no independent reproduction exists and that limitation is stated. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
