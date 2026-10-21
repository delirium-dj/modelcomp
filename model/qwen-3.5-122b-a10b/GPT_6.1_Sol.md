# Qwen3.5-122B-A10B — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `Qwen/Qwen3.5-122B-A10B`, original February2026 reasoning checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-122B-A10B,not397B,27B,35B-A3B or hosted Plus. Parameter-size hyphens are preserved in this permanent folder.
- **Description / architecture:** Apache2.0 open-weight native vision-language MoE,**122B language-model total/10B active**,48layers,256experts/eight routed plus one shared. Hybrid Gated DeltaNet/attention,vision encoder and MTP; AA's125B accounting is not a different122B checkpoint.[1][2]
- **Provider / IDs:** Official weights **`Qwen/Qwen3.5-122B-A10B`**,self-hosted OpenAI-compatible API; exact gateway **`qwen/qwen3.5-122b-a10b`**,backend **`qwen/qwen3.5-122b-a10b-20260224`**. Native card supplies a DashScope-compatible example with the exact weight name. Current Alibaba/AtlasCloud/Novita routes list tools; SiliconFlow's route does not despite structured-output/reasoning support. No authenticated inference or exact free Zen ID verified.[1][3]
- **Release / knowledge:** **2026-02-24** per evaluator/dated route; exact knowledge cutoff not verified.[2][3]
- **Context / output:** **262,144 native**,explicit **YaRN extension to1,010,000**,factor4/configuration required; static scaling can harm short-text quality. Current listed routes stay262,144. Alibaba/Atlas/Novita completion65,536; SiliconFlow235,929 is a provider-advertised cap,not primary guaranteed generation. Scores use verified native/served262K,not hypothetical deployed1M.[1][3]
- **Modalities / thinking:** **Text,image,video→text**,no native audio/media generation. Thinking default,`enable_thinking` toggle; primary recommends general thinking **temperature1/top-p0.95/top-k20**,precise coding0.6/top-p0.95. Suggested output32,768 normally/**81,920 on hard competition problems** is a recipe,not every hosted cap. Historical thought content should be omitted from multi-turn history under the supplied template.[1]
- **Pricing (2026-10-21):** Actual Alibaba/SiliconFlow **$0.26 input/$2.08 output per1M**,AtlasCloud$0.30/$2.40 withcache$0.30,NovitaBF16$0.40/$3.20. These exact serving rates differ from older aggregates. Weight licence is not free inference; no current$0 tariff verified.[3]

### Raw benchmarks found

**Attribution:** Exact122B column extracted independently from both full primary language/vision tables and footnotes. Vendor Tau2 uses airline fixes from the Opus4.5 card; search agents prune prior tool responses at a256K threshold,while WideSearch uses256K without context management. AA selected **Reasoning UUID `2236df45-0699-40d1-b5cc-69ee345d2257`**,current **Index15.569 measured**,not estimated. Vendor-carried AA-LCR remains distinct from independently retrieved current LCR.[1][2]

Agent / coding:

- Vendor **BFCL-v4 72.2% /Tau2 79.5% /VITA33.6% /DeepPlanning24.1% /Terminal-Bench2 49.4%**. Independent AA **Tau2 93.57% /Tau3-Banking15.26% /TB2.1 47.57% /TB4 0.00% measured /IFBench75.71%**; benchmark versions and subsets retained.[1][2]
- AA **GDPval814.01 Elo /Briefcase497.34 Elo,10.61% rubric pass /AutomationBench partial5.48%**; no exact Claw-Eval/ClawProBench/MCP Atlas/Toolathlon/SWE Atlas found. API tools and high Tau2 do not establish reliable long-horizon professional delivery.[2]
- Vendor **SWE Verified72.0% /LCB v6 78.9% /FullStackBench English62.6% /CodeForces2100**,the last a rating on the publisher's own query set. AA **SciCode39.70%**; selected LCB null. No exact independent SWE/Vibe Code/DeepSWE found; measured TB4 zero caps autonomy.[1][2]

Reasoning / knowledge:

- Vendor **GPQA86.6% /HLE CoT25.3%,with tools47.5% /MMLU-Pro86.7% /HMMT Feb2025 91.4%**. Tool HLE uses an agent/context-folding recipe,not unaided reasoning. AA **GPQA85.66% /HLE25.21% /CritPt0.57%**,showing weaker hard-science generalization despite strong knowledge exams.[1][2]
- AA **Omniscience accuracy24.37% /hallucination87.09% /reliability−41.5**; lower hallucination is better and uses its own denominator. No selected AIME value found.[2]

Context / multimodal / efficiency:

- Vendor **AA-LCR66.9% /LongBench v2 60.2%**; AA independently **LCR76.33% /MLCR7.78%**. No verified near-perfect1M retrieval; configuration ceiling and tool-history pruning are not direct retention tests.[1][2]
- Vendor **MMMU-Pro76.9% /MathVista87.4% /OmniDocBench1.5 89.8 reported score /MMLongBench-Doc59.0% /VideoMME83.9% without,87.3% with subtitles /OSWorld-Verified58.0% /ScreenSpot-Pro70.4%**. Independent AA **MMMU-Pro74.97% /GDP.pdf3.4%**. Document score89.8 is not relabelled an edit-distance0.898; different task metrics remain separate.[1][2]
- AA median **128.05tokens/s /2.29s first chunk**,canonical output100.74M/reasoning82.26M tokens; weighted **$0.3247/task**,TB4 **$1.7833/task despite0% success**. Evaluator historical/reference prices are not the cheaper current route invoice; token value and successful-task cost differ.[2][3]

### Normalized scores (1–100)

- **Tool use: 55/100.** Strong basic Tau2 and middling older terminals,capped by banking15.26%,weak automation/professional delivery and TB4 zero.[1][2]
- **Reasoning: 73/100.** Strong verified GPQA/HLE for its class,capped by CritPt0.57%,calibration and difficult multilingual retrieval.[1][2]
- **Context window: 76/100.** Verified native/served262K; YaRN1M is explicit optional configuration,not current hosted or near-perfect retention evidence.[1][3]
- **Multimodal: 84/100.** Genuine strong image/video/document understanding,capped by weak end-to-end PDF task result,no audio and text-only output.[1][2]
- **Coding: 70/100.** Useful vendor repair/LCB and moderate independent SciCode,capped by absent independent broad repair validation and hard-terminal zero.[1][2]
- **Cost efficiency: 92/100.** Low current input and moderate output rates,capped by long reasoning/failure costs and provider/tool differences; no free tier assumed.[2][3]
- **Overall Score: 72/100.** Half-up mean `(55 + 73 + 76 + 84 + 70) / 5 = 71.6`;cost excluded. Best fit: bounded multimodal/code tasks with explicit native-window and serving-provider expectations.

### Research trail and sources

Fresh Bing official query returned unrelated news;Google independent query an interstitial;DuckDuckGo exact context/pricing query located actual primary/gateway leads. Full exact122B language/vision columns,footnotes,YaRN and mode/output guidance inspected;exact measured AA payload and actual gateway routes checked. Guessed exact Vals profile404;no sibling or peer scores substituted.

[1]: https://huggingface.co/Qwen/Qwen3.5-122B-A10B/raw/main/README.md "Exact primary architecture,native/YaRN context,full122B benchmark columns,footnotes and operating recipes"
[2]: https://artificialanalysis.ai/models/qwen3-5-122b-a10b "Exact selected Reasoning measured record,independent tasks/calibration/context/vision/runtime and cost"
[3]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-122b-a10b/endpoints "Actual February24 backend,current paid rates,precision,limits and route-specific tools"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact primary table-column and footnote inspection,selected independent evaluator and current exact serving-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
