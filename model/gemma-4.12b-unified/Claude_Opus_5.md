# Gemma 4 12B Unified — findings by Claude Opus 5

- Source: Google DeepMind (`google/gemma-4-12B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** The architecturally most interesting member of Google DeepMind's **Apache-2.0** Gemma 4 family — and the only mid-size one that is **omni-modal**. Where its siblings bolt a vision (and sometimes audio) encoder onto the language stack, the 12B Unified **has no separate encoders at all**: "raw image patches and audio waveforms are projected directly into the LLM's embedding space through lightweight linear layers, and all modalities flow into a single decoder-only transformer. This reduces multimodal latency and allows the whole model to be fine-tuned in one pass" ([Gemma 4 launch write-up, 2026-04-02](https://huggingface.co/blog/gemma4)). Distinct variant, not a tier: the 31B is dense with a vision encoder, the 26B A4B is MoE, and E2B/E4B are PLE-heavy edge models.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-12B` base, `google/gemma-4-12B-it` instruction-tuned). Day-0 support across **transformers (via an `any-to-any` pipeline), llama.cpp, MLX, mistral.rs, transformers.js/WebGPU and ONNX**, plus vLLM and SGLang. Google's own write-up ships working local-agent configs for OpenClaw, Hermes, Pi and **OpenCode**, and a featured Hugging Face Space ("Chat with an AI using text, images, audio, or video"). **No OpenCode Zen ID** — bring-your-own-weights.
- **Release / knowledge:** Family announced **2026-04-02**; base checkpoint updated **Jul 15**, `-it` checkpoint **Jul 20** on Hugging Face. Knowledge cutoff: no verified public date found. Adoption: **1.69M downloads** on the `-it` checkpoint.
- **IDs:** `google/gemma-4-12B-it` (and `-12B` base). Hugging Face classifies it **`Any-to-Any`**, unlike the 26B/31B which are `Image-Text-to-Text` — a useful confirmation of the audio pathway. **No hosted free ID needed**; Apache 2.0 makes the weights free.
- **Context window:** **256,000 tokens** (Google's family table; corroborated by [BenchLM](https://benchlm.ai/models/gemma-4-12b)). Max output: no verified public figure found.
- **Modalities:** **Text + image + video + audio in → text out** — four-way input on 12B dense weights, which is the family's widest input surface at this size. Google is explicit that "the small variants (E2B, E4B) **and the 12B Unified model** support audio as well", and the 12B is the **only** variant above 8B that does. Reasoning: yes, via `enable_thinking` / the `<|think|>` control token. Tool calls: yes, including multimodal function calling, with native JSON bounding-box output for object detection, pointing and GUI-element grounding on a normalized 1000×1000 grid.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0 open weights.** No first-party hosted endpoint or per-token rate. Google ships a **Multi-Token Prediction (MTP) drafter** for this size (lossless speculative decoding, reported up to ~3× end-to-end), plus quantized GGUF/MLX builds; it describes the checkpoint size as "deployment-friendly on consumer hardware."
- **Architecture:** **11.95B dense, encoder-free** — the defining property. Shared Gemma 4 components still apply: alternating **local sliding-window and global full-context attention** layers; **dual RoPE** (standard on sliding layers, pruned on global); **Per-Layer Embeddings (PLE)**, a second low-dimensional embedding table feeding a residual signal into every decoder layer; and a **shared KV cache** where the last N layers reuse K/V from the last non-shared layer of the same attention type. Notably, **the vision-encoder description explicitly excludes the 12B** ("Vision encoder (except 12B)"), which is what makes the unified design distinctive. **Apache 2.0.**

### Raw benchmarks found

> Google's instruction-tuned table and Artificial Analysis both cover this model, and the pattern matches its siblings: **vendor and independent figures agree closely on vision, diverge sharply on tool use.** On MMMU-Pro they are within 0.6 points (69.1 vs 69.7); on τ²-bench they differ by 32.7.

Agent / tool use:

- **Tau2 (Google, average over 3 runs): 69.0%** ([Google benchmark table](https://huggingface.co/blog/gemma4))
- **τ²-bench (independent): 36.3%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-12b)) — a **32.7-point** shortfall, the widest vendor/independent gap in the Gemma 4 family
- GDPval-AA: **591 Elo** / **0.0%** normalized (Artificial Analysis) — a normalized zero on real professional work
- Terminal-Bench (any version), OSWorld, MCP-Atlas, Toolathlon, AA Agentic Index: no verified public score found
- Qualitative but verifiable: native JSON bounding-box output for GUI/object grounding, working multimodal function calling, first-class local-agent integrations including OpenCode

Reasoning / knowledge:

- **GPQA Diamond: 78.8%** (Google); independently **AA-GPQA Diamond 75.3%** (Artificial Analysis)
- MMLU-Pro: **77.2%**; MMMLU: **83.4%** (Google)
- AIME 2026 (no tools): **77.5%** (Google)
- BBH / BigBench Extra Hard: **53%** (Google)
- HLE without tools: **5.2%** (Google); independently **AA-HLE 15.7%** — the independent harness again scores it *higher*
- AA-LCR: **63.7%**; **CritPt: 0.0%** (Artificial Analysis)
- **AA-IFBench: 73.5%** (Artificial Analysis) — strong instruction following for 12B
- Artificial Analysis Intelligence Index: **14.2**; BenchLM overall **32.31/100, rank #162 of 889** (26 of 625 benchmarks)
- AA-Omniscience: Index **−52.7**, Accuracy **15.6%**, **Hallucination Rate 81.0%**

Coding:

- **LiveCodeBench v6: 72.0%** (Google) — against the 26B A4B's 77.1% and the 31B's 80.0%
- **Codeforces ELO: 1659** (Google) — versus 1718 for the 26B A4B and 2150 for the 31B
- AA Coding Index: **31.0%** (Artificial Analysis)
- **SWE-bench Verified / Pro: no verified public score found**

Multimodal:

- **MMMU-Pro: 69.1%** (Google); independently **AA-MMMU-Pro 69.7%** (Artificial Analysis) — a 0.6-point match
- **MathVision: 79.7%** (Google)
- **OmniDocBench 1.5 (edit distance, lower is better): 0.164** (Google) — against 0.149 for the 26B A4B and 0.131 for the 31B
- MedXpertQA (MM): **48.7%** (Google)
- **Audio — and this is the differentiator:** **CoVoST 38.5** and **FLEURS 0.069** (lower is better), both marked by Google as excluding Chinese. The FLEURS figure is **the best in the entire Gemma 4 family** (E4B 0.08, E2B 0.09), i.e. the 12B Unified is Google's strongest Gemma 4 speech model.
- Video understanding is supported with the audio track (`load_audio_from_video=True` is documented for the smaller models and explicitly disabled "for larger models" — the 12B sits on the audio-capable side)

Long context:

- **MRCR v2, 8-needle at 128k (average): 43.4%** (Google) — a real multi-needle retrieval measurement, essentially level with the 26B A4B's 44.1% and 23 points behind the 31B dense sibling's 66.4%
- AA-LCR 63.7% corroborates mid-band long-context reasoning. Nothing measured at the full 256K.

### Normalized scores (1–100)

- **Tool use: 42/100.** Google reports Tau2 69.0%; Artificial Analysis measures **τ²-bench at 36.3%** — a 32.7-point gap, and I weight the independent figure. **GDPval-AA 591 Elo normalizes to 0.0%**, which is the floor. Credit is retained for genuinely useful grounding capabilities (native JSON object/GUI bounding boxes, multimodal function calling, verified OpenCode integration), but a 12B model with a normalized-zero agentic score and no Terminal-Bench result cannot be scored as agentic.
- **Reasoning: 64/100.** Strong for 11.95B dense weights: **GPQA Diamond 75.3% independently**, MMLU-Pro 77.2%, MMMLU 83.4%, AIME 2026 77.5%, and **AA-IFBench 73.5%**. Capped firmly by the hard tier — **CritPt 0.0%**, HLE in the 5–16% band, BBH 53%, an AA Intelligence Index of 14.2 — and by an **81.0% hallucination rate** against 15.6% accuracy.
- **Context window: 68/100.** 256K, with the family's rare virtue of a **published multi-needle retrieval figure** (MRCR v2 8-needle at 128k = 43.4%) rather than an unvalidated claim, plus AA-LCR 63.7%. Scored level with the 26B A4B and below the 31B for the measured reason: 43.4% against the dense 31B's 66.4% on the identical test. Nothing measured at the full 256K.
- **Multimodal: 84/100.** The best dimension and the reason to choose this variant: **four-way input — text, image, video and audio — on 12B dense weights, through a genuinely novel encoder-free unified design** that cuts multimodal latency and allows single-pass fine-tuning of the whole model. The vision numbers are solid and independently confirmed (MMMU-Pro 69.1% vendor / 69.7% independent, MathVision 79.7%, OmniDocBench 0.164), and the **audio results are the best in the Gemma 4 family** (FLEURS 0.069, beating both edge variants). Capped below the high 80s only by text-only output and by the audio figures excluding Chinese.
- **Coding: 58/100.** LiveCodeBench v6 72.0% and Codeforces 1659 are respectable for 12B dense, but they sit below both larger siblings, the **AA Coding Index is 31.0%**, and there is **no SWE-bench result of any kind** — no repository-repair evidence exists.
- **Cost efficiency: 97/100.** Among the best in this dataset. **Apache 2.0, 11.95B dense, zero per-token cost, no data-usage caveat**, and the encoder-free design is itself an efficiency win — one decoder-only transformer handling four modalities means lower multimodal latency and a checkpoint Google calls "deployment-friendly on consumer hardware". Backed by day-0 llama.cpp / MLX / ONNX / WebGPU support, quantized GGUF builds, and a Google-released **MTP drafter** for lossless speculative decoding. Getting audio *and* video *and* vision input at 12B for nothing is close to the efficiency frontier. Short of 100 only because there is no hosted endpoint and 12B still needs real memory for 256K contexts.
- **Overall Score: 63.2/100.** Mean of the five non-cost dims (42 + 64 + 68 + 84 + 58) / 5 = 63.2. Best fit: **self-hosted omni-modal understanding at the smallest viable size** — speech transcription and audio QA (family-best FLEURS), document/chart/video comprehension, screenshot and GUI grounding — all at zero marginal cost on consumer hardware, with the encoder-free design making end-to-end fine-tuning on your own multimodal data unusually practical. Choose the 31B instead for deep retrieval (66.4% vs 43.4% MRCR) or coding headroom; choose E2B/E4B for genuinely tiny footprints. In all cases keep it out of autonomous tool loops (GDPval normalized 0.0%) and verify its factual output (81.0% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google DeepMind's Gemma 4 launch write-up on Hugging Face (the family table identifying this variant as 11.95B dense, encoder-free, 256K; the dedicated "Unified Multimodal (12B)" section describing raw image-patch and audio-waveform projection into the LLM embedding space via lightweight linear layers and its latency and single-pass-finetuning consequences; the per-size modality matrix confirming the 12B as the only non-edge variant with audio and the "Vision encoder (except 12B)" exclusion; the shared PLE / shared-KV-cache / dual-RoPE architecture; the deployment and local-agent matrix including OpenCode; the MTP drafters; and the complete instruction-tuned benchmark table including MRCR v2, OmniDocBench, Codeforces ELO and the CoVoST/FLEURS audio rows with their Chinese-exclusion caveat), the `google/gemma-4-12B(-it)` Hugging Face pages including the `Any-to-Any` pipeline classification, BenchLM's aggregated page, and the underlying Artificial Analysis leaderboards. The OpenCode Zen catalogue was checked and contains no Gemma entry. Where Google and Artificial Analysis disagree — τ²-bench (69.0% vs 36.3%), GPQA Diamond (78.8% vs 75.3%), HLE (5.2% vs 15.7%) — both are reported and the independent figure drives the score; where they agree (MMMU-Pro 69.1 vs 69.7) that is noted. Intra-family comparisons are drawn only from Google's own single published table, and no figure was imported from the 26B A4B, 31B, E4B or E2B folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
