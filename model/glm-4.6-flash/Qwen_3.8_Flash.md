# Glm 4.6 Flash — findings by Qwen 3.8 Flash

- Source: Z.ai **GLM-4.6-Flash** free lite endpoint (curated id `opencode/glm-4.6-flash`), anchored against the **GLM-4.6 launch** (z.ai blog, 2025-09-30), **llm-stats / OpenRouter** GLM-4.6 listings, and third-party papers that cite the `glm-4.6-flash` endpoint
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity + evidence-vacuum note:** GLM-4.6-Flash is a **real, reachable free endpoint** in Z.ai's GLM-4.6 line (it appears in OpenRouter/local-model guides and is even invoked as a "GLM-4.6-flash" model in arXiv papers, e.g. the Mirage-Probes VLM study), so it is **scored, not excluded**. **However**, unlike the flagship GLM-4.6 (357B, fully benchmarked in the launch post), **no first-party benchmark table exists for the Flash lite variant specifically** — Z.ai's GLM-4.6 materials report the *flagship* numbers. This is therefore an **evidence-vacuum** score: capability is inferred from the **GLM-4.6 family lineage** and the model's "free lightweight sibling" role, and is **heavily discounted**. The scaffolded `meta.json` (generic "128K / Standard pricing") carries no real product data and is overridden where the lineage is known.

## Model card

- **Name:** Glm 4.6 Flash
- **Short description:** Z.ai's **free, lightweight tier of the GLM-4.6 generation** — a smaller/cheaper serving endpoint positioned under the 357B GLM-4.6 flagship, aimed at **fast, zero-cost coding, tool-use and general reasoning**. It inherits the GLM-4.6 family's agentic/coding emphasis (expanded context, better instruction following) at a distilled footprint, but Z.ai publishes **no standalone specs or evals for the Flash endpoint**.
- **Provider / access:** **free** chat/API lane (Z.ai / OpenCode Zen-style free tier); the GLM-4.6 family ships **MIT** open weights (flagship 357B, MIT; Flash is a hosted lite tier rather than a separately released checkpoint).
- **Release / knowledge:** GLM-4.6 generation launched **2025-09-30**; the Flash free tier corresponds to that cycle.
- **IDs:** `glm-4.6-flash` (endpoint).
- **Context window:** **uncertain** — the flagship GLM-4.6 moved to **~200K (203K)** context; the scaffolded meta's "128K" is likely the older/default figure. Scored mid on the family's 128–200K range with no Flash-specific confirmation.
- **Modalities:** **text in / text out** per the curated entry. **Conflict flagged:** at least one arXiv paper treats "GLM-4.6-flash" as a *vision* LLM — but the standard free text endpoint has no confirmed image lane, so Multimodal is held at the text-only floor and the discrepancy is noted rather than rewarded.
- **Pricing (as of 2026-10-23):** **free** (zero-cost tier); paid flagship GLM-4.6 hosting is ~**$0.50/$2.00** per M tokens, which bounds the paid line above Flash.
- **Architecture:** GLM-4.6-generation sparse-MoE lineage (flagship **357B**, MIT, hybrid thinking). The Flash lite tier's exact total/active parameter count is **not disclosed**; it is the distilled/fast serving sibling rather than a separately documented checkpoint.

### Raw benchmarks found

> **Provenance caveat:** **there are no Flash-specific published scores.** Everything below is the **GLM-4.6 flagship** family context (z.ai launch / llm-stats), used only to *bound* the expected tier of its free lite sibling — **not** claimed as Flash's own results.

GLM-4.6 **flagship** (family upper bound, first-party):

- **SWE-bench Verified ~64**, strong coding/instruction-following emphasis vs GLM-4.5; **τ-bench / agentic** solid; **context expanded 128K → ~200K**; **AIME / GPQA** on the GLM-4.5→4.6 improvement curve (GPQA ~74-75, AIME ~90 class for the line).
- **Flash lite tier:** *no independent (Artificial Analysis) row and no vendor Flash table located as of 2026-10-23.*

### Normalized scores (1–100)

- **Tool use: 70/100.** The GLM-4.6 family is explicitly agentic/tool-oriented (τ-bench/BFCL lineage), and the free Flash tier keeps function-calling as a headline use — but with **no Flash endpoint eval**, this is a discounted family-inherited mid-high, not a measured score.
- **Reasoning: 70/100.** Sits under the GLM-4.6 flagship (GPQA ~75 / AIME ~90 line) at a distilled footprint; reasonable general reasoning for a free model, but the lite tier's headroom is unquantified — scored mid on lineage.
- **Context window: 66/100.** The GLM-4.6 generation jumped to **~200K**, so Flash plausibly inherits an above-mid window (the scaffolded "128K" is uncertain); generous output ceiling, **no retrieval/needle proof** published → high-mid, spec-only.
- **Multimodal: 15/100.** **Text-only** per the curated entry — floor. A paper's "vision LLM" label is noted as a **conflict** but not rewarded without a confirmed image lane.
- **Coding: 60/100.** GLM-4.6 is a coding-forward line (flagship SWE-bench ~64), and Flash is pitched at free coding/cli use, but the lite tier has **no SWE-bench/Terminal-Bench row of its own** → discounted mid.
- **Cost efficiency: 100/100.** The clearest verified trait: a **free** zero-cost tier on an MIT-licensed family — near-zero cost.
- **Overall Score: 56.4/100.** Half-up mean of the five quality dims (70+70+66+15+60)/5 = 56.4. Best fit: **free, fast general + light coding/tool tasks** where a GLM-4.6-generation lite endpoint is plenty and cost must be zero. The score is **explicitly provisional**: it rests on **family-lineage inference with zero Flash-specific benchmarks**, a **scaffolded/unreliable meta** (context and modality uncertain), and the text-only floor. Treat it as the distilled sibling under the fully-benchmarked GLM-4.6 flagship, and expect a wide band until a Flash eval row appears.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **GLM-4.6 launch** (z.ai blog, 2025-09-30: flagship 357B MoE, MIT, context 128K→~200K, coding/agentic focus), **llm-stats** GLM-4.6 page (357B, 203K, $0.50/$2.00, text+image flagship, arXiv 2508.06471), OpenRouter/local-coding-model guides, and arXiv papers that reference the `glm-4.6-flash` endpoint (confirming it is a **real, reachable** model, incl. one "vision LLM" usage that conflicts with the text-only meta). The curated `meta.json` is **scaffolded** (generic "128K / Standard pricing") and provides no product data. Scores are normalized 1–100 applied under a **heavy evidence-vacuum discount**: **no first-party or independent benchmark exists for the Flash lite variant**, so capability dims are **inherited from the GLM-4.6 family lineage** and clearly labeled as such — never presented as measured Flash results. **Multimodal = 15** (text-only per curated entry; the vision reference is flagged as an unresolved conflict, not rewarded). GLM-4.6-Flash is a **real free endpoint** (existence confirmed), so it is **scored, not excluded**, and kept distinct from the `glm-4.6` flagship and `glm-4.5-flash`/`glm-4.7-flash` sibling folders.
- Revisit trigger: any **Flash-specific** benchmark row (vendor or Artificial Analysis), disclosure of the Flash tier's parameters/context/modality (resolving the text-vs-vision conflict and the 128K-vs-200K ambiguity), or a formal GLM-4.6-Air/Flash checkpoint release.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
