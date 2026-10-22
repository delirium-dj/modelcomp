# MiniMax M2.7 — findings by GPT 6.1 Sol

- Source: MiniMax, `MiniMax-M2.7` / `MiniMaxAI/MiniMax-M2.7`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** MiniMax M2.7, not M2.5, M3, or M3.1 Flash.
- **Short description:** Open-weight text reasoning model emphasizing sustained coding, tool use and model-assisted scaffold optimization. “Self-evolution” describes development experiments, not autonomous production weight updates or a guarantee of self-improvement on every task.[1]
- **Provider / access / IDs:** Exact weights `MiniMaxAI/MiniMax-M2.7`; native examples/links support MiniMax APIs. Current Zen lists `minimax-m2.7`; OpenRouter `minimax/minimax-m2.7`, backend `20260318`, has current MiniMax/GMICloud/Novita routes. Some other listed routes have nonzero negative status and are not described as healthy. No authenticated inference performed.[1][2][3]
- **Release / knowledge:** AA release **2026-03-18**; Vals March 17. NVIDIA's April 11 date describes its endpoint/weight-distribution metadata, not proof of the initial API release date. Exact primary knowledge cutoff unverified.[4][5][6]
- **Architecture / license:** Approximately **229–230B total / 10B active MoE**; NVIDIA lists 228,703,644,928 parameters. Upstream **NON-COMMERCIAL LICENSE**, not M2.5's license: personal/noncommercial research uses are permitted; commercial use requires prior written authorization, with attribution conditions. Open weights are not an unrestricted MIT grant.[6][7]
- **Context / output:** Exact AA/NVIDIA/major gateway routes **204,800**; some routes **196,608**. MiniMax gateway max output **131,072**; Vals used **80,000**. Route-specific limits are not interchangeable.[2][4][5][6]
- **Modalities / controls:** **Text in/out only**, tool calling, reasoning and structured-output support varying by runtime/provider. Office documents and OpenRoom visual feedback are external workflows, not native vision. Publisher recommends temperature **1**, top-p **0.95**, top-k **40**.[1][2]
- **Pricing (2026-10-22):** Current MiniMax gateway **$0.30 input / $1.20 output / $0.06 cached input per 1M**; GMICloud **$0.21/$0.84/$0.042 cached** with a 30% discount, Novita **$0.27/$1.08/$0.054 cached** with 10%. MiniMax priority/high-speed route is **$0.60/$2.40**, a serving tier rather than separately proven new weights.[2]
- **Free/lifecycle scope:** NVIDIA advertises a research/development trial page, but its current live NIM catalog had **no exact M2.7 entry**, so functioning free serving is not established. Native current price overview omits M2.7 while third-party exact routes and Zen list it; omission/evaluator deprecation toward M3 is not a global shutdown notice. No weights-as-free-inference assumption.[3][4][6][8][9]

### Raw benchmarks found

**Primary published results**, vendor-reported:[1]

- **SWE-Pro 56.22%**, **SWE Multilingual 76.5**, **Multi SWE Bench 52.7**, **VIBE-Pro 55.6%**, **Terminal Bench 2 57.0%**, **NL2Repo 39.8%**. VIBE-Pro is not Vals Vibe Code Bench; SWE-Pro is not Verified.
- **GDPval-AA 1495 Elo** at launch; **Toolathon 46.3%**, **MM Claw 62.7% end-to-end**, versus **97% skill compliance across 40+ skills**. Compliance is not 97% full-task success, and MM Claw is not an independently verified generic ClawEval run.
- **MLE Bench Lite 66.6% medal rate over 22 competitions**; an internal scaffold-improvement experiment reports **30% improvement after 100+ rounds**. Neither is a broad all-task autonomous-research success rate.

**Artificial Analysis independent exact record**, UUID `4bbceacb-cf47-464b-b60f-e1d1fe016d67`, slug `minimax-m2-7`; Intelligence Index **22.7578, measured**:[4]

- **Tau2 84.7953%**, **Tau banking 9.8969%**, **TB2.1 55.4307%**, **TB4 0.0%** (measured zero).
- **GDPval-AA 1005.98 Elo**, AA-Briefcase **717.97 Elo** (rubric pass **14.1414%**), **AutomationBench 4.4353% partial**, APEX-Agents **10.6195%**, AnalystAgent **11.25%**. These current settings/benchmark versions are not substituted for the launch's historical 1495 Elo.
- **GPQA 87.3737%**, **HLE 29.6108%**, **CritPt 0.5714%**, **SciCode 50.1157%**, **LCR 78.3333%**, medical LCR **5.5556%**, GDP.pdf **6.0% all-pass**. Domain performance varies; no image modality is inferred from document work.
- Omniscience index **0.7667**, accuracy **26.8%**, hallucination rate **35.5647%**; IFBench **75.7143%**. Index is not accuracy. Current AA flags CritPt/SciCode under review.
- Runtime **64.1846 output tokens/s**, **1.5373 s to first chunk**. No complete weighted task-cost figure is exposed in this selected payload; none is invented.

**Vals independent profile**, native MiniMax/Anthropic-compatible evaluation, temperature 1, top-p 0.95, **80K output budget**; individual benchmark settings may differ:[5]

- **SWE Verified-linked suite 73.80% ±1.97**, **LCB 79.93% ±1.10**, **TB2.1 48.69% ±3.07**.
- **Vibe Code Bench v1.1 11.93% ±2.86**, **Code Migration 8.69% ±1.79**, **ProgramBench 0.00% ±0.00**. Real zeros and weak cross-task results are retained despite strong contest/repository scores elsewhere.
- **GPQA 86.62% ±1.95**, **MMLU-Pro 80.43% ±0.39**, Finance Agent v2 **27.89% ±0.51**. Historical launch rankings/suite aggregates are not current general accuracy.

**Long-context/coverage limits:** LCR is measured separately from configured ~200K capacity. No exact broad native perception, independent ≥98% whole-window retention, or externally reproduced general “self-evolution” guarantee found. Missing AA LCB/MMMU fields are not zeros; Vals LCB is attributed to Vals.

### Normalized scores (1–100)

- **Tool use: 62/100.** Independent TB2.1 ~49–55% and Tau2 84.8% support useful bounded agents; banking 9.9%, TB4 zero and weak business-workflow results constrain broader reliability.[4][5]
- **Reasoning: 78/100.** Independent GPQA ~87% and HLE ~29.6% support capable reasoning, with low CritPt/medical context and limited factual accuracy capping breadth.[4][5]
- **Context window: 70/100.** Verified ~200K capacity band with LCR 78.33%; no million-token or perfect-retention claim.[2][4]
- **Multimodal: 15/100.** Explicit text-only model/route; external visual tools and generated documents do not add native perception.[1][2][6]
- **Coding: 74/100.** Independent SWE/LCB and primary SWE-Pro establish useful coding, tempered by poor migration/Vibe/ProgramBench and harder terminal transfer.[1][4][5]
- **Cost efficiency: 95/100.** Low verified paid tariffs and caching help value; discounts, authorization/service terms and unverified current free serving prevent a free/unrestricted-inference score.[2][6][7]
- **Overall Score: 60/100.** Half-up mean `(62 + 78 + 70 + 15 + 74) / 5 = 59.8`; cost excluded. Best fit: affordable text coding agents with task-specific calibration.

### Fresh search trail and sources

- Bing RSS [`"MiniMax M2.7" benchmark`](https://www.bing.com/search?format=rss&q=%22MiniMax+M2.7%22+benchmark): empty result feed.
- Google [`"MiniMax-M2.7" benchmark`](https://www.google.com/search?q=%22MiniMax-M2.7%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"MiniMax M2.7" benchmark`](https://duckduckgo.com/html/?q=%22MiniMax+M2.7%22+benchmark): genuine vendor/evaluator leads. Exact card/license, independent AA/Vals, current paid/free catalog scope inspected; no peer findings consulted.

[1]: https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/minimax/minimax-m2.7/endpoints
[3]: https://opencode.ai/zen/v1/models
[4]: https://artificialanalysis.ai/models/minimax-m2-7
[5]: https://www.vals.ai/models/minimax_MiniMax-M2.7
[6]: https://build.nvidia.com/minimaxai/minimax-m2.7
[7]: https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/LICENSE
[8]: https://integrate.api.nvidia.com/v1/models
[9]: https://platform.minimax.io/docs/guides/pricing-paygo

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; original publisher/licensing evidence, exact independent evaluator records and current endpoint prices. Normalized scores are interpretations, not benchmark percentages.
