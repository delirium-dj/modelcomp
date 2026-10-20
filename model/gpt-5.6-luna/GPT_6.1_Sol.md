# GPT-5.6 Luna — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.6-luna`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** Proprietary cost-sensitive GPT-5.6 reasoning tier, roughly corresponding to earlier nano-class positioning, with image/document input and extensive agent tools. Luna is distinct from Terra/Sol, subsequent GPT-6 Luna, and standalone “low” evaluation settings [S1,S2,S5,S6].
- **Provider / access:** OpenAI Responses and Chat Completions, Codex/ChatGPT Work; OpenRouter lists OpenAI, Azure and Bedrock offers [S1,S2,S7]. Official API supports Batch, function calls, structured output, streaming, shell, code interpreter, skills, computer use, MCP/tool search and file/web search. Hosted image-generation tool support is not native image output [S2].
- **Release / knowledge:** Family GA **2026-07-09**; **July30** price cut documented independently of release [S1,S3]. Knowledge cutoff **2026-02-16** [S2]. ARC's detailed selector mentions a2026-07-30 record while serving snapshot is20260709; no claim of checkpoint identity across every alias revision [S6,S7]. AA deprecates its tracked evaluation in favor of GPT-6 Luna but currently documented provider listings persist [S2,S5,S7]. No vendor shutdown announcement for this exact ID found in the official deprecation page inspected during this batch.
- **IDs:** `gpt-5.6-luna`, OpenRouter `openai/gpt-5.6-luna`, advertised snapshot `openai/gpt-5.6-luna-20260709` [S2,S7]. “low”, “medium”, “max” are effort settings, not different weights established by their names. No free Zen ID verified; consumer Free/Go access described in the launch/price update is Terra, not proof of a free Luna API [S1,S3].
- **Context window:** Official **1,050,000 total**, **922,000 maximum input**, **128,000 output** [S2,S7]. Rounded1M/1.1M labels are not extra prompt allowance. Native simultaneous window differs from cumulative tool/compacted workflow tokens.
- **Modalities:** Text/image input → text output; official file-input guide documents PDF text plus page images on vision models and text-only extraction from non-PDF documents [S2,S10]. Independent Vals corroborates image/file input and no video [S4]. No native audio/video/non-text generation assigned.
- **Reasoning:** **none/low/medium(default)/high/xhigh/max** [S2]. Most cited independent quality results use **max**, not the default medium [S4–S6]. Do not transfer Sol Ultra/multi-agent results to ordinary Luna.
- **Pricing (as of 2026-10-20):** Current official **$0.20 input /$1.20 output /$0.02 cached per1M**; cache writes **1.25× uncached input = $0.25/M** [S2,S3]. Prompts **>272K input** use **2× input /1.5× output for the entire request: $0.40/$1.80**, not just excess tokens [S2]. Gateway uses `min_prompt_tokens:272000`, so check its exact boundary versus vendor “>” wording [S7]. Flex, fast and regional premiums differ. Original launch and ARC header **$1/$6** are historical; July30's80% reduction resolves the discrepancy [S1,S3,S6].
- **Architecture:** Closed weights, parameter counts and exact dense/MoE architecture undisclosed in inspected primary materials; reasoning trained using RL [S11]. Low serving cost does not establish model size.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.1 84.7%**, official model-specific Luna column [S1]. Direct independent archived Vals leaderboard: **79.03%**, **Terminus2 pass@1**, approximately **$0.05/test**, **5m56s**, rank11 in its displayed multi-harness table [S8].
- Independent Vals Terminal-Bench **4.0 11.62% ±1.01**, rank36/51; Terminal-Bench-Science **0.00%**, rank39/41; SRE **1.53% ±0.76**, rank26/35 [S4]. These newer/harder tasks cap autonomy despite excellent older-task economics; TB2.1/4.0 are not directly comparable percentages.
- SkillsBench **60.45% ±4.75**, rank7/35; Finance Agent v2 **55.04% ±0.31**, Tax Agent **24.82% ±3.11**, Legal Research **36.54% ±3.35** [S4]. Strong skills use does not imply equally strong specialist workflows.
- Official BrowseComp **83.3%**, OSWorld2.0 **45.6%**, Toolathlon **53.4%**, AutomationBench **14.9%** [S1].
- Official GDPval-AA **v2 1591.8 Elo**, Agents' Last Exam **50.3%** [S1]. Supplementary current AA selected-model data gives **GDPval1459.2 Elo**, current **TB2.1 80.90%** and **TB4 11.62%** [S5]; current evaluation versions/harnesses differ from the launch and Vals records. BenchLM lists a differently dated1582 and normalized GDP score [S9]; no averaging with raw Elo. Direct ALE homepage confirms methodology/55-field scope, not a separately read exact Luna result [S13].
- **Tau3-Banking31.13%**, directly confirmed during batch verification from AA's public `currentModel` record: UUID `426d24c8-49ae-482a-b4a8-20f1c53f21c1`, slug `gpt-5-6-luna`, effort **max** [S5]. No verified Claw-Eval/MCP-Atlas score found; tool support alone is not an evaluator result. Banking methodology is97 tasks with about195K policy tokens [S14].

Reasoning / knowledge:

- GPQA Diamond official **92.3%** [S1]; independent Vals **91.67% ±1.74**, rank18/138, **max** [S4]. MMLU Pro **86.04% ±0.35** [S4].
- AA Intelligence Index **37**, directly measured current **v4.3.2**, max [S5]. Vendor launch **51.2** explicitly uses **v4.1** [S1], so this is an index-version difference, not demonstrated model regression. AA's low-cost comparison rank13/173 is class-scoped and not an all-model global rank.
- Direct ARC Prize max: ARC-AGI-1 **88.0%**, ARC-AGI-2 **59.5%**, ARC-AGI-3 **~0.2%** (narrative gives0.18% Semi-Private;0% Public) [S6]. ARC-AGI-2 falls to **47.6% xhigh /29.3% high /7.4% medium /5.1% low**. Strong static-puzzle reasoning remains effort-sensitive and does not establish interactive adaptation.
- FrontierMath **v2 tiers1–3 78.6% /tier4 58.5%**, official [S1]. Epoch directly documents a **June12 v2 correction**,43 Tier4 problems, Python tools and generous evaluation token budgets, but its rendered page did not expose a Luna-specific row [S12]. Therefore local metadata's **61.0% T4** is **unverified**, not substituted for the visible58.5% primary result.
- Independent Vals ProofBenchv1.1 **60.00% ±4.92**, Science Index **25.30% ±0.82** (21/21), MysteryMechanism **14.41% ±2.36** (26/27) [S4]. Strong GPQA/math coexists with limited broader scientific agency.
- Official HealthBench Professional length-adjusted **55.7%**, raw **59.8%**, mean3389characters; HealthBench Hard adjusted **32.0%** [S11]. Metric variants retained rather than conflated.
- Supplementary AA selected-model data directly confirms **GPQA91.11%**, **HLE39.48%**, Omniscience accuracy **42.73%** /hallucination **92.58%** [S5]. These are dataset-specific measures, not representative production error rates. CritPt **20.6%** remains a secondary BenchLM attribution [S9].

Coding:

- Independent Vals SWE-bench **93.00% ±1.14**, rank9/88, max; Vibe Code Benchv1.1 **77.06% ±3.07**, VCB1–100 **22.59% ±4.00**, migration **44.55% ±4.24**, IOI **61.78% ±11.61** [S4]. High bug-patch success does not imply complete multi-stage app-building success.
- Official SWE-Pro **62.7%**, **DeepSWE v1.1 67.2%**, AA Coding Agent Index **v1.1 74.6** [S1]. Exact versions/harnesses matter; none is the same metric as SWE Verified.
- Vals ProgramBench **0.00% full resolution** [S4]. This is a hard-task outcome, not absent data assigned zero.
- AA SciCode **53.59%** directly confirmed in the selected-model record [S5]. Secondary CursorBench **3.2 61.1 /4.0 35.9**, FrontierCode1.1 Extended **55.1%** remain unreplicated attributions [S9]. The linked Cognition URL returned404; those code-review/provider figures are not claimed directly inspected primary runs.
- Primary family internal research debugging **50.8%**, KernelGen1P **22.4%**, RSIIndex **41.9** for Luna [S1]. These are internal scientific-engineering suites, not public SWE equivalents.

Long context:

- Verified1.05M total/922K input/128K output [S2,S7].
- Official **MRCRv2 eight-needle 41.3%** in both **256K–512K** and **512K–1M** table bins; GraphWalks BFS F1 **81.3% at256K /51.2% at1M** [S1]. These table bins do not override the current922K input cap or establish98% reliable recall. Repeated41.3% rows are reported as published, not “corrected” by guessing.
- AA-LCR **83.67%** directly confirmed in selected-model page data [S5], not a full1M recall measurement; the evaluator describes a roughly10K–100K test range [S14]. Capacity receives its documented tier, with long-input reliability explicitly qualified.

Multimodal:

- Official MMMU-Pro **78.4% without tools /79.5% with tools**, GDP.pdf **22.7%** [S1]. Independent Vals MMMU-Pro **85.03% ±0.86**, max [S4]; **AA78.55%** directly confirmed in selected-model page data [S5]. Different tools/subsets/budgets may matter; exact cause of the Vals gap was not verified, so numbers are preserved separately.
- Official BenchCAD **63.1%**, with Python **73.9%**, plus OSWorld2.0 **45.6%** provide visual/computer-action evidence [S1]. CAD/GUI operation and a hosted image-generation tool do not establish native image/audio/video generation.

### Research trail and comparison

Three fresh queries: [Bing official benchmark](https://www.bing.com/search?q=%22GPT-5.6+Luna%22+official+benchmark&setlang=en&cc=us) returned broad GPT links; [Google independent evaluation/review](https://www.google.com/search?q=%22gpt-5.6-luna%22+independent+evaluation+review&hl=en) an interstitial; [DuckDuckGo pricing/context/card](https://html.duckduckgo.com/html/?q=%22GPT-5.6+Luna%22+pricing+context+model+card) a bot challenge. Supplemented with direct vendor launch's exact Luna tables, current API docs, July30 price announcement, relevant official system-card HTML, independent AA/Vals/ARC, Epoch methodology, ALE homepage and actual gateway metadata. The price-update customer testimonials are attributed product anecdotes rather than independent benchmark replications.

Most consequential comparisons: **API default medium vs max-scored evaluations**; **v4.1 vs v4.3.2 AA indices**; **historical$1/$6 vs current$0.20/$1.20**; **922K input vs1.05M total**; **native image/PDF vs hosted generative tools**; **TB2.1 79.03% vs harderTB4 11.62%**; and **SWE93% vs ProgramBench0%/weak science operations**. No Sol/Terra/Ultra results assigned to Luna. Current AA deprecation means historical evaluation support, not an independently established provider shutdown. BenchLM's64.4 aggregate and repository scores use different normalization and are not adopted.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor TB84.7/Browse83.3 and independent TB79.03/Skills60.45 support capable affordable agents; TB4 11.62, SRE1.53 and science-terminal0 constrain broad autonomy [S1,S4,S8].
- **Reasoning: 85/100.** Independent GPQA91.67, ARC2 max59.5 and measured AA37 support strong reasoning; default-medium ARC2 7.4, ARC3~0.18 and science25.3 cap generalization [S4–S6].
- **Context window: 95/100.** Documented1.05M total qualifies for the repository's capacity tier, with922K input cap explicit. MRCR41.3/GraphWalks51.2 at long lengths prevent claiming100 or dependable near-perfect full-window retrieval [S1,S2,S7].
- **Multimodal: 82/100.** Native image/PDF and multiple measured visual suites support document-vision competence; no native audio/video/non-text output and mixed visual/document reliability cap breadth [S1,S2,S4,S10].
- **Coding: 89/100.** Independent SWE93%, strong app results and official Pro62.7/DeepSWEv1.1 67.2 support excellent scoped engineering; ProgramBench0 and persistent-app22.59 temper autonomy [S1,S4].
- **Cost efficiency: 95/100.** Verified$0.20/$1.20, $0.02 cache, independent TB$0.05/test and AA$0.18/task provide strong paid value; >272K surcharge, cache-write premiums, max-effort verbosity/latency and no verified free API prevent a maximum [S2,S5,S8].
- **Overall Score: 87/100.** Half-up mean `(82 + 85 + 95 + 82 + 89) / 5 = 86.6 → 87`; cost excluded. Best fit: high-volume supervised coding/document agents, with an explicit effort budget and retrieval verification on long inputs.

### Sources

- [S1] https://openai.com/index/gpt-5-6/ — official July9 family launch, exact Luna columns, model-tier distinctions and original pricing.
- [S2] https://developers.openai.com/api/docs/models/gpt-5.6-luna.md — current exact model, medium default, context/input/output, supported tools and whole-request long-input pricing.
- [S3] https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/ — official July30 dated80% Luna price reduction and separate subscription rules.
- [S4] https://www.vals.ai/models/openai_gpt-5.6-luna — direct independent results, max effort, uncertainty and task-specific weaknesses.
- [S5] https://artificialanalysis.ai/models/gpt-5-6-luna — direct v4.3.2 index37,135.2tokens/s,100.86sTTFT,150M eval output tokens,$0.18/task and deprecated-evaluation qualification; exact selected-model public hydration record verified during batch checks.
- [S6] https://arcprize.org/results/openai-gpt-5-6-luna — verified effort-specific ARC results and historical$1/$6 header.
- [S7] https://openrouter.ai/api/v1/models/openai/gpt-5.6-luna/endpoints — live provider1050000/922000/128000 limits, price overrides and tier differences; no inference call made.
- [S8] https://www.vals.ai/benchmarks/terminal-bench-2-1 — direct archived pass@1/Terminus2 result79.03 and$0.05/test.
- [S9] https://benchlm.ai/models/gpt-5-6-luna — secondary source discovery, updated2026-10-19; detailed unreplicated submetrics labelled separately.
- [S10] https://developers.openai.com/api/docs/guides/file-inputs.md — official PDF image/text processing and non-PDF visual limitations, inspected during this batch.
- [S11] https://deploymentsafety.openai.com/gpt-5-6 — relevant original system-card model-data, effort-curve, vision and HealthBench sections inspected; no claim that all figures/appendices were individually verified.
- [S12] https://epoch.ai/benchmarks/frontiermath-tier-4-v2 — direct benchmark version/tool/budget methodology; no rendered Luna-specific61% result verified.
- [S13] https://agents-last-exam.org/ — direct benchmark scope and methodology; exact Luna50.3 remains vendor-table attribution.
- [S14] https://artificialanalysis.ai/evaluations/tau3-banking — direct97-task banking methodology and evaluator benchmark definitions, including AA-LCR's shorter-than1M test range.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent web research; three or more distinct searches, exact primary Luna tables/API/price update, relevant system-card sections, independent Vals/AA/ARC, benchmark-methodology and live provider comparison. No peer findings read. Editorial normalization preserves effort, version, tool and pricing differences.
