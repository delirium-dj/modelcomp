# Qwen 3.7 Max — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `qwen3.7-max`, explicitly the text-only May 20 snapshot mapping.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen 3.7 Max.
- **Short description:** Alibaba's closed hosted flagship for text reasoning, coding and agents. The current bare ID maps to **`qwen3.7-max-2026-05-20`**, not the June 8 visual snapshot or Qwen3.8 Max.[1][4]
- **Provider / access:** Model Studio, including OpenAI-compatible Chat Completions; exact gateway `qwen/qwen3.7-max`, backend `qwen/qwen3.7-max-20260520`. Function calling, structured outputs, prefix completion and caching are documented. Search and batch support vary by region: batch is documented in Beijing, not Singapore/global regions; US-scope Virginia lacks built-in search.[1][4]
- **Release / knowledge:** May 20, 2026 dated snapshot and Vals release; AA lists May 19, a one-day listing discrepancy. No verified exact pretraining cutoff found. AA calls the release superseded, while official docs/current gateway still list the May model; no shutdown inferred.[1][2][3][4]
- **IDs / modalities:** `qwen3.7-max` and May 20 snapshot are **text → text only**. Official **`qwen3.7-max-2026-06-08` adds image/video** as a separately named snapshot. Its modalities are not attributed to bare-ID measurements. The May 17/preview variant is thinking-only and lacks caching; bare May 20 supports thinking/non-thinking. No free Zen route verified.[1]
- **Context window:** Official/gateway **1,000,000 total / 131,072 max output**, thinking input cap **983,616**, non-thinking input **991,808** on the primary reference. These are conditional maxima sharing the total window, not simultaneously additive allowances. The separately listed 262,144 chain-of-thought ceiling does not establish ordinary 262K final output. Vals evaluates at **65,536 output** and displays approximately 984K input-like context, not a distinct smaller checkpoint.[1][3][4]
- **Pricing (2026-10-20):** Singapore international/US-scope **$2.50 input/$7.50 output/$0.50 implicit cache read per 1M**; explicit cache creation **$3.125**, read **$0.25**. Beijing/global regions list **$1.65/$4.951/$0.33 implicit**, explicit creation **$2.063/read $0.165**. Actual gateway offers **$1.475/$4.425/$0.295 cache read/$1.84375 write**, plus a **$2/$6/$0.40 read** route; do not call those the universal official list price.[1][4]
- **Free allowance / architecture:** Official pricing lists a **one-million-token Singapore introductory quota**, valid 90 days from the latest applicable activation/release/approval date; it is not a persistent $0 API tariff. Proprietary, no verified parameter count or downloadable weights/licence. Tool/PDF extraction through external applications does not confer native file or image input.[1][5]

### Raw benchmarks found

**Attribution:** AA selected exact record UUID `69534bed-2ffd-4235-832b-e20a810333ab`, slug `qwen3-7-max`, is reasoning-enabled, closed weights and measured current index. Vals exact `alibaba/qwen3.7-max` defaults to temperature .7 and 65,536 output; release note specifies `preserve_thinking` enabled. Independent evaluation scores do not belong to the June visual snapshot.[2][3]

Agent / tool use:

- **Terminal-Bench 2.1 74.53% AA / 61.05% ± 0.38 Vals**; historical Vals note **TB2.0 59.2%**, a distinct suite/date. Current AA **TB4 1.52% measured**; selected terminal-science field is null.[2][3]
- **Tau2 94.74% / Tau3-Banking 11.75% AA**. High older customer-service success does not establish banking reliability.[2]
- **GDPval-AA 1127.65 Elo / Briefcase 916.31 Elo**, rubric pass **23.74%**; **AutomationBench 22.98% partial score**, **AnalystAgent 18.75%**, **EnterpriseOps-Gym 45.00% AA**. These metrics have distinct scales and failure modes.[2]
- **IFBench 80.54% AA**. Vals **Finance Agent v2 47.78% / Legal Research 25.48% / Tax Agent 15.83% / EMB 57.04%**. No verified exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found.[2][3]

Reasoning / knowledge:

- **GPQA Diamond 92.32% AA / 90.15% ± 1.50 Vals**, **HLE 40.50% / CritPt 13.43% AA**; **MMLU-Pro 89.31% Vals**. No verified exact AIME result found in inspected sources.[2][3]
- **AA Intelligence Index 29.457 measured**, not this report's Overall; Vals' displayed **58.80% aggregate** and historical then-fifth **57.29% index** are different snapshot/suite contexts, not directly comparable to AA.[2][3]
- **Omniscience accuracy 31.13% / hallucination 25.63% / reliability 13.4833 AA**. Strong abstention/calibration does not imply broad factual recall.[2]

Coding / context / runtime:

- **SWE-bench Verified 68.80% ± 2.07 Vals full evaluation**, versus **66.7% Vals Index subset** in its launch note. **LiveCodeBench 87.06% ± 0.97 Vals / SciCode 49.54% AA**.[2][3]
- **Vibe Code Bench v1.1 47.67% ± 4.63 Vals**, versus historical **52.9% index subset**; **Code Migration 13.07%**. No verified exact independently inspected SWE-Pro/DeepSWE found; no current Qwen3.8 figures inherited.[3]
- **LCR 79.0% AA**. No verified full-window MRCR/RULER or ≥98% retrieval at 512K+ found. Million-token capacity is not near-perfect recall.[1][2]
- **GDP.pdf 8.6% all-pass AA** is an externally mediated workload for a text-only model, not native PDF/vision validation; selected MMMU-Pro is null.[1][2]
- AA median **201.30 output tokens/s / 2.23 s first chunk**, approximately **121.89M evaluation output / 102.90M reasoning tokens**, weighted **$1.1473/task** at its $2.50/$7.50 assumption. Vals displays **13 min 30 s** workload latency, not comparable to first chunk.[2][3]

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong older terminal/Tau2 and instruction following support useful agents; Tau3 11.75%, TB4 1.52% and weak professional deliverables cap modern autonomy.[2][3]
- **Reasoning: 85/100.** Independent GPQA around 90–92%, HLE 40.50% and CritPt 13.43% establish strong reasoning, capped by modest factual coverage and uneven broader task execution.[2][3]
- **Context window: 95/100.** Verified million-token native/served capacity; absence of near-perfect maximum-window retrieval and evaluator output caps prevent 100.[1][2][3][4]
- **Multimodal: 15/100.** Current bare/May 20 API is explicitly text-only; June 8 image/video snapshot and external file tools are not credited to it.[1][4]
- **Coding: 81/100.** Strong independent LCB/SciCode and useful SWE repairs, capped by 68.8% Verified, migration 13.07% and poor newer terminal tasks.[2][3]
- **Cost efficiency: 76/100.** Paid regional/gateway reductions and explicit caching improve value, but current task cost, premium list rates and expiring introductory quota prevent a free/maximum score.[1][2][4][5]
- **Overall Score: 70/100.** Half-up mean `(75 + 85 + 95 + 15 + 81) / 5 = 70.2`; cost excluded. Best fit: pinned long-context text reasoning/coding integrations; lack of native multimodal coverage materially lowers the general-purpose five-axis average.

### Research trail and sources

Fresh Bing RSS `"Qwen 3.7 Max" official benchmark` returned unrelated printer results; Google `"Qwen3.7-Max" independent review benchmark` an interstitial; DuckDuckGo `"Qwen3.7-Max" pricing context model` supplied exact Model Studio and provider leads. Both guessed Qwen blog IDs returned only a JavaScript shell, so no unviewed vendor benchmark was adopted. Current official model/snapshot/pricing reference, exact AA/Vals and live provider records establish identity and measured scores. No peer findings consulted.

[1]: https://www.alibabacloud.com/help/en/model-studio/qwen3-7-max "Primary bare-to-May mapping, separate June vision snapshot, limits, regional capabilities and prices"
[2]: https://artificialanalysis.ai/models/qwen3-7-max "Exact selected reasoning record, measured current quality/cost/runtime"
[3]: https://www.vals.ai/models/alibaba_qwen3.7-max "Independent exact model, preserved-thinking settings and full/subset benchmarks"
[4]: https://openrouter.ai/api/v1/models/qwen/qwen3.7-max/endpoints "Exact May backend, text-only modalities, real caps and gateway tariffs"
[5]: https://www.alibabacloud.com/help/en/model-studio/model-pricing "Current official list rates, alias mapping and finite 90-day introductory quota"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, primary snapshot/modality/pricing checks, direct independent evaluator profiles and exact provider comparisons. Scores are editorial normalized 1–100 interpretations, not vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
