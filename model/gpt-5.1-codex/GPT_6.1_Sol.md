# GPT-5.1 Codex — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.1-codex`, high reasoning; distinct from Max/Mini/general GPT-5.1.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.1 Codex, original November2025 coding model. No Max/Mini scores or newer Codex prompting capabilities inherited.[1][2]
- **Short description:** Proprietary image/text reasoning model optimized for coding harnesses. Native retirement and a currently listed Azure gateway route are separate access facts.[1][3][4]
- **Provider / IDs / lifecycle:** Native **`gpt-5.1-codex`**, **Responses API only**, explicitly unsupported native Chat Completions/Batch. Original docs say underlying snapshot could be updated, not an immutable dated API pin. Primary deprecations confirm **OpenAI API shutdown2026-07-23**; Codex ChatGPT sign-in removed itApril14. Current **`openai/gpt-5.1-codex`** gateway lists **Azure**, backend20251113, not native OpenAI. Provider-translated API access/listing does not prove successful inference or identical unchanged weights; no authenticated call/free Zen ID verified.[1][2][3][4]
- **Release / cutoff:** **2025-11-13** from original Codex changelog and both evaluators; **2024-09-30 knowledge cutoff** in primary model docs.[1][2][5][6]
- **Context / output:** Native **400,000 total/128,000 output**; current Azure listing adds **272,000 maximum prompt**. No1M capacity from compaction or Max's multi-window training.[1][4]
- **Modalities / tools:** **Text/image → text**; streaming, structured output/functions, web search and caching documented. Vals file integration is not native audio/video/non-text generation. High-effort benchmarks do not establish equal default-effort performance. External shell/edit/agent orchestration depends on the harness.[1][5][6]
- **Pricing (2026-10-21):** Native archived reference **$1.25 input/$10 output/$0.125 cache read per1M**, current Azure gateway **$1.25/$10/$0.13**, rounding/provider variation explicit. Native page surviving after shutdown is not proof of current native availability. No verified$0 API tariff.[1][3][4]
- **Architecture:** Proprietary, exact parameter/active count and open weights not verified.[1][5]

### Raw benchmarks found

**Provenance:** AA exact selected **High UUID `04d023f3-025c-4d78-9571-53edda3eaf2a`**, November13/current composite **estimated**. Vals exact unsuffixed Codex, OpenAI/default sampling/**high/128,000 output**. Primary Max announcement's appendix explicitly separates **original Codex high** from **Max xhigh**; only original-column numbers adopted.[5][6][7]

Agent / tool use:

- Primary **Terminal-Bench2.0 52.8% original Codex high**, versus separately labelled Max58.1%. Codex CLI/Harbor and compaction-related launch setup matters; not ordinary standalone function-call accuracy.[7]
- AA **Tau2 83.04% /IFBench70.0%**. No exact TB2.1/TB4, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA verified; nulls not zeros.[5]

Reasoning / knowledge:

- AA **GPQA85.96% /HLE25.72% /AIME2025 95.67% /CritPt5.71%**, **Index23.697 estimated**, not a complete measured current composite.[5]
- **Omniscience accuracy39.90% /hallucination77.20% /reliability−6.5**, different denominators. Strong contest reasoning is not calibrated factual mastery.[5]
- Vals displayed **49.33% aggregate** has only two visible coding benchmarks; not broad intelligence or this report's Overall.[6]

Coding / vision / long context:

- Primary **SWE Verified73.7% on full500 /SWE-Lancer IC SWE66.3%**, original high column, **not Max77.9%/79.9%**. App/compiler/framework setup and attempt budgets should be retained when reproducing, not assumed identical across publishers.[7]
- Independent **LiveCodeBench84.87% AA /85.55% ±1.00 Vals**, **Vibe Code13.12% ±3.16 Vals**. Bounded code generation is much stronger than complete-app execution. No verified exact SWE-Pro/DeepSWE/SciCode found.[5][6]
- AA **MMMU-Pro72.49% /LCR69.33%**. No verified near-perfect400K MRCR/RULER retrieval. Native window does not become millions of simultaneous tokens because another model/harness supports compaction.[1][5][7]
- AA historical median **126.17tokens/s /9.22s first chunk**; Vals workload latency **27min10s** is a different scope and effort-dependent. No complete current AA evaluation-token/task-cost total.[5][6]
- **Max's first-class multi-window training,24h autonomous run and Windows-specific advances are not original Codex measurements**. Current generic Codex prompting guide now describes5.3 and cannot backfill5.1 features.[7]

### Normalized scores (1–100)

- **Tool use: 69/100.** Strong bounded customer-service/instruction behavior and useful historical terminal result, capped by missing modern broad-agent verification and harness dependence.[5][7]
- **Reasoning: 77/100.** Strong high-effort GPQA/HLE/AIME, capped by CritPt, factual calibration and estimated broad index.[5]
- **Context window: 84/100.** Verified400K total/272K hosted prompt, capped by ordinary LCR and no near-perfect full-window retrieval/Max inheritance.[1][4][5]
- **Multimodal: 78/100.** Genuine image reasoning with measured MMMU-Pro, capped by absent native audio/video/non-text output.[1][5]
- **Coding: 78/100.** Useful full500 repairs and strong independent competitive code, capped by13.12% whole-app success and missing modern project-level evaluation.[5][6][7]
- **Cost efficiency: 77/100.** Moderate$1.25/$10 reference/current Azure tariff with caching, capped by billed reasoning, long workload latency and native retirement; not a free service.[1][3][4][6]
- **Overall Score: 77/100.** Half-up mean `(69 + 77 + 84 + 78 + 78) / 5 = 77.2`; cost excluded. Historical high-effort coding assessment with a separately verified current Azure listing, not a current OpenAI-native availability claim.

### Research trail and sources

Fresh Bing RSS exact original Codex official benchmark query returned generic OpenAI links; Google independent query an interstitial; DuckDuckGo context/pricing query mostly surfaced Max, making variant separation important. Primary original model page/changelog/deprecations, explicit original-column appendix in Max launch, exact AA/Vals high and live Azure-only gateway inspected. Primary shutdownJuly23 takes precedence over generic “deprecated” articles or surviving model docs. No peer/general-GPT/Max/Mini numbers used as original Codex results.

[1]: https://developers.openai.com/api/docs/models/gpt-5.1-codex "Primary native Responses-only protocol,400K/128K,cutoff and archived price reference"
[2]: https://developers.openai.com/codex/changelog "November13 original launch versus Max;April14 removal from ChatGPT-sign-in Codex surfaces"
[3]: https://developers.openai.com/api/docs/deprecations "Primary explicit July23,2026 original Codex OpenAI API shutdown"
[4]: https://openrouter.ai/api/v1/models/openai/gpt-5.1-codex/endpoints "Current Azure-only dated backend,400K/272K/128K and actual provider tariff"
[5]: https://artificialanalysis.ai/models/gpt-5-1-codex "Exact selected original High, estimated composite, independent code/reasoning/vision/calibration/runtime"
[6]: https://www.vals.ai/models/openai_gpt-5.1-codex "Exact original high128K, independent LCB versus Vibe and workload latency"
[7]: https://openai.com/index/gpt-5-1-codex-max/ "Original Codex high comparator appendix73.7/66.3/52.8; Max xhigh,compaction and24h claims kept separate"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, exact native lifecycle/specification and original-comparator inspection, high-effort independent evaluator/current Azure gateway comparison. Scores are normalized1–100 interpretations, not official vendor scores or proof of native availability.
- Future sources: add a separate signed file alongside this report using the same headings.
