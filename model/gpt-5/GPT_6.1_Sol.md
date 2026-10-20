# GPT-5 — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5-2025-08-07`, the API reasoning model at high effort where specified.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.
- **Short description:** OpenAI's August 2025 general-purpose reasoning and coding model, with native image understanding and configurable reasoning. This report measures the API reasoning checkpoint, not the ChatGPT router system, `gpt-5-chat-latest`, GPT-5 Pro, Mini, Nano or a later GPT-5.x release.[1][2][6]
- **Provider / access:** OpenAI `gpt-5` / `gpt-5-2025-08-07` through **Responses and Chat Completions**; OpenRouter `openai/gpt-5` lists OpenAI and Azure routes to the same dated snapshot. Responses supports tools including search, file search, code interpreter and remote MCP. Tool availability and charges are endpoint-specific.[1][2][5]
- **Release / knowledge:** **2025-08-07** release; **2024-09-30** knowledge cutoff.[1][2]
- **IDs:** `gpt-5`, pinned `gpt-5-2025-08-07`, gateway `openai/gpt-5`. A separate free Zen ID was not verified. Artificial Analysis labels this release superseded by GPT-5.1; that evaluator label is not proof of API shutdown, and current official docs and gateway records still list the original snapshot.[1][3][5]
- **Context window:** **400,000 total**, **272,000 maximum input**, **128,000 reasoning plus output tokens**. Both the official model reference and launch article state the split; OpenAI/Azure gateway records independently repeat these caps. It is not a 400K-input or million-token model.[1][2][5]
- **Modalities:** Native **text/image input → text output**. PDF inputs are processed into extracted text and page images for vision models; non-PDF document extraction is an API service, not a new native modality. Video benchmark results use sampled frames, and do not establish a native video API. No native audio input/output or image generation; image-generation tool support invokes another model. Function calling, parallel calls, Structured Outputs, streaming and reasoning summaries are supported.[1][2][7][8]
- **Pricing (as of 2026-10-20):** Standard **$1.25 input / $10.00 output / $0.125 cached input per 1M tokens**. Current Batch and Flex tables list **$0.625 / $5.00 / $0.0625**, and Fast **$2.50 / $20.00 / $0.25**; these are distinct latency/service conditions, not discounts that stack automatically. Reasoning consumes the billed output budget. Search and other hosted tools carry additional charges; ChatGPT subscription access is not free API usage.[1][7][9]
- **Architecture:** Proprietary; verified parameter count, active parameter count and dense/MoE layout are undisclosed. No open weights. API `minimal` reasoning is still the reasoning model; it is not the non-reasoning ChatGPT model.[2][6]

### Raw benchmarks found

**Effort and identity controls:** Official detailed launch tables use **high** reasoning unless otherwise noted; default API effort was **medium**. AA's directly inspected selected record is **GPT-5 (High)**, UUID `48e50f00-1fd1-4acc-b337-61078aa341e6`, slug `gpt-5`, release August 7. Vals' exact dated profile uses **high**, OpenAI provider, 128,000 max output by default; per-benchmark settings can vary. Results from GPT-5.1/Codex/Pro are not borrowed.[2][3][4]

Agent / tool use:

- **Tau2-bench:** official telecom **96.7%**, retail **81.1%**, airline **62.6%**. Telecom is one domain, not a general 96.7% agent success rate. AA Tau2 aggregate **84.80%**, versus **Tau3-Banking 22.06%** on the harder, different banking suite.[2][3]
- **Terminal-Bench 2.1:** **35.21% AA**; **Terminal-Bench 2.0 37.08% ± 5.15 Vals**. Versions/harnesses remain separate. AA TB4 and terminal-science fields are null, not zero.[3][4]
- **GDPval-AA:** **917.24 Elo AA**. No verified public exact-checkpoint Claw-Eval, ClawProBench, Toolathlon, MCP-Atlas or SWE Atlas QnA number found.[3]
- **Instruction following:** official Scale MultiChallenge **69.6%**, explicitly using an **o3-mini grader** rather than the default GPT-4o grader; COLLIE **99.0%** and internal hard API instruction following **64.0%**. AA IFBench **73.06%** is a separate measured suite.[2][3]

Reasoning / knowledge:

- **GPQA Diamond:** **85.7% vendor**, **85.35% AA**, **85.61% ± 1.76 Vals**; close independent agreement for this specific test.[2][3][4]
- **HLE without tools:** official **24.8%**; **28.50% AA**. The official article explicitly notes a benchmark-version discrepancy with its earlier blog; these values are not averaged into a fabricated common result.[2][3]
- **AIME 2025:** **94.6% vendor**, **94.33% AA**; official HMMT 2025 **93.3%**. **FrontierMath 26.3% vendor** permits Python, and is not an unassisted score.[2][3]
- **CritPt:** **5.71% AA**; **MMLU Pro 86.54% Vals**.[3][4]
- **Artificial Analysis Intelligence Index:** current **22.983**, explicitly **estimated**. It is not a fully populated measured current index and must not be confused with launch-era index scales. BenchLM's guessed bare model path returned 404, so no BenchLM rank is claimed.[3]
- **Omniscience:** AA accuracy **40.32%**, hallucination rate **82.18%**, reliability **−8.7333** on its reported scale. Official LongFact Concepts/Objects hallucination rates **1.0% / 1.2%**, FActScore **2.8%**, use different tasks and grading. The low vendor rates do not contradict the existence of difficult knowledge failures on Omniscience.[2][3]
- Vals LegalBench **86.02%**, MedCode **49.63%**, SAGE **43.68%**. Its page's displayed aggregate **66.74%** lacks the current full Vals Index membership/rank shown for newer models, so it is not treated as an equivalent current index.[4]

Coding:

- **SWE-bench Verified:** **74.9% vendor**, but **23 of 500 tasks omitted** for infrastructure issues; a prompt emphasized thorough verification. This is not an unconditional full-500 result. Vals independently reports **69.00% ± 2.07** on its SWE-bench profile.[2][4]
- **Aider polyglot:** vendor **88.0%** is independently present on Aider's own high-effort leaderboard: **198/225, 88.0% after the second attempt**, versus **117/225, 52.0% first attempt**; diff format, **91.6% well-formed edits**, **$29.0829 total**, **194 s/case**, August 23, 2025 run. Medium reaches **86.7%** for **$17.693**; low **81.3%** for **$10.3713**. The headline 88% is not pass@1 or a SWE-bench score.[2][10]
- **LiveCodeBench:** **84.55% AA**, **85.91% ± 0.97 Vals**. AA selected SciCode is null; no exact verified SWE-Pro or DeepSWE result found.[3][4]
- **Vibe Code Bench v1.1:** **20.09% ± 3.41 Vals**. Strong short exercise performance does not establish dependable extended application development.[4]
- Official **SWE-Lancer IC Diamond $112K** is benchmark earned-value scoring, not model price, revenue or percentage success. Vendor/partner testimonials are not independent standardized replications.[2]

Long context and multimodal:

- **OpenAI-MRCR, two needles:** **95.2% at 128K**, **86.8% at 256K vendor**; input-length bins, not tests of 400K input. **BrowseComp Long Context 90.0% at 128K / 88.8% at 256K**, plus GraphWalks BFS **78.3%** and parents **73.3%** below 128K.[2]
- **LCR:** **78.2% AA**. No independent near-perfect million-token retrieval result is asserted.[3]
- **MMMU:** **84.2% vendor**. **MMMU-Pro 78.4% vendor** averages standard and vision sets, versus **74.22% AA** and **81.50% ± 0.93 Vals** under their own evaluations; these are not a common controlled replication.[2][3][4]
- **CharXiv reasoning 81.1% vendor** allows Python. **VideoMMMU 84.6% vendor** uses at most **256 frames**; **VideoMME long/subtitles 86.7%** remains a sampled-frame workload rather than native video serving evidence.[2]

Independent practical review and latency:

- Simon Willison's two-week preview review describes a competent daily driver rather than a dramatic discontinuity. He documents a concrete failed price-table sort fixed through Python, and later clarifies that his personal low hallucination exposure reflected experienced prompt selection. This is useful disclosed qualitative experience, not a benchmark or universal error-rate estimate.[7]
- AA selected high-effort runtime shows median **109.40 output tokens/s**, but **59.53 s to first chunk**; output throughput does not describe reasoning wait. Vals displays **5 min 5 s** workload latency, a different aggregate.[3][4]

### Normalized scores (1–100)

- **Tool use: 68/100.** Broad tool support and strong Tau2 establish useful agents; Tau3 22.06%, terminal scores around 35–37% and GDPval 917.24 cap modern multi-step reliability.[2][3][4]
- **Reasoning: 78/100.** Independent GPQA around 85.5%, AIME around 94% and HLE 28.50% support strong reasoning, capped by CritPt 5.71%, weak calibrated knowledge and an estimated current AA index.[2][3][4]
- **Context window: 84/100.** Verified 400K total/272K input sits at the top of the 200K–500K band, with useful measured 256K retrieval; neither the API nor evidence supports a million-token tier.[1][2][5]
- **Multimodal: 80/100.** Verified image and PDF-page understanding with substantial visual benchmark evidence, capped by text-only output, no native audio and sampled-frame rather than native-video access.[1][2][8]
- **Coding: 77/100.** Independent Aider and LiveCodeBench scores demonstrate strong exercise/editing ability, while Vals SWE-bench 69%, Vibe 20.09% and terminal weakness cap end-to-end coding confidence.[3][4][10]
- **Cost efficiency: 77/100.** Input caching and Batch/Flex improve paid value, but $10/M reasoning/output and high-effort delay are expensive against current alternatives; no free API route is verified.[1][3][9][10]
- **Overall Score: 77/100.** Half-up rounding of `(68 + 78 + 84 + 80 + 77) / 5 = 77.4`; cost excluded. A capable pinned reasoning and image/document model for existing integrations, with stronger evidence for bounded edits than long autonomous software projects.

### Research trail and sources

Three distinct fresh searches preceded synthesis: Bing `"GPT-5" official API benchmark 2025` returned mostly broad/older material; Google `"GPT-5" independent review benchmarks high reasoning` hit a JavaScript interstitial; DuckDuckGo `"GPT-5" 400000 128000 benchmark pricing` returned official pricing and secondary comparisons. Exact official/evaluator records and Aider's run metadata were inspected directly. Bare Vals `openai_gpt-5` and BenchLM `gpt-5` returned 404; Vals' dated checkpoint path resolved. Failed guesses are access/identity findings, not evidence that the model lacks benchmarks.

[1]: https://developers.openai.com/api/docs/models/gpt-5 "Current model reference, snapshot, limits, modalities and rates"
[2]: https://openai.com/index/introducing-gpt-5-for-developers/ "Official launch, full benchmark tables, SWE omissions, effort and long-context methodology"
[3]: https://artificialanalysis.ai/models/gpt-5 "Exact GPT-5 High public model record, estimated-index flag, metrics and latency"
[4]: https://www.vals.ai/models/openai_gpt-5-2025-08-07 "Independent exact-checkpoint profile and high-effort settings"
[5]: https://openrouter.ai/api/v1/models/openai/gpt-5/endpoints "Dated OpenAI/Azure endpoint mapping, prices and 272K/128K limits"
[6]: https://openai.com/index/gpt-5-system-card/ "Official API thinking model versus ChatGPT main/router/pro identity"
[7]: https://simonwillison.net/2025/Aug/7/gpt-5/ "Disclosed hands-on review, concrete failure and reasoning-token cost caveats"
[8]: https://developers.openai.com/api/docs/guides/pdf-files "PDF text/page-image processing versus document extraction"
[9]: https://developers.openai.com/api/docs/pricing "Current Standard, Batch, Flex, Fast and tool pricing"
[10]: https://aider.chat/docs/leaderboards/ "Independent polyglot results, first/second attempt, edit formatting and run costs"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Fresh public searches and direct official documentation/launch tables, independent AA/Vals results, Aider run metadata, gateway records and a disclosed hands-on review. Scores are independent normalized 1–100 interpretations, not vendor results; no peer findings supplied evidence.
- Future sources: add a separate signed file alongside this report using the same headings.
