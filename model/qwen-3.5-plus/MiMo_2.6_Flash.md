# Qwen 3.5 Plus — findings by MiMo 2.6 Flash

- Source: Alibaba / Qwen (`qwen3.5-plus`, QwenCloud hosted; Qwen3.5 generation)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus — Alibaba's **hosted accuracy-tuned value tier** of the Qwen3.5 generation (family released **2026-02-16**, Apache-2.0 open weights alongside: `Qwen3.5-397B-A17B` flagship + 122B/35B/27B/9B/… ladder).
- **Short description:** 397B-total / **17B-active** sparse MoE (512 experts) with **hybrid attention** — ~75% Gated DeltaNet linear attention + ~25% grouped-query softmax/RoPE — and a single **early-fusion** backbone for text/image/video (first open-weight Qwen unifying the old Qwen3 text + Qwen3-VL vision lines; audio is a separate Qwen-Omni line). The hosted Plus endpoint extends context to **1M** and adds built-in tools. Vendor claim: "on par with SOTA leading models across task evaluations; a leap over the 3 series in pure-text and multimodal."
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.5-plus`), OpenRouter (~$0.30/$1.80), DeepInfra hosts the open sibling `Qwen/Qwen3.5-397B-A17B` ($0.54/$3.40); self-host Apache-2.0 weights. No Zen Free ID (`noFreeId: true`).
- **Release / knowledge:** Qwen3.5 family 2026-02-16 (flagship); Plus endpoint current as of 2026-10-07. Knowledge cutoff not published.
- **Context window:** **1,000,000 total** — **991,808 in / 65,536 out** (thinking mode: 983K in / 65K out, max reasoning budget 81K); open-weights sibling is 256K native.
- **Modalities:** **text, image, video in** (family card also lists PDF/document understanding); text out; deep thinking on/off (`enable_thinking`); function calling, structured outputs, prefix/partial mode, context cache, batches, fine-tuning.
- **Pricing (as of 2026-10-07):** **$0.40 in / $2.40 out** per 1M (Model Studio Intl, ≤256K); cache write $0.50, **cache read $0.04**; China region ≈ $0.115/$0.688; OpenRouter from ~$0.30/$1.80. Paid.
- **Built-in tools:** `web_search`, `web_extractor`, `code_interpreter`, `t2i_search`, `i2i_search` (Responses API).
- **Rate limits:** 5M TPM / 15K RPM (published tier).
- **Architecture:** hybrid linear-attention MoE as above; serving efficiency is the headline (long-context throughput vs dense Qwen3-Max at "comparable quality").

### Raw benchmarks found

> Primary: QwenCloud official model page (specs/pricing/tools — no benchmark table
> published for the Plus endpoint itself). Benchmarks below are **Qwen3.5-generation rows**
> (family release, sourced: DeepInfra API run, DataCamp, Codersera, Analytics Vidhya —
> the Analytics Vidhya piece specifically covers qwen3.5-plus) via the AI/TLDR registry —
> the same lineage caveat as our qwen-3.8-flash report applies: hosted-plus rows are
> inherited from family/open-weights evaluations unless noted.

Tool / agent use:

- Tau2-Bench: **86.7** (Analytics Vidhya, Plus-specific article) — strong multi-turn tool use.
- BrowseComp: **78.6** (DataCamp) — elite agentic-search band (beats GPT-5.2 Thinking's 65.8 and Seed 2.0 Pro's 77.3).
- Terminal-Bench 2.0: **52.5** (DataCamp) — **under** the frontier refs.
- OSWorld / MCP-Atlas / Toolathlon / GDPval: no row found for this model.

Reasoning / knowledge:

- GPQA Diamond: **88.4** (DeepInfra run) — near the 90 ref, misses it.
- AIME 2026: **91.3** (Codersera); MMLU-Pro: **87.8** (DeepInfra); IFBench: **76.5** (DataCamp).
- HLE / ARC-AGI / AA Intelligence Index: **no row found** for this model (refs unverifiable).

Coding:

- SWE-bench Verified: **76.4** (DeepInfra run) — clears the DeepSWE-class 74+ band on the closest available row.
- LiveCodeBench v6: **83.6** (Codersera); Terminal-Bench 2.0: 52.5 as above.
- SciCode / SWE-bench Pro / DeepSWE: no row found.

Long context:

- Hosted 1M window (991K in); open sibling 256K. No AA-LCR/MRCR/needle row found for Qwen3.5 in this cycle.

Multimodal (family runs):

- MMMU: **85**; MMMU-Pro: **79** (DataCamp); OmniDocBench v1.5: **90.8** (document/PDF parsing); Video-MME: **87.5** (DataCamp).
- No audio input (Qwen-Omni is the separate audio line).

### Normalized scores (1–100)

- **Tool use: 83/100.** Tau2 86.7 and BrowseComp 78.6 are both frontier-band rows — the BrowseComp figure beats several 2026 flagships in our table — but TB2.0 52.5 misses refs, and there is no OSWorld/MCP-Atlas/Toolathlon/GDPval coverage to round out the agent picture.
- **Reasoning: 79/100.** GPQA 88.4 just under the 90 ref, AIME 2026 91.3 and MMLU-Pro 87.8 healthy, IFBench 76.5 good; HLE, ARC-AGI and AA Index rows are all absent, so zero of the three headline reasoning refs can be verified — scored on what exists.
- **Context window: 95/100.** 991K/1M native hosted = ≥1M tier floor; no retrieval-at-window benchmark published → floor, not top.
- **Multimodal: 88/100.** Text + image + video (+ PDF-grade document understanding) in → video/PDF band 75–90 near its top: Video-MME 87.5, OmniDocBench 90.8, MMMU-Pro 79, MMMU 85; no audio input and no PDF-specific OmniDoc row tied to the Plus endpoint keeps it at 88.
- **Coding: 82/100.** SWE-bench Verified 76.4 (DeepInfra-run) is a genuine frontier-band row and LCB v6 83.6 solid; TB2.0 52.5 misses refs, no SciCode/SWE-Pro/DeepSWE evidence, and hosted-endpoint figures are inherited from family runs.
- **Cost efficiency: 92/100.** $0.40/$2.40 (Intl) undercuts the $0.60/$2.20 ≈ 92 anchor on input and lands near it on output, with $0.04 cache reads (98% off) and China-region pricing at $0.115/$0.688 — only hosted-only availability and the >256K-tier uncertainty keep it from 93+.
- **Overall Score: 85/100.** (83+79+95+88+82)/5 = 85.4 → 85 — the cheapest 1M multimodal agent backbone in the set: BrowseComp 78.6 and Tau2 86.7 at forty cents per million input tokens, with reasoning refs unverifiable and a mid Terminal-Bench as the honest trade-offs.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — QwenCloud official model page (specs, pricing, tools, rate limits), AI/TLDR Qwen3.5 registry page (family release date, architecture, 13 sourced benchmark rows with per-row provenance: DeepInfra, DataCamp, Codersera, Analytics Vidhya), OpenRouter/DeepInfra pricing cross-check; scores are normalized 1–100 interpretations, not official vendor scores; family-vs-endpoint row attribution flagged per methodology.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen3.5-Plus — findings by Mimo v2.6 Flash

- Source: Alibaba/qwen3.5-plus
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Alibaba Cloud's hosted flagship of the Qwen3.5 native vision-language Plus line — hybrid architecture combining linear attention with sparse MoE for higher inference efficiency, "performance on par with state-of-the-art leading models" per official Model Studio docs. Built on the Qwen3.5 397B A17B lane (397B total / 17B active). Not a variant/alias of another entry in this dataset.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-plus`), first-party API; proprietary (not open weights). Current alias of snapshot `qwen3.5-plus-2026-02-15`; newer snapshot `qwen3.5-plus-2026-04-20` adds "substantial improvement in agentic coding capabilities" (official docs).
- **Release / knowledge:** released 2026-02-16 (LM Market Cap; Alibaba snapshot dated 2026-02-15); knowledge cutoff not published.
- **IDs:** `qwen3.5-plus`, snapshot `qwen3.5-plus-2026-02-15`. **No OpenCode Zen Free ID found.**
- **Context window:** **1,000,000 tokens input / 65,536 max output** (LM Market Cap; BenchLM; DeepInfra confirms "1M via Qwen3.5-Plus hosted version" vs 262K on the open 397B weights).
- **Modalities:** text + image + video in, text out (LM Market Cap modality rows); reasoning yes; vision, function calling, JSON mode, streaming, web search (official docs + LMMC).
- **Pricing (as of 2026-10-01):** **$0.26 / 1M input, $1.56 / 1M output** (OpenRouter via pricepertoken SWE-bench Lite leaderboard; LM Market Cap agrees). BenchLM lists a higher $0.40/$2.40 lane — cite both, use the OpenRouter-traded rate as verified. Paid; no free tier verified.
- **Architecture:** proprietary hybrid linear-attention + sparse MoE; hosted variant of the 397B-A17B class (512 experts per DeepInfra's description of the open base); thinking mode available.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> **Severe evidence gap:** Qwen3.5-Plus has essentially no published exact-model benchmark runs. BenchLM shows 0 sourced comparison rows for it in two separate head-to-heads (rank #150–154, composite 47.8–48.0 estimated, wide 34–62 interval).

Agent / tool use:

- JobBench: **18.5%** (BenchLM public ledger) — the only exact-model agentic row found
- Terminal-Bench (any) / τ²-Bench / GDPval / OSWorld / Claw-Eval: **no verified public score found for Qwen3.5-Plus**
- Family context only (open 397B A17B, AA): τ²-Bench Telecom 96%, Terminal-Bench Hard 41%

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index / AIME: **no verified public score found for Qwen3.5-Plus**
- Family context only (397B A17B): GPQA Diamond 88.4%, MMLU-Pro 87.8%, HLE 29%, AA Index 45 (DeepInfra/Opper via AA)
- LMMC composite (methodology v3, 5 signals): **68/100**, Coding rank #171/402; capabilities 83/100, pricing 98/100, context 95/100

Coding:

- SWE-bench Verified / Pro / Terminal-Bench / LiveCodeBench / SciCode: **no verified public score found for Qwen3.5-Plus** (SWE-bench Lite row exists with no score; BenchLM "Coding: Not measured")
- Family context only (397B A17B): SWE-bench Verified 76.4%, SciCode 42%
- Official docs: 2026-04-20 snapshot has "substantial improvement in agentic coding capabilities vs February 15th" (qualitative, no numbers)

Long context:

- 1M window; MRCR / RULER / GraphWalks retrieval: **no verified public score found**
- Family context only: AA long-context reasoning 73% (397B, 262K lane)

Multimodal:

- Image + video input (LMMC modality rows); MMMU / MMMU-Pro / CharXiv / Video-MME: **no verified public score found for Plus**
- Family context only: MMMU-Pro 79.0 (397B A17B, Opper)

### Normalized scores (1–100)

- **Tool use: 40/100.** One exact-model row (JobBench 18.5%, weak) and zero hits on every core methodology anchor (Terminal-Bench, τ², GDPval, OSWorld) — scored as a documented evidence gap with a single below-mid-row.
- **Reasoning: 55/100.** No measured reasoning benchmark for the exact model; best-fit from the strong 397B-family lineage (GPQA 88.4%, HLE 29%) and the LMMC capabilities composite (83/100) — provisional midpoint, kept deliberately below the family open-weight score because hosted Plus runs have never published their own GPQA/HLE.
- **Context window: 93/100.** 1M input puts it in the ≥1M tier (95–100); the 100 requires ≥98% retrieval at 512K+ and no retrieval measurement exists for Plus — one point off the tier floor for the documented 65.5K output cap (vs 128–256K peers).
- **Multimodal: 75/100.** Text + image + video input qualifies for the +video/PDF-in band (75–90) at its floor — no vision benchmark row, no audio input, no non-text output; family MMMU-Pro 79 kept as context only.
- **Coding: 60/100.** No exact-model coding measurement (the LMMC 68/100 coding composite is methodology-derived, not a raw eval) — credit for the 397B-family lineage (SWE-V 76.4%) and the official April snapshot's claimed agentic-coding jump, minus the full evidence-gap penalty.
- **Cost efficiency: 95/100.** $0.26/$1.56 sits between the ~$0.20 (97) and ~$0.60/$2.20 (92) anchors — a 1M-context flagship at under 10% of GPT-5.5 Pro's blended cost, with no verified cache-read rate.
- **Overall Score: 65/100.** (40 + 55 + 93 + 75 + 60) / 5 = 64.6 → 65 — best-fit as a cheap 1M-context multimodal flagship whose published quality evidence is almost entirely family-lineage and composite-derived; the headline number is capped by the near-total absence of exact-model benchmark rows.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (official Alibaba Cloud Model Studio qwen3.5-plus docs, LM Market Cap model page, BenchLM head-to-head ledgers, OpenRouter-traded pricing via pricepertoken, DeepInfra/Opper 397B-family rows); scores are normalized 1–100 interpretations, not official vendor scores. Key caveat: exact-model benchmarks are nearly absent — most capability numbers are family-lineage context, flagged as such.
- Future sources: add a new file next to this one, e.g. `Qwen3.5.md`, using the same headings.

