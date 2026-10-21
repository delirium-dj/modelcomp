# Qwen3.5-0.8B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-0.8b`, weights `Qwen/Qwen3.5-0.8B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** Alibaba Qwen's smallest Qwen3.5 member (March 2026): a 0.8B-parameter unified vision-language model (image + video input) with non-thinking mode by default, optional thinking, and tool calling. The vendor positions it strictly for prototyping, task-specific fine-tuning, and research.
- **Provider / access:** 1 hosted provider under the models.dev canonical `alibaba/qwen3.5-0.8b` (a $0.00/$0.00 route); Alibaba Cloud Model Studio `Qwen3.5-0.8B`; open weights self-hostable via vLLM/SGLang/Transformers (tp-size 1; Hugging Face shows no inference-provider deployment).
- **Release / knowledge:** released 2026-03-02 (models.dev; Qwen3.5 collection updated Mar 9); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-0.8b` (models.dev canonical), `Qwen/Qwen3.5-0.8B` (Hugging Face weights), `Qwen3.5-0.8B` (DashScope).
- **Context window:** 262,144 tokens native (official card; no YaRN extension documented at this size); max output 81,920 (models.dev).
- **Modalities:** text, image, and video in; text out; reasoning optional (non-thinking by default); tool calls yes; documented caveat: in thinking mode the 0.8B is more prone to entering thinking loops that never terminate than other Qwen3.5 models.
- **Pricing (as of 2026-10-21):** hosted route $0.00 in / $0.00 out per 1M (models.dev, 1 provider); Apache-2.0 weights free to self-host.
- **Architecture:** 0.8B parameters (dense), hybrid attention: 24 layers in a 6×(3×(Gated DeltaNet→FFN) → 1×(Gated Attention→FFN)) layout, 16 linear V / 16 QK heads (dim 128), gated attention 8 Q / 2 KV heads (dim 256), FFN intermediate 3,584, tied LM output (padded vocab 248,320), multi-token prediction trained; integrated vision encoder; Apache-2.0 open weights (0.9B checkpoint).

### Raw benchmarks found

> Vendor numbers from the official Qwen3.5-0.8B Hugging Face model card (tiny-tier tables, 0.8B column; thinking-mode rows unless noted). No independent aggregator covers it. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2 / 2.1: no verified public score found
- Tau3-Banking: no verified public score found. **TAU2-Bench: 11.6%** (vendor, thinking mode)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- BFCL-V4 (function calling): **25.3%** (vendor, thinking mode)
- ScreenSpot Pro: **46.5** (vendor, non-thinking mode; thinking value not reported)
- OSWorld / AndroidWorld: no verified public score found for the 0.8B

Reasoning / knowledge:

- GPQA Diamond: **11.9%** (vendor, thinking mode; HF eval-results block also lists 11.9)
- HLE: no verified public score found
- HMMT Feb 25 / HMMT Nov 25: **not reported even in the vendor table** (empty cells)
- LCR / MLCR: AA-LCR **4.7%**; LongBench v2 **26.1%** (vendor, thinking mode)
- CritPt: no verified public score found
- MMLU-Pro **42.3%** (thinking) / **29.7%** (non-thinking), MMLU-Redux **59.5%**, C-Eval **50.5%**, SuperGPQA **21.3%**, IFEval **44.0%**, IFBench **21.0%**, MultiChallenge **18.9%** (vendor)
- Artificial Analysis Intelligence Index / BenchLM overall: no page (not tracked)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / OJBench / Vibe Code Bench / DeepSWE / Coding Index / CodeForces: no verified public score found — the tiny-tier tables carry no coding rows at all

Long context:

- 262,144 native (official card); AA-LCR 4.7% and LongBench v2 26.1% at the native window (thinking mode) — near-floor retrieval; no MRCR / RULER / GraphWalks score reported.

Multimodal (vendor vision-language table, 0.8B column, Thinking / Non-thinking):

- MMMU **49 / 47.4**, MMMU-Pro **31.2 / 31.4**, Mathvista(mini) **62.2 / 58.6**, VlmsAreBlind **59.4 / 57.3**, RealWorldQA **63.4 / 61.6**, MMStar **58.3 / 55.9**, OCRBench **74.5 / 79.1**, OmniDocBench1.5 **61.0 / 70.6**, CC-OCR **63.2 / 66.7**, RefCOCO **79.3 / 77.8**, CountBench **77.0 / 68.6**, VideoMME(w sub) **63.8**, MLVU **65.6**, LVBench **45.1**, MVBench **55.8**, SLAKE **62.6 / 59.5**

### Normalized scores (1–100)

- **Tool use: 20/100.** TAU2-Bench 11.6% and BFCL-V4 25.3% are near-floor dialogue-agent results; ScreenSpot Pro 46.5 is the only passable row; no Terminal-Bench, OSWorld, or GDPval coverage.
- **Reasoning: 25/100.** GPQA 11.9%, SuperGPQA 21.3%, and AA-LCR 4.7% sit at the very bottom of the family; HMMT is not even reported for this size; capped by the absence of any strong reasoning row.
- **Context window: 72/100.** 262,144 native tokens is spec-verified (200K–500K tier; 200K = 70), but the measured long-context retrieval at that window (AA-LCR 4.7%) is near-floor — window size, not usable depth.
- **Multimodal: 62/100.** Image and video input with mid-range tiny-model results (OCRBench 74.5, RefCOCO 79.3, VideoMME 63.8, VlmsAreBlind 59.4); lower end of the video-in band, capped by text-only output and no audio input.
- **Coding: 25/100.** Zero verified coding benchmarks exist for this ID; floor placeholder reflecting the smallest-model scale and the vendor's prototyping-only positioning, not a measurement.
- **Cost efficiency: 100/100.** A $0.00/$0.00 hosted route exists and the Apache-2.0 0.8B weights run on almost anything — $0 = 100.
- **Overall Score: 41/100.** Half-up mean of the five quality dims (20 + 25 + 72 + 62 + 25 = 204, 204/5 = 40.8 → 41); best fit: a free, near-weightless multimodal fine-tuning base — the 262K window spec is the only headline feature that survives contact with the data.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen/Qwen3.5-0.8B Hugging Face model card benchmark tables, models.dev catalog, aggregator absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
