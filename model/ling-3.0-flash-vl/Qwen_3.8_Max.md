# Ling 3.0 Flash VL — findings by Qwen 3.8 Max

- Source: InclusionAI (Ant Group) (`ling-3.0-flash-vl`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) **September-2026 open-weight (MIT) vision-language MoE** — **124B total / 5.5B active** — that **adds visual understanding and GUI/visual-agent capability to the text-only Ling-3.0-flash base** while inheriting its MoE design. "The visual-agent bargain": **text + image + video** input from open weights at Flash-class serving costs (**$0.06/$0.18**). Strong independent signal that the meta omits: **AA Intelligence Index 25 (full 4/4 units, #2/67 — well above the open-weight Medium-class median 8)**, i.e. the **#2-ranked 40B–150B open-weight reasoning model**. Vendor GUI-agent leadership: **WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0**, and it "leads on GUI agent benchmarks like AndroidWorld." Tradeoff: the **5.5B active budget caps depth** and **terminal coding trails the text-only Flash line**.
- **Provider / access:** Hosted on **OpenRouter / DeepInfra at $0.06/$0.18** per 1M in/out; **self-host $0 (MIT)** — weights on Hugging Face `inclusionAI/Ling-3.0-flash-VL`. **Not on OpenCode Zen**; **no free hosted tier id** (`noFreeId: true`). AA lists **Cost N/A** (not benchmarked for cost-per-task).
- **Release / knowledge:** Released **September 2026**. **Current** (no AA deprecation banner).
- **IDs:** `inclusionai/ling-3.0-flash-vl`; HF `inclusionAI/Ling-3.0-flash-VL`; AA `ling-3-0-flash-vl` (reasoning variant; a non-reasoning variant may exist).
- **Context window:** **262K** — AA lists 262k (~393 A4 pages). Meta clarifies **131,072 native, extended to 262,144 via YaRN**, with **32,768 max output**. Consistent (AA reports the YaRN-extended figure).
- **Modalities:** **Text + image + video in → text out** (AA-confirmed, matches meta exactly) — a **dedicated native-VL** model. No native audio; text-only output.
- **Pricing (as of 2026-10-27):** **$0.06 / $0.18** per 1M in/out (OpenRouter/DeepInfra); **$0 self-host** (MIT). Rock-bottom "Flash-class" serving cost for a VL model, enabled by the 5.5B-active MoE.
- **Architecture:** Open-weight **sparse Mixture-of-Experts, 124B total / 5.5B active per token**, **MIT License**, **reasoning** variant. Inherits the Ling-3.0-flash base MoE and bolts on native multimodal (vision + video) understanding and visual-agent capability. Somewhat verbose (AA: **160M output tokens** per Index run vs median 100M, #8/13).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`ling-3-0-flash-vl`, reasoning, **current**, **full 4/4-unit** Index under v4.3.2) — the meta does **not** cite the AA Index, so this is a net-new independent finding. GUI-agent benchmarks (WebVoyager/MMSearch/MMMU-Pro/AndroidWorld) are **vendor** (InclusionAI). AA **Speed** and **Cost** are **N/A**.

Independent (current — AA v4.3.2):

- **AA Intelligence Index: 25, #2/67 — "well above average"** among comparable open-weight **Medium-class (40B–150B)** reasoning models (**median 8**), with a **full 4 of 4 units** for Intelligence. AA: "amongst the leading models in intelligence when comparing to other open weight models of similar size." This **#2/67 rank is the strongest independent signal for the model** and notably **outranks Mistral Medium 3.5 (#8/67, Index 14)** in the same class — impressive for a 5.5B-active "Flash" MoE. The Index aggregates agentic + coding evals (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, SciCode) plus reasoning/knowledge (HLE, CritPt, GDP.pdf, AA-Omniscience, AA-LCR).
- **AA Verbosity: 160M output tokens per Index run, #8/13 — "somewhat verbose"** (vs median 100M), 3/4 units — it spends more reasoning tokens than peers.
- **AA Speed / Cost: N/A** — not benchmarked for throughput or cost-per-task on AA.

Vendor (InclusionAI):

- **WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0** — GUI/visual-agent and visual-reasoning benchmarks; corroborated by third-party coverage that it "**leads on GUI agent benchmarks like AndroidWorld**." Positions it as a visual-agent specialist.
- **Terminal coding trails the text-only Ling-3.0-flash** (meta tradeoff) — no explicit SWE-bench/Terminal-Bench number published for the VL variant; coding is secondary to its GUI-agent focus.

> Provenance: AA Index 25 (full 4/4-unit **current** measurement, **#2/67**, well above the Medium-class median 8) is neutral and the headline independent anchor. WebVoyager/MMSearch/MMMU-Pro/AndroidWorld are **vendor** GUI-agent figures. **No explicit independent coding harness row** was located; the AA Index's coding sub-evals (Terminal-Bench 4.0, SciCode) are the only neutral coding signal, embedded in the aggregate. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **accurate** — **Sep 2026** ✓ (AA), **MIT** ✓ (AA), **open-weight VL MoE 124B total / 5.5B active** ✓ (AA exact), **text+image+video in / text out** ✓ (AA exact), **131,072 native → 262,144 via YaRN; 32,768 out** ✓ (AA lists 262k), **$0.06/$0.18 + $0 self-host** ✓ (AA Cost N/A, so unverifiable there but consistent with OpenRouter), **not on Zen** ✓, **InclusionAI = Ant Group** ✓, **adds visual understanding/agent to Ling-3.0-flash base + inherits MoE** ✓ (DEVUP/Puter). **One omission (not an error):** the meta's `short` cites only vendor GUI benchmarks and **omits the strong AA Index 25 (#2/67)** — the single best independent evidence for the model, which I surface here.

### Normalized scores (1–100)

- **Tool use: 80/100.** A **GUI/visual-agent specialist** — vendor **WebVoyager 90.8** and third-party-confirmed **leadership on AndroidWorld**-class GUI-agent benchmarks, plus an **AA Index 25 (#2/67)** whose basket includes agentic evals (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0). Strong for computer-use / visual-agent work. Held below the elite agentic tier by the **5.5B active depth cap** and the meta's note that **terminal coding trails** the text-only sibling.
- **Reasoning: 80/100.** **AA Index 25 (full 4/4 units, #2/67) is "well above average"** and the **#2-ranked 40B–150B open-weight reasoning model** — a genuinely strong, fully-measured current signal, well above the mid-tier Gemma/Mistral open-weights (Index 14–17). Tempered by the **5.5B-active budget capping absolute depth** (frontier open-weight indices are higher) and **somewhat verbose** 160M-token reasoning. Strong-for-class, above-median band.
- **Context window: 78/100.** **262K** (131,072 native extended to 262,144 via YaRN; 32,768 max output) — the 256K/262K tier. The YaRN extension from a 131K native base is slightly less "proven" than a native 262K, but AA lists 262k and it is ample for a visual-agent workhorse.
- **Multimodal: 83/100.** A **dedicated native-VL** model with **text + image + video in → text out** — vision is the model's entire purpose (not a bolt-on), placing it in the dedicated-native-VL band above generic text+image models (78) and level with the strongest native-video open models. No audio input; text-only output.
- **Coding: 74/100.** The relative weak spot: the meta states **terminal coding trails the text-only Ling-3.0-flash line**, and **no explicit SWE-bench/Terminal-Bench number** was published for the VL variant. The only neutral coding signal is embedded in the AA Index 25 aggregate (Terminal-Bench 4.0, SciCode), which is strong-for-class but not coding-specific. No-explicit-coding-evidence + flagged-weakness band; the GUI-agent focus means coding is secondary.
- **Cost efficiency: 94/100.** **MIT open-weight → $0 self-host**, a **5.5B-active** MoE for cheap inference, and **$0.06/$0.18** hosted — genuinely "the visual-agent bargain" (native image + video input at Flash-class cost). Among the best value in the dataset. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 80 + Reasoning 80 + Context 78 + Multimodal 83 + Coding 74 = 395 / 5 = 79.0 → 79. Best fit: **the open-weight visual-agent bargain** — a current MIT 124B/5.5B-active VL MoE with a **strong, fully-measured AA Index 25 (#2/67 in its open-weight class)**, dedicated **text+image+video** native vision, vendor GUI-agent leadership (WebVoyager 90.8, AndroidWorld), and rock-bottom $0.06/$0.18 cost — but a **5.5B-active depth cap, verbose reasoning, YaRN-extended context, and terminal coding that trails its text-only sibling**. Ideal for **cheap GUI/computer-use and visual agents**; pick **Qwen3.5-122B-A10B (81)** for verified VL coding/agentic breadth or a text-only coder for terminal work. **Divergence note:** curated queue 74.7 vs my 79 → **+4.3**. The large gap is because the curated meta cites only vendor GUI benchmarks and **omits the AA Index 25 (#2/67)** — the strongest independent evidence — which I credit fully (Reasoning 80, Tool 80), alongside the **dedicated native-VL text+image+video multimodality (83)** and **exceptional open-weight cost (94, uncounted)**; the **coding weakness (74)** and **5.5B-active depth cap** hold it back. Lands one point below the VL MoE Qwen3.5-122B-A10B (81) and level with the strongest current mid-tier open-weights.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `ling-3-0-flash-vl` reasoning page — **current**, full **4/4-unit** Intelligence Index **25** (**#2/67**, well above the open-weight Medium-class median 8), Verbosity 160M (somewhat verbose), Speed/Cost N/A, **124B total / 5.5B active**, **MIT**, 262k context, text+image+video in → text out, released September 2026; DEVUP AI — "adds visual understanding and visual agent capability to Ling-3.0-flash, inherits the base MoE 124B"; Puter Developer — InclusionAI (Ant Group) native multimodal vision, "leads on GUI agent benchmarks like AndroidWorld"; Hugging Face `inclusionAI/Ling-3.0-flash-VL` + OpenRouter/DeepInfra $0.06/$0.18, $0 self-host; vendor **WebVoyager 90.8 / MMSearch 79.0 / MMMU-Pro 79.0**. No explicit independent coding-harness row located — flagged and scored conservatively); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
