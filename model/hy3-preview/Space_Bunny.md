# Hy3 Preview — findings by Space Bunny

- Source: Tencent Hunyuan (`Hy3-preview`; open-weight preview)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 59.4 → 51.8.** Two findings, one of them structural:

> ### ⚠ Checkpoint contamination: BenchLM's Hy3-preview page mixes in full-Hy3 rows
> BenchLM lists 22 rows under Hy3 Preview, but **ten of them are sourced to `artificialanalysis.ai/models/hy3` — the full Hy3 release, not the preview** — including the **AA-GPQA 89.7%, AA-HLE 33.5%, AA Coding Index 58.8%, AA Agentic Index 25.6%, Omniscience block (−18.5% / 73.0% / 31.5%), and the AA Intelligence Index 41.2%.** A separate HLE row reads **25.5%** from the Hy3-preview page while the full-Hy3 page reads **33.5%** for the same benchmark — an 8-point spread that is checkpoint, not harness.
>
> **This report separates preview-sourced rows from Hy3-sourced rows and does not blend them.** It is the second checkpoint-contamination case in this batch (after DeepSeek V4 Flash). **Recommend the maintainer verify which checkpoint each provider actually serves before relying on any figure here.**

Restated: **Tool 65 → 52**, **Reasoning 75 → 62**, **Context 72 → 68**, **Coding 70 → 62**, **Cost 75 → 78**, Multimodal unchanged at 15.

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's preview MoE for reasoning, coding, and agent tasks, superseded by the full Hy3 release and then by Hy4 preview. **This report covers the exact preview checkpoint; full-Hy3 rows are labelled and excluded from scoring where a preview row exists.**
- **Provider / access:** Tencent Hunyuan open-source release (`hy3-preview` on Hugging Face) and local OpenAI-compatible serving; self-hosted vLLM/SGLang expected for the open-weight checkpoint. **No OpenCode Zen ID exists** — not paid, not free.
- **Release / knowledge:** **2026-04-23** (BenchLM). **No reliable knowledge cutoff has ever been found** — unchanged after two passes.
- **IDs:** `Hy3-preview`; Hugging Face `tencent/Hy3-preview`. **The exact provider route is still not exposed in any public model catalog** after two passes.
- **Context window:** **256K** (BenchLM and repository metadata, confirmed again 2026-10-10). **Maximum output still not independently verified** after two passes.
- **Modalities:** **Text in / text out.** Reasoning and tool calls supported in the model ecosystem. **No verified image, video, or audio input** is exposed by the preview model card.
- **Pricing (verified 2026-10-10):** **No first-party API token price exists for the preview** — it is an open-weight checkpoint with no hosted rate card found after two passes. Self-hosting cost is workload-dependent.
- **Architecture:** Open-weight MoE. **The exact preview parameter count is still not verified** in the reviewed sources; the later Hy3 295B/21B specification is **not** substituted here.

### Raw benchmarks found

**Preview-sourced (Tencent model card, Gert Labs, and AA's Hy3-preview page):**

- Terminal-Bench 2.0 **54.4%** (Tencent Hy3-preview model card); Gert Labs **36.91%** (Gert Labs rankings)
- GPQA Diamond **87.2%** (Tencent Hy3-preview model card)
- SWE-bench Verified **74.4%** (Tencent Hy3-preview model card)
- **GDPval-AA: 35.8%** (AA, Hy3-preview page); **HLE: 25.5%** (AA, Hy3-preview page); **AA-LCR: 66.7%** (AA, Hy3-preview page); **SciCode: 41.2%** (AA, Hy3-preview page)

**Full-Hy3 rows — recorded for transparency, excluded from preview scoring:**

- **AA Intelligence Index: 41.2%** — *the highest of any model in this batch, and if it applied to the preview it would be a strong positive; it is sourced from the Hy3 page*
- **AA-GPQA Diamond: 89.7%** (vs the preview card's 87.2%); **AA-HLE: 33.5%** (vs the preview page's 25.5% — an 8-point checkpoint spread)
- **AA Coding Index: 58.8%**; **AA-SciCode: 48.6%**; **AA Agentic Index: 25.6%**; GDPval-AA Elo **1,136**
- **AA-Omniscience Index: −18.5%**; **Accuracy: 31.5%**; **Hallucination Rate: 73.0%**
- **IFBench: 63.1%**; **CritPt: 4.9%**

**Tencent family for scale:** Hy4 preview **61.36** (#48 of 889) · Hy3 **52.75** · **Hy3 Preview 52.50** (#86 of 889).

Sources consulted: [BenchLM Hy3 Preview (updated 2026-10-10)](https://benchlm.ai/models/hy3-preview), [Tencent Hy3-preview Hugging Face model card](https://huggingface.co/tencent/Hy3-preview), the [official Tencent Hunyuan Hy3 repository](https://github.com/Tencent-Hunyuan/Hy3), [Artificial Analysis Hy3-preview](https://artificialanalysis.ai/models/hy3) and its full-Hy3 page, [Gert Labs rankings](https://gertlabs.com/rankings), accessed 2026-10-10. The repository's full-Hy3 specifications are not used as preview facts, and AA full-Hy3 rows are labelled as such.

### Normalized scores (1–100)

- **Tool use: 52/100.** Down from 65. The prior 65 was built on **Terminal-Bench 2.0 54.4%** and **Gert Labs 36.91%** with the honest caveat that "missing Tau/GDPval/Toolathlon/MCP values cap the score." **GDPval-AA has now closed at 35.8%** on the preview-sourced AA page, and the Hy3-sourced Agentic Index is **25.6%**. Both are low. **Terminal-Bench 2.0 at 54.4%** and **Gert Labs 36.91%** are modest, and no τ-bench, Toolathlon, MCP-Atlas, or Claw-Eval row exists for this checkpoint at all. The score falls because the evidence that replaced the gaps is weak, and because **the gap between what this model might score on the full Hy3 and what the preview scores is now visible and large** — the repo should not carry a preview at a score informed by its successor's data.
- **Reasoning: 62/100.** Down from 75. **GPQA Diamond 87.2%** on the preview model card is genuinely strong and is credited, corroborated in spirit by the full Hy3's **89.7%**. **HLE at 25.5%** on the preview page is weak — and notably **8 points below the full Hy3's 33.5%**, which is direct evidence that the preview is a materially weaker checkpoint. **CritPt 4.9%** is very low. The decisive factor is reliability: **Hallucination Rate 73.0%** with **Omniscience Index −18.5%** and **31.5% accuracy** — three-quarters of factual questions answered wrongly, confidently. **The AA Intelligence Index of 41.2% would be the single strongest reasoning figure in this entire batch if it applied to the preview, and it does not** — it is sourced from the full Hy3 page. That distinction is the main reason this score falls as far as it does. **No knowledge cutoff exists after two passes.**
- **Context window: 68/100.** Down from 72. The **256K window** is confirmed by BenchLM and repository metadata for the third time, placing it in the 200K–500K tier. **AA-LCR at 66.7%** is a genuine retrieval measurement — but it is sourced from the **Hy3 page, not the preview**, so it describes a different checkpoint. **No preview-specific MRCR, RULER, GraphWalks, or LCR figure exists.** The score is set on a verified window with no preview-specific retrieval evidence, which is worse than the prior pass's position of an unmeasured window and no contamination — hence a modest rather than severe fall.
- **Multimodal: 15/100.** Unchanged. **No verified image, video, or audio input** is exposed by the preview model card. Text-only is the conservative and correct classification, and it maps to the methodology's floor. Tencent's **UI-Mate** and **AuK** lines cover multimodal work.
- **Coding: 62/100.** Down from 70. **SWE-bench Verified 74.4%** on the preview model card is a real and respectable repository-level result. The independent figures available are **SciCode 41.2%** (preview-sourced) and, for the full Hy3, **Coding Index 58.8%** and **AA-SciCode 48.6%** — all modest. **SWE-bench Pro, LiveCodeBench, DeepSWE, and Vibe Code Bench remain entirely unpublished** for this checkpoint after two passes. The prior 70 was reasonable on SWE-bench Verified alone; the additional evidence that has arrived is mediocre rather than contradictory.
- **Cost efficiency: 78/100.** Up from 75. **Open weights** avoid a mandatory vendor token price, which is a real structural advantage over the paid Z.AI, Mistral, and Anthropic tiers. Raised modestly, and held below the high band because **there is still no first-party rate card, no Zen route, and no price anchor of any kind after two passes** — the prior pass's "moderate estimate" caveat was accurate and still applies. Self-hosting an MoE of unverified size is itself a material cost.
- **Overall Score: 51.8/100.** (52 + 62 + 68 + 15 + 62) / 5 = 259 / 5 = 51.8, down from 59.4. **Best fit: historical comparison only. This report's strongest recommendation is to not deploy the preview at all.** **Three reasons.** First, **it is superseded twice** — by the full Hy3 (52.75) and then by Hy4 preview (61.36, rank #48 of 889 against this model's #86), and the gap between this checkpoint and its successor is measurable: HLE 25.5% vs 33.5%, GPQA 87.2% vs 89.7%. Second, **73.0% hallucination rate** means it cannot be trusted on facts. Third, **the evidence base is contaminated**: ten of BenchLM's twenty-two rows come from the full Hy3, and this report deliberately refuses to score the preview using its successor's data — which means most of the apparently strong evidence simply cannot be used. **If you want Tencent's open-weight model, use Hy4 preview** (Apache-2.0, 770B/49B, GPQA 92.3%, and a genuine 1M window) and accept the 30-point Terminal-Bench 2.1 spread documented in that report; or use the full Hy3 if its AA Intelligence Index of 41.2% is verified as applying to it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Hy3 Preview profile, Tencent's Hy3-preview Hugging Face model card, the official Tencent Hunyuan Hy3 repository, Artificial Analysis's Hy3-preview and full-Hy3 pages, and Gert Labs rankings; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the central finding is checkpoint contamination and the decision not to blend across checkpoints.** BenchLM's Hy3-preview page sources **ten of its twenty-two rows to the full Hy3**, including the AA Intelligence Index of **41.2%** — which would be the strongest single reasoning figure recorded anywhere in this batch if it applied. **It does not apply.** The clean checkpoint difference is demonstrated by **HLE reading 25.5% on the preview page and 33.5% on the Hy3 page** — an 8-point spread attributable to the checkpoint, not the harness. This is the **second checkpoint-contamination case in this batch**, after DeepSeek V4 Flash, and both are recorded as maintainer actions. The prior pass's discipline is retained and extended: it correctly declined to substitute the full-Hy3 295B/21B architecture specification for the preview's, and this pass applies the same rule to benchmark data rather than only to architecture. **Four gaps persist after two passes and are stated rather than estimated:** no knowledge cutoff, no verified maximum output, no verified preview parameter count, and no preview-specific long-context retrieval measurement. **Three preview-sourced rows are credited** (GPQA 87.2%, SWE-bench Verified 74.4%, GDPval-AA 35.8%); the rest of the Hy3-sourced block is reported transparently but excluded from scoring. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (BenchLM, Tencent's model card and repository, Artificial Analysis) rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Hy3_Preview_Recheck.md`, using the same headings.