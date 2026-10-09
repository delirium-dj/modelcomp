# MAI-Code-1.1-Flash — findings by DeepSeek 4.1 Flash

- Source: Microsoft (MAI) / MAI-Code-1.1-Flash (`microsoft/mai-code-1.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's fast agentic coding model (released 2026-08-11), a sparse MoE continuation of MAI-Thinking-1 trained in GitHub Copilot's production harness. Vision-capable (screenshot/diagram-to-code), a ~73% price cut vs 1.0, and the first MAI model run on-device (Oct 7, 2026).
- **Provider / access:** GitHub Copilot / VS Code / Copilot CLI (free tier); `github-copilot/mai-code-1.1-flash`; also Microsoft Foundry routes. OpenCode Zen tracks `opencode/mai-code-1.1-flash` (if present). Proprietary.
- **Release / knowledge:** 2026-08-11; on-device local announcement 2026-10-07.
- **IDs:** `microsoft/mai-code-1.1-flash` (Copilot picker id); local build 3-bit (~53 GB; recommends >120 GB RAM).
- **Context window:** 256K tokens (model card); some aggregators carry 128K forward from 1.0.
- **Modalities:** text + image in; text out. Vision (screenshot/diagram-to-code); agentic coding tools.
- **Pricing (as of 2026-10-09):** **$0.20 / $1.20 per 1M** with **$0.02 cached** (Copilot models.dev); 0.25× premium-request multiplier; local inference has no per-token charge.
- **Architecture:** sparse MoE, **138B total / 5B active** (model card; a source quotes 137B/6.8B — treated as rounding), proprietary; trained from MAI-Thinking-1's compressed 5B-active mid-training checkpoint.

### Raw benchmarks found

> All rows are Microsoft's model card / launch blog (self-reported in the Copilot harness); BenchLM/BenchmarkList merely re-publish them; no true third-party re-run found.

Coding / agent:

- SWE-Bench Verified: **72.6%** (vs 1.0 71.6%, Haiku 4.5 69.8%, GPT-5.4 mini 69.2%); local on-device 70.8%
- Terminal-Bench 2.1: **62.9%** (vs 1.0 51.7%, GPT-5.4 mini 60.7%)
- Text2WebApp (internal) 74.1%; ScreenShot2WebApp 42.1%; Vision2Web Level3 11.5%
- Relative gains vs 1.0: +22% Terminal-Bench 2.1, +15% .NET, 25% faster streaming, 25% fewer tokens/task

Reasoning / knowledge: **no GPQA/HLE/AA-Index published for 1.1** (1.0 had GPQA 84.6, AIME 2026 92.5).

Long context:

- 256K window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 62.9% is strong for a 5B-active MoE; capped by no tool/OSWorld/τ suite.
- **Reasoning: 66/100.** No dedicated reasoning benchmarks; scored as a coding-specialist proxy, with Text2WebApp 74.1% as the signal.
- **Context window: 72/100.** 256K-token window (200K–500K band); no retrieval benchmark published.
- **Multimodal: 65/100.** Text + image input with screenshot/diagram-to-code (image band 60–70); Vision2Web Level3 11.5% is weak; no video/audio.
- **Coding: 80/100.** SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9% and Text2WebApp 74.1% are strong; all self-reported in Copilot's harness.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M with $0.02 cached is a ~73% cut vs 1.0; local inference is free of token charges.
- **Overall Score: 71/100.** (72 + 66 + 72 + 65 + 80) / 5 = 71.0 → 71. Best fit: cheap Copilot-native coding/agent subtasks and local on-device coding; verify self-reported scores on your own harness.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across Microsoft's model card and launch blog, GitHub MAI-Code repo, models.dev, BenchLM, BenchmarkList, LLM Stats and explainx.ai. All capability numbers are Microsoft self-reported; no independent reproduction was found, and that limitation is stated. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
