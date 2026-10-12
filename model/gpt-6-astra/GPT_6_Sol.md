# GPT-6 Astra — findings by GPT 6 Sol

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary frontier reasoning model for computer use, research, engineering, and long-running coding. `max` is a reasoning-effort setting, not a different model; Codex's cross-window searchable notes are a harness feature, not extra native context.
- **Provider / access:** [OpenAI API](https://developers.openai.com/api/docs/models/gpt-6-astra) `https://api.openai.com/v1` supports Responses and Chat Completions; [OpenCode Zen provider listing](https://pi.dev/models/opencode/gpt-6-astra) advertises Responses at `https://opencode.ai/zen/v1`.
- **Release / knowledge:** September 3, 2026 per [Vals](https://www.vals.ai/models/openai_gpt-6-astra); OpenAI [model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra) says April 30, 2026 knowledge cutoff.
- **IDs:** `openai/gpt-6-astra`, Zen `opencode/gpt-6-astra`; no Zen Free ID in the paid provider listing.
- **Context window:** OpenAI [model spec](https://developers.openai.com/api/docs/models/gpt-6-astra): 1,050,000 total, 922,000 max input, 128,000 max output. The [Pi OpenAI listing](https://pi.dev/models/openai/gpt-6-astra) shows a conservative 272,000 context configuration, yet its price tier explicitly covers requests above 272K; [Pi Zen](https://pi.dev/models/opencode/gpt-6-astra) and official docs list the full 1.05M. Verify each client's configured cap, not just its pricing threshold.
- **Modalities:** Native text/image in, text out; tools include computer use, web/file search, hosted shell, MCP and structured function calling over Responses ([OpenAI model spec](https://developers.openai.com/api/docs/models/gpt-6-astra)). PDF/documents handled through file tooling, not native audio/video input or media output.
- **Pricing (as of 2026-10-12):** $10 input / $50 output / $1 cached input / $12.50 cache write per 1M for requests up to 272K input; above that **$20/$75/$2/$25 for the entire request**, not only the excess. Batch/Flex half-price and Fast double the applicable rates ([OpenAI](https://developers.openai.com/api/docs/models/gpt-6-astra), [Pi Zen](https://pi.dev/models/opencode/gpt-6-astra)).
- **Architecture:** Proprietary; parameters undisclosed ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-astra)).

### Raw benchmarks found

Sources include [OpenAI's launch scorecards and harness notes](https://openai.com/index/gpt-6-astra/), independent [Vals](https://www.vals.ai/models/openai_gpt-6-astra), [Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-astra), [ARC Prize's verified harness split](https://arcprize.org/results/openai-gpt-6-astra), [Collinear's independent security leaderboard](https://cwe-bench.com/) and [Proximal's software-engineering leaderboard](https://www.frontierswe.com/). [BenchLM](https://benchlm.ai/models/gpt-6-astra) is a useful linked index of these measurements but not a separate experiment.

Agent / tool use:

- [OpenAI Terminal-Bench 4.0 **57.9%**](https://openai.com/index/gpt-6-astra/); [Vals independently **59.60% ±4.40**](https://www.vals.ai/models/openai_gpt-6-astra), [AA **59.1%**](https://benchlm.ai/models/gpt-6-astra), each in its own run. [Vals Terminal-Bench 2.1 **87.3%**](https://benchlm.ai/models/gpt-6-astra), not directly comparable to TB4.
- [OpenAI OSWorld 2.0 offline/partial **72.6%**, Agents' Last Exam **59.3%**, BrowseComp **91.5%**, AutomationBench **41.4%**](https://openai.com/index/gpt-6-astra/); [Vals CUA-bench **19.17%**](https://www.vals.ai/models/openai_gpt-6-astra) (#1/8 on its page), SRE Bench **56.87%** (#1/33), Finance Agent v2 **53.54%** (#31/78).
- [OpenAI Terminal-Bench Science 0.1 **64.6%**](https://openai.com/index/gpt-6-astra/) vs [Vals **62.86% ±5.82**](https://www.vals.ai/models/openai_gpt-6-astra), separate evaluation setups. [Collinear CWE-bench v1 **68% programmatic pass@1**](https://cwe-bench.com/) (Codex harness, 120 tasks; tied #1, judge-panel pass@1 **66%**).
- [AA Tau3 Banking **41.4%**](https://benchlm.ai/models/gpt-6-astra), [AA GDPval-AA **1574 Elo**](https://benchlm.ai/models/gpt-6-astra); a directly measured Claw-Eval score was not found.

Reasoning / knowledge:

- [ARC Prize verified results](https://arcprize.org/results/openai-gpt-6-astra): ARC-AGI-2 **95.0%** at max; ARC-AGI-3 **62.71% at max on the Standard harness** versus **99.95% at high on the Provider Adapter harness**, which preserves reasoning state/uses compaction. The dramatic 99.9% result is *harness-assisted* and must not be presented as model-only standard-harness performance.
- [OpenAI GPQA Diamond **96.0%**, FrontierMath Tier 4 v2 **97.6%**, HLE with tools **57.2%**](https://openai.com/index/gpt-6-astra/); [AA GPQA **96.1%**, HLE **54.7%**, CritPt **31.7%**](https://benchlm.ai/models/gpt-6-astra), separately measured/harnessed.
- [Current AA Intelligence Index v4.3.2 **53**](https://artificialanalysis.ai/models/gpt-6-astra), versus **61.2** on OpenAI's explicitly older AA Index v4.1.1 table ([launch](https://openai.com/index/gpt-6-astra/)); these versions cannot be compared as a time-series capability drop.

Coding:

- [OpenAI DeepSWE v1.1 **74.1%**, FrontierCode 1.1 Extended **64.5%** / Main **53.3%**](https://openai.com/index/gpt-6-astra/), with OpenAI's declared Codex-style developer-message adjustment for FrontierCode.
- [Proximal FrontierSWE v2 **65.5% ±8.9**](https://www.frontierswe.com/) (#1 on its 34-task, five-trials-per-task leaderboard), [Vals Code Migration **67.74%**](https://www.vals.ai/models/openai_gpt-6-astra), Vibe Code Bench v1.1 **89.59%**, TB4 **59.60%**.
- [AA SciCode **56.5%**](https://benchlm.ai/models/gpt-6-astra); exact-version SWE-bench Verified/LiveCodeBench: no verified public score found in the consulted direct result sets.

Long context / multimodal:

- [OpenAI MRCR v2 eight-needle **100.0% at 256K–512K**, **96.3% at 512K–1M**](https://openai.com/index/gpt-6-astra/), plus [AA-LCR **80.7%**](https://benchlm.ai/models/gpt-6-astra): excellent retrieval, but not the ≥98% at 512K+ threshold for a 100 context score.
- [OpenAI ScreenSpot-Pro **92.7% without tools**, BenchCAD **95.9% with tools**](https://openai.com/index/gpt-6-astra/); [AA MMMU-Pro **86.9%**](https://benchlm.ai/models/gpt-6-astra). These show strong visual perception, not native audio/video support.

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4 57.9–59.6%, TB2.1 87.3%, OSWorld 72.6% and CWE-bench 68% support strong agents; Tau3 41.4% and Vals domain variance cap universality.
- **Reasoning: 97/100.** ARC-AGI-2 95%, GPQA 96% and FrontierMath 97.6% are exceptional; ARC-AGI-3's 99.95% requires a special provider-adapter harness, and CritPt remains 31.7%.
- **Context window: 97/100.** Official 1.05M total/922K input with 96.3% MRCR at 512K–1M is strong; below the 98% high-window retrieval threshold for 100, and some client configs cap at 272K.
- **Multimodal: 69/100.** Image perception excels on ScreenSpot and MMMU, but native API modality is text/image input and text output; video/audio and generated media are outside this endpoint.
- **Coding: 97/100.** FrontierSWE 65.5% and strong TB4, Vibe Code and FrontierCode warrant frontier placement; DeepSWE 74.1% and missing exact SWE-bench Verified constrain a perfect score.
- **Cost efficiency: 27/100.** $10/$50, plus above-272K whole-request $20/$75, is very expensive despite caching, batch discounts and strong complex-task efficiency.
- **Overall Score: 91/100.** (94 + 97 + 97 + 69 + 97) / 5 = 90.8, half-up 91; best reserved for demanding long-horizon reasoning, coding and visual tool use where results justify premium tokens.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh cross-site comparison of OpenAI launch/spec, independent Vals/AA/ARC Prize, Collinear and Proximal leaderboards, and linked BenchLM citations; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
