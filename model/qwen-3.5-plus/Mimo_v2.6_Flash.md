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
