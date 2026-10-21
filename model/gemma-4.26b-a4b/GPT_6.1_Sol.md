# Gemma 4 26B A4B — findings by GPT 6.1 Sol

- Source: Google DeepMind / `google/gemma-4-26B-A4B-it`, reasoning configuration.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemma4 26B A4B, project canonical folder `gemma-4.26b-a4b`. Upstream26B is a parameter count; instruction-tuned model assessed, not base/PT,31B or12B Unified.[1]
- **Short description:** Sparse image/text model with25.2B total/3.8B active parameters. Low active compute does not mean all weights and long-context cache fit a4B model's memory budget.[1][2]
- **Provider / IDs:** Downloadable **`google/gemma-4-26B-A4B-it`**; current paid **`google/gemma-4-26b-a4b-it`** and actual **`:free`** catalog entry. Both reference backend20260403. Free AI Studio endpoint lists262,144 context/32,768 output and functions; no authenticated request or separate free Zen ID verified.[3][4]
- **Release / knowledge:** Primary **2026-04-02**, AA agrees; gateway creation/backend April3 is serving metadata, not a conflicting public launch. Primary training cutoff **January2025**; AA cutoff null.[1][2][5]
- **Context window:** Exact config **262,144 positions**, primary256K; AA rounds256,000. Actual free route262,144/32,768. Paid caps vary: Darkbloom131,072/32,768, DeepInfra262,144/16,384, BF16 Deka262,144/**235,929 advertised output**. Provider maxima are not universal tested generation lengths or additive to full input.[1][3][4][6]
- **Modalities / thinking / tools:** **Text/image/video frames/PDF-page understanding → text**, **no native audio** on26B, unlike12B/E2B/E4B. Config audio null, vision tower present. Native system/function/JSON support, thinking on/off via chat template; recommended temp1/top-p.95/top-k64. Provider tool-choice guarantees differ; do not assume every route's structured-output/tool support is identical.[1][2][4][6]
- **Pricing (2026-10-21):** Exact free endpoint **$0 input/$0 output**, with separate rate/availability limits. Paid per1M examples **Darkbloom$0.042/$0.22/cache$0.021**, **Deka BF16$0.06/$0.33/cache$0.04**, **DeepInfra FP8$0.07/$0.34**, **Google$0.15/$0.60**. Free access is not an unlimited SLA; OpenRouter's opt-in logging policy does not establish a blanket provider no-training/ZDR commitment. Self-host hardware is not free.[3][4][7][8]
- **Architecture / licence:** **25.2B total/3.8B active**,30-layer MoE,128 routed experts/top8 plus shared expert per primary card,1024 sliding attention interleaved with full layers,~550M vision encoder. **Apache2.0** stated by publisher/card, not inherited older Gemma terms. Exact config verifies MoE, expert count, context and absence of audio.[1][2][6]

### Raw benchmarks found

**Attribution:** Primary exact26B-A4B IT column, not adjacent31B/12B. AA selected **Reasoning UUID `6e1b44ff-c227-496b-aef4-19b70cd18c76`**, April2, matching weights. Composite **estimated**, selected individual benchmark observations kept separate. No exact Vals profile verified.[1][5]

Agent / tool use:

- Vendor **Tau2 average over3 domains68.2%**, independent AA **43.57%**, **Tau3-Banking11.96% /TB2.1 38.95% /IFBench72.45%**. Vendor/independent conditions differ, not a common score to average.[1][5]
- AA **GDPval565.75 Elo /Briefcase315.08 Elo**, **7.33% rubric pass /AutomationBench partial1.94%**. Good small-tool examples do not establish reliable professional workflow completion.[5]
- No verified exact TB4/Terminal-Science, Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA found. Nulls are not measured zeros.[5]

Reasoning / knowledge:

- Vendor **GPQA82.3% /HLE no-tools8.7%, with search17.2% /AIME2026 no-tools88.3% /MMLU-Pro82.6% /BigBench Extra Hard64.8% /MMMLU86.3%**. Search-assisted HLE is a separate condition.[1]
- Independent AA **GPQA79.19% /HLE19.32% /CritPt0.00% measured**, **Index16.672 estimated**. Different HLE harness/version conditions remain visible.[5]
- **Omniscience accuracy19.10% /hallucination86.44% /reliability−50.8333**; accuracy/hallucination denominators differ. AA exact AIME2025 field null, not replaced with2026.[5]

Coding / visual / long context:

- Vendor **LiveCodeBench v6 77.1% /Codeforces1718 Elo**; independent AA **SciCode40.05%**, plus38.95% terminal completion. No verified exact SWE Verified/Pro, DeepSWE or Vibe Code score found. Family/31B repair results not inherited.[1][5]
- Vendor **MMMU-Pro73.8% /MATH-Vision82.4% /MedXpertQA-MM58.1%**, independent **MMMU-Pro69.25% AA**. **OmniDocBench1.5 edit distance0.149, lower better**, not14.9% accuracy. No26B audio benchmark; sibling audio rows are explicitly blank.[1][5]
- Vendor **MRCR v2 eight-needle128K cumulative average44.1%**, AA **LCR65.67%**. No verified near-perfect full262K MRCR/RULER result. Native capacity is not retention quality.[1][5][6]
- AA hosted median **69.04tokens/s /1.007s first chunk**, recorded paid$0.10/$0.34/cache$0.05. No complete current token/task-cost total. Active3.8B does not guarantee a universal hardware-independent speedup over31B.[5]

### Normalized scores (1–100)

- **Tool use: 52/100.** Useful bounded function/instruction behavior and moderate terminal ability, capped by low banking/GDPval/Briefcase and1.94% automation partial score.[1][5]
- **Reasoning: 71/100.** Good efficient-model GPQA/AIME/HLE, capped by CritPt0, weak factual coverage/calibration and estimated composite.[1][5]
- **Context window: 76/100.** Exact262K native and actual free-route capacity, capped by44.1%128K retrieval and smaller caps on some providers.[1][3][6]
- **Multimodal: 81/100.** Native visual/video-frame/document understanding with direct metrics, capped by no audio/non-text output and uneven difficult visual reasoning.[1][5][6]
- **Coding: 68/100.** Good vendor contest code and independent SciCode, capped by modest terminal reliability and absent exact repair/full-app verification.[1][5]
- **Cost efficiency: 100/100.** Verified$0 endpoint under the project's tariff rule, with availability/rate/privacy scope and paid-route differences retained.[3][4][7][8]
- **Overall Score: 70/100.** Half-up mean `(52 + 71 + 76 + 81 + 68) / 5 = 69.6`; cost excluded. Efficient local/free visual-text assistant, with limits on broader autonomous engineering and professional execution.

### Research trail and sources

Fresh Bing RSS `"Gemma4 26B" benchmark official` returned unrelated links; Google exact-A4B independent benchmark query an interstitial; DuckDuckGo Gemma4/26B pricing query found actual paid/free catalog and primary Cloud leads. Exact26B IT model card/config, April2 original launch, selected AA Reasoning and live paid/free endpoint JSON inspected. Vals guessed exact-ID profile404. No adjacent family/peer scores or12B audio capabilities used to fill missing26B data.

[1]: https://huggingface.co/google/gemma-4-26B-A4B-it/raw/main/README.md "Exact26B IT architecture/benchmark column, no audio, source metric directions and January cutoff"
[2]: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/ "April2 launch, Apache2, functions/JSON, frame/video input and model-specific audio distinction"
[3]: https://openrouter.ai/api/v1/models/google/gemma-4-26b-a4b-it:free/endpoints "Actual zero-price AI Studio262K/32K exact-model endpoint"
[4]: https://openrouter.ai/api/v1/models/google/gemma-4-26b-a4b-it/endpoints "Current paid precision/cap/tool differences and exact route tariffs"
[5]: https://artificialanalysis.ai/models/gemma-4-26b-a4b "Exact selected Reasoning, estimated index and independent task/calibration/runtime observations"
[6]: https://huggingface.co/google/gemma-4-26B-A4B-it/raw/main/config.json "Exact262144-position,30-layer MoE/128-expert/vision config with audio null"
[7]: https://openrouter.ai/docs/guides/routing/model-variants/free "Free catalog entries have their own caps, rate/availability limits and prices"
[8]: https://openrouter.ai/docs/guides/privacy/data-collection "Gateway opt-in prompt logging/data use is distinct from provider-specific policy"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, exact primary IT card/config/launch inspection and selected independent evaluator/current paid-free provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
