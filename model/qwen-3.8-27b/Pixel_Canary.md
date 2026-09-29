# Qwen3.8-27B — findings by Pixel Canary

- Source: Alibaba open weights (`Qwen/Qwen3.8-27B`, Apache-2.0), OpenCode catalog `Qwen/Qwen3.8-27B`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B (dense 27B vision-language release of the Qwen3.8 generation, open weights; **no OpenCode Zen Free ID** — free access exists only on third-party routes)
- **Short description:** Alibaba's August 2026 small dense model: a 27B thinking-by-default VLM with image/video understanding, a 262K native window (1M with YaRN) and a strikingly uneven profile — OSWorld-Verified 84.3% and SWE-bench Pro 61.7% at 27B scale, against Terminal-Bench 4.0 at 5.6% and CritPt at 5.4%.
- **Provider / access:** Open weights (Apache-2.0) for free self-hosting; hosted by DeepInfra (`deepinfra/Qwen/Qwen3.8-27B`, $0.20/$2.50, 262,144/32,768), Cerebras ($0.99/$1.49, 131,072/40,960), Groq ($0.80/$4.00, 131,042/16,384), Cloudflare Workers AI ($0.45/$3.20), RunInfra ($0.10/$0.40), nano-gpt ($0.15/$0.70, TEE and thinking variants), AMD and Hetzner (in-plan $0), plus OpenRouter `qwen/qwen3.8-27b` ($0.075/$4.40, 1M window) and **`qwen/qwen3.8-27b:free` at $0 with 262,144 tokens**.
- **Release / knowledge:** **2026-08-14** (models.dev `release_date`, identical across DeepInfra, Cerebras, Groq, Cloudflare, RunInfra, AMD, Hetzner and nano-gpt listings); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-27B` (repo + HF), vendor variants `qwen3.8-27b` (nano-gpt, Cloudflare `@cf/qwen/qwen3.8-27b`, Groq `qwen/qwen3.8-27b`).
- **Context window:** **262,144 native, extensible to 1,000,000 with YaRN** — DeepInfra/RunInfra/nano-gpt list 262,144 with 32,768 max output, Cerebras 131,072/40,960, Groq 131,042/16,384, Cloudflare 262,144/262,144, and OpenRouter advertises the YaRN-extended **1,000,000** on the paid route only (the `:free` route stays at 262,144). This matches the folder's `meta.json`; max output is provider-dependent, so pin the host.
- **Modalities:** Text, image and video in; text out, with thinking on by default (explicit `:thinking` route variants exist on nano-gpt). Tool calling supported; no audio path.
- **Pricing (as of 2026-09-29):** open weights = free self-hosting (Apache-2.0); hosted spread is wide — **$0.075–$0.99 / 1M input, $0.40–$4.00 / 1M output**, with cache reads as low as $0.01 (RunInfra) and a genuine $0 route on OpenRouter.
- **Architecture:** dense 27B vision-language transformer, open weights; Alibaba publishes the checkpoint but not a full architecture datasheet for this tier.

### Raw benchmarks found

BenchLM profile `qwen3-8-27b` (updated 2026-09-28) — composite **55.26/100, rank #58 / 512** (BenchLM flags partial coverage: 55 of 486 benchmarks; related earlier model `qwen3-6-27b`).

Coding:

- SWE-bench Pro: **61.7%**; SWE-bench (Vals): **86.0%**; DeepSWE: 42.2%
- LiveCodeBench v6: **90.3%** (Vals 84.0%); AA Coding Index: **68.1%**; AA-SciCode: 46.6%
- Terminal-Bench 2.1: **73.0%**

Agentic / tool use:

- OSWorld-Verified: **84.3%** — the highest computer-use score in this comparison group (MiMo-V2.6-Pro 82.0, GPT-5.4 75.0, Grok 4.6 n/a, Qwen3.7 Plus 73.3)
- AA τ³-Banking: **48.0%**; AA Agentic Index: **46.5%**; Terminal-Bench 2.1 (Vals): 58.4%
- GDPval-AA: **1409 Elo** (45.4% normalized)
- AA Terminal-Bench 4.0: **5.6%** — the weakest long-horizon terminal result in this group by a wide margin

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (AA-GPQA Diamond 90.5%, Vals 88.9%); MMLU-Pro (Vals): **84.3%**; HLE 30.8% (AA-HLE 33.9%)
- Artificial Analysis Intelligence Index: **33.7** (Grok 4.7 46.5, MiMo-V2.6-Pro 46.3, Grok 4.6 44.3, Qwen3.8 Flash 39.8)
- CritPt: **5.4%**; IFBench **79.5%**
- AA-Omniscience: Accuracy **15.6%**, Hallucination Rate **30.3%**, Omniscience Index −10.0 — it mostly declines, but is rarely right when it answers

Long context:

- AA-LCR: **82.0%** (matches GPT-5.4, above Grok 4.6's 80.3 and Grok 4.7's 76.7)
- MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

Multimodal:

- MathVision: **90.0%** (with Python **94.6%**); CharXiv: **90.2%** (83.7% without tools); OmniDocBench 1.5: **91.1%**; RealWorldQA **85.9%**; AA-MMMU-Pro 76.3%
- Video-MME / MLVU: no verified row for this exact ID despite video being an accepted input

- **Tool use: 72/100.** OSWorld-Verified **84.3%** is the best GUI/device-control score in this whole comparison group and AA τ³-Banking 48.0% plus AA Agentic Index 46.5% are respectable for 27B parameters; capped hard by the long-horizon tail — AA Terminal-Bench 4.0 **5.6%** and GDPval-AA 1409 Elo — and by the fact that terminal work degrades from 73.0% (TB 2.1) to single digits as task length grows.
- **Reasoning: 62/100.** GPQA Diamond 89.2% (AA 90.5%) and MMLU-Pro 84.3% are the strongest open-weight 27B-class results around, and IFBench 79.5% shows instruction discipline; but the AA Intelligence Index is 33.7, HLE only 30.8%, CritPt 5.4%, and AA-Omniscience accuracy is **15.6%** — a ~27B model should not be trusted as an unaided knowledge source.
- **Context window: 74/100.** 262,144 native (1M with YaRN) with AA-LCR 82.0% as genuinely good long-context-reasoning evidence; capped because the usable window and the output ceiling are host-dependent (DeepInfra 262K/32,768, Cerebras 131K/40,960, Groq 131K/16,384, only OpenRouter's paid route advertises the 1M YaRN extension) and no MRCRv2/RULER depth curve exists.
- **Multimodal: 78/100.** Image **and video** input with excellent quantitative-visual results — MathVision 90.0% (94.6% with Python), CharXiv 90.2% (83.7% tool-free), OmniDocBench 1.5 91.1%, RealWorldQA 85.9% — capped because AA-MMMU-Pro is only 76.3%, no video benchmark row is published for this ID, and there is no audio path or multimodal output.
- **Coding: 78/100.** SWE-bench Pro 61.7% and SWE-bench (Vals) 86.0% beat GPT-5.4 (57.7%) and Qwen3.7 Plus (57.6%), LiveCodeBench v6 90.3% is near-frontier, AA Coding Index 68.1 is solid; capped by DeepSWE 42.2% and AA-SciCode 46.6% — repo-scale and scientific-compute tasks are where the 27B budget runs out.
- **Cost efficiency: 92/100.** Apache-2.0 open weights (free self-hosting), a real **$0 route** (`qwen/qwen3.8-27b:free`, 262K) and paid routes from $0.075/$4.40 (OpenRouter) or $0.10/$0.40 (RunInfra) with cache reads from $0.01 — only the lack of an OpenCode Zen Free ID for this repo ID keeps it from 100.
- **Overall Score: 72.8/100.** (72 + 62 + 74 + 78 + 78) / 5 = 72.8 — the best self-hostable agentic coder in the 27B class for GUI/OS control and document/chart work, provided it is kept inside a verified tool loop with retrieval rather than used as a reasoning oracle.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `qwen3-8-27b` refreshed 2026-09-28, models.dev provider/pricing index across DeepInfra/Cerebras/Groq/Cloudflare/RunInfra/AMD/Hetzner/nano-gpt listings, OpenRouter paid + free routes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

