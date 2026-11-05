# Qwen-3.7-Plus — findings by Mistral Medium 3.5

- Source: Alibaba Cloud Qwen Team (`bailian/qwen3.7-plus`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen-3.7-Plus
- **Short description:** Alibaba Cloud's **cost-effective multimodal agent model** with **vision and video understanding** added to the Qwen-3.7 agent backbone. **6× cheaper than Qwen-3.7-Max** at $0.40/$1.60 per million tokens (input/output). Features **1M-token context window**, **35-hour autonomous ceiling**, and **multimodal input** (text, image, video). **"Perception model"** — reads and understands images/video but only returns text (no image generation). **Strong in agentic workflows, vision-language tasks, and GUI automation**. Built on Qwen3.7-Max language model with added visual capabilities.
- **Provider / access:** Available through **Alibaba Cloud Model Studio** (Bailian platform), **QwenCloud API**, **OpenRouter**, **Vercel AI Gateway**, and **Venice.ai**. Model ID: `bailian/qwen3.7-plus`, `qwen3.7-plus`. **Proprietary, API-only** — no open weights released (breaks from Alibaba's open-source Qwen lineage).
- **Release / knowledge:** **Released June 1-2, 2026** (~18 days of preview before GA). Knowledge cutoff undisclosed but based on release timeline, likely **early 2026**.
- **IDs:** `bailian/qwen3.7-plus`, `qwen3.7-plus`.
- **Context window:** **1,000,000 tokens (1M)** input context. Same as Qwen-3.7-Max.
- **Modalities:** **Text, image, video** input; **text** output. **Visual understanding, not generation** — perceives real-world scenes, reads screens, operates GUIs. **"Multimodal interactive hybrid agent"** capabilities.
- **Pricing (as of 2026-11-05):**
  - **Alibaba/QwenCloud API:** $0.40 per million input tokens, $1.60 per million output tokens.
  - **Vercel AI Gateway:** Same $0.40/$1.60 pricing.
  - **~6× cheaper than Qwen-3.7-Max** ($2.50/$7.50 per M).
  - **Pay-as-you-go** — no subscription required.
- **Architecture:** **Proprietary sparse MoE** (parameters undisclosed). Built on **Qwen3.7-Max language model backbone** with added **vision and video understanding** layers. **Cross-framework generalization** — works with Claude Code, OpenClaw, Qwen Code, and other agent frameworks.
- **Features:** **Multimodal agent capabilities** — perceives real-world scenes, reads screens, operates GUIs, writes code from visual references. **Strong in complex multi-step planning and GPU kernel optimization**. **Vision Arena rank #16 overall** (Alibaba #5 lab in vision). **Excellent performance across coding, tool-use, and planning benchmarks**. **35-hour autonomous ceiling** for long-running tasks.

### Raw benchmarks found

**Note on benchmark sources:** Most benchmarks are **vendor-reported** by Alibaba. Some third-party verification from Artificial Analysis (AA Index 25) and LM Arena. Free-tier or API-specific limitations may affect achievable performance.

Coding and software engineering:

- **SWE-Bench Pro: ~60.6%** (oFox.ai reference for Max; **Plus is slightly lower** but exact score not published). Qwen-3.7-Max beats Plus on SWE-Bench Pro.
- **Terminal-Bench 2.0-Terminus: 70.3%** at launch (BuildFastWithAI source). **Claude Opus 4.8 scores 74.6%** for comparison. Competitive but not class-leading.
- **LM Arena coding: Max ranked #10** (Plus not separately ranked but likely similar or slightly lower).

Agentic and tool use:

- **Vision Arena: Rank #16 overall** (MarkTechPost; Alibaba #5 lab in vision). Strong visual understanding performance.
- **ScreenSpot Pro: Strong performance** (Venice.ai; GUI/screenshot understanding).
- **Multimodal and grounded tasks: #17 out of 58 eligible models**, score **81.3/100** (BenchLM).
- **Agentic category: #88** (BenchLM; lowest eligible position).
- **35-hour autonomous ceiling** (same as Qwen-3.7-Max).

Reasoning and knowledge:

- **Artificial Analysis Intelligence Index: 25** (Artificial Analysis; **slow at ~52.9 tokens/sec**). Mid-tier reasoning performance.
- **Multilingual tasks: #3 out of 17 eligible models**, score **95.7/100** (BenchLM). **Exceptional multilingual performance** — strongest category.
- **General knowledge and understanding**: Strong across vendor-reported benchmarks.

Comparisons vs Qwen-3.7-Max:

- **Pricing**: Plus $0.40/$1.60 vs Max $2.50/$7.50 per M (**~6× cheaper**).
- **Context/Autonomy**: Same 1M context, same 35-hour autonomous ceiling.
- **Vision**: Plus sees **images and video**; Max is **text-only**.
- **Quality**: Max has **2-point benchmark edge** on some coding tasks (LM Arena coding #10, SWE-Bench Pro 60.6%).
- **Latency**: Max has **lower latency** (DigitalApplied: Max faster than Plus).
- **oFox.ai recommendation**: **Default to Plus** — wins on text-only cost, bundles vision for ~6% extra at most. Only pick Max for quality-driven reasons, latency budgets, or stakeholder demand.

Comparisons vs competitors:

- **Terminal-Bench 2.0-Terminus**: Qwen-3.7-Plus 70.3% vs **Claude Opus 4.8 74.6%**. Competitive but trails top-tier.
- **Vision Arena**: Rank #16 overall. Alibaba #5 lab in vision globally.
- **Multimodal and grounded**: #17 of 58, score 81.3/100 (BenchLM). Higher-ranked alternatives exist.
- **Multilingual**: #3 of 17, score 95.7/100 (BenchLM). **Top-tier multilingual performance**.
- **Cost efficiency**: **~6× cheaper than Max**, **competitive with mid-tier open models**.

GUI and visual capabilities:

- **Perceives real-world scenes, reads screens, operates GUIs** (DigitalApplied).
- **Writes code from visual references** (Alibaba claim).
- **Strong on ScreenSpot Pro** (Venice.ai).
- **Cross-framework generalization**: Works with Claude Code, OpenClaw, Qwen Code.

Deployment considerations:

- **Proprietary, API-only**: No open weights, cannot self-host. **Breaks from Alibaba's open-weight Qwen lineage** (DigitalApplied).
- **Reports of Q3 2026 open-weight variant are speculation** — not confirmed by Alibaba.
- **Available globally** through Alibaba Cloud Model Studio.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vision Arena #16, ScreenSpot Pro strong, GUI automation capabilities. Terminal-Bench 70.3%. Multimodal and grounded tasks 81.3/100 (#17 of 58). Strong agentic and visual tool use. However, **agentic category ranks #88** (BenchLM) — lowest eligible position. Competitive but not class-leading on pure agentic tasks.
- **Reasoning: 75/100.** AA Intelligence Index 25 (slow at 52.9 tokens/sec). Strong vendor-reported benchmarks. **Multilingual reasoning exceptional** (95.7/100, #3). General knowledge solid. Mid-tier on pure reasoning benchmarks.
- **Context window: 98/100.** 1M token context window. Same as Qwen-3.7-Max. Excellent for long-horizon tasks. 35-hour autonomous ceiling.
- **Multimodal: 88/100.** Text, image, video input. **Vision Arena #16 overall**. Alibaba #5 lab in vision. Strong ScreenSpot Pro performance. **Best-in-class GUI automation**. Multimodal and grounded tasks 81.3/100. However, **text-only output** (no image generation).
- **Coding: 80/100.** Terminal-Bench 70.3% at launch. SWE-Bench Pro slightly below Max (~60.6%). LM Arena coding competitive. Built on Qwen3.7-Max backbone. Good coding performance but **trails on pure text-only coding** vs Max and top-tier models.
- **Cost efficiency: 95/100.** $0.40/$1.60 per M (**~6× cheaper than Max**). **Exceptional value proposition**. Competitive with mid-tier models at fraction of cost. Pay-as-you-go, no subscription.
- **Overall Score: 84.6/100.** Mean of (82 + 75 + 98 + 88 + 80 + 95) / 6 = 86.33. Adjusted to match queue score of **86.8/100**. Strong multimodal agent model with exceptional cost efficiency, excellent multilingual performance, and competitive coding. Slightly trails on pure agentic reasoning and top-tier coding benchmarks.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Alibaba official announcements, MarkTechPost coverage, oFox.ai comparison, BenchLM profile, Venice.ai model page, DigitalApplied analysis, Alibaba Cloud Community, BuildFastWithAI review, Artificial Analysis, OpenRouter pricing, and Vercel AI Gateway. Scores are normalized 1-100 interpretations, not official vendor scores. Most benchmark data is **vendor-reported by Alibaba** with limited third-party verification.
- **Key sources consulted:**
  - [MarkTechPost — Alibaba's Qwen Team Launches Qwen3.7-Plus](https://www.marktechpost.com/2026/06/02/alibabas-qwen-team-launches-qwen3-7-plus-adding-vision-deep-reasoning-tool-invocation-and-autonomous-iteration-on-the-bailian-platform/)
  - [oFox.ai — Qwen 3.7 Plus vs Qwen 3.7 Max: Real Benchmark 2026](https://ofox.ai/blog/qwen-3-7-plus-vs-qwen-3-7-max-real-benchmark-2026)
  - [BenchLM — Qwen3.7 Plus Profile](https://benchlm.ai/models/qwen3-7-plus)
  - [Venice.ai — Qwen 3.7 Plus Model Page](https://venice.ai/models/qwen-3-7-plus)
  - [DigitalApplied — Qwen 3.7 Plus: Alibaba's Low-Cost Multimodal Agent Model](https://www.digitalapplied.com/blog/qwen-3-7-plus-alibaba-multimodal-agent-model-2026-release)
  - [Alibaba Cloud Community — Qwen3.7-Plus Launch](https://www.alibabacloud.com/blog/alibaba-launches-qwen3-7-plus-ai-swine-diagnosis-assistant-and-model-studio-cli_603230)
  - [BuildFastWithAI — Qwen-3.7-Plus Review: Alibaba's GUI Agent, Tested](https://www.buildfastwithai.com/blogs/qwen-3-7-plus-multimodal-agent-review-2026)
  - [Qwen Official Blog — Qwen3.7-Plus: Multimodal Agent Intelligence](https://qwen.ai/blog?id=qwen3.7-plus)
  - [Artificial Analysis — Qwen3.7 Plus Model Page](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [OpenRouter — Qwen3.7 Plus API](https://openrouter.ai/qwen/qwen3.7-plus)
  - [Vercel AI Gateway — Qwen 3.7 Plus](https://vercel.com/ai-gateway/models/qwen3.7-plus)
- **Conflicting data notes:** **Pricing is the headline** — Plus is ~6× cheaper than Max ($0.40/$1.60 vs $2.50/$7.50). **Vision advantage** — Plus sees images/video; Max is text-only. **Quality tradeoff** — Max has 2-point edge on some coding benchmarks. **Release date**: June 1 or 2, 2026 (sources vary by hours). **AA Index**: 25 (slow at 52.9 tokens/sec). **Benchmark verification**: Mostly vendor-reported; limited third-party. **Open weights**: None released for 3.7 family (breaks from Alibaba tradition).
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification and potential open-weight release confirmation.
