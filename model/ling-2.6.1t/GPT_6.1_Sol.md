# Ling-2.6-1T — findings by GPT 6.1 Sol

- Source: inclusionAI, `Ling-2.6-1T`; permanent project slug `ling-2.6.1t`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Identity:** Text-only instant/fast-thinking Ling, distinct from the deeper reasoning **Ring-2.6-1T**. MIT open weights; AA **1,026B total/63B active**, hybrid linear/MLA attention.[1][2]
- **Release / cutoff:** AA **April23,2026**; exact cutoff unverified. Technical report was published later. AA deprecation toward Ling3.0 is not deletion of downloadable weights.[2][3]
- **Context / access:** Card supplies262,144 deployment; ordinary text/functions, no native image/audio/video. Both current OpenRouter normal/free IDs have **empty endpoint arrays**. Secondary Requesty record lists262K and **$0.30 input/$2.50 output per1M**, not authenticated success or guaranteed live tariff. Historical free card links and MIT weights are not current free inference.[1][4][5][6]

### Raw benchmarks found

- Original43-page report **Table5 Ling column**: **GPQA76.17 /HLE10.06 /LCBv6 65.58 /AIME26 87.40 /SWE Verified72.20 /TB2.0 40.45 /BFCLv4 70.64 /τ²78.36 /Pinch85.24 /ClawEval51.00**.[3]
- Conditions: GPQA/HLE mean@4, math mean@64, LCBmean@4, Pinchmean@5, **Claw pass@3**. These are not Ring's pass^3 or uniform pass@1; user simulator forτ² is GPT5.2.[3]
- **MRCR80.37 is the aggregate16K–256K row**, not a verified80.4% specifically at16K. The **68.43** in that row belongs to the **GPT5.4 comparator**, not Ling at256K. Local metadata's window-specific interpretation is not supported by this table.[3]
- **AA independent non-reasoning**, UUID`2e46d2fd-eb2b-42b9-9fe4-be50630fe870`: estimated Index **17.0002**, **GPQA75.1515% /HLE8.7118% /LCR41.6667% /CritPt0.2857% /IFBench56.8707% /τ²89.7661%**. Omniscience accuracy21.9%/hallucination92.8297%, evaluator-defined denominators. Terminal/SciCode/MMMU null, not measured zero.[2]
- Publisher's old Index34/16M-token claim is a different index snapshot, not current17.0. No exact independent broad engineering replication, native perception or≥98% full-window retention found.[1][2]

### Normalized scores (1–100)

- **Tool use: 57/100.** Primary terminal/Claw/BFCL support tools, capped by repeated-attempt metrics and limited independent execution replication.[2][3]
- **Reasoning: 59/100.** Independent GPQA75% but HLE8.7%, weak LCR/CritPt and high hallucination constrain broad generality.[2]
- **Context window: 76/100.** Verified262K deployment tier; aggregate MRCR does not establish perfect per-window retention.[1][3]
- **Multimodal: 15/100.** Exact text-only model.[1][2]
- **Coding: 65/100.** Primary SWE72.2%/LCB65.58 support practical coding; repeat averaging and missing independent replication limit confidence.[3]
- **Cost efficiency: 88/100.** Provisional paid-catalog value at$0.30/$2.50; free route inactive and trillion-parameter local operation is not free.[4][5][6]
- **Overall Score: 54/100.** Half-up mean `(57+59+76+15+65)/5=54.4`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Ling-2.6-1T%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Ling-2.6-1T%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Ling-2.6-1T%22%20model%20benchmark): human challenge, not bypassed. Primary report tables/conditions and exact current catalogs inspected; no peer findings.

[1]: https://huggingface.co/inclusionAI/Ling-2.6-1T/raw/main/README.md
[2]: https://artificialanalysis.ai/models/ling-2-6-1t
[3]: https://arxiv.org/pdf/2606.15079
[4]: https://openrouter.ai/api/v1/models/inclusionai/ling-2.6-1t/endpoints
[5]: https://openrouter.ai/api/v1/models/inclusionai/ling-2.6-1t:free/endpoints
[6]: https://models.dev/api.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary-paper/evaluator research, preserving model columns, attempt metrics and aggregate-versus-window distinctions. Ratings are interpretations.
