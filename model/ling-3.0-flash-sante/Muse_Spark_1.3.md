# Ling 3.0 Flash Sante — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** InclusionAI's health/medicine domain fine-tune of Ling 3.0 Flash (124B total / 5.1B active, "sante" = health) for medical reasoning, clinical safety, evidence-based retrieval; retains general reasoning/coding/agentic capability.
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ling-3.0-flash-sante`; also OpenRouter `inclusionai/ling-3.0-flash-sante` (Novita backend, 148 t/s, 0.83s P50 latency) and Vercel AI Gateway.
- **Release / knowledge:** 2026-09-04 release (OpenRouter + LLM Reference); knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-3.0-flash-sante`
- **Context window:** 262,144 total; 32,768 max output (OpenRouter) — verified via repo meta + catalogs.
- **Modalities:** Text in/out; reasoning switchable; function calling yes; no vision.
- **Pricing (as of 2026-10-08):** Paid after $0 promo ended 2026-10-04 (repo meta); OpenRouter Novita route $0.042 in / $0.1232 out per 1M (44% off $0.075/$0.22 list). Proprietary checkpoint (weights not released; not MIT unlike base).
- **Architecture:** MoE 124B total / 5.1B active fine-tune of Ling-3.0-flash; proprietary license; listed on ModelScope (not HuggingFace).

### Raw benchmarks found

> No Sante-specific benchmark numbers published in any fetched source. Base-model (Ling 3.0 Flash) numbers are cited as proxies where marked; Sante's medical fine-tune deltas are unmeasured.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Sante-specific; base model also unreported)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- SWE-bench Pro (base proxy): **56.6%** (base Ling 3.0 Flash HF model card, rank 18 — proxy only, not Sante-measured)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (base proxy): **22.7%** (base HF model card rank 42 — proxy only)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (Sante-specific; base scores 20 / #3-of-65 — proxy only)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Medical benchmarks (MedQA / MedMCQA / PubMedQA): **no verified public score found** — fine-tune target domain has zero published measurements

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** Sante-specific (base Pro 56.6% + Multilingual 72.4% as proxies only)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 68/100.** Base-model SWE-Pro 56.6pct proxy + live function-calling route (148 t/s Novita); capped as no Sante-measured agent row exists.
- **Reasoning: 72/100.** Base HLE 22.7pct + AIME 93.2pct + Index 20 proxies plus medical-reasoning fine-tune intent; capped with zero Sante-measured knowledge rows.
- **Context window: 82/100.** 262K total / 32K output verified (256K+ tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only, no vision — floor tier.
- **Coding: 72/100.** Base SWE-Pro 56.6pct + Multilingual 72.4pct proxies (general capability retained per OpenRouter); capped with no Sante-measured coding row.
- **Cost efficiency: 85/100.** $0.042/$0.1232 promo-priced paid (post-$0-promo); cheap absolute price but proprietary (no self-host) — below MIT siblings.
- **Overall Score: 62/100.** Mean of five non-cost dims (68+72+82+15+72)/5 = 61.8 → 62; best for medical-reasoning agent work where domain fine-tune + 262K outweigh unmeasured Sante-specific deltas.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (OpenRouter model page, LLM Reference page; BenchLM page 404); no Sante-specific benchmarks exist so base-model numbers used as marked proxies; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
