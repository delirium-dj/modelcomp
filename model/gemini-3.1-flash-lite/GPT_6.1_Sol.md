# Gemini 3.1 Flash-Lite — findings by GPT 6.1 Sol

- Source: Google DeepMind / Gemini3.1 Flash-Lite release line; March high-thinking measurements, May stable serving verified separately.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini3.1 Flash-Lite. No bare Gemini3.1 Flash checkpoint is inferred, nor capability inherited from Flash-Lite Image/Live or3.5 Flash-Lite.
- **Short description:** Proprietary multimodal model optimized for inexpensive translation, extraction, transcription and lightweight agents. Published benchmarks principally characterize March preview at high thinking; current stable availability is a separate verification.[1][2][3]
- **Provider / IDs:** Native **`gemini-3.1-flash-lite`**, GenerateContent/OpenAI-compatible access; Cloud also documents Interactions. Current exact gateway **`google/gemini-3.1-flash-lite`**, backend **`google/gemini-3.1-flash-lite-20260507`**, multiple Google/AI Studio routes. One Vertex Flex route has negative status/degraded recent uptime while ordinary/AI Studio routes are listed healthy; listing is not authenticated inference. No separate verified free Zen ID.[1][2][4]
- **Release / lifecycle:** Preview **2026-03-03**, GA **2026-05-07**. Native stable shutdown scheduled **2027-05-07**; Cloud says May7 or later. Old preview shutdown **2026-05-25** is not stable shutdown. AA supersession by3.5 is evaluator lineage metadata. AA reports January2025 cutoff; exact stable cutoff not independently established in native model page.[2][3][5][7]
- **Context window:** Native **1,048,576 input /65,536 output**; gateway/Cloud advertise1,048,576 context and65,536 output. Full input plus full output not assumed simultaneously; maximum-window retrieval is demonstrably weak.[1][2][4]
- **Modalities / thinking / tools:** Native **text/image/audio/video/PDF → text**; no native audio/image generation or Live/computer use. Structured output, functions, code execution, grounding, URL context, file search, caching, Batch/Flex/priority. Cloud documents minimal/low/medium/high thinking; benchmark configuration is **high**, not an assertion about an unverified default setting.[1][2][3]
- **Pricing (2026-10-20):** Native **free input/output tier**, quota/availability limited, free data **used to improve products**, paid data not. Standard per1M **$0.25 media input/$0.50 audio input/$1.50 output including thinking**, cache read **$0.025 media/$0.05 audio**, storage **$1/M-token-hour**. Batch/Flex **$0.125/$0.25 audio/$0.75 output**, priority **$0.45/$0.90 audio/$2.70 output**. Search/Maps after shared allowances **$14/1000 requests/queries**, not necessarily one query per user prompt.[4][6]
- **Architecture:** Closed weights; publisher says based on Gemini3 Pro, but exact total/active parameter count not disclosed. Dependency is not score equivalence or an open model licence.[3]

### Raw benchmarks found

**Provenance / confidence:** Complete **two-page official evaluation-methodology PDF read**, including the page2 table image: all Gemini runs use **`gemini-3.1-flash-lite-preview`**, default sampling/**high thinking**, single attempt unless noted, smaller tasks averaged over trials. AA selected UUID **`598190f8-dc9c-4fea-a7ea-4b81c402ab18`**, March3/high, measured current index. Vals exact March preview/high, Google API, temperature1/65,536 output. These are genuine measurements of the release line, **not independently verified fresh May GA replications**; normalized assessment is provisional across that transition.[3][7][8][9]

Agent / tool use:

- Independent AA **TB2.1 31.09% /TB4 0.51% /Tau2 31.29% /Tau3-Banking9.69% /IFBench77.21%**. Very weak modern terminal/banking outcomes coexist with good bounded instruction following.[7]
- AA **GDPval430.83 Elo /Briefcase207.25 Elo**, rubric pass **6.33%**, **AutomationBench partial6.80% /AnalystAgent8.75% /EnterpriseOps-Gym28.02%**. Elo values and rubric percentages are distinct.[7]
- Vals **TB2.1 34.08% /Finance Agent v2 29.99% /EMB8.63% /Legal Research3.37% /Tax Agent3.11%**. No verified exact Claw-Eval/ClawProBench/Toolathlon/MCP-Atlas/SWE Atlas QnA found.[8]

Reasoning / knowledge:

- Primary March **GPQA86.9% /HLE full text+multimodal no-tools16.0% /SimpleQA Verified43.3% /FACTS suite40.6% /MMMLU88.9%**. No-tools HLE here includes multimodal items; do not equate to a text-only suite.[3][9]
- Independent AA **GPQA82.22% /HLE17.19% /CritPt1.14%**; Vals **GPQA81.06% /MMLU-Pro86.24%**. Different harnesses/suites, not scores to average into a single accuracy.[7][8]
- **AA Intelligence Index15.554 measured**, Vals displayed44.29% aggregate; different indices, neither the report's Overall. AA **Omniscience accuracy36.27% /hallucination82.66% /reliability−16.4167** limits factual confidence. Selected exact AIME null, not zero.[7][8]

Coding / multimodal / long context:

- Vals **SWE Verified62.80% /LiveCodeBench80.12% /SciCode43.40% AA**, but **Vibe Code0.00% /ProgramBench0.00% /Migration4.61% Vals**. These are measured zeros for complete-app/program outcomes, not missing benchmarks.[7][8]
- Primary **LiveCodeBench72.0%**, exactly **175 UI problems dated2025-01-01–05-01**, self-computed for all models. Distinct from Vals' contemporary suite. No verified exact SWE-Pro/DeepSWE found.[9]
- Primary **MMMU-Pro76.8%**, average of Standard10-option and Vision settings; **CharXiv73.2% /Video-MMMU84.8%**. AA **MMMU-Pro75.55% /GDP.pdf7.8%**; Vals **MMMU-Pro82.49% /MortgageTax68.04%**. Input coverage is broader than success on difficult document tasks.[3][7][8][9]
- Primary **MRCR v2 eight-needle60.1% at128K cumulative average /12.3% at1M pointwise**. AA **LCR74.33% /MLCR6.11%**. Million-token nominal capacity does not mean reliable long-window retrieval.[7][9]
- Primary launch output speed **363tokens/s is AA-attributed March3**, not independent publisher timing. Current selected AA median **351.81tokens/s /4.73s first chunk**, weighted **$0.06018/task**; Vals workload latency **1min51s** differs in scope. Reasoning consumes **49.27M of53.93M AA evaluation output tokens**.[7][8][9]

### Normalized scores (1–100)

- **Tool use: 48/100.** Useful functions/grounding and bounded instruction following, capped by measured modern-terminal0.51%, banking9.69 and low professional completion.[1][7][8]
- **Reasoning: 73/100.** Strong inexpensive GPQA/HLE, capped by CritPt, calibration and preview-to-GA evaluation uncertainty.[3][7][8][9]
- **Context window: 95/100.** Verified million-token tier, capped by12.3% full-window eight-needle retrieval and low MLCR; no near-perfect retention.[1][4][7][9]
- **Multimodal: 90/100.** Genuine image/audio/video/PDF input with strong visual/video measurements, capped by text-only output and weak difficult-document completion.[1][3][7][8]
- **Coding: 68/100.** Useful bounded repairs/SciCode/contest code, capped by zero complete-app/program resolution and poor modern terminal/migration reliability.[7][8]
- **Cost efficiency: 100/100.** Verified $0 native tier under the project's price rule; quotas, data-use exception and paid grounding/storage remain explicit.[6]
- **Overall Score: 75/100.** Half-up mean `(48 + 73 + 95 + 90 + 68) / 5 = 74.8`; cost excluded. Provisional high-thinking release-line assessment for scaled media/extraction and bounded coding, not long-horizon autonomy.

### Research trail and sources

Fresh Bing RSS `"Gemini 3.1 Flash-Lite" benchmarks` returned generic Gemini results; Google `"Gemini 3.1 Flash-Lite" independent review` an interstitial; DuckDuckGo `"Gemini 3.1 Flash-Lite" pricing GA` a bot challenge. Native English model/lifecycle/pricing and Cloud pages were fetched directly, current exact gateway inspected, official full model card/methodology PDF checked. Bare guessed AA and Vals URLs returned404; exact **preview** evaluator IDs resolved and their date/effort retained. No unsuffixed Flash, Image, successor or peer results used.

[1]: https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite?hl=en "Native stable identity, 1M/64K, media input and unsupported computer-use/Live/generation"
[2]: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-1-flash-lite?hl=en "Primary May7 GA, lifecycle and four thinking levels/API support"
[3]: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/ "Primary March model card, Gemini3Pro dependency, full results and provenance"
[4]: https://openrouter.ai/api/v1/models/google/gemini-3.1-flash-lite/endpoints "Actual May7 stable backend, exact route caps, tariffs and temporary route-status differences"
[5]: https://ai.google.dev/gemini-api/docs/deprecations?hl=en "Stable May7,2027 scheduled shutdown versus May25,2026 preview shutdown"
[6]: https://ai.google.dev/gemini-api/docs/pricing?hl=en "Actual free/data-use and paid audio/cache/storage/grounding price distinctions"
[7]: https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview "Exact March/high measured record; independent agent/calibration/code/runtime metrics"
[8]: https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview "Exact preview/high settings, repairs versus full-app/program measured zeros"
[9]: https://deepmind.google/models/evals-methodology/gemini-3-1-flash-lite/ "Redirects to full two-page official PDF; exact preview ID, high/pass@1,175 dated coding problems and cumulative/pointwise retrieval"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, complete primary model/methodology inspection and explicitly dated preview evaluator versus current stable serving comparison. Scores are provisional normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
