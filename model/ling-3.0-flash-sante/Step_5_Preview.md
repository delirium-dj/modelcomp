# Ling 3.0 Flash Santé — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-flash-sante`, released 2026-09-04)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Santé ("santé" = health in French)
- **Short description:** Ant's healthcare-tuned variant of Ling 3.0 Flash — the same 124B-total / 5.1B-active MoE and 256K context, fine-tuned for medical knowledge reasoning, evidence-based retrieval and clinical safety workflows (the second domain-tuned Ling after the finance-focused Fin). Vendor-reported numbers are striking: **DiagnosisArena-MCQ 83.8** (above GPT-5.6 Sol's 81.9, Kimi K3's 78.4, Gemini 3.6 Flash's 76.2 — #1 among flash-size models), **AFUMED-Drug 89.6** (#1 flash-size), **MedXpertQA-Text 53.9** (#1 flash-size but below the flagships), MedEthicAlign 82.1 and an in-house safety score (AFUSAFE-MedSCE 78.6), plus 86.89 on multi-agent BrowseComp as evidence of "look it up before answering" behavior. Every one of those numbers is Ant's own — no independent lab has reproduced any of them, there is no Artificial Analysis page, and unlike its base model there are **no downloadable weights** (API-only, currently free on Novita). The verified floor for the backbone remains the parent's AA Intelligence Index of 38 and ~380 tok/s.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-flash-sante`, plus a rate-limited `:free` endpoint), Vercel AI Gateway (Novita); API-only, no weights.
- **Release:** 2026-09-04.
- **Context window:** 256K tokens (262,144); max output 32,000.
- **Modalities:** Text in → text out; function calling.
- **Pricing (as of 2026-10-09):** free tiers live (Vercel lists $0.075/$0.22 as the standard rate; OpenRouter free endpoint is rate-limited); no published paid price after the promotion.
- **Architecture:** Ling 3.0 Flash MoE (124B/5.1B active) with medical domain tuning.

### Raw benchmarks found

Vendor (launch announcement; no independent reproduction):

- DiagnosisArena-MCQ: **83.8** (GPT-5.6 Sol 81.9, Kimi K3 78.4, Gemini 3.6 Flash 76.2)
- AFUMED-Drug (pharmacology): **89.6**
- MedXpertQA-Text (open-ended clinical QA): **53.9** (below GPT-5.6 Sol 60.2 and Gemini 3.6 Flash 62.4)
- MedEthicAlign (medical ethics): **82.1**
- AFUSAFE-MedSCE (internal safety): 78.6
- BrowseComp (multi-agent setting): **86.9**

Backbone reference (independent, base model):

- Artificial Analysis Intelligence Index: **38** (class median 9); measured ~380 output tok/s
- Base Ling 3.0 Flash vendor table: GPQA Diamond ~86%, SWE-Pro 56.6%

Direct Sante-vs-Flash comparison on medical prompts, SWE-bench, Terminal-Bench, τ³, MCP Atlas, GDPval for Santé: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 55/100.** The vendor's multi-agent BrowseComp 86.9 shows the retrieval-heavy tool loops Sante was tuned for, and function calling is native; with no Terminal-Bench, τ³, MCP Atlas or GDPval number — and no independent verification of anything — mid-band is the honest ceiling.
- **Reasoning: 60/100.** No general reasoning benchmarks (GPQA/HLE/AIME) were published for Santé itself; the base model's ~86% vendor GPQA and the medical-specific MedXpertQA 53.9% imply solid inherited reasoning, scored mid-band on inference.
- **Context window: 72/100.** 256K inherited from the base is the 200K–500K band (65–84) with no published retrieval curve for this checkpoint.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 55/100.** No Santé-specific coding benchmark exists; the base's SWE-Pro 56.6% / TB 2.1 55.4% (both AA-verified) carry over as the estimate.
- **Cost efficiency: 95/100.** Free during the promotion (rate-limited) with a $0.075/$0.22 rate card behind it — cheap for the tier; docked because no post-promotion price is published and there are no weights to self-host.
- **Overall Score: 51/100.** Best-fit recommendation: a promising free medical specialist — #1-in-class diagnosis and pharmacology scores on Ant's own numbers, worth a free-window evaluation behind a verified fallback; not yet a production or clinical dependency until weights ship or an independent lab reproduces the chart.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Ant/inclusionAI launch announcement via LinkedIn, OrcaRouter verification analysis, Vercel AI Gateway and OpenRouter listings, SurfMind free-route page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3_0_Flash_Med.md`, using the same headings.
