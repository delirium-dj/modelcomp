# Nemotron 3 Nano Omni — findings by Space Bunny

- Source: NVIDIA (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-09 (Overall 69).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (Nemotron-3-Nano-Omni-30B-A3B)
- **Short description:** NVIDIA's **first natively audio-capable Nemotron multimodal model** — the first in the Nemotron series to accept audio alongside text, images and video. A 30B-total / 3B-active hybrid MoE (Mamba-2 + Transformer) built on the Nemotron 3 Nano 30B-A3B backbone with a C-RADIOv4-H vision encoder and a Parakeet-TDT-0.6B-v2 audio encoder. Top use cases per NVIDIA: **real-world document understanding, long audio-video comprehension, and agentic computer use**, plus multimodal sub-agent reasoning. NVIDIA calls it the most cost-efficient open video-understanding model on MediaPerf and the highest-throughput model in its class. **NVIDIA has since shipped Nemotron 3.5 Super VL (2026-10-15), which AA scores at 26 — roughly 2.5× this model — and Nemotron 3.5 Bolt 74B-A9B, so the 3 Nano Omni is no longer NVIDIA's strongest open multimodal offer.**

> **Routing note (`RULES.md` voice check — model stays under `model/`):** this model's modalities say "audio", but it is **not** a voice/speech model. Audio is **input-only, and one of four co-equal input modalities** (text, image, video, audio); **output is text only**. It is not a realtime voice API, not TTS/STT-first, and has no voice-assistant audio I/O. It therefore correctly belongs under `model/`, not `models_voice/`.

- **Provider / access:** Hugging Face `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}` (open weights + released training data and code). NVIDIA NIM (NGC image tag `1.7.0-variant`, OpenAI-compatible `/v1/chat/completions`; `max_tokens` up to 65536 in the build.nvidia prototype, `reasoning_budget` parameter supported). **OpenRouter `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`** and a Kilo Gateway `:free` route — zero-cost across all four input modalities. Self-hostable via vLLM / SGLang / NeMo AutoModel / Megatron-Bridge. No OpenCode Zen ID found.
- **Release / knowledge:** Weights and build.nvidia card **2026-04-28**. Technical report **arXiv:2604.24954**, v1 dated 27 Apr 2026, **now revised to v2** — the v2 HTML is the current canonical version and is what this pass reads. Knowledge cutoff: not disclosed.
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (build.nvidia / NIM), `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}` (HF), `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` (OpenRouter)
- **Context window:** **Conflict, unresolved between vendor surfaces.** NVIDIA's HF model cards and build.nvidia NIM card say **"Max context: 256k tokens"**; the technical report and NVIDIA's own architecture documentation give **262,144** (raised from 128K on the Nemotron Nano V2 VL predecessor). **The hosted NVIDIA route does not serve the advertised window**: Requesty's live provider matrix lists the NVIDIA endpoint for this exact model at **131K context / 20K max output** (retrieved 2026-10-17), i.e. roughly half the advertised 256K and a third of the report's 262K. The text-only sibling Nemotron 3 Nano 30B-A3B LLM reaches 1M — that figure does **not** transfer to this Omni variant.
- **Modalities:** **Text, image, video, and audio in → text out** (HF cards: "Modalities (in) Video, Audio, Image, Text; Modality (out) Text"). Reasoning: on by default, toggle via `enable_thinking`, adjustable reasoning budget. Tool calls / function calling: supported. Minimum deployment: BF16 1×H100 80GB; FP8 1×L40S 48GB; NVFP4 1×RTX 5090 32GB (DGX Spark / Jetson Thor also supported).
- **Pricing (as of 2026-10-17):** **Genuinely $0 on multiple routes** — NVIDIA's own NIM endpoint, OpenRouter `:free` and Kilo Gateway `:free` are all listed at free input / free output by LLM List and Requesty. For paid: **Artificial Analysis (via LMSpeed, 2026-10-17) records the official NVIDIA API at $0.30 in / $0.90 out per 1M**, blended $0.45; Sophon mirrors the same AA figure. **Conflict:** LLM List records the cheapest *paid* provider at **$0.06 in / $0.24 out** (Requesty route), Token Barometer lists `nvidia/NVIDIA-Nemotron-3-Nano-Omni` at $0.06/$0.24, and xKiro quotes $0.05/$0.20 with a $0.03 cached rate, while DigitalOcean lists $0.50/$0.90. The AA-sourced first-party figure ($0.30/$0.90) is preferred because it is traceable to the vendor's own listing; the ~$0.06/$0.24 figures are third-party relay rates that may be a stale snapshot or a different SKU, and are not credited.
- **Architecture:** Hybrid MoE, **31B total / ~3B active** (HF card states 3.1×10¹⁰), Mamba2-Transformer hybrid; vision encoder C-RADIOv4-H → MLP vision adaptor; audio encoder Parakeet-TDT-0.6B-v2 (16 kHz mono, ~12.5 tokens/s, 30-second clip segmentation; trained 0.5 s–20 min, context holds >5 h). Released in **BF16 (61.5 GB, 16.00 bpw), FP8 (32.8 GB, 8.5 bpw), NVFP4 (20.9 GB, 4.98 bpw)**; quant table reports Δ vs BF16 of only **−0.40 (FP8) / −0.38 (NVFP4)** mean across 9 non-ASR benchmarks, with vision/audio encoders and projectors kept in BF16. Trained in 7 SFT stages then RL (MPO, Text/Image/Omni-RL, GSPO); **466.9B training tokens across 434.1M samples**. Licenced for commercial use.

### Raw benchmarks found

> **Evidence-class warning, the headline of this pass.** The first pass of this report was built almost entirely on NVIDIA's own technical report. This pass found that **independent evaluators now exist and they are far lower than the vendor's numbers on exactly the text-side dimensions** — while the *multimodal* numbers survive independent checking almost intact. Rows below are labelled **[V]** vendor-reported (NVIDIA tech report / model card) or **[I]** independently measured.

Agent / tool use:

- OSWorld: **47.4%** **[V]** — but **independently reprinted unchanged** by benchlm.ai as a "NVIDIA technical report" source, i.e. it is *not* an independent measurement despite now appearing on aggregator pages.
- TauBench V2 (Telecom): **42.7%** **[V]**. **Conflict:** benchlm.ai, BenchmarkList and Sophon all publish **τ²-bench 45.3%**, but attribute it explicitly to the NVIDIA technical report — so 42.7 and 45.3 are the same vendor measurement under two labels (TauBench V2 vs τ²-bench), not two independent runs. Both are listed; neither is independent.
- ScreenSpot-Pro **59.3 / 57.8%** (reasoning off/on) **[V]**; ScreenSpot **90.3 / 89.3%**; ScreenSpot-v2 **93.4 / 92.8%** **[V]**
- **GDPval-AA: 765 Elo [I]** (Artificial Analysis; rank **160 of 352**, 55th percentile — bottom quintile). The first pass recorded "no verified public score found"; one now exists and it is weak.
- **Terminal-Bench Hard: 8.3% [I]** (Artificial Analysis, 2026-06-10; rank 166/326, 49th pct)
- **Terminal-Bench 2.1: 6.7% [I]** (BenchmarkList, 2026-09-02, rank **159 of 194**, 18th percentile — i.e. bottom sixth of the field, ~85 pts behind the leader)
- IFBench: **74.2%** **[V]**; AA-IFBench **63.2% [I]** (lower)
- Tau3-Banking / Tau2-Bench other domains, Claw-Eval, Toolathon / MCP-Atlas / SWE Atlas, AA Harvey LAB / AA-Briefcase / AA Agentic Index: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **72.2%** **[V]**. **Conflict — this is the single most important conflict in the report:** Artificial Analysis measures **AA-GPQA Diamond 46.9% [I]** (rank 344/468, 27th pct), a ~25-point gap. The vendor number is almost certainly a no-tools, generous-decoding, self-run figure; the AA number is a fixed harness. **AA is preferred for scoring.**
- MMLU-Pro: **77.3%** **[V]**; AIME 2025 (no tools) **82.1%** **[V]**
- **AA-HLE: 4.8% [I]** (Design-for-Online quotes 5.3% for the same run — treat as ~5%)
- **CritPt: 0.0% [I]** — the floor
- **AA-Omniscience Index: −57.4 [I]; Accuracy 15.2%; Hallucination Rate 85.7%** — on the hallucination probe the model fails roughly 8.6 attempts in 10. BenchmarkList's AA snapshot (2026-07-21) has −56.03 / 27.8 SciCode, so this is stable, not a one-off.
- **AA Intelligence Index: 10.3 (benchlm/AA), 15.0 (NanoGPT mirror, 2026-08-16), 14.93 verified (BenchmarkList, 2026-07-21) [I]** — three figures, all far below the first pass's implicit read; the newest benchlm (2026-10-17) reading of **10.3** is preferred.
- **Humanity's Last Exam: 5.3% [I]** (BenchmarkList, verified 2026-07-21, rank 302/479)
- BenchLM overall: **32.22/100, #173 of 954** (2026-10-17) — *down* from 44.58/#172 of 228 in the first pass; same rank, worse absolute score as the index matured.

Coding:

- LiveCodeBench v5: **63.2%** **[V]** (its own text backbone 68.3%)
- SciCode: **32.0%** **[V]**; **AA-SciCode 27.8% [I]** (BenchmarkList 45.0% row is a *different* model — do not cross-apply)
- **AA Coding Index: 13.8 [I]** — one of the lowest tracked
- **Terminal-Bench 2.1: 6.7% [I]** — 18th percentile of 194; **Terminal-Bench Hard 8.3% [I]**
- BLXBench (community): **29.9% [I]**, 17/25
- SWE-bench Verified / SWE-bench Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR: 41.0% [V]**. **Conflict:** Artificial Analysis independently measures **39.7% [I]** (BenchmarkList, 2026-10-03, rank 225/408, 45th pct; NanoGPT mirrors 40.7%). Both are weak; the independent 39.7% is preferred.
- **No MRCR / RULER / GraphWalks number exists for this model.**
- 256K/262,144 max; long audio capacity >5 h inside the window; TED-LIUM Longform WER 3.11% **[V]**
- **Hosted-route caveat:** the NVIDIA NIM route is measured at 131K context / 20K max output by Requesty, so the long-context claims are materially harder to exercise in production than the cards suggest.

Multimodal — vision (Table 7, reasoning off / on) — all **[V]**, but independently ranked **[I]** where noted:

- MMMU (val) **55.2 / 70.8%**; MathVista-Mini **71.9 / 82.8%**; MMLongBench-Doc **46.1 / 57.5%** (best in NVIDIA's set); OCRBench **88.3 / 86.6%**; OCRBenchV2 EN/ZH **65.8/52.0 → 67.0/52.7%**
- **Independent confirmation of the multimodal story is genuinely good here:** OCRBench-V2 (en) **65.8% ranks 4 of 28 (89th pct)** and **OCRBench-v2 aggregate 65.8% ranks 3 of 30 (93rd pct)** on BenchmarkList (2026-07-13) **[I]**; **MMLongBench-Doc 57.6% ranks 5 of 20 (79th pct)** (2026-05-06) **[I]**; **VoiceBench 89.39 overall ranks 7 of 47 (87th pct)** (2026-05-27) **[I]**. These are the rows that survive.
- **Conflict:** AA-MMMU-Pro **53.2% [I]** — a harder variant than the vendor's MMMU 70.8%; not directly comparable, but it is the only independent visual-reasoning number and it is far below the vendor's own MMMU figure, so vendor visual numbers should be read as optimistic.
- DocVQA 93.3/95.6%; AI2D 88.5%; ChartQA 89.9/90.3%; TextVQA 85.1/81.0%; InfoVQA 83.6/86.8%; OCR-Reasoning 22.2/54.14%; CharXiv (RQ/DQ) 49.1/81.9 → 63.6/88.9; RefCOCO 80.6/90.5%; TreeBench 43.7/51.6%; CV-Bench 84.2/84.0%; VideoMME (w/o sub) 70.8/72.2%

Multimodal — audio (Table 8, WER lower is better) — all **[V]**:

- **OpenASR average WER 5.95%** (vs Qwen3-Omni 6.55%); per-corpus AMI 11.09, Earnings22 11.27, GigaSpeech 9.66, LibriSpeech clean 1.57, LibriSpeech other 2.96, SPGISpeech 1.98, TED-LIUM 3.44, VoxPopuli 5.60
- TED-LIUM Longform WER **3.11%** (Qwen3-Omni 2.4%); **MMAU average 74.6%** (trails Qwen3-Omni 77.5 and Qwen3.5-Omni 80.4)
- **VoiceBench average 89.4%** (reasoning on; best in NVIDIA's set) — independently ranked **#7 of 47**

Multimodal — audio-visual (Table 9) — all **[V]**:

- DailyOmni **74.5 / 74.1%** (Qwen3.5-Omni 81.8 — NVIDIA trails); WorldSense **55.2 / 55.4%** (Qwen3.5-Omni 57.8 — NVIDIA trails)

Efficiency (NVIDIA-measured, single B200, vLLM nightly 2026-04-19, EVS 50%) — all **[V]**:

- **>500 output tokens/s** single-stream at concurrency 1 (**2.4–2.9× Qwen3-Omni's 175–210 tok/s**, 2× Nemotron Nano V2 VL's 250); **5,000 output tok/s** at max concurrency on one B200 (multi-document)
- **NVFP4 gives up to 7.5× the BF16 output throughput at iso-interactivity (18,200 vs 2,400 tok/s at 150 tok/s/user)** on a single-image reasoning use case — a figure the first pass did not capture
- TTFT ~**1.3 s** on multi-document workloads (vs >2.5 s for Qwen3-Omni)
- Token reduction on a 512-frame video: ~**141k** → ~**75k** with Conv3D (−47%) → ~**42k** with Conv3D+EVS at q=0.5 (−70%); TTFT 7969 ms → 5984 ms → **5313 ms (−33%)** for about half a point of average accuracy
- ~9.2× effective system capacity vs comparable open omni models on video reasoning, ~7.4× on multi-document; "most cost-efficient open video understanding model on MediaPerf"
- **Third-party speed corroboration:** llmbase.ai measures 239.8 tok/s and 590 ms TTFT; Sophon ranks it **#11 of 499 at 242 tok/s**; llm.ing/Choosemodel-class trackers put it around 114–240 tok/s depending on route. Directionally consistent with NVIDIA's claims, lower in absolute terms.

### Normalized scores (1–100)

- **Tool use: 48/100** (was 55). **Lowered on new independent evidence.** OSWorld 47.4%, ScreenSpot-v2 93.4% and IFBench 74.2% are real agentic-computer-use capability and are the reason this is not lower. But the independent agentic rows that now exist are bad: **Terminal-Bench 2.1 at 6.7% (18th percentile of 194)**, **Terminal-Bench Hard 8.3%**, and **GDPval-AA at 765 Elo (160 of 352)**. Two of the first pass's "no verified public score found" holes have now been filled with floor-level numbers, and the one tau-bench figure the vendor publishes is only a single Telecom domain. Note the τ²-bench 45.3% circulating on aggregator sites is a **relabelled vendor number**, not an independent one.
- **Reasoning: 52/100** (was 68). **Largest single drop in this report.** The vendor's own text numbers are mid-tier (GPQA 72.2%, MMLU-Pro 77.3%, AIME25 82.1%), and *they* fall below the model's own text backbone — an honest cost of adding modalities that NVIDIA itself documents. What changed the score is that independent measurement now contradicts the vendor head-to-head: **AA-GPQA Diamond 46.9% vs the card's 72.2%**, **AA-HLE 4.8%**, **CritPt 0.0%**, **AA-Omniscience Hallucination Rate 85.7% with 15.2% accuracy**, and an **AA Intelligence Index of 10.3–15.0**. For a model whose intended job is to be a *reliable* perception sub-agent inside someone else's loop, an ~86% hallucination rate on the abstention probe is the binding constraint.
- **Context window: 68/100** (was 78). **Lowered.** The advertised window is **256K on the HF/NIM cards vs 262,144 in the technical report**, and the hosted NVIDIA route is measured at only **131K / 20K max output**, so what you can actually use is roughly half the headline. On top of that the one measured retrieval benchmark is weak and the two measurements disagree only slightly: **AA-LCR 41.0% [V] vs 39.7% [I]**. There is still no MRCR, RULER or GraphWalks figure. The >5-hour audio capacity remains a genuine asset but is not a text-retrieval score. 68 reflects a real ~256K-class window with poor demonstrated retrieval over it.
- **Multimodal: 87/100** (was 88). **Essentially unchanged, and this is the dimension that earns the model its place.** New evidence is *confirmatory* rather than corrective: **OCRBench-v2 65.8% independently ranks #3–#4 of ~30 (89th–93rd percentile)**, **MMLongBench-Doc 57.6% ranks #5 of 20**, **VoiceBench 89.39 ranks #7 of 47**, and every multimodal row in the table is vendor-reported but internally consistent and reproduced across three NVIDIA surfaces (tech report v1, v2, HF cards, build.nvidia card). Held at 87 rather than raised despite the omni coverage because the only independent visual-reasoning number, **AA-MMMU-Pro 53.2%**, is well below the vendor's MMMU 70.8%, and because MMAU, DailyOmni and WorldSense all trail Qwen3.5-Omni.
- **Coding: 38/100** (was 55). **Largest proportional drop.** The first pass had no independent coding data and scored on two vendor numbers. The independent picture is now available and it is close to the floor: **Terminal-Bench 2.1 6.7% (18th percentile of 194)**, **Terminal-Bench Hard 8.3%**, **AA Coding Index 13.8**, **BLXBench 29.9% (17 of 25)**, **AA-SciCode 27.8%**. The vendor's own LiveCodeBench 63.2% is already *below* its text backbone (68.3%) and is the best number in the column. There is no SWE-bench, no SWE-bench Pro and no DeepSWE for this model. This is a perception model; treating it as anything else is a misread.
- **Cost efficiency: 95/100.** **Unchanged.** The case is now stronger, not weaker: the **$0 free tier is confirmed on three separate routes** (NVIDIA's own NIM, OpenRouter `:free`, Kilo Gateway `:free`), the first-party paid rate is **$0.30 in / $0.90 out** (AA via LMSpeed, 2026-10-17) — cheaper than the ~$0.60/$2.20 reference point — and the hardware story is backed by NVIDIA's own B200 measurements plus third-party corroboration at ~240 tok/s. **NVFP4 at 20.9 GB running within 0.4 points of BF16** makes single-GPU self-hosting (even a 32 GB RTX 5090) genuinely practical. Held at 95, not 100, because the free tier is time- and rate-limited with inference-provider retention caveats, and because the **$0.06/$0.24 third-party relay rate could not be reconciled** with the AA first-party figure — if the cheap relay rate is real, this should be higher.
- **Overall Score: 59/100.** `(48 + 52 + 68 + 87 + 38) / 5 = 293 / 5 = 58.6 → 59`. Best fit: **single-model multimodal perception sub-agents** — document intelligence (independently top-5 on MMLongBench-Doc), long audio-video comprehension, GUI/computer-use sub-agents, and ASR — where replacing a separate vision stack, video pipeline and ASR model with one 3B-active NVFP4 checkpoint is worth more than any text benchmark. **Do not pick it as a planner, a coder or a terminal agent**: the independent terminal numbers (6.7% on TB 2.1) are close to unusable, and an 86% hallucination rate on abstention means it must not be the component that decides anything. If the choice is between this and NVIDIA's newer **Nemotron 3.5 Super VL** (AA Intelligence Index 26 vs this model's ~10–15), take the newer one unless you specifically need native audio input.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research, **3 `websearch` calls** (1 `deep` vendor sweep, 1 `deep` pricing/NIM sweep, 1 `deep` independent-leaderboard sweep), re-reading NVIDIA's **arXiv:2604.24954v2** — now the current revision, superseding the v1 the first pass used — plus the BF16/FP8/NVFP4 Hugging Face cards, the build.nvidia.com NIM model card and NIM 1.7.0 API docs, NVIDIA's Nemotron Omni 3 architecture documentation and the nvidia-nemo/nemotron repo README, and the vLLM/Megatron-Bridge/NeMo-AutoModel support docs. Independent side: Artificial Analysis (Intelligence Index, GPQA Diamond, HLE, CritPt, AA-Omniscience, AA-LCR, GDPval-AA, Terminal-Bench Hard, MMMU-Pro, Coding Index) as mirrored by benchlm.ai (2026-10-17), BenchmarkList (verified rows dated 2026-05-06 to 2026-10-03), NanoGPT, Sophon, LMSpeed and ModelClock, plus llmbase.ai for third-party throughput/TTFT.
- **New sources used this pass (not in the first pass):**
  - arXiv v2 of the technical report — https://arxiv.org/html/2604.24954v2 (supersedes https://arxiv.org/html/2604.24954v1)
  - BenchLM model page, 32.22 #173/954 as of 2026-10-17 — https://benchlm.ai/models/nemotron-3-nano-omni-30b-a3b
  - BenchmarkList model page (GDPval-AA 765, TB2.1 6.7%, HLE 5.3%, AA-LCR 39.7%, OCRBench-v2 ranks, VoiceBench rank) — https://benchmarklist.com/models/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning/
  - Artificial Analysis changelog (Intelligence Index v4.3 rollout; Terminal-Bench → 4.0; τ³-Banking → AutomationBench-AA) — https://artificialanalysis.ai/changelog
  - LMSpeed (official $0.30/$0.90 via AA, 2026-10-17) — https://lmspeed.net/model/nemotron-3-nano-omni-30b-a3b-reasoning
  - LLM List (5 providers, free routes, price history 2026-08-24 → 2026-09-07) — https://llm-list.com/m/nemotron-3-nano-omni
  - Requesty provider matrix (NVIDIA route at **131K ctx / 20K output**; price history) — https://www.requesty.ai/model/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning
  - xKiro spec sheet ($0.05/$0.20, 256K ctx, 66K max output) — https://xkiro.com/models/nvidia/nemotron-3-nano-omni
  - Token Barometer NVIDIA provider price table — https://tokenbarometer.com/provider/nvidia
  - NVIDIA NIM API docs 1.7.0 (NGC tag `1.7.0-variant`, max_tokens 65536, reasoning_budget) — https://docs.nvidia.com/nim/vision-language-models/1.7.0/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html
  - NVIDIA NeMo AutoModel coverage (RADIO v2.5-H note) — https://docs.nvidia.com/nemo/automodel/latest/model-coverage/omni/nemotron-omni
  - Megatron-Bridge Nemotron-3-Omni page — https://docs.nvidia.com/nemo/megatron-bridge/nightly/models/nemotron/nemotron-3-omni.html
  - nvidia-nemo/nemotron docs/nemotron/omni3/README.md — https://github.com/nvidia-nemo/nemotron/blob/main/docs/nemotron/omni3/README.md
  - HF BF16/FP8/NVFP4 cards (256k "max context", 31B/3B, minimum-GPU table, quantization Δ table) — https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4
  - llmbase.ai comparison (third-party 239.8 tok/s, 590 ms TTFT, $0.30/$0.90) — https://llmbase.ai/compare/nemotron-3-nano-omni-30b-a3b,nvidia-nemotron-3-nano-30b-a3b/
  - Sophon (242 tok/s #11/499) — https://sophon.at/models/nemotron-3-nano-omni-30b-a3b
  - Design for Online review (GPQA 46.9%, HLE 5.3%, IFBench 63.2%, LCR 35.7%) — https://designforonline.com/ai-models/nvidia-nemotron-3-nano-omni-free/
- **Honesty notes carried forward and updated:** (a) every benchmark in the NVIDIA tables is **vendor-reported**; the aggregator sites that now print OSWorld 47.4%, τ²-bench 45.3%, MMLongBench-Doc 57.5% and MMMU 70.8% are **relabelling NVIDIA's numbers**, and this report now says so explicitly instead of counting them as corroboration; (b) the **GPQA 72.2% vs 46.9%** and **AA-LCR 41.0% vs 39.7%** conflicts are recorded with the independent figure preferred in both cases; (c) the **256K (cards) vs 262,144 (report) vs 131K/20K (hosted route)** three-way context conflict is unresolved and flagged rather than resolved in the vendor's favour; (d) the **$0.30/$0.90 (AA, first-party) vs $0.06/$0.24 (relay trackers)** pricing conflict is unresolved, first-party preferred; (e) **no safety evaluation exists** for this model anywhere in the corpus — notable for a model intended to run unattended inside an agent loop.
- Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is reported and **excluded** from the Overall arithmetic, per `RULES.md` and `model-comparison.md` v4.
- **Re-run when:** (1) any independent **Terminal-Bench 4.0** or **AutomationBench-AA** score appears — AA moved both into the index on 2026-09-07 and neither is published for this model; (2) an independent **SWE-bench / SWE-bench Pro / DeepSWE** number appears (the entire hard-coding surface is still empty); (3) **MMU / RULER** long-context retrieval appears (only AA-LCR exists, and it is weak); (4) AA publishes an **AA-Harvey LAB / AA-Briefcase** row; (5) NVIDIA publishes **Nemotron 3.5-class Omni successors** with native audio — Nemotron 3.5 Super VL already scores 26 on AA against this model's ~10–15 and may make the model obsolete; (6) the NVIDIA hosted route's real context window is clarified (131K vs 256K vs 262,144); (7) the free tier's end date is published.
