# Claude Haiku 5.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-haiku-5-5`.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Haiku 5.5.
- **Short description:** Anthropic's October 2026 small text/image model for inexpensive high-volume work and narrowly scoped agents. Adjustable effort adds substantial reasoning depth, but max-effort runs can be very verbose and slow before answering.[1][2][4][6]
- **Provider / access:** Native Claude **Messages API**, plus AWS, Google Cloud and Microsoft Foundry. Native fixed ID **`claude-haiku-5-5` has no dated suffix or separate alias**; Bedrock `anthropic.claude-haiku-5-5`; gateway `anthropic/claude-haiku-5.5`, backend `anthropic/claude-haiku-5.5-20261007`. Gateway Chat Completions is a transport, not a different native model. No free Zen ID verified.[2][3][7]
- **Release / knowledge:** **2026-10-07**; reliable and training-data cutoff **June 2026**. Official status active; retirement commitment is **not sooner than October 7, 2027**, not a promised shutdown date.[2]
- **Context window:** **1M total / 128K synchronous maximum output**, with actual gateway **1,000,000 / 128,000**. Native Message Batches can reach **300K output only with `output-300k-2026-03-24` beta**, not ordinary synchronous/gateway requests.[2][7]
- **Modalities / tools:** Native text/images → text; PDF/file understanding through the platform. High-resolution images support a larger visual-token budget than earlier Haiku. No native audio/video or non-text generation. Adaptive thinking defaults to **medium**; low/high/xhigh/max control depth. Manual `budget_tokens`, assistant prefill and various old sampling settings are incompatible. Computer/browser toolsets and structured outputs are integration features, not new modalities.[2][3]
- **Pricing (2026-10-20):** For prompts **up to 100,000 tokens**, per-million **$0.10 input / $0.50 output / $0.01 cache read / $0.125 five-minute cache write / $0.20 one-hour write**. **Over 100,000 prompt tokens, the request moves to $0.50 / $2.50 / $0.05 / $0.625 / $1.00**, respectively: a fivefold tier jump. Batch input/output are 50% discounted; hosted tools/platform surcharges can add cost. Exact gateway rates corroborate both tiers.[1][2][7]
- **Tokenizer / cost caveat:** Official docs say approximately **30% more tokens for the same text** than Haiku 4.5; long images also cost more visual tokens, and earlier thinking blocks remain in context. Lower per-token price does not translate directly to the same per-document discount or usable text capacity. Subscription API credits require a paid plan and are finite, not a free model tariff.[1][2][3]
- **Architecture:** Proprietary, no open weights or verified parameter/MoE disclosure. Official migration docs say **no server-side fallback**; mixed-model Devin Fusion performance is not Haiku-alone performance.[1][3]

### Raw benchmarks found

**Attribution:** AA's inspected exact record is **Claude Haiku 5.5 (Max)**, UUID `7d064a11-6e78-4030-b535-cdf940615041`, release October 7, with a measured current index. Vals defaults to Anthropic, max compute, 128,000 output, temperature 1. Its runs explicitly use no refusal fallback. Official launch results use the publisher's setup and are not treated as identical independent runs; the linked system card exceeded the fetcher's 5MB limit, so uninspected methodology is not asserted.[1][4][5]

Agent / tool use:

- **Terminal-Bench 4.0:** **39.2% vendor**, **32.83% AA max**, **36.36% ± 2.31 Vals max**. Distinct harnesses/runs, not a single confirmed accuracy. Terminal-Bench-Science **20.0% AA / 10.0% ± 3.61 Vals**.[1][4][5]
- **GDPval-AA v2.1:** vendor **1620 Elo**, direct current AA **1618.33 Elo**. **AA-Briefcase v1.1:** vendor **1578**, AA **1576.85 Elo / 52.32% rubric pass**; analytical-quality Elo **1903.1** and presentation **1430.23** reveal uneven deliverable quality.[1][4]
- **AutomationBench-AA 35.41% partial score / AnalystAgent 53.75% AA**. Not interchangeable with all-pass workflow success.[4]
- **OSWorld 2.1 offline subset 72.4% vendor**; this is not OSWorld 2.0 or a guarantee of live browser reliability. Native browser/computer support is documented separately.[1][3]
- Vals current **Finance Agent v2.1 65.37%**, **EMB v1.1 65.48%**, **Legal Research 43.27%**, **Harvey legal v1.1 4.17%**, **SRE Bench 5.72%**. Professional workflow tails remain weak despite strong aggregate deliverables.[5]
- **TB2.1 / Tau3-Banking / Tau2 / Claw-Eval / ClawProBench / MCP-Atlas / Toolathlon:** no verified exact-model score found in inspected evidence. AA selected legacy fields are null, not zero.[4]

Reasoning / knowledge:

- **HLE:** vendor **45.9% without tools / 57.4% with tools**, independent AA **44.39%**. Tool-augmented and unassisted results remain separate.[1][4]
- **CritPt 18.86% AA**, **ProofBench v1.1 89.00% ± 3.15 Vals**, **MysteryMechanism 35.13%**, **BioMysteryBench 70.37%**. No verified exact GPQA/AIME found; AA selected fields are null.[4][5]
- **AA Intelligence Index 43.395**, measured; **Vals Index 58.71% ± 1.28, #10/22 current**. Its October 8 note reported **54.31%, #16/45**, a historical suite/cohort snapshot rather than today's score. No cross-index percentage conversion.[4][5]
- **Omniscience:** **36.38% accuracy / 40.42% hallucination / 10.6667 reliability index AA**. Good abstention/calibration relative to some peers does not supply missing factual coverage.[4]

Coding / context / vision:

- **FrontierCode 1.1 Main 46.4% vendor**. The **66.2** Devin Fusion testimonial includes **Opus 5.5 as lead** and Haiku as sidekick; it is explicitly excluded as a standalone Haiku score.[1]
- **SciCode 54.98% AA**; Vals **Vibe Code Bench v1.1 90.44% ± 1.73, #3/115**, but **VCB 1–100 20.41%**, **Code Migration v1.1 52.36%**, **ProgramBench 2.50% fully resolved**, **IOI 47.28%**. The greenfield-app headline does not establish sustained engineering reliability.[4][5]
- **SWE-bench Multimodal 43.96% Vals**. No verified exact SWE Verified/SWE-Pro/DeepSWE/LiveCodeBench found in inspected primary/evaluator material.[5]
- **LCR 82.67% / MLCR 63.33% AA**; no independently verified ≥98% full-window MRCR/RULER result. Million-token capacity is not near-perfect million-token recall.[2][4]
- **Chartography 46.4% no tools vendor**, **GDP.pdf 20.8% all-pass AA**. AA selected MMMU-Pro is null; no score borrowed from other Claude models.[1][4]

Runtime / independent practical check:

- AA max median **234.14 output tokens/s**, but **244.84 s to first chunk**, **435.18M evaluation output / 397.59M reasoning tokens**, weighted **$0.2128/task**. Fast output throughput does not mean immediate answers or low end-to-end spend.[4]
- Vals' different workload reports **$3.173/test / 49 min 48 s**, zero fallback. Nominal token price alone misses the workload/long-prompt/effort effects.[5]
- Simon Willison independently tested all five effort levels: low SVG example **7 s / 0.0936 cents**, max **5 min 9 s / 3.3826 cents**. These are individual observed requests, not standardized averages. His token counter found about **1.25×** tokens on one long prompt versus the vendor's approximate 1.30× general estimate; different samples, not a contradiction.[6]

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval/Briefcase and terminal/computer evidence support useful narrow agents, capped by AutomationBench 35.41%, weak legal/SRE tails and missing banking replication.[1][4][5]
- **Reasoning: 86/100.** HLE 44.39%, CritPt 18.86% and strong ProofBench support substantial max-effort depth, capped by limited factual coverage and evidence gaps on GPQA/AIME.[4][5]
- **Context window: 95/100.** Verified 1M capacity and useful LCR/MLCR, without near-perfect full-window retrieval; newer tokenizer reduces equivalent text capacity.[2][3][4]
- **Multimodal: 81/100.** Native high-resolution image/PDF understanding with Chartography, document and visual-SWE evidence; no native audio/video/non-text output, and modest document all-pass results cap breadth.[1][2][4][5]
- **Coding: 87/100.** Strong independently measured Vibe/SciCode and useful FrontierCode support bounded engineering; persistent-app 20.41%, ProgramBench 2.50% and terminal variation cap autonomy.[1][4][5]
- **Cost efficiency: 93/100.** Excellent short-prompt paid rates, but fivefold pricing above 100K, tokenizer inflation, thinking usage and observed multi-minute max latency materially limit headline savings.[1][2][3][4][5][6]
- **Overall Score: 86/100.** Half-up mean `(82 + 86 + 95 + 81 + 87) / 5 = 86.2`; cost excluded. Best fit: scoped image/document and coding agents with calibrated effort and explicit prompt-tier budgeting.

### Research trail and sources

Three fresh attempts: Bing `"Claude Haiku 5.5" official benchmark` returned no exact result; Google `"Claude Haiku 5.5" independent review benchmark` an interstitial; DuckDuckGo `"Claude Haiku 5.5" pricing context model` supplied primary/evaluator leads. Direct launch, platform/migration docs, AA exact selected record, Vals, gateway and a hands-on independent review were compared. The linked system-card fetch exceeded 5MB; no unseen figures or run settings were invented. A guessed review slug returned 404 before the actual slug resolved. No peer findings were consulted.

[1]: https://www.anthropic.com/news/claude-haiku-5-5 "Official launch, vendor benchmarks, mixed-model testimonial and two-tier pricing"
[2]: https://platform.claude.com/docs/en/models/haiku-5-5/overview "Official IDs, medium default, limits, tokenizer, cutoff and pricing"
[3]: https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide "Fixed identity, tokenizer/thinking accounting, parameter restrictions and no fallback"
[4]: https://artificialanalysis.ai/models/claude-haiku-5-5 "Exact selected Max public record and measured benchmark/runtime/cost data"
[5]: https://www.vals.ai/models/anthropic_claude-haiku-5-5 "Independent current max-effort results and dated launch note"
[6]: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/ "Independent actual effort-specific SVG timings, costs and token-count sample"
[7]: https://openrouter.ai/api/v1/models/anthropic/claude-haiku-5.5/endpoints "Live backend ID, context/output and short/long-prompt rates"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, primary identity/pricing/migration checks, directly attributed independent evaluator records and practical third-party examples. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
