# Ling 3.1 Flash — findings by GPT 6.1 Sol

- Source: inclusionAI, `inclusionAI/Ling-3.1-flash`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Ling 3.1 Flash (Ling-3.1-flash).
- **Short description:** Open-weight hybrid-reasoning text model for general agents, engineering, search and professional work. Finance/health benchmarks do not make this general model a finance- or speech-first specialist.[1]
- **Provider / access / IDs:** Weights `inclusionAI/Ling-3.1-flash`; self-hosted SGLang/vLLM Chat Completions with Ling parsers. Current OpenRouter **`inclusionai/ling-3.1-flash`**, backend `20261002`, has DeepInfra FP4 and Novita endpoints, both status 0 and advertised 100% recent uptime. No authenticated inference was performed here.[1][2]
- **Release / knowledge:** AA release date **2026-10-01**; gateway/backend metadata October 2. Exact primary knowledge cutoff unverified.[2][3]
- **Architecture / license:** Publisher **560B total / 25B active**, MIT; 63 KDA + nine gated-MLA layers, 512 routed experts/top eight plus one shared. Exact configuration is FP8 block-quantized with **262,144 native positions** and no YaRN scaling by default. SGLang's rough active-parameter estimate differs from the publisher; it is not evidence of a separate checkpoint.[1][4][5]
- **Context window:** Publisher and AA advertise **1M**, but native config and both current gateway routes are **262,144**. Importantly, SGLang documents a **tested 1,048,576-token YaRN override** on H200/GB300, including a 900,022-token prompt retrieving a fact planted at token 700,023 and a successful 300,101-token request. This supports a configured local 1M capacity, **not default 1M on the inspected API routes or perfect retention**. All four documented override keys are required.[2][4][5]
- **Output limits / modalities:** Gateway **235,929 max completion**, route-specific. **Text in/out only**; document work uses tools. SGLang thinking defaults on and can be disabled; publisher recommends temperature **1**, top-p **0.95**, top-k **20**. Forced tool-selection modes differ by host.[1][2][5]
- **Pricing (2026-10-22):** Both inspected gateway routes **$0.075 input / $0.225 output / $0.015 cached input per 1M**, explicitly **75% discounted** from $0.30/$0.90/$0.06. These promotional rates are not permanent guarantees. Zen currently lists no exact Ling 3.1 route; models.dev marks previous free slots deprecated, while the current OpenRouter full catalog lists only the paid route. Expired/free metadata and MIT weight access do not establish current free inference.[2][6][7]

### Raw benchmarks found

**Primary charts visually inspected**, exact first Ling column:[8][9]

- **TB2.1 81.18%**, **TB4.0 46.03%**, **SWE-bench Pro 68.74%**, **SWE Multilingual 88.50%**, **DeepSWE 59.70%**, **FrontierSWE 75.16%**, **SWE Atlas Codebase QnA 64.51%**, **CyberGym 87.90%**. These are not ordinary SWE Verified or LiveCodeBench.
- Footnote: **DeepSWE, TB4, SWE Atlas and SWE-Pro use LingCode**, an extensively customized Pi harness; its context preservation/orchestration changes matter. The model card says that harness may be open-sourced later, not that the benchmark setup is already freely reproducible.
- **Tau3 banking 47.80%**, **AutomationBench public 52.50%**, **MCP-Atlas 83.00%**, **SkillsBench 68.70%**, **GDPval-AA v2.1 1673 Elo**. Public subset, Elo and strict/partial metric distinctions are retained.
- **HLE 37.44%**, **CritPt 16.29%**, **MultiChallenge 69.78%**. Primary Finance Agent v2 **57.87%**, DRACO **85.49%**, BrowseComp **91.67%**.
- **HealthBench Professional 65.35% is explicitly evaluated in the AQ environment**, where the publisher says this health capability can currently be experienced; not asserted as a generic API score. Supermatbench **51.23 QA / 31.75 agent** is a jointly developed materials-chemistry benchmark.

**Artificial Analysis independent exact record** — UUID `a6043b9b-628a-4a76-a021-2834e0627d05`, `ling-3-1-flash`, **measured Intelligence Index 41.0906**, not estimated:[3]

- **TB4.0 33.3333%**, **GDPval-AA 1616.82 Elo**, **AA-Briefcase 1398.26 Elo** (rubric **46.4646%**), **AutomationBench partial 61.7437%**. The latter is not the publisher's 52.5 public-set metric, nor strict completion.
- **HLE 39.4347%**, **CritPt 18.0%**, **SciCode 54.0509%**, **AA-LCR 83.0%**, **MLCR 12.2222%**, **GDP.pdf 10.0% all-pass**. Medical versus general long-context tasks differ; text extraction/tool use does not add vision. Current AA flags CritPt/SciCode under review.
- Omniscience index **2.2167**; accuracy **29.0833%**, hallucination rate **37.8848%**. No conversion of index to accuracy.
- GPQA, Tau2, banking, TB2.1, LCB and MMMU-Pro are null in the selected independent record. Primary TB2.1 81.18% is therefore **not attributed to AA**.
- AA runtime **212.949 output tokens/s**, **1.8481 s to first chunk**; weighted task cost **$1.0018** on AA's own token/cache/effort recipe, not the current discounted tariff or universal task latency.

**Runtime-specific long context / speed:** SGLang reports native 262K and successful YaRN 1M serving, with a few exact retrieval probes, not a statistical ≥98% retention benchmark. Its **269.2 tokens/s H200 TP8 NEXTN batch-one** versus **239.5 TP8+EP8** are controlled hardware recipes, not all-provider throughput. Reported 99.77%/99.92% GSM8K **stop rates** are not accuracy.[5]

**Missing evidence:** No exact independent SWE Verified/LCB, Claw score, pure perception, or statistically verified full-window retention found. Guessed Vals profile returned 404. Scores below combine labelled primary evidence with real independent task measures, not harness-equivalent assumptions.

### Normalized scores (1–100)

- **Tool use: 72/100.** Independent TB4 33.33% and GDPval 1616.82 plus broad primary tool results support capable agents; custom LingCode, public-subset metrics and incomplete independent banking coverage cap reliability.[3][8][9]
- **Reasoning: 82/100.** Independent HLE 39.43%, CritPt 18% and LCR 83% show strong reasoning for an open model; knowledge accuracy and medical-context weaknesses prevent frontier-level generality.[3]
- **Context window: 95/100.** **Configured local 1M band**, supported by publisher claims and the runtime project's tested exact YaRN recipe. Default weights/routes remain 262K, and sparse retrieval probes do not justify 100 or guaranteed high retention.[1][2][4][5]
- **Multimodal: 15/100.** Verified text-only input/output; generated/parsed artifacts and domain healthcare tools do not establish native perception.[1][2]
- **Coding: 78/100.** Independent SciCode 54.05% and primary SWE-Pro/Multilingual/FrontierSWE show useful engineering; customized harnesses and lower independent TB4 limit portable performance claims.[3][9]
- **Cost efficiency: 98/100.** Actual current $0.075/$0.225 discounted route is excellent paid value, but promotion duration, long agent token use and absent current verified free serving prevent a free-tier score.[2][3][6][7]
- **Overall Score: 68/100.** Half-up mean `(72 + 82 + 95 + 15 + 78) / 5 = 68.4`; cost excluded. Best fit: inexpensive text agents, with a separately configured local deployment for million-token workloads.

### Fresh search trail and sources

- Bing RSS [`"Ling 3.1 Flash" benchmark`](https://www.bing.com/search?format=rss&q=%22Ling+3.1+Flash%22+benchmark): unrelated social-media support pages.
- Google [`"Ling-3.1-Flash" benchmark`](https://www.google.com/search?q=%22Ling-3.1-Flash%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Ling-3.1-Flash" benchmark`](https://duckduckgo.com/html/?q=%22Ling-3.1-Flash%22+benchmark): no results. Direct exact primary card/config, original chart images, runtime cookbook, independent evaluator payload and live catalogs nevertheless supplied substantive evidence. No peer findings consulted.

[1]: https://huggingface.co/inclusionAI/Ling-3.1-flash/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/inclusionai/ling-3.1-flash/endpoints
[3]: https://artificialanalysis.ai/models/ling-3-1-flash
[4]: https://huggingface.co/inclusionAI/Ling-3.1-flash/raw/main/config.json
[5]: https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.1-flash
[6]: https://opencode.ai/zen/v1/models
[7]: https://models.dev/api.json
[8]: https://cdn-uploads.huggingface.co/production/uploads/678143d4ddb1f1ce16daca8e/D6Ns_px2xy0ns6l4kXWVF.png
[9]: https://cdn-uploads.huggingface.co/production/uploads/678143d4ddb1f1ce16daca8e/VNCYlkUqCCY-QN-_dAmy0.png

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact primary chart/footnote inspection, config/runtime context checks, independent selected AA record and current hosted pricing. Normalized scores are interpretations, not vendor/evaluator benchmark percentages.
