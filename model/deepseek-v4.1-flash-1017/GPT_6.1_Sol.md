# DeepSeek V4.1 Flash 1017 — findings by GPT 6.1 Sol

- Source: DeepSeek, `deepseek-ai/DeepSeek-V4.1-Flash-1017`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: **October 17 checkpoint**, separated from the September V4.1 Flash benchmark column and backend labels.

## Model card

- **Name / identity:** DeepSeek-V4.1-Flash-1017. The publisher explicitly calls this an updated checkpoint and publishes distinct before/after results versus original V4.1 Flash. It is not established merely by the local scaffolded `opencode/...` ID or its generic 128K/text-only defaults.[1]
- **Provider / access / IDs:** Current native **`deepseek-flash`**, OpenAI/Anthropic-compatible API; primary docs explicitly map it to **1017**. Legacy `deepseek-v4-flash`/vision-exp IDs are accepted but their original models are retired and requests serve 1017. Exact OpenRouter **`deepseek/deepseek-v4.1-flash-1017`** has multiple current `20261017` routes. Bare V4.1 gateway routes retain `20260910` tags, so their results/contracts are not silently equated. No authenticated inference performed.[2][3][4]
- **Release / knowledge:** **2026-10-17** primary release. Exact checkpoint cutoff unverified. Parent technical documentation and old-version benchmark rows are not new 1017 results.[1][5]
- **Architecture / license:** MIT open weights; **552B total**, about **16B decoder-active** by evaluator/serving metadata, with Causal Encoder-Decoder lineage distinguishing input/decoding compute. Exact 1017 config confirms **40 text layers, 384 routed experts/top six, 1,048,576 positions**, plus a vision encoder. Active parameter counts are not total stored weights.[1][6][7]
- **Context / output / modalities:** Native **1M /384K max output**, **text/image input →text output**, optional thinking and tools. Exact gateway output caps vary from 131,072 to 943,718; highest reseller ceiling is not the native contract. Image/frame tools do not establish native audio/video or image synthesis.[2][3][6]
- **Prompt/runtime:** Release supplies Python/Rust protocol-aware prompt encoding rather than a Jinja template. Recommended temperature/top-p **1.0/1.0**; card recommends ≥256K generation budget for its inference recipe, not a universal minimum request. Frameworks must preserve thinking/tool/image serialization correctly.[1]
- **Pricing (2026-10-22):** Native peak **$0.30 input/$1.20 output/$0.006 cache hit per 1M**; off-peak **$0.15/$0.60/$0.003**. Peak periods **01:00–04:00 and 06:00–10:00 UTC on weekdays**, excluding Chinese public holidays; remaining times half-price. Exact 1017 gateway prices vary by quantization, provider and tier.[2][3]
- **Free-scope boundary:** Zen lists a family-level Flash free ID, but its secondary metadata still maps to September's canonical family; exact 1017 backend/entitlement is not verified for that lane. Subscription-plan zero token fields are not free inference. Server-side Search/Fetch fees are temporarily waived for specified native integrations until **October 31, 16:00 UTC**, but LLM tokens remain billable. Normal Search/Fetch list rate is **$0.75/1,000 calls each**.[2][5][8]

### Raw benchmarks found

**Primary 1017 column**, vendor-reported and kept distinct from original September column:[1]

- **HLE 42.6% full /44.0% text-only subset**; do not substitute the subset score for the full exam.
- **TB4.0 42.3% in Claude Code**, **DeepSWE v1.1 77.0% in Mini-SWE-V2**, **ProgramBench 29.1%**, **NL2Repo 68.2%**. Harness differences matter; TB4 is not TB2.1.
- **AutomationBench v1.0.6 60.5%**, **Agents' Last Exam 35.4%**, **Apex Bench v1.1 72.1%**. The last is not automatically the same version/setup as AA's APEX-Agents field.
- **Chartography 83.0% /BabyVision 92.5% /ZeroBench-main 51.0%, all with tools**. They are not pure unaided-perception measurements or native image generation.

**AA independent exact max-effort snapshot**, UUID `f151fd0b-2139-40cf-a3ec-995e8cedc592`, `deepseek-v4-1-flash-1017`; **Intelligence Index 45.0965, measured**:[7]

- **TB4.0 33.8384%**, Terminal-Bench-Science **12.8571%**, **GDPval-AA 1745.77 Elo**; AA-Briefcase **1570.42 Elo**, rubric **47.4747%**.
- **AutomationBench partial 66.6410%** is not primary strict/other-version 60.5% task completion.
- **HLE 43.3272%**, **CritPt 24.0%**, **SciCode 55.9028%**, **AA-LCR 82.6667%**, **MMMU-Pro 80.6358%**, GDP.pdf **17.2% all-pass**. Current AA flags CritPt/SciCode under review.
- Omniscience index **4.7**, accuracy **42.85%**, hallucination rate **66.7542%**, evaluator-defined denominators. No claim that all factual questions are reliably answered.
- GPQA, LCB, Tau2, banking and TB2.1 fields are null; original V4.1 results are not imported to fill them.
- Runtime **205.8111 output tokens/s**, **1.0132 s to first chunk**; weighted index task cost **$0.2620** on AA's own token/cache recipe, not universal end-to-end latency or customer task cost.

**Vals independent exact 1017 profile**, native DeepSeek, **max effort**, temperature/top-p **1/1**, **384,000 output cap**; suites may override settings:[9]

- **TB4.0 31.82% ±2.62**, **Code Migration v1.1 67.52% ±2.76**, **Vibe Code Bench v1.1 87.73% ±2.75**.
- Finance Agent **v2.1 62.93% ±2.03**, EMB v1.1 **69.17% ±2.40**, Legal Research **45.19% ±3.46**, Tax Agent **44.35% ±3.57**.
- Vals Index **61.26% ±1.05**, suite cost **$0.657/test** and **39 min 55 s** latency summary are scoped aggregates, not general accuracy or inference latency.

**Serving/evidence limits:** Exact current 1017 gateway routes carry `20261017`, while the unsuffixed route's checked tags are `20260910`; provider quantization/updates are not byte-audited. No verified exact full-500 SWE Verified, broad independent audio/video, Claw/MCP or ≥98% whole-million-window retention found. One-million capacity, LCR and tool-assisted vision scores are distinct facts.

### Normalized scores (1–100)

- **Tool use: 74/100.** Independent TB4 ~32–34%, professional Elo and business-workflow measures establish strong practical agents, tempered by incomplete universal task completion and version/harness variation.[1][7][9]
- **Reasoning: 84/100.** Independent HLE 43.33%, CritPt 24% and LCR 82.67% support difficult reasoning; missing exact broader academic rows and knowledge hallucination limit frontier generality.[7]
- **Context window: 95/100.** Verified native million-token configuration, without asserting near-perfect retention or native acceptance of every reseller output maximum.[2][6][7]
- **Multimodal: 86/100.** Actual image input, independent MMMU-Pro 80.64% and qualified tool-assisted vision support strong perception; absent native audio/video/output modalities cap breadth.[1][2][7]
- **Coding: 83/100.** Vendor DeepSWE 77%, ProgramBench/NL2Repo and independent migration/Vibe/SciCode support sustained engineering; independent terminal gaps and harness dependence remain material.[1][7][9]
- **Cost efficiency: 98/100.** Very low current native off-peak/cache tariffs and inexpensive exact hosted routes provide excellent paid value; no confirmed exact free entitlement, long task tokens and tier variation prevent 100.[2][3][7]
- **Overall Score: 84/100.** Half-up mean `(74 + 84 + 95 + 86 + 83) / 5 = 84.4`; cost excluded. Fit: cost-efficient long-context multimodal engineering and professional agents, explicitly pinned to 1017 evidence.

### Fresh search trail and sources

- Bing RSS [`"DeepSeek-V4.1-Flash-1017" model`](https://www.bing.com/search?format=rss&q=%22DeepSeek-V4.1-Flash-1017%22+model): primarily generic DeepSeek pages plus genuine official release lead.
- Google [`"DeepSeek-V4.1-Flash-1017" benchmark`](https://www.google.com/search?q=%22DeepSeek-V4.1-Flash-1017%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"DeepSeek-V4.1-Flash-1017" model`](https://duckduckgo.com/html/?q=%22DeepSeek-V4.1-Flash-1017%22+model): exact weight-release and serving leads. Original card/config, native release/pricing and exact independent records checked; no peer results used to derive these scores.

[1]: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/README.md
[2]: https://api-docs.deepseek.com/quick_start/pricing/
[3]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4.1-flash-1017/endpoints
[4]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4.1-flash/endpoints
[5]: https://api-docs.deepseek.com/news/news261017
[6]: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/config.json
[7]: https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017
[8]: https://models.dev/api.json
[9]: https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent exact-checkpoint public-web research; primary revision comparison, native routing/tariffs, independent AA/Vals and dated endpoint tags. Normalized ratings are interpretations, not benchmark percentages or weights-equivalence guarantees.
