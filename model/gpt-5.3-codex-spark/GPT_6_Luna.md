# GPT-5.3-Codex-Spark — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.3-Codex-Spark
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's small, latency-first coding model for real-time, iterative work in Codex. OpenAI describes it as a research preview and a smaller version of GPT-5.3-Codex; results from that sibling are not attributed to Spark.
- **Provider / access:** OpenAI Codex research preview for ChatGPT Pro users in the Codex app, CLI, and VS Code extension. OpenAI announced API access for selected design partners, not general availability. OpenCode's catalog currently records `openai/gpt-5.3-codex-spark`, but its data page shows no token usage; this is not evidence of a generally available OpenCode route.
- **Release / knowledge:** OpenAI announced the research preview on February 12, 2026. No first-party knowledge cutoff was found; OpenCode's catalog lists August 31, 2025 as an unverified catalog value.
- **IDs:** Model name/API label `gpt-5.3-codex-spark`; OpenCode catalog ID `openai/gpt-5.3-codex-spark`. OpenAI's public documentation does not provide a Spark-specific API reference page.
- **Context window:** 128,000 tokens at launch per OpenAI. OpenCode's catalog lists a 32,000-token output maximum; no first-party output limit was found.
- **Modalities:** OpenAI describes Spark as text-only. OpenCode Data (updated 2026-10-22) lists text, image, and PDF input, but this conflicts with OpenAI's first-party description and its page shows zero token usage; image/PDF support is therefore unverified. Text output. No public first-party modality expansion found.
- **Pricing (as of 2026-11-01):** OpenAI's preview is bundled with ChatGPT Pro; selected API partners' terms are not public. No Spark-specific OpenAI per-token price was verified. Secondary catalogs conflict: models.dev lists $1.75/$14 per 1M input/output for an OpenAI Spark route, while OpenCode Data lists $0; neither is treated as a confirmed first-party Spark rate.
- **Architecture:** Proprietary, closed-weight smaller Codex model, served on Cerebras Wafer Scale Engine 3 for low latency. Cerebras and OpenAI report generation above 1,000 tokens/s; no parameter count disclosed.

### Raw benchmarks found

OpenAI's launch announcement says Spark performed strongly on SWE-Bench Pro and Terminal-Bench 2.0 and was faster than GPT-5.3-Codex, but gives no exact scores. No sibling-model scores are transferred.

Agent / tool use:

- Terminal-Bench 2.0: **58.4%** (Atlas exact-model record; benchmark page describes 89 command-line tasks. The model record does not expose the harness/configuration).
- MazeBench Gems: **0%**, ASCII observation, tools disabled; one run dated 2026-07-19 (BenchLM's exact-model record linking the leaderboard run; niche game/maze task, not a coding-agent score).
- No exact-model Tau3/Tau2, GDPval, Claw-Eval, or general tool-calling result found.

Reasoning / knowledge:

- No verified public GPQA, HLE, MRCR, or general reasoning benchmark score found for the exact Spark model.

Coding:

- SWE-Bench Pro (Public Dataset): **51.5%** (Atlas exact-model record; the public dataset entry gives no Spark-specific harness/configuration).
- Terminal-Bench 2.0: **58.4%** as above. This is version 2.0, not Terminal-Bench 2.1.
- Atlas also records SlopCodeBench and BuseyBench SVG results, but those task-specific scores are not directly comparable to the project's primary coding benchmarks.

Long context:

- No long-context retrieval result found. OpenAI specifies a 128K context window.

### Normalized scores (1–100)

- **Tool use: 63/100.** Terminal-Bench 2.0 at 58.4% is a useful but indirect agent/tool proxy; no direct function-calling or general tool-use score was found, and MazeBench with tools disabled does not measure tool use. [Atlas model record](https://atlas.kevinhu.io/models/gpt-5-3-codex-spark); [BenchLM](https://benchlm.ai/models/gpt-5-3-codex-spark).
- **Reasoning: 55/100.** No direct public reasoning benchmark was found; this is a low-confidence, conservative estimate from the limited exact-model task evidence, not a claimed benchmark result. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-3-codex-spark/); [Atlas model record](https://atlas.kevinhu.io/models/gpt-5-3-codex-spark).
- **Context window: 60/100.** The official 128K window falls in the 100K–200K tier; no retrieval test verifies performance near that limit. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-3-codex-spark/).
- **Multimodal: 15/100.** OpenAI describes Spark as text-only; secondary catalog claims of image/PDF input are conflicting and uncorroborated by the model publisher. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-3-codex-spark/); [OpenCode Data](https://opencode.ai/data/openai/gpt-5-3-codex-spark).
- **Coding: 70/100.** Exact-model SWE-Bench Pro at 51.5% and Terminal-Bench 2.0 at 58.4% indicate mid-to-strong coding-agent performance; the absence of published harness details caps confidence. [Atlas SWE-Bench Pro](https://atlas.kevinhu.io/benchmarks/swe-bench-pro-public-dataset-scale-ai-2); [Atlas Terminal-Bench 2.0](https://atlas.kevinhu.io/benchmarks/terminal-bench-2-0).
- **Cost efficiency: 60/100.** The only published token-rate estimate found is models.dev's secondary listing of $1.75/$14 per 1M input/output tokens, but OpenCode Data says $0 and OpenAI does not publish Spark-specific API pricing. This is a low-confidence provisional score, not a verified price claim. [models.dev](https://models.dev/models/openai/gpt-5.3-codex-spark); [OpenAI pricing](https://developers.openai.com/api/docs/pricing); [OpenCode Data](https://opencode.ai/data/openai/gpt-5-3-codex-spark).
- **Overall Score: 53/100.** Half-up mean of the five quality dimensions: (63 + 55 + 60 + 15 + 70) / 5 = 52.6 → 53. Cost is excluded. Best suited to fast, text-only, interactive coding edits where low latency matters more than broad reasoning, multimodal input, or long-context retrieval.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three separate web searches plus OpenAI and Cerebras launch materials, an exact-model public benchmark catalog, and provider/model catalogs. Only benchmark rows explicitly attributed to GPT-5.3-Codex-Spark are included; the GPT-5.3-Codex sibling's numbers are excluded. Catalog conflicts on modalities, API pricing, and availability are flagged rather than silently resolved.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
  - [Cerebras: GPT-5.3-Codex-Spark Powered by Cerebras](https://www.cerebras.ai/blog/openai-codexspark)
  - [Atlas exact-model benchmark record](https://atlas.kevinhu.io/models/gpt-5-3-codex-spark)
  - [Atlas SWE-Bench Pro (Public Dataset)](https://atlas.kevinhu.io/benchmarks/swe-bench-pro-public-dataset-scale-ai-2)
  - [Atlas Terminal-Bench 2.0](https://atlas.kevinhu.io/benchmarks/terminal-bench-2-0)
  - [BenchLM exact-model MazeBench record](https://benchlm.ai/models/gpt-5-3-codex-spark)
  - [Models.dev catalog](https://models.dev/models/openai/gpt-5.3-codex-spark)
  - [OpenCode Data record](https://opencode.ai/data/openai/gpt-5-3-codex-spark)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)

---
