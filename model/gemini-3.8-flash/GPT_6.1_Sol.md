# Gemini 3.8 Flash — findings by GPT-6.1 Sol

- Source: Google DeepMind / `gemini-3.8-flash`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** General-purpose multimodal reasoning workhorse built on 3.7 Flash, trained for more diligent long-running agents. Cyber and TTS are separately named routes; their specialized results are not credited here.
- **Provider / access:** Gemini API, AI Studio, Antigravity and Gemini Enterprise; consumer app access via Google AI Pro/Ultra per launch. Native Gemini API, with gateway Chat Completions available through OpenRouter.
- **Release / knowledge:** September 2, 2026; March 2026 cutoff, but Google warns some domains remain at January 2025 knowledge.
- **IDs:** `gemini-3.8-flash`; OpenRouter `google/gemini-3.8-flash`. Current Zen Free route not verified.
- **Context window:** Official up to 1M context, 64K text output; OpenRouter search listing specifies 1,048,576 and 65,536 respectively.
- **Modalities:** Text/image/audio/video/document perception, text output; reasoning, tool use, search and computer-use workflows. No native generated speech/image/video attributed to the standard ID.
- **Pricing (as of 2026-11-03):** Official introductory $0.75 input / $3.75 output per million through December 31, 2026; $1.50/$7.50 from January 1, 2027. Reasoning uses billable tokens. eesel describes a quota-limited free lane and $0.075 cache reads, but these additional rates/terms were not directly checked against the current price table; not treated as universal free access.
- **Architecture:** Proprietary; based on 3.7 Flash, undisclosed parameter counts.

### Raw benchmarks found

Agent / tool use:

- Google model card: Terminal-Bench 2.1 **89.4%**, Terminal-Bench 4.0 **19.1%**, GDPVal-AA v2 **1545 Elo**, Vals Finance Agent v2 **61.4%**, Harvey Legal Agent all-pass **10.0%**, OSWorld 2.0 partial with batch tool **59.0%**.
- Vals current independent measurements: Terminal-Bench 4.0 **19.70% ±2.31**, Finance Agent v2.1 **65.76% ±2.04**, HLAB-Vals-1.1 **12.08% ±2.58**, SRE Bench **11.07% ±1.94**, CUA-bench **4.17%**. Different legal/finance versions cannot be interpreted as simple repeat measurements.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Google HLE-Verified **54.9%**, LABBench2 **86.2%**, BioMysteryBench **88.8% human-solvable / 56.5% human-difficult**.
- Vals GPQA Diamond **94.44% ±1.48**, MMLU Pro **90.22% ±0.29**, ProofBench v1.1 **48.00% ±5.02**, MysteryMechanism **36.49% ±3.24**, Terminal-Bench-Science **8.57% ±3.37**. BioMysteryBench aggregate **62.22% ±1.70** is not either Google subset score.
- Vals Index **55.95% ±1.14**, rank **18/32**, cost **$5.026/test**. eesel's launch article quotes AA Index **59** and **$0.58/task**, a historical secondary report; the current AA search result says **31**. Index revision/snapshot differences are unresolved here and neither figure is used as a universal current intelligence percentage.
- CritPt and exact hallucination rate: no verified public score found.

Coding:

- Google DeepSWE v1.1 **73.7%**, slightly below its Opus 5 comparator **74.0%**.
- Vals LiveCodeBench **89.48% ±0.90**, SWE-bench linked row **80.00% ±1.79**, Code Migration v1.1 **38.65% ±3.65**, Vibe Code Bench v1.1 **78.65% ±3.88**, ProgramBench **1.00% ±0.70** fully resolved; SWE-bench Multimodal **40.83% ±2.25**. No verified SWE-Pro score found.

Long context / multimodal:

- Google GDP.PDF all-pass **35.0%**, CharXiv reasoning **86.2%**, LVBench **87.8% agentic / 87.1% static**; Vals MMMU Pro **89.08% ±0.75**. No verified MRCR/RULER edge-window score found in retrieved sources; document comprehension is not proof of lossless million-token retrieval.

### Comparison, conflicts and practical limits

Official and independent Terminal-Bench 4.0 agree near 19–20%; the 89.4% older 2.1 score must never replace it. eesel's table labels DeepSWE a top spot with Opus lower, but the official numeric table actually places 73.7 below 74.0; prefer primary numbers. Its high throughput/slow-first-token discussion is useful historical reporting, not a fresh latency measurement. The same article quotes promotional/free pricing, so its phrase “free to switch” must not imply every API call is free.

Google explicitly says gains use more thinking and iterative tool calls and recommends retaining 3.7 for efficiency-first workloads. A fixed token rate does not imply a fixed cost per completed task. The model card acknowledges hallucinations, slowness/timeouts and weaker multilingual safety than 3.7. Cyber-specific recall/patching scores are for the restricted Cyber route, not the generally available model. Near-leading legal all-pass is still only 10%, not production-ready legal autonomy.

### Normalized scores (1–100)

- **Tool use: 84/100.** Good finance and older terminal evidence, capped by independent hard-terminal, SRE and CUA failures.
- **Reasoning: 87/100.** Strong GPQA and HLE-Verified, but weaker proof and autonomous-science evidence limits broad claims.
- **Context window: 94/100.** Million-token capacity plus document tests; missing edge-window retrieval verification prevents higher confidence.
- **Multimodal: 94/100.** Broad perception and strong measured chart/video/visual reasoning; output remains text.
- **Coding: 86/100.** Strong DeepSWE and competitive programming; migration and fully resolved long-horizon results expose practical limits.
- **Cost efficiency: 91/100.** Low promotional prices, tempered by token-heavy reasoning, fees and scheduled doubling.
- **Overall Score: 89/100.** Half-up mean of 84, 87, 94, 94 and 86 is 89; best for economical supervised multimodal workflows rather than unrestricted autonomous engineering.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct searches plus official model card and launch, independent Vals measurements and a separate review. No peer findings read; normalized scores are interpretations.
- Search queries: `"Gemini 3.8 Flash" Google official benchmarks`; `"Gemini 3.8 Flash" independent Artificial Analysis Vals review`; `"Gemini 3.8 Flash" pricing context output limitations`.
- Reference URLs:
  - [Official model card and full benchmark table](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Official launch, promotional expiry and Cyber distinction](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Vals independent measurements](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [eesel historical independent review](https://www.eesel.ai/blog/gemini-3-8-flash)
  - [AA current search-discovered model record](https://artificialanalysis.ai/models/gemini-3-8-flash)
