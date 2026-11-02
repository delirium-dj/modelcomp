# MiMo-V2.6-Flash — findings by GPT 5.6 Luna

- Source: Xiaomi/MiMo-V2.6-Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficient full-modality reasoning model for coding, automation, professional workflows, and high-frequency agents.
- **Provider / access:** Xiaomi MiMo Open Platform API (`mimo-v2.6-flash`), OpenRouter, OpenCode-compatible gateways, and downloadable `XiaomiMiMo/MiMo-V2.6-Flash-RL` weights.
- **Release / knowledge:** Released September 21–22, 2026; knowledge cutoff is not published.
- **IDs:** Hosted/API `mimo-v2.6-flash`; weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** 1,000,000 tokens; current OpenCode listings report maximum output around 131K tokens.
- **Modalities:** Text, image, audio, and video input; text output; reasoning and tool calling.
- **Pricing (as of 2026-11-02):** Xiaomi overseas real-time pricing is $0.14 input / $0.28 output per 1M tokens with $0.0028 cached input. Batch is $0.07/$0.14; domestic pricing is ¥1/¥2 on cache miss. Internet search is billed separately.
- **Architecture:** 309B total / 15B active sparse MoE with MIT-licensed weights, according to Xiaomi's technical material and current model listings.

## Raw benchmarks found

The official technical report supplies most capability rows; Artificial Analysis and BenchLM add independent measurements and expose substantial benchmark variance.

- BenchLM current profile: **54.78/100, #76 of 1,004**, with 24 of 724 benchmark rows covered.
- Toolathlon-Verified: **73.6%**; AutomationBench: **52.3%**; Agents' Last Exam: **27.6%**; OSWorld-Verified: **80.8%**; JobBench: **61.2%**.
- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.8%**; CyberGym: **95.1%**; ExploitGym: **6.0%**.
- DeepSWE: **67.9%**; ProgramBench: **26.0%**; AA-SciCode: **51.3%**.
- AA-MMMU-Pro: **73.1%**; AA-LCR: **74.3%**; CritPt: **12.0%**.
- Artificial Analysis Intelligence Index: **26.7%**; AA-HLE: **35.1%**; AA-Omniscience Accuracy: **27.2%**; hallucination rate: **52.2%**.
- OpenCode usage listing: roughly **3.8T tokens** in the recent measured week and rank #5 by model tokens, indicating meaningful real-world agent adoption; usage is not a capability benchmark.

## Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 87.6%, Toolathlon 73.6%, OSWorld 80.8%, and native tool calls support strong agent use; Terminal-Bench 4.0 and ExploitGym show variance.
- **Reasoning: 82/100.** AA-LCR 74.3% and the low AA Intelligence Index/HLE rows indicate useful reasoning but a clear gap to MiMo-Pro and frontier models.
- **Context window: 98/100.** The 1M-token window is verified and unusually valuable for a Flash model; no full-window retrieval curve was independently reported.
- **Multimodal: 88/100.** Full text/image/audio/video input is documented and AA-MMMU-Pro is 73.1%; text-only output and limited independent modality coverage cap the score.
- **Coding: 87/100.** Terminal-Bench 2.1 87.6%, DeepSWE 67.9%, and CyberGym 95.1% are strong, while ProgramBench and Terminal-Bench 4.0 are weaker.
- **Cost efficiency: 99/100.** $0.14/$0.28 with a 1M window and open MIT weights is exceptional for high-volume agents.
- **Overall Score: 88.2/100.** Mean of the five quality dimensions `(86 + 82 + 98 + 88 + 87) / 5 = 88.2`; best fit is low-cost, multimodal, long-context agent automation at scale.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Xiaomi's current API/pricing page and technical report, OpenCode Data, Artificial Analysis, and BenchLM's October 29 aggregation; vendor and independent harness results were retained separately, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo API pricing](https://mimo.mi.com/docs/en-US/price/pay-as-you-go)
  - [Xiaomi MiMo-V2.6-Flash OpenCode Data](https://opencode.ai/data/xiaomi/mimo-v2.6-flash)
  - [BenchLM MiMo-V2.6-Flash profile](https://benchlm.ai/models/mimo-v2-6-flash)
  - [MiMo-V2.6-Flash model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
