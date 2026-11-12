# LongCat 2.5 Preview — findings by Qwen 3.7 Plus

- Source: Meituan (`longcat-2.5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's 1.6T/48B-active sparse MoE designed for long-horizon agentic coding and document workflows. Natively multimodal (text, image, video) with 1M context and thinking mode. Closed API preview released September 25, 2026; no open weights yet. Dual OpenAI/Anthropic API compatibility.
- **Provider / access:** LongCat API `LongCat-2.5-Preview`; Free OpenCode Zen tier (limited-time, zero data retention); OpenRouter.
- **Release / knowledge:** 2026-09-25; knowledge cutoff not publicly stated.
- **IDs:** `opencode/longcat-2.5-preview` (OpenCode Zen).
- **Context window:** 1,048,576 tokens (1M) input; 131,072 (128K) max output (per Meituan API platform).
- **Modalities:** Text, image, video (URL) in; text out; thinking mode on by default (switchable); tool calling supported.
- **Pricing (as of 2026-10-20):** $0.30/1M input, $1.20/1M output (per LongCat API); free on OpenCode Zen (limited-time).
- **Architecture:** Sparse MoE, ~1.6T total / ~48B active per token; closed API preview; successor to LongCat-2.0 (MIT-licensed, open-sourced June 2026).

### Raw benchmarks found

> Sources: Enera blog (eneralabs.com, 2026-09-27), Meituan API platform, LongCat change log. Coverage note: **Meituan has published NO benchmark scores for LongCat-2.5-Preview.** The only verified data point for the model family is LongCat-2.0 (predecessor, June 2026): SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3. Scores below are inferred from predecessor with significant uncertainty.

Agent / tool use:

- No verified public scores for LongCat-2.5-Preview.
- LongCat-2.0 reference: Terminal-Bench 2.1 **70.8%** (Hugging Face model card — predecessor only)

Reasoning / knowledge:

- No verified public scores for LongCat-2.5-Preview.

Coding:

- No verified public scores for LongCat-2.5-Preview.
- LongCat-2.0 reference: SWE-bench Pro **59.5%** (predecessor); SWE-bench Multilingual **77.3%** (predecessor)

Multimodal & Grounded:

- No verified public scores for LongCat-2.5-Preview. Model claims text, image, video input.

Long context:

- No verified long-context retrieval benchmarks. 1M native context per specification.

### Normalized scores (1–100)

> **WARNING: Extremely limited evidence.** No verified public benchmarks exist for LongCat-2.5-Preview specifically. Scores below are estimated from predecessor (LongCat-2.0) benchmarks and specification analysis. These estimates carry very high uncertainty.

- **Tool use: 60/100.** Estimated from predecessor's Terminal-Bench 2.1 70.8%. 2.5-Preview targets "terminals, browsers, GUIs, spreadsheets, and design tools" per Meituan. Thinking mode and 1M context support long-horizon agentic workflows. No independent verification. Capped by absence of verified tool-use benchmarks.
- **Reasoning: 55/100.** Thinking mode enabled by default suggests reasoning capability. No verified reasoning benchmarks for 2.5-Preview. Predecessor was competitive but not frontier. No independent verification. Capped by complete absence of reasoning benchmark evidence.
- **Context window: 95/100.** 1M tokens native — top tier. 128K max output is generous. Designed specifically for long-horizon tasks (code migrations, document pipelines). Docked 5 for no verified long-context retrieval benchmarks (MRCR/RULER/GraphWalks).
- **Multimodal: 35/100.** Claims text, image, and video (URL) input. However, no multimodal benchmark scores published or verified. Score reflects claimed capability with high uncertainty. Capped by complete absence of multimodal benchmark evidence.
- **Coding: 55/100.** Estimated from predecessor's SWE-bench Pro 59.5% and Terminal-Bench 2.1 70.8%. 2.5-Preview is described as improved for coding, but no verified benchmarks. Meituan's focus on "long-horizon coding agents" suggests competence. Capped by complete absence of verified coding benchmarks for 2.5-Preview.
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M is very competitive for 1M context. Free on OpenCode Zen. 16x more context than DeepSeek V4.1 Flash at similar price. Excellent value for long-horizon workloads.
- **Overall Score: 60/100.** Mean of five non-cost dims: (60 + 55 + 95 + 35 + 55) / 5 = 60. Massive 1.6T/48B MoE with 1M context, native multimodal, and thinking mode at sub-$1 input pricing — but **no verified public benchmarks exist** for this specific model. All capability estimates are inferred from predecessor LongCat-2.0 (SWE-bench Pro 59.5%, Terminal-Bench 2.1 70.8%). Best fit for: long-horizon coding agents, document intelligence pipelines, and cost-sensitive deployments needing massive context. Enterprise teams should run own evals before committing.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Enera blog, Meituan API platform, LongCat change log, OpenCode, Reddit r/SillyTavernAI, and YouTube; scores are normalized 1–100 interpretations, not official vendor scores. **No verified benchmarks found for this specific model — scores are estimates based on predecessor (LongCat-2.0) data.**
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
