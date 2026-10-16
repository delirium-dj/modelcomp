# DiffusionGemma 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/diffusiongemma-26b-a4b-it`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/diffusiongemma-26B-A4B-it`, the Google launch blog, and Artificial Analysis).
> **Biggest correction: the model takes video input, not just text + image.** Both the official HF card ("handling text, image, and video inputs to generate text output"; video understanding over frames) and Artificial Analysis ("supports text, image, and video input") confirm it, so the earlier pass's "text and image in" is **wrong as of this pass**. The architecture is also now pinned down by the vendor: **25.2B total / 3.8B active** (the earlier "4B or 8B active" dispute is settled), 30 layers, 1024-token sliding window, 256-token canvas, 262K vocabulary, 8 active / 128 total + 1 shared expert, ~550M vision encoder, encoder-decoder with bidirectional canvas attention.
> **New benchmark rows (official vendor card):** **MMLU-Pro 77.6%**, **AIME 2026 (no tools) 69.1%**, **LiveCodeBench v6 69.1%**, **Codeforces ELO 1429**, **GPQA Diamond 73.2%**, **Tau2 56.2%**, **HLE 11.0% no-tools / 11.9% with-search**, **BigBench Extra Hard 47.6%**, **MMMLU 81.5%**; vision **MMMU-Pro 54.3%**, **MATH-Vision 70.5%**, **MedXpertQA MM 49.0%**, **OmniDocBench 1.5 edit-distance 0.319**; long-context **MRCR v2 8-needle @128k 32.0%**. The Google launch blog (2026-06-10) adds the speed framing: **up to 4× faster decoding**, **1000+ tok/s on a single H100 (FP8)**, **700+ tok/s on RTX 5090**, fitting ~18GB VRAM when quantized.
> **Conflicts surfaced:** (1) **AA Intelligence Index 13.45 (earlier pass) vs 10 estimated (now, #45/141 open-weight class)** — a different Intelligence Index version (now v4.3.2) and an estimated rather than measured figure; (2) earlier **CodeForces "47.63%"** vs vendor **Codeforces ELO 1429** — different metric, not a drop; (3) earlier **CritPt 0.29%** while AA now lists CritPt "under review" for this ID; (4) vendor claims **native function calling**, but independent agentic rows (GDPval-AA 554 Elo, Tau3-Banking 6.6%, TB2.1 12.4%) stay far below the frontier band; (5) **internal HF-card inconsistency** — the technical-specification table still lists "Supported Modalities: **Text, Image**" while the card prose, its dedicated video section and Artificial Analysis all include video; video is treated as confirmed here on the weight of the prose + AA.
> Sources: https://huggingface.co/google/diffusiongemma-26B-A4B-it · https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/ · https://artificialanalysis.ai/models/diffusiongemma-26b-a4b

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights **text diffusion** model built on the Gemma 4 26B-A4B Mixture-of-Experts architecture — it denoises 256-token canvases in parallel instead of autoregressive decoding; a research probe optimized for speed, not a frontier chat model. Google states output quality is lower than standard Gemma 4.
- **Provider / access:** Google DeepMind. Open weights on Hugging Face `google/diffusiongemma-26B-A4B-it`; third-party routes: Nvidia `google/diffusiongemma-26b-a4b-it` (250K) and Pioneer `google/diffusiongemma-26B-A4B-it` ($0.50/$0.50, 262.1K); NVIDIA NIM / DGX and Gemini Enterprise Agent Platform Model Garden. Apache 2.0. No OpenCode Zen ID.
- **Release / knowledge:** Released 2026-06-10 (Google blog / Artificial Analysis); training-data cutoff January 2025.
- **IDs:** `google/diffusiongemma-26b-a4b-it`; no Free ID.
- **Context window:** 256K tokens (vendor card "up to 256K"; third-party catalogues list 250K–262.1K; Artificial Analysis states 256k / "260k"). No official first-party API figure published.
- **Modalities:** **Text, image and video in; text out** (video processed as frames, max ~60s at 1 fps). Non-autoregressive discrete-diffusion generation over a 256-token canvas; configurable thinking mode (`<|think|>`), variable image resolution (token budgets 70/140/280/560/1120), and vendor-claimed native function calling / JSON output. Always-on reasoning variant shown by Artificial Analysis.
- **Pricing (as of 2026-10-16):** No official vendor PAYG price; lowest tracked third-party route $0.50 in / $0.50 out per 1M (Pioneer). Self-host free under Apache 2.0.
- **Architecture:** MoE, **25.2B total / 3.8B active** parameters (vendor-confirmed), 30 layers, 1024-token sliding window, 256-token diffusion canvas, 262K vocabulary, 8 active of 128 total experts + 1 shared, ~550M vision-encoder parameters; encoder-decoder (autoregressive encoder caches the prompt, bidirectional-attention decoder denoises canvases). Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **554 Elo / 2.4% normalized** (rank 223/352, 37th pct; Artificial Analysis — carried over; AA now runs GDPval-AA v2.1)
- Tau3-Banking: **6.6%** (rank 119/176, 33rd pct; Artificial Analysis — carried over)
- Terminal-Bench 2.1: **12.4%** (rank 147/194, 24th pct; Artificial Analysis — carried over)
- Tau2 (average over 3): **56.2%** (official Hugging Face card; equals the earlier "t2-bench 56.20%")
- Agentic Index: **2.2** (Artificial Analysis — carried over)
- Function calling: vendor card claims native structured tool use; no independent tool-use benchmark above the mid pack

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (official HF card / llmboard) / **66.9%** (Artificial Analysis)
- MMLU-Pro: **77.6%** (official HF card)
- AIME 2026 (no tools): **69.1%** (official HF card)
- HLE: **11.0%** no tools / **11.9%** with search (official HF card — the earlier "11.9% llmboard" row was the with-search variant)
- MMMLU: **81.5%** (official HF card)
- BIG-Bench Extra Hard: **47.6%** (official HF card)
- Artificial Analysis Intelligence Index: **10 (estimated)**, #45/141 open-weight class (v4.3.2) — the earlier 13.45 came from a prior index version and is not directly comparable
- AA-IFBench: **59.46%** (llmboard)
- AA-Omniscience: **−59.03 points**, Accuracy **16.58%** (carried over)
- CritPt: **0.29%** (earlier Artificial Analysis row; AA now lists CritPt "under review" for this model)

Coding:

- LiveCodeBench v6: **69.1%** (official HF card)
- Codeforces: **ELO 1429** (official HF card; the earlier "47.63%" was a different Codeforces metric, not a regression)
- SciCode: **34.3%** (Artificial Analysis)
- Coding Index: **19.66** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle at 128k: **32.0%** (official HF card)
- AA-LCR: **19.7%** (rank 288/408, 29th pct)
- No RULER reported

Multimodal:

- MMMU-Pro: **54.3%** (official HF card / llmboard)
- MATH-Vision: **70.5%** (official HF card / llmboard)
- MedXpertQA MM: **49.0%** (official HF card)
- OmniDocBench 1.5: **0.319** average edit distance (official HF card; lower is better)
- Video input supported (frames, ≤60s at 1 fps) per HF prose / AA; no video-specific benchmark published

### Normalized scores (1–100)

- **Tool use: 45/100.** GDPval-AA 554 Elo, Tau3 6.6%, Terminal-Bench 2.1 12.4% and Agentic Index 2.2 are all far below the frontier band — consistent with a diffusion research model not tuned for tool/agent loops, despite a passable Tau2 56.2% and a vendor function-calling claim.
- **Reasoning: 62/100.** MMLU-Pro 77.6%, GPQA ~67–73% and AIME 2026 69.1% are mid-pack, but HLE ~11%, the estimated AA Index of 10 and CritPt 0.29% cap it well short of frontier.
- **Context window: 74/100.** 256K sits in the upper 200K–500K band, but MRCR v2 32% and AA-LCR 19.7% show weak retrieval at depth, so it scores the band's lower reach rather than near the top.
- **Multimodal: 76/100.** Text + image + **video** in with text out is the +video band (75–90); MMMU-Pro 54.3% and MATH-Vision 70.5% are modest and there is no audio or non-text output, holding it to the low end of that band. (Raised from 64/100: video input is now confirmed by two independent sources.)
- **Coding: 62/100.** LiveCodeBench v6 69.1% is solid, but Codeforces ELO 1429, SciCode 34.3%, Coding Index 19.66 and TB2.1 12.4% show the diffusion path lags on realistic engineering.
- **Cost efficiency: 94/100.** Apache 2.0 self-host plus a $0.50/$0.50 third-party route is excellent value; absence of an official PAYG rate and runtime overhead of iterative denoising keep it under 100.
- **Overall Score: 64/100.** Mean of (45 + 62 + 74 + 76 + 62) / 5 = 63.8 → **64**. Best-fit: diffusion-architecture research, parallel canvas generation and cheap self-hosted experiments — not production agents or frontier reasoning. (Up 3 from the prior 61 solely on the confirmed video-input correction.)

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card (`google/diffusiongemma-26B-A4B-it`), the Google launch blog (speed framing, 2026-06-10) and Artificial Analysis, correcting the modality set (video confirmed, despite the HF spec table's "Text, Image"), architecture parameters and release context, and adding the vendor benchmark table, MMMLU, Codeforces ELO and the revised AA Intelligence Index over the 2026-10-05 pass. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
