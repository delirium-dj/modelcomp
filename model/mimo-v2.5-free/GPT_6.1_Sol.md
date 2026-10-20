# MiMo V2.5 Free — findings by GPT 6.1 Sol

- Source: Xiaomi MiMo-V2.5 via OpenCode's documented `mimo-v2.5-free` provider edition; availability conflict explicitly qualified.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** MiMo V2.5 Free.
- **Short description:** OpenCode's zero-token-price edition of Xiaomi's identified MiMo-V2.5 multimodal model. This report assesses the documented **200K/32K provider configuration**, not the paid upstream million-token configuration, V2.5-Pro, V2.6 or V2.6-Flash Free.[1][2][3]
- **Provider / access:** OpenCode `opencode/mimo-v2.5-free`, native request model `mimo-v2.5-free`, documented **OpenAI-compatible Chat Completions** at `https://opencode.ai/inference/openai/v1/chat/completions`; older Zen spelling is historical. Exact registry TOML independently provides name, Xiaomi-matching omni description, free rates and caps.[1][2]
- **Current availability conflict:** Official docs still list the route and call it limited-time free, but exact models.dev source marks **`status:deprecated`**. Both **`https://opencode.ai/inference/v1/models` and `/zen/v1/models` returned 200 but omitted V2.5 Free**, listing only `mimo-v2.6-flash-free` among MiMo entries. No authenticated inference was performed. Do not claim guaranteed current invocation, a retirement date, or automatic V2.6 routing from these observations.[1][2][6][7]
- **Release / knowledge:** Upstream **2026-04-22**, exact free registry **2026-04-24**. Registry December 2024 knowledge date is catalogue metadata, not independently confirmed training coverage from the publisher card.[2][3]
- **Context window:** Free edition **200,000 shared context / 32,000 output**, with reasoning consuming output budget. Upstream card supports 1M and independent evaluators use up to 128K output; those do not enlarge the free service. Model/config fixes in the upstream HF repository are additionally documented, so deployment revision can affect fidelity.[2][4][5]
- **Modalities / tools:** Exact free registry advertises **text/image/audio/video input → text**, attachments, reasoning and tools, consistent with the upstream's dedicated image/audio encoders. Some secondary clients list only text/image, and current free invocation across modalities was not tested. No speech/image/video output: separate TTS models are not this edition. Raw PDF acceptance is not established by native document-image understanding.[2][4]
- **Pricing (2026-10-20):** Official free entry and exact registry both show **$0 input/$0 output/$0 cache read**. This is the published limited-time tariff, not verified current capacity. OpenCode explicitly exempts MiMo Free from general no-training assurances: collected free-period data **may be used to improve the model**. No ZDR guarantee or unlimited quota is inferred.[1][2]
- **Architecture / licence:** Upstream **310B total/15B active sparse MoE**, hybrid sliding/global attention, **729M vision encoder/261M audio encoder**, three MTP modules, **MIT** weights. Hosted free service terms differ from the model licence; downloading weights does not make local compute free.[3][4]

### Raw benchmarks found

**Evidence boundary:** No independent benchmark run of the **exact OpenCode free lane** was found. The model identity is established through publisher and exact provider records; raw quality evidence below is for **upstream MiMo-V2.5**, used only as provisional capability evidence with the free caps/modalities/status caveats retained. It is not presented as a reproduced 32K-output service result. AA's exact upstream record UUID `22d09131-343b-4adf-8760-533e20a2155f`, slug `mimo-v2-5-0424`, links the V2.5 weights, not Pro. Vals upstream runs Xiaomi, temperature 1/top-p .95, **128,000 output**.[2][4][5][8]

Agent / tool use — upstream proxies:

- Vendor **Claw-Eval Text 62.3 / Multimodal 23.8**, directly read from official images; prose describes the general/text subset. These are distinct subsets, not ClawProBench or a single full-suite score.[3][9][10]
- **TB2.0 65.8% vendor**, **TB2.1 63.67% AA / 60.67% ± 5.21 Vals**. **TB4 0.0% AA is measured**, not null. None is a direct free-lane result.[5][8][9]
- **Tau2 90.64% / Tau3-Banking 8.66% / GDPval 997.19 Elo / Briefcase 753.75 Elo**, rubric pass **13.87%**, **AutomationBench 18.43% partial / IFBench 67.14% AA**. Strong older terminal/customer-service scores coexist with poor harder banking/deliverables.[8]
- Vals **Finance Agent v2 36.73% / Legal Research 9.13% / Tax Agent 7.77% / EMB 55.09%**. No verified exact MCP-Atlas/Toolathlon/SWE Atlas QnA found; no successor figures substituted.[5]

Reasoning / knowledge — upstream proxies:

- **GPQA Diamond 84.95% AA / 81.57% ± 2.05 Vals**, **HLE 27.20% / CritPt 3.71% AA**, **MMLU-Pro 82.93% / ProofBench v1.1 16.0% Vals**. Different output budgets/harnesses, no controlled free-tier equivalence.[5][8]
- **AA Intelligence Index 21.825 measured**, not the source Overall; Vals displayed **52.43% aggregate** is another suite/scale.[5][8]
- **Omniscience accuracy 16.75% / hallucination 31.93% / reliability −9.8333 AA**. Low hallucination relative to some peers still accompanies very low factual coverage. No exact free-tier AIME result found.[8]

Coding / visual / context — upstream proxies:

- Vendor **MiMo Coding Bench 71.8** is internal; **SWE-Bench Pro 56.1%** in the directly inspected publisher chart. Vals **SWE-bench Verified 71.00% ± 2.03 / LiveCodeBench 81.51% ± 1.07 / Vibe Code v1.1 42.17% / Code Migration 14.23%**; AA **SciCode 43.87%**. No free 32K replication or exact independent DeepSWE found.[5][8][9]
- Vendor **MMMU-Pro 77.9% / CharXiv RQ 81.0% / HR-Bench 4K 88.5 / OmniDocBench 87.2**, versus **MMMU-Pro 75.43% AA / 80.00% ± 0.96 Vals**. Benchmark score scales and evaluator variants are distinct.[5][8][10]
- Vendor **Video-MME 87.7% / DailyOmni 83.5% / VideoHolmes 64.0%** provide exact upstream video/omni evidence. These do not independently test the free endpoint's audio/video ingestion or earn non-text-output credit.[10]
- **GDP.pdf 4.0% all-pass AA / LCR 73.0% AA**. No verified exact free-tier MRCR/RULER/full-window retrieval result. Neither upstream 1M capability nor generic 1M model marketing is scored as free-tier context.[2][4][8]
- Upstream AA median **37.29 output tokens/s / 4.08 s first chunk**, **94.85M evaluation output / 76.02M reasoning tokens**, paid assumed **$0.0191 weighted task cost**. These are **not free-lane speed or cost observations**; free tariff comes only from provider documentation.[1][8]

### Normalized scores (1–100)

- **Tool use: 70/100.** Identified upstream TB/Claw support useful bounded agents; poor banking/deliverables, 32K free output and no same-lane reproduction constrain this provisional service assessment.[2][5][8][9]
- **Reasoning: 76/100.** Upstream independently measured GPQA/HLE establish substantial ability, capped by CritPt, very low factual coverage and unreplicated performance under the free output budget.[2][5][8]
- **Context window: 70/100.** Exact free 200K matches the methodology's 200K anchor; upstream million-token capacity is deliberately not substituted. The 32K output cap further limits long reasoning.[2]
- **Multimodal: 91/100.** Exact registry advertises image/audio/video with upstream encoder/visual/omni evidence, capped by absent direct free-lane modality tests, text-only output and poor full-document reliability.[2][4][8][10]
- **Coding: 77/100.** Upstream SWE/LCB/SciCode support useful coding, capped by migration/app weaknesses and free-lane output/fidelity uncertainty.[2][5][8][9]
- **Cost efficiency: 100/100.** Published provider input/output/cache tariff is $0 under the methodology's free-price rule; this score describes the documented edition, **not guaranteed current availability**, and its data-use exception remains explicit.[1][2][6][7]
- **Overall Score: 77/100.** Half-up mean `(70 + 76 + 70 + 91 + 77) / 5 = 76.8`; cost excluded. Provisional assessment of the documented free edition for bounded multimodal/coding work; verify route availability before relying on it, and do not interpret upstream benchmarks as direct free-lane reproductions.

### Research trail and sources

Fresh Bing RSS `"MiMo V2.5 Free" OpenCode model` returned unrelated video links; Google `"mimo-v2.5-free" context benchmark` an interstitial; DuckDuckGo `"MiMo V2.5" Free OpenCode pricing` produced exact free-provider leads. Original registry TOML, public API registry, official OpenCode docs and both live catalog endpoints were compared; primary upstream launch/full card and visually inspected benchmark charts were cross-checked against exact AA/Vals. Generic AA slug returned 404 before the dated exact slug resolved. Secondary Metatext/Coolhand repeat registry data rather than independently establish current invocation; Coolhand's “active” claim conflicts with the original registry/status/catalog evidence and is not adopted. No peer findings consulted.

[1]: https://opencode.ai/docs/zen/ "Primary route/free tariff and explicit MiMo free-period data-use exception"
[2]: https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/mimo-v2.5-free.toml "Exact deprecated provider entry, 200K/32K, free rates and four input modalities"
[3]: https://mimo.xiaomi.com/mimo-v2-5 "Original upstream launch, 310B/15B and exact text/general Claw claim"
[4]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5/raw/main/README.md "Exact upstream architecture, MIT, input modalities and corrected configuration notice"
[5]: https://www.vals.ai/models/xiaomi_mimo-v2.5 "Independent upstream benchmarks and 128K output evaluation settings, not free endpoint"
[6]: https://opencode.ai/inference/v1/models "Live catalogue fetched 200; V2.5 Free absent, V2.6 Flash Free listed"
[7]: https://opencode.ai/zen/v1/models "Second live catalogue fetched 200 with the same MiMo omission"
[8]: https://artificialanalysis.ai/models/mimo-v2-5-0424 "Exact selected upstream V2.5 measured record and paid-serving assumptions"
[9]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5/resolve/main/assets/mimo-v2.5-coding-bench.png "Official coding/agent chart downloaded and visually inspected"
[10]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5/resolve/main/assets/mimo-v2.5-multimodal-bench.png "Official exact upstream visual/video/omni chart downloaded and visually inspected"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact provider identity/status/caps/pricing checks, primary upstream model/charts and independent same-model benchmark proxies with serving limits explicit. Scores are provisional editorial normalized 1–100 interpretations, not provider benchmark reproductions.
- Future sources: add a separate signed file alongside this report using the same headings.
