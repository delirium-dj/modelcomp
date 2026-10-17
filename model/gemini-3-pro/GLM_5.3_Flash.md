# Gemini 3 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview; Deep Think mode available)
- **Short description:** Google DeepMind's November 2025 frontier flagship — the first Gemini 3 model, leading 13 of 16 widely tracked benchmarks at launch with state-of-the-art reasoning, multimodal and video understanding; best for complex tasks requiring broad world knowledge and advanced reasoning across modalities. A year on, AA's current boards place it at Index 28 — its multimodal table remains elite, but its reasoning/coding rows now trail the 2026 frontier. Superseded within the family by 3.1/3.5/3.8 models but still the Google Pro tier.
- **Provider / access:** Gemini API (`gemini-3-pro-preview`) via Google AI Studio, Vertex AI, Gemini Enterprise (Chat Completions-style Gemini API); Deep Think mode for the hardest reasoning. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff January 2025 (per Gemini 3 Flash launch context; not independently re-verified for 3 Pro).
- **IDs:** `gemini-3-pro-preview` (Google Gemini API / Vertex AI). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens; 64K output (verified via vellum.ai and llm-stats on the 2026-10-08 pass) — **BenchLM's 2026-10-10 page lists 2M, a conflict left unresolved**; the 1M figure stays primary on multi-source verification.
- **Modalities:** text, image, audio, video and PDF input; text output; reasoning yes (Deep Think mode — BenchLM classifies the base variant as non-reasoning with Deep Think as a sibling); tool calls (code execution, search-as-tool); JSON mode.
- **Pricing (as of 2026-10-11):** $2.00 / $12.00 per 1M in/out up to 200K input; $4.00 / $18.00 above 200K; cached input $0.20 per 1M plus storage (verified via the Kingy AI frontier price table). Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **87.1%** (AA, independent — corroborates the tool-use strength; the 2026-10-08 pass cited TAU2-Bench Telecom 98.0% from airank.dev)
- Vending-Bench 2: **#1 leaderboard, mean net worth $5,478.16** (272% higher than GPT-5.1; vellum.ai) — long-horizon planning over a simulated year
- ScreenSpot-Pro: **72.7%** (Google DeepMind page via benchlm.ai — now machine-readable; the 2026-10-08 pass had it only as "high, value in image")
- Gert Labs: **63.23%** (gertlabs.com rankings)
- JobBench: **11.4%** (JobBench paper, arxiv 2605.26329 — weak)
- Terminal-Bench, GDPval-AA, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** standard / **93.8%** Deep Think (vellum.ai); AA independent: **90.8%** — corroborated
- AA-HLE: **39.7%** (AA, independent; the 37.5%/40%+ Deep Think launch reading stands)
- ARC-AGI-1: **75.0%** (ARC Prize verified results, arcprize.org/leaderboard); ARC-AGI-2: **31.1%** standard / **45.1%** Deep Think at launch (Google DeepMind page; a later Feb 2026 verified Deep Think result of 84.6% per aiwiki.ai remains unconfirmed on the ARC leaderboard)
- Artificial Analysis Intelligence Index: **28** (AA, 2026-10-10 — corroborates the launch-week reading on the current normalized board)
- FrontierMath v2: **37.6%** Tiers 1–3 / **18.75%** Tier 4 (Epoch AI leaderboard, 2026-10-17 refresh — re-scored upward from 14.1%-class earlier Epoch readings; still weak)
- AA-IFBench: **70.4%** (AA — added 2026-10-16)
- AA Global-MMLU-Lite: **92.2%** (added 2026-10-16)
- AA-LCR v1.1: **76.0%** (AA — fills the LCR gap); CritPt: **9.1%** (AA — very weak)
- AA-Omniscience: **55.8% accuracy / 91.5% non-hallucination row (best measured in this repo) / 15.3 index** (AA)
- MMLU-Pro: **89.8%** (AA); Global-MMLU-Lite: **92.2%** (AA); MMMLU: **91.8%** #1, Global PIQA: **93.4%** (vellum)
- AIME 2025: **100%** with code execution / **95.0%** without tools (vellum)
- MLCR: no verified public score found

Coding:

- AA LiveCodeBench: **91.7%** (AA, independent — fills the standard-LiveCodeBench gap; the LiveCodeBench Pro Elo 2,439 launch reading stands)
- SWE-bench Verified: **76.2%** (vellum.ai; competitive with Claude Sonnet 4.5's 77.2%)
- Vibe Code Bench v1.1: **14.3%** (Vals, independent — weak on the 2026 harness)
- SWE-bench Pro / SciCode / Vibe (1-100): no verified public score found

Long context:

- MRCR v2: **77.0%** at the 128k average context length; at 1M it outpaces Gemini 2.5 Pro by 9.9% (vellum)
- AA-LCR v1.1: **76.0%** (AA — first independent long-context number)

Multimodal (richly corroborated via the Qwen 3.5-397B/3.6-Plus comparison tables + Google launch blog):

- MMMU: **87.2%**; MMMU-Pro: **81.0%** (Google) / **80.2%** (AA); Video-MMMU: **87.6%** (Google); Video-MME: **88.4%** with subs / **87.7%** without
- OmniDocBench 1.5: **88.5%**; CC-OCR: **79.0%**; MMLongBench-Doc: **60.5%**; CharXiv: **81.4%**; V*: **88.0%**; MathVision: **86.6%**; We-Math: **86.9%**; DynaMath: **85.1%**; AI2D: **94.1%**; CountBench: **97.3%**; RealWorldQA: **83.3%**; RefCOCO avg: **84.1%**; ODINW13: **46.3%**; ERQA: **70.5%**; MLVU M-Avg: **83.0%**; SimpleVQA: **73.2%**

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 87.1% (AA independent) and Vending-Bench 2 #1 hold the frontier tool story up; ScreenSpot-Pro is now quantified at 72.7%; JobBench 11.4% is the age tell — missing TB/GDPval rows keep it under 95.
- **Reasoning: 80/100.** (Was 90 on the prior pass.) The launch-week 90 rested on GPQA + AIME + Deep-Think ARC; the current independent board reads materially lower relative to the 2026 frontier: AA Index 28, AA-HLE 39.7%, ARC-AGI-1 75.0% (vs 97.5% for the 2026 Claude class), CritPt 9.1%, FrontierMath T4 18.75%. GPQA 90.8–93.8% and AIME 95–100% keep it elite-adjacent rather than frontier.
- **Context window: 92/100.** 1M tokens (BenchLM's 2M claim is a lone conflict) with MRCR v2 77.0% @128K and AA-LCR 76.0% measured; no ≥98% retrieval at 512K+ verified, so no 95.
- **Multimodal: 95/100.** The most richly corroborated multimodal table in this pass (MMMU 87.2, Video-MME 88.4, OmniDocBench 88.5, CharXiv 81.4, CC-OCR 79.0 across two independent comparison cards + Google's own rows) — top of the 90–100 band; text-only output is the only gap.
- **Coding: 84/100.** AA LiveCodeBench 91.7% strengthens the algorithmic-coding story and corroborates the Elo 2,439 launch read; SWE-bench Verified 76.2% and Vals Vibe Code Bench 14.3% (2026 harness) hold it in the mid-80s.
- **Cost efficiency: 82/100.** $2/$12 per 1M up to 200K sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 82; the 200K surcharge ($4/$18) is the caveat.
- **Overall Score: 88.6/100.** (Was 91 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (92 + 80 + 92 + 95 + 84) / 5 = 443/5 = 88.6 — lowered on the 2026-10-11 second pass because AA's current normalized boards (Index 28, ARC-1 75.0, CritPt 9.1) reposition the year-old reasoning claims relative to the 2026 frontier, even as the multimodal table gained rich independent corroboration. Best-fit: still the strongest choice for multimodal and video reasoning and long-horizon planning — with Deep Think for the hardest reasoning and Flash tiers for cost-sensitive volume; for text-heavy frontier reasoning the 2026 class has passed it.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 with AA/Epoch/ARC Prize/Qwen-comparison-table citations, the prior 2026-10-08 vellum.ai/airank/aiwiki/llm-stats/Kingy pass, Google DeepMind and blog.google pages via benchlm.ai; 2026-10-16 re-check: BenchLM 41-row refresh corroborates all rows (AA-IFBench 70.4%, Global-MMLU-Lite 92.2% added; FrontierMath 37.6/18.75 confirmed on the current Epoch board; BenchLM still lists 2M ctx — the 1M-vs-2M conflict stands) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
