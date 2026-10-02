# Claude 3.5 Sonnet — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-3-5-sonnet-20240620` / upgraded `claude-3-5-sonnet-20241022`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (June 2024 + upgraded October 2024 version)
- **Short description:** Anthropic's mid‑2024 workhorse — the model that made Claude the default developer choice of its era (outperformed Claude 3 Opus at ~2× speed and a fraction of cost, and **pioneered OSWorld computer use in October 2024**). By late 2026 it is a **legacy reference point roughly 18–24 months behind the frontier**: GPQA 59.4 vs 2026 frontier 90+, SWE‑V 49.0 vs 2026 frontier 80+, BenchAlign now ranks it 29.6/100 at **#175 of 211**. Successor to which the Sonnet 4.x/5.x line is many generations ahead.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022` latest; `claude-3-5-sonnet-20240620` original), Claude.ai, Amazon Bedrock, Google Vertex AI (historical listings). No Free ID (paid only).
- **Release / knowledge:** 2024‑06‑20 (original); upgraded 2024‑10‑22 introducing computer use (public beta). Knowledge cutoff April 2024 (vendor docs of the 3.5 generation).
- **IDs:** `anthropic/claude-3-5-sonnet` family; `claude-3-5-sonnet-20241022`.
- **Context window:** **200K tokens; max output 8,192 tokens** (vendor docs of the era). The 8K output cap is a severe constraint on 2026 agentic workloads.
- **Modalities:** **Text + image in, text out.** No native thinking mode. Tool use (function calling) + JSON; **computer use (beta) added October 2024** — a genuine first.
- **Pricing (as of 2024‑10, historical):** $3.00 /M input, $15.00 /M output. Cost excluded from Overall.
- **Architecture:** proprietary, closed weights; parameter count never disclosed.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (public internet research across aireleasetracker.com, benchlm.ai, metr.org, llm-stats.com, chatforest.com, winzheng.com, Anthropic launch coverage). Benchmarks are 2024‑era and predate HLE / LCR / CritPt / Terminal‑Bench / MRCR / GDPval culture.

Agent / tool use:

- TAU‑bench (Oct 2024 version): **retail 62.6% / airline 36.0%** (Anthropic computer‑use announcement)
- OSWorld (computer use beta, screenshot‑based): **14.9%** — category‑leading at the time
- Terminal‑Bench / GDPval‑AA / Claw‑Eval / Toolathon: no verified public score found (postdate the model)

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (0‑shot CoT; June 2024 launch card; +9 pts over Claude 3 Opus)
- MMLU: **88.7%** (5‑shot; June 2024 launch table)
- BullshitBench v2: **46%** (independent, via aireleasetracker.com)
- BenchAlign retrospective: **29.6 / 100, #175 of 211** (benchlm.ai Oct 2026 snapshot)
- METR preliminary autonomy evaluation exists for the June version (metr.org, Oct 2024) — qualitative
- HLE / LCR / CritPt: no verified public score found (postdate the model)

Coding:

- SWE‑bench Verified: **49.0%** (Oct 2024 version; June version 33.4%) — both per Anthropic / lab data
- HumanEval: **92.0%** (June 2024 launch table)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (postdate the model)

Long context:

- 200K‑window model; no MRCR / RULER / GraphWalks numbers — no long‑context retrieval reported

Multimodal:

- Vision input (image) was the era's headline selling point; text‑only output; no audio/video

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology, scored against the **2026 field** (not 2024 peers). Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's honest legacy discount (Overall 44) is the floor; the 68.2 cohort is heavily reputation‑inflated. Real image input earns Multimodal above the text‑only floor.

- **Tool use: 48/100.** TAU‑bench retail 62.6% and OSWorld 14.9% were SOTA in late 2024 and **pioneered computer use** — historically important. On the 2026 scale both are far below frontier agents. Kimi 45; +3 for the genuine computer‑use pioneer credit. Cohort 67.4 (pure reputation).
- **Reasoning: 42/100.** GPQA 59.4% was strong mid‑2024 but is roughly **half the current frontier (90+)**; MMLU 88.7 was solid; no thinking mode; BenchAlign now ranks it #175/211 at 29.6/100. Kimi 40; +2 for BullshitBench 46 showing some resistance to nonsense. Cohort 64.8 reputation‑inflated.
- **Context window: 65/100.** 200K window = v4 200K–500K band (65–84, 200K anchors 70), but the **8K max‑output cap** is a severe restriction for 2026 agentic workloads and there's no MRCR / RULER retrieval evidence. Kimi 45 (below the 200K anchor — under‑credits a hard spec fact). Cohort 70 (matches the anchor exactly). **65** is the honest methodology band with an output‑cap discount.
- **Multimodal: 55/100.** **Real image input** places it above the text‑only 10–20 floor — the v4 +image band is 60–70, but the 2024 vision quality has been surpassed and there is no audio/video/PDF, and output is text‑only. Kimi 40 (below the +image band); cohort 66.4 (matches full band). **55** discounts the band for 2024‑era vision quality without erasing the multimodal fact.
- **Coding: 50/100.** SWE‑bench Verified 49.0% held the record in late 2024 and HumanEval 92% was top‑tier then; both are entry‑level on the 2026 scale. Kimi 50; cohort 73.2 (reputation‑inflated). Match Kimi at 50.
- **Cost efficiency: 35/100.** $3 / $15 per 1M was mid‑tier 2024 pricing; by 2026 standards it's expensive per unit of capability. Cost excluded from Overall.
- **Overall Score: 52/100.** Mean of Tool 48, Reasoning 42, Context 65, Multimodal 55, Coding 50 = 260/5 = 52.0 → **52**. Best fit: **historical reference / regression anchor only** — no new deployments. The Sonnet 4.x / 5.x line replaces it several times over. Kimi 44 (over‑harsh on 200K and image input); cohort 68.2 (reputation‑inflated for a pioneering but thoroughly superseded model). Honest middle: **52** respects the real 200K spec and real image input while applying the 2026 field discount. Cross‑reference: Llama 3.2 Vision (Sept 2024) scores 42 in this repo — Claude 3.5 Sonnet earns 10 more for its clearly superior reasoning, coding, and tool surface in the same era.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` public research across Anthropic launch cards + benchlm.ai retrospective. Flagged: (a) cohort Multimodal 66.4 is roughly correct in band but the 2024 vision discount is missing — I score 55; (b) cohort Coding 73.2 and Reasoning 64.8 are pure reputation — no 2026‑scale benchmark supports them; (c) **computer use pioneer credit** is historically important but does not translate into a 2026 Tool‑use score. Curated `meta.json` correctly flags 200K / text+image / paid only.
- Revisit trigger: none — 2024 legacy model, historical reference only.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
