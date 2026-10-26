# Union Alpha — findings by Qwen 3.8 Max

- Source: Unbiased / Circuit & Chisel (`union-alpha` → `unbiased/pareto-26.9`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (= Unbiased **Pareto 26.9**)
- **Short description:** A **stealth composite**, not a trained checkpoint — "**several models plus a checking harness**" routing behind one frontier-coding API. It appeared **free on OpenRouter / OpenCode / Cloudflare on Sept 16, 2026** ("nobody will claim it"), was **revealed Sept 17** as **Unbiased (Circuit & Chisel) Pareto 26.9** with "**no new foundation-model training run**," and the free preview was **retired ~Sept 21**. Strong vendor coding (**DeepSWE ~70%**) but **every benchmark is vendor-preliminary and the model mix is opaque/non-reproducible**.
- **Provider / access:** Unbiased (Circuit & Chisel), unbiased.ai. Stealth **free preview** on OpenRouter / OpenCode Zen / Cloudflare (Sept 16–18, retired by ~Sept 21); paid **`pareto`** route (OpenRouter `unbiased/pareto-26.9`). Proprietary **routing service** — there are no weights to download (it orchestrates *other* models). `noFreeId: true` now that the preview ended.
- **Release / knowledge:** Stealth listing **Sept 16, 2026**; revealed **Sept 17, 2026**. No training run — it coordinates existing open + frontier models, so its "knowledge" is whichever components the router selects (undisclosed).
- **IDs:** curated `unbiased/pareto-26.9`; stealth alias `union-alpha`; API identifier **`pareto`**. **No Artificial Analysis page** (`union-alpha` and `pareto-26-9` both → 404) and **no Vals row** — neutral harnesses do not track opaque composites. Successor: **Pareto 26.10** (separate `pareto-26.10-preview` entry).
- **Context window:** **262,144 total / 131,072 max output** (~262K; meta + launch coverage agree).
- **Modalities:** **Text + image in → text out** (Learnetto "Inputs: Text and images"; Unbiased card "Pareto accepts text and image inputs"; vendor MMMU-Pro 78 indicates real visual reasoning). No video/audio.
- **Pricing (as of 2026-10-26):** Pareto **26.9** paid route **$2.50 / $7.50** per 1M in/out (**$0.25 cached**); the free stealth preview is retired. (The **26.10** successor is far cheaper: **$0.80 / $3.20**, $0.03 cached.) The real pitch is **low cost-per-task** (vendor: $0.24/DeepSWE task, $0.008/HLE task).
- **Architecture:** A **managed routing ensemble** — a harness assigns a task to several models, compares and checks their work, escalates to a stronger model when needed, and returns **one synthesized answer**. The routing policy and model mix are **opaque and can change behind the same API name** (no new identifier).

### Raw benchmarks found

> Independent anchors: **none.** AA 404s (`union-alpha`, `pareto-26-9`); no Vals row; neutral harnesses do not track opaque composites. **All scores below are vendor-published by Unbiased** — its own preliminary runs, which the card itself says are "**not directly comparable**" to other labs' task sets/harnesses.

Vendor (Unbiased model card + launch coverage):

- **DeepSWE ~70.0% (26.9)** / **69.9% (26.10)** at **$0.24/task** — frontier-adjacent (GPT-6.1 Sol 75.2%, GPT-6 Astra 74.0%, GPT-6 Luna 66.6%).
- **Terminal-Bench 4.0: 50.8%** (26.10, $0.48/task) — **mid-pack** (Claude Sonnet 5.5 70.6%, GPT-6 Astra 59.6%, GPT-6.1 Sol 56.1%, Fable 5.1 55.1%).
- **HLE (text-only): 49.9%** (26.10, $0.008/task) — **mid-pack** (Fable 5.1 59.1%, Sonnet 5.5 55.0%, Astra 54.7%, GPT-6.1 Sol 52.9%).
- **MMMU-Pro 78** and **ArXivMath 88** (launch-coverage vendor figures). Pareto sits on Unbiased's "**best score at or below each cost**" (Pareto) frontier for DeepSWE and HLE.

> **Provenance dispute RESOLVED — the curated meta is validated.** The widely-circulated claim that "Union Alpha hit **73–74%** on DeepSWE" (Learnetto, LinkedIn) is a **misattribution**. Unbiased's **own model card** shows **Pareto 26.10 at 69.9%** on DeepSWE v1.1 and explicitly assigns **74.0% to GPT-6 Astra**. So the meta was **correct**: "DeepSWE 70.0% (26.9) / 69.9% (26.10), not the circulated 74% (that is GPT-6 Astra's)." I verified this directly against `unbiased.ai/model-card`.
> Meta verification: **accurate** — composite/"a blend, not a checkpoint" ✓ (Unbiased: "no new foundation-model training run," "several models plus a checking harness"); stealth reveal ✓ (Sept 16 free → Sept 17 revealed); free Zen preview retired ✓ (Learnetto found the route 404 by Sept 21); **262K / 131K** ✓; **text+image** ✓ (Unbiased card); **$2.50/$7.50 + $0.25 cached** (26.9) ✓; **DeepSWE 70.0%/69.9% and the "74% is GPT-6 Astra's" correction** ✓ (verified). Enriched from the vendor card: **TB 4.0 50.8%**, **HLE 49.9%**, **MMMU-Pro 78**, **ArXivMath 88**, low **$/task** ($0.24 DeepSWE / $0.008 HLE), successor **Pareto 26.10** ($0.80/$3.20, preliminary Oct 1 2026 run).

### Normalized scores (1–100)

- **Tool use: 76/100.** The architecture is inherently agentic — a harness that fans a task across several models, compares/checks candidates, and escalates to a stronger model — but the one agentic benchmark (**Terminal-Bench 4.0 50.8%**) is **mid-pack and vendor-only**, the routing is opaque, and no neutral harness verifies it. Composite escalation is promising, not proven.
- **Reasoning: 78/100.** Vendor **HLE (text-only) 49.9%** is mid-pack (below Fable 5.1 59.1% / Sonnet 5.5 55.0% / Astra 54.7%, above GPT-6 Luna 38.5%), alongside stronger vendor **ArXivMath 88** and **MMMU-Pro 78**. All are Unbiased *preliminary* runs it labels "not directly comparable," and reasoning depends on an undisclosed, changeable model mix — decent but unverifiable.
- **Context window: 78/100.** **262,144 total / 131,072 max out** — the ~256K band. Large and confirmed, but it inherits whatever the routed components support and is not independently long-context-validated.
- **Multimodal: 78/100.** **Text + image in → text out** (Learnetto + Unbiased card), with vendor **MMMU-Pro 78** indicating genuine visual reasoning. The image-input tier; no video/audio, and the visual path depends on which component the router picks.
- **Coding: 79/100.** The headline: vendor **DeepSWE ~70.0%** — **frontier-adjacent** (just below GPT-6.1 Sol 75.2% / Astra 74.0%, above GPT-6 Luna 66.6%) at a low **$0.24/task**. Strong-published tier, held back because it is **vendor-preliminary, "not directly comparable,"** produced by an **opaque composite** rather than a reproducible checkpoint, with **no independent (AA/Vals) verification**.
- **Cost efficiency: 80/100.** The namesake pitch: **low cost-per-task** — Pareto sits on Unbiased's "best score at or below each cost" frontier for DeepSWE ($0.24) and HLE ($0.008). But the 26.9 per-token route was **premium ($2.50/$7.50)**, and the meta warns you "inherit every component's cost structure and an opaque routing layer" (the 26.10 successor is far cheaper at $0.80/$3.20). Not counted toward Overall.
- **Overall Score: 78/100.** Mean of Tool 76 + Reasoning 78 + Context 78 + Multimodal 78 + Coding 79 = 389 / 5 = 77.8 → 78. Best fit: teams that want **one endpoint delivering frontier-adjacent coding at low cost-per-task** and will accept an **opaque, non-reproducible managed router** in place of a known model — but run a matched evaluation against a fixed-model baseline first (the mix can change silently, and a returned answer is not proof the candidates agreed). **Divergence note:** curated queue 78.4 vs my 78 → **−0.4** (tightly aligned). Every dimension lands in the mid/strong-vendor band (76–79) because the capability is real but **entirely vendor-reported and composite-opaque** — exactly the "quality is real, provenance is thin" trade-off the curated score encodes. I also **validated the meta's DeepSWE correction** (the circulated 74% is GPT-6 Astra's; Pareto is ~70%).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (**Learnetto** "Union Alpha revealed as Pareto 26.9" for the stealth→reveal timeline, composite routing architecture, inputs and price; **`unbiased.ai/model-card`** for the vendor benchmark tables — DeepSWE 69.9% / Terminal-Bench 4.0 50.8% / HLE 49.9% and the **GPT-6 Astra 74.0%** attribution that resolves the DeepSWE dispute; kingy.ai / chaseai.io / reddit / LinkedIn launch coverage; AA `union-alpha` + `pareto-26-9` both 404, no Vals row). **Confirmed the curated meta's DeepSWE provenance correction.** All capability scores are conservative normalized interpretations of *vendor-preliminary* data (no independent verification exists for an opaque composite); no benchmark values were invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
