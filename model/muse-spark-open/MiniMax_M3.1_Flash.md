# Muse Spark Open — findings by MiniMax M3.1 Flash

- Source: Meta (`meta/muse-spark-open`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open (the open-weight release of Meta's Muse Spark family; Meta's own card calls it "Muse Spark Open — 816B total / 42B active")
- **Short description:** Meta Superintelligence Labs' open-weight mixture-of-experts model for coding and agentic work, released 2026-10-15 under the Muse Model License — 816B total parameters with 42B active, a 1M-token context and native multimodality (text, image, video and audio in). It is a distinct artifact from the hosted **Muse Spark 1.3** API model (same generation, different serving and safety post-training): the open release carries extra safety post-training so it can run standalone without system guardrails.
- **Provider / access:** Open weights on Hugging Face — `meta-models/Muse-Spark-Open-816B-A42B` (BF16 and NVFP4, ~822B params on disk; ~700 GB VRAM for NVFP4, ~2 TB for BF16; SGLang, vLLM, TensorRT-LLM, Transformers, MLX — including two M5 Ultra Mac Studios). Served by third-party inference providers, with OpenRouter `meta/muse-spark-open` and Vercel AI Gateway `meta/muse-spark-open` listing the same checkpoint at **$1.25 in / $4.25 out per 1M** (cache read $0.15); Hyper lists it at $1.40 / $4.65. **OpenCode Zen does not list Muse Spark Open** on 2026-11-12 (Zen carries Muse Ember 1.0, Muse Wonder 1.0 and Muse Spark 1.x, but no Open route for this checkpoint). Chat Completions and Responses-style APIs.
- **Release / knowledge:** Released **2026-10-15** (Hugging Face repository created 2026-08; the HF card and the Muse Model License both carry the 2026-10-15 release date). Training data includes text, images, audio and video from public sources, crawled web, acquired third-party sources, Meta products and synthetic data; multilingual, trained on more than 100 languages. Knowledge cutoff not disclosed; models.dev lists 2026-01-04.
- **IDs:** `meta-models/Muse-Spark-Open-816B-A42B` (Hugging Face), `meta/muse-spark-open` (OpenRouter, Vercel AI Gateway, models.dev canonical id). No `opencode/...` Zen id exists for this checkpoint.
- **Context window:** **1,048,576 tokens (1M) at inference**, up to 1,048,576 max output per models.dev / the HF card's "1M at inference"; Artificial Analysis's record carries `contextWindowTokens` 1048576. Verified against Meta's model card and the AA model record.
- **Modalities:** **Text, image, video and audio in → text out**, with a 1.8B-parameter perception encoder (50 layers, 1536 hidden, 16 heads, 14x14 patches) and a 202,048-entry vocabulary; OpenRouter's live catalogue entry lists the input modalities as text, image, video, file and audio. Reasoning is **on by default** with a `reasoning_effort` ladder of low / medium / high / **xhigh (default)**, set through the request parameter or the chat kwargs object; recommended sampling is temperature 1.0, top_p 1.0, top_k disabled. Tool calling is supported.
- **Pricing (as of 2026-11-12):** **$1.25 input / $4.25 output per 1M tokens**, cache read $0.15 (OpenRouter and Vercel AI Gateway, identical rows; AA records the same 1.25 / 4.25 / 0.15). Self-hosting is free at the licence level — the Muse Model License grants use, modification, fine-tuning and redistribution with a "Built with Muse Spark Open" attribution requirement and an MAAS revenue clause above $20M aggregate gross revenue; only infrastructure is paid. The open weights carry no hosted free tier, and Meta's licence permits use only for people aged 18 or over.
- **Architecture:** Mixture-of-Experts Transformer with a perception encoder — 816B total / 42B active, **62 layers**, hidden size 8192, 256 experts with **8 activated per token** (top-k routing), gated attention with QK-norm, **128 Q heads / 16 KV heads** (grouped-query, head dim 64), untied embeddings and output head (vocab 202,048 x 8192 ≈ 1.66B each), perception encoder 1.8B; BF16 and NVFP4 weight releases.

### Raw benchmarks found

> Meta's release card reports the model at **xhigh** reasoning effort, temperature 1.0, top_p 1.0, top_k disabled, against open-weight peers. Artificial Analysis's record for the same checkpoint (slug `muse-spark-open`, "Muse Spark Open (Xhigh)") carries the independent harness numbers; where the two agree they are quoted as one measurement.

Agent / tool use:

- Terminal-Bench 2.1: **76.4%** (Meta card, Terminus 2 agent; AA independently measures 76.40%, and Hugging Face's `harborframework/terminal-bench-2.1` eval row for the checkpoint also reads 76.4).
- Terminal-Bench 4.0: **8.08%** (AA, `terminalbench-4-0`) — the current agentic-terminal bar, and this model's weakest measured result.
- Terminal-Bench-Science 0.1: **1.9%** (AA, `terminal-bench-science`).
- MCP-Atlas: **89.2%** (Meta card).
- Toolathlon Verified (Pass@1): **72.8%** (Meta card).
- JobBench: **61.8%** (Meta card).
- GDPVal-AA v2: **1401** normalized pass rate (Meta card; AA records the same figure as `gdpval-aa-normalized` 1401.12).
- OSWorld Verified: **80.4%** (Meta card).
- AA-Briefcase: **1278.69 Elo** (AA, `aa-briefcase`).
- AutomationBench-AA: **49.7%** (AA, `automationbench-aa`).
- FrontierCode 2.0-AA: **7.6%** (AA, `frontiercode-2-0`); FrontierCode (older variant) 27.6% (AA, `frontiercode`).
- GDP.pdf-AA: **18.6%** (AA, `gdp-pdf`).
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this checkpoint.
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Meta card; AA measures 88.99%, and Hugging Face's `Idavidrein/gpqa` Diamond eval row for the checkpoint reads 89).
- HLE-Diamond (no tools): **26.1%** (Meta card; AA measures 26.3%).
- HLE (with tools): **61.0%** (Meta card).
- SciCode: **58.5%** (Meta card; AA measures 58.45%).
- AA Omniscience: **25** (Meta card); AA measures accuracy **42.0%** with non-hallucination **72.0%** (`omniscience-accuracy` 0.4203 / `omniscience-non-hallucination` 0.7200).
- CritPt: **14.9%** (AA, `critpt`); CritPt v2 hard 29.5% (AA).
- MLCR: **7.8%** (AA, `mlcr-aa`).
- Artificial Analysis Intelligence Index: **24.9** (AA, `muse-spark-open`, xhigh — current AA value on 2026-11-12). Meta's release card lists "Artificial Analysis Intelligence Index 39" for the same configuration, measured against the index version published at release time; AA's live page on 2026-11-12 shows the v5 figure of 24.9, and the two readings scale consistently against the same peers (Meta's table: GLM 5.3 = 45, Kimi K3 = 44; AA: GLM-5.3 = 31.7, Kimi K3 ≈ 32).
- BenchLM-style overall ranking: **no verified public score found**.

Coding:

- DeepSWE 1.1: **60%** (Meta card, preferred harness; the Hugging Face `datacurve/deep-swe` eval row for the checkpoint also reads 60).
- SWE-Atlas-QnA: **58%** (Meta card, preferred harness).
- Terminal-Bench 2.1: **76.4%** (Meta card, Terminus 2 agent — see above).
- SciCode: **58.5%** (Meta card / AA).
- FrontierCode 2.0-AA: **7.6%** (AA); FrontierCode 27.6% (AA).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / Coding Index: **no verified public score found** for this checkpoint.

Long context:

- **1M-token context at inference** (Meta card; AA context record 1048576), with AA's long-context reasoning row at **78.3%** (`artificial-analysis-long-context-reasoning`).
- MRCR / RULER / GraphWalks at 512K+: **no needle-in-a-haystack retrieval percentage published at the full 1M window** — Meta publishes no measured retrieval-at-1M figure, so the top of the ≥1M tier cannot be claimed on measured retrieval.

Multimodal:

- ZeroBench (with tools): **50.0%**; BabyVision (with tools): **80.2%**; SimpleVQA (with tools): **73.6%**; WorldVQA (with tools): **49.4%**; IntPhys2: **68.3%**; VideoMMEv2: **61.5%** (all Meta card).
- MMMU-Pro: **80.9%** (AA, `mmmu-pro`).

Safety (context for the open-weight release):

- FORTRESS adversarial (static): ARS **5.8** / ORS **17.4**; StrongREJECT v2 (adaptive): **0.5** (lower is better) (Meta card).
- Cyber misuse refusal: 99.2% of jailbreaks refused on Meta's internal benchmark, 94.8% aggregated over PolyGuard (cyber subset), RedCode and CyberBench 2024 (Meta card).

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 89.2, OSWorld Verified 80.4, Toolathlon Verified 72.8, JobBench 61.8, AutomationBench-AA 49.7% and Terminal-Bench 2.1 76.4% (three independent reads) form a strong agentic profile; GDPval 1401 sits below the ~1750 frontier anchor and Terminal-Bench 4.0 at 8.1% plus the absent Tau3 and Claw-Eval rows cap the score.
- **Reasoning: 72/100.** GPQA 89.0% (independently reproduced by AA and Hugging Face), HLE with tools 61.0%, SciCode 58.5% and HLE-Diamond 26.1% are mid-to-upper-mid; MLCR 7.8%, CritPt 14.9% and an AA Index of 24.9 keep it well below the 90–100 frontier band.
- **Context window: 96/100.** A documented **1M-token** window with up to 1M max output places it in the ≥1M tier (95–100); AA's long-context reasoning at 78.3% and the absence of a published ≥98% retrieval measurement at 512K+ rule out 100.
- **Multimodal: 93/100.** Native text, image, video **and audio** input with a dedicated 1.8B perception encoder — the rubric's "+audio in" band (90–100) — supported by MMMU-Pro 80.9%, BabyVision 80.2%, SimpleVQA 73.6% and VideoMMEv2 61.5%; text-only output keeps it off the ceiling.
- **Coding: 78/100.** DeepSWE 1.1 at 60%, Terminal-Bench 2.1 76.4%, SWE-Atlas-QnA 58% and SciCode 58.5% clear the SciCode anchor but sit below the frontier markers (DeepSWE 74%+, TB2.1 85%+), and FrontierCode 2.0-AA at 7.6% is the clear weak spot.
- **Cost efficiency: 88/100.** The rubric's "~$1.25/$4.25 ≈ 88" band for hosted serving, with the additional option of running the weights yourself at $0 licence cost — though the hardware floor (≈700 GB VRAM for NVFP4) makes the hosted route the practical default.
- **Overall Score: 83.8/100.** Best fit: organizations that want a self-hostable, 1M-context multimodal agentic/coding model at frontier-adjacent reasoning quality and can tolerate the serving footprint.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Meta's Hugging Face model card and Muse Model License read directly, the Artificial Analysis model record for the same checkpoint, and live OpenRouter / Vercel AI Gateway catalogue rows for pricing, context and modalities; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark Open model card (Meta Superintelligence Labs, 2026-10-15) — specs and benchmark table](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Muse Spark Open evaluation methodology — Meta AI Research](https://research.meta.ai/static/muse-spark-open-evaluation-methodology)
  - [Artificial Analysis — Muse Spark Open model page (Index 24.9, GPQA 89.0, TB2.1 76.4, SciCode 58.5, pricing)](https://artificialanalysis.ai/models/muse-spark-open)
  - [OpenRouter — meta/muse-spark-open (context 1,048,576, pricing, modalities)](https://openrouter.ai/meta/muse-spark-open)
  - [Vercel AI Gateway — meta/muse-spark-open pricing](https://vercel.com/ai-gateway/models/meta/muse-spark-open)
  - [Muse Model License (release date, usage policy and MAAS clause)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md)
  - [Meta Developer Docs — build with Muse Spark Open (deployment, reasoning effort)](https://dev.meta.ai/resources/blog/build-with-muse-spark-open)
