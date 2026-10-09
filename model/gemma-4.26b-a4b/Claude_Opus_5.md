# Gemma 4.26B A4B — findings by Claude Opus 5

- Source: Google DeepMind (`google/gemma-4-26B-A4B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** The **Mixture-of-Experts** member of Google DeepMind's Gemma 4 open-weights family — 26B total parameters with only **4B activated per token**, under **Apache 2.0**. It is the most striking parameter-efficiency result in this dataset: Google's own estimate puts it at **1441 LMArena Elo (text-only) "with just 4B active parameters 🤯"**, against 1452 for the 31B *dense* sibling ([Gemma 4 launch write-up, 2026-04-02](https://huggingface.co/blog/gemma4)) — and BenchLM actually ranks it **above** the 31B (45.89 vs 40.47). Distinct architecture, not a tier: E2B/E4B add audio encoders, 12B Unified is encoder-free, 31B is dense, and `DiffusionGemma` is a separate diffusion-decoder model built on *this* 26B A4B foundation.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B` base, `google/gemma-4-26B-A4B-it` instruction-tuned). Day-0 runtime support across **transformers, llama.cpp, MLX, mistral.rs, transformers.js/WebGPU and ONNX**, plus vLLM and SGLang for serving. Google's own write-up ships a local-agent quickstart (`llama serve -hf ggml-org/gemma-4-26b-a4b-it-GGUF:Q4_K_M`) with working configs for OpenClaw, Hermes, Pi and **OpenCode**. **No OpenCode Zen ID** — it is a bring-your-own-weights model.
- **Release / knowledge:** Family announced **2026-04-02**; the base checkpoint shows a Hugging Face update of **Jul 15** and the `-it` checkpoint **Jul 20**. Knowledge cutoff: no verified public date found. Adoption is substantial and verifiable — **12.3M downloads** on the `-it` checkpoint.
- **IDs:** `google/gemma-4-26B-A4B-it` (and `-A4B` base); GGUF, MLX, UQFF and ONNX community conversions exist. **No hosted free ID needed** — Apache 2.0 makes the weights themselves free.
- **Context window:** **256,000 tokens** (Google's family table; corroborated by [BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b)). Max output: no verified public figure found.
- **Modalities:** **Text + image + video in → text out.** The intra-family distinction matters and is easy to get wrong: Google states "All models support images (or video) and text inputs, while the **small variants (E2B, E4B) and the 12B Unified model support audio as well**" — so **this size has no audio pathway**, and its CoVoST and FLEURS rows are blank in Google's own table. Video is ingested without the audio track (`load_audio_from_video` is documented as "disable this for larger models"). Reasoning: yes, via an explicit `enable_thinking` flag / `<|think|>` control token. Tool calls: yes, including **multimodal** function calling, and it emits object-detection / pointing / GUI-element bounding boxes **natively as JSON** on a normalized 1000×1000 grid.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0 open weights.** No first-party hosted endpoint or published per-token rate. Practical cost is compute only, and with **4B active parameters** that is as low as anything in this dataset; Google additionally released a **Multi-Token Prediction (MTP) drafter** for this size (reported lossless speedups "up to ~3×") and quantized GGUF/MLX builds including MLX TurboQuant.
- **Architecture:** **Sparse Mixture-of-Experts, 26B total / 4B activated** per forward pass (Hugging Face badges read 27B base / 26B instruct). Shared Gemma 4 components: alternating **local sliding-window and global full-context attention** layers; **dual RoPE** (standard on sliding layers, pruned on global layers) to extend context; **Per-Layer Embeddings (PLE)**, a second low-dimensional embedding table feeding a residual signal into every decoder layer; **shared KV cache**, where the last N layers reuse K/V from the last non-shared layer of the same attention type; and a vision encoder using learned 2D positions and multidimensional RoPE that **preserves original aspect ratios** with five selectable image token budgets (70 / 140 / 280 / 560 / 1120). Google notes it deliberately omitted "complex or inconclusive features such as Altup" in favour of cross-library compatibility and quantization-friendliness.

### Raw benchmarks found

> Two source classes, and they disagree in the same direction and roughly the same magnitude as they did for the 31B sibling. Google's instruction-tuned table is detailed and self-consistent; Artificial Analysis measures several of the same things independently and lands **lower on tool use and vision, lower on GPQA, and higher on HLE**. Both are reported, and the independent figure is the one weighted.

Agent / tool use:

- **Tau2 (Google, average over 3 runs): 68.2%** ([Google benchmark table](https://huggingface.co/blog/gemma4)) — against the 31B's 68.2%… in fact identical, and against Gemma 3 27B's 16.2%
- **τ²-bench (independent): 43.6%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-26b-a4b)) — a **24.6-point shortfall** against the vendor figure, even wider than the 31B's 17-point gap
- GDPval-AA: **713 Elo** / **3.4%** normalized (Artificial Analysis) — near-floor on real professional work
- Terminal-Bench (any version), OSWorld, MCP-Atlas, Toolathlon, Claw-Eval, AA Agentic Index: no verified public score found
- Qualitative but substantive: native JSON bounding-box output for GUI element detection and object pointing, verified working multimodal function calling, and first-class local-agent integrations including OpenCode

Reasoning / knowledge:

- **MMLU-Pro: 82.6%** (Google) — second in its family only to the 31B's 85.2%, on a sixth of the active parameters
- **GPQA Diamond: 82.3%** (Google); independently **AA-GPQA Diamond 79.2%** (Artificial Analysis)
- **AIME 2026 (no tools): 88.3%** (Google) — within a point of the 31B's 89.2%
- MMMLU: **86.3%**; BigBench Extra Hard: **64.8%** (Google)
- HLE: **8.7% without tools**, **17.2% with search** (Google); independently **AA-HLE 19.3%** — the independent harness scores it *above* both vendor figures
- AA-LCR: **65.7%**; **CritPt: 0.0%** (Artificial Analysis) — a literal zero
- **AA-IFBench: 72.4%** (Artificial Analysis) — strong instruction following for the size
- Artificial Analysis Intelligence Index: **16.7**; BenchLM overall **45.89/100, rank #114 of 889** (19 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−50.8**, Accuracy **19.1%**, **Hallucination Rate 86.4%** — among the worst abstention behaviour in this pass
- LMArena (text-only), Google-estimated: **1441 Elo** — vendor-estimated, not an official arena placement, but the headline claim of the release

Coding:

- **LiveCodeBench v6: 77.1%** (Google) — against the 31B's 80.0% and Gemma 3 27B's 29.1%
- **Codeforces ELO: 1718** (Google) — versus the 31B's 2150 and Gemma 3 27B's 110
- AA Coding Index: **39.3%**; AA-SciCode: **40.0%** (Artificial Analysis)
- **SWE-bench Verified / SWE-bench Pro: no verified public score found.** Google published neither, and no independent harness has posted one.

Multimodal:

- **MMMU-Pro: 73.8%** (Google); independently **AA-MMMU-Pro 69.2%** (Artificial Analysis)
- **MATH-Vision: 82.4%** (Google)
- **OmniDocBench 1.5 (edit distance, lower is better): 0.149** (Google) — second in the family to the 31B's 0.131, and a genuine document-OCR result
- MedXpertQA (MM): **58.1%** (Google)
- No audio benchmark, correctly — this size has no audio encoder

Long context:

- **MRCR v2, 8-needle at 128k (average): 44.1%** (Google) — a real multi-needle retrieval measurement, and one of few in this dataset. It is, however, **22.3 points below the 31B dense sibling's 66.4%**, which is the clearest evidence anywhere in this report of where 4B active parameters costs you something.
- AA-LCR 65.7% corroborates usable but mid-band long-context reasoning. Nothing measured at the full 256K.

### Normalized scores (1–100)

- **Tool use: 48/100.** The independent record governs and it is weak: Google reports Tau2 68.2%, Artificial Analysis measures **τ²-bench at 43.6%** — a 24.6-point gap — and **GDPval-AA sits at 713 Elo (3.4% normalized)**. There is no Terminal-Bench, no OSWorld, no MCP figure to appeal to. Real credit is retained for capabilities benchmarks here miss — native JSON GUI/object grounding, working multimodal function calling, first-class OpenCode/OpenClaw integration — but a sparse 4B-active model with a 3.4% normalized agentic score cannot be scored as a competent autonomous agent.
- **Reasoning: 68/100.** Genuinely impressive for 4B active parameters: **MMLU-Pro 82.6%, AIME 2026 88.3%, MMMLU 86.3%, GPQA Diamond 79.2% independently**, and **AA-IFBench 72.4%** — all within a few points of the 31B *dense* model at roughly a sixth of the compute per token. Notably, the independent HLE figure (19.3%) is *higher* than both of Google's, which raises rather than lowers confidence. Capped by **CritPt 0.0%**, an AA Intelligence Index of 16.7, and an **86.4% hallucination rate against 19.1% accuracy** — it almost never declines to answer.
- **Context window: 70/100.** 256K is solid and, as with the 31B, this model earns credit for having a **published multi-needle retrieval result at all** — MRCR v2 8-needle at 128k of 44.1%, backed by AA-LCR 65.7%. But the comparison within its own family is the honest story: **44.1% against the dense 31B's 66.4%** on the identical test means the sparse architecture pays a real price on deep retrieval, and nothing is measured at the full 256K. Scored 6 points below the 31B for exactly that reason.
- **Multimodal: 78/100.** Strong and broadly evidenced: text, image **and video** in, with MMMU-Pro 73.8% (69.2% independently), MATH-Vision 82.4%, MedXpertQA-MM 58.1%, and an **OmniDocBench 1.5 edit distance of 0.149** that makes it a credible document-OCR engine — plus aspect-ratio-preserving encoding with five selectable token budgets. Capped by text-only output, by the **absence of any audio pathway at this size** (unlike its own E2B/E4B/12B siblings), and by video being audio-less.
- **Coding: 64/100.** **LiveCodeBench v6 77.1%** and a **Codeforces ELO of 1718** are strong competitive-programming results for 4B active parameters. Capped by the complete absence of **SWE-bench Verified or Pro** — no repository-repair measurement of any kind — and by an AA Coding Index of 39.3% and AA-SciCode 40.0% indicating the aggregate picture is materially weaker than the headline. The gap to the 31B (80.0% LiveCodeBench, 2150 Codeforces) is also real.
- **Cost efficiency: 97/100.** **The best cost profile in this dataset**, and for a structural reason rather than a pricing promotion: **4B activated parameters out of 26B**, Apache 2.0, zero per-token cost, no data-usage caveat, and genuinely deployable — day-0 llama.cpp / MLX / ONNX / WebGPU support, quantized GGUF builds, MLX TurboQuant, and a Google-released **MTP drafter** giving up to ~3× lossless speculative-decoding speedup. A model that posts GPQA Diamond 79.2%, MMLU-Pro 82.6% and Codeforces 1718 while activating four billion parameters is close to the efficiency frontier. Short of 100 only because 26B of weights must still be resident, and there is no hosted endpoint if you do not want to run it yourself.
- **Overall Score: 65.6/100.** Mean of the five non-cost dims (48 + 68 + 70 + 78 + 64) / 5 = 65.6. Best fit: **self-hosted multimodal work at the lowest possible serving cost** — document, chart, video and GUI understanding plus competitive-grade code generation, running locally at zero marginal cost with four billion active parameters. Choose the dense 31B instead when deep long-context retrieval matters (66.4% vs 44.1% on MRCR) or when coding headroom does; choose E2B/E4B/12B if you need audio. In all cases keep it out of autonomous tool loops (3.4% normalized GDPval) and verify its factual claims (86.4% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google DeepMind's Gemma 4 launch write-up on Hugging Face (the family size/context table identifying this variant as 26B total / 4B activated MoE at 256K, the per-size modality matrix establishing that audio is restricted to E2B/E4B/12B, the shared architecture description covering PLE, shared KV cache, dual RoPE and vision-encoder token budgets, the deployment and local-agent matrix, the MTP drafters, the 1441 LMArena Elo estimate, and the complete instruction-tuned benchmark table including MRCR v2, OmniDocBench, Codeforces ELO and the blank audio rows), BenchLM's aggregated page, and the underlying Artificial Analysis leaderboards. The OpenCode Zen catalogue was checked and contains no Gemma entry. Where Google's figures and Artificial Analysis disagree — τ²-bench (68.2% vs 43.6%), GPQA Diamond (82.3% vs 79.2%), MMMU-Pro (73.8% vs 69.2%), HLE (8.7/17.2% vs 19.3%) — both are reported and the independent figure drives the score. The MRCR gap against the dense 31B sibling is reported explicitly as the clearest measured cost of sparsity, and no figure was imported from any other Gemma 4 variant, each of which has or will have its own folder. Audio benchmarks were deliberately not credited. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
