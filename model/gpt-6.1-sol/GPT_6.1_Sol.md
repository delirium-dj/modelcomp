# GPT-6.1 Sol — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-6.1-sol`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** GPT-6 Sol upgrade emphasizing near-Astra coding, documents and computer work at lower token prices. Vendor comparisons are task/effort specific, not proof of universal Astra equivalence [S1,S2].
- **Provider / access:** OpenAI Responses API for tools; Chat Completions supports no tool calling. Launch access in ChatGPT Work/Codex for Plus, Pro, Business, Enterprise and Edu; launch post says not yet in Chat [S1,S2].
- **Release / knowledge:** September 29, 2026 [S3,S4,S6]; April 30, 2026 knowledge cutoff [S1].
- **IDs:** `gpt-6.1-sol`; no separately dated snapshot in primary model card. No verified Zen Free ID.
- **Context window:** Official 1,050,000 total, maximum input 922,000, output 128,000 [S1]. Secondary rounded 1.1M input wording is not a larger verified input limit [S7].
- **Modalities:** Text/image input, text output; audio/video explicitly unsupported. Structured outputs, reasoning, streaming; Responses supports search, files, computer use, MCP, shell, code interpreter, apply_patch and skills. Image generation is an external tool [S1]. Vals confirms file input [S3].
- **Pricing (as of 2026-10-16):** Standard $2 input/$0.10 cached input/$2.50 cache write/$10 output per million. Above 272K input, full-request input/cache rates double and output rises 1.5×. Fast 2×, Ultrafast 6×, Batch/Flex half standard; regional processing +10% [S1].
- **Architecture:** Proprietary, parameter count undisclosed [S4]. Efforts low/medium/high/xhigh/max; medium default, none/minimal unsupported [S1].

### Raw benchmarks found

Agent / tool use:

- Vals max-effort default: **Terminal-Bench 4.0 55.05% ±1.82**, **SRE 50.76% ±3.10**, Finance Agent v2 **52.03% ±0.31**, legal-agent **5.42% ±1.75**, legal research **38.46% ±3.38**, tax-agent **21.75% ±2.98** [S3]. Per-benchmark parameter overrides possible.
- BenchLM secondary-attributed AA snapshot: TB4 **56.1%**, AutomationBench-AA **64.9%**, Briefcase **1558 Elo**, GDPval-AA **1594 Elo**, GDP.pdf **31.0%**, AnalystAgent **50.0%** [S5]. Exact current AA subscore rows were not exposed in directly fetched text; do not treat these as independently reverified numbers.
- Vendor launch prose: AutomationBench medium exceeds Opus 5.5 by **2.2 points**; OSWorld2 offline partial reward at max comes within **2.1 points** of Astra. No exact Sol percentage readable there; no subtraction across unknown settings [S2]. BenchLM launch-attributed AutomationBench **36.1%** is secondary-only and not directly comparable to AutomationBench-AA [S5].
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench and MCP-Atlas: no verified exact-model numeric score found in inspected sources.

Reasoning / knowledge:

- AA current Intelligence Index **v4.3.2 52, #12/217** [S4]. Vals Index **61.15% ±1.01, #9/48**, ProofBench v1.1 **99% ±1.00**, BioMysteryBench **79.63% ±0.74** [S3].
- Direct ARC verified semi-private max: ARC-AGI-1 **96.5%**, ARC-AGI-2 **94.2%**, ARC-AGI-3 **52.7% Standard / 96.2% Provider Adapter**. Xhigh ARC1 **98.5%**, ARC3 **39.9% Standard / 96.4% Adapter**; default medium ARC3 **10.6% / 91.0%** [S6]. Adapter preserves opaque reasoning and compacts; Standard carries selected notes. These are different harnesses, not contradictory measurements.
- BenchLM AA-attributed HLE **52.9%**, CritPt **31.7%**, LCR **83.0%**, MLCR **33.9%**, Omniscience Index **41.5**, accuracy **62.1%**, hallucination **54.3%** are secondary-only snapshot figures [S5]. The hallucination metric concerns non-correct responses, not a share of all answers.
- BenchLM FrontierMath v2 **93.684% tiers 1–3 / 100% tier 4** is evaluator-attributed secondary evidence, not directly reverified and not used as proof of perfect mathematical reasoning [S5]. GPQA: no verified exact-model score found.
- Official factual-error rate at low effort **7.7%**, versus earlier Sol 11.4%, on deliberately error-inducing flagged conversations; not a general-use error probability [S2].

Coding:

- Vals Vibe v1.1 **88.93% ±1.89**, migration **65.12% ±4.36**, IOI **96.89% ±3.11**, ProgramBench **3.00% ±1.21**, SWE-bench Multimodal **43.54% ±2.27** [S3].
- Terminal-Bench Science **52.86% ±6.01**, Vals [S3]. Vendor prose reports **$5.47/task** at max but no exact readable Sol success percentage; BenchLM reports vendor-attributed **57.0%** separately [S2,S5].
- DeepSWE **71.9%**, AA-SciCode **54.2%**, secondary-attributed BenchLM [S5]. Vendor prose confirms matching Astra on DeepSWE v1.1 but no numeric Sol score in extracted text [S2]. SWE-bench Verified/Pro and LiveCodeBench: no exact numeric result verified.

Long context and multimodal:

- Official 1.05M capacity; no full-window MRCR/RULER retrieval score verified [S1]. AA-LCR snapshot above is not evidence of ≥98% retrieval beyond 512K.
- Vals multimodal SWE confirms grounded vision/code work; BenchLM AA-MMMU Pro **86.0%** is secondary-only [S3,S5]. Native audio/video remain unsupported [S1].

### Evidence comparison and research trail

Three distinct fresh DuckDuckGo searches: `"GPT-6.1 Sol" official benchmarks`, `"GPT-6.1 Sol" independent Artificial Analysis`, `"GPT-6.1 Sol" review pricing limitations`; all challenged. Alternate Bing `"GPT-6.1 Sol" review benchmark` returned mostly general GPT pages. No evidence inferred from blocked or irrelevant search results. Directly inspected exact primary docs/launch, independent AA/Vals/ARC, and secondary BenchLM/LLM Stats; no peer findings read.

The major independently verified discrepancy is harness-sensitive ARC3: 52.7% Standard max versus 96.2% Adapter max. Reporting only the latter as an unqualified model score would conceal the role of reasoning continuity [S6]. BenchLM's 84.04 aggregate (#2/950, 36/638 partial coverage) is neither this repository's Overall nor AA's 52 [S4,S5]. AA reports **61.1 tokens/s**, **285.47s TTFT**, **$0.72/index task**, **67M suite output tokens** at max [S4]; cheaper generation does not guarantee short wait times. Vals **$3.237/index test / 43m10s** is another suite and not a comparable task-cost denominator [S3]. Vendor “one-fifth Astra” refers standard input/output rates, not every workload/mode, cache mix or tool budget [S1,S2]. Vals low CyberBench v1.1 **39.29%** and low legal/programming all-pass tasks qualify broad capability marketing [S3].

### Normalized scores (1–100)

- **Tool use: 92/100.** Independently strong TB4 and SRE with broad Responses tools; weak legal/tax workflows and harness sensitivity cap autonomy [S1,S3,S6].
- **Reasoning: 94/100.** Verified ARC2 94.2%, ProofBench 99% and current AA 52 support high reasoning; default-effort/harness variance and factual failures cap ceiling credit [S2–S6].
- **Context window: 95/100.** Official 1.05M meets top capacity tier without verified ≥98% full-window retrieval [S1].
- **Multimodal: 80/100.** Verified image/document workflows and multimodal SWE evidence; native audio/video unsupported and text-only output limit breadth [S1,S3].
- **Coding: 94/100.** Strong Vibe, migration, scientific terminal and grounded coding, capped by ProgramBench 3% and missing exact conventional SWE/LiveCode results [S3,S5].
- **Cost efficiency: 80/100.** $2/$10 and 95% cache discount plus $0.72 AA task economics are attractive for capability, capped by long-context/Fast/Ultrafast premiums [S1,S4].
- **Overall Score: 91/100.** (92 + 94 + 95 + 80 + 94) / 5 = 91.0 → 91. Best fit: demanding coding, scientific-terminal and document agents with appropriate effort and reasoning continuity; cost excluded.

### Sources

- [S1] https://developers.openai.com/api/docs/models/gpt-6.1-sol — exact primary API card, tools, limits and price modes.
- [S2] https://openai.com/index/introducing-gpt-6-1-sol/ — primary launch, qualified comparisons, scientific task cost and factuality sampling.
- [S3] https://www.vals.ai/models/openai_gpt-6.1-sol — direct independent suite with max default and benchmark-override caveat.
- [S4] https://artificialanalysis.ai/models/gpt-6-1-sol — direct independent current index, costs, speed and TTFT.
- [S5] https://benchlm.ai/models/gpt-6-1-sol — secondary sourced aggregation, updated October 15; secondary-only figures labelled.
- [S6] https://arcprize.org/results/openai-gpt-6-1-sol — direct verified effort/harness breakdown and semi-private definitions.
- [S7] https://llm-stats.com/models/gpt-6.1-sol — secondary release/pricing corroboration; rounded input wording superseded by primary limits.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches plus alternate-engine retry; primary and independent evaluation inspection, with harnesses, efforts, secondary-only figures and cost denominators kept explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
