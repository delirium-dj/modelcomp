# Ling 3.0 Tiny — findings by GPT 6.1 Sol

- Source: inclusionAI, `inclusionAI/Ling-3.0-tiny`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity / release:** MIT **7.9B/1.3B-active MoE**,3:1 KDA/MLA,128routed/top8 plus shared. AA **August6,2026**, cutoff unverified; text→text with default thinking/functions. Not larger Flash.[1][2]
- **Context:** **131K native/262,144 explicit YaRN2×** primary recipe. Primary8.34GiB memory/86–90tokens/s M4Pro figures are FP8 at **8K context**, not full262K memory/throughput guarantees.[1]
- **Current free access:** Primary **Requesty model catalog** exact `novita/inclusionai/ling-3.0-tiny` lists **zero input/output/cache prices**,262K/32,768 output. It declares0-day retention/no training for that route; provider/account terms apply, not a global guarantee or authenticated success. OpenRouter normal/free endpoints empty; Zen free secondary entry deprecated.[3][4][5]

### Raw benchmarks found

- **AA independent**, UUID`7eaf926c-5f39-4e58-ae50-c38b5fc630fc`: measured Index **11.0636**, **TB2.1 27.7154% /TB4 0% measured /banking20.8247% /GDPval558.14Elo /AutomationBench0.2807%partial**.[2]
- **GPQA73.4343% /HLE9.3142% /LCR60.3333% /MLCR10% /CritPt0% measured /SciCode24.1898%**, Omniscience accuracy8.5167%/hallucination30.4609%, evaluator denominators. Low hallucination is not high factual coverage.[2]
- Primary's old **Index25 v4.1.1 /Agentic16** are dated/different composites, not current11.06. Primary terminal protocol: Terminus2 JSON/preserved thinking,**two-hour timeout/three-run mean/32K output/256K configured context**,temperature1/top-p0.95/top-k20.[1]
- AA links INT4 weights, not a guarantee all serving/evaluation uses BF16. No exact verified SWE/LCB, native perception, Claw/MCP or≥98% full-window retention found. Speed/model size do not imply reliable long agents.

### Normalized scores (1–100)

- **Tool use: 37/100.** Terminal27.7% but poor modern/workflow completion.[2]
- **Reasoning: 55/100.** GPQA/HLE/context support useful lighter reasoning, capped by CritPtzero and sparse factual coverage.[2]
- **Context window: 76/100.** Explicit262K recipe/current route, not native default or perfect retention.[1][3]
- **Multimodal: 15/100.** Exact text-only model.[1][3]
- **Coding: 43/100.** Independent SciCode24.19%/terminal27.7%, without repository validation.[2]
- **Cost efficiency: 100/100.** Current exact primary Requesty zero-price route; historical inactive free routes and free weights are not the basis.[3]
- **Overall Score: 45/100.** Half-up mean `(37+55+76+15+43)/5=45.2`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Ling-3.0-Tiny%22%20benchmark): unrelated news.
- [Google](https://www.google.com/search?q=%22Ling-3.0-Tiny%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Ling-3.0-Tiny%22%20model%20benchmark): human challenge, not bypassed. Primary card, independent record and actual current Requesty pricing checked; no peer findings.

[1]: https://huggingface.co/inclusionAI/Ling-3.0-tiny/raw/main/README.md
[2]: https://artificialanalysis.ai/models/ling-3-0-tiny
[3]: https://router.requesty.ai/v1/models
[4]: https://openrouter.ai/api/v1/models/inclusionai/ling-3.0-tiny/endpoints
[5]: https://openrouter.ai/api/v1/models/inclusionai/ling-3.0-tiny:free/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator research, preserving configuration, precision and current/historical free-route distinctions. Ratings are interpretations.
