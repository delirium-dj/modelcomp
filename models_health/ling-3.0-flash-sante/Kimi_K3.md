# Ling-3.0-Flash-Sante — findings by Kimi K3

- Source: inclusionAI / Ant Group (`ling-3.0-flash-sante`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash-Sante ("santé" = health)
- **Short description:** Ant Group inclusionAI's health/medicine-tuned variant of Ling-3.0-Flash, announced 2026-09-04: 124B total / 5.1B active MoE for medical reasoning, professional healthcare tasks, deep research, and evidence-based retrieval. Hosted-only so far (no weights, no model card as of launch+1d).
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-sante:free` (sole upstream: Novita AI); Vercel AI Gateway (`-free` id, free through 2026-10-04); Novita AI serverless. Chat Completions (OpenAI- and Anthropic-compatible on Novita); reasoning on by default; `tools`/`tool_choice` supported; **`response_format` absent — JSON output not enforced**.
- **Release / knowledge:** 2026-09-04 (Ant Ling X post 19:14 UTC); no model card/tech report; knowledge cutoff unpublished.
- **IDs:** `inclusionai/ling-3.0-flash-sante` (canonical slug `...-20260904`). No OpenCode Zen Free ID verified; Novita route is time-limited free.
- **Context window:** 262,144 tokens; max output 32,768 (host listings).
- **Modalities:** text in → text out (no medical-imaging; that scope belongs to the VL sibling).
- **Pricing (as of 2026-10-09):** Blackbox lists $0.075 / $0.22 per 1M in/out ($0.015 cache read); launch routes time-limited free (Vercel promo ended 2026-10-04); no open weights yet (base Ling-3.0-Flash and Fin sibling are MIT — Sante's license unstated).
- **Architecture:** Ling-3.0-Flash base: 124B/5.1B MoE, 42 layers alternating Kimi Delta Attention (linear) with gated MLA at 5:1, 512+1 experts top-8.

### Raw benchmarks found

(All Ant-reported from the launch chart, highest reasoning effort, temp 0.6; transcription via fact-checked aiwiki.ai; NOTHING independently reproduced; two panels are Ant-internal)

Medical:

- MedXpertQA-Text: **53.9%** — best of the open-weight group; below GPT-5.6 Sol (60.2) / Gemini 3.6 Flash (62.4)
- DiagnosisArena-MCQ: **83.8%** — highest bar of all ten models shown
- HealthBench Professional: **45.7%** (trails Kimi K3 49.6, GLM-5.3-Flash 49.1, GPT-5.6 Sol 60.8)
- ReDisQA (rare disease): **91.3%**; MedQA-USMLE: **93.5%**; MedMCQA: **81.6%**
- MedEthicAlign (Chinese medical ethics): **82.1%**; AFUMED-Drug: **89.6%** *(internal)*; AFUSAFE-MedSCE: **78.6%** *(internal)*

Agentic / general:

- BrowseComp: **73.9%** single-agent / **86.9%** multi-agent (64 subagent harness; not like-for-like with the base card's setup)
- DeepSearchQA: **86.8%**
- HLE with tools: **53.2%**
- Tau3 / Terminal-Bench / SWE-bench / GPQA: no verified public score found

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 74/100.** Function calling + default reasoning + 86.9% multi-agent BrowseComp and 86.8% DeepSearchQA show strong evidence-based retrieval pipelines; capped by vendor-only evidence and no enforced JSON mode.
- **Reasoning: 72/100.** HLE-with-tools 53.2% and the medical expert-level leads (DiagnosisArena 83.8, MedXpertQA-Text 53.9) are genuinely strong for a 5.1B-active model; capped because every number is Ant's own chart.
- **Context window: 70/100.** 256K with a 32K output cap; supports 256K/1000-turn deep-research runs in Ant's harness; no independent LCR/MRCR number.
- **Multimodal: 15/100.** Text-only (medical images explicitly out of scope) — methodology floor.
- **Coding: 48/100.** "Retains general coding capability" is claimed but unmeasured in public; provisional, anchored below the base model's verified coding line (SWE-Pro 56.6%) pending a domain-shift discount.
- **Cost efficiency: 95/100.** Time-limited $0 on OpenRouter/Vercel/Novita and $0.075/$0.22 list pricing — near-free expert-tier medical assistance.
- **Overall Score: 56/100.** Mean of 74/72/70/15/48 = 55.8 → 56. Best fit: healthcare research/medical-QA pipelines needing evidence-grounded retrieval at flash prices — as a research/dev tool, never a clinical decision-maker (Novita's disclaimer).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (aiwiki.ai fact-checked launch analysis with full chart transcription, blackbox.ai spec sheet, Vercel changelog, Novita blog, OpenRouter API listing); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark numbers are Ant-reported from a chart image; flagged inline.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
