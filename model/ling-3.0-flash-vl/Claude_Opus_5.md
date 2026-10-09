# Ling 3.0 Flash VL — findings by Claude Opus 5

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's **native multimodal** build of Ling-3.0-flash, under an **MIT licence**. Its stated design goal goes further than perception: it "brings visual information into the complete process of understanding, reasoning, acting, and verification—advancing beyond image and video perception to solving real-world tasks through vision", organised around three named capability axes — **Understand, Reason, Act** ([Ling 3.0 Flash VL model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)). It is a *distinct checkpoint* built on Ling-3.0-flash, not a serving tier: it adds a ViT encoder, an MLP projector and VideoRoPE, and InclusionAI measures it as 4 index points better than the base text model. Siblings Ling 3.0 Flash, Flash FP8, Tiny, Flash Fin (relocated to `models_finance/`) and Ling 3.1 Flash are separate entries.
- **Provider / access:** **Open weights on Hugging Face and ModelScope.** Self-hosting via **SGLang** (a dedicated `lmsysorg/sglang:dev-Ling-3.0-flash-VL` Docker image plus a published cookbook with a BF16/FP8 × low-latency/high-throughput launch matrix) and **vLLM** through InclusionAI's own fork `inclusionAI/vllm-ling-v3`. Hosted on OpenRouter and Novita. **Not on OpenCode Zen** — Zen's Ling entries are `ling-3.1-flash-free` and `ling-3.0-flash-fin-free`, not the VL build ([Zen docs](https://opencode.ai/docs/zen/)); this repo records the local route `opencode/ling-3.0-flash-vl`.
- **Release / knowledge:** **No explicit release date is published on the model card.** The parent Ling 3.0 Hugging Face collection shows a last update of **15 days before access** (i.e. late September 2026), and the model has 15,570 downloads in the trailing month. Knowledge cutoff: no verified public date found. I am not inventing either.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (Hugging Face / ModelScope), `opencode/ling-3.0-flash-vl` in this repo's routing. **No free tier** — the folder's metadata notes OpenRouter's "free windows expired", and `noFreeId: true` is correct; the MIT weights are the free path.
- **Context window:** **262,144 tokens (256K) — but as an extension, not natively.** The SGLang launch recipe reveals the detail: the 256K configuration requires **YaRN rope scaling at factor 2.0** over an `original_max_position_embeddings` of **131,072**, with `SGLANG_ALLOW_OVERWRITE_LONGER_CONTEXT_LEN=1`. So the native window is 128K and 256K is a documented, vendor-recommended extrapolation. Max output: the folder metadata records 32,768, consistent with the vendor's own benchmark runs at `max_new_tokens=32K`.
- **Modalities:** **Text + image + video in → text out.** Hugging Face classifies it `image-text-to-text`; video input uses `{"type": "video_url", ...}` in the same message shape as images. No audio, no generated media. Reasoning: **thinking enabled by default** via the chat template, disableable per request with `"chat_template_kwargs": {"enable_thinking": false}`. Tool calls: yes, with a built-in `ling3` tool-call parser that resolves automatically from the chat template.
- **Pricing (as of 2026-10-08):** **$0.021 / MTok input, $0.0616 / MTok output** on OpenRouter per this repo's curated metadata — i.e. roughly **two cents per million input tokens**, the cheapest hosted rate of any model in this research pass by two orders of magnitude. Reported as curated rather than re-verified by me today. Free under **MIT** to self-host.
- **Architecture:** Fully disclosed and genuinely distinctive — **124B total parameters with only 5.5B activated per token** (HF safetensors reports 125B), `bailing_moe_v3_vl`:
  - a **ViT visual encoder** with a **two-layer MLP projector** aligning visual features to text representations;
  - **VideoRoPE**, encoding *both* spatial position and temporal order, explicitly to support "event localization, long-video question answering, and video clip editing";
  - a **42-layer hybrid backbone alternating KDA and Gated MLA layers at a 5:1 ratio**, for efficient long-context processing across text, images, video and extended agent histories;
  - **sparse MoE** keeping 124B capacity at 5.5B active parameters.
  **MIT license.** InclusionAI also publishes a **public training-content summary PDF** with versioning and update dates — a transparency step almost no other vendor in this dataset takes.

### Raw benchmarks found

> **The evidence base is thin and almost entirely from one source.** BenchLM carries 11 benchmarks, essentially all Artificial Analysis rows. InclusionAI's model card presents its "Understand / Reason / Act" results as **charts with no extractable values**, and — notably — documents its Terminal-Bench 2.1 harness in meticulous detail (AA protocol, Terminus 2, unified 2-hour timeout, provided JSON parser in preserve-thinking mode, **3 runs per task averaged**, temperature 1.0, `max_new_tokens`=32K, 256K context) **without publishing the score**. I have not estimated anything off a chart.

Agent / tool use:

- GDPval-AA: **33.2%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl)) — the **only** agentic measurement that exists
- **Terminal-Bench 2.1: harness fully documented, score not published.** Recorded as a notable omission rather than estimated.
- τ²/τ³-bench, OSWorld, MCP-Atlas, Toolathlon, Claw-Eval, BrowseComp, AA Agentic Index: **no verified public score found**
- Capability surface verified at the interface level: automatic `ling3` reasoning and tool-call parsers, `--enable-auto-tool-choice` in the vendor's own vLLM recipe

Reasoning / knowledge:

- **AA-GPQA Diamond: 86.2%** (Artificial Analysis) — strong, and the best-evidenced reasoning number here
- AA-LCR: **78.3%**; AA-HLE: **22.0%**; CritPt: **2.0%** (Artificial Analysis)
- **Artificial Analysis Intelligence Index: 24.6** (Artificial Analysis via BenchLM) — but InclusionAI claims **42 on Intelligence Index v4.1.1**, "improving by 4 points over Ling-3.0-flash's score of 38". Both are reported; the gap is almost certainly an index-version difference (v4.1.1 vs whatever BenchLM currently mirrors), and I decline to reconcile two different scales.
- BenchLM overall: **47.31/100, rank #108 of 889** (11 of 625 benchmarks, flagged conservative)
- **AA-Omniscience: Index −4.5, Accuracy 14.4%, Hallucination Rate 22.0%.** The **22.0% hallucination rate is the lowest I have recorded anywhere in this research pass** — lower even than GLM-5.2's 26.3% — but it comes with only **14.4% accuracy**, so the mechanism is heavy abstention rather than superior knowledge.
- MMLU-Pro, AIME, AA-IFBench: no verified public score found

Coding:

- AA-SciCode: **44.2%** (Artificial Analysis) — the **only** coding number
- **SWE-bench Verified / Pro, LiveCodeBench, Terminal-Bench, FrontierCode, CursorBench: no verified public score found.** There is no repository-repair measurement of any kind.

Multimodal:

- **AA-MMMU-Pro: 79.0%** ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl)) — the **highest MMMU-Pro figure of any model I have scored in this pass**, and independently measured rather than vendor-reported
- No MathVision, CharXiv, OmniDocBench, OCR, Video-MME, VideoMMMU or ScreenSpot number found — which is a striking gap given that **VideoRoPE with temporal encoding is the model's headline architectural feature**

Long context:

- No MRCR / RULER / needle-retrieval number at any depth. **AA-LCR 78.3%** is the only quantified signal, and it is good. The architectural case is reasonable (a 42-layer KDA/Gated-MLA hybrid explicitly designed for long context across modalities), but the 256K figure is a **YaRN extrapolation from a 131,072 native window** and nothing public validates behaviour at the extended end.

### Normalized scores (1–100)

- **Tool use: 50/100.** The "Act" axis is a stated design pillar, the `ling3` tool-call parser is built in and auto-resolving, and the vendor's own serving recipes enable auto tool choice — but the measurement is **one number, GDPval-AA at 33.2% normalized**. Most damning for this dimension: InclusionAI wrote out its complete Terminal-Bench 2.1 methodology — harness, timeout, parser mode, run count, sampling, context — **and did not publish the result**. A vendor that documents a harness that carefully and omits the score is not a vendor whose agentic capability I will assume.
- **Reasoning: 68/100.** AA-GPQA Diamond 86.2% is genuinely strong and independently measured, AA-LCR 78.3% is solid, and thinking-on-by-default is a sensible default for the workload. Capped by AA-HLE 22.0%, CritPt 2.0%, and the Omniscience picture: a remarkable 22.0% hallucination rate undercut by **14.4% accuracy** — this model is the most cautious in the dataset partly because it knows the least, and a negative index (−4.5) means caution does not fully compensate. The vendor-vs-tracker Intelligence Index conflict (42 vs 24.6) also means the aggregate position is genuinely uncertain.
- **Context window: 74/100.** 256K served is a good upper-mid window and AA-LCR 78.3% shows real usability, with a backbone (42-layer KDA + Gated MLA at 5:1) purpose-built for long multimodal context. Marked down from where 256K alone would sit because the vendor's own launch recipe shows the **native window is 131,072** and 256K requires YaRN scaling at factor 2.0 — an honest disclosure, but it means the advertised figure is extrapolated, and no public measurement validates the extended half.
- **Multimodal: 80/100.** The strongest dimension, and the evidence is the right kind: **AA-MMMU-Pro 79.0% is independently measured and the highest in this pass**, and the architecture behind it is specific rather than generic — a ViT encoder with MLP projector, and **VideoRoPE encoding spatial position *and* temporal order** for event localization, long-video QA and clip editing. Capped below the mid-80s by text-only output, no audio, and the fact that **one vision benchmark is all that exists**: for a model whose differentiator is temporal video understanding, there is no Video-MME, no VideoMMMU, no document or OCR number at all.
- **Coding: 48/100.** One number — **AA-SciCode 44.2%** — and nothing else. No SWE-bench, no LiveCodeBench, no CursorBench, no Terminal-Bench value. The base Ling-3.0-flash lineage is a general model rather than a coding specialist, and the public record offers no basis to score this dimension above the midpoint.
- **Cost efficiency: 92/100.** Exceptional on two independent axes. Commercially: **$0.021 in / $0.0616 out per MTok** on OpenRouter is roughly **1/60th** of the next-cheapest hosted model in this batch — effectively free at the margin. Architecturally: only **5.5B active parameters per token** out of 124B total means inference is genuinely cheap to serve, and the **MIT licence** imposes no restrictions. Docked for three concrete reasons: the free OpenRouter windows have **expired**, self-hosting the 256K configuration needs **4× 141GB-class GPUs** (H20-3e / H200 / B300 / GB300) or 8× 80GB cards, and 124B of weights must be resident even if only 5.5B activate.
- **Overall Score: 64/100.** Mean of the five non-cost dims (50 + 68 + 74 + 80 + 48) / 5 = 64.0. Best fit: **extremely cheap, high-volume visual understanding** — chart, document, interface and especially *video* comprehension, where VideoRoPE's temporal encoding is a real architectural advantage and MMMU-Pro 79.0% is the best independently-measured vision result here — plus privacy-preserving self-hosted deployment under MIT. The score is held down by how little has been measured: one agentic number, one coding number, one vision number, a documented Terminal-Bench harness with no score attached, and a 14.4% knowledge accuracy that the low hallucination rate cannot disguise.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the `inclusionAI/Ling-3.0-flash-VL` Hugging Face model card (MIT licence, `bailing_moe_v3_vl` classification, 124B-total/5.5B-active sparse MoE, the ViT encoder plus two-layer MLP projector, VideoRoPE's spatial-and-temporal encoding and its stated use cases, the 42-layer KDA/Gated-MLA 5:1 hybrid backbone, 256K context, the three Understand/Reason/Act capability axes, thinking-on-by-default and how to disable it, the SGLang and vLLM serving recipes — from which the YaRN factor-2.0 extension over a 131,072 native window and the 4×141GB hardware requirement are derived — the automatic `ling3` reasoning/tool-call parsers, the vendor's Intelligence Index v4.1.1 claim of 42 vs Ling-3.0-flash's 38, the fully-documented-but-unscored Terminal-Bench 2.1 harness, and the public training-content summary), BenchLM's aggregated page, and the underlying Artificial Analysis leaderboards. The OpenCode Zen catalogue was checked and carries `ling-3.1-flash-free` and `ling-3.0-flash-fin-free` but not this build. No release date was published on any source consulted, so none is asserted. Vendor results published only as charts were deliberately not estimated, and the 42-vs-24.6 Intelligence Index discrepancy is reported as an index-version conflict rather than resolved. The repo's `meta.json` supplied the OpenRouter price, labelled as curated. No data was imported from `ling-3.1-flash` or the `models_finance/` Ling Fin entry. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
