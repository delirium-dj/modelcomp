# Gemma 4 12B Unified — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemma-4.12b-unified`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's **June-2026 open-weight (Apache 2.0) encoder-free multimodal model** — **11.95B parameters** that natively **see, hear, and read video** on a **16GB gaming GPU**. Part of the Gemma 4 family "purpose-built for advanced reasoning and agentic workflows." Strong for its size: **AA Intelligence Index 14 (full 4/4 units, #20/141, well above the median 8)**, vendor **GPQA 78.8% / LiveCodeBench v6 72%**. A capable local multimodal runner with a 12B ceiling on hard reasoning and long agent chains.
- **Provider / access:** Open weights on **Hugging Face** (`google/gemma-4-12B-it`, **Apache 2.0**); hosted on SiliconFlow / AA-tracked providers (~$0.10/$0.30). **Not on OpenCode Zen or OpenRouter**; **no free hosted tier id** (`noFreeId: true`); self-host $0.
- **Release / knowledge:** Released **June 2026** (blog.google Jun 3 2026; HF card Jul 2 2026; Gemma 4 technical report arXiv 2607.02770, Jul 24 2026). **Current** (no AA deprecation banner).
- **IDs:** `google/gemma-4-12B`; HF `google/gemma-4-12B-it`; AA `gemma-4-12b` (reasoning variant).
- **Context window:** **256,000 (262,144)** — AA lists 262K; hosts serve 32K–256K.
- **Modalities:** **Text + image + speech (audio) + video in → text out** (AA-confirmed — the broadest input-modality tier). ⚠ **Meta lists only "text, image, audio" and omits video, but AA confirms video input** — the encoder-free architecture natively processes all four (corroborated by Google's blog and the arXiv report). Meta under-claims; flagged.
- **Pricing (as of 2026-10-27):** **~$0.10 / $0.30** per 1M in/out (median hosted; cheapest $0.05/$0.25); **$0 self-host** (Apache 2.0). AA: "reasonably priced" for an open-weight model of its size (both input and output at the ~$0.12/$0.30 median).
- **Architecture:** **Unified encoder-free multimodal transformer, ~11.95B** (12B class), Apache 2.0. Unlike most multimodal models, Gemma 4 12B uses a **unified encoder-free architecture** (the arXiv report notes other Gemma 4 models use frozen vision/audio encoders; the 12B integrates modalities natively). Reasoning + non-reasoning variants; runs in ~16GB VRAM.

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`gemma-4-12b`, reasoning variant, **current** with a **full 4/4-unit** Estimated Index under v4.3.2). GPQA/LiveCodeBench figures are **vendor** (Google / the Gemma 4 technical report). No independent Vals/Epoch/swebench/Terminal-Bench row was located for this exact SKU.

Independent (current — AA v4.3.2):

- **AA Intelligence Index (Reasoning): 14 (Estimated), #20/141 — "well above average"** among comparable open-weight Small-class models (**median 8**), with a **full 4 of 4 units** for Intelligence (a strong, well-sampled estimate). AA: "amongst the leading models in intelligence and reasonably priced when comparing to other open weight models of similar size." Notably, #20/141 places it essentially **adjacent to the larger Gemma 4 31B (#19/141)** — a 12B matching a 31B's rank.
- **AA Speed: 114.7 output tok/s, #21/63 — "faster than average"** (3/4 units), aided by the 12B size and 16GB-VRAM footprint.

Vendor (Google, Gemma 4 technical report / launch):

- **GPQA 78.8%**, **LiveCodeBench v6 72%** — Google's claims for the 12B, positioned for local multimodal agents. Below the dense Qwen3.5-27B sibling tier (GPQA 85.5%) as expected for a 12B, but strong for its size class.
- Google positions the Gemma 4 family for "advanced reasoning and agentic workflows"; the 12B's headline is **encoder-free native multimodality (text/image/audio/video) on a laptop GPU**.

> Provenance: AA Index 14 (full 4/4-unit estimate, well above the open-weight Small-class median 8, #20/141) and 114.7 tok/s are neutral; GPQA 78.8% / LiveCodeBench v6 72% are vendor. No independent coding/agentic harness (Vals/Epoch/swebench/tbench) row exists for this SKU, so coding/agentic are graded on the AA Index + vendor figures + its 12B-class character. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **mostly accurate** — 11.95B open-weight ✓ (AA: 12B), **Apache 2.0** ✓ (AA), encoder-free multimodal ✓ (arXiv), **256K/262,144** context ✓ (AA: 262K), GPQA 78.8% / LiveCodeBench v6 72% ✓ (vendor), ~$0.10/$0.30 hosted + $0 self-host ✓ (AA), runs in 16GB VRAM ✓, "no OpenCode Zen or OpenRouter route" ✓, "12B ceiling shows on hard reasoning and long agent chains" ✓. **One flag:** **modality** — meta says "**text, image, audio in**" but **AA confirms text + image + speech + video**; the encoder-free architecture natively processes **video too** (Google blog + arXiv corroborate). Meta **under-claims** by omitting video; I credit the AA-confirmed four-modality input.

### Normalized scores (1–100)

- **Tool use: 74/100.** The Gemma 4 family is "purpose-built for … agentic workflows," and the 12B is a competent local agent, but the **12B ceiling shows quickly on long agent chains** (meta tradeoff) and no independent agentic harness row (Terminal-Bench/τ²/AutomationBench) was located. Below the larger Gemma 4 31B and the Qwen3.5 agentic siblings. Lite/small-open-weight agentic tier.
- **Reasoning: 76/100.** **AA Index 14 (full 4/4 units) is "well above average"** for its open-weight Small class (median 8) and ranks **#20/141 — adjacent to the 31B (#19)** — a genuinely strong result for a 12B. But the **absolute** Index is low (frontier open-weight 42–51), GPQA 78.8% trails the 27B-class (85.5%), and the 12B ceiling limits hard reasoning. Strong-for-class-but-small band.
- **Context window: 78/100.** **256K (262,144)** — the 256K/262K tier (hosts serve 32K–256K), matching my calibration band and the Qwen3.5 siblings' native 262K. Ample for local document/multimodal work.
- **Multimodal: 83/100.** **Text + image + speech (audio) + video in → text out** (AA-confirmed) via a **unified encoder-free architecture** that natively handles all four modalities on a 16GB GPU — a distinctive engineering achievement and the broadest input-modality tier for an open 12B. Held just below the absolute broadest band (84, which includes document/PDF input) since no PDF/document-input tier is confirmed; text-only output.
- **Coding: 74/100.** Vendor **LiveCodeBench v6 72%** and **GPQA 78.8%** are respectable for a 12B but **vendor-only** (no independent SWE-bench/Terminal-Bench corroboration located), and the 12B ceiling limits repo-scale work. Vendor-only/small-class band; below the Qwen3.5 coder siblings.
- **Cost efficiency: 92/100.** **Apache 2.0, $0 self-host**, runs on a **16GB consumer GPU**, hosted from **$0.05/$0.25** to **~$0.10/$0.30**, at **114.7 tok/s** — exceptional local/open-weight value. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 74 + Reasoning 76 + Context 78 + Multimodal 83 + Coding 74 = 385 / 5 = 77.0 → 77. Best fit: **the unified encoder-free local multimodal runner** — an Apache-2.0 12B that natively sees/hears/reads-video on a 16GB GPU, with a full-4/4-unit AA Index 14 (#20/141, matching the 31B's rank) and cheap, fast open-weight economics — but with a **12B ceiling on hard reasoning, long agent chains, and repo-scale coding**, and only vendor coding numbers. Ideal for **private, local, multimodal agents**; step up to **Gemma 4 31B (79) / Qwen3.5-27B (80)** for harder reasoning or coding. **Divergence note:** curated queue 75.5 vs my 77 → **+1.5**. I credit the **AA-confirmed four-modality input including video (83)** — which the meta under-claims — plus the full-4/4-unit well-above-median AA Index 14 (#20/141) and the strong open-weight cost (92, uncounted); the 12B ceiling on tool use (74) and vendor-only coding (74) hold it back. Sits two points below the larger Gemma 4 31B (79), as expected for the smaller sibling with an adjacent AA rank.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gemma-4-12b` reasoning page — current, full 4/4-unit Estimated Index 14 #20/141 well above median 8, 114.7 tok/s, 262K, text+image+speech+video in → text out, 12B Apache 2.0, $0.10/$0.30; Google blog "Introducing Gemma 4 12B: a unified, encoder-free…" Jun 3 2026; Gemma 4 Technical Report arXiv 2607.02770 for the unified encoder-free architecture and native text/image/audio/video; Hugging Face `google/gemma-4-12B-it` card + SiliconFlow/AA pricing for Apache-2.0 weights, ~$0.10/$0.30 hosted, $0 self-host; vendor GPQA 78.8% / LiveCodeBench v6 72%); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
