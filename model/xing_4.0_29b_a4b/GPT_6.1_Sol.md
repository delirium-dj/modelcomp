# Xing4.0-29B-A4B — findings by GPT 6.1 Sol

- Source: China Telecom TeleAI, `XingChen-AGI/Xing4.0-29B-A4B`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Confidence: **vendor-measured quality; independent replication limited**.

## Model card

- **Identity / license:** Apache2.0 **29B/4B-active MoE**,40layers,64routed/top4 experts, MLA/mHC/MTP. Exact publisher spelling includes `XingChen-AGI` and `A4B`; the similarly named shorter HF URL returns401, not proof that this public repository is inaccessible.[1]
- **Dates / access:** Public original weights created **September16,2026**; current free gateway labels a **20261015** revision, catalog createdOctober16. These are distinct dates, not proven byte-identical snapshots. Cutoff unverified.[2][3]
- **Context / modalities:** **262K native**, advertised512K extension, text→text with thinking/functions. Native Ascend training does not prevent other accelerators: current vLLM/SGLang use publisher **out-of-tree plugins**, not stock registration.[1]
- **Free tariff:** Current exact OpenRouter **`xingchen-agi/xing4.0-29b-a4b:free`**, **Phala status0, $0 input/output**,262,144 total/235,929 output. Subject to free-route account quotas/provider terms; no privacy guarantee or successful authenticated inference asserted. Free license alone is not the basis for cost100.[3]

### Raw benchmarks found

- Primary **SWE Verified75% /Multilingual66%**, SWE-agent,temperature1/top-p0.95/repetition1.05,**210K context**.[1]
- **TB2.1 57.5%**, Terminus2,temperature0.8,**64K output,24-hour timeout,three-run mean**. Not directly comparable to common two-hour runs.[1]
- **Claw76.55%**, official harness,16K output/256K context,three-run mean; **Tau3 64.63%**, average pass^1 over4runs; **DeepResearchBII60.80%**, OpenCode/ExaMCP.[1]
- **AIME26 90%**,131,072 output,mean of5runs; **IFBench69.67% /AA-LCR61%**, latterthree-run mean. Those are **vendor-run** tests, not independently certified AA results.[1]
- Guessed exact AA profile404; no exact independent GPQA/HLE/LCB, broad perception or≥98%512K retention verified. Modified Intent/GGUF/fine-tunes and sibling comparator scores not transferred.

### Normalized scores (1–100)

- **Tool use: 60/100.** Broad primary agent results, capped by24-hour terminal allowance and absent independent replication.[1]
- **Reasoning: 64/100.** AIME90%/LCR61% support reasoning, with substantial generation/repeat budgets and limited broad academic coverage.[1]
- **Context window: 76/100.** Verified262K native/free serving; advertised512K extension is not measured retention.[1][3]
- **Multimodal: 15/100.** Exact text-only model.[1][3]
- **Coding: 71/100.** SWE75% and multilingual66% are useful primary engineering evidence, with vendor-only confidence and harness qualifications.[1]
- **Cost efficiency: 100/100.** Exact healthy current zero-tariff hosted route, with quotas/terms remaining relevant.[3]
- **Overall Score: 57/100.** Half-up mean `(60+64+76+15+71)/5=57.2`; cost excluded, vendor-only confidence explicit.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Xing4.0-29B%22%20benchmark): unrelated news.
- [Google](https://www.google.com/search?q=%22Xing4.0-29B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Xing4.0-29B%22%20model%20benchmark): human challenge, not bypassed. Exact primary card/footnotes and live tariff inspected; no peer findings.

[1]: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B/raw/main/README.md
[2]: https://huggingface.co/api/models?search=Xing4.0&limit=20
[3]: https://openrouter.ai/api/v1/models/xingchen-agi/xing4.0-29b-a4b:free/endpoints

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary-source research; exact identity, generation/time budgets and current free-route evidence preserved. Ratings are interpretations.
