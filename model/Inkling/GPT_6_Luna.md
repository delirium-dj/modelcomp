# Inkling — findings by GPT-6 Luna

- Source: Thinking Machines Lab/Inkling
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight 975B multimodal MoE model, with 41B active parameters. It is the larger Inkling checkpoint and is distinct from Inkling-Small.
- **Provider / access:** Released by Thinking Machines Lab under Apache 2.0. The official card offers Tinker access and downloadable weights; the company also lists third-party API deployments through Together AI, Fireworks, Modal, Databricks, and Baseten. OpenRouter currently exposes `thinkingmachines/inkling` and `thinkingmachines/inkling:free`; no stable public Tinker model ID was verified.
- **Release / knowledge:** Released July 15, 2026, per the [official model card](https://thinkingmachines.ai/model-card/inkling/) and [announcement](https://thinkingmachines.ai/news/introducing-inkling). No training-data or knowledge cutoff was published; the company says it pretrained on 45T tokens across text, images, audio, and video.
- **IDs:** Hugging Face `thinkingmachines/Inkling`; OpenRouter `thinkingmachines/inkling` and `thinkingmachines/inkling:free`. Tinker is an official API route but the reviewed public documentation does not specify a stable model ID.
- **Context window:** Up to 1M tokens natively (official card). The release announcement initially listed Tinker context options of 64K and 256K; OpenRouter currently lists 524,288 tokens on its paid route and 1,048,576 on its free route. Provider context limits differ from the model's published maximum.
- **Modalities:** Text, image, and 16 kHz WAV audio input; text output. The model card recommends audio clips up to 20 minutes and image dimensions of 40–4096 px. Although video is listed among training-data types, video inference input was not verified.
- **Pricing (as of 2026-10-29):** Provider- and route-dependent. OpenRouter's live catalog lists $1.00 input / $4.05 output per 1M tokens, with $0.17 cached input; it also exposes a $0 `:free` route. The free tier is third-party-provider-controlled and may be limited; no privacy guarantee was verified. Thinking Machines Lab described a 50% introductory Tinker discount at launch but did not state a current Tinker list price in the reviewed card. BenchLM's Oct. 28 headline lists $1.87/$4.68 and $0.374 cached input; this conflicts with OpenRouter's route-specific rates, so no single universal API price is claimed.
- **Architecture:** A 66-layer decoder-only transformer with sparse MoE feed-forward layers: 975B total / 41B active parameters, 6 of 256 experts selected per token plus 2 shared experts, hybrid local/global attention, hierarchical image patch encoder, and discrete audio-token encoding. BF16, MXFP8, and NVFP4 checkpoints are documented. Official hardware guidance estimates 2TB aggregate VRAM for BF16 or 600GB for NVFP4.

### Raw benchmarks found

Three independent public search queries were followed by checks of Thinking Machines Lab's official [model card](https://thinkingmachines.ai/model-card/inkling/), [release announcement](https://thinkingmachines.ai/news/introducing-inkling), Hugging Face repository, and OpenRouter's live catalog. Values below are the Inkling column in the official model card's evaluation table (effort 0.99). The card says it uses externally reported results for some evaluations, including HLE, GPQA Diamond, GDPVal, Tau 3 Banking, AA Omniscience, and MMMU Pro; it also flags specific tests as using its own harness. They are model-card-published values, not all independent Thinking Machines Lab reruns.

Agent / tool use:

- GDPVal-AA v2: **1238 Elo**; MCP Atlas: **76.0%**; Tau 3 Banking: **23.7%**; Toolathlon Verified: **45.5%**; BrowseComp with context management: **77.1%** (official model card).
- Terminal Bench 2.1 (best harness): **63.8%**. The official launch materials say contaminated rollouts with web-search solution leakage were assigned zero. This is the model-card score under its stated best-harness result, not a score for Inkling-Small.

Reasoning / knowledge:

- HLE text-only: **29.7%**; HLE with tools: **46.0%**; AIME 2026: **97.1%**; GPQA Diamond: **87.2%** (official model card).
- The launch announcement notes HLE results reflect an earlier checkpoint and run slightly below the final release. Tool-assisted HLE should not be directly compared with no-tool results.
- Global-MMLU-Lite: **88.7%**; IFBench: **79.8%** (same source).

Coding:

- SWE-bench Verified: **77.6%**; SWE-bench Pro Public: **54.3%**; Terminal Bench 2.1: **63.8%** (official model card).
- Terminal Bench 2.1 is reported as “Best Harness” and has the contamination caveat above. No exact-model LiveCodeBench v6 or SciCode result was found in the official card.

Vision and audio:

- MMMU Pro Standard 10: **73.5%**; CharXiv RQ: **78.1%**; CharXiv RQ with Python: **82.0%** (official model card).
- Audio MC: **56.6%**; MMAU: **77.2%**; VoiceBench: **91.4%** (same source). VoiceBench and CharXiv footnotes describe formatting/harness details; these results do not establish audio output capability.

Long context:

- The model card states up to 1M tokens, but no Inkling-specific MRCR/RULER retrieval score was found. Tinker and third-party routes may expose shorter limits.

### Normalized scores (1–100)

- **Tool use: 75/100.** GDPVal-AA 1238, Tau 3 Banking 23.7%, MCP Atlas 76.0%, and Terminal Bench 2.1 63.8% show useful agent skills but fall below the methodology's frontier reference levels.
- **Reasoning: 86/100.** AIME 2026 97.1% is strong and GPQA Diamond is 87.2%; HLE text-only is 29.7% (46.0% with tools), below the 40%+ frontier reference.
- **Context window: 95/100.** The official native context is 1M tokens, within the methodology's top tier; no retrieval result supports 100.
- **Multimodal: 95/100.** Verified audio input places it in the methodology's audio-input band; output is text-only, and video inference was not verified.
- **Coding: 78/100.** SWE-bench Verified 77.6%, SWE-bench Pro 54.3%, and Terminal Bench 2.1 63.8% support capable coding, but results fall short of the methodology's top coding references and one score has a contamination correction.
- **Cost efficiency: 100/100.** OpenRouter currently lists a $0 route, matching the methodology's free-tier score; this rating is provider/route-specific and subject to quota, privacy, and availability caveats. The paid route is $1.00/$4.05 per 1M input/output tokens.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions (75, 86, 95, 95, 78), excluding cost; strongest fit is open-weight multimodal customization with audio input and long context, assuming the substantial hardware requirements are practical.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries followed by primary-source checks of Thinking Machines Lab's model card/release post and current route-specific OpenRouter pricing. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
