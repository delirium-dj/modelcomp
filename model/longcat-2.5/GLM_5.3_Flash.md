# LongCat-2.5-Preview — findings by GLM 5.3 Flash

- Source: Meituan (`meituan/longcat-2.5-preview`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's multimodal reasoning model for long-horizon coding and agent tasks, with image understanding and a 1M-token context window — the API-only preview of the LongCat 2.5 generation (the open-weights LongCat-2.5 GA followed on Hugging Face under MIT, 1.6T-total/~48B-active MoE with native visual modeling). Flag: this folder tracks the preview SKU; the GA checkpoint of the same generation is the lineage source for its strongest benchmark figures, cited labelled below.
- **Provider / access:** LongCat platform API (model ID `LongCat-2.5-Preview`, 1,048,576 context / 262,144 output per models.dev's provider row); NanoGPT (`meituan/longcat-2.5-preview`, $0.7875/$3.0975 per 1M); OpenCode Zen free lane (`longcat-2.5-preview-free`, $0.00/$0.00 — "free for a limited time", limit of 100 requests per day, hosted in China, provider follows a zero-retention policy and does not use data for training). Not on OpenRouter (only `meituan/longcat-2.0` is listed there). Dual OpenAI/Anthropic-format API compatibility reported by third-party coverage.
- **Release / knowledge:** preview released 2026-09-25 (models.dev release field); knowledge cutoff not published.
- **IDs:** `LongCat-2.5-Preview` (LongCat platform), `meituan/longcat-2.5-preview` (NanoGPT), `longcat-2.5-preview-free` (OpenCode Zen).
- **Context window:** 1,048,576 (1M) tokens total — verified via the LongCat provider row on models.dev (NanoGPT/OpenCode rows round to 1,000,000); max output 131,072 (NanoGPT/OpenCode rows) or 262,144 (LongCat row). No independent long-context retrieval measurement published.
- **Modalities:** text + image in, text out (models.dev: "multimodal reasoning model … with image understanding"; capabilities: tools, reasoning). Video/PDF input and audio are not documented for the preview SKU; the GA sibling's visual suite (video, charts, 3D) indicates where the generation landed, but is not verified for the preview checkpoint. Thinking + tool calling supported.
- **Pricing (as of 2026-11-13):** LongCat platform $0.30 in / $1.20 out per 1M tokens (matching the family's longcat-2.0 OpenRouter price); NanoGPT $0.7875/$3.0975; OpenCode Zen free lane $0 during the limited-time window (100 requests/day cap; China-hosted, zero retention).
- **Architecture:** preview weights closed (models.dev). The GA sibling of the same generation (meituan-longcat/LongCat-2.5, MIT) is a native multimodal sparse MoE: ~1.6T total / ~48B active per token, discrete-token visual alignment built on LongCat-Next, long-horizon agentic RL, multi-teacher KL distillation, hybrid thinking/non-thinking modes; a W4A4 INT4 quantization (LongCat-2.5-W4A4) ships for domestic NPUs. Preview parameter count unverified.

### Raw benchmarks found

> Figures below are measured on the open-weights LongCat-2.5 GA checkpoint (meituan-longcat/LongCat-2.5 model-card evaluation table, MIT, cited in-house unless marked) — lineage data for the same generation as the preview SKU, labelled as such; no benchmark table was published for the preview checkpoint itself. All values as published on the GA card.

Agent / tool use:

- Terminal-Bench v2.1: **88.4%** (GA card; frontier tier — GPT-5.6-Sol 88.8*, Kimi-K3 88.3*, DeepSeek-V4.1-Flash 90.6* on the same table)
- Terminal-Bench v4.0: **38.5%** (GA card; Claude-Opus-5 53.9*, GLM-5.3 41.8*)
- MCP Atlas: **83.1** (GA card; Claude-Opus-5 85.8*, DeepSeek-V4.1-Flash 84.4)
- AutomationBench (v1.0.6): **51.8** (GA card; DeepSeek-V4.1-Flash 54.8, GPT-5.5 39.7)
- BrowseComp: **91.9** (GA card; Kimi-K3 91.2*, DeepSeek-V4.1-Flash 91.5)
- Claw-Eval (Pass^3): **78.3** (GA card; GPT-5.6-Sol 79.5, Claude-Opus-5 80.8)
- GDPVal-AA rubrics: **84.8** (GA card; Claude-Opus-5 87.7)
- JobBench **65.4** / SkillsBench **63.3** (GA card)
- Tau3-Banking / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE (w/ tools): **63.1%** (GA card; Claude-Opus-5 64.7*, DeepSeek-V4.1-Flash 63.9 — frontier tier)
- PaperBench: **82.1** (GA card; GPT-5.6-Sol 83.3)
- FrontierScience: **77.0** (GA card; Claude-Opus-5 78.0)
- ALE (v1.1): **38.5** (GA card; Kimi-K3 35.2*, GPT-5.6-Sol 30.3*)
- ResearchRubrics: **81.0** (GA card)
- GPQA Diamond / MRCR / CritPt / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE (v1.1): **64.6%** (GA card; DeepSeek-V4.1-Flash 74.2, GPT-5.6-Sol 72.7*)
- SWE Atlas — Codebase QnA **58.3** / Refactoring **55.2** / Test Writing **47.8** (GA card)
- NL2Repo: **60.5** (GA card; Claude-Opus-5 75.3*)
- Vision2Web: **78.6** (GA card; Claude-Opus-5 80.2*)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value at any window length; the 1M window is a listed spec, not a measured retrieval figure)

### Normalized scores (1–100)

- **Tool use: 88/100.** GA-lineage agentic suite: Terminal-Bench v2.1 88.4 (frontier band), MCP Atlas 83.1, AutomationBench 51.8, BrowseComp 91.9 — at or above GLM-5.3/Opus-4.8-class company on the same table; capped below the 90s because Terminal-Bench v4.0 (38.5) lags the true frontier and the preview checkpoint itself was never measured.
- **Reasoning: 91/100.** HLE (w/ tools) 63.1 clears the 40% frontier reference by a wide margin, with PaperBench 82.1, BrowseComp 91.9 and FrontierScience 77.0 corroborating; no GPQA/Index anchor keeps it at the bottom of the 90–100 band.
- **Context window: 95/100.** 1,048,576-token window verified on the LongCat provider row (≥1M tier = 95–100); no ≥98% retrieval measurement at 512K+ exists, so not 100; 131K/262K max-output tiers noted as caveat.
- **Multimodal: 78/100.** Verified image understanding on the preview (models.dev description + capability row); the GA sibling's visual suite (VideoMME 85.2, CharXiv-RQ 90.2, MathVision 96.5, Vision2Web 78.6) shows the generation's ceiling, but video/PDF input is unverified for the preview SKU — held at the +image band rather than +video/audio.
- **Coding: 85/100.** GA-lineage: Terminal-Bench v2.1 88.4 (≥85 frontier reference) with DeepSWE 64.6 (below the 74% frontier mark) and mid-pack SWE-Atlas rows — a strong agentic coder that is not yet DeepSeek-V4.1-Flash-class on DeepSWE; discounted slightly for being GA-measured rather than preview-measured.
- **Cost efficiency: 100/100.** The evaluated Zen lane is $0 in / $0 out (limited time, 100 requests/day, China-hosted, zero-retention provider) — $0 = 100 under the contract, with the time-limited/rate-capped caveat recorded; the paid fallback ($0.30/$1.20 LongCat platform) would itself sit near the top of the paid band.
- **Overall Score: 87.4/100.** Mean of the five quality dims (88+91+95+78+85)/5 — a frontier-adjacent long-context agentic multimodal whose preview SKU is best reached today through Zen's free lane; figures carry the GA-lineage label and should be re-anchored if Meituan ever publishes preview-checkpoint numbers.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research (models.dev catalog rows, the meituan-longcat Hugging Face org and LongCat-2.5 GA model card, OpenCode Zen docs, OpenRouter model API, DuckDuckGo-indexed coverage); scores are normalized 1–100 interpretations, not official vendor scores. GA-checkpoint benchmark figures are cited labelled as lineage data for the preview SKU, never silently merged.
- Reference URLs:
  - [models.dev — LongCat-2.5-Preview (specs, 4 providers, pricing, release 2026-09-25)](https://models.dev/models/meituan/longcat-2.5-preview/)
  - [Hugging Face — meituan-longcat/LongCat-2.5 model card (GA lineage: benchmark table, architecture, MIT license)](https://huggingface.co/meituan-longcat/LongCat-2.5)
  - [OpenCode Zen docs — LongCat 2.5 Free lane (free, 100 req/day, zero retention)](https://opencode.ai/docs/zen)
  - [OrcaRouter — LongCat-2.5-Preview free on OpenCode (1M tokens, free-window analysis)](https://www.orcarouter.ai/blog/longcat-2-5-preview-free-opencode)
  - [General Labs — Meituan LongCat-2.5-Preview enterprise overview (1.6T MoE, 1M ctx, dual API)](https://www.eneralabs.com/blog/meituan-longcat-25-preview-enterprise-long-horizon-2026/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
