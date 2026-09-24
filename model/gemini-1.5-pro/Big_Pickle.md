# Gemini 1.5 Pro — findings by Big Pickle

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (aliases: `gemini-1.5-pro`, `gemini-1.5-pro-002`, `-001`)
- **Short description:** Google's 1.5-generation flagship; first production model with a 2M-token context and native text/image/audio/video input. Legacy/retired model, completely superseded by the Gemini 2.x/3.x lines. Long-horizon multimodal RAG over very long inputs is its historical niche.
- **Provider / access:** Google AI Studio / Gemini API and Vertex AI (Chat Completions-style `generateContent`, now retired). Retired: `-001` discontinued 2025-05-27; `-002` and the `gemini-1.5-pro` alias shut down 2025-09-24. Endpoints now return errors; use Gemini 2.5/3.x replacements.
- **Release / knowledge:** 2024-02-15 preview, GA May 2024 (`-001`), `-002` 2024-09-24. Knowledge cutoff ~Nov 2023.
- **IDs:** `google/gemini-1.5-pro` (Vertex/AI Studio). No Zen Free ID (`noFreeId`).
- **Context window:** 2,000,000 input tokens (2,097,152) for `-002`; max output 8,192. Launched at 1M/128K in preview. Verified via provider docs.
- **Modalities:** Text, image, audio, video, PDF in; text out. Native audio input (speech recognition, WER 6.5% FLEURS 55-lang). No image/audio out.
- **Pricing (as of 2024-10-01 reduction, historical):** $1.25 in / $5.00 out per 1M for prompts ≤128K; $2.50/$10.00 above 128K. Retired — no longer purchasable; AI Studio free tier existed during life.
- **Architecture:** proprietary sparse Mixture-of-Experts Transformer (params undisclosed, 1.0-Ultra-class quality at lower training FLOPs).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (benchmark released well after 1.5 Pro was retired)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld GUI (AgentDesk ReACT, gemini-1.5-pro-002): **6.12%** weighted score (arxiv 2505.03570, OSUniverse GUI-navigation eval — provisional, GUI not terminal tool-use)
- Function calling: GA on Gemini API (Google function-calling docs) — no modern harness number

Reasoning / knowledge:

- GPQA Diamond: **59.1%** (official 1.5 Pro-002 model card / HF README; BenchLM-style aggregates list 58.3–58.9% on other harnesses)
- HLE: **~3.5–4.9%** (AA aggregator 3.48% no-reasoning; BenchmarkList 4.9% #372/447)
- MATH: **67.7%** (official 1.5 Pro report, May 2024 revision)
- Big-Bench Hard: **89.2%** (official 1.5 Pro report)
- MRCR: **82.6** (llm-stats API scores)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **~10.0** (AA, sep-24 harness — provisional, sub-frontier by 2026 standards)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **34.2%** (Google gemini_v2_5_report vendor baseline listing for 1.5 Pro — agentic coding is weak)
- Natural2Code: **82.6%** (official 1.5 Pro report)
- HumanEval: **~84%** (official 1.5 Pro report; some trackers list 89%)
- LiveCodeBench: **no verified official score; BenchmarkList 41.7%** (#117/123, provisional non-official harness)
- SciCode / SWE-bench Pro / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- Near-perfect single-needle retrieval to 1M+ (official 1.5 technical report: "near-perfect recall on long-context retrieval"; needle-in-a-haystack ~100% at 1M in research setting; production 2M input). MRCR 82.6 at long context.

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling was GA and solid for 2024, but there is zero verified Terminal-Bench/Tau3/GDPval data and the only agentic eval found (OSWorld-GUI 6.12%) is poor; caps the score.
- **Reasoning: 58/100.** GPQA Diamond 59.1% and HLE ~4% sit in the mid band (GPQA 60–80%/HLE <10% ref); strong MATH/BBH for its era but clearly sub-frontier by 2026.
- **Context window: 96/100.** 2M input with near-perfect 1M retrieval → top tier (≥1M = 95–100); 8K max output is the caveat.
- **Multimodal: 90/100.** Native text/image/audio/video input with verified audio (FLEURS WER 6.5%) and video (EgoSchema 72.2%) numbers → 90–100 audio-in band; text-only out keeps it below 100.
- **Coding: 58/100.** SWE-bench Verified 34.2% is low; Natural2Code 82.6% is competitive for 2024 but benchmark inflation since then caps the score.
- **Cost efficiency: 80/100.** $1.25/$5.00 (≤128K) is a mid-premium price for a mid-tier model; no Zen free tier, and the model is retired.
- **Overall Score: 69/100.** Mean of the five quality dims (45+58+96+90+58)/5 = 69.4 → **69**. Best fit: historical long-context multimodal RAG reference; do not build new work on a retired model.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.

---

## Submission checklist

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-1.5-pro/Big_Pickle.md`.
3. Signature block filled in; relative links resolve from `model/gemini-1.5-pro/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Verified benchmarks exist for this model → saved as `.md`, not `.excluded`.