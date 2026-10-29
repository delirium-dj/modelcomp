# Kimi K2.6 — findings by GPT-6 Luna

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight multimodal agent model for long-horizon coding, visual design, tool use, and coordinated agent workflows. It is a separate K2-series checkpoint, not Kimi K2.5 or Kimi K3.
- **Provider / access:** Moonshot AI; downloadable weights on [Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.6) under a modified-MIT license, plus Moonshot's OpenAI-compatible API. The dedicated [Kimi K2.6 API guide](https://platform.kimi.ai/docs/guide/kimi-k2-6-quickstart) uses `https://api.moonshot.ai/v1` and API model ID `kimi-k2.6`.
- **Release / knowledge:** Released April 2026; the official Hugging Face repository was created 2026-04-14. An exact knowledge cutoff was not found.
- **IDs:** Weights repository `moonshotai/Kimi-K2.6`; Moonshot API `kimi-k2.6`.
- **Context window:** 262,144 tokens, according to both the model card and API documentation. No verified MRCR/RULER retrieval score found.
- **Modalities:** Text, image, and video input; text output. Thinking and non-thinking modes and tool calling are supported. No audio input or non-text output verified.
- **Pricing (as of 2026-10-29):** Moonshot's [Kimi K2.6 pricing page](https://www.kimi.com/resources/kimi-k2-6-pricing), updated 2026-10-26, lists $0.95 input / $4.00 output per 1M tokens and $0.16 per 1M cached input tokens. This is not a free route. Availability has a dated caveat: the [official API model list](https://platform.kimi.ai/docs/models) lists K2.6 among current multimodal models, but also says K2-series models will be unavailable to newly registered users from 2026-10-31 and planned for retirement by the end of December 2026; the same page contains an older blanket statement that K2 models were discontinued on May 25. Treat API access as subject to account/timing restrictions; open weights remain available.
- **Architecture:** Modified-MIT open-weight mixture-of-experts model: 1T total / 32B activated parameters, 61 layers, 384 experts with 8 selected per token, MLA attention, and a 400M-parameter MoonViT vision encoder ([official model card](https://huggingface.co/moonshotai/Kimi-K2.6)).

### Raw benchmarks found

Three independent public search queries were followed by direct checks of Moonshot AI's official [Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K2.6), [Kimi K2.6 tech blog](https://www.kimi.com/blog/kimi-k2-6.html), and current API/pricing documentation. The table below reports Kimi K2.6 results from the vendor's model card. Moonshot says Kimi K2.6 used thinking mode, temperature 1.0, top-p 1.0, and 262,144-token context unless otherwise noted; coding scores are averaged over 10 runs. Asterisked comparator results were re-evaluated by Moonshot; this report does not attribute comparator figures to Kimi.

Agent / tool use:

- Humanity's Last Exam (full, with tools): **54.0%**; BrowseComp: **83.2%**; BrowseComp with Agent Swarm: **86.3%**; DeepSearchQA: **92.5 F1 / 83.0 accuracy**; WideSearch: **80.8 item-F1** (official model card).
- Toolathlon: **50.0%**; MCPMark: **55.9%**; Claw Eval: **62.3 pass^3 / 80.9 pass@3**; APEX-Agents: **27.9%**; OSWorld-Verified: **73.1%** (same source).
- Moonshot used search, code-interpreter, and web-browsing tools on tool-augmented tasks. HLE with tools used context management and a 262,144-token generation limit. No exact-model Tau3-banking or GDPval-AA result was found.

Reasoning / knowledge:

- HLE-Full, no tools: **34.7%**; HLE text-only subset: **36.4% without tools / 55.5% with tools**; GPQA Diamond: **90.5%**; AIME 2026: **96.4%**; HMMT February 2026: **92.7%**; IMO-AnswerBench: **86.0%** (official model card).
- Moonshot notes that HLE and other reasoning tasks used up to 98,304 generated tokens. The full HLE-with-tools result uses external tools; it should not be compared directly with no-tool HLE results.

Coding:

- Terminal-Bench 2.0 (Terminus-2): **66.7%**; SWE-bench Pro: **58.6%**; SWE-bench Verified: **80.2%**; SWE-bench Multilingual: **76.7%**; SciCode: **52.2%**; LiveCodeBench v6: **89.6%** (official model card).
- Moonshot says Terminal-Bench 2.0 used the default Terminus-2 framework with preserve-thinking mode. Its SWE-bench evaluations use an in-house framework adapted from SWE-agent and a minimal tool set. The published coding results are averaged over 10 independent runs.

Vision:

- MMMU-Pro: **79.4%**; MMMU-Pro with Python: **80.1%**; CharXiv RQ: **80.4%** (with Python: **86.7%**); MathVision: **87.4%** (with Python: **93.2%**); V* with Python: **96.9%**; BabyVision: **39.8%** (with Python: **68.5%**) (official model card).
- Vision scores use a 98,304-token maximum and average three runs; Python-aided tasks use multi-step tool calls. No audio benchmark applies because audio input was not verified.

Long context:

- The verified limit is 262,144 tokens, but no exact-model retrieval score at 256K was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 83.2%, DeepSearchQA 92.5 F1, and strong tool-assisted results show capable agents; Terminal-Bench 2.0 is 66.7%, and no exact-model GDPval-AA/Tau3 result was found.
- **Reasoning: 88/100.** GPQA Diamond 90.5%, AIME 96.4%, and HLE-Full with tools 54.0% are strong; HLE-Full without tools is 34.7%, and the tool-augmented result is not directly comparable to no-tool evaluations.
- **Context window: 78/100.** The verified 262K window falls in the methodology's 200K–500K tier; no retrieval result supports the top of that tier.
- **Multimodal: 88/100.** Verified image and video input plus strong vision benchmark coverage fit the video-input band; output is text-only and audio input was not verified.
- **Coding: 87/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, and Terminal-Bench 2.0 66.7% are strong; Terminal-Bench 2.0 is not the methodology's 2.1 reference and SWE-bench results use Moonshot's own harness.
- **Cost efficiency: 88/100.** Official pricing of $0.95/$4.00 per 1M input/output tokens falls near the methodology's $1.25/$4.25 reference tier; cached input is $0.16. Planned API restrictions are an availability caveat, not a price discount.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions (84, 88, 78, 88, 87), excluding cost; best fit is multimodal long-horizon coding and agent orchestration when 256K context and the modified-MIT weight terms fit the deployment.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries followed by primary-source verification against Moonshot's model card, Kimi K2.6 product blog, and API/pricing documentation. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
