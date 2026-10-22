# Qwen3.5-0.8B — findings by GPT 6.1 Sol

- Source: Alibaba/Qwen, `Qwen/Qwen3.5-0.8B`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / license:** Apache2.0 dense0.8B language model plus vision encoder; AA **0.873B total**,24layers/hidden1024,DeltaNet/full-attention hybrid. AA release **March2,2026**, exact cutoff unverified.[1][2]
- **Contract:** **262,144 native**, text/image/frame-video→text. Local scaffold128K/text-only defaults are not actual specifications. **Non-thinking default**; primary warns enabled thinking can enter generation loops. No audio/media output or larger sibling's long-context extension inherited.[1]
- **Access / cost:** Local weights; no exact current hosted tariff/free entitlement verified in this pass. Cost rating is explicitly a **sub-billion local-resource proxy**, not$0 compute, a measured energy bill or a quotedAPI rate.

### Raw benchmarks found

- Primary exact0.8B column: **GPQA11.9 /LCR4.7 /LongBenchv2 26.1 /BFCLv4 25.3 /τ²11.6**; missing HMMT cells are notzero. Primary Airlineτ² uses published domain fixes.[1]
- Separate vision mode results retained as printed: **MMMU49.0/47.4 /MMMU-Pro31.2/31.4 /OCRBench74.5/79.1 /OmniDoc1.5 61.0/70.6**. VideoMME **63.8 with subtitles/57.7 without**, VideoMMMU44.3. Modes/subtitles not averaged into one universal accuracy.[1]
- **AA independent reasoning**, UUID`a6ea7ec0-0aca-4442-98fb-4296c6d18b31`: estimated Index **6.1285**, **τ²47.6608% /TB2.1 0% measured /GDPval−388.11Elo**.[2]
- **GPQA11.1111% /HLE1.0658% /LCR9% /CritPt0% measured /MMMU-Pro25.8382% /IFBench21.4966%**, Omniscience accuracy4.2333%/hallucination61.3470%, evaluator denominators.[2]
- Exact SWE/LCB/SciCode fields absent/null; **coding below uses only observed executable terminal failure as a narrow proxy**, not an invented repository benchmark or proof no simple code can be generated. No≥98% retrieval or exact Claw/MCP verification.

### Normalized scores (1–100)

- **Tool use: 18/100.** Basic function syntax, but terminalzero and poor broader execution.[1][2]
- **Reasoning: 20/100.** Weak exact academic/context outcomes; primary also flags thinking-loop susceptibility.[1][2]
- **Context window: 76/100.** Real262K capacity, explicitly distinct from very weak effective recall.[1]
- **Multimodal: 60/100.** Actual vision/OCR/frame-video support, with low difficult perception and no audio/media generation.[1][2]
- **Coding: 15/100.** Provisional narrow terminal-execution proxy, not a claimed measured coding percentage or universal inability.[2]
- **Cost efficiency: 93/100.** Low-confidence sub-billion local-resource proxy; no free hosted entitlement or measured currency cost asserted.[1][2]
- **Overall Score: 38/100.** Half-up mean `(18+20+76+60+15)/5=37.8`; cost excluded; coding proxy uncertainty explicit.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Qwen3.5-0.8B%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Qwen3.5-0.8B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Qwen3.5-0.8B%22%20model%20benchmark): human challenge, not bypassed. Exact primary table column/defaults and independent record inspected; no peer findings or sibling score transfers.

[1]: https://huggingface.co/Qwen/Qwen3.5-0.8B/raw/main/README.md
[2]: https://artificialanalysis.ai/models/qwen3-5-0-8b

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator public-web research with explicit narrow coding/local-cost proxies. Ratings are interpretations.
