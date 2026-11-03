# Ling 3.0 Flash Sante — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-flash-sante`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant inclusionAI's health/medicine domain fine-tune of Ling-3.0-flash ("santé" = health), built for medical reasoning, professional healthcare tasks, deep research, and evidence-based retrieval. Second domain variant after the Fin model; retains the base model's general reasoning, coding, and agentic capabilities.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-sante` (`:free` promo route ran one month from launch), Vercel AI Gateway (free through 2026-10-04; paid route continues). Proprietary API checkpoint — weights not released (listed on ModelScope, no HF repo).
- **Release / knowledge:** 2026-09-04 (Ant Ling on X, Vercel changelog).
- **IDs:** `inclusionai/ling-3.0-flash-sante` (also `opencode/ling-3.0-flash-sante`)
- **Context window:** 262,144 tokens; max output 32,768 (OpenRouter).
- **Modalities:** text in; text out; reasoning on by default (switchable); function calling. No vision.
- **Pricing (as of 2026-10-08):** $0 promo routes have now mostly expired (Vercel free ended 2026-10-04); standard rates apply after promo — no published list price found.
- **Architecture:** 124B total / 5.1B active MoE (Ling-3.0-flash backbone); proprietary checkpoint.

### Raw benchmarks found

> All vendor-reported (Ant Ling announcement, 2026-09-04); no independent run yet (OrcaRouter).

Agent / tool use:

- BrowseComp: evaluated, "look it up before answering" behavior focus; no public per-run score (Ant Ling)
- HealthBench Professional: **45.73** (Ant Ling on X, truncated quote)

Reasoning / knowledge (medical):

- MedXpertQA-Text: **53.88** (#1 among flash-size models; Kimi K3 53.5, below GPT-5.6 Sol 60.2 / Gemini 3.6 Flash 62.4) (Ant Ling)
- DiagnosisArena-MCQ: **83.83** (#1 flash-size; above GPT-5.6 Sol 81.9, Kimi K3 78.4, Gemini 3.6 Flash 76.2) (Ant Ling)
- AFUMED-Drug: **89.59** (#1 flash-size) (Ant Ling)
- MedEthicAlign: **82.06**; AFUSAFE-MedSCE (internal safety): **78.63** (Ant Ling)

Coding:

- No variant-specific coding score published; base Ling-3.0-flash (SWE-bench Pro 56.6%) is the nearest proxy — provisional.

Long context:

- 262K window (OpenRouter); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling with an evidence-retrieval design; no Tau/Terminal-Bench rows for this variant.
- **Reasoning: 62/100.** MedXpertQA 53.9 and DiagnosisArena 83.8 (beats GPT-5.6 Sol on diagnosis MCQ) — strong domain reasoning at 5.1B active; general reasoning unmeasured for the variant.
- **Context window: 60/100.** 262K inherited window; retrieval unmeasured.
- **Multimodal: 15/100.** Text-only.
- **Coding: 60/100.** Vendor claims base-model coding is retained; no variant-specific numbers — provisional on the base's SWE-bench Pro 56.6%.
- **Cost efficiency: 85/100.** Ran free on OpenRouter and Vercel for a month post-launch; no paid list price published yet.
- **Overall Score: 50/100.** Mean of (55, 62, 60, 15, 60) = 50.4 → 50. Best fit: healthcare research agents — medical QA, diagnosis support, evidence retrieval — pending independent verification of vendor scores.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Ant Ling on X, OrcaRouter analysis, Vercel changelog, OpenRouter, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
