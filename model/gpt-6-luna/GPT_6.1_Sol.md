# GPT-6 Luna — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-6-luna`; max-effort results unless labelled otherwise.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-6 Luna.
- **Short description:** OpenAI's inexpensive GPT-6 model for focused, high-volume work, with native image understanding and a large context. Lower token prices do not establish an across-the-board quality improvement over the previous Luna.[1][2][4]
- **Provider / access:** OpenAI `gpt-6-luna`; Responses supports built-in tools and function calling. **Chat Completions permits function calling only at `reasoning_effort: none`**. Gateway `openai/gpt-6-luna` lists OpenAI/Azure and other distribution routes, with backend snapshot `openai/gpt-6-luna-20260922`; that gateway date is not a separately documented direct API pin.[1][6]
- **Release / knowledge:** **2026-09-22**, confirmed by AA/Vals/ARC; official knowledge cutoff **2026-05-18**.[1][3][5][7]
- **IDs:** Direct alias/snapshot listed by OpenAI is `gpt-6-luna`. No separately verified free Zen route. Consumer free-plan access does not make the API free.[1][8]
- **Context window:** **1,050,000 total / 922,000 input / 128,000 output**, confirmed by official docs and exact gateway routes. AA/Vals round this to 1M. Input/output share the total; reasoning consumes generation budget.[1][3][5][6]
- **Modalities:** Text/image input, text output; PDF understanding through the vision/file pipeline. No native audio/video or non-text generation. Responses image-generation support invokes a separate tool/model. Structured Outputs, streaming, search, hosted shell, computer use, `apply_patch`, MCP, skills and tool search are integration capabilities, not additional native modalities.[1][5]
- **Reasoning:** `none`, `low`, **`medium` default**, `high`, `xhigh`, `max`. The principal AA/Vals results below are **max**, not default-medium guarantees.[1][3][5]
- **Pricing (2026-10-20):** Standard per-million **$0.10 input / $0.50 output / $0.01 cache read / $0.125 cache write**. More than **272K input tokens** doubles input/cache rates and multiplies output by **1.5 for the entire request**: $0.20/$0.75, cache read $0.02/write $0.25. Batch/Flex halve applicable Standard rates; Fast doubles them; regional processing adds 10%. Cache writes are a distinct applicable input rate, not free storage or a discount to every prompt. Hosted tools cost extra.[1][6]
- **Architecture:** Proprietary; parameter count and dense/MoE layout undisclosed, no open weights. GPT-6 Sol/Astra results do not belong to Luna.[1][2]

### Raw benchmarks found

**Attribution:** AA's directly inspected selected record is **GPT-6 Luna (Max)**, UUID `6fb13851-40ce-4bda-ad3f-6b38e0c5daa7`; current index is measured, not estimated. Vals defaults to OpenAI/max/128,000 output; individual suites can differ. Vendor results remain vendor-run.[2][3][5]

Agent / tool use:

- **Terminal-Bench 4.0:** **12.63% AA**, **13.64% ± 1.51 Vals current**; **Terminal-Bench-Science 8.57% AA / 4.29% ± 2.44 Vals**. Vals' September release note had different TB4/science results; current rows are not silently combined with launch snapshots.[3][5]
- **Terminal-Bench 2.1:** **73.03% Vals historical release note**. Different version and date from current TB4. AA's selected TB2.1/Tau2/Tau3 fields are null, not zero; no verified exact-model Claw-Eval, ClawProBench, MCP-Atlas or Toolathlon score found.[3][5]
- **GDPval-AA 1431.86 Elo**, **Briefcase 1334.83 Elo / 41.21% rubric pass**, **AutomationBench-AA 53.17% partial score**, **AnalystAgent 43.75% AA**. Elo, partial reward and complete workflow success are distinct.[3]
- AA's original independent review explicitly finds weaker presentation and missing rubric elements, with Luna down approximately **75 GDPval Elo / 45 Briefcase Elo** relative to the predecessor under its comparison.[4]
- Vals current **Finance Agent v2.1 56.84%**, **EMB v1.1 69.95%**, **Harvey legal v1.1 4.17%**, **SRE Bench 2.67%**; strong bounded tasks do not establish professional end-to-end autonomy.[5]

Reasoning / knowledge:

- **HLE 38.51%**, **CritPt 19.43% AA**; **ProofBench v1.1 64.00% ± 4.82 Vals**. GPQA/AIME: **no verified public score found** in directly inspected exact-model evidence; selected AA fields are null.[3][5]
- **AA Intelligence Index 38.125**, measured current composite. Vals current index **52.32% ± 1.12, #19/22** differs from its dated **58.45%, #20/65** launch note as suite/cohort versions change. Neither is this repository's Overall.[3][5]
- **Omniscience accuracy 43.78% / hallucination 76.73% / reliability index 0.65 AA**. Lower hallucination than the previous Luna partly reflects abstention; it does not mean near-perfect factuality.[3][4]
- **ARC Prize verified Semi-Private:** max **ARC-AGI-1 86.7% / ARC-AGI-2 59.3%**, versus default medium **61.0% / 18.1%**, low **37.7% / 4.6%** and none **8.8% / 0.0% measured**. ARC-AGI-3 max is only **0.1% Standard / 0.6% Provider Adapter**, demonstrating sharply limited interactive generalization; different harnesses preserve different state.[7]

Coding:

- **DeepSWE v1.1 66.6% vendor max**, versus **64% AA's independent Codex-harness review**; AA **Coding Agent Index 41**, **SWE-Atlas-QnA 44%**. The QnA result is not patch resolution; the index regresses two points versus the previous Luna in that controlled comparison.[2][4]
- **SciCode 54.63% AA**, **Vibe Code Bench v1.1 81.65% ± 3.38 Vals**, **Code Migration v1.1 46.67%**, **IOI 55.56%**, **SWE-bench Multimodal 37.50%**.[3][5]
- **ProgramBench 0.50% ± 0.50 fully resolved Vals**, an observed low result, not missing-data zero. No verified exact SWE Verified/SWE-Pro/LiveCodeBench value found.[5]

Long context / vision / runtime:

- **LCR 83.33% / MLCR 16.11% AA**, not evidence of ≥98% full-million-token retrieval; no verified MRCR/RULER at maximum input found.[3]
- **MMMU-Pro 79.65% / GDP.pdf 22.8% all-pass AA**. Native visual competence is real, but difficult document deliverables remain unreliable.[3]
- AA median **124.22 output tokens/s**, **89.50 s first chunk**; approximately **144.38M evaluation output tokens / 128.24M reasoning tokens**, weighted **$0.0678/task**. Cheap token prices do not make max-effort requests low-latency. Vals' different composite costs **$0.45/test**, **32 min 23 s** workload latency.[3][5]
- HokAI's dated secondary review quotes older **126 tokens/s / 74 s** and launch indexes; current direct records take precedence. Its concrete job prices are arithmetic examples with stipulated token budgets, not observed successful tasks.[8]

### Normalized scores (1–100)

- **Tool use: 77/100.** Useful deliverable Elo, AutomationBench and TB2.1 support capable supervised agents, capped by TB4 around 13%, legal/SRE tails and absent banking evidence.[3][4][5]
- **Reasoning: 83/100.** HLE 38.51%, CritPt 19.43%, ProofBench and max-effort ARC2 support strong reasoning, capped by factual calibration, medium-effort degradation and near-zero ARC3.[3][5][7]
- **Context window: 95/100.** Verified 1.05M total qualifies for the million-token tier, but MLCR 16.11% and absent near-perfect full-window retrieval preclude 100.[1][3][6]
- **Multimodal: 82/100.** Image/PDF understanding has measured MMMU-Pro/GDP.pdf support; no native audio/video or non-text generation, and document accuracy limits breadth.[1][3][5]
- **Coding: 84/100.** Independent DeepSWE 64%, SciCode 54.63% and Vibe 81.65% support useful engineering, capped by coding-index regression, migration weakness and ProgramBench 0.50%.[3][4][5]
- **Cost efficiency: 97/100.** Very low paid rates and directly measured roughly seven-cent index tasks establish excellent value; long-context/cache-write/tool charges and substantial max-effort delay prevent a free-tier maximum.[1][3][5][6]
- **Overall Score: 84/100.** Half-up mean `(77 + 83 + 95 + 82 + 84) / 5 = 84.2`; cost excluded. Best fit: inexpensive text/image pipelines and bounded engineering with explicitly chosen effort and a verified Responses integration.

### Research trail and sources

Fresh Bing `"GPT-6 Luna" official benchmarks` produced broad unrelated results; Google `"GPT-6 Luna" independent benchmark review` hit a JavaScript interstitial; DuckDuckGo `"GPT-6 Luna" pricing context benchmark` supplied exact official/evaluator/review leads. Guessed standalone launch paths returned 404; the linked joint Sol/Luna launch resolved. Original launch, independent selected AA record and article, Vals, ARC's exact result page and live gateway metadata were compared. BenchLM was discovery only; secondhand results not inspected at their source were not scored. No peer findings were consulted.

[1]: https://developers.openai.com/api/docs/models/gpt-6-luna "Official exact limits, modalities, effort, endpoint constraints and pricing"
[2]: https://openai.com/index/introducing-gpt-6-sol-and-luna/ "Official joint launch and vendor DeepSWE result"
[3]: https://artificialanalysis.ai/models/gpt-6-luna "Exact selected Max public JSON, current measured metrics, costs and runtime"
[4]: https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier "Independent Codex coding, cost, factuality and deliverable comparison"
[5]: https://www.vals.ai/models/openai_gpt-6-luna "Independent max-effort profile, current suites and dated launch note"
[6]: https://openrouter.ai/api/v1/models/openai/gpt-6-luna/endpoints "Exact backend snapshot, caps and tiered provider pricing"
[7]: https://arcprize.org/results/openai-gpt-6-luna "Verified effort-specific ARC1/2 and Standard versus Adapter ARC3 results"
[8]: https://hokai.io/hub/models/gpt-6-luna "Dated secondary review, historical metric snapshots and illustrative job budgets"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh public searches, exact official/provider identity checks, direct evaluator records and benchmark-specific comparisons. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
