# Gemma 4 26B A4B — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B`; curated id `opencode/gemma-4-26b-a4b`), cross-checked against the **Gemma 4 Technical Report** (arXiv 2607.02770), the Hugging Face model card, OpenRouter, and DeepInfra/PyImageSearch API writeups
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Twin-provenance note:** the folder `gemma-4.26b-a4b` (dot-slug) is the **same Google model** under a different filename spelling and already carries a signed report from this STEM. This hyphen-slug `gemma-4-26b-a4b` is scored on the identical first-party Gemma 4 Tech-Report evidence (not reattributed from any other model); the two folders are cosmetic variants of one product.

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's **sparse Mixture-of-Experts member of the Gemma 4 open-weight family** (released 2026-04-03, Apache 2.0) — **26B total parameters with only ~3.8–4B active**, engineered for high-throughput on-device/served multimodal use at a fraction of the dense 31B's compute. It clears most of the dense 31B's reasoning/coding quality while staying cheap, making it the family's efficiency sweet spot. Natively multimodal (text + image, and audio in the Gemma 4 architecture).
- **Provider / access:** open weights (Hugging Face `google/gemma-4-26B-A4B`, Apache 2.0); hosted on OpenRouter (incl. a `:free` lane), DeepInfra, Google AI; free to self-host.
- **Release / knowledge:** **2026-04-03** (Gemma 4 family launch); 262k-entry vocabulary.
- **IDs:** `gemma-4-26B-A4B`; family `gemma-4-31b` (dense), `gemma-4-12b`/`gemma-4-12b-unified`, `gemma-4-e4b`, `gemma-4-e2b`; predecessor `gemma-3-27b`.
- **Context window:** **262,144 total**; **32,768 max output** (curated meta); retrieval quality degrades well before the ceiling (see MRCR below).
- **Modalities:** **text + image in** (curated meta); the Gemma 4 architecture is natively text/image/audio — text out; reasoning/thinking mode yes.
- **Pricing (as of 2026-10-23):** **free open weights**; hosted ≈ **$0.12/M in, $0.30/M out**; an OpenRouter `:free` route exists.
- **Architecture:** MoE, 26B total / ~3.8B active; decoder-only Transformer with QKNorm, multi-token-prediction (MTP) speculative drafter; hybrid local/global attention.

### Raw benchmarks found

> **Provenance:** all absolute scores below are **Google's own first-party Tech-Report table** (26B-A4B column, non-thinking), run against recognized suites — high-quality but vendor-executed. The single independent datapoint is an arena/Elo-style listing placing "Gemma 4 26B-A4B" near **1438 (±8)** among MoE peers (Kimi K2.5 1450, Qwen 3.5-397B 1444, DeepSeek-V4-Flash 1436).

Reasoning / knowledge:

- **MMLU-Pro: 82.6** · **GPQA-Diamond: 82.3** · **AIME 2026 (no tools): 88.3** · **Big-Bench Extra-Hard: 64.8** · **MMMLU: 86.3**
- **HLE: 8.7** (weak on the hardest human-level eval — the MoE's active-parameter limit shows at the extreme tail)
- **IFEval: 98.5** · **IFBench: 72.0** (excellent instruction following)

Coding / agentic:

- **LiveCodeBench v6: 77.1** · **Codeforces Elo: 1718** · **SciCode: 40.0**
- **τ²-bench (airline): 76.0** (strong tool-use) — but **Terminal-Bench Hard: 14.0** (weak on hard autonomous terminal work)

Long context / multimodal:

- **MRCR v2 (8-needle, 128k): 44.1** — solid 262K span but *modest deep-retrieval recall*, the main long-context caveat
- **MMMU-Pro: 73.8** · **MATH-Vision: 82.4** (strong multimodal reasoning; near the dense 31B's 76.9 / 85.6)

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-airline 76.0 is genuinely strong tool-calling, and the MTP drafter supports fast agentic loops — but Terminal-Bench-Hard **14.0** is a clear weakness for sustained autonomous terminal work; a split picture scored mid-high.
- **Reasoning: 82/100.** MMLU-Pro 82.6 / GPQA-D 82.3 / AIME 88.3 put it close to the dense 31B at ~4B active — remarkable efficiency; docked for HLE 8.7 (thin at the hardest reasoning frontier).
- **Context window: 66/100.** A real **262K** window with 32K output is respectable, but **MRCR-128k of 44.1** shows retrieval degrades inside the advertised span — good breadth, not best-in-class recall.
- **Multimodal: 78/100.** MMMU-Pro 73.8 and MATH-Vision 82.4 are strong image-reasoning results (near the 31B), and the Gemma 4 architecture natively adds audio — scored high, with a small caution that the curated card lists only text+image for this serving variant.
- **Coding: 78/100.** LiveCodeBench 77.1 and Codeforces 1718 are genuinely good competitive-programming numbers for a 4B-active MoE; discounted for weak SciCode (40) and Terminal-Bench (14) and because everything is Google-run.
- **Cost efficiency: 96/100.** The whole point: **Apache-2.0 free open weights** at ~4B active (cheap to run), hosted at ~$0.12/$0.30 with a `:free` route — elite efficiency for the quality delivered.
- **Overall Score: 75.6/100.** Half-up mean of the five quality dims (74+82+66+78+78)/5 = 75.6. Best fit: **high-throughput, cost-constrained multimodal reasoning and code-assist** where near-31B quality at ~4B active, open weights, and a `:free` lane matter more than peak-agency or extreme-tail reasoning. Held below the dense flagship by its **weak hard-terminal agency (Terminal-Bench 14), modest long-context recall (MRCR 44), and thin HLE** — the efficiency trade-offs of the A4B design. (All absolutes are Google first-party; the independent signal is only its ~1438 arena-Elo tier.)

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Gemma 4 Technical Report (arXiv 2607.02770)** 26B-A4B benchmark column (MMLU-Pro 82.6, GPQA-D 82.3, AIME 88.3, BBExtraHard 64.8, MMMLU 86.3, HLE 8.7, IFEval 98.5, IFBench 72.0, LiveCodeBench v6 77.1, Codeforces 1718, SciCode 40, τ²-airline 76.0, Terminal-Bench-Hard 14.0, MRCR-128k 44.1, MMMU-Pro 73.8, MATH-Vision 82.4; 26B-total/3.8B-active MoE, 262k vocab, MTP drafter, native multimodal), the Hugging Face `google/gemma-4-26B-A4B` card (released 2026-04-03, Apache 2.0), OpenRouter (free lane) and DeepInfra API writeups, plus the report's arena-Elo listing (~1438±8). Curated `meta.json` supplies 262K/32K and text+image. Scores are normalized 1–100 interpretations; **all absolutes are Google first-party and treated as high-quality-but-vendor**, with efficiency/agency caveats (Terminal-Bench, MRCR, HLE) explicitly docked; identity cross-checked against the dot-slug twin folder (`gemma-4.26b-a4b`), which is the same model.
- Revisit trigger: an independent Artificial Analysis / third-party re-run of `gemma-4-26b-a4b` (esp. confirming the low Terminal-Bench-Hard and MRCR figures), or clarification of whether this serving variant exposes the Gemma 4 audio-input lane.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
