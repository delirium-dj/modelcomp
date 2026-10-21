# MiMo V2.5 Pro — findings by GPT 6.1 Sol

- Source: Xiaomi MiMo / `XiaomiMiMo/MiMo-V2.5-Pro`, original text-only reasoning checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** MiMo V2.5 Pro; distinct from the multimodal non-Pro V2.5, V2-Pro, the Base checkpoint and successor V2.6-Pro.
- **Short description:** Open-weight, very large MoE language model for long-context reasoning and agentic software engineering. Strong older agent benchmarks coexist with substantial weaknesses on newer independent terminal, banking and persistent-application tests.[1][2][5][6]
- **Provider / access:** Historical native ID **`mimo-v2.5-pro`**, OpenAI-compatible Chat Completions and Anthropic formats. Xiaomi explicitly retired the ID on **2026-10-21 at 10:00 UTC+8 = 02:00 UTC**; old-name requests now error. An October14 replacement period routed it to V2.6-Pro, so a successful native call during that period would not establish original-checkpoint inference. The deprecation table says replacement began October14 at10:00 UTC+8, while its note says18:00; this internal eight-hour discrepancy is unresolved. Exact open weights remain available, and live **`xiaomi/mimo-v2.5-pro`** third-party routes identify backend **`xiaomi/mimo-v2.5-pro-20260422`**. No authenticated inference or current free Zen ID verified.[1][3][7][9]
- **Release / knowledge:** AA/Vals and dated gateway identity specify **2026-04-22**; the primary open-source launch article is dated **2026-04-27**. Public-beta API availability and later weight publication are different milestones; byte-identical historical API/weight revisions are not established. No verified exact-checkpoint knowledge cutoff found: the platform's generic suggested December2024 system prompt is not a model-specific training disclosure.[1][2][5][6][9][10]
- **Architecture / licence:** Publisher **1.02T total/42B active**, AA1023B/42B; **MIT declared in official card metadata**, downloadable FP8 mixed weights. Seventy layers,384 routed experts/eight selected per token; six sliding-window attention layers per global layer,128-token local window, three MTP modules. Pretraining native32K sequence length is not the final inference ceiling. A guessed standalone HF `LICENSE` path returned404; no separate licence text was inspected or additional restriction invented.[1][2][4][5]
- **Context / output:** Official final instruct model **up to1M**, exact config **1,048,576 positions**; Base256K is separate. Current AtlasCloud **1,024,000/131,072 output**, Novita **1,048,576/131,072**, GMICloud **1,050,000/945,000 advertised output**. The last figure is provider metadata, not a verified native generation guarantee. Vals lists1M/128K. DigitalOcean262K route has status−5 and is not counted as healthy availability. Total context and maximum output are not additive.[1][4][6][7]
- **Modalities / thinking / tools:** **Text → text only**. Both the original weights/template and Xiaomi's retirement notice distinguish this from multimodal V2.6-Pro. Native image/audio/video perception is not inherited from non-Pro V2.5, TTS/ASR siblings or a generated video-editor app. Official template defaults **`enable_thinking=true`, `keep_all_reasoning=true`**, with a disabling branch and function-call/tool-response serialization. Local recommendation **temperature1.0/top-p0.95**. AtlasCloud/Novita list tools/tool choice; GMICloud's cheaper route does not list them. Current V2.6-only native thinking/API guidance does not establish every retired V2.5 parameter contract.[1][3][7][8][9]
- **Pricing (2026-10-21):** Actual paid exact-checkpoint gateway per1M: **AtlasCloud FP8 $0.435 input/$0.87 output/$0.0036 cache read**; **GMICloud BF16 $0.3045/$0.609/$0.0028**, explicitly30% discounted; Novita **$0.48024/$0.96048/$0.003956**,8% discounted. Route precision, tool support and availability differ. Current native pricing page explicitly retires2.5 and prices2.6; its coincidentally matching rates are not a current2.5 native service quote. Historical free-token promotions and licence-free weights do not establish free hosted inference or zero deployment cost.[3][7][11]

### Raw benchmarks found

**Attribution:** Original exact Pro model only. Primary complete benchmark image inspected directly, including **ClawEval pass^3**, **FrontierSWE rank direction** and **HLE with/without tools**. AA selected **Reasoning UUID `00f1248e-78e3-4230-8dc8-5e13ba8645e2`**, current index **measured, not estimated**; its successor/deprecation flag does not relabel original measurements as V2.6. Vals exact `xiaomi/mimo-v2.5-pro`, default Xiaomi provider, **temperature1/top-p0.95/max128,000**; individual benchmarks can override defaults. Vendor, evaluator and benchmark-version differences remain separate.[1][2][5][6][12]

Agent / tool use:

- Vendor **Tau3-bench72.9% /ClawEval63.8% pass^3 /GDPval-AA1581 Elo /TB2.0 68.4%**. Pass^3 is a repeated-success metric, not pass@3; vendor Tau3 aggregate is not the current banking subset. GDPval labelled AA in the launch graphic remains a dated vendor-carried evaluator snapshot, not current independently retrieved1120.77.[2][12]
- Independent AA **Tau2 94.15% /Tau3-Banking9.90% /TB2.1 65.17% /TB4 0.00% measured**. Vals **TB4 0.51% ±0.51** independently confirms severe newer-terminal weakness; neither zero is a missing-value placeholder.[5][6]
- AA **GDPval1120.77 Elo /Briefcase882.79 Elo,21.41% rubric pass /AutomationBench partial13.70% /AnalystAgent20.0% /Apex-Agents2.43% /IFBench79.86%**. Different task families and scales are not averaged as one task-success rate. No verified exact ClawProBench/Toolathlon/MCP Atlas/SWE Atlas Codebase QnA score found.[5]
- Primary selected demonstrations: **SysY compiler233/233 hidden tests,672 tool calls/4.3hours**; **video-editor app8,192 lines,1,868 tool calls/11.5hours**. These are publisher-selected long-horizon examples with a suitable harness, not an independent representative success-rate estimate or proof of native audiovisual understanding.[2]

Reasoning / knowledge:

- Vendor HLE **48.0% with tools /34.0% without tools**. Independent AA **GPQA86.57% /HLE35.68% /CritPt4.00% /Intelligence Index25.987 measured**; Vals **GPQA82.58% ±2.47 /MMLU-Pro84.59% ±0.45 /ProofBench v1.1 22.00% ±4.16**. Different prompts, tool policies and harnesses are retained rather than declaring the best figure universal.[5][6][12]
- AA **Omniscience accuracy22.42% /hallucination24.70% /reliability3.25**; hallucination uses its own denominator and lower is better. Modest factual coverage and harder-science results cap a strong GPQA headline. No exact AIME score found in the selected AA record; Base-model math tables are not substituted.[1][5]

Coding / professional work:

- Vendor **SWE-bench Verified78.9% /SWE-bench Pro57.2% /FrontierSWE implementation rank3.4, lower better**. The primary graphic does not provide enough reproducibility detail to assert identical scaffolds/budgets with independent evaluations; no blanket single-shot claim made.[12]
- Independent Vals **SWE-bench74.00% ±1.96 /LiveCodeBench81.35% ±1.07 /Vibe Code Bench v1.1 34.11% ±4.53 /Code Migration21.56% ±4.13**. AA **SciCode50.58%**. Useful repository repair and contest coding do not erase weak persistent-app/migration and newer-terminal performance. No exact independent DeepSWE score found.[5][6]
- Vals **Finance Agent v2 41.50% /Tax Agent11.50% /Legal Research15.87% /MedScribe83.73%**. Strong transcription-related textual workflow performance is not native audio input support and does not make this a finance- or voice-specialist checkpoint.[6]

Long context / modality / runtime:

- Official GraphWalks across32K–1M, with the publisher stating Anthropic-style evaluation fixes: **at512K BFS56%/parents92%; at1M BFS37%/parents62%**. This supports meaningful long-context reasoning but not98% complex full-window retention. AA **LCR79.67% /MLCR5.56%** further separates nominal capacity from reliable deep retrieval.[1][5]
- AA native **MMMU-Pro null**, **GDP.pdf4.0%** tool-mediated document task; the latter does not add native vision to an explicitly text-only model.[3][5][7]
- AA median **40.80tokens/s /2.37s first chunk**; canonical output **112.12M tokens,92.70M reasoning**. Weighted **$0.0541/task**, Briefcase **$0.07185/task/729.53s**, TB4 **$0.2390/task/2,614.15s** despite0% success. Low first-chunk latency and cheap tokens do not imply fast or successful end-to-end professional delivery. Vals aggregate latency **18min57s**, across a different task mix.[5][6]

### Normalized scores (1–100)

- **Tool use: 67/100.** Strong older terminal/Tau2 and vendor ClawEval support bounded agent use; banking9.90%, newer-terminal near-zero and weak automation cap general autonomy.[5][6][12]
- **Reasoning: 78/100.** Strong GPQA/HLE and useful long-context reasoning, capped by CritPt4%, factual coverage, low complex retrieval and the measured26-index profile.[1][5][6]
- **Context window: 95/100.** Verified final1M-class weights and hosted routes; GraphWalks37%/62% at1M and MLCR5.56% do not earn a near-perfect-retention bonus.[1][4][5][7]
- **Multimodal: 15/100.** Explicitly text-only; successor/non-Pro/TTS/ASR capabilities and tool-mediated documents are not native modalities.[3][5][7][8]
- **Coding: 76/100.** Independent repair74%, LCB81.35% and SciCode50.58% show useful engineering; weak migration/Vibe and TB4 near-zero cap persistent application autonomy.[5][6]
- **Cost efficiency: 94/100.** Low exact-model paid/cached rates and task costs; promotional tool-support differences, reasoning overhead, failure cost and native retirement limit operational value. No free hosted tariff assumed.[3][5][7][11]
- **Overall Score: 66/100.** Half-up mean `(67 + 78 + 95 + 15 + 76) / 5 = 66.2`; cost excluded. Best fit: inexpensive text-only repair and long-document work through a pinned third-party or self-hosted checkpoint, with explicit validation of newer agent tasks.

### Research trail and sources

Three fresh exact-name attempts: Bing RSS official-benchmark query returned unrelated Wikipedia; Google independent-benchmark query returned a JavaScript interstitial; DuckDuckGo weights/pricing/context query produced primary and hosted leads. Official complete card/config/template, original benchmark image, primary beta/open-source pages, current deprecation/pricing documents, exact AA reasoning payload, exact Vals profile and actual route list inspected. The documentation's `llms.txt` exposed primary static Markdown when guessed SPA documentation URLs rendered only a shell. Native retirement is affirmative publisher evidence, not inferred from AA's supersession label. No peer research or sibling scores used.

[1]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/README.md "Official MIT metadata,weights,architecture,GraphWalks,Base distinction and deployment settings"
[2]: https://mimo.xiaomi.com/mimo-v2-5-pro "April27 open-source launch,selected long-horizon demonstrations and dated vendor claims"
[3]: https://mimo.mi.com/static/docs/updates/deprecate.md "October21 02:00UTC retirement,October14 successor routing and internal replacement-time discrepancy;original Pro text-only"
[4]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/config.json "Actual architecture and1,048,576-position instruct configuration"
[5]: https://artificialanalysis.ai/models/mimo-v2-5-pro "Exact selected Reasoning UUID,current measured independent task,calibration,context,runtime and cost fields"
[6]: https://www.vals.ai/models/xiaomi_mimo-v2.5-pro "Exact independent model,benchmark values,uncertainties and default sampling/provider/output settings"
[7]: https://openrouter.ai/api/v1/models/xiaomi/mimo-v2.5-pro/endpoints "Exact April22 backend,current route precision,limits,prices,parameters and negative-status route"
[8]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/tokenizer_config.json "Original text/function template,thinking default and reasoning retention"
[9]: https://mimo.mi.com/static/docs/quick-start/summary/first-api-call.md "Platform API protocols and current successor examples;generic suggested cutoff not exact-checkpoint evidence"
[10]: https://mimo.mi.com/static/docs/news/latest/v2.5-news.md "Public-beta generation announcement,April22 benefit milestone and separate non-Pro multimodality"
[11]: https://mimo.mi.com/static/docs/price/pay-as-you-go.md "Current native retirement warning and2.6-only language pricing,not a live2.5 quote"
[12]: https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/resolve/main/assets/benchmark.jpg "Full original vendor benchmark image,Pro column,pass^3,tools versus no-tools and rank footnotes"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, exact primary weight/config/template and visual benchmark inspection, current native lifecycle and third-party serving verification, and two exact-model independent evaluators. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
