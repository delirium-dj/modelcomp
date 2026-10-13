# GPT-5.5 Pro — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.5-pro`; pinned snapshot `gpt-5.5-pro-2026-04-23`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute GPT-5.5 deployment optimized for harder and more precise answers. OpenAI offers a separate `gpt-5.5-pro` API ID and price, so this is not merely a renamed ordinary GPT-5.5 effort setting ([OpenAI model spec](https://developers.openai.com/api/docs/models/gpt-5.5-pro)).
- **Provider / access:** `https://api.openai.com/v1/responses` (including background/Batch), or [OpenCode Zen `opencode/gpt-5.5-pro`](https://pi.dev/models/opencode/gpt-5-5-pro) using Responses at `https://opencode.ai/zen/v1`. First-party **Chat Completions is unsupported**; do not infer it from GPT-5.5's endpoint.
- **Release / knowledge:** April 23, 2026 announcement; API available April 24 per update to [OpenAI's launch](https://openai.com/index/introducing-gpt-5-5/). Knowledge cutoff December 1, 2025 ([model spec](https://developers.openai.com/api/docs/models/gpt-5.5-pro)).
- **IDs:** OpenAI `gpt-5.5-pro` or pinned `gpt-5.5-pro-2026-04-23`; Zen `opencode/gpt-5.5-pro`. No verified Zen Free ID.
- **Context window:** 1,050,000 total and 128,000 max output ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.5-pro), [Pi Zen](https://pi.dev/models/opencode/gpt-5-5-pro)); a tracker calling the usable input ~922K reserves output within this combined window ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5-pro)).
- **Modalities:** Native text/image input and text output; Responses supports function calling, file/web search, code interpreter and hosted shell ([OpenAI model spec](https://developers.openai.com/api/docs/models/gpt-5.5-pro)). No native audio/video or model-produced media established; tool-mediated image generation is distinct from native image output.
- **Pricing (as of 2026-10-12):** OpenAI $30 input / $180 output per 1M with **no cached-input discount** ([official model spec](https://developers.openai.com/api/docs/models/gpt-5.5-pro)); [Zen lists cache reads at $30/1M](https://pi.dev/models/opencode/gpt-5-5-pro), i.e. same as input. Pi's generic first-party listing includes a >272K $60/$270 tier, but OpenAI's consulted GPT-5.5 Pro spec does not state it: treat the tier as provider-listing data, not an official confirmed rate. OpenAI's Batch offering is supported; verify batch billing with its live pricing page, rather than importing ordinary-model rates.
- **Architecture:** Proprietary; parameters and weights not published ([AA model page](https://artificialanalysis.ai/models/gpt-5-5-pro)).

### Raw benchmarks found

Cross-checked [OpenAI's launch comparison](https://openai.com/index/introducing-gpt-5-5/) with [BenchLM's exact-Pro evidence index](https://benchlm.ai/models/gpt-5-5-pro), [AA's Pro-specific page](https://artificialanalysis.ai/models/gpt-5-5-pro) and [Epoch AI FrontierMath methodology](https://epoch.ai/benchmarks/frontiermath-tier-4-v2). Pro has **sparse exact-version public coverage**; the ordinary GPT-5.5 row in OpenAI's comparison is *not* a Pro measurement and is not recycled below.

Agent / tool use:

- [OpenAI BrowseComp **90.1%**](https://openai.com/index/introducing-gpt-5-5/) (Pro row, research/browsing with tools), versus the ordinary GPT-5.5's separate 84.4%; [GDPval win-or-tie **82.3%**](https://openai.com/index/introducing-gpt-5-5/) is a human/preference-style win-or-tie rate, **not** GDPval-AA Elo.
- Pro-specific Terminal-Bench 2.1/4.0, Tau3-Banking, Claw-Eval, Toolathlon: **no verified public score found**. OpenAI's release lists Terminal-Bench **82.7%** and Toolathlon **55.6%** for **GPT-5.5**, not GPT-5.5 Pro; using them as direct Pro scores would misidentify the model.

Reasoning / knowledge:

- [OpenAI Pro-row HLE **43.1% without tools / 57.2% with tools**, FrontierMath Tier 1–3 **52.4%**, Tier 4 **39.6%**](https://openai.com/index/introducing-gpt-5-5/). [Epoch](https://epoch.ai/benchmarks/frontiermath-tier-4-v2) documents private-set evaluation with a Python tool and its revised Tier 4 version; don't call the tool-enabled result unaided model recall.
- [BenchLM's cited ARC-AGI-1 **95.0%**, ARC-AGI-2 **84.2%**, CritPt **30.6%**](https://benchlm.ai/models/gpt-5-5-pro) are exact-label leaderboard rows, though the consulted [AA Pro page](https://artificialanalysis.ai/models/gpt-5-5-pro) does **not** publish a complete Pro Intelligence Index; composite ranking remains unverified.
- [OpenAI GeneBench **33.2%**](https://openai.com/index/introducing-gpt-5-5/) on the Pro row reflects scientific-analysis strength with access to task tools; no GPQA Diamond Pro-specific score published in that release.

Coding:

- Exact `gpt-5.5-pro` SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, SciCode, Terminal-Bench and FrontierCode: **no verified public score found** in the cited primary Pro-specific data. OpenAI's SWE-Pro **58.6%** and Terminal-Bench 2.0 **82.7%** explicitly label **ordinary GPT-5.5**. Coding rating is provisional and discounted rather than inheriting those measurements.

Long context / multimodal:

- OpenAI's launch long-context MRCR **74.0% at 512K–1M** and GraphWalks **45.4% at 1M** are for **ordinary GPT-5.5**, **not Pro** ([comparison's labeled rows](https://openai.com/index/introducing-gpt-5-5/)); no exact-Pro long-window retrieval score found.
- [AA](https://artificialanalysis.ai/models/gpt-5-5-pro) and [OpenAI spec](https://developers.openai.com/api/docs/models/gpt-5.5-pro) establish text/image input; OpenAI's MMMU Pro **81.2%** is again an ordinary GPT-5.5 result, so no exact-Pro image benchmark is asserted.

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 90.1% supports tool-driven research, but missing exact-Pro terminal, multi-tool and agent benchmarks prevent a frontier assignment.
- **Reasoning: 90/100.** HLE 43.1% unaided, Tier-4 FrontierMath 39.6%, ARC-AGI-2 84.2% and GeneBench 33.2% support demanding reasoning; limited independent Pro coverage caps confidence.
- **Context window: 94/100.** Official 1.05M capacity reaches the top size tier but no near-window Pro retrieval measurement verifies 100; 128K maximum output occupies part of combined context.
- **Multimodal: 65/100.** Text and image input with text output meet the image-input band, but no direct Pro multimodal benchmark or native audio/video substantiates more.
- **Coding: 72/100.** **Provisional**: tool/coding support exists but exact Pro coding scores are absent; deliberately do not transfer ordinary GPT-5.5's strong SWE/Terminal figures to this distinct SKU.
- **Cost efficiency: 10/100.** $30/$180 with no cache discount is exceptionally expensive even before long requests or tool charges; no free hosted route.
- **Overall Score: 79/100.** (75 + 90 + 94 + 65 + 72) / 5 = 79.2, half-up 79; promising for expensive tool-assisted expert reasoning, with tool/coding scores explicitly evidence-limited.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh OpenAI model spec and explicitly labeled Pro results compared with AA, BenchLM's attributed rows, Epoch methodology and provider specifications; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
