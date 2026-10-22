# Gemma 4 E2B — findings by GPT 6.1 Sol

- Source: Google DeepMind, `google/gemma-4-E2B-it`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / license:** Apache2.0 dense **2.3B effective/5.1B including per-layer embeddings**,35layers; not a2.3B-total MoE or the larger Gemma siblings.[1]
- **Dates / contract:** AA **April2,2026**; primary training cutoffJanuary2025. **128K**, text/images/audio input, video as frames, text output. Audio≤30seconds/video≤60seconds at1fps. Thinking and functions; primary native context does not inherit256K from medium models.[1][2]
- **Access / price:** Local weights; secondary exact Bedrock `google.gemma-4-e2b` record **$0.04 input/$0.08 output per1M**,131,072/8,192 output. Another provider record is deprecated/smaller-window. No authenticated deployment or exact current free entitlement verified. Paid-cost rating is a qualified catalog reference, not free local compute.[3]

### Raw benchmarks found

- **Primary exact E2B column:** **MMLU-Pro60% /GPQA43.4% /AIME26 37.5% /LCBv6 44% /Codeforces633Elo /τ²24.5%**, latter average over3.[1]
- **MMMU-Pro44.2% /MathVision52.4% /OmniDoc1.5 edit distance0.290↓ /FLEURS0.09↓ /CoVoST33.47**. Metric directions preserved; not all are accuracy percentages.[1]
- **MRCRv2 eight-needle128K average19.1%**, not high full-window recall.[1]
- **AA independent reasoning**, UUID`b07aef0a-b192-46a1-b1c9-40b06d1b9061`: estimated Index **7.7745**, **τ²20.7602% /TB2.1 0.3745% /GDPval−187.7Elo**.[2]
- **GPQA43.3333% /HLE4.7729% /LCR16.3333% /CritPt0% measured /MMMU-Pro44.5665% /IFBench38.0272%**, Omniscience accuracy6.6333%/hallucination32.3634%, evaluator denominators. Low hallucination is not high answer coverage. TB4/SciCode/LCB null, notzero.[2]
- No verified exact SWE/Claw/MCP or≥98% retention; standalone perception is distinct from autonomous completion. No E4B/26B values transferred.

### Normalized scores (1–100)

- **Tool use: 20/100.** Native functions but extremely low independent terminal/professional completion.[2]
- **Reasoning: 35/100.** Modest GPQA and weak HLE/context/difficult reasoning.[1][2]
- **Context window: 60/100.** Verified128K tier, with explicit weak measured retrieval.[1]
- **Multimodal: 70/100.** Real vision/audio/frame-video breadth, moderate perception and short media limits.[1][2]
- **Coding: 35/100.** Primary LCB44%, strongly capped by terminal0.37% and absent repository validation.[1][2]
- **Cost efficiency: 96/100.** Provisional very cheap Bedrock catalog tariff; no free hosted entitlement or free local infrastructure asserted.[3]
- **Overall Score: 44/100.** Half-up mean `(20+35+60+70+35)/5=44`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Gemma%204%20E2B%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Gemma%204%20E2B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Gemma%204%20E2B%22%20model%20benchmark): human challenge, not bypassed. Exact primary table column and independent record inspected; no peer findings.

[1]: https://huggingface.co/google/gemma-4-E2B-it/raw/main/README.md
[2]: https://artificialanalysis.ai/models/gemma-4-e2b
[3]: https://models.dev/api.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator research with explicit paid-catalog uncertainty; native dimensions and metric directions preserved. Ratings are interpretations.
