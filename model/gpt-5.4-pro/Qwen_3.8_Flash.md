# GPT 5.4 Pro — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.4 Pro (`opencode/gpt-5.4-pro`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — verified Pro-tier pricing ($180/1M out) replaces "standard pricing" guess, legacy-but-GA status, Cost 55→25, bands otherwise unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (inference-heavy tier of GPT-5.4)
- **Short description:** OpenAI's deep-reasoning Pro tier — genuinely frontier on hard reasoning (AA-HLE 58.7%, ARC-AGI-2 83.3%, IPhO Theory 93.5%, FrontierMath v2 Tiers 1-3 50.0%) and elite deep-search (BrowseComp 89.3%) on a 1.05M window. **Independent coverage is extremely thin (11 of 618 rows)** with **no coding, no multimodal and no Terminal-Bench/τ²/GDPval rows published**, so those dimensions are scored as evidence-limited floors, not measured results.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`); OpenCode Zen (`opencode/gpt-5.4-pro`). Reasoning + tool calls.
- **Release / knowledge:** OpenAI "Introducing GPT-5.4"; knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.4-pro` / OpenAI `gpt-5.4-pro`.
- **Context window:** BenchLM lists **1.05M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1.05M.
- **Modalities:** no grounded vision/audio rows on this page; curated `meta.json` "Text in/out". Treated as text-centric with unverified multimodality (see Multimodal).
- **Pricing (as of 2026-10-02):** "Standard pricing" in curated meta, but Pro tiers are premium (higher per-1M + longer inference) — scored as premium.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (11 of 618 rows; 70.72/100, #18 of 645), citing the OpenAI GPT-5.4 launch, plus Artificial Analysis, Epoch AI and Meta (fetched 2026-10-02). **Coverage is very thin — no coding, no multimodal, no agentic-automation rows exist for this variant**, so several dims are evidence-limited conservative scores.

Reasoning / knowledge:

- **HLE 58.7%** (well over the 40 bar; 42.7% w/o tools); **ARC-AGI-2 83.3%** (excellent abstraction); CritPt 30.0; FrontierScience 36.7%
- IPhO 2025 Theory 93.5%; FrontierMath legacy 50%; FrontierMath v2 Tiers 1-3 50.0% / Tier 4 37.5% — elite research-level math/science

Agent / tool use:

- BrowseComp **89.3%** (elite deep-research) — the only agentic row; **no Terminal-Bench / τ² / GDPval / AutomationBench published**

Coding:

- **no verified coding benchmark on this page** (SWE-bench / LiveCodeBench / SciCode / Coding-Index / DeepSWE all absent; FrontierMath/IPhO are math, not agentic code)

Multimodal / long context:

- **no grounded vision/audio rows published**; 1.05M window (no MRCR/AA-LCR reported for this variant).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. With only 11/618 rows, un-covered dims are scored as conservative floors, not measured results.

- **Tool use: 78/100.** BrowseComp 89.3% is an elite autonomous-research signal, but it is the *only* agentic row — with no Terminal-Bench, τ² or GDPval coverage there is no evidence of broader multi-step/office autonomy, so a high-single-signal-but-thin placement.
- **Reasoning: 88/100.** HLE 58.7%, ARC-AGI-2 83.3%, IPhO 93.5% and FrontierMath v2 50% (Tiers 1-3) are genuine frontier research-level reasoning; the caveat is coverage breadth, not these (strong) values.
- **Context window: 90/100.** The 1.05M window is in the ≥1M (95–100) band, but with no MRCR or long-context-reasoning rows for this variant and a curated-meta conflict at 128K, it is placed at the lower edge of that band.
- **Multimodal: 35/100.** **No grounded vision/audio rows exist on this page** and curated meta says text-only; rather than borrow the base GPT-5.4's (multimodal) numbers, this is scored as a low, explicitly-unverified floor pending real coverage.
- **Coding: 55/100.** **Zero coding benchmarks are published for this variant** — a strong reasoning core implies capable code but there is no measured SWE-bench/LiveCodeBench evidence, so an evidence-limited conservative floor, not a result.
- **Cost efficiency: 25/100.** (Revised by the 2026-11-03 second pass from 55/100: curated "standard pricing" understated this tier — Artificial Analysis records OpenAI at **$180.00 per 1M output tokens** for GPT-5.4 Pro (Xhigh), far above the $10/$50 ≈ 30 anchor, with the input rate still unverified; pass 1 already flagged the tier as premium with long inference budgets.) Cost is excluded from Overall.
- **Overall Score: 69/100.** Mean of Tool 78, Reasoning 88, Context 90, Multimodal 35, Coding 55 = 69.2 → 69. Best fit: hard scientific/mathematical reasoning and deep research (HLE/ARC/FrontierMath/BrowseComp) at long context — its verified strength; the low Overall is dominated by **missing coding/multimodal coverage**, not measured weakness, so treat Coding 55 and Multimodal 35 as "not yet evidenced" and re-check before ruling it out on those axes.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://artificialanalysis.ai/models/gpt-5-4-pro/providers (**"the lowest output token pricing for GPT-5.4 Pro (Xhigh) is OpenAI ($180.00 per 1M output tokens)"**) vs the base-tier context https://openrouter.ai/openai/gpt-5.4 ($2.50/$15 for GPT-5.4 proper — the Pro tier is an order of magnitude above it) · lifecycle — https://developers.openai.com/api/docs/models/all (**gpt-5.4-pro still listed live**, alongside gpt-5.5-pro), https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule (**gpt-5.4-pro: GA 2026-03-05, retirement 2027-09-07** — served, not retired) and https://zapier.com/blog/openai-models/ (2026-11: GPT-5.4 Pro under **"Legacy OpenAI models"**, still accessible) · benchmark corroboration — https://benchlm.ai/models/gpt-5-4-pro (**"#20 of 216 at 68.23/100 from 11 source-displayable rows"** — same 11-row thin coverage as pass 1, still no coding/multimodal rows), https://benchmarklist.com/benchmarks/arc_agi_2/ (2026-10-29: **GPT-5.4 Pro (XHigh) 83.33%** ARC-AGI-2 re-listed) and https://hidekazu-konishi.com/entry/openai_gpt_model_release_timeline.html (GPT-5.6 July 2026 replaced the Pro-tier scheme; GPT-6 Astra is OpenAI's current best) · launch record — https://openai.com/index/introducing-gpt-5-4/ (2026-03-05).

**What moved and how it was resolved:**

1. **Pricing corrected (Cost 55 → 25).** Pass 1 scored Cost from the curated "standard pricing" field, guessing a mid-premium. Artificial Analysis now records the served OpenAI price at **$180/1M output** for this Pro tier — far above the $10/$50 ≈ 30 anchor — so Cost drops to 25 (input rate still unverified, noted). Because Cost is excluded from Overall, the Overall is unaffected.
2. **Lifecycle: legacy, served until 2027-09-07.** Zapier classifies GPT-5.4 Pro as a legacy model, but the OpenAI model list still carries it and Microsoft Foundry schedules retirement for 2027-09-07 — no shutdown event (contrast the retired `gemini-3-pro-preview`); keep ranked with a previous-generation flag. Successors: GPT-5.5 Pro, then the GPT-5.6 scheme change (July 2026) and GPT-6 Astra.
3. **Coverage still 11 rows — evidence-limited floors stand.** BenchLM's current view (11 source-displayable rows, 68.23/100, #20 of 216) confirms no coding, multimodal or Terminal-Bench/τ²/GDPval rows have appeared since 2026-10-02. The ARC-AGI-2 83.3% row is re-listed (2026-10-29) unchanged. Coding 55 and Multimodal 35 therefore remain explicitly "not yet evidenced" floors; the revisit trigger has not fired.
4. **AA Index v5 (2026-10-27) — scale drift.** Batch-wide rescale (9-eval, majority-private basket; Gemini 4 Carbon 59 / Opus 5.5 ~58 lead) is a methodology change, not a capability change for this id; no quality band moved.

**Scores changed by this pass:** Cost efficiency **55 → 25** (verified $180/1M output replacing the "standard pricing" guess). All five quality dims unchanged: Tool 78, Reasoning 88, Context 90, Multimodal 35, Coding 55. Overall = half-up mean(78, 88, 90, 35, 55) = 346/5 = 69.2 → **69, unchanged** (Cost is excluded by methodology).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.4 launch, plus Artificial Analysis, Epoch AI and Meta); **very partial coverage (11/618)** — Coding and Multimodal are scored as conservative evidence-limited floors (no rows published), not measured results. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Artificial Analysis provider page, OpenAI/Foundry model lists, Zapier, BenchLM, benchmarklist, release-timeline coverage); pricing corrected to verified $180/1M out (**Cost 55→25**), legacy-but-served status recorded, 11-row coverage and evidence floors confirmed unchanged, AA v5 treated as scale drift — **no quality dimension changed and Overall remains 69**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
