# MAI-Code-1.1-Flash — findings by GPT 6.1 Sol

- Source: Microsoft AI / `mai-code-1.1-flash`, exact August2026 revision.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)
- Confidence: **Provisional overall**, particularly general reasoning: exact public evidence is predominantly publisher-run coding and visual-coding evaluation.

## Model card

- **Name:** MAI-Code-1.1-Flash, distinct from original1-Flash and parent MAI-Thinking-1. The primary web URL still contains `mai-code-1-flash`, but its displayed product is1.1; the exact **1.1 PDF** is used for specifications/results.[1][2]
- **Short description:** Proprietary sparse-MoE coding model trained around GitHub Copilot's production workflow, adding image-to-code support and improved CLI efficiency. Best evidenced for everyday repository repair,terminal work and screenshot-driven development.[1][2][3]
- **Provider / access:** Current GitHub Copilot **`mai-code-1.1-flash`**, GA in GitHub's supported-model table; VS Code,CLI and other supported Copilot clients depend on plan/policy. The launch-era PDF's “CLI planned” wording is superseded by current docs/updated primary article. No authenticated inference,standalone public Azure/OpenRouter route or free Zen ID verified; an OpenRouter exact candidate404 is not proof of global absence.[1][3][4][5]
- **Release / knowledge:** **2026-08-11** release, **December2025 pretraining cutoff**, trainingMarch–August2026. October7 article update adds on-device news; it is not the base1.1 release date.[1][3]
- **Architecture / distribution:** **138B total/5B active**, transformer self-attention/sparse MoE,derived from MAI-Thinking-1 compressed midtraining checkpoint,with proprietary product/service terms. October7 primary update announces **3-bit local deployment,more than120GB RAM recommended,full256K context**, and experimental Copilot app/CLI/VS Code integration **by endOctober**. This is not an Apache/MIT open-weight licence or proof every account already has local integration. Official HF search returned no matching Microsoft checkpoint; the public GitHub repo contains release/feedback material,not a verified freely redistributable weights distribution.[1][2][3][6]
- **Context / output:** Primary **256K context**. Models.dev exact Copilot record **256,000 total/128,000 input/128,000 output** is secondary route metadata,not a primary promise of256K input plus128K generation. No exact retrieval-quality benchmark found.[1][7]
- **Modalities / tools / reasoning:** Primary **text,image→text**,English; screenshot/diagram/UI understanding with agentic tools and adaptive solution-length reasoning. No verified native audio/video/non-text generation. Models.dev lists PDF and low/medium/high effort/structured output; **PDF-native semantics and full effort contract not verified in primary docs**, so not scored as additional modalities.[1][2][6][7]
- **Pricing (2026-10-21):** Current GitHub cloud **$0.20 input/$1.20 output/$0.02 cached input per1M**, metered in AI credits **1credit=$0.01**,plan allowances and additional usage apply. Original PDF “pricing to be finalized” is stale relative to current billing docs. Primary says **no per-inference charges for local model calls**, but hardware,eligibility,product terms and cloud escalation remain separate. No unrestricted free hosted API tariff established; cost score below evaluates the cloud service used for published numeric benchmarks.[1][2][3][5]

### Raw benchmarks found

**Attribution:** All six pages of exact **MAI-Code-1.1-Flash model card** inspected,including actual page5 tables/methodology. Published task results are **vendor-run in VS Code/GitHub Copilot production harness**,repository context,tool calls and verification included; same settings for comparison columns. Token usage is **average per completed task**,not necessarily output-only or expected total cost per attempted task. Attempt/turn budgets and independent reproduction not disclosed in the inspected card.[1]

Agent / coding:

- **SWE-bench Verified72.6%,8.6K tokens/completed task; Terminal-Bench2.1 62.9%,17.0K tokens/completed task**. Both exact1.1 vendor results,not current independent AA/Vals terminal accuracy.[1]
- Previous1-Flash in the same table **SWE71.6%/10.8K; TB2.1 51.7%/14.2K**. Therefore terminal improvement is approximately **21.7% relative**,or **11.2 percentage points**,while terminal tokens/completed task actually increase. The headline “25% fewer tokens” is a broader production claim,not a universal property of each benchmark row.[1][3]
- Vendor internal **Text2WebApp74.1%/17.1K tokens; Screenshot2WebApp42.1%/10.5K**, plus **Vision2Web Level3 11.5%/15.1K**. Internal app creation,public-style repair and image-to-code tasks have different definitions; the internal74.1 is not SWE or independent Vibe Code.[1]
- Primary production claims versus1.0: **.NET15% improvement /code survival+4% /return visits+9% /token streaming25% faster /25% fewer tokens**. These are vendor relative telemetry/efficiency claims without full denominators,confidence intervals or a controlled tokens/s figure,not percentage-point accuracy gains.[3][6]
- No verified exact Claw-Eval/ClawProBench,Tau2/Tau3,GDPval,AutomationBench,MCP Atlas,Toolathlon,SWE Atlas,TB4,DeepSWE,LCB,SciCode or independent persistent-app success found. BenchLM's **three source-displayable rows include TB2.1 twice in two categories** and trace to the same Microsoft PDF; they are not three independently measured benchmarks.[1][8]

Reasoning / knowledge:

- No verified exact1.1 GPQA,HLE,AIME,CritPt,AA Intelligence Index or factual-calibration score found. The1.1 PDF directs readers to the **original1-Flash** card for general benchmarks; that pointer does **not** establish identical1.1 measurements. No predecessor/MAI-Thinking result is imported.[1]
- Multi-step engineering is evidenced by the exact terminal/repair/app outcomes above,which is a **limited reasoning proxy** rather than a measured broad academic reasoning score. The provisional normalized reasoning score explicitly reflects this narrow scope; it is not a fabricated missing-benchmark value.[1]

Multimodal / context / local execution:

- Exact image capability has task evidence **Screenshot2WebApp42.1% and Vision2Web Level3 11.5%**,not merely feature metadata. No exact general MMMU/OCR/audio/video benchmark found; low difficult visual-to-web success limits claims beyond screenshot-assisted coding.[1][2]
- **256K is verified capacity**,but no exact MRCR/RULER/LCR/full-window retention measurement found. A large codebase can still require tool retrieval and harness context management.[1]
- Primary October7 local3-bit update claims performance **comparable** to full precision on SWE Verified/TB2.1; no separate exact quantized scores,latency or controlled memory-overhead table supplied there. Cloud72.6/62.9 results are not silently relabelled local3-bit measurements; free local inference does not prove cloud-equivalent whole-workflow cost.[1][3]

### Normalized scores (1–100)

- **Tool use: 68/100.** Exact production-harness terminal62.9% and tool-mediated repair show useful coding agents; capped by vendor-only evidence and missing broad banking/office/long-horizon validation.[1]
- **Reasoning: 63/100.** **Low-confidence engineering proxy** from repair/terminal/app tasks; capped by no exact general reasoning/calibration results and no inherited predecessor scores.[1]
- **Context window: 76/100.** Primary256K tier,with lower secondary input cap and no verified long-window retrieval bonus.[1][7]
- **Multimodal: 62/100.** Genuine image-to-code input with measured screenshot tasks; capped by Vision2Web11.5%,narrow perception coverage and text-only output.[1][2]
- **Coding: 77/100.** Useful SWE72.6% and bounded app outcomes,especially in native Copilot harness; capped by absent independent repair/new-terminal/persistent-project evaluation.[1][8]
- **Cost efficiency: 93/100.** Low verified cloud/cached rates and reduced completed-task token use on SWE; plan charges,task failures and incomplete independent efficiency data cap it. Local per-call zero charge is a separately scoped product option.[1][3][5]
- **Overall Score: 69/100.** **Provisional** half-up mean `(68 + 63 + 76 + 62 + 77) / 5 = 69.2`; cost excluded. Best fit: budget-conscious Copilot coding and screenshot-to-prototype work,not independently established general-reasoning parity.

### Research trail and sources

Fresh Bing official-benchmark query returned unrelated news; Google context/pricing query an interstitial; DuckDuckGo found exact Microsoft product/update/card and secondary benchmark leads. Additional exact1.1 GPQA query returned no results; local-distribution query led back to official primary announcements. Downloaded/read complete six-page1.1 PDF,inspected official repo and current Copilot support/billing,secondary metadata and BenchLM provenance. Exact AA candidate,V als candidate and OpenRouter candidate404 are logged as path failures only; no unrelated model substituted. No peer research read.

[1]: https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF "Exact six-page1.1 card,138B/5B,cutoff,256K,full benchmark/token tables and production-harness methodology"
[2]: https://microsoft.ai/models/mai-code-1-flash/ "Current displayed1.1 product,native screenshots and separately announced on-device integration"
[3]: https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/ "October7 local3-bit update,120GB-plus recommendation,pending client rollout and relative production claims"
[4]: https://docs.github.com/en/copilot/reference/ai-models/supported-models "Current1.1 GA availability,supported surfaces and policy dependence"
[5]: https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing "Current exact1.1 cloud/cache rates,credits,allowances and extra usage"
[6]: https://raw.githubusercontent.com/microsoft/MAI-Code/main/README.md "Official release identity,image support and native Copilot integration"
[7]: https://models.dev/api.json "Exact github-copilot mai-code-1.1-flash secondary limits and unconfirmed PDF/effort metadata"
[8]: https://benchlm.ai/models/mai-code-1-1-flash "Unranked coverage,duplicate-category terminal row and primary-PDF attribution,not independent reproduction"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,complete exact-version primary PDF/table inspection,current provider billing/support and secondary provenance checks. Scores are provisional normalized1–100 interpretations,not official vendor scores; general reasoning uses an explicitly limited engineering proxy.
- Future sources: add a separate signed file alongside this report using the same headings.
