# Qwen3.5-2B — findings by GPT 6.1 Sol

- Source: Alibaba/Qwen, `Qwen/Qwen3.5-2B`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / license:** Apache2.0 **dense2B language model plus vision encoder**; AA2.27B total.24layers,hidden2048,three DeltaNet layers per full-attention layer; not MoE or4B/9B. AA release **March2,2026**, cutoff unverified.[1][2]
- **Context / modalities:** **262,144 native**, text/image/frame-video→text; local scaffold128K/text-only defaults are inaccurate. **Non-thinking is default**; enable thinking explicitly to reproduce reasoning runs.32,768 ordinary/81,920 hard-benchmark output recommendations are not universal hosted caps.[1]
- **Access / cost:** Local weights; HF exact provider mapping lists live Featherless conversational hosting, not a free entitlement or disclosed token tariff.[3] No exact verified$0 hosted tariff recovered. Cost below is an explicit **small-model local-resource proxy**, not free infrastructure or a quotedAPI price.

### Raw benchmarks found

- **Primary exact2B column:** GPQA **51.6**, BFCLv4 **43.6**, TAU2 **48.8**, LCR **25.6**, LongBenchv2 **38.7**, HMMT February/November25 **22.9/19.6**. Airlineτ² uses Opus4.5 domain fixes.[1]
- Vision paired mode results kept as printed: **MMMU64.2/64.2**, **MMMU-Pro50.3/47.7**, **OCRBench84.5/85.4**, OmniDoc1.5 **79.8/80.9**. **VideoMME75.6 with subtitles/69.0 without**, VideoMMMU62.1; unavailable counterpart cells are notzero.[1]
- **AA independent reasoning**, UUID`5d4acc80-7a88-4e84-bfe7-99071b84e6a4`: estimated Index **6.9441**, **τ²69.0058% /TB2.1 2.9963% /GDPval−45.72Elo**.[2]
- AA **GPQA45.5556% /HLE2.5950% /LCR21% /CritPt0% measured /MMMU-Pro43.0058% /IFBench31.4966%**; Omniscience accuracy8.0667%/hallucination74.2386%, evaluator denominators.[2]
- No exact SWE/LCB/SciCode/Claw/MCP or≥98% retention verified; AA coding fields null. Coding rating uses the **observed executable terminal task result as a narrow proxy**, not a fabricated repository score. Primary/AA modes and subtitles are not pooled.

### Normalized scores (1–100)

- **Tool use: 28/100.** Basic function results but measured terminal~3% and weak professional work.[1][2]
- **Reasoning: 37/100.** Modest GPQA and weak HLE/math/context/factual coverage.[1][2]
- **Context window: 76/100.** Actual262K native tier, not effective retention or a larger sibling's extension claim.[1]
- **Multimodal: 70/100.** Real image/frame-video/OCR capability, moderate independent perception and no audio/media generation.[1][2]
- **Coding: 28/100.** Provisional executable-terminal proxy, capped by~3% completion and absent exact broad coding measurements.[2]
- **Cost efficiency: 90/100.** Provisional2B local-resource efficiency; no verified free entitlement or token tariff asserted.[1][3]
- **Overall Score: 48/100.** Half-up mean `(28+37+76+70+28)/5=47.8`; cost excluded; coding proxy uncertainty explicit.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Qwen3.5-2B%22%20benchmark): unrelated children's songs.
- [Google](https://www.google.com/search?q=%22Qwen3.5-2B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Qwen3.5-2B%22%20model%20benchmark): human challenge, not bypassed. Exact primary table column/defaults and independent record inspected; no peer findings or sibling scores.

[1]: https://huggingface.co/Qwen/Qwen3.5-2B/raw/main/README.md
[2]: https://artificialanalysis.ai/models/qwen3-5-2b
[3]: https://huggingface.co/api/models/Qwen/Qwen3.5-2B?expand[]=inferenceProviderMapping

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator research with explicit terminal-coding and local-cost proxies. Ratings are interpretations.
