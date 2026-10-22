# Claude 3.5 Haiku — findings by GPT 6.1 Sol

- Source: Anthropic, `claude-3-5-haiku-20241022`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: **historical dated model**, distinguishing launch text-only status, later hosted vision specifications and platform-specific retirement.

## Model card

- **Name:** Claude 3.5 Haiku, tracked locally as `claude-haiku-3.5`. Small/fast proprietary Claude, distinct from Claude 3 Haiku and Haiku 4.5/5.5. Parameters and internal architecture undisclosed.[1][2]
- **Provider / access / IDs:** Native historical Messages API `claude-3-5-haiku-20241022`; Google Cloud `claude-3-5-haiku@20241022` remains in Anthropic's integration table. Publisher states native model **retired February 19, 2026**; replacement `claude-haiku-4-5-20251001`. OpenRouter descriptive `anthropic/claude-3.5-haiku` object has **no endpoints**, and exact Haiku 3.5 is absent from the checked Zen catalog.[2][3][4][5]
- **Google lifecycle conflict resolved:** Current Anthropic pricing still labels this model **“retired, except on Google Cloud”**, but Google's own platform-specific deprecation page says **deprecated January 5 /shutdown July 5, 2026**. That dated host lifecycle takes precedence for Google access. Neither the stale exception nor a surviving integration ID proves current service. No authenticated inference performed.[3][6][7]
- **Release / knowledge:** Announced **2024-10-22**, matching dated ID; original announcement says availability would follow, so the announcement/checkpoint date is not proof of same-day API access. Google specifies **July 2024** cutoff; exact day unresolved (AA uses July 1, secondary metadata July 31).[1][7][8]
- **Context window:** Historical **200K**; Vals profile/secondary metadata specify **8,192 output**, Google host page **8,000 output**. Preserve host-specific cap rather than claim a universal 64K gateway profile. No million-token contract or near-perfect whole-window retention verified.[7][9][11]
- **Modalities / capabilities:** Original announcement explicitly **text-only at launch, image input to follow**. Google's later preserved model specification explicitly lists **text/code/images →text**, with image/document/PDF support references; AA also reports exact MMMU-Pro. Thus historical later hosted visual input has evidence, without retroactively attributing it to launch. Native audio/video/media generation unverified. Functions, caching and batching documented; **extended thinking unsupported** on this model.[1][7][8]
- **Pricing (checked 2026-10-22):** Preserved primary standard tariff **$0.80 input/$4 output/$0.08 cached read per 1M**; cache writes **$1 five-minute/$1.60 one-hour**, batch **$0.40/$2**. These remain published prices for retired service, not proof that a new account can buy inference. Original article's December 3, 2024 revision confirms $0.80/$4. No verified exact free Zen ID or zero tariff found; generic trial credits do not qualify.[1][6]

### Raw benchmarks found

**Primary exact Haiku result:**[1]

- **SWE-bench Verified 40.6%**, publisher-reported. The article's Sonnet 49%, τ-bench and OSWorld figures belong to **Sonnet**, not Haiku, and are not transferred.
- The October model-card addendum PDF linked by the article returned **403** to the direct parser download. Its inaccessible tables are not claimed as audited or used to validate local metadata's GPQA/τ-bench/internal-agent percentages.

**AA independent exact non-reasoning record**, UUID `033e4aa9-a556-4224-87b0-341ed1070257`, `claude-3-5-haiku`:[8]

- Intelligence Index **8.9384, estimated**; deprecated toward Haiku 4.5.
- **TB2.1 10.1124%**, τ² field **24.5614%**, **GDPval-AA 210.83 Elo**. Different tool/task metrics; no averaging them into a common completion rate.
- **GPQA Diamond 40.8081%**, **HLE 3.63%**, **AA-LCR 27.3333%**, **CritPt 0% measured**, **IFBench 42.7891%**.
- **LCB 31.4286%**, **MMMU-Pro 45.6069%**. This independent visual result supplements later Google input specifications; it does not prove the launch model already accepted images.
- Omniscience index **−22.5167**, accuracy **13.2%**, hallucination **41.1482%** under evaluator-defined denominators. Lower hallucination relative to some models is not high answer coverage.
- AA current SciCode, TB4, banking and prices null; null is not measured zero or evidence of free inference. No current runtime measurements in extracted summary.

**Vals independent dated-ID profile**, Anthropic, temperature **1**, max output **8,192**:[9]

- **GPQA Diamond 37.88% ±2.44**, **LCB 41.92% ±1.13**, **MMLU-Pro 64.12% ±0.46**, **LegalBench 70.33% ±0.64**, **TaxEval v2 57.36% ±0.98**.
- These are distinct suites/harnesses from AA's LCB/GPQA; the profile's 54.32% display is not adopted as a universal accuracy score. Domain classification results are not tool-driven professional task completion.

**Epoch raw independent runs** for exact `claude-3-5-haiku-20241022`, February–March 2025:[10]

- **GPQA Diamond 38.1313%**, SE **2.6352 percentage points**; **MATH level 5 46.3557%**, SE **1.1612 pp**.
- **OTIS Mock AIME 2024–2025 4.3056%**, SE **1.6238 pp**; **original FrontierMath 0.3448%**, SE **0.3448 pp**, not FrontierMath v2 or a modern task split.
- Read `mean_score` from the original benchmark CSVs. Transformed ECI inputs, including altered GPQA/FrontierMath numbers, are not raw accuracy.

**Epoch external forwarding**, not additional Epoch reruns:[10]

- **Aider Polyglot 28.0% correct**, **91.1% correct edit format**, diff mode, December 21, 2024. Syntax/format compliance is not task correctness.
- **WeirdML 30.73%**, cost/run about **$0.05748**; **BALROG average progress 19.3%**, not complete-game success.
- Historical AA-sourced **SciCode 27.4306%** survives in `scicode_external.csv` although current exact AA field is null. Labelled historical source forwarding, not a newly observed AA value or independent replication.

**Coverage limits:** No verified exact Claw/MCP, modern TB4, native audio/video or ≥98% complex long-context retrieval found. Google/AA support later historical vision, but exact native feature-rollout date and cross-host weights equivalence were not byte-audited. Scores describe dated model evidence, not current successor quality.

### Normalized scores (1–100)

- **Tool use: 35/100.** TB2.1 10.11%, τ² 24.56%, low professional Elo and limited game progress establish basic tools but weak long-horizon execution.[8][10]
- **Reasoning: 39/100.** Independent GPQA ~38–41%, HLE 3.63%, mock AIME 4.31% and weak LCR show limited difficult reasoning despite useful routine classification.[8][9][10]
- **Context window: 70/100.** Verified historical 200K tier; small output cap and LCR 27.33% limit practical use, without reclassifying capacity as proven retention.[7][8][9]
- **Multimodal: 63/100.** Later hosted image/document input plus MMMU-Pro 45.61% support basic visual understanding, qualified by text-only launch and absent audio/video/media output.[1][7][8]
- **Coding: 46/100.** Vendor SWE Verified 40.6%, independent LCB ~31–42% and Aider 28% support smaller edits; difficult repository and agent execution remain weak.[1][8][9][10]
- **Cost efficiency: 80/100.** Provisional historical paid value at $0.80/$4 with cache/batch discounts; low task success, small output and retired checked platforms constrain current utility. No free entitlement inferred.[2][6][7]
- **Overall Score: 51/100.** Half-up quality mean `(35 + 39 + 70 + 63 + 46) / 5 = 50.6`; cost excluded. Historical lightweight classification/coding profile with a documented later vision contract, not current model availability.

### Fresh search trail and sources

- Bing RSS [`"Claude 3.5 Haiku" benchmark`](https://www.bing.com/search?format=rss&q=%22Claude+3.5+Haiku%22+benchmark): generic Claude/login pages, not exact measurements.
- Google [`"Claude 3.5 Haiku" benchmark`](https://www.google.com/search?q=%22Claude+3.5+Haiku%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"Claude 3.5 Haiku" benchmark`](https://duckduckgo.com/html/?q=%22Claude+3.5+Haiku%22+benchmark): human-verification challenge; not bypassed.
- Direct original release, exact independent AA/Vals, raw Epoch tables and publisher/Google lifecycle sources checked despite search limits. No peer findings used; no claim to have audited the blocked PDF.

[1]: https://www.anthropic.com/news/3-5-models-and-computer-use
[2]: https://platform.claude.com/docs/en/about-claude/model-deprecations
[3]: https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai
[4]: https://openrouter.ai/api/v1/models/anthropic/claude-3.5-haiku/endpoints
[5]: https://opencode.ai/zen/v1/models
[6]: https://platform.claude.com/docs/en/about-claude/pricing
[7]: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deprecations/partner-models?hl=en
[8]: https://artificialanalysis.ai/models/claude-3-5-haiku
[9]: https://www.vals.ai/models/anthropic_claude-3-5-haiku-20241022
[10]: https://epoch.ai/data/benchmark_data.zip
[11]: https://models.dev/api.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary/evaluator public-web research; historical vision, platform retirement and raw-versus-transformed data kept separate. Normalized ratings are interpretations, not published benchmark percentages.
