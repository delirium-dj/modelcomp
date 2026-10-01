# Qwen 3.6 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen3.6-Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 80/100.** Plus-tier "standard pricing" is low-to-mid per 1M (Qwen Plus historically value-priced); exact rate not in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 72, Reasoning 72, Context 82, Multimodal 85, Coding 78 = 77.8 → 78. Best fit: multimodal vision/video understanding, contest math and single-turn tool-calling/LiveCodeBench coding at Plus value; not a research-depth reasoner (HLE 27.8, Index 27.0) nor a strong office-work/desk agent (GDPval 23.8%) — ground factual and long-horizon-agentic tasks with tools.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Qwen3.6-Plus blog, plus Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.
