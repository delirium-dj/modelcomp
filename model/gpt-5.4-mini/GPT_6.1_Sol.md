# GPT-5.4 Mini — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.4-mini-2026-03-17`, xhigh evaluation configuration.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.4 Mini.
- **Short description:** Small proprietary reasoning/image model aimed at coding, computer use and supporting agents; distinct from Nano and full GPT-5.4. Assessment uses xhigh benchmarks, not the default non-thinking mode.[1][2]
- **Provider / IDs:** Native **`gpt-5.4-mini`**, snapshot **`gpt-5.4-mini-2026-03-17`**, Chat Completions and Responses APIs. Exact live gateway **`openai/gpt-5.4-mini`** lists OpenAI/Azure providers. No separately verified free Zen API ID. AA marks the release superseded by Terra; that evaluator label does not establish API shutdown when current native docs and live endpoints remain.[2][3][4]
- **Release / knowledge:** **2026-03-17**, cutoff **2025-08-31**.[1][2]
- **Context window:** Primary **400,000 total / 272,000 maximum input / 128,000 maximum output**; gateway lists 400K/128K. These caps are not additive full-input allowances. Long-window quality is substantially below nominal capacity.[2][4]
- **Modalities / tools:** **Text/image → text**, no native audio/video/media generation. Streaming, structured output, functions, caching and Batch; Responses supports web/file/tool search, computer use, shell, code interpreter, patching, MCP and skills. Image-generation integration calls another tool, not native image output. Reasoning **none default**, low/medium/high/xhigh.[2]
- **Pricing (2026-10-20):** Standard per 1M **$0.75 input/$4.50 output/$0.075 cache read**; Batch/Flex **$0.375/$2.25/$0.0375**, Fast **$1.50/$9/$0.15**. Regional processing **+10%**. Search **$0.01/call plus content tokens**, other tools separately billed. Current gateway confirms standard/Flex/priority distinctions. Historical free ChatGPT fallback/Thinking access is not a free pinned API tariff.[1][2][4][5]
- **Architecture:** Proprietary; parameter count/active count and open weights not verified.[2][3]

### Raw benchmarks found

**Attribution:** AA exact selected UUID `ba242e40-83b7-4cd3-a0e0-b56237984914`, **GPT-5.4 mini (Xhigh)**, March 17 release, current composite measured. Vendor launch uses **xhigh** except explicitly none for document parsing. Default none performance is not assumed equal.[1][2][3]

Agent / tool use:

- Vendor **Terminal-Bench 2.0 60.0% / Toolathlon 42.9% / MCP Atlas 57.7% / Tau2 telecom 93.4% / OSWorld-Verified 72.1%**. Telecom subset is not the entire Tau2 suite.[1]
- Independent AA **TB2.1 59.18% / TB4 2.02% / Tau2 83.33% / Tau3-Banking 25.57% / IFBench 73.27%**. Modern terminal failures are measured, not missing fields or a harmless rounding-to-zero.[3]
- AA **GDPval 1011.97 Elo / Briefcase 719.36 Elo**, rubric pass **12.54%**, **AutomationBench partial 26.20% / AnalystAgent 15.0% / EnterpriseOps-Gym 34.62%**. No verified exact Claw-Eval/ClawProBench/SWE Atlas QnA found.[3]

Reasoning / knowledge:

- Vendor **GPQA 88.0% / HLE 28.2% without tools, 41.5% with tools**. Independent AA **GPQA 87.47% / HLE 28.13% / CritPt 10.0%**. Tool assistance is a separate condition.[1][3]
- **AA Intelligence Index 24.068 measured**, not this report's Overall. **Omniscience accuracy 37.47% / hallucination 90.17% / reliability index −18.9167**: the hallucination denominator/penalty differs from simple accuracy; do not interpret as 90% of every answer being wrong.[3]
- No verified exact AIME value in selected AA record; null is not zero.[3]

Coding / context / multimodal:

- Vendor **SWE-bench Pro Public 54.4%**, not SWE Verified; independent **SciCode 52.08% AA**. Exact LiveCodeBench field null; no verified Vibe/DeepSWE figure adopted. Weak harder-terminal results limit claims from bounded coding benchmarks.[1][3]
- Vendor **MRCR v2 eight-needle 47.7% at 64K–128K, 33.6% at 128K–256K**; GraphWalks **BFS 76.3% / parents 71.5% at 0–128K**. AA **LCR 77.0% / MLCR 3.89%**. Neither nominal 400K nor long-context reasoning establishes reliable maximum-window retrieval.[1][3]
- Vendor **MMMU-Pro 76.6%, with Python 78.0%**; independent **MMMU-Pro 73.29% / GDP.pdf 13.4% AA**. Vendor **OmniDocBench 1.5 edit distance 0.1263, lower better**, explicitly **none** effort, not 12.63% accuracy.[1][3]
- AA median **275.57 output tokens/s / 87.71 s first chunk**, **228.19M evaluation output / 216.62M reasoning tokens**, weighted **$0.4474/task**; TB4 alone **$1.6319/task** despite low success. High token throughput does not erase reasoning startup or failure cost. Vendor latency charts are offline simulations of production behavior, not independent live timings.[1][3]

### Normalized scores (1–100)

- **Tool use: 66/100.** Broad actual tool stack and strong customer-service/computer-use results, capped by independent TB4 2.02%, banking25.57 and weak professional deliverables.[1][2][3]
- **Reasoning: 79/100.** Strong mini-class GPQA/HLE/CritPt, capped by factual calibration, low current composite and xhigh-versus-default-none dependence.[1][3]
- **Context window: 84/100.** Verified 400K total tier, capped by explicit272K input and sharply degraded retrieval/MLCR; no near-perfect full-window evidence.[1][2][3]
- **Multimodal: 78/100.** Genuine image/screenshot reasoning and document evidence, capped by no native audio/video/non-text output and low difficult-PDF completion.[1][2][3]
- **Coding: 78/100.** Good Pro-public repairs and SciCode at relatively low prices, capped by absent broad persistent-app verification and severe modern-terminal weakness.[1][3]
- **Cost efficiency: 86/100.** Low standard rates, caching and cheaper Batch/Flex, capped by xhigh startup, substantial reasoning usage and separately billed tools/failures.[2][3][4][5]
- **Overall Score: 77/100.** Half-up mean `(66 + 79 + 84 + 78 + 78) / 5 = 77.0`; cost excluded. Best fit: bounded, high-throughput coding/image subtasks with effort and retrieval limits explicitly controlled.

### Research trail and sources

Fresh Bing RSS `"GPT-5.4 mini" official benchmarks` returned generic OpenAI links; Google `"GPT-5.4 mini" independent benchmark` an interstitial; DuckDuckGo `"GPT-5.4 mini" context pricing` a bot challenge. Direct primary launch including full benchmark appendix, exact model/pricing docs, selected AA xhigh and current gateway supplied verified evidence. Guessed Vals `/models/openai_gpt-5.4-mini` returned404 and its models page exposed no matching link; no unrelated Vals profile or predecessor results substituted.

[1]: https://openai.com/index/introducing-gpt-5-4-mini-and-nano/ "March17 launch and full exact-mini benchmark appendix, effort and latency-method caveats"
[2]: https://developers.openai.com/api/docs/models/gpt-5.4-mini "Exact snapshot/default none, 400K/272K/128K, native modalities and tool support"
[3]: https://artificialanalysis.ai/models/gpt-5-4-mini "Exact selected measured xhigh profile, harder-agent/coding/calibration results and runtime/cost"
[4]: https://openrouter.ai/api/v1/models/openai/gpt-5.4-mini/endpoints "Actual OpenAI/Azure standard, Flex and priority routes and caps"
[5]: https://developers.openai.com/api/docs/pricing "Current Mini-specific standard, Batch/Flex, Fast and tool/regional charges"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, complete primary launch/model/pricing inspection and exact-effort independent evaluator/provider comparison. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
