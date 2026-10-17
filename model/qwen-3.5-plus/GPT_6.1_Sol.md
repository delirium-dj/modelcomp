# Qwen3.5-Plus — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / Qwen3.5-Plus
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus.
- **Short description:** Hosted native vision-language reasoning model with long context and managed tools. The primary open-weight card explicitly calls Plus the hosted version corresponding to Qwen3.5-397B-A17B, adding production features; this establishes lineage but does not turn weight-card benchmarks into independent hosted measurements [1,2].
- **Provider / access / IDs:** Official `qwen3.5-plus`, OpenAI-compatible Chat Completions through `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1`; official page also lists Responses and Anthropic interfaces. Zen ID `opencode/qwen3.5-plus`, Anthropic messages endpoint; OpenRouter separately lists dated `qwen/qwen3.5-plus-02-15` [1,3,6]. No confirmed Zen Free ID.
- **Release / knowledge:** Dated gateway variant indicates February 15, 2026; exact initial general release and knowledge cutoff not independently verified [6].
- **Context window:** Hosted default 1M, page lists 991K max input or 983K thinking input, 65K max output and 81K maximum reasoning. These displayed maxima are not a promise they can all be used simultaneously. Corresponding weights have 262,144 native context with extension to 1,010,000; hosted limits control this report [1,2].
- **Modalities:** Text/image/video input, text output; thinking, function calling, structured outputs, prefix completion and managed search/extraction/code-interpreter tools [1]. Native audio and non-text generation not verified.
- **Pricing (2026-10-17):** Official displayed input tier up to 256K: $0.40 input / $2.40 output per million, explicit cache creation $0.50 and read $0.04 [1]. Zen separately lists $0.20/$1.20, cache read $0.02 and write $0.25 [3]. Longer-input official tariffs not exposed in the fetched view; no extrapolation. Paid model, not a verified free tier.
- **Architecture:** Hosted hybrid linear-attention/sparse-MoE service. Corresponding weights: 397B total / 17B active, Gated DeltaNet plus gated attention, Apache-2.0. That weights licence does not replace hosted service terms [1,2].

### Raw benchmarks found

**Exact hosted-name independent evidence:**

- Vals Vibe Code Bench **v1.1: 15.74%**, **#87/113** displayed rows, OpenHands harness, **$3.80/test**, **50m16s**, evaluated at listed $0.40/$2.40 token prices. Direct leaderboard updated October 16, 2026 [4]. Score measures completed app workflows, not isolated function correctness.
- BenchLM aggregate **48.85/100**, **#104/954**, but only **2/639** benchmark coverage. It cites JobBench **18.5%** and Vibe Code **15.74%** [5]. JobBench is secondary-attributed here; its paper was not read, so it receives lower confidence. BenchLM's sparse composite is not this project's Overall.

**Primary vendor evidence for the explicitly corresponding open-weight model**, used as provisional capability proxies, not hosted-route measurements [2]:

| Dimension | Weight-card benchmark | Vendor result |
| --- | --- | --- |
| Tools | BFCL v4 / Tau2-Bench | 72.9 / 86.7 |
| Tools | Tool Decathlon / MCP-Mark | 38.3 / 46.1 |
| Reasoning | GPQA / HLE | 88.4 / 28.7 |
| Reasoning | HLE-Verified | 37.6; revised dataset, not ordinary HLE |
| Knowledge | MMLU-Pro / IFBench | 87.8 / 76.5 |
| Coding | LiveCodeBench v6 | 83.6 |
| Coding | SWE-bench Verified / Multilingual | 76.4 / 69.3 |
| Terminal | Terminal Bench 2 | 52.5; not labelled version 2.1 |
| Context | AA-LCR / LongBench v2 | 68.7 / 63.2 |
| Vision | MMMU / MMMU-Pro | 85.0 / 79.0 |
| Vision | MathVision / RealWorldQA | 88.6 / 83.9 |

Tau2 uses airline fixes described by the vendor. Search-agent scores employ context folding; cumulative tool material is not proof of reliable native million-token retrieval. No verified exact hosted-model AA Intelligence Index, CritPt, hallucination rate or 98% retrieval at 512K+ found. No successor Qwen3.6/3.7/3.8 results transferred.

### Conflicts and search trail

Three distinct DuckDuckGo searches (`Qwen3.5-Plus official benchmark`, `Qwen3.5-Plus independent evaluation`, `Qwen3.5-Plus pricing context limitations`) returned bot challenges. Direct official product page, corresponding primary weight card, gateway documentation, BenchLM and Vals were readable. Three guessed AA paths (base, dated, reasoning) returned 404; the Qwen blog returned only an app shell, so neither supplies numerical evidence.

The key discrepancy is strong vendor problem-solving/SWE proxies versus weak independent end-to-end app building. These suites test different workloads and harnesses; they are not averaged. Reasoning and tool scores retain a confidence discount because exact hosted coverage is sparse. Official and Zen tariffs are separate provider prices, not a contradiction or a free promotion.

### Normalized scores (1–100)

- **Tool use: 73/100.** Corresponding-model BFCL 72.9 and Tau2 86.7 support useful tools, but Tool Decathlon 38.3 and limited hosted agent evidence cap the score [2,5].
- **Reasoning: 79/100.** Explicitly corresponding weights show GPQA 88.4 and HLE 28.7; lack of an independently verified hosted index prevents frontier credit [2].
- **Context window: 95/100.** Official hosted 1M meets the top capacity tier, but no verified near-perfect large-window retrieval supports 100 [1,2].
- **Multimodal: 84/100.** Verified image/video input plus strong corresponding visual benchmarks support the input-only tier; no audio or non-text output caps breadth [1,2].
- **Coding: 73/100.** Strong vendor SWE/LCB proxies are moderated substantially by exact hosted Vibe Code v1.1 at 15.74%; not a frontier full-app builder in that harness [2,4].
- **Cost efficiency: 95/100.** Zen's $0.20/$1.20 is inexpensive; official $0.40/$2.40 and $3.80 Vibe task cost temper nominal token-price value [1,3,4].
- **Overall Score: 81/100.** Half-up mean of (73 + 79 + 95 + 84 + 73) / 5 = 80.8; best fit is economical long-context multimodal work, with lower confidence for autonomous full-app delivery.

### Sources

1. https://www.qwencloud.com/models/qwen3.5-plus — exact hosted specifications, pricing and APIs.
2. https://huggingface.co/Qwen/Qwen3.5-397B-A17B/raw/main/README.md — explicit Plus correspondence, architecture and vendor benchmark proxies.
3. https://opencode.ai/docs/zen/ — gateway endpoint and separate tariff.
4. https://www.vals.ai/benchmarks/vibe-code — direct independent v1.1 measurements and methodology.
5. https://benchlm.ai/models/qwen3-5-plus — sparse secondary benchmark compilation.
6. https://openrouter.ai/qwen/qwen3.5-plus-02-15 — dated provider route and supported request fields.

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent public internet research; exact hosted evaluations distinguished from explicitly corresponding weights; normalized scores are interpretations, not official vendor scores.
