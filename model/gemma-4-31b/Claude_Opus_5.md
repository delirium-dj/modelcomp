# Gemma 4 31B — findings by Claude Opus 5

- Source: Google DeepMind (`google/gemma-4-31B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** The largest **dense** member of Google DeepMind's Gemma 4 open-weights family — a 31B multimodal reasoning model under **Apache 2.0**, designed to be the quality ceiling of a lineup whose stated goal is "frontier multimodal intelligence on device". It is not a variant or alias of anything else: its siblings are architecturally distinct (E2B/E4B add audio encoders, 12B Unified is encoder-free, 26B A4B is MoE), and `DiffusionGemma` is a separate diffusion-decoder model on the 26B A4B foundation ([Hugging Face / Google launch write-up, 2026-04-02](https://huggingface.co/blog/gemma4)).
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-31B` base, `google/gemma-4-31B-it` instruction-tuned). Day-0 runtime support across **transformers, llama.cpp, MLX, mistral.rs, transformers.js/WebGPU and ONNX**, with working integrations for OpenClaw, Hermes, Pi and **OpenCode itself** via a local `llama.cpp` OpenAI-compatible provider block. **Not listed on OpenCode Zen** — there is no Zen ID; it is a bring-your-own-weights model. Also fine-tunable via TRL, TRL-on-Vertex-AI and Unsloth Studio.
- **Release / knowledge:** Family announced **2026-04-02**; the `-31B` base checkpoint shows a Hugging Face update of **Jul 15** and the `-it` checkpoint **Jul 20**. Knowledge cutoff: no verified public date found. Adoption is substantial and verifiable — 9.57M downloads on the `-it` checkpoint.
- **IDs:** `google/gemma-4-31B-it` (and `google/gemma-4-31B` base); GGUF, MLX, UQFF and ONNX conversions exist community-side. **No hosted free ID is needed** — the Apache-2.0 licence makes the weights themselves free, which is a stronger guarantee than any vendor free tier in this dataset.
- **Context window:** **256,000 tokens** (Google's own family table; corroborated by [BenchLM](https://benchlm.ai/models/gemma-4-31b)). Max output: no verified public figure found; the sample OpenCode provider config in Google's own write-up suggests a practical 8,192-token output limit for local serving, but that is a config example, not a model limit.
- **Modalities:** **Text + image + video in → text out.** Important intra-family distinction that is easy to get wrong: Google states "All models support images (or video) and text inputs, while the **small variants (E2B, E4B) and the 12B Unified model support audio as well**" — so **31B has no audio pathway**, and its video understanding is explicitly without the audio track (`load_audio_from_video` is documented as "disable this for larger models"). Reasoning: yes, via an explicit `enable_thinking` flag / `<|think|>` control token. Tool calls: yes, including **multimodal** function calling (identify a city from a photo, then call `get_weather`), and it emits object-detection / pointing / GUI-element bounding boxes **natively as JSON** on a normalized 1000×1000 grid with no grammar constraints required.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0 open weights.** No hosted first-party endpoint and no published per-token rate from Google for this model. Practical cost is compute only, and Google ships two things that materially reduce it: **Multi-Token Prediction (MTP) drafter** checkpoints for speculative decoding (reported end-to-end speedups "up to ~3×", lossless), and quantized GGUF/MLX builds including MLX **TurboQuant** (claimed baseline accuracy at ~4× less active memory). No data-usage caveat at all, because inference can be entirely local.
- **Architecture:** **31B dense** (33B on the base checkpoint's parameter badge). Documented components: alternating **local sliding-window and global full-context attention** layers (1024-token windows on the larger models); **dual RoPE** — standard RoPE on sliding layers, pruned RoPE on global layers, to extend context; **Per-Layer Embeddings (PLE)**, a second low-dimensional embedding table feeding a residual signal into every decoder layer; **shared KV cache**, where the last N layers reuse K/V from the last non-shared layer of the same attention type; and a vision encoder using learned 2D positions and multidimensional RoPE that **preserves original aspect ratios** and can encode an image to one of five token budgets (70 / 140 / 280 / 560 / 1120). Google explicitly says it left out "complex or inconclusive features such as Altup" in favour of cross-library compatibility and quantization-friendliness.

### Raw benchmarks found

> Two source classes here, and they disagree in an instructive way. Google's own instruction-tuned table is detailed and self-consistent; Artificial Analysis measures several of the same things independently. On GPQA the independent number is *higher* than the vendor's; on τ²-bench it is 17 points *lower*. Both are reported.

Agent / tool use:

- **Tau2 (Google, average over 3 runs): 76.9%** ([Google benchmark table](https://huggingface.co/blog/gemma4)) — against 68.2% for 26B A4B and 16.2% for Gemma 3 27B
- **τ²-bench (independent): 59.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-31b)) — a **17-point shortfall** against the vendor figure, the largest vendor-vs-independent gap I have recorded in this pass
- GDPval-AA: **755 Elo** / **6.1%** normalized (Artificial Analysis) — very weak on real professional work
- AA Agentic Index: **6.7%** (Artificial Analysis) — near-floor
- Gert Labs rankings: **35.26%** ([Gert Labs](https://gertlabs.com/rankings))
- Terminal-Bench (any version), OSWorld, MCP-Atlas, Toolathon, Claw-Eval: no verified public score found
- Qualitative but substantive: native JSON bounding-box output for GUI element detection, verified working multimodal function calling, and a published TRL example in which Gemma 4 learns to drive in the CARLA simulator from camera input and "consistently changes lanes to avoid pedestrians" after training — evidence of a usable perception→action loop rather than a benchmark score

Reasoning / knowledge:

- MMLU-Pro: **85.2%** (Google) — top of its family, above 26B A4B's 82.6%
- **GPQA Diamond: 84.3%** (Google); independently **AA-GPQA Diamond 85.7%** (Artificial Analysis) — the independent harness scores it *higher*, which is unusual and raises confidence
- AIME 2026 (no tools): **89.2%** (Google)
- MMMLU: **88.4%**; BigBench Extra Hard: **74.4%** (Google)
- HLE: **19.5% without tools**, **26.5% with search** (Google); independently **AA-HLE 23.6%**
- AA-LCR: **69.7%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- **AA-IFBench: 75.6%** (Artificial Analysis) — notably strong instruction following, better than several far larger models in this dataset
- Artificial Analysis Intelligence Index: **14.7**; BenchLM overall **40.47/100, rank #131 of 889** (24 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−47.9**, Accuracy **20.0%**, **Hallucination Rate 85.0%** — the worst hallucination figure in this pass
- LMArena (text-only), Google-estimated: **1452 Elo** for the 31B dense model (26B A4B at 1441 on 4B active) — vendor-estimated, not an official arena placement

Coding:

- LiveCodeBench v6: **80.0%** (Google) — family-best, versus 77.1% for 26B A4B and 29.1% for Gemma 3 27B
- **Codeforces ELO: 2150** (Google) — a large jump over 26B A4B's 1718 and Gemma 3 27B's 110
- SWE-Rebench: **41.6%** ([SWE-Rebench leaderboard](https://swe-rebench.com/))
- React Native Evals: **75.2%** ([rn-evals](https://rn-evals.vercel.app/))
- AA-SciCode: **45.5%**; AA Coding Index: **43.4%** (Artificial Analysis)
- **SWE-bench Verified / SWE-bench Pro: no verified public score found** — Google published neither, and no independent harness has posted one

Multimodal:

- MMMU-Pro: **76.9%** (Google); independently **AA-MMMU-Pro 73.4%** (Artificial Analysis)
- MATH-Vision: **85.6%** (Google) — family-best by 3 points
- **OmniDocBench 1.5 (edit distance, lower is better): 0.131** (Google) — best in the family and a genuine document-OCR result, not a proxy
- MedXpertQA (MM): **61.3%** (Google)
- No audio benchmark, correctly — the 31B has no audio encoder (CoVoST and FLEURS rows are blank for it in Google's own table)

Long context:

- **MRCR v2, 8-needle at 128k (average): 66.4%** (Google) — a real multi-needle retrieval measurement, and 22 points above the 26B A4B's 44.1%. This is one of very few models in this dataset with any published retrieval curve at all, and it deserves explicit credit for that.
- AA-LCR 69.7% corroborates usable long-context reasoning. No measurement exists at the full 256K, only at 128K.

### Normalized scores (1–100)

- **Tool use: 55/100.** This is the dimension where the independent record contradicts the vendor hardest, and I weight the independent record: Google reports Tau2 76.9%, Artificial Analysis measures τ²-bench at **59.9%**, and the two agentic aggregates that exist are near-floor — **GDPval-AA 755 Elo (6.1% normalized)** and an **AA Agentic Index of 6.7%**. Real credit is retained for genuinely useful capabilities that benchmarks here miss (native JSON GUI/object grounding, working multimodal function calling, the CARLA perception-action result, and first-class agent integrations including OpenCode), but a 31B open model with no Terminal-Bench, no OSWorld and a 6.7% agentic index cannot be scored as a competent autonomous agent.
- **Reasoning: 72/100.** Strong and, crucially, independently corroborated at the top end — GPQA Diamond 84.3% vendor against **85.7% independent**, which is the rare case of an outside harness confirming upward. MMLU-Pro 85.2%, AIME 2026 89.2%, MMMLU 88.4% and an **AA-IFBench of 75.6%** are excellent for 31B dense weights. Capped by HLE at 19.5% without tools, CritPt 1.4%, an AA Intelligence Index of 14.7, and above all an **85.0% hallucination rate against 20.0% accuracy** on Omniscience — it almost never declines to answer.
- **Context window: 76/100.** 256K is solid but mid-pack by 2026 standards. The score is nonetheless *above* what the raw window would earn, because this is one of the few models anywhere in this dataset with a **published multi-needle retrieval result** — MRCR v2 8-needle at 128k of 66.4%, backed by AA-LCR 69.7% — so the window is demonstrably usable rather than nominal, and the dual-RoPE / sliding-plus-global design is a documented mechanism rather than a claim. Held under 80 because nothing is measured at the full 256K, only at half of it.
- **Multimodal: 82/100.** The strongest dimension, and the one that justifies the model's existence: text, image **and video** in, with MMMU-Pro 76.9% (73.4% independently), MATH-Vision 85.6%, MedXpertQA-MM 61.3%, an **OmniDocBench 1.5 edit distance of 0.131** that makes it a credible document-OCR engine, and native aspect-ratio-preserving encoding with selectable token budgets. Capped below the mid-80s by text-only output, by the **absence of any audio pathway on this size** (unlike its own E2B/E4B/12B siblings), and by video being audio-less at this scale.
- **Coding: 68/100.** LiveCodeBench v6 80.0% and a **Codeforces ELO of 2150** are strong competitive-programming results for 31B dense weights, and React Native Evals 75.2% shows practical front-end ability. Capped by the complete absence of **SWE-bench Verified or Pro** — the benchmarks that measure real repository repair — with only SWE-Rebench 41.6% standing in, plus AA-SciCode 45.5% and an AA Coding Index of 43.4%. It writes code well; there is no evidence it fixes codebases well.
- **Cost efficiency: 96/100.** **Apache 2.0, 31B dense, zero per-token cost, no data-usage caveat, and genuinely deployable** — day-0 llama.cpp / MLX / ONNX / WebGPU support, quantized GGUF builds, MLX TurboQuant at ~4× less active memory, and Google-released **MTP drafter** checkpoints delivering up to ~3× lossless speculative-decoding speedup. For a model posting GPQA Diamond 85.7% independently and Codeforces 2150, running at zero marginal cost on hardware you already own is close to the best value in this dataset. Short of 100 only because 31B dense weights still need real GPU memory (the on-device story belongs to E2B/E4B, not this size) and there is no hosted endpoint if you do not want to run it yourself.
- **Overall Score: 70.6/100.** Mean of the five non-cost dims (55 + 72 + 76 + 82 + 68) / 5 = 70.6. Best fit: self-hosted multimodal document, chart, video and GUI understanding plus competitive-programming-grade code generation, at zero marginal cost and with no data leaving the network — and it is one of the few models here whose long-context claim is actually measured. Do not put it in charge of an autonomous tool loop (6.7% agentic index), and do not trust it to abstain (85% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google DeepMind's Gemma 4 launch write-up on Hugging Face (family size/context table, full architecture description incl. PLE, shared KV cache, dual RoPE and vision-encoder token budgets, per-size modality matrix, deployment matrix, MTP drafters, and the complete instruction-tuned benchmark table incl. MRCR v2 and OmniDocBench), the `google/gemma-4-31B(-it)` Hugging Face model pages, BenchLM's aggregated page, and the underlying Artificial Analysis, SWE-Rebench, Gert Labs and rn-evals leaderboards. The OpenCode Zen catalogue was checked and contains no Gemma entry. Where Google's figures and Artificial Analysis disagree — τ²-bench (76.9% vs 59.9%), GPQA Diamond (84.3% vs 85.7%), MMMU-Pro (76.9% vs 73.4%) — both are reported and the independent figure is the one weighted in the score. Audio benchmarks were deliberately **not** credited, since Google's own documentation restricts audio input to the E2B, E4B and 12B Unified variants. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
