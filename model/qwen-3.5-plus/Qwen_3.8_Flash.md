# Qwen 3.5 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.5 Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 80 provisional→**88 verified** (reseller lane $0.40/$2.40 — under the $1.25/$4.25≈88 anchor, blended $0.90 logged); catalog confirms the alias ships the **2026-04-20 native vision-language snapshot with 1M tiered-context** — curated 128K/text stub overridden by the vendor catalog, but with **zero measured rows** the Context/Multimodal bands hold conservatively with revisit triggers; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's budget hosted tier of the Qwen 3.5 generation — cheap and serviceable for chat-class workloads, but with only 4 independently verified benchmark rows and weak scores on every one of them.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope API (`qwen3.5-plus`); OpenCode Zen entry (`opencode/qwen-3.5-plus`), standard pricing. Reasoning + tool calls.
- **Release / knowledge:** early 2026 (Qwen 3.5 launch, "Towards Native Multimodal Agents"); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.5-plus` / `alibaba/qwen3.5-plus`.
- **Context window:** curated meta says 128K total; BenchLM lists 1M — **conflicting**, no retrieval-at-length evidence published either way.
- **Modalities:** text in/out per curated meta (the Qwen 3.5 family markets image/video understanding, but no Plus-variant multimodal rows are verified).
- **Pricing (as of 2026-10-02):** "Standard pricing" — Plus tier historically among the cheapest hosted APIs; exact verified rate not found.
- **Architecture:** proprietary hosted tier of the Qwen 3.5 line.

### Raw benchmarks found

> Independently verified against BenchLM (only **4 of 618** rows; 49.44/100, #97 of 645), citing the JobBench paper, Vals AI and Epoch AI (fetched 2026-10-02). The vendor launch blog (qwen.ai) renders no fetchable score tables, and llm-stats returned no data for this variant — coverage is genuinely thin.

Agent / tool use:

- JobBench: **18.5%** (paper) — the only agentic row published for this variant

Reasoning / mathematics:

- FrontierMath v2 (Epoch AI): **21.0%** Tiers 1–3, **2.1%** Tier 4 — well below frontier

Coding:

- Vibe Code Bench (Vals): **15.74%** — weak repo/agent code

Multimodal / long context:

- No verified multimodal or long-context retrieval rows published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 50/100.** JobBench 18.5% is the sole verified agency row and is weak; no Terminal-Bench, GDPval or τ² rows exist to lift it — provisional until coverage improves.
- **Reasoning: 55/100.** FrontierMath v2 21.0% (Tier-4 2.1%) shows a real but sub-frontier math tier; no GPQA/HLE/ARC rows published, so the score rests on one benchmark family.
- **Context window: 60/100.** Conflicting specs: curated meta 128K vs BenchLM 1M, with zero retrieval-at-length evidence; scored near the top of the 100K–200K band (50–64) pending a confirmed window — if 1M is real and used, this dim could jump to 95+. (2026-11-03 second pass: Alibaba's own lifecycle catalog now states the Plus line **"supports a context length of up to 1 million tokens, with tiered pricing"** — the 1M spec is vendor-confirmed, but NO retrieval-at-length metric has been published for this variant either way, so the conservative band holds with the revisit trigger: a 1M row ≥98% MRCR would move this dim to the 95+ tier.)
- **Multimodal: 15/100.** Text in/out per the curated entry with no verified image/audio/video rows for this variant — text-only band (10–20), despite the family's native-multimodal marketing. (2026-11-03 second pass: the vendor catalog formally categorizes `qwen3.5-plus` under **"Text generation, Reasoning, Visual understanding"** as a **"native vision-language"** model — so image-in is real; but the methodology credits measured rows, and still zero exist for this variant, so the band holds at the top of the text-only range with a revisit trigger: any published visual row lifts this into the +image 60–70 band.)
- **Coding: 40/100.** Vibe Code Bench 15.74% is below mid-tier; no SWE-bench, LiveCodeBench or Coding Index rows for the Plus variant to counterbalance it.
- **Cost efficiency: 88/100.** (Revised by the 2026-11-03 second pass from 80/100: exact rate now verified — **"Qwen3.5 Plus on Ofox.ai costs $0.4 per million input tokens and $2.4 per million output tokens. Pay-as-you-go"** (ofox), at/below the $1.25/$4.25≈88 anchor with the official CNY tiered table and seminal.ai's **"three-to-one input-to-output ratio … $0.90 per million tokens blended"** reading logged un-averaged; no free tier confirmed, snapshot alias routing noted. Cost is excluded from Overall.
- **Overall Score: 44/100.** Mean of Tool 50, Reasoning 55, Context 60, Multimodal 15, Coding 40 = 44.0 → 44. Best fit: low-budget high-volume chat/extraction where cheap tokens outweigh capability; for any agentic, coding or reasoning workload choose Qwen 3.7/3.8 Plus/Max or a Zen-free Flash-tier model instead — treat all scores as provisional given only 4 verified benchmarks.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://ofox.ai/models/qwen/qwen3.5-plus (**"Qwen3.5 Plus on Ofox.ai costs $0.4 per million input tokens and $2.4 per million output tokens"**) and https://seminal.ai/reference/models/alibaba-qwen-qwen3-5-plus/ (**"At a three-to-one input-to-output ratio, Qwen3.5-Plus costs $0.90 per million tokens blended"**) and https://help.aliyun.com/en/model-studio/model-pricing (fetched within 5 days: **"qwen3.5-plus. Currently equivalent to qwen3.5-plus-2026-02-15 … Prices in CNY per million tokens. Model ID. Input: text/images"** — live catalog entry, tiered table) · lifecycle/specs — https://www.alibabacloud.com/help/en/model-studio/newly-released-models (fetched 2026-11-03: **"qwen3.5-plus qwen3.5-plus-2026-02-15 | The Qwen3.5 native vision-language series Plus models"**, **"qwen3.5-plus-2026-04-20 … substantial improvement in agentic coding capabilities compared to the February 15th snapshot … supports a context length of up to 1 million tokens, with tiered pricing"**, categorized **"Text generation, Reasoning, Visual understanding"**) · benchmarks — no new GPQA/HLE/SWE/MMMU rows surfaced for this variant after 2026-10-02 (remains 4 BenchLM rows: JobBench 18.5, FrontierMath 21.0/2.1, VibeCode 15.74).

**What moved and how it was resolved:**

1. **Cost 80→88 (provisional→verified):** $0.40/$2.40 is strictly under the $1.25/$4.25≈88 anchor; anchored at 88 (not higher — no free tier, and the CNY official table may tier upward past 256K like sibling Plus skus; blended $0.90 logged). Overall unaffected (Cost excluded).
2. **Specs vendor-confirmed, bands held:** the catalog overrides the curated 128K/text stub — native vision-language with 1M tiered context. But the sweep credits measured evidence and still has none for this id, so Context 60 and Multimodal 15 stand **with explicit revisit triggers** (the catalog's "Input: text/images" pricing column confirms image input is billed, not that quality exists at length).
3. **Snapshot lineage noted:** the rolling `qwen3.5-plus` alias has served 2026-02-15 then 2026-04-20; the 4 verified rows trace to the Feb snapshot and the 04-20 bump's claimed "agentic coding" gains are unmeasured here — the 04-20 snapshot is a future separate-folder question for curators, not a row-merge. 50+55+60+15+40 = 220/5 = 44.0 → **Overall 44**.

**Scores changed by this pass:** Cost efficiency 80→88 (excluded from Overall). **Overall remains 44.** Revisit triggers: any measured visual row; any retrieval-at-length row.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows via JobBench paper, Vals AI and Epoch AI; vendor blog and llm-stats checked but yielded no fetchable data); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (ofox, seminal.ai, aliyun + alibabacloud Model Studio catalog pages, one fetched directly); Cost 80→88 on the verified $0.40/$2.40 lane; native-VL + 1M catalog confirmation held as revisit triggers, not unmeasured credits — **no dimension changed and Overall remains 44**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
