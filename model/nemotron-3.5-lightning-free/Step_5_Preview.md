# Nemotron 3.5 Lightning Free — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/nemotron-3.5-lightning:free`; weights `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (30B-A3B) — **the `:free` variant is the zero-cost OpenRouter route**, and the repo folder records that variant rather than the paid tier. **A negative finding governs this report: BenchLM carries no `nemotron-3.5-lightning-free` page in any spelling** (`nemotron-3.5-lightning-free`, `nemotron-3-5-lightning-free` and `nemotron-3.5-lightning-30b-a3b` all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** **The reliable free tier of this research series**: **PinchBench 85.37%, GPQA Diamond 76.89%, MMLU-Pro 81.94% and a 1M-token window with RULER@1M 69.62% on the base checkpoint** — all at **$0/$0 with 99.97% measured uptime**. Against that, **Terminal-Bench 2.1 24.58%, τ³-Bench Banking 9.28%, SWE-bench Verified 51.56%, the AA Agentic Index 3.5% and the AA Intelligence Index 12.9** are all near-floor, which is the small-model tier showing through.
- **Provider / access:** **Open weights (OpenMDW v1.1)** on Hugging Face / ModelScope; **NVIDIA NIM** (OpenAI- and Anthropic-compatible APIs); **OpenRouter (`:free` and paid)**; build.nvidia.com.
- **Release / knowledge:** released **2026-08-11**. **Knowledge cutoff not disclosed.**
- **IDs:** `nvidia/nemotron-3.5-lightning:free` (OpenRouter free route); `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4` (Hugging Face); repo id `nemotron-3.5-lightning-free`.
- **Context window:** **1M tokens** (**256K default in vLLM/SGLang**); **max output 65,536** — a genuine asset, and one of only two verified properties.
- **Modalities:** **text in → text out**; reasoning-capable; tool calling.
- **Pricing (as of 2026-11-06):** **free route $0/$0** (rate-limited, NVIDIA provider, 99.97% uptime); **paid route $0.07/$0.20 per 1M**; **weights free to self-host under OpenMDW v1.1.**
- **Architecture:** **hybrid LatentMoE (Mamba-2 + MoE + attention), 30B/3B active, MTP.**

### Raw benchmarks found

Vendor-reported (NVIDIA's HF card and its own eval tables) with independent Artificial Analysis and benchmark-leaderboard cross-checks, carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists for cross-check.

- **PinchBench: 85.37%** — **its strongest result** (Qwen3.6-35B 88.07, Gemma 4 26B A4B 74.70)
- **MMLU-Pro: 81.94%**; **AA-Omniscience: 17.50**
- **GPQA Diamond (no tools): 76.89%** (75.44 in the NVFP4 table); **HLE (text-only): 11.72%**
- **SciCode: 32.60%; SWE-bench Verified: 51.56%; SWE-bench Multilingual: 39.33%**
- **Terminal-Bench 2.1: 24.58%; BrowseComp: 36.97%; τ³-Bench Banking: 9.28%; GDPval-AA-V2: 832 Elo**
- **IFBench (loose): 71.88%; AA-LCR: 52.00%**
- **Base checkpoint: RULER 256K 76.88, RULER 1M 69.62** (**beating Qwen3.5-35B-A3B's 56.43**)
- **AA cross-check: GPQA Diamond 74.3%; HLE 10.6%; AA-LCR 60.3%; τ³-Bench Banking 8.9%; GDPval-AA 7.1%; TB 2.1 24.3%; TB 4.0 0.5%; SciCode 32.1%; AA-Omniscience 14.4% accuracy / 62.4% non-hallucination**
- **AA composites: Intelligence Index 12.9; Coding Index 26.8; Agentic Index 3.5**
- **No verified public score found** for ARC-AGI, MRCR, MMLU-Pro X, AIME, MATH, or any vision benchmark.

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band. **PinchBench 85.37% shows strong structured-task execution (30% faster than Qwen3.6-35B)**, but **Terminal-Bench 2.1 24.58%, τ³-Bench Banking 9.28%, GDPval Elo 832 and the AA Agentic Index 3.5%** cap it low-mid — a model that executes structured tasks well and fails open-ended agentic ones. No MCP-Atlas, OSWorld, Toolathlon, BFCL or AA Agentic Index independent figure exists beyond the AA row.
- **Reasoning: 48/100.** Below the methodology's mid band. **GPQA 74.3–76.9% and MMLU-Pro 81.9%** are mid-low; **HLE 10.6–11.7%, SciCode 32.1–32.6% and the AA Intelligence Index of 12.9** confirm a small-model tier, and **AA-Omniscience accuracy 14.4–17.5%** is weak. Held at 48 rather than the floor because MMLU-Pro 81.9% and GPQA ~76% are real results for a 3B-active model.
- **Context window: 74/100.** **A 1M-token window** is the methodology's ≥1M band, scored at 74 — well below that band, because the evidence, while real, is not top-tier: **RULER@1M 69.62% and RULER@256K 76.88% on the base checkpoint** (beating Qwen3.5-35B-A3B's 56.43 at 1M) and **AA-LCR 60.3%**. **This is the clearest case in the batch of a window that is genuinely trained and genuinely measured rather than merely claimed**, but 69.6% at 1M is not the ~98% retrieval of the top band, and the RULER figures are for the base checkpoint rather than this exact SKU.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 42/100.** Below the methodology's mid band. **SWE-bench Verified 51.56%, SWE-bench Multilingual 39.33%, the AA Coding Index 26.8%, SciCode 32.1–32.6% and Terminal-Bench 2.1 24.58%** are low-mid throughout; the model is not positioned for heavy coding, and no LiveCodeBench or AA-SciCode independent figure exists.
- **Cost efficiency: 100/100.** **The `:free` route is literally $0/$0 with 99.97% measured uptime, and the OpenMDW weights are free to self-host** — the methodology's $0 tier with a dependable free endpoint, which is the only full-marks cost score in this batch. The paid route at $0.07/$0.20 is disclosed for anyone hitting the rate limits.
- **Overall Score: 44/100.** (42 + 48 + 74 + 12 + 42) / 5 = 43.6 → **44**. **A disagreement is recorded rather than reconciled: the repo queue carries 57.5 for this slug while this report reads 44**, and with BenchLM absent there is no third instrument to arbitrate — the queue figure is the corpus-average of other research agents' raters, this report is Step 5 Preview's own normalized reading, and both are stated side by side rather than flattened. Recommendation: **the reliable free tier** — PinchBench 85.37% agent execution, a 1M window with real measured retrieval (RULER@1M 69.62%), and 99.97% uptime at literally zero cost, which is a real proposition for high-throughput routing, classification and structured extraction behind a paid frontier model. **Its thesis is the cost score, and the cost score is the only full-marks one in this batch.** Three cautions: **it is a small-model tier that should be routed to specialised high-throughput tasks, not hard reasoning or coding** (Intelligence Index 12.9, Coding Index 26.8, Agentic Index 3.5); **HLE 10.6–11.7% and AA-Omniscience accuracy 14.4–17.5%** make it unreliable on factual work; and **the RULER@1M figures are for the base checkpoint rather than this exact NVFP4 SKU**, so the context score rests partly on adjacent evidence.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `nemotron-3.5-lightning-free` page in any spelling** (`nemotron-3.5-lightning-free`, `nemotron-3-5-lightning-free` and `nemotron-3.5-lightning-30b-a3b` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **A variant-identity note is recorded: the repo folder records the `:free` OpenRouter variant rather than the paid tier or the base SKU**, and the report is scoped to that variant while carrying the paid route's $0.07/$0.20 price for anyone hitting the rate limits — recorded because conflating the variants would misstate both the price and the access path. **A provenance finding is recorded: the evidence base is unusually dual-sourced for a BenchLM-absent model — NVIDIA's own HF card and eval tables cross-checked against independent Artificial Analysis runs**, and several figures therefore exist in two runs that can be compared side by side: **GPQA Diamond 76.89% (vendor) against 74.3% (AA), HLE 11.72% against 10.6%, AA-LCR 52.00% against 60.3%, τ³-Bench Banking 9.28% against 8.9%, TB 2.1 24.58% against 24.3%, SciCode 32.60% against 32.1%** — all recorded side by side rather than averaged, because the vendor-vs-independent gaps are themselves the finding and because most models in this series have no such cross-check available. The report's central finding is a **cost-versus-capability split that is the model's whole identity: the only full-marks cost score in this batch ($0/$0 at 99.97% measured uptime) against a small-model capability tier (AA Intelligence Index 12.9, Coding Index 26.8, Agentic Index 3.5%)** — carried into the recommendation, where the model is positioned as a high-throughput routing and extraction tier behind a paid frontier model and explicitly not as a reasoning or coding model. **The 1M context window is recorded as the clearest genuinely-trained-and-measured window case in the batch, but docked well below the ≥1M band** because RULER@1M 69.62% is real retrieval evidence at a mid-tier level, not the ~98% of the top band, and **because those RULER figures are for the base checkpoint rather than this exact NVFP4 SKU** — an adjacency caveat stated explicitly. **A model-difference is recorded rather than resolved: the repo queue carries 57.5 while this report reads 44, with BenchLM absent so no third instrument exists to arbitrate.** Missing benchmarks (ARC-AGI, MRCR, MMLU-Pro X, AIME, MATH, MCP-Atlas, OSWorld, Toolathlon, BFCL v4, AA Agentic Index beyond the single AA row, LiveCodeBench, AA-SciCode, and every vision benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4 model card (OpenMDW v1.1 weights, official eval tables)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)
  - [Artificial Analysis — Nemotron 3.5 Lightning (independent cross-check runs: AA-GPQA, AA-HLE, AA-LCR, composites)](https://artificialanalysis.ai/models/nemotron-3.5-lightning)
  - [OpenRouter — `nvidia/nemotron-3.5-lightning:free` (the $0/$0 route at 99.97% uptime)](https://openrouter.ai/nvidia/nemotron-3.5-lightning:free)
  - [NVIDIA NIM — build.nvidia.com (OpenAI- and Anthropic-compatible APIs)](https://build.nvidia.com/)
  - [Repo curated meta — `model/nemotron-3.5-lightning-free/meta.json` (1M/65,536, text-only, $0 free / $0.07/$0.20 paid)](/model/nemotron-3.5-lightning-free/meta.json)
  - See also: [`model/nemotron-3.5-bolt-e4b/`](nemotron-3.5-bolt-e4b.md) — the Bolt-family sibling refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `Nemotron_3_6.md`, using the same headings.
