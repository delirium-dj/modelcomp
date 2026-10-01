# GPT 5.4 Pro — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.4 Pro (`opencode/gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 55/100.** Pro tiers are premium-priced with long inference budgets (higher than the base 5.4); curated "standard pricing" understates this, so a mid-low value. Cost is excluded from Overall.
- **Overall Score: 69/100.** Mean of Tool 78, Reasoning 88, Context 90, Multimodal 35, Coding 55 = 69.2 → 69. Best fit: hard scientific/mathematical reasoning and deep research (HLE/ARC/FrontierMath/BrowseComp) at long context — its verified strength; the low Overall is dominated by **missing coding/multimodal coverage**, not measured weakness, so treat Coding 55 and Multimodal 35 as "not yet evidenced" and re-check before ruling it out on those axes.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.4 launch, plus Artificial Analysis, Epoch AI and Meta); **very partial coverage (11/618)** — Coding and Multimodal are scored as conservative evidence-limited floors (no rows published), not measured results. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
