# Qwen3.5-Flash — findings by GPT 6.1 Sol

- Source: Alibaba Cloud, `qwen3.5-flash` / `qwen3.5-flash-2026-02-23`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-Flash, the hosted production profile.
- **Identity:** The publisher's 35B-A3B card explicitly calls Flash its **corresponding hosted version with additional production features, default 1M context and built-in tools**. This is not evidence of different newly released weights. Hosted Flash is nevertheless measured as its own serving profile here; open-weight 35B-A3B benchmark rows are not silently imported.[1]
- **Provider / access / IDs:** Native Model Studio Chat Completions, `qwen3.5-flash`; native docs affirm functional equivalence to **`qwen3.5-flash-2026-02-23`**. OpenRouter **`qwen/qwen3.5-flash-02-23`** has one Alibaba endpoint, backend tag `qwen3.5-flash-20260224`, status 0 and advertised 100% recent uptime. These observations are not authenticated inference or a byte-level checkpoint audit.[2][3]
- **Release / knowledge:** Native snapshot/Vals date **2026-02-23**; gateway backend tag February 24; Epoch/catalog group date February 25. Different milestones are preserved. Exact primary knowledge cutoff not verified.[2][3][4][5]
- **Context window:** Native **1,000,000 total / 65,536 max output**; docs separately list maximum input **991,808**, or **983,616 in thinking mode**, and max chain-of-thought **81,920**. These are mode-specific published ceilings, not values guaranteed simultaneously additive within the total window. Unlike optional YaRN extension on local weights, hosted 1M is documented by default.[1][2]
- **Modalities / controls:** Native **text/image/video input, text output**, tools, structured output, prefix completion and region-dependent web search. No native audio or direct file-input support established. The gateway supports auto/none tool selection, but not required/forced-function selections. Alias docs advertise caching while the dated native snapshot table says caching unsupported; the inspected gateway also reports implicit caching false.[2][3]
- **Architecture / licensing:** Corresponding upstream **35B total / 3B active**, hybrid Gated DeltaNet/attention MoE, Apache-2.0 open weights. The hosted service's API terms, controls, prices and context limits are separate from the weights license.[1]
- **Pricing (2026-10-22):** Exact gateway **$0.065 input / $0.26 output per 1M**. Native Singapore/international **$0.10/$0.40**, alias explicit cache read **$0.01** and creation **$0.125**; dated snapshot does not advertise caching. Native China/global-context tiers: through 128K **$0.029/$0.287**, 128K–256K **$0.115/$1.147**, 256K–1M **$0.172/$1.72**. Region/scope and input size matter. No verified current free inference; Zen catalog has no exact Flash entry.[2][3][6]

### Raw benchmarks found

**Vals independent exact hosted Flash profile** — default provider Alibaba, temperature **1**, max output **65,536**; reasoning effort not specified on the inspected profile, and individual benchmarks may use different settings:[4]

- **GPQA Diamond 82.83% ±1.90**, **MMLU-Pro 84.06% ±0.36**; LegalBench **84.28% ±0.41**. Subject-specific benchmarks are not proof that this general model is finance-first.
- **LiveCodeBench 83.28% ±1.04**, SWE-bench Verified-linked suite **64.40% ±2.14**, **Terminal-Bench 2.0 24.72% ±4.60**. Strong short coding does not imply reliable terminal-agent completion.
- **MMMU-Pro 81.91% ±0.93**; a direct exact-hosted perception measurement, not an inferred open-weight score.
- **SAGE 42.49% ±3.46**, MedCode **33.00% ±1.79**; Vals headline **65.93%** aggregate and **2 min 30 s** latency are suite-specific summaries, not universal accuracy or request latency.
- The historical **March 2** update still reports **SWE Verified 54.9%**, original Vals Index **49.6%**, Finance Agent **46.7%**, and TB2 **24.7%**. Those dated launch results differ from the current table and are not silently replaced or averaged into a single run.

**Epoch independent raw CSV measurements**, exact hosted identity labels; fractions converted to percent, not ECI-transformed performances:[5]

- `qwen3.5-flash`: **GPQA 82.3232%** (August 7 run), **OTIS Mock AIME 2024–2025 84.4444%**.
- **FrontierMath v2 tiers 1–3:** unsuffixed `qwen3.5-flash` **9.4737%**, versus explicit **`qwen3.5-flash_none` 18.2456%**, both August 28. The stronger no-thinking result is not attributed to an unspecified/reasoning run.
- Older original FrontierMath **6.2069%**, original tier 4 **0.0%** (May 12); different benchmark generation from v2. Zero is a measured result, not missing evidence.
- SimpleQA Verified **20.3203%**; Chess Puzzles **14.0%**; Mystery Game Puzzles **20.0% unsuffixed / 16.0% `_none`**. These cap difficult reasoning/knowledge generalization despite strong GPQA.
- External Epoch ALE/Vending rows have Flash-normalized model IDs but display **35B-A3B** names; they are not used as independently measured hosted Flash tool results. Primary architecture correspondence does not erase measured-name/configuration distinctions.

**Coverage / primary-weight boundary:** Primary 35B-A3B tables include vendor tool, coding and visual scores, but their measured label is the open model, not this hosted profile. They are lineage/context evidence only.[1] No exact hosted Tau2/Tau3, Claw, MCP-Atlas, SciCode, independent near-perfect million-token retention, or production latency measurement was verified. Guessed AA Flash profile returned 404 and the public model selector did not expose the exact Flash slug; the distinct Omni-Flash entry is not a substitute. BenchLM helped locate the actual `alibaba_qwen3.5-flash` Vals page, rather than the guessed Qwen-prefixed URL.[7]

### Normalized scores (1–100)

- **Tool use: 43/100.** Actual tool support plus exact Vals TB2.0 24.72% provides grounded but modest agent evidence; missing broader hosted agent evaluations limits confidence.[2][4]
- **Reasoning: 69/100.** Independent GPQA ~82–83% and OTIS 84.44% support capable routine reasoning, while FrontierMath, puzzles and SimpleQA show substantial advanced/generalization gaps.[4][5]
- **Context window: 95/100.** Native hosted 1M default is verified; no high score is claimed for retention, and no ≥98% full-window accuracy is inferred.[1][2]
- **Multimodal: 85/100.** Native images/video plus independent MMMU-Pro 81.91% support strong perception for this tier; text-only output and absent audio/broad document/video accuracy cap coverage.[2][4]
- **Coding: 66/100.** Independent LCB 83.28% and current SWE 64.4% show useful coding, tempered by weaker terminal completion and changing historical SWE results.[4]
- **Cost efficiency: 98/100.** Verified $0.065/$0.26 gateway and low native rates provide excellent paid value; long-input regional premiums and route-specific caching prevent a free-tier score.[2][3]
- **Overall Score: 72/100.** Half-up mean `(43 + 69 + 95 + 85 + 66) / 5 = 71.6`; cost excluded. Best fit: inexpensive million-token visual/text workloads and bounded coding, with task-specific checks for autonomous execution.

### Fresh search trail and sources

- Bing RSS [`"Qwen3.5-Flash" benchmark`](https://www.bing.com/search?format=rss&q=%22Qwen3.5-Flash%22+benchmark): unrelated radio stations.
- Google [`"Qwen3.5-Flash" Alibaba benchmark`](https://www.google.com/search?q=%22Qwen3.5-Flash%22+Alibaba+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Qwen3.5-Flash" benchmark`](https://duckduckgo.com/html/?q=%22Qwen3.5-Flash%22+benchmark): real gateway/hosted-correspondence leads, alongside unrelated community text-only derivatives. Native model/snapshot tariff tables, exact Vals profile, publisher identity bridge, gateway and raw Epoch CSVs inspected; no peer findings consulted.

[1]: https://huggingface.co/Qwen/Qwen3.5-35B-A3B/raw/main/README.md
[2]: https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash
[3]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-flash-02-23/endpoints
[4]: https://www.vals.ai/models/alibaba_qwen3.5-flash
[5]: https://epoch.ai/data/benchmark_data.zip
[6]: https://opencode.ai/zen/v1/models
[7]: https://benchlm.ai/models/qwen3-5-flash

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research, exact hosted-profile evaluations, raw benchmark CSVs, original identity/specification docs, and current route/tariff inspection. Normalized ratings are interpretations; open-weight and hosted measurements remain explicitly distinguished.
