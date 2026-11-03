# Qwen 3.6 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen3.6-Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 80 provisional→**84 verified** (international list $0.50/$3.00 ≤256K, $2.00/$6.00 to 1M; $0.40/$1.60 catalog lane and $0.276 Global readings logged; OpenRouter `:free` route exists); superseded-by-3.7-plus noted (own folder); quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus (base)
- **Short description:** Alibaba's Plus-tier multimodal reasoner — elite τ²-bench (97.7%), strong contest math (AIME26 95.3%, HMMT 96.7%), LiveCodeBench v6 87.1% and a broad image+video profile (MMMU 86, VideoMMMU 84, V* 96.9) on a 1M window. Weakest links: GDPval-AA 1066 / 23.8% (poor office-work autonomy), AA-HLE 27.8% well under the 40 bar, AA Intelligence Index 27.0 and CritPt 2.9% — strong textbook/math reasoning but shallow frontier-research depth. BenchLM #65 of 645 (55.19), 63/618 rows.
- **Provider / access:** Qwen / Alibaba API (`qwen3.6-plus`); OpenCode (`opencode/qwen-3.6-plus`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** Qwen "Qwen3.6-Plus" blog; knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.6-plus` / BenchLM `qwen3-6-plus`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M.
- **Modalities:** image + video + text in; text out (MMMU, VideoMMMU, V*, ScreenSpot confirm vision/video) — curated `meta.json` "Text in/out" is out of date.
- **Pricing (as of 2026-10-02):** "Standard pricing" (Plus tier, low-to-mid per-1M; exact rate not in curated meta).
- **Architecture:** proprietary hosted (Plus service tier).

### Raw benchmarks found

> Independently verified against BenchLM (63 of 618 rows; 55.19/100, #65 of 645), citing the Qwen3.6-Plus blog, plus Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- **LiveCodeBench v6 87.1%**; LiveCodeBench (Vals) 86.0%; SWE-bench Verified 78.8%; SWE Multilingual 73.8%; SWE-bench (Vals) 73.4%
- SWE-bench Pro 56.6%; AA Coding Index 54.5% (under 70); Vibe Code Bench 25.56%

Agent / tool use:

- **τ²-bench 97.7%** (elite); τ³-bench 70.7%; MCP-Tasks 74.1%; WideResearch 74.3%; Terminal-Bench 2.0 61.6%; Claw-Eval 58.8%; QwenClawBench 57.2%
- GDPval-AA 1066 / 23.8% (very weak); VITA-Bench 44.3%; DeepPlanning 41.5%; Toolathlon 39.8%; ResearchClawBench 18.0%; Terminal-Bench 2.1 (Vals) 53.2%

Reasoning / knowledge:

- **GPQA 90.4%** (card, clears 90; AA 88.2, Vals 87.4); **AA-HLE 27.8%** / card 28.8% (well under 40 bar); MMLU-Pro 88.5; MMLU-Redux 94.5; C-Eval 93.3; IFEval 94.3
- AIME26 95.3; HMMT Feb'25 96.7 / Nov'25 94.6; FrontierMath v2 Tiers1-3 26.2%; AA Intelligence Index 27.0 (low); CritPt 2.9%; Omniscience Index 0.9 / Accuracy 26.4% / Hallucination 34.6%

Multimodal / long context:

- MMMU 86.0%; MathVision 88.0%; **VideoMMMU 84.0% (video)**; V* 96.9%; CharXiv 81.5%; ScreenSpot Pro 68.2%; MMMU-Pro 78.8 / AA 78.0; Design Arena 1248
- 1M window; AI-Needle 68.3%, LongBench v2 62.0, AA-LCR 78.3 (retrieval mid, no ≥98% MRCR).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ²-bench 97.7% is elite tool-calling and MCP-Tasks 74.1 / WideResearch 74.3 are solid, but professional/research autonomy is poor — GDPval-AA 1066 / 23.8%, VITA-Bench 44.3%, DeepPlanning 41.5%, ResearchClawBench 18.0% — so sustained real-world agentic work is a clear weak spot.
- **Reasoning: 72/100.** GPQA 90.4 and elite contest math (AIME26 95.3, HMMT 96.7) plus MMLU-Pro 88.5 / IFEval 94.3 are strong, but AA-HLE 27.8% is far under the 40 bar, Intelligence Index 27.0 and CritPt 2.9% signal shallow research-level reasoning and a 34.6% hallucination rate drags reliability.
- **Context window: 82/100.** A real 1M window is in the ≥1M band, but demonstrated long-context quality is only mid (AI-Needle 68.3%, LongBench v2 62.0%, AA-LCR 78.3, no ≥98% MRCR), so a solid-but-not-top placement (curated meta conflicts at 128K).
- **Multimodal: 85/100.** A genuine image+video profile with strong reads (VideoMMMU 84.0, MathVision 88.0, MMMU 86.0, V* 96.9, CharXiv 81.5) — top of the +video/PDF tier (75–90); text-only output keeps it under the non-text-output band.
- **Coding: 78/100.** LiveCodeBench v6 87.1% / (Vals) 86.0% and SWE-bench Verified 78.8% are genuinely strong, but AA Coding Index 54.5% (under the 70 bar) and Vibe Code 25.56% show weaker repo-scale/agentic generalisation.
- **Cost efficiency: 84/100.** (Revised by the 2026-11-03 second pass from 80/100: exact list now verified — **$0.50 per 1M input / $3.00 per 1M output up to 256K input tokens, $2.00/$6.00 from 256K to 1M** on Alibaba's international pricing (maximem table; the Model Studio catalog currently shows the Plus lane at **$0.40/$1.60 → $1.20/$4.80**, and a **$0.276** Global-route reading per tokencost) — roughly the $1.25/$4.25≈88 anchor, trimmed for the >256K cliff and "No free quota" flag despite the OpenRouter `:free` trial route. All readings logged un-averaged. Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 72, Reasoning 72, Context 82, Multimodal 85, Coding 78 = 77.8 → 78. Best fit: multimodal vision/video understanding, contest math and single-turn tool-calling/LiveCodeBench coding at Plus value; not a research-depth reasoner (HLE 27.8, Index 27.0) nor a strong office-work/desk agent (GDPval 23.8%) — ground factual and long-horizon-agentic tasks with tools.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://www.maximem.ai/blog/qwen-api-pricing-2026 (**"Qwen3.6-Plus ( qwen3.6-plus ), up to 256K, $0.50, $3.00 … 256K to 1M, $2.00, $6.00"**) and https://www.alibabacloud.com/help/en/model-studio/model-pricing (current catalog tiers **"0<Token≤256K. $0.4 $1.6 … 256K<Token≤1M. $1.2 $4.8 … qwen3.6-plus. Currently equivalent to qwen3.6-"** [alias pointer] — **"No free quota"**) and https://www.morphllm.com/qwen-api (2026-09-01: **"Model Studio Singapore lists qwen3.7-plus at $0.40/$1.60 per million tokens and qwen3.6-plus at $0.50/$3.00"**) and https://tokencost.app/blog/qwen3-6-plus-pricing-benchmarks (**"Qwen3.6-Plus costs $0.276/M input tokens - 18x cheaper than Claude Opus 4.6 at $5/M. Leads on multimodal benchmarks, falls behind on agentic"**) and https://openrouter.ai/qwen/qwen3.6-plus:free (**"The pricing shown on this page for Qwen3.6 Plus is zero"**) · lifecycle — batch-5 pass (qwen-3.7-plus): 3.7-Plus is the active Plus sku at the cheaper $0.40/$1.60 list, **3.6-Plus not deprecated** (still in the catalog, still routed); https://soyjb.com/en/tools/ai-compare/qwen3-6-max-preview (family still shipping new surfaces: 3.6 Max Preview, 3.8 comparisons) · benchmarks — no post-2026-10-02 AA/Vals re-run found for this id; tokencost independently echoes pass 1's profile (**"Leads on multimodal benchmarks, falls behind on agentic"**).

**What moved and how it was resolved:**

1. **Cost 80→84 (provisional→verified):** $0.50/$3.00 tier-1 is well under the $1.25/$4.25≈88 anchor — trimmed to 84 for the documented >256K step ($2.00/$6.00) that lands exactly on the 1M-context use case, and the official "No free quota" flag (the OpenRouter `:free` route is a non-production trial lane). Catalog-lane $0.40/$1.60 and Global $0.276 readings logged un-averaged.
2. **Lifecycle: superseded, not deprecated.** 3.7-Plus ($0.40/$1.60, own folder per exact-ID rule) is now the recommended Plus sku and cheaper — a real value note for readers, but 3.6-Plus remains listed and routed, so this row keeps its ranking.
3. **Independent echo of the weak/strong split:** tokencost's "leads on multimodal, falls behind on agentic" reproduces pass 1's shape (Multimodal 85 vs Tool 72/GDPval 23.8%) from a fresh source. No row moved: Reasoning 72 (HLE 27.8 under bar), Context 82 (1M with mid retrieval), Coding 78 stand. 72+72+82+85+78 = 389/5 = 77.8 → **Overall 78**.

**Scores changed by this pass:** Cost efficiency 80→84 (excluded from Overall). **Overall remains 78.**

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Qwen3.6-Plus blog, plus Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (maximem, Alibaba Model Studio pricing, morphllm, tokencost, OpenRouter free lane, plus the batch-5 3.7-Plus pass for catalog context); Cost 80→84 on the verified $0.50/$3.00 + >256K-cliff list; superseded-not-deprecated status recorded — **no quality dim changed and Overall remains 78**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.
