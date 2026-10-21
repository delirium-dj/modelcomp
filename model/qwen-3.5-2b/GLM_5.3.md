# Qwen3.5-2B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-2b`, weights `Qwen/Qwen3.5-2B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** Alibaba Qwen's 2B tiny member of the Qwen3.5 generation (March 2026): unified vision-language (image + video input), non-thinking mode by default with optional thinking, tool calling. The vendor positions it for prototyping, task-specific fine-tuning, and research — not production reasoning.
- **Provider / access:** 2 hosted providers under the models.dev canonical `alibaba/qwen3.5-2b` (a $0.00/$0.00 free route exists); Alibaba Cloud Model Studio `Qwen3.5-2B`; open weights self-hostable via vLLM/SGLang/Transformers on a single GPU (tp-size 1).
- **Release / knowledge:** released 2026-03-02 (models.dev; Qwen3.5 collection updated Mar 9); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-2b` (models.dev canonical), `Qwen/Qwen3.5-2B` (Hugging Face weights), `Qwen3.5-2B` (DashScope).
- **Context window:** 262,144 tokens native (official card; this tiny card documents no YaRN extension, unlike the bigger siblings); max output 81,920 (models.dev).
- **Modalities:** text, image, and video in; text out; reasoning optional (non-thinking by default, `enable_thinking: true` to enable); tool calls yes; documented caveat: in thinking mode the 2B is more prone to entering thinking loops that never terminate than other Qwen3.5 models.
- **Pricing (as of 2026-10-21):** cheapest hosted route $0.00 in / $0.00 out per 1M (models.dev, 2 providers); Apache-2.0 weights free to self-host.
- **Architecture:** 2B parameters (dense), hybrid attention: 24 layers in a 6×(3×(Gated DeltaNet→FFN) → 1×(Gated Attention→FFN)) layout, 16 linear V / 16 QK heads (dim 128), gated attention 8 Q / 2 KV heads (dim 256), FFN intermediate 6,144, tied LM output (padded vocab 248,320), multi-token prediction trained; integrated vision encoder; Apache-2.0 open weights.

### Raw benchmarks found

> Vendor numbers from the official Qwen3.5-2B Hugging Face model card (small-model comparison tables, 2B column; thinking-mode rows unless noted). No independent aggregator covers it. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2 / 2.1: no verified public score found
- Tau3-Banking: no verified public score found. **TAU2-Bench: 48.8%** (vendor, thinking mode; official setup + airline-domain fixes)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- BFCL-V4 (function calling): **43.6%** (vendor, thinking mode)
- ScreenSpot Pro: **54.5** (vendor, non-thinking mode; thinking value not reported)
- OSWorld / AndroidWorld: no verified public score found for the 2B

Reasoning / knowledge:

- GPQA Diamond: **51.6%** (vendor, thinking mode; HF eval-results block lists 44.95 on Idavidrein/gpqa Diamond — harness difference noted); non-thinking mode: 40.1%-class per the Qwen3-1.7B comparison row
- HLE: no verified public score found
- HMMT Feb 25: **22.9%**; HMMT Nov 25: **19.6%** (vendor, thinking mode — weak)
- LCR / MLCR: AA-LCR **25.6%**; LongBench v2 **38.7%** (vendor, thinking mode)
- CritPt: no verified public score found
- MMLU-Pro **66.5%** (thinking) / **55.3%** (non-thinking), MMLU-Redux **79.6%**, C-Eval **73.2%**, SuperGPQA **37.5%**, IFEval **78.6%**, IFBench **41.3%** (vendor)
- Artificial Analysis Intelligence Index / BenchLM overall: no page (not tracked)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / OJBench / Vibe Code Bench / DeepSWE / Coding Index / CodeForces: no verified public score found — the tiny-tier tables carry no coding rows at all

Long context:

- 262,144 native (official card); AA-LCR 25.6% and LongBench v2 38.7% at the native window (thinking mode); no MRCR / RULER / GraphWalks retrieval score reported.

Multimodal (vendor vision-language table, 2B column, Thinking / Non-thinking):

- MMMU **64.2 / 64.2**, MMMU-Pro **50.3 / 47.7**, Mathvista(mini) **76.7 / 73.9**, VlmsAreBlind **75.8 / 74.3**, RealWorldQA **74.5 / 71.2**, MMStar **71.7 / 68.0**, OCRBench **84.5 / 85.4**, OmniDocBench1.5 **79.8 / 80.9**, CC-OCR **72.9 / 75.8**, RefCOCO **84.8 / 84.3**, CountBench **91.4 / 86.8**, VideoMME(w sub) **75.6**, MLVU **76.2**, LVBench **57.1**, MVBench **64.9**, SLAKE **74.4 / 67.5**

### Normalized scores (1–100)

- **Tool use: 38/100.** TAU2-Bench 48.8% and BFCL-V4 43.6% are passable for a 2B, ScreenSpot Pro 54.5 serviceable, but there is no Terminal-Bench, OSWorld, or GDPval coverage; capped by thin and mid-low agentic evidence.
- **Reasoning: 48/100.** GPQA 51.6% (44.95 on the HF leaderboard run) and MMLU-Pro 66.5% are respectable tiny-class results, but HMMT 22.9/19.6, AA-LCR 25.6, and no HLE/AA-Index data keep it firmly at the bottom of the family's reasoning range.
- **Context window: 72/100.** 262,144 native tokens (200K–500K tier; 200K = 70); this card documents no YaRN extension and no long-context retrieval score.
- **Multimodal: 76/100.** Image and video input with genuinely strong tiny-model results (OCRBench 84.5, VlmsAreBlind 75.8, VideoMME 75.6 w/ sub, CountBench 91.4); capped at the video-in band by text-only output and no audio input.
- **Coding: 30/100.** Zero verified coding benchmarks exist for this ID — the tiny-tier release tables carry no coding rows; this is a floor placeholder reflecting the vendor's prototyping/fine-tuning positioning, not a measurement.
- **Cost efficiency: 100/100.** A $0.00/$0.00 hosted free route exists and the Apache-2.0 2B weights run on a single consumer GPU — $0 = 100.
- **Overall Score: 53/100.** Half-up mean of the five quality dims (38 + 48 + 72 + 76 + 30 = 264, 264/5 = 52.8 → 53); best fit: a free tiny multimodal prototyping base with surprisingly decent vision — not an agent, coder, or reasoner.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen/Qwen3.5-2B Hugging Face model card benchmark tables, models.dev catalog, aggregator absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
