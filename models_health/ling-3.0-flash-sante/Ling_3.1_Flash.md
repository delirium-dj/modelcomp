# Ling 3.0 Flash Sante — findings by Ling 3.1 Flash

- Source: Ant Group / InclusionAI (`ling-3.0-flash-sante`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** InclusionAI's health-and-medicine specialist built on the Ling 3.0 Flash MoE backbone ("santé" = French for health) — tuned for medical reasoning, professional healthcare tasks, deep research, and evidence-based retrieval while retaining the base model's general reasoning, coding, and agentic capabilities. Second domain-tuned Ling 3.0 family member after the finance-focused Ling 3.0 Flash Fin.
- **Provider / access:** Hosted APIs only — Kilo Gateway, Novita AI, OpenRouter (`inclusionai/ling-3.0-flash-sante`), Vercel AI Gateway, Puter. No weights published as of the latest check (no Sante repository on Hugging Face or ModelScope; the MIT-licensed Ling 3.0 Flash backbone is open, the medical tuning is not).
- **Release / knowledge:** Released 2026-09-04; knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash-sante` (gateways). No OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens total / 32,768 max output (Vercel lists 256,000 / 32,000) — verified on models.dev and Vercel AI Gateway listings.
- **Modalities:** text in; text out; function calling supported (no enforced JSON output in the listings).
- **Pricing (as of 2026-10-10):** $0.04 / 1M input, $0.12 / 1M output (OpenRouter, Puter); $0.07 / $0.22 (Kilo, Novita, Vercel); launch promotion ran at $0/$0 into early October 2026 — no paid list price from the vendor has been published.
- **Architecture:** MoE, 124B total / ~5.1B active per token (Kimi Delta Attention + MLA hybrid) — inherited from Ling 3.0 Flash.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: named in InclusionAI's announcement among five evaluations — exact value not published in accessible coverage — no verified public score found
- DiagnosisArena-MCQ (medical diagnosis, multiple choice): **83.8** (vendor-reported; vs GPT-5.6 Sol 81.9, Kimi K3 78.4, Gemini 3.6 Flash 76.2)
- Terminal-Bench 2.1 / τ³-Banking / GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- MedXpertQA-Text (general medical knowledge): **53.9** (vendor-reported; vs Kimi K3 53.5, GPT-5.6 Sol 60.2, Gemini 3.6 Flash 62.4)
- AFUMED-Drug / HealthBench Professional: named in the announcement — exact values not published — no verified public score found
- GPQA / HLE / LCR / CritPt / AA Intelligence Index for the Sante fine-tune: no verified public score found (no Artificial Analysis page exists for Sante; the parent Ling 3.0 Flash posts AA Index 20)

Coding:

- No Sante-specific coding benchmark published — the card claims the base model's coding/agentic capabilities are retained; parent Ling 3.0 Flash posts LiveCodeBench v5 82.8% and SWE-bench Pro 56.6% (inherited-only evidence, provisional)
- SWE-bench Verified / DeepSWE / SciCode / LiveCodeBench (Sante): no verified public score found

Long context:

- No MRCR / RULER / GraphWalks number reported for Sante (262K window inherited) — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling is supported but no tool-use benchmark value for Sante is public (BrowseComp was named without a value), and no Terminal-Bench, GDPval-AA, or MCP-Atlas number exists.
- **Reasoning: 60/100.** DiagnosisArena-MCQ 83.8 is a strong vendor-reported medical-diagnosis result and MedXpertQA-Text 53.9 is mid, but both numbers are Ant-reported with no third-party reproduction, and no general-reasoning benchmark (GPQA/HLE/Index) exists for the fine-tune.
- **Context window: 71/100.** 262,144 tokens inherited from the backbone — the 200K–500K band just above the 200K = 70 anchor; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 55/100.** Only inherited parent-model coding evidence exists (LiveCodeBench v5 82.8%, SWE-bench Pro 56.6%) — no Sante-specific coding benchmark is published, so the score is provisional.
- **Cost efficiency: 98/100.** $0.04/$0.12 per 1M (OpenRouter) is near the top of the pricing scale, and the launch promotion ran at $0/$0 into early October.
- **Overall Score: 49/100.** Mean of Tool 45, Reasoning 60, Context 71, Multimodal 15, Coding 55 = 49.2 → 49. Best-fit: cheap hosted medical-specialist endpoint for developers testing medical-adjacent applications during the free window; every headline number is vendor-reported and unreproduced, and no weights exist for auditability.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Vercel AI Gateway and models.dev listings, orcarouter launch coverage 2026-09-05, Puter Developer listing); scores are normalized 1–100 interpretations, not official vendor scores. DiagnosisArena-MCQ 83.8 and MedXpertQA-Text 53.9 are vendor-reported only. Routing note: this is a health-domain specialist (like the finance-routed Ling 3.0 Flash Fin under models_finance/); it currently lives under model/ per the dataset, and any relocation to a models_health/ tree is a user-directed decision.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
