# Claude Opus 4.8 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-4-8`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Opus 4.7 successor for coding, professional analysis and image/document work. Still active as a legacy model, with newer Opus generations available [S1,S2].
- **Provider / access:** Claude Messages API, Amazon Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS [S1]. Not sooner than May 28, 2027 retirement commitment on Anthropic-operated platforms; other hosts set their own dates [S1,S7].
- **Release / knowledge:** May 28, 2026; January 2026 reliable and training-data cutoff [S1,S2].
- **IDs:** Claude `claude-opus-4-8`, Bedrock `anthropic.claude-opus-4-8`; other listed platforms use the Claude ID. Dateless ID is a pinned snapshot, not a rolling alias [S1,S7]. No verified Zen Free ID.
- **Context window:** Official 1M; 128K synchronous output, up to 300K on Message Batches with `output-300k-2026-03-24` beta [S1]. Tokenizer introduced with 4.7 fits approximately 555K words per 1M tokens versus 750K before; token capacities do not equal identical text capacity across generations [S1].
- **Modalities:** Text/image input, text output; document/PDF and tool workflows, no verified native audio/video [S1,S3]. Computer and browser tools supported, with platform-specific availability [S6].
- **Pricing (as of 2026-10-16):** $5 input/$25 output per million; $0.50 cache read, $6.25 five-minute write, $10 one-hour write; Batch halves input/output. Launch fast mode $10/$50 and claimed 2.5× speed [S1,S2]. Tool/host-specific charges separate; no free tier assumed.
- **Architecture:** Proprietary; parameter count undisclosed [S4]. Adaptive thinking must be explicitly enabled; effort defaults high. Official guidance recommends xhigh for most coding/agentic workloads and warns max can overthink with diminishing returns [S1,S6].

### Raw benchmarks found

Agent / tool use:

- Vals current **TB4.0 23.23% ±1.34**, SkillsBench **59.23% ±4.50**, Finance Agent v2 **53.92% ±0.16**, legal research **43.75% ±3.45**, Harvey legal-agent **9.58% ±2.15**, tax-agent **30.00% ±3.30**, max effort / temperature 1 / 128K output default with benchmark-specific overrides possible [S3].
- Historical Vals launch **Terminal Bench 2 70.04%**; BenchLM separately cites Vals **TB2.1 71.9%** and vendor-system-card **TB2.1 74.6%**. Different versions/harnesses retained, not averaged [S3,S5]. Vendor launch footnote specifies Terminus-2 public harness for TB2.1 [S2].
- BenchLM system-card-attributed BrowseComp **84.3%**, DeepSearchQA **93.1%**, OSWorld-Verified **83.4%**, GDPval-AA **1593 Elo**, MCP Atlas **82.2%**, Toolathlon **59.9%** [S5]. System-card fetch exceeded size limit; these remain secondary-attributed, not directly read PDF numbers.
- Vendor-hosted partner testimonial Online-Mind2Web **84%**; not an Anthropic rerun [S2]. Vendor changed OSWorld-Verified methodology and revised predecessor score, so old leaderboard comparisons are not fixed-harness deltas [S2].
- Tau2 **94.4%**, AA Agentic Index **42.6%**, ResearchClawBench **21.1%**, secondary aggregation only [S5]. Tau3-Banking and exact Claw-Eval/ClawProBench: no verified public score found; ResearchClawBench is not interchangeable with them.

Reasoning / knowledge:

- Vals GPQA Diamond **92.42% ±1.98**, MMLU Pro **89.58% ±0.30**, LegalBench **83.57% ±0.47** [S3]. Historical launch ProofBench **69%**; not a current v1.1 score [S3].
- AA current Intelligence Index **v4.3.2 42, #50/217**, max effort [S4]. Vals current index **55.10% ±1.01, #15/48** versus historical May **70.17%, #1 then** [S3]. These are different suite snapshots, not a measured fixed-test regression.
- BenchLM system-card-attributed GPQA **93.6%**, HLE **49.8% no tools / 57.9% tools**; AA-attributed GPQA **92%**, HLE **48.7%**, LCR **77.7%**, CritPt **20.9%**, Omniscience Index **28.8**, accuracy **48.8%**, hallucination **39.3%** [S5]. AA exact subscore rows were not exposed in fetched text. Hallucination metric is conditional on non-correct responses, not all outputs.
- BenchLM evaluator-attributed ARC-AGI-1 **92.5%**, ARC2 **72.1%**, ARC3 **1.5%**, FrontierMath v2 **80% tiers 1–3 / 56.098% tier 4**, all secondary-only configuration-dependent figures [S5]. No verified MLCR score found.

Coding:

- Vals SWE-bench **88.60% ±1.42**, LiveCodeBench **87.82% ±0.95**, Vibe **v1.1 82.72% ±3.08**, migration **47.25% ±4.18**, ProgramBench **1.00% ±0.70**, terminal-science **4.29% ±2.44** [S3]. Conventional repository/programming strength does not imply scientific-terminal or complete-program mastery.
- BenchLM vendor-card-attributed SWE-Pro **69.2%**, SWE multilingual **84.4%**, SWE multimodal **38.4%**; AA-SciCode **54.4%**, Coding Index **74.3%**, all secondary-only [S5]. No verified DeepSWE exact result found in directly inspected sources.

Long context and multimodal:

- Official million-token window; no exact full-window MRCR/RULER retrieval result verified [S1]. LCR 77.7% secondary snapshot is not ≥98% retrieval at 512K+ [S5].
- Vals MMMU Pro **86.59% ±0.82** [S3]. BenchLM system-card-attributed CharXiv **80.5% no tools / 89.9% tools**, ScreenSpot Pro **87.9%**, OfficeQA Pro **66.2%**, secondary only [S5].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Claude Opus 4.8" official Anthropic benchmarks`, `"Claude Opus 4.8" independent evaluation`, `"Claude Opus 4.8" pricing review limitations`; all challenged. Bing `"Claude Opus 4.8" review limitations` returned mostly general Claude links. Search attempts supplied no benchmark evidence. Directly read primary exact model card, launch, overview and model-specific prompting guide, independent Vals/AA and secondary BenchLM. System-card URL returned a response-size error, so its PDF contents and image-only launch benchmark table are not represented as directly read.

AA says deprecated while current vendor says active legacy; the former concerns continued benchmarking only at default 10K workload, not provider retirement [S1,S4]. Vendor honesty claim of roughly fourfold fewer unremarked code flaws is targeted evaluation/early-tester evidence, not a universal hallucination reduction [S2]. Launch partner “first over 10% legal all-pass” and Vals current 9.58% are different operator/configuration/snapshot evidence; neither replaces the other [S2,S3]. BenchLM aggregate **70.07, #17/950, 57/638 partial coverage** is not repository Overall or AA index [S5]. Its legacy/system-card values are not independent replications.

AA max produces **170M suite output tokens**, costs **$4.08/index task**, decodes at **66.2 tokens/s** and has **34.13s TTFT** [S4]. Vals **$13.14/index test / 39m48s** has a different denominator and workload [S3]. Official prompting guidance corroborates potential max overthinking and higher token use after interactive user turns. It also warns low/medium can under-think, reasoning may substitute for tool calls, literal review instructions can suppress lower-severity findings, and frontend defaults can converge on a persistent cream/serif palette [S6]. These documented behavior limits are more useful than assuming launch testimonials apply to every harness.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong finance/skills and historical agent evidence, capped by TB4 23.23%, low legal all-pass and effort-dependent tool use [S2,S3,S6].
- **Reasoning: 90/100.** Independent GPQA/MMLU and sourced HLE evidence support high reasoning; current index position and harder abstract/task failures constrain ceiling credit [S3–S5].
- **Context window: 95/100.** Verified 1M capacity qualifies for top tier without ≥98% full-window retrieval; tokenizer density caveat retained [S1].
- **Multimodal: 80/100.** Strong image/document reasoning including direct MMMU 86.59%, but no native audio/video or non-text output verified [S1,S3].
- **Coding: 90/100.** Strong SWE/LiveCode/Vibe support demanding coding; migration, ProgramBench and scientific-terminal weaknesses limit general autonomy [S3].
- **Cost efficiency: 45/100.** $5/$25 and max $4.08 AA task cost are premium despite caching/batch savings; default high/xhigh may be more efficient than max [S1,S4,S6].
- **Overall Score: 88/100.** (85 + 90 + 95 + 80 + 90) / 5 = 88.0 → 88. Best fit: established image/document and supervised coding workflows at calibrated high/xhigh effort; cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/opus-4-8/overview — primary exact-route specs, prices, lifecycle and cutoff.
- [S2] https://www.anthropic.com/news/claude-opus-4-8 — primary launch, harness footnotes, testimonials and fast-mode pricing.
- [S3] https://www.vals.ai/models/anthropic_claude-opus-4-8 — direct independent current suite plus dated launch snapshot and parameters.
- [S4] https://artificialanalysis.ai/models/claude-opus-4-8 — direct independent max profile, current index, task economics and benchmarking notice.
- [S5] https://benchlm.ai/models/claude-opus-4-8 — secondary source-linked aggregation, updated October 15; un-reverified rows explicitly labelled.
- [S6] https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-4-8 — primary behavioral limitations, thinking enablement, effort and computer/browser support.
- [S7] https://platform.claude.com/docs/en/about-claude/models/overview — primary snapshot/platform conventions and batch-output corroboration.
- Unread attempt: https://www.anthropic.com/claude-opus-4-8-system-card — response exceeded 5MB tool limit; secondary citations do not imply PDF access.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches plus alternate-engine retry; primary model/behavior docs and independent evaluators compared, with secondary-only benchmarks, versions and snapshot differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
