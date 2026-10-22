# MiniMax M2.5 — findings by GPT 6.1 Sol

- Source: MiniMax, `MiniMaxAI/MiniMax-M2.5`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** MiniMax M2.5, not M2.7 or later multimodal MiniMax models.
- **Short description:** Open-weight text reasoning model for software engineering, search and office agents. Same family/backbone does not imply byte-identical weights to M2.7.[1]
- **Provider / access / IDs:** Exact weights `MiniMaxAI/MiniMax-M2.5`; current Zen `minimax-m2.5`; current OpenRouter `minimax/minimax-m2.5`, backend `20260211`, with multiple status-0 providers including MiniMax. Listing/uptime is not an authenticated inference test.[2][3]
- **Release / knowledge:** AA/Vals release **2026-02-12**; current model-license artifact dated **February 13**; gateway backend tag February 11. These are different release/distribution/version metadata, not silently reconciled. Exact primary knowledge cutoff unverified.[2][4][5][6]
- **Architecture / context:** Approx. **230B total/~10B active** by AA metadata; exact weights config confirms **62 layers, 256 experts/top eight**, native **196,608 positions**. Hosted contracts range from 65K to ~205K, with MiniMax **204,800 /131,072 max output**. Route output caps differ; no universal 1M or 197K output guarantee.[2][4][7]
- **License:** README front matter says **Modified MIT** and AA labels MIT, but the actual current **`LICENSE-MODEL` is titled MINIMAX MODEL LICENSE**, granting worldwide royalty-free model rights with redistribution notices, conditions and a prohibited-use policy. Repository separately has `LICENSE-CODE`; a generic `/LICENSE` link 404s. Actual model terms take precedence over shorthand metadata; this is not plain MIT or M2.7's separate noncommercial-only grant.[1][6]
- **Modalities / controls:** **Text in/out only**, tool calls and reasoning. Generated Office/GUI artifacts and external VLM checks do not imply native vision. Publisher recommends temperature **1**, top-p **0.95**, top-k **40**; correct tool/reasoning parsers are part of deployment.[1][2]
- **Pricing (2026-10-22):** Current MiniMax gateway **$0.30 input/$1.20 output/$0.03 cached input per 1M**; priority/high-speed **$0.60/$2.40/$0.06 cached**. StreamLake lists **$0.27/$1.08/$0.027 cached** with 10% discount. Launch Lightning prices and “standard costs half” prose are historical; the explicit current route prices are used rather than applying the discount again.[1][2]
- **Lifecycle/free scope:** AA marks deprecated toward M2.7, but original weights/current hosted routes remain listed. NVIDIA's product page exists, but its live NIM catalog had no exact M2.5 entry; a current working free API was not established. Downloadable weights are not zero-cost inference.[2][3][4][8][9]

### Raw benchmarks found

**Publisher measurements and methodology**, exact M2.5:[1]

- **SWE Verified 80.2%**, **Multi-SWE-Bench 51.3%**; Verified also **79.7 on Droid /76.1 on OpenCode**. Primary Claude Code SWE evaluations override the default system prompt and average **four runs**; harness-specific results are not interchangeable independent reproductions.
- **BrowseComp 76.3% with context management**; its framework discards all history after token use exceeds **30% of maximum context**. Not a full-history long-context retention measurement.
- Primary appendix: **AIME 2025 86.3%**, **GPQA Diamond 85.2%**, **HLE no tools 19.4%**, **SciCode 44.4%**, **IFBench 70.0%**, **AA-LCR 69.5%**. These are internally measured using public evaluation sets/methods, not independent AA results simply because the benchmarks have AA names.
- Terminal-Bench recipe uses **Claude Code 2.0.64**, modified Dockerfiles for some tasks, **8 CPU cores/16GB**, **7,200-second timeout**, and retries on empty scaffold responses; averages four runs. No uninspected chart number is invented from this methodology.
- Internal **GDPval-MM 59.0% mean win rate** in the publisher's comparisons; not English GDPval-AA Elo or absolute task-completion accuracy. Internal VIBE-Pro is not Vals Vibe Code Bench.
- Vendor efficiency example: **3.52M cumulative tokens/task**, **22.8-minute SWE runtime** versus predecessor **31.3 minutes**, on its serving setup. Cumulative tokens across turns do not expand native context; “37% faster” is not a claim of 37% less wall-clock time. No general $1/hour bill guarantee is inferred.

**AA independent exact record**, UUID `12adec16-19fe-4d92-aeff-5ef3eb7e780a`, `minimax-m2-5`; Intelligence Index **22.7966, estimated**:[4]

- **Tau2 95.3216%**, **GPQA 84.8485%**, **HLE 20.5283%**, **LCR 73.3333%**, **CritPt 1.1429%**, IFBench **71.6327%**. Current AA flags CritPt under review.
- Omniscience index **−38.8667**, accuracy **26.1833%**, hallucination rate **88.1237%**; evaluator-specific denominators, not a universal factual error rate.
- TB2.1/TB4, banking, GDPval, SciCode, LCB and MMMU are **null**, not zero. Vendor SciCode 44.4% is not attributed to AA; no M2.7 terminal record is imported.
- Runtime **61.0568 output tokens/s**, **1.5893 s to first chunk** in AA's recipe; not proof of Lightning's promised rate on every route.

**Vals independent exact profile**, default MiniMax, per-benchmark configuration can differ:[5]

- **SWE Verified-linked suite 74.20% ±1.96**, **LCB 79.21% ±1.12**, **Terminal-Bench 2.0 41.57% ±5.25**.
- **GPQA 82.07% ±2.26**, **MMLU-Pro 80.09% ±0.39**, **Vibe Code Bench v1.1 14.85% ±2.95**.
- Current settings show temperature **1**, top-p **0.95**, max output **196,608**; dated launch update says **Lightning**, top-p **0.9**, same output cap. These configuration/date differences are preserved, not silently harmonized with current 131K native/gateway output.

**Limits:** No exact native perception, verified full-window ≥98% retrieval, independent broad Claw/MCP result, or current guaranteed free hosting found. Vendor/suite/harness differences remain material even when the model is commercially usable under its actual terms.

### Normalized scores (1–100)

- **Tool use: 58/100.** Independent Tau2 95.32% plus Vals TB2.0 41.57% establish useful bounded tools/agents; modified vendor runtime and missing broader independent execution coverage cap reliability.[1][4][5]
- **Reasoning: 75/100.** Independent GPQA ~82–85% and HLE 20.53% support capable reasoning, with low CritPt and poor knowledge reliability limiting breadth.[4][5]
- **Context window: 70/100.** Verified ~197K–205K band with measured LCR; cumulative trajectories and search folding are not extra native capacity.[1][2][7]
- **Multimodal: 15/100.** Actual weights/route are text-only; no image capabilities transferred from external tools or later models.[1][2]
- **Coding: 74/100.** Independent SWE 74.2%/LCB 79.21% and broad primary engineering evidence support useful coding; Vibe 14.85%, terminal weakness and scaffold dependence constrain generality.[1][5]
- **Cost efficiency: 95/100.** Current ~$0.30/$1.20 paid routes and caching are inexpensive, but long cumulative agent work, tier pricing and no verified working free serving limit dollar efficiency.[1][2]
- **Overall Score: 58/100.** Half-up mean `(58 + 75 + 70 + 15 + 74) / 5 = 58.4`; cost excluded. Fit: inexpensive configurable text coding agents, with actual model-license and runtime conditions retained.

### Fresh search trail and sources

- Bing RSS [`"MiniMax M2.5" benchmark`](https://www.bing.com/search?format=rss&q=%22MiniMax+M2.5%22+benchmark): mostly unrelated accounting/TV results, plus generic MiniMax homepage.
- Google [`"MiniMax-M2.5" benchmark`](https://www.google.com/search?q=%22MiniMax-M2.5%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"MiniMax M2.5" benchmark`](https://duckduckgo.com/html/?q=%22MiniMax+M2.5%22+benchmark): human-verification challenge; not bypassed. Direct original card, actual license artifact discovered through public repository index, exact independent records and live catalogs supplied evidence. No peer findings consulted.

[1]: https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/minimax/minimax-m2.5/endpoints
[3]: https://opencode.ai/zen/v1/models
[4]: https://artificialanalysis.ai/models/minimax-m2-5
[5]: https://www.vals.ai/models/minimax_MiniMax-M2.5
[6]: https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/LICENSE-MODEL
[7]: https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/config.json
[8]: https://build.nvidia.com/minimaxai/minimax-m2.5
[9]: https://integrate.api.nvidia.com/v1/models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; original card/protocol, actual weights-license artifact, exact AA/Vals records and current route pricing. Scores are normalized interpretations, not vendor percentages or inherited family results.
