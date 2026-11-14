# LongCat-2.5 — findings by GPT-6.1 Sol

- Source: Meituan / `LongCat-2.5`; official weights `meituan-longcat/LongCat-2.5`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** LongCat-2.5 (GA; native paid and Zen Free access).
- **Short description:** Meituan's native multimodal MoE model for long-horizon agentic coding, visual coding and complex engineering workflows. The current GA card provides exact-model evaluations; earlier Preview or LongCat-2.0 results are not substituted.[1][2]
- **Provider / access:** Native OpenAI-compatible `https://api.longcat.chat/openai/v1/chat/completions`; current docs also link Responses and Anthropic Messages interfaces. Zen serves `opencode/longcat-2.5-free` through its OpenAI-compatible Chat Completions endpoint. An unauthenticated native model-list request returned **401**, so neither catalog listing nor documentation is presented as an authenticated inference test.[2][3][4][5]
- **Release / knowledge:** Native changelog announces GA **2026-11-02**, after Preview on **2026-09-25**. The official Hugging Face publisher registry records weights creation **2026-11-04**; this is an artifact date, not the API launch. No exact knowledge cutoff verified.[2][10]
- **IDs:** Native **`LongCat-2.5`**; weights **`meituan-longcat/LongCat-2.5`**; Zen **`opencode/longcat-2.5-free`**, canonical gateway ID `meituan/longcat-2.5`. No exact OpenRouter entry appeared in the inspected live catalog. Preview is a historical ID, never silently treated as the measured label.[1][4][10]
- **Context window:** Native parameter documentation: **1,048,576 shared input+output tokens**, maximum output **262,144**, thinking budget up to **262,144**. Zen advertises **1,000,000 / 262,144**. The public weights configuration separately has **`max_position_embeddings: 524288`** and YaRN scaling settings; that artifact field is not evidence that every self-hosted setup has the native API's 1M serving limit. No measured maximum-window retrieval score was verified.[3][4][7]
- **Modalities:** Native text/image/video input and text output, with thinking on/off, tools and visual reasoning. Native visual docs support image URL/Base64 and video URL blocks. Zen's catalog lists text/image input only, so native video coverage is not promised on that free gateway. No native audio or non-text generation verified. Native temperature is fixed to **1.0 thinking-on / 0.7 thinking-off**, with other caller values overridden; top-p/top-k are adjustable.[1][3][4][5]
- **Pricing (as of 2026-11-14):** Native limited-time discounted **$0.30 uncached input / $1.20 output / $0.006 cached input per 1M tokens**; the page separately displays **CNY 2 / CNY 8 / CNY 0.04**. Zen Free is **$0 input/output/cache**, limited-time and capped at **100 requests/day**. Its provider is hosted in China and, according to the fetched Console policy, does not retain prompts or use them for training. Availability and billing records remain authoritative.[4][6][9]
- **Architecture:** **1.6T total / approximately 48B active per token**, native multimodal MoE, **MIT model weights**. The configuration reports **768 routed experts / top-12 routing** and dedicated visual/video components. The gateway's `open_weights: false` flag conflicts with the actual public MIT release and is not adopted as the model's license status. Quantized W4A4 release/serving claims are not independent quality replications.[1][7][10]

### Raw benchmarks found

**Provenance:** All LongCat-2.5 numbers below are Meituan's own, unstarred model-card column. The card describes unmarked figures as in-house and indicative; starred comparison-model figures come from other public sources. BenchLM republishes the same Meituan evidence, not an independent rerun. Unless specified, thinking is on, temperature **1.0**, top-p **0.95**.[1][8]

Agent / tool use:

- **Terminal-Bench 2.1: 88.4%**; Claude Code **2.1.280**, **512K** maximum sequence, mean of **three independent runs**.[1]
- **Terminal-Bench 4.0: 38.5%** under the same named coding harness/sequence limit. Its scale is not interchangeable with 2.1.[1]
- **BrowseComp: 91.9%**; custom search/browse harness with Verify and Discard-All, **256K** discard threshold and up to **1,024 exploration rounds**. This generous search budget is not ordinary single-turn tool use.[1]
- **MCP Atlas: 83.1%**; max effort, temperature **0.7**, top-p **0.95**, **256K** context.[1]
- **AutomationBench public v1.0.6: 51.8%**, using official evaluation code on **600 public tasks**; not AA's different objective-completion metric.[1]
- **Claw-Eval: 78.3% (Pass^3)**, retaining the source's reliability statistic rather than calling it generic pass@1.[1]
- **ALE v1.1: 38.5**, **GDPVal-AA rubrics: 84.8**, **JobBench: 65.4**, **SkillsBench: 63.3** in the vendor table. Rubric outputs are not GDPval-AA Elo, and ALE scoring details were not sufficient here to compare with another publisher's different headline metric.[1]
- Tau2/Tau3, ClawProBench and Toolathon: **no verified public score found** for this exact subject.

Reasoning / knowledge:

- **HLE with tools: 63.1%**, full set, Claude Code **2.1.116**, maximum generation length **256K**. This is tool-assisted, not unaided HLE or HLE-Diamond.[1]
- **FrontierScience: 77.0%**, vendor-reported. The card does not provide enough per-row setup detail to promote it into a universal science accuracy claim.[1][8]
- GPQA Diamond, unaided HLE, LCR/MLCR, CritPt, AA Intelligence Index and Omniscience accuracy/hallucination rate: **no verified public score found** in the inspected exact-model sources. BenchLM leaves its overall uncomputed/unranked.[8]

Coding:

- **DeepSWE v1.1: 64.6%**; mini-swe-agent, temperature **1.0**, top-p **0.95**, **1M** maximum sequence, mean of **three independent runs**.[1]
- **ProgramBench “Almost Resolved”: 25.5%**; Claude Code **2.1.280**, **512K** maximum sequence. “Almost Resolved” is not full project completion.[1]
- **PaperBench: 82.1%**, **SWE Atlas Codebase QnA: 58.3%**, **Refactoring: 55.2%**, **Test Writing: 47.8%**, **NL2Repo: 60.5%**. QnA/test-writing use Claude Code **2.1.116**, an Opus 4.5 judge with majority voting over three judgments, and averaging over three runs; not every row shares that harness.[1]
- SWE-bench Verified/Pro, LiveCodeBench, SciCode and Vibe Code Bench: **no verified public score found**. DeepSWE and SWE Atlas are not silently renamed as those benchmarks.

Multimodal:

- **Vision2Web: 78.6%**; Claude Code **2.1.7**, **256K** sequence, top-k **50**.[1]
- **CharXiv-RQ with tools: 90.2%**; **MathVision with tools: 96.5%**, with **131,972** maximum generation tokens in the stated visual evaluation setup.[1]
- **VideoMME: 85.2%**; up to **2,048 frames** at **1 fps**, up to **256 tokens/frame**, thinking enabled and direct option-letter output.[1]

Long context:

- **1,048,576** is a documented native serving limit and the DeepSWE setup allows **1M**, but no exact-model MRCR/RULER/GraphWalks or quantified full-window retrieval measurement was found. Task execution at 1M is not proof of near-perfect 1M retention.[1][3]

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 **88.4%**, MCP Atlas **83.1%** and AutomationBench **51.8%** support strong multi-step execution; custom search budgets, Pass^3/rubric differences and no independent rerun cap the score.[1][8]
- **Reasoning: 89/100.** Tool-assisted HLE **63.1%** and FrontierScience **77.0%** establish useful difficult reasoning, but absent unaided GPQA/HLE and uncertain per-row science setup prevent an across-the-board frontier claim.[1]
- **Context window: 95/100.** Scored on the verified native hosted **1M** window; no high-retention retrieval result justifies 100, and self-hosted artifact configuration is explicitly distinct.[3][7]
- **Multimodal: 85/100.** Native image/video input and visual benchmark evidence justify the video-input tier; text-only output, no verified audio and narrower Zen input support cap it.[1][4][5]
- **Coding: 91/100.** TB2.1 **88.4%**, DeepSWE **64.6%** and broad repository/project results support capable agentic coding; weaker TB4.0, unfinished-project metrics and vendor-only evaluation cap it below the top band.[1]
- **Cost efficiency: 100/100.** Verified **$0 Zen Free** token pricing; limited-time status, **100 requests/day**, China hosting and provider-specific features limit availability, while native paid pricing is **$0.30/$1.20**.[4][6][9]
- **Overall Score: 90/100.** Half-up rounded quality mean: `(92 + 89 + 95 + 85 + 91) / 5 = 90.4`; cost excluded. Best fit: long-context coding and multimodal agent workflows with explicit harness and serving-profile caveats.

---

## Signature

- Provided by: **GPT-6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-14 UTC
- Method: Independent exact-model research through live DuckDuckGo fallback, official HF GA card/configuration, current native API docs, live Zen/OpenRouter catalogs and BenchLM attribution checks after search-integration HTTP 402. An empty rendered blog and obsolete docs guess were checked over shell HTTP; the authenticated model-list 401 was not bypassed. This fresh live report is supported by genuinely new GA benchmarks absent from the old Preview exclusion. The excluded twin is preserved unchanged; deleting it requires separate per-file user approval. No peer results or predecessor scores used.
- Reference URLs:
  - [1 — Official GA model card and evaluation footnotes](https://huggingface.co/meituan-longcat/LongCat-2.5/raw/main/README.md)
  - [2 — Native GA/Preview changelog](https://longcat.chat/platform/docs/change-log)
  - [3 — Native shared-context/output/sampling limits](https://longcat.chat/platform/docs/api/model-params)
  - [4 — Live Zen exact-model catalog](https://opencode.ai/zen/v1/models)
  - [5 — Native image/video API support](https://longcat.chat/platform/docs/image-video-understanding)
  - [6 — Native discounted token pricing](https://longcat.chat/platform/docs/pricing/longcat-2.5)
  - [7 — Official weights configuration](https://huggingface.co/meituan-longcat/LongCat-2.5/raw/main/config.json)
  - [8 — BenchLM source-attributed exact-model profile](https://benchlm.ai/models/longcat-2-5)
  - [9 — Console Free-model quota and privacy policy](https://opencode.ai/docs/zen/)
  - [10 — Official publisher registry](https://huggingface.co/api/models?author=meituan-longcat&search=LongCat-2.5&limit=100)
  - [11 — Native model-list authentication documentation](https://longcat.chat/platform/docs/api/models)
  - [12 — Live exact-model benchmark search](https://html.duckduckgo.com/html/?q=%22LongCat-2.5%22+benchmark)
- Future sources: add a new independently signed report next to this file using the same headings.
