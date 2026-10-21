# GPT-5.2-Codex — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.2-codex`,exact Codex variant,high/xhigh recipes separated.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Identity / release:** GPT-5.2-Codex,not general5.2,5.1-Codex-Max or5.3-Codex. Primary Codex launch **2025-12-18**;AA/Vals metadata **December11** is retained as a discrepancy,not adopted as the primary release. Current Azure gateway backend tag **2026-01-14** is another serving milestone.[1][2][4][5][6]
- **Access / lifecycle:** Native **`gpt-5.2-codex`**,Responses API historically;official deprecation log explicitly says native API shut down **2026-07-23**,despite the specification page remaining accessible. Current exact gateway **`openai/gpt-5.2-codex`** lists **Azure status0**,400K/128K;partner-listed route is not proof native shutdown reversed. No authenticated inference or free Zen route verified.[1][3][6]
- **Context / knowledge:** **400,000 total/272,000 maximum input/128,000 output**,cutoff **2025-08-31**. Context compaction supports longer workflows by managing history;it is not an unlimited single-request window or perfect retention.[1][2]
- **Modalities / modes / tools:** **Text,image→text**;no native audio/video/media generation. Efforts **low/medium/high/xhigh**;no none setting inherited from Nano or successor models. Native specification lists functions,web search,hosted shell,skills,structured output and caching through Responses;Chat Completions/Batch unsupported natively. Gateway compatibility may expose different surfaces.[1][6]
- **Architecture / licence:** Proprietary closed weights;total/active parameter counts not verified.[4]
- **Pricing (2026-10-21):** Current exact Azure gateway **$1.75 input/$14 output/$0.175 cache read per1M**,matching historical native specification;web-search fee listed separately. Not a free tariff or renewed native availability guarantee. Long xhigh startup/token use matters alongside per-token rates.[1][4][6]

### Raw benchmarks found

**Attribution:** AA exact **Xhigh UUID `019e86f6-e66b-42d8-8a50-235a06b53003`**,**Index28.502 estimated**,not a fully measured current composite. Vals exact Codex profile uses **high/max128,000**,not xhigh. Primary launch supports compaction/Windows/vision improvements qualitatively;no missing chart values invented after a direct HTML follow-up returned403.[2][4][5]

- **Tools / instructions:** Independent AA **Tau2 92.11% /IFBench77.62%**. Exact banking,terminal2.1/4,GDPval and automation fields null. No verified exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas success found;strong tool compatibility does not establish broad office autonomy.[4]
- **Engineering:** Vals **SWE-bench72.40% ±2.00 /LCB87.99% ±0.94 /Vibe Code Bench v1.1 37.91% ±4.58**,high effort. No exact independent DeepSWE/SciCode/full-program result found. Vibe app creation is a weaker outcome than contest generation;both retained.[5]
- **Reasoning:** AA xhigh **GPQA89.90% /HLE35.73% /CritPt8.67% /LCR82.33%**. **Omniscience accuracy41.07% /hallucination73.36% /reliability−2.1667**;hallucination lower better with its own denominator. No selected AIME value found.[4]
- **Vision / context:** AA **MMMU-Pro76.30%** supports genuine image understanding;no native audio/video score claimed. No exact full400K MRCR/near-perfect retrieval measurement found;LCR and compaction do not prove perfect preservation across requests.[1][2][4]
- **Specialist external study:** Irregular's publisher-carried evaluation uses **xhigh/auto-compaction/up to1,000turns**,multiple runs on medium/hard challenges: **79% Network Attack Simulation /80% Vulnerability Research and Exploitation /49% Evasion**;reported cost/success **$32.80/$5.90/$17.90**,respectively. No CyScenarioBench challenge solved. This is specialist bounded evidence,not general software task accuracy or an unrestricted deployment prescription.[7]
- Primary system card distinguishes **CVE-Bench34/40 subset,pass@1 over3rollouts**,professional CTF **pass@12 from16rollouts**,and Cyber Range **72.7% scenario coverage with at least one pass in16trials**. These metrics are not averaged into a generic success rate.[7]
- **Efficiency:** AA xhigh median **107.76tokens/s/76.38s first chunk**;Vals high aggregate latency **12min44s**,different tasks/provider mix. No verified normalized expected successful-project cost;historical/reference rates and current Azure route are separate.[4][5][6]

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong Tau2/instructions and useful coding-agent evidence,capped by missing exact modern terminal/banking/professional validation and specialist workflow dependence.[2][4][5][7]
- **Reasoning: 80/100.** Strong independent xhigh GPQA/HLE/LCR,capped by CritPt8.67%,calibration,effort overhead and estimated composite coverage.[4]
- **Context window: 84/100.** Verified400K tier,272K input cap and compaction distinction;no near-perfect retention bonus.[1][2][4]
- **Multimodal: 78/100.** Genuine strong image/screenshot understanding,capped by text-only output and no native audio/video.[1][2][4]
- **Coding: 79/100.** Strong independent LCB/repair with bounded app capability,capped by Vibe37.91%,missing exact newer-terminal/full-program validation and high/xhigh differences.[4][5]
- **Cost efficiency: 75/100.** Useful cached input pricing,capped by$14 output,long reasoning/startup and native retirement;paid Azure listing is not free access.[1][3][4][6]
- **Overall Score: 78/100.** Half-up mean `(70 + 80 + 84 + 78 + 79) / 5 = 78.2`;cost excluded. Best fit:bounded image-aware coding/refactoring through an explicitly confirmed exact-model provider,with effort/latency control.

### Research trail and sources

Fresh Bing official-benchmark query returned generic OpenAI links;Google independent query an interstitial;DuckDuckGo exact model/context/pricing query a202 challenge. Inspected primary exact model specification,launch,affirmative native shutdown log,full structured system-card text,exact AA/Vals effort-specific profiles and actual Azure route. A follow-up direct launch-HTML request returned403,so unseen chart values not quoted. No peer,base5.2 or successor benchmark substitution.

[1]: https://developers.openai.com/api/docs/models/gpt-5.2-codex "Exact Responses-only specification,400K/272K/128K,cutoff,modes,modalities and historical rates"
[2]: https://openai.com/index/introducing-gpt-5-2-codex/ "December18 primary release,compaction/Windows/vision claims;unseen chart numbers not invented"
[3]: https://developers.openai.com/api/docs/deprecations "AffirmativeJuly23,2026 native5.2-Codex shutdown"
[4]: https://artificialanalysis.ai/models/gpt-5-2-codex "Exact Xhigh UUID,estimated composite,independent task/calibration/context/vision and speed"
[5]: https://www.vals.ai/models/openai_gpt-5.2-codex "Exact independent high-effort engineering results,uncertainties and settings"
[6]: https://openrouter.ai/api/v1/models/openai/gpt-5.2-codex/endpoints "Current exact January14 Azure backend,paid rates,limits and reported healthy status"
[7]: https://deploymentsafety.openai.com/gpt-5-2-codex "Exact system-card specialist evaluation scopes,attempt budgets,external costs/success and limitations"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary specification/lifecycle and system-card methodology,two effort-separated independent evaluators and current partner-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
