# Gemini 3.5 Flash-Lite — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.5-flash-lite`, high-thinking measurements unless labelled otherwise.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 3.5 Flash-Lite.
- **Short description:** Google's inexpensive, high-throughput multimodal model for document extraction, simple coding and lightweight agents. It is distinct from Gemini 3.5 Flash, Flash Cyber, Flash-Lite Image, TTS and Live models; broad media input does not make it a speech-generation or realtime model.[1][2][3]
- **Provider / access:** Native Gemini **GenerateContent API**, Google AI Studio and Gemini Enterprise Agent Platform; Cloud also documents Chat Completions compatibility and preview Interactions API. Exact gateway `google/gemini-3.5-flash-lite`, backend `google/gemini-3.5-flash-lite-20260721`. No separately verified free Zen route; Google publishes its own exact-model free API tier.[2][4][7]
- **Release / knowledge:** **2026-07-21 GA**. Model card says **March 2026 cutoff**, with some domains still limited to **January 2025** knowledge. Cloud retirement is **July 21, 2027 or later**, a minimum platform-specific date, not a universal scheduled shutdown.[1][2]
- **Context window:** **1,048,576 total / 65,536 maximum output**, confirmed by Cloud and gateway; publisher card rounds to 1M/64K. Secondary 33K output listings are not adopted. Media and text occupy the same context budget.[1][2][7]
- **Modalities:** Native **text/image/audio/video/PDF input → text output**, with Cloud specifying PDF, audio and video constraints. No native image/audio/video output; **Live API not supported**. Function calling, structured output, grounding, code execution, URL context and preview computer use are available through supported APIs, not new native output modalities.[1][2][3]
- **Thinking:** **Minimal default**, plus low/medium/high. Google explicitly recommends medium/high for autonomous subagents because minimal can terminate tools prematurely. Custom sampling values are ignored; unsupported frequency/presence settings and model-role final input turns error. The main benchmark figures below are **high**, not default-minimal guarantees.[2][5]
- **Pricing (2026-10-20):** Official **free tier: input and output free of charge**, subject to applicable eligibility/quotas; free-tier prompts are marked used to improve Google's products, while paid standard is marked not used. Free-tier context caching and Search/Maps grounding are unavailable, although grounding can be tested in AI Studio.[4]
- **Paid pricing:** Per-million **$0.30 input across text/image/video/audio / $2.50 output including thinking**, cache read **$0.03**, explicit cache storage **$1/M tokens/hour**. Batch/Flex **$0.15/$1.25**, Priority **$0.54/$4.50**. Contributor half-price is **invite-only private preview** and uses data for improvement even on its paid lane; do not represent it as an unrestricted discount. Exact gateway shows half-price, standard, regional and priority routes. Grounding is separately billed after shared allowances.[4][7]
- **Architecture:** Proprietary, based on Gemini 3.1 Flash-Lite according to its own card; exact parameter count/active count and architecture details not independently verified in inspected material. No downloadable weights.[1]

### Raw benchmarks found

**Attribution and setup:** Full **three-page official evaluation-methodology PDF** was inspected. It uses exact `gemini-3.5-flash-lite`, **high thinking**, default sampling and pass@1 except explicit exceptions; no majority voting/parallel compute for single-attempt results. AA selected record UUID `093b9df2-ebee-4309-943f-5a7e88360adf`, slug `gemini-3-5-flash-lite`, high, measured current index. Vals defaults to Google/high/65,536 output, with suite-specific settings possible.[5][6][8]

Agent / tool use:

- **Terminal-Bench 2.1:** **54.0% vendor Terminus-2**, **53.56% AA**, **50.19% ± 0.99 Vals**, the latter across three full trials in its release note. Different run/harness evidence, not a common controlled accuracy.[3][5][6][8]
- **TB4 1.01% / Terminal-Bench-Science 0.0% measured AA**, substantially weaker on newer suites. Missing Tau2 is null; **Tau3-Banking 17.53% AA**.[6]
- **GDPval-AA v2 1140 Elo in the July vendor table**, explicitly sourced from AA's public leaderboard rather than a second vendor replication; current exact AA **983.28 Elo**. **Briefcase 650.26 Elo / 14.85% rubric pass**, **AutomationBench-AA 25.01% partial score**, **EnterpriseOps-Gym 42.35% AA**.[3][5][6]
- **OSWorld-Verified 74.0% vendor**, five runs, single attempt/run, default 1080p, up to 100 steps, pyautogui and UI-specific functions. It is not OSWorld 2.1 or independently replicated here.[3][5]
- Vals **Finance Agent v2 47.44%**, **Legal Research 13.94%**, **Tax Agent 7.25%**, **EMB 43.23%**. No exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found.[8]

Reasoning / knowledge:

- **GPQA Diamond 83.84% AA / 83.84% ± 1.85 Vals**, strong agreement on this specific test.[6][8]
- **HLE 18.81% / CritPt 0.0% measured AA**, not missing-data zeros; **MMLU-Pro 85.84% / LegalBench 84.07% / SAGE 47.30% Vals**. No verified exact AIME value found.[6][8]
- **AA Intelligence Index 22.169**, measured current scale. Vals page displays **52.89% aggregate**; its dated July note reports **36.71%, #29/43 index**, with specific component subsets. These aggregates/snapshots are not interchangeable current-index scores or this repository's Overall.[6][8]
- **Omniscience 29.47% accuracy / 34.36% hallucination / reliability index 5.2333 AA**. Low hallucination relative to some peers partly coexists with limited factual coverage; not every unattempted fact is known.[6]

Coding:

- **SWE-bench Pro Public 54.2% vendor**, full public set using an internal Antigravity harness following provider methodology. This is not SWE Verified or an independent exact-harness reproduction.[3][5]
- **SWE-bench Verified 75.00% full 500 tasks Vals**, explicitly distinguished from its **68.63% index subset**. Likewise Vibe's current full **37.16% ± 4.63** differs from **32.77% index subset** in its launch note.[8]
- **LiveCodeBench 79.01% ± 1.10 Vals**, **SciCode 41.32% AA**, but **Code Migration 6.15%**, **ProgramBench 0.00% measured Vals**. Short repairs/exercises do not establish extended project success. No verified exact DeepSWE found.[6][8]
- **MLE-Bench 39.2% vendor is Average Position Score**, canonical **Partial-30 subset**, averaged over **two independent runs/problem**, with H100/internet sandbox and a 1M terminal harness. It is **not** the percentage of all MLE competitions won, nor a blanket pass@1 score.[3][5]

Long context / multimodal / runtime:

- **GDM-MRCR v2, eight needles:** **72.2% cumulative at 128K / 21.3% pointwise at 1M vendor**. The latter is actual hard full-length evidence and does not justify “near-perfect million-token recall.” **LCR 76.0% / MLCR 7.22% AA** reinforce substantial long-context limitations.[3][5][6]
- **MMMU-Pro 79.02% AA / 83.58% ± 0.89 Vals**; **GDP.pdf 13.6% all-pass AA**. Chart/image strengths do not imply reliable full document deliverables.[6][8]
- **CharXiv Reasoning 74.5% without / 76.5% with tools vendor**; with-tools setup permits search and code execution. Native audio/video/PDF coverage is documented, but no exact numeric independent audio/video evaluation was verified; those modalities are not assigned perfect quality.[1][2][3][5]
- AA median **461.29 output tokens/s / 8.16 s first chunk**, **59.48M evaluation output / 48.84M reasoning tokens**, weighted **$0.1927/task** at paid assumptions. Publisher's cited **350 tokens/s** is an older throughput snapshot, not an endpoint guarantee. Vals **4 min 3 s** describes its different workload aggregate.[3][6][8]

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.1 around 50–54% and supported GUI/tools establish useful lightweight agents, capped by Tau3 17.53%, TB4 1.01%, weak professional deliverables and default-minimal early termination.[2][5][6][8]
- **Reasoning: 73/100.** Independent GPQA 83.84% and MMLU support good bounded reasoning, capped by HLE 18.81%, observed CritPt 0% and limited factual coverage.[6][8]
- **Context window: 95/100.** Verified 1,048,576 capacity earns the million-token capacity tier; MRCR 1M 21.3% and MLCR 7.22% decisively preclude a perfect retrieval score.[2][5][6][7]
- **Multimodal: 92/100.** Native image/audio/video/PDF input and independent visual evidence provide broad coverage, capped by text-only output, no Live API and incomplete audio/video quality evidence.[1][2][6][8]
- **Coding: 76/100.** Full-500 SWE Verified 75%, LCB 79.01% and vendor SWE-Pro support bounded engineering, while migration 6.15%, ProgramBench 0% and weak newer terminals cap autonomy.[5][6][8]
- **Cost efficiency: 100/100.** Verified official free input/output tier meets the methodology's $0 rule for eligible quota-limited use; production paid rates, data-use terms, unavailable free tools/cache and storage charges remain explicitly recorded rather than assumed free.[4]
- **Overall Score: 81/100.** Half-up mean `(68 + 73 + 95 + 92 + 76) / 5 = 80.8`; cost excluded. Best fit: high-throughput multimodal extraction and lightweight supervised coding/agents, with high thinking selected when needed and full-window recall limits respected.

### Research trail and sources

Fresh Bing RSS `"Gemini 3.5 Flash-Lite" official benchmark` returned broad unrelated Gemini links; Google `"Gemini 3.5 Flash-Lite" independent benchmark review` an interstitial; DuckDuckGo `"Gemini 3.5 Flash-Lite" pricing context model` supplied exact primary/model/evaluator leads. Direct Gemini developer-model fetches failed transport; accessible Cloud article body and exact official pricing section were extracted from their public HTML, and DeepMind card/performance page plus the full three-page methodology PDF were inspected. Independent AA/Vals and exact provider metadata resolved settings, subsets, limits and prices; secondary claims not verified at source were not normalized. No peer findings consulted.

[1]: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/ "Full official model card, native modalities, cutoff qualification and exact vendor tables"
[2]: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-5-flash-lite "Primary exact limits, minimal default, tool/API support, media specs and lifecycle"
[3]: https://deepmind.google/models/gemini/flash-lite/ "Primary performance, native coverage and historical throughput citation"
[4]: https://ai.google.dev/gemini-api/docs/pricing#gemini-3.5-flash-lite "Exact official free/paid/cache/storage/service-tier prices and data-use distinctions"
[5]: https://deepmind.google/models/evals-methodology/gemini-3-5-flash-lite "Three-page PDF read in full: high thinking, pass@1 exceptions, MLE subset and MRCR definitions"
[6]: https://artificialanalysis.ai/models/gemini-3-5-flash-lite "Exact selected high-effort public JSON and measured current metrics/runtime/cost"
[7]: https://openrouter.ai/api/v1/models/google/gemini-3.5-flash-lite/endpoints "Exact dated backend, multimodal inputs, 1,048,576/65,536 and provider tariffs"
[8]: https://www.vals.ai/models/google_gemini-3.5-flash-lite "Independent exact high profile, full-versus-subset SWE/Vibe distinctions and settings"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, direct primary HTML/model card/full methodology PDF, exact independently attributed evaluator records and provider/pricing comparisons. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
