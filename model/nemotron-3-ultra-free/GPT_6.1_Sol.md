# Nemotron 3 Ultra Free — findings by GPT 6.1 Sol

- Source: NVIDIA / `NVIDIA-Nemotron-3-Ultra-550B-A55B`,verified original-checkpoint free serving tier.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name / identity:** Nemotron 3 Ultra Free,**550B total/55B active**,not Llama-Nemotron Ultra253B,Nemotron3.5 or Base/GenRM checkpoints. The free tier maps to the same published550B checkpoint;no quality uplift inferred from the price.[1][3]
- **Description / architecture:** Text-only reasoning/orchestration model,hybrid **LatentMoE/Mamba2/attention with MTP**,NVFP4 pretraining,downloadable BF16/NVFP4. Actual current weights use **OpenMDW1.1**,not Apache2.0 or the separate NVIDIA Open Model Agreement. OpenMDW permits commercial/noncommercial use,with notice/licence retention on distribution;API-trial terms are separate.[1][5]
- **Release / freshness:** **2026-06-04**. Primary separately declares **pretraining cutoffSeptember2025/post-training cutoffMay2026**;model datesDecember2025–April2026 do not erase the later post-training disclosure. Secondary OpenCode metadata'sFebruary2026 knowledge date is not adopted over primary.[1][8]
- **Provider / IDs:** Native **`nvidia/nemotron-3-ultra-550b-a55b`** exists in current NVIDIA model catalog. Actual healthy listed OpenRouter **`nvidia/nemotron-3-ultra-550b-a55b:free`**,backend **`...-20260604:free`**,NVIDIA status0/recent100% reported uptime. OpenCode docs advertise **`nemotron-3-ultra-free`**,but the live OpenCode catalog did **not** contain it at inspection;docs/secondary metadata do not establish live Zen availability. No authenticated inference performed.[3][4][6][8]
- **Context / output:** Primary up to **1M**,default self-host recipes262,144 with explicit1,048,576 override;actual free route **1,000,000 total/65,536 completion**. AA measures262,144;paid gateway metadata262K is not the free-route cap. OpenCode metadata1M/128K is unconfirmed because its route is absent. Shared context and output limits not added.[1][2][3][8]
- **Modalities / tools / modes:** **Text→text only**,no native image/audio/video. Tool parsers,structured text and reasoning;default thinking/high with medium/no-think options. Primary defaults **temperature1/top-p0.95**,coding-agent **`force_nonempty_content`**,SGLang explicit thinking/tool kwargs required. Native GUI/media tool workflows do not make it multimodal.[1][3][7]
- **Pricing (2026-10-21):** Verified healthy-listed exact free route **$0 input/output**,NVIDIA Build also advertises free API endpoint. Trial quotas/access apply;OpenCode's NVIDIA-free policy says use is logged for security/product improvement and governed by API Trial Terms,not zero retention. Paid AA reference$0.60/$2.70/cache$0.16 is a different evaluation/serving configuration;self-hosting550B weights is not cost-free.[2][3][4][6]

### Raw benchmarks found

**Attribution:** Full original primary card benchmark table/methodology and official reproducibility guides inspected. Vendor uses NeMo Evaluator/Gym/Skills/Harbor,with some search/Tau3/finance/LongBench tasks using dedicated/internal scaffolding. Current reproduction defaults **thinking/temperature1/top-p0.95/max262,144**,with benchmark-specific repeats/judges;the actual free API65,536-output cap may constrain those recipes. AA exact selected **Reasoning UUID `5b52def2-ac9b-4465-ad80-91ea8079e253`**,**Index22.928 measured**. Quality results are for the same named checkpoint across recipes,not authenticated tests of today's free route.[1][2][3][7]

Agent / tool use:

- Vendor **TB2.1 56.4% /SWE Verified70.7% /SWE Multilingual67.7% /PinchBench90.0%**. Current reproduction guides specify OpenHands for SWE and Terminus2 for terminal,in Harbor/ECS sandboxes,with **three SWE/eight terminal repeats**. Repeats are not relabelled pass@3/pass@8 or a single-attempt guarantee.[1][7]
- Vendor **TauBench v3 banking22.6% /four-domain average70.9%**,with airline81.5/retail86.4/telecom92.9. Independent AA **Tau2 83.33% /Tau3-Banking14.23% /TB2.1 53.93% /TB4 0.51% /TB-Science0.00% measured /IFBench81.36%**. Different versions/domains/harnesses retained;zero science is not null.[1][2]
- AA **GDPval1010.60 Elo /Briefcase876.35 Elo,22.02% rubric pass /AutomationBench partial2.99% /AnalystAgent6.25% /EnterpriseOps28.89%**. Vendor GDPVal **46.7 on its reported scale** is not1010.6 Elo or a universal success percentage;reproduction uses Stirrup,pairwise/rubric modes and Gemini3.1Pro judge. No exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas found.[1][2][7]

Reasoning / coding:

- Vendor **GPQA no-tools87.0% /HLE26.7% no-tools,37.4% with tools /CritPt3.1% /MMLU-Pro86.8%**. AA **GPQA86.67% /HLE28.41% /CritPt3.14%** broadly corroborate the bounded knowledge/research profile,not frontier-equivalent hard-science performance.[1][2]
- AA **Omniscience accuracy22.58% /hallucination29.69% /reliability−0.4**. Vendor **accuracy24.1/non-hallucination78.7** are separately labelled measures;non-hallucination is not accuracy and metric denominators differ.[1][2]
- Vendor **LiveCodeBench v6 89.0%**,NeMo Gym **Cascade** recipe;**SciCode44.6% subtask**,versus independent AA **SciCode40.28%**. Vendor **IOI2025 570.0** is a contest score,not570% or a pass rate. Missing exact independent LCB/SWE/Vibe Code/DeepSWE not filled with sibling scores;new terminal0.51% limits broad autonomy.[1][2][7]

Context / modality / efficiency:

- Vendor **RULER1M94.7% /LongBench v2≤1M61.9% /AA-LCR65.4%**. Independent AA **LCR79.33% /MLCR5.56%**. RULER does not reach98% and simpler synthetic retrieval is not near-perfect complex full-window reasoning.[1][2]
- AA **MMMU-Pro null/GDP.pdf5.0%**,tool-mediated documents;no native vision inferred. Text-only model cannot inherit Nano Omni or3.5 Super VL media capabilities.[1][2][3]
- AA median **159.99tokens/s/1.20s first chunk**,canonical output112.45M/reasoning93.76M tokens. Paid-reference weighted **$0.5770/task**,TB4 **$2.9232/task with0.51% success**;these costs/latencies are not today's$0 free route or an expected successful-project cost.[2][3]

### Normalized scores (1–100)

- **Tool use: 61/100.** Useful older terminal,Tau2 and bounded artifacts,capped by banking14.23%,weak automation and newer-terminal/science-terminal near-zero.[1][2]
- **Reasoning: 76/100.** Strong corroborated GPQA/HLE and calibrated abstention relative to many peers,capped by CritPt3.14%,limited factual coverage and difficult retrieval.[1][2]
- **Context window: 95/100.** Primary and actual free1M route verified;RULER94.7% and weak complex retrieval do not earn near-perfect-retention bonus.[1][2][3]
- **Multimodal: 15/100.** Explicitly text-only;PDF/tool artifacts are not native perception.[1][2][3]
- **Coding: 74/100.** Useful vendor repair/Cascade coding and independent SciCode,capped by newer terminal failures,absent independent persistent-app evidence and free-output cap versus reproduction budgets.[1][2][3][7]
- **Cost efficiency: 100/100.** Actual healthy-listed$0 NVIDIA free route;trial logging,quotas and unconfirmed Zen availability explicit. No free self-hosting or unlimited production access promised.[3][4][6]
- **Overall Score: 64/100.** Half-up mean `(61 + 76 + 95 + 15 + 74) / 5 = 64.2`;cost excluded. Best fit:free text-only bounded coding/reasoning and long-document experiments,with explicit route/output and success-rate validation.

### Research trail and sources

Fresh Bing official-benchmark RSS,Google independent-benchmark query returning an interstitial,and DuckDuckGo free/context/weights query;an additional exact AA query produced an unrelated user micro-eval,not benchmark evidence. Official HF model search found actual550B checkpoints;inspected primary table/methodology/licence and reproducibility guides. AA short/weight-style paths404;public AA model selector resolved the actual **nvidia-prefixed evaluator slug**,whose exact selected record succeeded. Two guessed Vals paths404;current native,OpenRouter-free and OpenCode catalogs compared with docs. No peer,253B,Base or successor figures substituted.

[1]: https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16/raw/main/README.md "Exact primary550B/55B,OpenMDW1.1,June4,cutoffs,1M,full benchmark table and serving guidance"
[2]: https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b "Exact selected Reasoning measured record and independent task/calibration/context/runtime/cost fields"
[3]: https://openrouter.ai/api/v1/models/nvidia/nemotron-3-ultra-550b-a55b:free/endpoints "Actual healthy-listed original-checkpoint$0 NVIDIA route,1M/64K,tools and dated backend"
[4]: https://opencode.ai/docs/zen/ "Advertised free ID and exact NVIDIA trial/data-logging policy;not proof live catalog availability"
[5]: https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1 "Actual permissive weight licence,notice obligations and distinct API-trial contract"
[6]: https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b "Exact NVIDIA Build free-endpoint advertisement"
[7]: https://raw.githubusercontent.com/NVIDIA-NeMo/Evaluator/main/examples/nemotron/nemotron-3-ultra/reproducibility.md "Official v0.2/v0.3 recipe map,262K reasoning defaults and benchmark-specific provenance"
[8]: https://models.dev/api.json "Exact free/native/paid identities and conflicting secondary cutoff/output metadata kept separate"
[9]: https://raw.githubusercontent.com/NVIDIA-NeMo/Evaluator/main/examples/nemotron/nemotron-3-ultra/v0.3/README.md "SWE OpenHands three repeats,terminal Terminus2 eight repeats and sandbox methodology"
[10]: https://raw.githubusercontent.com/NVIDIA-NeMo/Evaluator/main/examples/nemotron/nemotron-3-ultra/v0.2/README.md "Cascade LCB,GPQA/SciCode repeats,judges and GDPval pairwise versus rubric modes"
[11]: https://opencode.ai/inference/v1/models "Live October21 catalog lacked advertised Ultra free ID"
[12]: https://integrate.api.nvidia.com/v1/models "Native catalog includes exact550B Ultra ID,not successful inference"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary card/licence/reproducibility inspection,selected independent evaluator and actual free-route/catalog verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
