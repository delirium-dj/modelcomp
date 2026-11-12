# ERNIE 5.5 Flash — findings by MiniMax M3.1 Flash

- Source: Baidu (`baidu/ernie-5.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash — the served model is the post-trained **ERNIE 5.5 Flash Preview** (released 2026-11-11); the **ERNIE 5.5 Flash Base** pre-training checkpoint (released 2026-11-05) is the open-weight starting point the preview is built on. The repository entry covers the family; every score below is labelled by checkpoint.
- **Short description:** Baidu's efficient sparse mixture-of-experts model — 280B total parameters with 14B active per token, pre-trained from scratch on 33.5T tokens — shipped as a 1M-context, text-only model for high-volume coding, agentic and knowledge work. The Preview is explicitly "an intermediate checkpoint from post-training": Baidu says training is still ongoing and "some capabilities may still fall short".
- **Provider / access:** Baidu Qianfan (model id `am-abe18d298d70` in the Qianfan model center) and OpenRouter, where Baidu's own release page links the **free** route `baidu/ernie-5.5-flash-preview:free` (OpenRouter catalogue row: 1,024,000 context, prompt $0, completion $0, text→text, checked 2026-11-12). The Base weights are on Hugging Face (`baidu/ERNIE-5.5-Flash-Base`, FP8 and BF16) under the ERNIE 5.5 Flash Base Model License v1.0; Baidu states the **post-trained weights will be open-sourced under Apache 2.0 "soon"** — as of 2026-11-12 no post-trained checkpoint is published. Deployment recipes exist for SGLang and vLLM (including `baidu/vLLM-ERNIE`).
- **Release / knowledge:** Base checkpoint **2026-11-05**, Preview **2026-11-11** (ERNIE blog "Product updates" entries). Knowledge cutoff not disclosed.
- **IDs:** `am-abe18d298d70` (Baidu Qianfan), `baidu/ernie-5.5-flash-preview:free` (OpenRouter), `baidu/ERNIE-5.5-Flash-Base` / `baidu/ERNIE-5.5-Flash-Base-BF16` (Hugging Face), `baidu/ERNIE-5.5-Flash-Base` (ModelScope). The id `baidu/ernie-5.5-flash` (the repository's curated id) is **not** a live vendor or gateway id on 2026-11-12.
- **Context window:** **1,048,576 tokens (1,000,000)** for fine-tuning and inference on the released configuration; pre-training context was up to 131,072. OpenRouter's route advertises 1,024,000; the repository's curated entry records max output 131,072.
- **Modalities:** **Text in → text out** — the base checkpoint is documented as text-only, and Baidu's own preview write-up notes the model "is a text-only model and can't see the screen". No image, audio or video input is documented for the standard endpoint. Tool calling is used extensively in the vendor's agent demos (Blender/CAD/MCP/terminal work) and the preview's Terminal-Bench and Toolathlon rows are tool-using results.
- **Pricing (as of 2026-11-12):** the canonical Qianfan route is billed in CNY — the repository's curated entry records **~2 CNY in / ~8 CNY out per 1M (≈$0.28 / $1.13)**, with an off-peak/promotional tier of ~1 CNY / ~4 CNY (≈$0.14 / $0.56); **this CNY price was not re-verified against a live Baidu pricing page on 2026-11-12**. A **verified free route** exists on OpenRouter (`baidu/ernie-5.5-flash-preview:free`, $0 / $0 per the live catalogue), and Baidu's release page links it as an official route — free access to the preview is therefore time-limited and gateway-dependent rather than a permanent free tier.
- **Architecture:** sparse MoE — **280B total / 14B activated**, 43 layers (1 dense FFN + 42 MoE layers), hidden size 4096, 64 attention heads, **37 Heavily Compressed Attention (HCA) layers plus 6 Multi-head Latent Attention layers with DSA** (HCA caches one entry per 128 tokens; MLA layers keep token-level access with sparse attention), **512 routed experts (top-10) plus 1 shared expert** per MoE layer operating in a 2048-d latent space, auxiliary-loss-free load balancing, **Manifold-constrained Hyper-Connections** (expansion rate 4), a **MultiMax** output head, **ECHO** (the backbone's final layer doubles as the multi-token-prediction module and as a speculative-decoding draft model), a ~200K-entry BPE tokenizer that tokenizes numbers right-to-left in groups of up to three digits, vocabulary 201,216, pre-trained from scratch on **33.5T tokens** with the Muon optimizer and FP8 mixed precision (published as FP8 and BF16 safetensors).

### Raw benchmarks found

> The Preview table below is Baidu's own release benchmark table (Baidu ERNIE blog, "ERNIE 5.5 Flash Preview", appendix image, 2026-11-11), run by the vendor — no independent harness has published a full scorecard for this model id. Rows marked *(base checkpoint)* come from the ERNIE 5.5 Flash Base evaluation (Baidu, same harness/prompts/few-shot settings for DeepSeek-V4-Flash-Base, Hy3-preview-Base and MiMo-V2.5-Base) and describe the **pre-trained** weights, not the served Preview; they are proxies and are labelled as such.

Agent / tool use:

- Terminal-Bench 4.0: **46.5%** (Baidu, Preview).
- DeepSWE v1.1: **71.2%** (Baidu, Preview).
- ProgramBench (Almost Solved): **29.5%** (Baidu, Preview).
- NL2Repo-Bench: **64.8%** (Baidu, Preview).
- Terminal-Bench-Science 0.1: **21.0%** (Baidu, Preview).
- CodeBench: **88.2%** (Baidu, Preview).
- BlenderWorld (text-only): **78.0%** (Baidu, Preview).
- Toolathlon-Verified: **75.0%** (Baidu, Preview).
- MCP-Atlas: **84.6%** (Baidu, Preview).
- BrowseComp: **87.4%** (Baidu, Preview).
- AutomationBench-AA: **61.9%** (Baidu, Preview).
- APEX-Agents 1.1: **64.2%** (Baidu, Preview).
- DRACO: **84.9%** (Baidu, Preview).
- OfficeQA Pro V2: **67.9%** (Baidu, Preview).
- SpreadsheetBench V2: **36.4%** (Baidu, Preview).
- SkillBench 1.1 (text-only): **73.5%** (Baidu, Preview).
- Agents' Last Exam (CL): **28.0%** (Baidu, Preview).
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, SWE Atlas Codebase QnA: **no verified public score found** for this model id.
- Throughput: **>200 tok/s** is recorded in the repository's curated entry as a vendor claim; Baidu's release post says the model "keeps decoding fast" but publishes no tok/s figure on the page — **not independently verified**.

Reasoning / knowledge:

- HLE (no tools): **46.4%** (Baidu, Preview).
- AA-LCR v1.1: **79.0%** (Baidu, Preview).
- AA-Omniscience-Public: **25.2%** (Baidu, Preview).
- GPQA (EM, 5-shot): **60.2%** *(base checkpoint — proxy)* (Baidu base evaluation; DeepSeek-V4-Flash-Base 55.9, Hy3-preview-Base 50.2, MiMo-V2.5-Base 51.4).
- MMLU 93.3 / MMLU-Pro 78.4 / MMLU-Redux 94.1 / CMMLU 90.0 *(base checkpoint — proxy)*; BBH (CoT) 89.2, WinoGrande 87.8, PIQA 96.0; MGSM (8-shot CoT) 87.0; MathBench-CN 80.8 *(base — proxy)*.
- CritPt, Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** for this model id (the model has no AA record).

Coding:

- SciCode / AA-SciCode: **no verified public score found** for the Preview.
- LiveCodeBench (Pass@1): **40.1%** *(base checkpoint — proxy)*; HumanEval+ (Pass@1) **82.3%**, MBPP+ (Pass@1) **81.5%**, FullStackBench 54.6, RepoBench (EM) 50.3 *(base — proxy)*.
- SWE-bench Verified / SWE-Pro, Vibe Code Bench, Coding Index: **no verified public score found** for this model id.

Long context:

- **1M-token context** for inference (Baidu release post and base model card; OpenRouter route 1,024,000).
- HELMET-RAG (SubEM) **71.5%**, HELMET-ICL (EM) **85.9%**, HELMET-Rerank (NDCG@10) **56.2%**, RepoQA (Pass@1) **91.7%**, LongBench-v2 (EM) **48.7%**, InfiniteBench (Avg) **46.5%** *(base checkpoint — proxy)*.
- MRCR / RULER / GraphWalks at 512K+: **no long-context retrieval percentage published at the full 1M window** for either checkpoint.

Multimodal:

- **Text-only**: the base model card lists "Modality: Text", and Baidu's Preview write-up states the model cannot see the screen. **No image, audio or video input** is documented for the standard endpoint.
- MMMU-Pro, OSWorld, MMMU: **no verified public score found** for this model id.

### Normalized scores (1–100)

- **Tool use: 76/100.** A dense agentic tool-use profile for a 14B-active model — Toolathlon-Verified 75.0%, MCP-Atlas 84.6%, BrowseComp 87.4%, DRACO 84.9%, APEX-Agents 1.1 64.2%, AutomationBench 61.9%, Terminal-Bench 4.0 46.5% — capped by the absence of any published Tau3, GDPval, Claw-Eval or AA row for this id and by Agents' Last Exam at 28.0%.
- **Reasoning: 68/100.** HLE (no tools) 46.4% is above the rubric's 40% reasoning anchor and AA-LCR v1.1 at 79.0% is a strong long-context-reasoning row, but AA-Omniscience-Public is only 25.2%, no GPQA is published for the served Preview, and the base-checkpoint GPQA proxy (60.2%) is a pre-training number, not the deployed model.
- **Context window: 95/100.** The documented **1M-token** window (1,048,576 on the released config, 1,024,000 on the OpenRouter route) places it at the bottom of the ≥1M tier (95–100); no retrieval measurement at 512K+ is published, and the 128K training context tempers the long-window claim.
- **Multimodal: 15/100.** **Text-only** on the documented endpoint — Baidu's own text describes it as unable to see the screen — so it sits in the rubric's text-only band (10–20).
- **Coding: 78/100.** DeepSWE v1.1 at **71.2%** (just below the 74% frontier anchor) with CodeBench 88.2%, NL2Repo-Bench 64.8%, ProgramBench 29.5% and Terminal-Bench 4.0 46.5%, plus the vendor's Unreal/Cocos game-dev and Blender/CAD agent demos; capped by Terminal-Bench-Science 0.1 at 21.0% and the absence of public SWE-bench, SciCode and Coding Index rows.
- **Cost efficiency: 98/100.** A **verified $0 / $0 route** exists (OpenRouter `baidu/ernie-5.5-flash-preview:free`, linked by Baidu's own release page) over a paid Qianfan route the repository records at ≈$0.28 / $1.13 per 1M — the free gateway route is promotional and rate-limited, so it lands just under the rubric's $0 = 100 ceiling.
- **Overall Score: 66.4/100.** Best fit: high-volume, tool-heavy coding and knowledge-work pipelines on a text-only 1M-context model where per-token cost dominates; the benchmark record is vendor-published only, and Baidu's own post says post-training is still underway.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Baidu ERNIE's Preview and Base release posts read directly, the ERNIE-5.5-Flash-Base model card on Hugging Face (full base evaluation table), and the live OpenRouter catalogue row for Baidu's official free preview route; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ERNIE 5.5 Flash Preview — Baidu ERNIE release post (2026-11-11, benchmark table, Qianfan + OpenRouter routes)](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [ERNIE 5.5 Flash Base — Baidu ERNIE release post (2026-11-05, architecture and base evaluation)](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [ERNIE-5.5-Flash-Base model card — Baidu on Hugging Face (specs, deployment, base benchmarks)](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
  - [OpenRouter — baidu/ernie-5.5-flash-preview:free (1,024,000 context, $0/$0, text→text)](https://openrouter.ai/baidu/ernie-5.5-flash-preview)
  - [Baidu Qianfan model center — ERNIE 5.5 Flash Preview entry](https://console.bce.baidu.com/qianfan/modelcenter/model/buildIn/detail/am-abe18d298d70)
  - [vLLM-ERNIE — Baidu deployment repository](https://github.com/baidu/vLLM-ERNIE)
