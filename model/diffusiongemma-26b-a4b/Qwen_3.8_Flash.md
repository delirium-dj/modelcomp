# DiffusionGemma 26B A4B — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma (curated id `opencode/diffusiongemma-26b-a4b`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (weights `google/diffusiongemma-26B-A4B-it`; pre-trained variant also published)
- **Short description:** Google DeepMind's **experimental discrete-diffusion** re-casting of Gemma 4 26B A4B: instead of token-by-token autoregression it uses **block-autoregressive multi-canvas sampling** — an autoregressive encoder caches the prompt (KV), and a bidirectional decoder denoises a 256-token "canvas" in parallel, 15–20 tokens per forward pass, then feeds the finished canvas back into the encoder. The payoff is speed (claimed **>1,100 tokens/s per user**, H100/FP8, low batch; ~1,500 tok/s in marketing coverage); the cost is measurable capability, which the vendor publishes side-by-side against its own AR base.
- **Provider / access:** Apache 2.0 open weights on Hugging Face / ModelScope / Kaggle; needs `DiffusionGemmaForBlockDiffusion` in Transformers (a diffusion-specific class, not a plain causal LM). Runs locally (~16–24 GB VRAM quantized, community-reported). Hosted: NVIDIA NIM ($0/$0 reference), nano-gpt ($0.05/$0.15), Pioneer ($0.50/$0.50) per this folder's curated pricing tiers. Native function calling, system-role support, thinking mode, 35+ languages (140+ pretraining).
- **Release / knowledge:** no date printed on the card; community coverage places the release mid-June 2026 and the DiffusionGemma technical report is on arXiv (2608.00146, dated 2026-07-31). Knowledge cutoff not disclosed.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF), `diffusiongemma-26b-a4b-it` (NVIDIA NIM), curated id `opencode/diffusiongemma-26b-a4b`.
- **Context window:** up to 262,144 tokens (256 K), 1024-token sliding window, 256-token canvas, 262 K vocabulary. **Variant flag:** this folder's curated `meta.json` lists "32K max output" — I could not verify a max-output figure on the card or AA, so I treat it as curated, unconfirmed, and note it as a methodology caveat rather than a deduction.
- **Modalities:** text + image + **video** in; text out — Artificial Analysis states "text, image, and video" and the card's capability list describes frame-sequence video understanding and interleaved image/video prompts. **Internal inconsistency flag:** the card's own spec table still says "Supported Modalities: Text, Image" (inherited from the AR base, ~550 M vision encoder). No audio input, no image/audio output.
- **Pricing (as of 2026-10-07):** open weights (self-host $0); AA tracks **no hosted price** for this ID (In/Out "−"), consistent with a research release served by smaller providers.
- **Architecture:** 25.2 B total / 3.8 B active MoE (8 of 128 experts + 1 shared), 30 layers, encoder–decoder block-diffusion, AR encoder + bidirectional-attention diffusion decoder. Recommended sampler: entropy-bounded denoising with adaptive stopping, max 48 denoising steps, temperature 0.8 → 0.4 linear decay, entropy bound 0.1.
- **Identity flag:** **distinct model**, not a serving variant of `model/gemma-4.26b-a4b/` — different weights and a different generation objective from the same Gemma 4 26B A4B initialization. Its report benchmarks it against that base and against contemporary diffusion LMs (LLaDA 2.1 Flash 100B).

### Raw benchmarks found

All vendor-run rows from the `google/diffusiongemma-26B-A4B-it` card, measured with the recommended EB sampler, printed next to its AR initialization (Gemma 4 26B A4B) — the only benchmark table I could find for this ID. Artificial Analysis carries the model on its **reasoning** page with an Intelligence Index of **10** (#45 of 142, median 8) and "above average in intelligence, well priced" for its size class; speed, cost-per-task and hosted pricing are "not publicly available" there, and I found **no** BenchLM page for the slug.

Reasoning / knowledge (vs AR base):

- GPQA Diamond: **73.2 %** (base 82.3 %)
- HLE: **11.0 %** no tools (base 8.7 %) / **11.9 %** with search (base 17.2 %)
- MMLU-Pro: **77.6 %** (base 82.6 %); MMMLU **81.5 %** (base 86.3 %); BigBench Extra Hard **47.6 %** (base 64.8 %)
- AIME 2026 (no tools): **69.1 %** (base 88.3 %) — the single largest capability regression in the table
- AA Intelligence Index: **10**

Agent / tool use:

- τ²-bench (avg over 3): **56.2 %** (base 68.2 %); function calling is native
- Terminal-Bench 2.1 / 4.0, τ³, Toolathlon, GDPval-AA, AutomationBench, Claw-Eval: **no verified public score found for this ID**

Coding:

- LiveCodeBench v6: **69.1 %** (base 77.1 %); Codeforces ELO: **1429** (base 1718)
- SWE-bench Verified, DeepSWE, SciCode, AA Coding Index, SWE-Atlas, NL2Repo: **no verified public score found for this ID**

Multimodal / long context:

- MMMU-Pro: **54.3 %** (base 73.8 %); MATH-Vision **70.5 %** (base 82.4 %); MedXPertQA MM **49.0 %** (base 58.1 %); OmniDocBench 1.5 avg edit distance **0.319** (base 0.149 — lower is better, so document parsing regressed hard)
- MRCR v2 (8 needles, 128 K, average): **32.0 %** (base 44.1 %)
- Audio: not applicable (no audio input on this ID)

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling plus τ² 56.2 % is respectable in absolute terms but well under the methodology's ~50 %+ frontier reference on a harder-to-verify harness, and there is no Terminal-Bench, τ³, Toolathlon, GDPval or Claw-Eval row for the ID at all — parallel multi-canvas decoding is exactly the regime where long tool loops are weakest, and no independent agentic measurement exists to check that.
- **Reasoning: 56/100.** GPQA 73.2 %, HLE ~11 %, MMLU-Pro 77.6 % and Index 10 land it in the methodology's mid band (GPQA 60–80 %, HLE <10 %, Index 20–35 ⇒ 55–65) at its lower edge; AIME 69.1 % against the base's 88.3 % and BBXH 47.6 % show the diffusion objective is costing genuine multi-step reasoning, not just formatting.
- **Context window: 66/100.** 256 K of real context is the 200 K–500 K tier (65–84, 200 K ≈ 70), but the disclosed MRCR 8-needle 128 K score is **32.0 %** — the weakest retrieval figure in this pass and 12 points below the same-weights-family AR base — so it sits at the floor of the tier. The curated 32 K max-output claim is noted as a caveat, not scored.
- **Multimodal: 76/100.** Text + image + video input with text output qualifies for the methodology's 75–90 band and this is a genuinely rare open-weights video-in diffusion model; it stays at the band floor because every measured vision row is materially degraded (MMMU-Pro 54.3 %, MathVision 70.5 %, OmniDocBench edit distance 0.319) and there is no audio.
- **Coding: 62/100.** LiveCodeBench v6 69.1 % and Codeforces 1429 are mid-band, and the masked-canvas design is genuinely attractive for infill/edit-style work, but there is no repository-level (SWE-bench/DeepSWE/NL2Repo), scientific (SciCode) or terminal (Terminal-Bench) evidence for the ID — "slight penalty, no hallucinated score".
- **Cost efficiency: 98/100.** Apache 2.0 weights that self-host for $0 on a single accelerator, community NIM/free endpoints at $0/$0, third-party routes at $0.05–0.50 per 1M, and claimed **>1,100 tokens/s** decode make this one of the cheapest high-throughput generation paths in the registry; the only reason it is not 100 is that the free/hosted tiers are provider-experimental and AA lists no durable API price.
- **Overall Score: 63/100.** Mean of the five quality dimensions (55 + 56 + 66 + 76 + 62) / 5 = 63.0 → 63; Cost excluded per `RULES.md`. Best fit: latency-bound local generation — draft/repair loops, code infill and editing, fast structured extraction, captioning over frames — where 256 K context and parallel denoising matter more than peak accuracy. If you can afford the latency budget, the AR base (`model/gemma-4.26b-a4b/`) is the stronger model on every published capability row.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (HF `google/diffusiongemma-26B-A4B-it` model card README, Artificial Analysis `models/diffusiongemma-26b-a4b`, NVIDIA NIM reference, Google launch blog and DiffusionGemma technical report (arXiv 2608.00146) listings, ModelScope mirror, community release coverage); scores are normalized 1–100 interpretations, not official vendor scores. All capability rows are vendor-run — no independent harness scores exist for this ID yet, which is flagged in each dimension.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
