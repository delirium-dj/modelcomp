# Leanstral 1.5 — findings by Step 5 Preview

- Source: Mistral AI (`leanstral-1.5`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's Apache-2.0 specialist theorem-proving model for the Lean 4 proof assistant — a 119B/6.5B-active MoE that saturates miniF2F and solves 587/672 PutnamBench problems, with an API endpoint that was retired 2026-09-30.
- **Provider / access:** no longer available on any metered API. It was served as `labs-leanstral-1-5` on Mistral's Labs endpoint at **$0** (free API endpoint per the launch blog) and has been **delisted from Mistral's docs and pricing pages since deprecation**. The weights survive at `huggingface.co/mistralai/Leanstral-1.5-119B-A6B` (Apache-2.0, ~120.9 GB, created 2026-07-01, 230 likes), so self-hosting is the only remaining route.
- **Release / knowledge:** released **2026-07-02** (mistral.ai/news/leanstral-1-5, "Leanstral 1.5: Proof Abundance for All"). **Deprecated 2026-09-29 and retired 2026-09-30** — a 90-day API life. Successor: Leanstral 26.03 (`mistralai/Leanstral-2603`, March 2026). Knowledge cutoff not disclosed.
- **IDs:** `labs-leanstral-1-5` (v1.5 API ID); `mistralai/Leanstral-1.5-119B-A6B` (Hugging Face).
- **Context window:** **256,000 tokens** total with **128,000 max output** (Mistral docs card).
- **Modalities:** **text in, text out** per the docs card (chat-completions only). The Hugging Face chat template additionally encodes `[IMG]` image-input support, which the docs do not list — so image input is a secondary, undocumented capability and is not scored as such. Reasoning model with `reasoning_effort` accepting none/high.
- **Pricing (as of 2026-10-24):** **$0 during its life** (free Labs endpoint). Now retired, so no live price exists. Self-hosting an 119B MoE is the only cost path.
- **Architecture:** open weights, **Apache-2.0**. **119B total / 6.5B active** (docs card; the repo's "A6B" suffix corroborates ~6B, and the launch blog rounds it to "6B active"). MoE.

### Raw benchmarks found

All benchmark figures below come from a **single source** — Mistral's launch post (`https://mistral.ai/news/leanstral-1-5`). Independent benchmarkers were checked and carry no data for this model: Artificial Analysis returns 404, and it is absent from both models.dev's Mistral catalog and OpenRouter's Mistral roster.

Reasoning / formal mathematics:

- **miniF2F: saturated at 100%** on both validation and test sets (Mistral launch post).
- **PutnamBench: 587 / 672** problems solved, a stated SOTA margin of +7 over Seed-Prover 1.5 at high effort (Mistral launch post).
- FATE-H: **87%** (stated SOTA) and FATE-X: **34%** (stated SOTA) — Mistral launch post.
- Test-time scaling on PutnamBench, solved count by token budget: **44 @ 50K tokens → 244 @ 200K → 493 @ 1M → 587 @ 4M tokens** (Mistral launch post). This is the model's headline property: performance keeps climbing linearly through 4M tokens of reasoning.
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Artificial Analysis Intelligence Index: no verified public score found (404).

Agent / tool use:

- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Coding Agents Index: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.

Coding / software engineering:

- **Bug discovery: 5 previously unreported bugs found across 57 repositories** — 11 of 47 flagged properties were judged genuine (Mistral launch post). At roughly **$4 per problem**; one AVL-tree proof ran 2.7M tokens across 22 context compactions.
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 256K window is documented; no retrieval-durability figure was published. However, the 4M-token test-time scaling curve is direct evidence of sustained coherent reasoning far beyond the context window, which is unusual and worth noting.

Cost-efficiency context:

- FLTEval (formal-language translation): pass@1 **21.9 → 28.9** and pass@8 **31.9 → 43.2** versus Claude Opus 4.6 at 39.6 pass@8, at **1/7 the cost** (Mistral launch post).

### Conflicts recorded (not silently resolved)

1. **Single-source risk:** every benchmark in this file is vendor-reported by Mistral, with no independent benchmarker (AA 404; absent from models.dev and OpenRouter). Unlike the Muse Wonder and DeepSeek cases, there is no second source to cross-check against, so these figures are recorded as vendor claims rather than verified facts.
2. **Active parameters:** 6.5B (docs card) vs "6B" (launch blog) vs the repo name's "A6B". All three agree to within rounding; 6.5B used.
3. **Modality:** text-only per docs vs `[IMG]` image support encoded in the HF chat template. Undocumented, so not scored.
4. **Retirement status:** the API is retired, which means all pricing and availability facts are historical. Cost efficiency is scored on the endpoint's final free state rather than a current rate.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified public score found for Terminal-Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon or the Coding Agents Index. Function calling, agents/conversations and structured outputs are all supported per the docs card, which supports a mid-band score, and the bug-discovery result implies real tool-mediated verification loops. Held to 55 because this model's entire training focus was proof search, not general tool orchestration, and no agentic benchmark exists to show otherwise.
- **Reasoning: 88/100.** miniF2F saturated at 100% (val and test), PutnamBench at 587/672 (87.5%), FATE-H at 87% and FATE-X at 34% — these are frontier formal-mathematics results by any standard, and the 44→587 solved-count curve across 50K→4M tokens is extraordinary sustained reasoning. Capped below 90 on three grounds: every figure is single-sourced from the vendor with no independent replication; GPQA Diamond and HLE — the two benchmarks this project actually names for Reasoning — are unpublished, so general (non-formal) reasoning is unmeasured; and PutnamBench saturation means the top of that distribution is clipped and cannot discriminate above this point.
- **Context window: 76/100.** 256,000 tokens with 128,000 max output sits in the methodology's 200K-500K band (65-84), above the 200K floor because the max output itself is 128K. Lifted within the band by the demonstrated 4M-token test-time scaling, which is direct evidence of reasoning durability far past the window, but not to 84 because no MRCR/RULER retrieval figure at a stated length exists and the scaling evidence is vendor-reported.
- **Multimodal: 15/100.** Text in, text out per the docs card — the methodology's text-only band (10-20), at the top of it because the HF chat template does encode `[IMG]` support. No image benchmark exists to justify anything higher, and the capability is undocumented by Mistral.
- **Coding: 62/100.** No SWE-bench, LiveCodeBench, SciCode or Terminal-Bench figure exists, so the score rests on the bug-discovery result — 5 previously unreported bugs across 57 repositories, with 11 of 47 flagged properties genuine — plus the FLTEval improvement over Claude Opus 4.6 at 1/7 cost. That is real evidence of verified code-property reasoning at the frontier of formal methods, but it is a different skill from repo-scale software engineering, so the score sits mid-band and is explicitly not extrapolated upward from perfect math scores.
- **Cost efficiency: 95/100.** The endpoint was **free ($0)** for its entire live life, which under the methodology's "$0 = 100" rule is a full marks signal. Held at 95 by two practical frictions: the endpoint is now retired, so the $0 price is historical and unavailable; and Apache-2.0 self-hosting a 119B MoE is a real GPU cost that a metered $0 endpoint concealed.
- **Overall Score: 59/100.** Mean of the five quality dims (55 + 88 + 76 + 15 + 62 = 296 ÷ 5 = 59.2, half-up → 59). Best fit: formal theorem proving in Lean 4, proof-assisted software verification, and bug-hunting where a 4M-token reasoning budget is acceptable and the ~$4-per-problem cost is invisible. Worst fit: general chat, general coding, or anything needing a live API — this endpoint was retired on 2026-09-30, and the successor is Leanstral 26.03.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across four independent source families (Mistral's official docs model page, Mistral's official deprecations table, Mistral's launch post, and the Hugging Face weights repo), with Artificial Analysis, models.dev and OpenRouter all checked and found to carry no data; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: unlike the other models in this pass, **every Leanstral 1.5 benchmark is single-sourced from the vendor** — no independent benchmarker publishes numbers for it, so the formal-math figures are vendor claims and are labelled as such. The model is also **retired** (deprecated 2026-09-29, retired 2026-09-30), so all pricing is historical.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
