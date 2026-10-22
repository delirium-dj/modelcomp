# DiffusionGemma 26B-A4B — findings by GPT 6.1 Sol

- Source: Google DeepMind, `google/diffusiongemma-26B-A4B-it`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** DiffusionGemma 26B-A4B (instruction-tuned).
- **Short description:** Experimental general multimodal generative model derived from Gemma 4, adapted to discrete text diffusion. It trades some quality for fast low-batch decoding; it is not an image generator, voice-first model, or a separate typed-decision paradigm.[1][2]
- **Provider / access / IDs:** Apache-licensed weights `google/diffusiongemma-26B-A4B-it`; NVIDIA trial model **`google/diffusiongemma-26b-a4b-it`**, independently present in the live unauthenticated NIM model catalog; NanoGPT **`google/diffusiongemma`** also present in its live API catalog. Zen/OpenRouter full catalogs had no exact entry. These listing checks are not authenticated inference or a measured serving-quality test.[1][3][4][5]
- **Release / knowledge:** Primary launch **2026-06-10**; some serving catalogs use June 9. Primary model card gives **January 2025 training-data cutoff**. The later technical report is arXiv v1 dated **2026-07-31**, not a replacement model-release date.[1][2][6]
- **Architecture:** **25.2B total / ~3.8B active**, 30 layers, 128 routed experts/top eight plus one shared, ~550M vision encoder. Encoder caches context; decoder denoises **256-token canvases**. The **1,024-token sliding window** is an architecture detail, not the full context limit. Upstream license is **Apache 2.0**; hosted service terms are separate.[1][6]
- **Context window:** Primary **up to 256K**; vendor serving catalogs specify 262,144 for some routes, **250,000 / 32,768 output** for NVIDIA metadata. Primary card does not define one universal max-output ceiling. Do not transfer the highest reseller ceiling to every runtime.[1][4]
- **Modalities / controls:** Text/image input and video as sampled frames, text output. Primary recommends at most **60 seconds at one frame/s**; no native audio input/output established. Tools/function serialization and optional thinking are supported, but hosted strict structured-output enforcement is not guaranteed; NVIDIA's capability flag says unsupported despite generic JSON-formatting prose.[1][3]
- **Inference modes:** The same adapted weights retain **text diffusion (TD)** and ordinary **autoregressive (AR)** generation, each with thinking/no-thinking variants. These configurations have different scores/speeds. Default primary TD recipe: entropy-bounded sampler, at most 48 steps, entropy bound 0.1, stopping threshold 0.005, temperature 0.8→0.4. Historical reasoning is omitted from replay.[1][6]
- **Pricing (2026-10-22):** NVIDIA's primary developer page advertises **free NIM API access for prototyping**, and the exact live model is listed; models.dev records **$0/$0** for this trial lane. Account/trial terms apply; this is not a promise of free production infrastructure. Secondary serving rates: NanoGPT **$0.05/$0.15**, Pioneer **$0.50/$0.50 per 1M**, not independently metered here. Self-hosting needs hardware/electricity even though weights are Apache licensed.[3][4][7]

### Raw benchmarks found

**Primary instruction-tuned TD + thinking, recommended EB sampler** — exact DiffusionGemma column, not its Gemma 4 initialization:[1][6]

- **GPQA Diamond 73.2%**, **MMLU-Pro 77.6%**, AIME 2026 no tools **69.1%**, HLE **11.0% no tools / 11.9% with search**, BigBench Extra Hard **47.6%**.
- **LiveCodeBench v6 69.1%**, **Codeforces 1429 Elo**, HumanEval **94.5%**, BigCodeBench **46.0%**, LBPP **81.0%**. Elo is not percentage accuracy; these are not SWE-bench agent completion.
- **Tau2 56.2% average over three domains**; report gives Retail **71.5%**, Airline **69.0%**, Telecom **28.1%**. The arithmetic domain average is not a three-attempt reliability metric.
- **MMMU-Pro 54.3%**, MATH-Vision **70.5%**, MedXPertQA-MM **49.0%**; **OmniDocBench 1.5 average edit distance 0.319, lower is better**. Do not convert edit distance into a claimed 31.9% accuracy.
- **MRCR v2, eight needles at 128K: 32.0%**, not a full-256K retention guarantee.

**Operational-mode comparison**, technical report table 3:[6]

- TD thinking / TD no-thinking / AR thinking: **GPQA 73.2 / 64.6 / 79.8%**, LCB-v6 **69.1 / 60.6 / 71.4%**, MMMU-Pro **54.3 / 66.0 / 63.3%**. More thinking is not uniformly better, and AR mode's quality is not diffusion-speed quality.
- On one **H100, FP8, batch one**, seven-benchmark average **TD thinking 1,479 tokens/s / 19.74 tokens per forward**, versus **AR thinking 204 tokens/s**, versus original Gemma 4 with MTP **303 tokens/s**. These output-speed figures **exclude prefill** and depend on benchmark/tokenization/runtime; they are not universal end-to-end API throughput.
- Google's launch separately quotes **1,000+ H100 / 700+ RTX 5090 tokens/s**, and notes diminishing benefits at high concurrency and on Apple-style unified memory. Quantized low-memory claims are hardware/configuration targets, not evidence that every full-context request fits at that footprint.[2]

**Artificial Analysis independent exact record** — UUID `c3f12f61-9d57-4e2c-9106-5a82bb1cfee2`, slug `diffusiongemma-26b-a4b`, reasoning:[8]

- Intelligence Index **9.5101, estimated**; **TB2.1 12.3596%**, **GDPval-AA 321.41 Elo**.
- **GPQA 66.8687%**, **HLE 10.8434%**, **CritPt 0.2857%**, **AA-LCR 19.6667%**, **MMMU-Pro 66.5318%**, IFBench **59.4558%**.
- Omniscience index **−59.2333**, accuracy **16.5833%**, hallucination rate **90.8891%**. Index and rate denominators remain evaluator-specific.
- Tau2, banking, TB4, SciCode, LCB, runtime and token prices are null in this selected record. Decoder/sampler details are not exposed in the inspected payload, so the differing MMMU score is **not assigned to an inferred AR/no-thinking mode** or pooled into a single recipe.

**Coverage limits:** No verified exact SWE-bench, Claw, MCP-Atlas, independent whole-window ≥98% retention, native audio result, or authenticated production serving measurement found. Google explicitly says standard Gemma 4 remains higher quality overall; its scores are not substituted.[2]

### Normalized scores (1–100)

- **Tool use: 38/100.** Native function support and primary Tau2 56.2% are real, but independent TB2.1 12.36% and GDPval 321.41 show weak general-agent reliability.[1][6][8]
- **Reasoning: 61/100.** GPQA ~67–73% and TD AIME 69.1% support useful bounded reasoning, while HLE ~11%, near-zero CritPt and poor knowledge reliability cap difficult tasks.[1][8]
- **Context window: 76/100.** Verified 256K capacity band; low independent LCR and primary MRCR 32% explicitly preclude near-perfect retention claims.[1][8]
- **Multimodal: 72/100.** Actual image/frame-video perception with documented visual benchmarks; text-only output, absent audio and substantial document/visual reasoning errors limit breadth.[1][6][8]
- **Coding: 58/100.** TD LCB-v6 69.1%, HumanEval and BigCodeBench support fast constrained code generation, but weak terminal-agent results and missing SWE evidence limit repository engineering claims.[6][8]
- **Cost efficiency: 100/100.** Current cataloged NVIDIA $0 trial/prototyping lane matches the project's free-access rule; account limits/terms and paid production/self-hosting costs remain separate.[3][4][7]
- **Overall Score: 61/100.** Half-up mean `(38 + 61 + 76 + 72 + 58) / 5 = 61.0`; cost excluded. Best fit: experimental low-concurrency, latency-sensitive generation and editing with explicit speed/quality tradeoffs.

### Fresh search trail and sources

- Bing RSS [`"DiffusionGemma" benchmark`](https://www.bing.com/search?format=rss&q=%22DiffusionGemma%22+benchmark): unrelated social-media support pages.
- Google [`"DiffusionGemma" 26B Google`](https://www.google.com/search?q=%22DiffusionGemma%22+26B+Google): JavaScript/access interstitial.
- DuckDuckGo [`"DiffusionGemma" benchmark`](https://duckduckgo.com/html/?q=%22DiffusionGemma%22+benchmark): real Google, arXiv and evaluator leads. Primary HF card, launch, report section 7, actual NVIDIA `-it` endpoint and live model catalogs inspected. The shorter guessed NVIDIA path 404s; direct ai.google.dev fetch had a transport error. No peer findings consulted.

[1]: https://huggingface.co/google/diffusiongemma-26B-A4B-it/raw/main/README.md
[2]: https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
[3]: https://build.nvidia.com/google/diffusiongemma-26b-a4b-it
[4]: https://models.dev/api.json
[5]: https://integrate.api.nvidia.com/v1/models
[6]: https://arxiv.org/html/2608.00146v1#S7
[7]: https://developer.nvidia.com/nim
[8]: https://artificialanalysis.ai/models/diffusiongemma-26b-a4b
[9]: https://nano-gpt.com/api/v1/models

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent public-web research; exact primary card, mode-specific technical-report tables, independent evaluator payload, and serving/free-trial checks. Normalized scores are interpretations; no decoder mode, price, or measured capability inferred from an unrelated variant.
