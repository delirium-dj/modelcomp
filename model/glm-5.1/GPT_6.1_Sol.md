# GLM-5.1 — findings by GPT 6.1 Sol

- Source: Z.ai / Zhipu AI, `glm-5.1` / `zai-org/GLM-5.1`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** GLM-5.1. The old dataset “Coding” suffix is not a separate publisher SKU; this report assesses the actual base ID.
- **Short description:** Open-weight text-only model optimized for sustained agentic engineering. The publisher's “up to 8 hours” demonstration is not an independent general reliability horizon or a context-window measurement.[1][2]
- **Provider / access / IDs:** Native Chat Completions at `https://api.z.ai/api/paas/v4/`, model `glm-5.1`; Zen currently lists `glm-5.1`; OpenRouter lists `z-ai/glm-5.1` with April 6 backend tag and multiple current providers, including Z.AI. Catalog availability is not an authenticated inference test.[2][3][4]
- **Release / knowledge:** AA and most catalog entries date release **2026-04-07**; gateway backend is `20260406`, while Vals displays April 1 and an April 7 evaluation announcement. These dates are retained as different metadata milestones, not silently reconciled. Exact primary cutoff unverified; Zen metadata's April 2025 knowledge field is secondary.[4][5][6]
- **Context window:** Publisher **200K / 128K output**; actual weights config **202,752 positions**. Hosted routes advertise 200,000–204,800 total with route-specific output ceilings. No million-token capacity is inferred from multi-hour execution.[2][4][7]
- **Modalities / controls:** **Text in/out**, thinking, function calling, caching and structured output. Native examples allow thinking enabled/disabled; host tool-selection/structured-output support varies. Generated Office files or rendered websites are tool-mediated artifacts, not native vision.[2][4]
- **Architecture:** AA describes **744B total / 40B active**, MIT open weights. Exact config confirms 78 layers, 256 routed experts and eight selected experts per token; no visual encoder. A secondary “754B” description is not substituted for the selected evaluator's 744B metadata.[1][5][7]
- **Pricing (2026-10-22):** Native and Zen **$1.40 input / $4.40 output / $0.26 cached input per 1M**. Current gateway examples: StreamLake **$0.966/$3.036/$0.1794 cached**, Chutes **$0.98/$3.08/$0.098 cached**, Z.AI **$1.40/$4.40/$0.26 cached**. Discounts/quantization differ by route. No verified zero-price inference route; subscription-plan zero token fields are not free access.[3][4][6][8]
- **Lifecycle:** AA marks its release deprecated toward GLM-5.2; this evaluator relationship is not a native API shutdown notice. Original weights and exact-ID hosted routes remain listed. Coding-plan routing must not be assumed to pin historical GLM-5.1.[4][5]

### Raw benchmarks found

**Primary published results** — exact GLM-5.1 column; vendor-reported, not independently reproduced by this research:[1]

- **Reasoning:** GPQA Diamond **86.2%**; HLE **31.0% without tools / 52.3% with tools**; AIME 2026 **95.3%**; HMMT November 2025 **94.0%**, February 2026 **82.6%**; IMOAnswerBench **83.8%**. Versions/tool settings remain separate.
- **Coding:** SWE-bench Pro **58.4%**, NL2Repo **42.7%**. Pro is not ordinary SWE-bench Verified.
- **Terminal-Bench 2.0:** **63.5% in Terminus-2** versus **69.0% best self-reported in Claude Code**; not a common-harness replacement or TB2.1/TB4 result.
- **Tool tasks:** Tau3 **70.6%**, MCP-Atlas **71.8% public set**, Tool-Decathlon **40.7%**; BrowseComp **68.0%**, or **79.3% with context management**. Public subset and context-management conditions matter.

**Artificial Analysis independent selected record** — UUID `5aa1c578-af76-4b91-8699-cdd43582b3af`, `glm-5-1`, Reasoning; Intelligence Index **26.0586, measured, not estimated**:[5]

- **Terminal-Bench 2.1 61.7978%**, but harder **Terminal-Bench 4.0 2.0202%**. **Tau2 97.6608%** versus **Tau banking 13.6082%** are different task groups, not interchangeable success rates.
- GDPval-AA **1116.24 Elo**; AA-Briefcase **964.54 Elo**, rubric pass **25.7576%**; AutomationBench **20.3084% partial score**, not strict completion.
- GPQA **86.7677%**, HLE **30.0741%**, CritPt **4.5714%**, SciCode **44.7917%**, AA-LCR **73.6667%**. Current AA flags SciCode/CritPt under review.
- Omniscience index **0.85** on its own scale; accuracy **23.7%**, hallucination rate **29.9476%**. GDP.pdf **8.4% all-pass**, not evidence of native image input.
- Runtime **55.7494 output tokens/s**, **2.1051 s to first chunk**; weighted Intelligence Index task cost **$1.0193**, including expensive TB4 attempts. These are workload-specific, not universal response time or tariff.

**Vals independent profile** — native zAI default, temperature 1, top-p 0.95, maximum 131,072 output; individual suites may differ:[6]

- SWE-bench Verified-linked suite **76.40% ±1.90**; **LiveCodeBench 81.38% ±1.06**; Terminal-Bench **2.1 56.93% ±1.35**.
- Vibe Code Bench **v1.1 31.46% ±4.55**; Code Migration **25.77% ±4.09**; ProgramBench **0.00% ±0.00** — measured zero retained, not missing data.
- GPQA **84.52% ±1.82**, MMLU-Pro **86.90% ±0.33**, Finance Agent v2 **44.79% ±0.61**. Historical launch rankings and prices are not current rankings/tariffs.

**Long context / missing evidence:** Configured ~203K capacity and AA-LCR 73.6667% are distinct. No verified near-perfect full-window retention, exact Claw benchmark, native multimodal accuracy, or independent general eight-hour success rate found. A vendor optimization demonstration is not a METR-style horizon.[2][5][7]

### Normalized scores (1–100)

- **Tool use: 66/100.** Strong older TB2/Tau2 and public MCP scores support practical agents, but banking 13.6%, TB4 2.02%, and weak business-workflow results cap transfer to harder tasks.[1][5][6]
- **Reasoning: 78/100.** Independent GPQA ~85–87% and HLE ~30% support capable reasoning; low CritPt and knowledge accuracy constrain frontier reliability.[5][6]
- **Context window: 70/100.** Verified ~200K band with measured LCR; neither multi-hour execution nor external memory makes the native window larger.[2][5][7]
- **Multimodal: 15/100.** Explicitly text-only input/output; visual artifacts produced with tools do not add native perception.[2][4]
- **Coding: 76/100.** SWE-Pro 58.4%, independent SWE/LCB and SciCode show useful engineering; weaker Vibe/Code Migration, measured ProgramBench zero, and TB4 limit breadth.[1][5][6]
- **Cost efficiency: 85/100.** Moderate native $1.40/$4.40 tariff, caching and cheaper verified hosted routes help value; reasoning/task costs and large self-hosting requirements prevent free-tier or tiny-model efficiency claims.[4][5][8]
- **Overall Score: 61/100.** Half-up mean `(66 + 78 + 70 + 15 + 76) / 5 = 61.0`; cost excluded. Best fit: configurable text-only engineering agents with realistic task-specific evaluation.

### Fresh search trail and sources

- Bing RSS [`"GLM-5.1" benchmark`](https://www.bing.com/search?format=rss&q=%22GLM-5.1%22+benchmark): unrelated Wikipedia results.
- Google [`"GLM-5.1" Z.ai benchmarks`](https://www.google.com/search?q=%22GLM-5.1%22+Z.ai+benchmarks): JavaScript/access interstitial.
- DuckDuckGo [`"GLM-5.1" benchmark`](https://duckduckgo.com/html/?q=%22GLM-5.1%22+benchmark): actual publisher, model-card and independent evaluator leads. Exact raw card/config and selected evaluator payload were then inspected; no peer findings consulted.

[1]: https://huggingface.co/zai-org/GLM-5.1/raw/main/README.md
[2]: https://docs.z.ai/guides/llm/glm-5.1
[3]: https://opencode.ai/zen/v1/models
[4]: https://openrouter.ai/api/v1/models/z-ai/glm-5.1/endpoints
[5]: https://artificialanalysis.ai/models/glm-5-1
[6]: https://www.vals.ai/models/zai_glm-5.1
[7]: https://huggingface.co/zai-org/GLM-5.1/raw/main/config.json
[8]: https://docs.z.ai/guides/overview/pricing
[9]: https://models.dev/api.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact-ID primary card/config/docs, independent AA/Vals measurements, and current serving/pricing inspection. Normalized ratings are interpretations, not official benchmark percentages.
