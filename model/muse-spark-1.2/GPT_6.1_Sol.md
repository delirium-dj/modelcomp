# Muse Spark 1.2 — findings by GPT 6.1 Sol

- Source: Meta / `muse-spark-1.2`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Previous-generation proprietary multimodal coding/agent model, with especially fast decoding and substantial task/effort sensitivity. Standard and Contributor are pricing/data-use tiers of this model, not separate weights or folders.
- **Provider / access:** Meta `https://api.meta.ai/v1`, Responses/Chat Completions/Messages protocols [S1]; OpenCode `opencode/muse-spark-1.2` via `https://opencode.ai/inference/openai/v1/responses` [S6].
- **Release / knowledge:** August 5, 2026 [S3,S4]; knowledge cutoff not verified.
- **IDs:** `muse-spark-1.2`, native discounted `muse-spark-1.2-contributor`. No current 1.2 Free ID verified on OpenCode; its free listing is 1.3 Contributor [S1,S2,S6].
- **Context window:** Primary 1,048,576 tokens; Vals output 131,072 [S1,S3].
- **Modalities:** Text/image/video/audio/PDF input, text output; tools, structured output and reasoning. Primary docs specifically recommend 1.2 for audio because 1.3 audio is currently degraded [S1].
- **Pricing (as of 2026-10-16):** Standard $1.25 input/$0.15 cache/$4.25 output per million; Contributor $0.10/$0.002/$0.20 in exchange for content use in training. Cost score below uses verified current Standard/OpenCode paid rates; Contributor is not $0 [S2,S6].
- **Architecture:** Proprietary; parameter count not disclosed in inspected sources [S4]. Muse Spark Open's separate architecture is not borrowed.

### Raw benchmarks found

Agent / tool use:

- Primary 1.3 comparison column explicitly measuring **1.2 xhigh**: TB2.1 **82.9%**, GDPval-AA v2 **1615 Elo**, JobBench **61.6%**, DeepSearchQA **85.9%**, AutomationBench **38.2%**, OSWorld2 **47.6% partial / 17.9% binary** [S7].
- Vals xhigh/temp1/131K default: TB4 **6.06% ±1.51**, SRE **0%**, Finance Agent v2 **60.60% ±0.28**, legal-agent **25.42% ±3.67 (#1/79)**, tax-agent **32.80% ±2.75**, SkillsBench **53.04% ±4.42**. Benchmark-specific overrides possible [S3].
- BenchLM separately lists GDPval **1631** and Vals TB2.1 **69.7%**; secondary snapshots, not replacements for primary 1615 or current TB4 [S5]. Tau3/Tau2, Claw-Eval/ClawProBench and MCP-Atlas: no verified exact score found.

Reasoning / knowledge:

- AA current Intelligence Index **v4.3.2 40, #59/217** [S4]; Vals **49.29% ±1.10, #33/48**, MMLU Pro **88.28% ±0.32**, ProofBench v1.1 **43% ±4.98** [S3].
- BenchLM AA-attributed GPQA **90.4%**, HLE **45.5%**, LCR **79%**, CritPt **17.7%**, Omniscience Index **27.2**, accuracy **45.4%**, hallucination **33.3%**: secondary-only figures, not directly exposed current AA rows [S5]. Hallucination is conditional on non-correct responses, not all answers. MLCR: no verified score found.

Coding:

- Primary later comparison DeepSWE **v1.1 55.0%**, SWEAtlas Codebase QnA **46.2%** [S7]; BenchLM earlier DeepSWE **59.3%** remains a different secondary snapshot [S5].
- Vals SWE **86.60% ±1.52**, Vibe v1.1 **79.10% ±3.31**, migration **29.95% ±4.02**, IOI **21.78% ±0.87**, ProgramBench **0.50% ±0.50** [S3]. LiveCodeBench and SWE-Pro: no directly verified score found. BenchLM AA-SciCode **57.4%**, secondary-only [S5].
- Independent VulcanBench v3, 23 deterministic post-cutoff PR tasks, one attempt per effort: **87.0% low / 73.9% high / 52.2% xhigh**, **0/5/10 timeouts**, **$0.41/$1.23/$2.27 per solved task**. Fixed 20–60 minute task budgets; 10 of 15 timed-out runs wrote no patch. Small sample and five reused low-effort runs disclosed [S8].

Long context / multimodal:

- Primary MRCR **256K–512K 66.3% / 512K–1M 55.5%**, not 1.3's 98%+ [S7].
- Vals MMMU Pro **86.13% ±0.83**; primary broad modalities and continued audio recommendation corroborate breadth [S1,S3].

### Evidence comparison and research trail

Three distinct DuckDuckGo queries: `"Muse Spark 1.2" official model card`, `"Muse Spark 1.2" independent benchmarks`, `"Muse Spark 1.2" pricing limitations review`; all challenged, supplying no evidence. Guessed research launch URL returned 404. Direct vendor docs, exact legacy page, current comparison page, AA, Vals, BenchLM, OpenCode and VulcanBench were read instead. Image-only charts on the exact model page were not treated as extracted numeric evidence; readable 1.2-labelled comparison columns supplied primary figures [S2,S7].

AA's deprecated notice concerns its benchmarking policy, while Meta still lists hosted 1.2 [S1,S4]. AA **374.6 tokens/s (#1/188), 12.63s TTFT, $0.97/index task, 130M suite output tokens** describe xhigh/current profile; Vals **$1.942/test /22m56s** is another suite [S3,S4]. Fast decoding cannot prevent reasoning-heavy timeouts: VulcanBench's effort inversion is directly evidenced under fixed budgets, not proof that low effort wins every task [S8]. Strong legal/finance results coexist with poor SRE/TB4/ProgramBench. Primary MRCR 55.5% prevents transferring 1.3's retrieval performance. BenchLM aggregate **65.85, #34/950, 23/638 coverage** is not repository Overall [S5].

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong legal/finance and historical TB2.1, capped by TB4 6.06%, SRE zero and effort/budget sensitivity [S3,S7,S8].
- **Reasoning: 85/100.** MMLU, sourced HLE/GPQA and useful long-context reasoning, capped by ProofBench 43%, current index and partial secondary coverage [S3–S5].
- **Context window: 95/100.** Official 1M capacity; MRCR 55.5% at 512K–1M earns no perfect-retrieval bonus [S1,S7].
- **Multimodal: 95/100.** Verified audio/video/image/PDF input and independent visual reasoning; text-only output caps ceiling [S1,S3].
- **Coding: 85/100.** Strong conventional SWE/Vibe and efficient low-effort PR work, capped by migration, ProgramBench and xhigh timeouts [S3,S8].
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 with caching is economical, but $0.97/task and overthinking constrain savings; cheaper Contributor entails training-data use [S2,S4,S8].
- **Overall Score: 89/100.** (83 + 85 + 95 + 95 + 85) / 5 = 88.6 → 89. Best fit: fast multimodal/document workflows and carefully budgeted coding; cost excluded.

### Sources

- [S1] https://dev.meta.ai/docs/models — primary exact-version availability, protocols, modalities and 1M limit.
- [S2] https://developer.meta.com/ai/models/muse-spark-1-2/ — primary legacy route and pricing/data-use tiers.
- [S3] https://www.vals.ai/models/meta_muse_spark_1_2 — independent current xhigh suite and parameters.
- [S4] https://artificialanalysis.ai/models/muse-spark-1-2 — independent current index, economics and speed.
- [S5] https://benchlm.ai/models/muse-spark-1-2 — secondary sourced snapshots, updated October 15.
- [S6] https://opencode.ai/docs/zen — provider routes, paid 1.2 pricing and current Free roster.
- [S7] https://developer.meta.com/ai/models/muse-spark/ — current 1.3 page with explicitly labelled 1.2 xhigh comparison column.
- [S8] https://vulcanbench.com/benchmarks/19-musespark-effort.html — independent exact-ID effort/budget study, August 25.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct search attempts, direct primary/evaluator inspection and bounded coding study comparison. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
