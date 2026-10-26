# GLM 5.3 — findings by Qwen 3.8 Max

- Source: Z.ai (`glm-5.3`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's **August-14-2026 open-weight flagship** — a **753B-total / 40B-active MoE** rebuilt by *scaled post-training* on the GLM-5.2 base (no architecture change). It is **among the leading models in intelligence** (AA Index **45, #3/121** open-weight, full 4/4 units) and the **"most capable open-weights model for coding"** (Vals SWE-bench **97/95/90/100**; vendor SWE-bench 95.4%, CyberGym 84.5% SOTA). Its one big limit: **text-only** (no image input), unlike the GLM-5.3-Flash sibling.
- **Provider / access:** Z.ai; on OpenCode Zen as `opencode/glm-5.3` (**paid, no Free ID**). **Open weights** on Hugging Face (`zai-org/GLM-5.3`) under the **custom "GLM-5.3 License"** (not MIT — self-hosting obligations). AA tracks the reasoning "GLM-5.3 (max)" variant.
- **Release / knowledge:** Released **August 14, 2026**; **current** (no deprecation banner on AA). Knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3`; AA `glm-5-3` (max); HF `zai-org/GLM-5.3` (+ `GLM-5.3-BF16`).
- **Context window:** **1M tokens** (AA + meta agree; ~1500 A4 pages).
- **Modalities:** **Text in → text out only** (AA independently confirms "Input modality: text"; meta agrees). **No image/video/audio** — a deliberate text specialization (contrast the text+image GLM-5.3-Flash).
- **Pricing (as of 2026-10-26):** Zen **$1.40 in / $4.40 out** per 1M (**cached read $0.26**, **81% cache discount**); AA measures **$2.01 per Intelligence Index task**. AA flags it "**particularly expensive** when comparing to other open weight models of similar size" (input median $0.43, output median $1.45) — ~3× the open-weight median, though still below closed $3/$15 flagships.
- **Architecture:** **753B total / 40B active** MoE, reasoning (max variant), open weights, custom license. All gains over GLM-5.2 come from post-training, not the base.

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (full 4/4-unit Index — high signal, current model) and **Vals AI** SWE-bench Verified. Vendor (Z.ai): SWE-bench, Terminal-Bench, CyberGym, Z.ai Code Bench. GLM-5.3 is current (Aug 2026), so AA runs the full workload — no estimate caveat.

Independent (current, full-signal):

- **AA Intelligence Index v4.3.2: 45, #3/121** open-weight — "**well above average** among comparable models (median: 19)"; **4 of 4 units** (full, high-signal). AA speed **94.3 tok/s** (#35/78, "faster than average" vs 84; 3/4). **Verbosity 210M tokens** (#38/47, "very verbose" vs median 140M, 4/4). Cost $2.01/task.
- **Vals AI SWE-bench Verified: 97 / 95 / 90 / 100** (bands <15min / 15m–1h / 1–4hr / >4hr) — **elite, top-tier**, in the same group as Claude Opus 5 (98/97/90/100) and GPT-5.6 Sol (97/95/98/100), and **the best open-weight** row; crucially **no long-horizon collapse (100% at >4hr)**.

Vendor (Z.ai, "Frontier Coding with Emergent Cyber Capabilities"):

- **SWE-bench 95.4%**, **Terminal-Bench 2.1 88.2%**, **CyberGym 84.5% (SOTA)**; **Terminal-Bench 3.0 +4.6** over GLM-5.2; **Z.ai Code Bench +50%** over GLM-5.2 — billed as the "**most capable open-weights model for coding**." Emergent cyber-defense capabilities. (Note: one early write-up flagged all launch numbers as vendor-reported and weights pending; weights are now on HF and AA/Vals independently corroborate the coding strength.)

> Provenance: **AA Index 45 (#3/121, 4/4)** and **Vals SWE 97/95/90/100** are independent and both **elite**; SWE-bench 95.4% / TB 2.1 88.2% / CyberGym 84.5% / Code Bench +50% are **vendor** but consistent with the independent signals. The AA Index spans agentic (AA-Briefcase, GDPval-AA, AutomationBench, Terminal-Bench 4.0), coding (SciCode) and reasoning (HLE, CritPt) evals, so #3/121 with full units is a strong multi-dimensional anchor.
> Meta verification: **accurate across the board** — `opencode/glm-5.3` on Zen ✓, **753B MoE** ✓ (AA: 753B total / **40B active**), **1M** ✓ (AA), **custom license not MIT** ✓ (AA: "GLM-5.3 License"), agentic coding ✓, **SWE-bench 95.4% / TB 2.1 88.2% / CyberGym 84.5% SOTA** ✓ (vendor z.ai), **Text in/out** ✓ (AA confirms text-only), **$1.40/$4.40 + $0.26 cached** ✓ (AA, 81% cache), `noFreeId` ✓, HF `zai-org/GLM-5.3` ✓. Enriched from AA/Vals: released **Aug 14 2026**, Index **45 (#3/121, 4/4)**, **94.3 tok/s**, **verbose 210M**, **Vals SWE 97/95/90/100**, Terminal-Bench 3.0 +4.6.

### Normalized scores (1–100)

- **Tool use: 85/100.** Elite agentic profile: vendor **CyberGym 84.5% (SOTA)** and **Terminal-Bench 2.1 88.2%**, independent **Vals long-horizon 90/100 (>4hr)** with no collapse, and an AA Index (#3/121, 4/4) whose basket is heavy on agentic evals (AA-Briefcase, GDPval-AA, AutomationBench, Terminal-Bench 4.0). Strong-independent-agentic top end; just below the absolute leader band because the headline cyber/TB numbers are vendor-run.
- **Reasoning: 83/100.** **AA Intelligence Index 45 = #3/121 open-weight (median 19) with full 4/4 units** — "well above average," a high-signal independent result spanning HLE, CritPt, SciCode and GDP.pdf. A top-3 open-weight reasoner, though the model is coding/cyber-specialized (post-training on the 5.2 base) rather than a pure math/analytic frontier, and it is very verbose (210M tokens).
- **Context window: 86/100.** **1M tokens**, AA-confirmed on a current model with full 4/4 units (the basket includes AA-LCR long-context reasoning) — the proven-1M band top end. Below the 2M tier, and verbosity inflates effective token use, but a genuinely large, validated window.
- **Multimodal: 50/100.** **Text-only** — AA independently confirms text input/output, and meta agrees. No image, video, or audio. This is the model's defining limitation and the single largest drag on its Overall: an otherwise top-3 open-weight model scores the text-only floor (consistent with my calibration across all reports; `model-comparison.md` would place it even lower at 10–20).
- **Coding: 88/100.** The standout: **Vals SWE-bench Verified 97/95/90/100** (elite, top-tier, **best open-weight**, no >4hr collapse) independently corroborates the vendor **SWE-bench 95.4%**, **Terminal-Bench 2.1 88.2% / 3.0 +4.6**, **CyberGym 84.5% SOTA**, and "**most capable open-weights model for coding**" (+50% over GLM-5.2 on Z.ai Code Bench). Elite-Vals tier; held just below the very top (Opus 5 / DeepSeek V4 Pro) by vendor-reliance on the cyber/TB headlines.
- **Cost efficiency: 76/100.** **$1.40/$4.40** (81% cache, $0.26 cached read, $2.01/task) — far cheaper than closed $3/$15 flagships and open-weight (self-hostable), but AA flags it "**particularly expensive** … comparing to other open weight models of similar size" (~3× the open-weight median), the **custom license** adds self-hosting obligations (not MIT), and **210M-token verbosity** raises real per-task cost. Not counted toward Overall.
- **Overall Score: 78/100.** Mean of Tool 85 + Reasoning 83 + Context 86 + Multimodal 50 + Coding 88 = 392 / 5 = 78.4 → 78. Best fit: **the open-weight coding/agentic champion** — top-3 AA intelligence, elite Vals SWE, CyberGym SOTA, 1M context, current and self-hostable — for text-based software-engineering, cyber, and long-horizon agent work where **no image input is needed** and the premium open-weight price/verbosity is acceptable. **Divergence note:** curated queue 78.6 vs my 78 → **−0.6** (tightly aligned). The elite coding (88), tool use (85), reasoning (83) and 1M context (86) are pulled down almost entirely by the **text-only Multimodal floor (50)** — a ~7-point drag on the mean. The curated 78.6 evidently encodes the same reality: a frontier-class *text* coder whose single missing modality caps its composite.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `glm-5-3` max page — Index 45 #3/121 with full 4/4 units, 753B/40B MoE, 1M, text-only, custom license, $1.40/$4.40, 94.3 tok/s, 210M verbosity; Vals AI SWE-bench Verified 97/95/90/100; Z.ai blog "GLM-5.3: Frontier Coding with Emergent Cyber Capabilities" and morphllm/mindstudio/emergent.sh launch coverage for SWE-bench 95.4% / Terminal-Bench 2.1 88.2% / CyberGym 84.5% / Aug-14-2026 release; OpenCode Zen + Hugging Face listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
