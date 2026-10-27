# Qwen3.5-27B — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.5-27B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name / description:** Qwen3.5-27B, dense open-weight vision-language model for reasoning, programming and document/video understanding; distinct from the 35B and 122B MoE variants.
- **Provider / IDs:** Alibaba Model Studio `qwen3.5-27b`, DeepInfra `Qwen/Qwen3.5-27B`, OpenRouter `qwen/qwen3.5-27b`; Chat Completions-compatible hosting. No distinct Zen Free ID verified.
- **Release / knowledge:** February 2026; catalogs variously give February 23–25. Exact day and knowledge cutoff remain unresolved.
- **Architecture:** 27B language parameters, dense 64-layer hybrid Gated DeltaNet/attention, vision encoder, Apache 2.0. AA lists 27.8B total; component accounting explains why that need not contradict the language-model count.
- **Context:** 262,144 native, extensible checkpoint configuration to 1,010,000. Official hosted maximum output 65,536; ordinary maximum input 260,096, thinking-mode input 258,048. Extension is not the default API allowance.
- **Modalities:** Text/image/video input and text output; thinking, function calling and structured output. No audio generation verified.
- **Pricing (2026-10-27):** Singapore $0.30/$2.40 input/output per million; Beijing, Frankfurt and Virginia $0.086/$0.688 through 128K input, $0.258/$2.064 above. Official card says context caching unsupported. DeepInfra $0.26/$2.60 standard. Singapore introductory token quota is temporary, not perpetual free inference.

### Raw benchmarks found

**Official checkpoint results:** [Qwen card](https://huggingface.co/Qwen/Qwen3.5-27B/raw/main/README.md).

| Area | Benchmark | Vendor result |
|---|---|---:|
| Tools | BFCL v4 | 68.5% |
| Tools | Tau2 | 79.0% |
| Tools | VITA-Bench | 41.9% |
| Tools | DeepPlanning | 22.6% |
| Search | BrowseComp | 61.0% |
| Reasoning | GPQA Diamond | 85.5% |
| Reasoning | HLE CoT / with tools | 24.3% / 48.5% |
| Knowledge | MMLU-Pro | 86.1% |
| Instruction following | IFEval / IFBench | 95.0% / 76.5% |
| Coding | SWE-bench Verified | 72.4% |
| Coding | Terminal-Bench 2 | 41.6% |
| Coding | LiveCodeBench v6 | 80.7% |
| Coding | FullStackBench English | 60.1% |
| Long context | AA-LCR / LongBench v2 | 66.1% / 60.6% |

The vendor uses an airline-domain correction for Tau2, context folding for search at 256K, and its own CodeForces query set. These scores measure a configured system, not guaranteed bare-model behavior.

**Independent evidence:** [AA comparison](https://artificialanalysis.ai/models/comparisons/qwen3-5-27b-vs-gpt-5-medium) reports reasoning-mode HLE 24%, CritPt 1%, AA-Omniscience −44 (index, not accuracy), and AA-LCR v1.1 78%. Its Intelligence Index v4.3.2 **23 is explicitly estimated**, so it is not used as a measured composite. [AA model page](https://artificialanalysis.ai/models/qwen3-5-27b) reports about 77–78 tokens/s; historical workloads beyond the default 10K are no longer refreshed.

[EvalEval community result](https://huggingface.co/Qwen/Qwen3.5-27B/commit/7d7f03eaf1084e4002cd08f75990b35d74838084) links a dated underlying evaluation record and reports GPQA Diamond 81.818%, lower than vendor 85.5%. The retrieved record does not establish matching reasoning budget/harness, so this is cross-check evidence rather than a like-for-like failure to reproduce.

No verified exact-model Claw-Eval, Toolathon, MCP-Atlas, DeepSWE, Vibe Code Bench or current GDPval result was established. No verified retrieval result at 512K+ was found. Native video support is established by provider specifications; no exact-model video quality score is claimed here.

### Cross-site reconciliation

- [Dataconomy](https://dataconomy.com/ai-models/qwen3-5-27b/) preserves an April AA snapshot with index 42.1, but displays impossible GPQA 858% and HLE 222%. Those malformed percentages are discarded, not silently repaired. Old and current index generations are not directly comparable.
- [GraySoft](https://graysoft.dev/benchmarks/alibaba-qwen3-5-27b-non-reasoning.html) lists non-reasoning HLE 13.2%, SciCode 36.7%, Tau2 87.1%; that is a separate operating mode, not evidence for the reasoning configuration scored here.
- [Official Alibaba specifications](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b) establish 65,536 output, overriding a [TokenCost](https://tokencost.app/models/qwen-3-5-27b) 33K listing. Regional pricing differs; Singapore's flat rate does not imply every region is flat-priced.
- [DeepInfra API](https://deepinfra.com/Qwen/Qwen3.5-27B/api) confirms its own price; gateway discounts and serving speeds are endpoint-specific rather than model-quality measurements.

### Normalized scores (1–100)

- **Tool use: 64/100.** Tau2 79 and BFCL 68.5 support useful tools; Terminal-Bench 41.6 and DeepPlanning 22.6 cap long-running autonomy.
- **Reasoning: 77/100.** GPQA 81.8–85.5 and independent HLE 24 support strong reasoning; CritPt 1 and weak Omniscience limit reliability.
- **Context window: 75/100.** Native 262,144 and independent LCR 78 support this tier; extension lacks verified high-recall 512K+ testing.
- **Multimodal: 78/100.** Official image/video input supports broad understanding; absent exact video quality testing and non-text output cap confidence.
- **Coding: 75/100.** SWE Verified 72.4 and LiveCodeBench 80.7 are strong for its size; terminal execution and independent coding coverage are weaker.
- **Cost efficiency: 93/100.** $0.30/$2.40 Singapore with cheaper regional pricing offers good value; reasoning tokens still incur charges.
- **Overall Score: 74/100.** (64 + 77 + 75 + 78 + 75) / 5 = 73.8 → 74; useful compact open multimodal reasoning and coding.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three independent targeted web searches, primary checkpoint and provider documentation, independent evaluation and conflicting-source review; normalized scores are interpretations, not vendor scores.
