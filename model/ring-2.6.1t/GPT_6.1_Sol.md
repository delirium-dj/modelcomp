# Ring 2.6 1T — findings by GPT 6.1 Sol

- Source: inclusionAI, `inclusionAI/Ring-2.6-1T`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Ring-2.6-1T; preserved project slug `ring-2.6.1t`. “1T” is parameter scale, not evidence of a Ring 2.6.1 version.
- **Short description:** InclusionAI's open-weight text reasoning/agent model with `high` and `xhigh` effort. It is distinct from instant-response Ling 2.6 and the later Ling 3.1 Flash.[1]
- **Provider / access / IDs:** Exact downloadable weights `inclusionAI/Ring-2.6-1T`; self-hosted Chat Completions. Current OpenRouter normal **and** `:free` metadata paths return **empty endpoint arrays**. Current Zen/Vercel catalogs contain no exact Ring entry; secondary models.dev lists Requesty/ZenMux routes. Those listings are not authenticated inference or guarantees that every old API is unavailable.[2][3][7]
- **Release / knowledge:** AA release **2026-05-08**; shared technical report v1 **June 13**. Exact primary knowledge cutoff unverified; conflicting secondary cutoff fields are not silently promoted to fact.[4][6][7]
- **Architecture / license:** **~1T total / 63B active**, MIT open weights, 80 layers, 256 routed/top eight plus one shared expert, hybrid Lightning Attention/MLA stack. Released config is FP8 compressed-tensors and **131,072 native positions**, with `rope_scaling: null`.[1][5][6]
- **Context:** Primary download table explicitly **128K →256K with YaRN**. Runtime cookbook confirms separate YaRN configuration is needed; AA describes the evaluated model as **262,144**. Rating uses the documented extended 256K profile, **not default native 256K or million-token capacity**. The local metadata's `256,144` number is not the standard extended value.[1][4][5][6]
- **Modalities / controls:** **Text in/out**, tool calling and high/xhigh reasoning. SGLang recommends `glm` tool parser for Ring's XML-like argument syntax and `deepseek-r1` reasoning parser; its top-level high request differs from the explicit template `xhigh` path. No vision imported from generated artifacts.[1][5]
- **Deployment:** Original card's four-node/eight-GPU-per-node recipe is an example, not a minimum. Updated runtime cookbook reports tested single-node **eight H200/B200 or four GB300** recipes. Memory, precision and context remain configuration-specific.[1][5]
- **Pricing/free scope (2026-10-22):** AA advertises **$0.30 input/$2.50 output per 1M**, with cache price **null** in the exact payload; this is evaluator pricing metadata, not an independently billed native tariff. Requesty catalog agrees; ZenMux lists a discounted alternative. No current functioning free API was verified: exact OpenRouter free endpoint array is empty and old Zen free metadata is deprecated. MIT weights still require inference hardware.[2][3][4][7]

### Raw benchmarks found

**Primary model card**, effort-specific vendor results:[1]

- **High:** PinchBench **87.60**, ClawEval **63.82**, Tau2 Telecom **95.32**.
- **Xhigh:** ARC-AGI-2 **66.18**, AIME 2026 **95.83**, GPQA Diamond **88.27**. Do not pool these with high-effort agent results as one universal inference setting.

**Shared technical report §3.3.2, correct Ring-only columns**, which differ from some README figures:[6]

- **Xhigh:** AIME 2026 **95.78%, Avg@64**; HMMT-Feb26 **93.47%, Avg@64**; IMOAnswerBench **86.12%, Avg@8**; **LCB-v6 86.95%, Avg@4**, dated **August 2024–May 2025** task window; **GPQA 85.89%, Avg@16**; **ARC-AGI-2 66.18%, pass@2**. Average repeated-trial accuracy is not best-of-k success.
- **High:** AIME **87.86%**, GPQA **76.10%**, LCB-v6 **76.71%**; **SWE Verified 74.00%, SWE-Pro 53.76%**, both using **Claude Code scaffolding**; PinchBench **87.60 Avg@3**, **ClawEval 63.82, April-24 version, `pass^3`**, not pass@3.
- **Tau2 average high 84.26% / xhigh 83.44%**; Telecom **96.71% /94.96%**. Those differ from the README's 95.32 Telecom; different source/configuration figures are preserved rather than reconciled by guessing.
- Report's **MRCR/instant-model long-context rows belong to Ling**, and pretrained base tables measure another stage. Neither is transferred to Ring's task accuracy.

**Artificial Analysis independent xhigh record**, UUID `eb4ba465-3fcd-4065-9fe2-e8225e7b2c6c`, `ring-2-6-1t`; **Intelligence Index 16.6172, measured**:[4]

- **Tau2 92.3977%**, banking **17.9381%**, **TB2.1 43.0712%**, **TB4 0.5051%**. Thus the local claim that no terminal result was ever published is not sustained by the live evaluator record.
- **GDPval-AA 742.89 Elo**, AA-Briefcase **657.38 Elo**, rubric **10.9295%**; AutomationBench **0.7179% partial**. Tool compliance on one domain does not establish broad business execution reliability.
- **GPQA 85.6566%**, **HLE 21.5941%**, **CritPt 3.7143%**, **SciCode 45.0231%**, **LCR 70.0%**, medical LCR **3.8889%**, GDP.pdf **3.8% all-pass**. Current AA flags SciCode/CritPt under review.
- Omniscience index **−37.7**, accuracy **25.7%**, hallucination rate **85.3297%**; IFBench **44.5578%**. Negative index is not negative accuracy; the hallucination denominator is evaluator-defined.
- Runtime **114.993 output tokens/s**, **3.8246 s to first chunk**; weighted Intelligence Index task cost **$0.2872** on its own token/cache recipe, not a universal customer task bill.

**Runtime validation**, not a generic production benchmark: SGLang reports **GSM8K 99% on 200 examples**, `high`, **2,048 output-token cap**, on each tested hardware recipe. That subset result does not imply 99% full-suite/world-task accuracy. Its random-serving throughput distinguishes concurrency one from aggregate concurrency 100.[5]

**Limits:** No exact independent SWE/LCB, native perception or ≥98% complex full-window retention verified. Unlike the missing AA LCB field, the published report's LCB score is real but vendor-reported and effort/window-specific.

### Normalized scores (1–100)

- **Tool use: 56/100.** Independent Tau2 and TB2.1 plus real primary Claw/Pinch evidence support agents, but banking, very weak TB4/business workflows and effort/harness variation cap reliability.[1][4][6]
- **Reasoning: 76/100.** Independent GPQA 85.66% and HLE 21.59% plus primary competition math support capable reasoning, with low CritPt and poor factual reliability limiting frontier breadth.[4][6]
- **Context window: 76/100.** Documented **configured YaRN 256K** band; native released config is 128K and no near-perfect retention claimed.[1][4][5]
- **Multimodal: 15/100.** Text-only model; no native image/audio/video evidence.[1][2]
- **Coding: 72/100.** Primary high-effort SWE 74%/Pro 53.76%, xhigh dated LCB and independent SciCode support practical coding, capped by weaker terminal/business transfer and incomplete independent repository coverage.[4][6]
- **Cost efficiency: 88/100.** Published evaluator/catalog $0.30/$2.50 rates suggest inexpensive paid access, with uncertainty around route availability, effort/token use and no verified working free serving. Weight licensing is not free compute.[2][3][4][7]
- **Overall Score: 59/100.** Half-up mean `(56 + 76 + 76 + 15 + 72) / 5 = 59.0`; cost excluded. Best fit: configurable text reasoning/agents with explicit deployment and effort control.

### Fresh search trail and sources

- Bing RSS [`"Ring-2.6-1T" benchmark`](https://www.bing.com/search?format=rss&q=%22Ring-2.6-1T%22+benchmark): unrelated security-doorbell pages.
- Google [`"Ring-2.6-1T" inclusionAI`](https://www.google.com/search?q=%22Ring-2.6-1T%22+inclusionAI): JavaScript/access interstitial.
- DuckDuckGo [`"Ring-2.6-1T" benchmark`](https://duckduckgo.com/html/?q=%22Ring-2.6-1T%22+benchmark): real card/evaluator/runtime leads. Original model/config, Ring-specific report section and exact current endpoint arrays independently checked; no peer findings consulted.

[1]: https://huggingface.co/inclusionAI/Ring-2.6-1T/raw/main/README.md
[2]: https://openrouter.ai/api/v1/models/inclusionai/ring-2.6-1t/endpoints
[3]: https://openrouter.ai/api/v1/models/inclusionai/ring-2.6-1t:free/endpoints
[4]: https://artificialanalysis.ai/models/ring-2-6-1t
[5]: https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ring-2.6-1T
[6]: https://arxiv.org/html/2606.15079v1#S3.SS3.SSS2
[7]: https://models.dev/api.json
[8]: https://huggingface.co/inclusionAI/Ring-2.6-1T/raw/main/config.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact effort-specific primary/independent measurements, native/extended context separation, runtime recipe and endpoint/pricing checks. Normalized scores are interpretations, not official benchmark percentages.
