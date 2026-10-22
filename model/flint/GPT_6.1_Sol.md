# Recursive Flint — findings by GPT 6.1 Sol

- Source: Recursive, `RecursiveSI/flint` /`recursive/flint-v1.0:free`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Confidence: **vendor-measured coding, provisional engineering-reasoning proxy**.

## Model card

- **Identity / dates:** Actual40B-class Flint now has a primary release **October21,2026**, Apache2.0 BF16 weights, not an unidentified hypothetical scaffold.[1][2]
- **Architecture:** **39.8B total/~2.5B active including output head** (~2.2B body),49layers,256routed/top6 plus shared,sliding/full attention. June2026 stated cutoff. Native text→text, reasoning and multi-turn tools.[1]
- **Context:** Card/configured **262,144 combined**; blog advertises≤512K but recommends≤256K for quality. Recommended config/verified serving, not maximum marketing claim, anchors rating.[1][2]
- **Free access:** Current exact **OpenRouter Recursive BF16 status0**, **$0/$0**,262K/235,929 output. Zen also lists `flint-40b-free` with different output limits. Quotas/provider data terms apply; Zen free-period data may improve the model and is retained30days per guide. No authenticated inference performed.[3][4]
- **Local/runtime:** Quantized local engine claims are separate from BF16 benchmark/hosting. Card's SGLang kit supports oneB300/H200 replica; speed on M4Pro/RTXSpark is workload/quantization-specific, not all hardware.[1][2]

### Raw benchmarks found

- Primary **TB2.1 54.9% /SWE Pro v2 89.7% /SWE Verified74.2%**, BF16. **SWE Pro v2 is not original SWE Pro**.[1]
- Sampling1/0.95/top-k20; agentic **mean pass@1 over≥5 attempts**,≤**five-hour timeouts**. Terminal uses Terminus2 XML/internet, retrieval-derived solutions counted unsuccessful; SWE mini-swe-agent/no internet. Not best-of5 or uniform standard timeout.[1][2]
- Publisher optimized engines report>125tokens/s M4Pro and>150RTXSpark at short contexts;128K-session speed comparison excludes prefill. NVFP4 within0.7aggregate points does not prove identical accuracy on every task.[2]
- Exact AA guessed profiles404; no verified broad GPQA/HLE/perception/retention found. General reasoning below is a conservative engineering-task proxy, not a fabricated academic benchmark. Advertised512K is not≥98% retention.

### Normalized scores (1–100)

- **Tool use: 60/100.** Primary terminal54.9% with genuine multi-turn tooling; vendor-only, five-hour/repeated-run settings limit confidence.[1][2]
- **Reasoning: 60/100.** Provisional engineering-reasoning proxy from repository/terminal problem solving; broad academic generality missing.[1]
- **Context window: 76/100.** Verified262K configured/hosted tier, without treating512K marketing as proven retention.[1][3]
- **Multimodal: 15/100.** Exact native text-only model.[1]
- **Coding: 73/100.** Primary SWE74.2%/Pro-v289.7%, version and vendor-only caveats preserved.[1]
- **Cost efficiency: 100/100.** Healthy exact zero-tariff hosted route; quota/data practices remain provider-specific.[3][4]
- **Overall Score: 57/100.** Provisional half-up mean `(60+60+76+15+73)/5=56.8`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Flint%2040B%22%20benchmark): mostly unrelated Flint entities.
- [Google](https://www.google.com/search?q=%22Flint%2040B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Flint%2040B%22%20model%20benchmark): human challenge, not bypassed. Public HF search recovered exact publisher; original card/blog and current route inspected. No peer findings.

[1]: https://huggingface.co/RecursiveSI/flint/raw/main/README.md
[2]: https://www.recursive.com/updates/introducing-recursive-flint
[3]: https://openrouter.ai/api/v1/models/recursive/flint-v1.0:free/endpoints
[4]: https://opencode.ai/docs/zen/

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary research; actual release resolved, benchmark versions/budgets and explicit proxy uncertainty preserved. Ratings are interpretations.
