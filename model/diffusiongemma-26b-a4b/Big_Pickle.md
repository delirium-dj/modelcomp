# DiffusionGemma 26B A4B — findings by Big Pickle

- Source: Google DeepMind (`google/diffusiongemma-26B-A4B-it`; NVIDIA NIM `google/diffusiongemma-26b-a4b-it`). Requested ID `opencode/diffusiongemma-26b-a4b` is **not on OpenCode Zen** — no matching Zen ID exists
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (instruction-tuned)
- **Short description:** Google DeepMind's experimental **discrete text diffusion** model, warm-started from the released Gemma 4 26B A4B weights and retrained to generate in **parallel 256-token blocks** instead of one token at a time. Google frames it as "a new Pareto frontier in the intelligence-to-speed trade-off": it gives up a consistent 5–20 points of quality against its own autoregressive base and buys back **~1,500 tokens/second on a single H100** (up to 4× faster output, >1,100 tok/s at low batch). Because denoising sees the whole block at once, every token attends bidirectionally to its neighbours, which Google specifically calls out as an advantage for **in-line editing and code infilling** — and the model iteratively revises its own draft, so it can close formatting and fix mistakes inside a block rather than committing token-by-token. It is an "experimental open model", not a flagship.
- **Provider / access:** Open weights on Hugging Face and Kaggle (`google/diffusiongemma-26B-A4B-it`, **Apache 2.0**), plus Google Cloud Model Garden. Hosted by **NVIDIA NIM** (`build.nvidia.com/google/diffusiongemma-26b-a4b-it`, **$0/$0**), **nano-gpt** (`google/diffusiongemma`, $0.05/$0.15) and **Pioneer** ($0.50/$0.50). Community MXFP4/MoE quantization exists (`Brunobkr/OFFELLIA_MXFP4_MOE_diffusiongemma-26B-A4B-it.gguf`, 14.7 GB) for local Lemonade-server / vLLM inference. **Not** on OpenCode Zen — the live Zen catalog and models.dev's `opencode` provider contain no DiffusionGemma route, so cost is scored on the verified hosted rates.
- **Release / knowledge:** Released **June 2026** — NVIDIA Build dates it `06/2026`, Hugging Face `06/10/2026`, models.dev's NVIDIA entry `2026-06-09`, Pioneer's record `2026-05-31`. Training data collection cutoff **January 2025**. A separate nano-gpt entry `google/diffusiongemma` carries a later `2026-09-19` date, which appears to track a subsequent non-IT or re-upload, not the original launch.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (Hugging Face canonical, and the ID NVIDIA records as `canonical_model_id`), `google/diffusiongemma-26b-a4b-it` (NVIDIA NIM / NGC / Pioneer, case differs), `google/diffusiongemma` (nano-gpt, size omitted from the ID). **The requested slug drops the `-it` suffix, and that resolves unambiguously:** the instruction-tuned checkpoint is the only published weight set, NVIDIA's own benchmark table is headed `DiffusionGemma 26B A4B` without the suffix, and every number below is explicitly "for instruction-tuned model variants".
- **Context window:** **256K tokens** (NVIDIA NGC and the DeepMind product page both state a 256K token context window). models.dev records 262,144 (nano-gpt, Pioneer) and 250,000 (NVIDIA) — same window, three rounding conventions. Max output **32,768** (NVIDIA, nano-gpt); Pioneer lists 131,072, which no Google or NVIDIA source corroborates. Sampled in **256-token blocks**, so output granularity is coarser than a standard AR model.
- **Modalities:** **Text, image and video in; text out.** ~550M-parameter vision encoder. Configurable thinking (reasoning) mode, **native function calling**, multilingual inference across **35+** languages from a 140+-language pre-training corpus. Note the variant split: nano-gpt's `google/diffusiongemma` lists `attachment: false` and `tool_call: false`, so the non-`-it` routing may well be the text-only, tool-less base — the multimodal and tool-calling capability described here belongs to the `-it` checkpoint that is actually benchmarked.
- **Pricing (as of 2026-10-05):** NVIDIA NIM **$0.00 in / $0.00 out** per 1M. nano-gpt **$0.05 in / $0.15 out**, $0.025 cache read. Pioneer **$0.50 / $0.50** with cache read and write both $0.50. Self-hosting **$0** under Apache 2.0, and the model is sized to fit **24GB VRAM quantized** on a consumer RTX 4090 or 5090.
- **Architecture:** Open-weight **MoE**, **25.2B total / 3.8B active** parameters (nominal "26B A4B"), 262,144-token vocabulary, **~550M vision encoder**. The defining choice is an **encoder-decoder transformer with bidirectional attention over a 256-token generation canvas**: an autoregressive encoder processes and KV-caches the prompt, then a decoder iteratively denoises the entire block in parallel, multi-canvas sampling extends it, and the finished block is re-encoded and appended. Warm-started from Gemma 4 26B A4B's final post-trained public weights via a two-stage pipeline (SFT to discrete diffusion + bidirectional attention across 256-token canvases) rather than pretrained from scratch. Notably heavier per forward pass than its base: the AR model activates 8 unique experts per token per MoE layer, while DiffusionGemma activates **~84 unique experts per 256-token canvas**, measured on PG-19. Evaluated with Google's recommended **Entropy Bound (EB) sampler**.

### Raw benchmarks found

**All figures are vendor-published.** Google ships the table with the autoregressive Gemma 4 26B A4B in the adjacent column, which is unusually useful: it isolates the diffusion tax on an identical base rather than comparing against some other model. Both instruction-tuned, both EB sampler. The third-party column is empty — there is **no** Artificial Analysis page, no BenchLM profile, and no independent harness run for this model anywhere, so nothing here is corroborated.

The paper also compares speed and quality against other text diffusion models (LLaDA 2.1 Flash 100B, Nemotron Diffusion 14B) and the proprietary Mercury 2 API, claiming a new Pareto frontier and a speed frontier that extends past the Gemma 4 AR family at every scale from E2B to 31B, even against models using multi-token prediction. It argues the large cut in total forward passes more than offsets the diffusion model's heavier individual passes.

Text & reasoning:

- MMLU-Pro: **77.6%** (Gemma 4 26B A4B: 82.6%)
- AIME 2026, no tools: **69.1%** (base: 88.3%)
- GPQA Diamond: **73.2%** (base: 82.3%)
- HLE, no tools: **11.0%** (base: 8.7%) — **the only axis where diffusion wins**
- HLE, with search: **11.9%** (base: 17.2%)
- MMMLU: **81.5%** (base: 86.3%)
- BigBench Extra Hard: **47.6%** (base: 64.8%)
- Artificial Analysis Intelligence Index / CritPt / Omniscience / LCR / IFBench: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **56.2%** (base: 68.2%)
- Function calling: **native**, documented by NVIDIA NGC and Model Garden
- Terminal-Bench 2.1 / TB Hard / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / BFCL-v4: **no verified public score found**

Coding:

- LiveCodeBench v6: **69.1%** (base: 77.1%)
- Codeforces ELO: **1429** (base: 1718)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench / Coding Index: **no verified public score found**

Long context:

- MRCR v2 8-needle @ 128K (average): **32.0%** (base: 44.1%)
- No measurement at or beyond the advertised 256K window, and no needle test above 128K

Vision:

- MMMU-Pro: **54.3%** (base: 73.8%)
- MATH-Vision: **70.5%** (base: 82.4%)
- MedXPertQA (MM): **49.0%** (base: 58.1%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.319** (base: 0.149)
- Video-MME / LVBench: no verified public score found, despite video input being listed

Speed / cost per task:

- **~1,500 tokens/second** on a single NVIDIA H100 (technical report); **>1,000 tok/s** on H100 and **>1,100 tok/s** at low batch sizes on Hopper (DeepMind / NVIDIA); **up to 4× faster** token output than the AR family
- Fits within **24GB VRAM quantized** (RTX 4090 / 5090); native **NVFP4** support on Blackwell

### Normalized scores (1–100)

- **Tool use: 73/100.** The one real agentic measurement, **Tau2 at 56.2% averaged over 3 domains**, actually reaches the methodology's frontier marker (`Tau3 ~50%+`) — stronger on that axis than the base model's own headroom would suggest, and backed by genuinely native function calling plus a multi-canvas sampler that revises whole blocks. Scored well short of the 90–100 band because the other frontier leg is entirely absent: **no Terminal-Bench at all**, no GDPval-AA, no OSWorld, no AutomationBench, no BFCL-v4 function-calling accuracy, and Claw-Eval is missing (a slight penalty by methodology, not a scored zero). The Tau2 column is also a customer-service tool-use suite, not terminal automation, so it says little about shell-and-filesystem work; and it is 12.0 pts below its own base, so the architecture is not free here even where diffusion helps. 73 credits the measured number while declining to treat one vendor column as frontier agentic evidence.
- **Reasoning: 64/100.** Top of the methodology's 55–65 mid band. **GPQA Diamond 73.2%** sits squarely inside the `GPQA 60–80%` mid marker and MMLU-Pro 77.6% / MMMLU 81.5% corroborate it; **AIME 2026 at 69.1%** is real math strength despite no tools. Capped there because **HLE is 11.0% without tools and 11.9% with search** against a 40% frontier threshold, BigBench Extra Hard 47.6% is the weakest leg in the table, and there is no Index, CritPt or Omniscience figure to corroborate anything. The diffusion tax is steepest exactly where multi-step reasoning matters most — **AIME loses 19.2 pts and BigBench XHARD 17.2 pts** versus base — which is the honest reason this is a mid-band score and not a high one. Worth noting the HLE-without-tools *win* (11.0% vs 8.7%): block-level revision appears to help on the very hardest knowledge questions even as it costs elsewhere.
- **Context window: 58/100.** A deliberate discount **below** the pure tier mapping. The 256K window puts it in the 200K–500K tier, anchored at 200K = 70, so the spec alone would score ~72. But the methodology reserves its top bands for *measured* retrieval, and the only retrieval number here is **MRCR v2 8-needle at 128K = 32.0%** — a poor result at only **half** the advertised window, and 12.1 pts worse than the base model that shares the same 256K ceiling. A 32% needle score means multi-hop recall over long inputs is a live failure mode, not a solved problem, and nothing tests 256K at all. Context *capacity* is genuinely 256K; context *use* is the weak part of this model.
- **Multimodal: 72/100.** Text + image + **video** in places it in the methodology's 75–90 `+video/PDF` band, and it is earned on paper: all three of the NVIDIA model card, NGC and the Hugging Face card state image and video input, and there is a real ~550M vision encoder. Scored **below** that band's floor because the measured vision quality is weak across the board and the document path specifically — the one modality class that puts a model in the 75–90 band — is the worst of all: **MMMU-Pro 54.3%** (base 73.8%, a 19.5-pt drop), **MATH-Vision 70.5%**, **MedXPertQA MM 49.0%**, and **OmniDocBench 0.319 average edit distance against the base's 0.149 — more than twice as wrong** on OCR-heavy documents. No video benchmark exists despite video being claimed. So: the modality breadth is real, the vision competence is not yet competitive, and 72 reflects paying for breadth while discounting heavily on the measured quality underneath it.
- **Coding: 60/100.** Below the 65–75 mid band, because the anchors that would place it there are missing or short. **LiveCodeBench v6 69.1%** falls below the band's `LiveCode 80%` marker and **Codeforces ELO 1429** is upper-mid competitive programming rather than strong — a 289-point deficit to its own base, alongside 8.0 pts on LiveCodeBench. The genuine structural argument for higher is Google's own: bidirectional attention over a 256-token canvas is purpose-built for **in-line editing and code infilling**, and iterative block denoising lets the model revise a span rather than append to it, which is exactly the shape of multi-file edit work. That is a real mechanism, and it is why this is 60 rather than lower. But **no repo-level patch benchmark exists for this checkpoint** — no SWE-bench Verified, no SWE-Pro, no DeepSWE, no SciCode, no Vibe Code Bench, no Coding Index — so on this comparison site's primary axis for coding agents there is simply no evidence, and single-file competitive scores are a weak proxy for it.
- **Cost efficiency: 98/100.** The cheapest verified configuration in this family by a wide margin: **NVIDIA NIM serves it at $0.00 / $0.00**, and nano-gpt's $0.05 in / $0.15 out ($0.025 cache read) sits just under the methodology's ~$0.10/$0.20 = 97–99 band. Self-hosting is **$0** under Apache 2.0 and the model is explicitly sized to fit 24GB VRAM quantized on a 4090 or 5090, which is a structural cost advantage no closed API offers — a $0 hosted rate *and* a consumer-GPU local option. Not 100: there is no full-rate free tier on OpenCode Zen (the model is not served there at all), and the NVIDIA $0 route is a trial endpoint, so the durable scored rate is nano-gpt's.
- **Overall Score: 65/100.** Half-up mean of 73 / 64 / 58 / 72 / 60. Best fit: a **speed-first executor**, not a planner of record. Take it when you need ~1,500 tok/s of 4B-active generation on one GPU, 256K of window, image and video input, and near-zero cost — code infilling, bulk in-place edits, high-volume batch generation, interactive autocomplete-adjacent work. Leave it alone for anything that lives or dies on multi-step reasoning or repo-level patches, where it gives up 8–20 points to a plain autoregressive model of the same size that costs roughly the same to run.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (NVIDIA Build NIM model card and NGC catalogue page for `diffusiongemma-26b-a4b-it`, the Google DeepMind DiffusionGemma product page, the `google/diffusiongemma-26B-A4B-it` Hugging Face model card, the DiffusionGemma Technical Report on arXiv, the NVIDIA NIM vision-language-models docs index, the community MXFP4/MoE quantization card, and models.dev API records across the NVIDIA, nano-gpt and Pioneer providers). Every benchmark is vendor-published; the Gemma 4 26B A4B base column is quoted from the same Google table so the comparison is like-for-like. No third-party score for this model was found and none is claimed.
- Known caveats: **this entire benchmark table is uncorroborated** — there is no Artificial Analysis page, no BenchLM profile and no independent harness run for DiffusionGemma, so a single bad column cannot be detected or cross-checked. The requested ID `opencode/diffusiongemma-26b-a4b` does not exist on OpenCode Zen; the report scores Google's real checkpoint of that name, and the missing `-it` suffix is resolved on the grounds that the IT variant is the only published weights and the only one benchmarked. Provider records disagree materially: context is given as 262,144 / 250,000 / "256K", max output as 32,768 or 131,072, and nano-gpt's `google/diffusiongemma` entry reports `attachment: false` and `tool_call: false`, implying the non-`-it` routing is the text-only, tool-less base — so the multimodal and tool-calling claims may not survive to whatever OpenCode intended by this slug. Pioneer's record is demonstrably unreliable (it describes the model as a "Gemini model" and sets `open_weights: false`, both false). This folder's `meta.json` is an auto-scaffold (`"scaffolded": true`, description "Diffusiongemma 26b A4b model evaluation entry.") and is **wrong on two counts** — it records "128K total" context against a verified 256K, and "Text in/out" against verified text+image+video input. Diffusion results are also sampler-dependent: every number assumes the Entropy Bound sampler, and a different sampler will not reproduce them.
- Future sources: add a new file next to this one, e.g. `DiffusionGemma_Base.md`, using the same headings — the non-`-it` base variant and its text-only/tool-less routing are not covered here.