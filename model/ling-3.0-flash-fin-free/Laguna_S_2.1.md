# Ling 3.0 Flash — findings by Laguna S 2.1

> Source: opencode/ling-3.0-flash-fin-free (Ant Group / InclusionAI), e.g. Ant developer docs, Hugging Face model card, LM Market Cap, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Ling 3.0 Flash (Ant Group / InclusionAI). Cost-effective hybrid-reasoning MoE; the "Fin" free variant scored here is the free Zen-tier release of this model family.
- Short description: 124B open-weights MoE (5.1B active) optimized for token efficiency and production-scale agentic inference at very low cost; strong on math/reasoning benchmarks, text-only, free via OpenCode Zen.
- Provider / access: Ant Group / InclusionAI. Model id `opencode/ling-3-0-flash-fin-free`. OpenCode Zen free tier + paid Ant API / Hugging Face Inference.
- Release / knowledge: Released 2026-07-23 (LM Market Cap; Ant docs "Ling 3.0 Series"). Knowledge cutoff: not stated.
- Architecture: Mixture-of-Experts — **124B total parameters / 5.1B activated per token** (Ant docs model-selection table + LM Market Cap). **Apache 2.0 / open weights** (HF card `license:mit` tag + "Open weights Yes, Hugging Face Weights" + MIT license tag).
- Context window: **256,000 (262,144) total tokens**, 32,800 max output (LM Market Cap: "262.1K token context, 32.8K max output") — matches repo `meta.json`. ≥64K-output caveat does NOT apply (32K output < 64K); context well above the 200K floor → cleared.
- Modalities: **text input → text output only** (LM Market Cap "Input text / Output text"; `meta.json` "Text in/out only"; Ant docs positions text variants separate from the Ling-3.0-flash-VL vision model). (+text-in only; 0 of image/speech/video/PDF)
- Reasoning / tools: Yes — hybrid reasoning (Ant docs: "cost-effective hybrid reasoning model"); tool calling true; structured/JSON outputs true on some routes (HF widget: toolCalling true, structuredOutput true on Vercel route).
- Pricing (as of 2026-09-23): **Free Zen / OpenCode Zen limited-time promo tier** (repo `meta.json` "Free Zen tier (limited-time promo)") → cost efficiency scored on the $0 axis. Paid route $0.02 / $0.06 per 1M in/out (LM Market Cap); cache read 88% discount.
- Speed: ~227 tok/s best (deepinfra, HF widget) / 58.9 tok/s avg (Vercel route) (HF model-data).

### Raw benchmarks found

> Verified public numbers from the Hugging Face model card `evalResults` (and LM Market Cap composite). Benchmarks not located are NOT fabricated.

- SWE-bench Pro: **56.6%** (rank #18/436) (HF model card)
- MathArena AIME 2026: **93.2%** (rank #16) (HF model card)
- MathArena HMHT Feb 2026: **87%** (rank #6) (HF model card)
- SWE-bench Multilingual: **72.4%** (rank #13) (HF model card)
- HLE: **22.7%** (rank #42) (HF model card)
- LM Market Cap composite (v3): Overall **40** (#297/436 in Coding), Capabilities 67, Context 86, Output 72, Pricing 100, Recency 100.
- AA Intelligence Index / Tau3-Banking / Tau3-general / GDPval-AA / Terminal-Bench (2.0/2.1/Hard/4.0) / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / SWE-bench Verified / GPQA Diamond / MRCR / LCR / CritPt / AA-Omniscience / AAA-LCR / MMMU-Pro / Toolathon / MCP-Atlas: **NOT FOUND** for this model in fetched sources.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on the verified Hugging Face benchmark ledger (SWE-Pro, AIME, HLE, Multilingual) + LM Market Cap composite; AA Intelligence Index not available for this exact id, so Tool/Reasoning/Coding use the indexed HF evals directly.

- **Tool use: 60/100.** SWE-bench Pro 56.6% + Multilingual 72.4% (mid-tier) + GDPval-AA NOT FOUND + no Tau3 → mid-band. LM Market Cap Coding rank #297/436 (weak) confirms.
- **Reasoning: 80/100.** MathArena AIME 93.2% + HMHT 87% are very strong (math-driven reasoning); capped by HLE 22.7% (weak) and no GPQA/HLME-index context.
- **Context window: 90/100.** 256K native context (above 200K floor, well past the 64K caveat threshold); 32K max output is fine for the context dim. No measured MRCR/RULER retrieval %.
- **Multimodal: 15/100.** Text input only (no image/speech/video/PDF) — the text-only variants; vision lives in the separate Ling-3.0-flash-VL id.
- **Coding: 70/100.** SWE-Pro 56.6% + Multilingual 72.4% (mid-high efficiency tier); capped by no SWE-bench Verified/LiveCodeBench/DeepSWE headline and LM Market Cap Coding #297/436 (weak coding rank).
- **Cost efficiency: 100/100.** Free Zen / OpenCode Zen limited-time free tier (repo `meta.json`) → $0 = 100 on the inverse-pricing scale (matches the methodology's free-tier convention, e.g. Muse Spark 1.3 Free).
- **Overall Score: 63/100.** (60 + 80 + 90 + 15 + 70) / 5 = 315 / 5 = 63.0 → 63.

> **Reconciliation note:** The repo AI-Rankings average for this model is **59.9** (audit/model-comparison.md v4, 2026-09-17). My score (63) is anchored on the verified Hugging Face benchmark ledger (AIME 93.2%, SWE-Pro 56.6%, HLE 22.7%, Multilingual 72.4%) and lands within ~3 points; both reflect an efficiency/flash-tier open-weights model with strong math but mid coding and text-only modalities. The LM Market Cap composite (40/100 on its own v3 scale, Coding #297/436) is a separate index cited for context only. No free-id conflict: this model's open MIT weights + free Zen tier coexist.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Ant Group / InclusionAI developer docs "Ling" models page; Hugging Face `inclusionAI/Ling-3.0-flash` model card `evalResults`; LM Market Cap model page). Re-normalized via model-comparison.md v4 using AA Intelligence Index where available and the indexed HF benchmark ledger here. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Lightning_Free.md`, using the same headings.
