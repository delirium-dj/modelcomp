# Laguna XS 2.1 — findings by GPT 6.1 Sol

- Source: Poolside, `poolside/Laguna-XS-2.1`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional general reasoning, vendor-run engineering measurements**.

## Model card

- **Identity:** Distinct from XS.2 and larger S2.1. OpenMDW1.1, **33B/3B-active MoE**,40layers/3:1 sliding-global attention,256experts plus shared; text→text, interleaved/preserved thinking/functions.[1]
- **Date / cutoff:** Public repository created **June20,2026**; precise product date/cutoff not established. Local deployment supports quantized36GB-Mac recipes, not a claim all precision/window combinations fit that memory.[1][4]
- **Context / tariff:** Current exact Poolside gateway normal **262,144/32,768 output**, **$0.06 input/$0.12 output/$0.03 cached per1M** (40% discount); exact`:free` is **status0,$0/$0**,same context/output. Account/free quotas/provider terms apply; no privacy guarantee or authenticated success asserted.[2][3]
- **Runtime:** Reasoning history must be preserved. Card documents a vLLM parser fix for dropped tools and current Metal f16-overflow issue; local support requires the appropriate build rather than assuming every upstream version works.[1]

### Raw benchmarks found

- **Publisher:** **SWE Verified70.9% /Multilingual63.1% /ProPublic47.6% /TB2.0 37.5%**.[1]
- Harbor with custom **pool agent**,≤500steps,thinking,256K,temperature1/top-p1/top-k20. **All four suites use infrastructure-patched images**. SWE metrics are **mean pass@1 over4 attempts/task**, Pro over2, terminal over5; these are not pass@4/best-of5.[1]
- Most tasks2CPUs/8GB; terminal **32CPUs/48GB**. Primary comparison columns use highest publicly referenced results from heterogeneous agents, not a controlled same-harness competition.[1]
- No verified exact broad GPQA/HLE/MMMU/retention results; guessed AA profile404. Reasoning rating is an explicit conservative **engineering-reasoning proxy**, not a fabricated academic result. No native perception claim or sibling score transfer.

### Normalized scores (1–100)

- **Tool use: 50/100.** Primary terminal37.5% and genuine engineering agent setup, capped by custom/patched environments and absent independent replication.[1]
- **Reasoning: 55/100.** Provisional engineering-reasoning proxy; broad academic coverage remains missing.[1]
- **Context window: 76/100.** Verified262K model/serving tier; no perfect retention evidence.[1][2]
- **Multimodal: 15/100.** Exact text-only model.[1]
- **Coding: 66/100.** SWE70.9%/Pro47.6%, with repeated-run means/vendor-only confidence.[1]
- **Cost efficiency: 100/100.** Exact current healthy free hosted route, qualified by account/provider limits.[3]
- **Overall Score: 52/100.** Provisional half-up mean `(50+55+76+15+66)/5=52.4`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Laguna%20XS%202.1%22%20benchmark): unrelated bookseller pages.
- [Google](https://www.google.com/search?q=%22Laguna%20XS%202.1%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Laguna%20XS%202.1%22%20model%20benchmark): human challenge, not bypassed. Primary card/methods and exact current free route inspected; no peer findings.

[1]: https://huggingface.co/poolside/laguna-xs-2.1/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/poolside/laguna-xs-2.1/endpoints
[3]: https://openrouter.ai/api/v1/models/poolside/laguna-xs-2.1:free/endpoints
[4]: https://huggingface.co/api/models/poolside/Laguna-XS-2.1?expand[]=createdAt

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary public-web research with explicit proxy uncertainty, patched harnesses and mean-versus-best-of distinction. Ratings are interpretations.
