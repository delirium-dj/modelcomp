# GLM-5.3-Flash — findings by GPT 6.1 Sol

- Source: Z.AI / `glm-5.3-flash`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (OpenCode limited-time Free tier available)
- **Short description:** Open-weight native multimodal GLM with hybrid sparse/linear attention, emphasizing cheap coding and tool workflows. FlashX has a distinct route and price; its speed is not credited to Flash [S1,S5].
- **Provider / access:** Z.AI Chat Completion API; Coding Plan includes Flash but not FlashX [S1]. OpenCode `opencode/glm-5.3-flash` and `opencode/glm-5.3-flash-free`, both `https://opencode.ai/inference/openai/v1/chat/completions` [S6]. Self-hostable weights [S2].
- **Release / knowledge:** August 26, 2026 [S3,S4]; knowledge cutoff not verified.
- **IDs:** `glm-5.3-flash`, HF `zai-org/GLM-5.3-Flash`. Vendor identifies pre-release ox-alpha as Flash lineage; old stealth measurements are not assumed identical production results [S1].
- **Context window:** Official 1M and 128K output [S1]. Vendor benchmark-specific 164K/300K/400K contexts do not redefine the API maximum [S2].
- **Modalities:** Vendor text/image/video/file input, text output; tools, structured output, streaming and caching. Vals Fireworks setup lists only text/image support, so hosted modality support varies [S1,S3]. Native audio not verified; agent video-editing examples do not prove direct audio API support.
- **Pricing (as of 2026-10-16):** Native and OpenCode paid $0.15 input/$0.03 cache/$0.50 output per million; cache storage currently free, search $0.01/use [S5,S6]. OpenCode Free route is temporarily $0, provider zero retention/no training per provider docs; cost score evaluates this explicitly labelled tier. FlashX $0.37/$1.25 is separate [S5,S6].
- **Architecture:** MIT open weights, 320B total/18B active, hybrid sparse/linear attention and mHC, 45 layers, 30T-token pretraining corpus [S1,S2]. Vendor reports 3× attention-compute and 4.4× KV reductions against GLM-5.3, not universal end-to-end savings [S1]. Thinking cannot be disabled; low/high/max accepted, max default, invalid values fall back to max. Preserve thinking for agent runs; chat guidance differs [S1,S2].

### Raw benchmarks found

Agent / tool use:

- Primary docs AutomationBench **v1.0.6 48.8%**, incorporating null-type fix [S1,S2]. Vendor internal Z.ai Code Bench **29.0** at max vs Opus 4.8 29.5 is internal, not a universal coding score [S1].
- Vals Fireworks max/temp1/top_p0.95/128K default: TB4 **37.37% ±2.67**, Finance Agent v2 **57.85% ±2.06**, legal-agent **6.67% ±1.65**, legal research **45.19% ±3.46**, SRE **0.76% ±0.54**, SkillsBench **40.16% ±4.43** [S3]. Benchmark-specific overrides possible.
- BenchLM vendor-attributed TB2.1 **84.3%**, Toolathlon-Verified **78.4%**, GDPval-AA **1773 Elo**, Agents' Last Exam **26.3%**; AA-attributed Tau3 Banking **47.2%**, AutomationBench-AA **60.4%**, TB4 **32.8%**, Briefcase **1454 Elo**, ITBench **51.2%**, EnterpriseOps **33.2%** are secondary-only numeric snapshots [S7]. HF gives vendor TB2.1 Claude Code 2.1.207, 6-hour timeout, and Toolathlon three-run pass@1 settings [S2]; not comparable to every hosted harness. Claw-Eval/ClawProBench: no verified score found.

Reasoning / knowledge:

- AA current Intelligence Index **v4.3.2 42, #5/120 in open-weight class**, not fifth globally [S4]. Vendor historical **v4.1.1 57 at discounted $0.045/task** is another suite/rate snapshot [S1].
- Vals index **44.58% ±1.41, #40/48**, GPQA **86.36% ±2.13**, MMLU Pro **86.06% ±0.34**, ProofBench v1.1 **21% ±4.09** [S3].
- BenchLM AA-attributed GPQA **91.2%**, HLE **39.9%**, LCR **80%**, MLCR **51.1%**, CritPt **15.4%**, Omniscience Index **7.5**; vendor-attributed HLE-with-tools **55.3%**, secondary-only [S7]. No verified exact Omniscience accuracy/hallucination pair found. HF HLE setup uses 163,840 generation, 300K managed context and GPT-5.6 Luna medium judge, not the 128K API default [S2].

Coding:

- Primary DeepSWE **v1.1 63.4%**, mini-swe-agent, six-hour timeout/400K context settings described in HF [S1,S2].
- Vals SWE **92.00% ±1.21**, LiveCodeBench **80.51% ±1.05**, Vibe **v1.1 30.76% ±5.28**, Vibe **1–100 16.03% ±3.28**, migration **20.52% ±4.21**, ProgramBench **0%**, terminal-science **2.86% ±2.01** [S3]. Conventional issue-solving success does not imply complete app/research delivery.
- BenchLM AA-SciCode **51.6%**, NL2Repo **56.3%**, secondary-only [S7]. Exact SWE-Pro not verified.

Long context / multimodal:

- Official 1M capacity; no exact full-window MRCR/RULER retrieval percentage verified [S1].
- Vals MMMU Pro **86.01% ±0.83** [S3]; BenchLM vendor-attributed MMVU **80.5%**, CharXiv **89.4%**, OfficeQA Pro **62.4%**, secondary-only [S7]. Vendor broader modalities and narrower provider profile both retained.

### Evidence comparison and research trail

Three distinct fresh DuckDuckGo searches: `"GLM-5.3-Flash" official specifications`, `"GLM-5.3-Flash" independent benchmark`, `"GLM-5.3-Flash" review pricing limitations`; all challenged, no evidence obtained. Blog fetch returned no readable content. Direct model docs, upstream HF README, primary pricing, independent AA/Vals and secondary BenchLM were inspected; OpenCode provider docs directly read during this batch [S6].

Current native rates are $0.15/$0.50, whereas Vals profile still lists rounded **$0.07/$0.25**; current native price controls native costing, Vals **$1.035/test /70m35s** remains tied to its provider/suite [S3,S5]. AA **$0.28/index task, 180M suite output tokens, 68.2 tokens/s, 2.73s TTFT** is current profile evidence, not vendor launch's discounted $0.045/task [S1,S4]. FlashX's advertised 200 tokens/s is not Flash throughput. Max is always-thinking and verbose: budget/output settings matter even at low token prices. Vendor TB2.1 84.3% (secondary), older Vals 62.9% (secondary) and current Vals TB4 37.37% must not be pooled [S3,S7]. BenchLM **58.53, #59/950, 45/638 coverage** is a separate aggregation. High SWE and useful finance coexist with weak migration, proof, SRE and full-program results, limiting broad frontier-equivalence marketing [S1,S3].

### Normalized scores (1–100)

- **Tool use: 83/100.** Useful finance, AutomationBench and terminal performance; low SRE/legal-agent and provider/harness variance cap autonomy [S1–S3].
- **Reasoning: 83/100.** Independent GPQA/MMLU and current index support strong reasoning, capped by ProofBench 21% and modest secondary CritPt/calibration evidence [S3,S4,S7].
- **Context window: 95/100.** Verified 1M capacity, without ≥98% full-window retrieval evidence [S1].
- **Multimodal: 88/100.** Native image/video/file understanding and MMMU 86.01%; endpoint variation and absent native audio/output keep it below omni tier [S1,S3].
- **Coding: 84/100.** Strong SWE and DeepSWE, capped by low Vibe/migration, zero ProgramBench and scientific-terminal weakness [S1–S3].
- **Cost efficiency: 100/100.** Evaluated OpenCode limited-time Free route is $0. Paid fallback $0.15/$0.50 remains cheap but is not free; full task cost depends on token use [S4–S6].
- **Overall Score: 87/100.** (83 + 83 + 95 + 88 + 84) / 5 = 86.6 → 87. Best fit: low-cost supervised multimodal coding and tool workers with explicit budgets; cost excluded.

### Sources

- [S1] https://docs.z.ai/guides/llm/glm-5.3-flash — primary model/FlashX distinctions, specs and readable benchmark prose.
- [S2] https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/README.md — upstream MIT card, defaults, thinking continuity and benchmark settings.
- [S3] https://www.vals.ai/models/zai_glm-5.3-flash — independent Fireworks-hosted max-effort suite.
- [S4] https://artificialanalysis.ai/models/glm-5-3-flash — independent current index/class, economics and timing.
- [S5] https://docs.z.ai/guides/overview/pricing — primary native rates, storage and tool fees.
- [S6] https://opencode.ai/docs/zen — primary gateway routes, temporary Free offering and data policy.
- [S7] https://benchlm.ai/models/glm-5-3-flash — secondary source-linked benchmark snapshots, updated October 15.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches, direct upstream/provider/evaluator inspection; free/paid, host, suite, effort and secondary-only evidence distinguished. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
