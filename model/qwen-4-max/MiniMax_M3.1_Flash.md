# Qwen 4 Max — findings by MiniMax M3.1 Flash

- Source: Alibaba Cloud Model Studio / Qwen4-Max-Preview (`qwen4-max-preview`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max (currently served only as the preview id `qwen4-max-preview`)
- **Short description:** Alibaba's next-generation flagship multimodal model, exposed so far only as a time-boxed preview through Model Studio's Token Plan subscription (2026-11-11 to 2026-11-25), with thinking on by default, web search and function calling, and no vendor benchmarks published. It is positioned for coding, office productivity, frontend design and complex agentic work.
- **Provider / access:** Alibaba Cloud Model Studio Token Plan (Personal or Team edition), model id `qwen4-max-preview`, dedicated base URL `https://token-plan.ap-southeast-1.maas.aliyuncs.com`; compatible with OpenAI Chat Completions, OpenAI Responses and Anthropic Messages APIs. Pay-as-you-go is not supported and the model is scheduled to be retired when the preview ends. No OpenCode Zen route exists for this model.
- **Release / knowledge:** Preview opened 2026-11-11 10:00 and is scheduled for retirement 2026-11-25 24:00 (UTC+8); no knowledge-cutoff date is published.
- **IDs:** `qwen4-max-preview` (Model Studio / Token Plan); independent tracker pages carry the aggregator-style spelling `qwen/qwen4-max-preview`. No Free tier and no OpenCode Zen id.
- **Context window:** 1M tokens; maximum output 393,216 tokens, shared by thinking and the final answer (official Model Studio preview page, last updated 2026-11-11).
- **Modalities:** Text, image and video in; text out; reasoning on by default with `reasoning_effort` low, medium or xhigh (xhigh default) and `preserve_thinking` enabled by default in Chat Completions; function calling, web search and built-in tools; JSON Object and JSON Schema structured outputs. From this model onward `max_tokens` equals `max_completion_tokens`, and thinking consumes part of the same output budget.
- **Pricing (as of 2026-11-12):** Token Plan subscription billed in Credits for interactive use in compatible AI tools (Qoder, Claude Code, Codex, Qwen Code, OpenCode and similar). No pay-as-you-go price and no per-token price is published in the international documentation; the nearest published sibling, qwen3.8-max, lists $2 input / $6 output per 1M tokens. No free lane.
- **Architecture:** Proprietary hosted model; architecture, parameter count and weights are not published.

### Raw benchmarks found

Agent / tool use:

- Function calling, web search and built-in tools: supported by the vendor capability table, but no measured tool-use score was found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- StealthMark overall: **58.8/100**, overall rank 12 of 58 (independent, StealthModels, measured 2026-11-11)
- StealthMark General Intelligence: **54.6/100**; Visual Intelligence: **66.3/100**; reasoning efficiency **51** against a 60 median (same source)
- Foresight (anticipating threats and planning ahead): **57.5**, rank 14 of 54 (survived 1 of 3)
- Latch (cooperative planning and learning): **67.3**, rank 21 of 55 (cleared 5 of 5)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (Artificial Analysis lists no model page for qwen4-max-preview as of 2026-11-12)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found — the vendor positions the model for coding but published no coding numbers in the preview documentation
- Same-suite reference point: Qwen3.8-Max-0902 scores **62.4** on StealthMark, 3.6 points above this preview (StealthModels)

Long context:

- No MRCR / RULER / GraphWalks retrieval-at-length result is published; the 1M window is a vendor specification only, so retrieval quality at that length is unmeasured.

Multimodal (independent StealthMark visual tasks):

- Selfie (visual construction): **75.9**, rank 9 of 58
- Beach (best placing): **78.4**, rank 5 of 58
- Pelican (subject construction and spatial relationships): **77.3**, rank 7 of 58
- Raccoon (scene composition): **71.0**, rank 10 of 58
- Mona Lisa (visual recall): **55.2**, rank 12 of 58
- Newton's Mirror (physical, spatial and recursive reasoning): **48.8**, rank 9 of 58
- No public VQA, chart or video benchmark was found for this preview id.

### Normalized scores (1–100)

- **Tool use: 45/100.** The vendor documents function calling, web search and built-in tools, but no Terminal-Bench, Tau3, GDPval or Claw-Eval number exists for the preview, so the score rests on capability claims plus weak independent evidence and is kept deliberately low.
- **Reasoning: 58/100.** The only measured signal is the independent StealthMark General Intelligence 54.6 and overall 58.8 (rank 12 of 58), which is mid-field and below the 3.6-point gap to Qwen3.8-Max-0902; no GPQA, HLE or LCR number exists to lift it.
- **Context window: 95/100.** The documented 1M-token window falls in the top tier, but the 393,216-token output budget is shared with thinking and no retrieval-at-length benchmark was published, so the retrieval bonus is not claimed.
- **Multimodal: 78/100.** Text, image and video input with text output covers the video-input band, and StealthMark visual tasks run 48.8 to 78.4 with Visual Intelligence at 66.3, but there is no public audio input and no public VQA or video benchmark, so it stays in the lower half of that band.
- **Coding: 48/100.** The model is marketed for coding and agentic work, yet no SWE-bench, LiveCodeBench, SciCode or Terminal-Bench result was published, so the score is a conservative estimate based on the general-capability evidence rather than a measured coding number.
- **Cost efficiency: 60/100.** Token Plan bills in Credits for interactive use with no published per-token price and no pay-as-you-go tier, so the model cannot be placed on the per-token ladder; the two-week preview that ends in retirement adds availability risk, hence a mid-ladder score rather than a cheap-tier one.
- **Overall Score: 64.8/100.** Mean of the five quality dimensions (45 + 58 + 95 + 78 + 48) / 5; best fit is an interactive multimodal and coding endpoint for subscribers during a short preview window, with all measured evidence coming from one independent suite.

### Conflicting evidence (vendor vs independent) and how it was resolved

- The repository meta entry describes 2M context, 128K output and roughly $2.50 / $10.00 per 1M tokens, and points at a blog URL that does not resolve. The official Model Studio preview page documents 1M context, a 393,216-token shared output budget and Token-Plan-only access with no per-token price. Resolution: the official preview page wins; the meta values are treated as unverified and are not used.
- The vendor published no benchmark numbers at all for the preview, while the only measured data (StealthMark 58.8, rank 12 of 58) comes from an independent tracker that also shows the preview trailing Qwen3.8-Max-0902 by 3.6 points on the same suite. Resolution: reasoning and coding are anchored to that one independent suite and explicitly marked as thin evidence.
- A widely circulated Artificial Analysis score for "Qwen 4 Max Preview" could not be verified: Artificial Analysis carries no model page for the id as of 2026-11-12. Resolution: the unsourced number is excluded rather than counted.
- Token Plan tier prices could not be read from the international documentation (those pages render only in the console), so no credit price is asserted. Resolution: cost efficiency is scored conservatively with the reasoning spelled out instead of inventing a per-token price.

### Notes on identity

- `qwen4-max-preview` is a preview-only id for a model that the vendor states will be retired when the preview ends on 2026-11-25. It is not a stable Qwen 4 Max release and must not be merged with a future stable `qwen4-max` entry.
- Spellings in circulation — `qwen4-max-preview`, `qwen4.0-max-preview` and the aggregator-style `qwen/qwen4-max-preview` — all refer to the same Model Studio preview id; the canonical vendor id is `qwen4-max-preview`.
- The repository meta id `alibaba/qwen-4-max` and its official URL do not match the vendor's documented id or a resolvable official page.
- No OpenCode Zen route exists for this model as of 2026-11-12, so the report is scored on the Token Plan subscription tier.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (official Alibaba Cloud Model Studio preview documentation and Token Plan overview, the independent StealthModels benchmark tracker, and cross-checks against the Model Studio model list and the OpenCode Zen catalogue); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio — qwen4-max-preview](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
  - [Alibaba Cloud Model Studio — Token Plan overview](https://www.alibabacloud.com/help/en/model-studio/token-plan-overview)
  - [StealthModels — Qwen4-Max-Preview benchmark results](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)
  - [Alibaba Cloud Model Studio — model list](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenCode Zen model catalogue](https://opencode.ai/docs/zen)
