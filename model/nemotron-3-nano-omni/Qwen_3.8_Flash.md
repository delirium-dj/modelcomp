# Nemotron 3 Nano Omni — findings by Qwen 3.8 Flash

- Source: NVIDIA (curated id `opencode/nemotron-3-nano-omni`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (checkpoint `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning`, served on NVIDIA Build as `nemotron-3-nano-omni-30b-a3b-reasoning`)
- **Short description:** NVIDIA's **omni-modal** member of the Nemotron 3 Nano line: one small hybrid-MoE model that takes **text + image + video + audio** jointly in a single sequence and reasons over all of them — built for document intelligence, speech understanding, long audio-video Q&A, and GUI/computer-use agents. The stated engineering goal is to keep the text abilities of the Nano backbone while adding vision and audio without wrecking throughput: NVIDIA claims **up to 9× higher throughput** and **2.9× single-stream reasoning speed** versus alternatives, helped by Efficient Video Sampling (token pruning of static frames) and Conv3D frame fusion.
- **Provider / access:** open **weights** released in BF16 (61.5 GB), FP8 (32.8 GB, 8.5 effective bpw) and NVFP4 (20.9 GB, 4.98 bpw), with encoders/projectors kept BF16. **Licence flag:** the card declares `license: other` → **NVIDIA Open Model License**, *not* Apache 2.0 — so "open checkpoints" is true but the terms are NVIDIA's own. Runs on TensorRT-LLM, vLLM, TensorRT Edge-LLM, llama.cpp, Ollama and SGLang, validated on hardware from H100/H200/B200/GB200 down to **RTX 5090, RTX PRO 6000, L40S, DGX Spark and Jetson Thor**. Free hosted access via the NVIDIA Build API endpoint.
- **Release / knowledge:** announced **2026-04-27/29** (HF blog + checkpoints dated 2026-04-27, blog 2026-04-29); technical report on arXiv **2604.24954**. Training corpora are documented (354.6 M items across 1,395 datasets: text+audio 259.2 M, text+image 70.1 M, text+video 15.8 M, text+video+audio 8.7 M, text-only 0.7 M; primarily English; ~11.4 M synthetic PDF QA pairs ≈ 45 B tokens), with EU text-and-data-mining opt-out handling described. A single knowledge-cutoff date is not printed.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` / `-FP8` / `-NVFP4` (HF), `nemotron-3-nano-omni-30b-a3b-reasoning` (NVIDIA Build), curated id `opencode/nemotron-3-nano-omni`. **No aggregator coverage:** BenchLM returns 404 for `nemotron-3-nano-omni`, so there is no independent overall score or rank for this ID.
- **Context window:** **up to 256 K tokens** per the card ("Maximum context length up to 256k"); the curated `meta.json` states **262,144 total with 65,536 max output**, and the card's own recommended inference settings use `max_model_len=210000` with `max_token=20480` (raising output to **210,000** for complex math/programming reasoning). So: 256 K-class window, output budget mode-dependent and *documented as adjustable*, not a fixed 65 K cap.
- **Modalities:** text, image, **video**, **audio** in; text out. Audio is genuinely native — a **Parakeet-TDT-0.6B-v2** encoder at 16 kHz through its own 2-layer MLP projector, trained on inputs up to **1,200 s (20 minutes)**, with the LLM context supporting 5+ hours; vision uses **C-RADIOv4-H**. No image/audio/video *output*.
- **Pricing (as of 2026-10-07):** **$0** through the NVIDIA Build free API endpoint (rate-limited developer tier), and effectively $0 self-hosted under the NVIDIA Open Model License at 20.9–61.5 GB footprint. No commercial per-token price sheet is published for the hosted endpoint, so there is nothing to compare against the methodology's paid tiers.
- **Architecture:** 31 B total / **~3 B active per token** — a Mamba2-Transformer hybrid MoE: 23 Mamba selective-state-space layers, 23 MoE layers (128 experts, top-6 routing + shared expert), 6 grouped-query-attention layers, unified encoder–projector–decoder design on the `Nemotron-3-Nano-30B-A3B` LLM backbone. Post-training is staged alignment + context extension, preference optimisation, and **multimodal RL** (NeMo-RL / NeMo Gym) whose verifier suite deliberately includes **unanswerable cases to teach abstention** rather than hallucination. Two inference modes: thinking (with **Budget-Controlled Reasoning**, `reasoning_budget=16384`, temp 0.6, top_p 0.95) and instruct (temp 0.2, top_k 1; ASR prefers temp 1.0, top_k 1).
- **Identity flag:** the **Omni** variant is a different model from `Nemotron-3-Nano-30B-A3B` (text LLM) and from `Nemotron Nano V2 VL` (vision-only), and NVIDIA's own tables compare it against **Qwen3-Omni 30B-A3B** — a same-size rival, not the same model. Registry folders `model/nemotron-3-ultra-free/` and `model/nemotron-3.5-lightning-free/` are separate Nemotron 3 lines.

### Raw benchmarks found

All rows are **NVIDIA-run** (blog comparison table plus the model card's evaluation set of 14 public benchmarks: MathVista_MINI, CharXiv Reasoning, MMLongBench-Doc, OCR Reasoning, OCRBenchV2-EN, CVBench2D, OSWorld, Video-MME, VoiceBench, Tedium Long, HF-ASR, MMAU, WorldSense, DailyOmni). Values in parentheses are `Nemotron Nano V2 VL` (predecessor) / `Qwen3-Omni 30B-A3B` (rival).

Document / image understanding:

- OCRBenchV2-EN: **65.8** (V2 VL 61.2 / Qwen3-Omni —)
- MMLongBench-Doc: **57.5** (38.0 / 49.5) — NVIDIA reports a **2.19×** accuracy gain on this benchmark from its synthetic long-document QA training
- CharXiv Reasoning: **63.6** (41.3 / 61.1)

GUI / computer use:

- ScreenSpot-Pro: **57.8** (5.5 / 59.7)
- OSWorld: **47.4** (11.0 / 29.0) — with a documented computer-use tool set (click, scroll, wait, terminate-with-status) used in the card's own agent examples

Video / audio / omni:

- Video-MME: **72.2** (63.0 / 70.5)
- WorldSense (video+audio): **55.4** (— / 54.0)
- DailyOmni (omni understanding): **74.1** (— / 73.6)
- VoiceBench: **89.4** (— / 88.8) — claimed best audio-understanding accuracy among open omni models
- HF Open ASR (word error rate, lower better): **5.95** (— / 6.55)
- Quantisation robustness: FP8 and NVFP4 stay **within ~1 point of BF16 on average** across 9 multimodal benchmarks (non-reasoning mode)

Reasoning / knowledge / coding (text-side):

- GPQA, HLE, MMLU-Pro, AIME, IFEval, LiveCodeBench, SWE-bench Verified, Terminal-Bench, τ²/τ³, Toolathlon, Claw-Eval, GDPval-AA, MRCR, AA Intelligence Index: **no verified public score found for this ID** — NVIDIA's published evaluation suite for the Omni checkpoint is multimodal-only, and the text-reasoning rows that exist in the Nemotron 3 Nano family belong to the separate text LLM (`Nemotron-3-Nano-30B-A3B`), not to this omni model
- No Artificial Analysis page and no BenchLM page exist for this ID, so there is no independent intelligence, coding or agentic measurement anywhere

### Normalized scores (1–100)

- **Tool use: 55/100.** OSWorld **47.4 %** and ScreenSpot-Pro **57.8 %** are the standout agentic rows: a 4× jump over its own VL predecessor on OSWorld and near-parity with Qwen3-Omni on GUI grounding, backed by a real computer-use tool protocol and RL that includes unanswerable-case abstention. Against the methodology's references (mid band ~45–60 % on terminal-class work) that is respectable, but τ²/τ³, Toolathlon, Claw-Eval, AutomationBench and GDPval have **no row for this ID at all**, and there is no independent harness measurement — "slight penalty, no hallucinated score".
- **Reasoning: 50/100.** The published evidence is almost entirely perceptual: MathVista_MINI, CharXiv 63.6 and MMLongBench-Doc 57.5 imply solid multi-step, evidence-synthesising reasoning, and the architecture (Mamba + MoE with only ~3 B active) sets a realistic ceiling. But no text reasoning/knowledge benchmark (GPQA, HLE, MMLU-Pro, IFBench, Omniscience, Intelligence Index) is published for this checkpoint, so the score is a floor-of-mid-tier judgement made explicitly *because* the number is missing, not because a measured result is weak.
- **Context window: 72/100.** A 256 K-class window with a documented **210,000-token `max_model_len`** option and output budgets up to 210 K is the 200 K–500 K tier (65–84), and the multimodal case makes it unusually useful in practice — dozens of dense document pages or 20 minutes of audio plus video fit in one pass. It does not reach the tier's top because no MRCR/AI-Needle retrieval number exists for the ID and the window is mostly exercised over media tokens rather than verified text retrieval.
- **Multimodal: 93/100.** Text + image + **video** + **audio** in with text out is the methodology's 90–100 band, and this is a fully earned entry: audio is native (Parakeet-TDT-0.6B-v2, 16 kHz, trained to 1,200 s, VoiceBench **89.4**, ASR WER **5.95**), video+audio are jointly modelled (WorldSense 55.4, DailyOmni 74.1, Video-MME 72.2), and document/GUI perception is best-in-class for its size (OCRBenchV2 65.8, MMLongBench-Doc 57.5, CharXiv 63.6, ScreenSpot-Pro 57.8). It is not pushed higher only because output is text-only and every row is vendor-run.
- **Coding: 35/100.** There is **no** coding benchmark of any kind for this ID — no LiveCodeBench, SWE-bench, DeepSWE, SciCode, terminal-coding or Coding-Index row — and NVIDIA does not position it as a coding model (its sibling `Nemotron-Code` line carries that role). A weak proxy exists in the card's advice to raise output length for "math and programming" reasoning, but proxies are not measurements, so this scores near the bottom of the mid band with the absence stated rather than papered over.
- **Cost efficiency: 99/100.** $0 through the free NVIDIA Build endpoint plus openly downloadable checkpoints that fit a single consumer GPU (NVFP4 at 20.9 GB, also validated on DGX Spark and Jetson Thor), with FP8/NVFP4 costing under a point of accuracy — this is the cheapest credible omni-modal path in the registry. One point withheld because the free endpoint is a rate-limited developer tier with no SLA and no published commercial rate card, and the NVIDIA Open Model License is custom rather than Apache 2.0.
- **Overall Score: 61/100.** Mean of the five quality dimensions (55 + 50 + 72 + 93 + 35) / 5 = 305 / 5 = 61.0 → 61; Cost excluded per `RULES.md`. Best fit: **multimodal agent pipelines on NVIDIA hardware** — long-document and chart extraction, meeting/lecture video+audio Q&A, ASR with downstream reasoning, GUI/computer-use automation, and edge or on-prem deployments where 3 B active parameters plus a $0 licence matter more than raw reasoning depth. It is explicitly not the pick for software engineering or frontier text reasoning, and its capability claims on the text side are unverified by any third party.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (NVIDIA's Hugging Face launch blog "Introducing NVIDIA Nemotron 3 Nano Omni", the `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` model card README (full architecture, licence, training-data, evaluation-set and sampling-parameter sections), the NVIDIA Build model card, arXiv 2604.24954 listings, community quantisation notes); scores are normalized 1–100 interpretations, not official vendor scores. **Evidence status:** vendor-only and modality-skewed — BenchLM and Artificial Analysis have no page for this ID, so every published number comes from NVIDIA and covers perception rather than text reasoning or coding; the missing-harness list is therefore printed in full in each dimension.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
