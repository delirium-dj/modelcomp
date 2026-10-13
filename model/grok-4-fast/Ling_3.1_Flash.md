# Grok 4 Fast — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4 Fast
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **META NOTE:** This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing"). Verified specs below come from xAI's launch post (x.ai/news/grok-4-fast), the Grok 4 Fast model card PDF (data.x.ai/2025-09-19-grok-4-fast-model-card.pdf) and provider docs.

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's efficiency-focused model — a unified architecture where reasoning (long chain-of-thought) and non-reasoning (instant) modes share the same weights, steered via system prompts; ships as `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`, each with a 2M-token context window and frontier agentic web/X search.
- **Provider / access:** xAI — xAI API (GA 2025-09-19); Azure AI Foundry (2025-09-25); OCI Generative AI. **Deprecated:** OCI lists it as deprecated (notice 2026-05-15/16); xAI's current model docs (2026-09-21) no longer list it, pointing to Grok 4.6/4.20; HokAI reports rates unchanged through July 2026 despite the deprecation notice.
- **Release / knowledge:** 2025-09-19. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/grok-4-fast` (repo meta.json, stale stub); `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI API); `x-ai/grok-4-fast` (aggregators).
- **Context window:** 2M tokens (max prompt + response; OCI caps playground responses at 16K tokens/run; some catalogs list 30K max output).
- **Modalities:** Text, image in (PNG/JPG; OCI: 256–1,792 tokens per image, a 512×512 image ≈ 1,610 tokens); text out; tool calling; agentic search across web and X (hops links, ingests images/videos on X).
- **Pricing (as of 2026-10):** <128K tokens: $0.20 input / $0.50 output per 1M; ≥128K: $0.40 / $1.00; cached input $0.05 (75% discount); web search $0.005 per request. Blended 3:1 ≈ $0.275/M (HokAI, #12 of 62 peers).
- **Architecture:** Unified reasoning/non-reasoning transformer (same weights, system-prompt steered); xAI claims a 40% token-efficiency gain and 98% cost reduction vs Grok 4 at equal frontier-benchmark performance; 227 tok/s (HokAI, #10 of 37; AA-cited).

### Raw benchmarks found

Vendor launch post (x.ai/news/grok-4-fast, 2025-09-19):

Reasoning / knowledge (no tools unless noted):

- GPQA Diamond: **85.7%** (Grok 4: 87.5%; Grok 3 Mini High: 79.0%; GPT-5 High: 85.7%; GPT-5 Mini High: 82.3%).
- AIME 2025 (no tools): **92.0%** (Grok 4: 91.7%; GPT-5: 94.6%).
- HMMT 2025 (no tools): **93.3%** (Grok 4: 90.0%; GPT-5: 93.3%).
- HLE (no tools): **20.0%** (Grok 4: 25.4%; Grok 3 Mini: 11.0%; GPT-5: 24.8%; GPT-5 Mini: 16.7%).
- SimpleQA: **85.0%** (comparators 94.0% / 82.0%, attribution not captured); Reka Research Eval: **66.0%** (Grok 4: 58.0%).
- Second-pass reasoning rows (2026-10-12): AA-GPQA Diamond: **84.7%** (measured — confirms the vendor's 85.7%); GPQA Diamond (Vals, thinking): **85.3%** (rank 47) / 62.1% non-reasoning (rank 104); AA-HLE: **19.1%** (measured — confirms the vendor's 20.0% no-tools; 4.5% non-reasoning); HLE: **26.6%** (benchgap est ±9.5, medium confidence — conflicts with the measured 19.1%, kept); AIME 2025 (Vals, thinking): **91.3%** (rank 25) vs 33.3% non-reasoning (rank 69) — the mode gap is the story; MGSM: 90.9% thinking / 88.0% non-reasoning; HMMT 2025: **93.3%**; Kagi LLM Benchmark: **66.1%** thinking (rank 38) / 35.4% non-reasoning; IFBench: **50.5%** thinking (rank 170) / 37.7% non-reasoning; MMLU-Pro: **84.5%** (benchgap est ±3.7, high confidence) / 83.6% (Vals est, high confidence); CritPt: **2.9%** thinking / 0.0% non-reasoning (measured — a severe cap); AA Intelligence Index: **17.9%** (v4.3.2 measured — the rebase-era read); AA-Omniscience: **−29.9** (accuracy 22.8%, hallucination rate 68.3% — a high-hallucination profile); BioMysteryBench: 29.5% (est ±5.9); DTBench: 82.7% (rank 99); ForecastBench: 60.5% (rank 27); WeirdML: 42.9% (rank 93); SimpleQA: 95.0% (llm-stats — conflicts with the vendor's 85.0%, kept).

Agentic / coding:

- BrowseComp (web browsing): **44.9%** (Grok 4 comparator not captured in available text).
- LiveCodeBench (Jan–May problems): **80.0%** (Grok 4: 79.0%; GPT-5: 86.8%).
- Second-pass agentic rows (2026-10-12): τ²-Bench Telecom: **63.7%** non-reasoning / **65.8%** thinking (AA — first τ² read; ranks 171/165); Terminal-Bench Hard: **12.1%** non-reasoning / **18.9%** thinking (AA; ranks 208/165 — weak either way, −47.0 pt vs GPT-5.6 Sol); Terminal-Bench 2.0 (Vals, thinking): **29.2%** (rank 45); Cybench: **30.0%** (rank 9 — small field); Poker Agent (Vals): 1034.3 (thinking, rank 9); BFCL v4: **52.4%** (benchgap est ±8.7, low confidence); AA Agentic Index: **13.8%** (benchgap est ±12.3, low confidence); APEX-Agents-AA: **1.6%** (benchgap est ±11.4); AA ITBench: **7.1%** (benchgap est ±3.6); GDPval-AA: **4.8%** (benchgap est ±12.5); Vibe Code Bench v1.1 (Vals, thinking): **0.0%** (rank 99 — a severe cap on app-building); SWE-bench (Vals, thinking): **45.4%** (rank 81); SWE-bench Verified — **48.0%** (AI Value Index, rank 32/67) / **61.8%** (Vals est ±6.3, medium confidence) / **71.7%** (benchgap est ±4.4, medium confidence) — a wide 23.7-point cluster, kept. MCP-Atlas: no grok-4-fast row on any captured board.
- Second-pass long-context rows (2026-10-12): AA-LCR v1.1: **73.7%** (AA measured — the first independent retrieval read; mid-band, below the ~80% that anchors top scores; the non-reasoning variant's LCR read of 20% (TechBriefly) is a severe conflict, kept); BenchLeader long-context category: 62–63/100 (thinking/best) — mid-band; LMArena Longer Queries: 1413 thinking / 1419 best (ranks 139/132).
- Second-pass multimodal rows (2026-10-12): AA-MMMU-Pro: **61.8%** (AA measured — the first multimodal score; mid-band for the era); BenchLeader multimodal category: 30 non-reasoning / 45 thinking — weak-mid; LMArena WebDev: 1159 (thinking, rank 130).
- Second-pass coding rows (2026-10-12): AA-SciCode: **45.7%** (benchgap est ±3.8, medium confidence); SciCode: **32.9%** (non-reasoning, TechBriefly); LiveCodeBench (Vals, thinking): **79.0%** (rank 73 — confirms the vendor's 80.0%; 46.1% non-reasoning, rank 115); LMArena Coding: 1439 thinking / 1458 best (ranks 154/134); Arena Coding: 8.7 (TechBriefly, an older Elo-scale number).

### Normalized scores (1–100)

- **Tool use: 58/100.** BrowseComp 44.9% (strong agentic web search) and τ²-Bench Telecom 63.7–65.8% (first τ² read, mid-band) support the score, but the second-pass agentic evidence caps hard: Terminal-Bench Hard 12.1–18.9%, Terminal-Bench 2.0 29.2%, AA Agentic Index 13.8% (est), AA ITBench 7.1% (est), GDPval-AA 4.8% (est), APEX-Agents 1.6% (est) and Vibe Code Bench v1.1 0.0% (thinking). Revised 60→58 on the TB-Hard/Agentic-Index/ITBench caps. MCP-Atlas: no grok-4-fast row exists on any captured board.
- **Reasoning: 70/100.** Thinking-mode AIME 91.3% (Vals), HMMT 93.3%, MGSM 90.9% and GPQA 84.7–85.7% (AA-measured 84.7% confirms) are frontier-tier math/science; capped by AA-HLE 19.1% (measured), CritPt 2.9%, the AA Intelligence Index rebase (17.9 on v4.3.2) and AA-Omniscience −29.9 (68.3% hallucination). The mode gap is structural: AIME drops to 33.3% and GPQA to 60.6% in non-reasoning mode. Unchanged.
- **Context window: 88/100.** The 2M-token window (largest in this comparison, confirmed by aggregators) keeps the score top-band, but the first independent retrieval read — AA-LCR v1.1 73.7% (measured) — is mid-band, below the ~80% that anchors 94–95, and the non-reasoning LCR read of 20% conflicts. Revised 93→88: window premium retained, pure-claim discount removed.
- **Multimodal: 66/100.** Text + image input (documented per-image tokenization); the first vision score, AA-MMMU-Pro 61.8% (measured), is mid-band for the era — consistent with the input band but not above it. Revised 67→66 on the AA-MMMU-Pro fill.
- **Coding: 69/100.** LiveCodeBench 79.0–80.0% (Vals-confirmed) is competitive, but the first SWE-bench evidence is weak-to-mid (Vals SWE-bench 45.4% thinking; SWE-bench Verified cluster 48.0–71.7%, mid ~62%), and AA-SciCode 45.7%, SciCode 32.9% (non-reasoning) and Vibe Code Bench v1.1 0.0% (thinking) cap it. Revised 71→69 on the SWE-bench/Vibe-Code/SciCode caps.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M below 128K (cached $0.05) is among the cheapest frontier-adjacent rate cards ever shipped; xAI claims 98% cost reduction vs Grok 4 at equal benchmark performance.
- **Overall Score: 70.2/100.** Mean of the five quality dimensions (58+70+88+66+69)/5 = 70.2. The model is deprecated/legacy as of 2026-10 — scores describe the shipped checkpoint, not current xAI flagships. Revised from 72.2 (Context −5, Coding −2, Tool −2, Multimodal −1) as the second pass replaced claim-only evidence with measured rows.

---

## Update 2026-10-12 (deep second pass, 4 independent searches)

- **Score changes:** Tool 60→58 (Terminal-Bench Hard 12.1–18.9%, AA Agentic Index 13.8%, AA ITBench 7.1%, GDPval-AA 4.8% caps), Context 93→88 (AA-LCR v1.1 73.7% measured — mid-band, below the ~80% top anchor; non-reasoning LCR 20% conflict kept), Multimodal 67→66 (AA-MMMU-Pro 61.8% measured, mid-band), Coding 71→69 (SWE-bench-Vals 45.4%, Vibe Code Bench v1.1 0.0%, AA-SciCode 45.7% caps). Reasoning 70 and Cost 95 stand; Overall 72.2→70.2.
- **Mode-split story:** every benchmark splits sharply by mode — AIME 91.3% thinking vs 33.3% non-reasoning, GPQA 84.8–85.3% vs 60.6%, HLE 19.1% vs 4.5%, LiveCodeBench 79.0% vs 46.1%, IFBench 50.5% vs 37.7%, CritPt 2.9% vs 0.0%. Scores above describe the reasoning (`grok-4-fast-reasoning`) checkpoint unless noted.
- **Key fills:** agentic — τ²-Bench Telecom 63.7%/65.8% (first τ² read), Terminal-Bench 2.0 29.2% (Vals), Cybench 30.0% (rank 9), Poker Agent 1034.3, BFCL v4 52.4% (est), Vibe Code Bench v1.1 0.0% (thinking), SWE-bench (Vals) 45.4%; reasoning — AA-GPQA 84.7% (measured), AA-HLE 19.1% (measured), AIME (Vals) 91.3% thinking, MGSM 90.9%, Kagi 66.1%, MMLU-Pro 84.5% (high-conf est), CritPt 2.9%, AA Index 17.9 (v4.3.2 rebase), AA-Omniscience −29.9 (68.3% hallucination), DTBench 82.7%, ForecastBench 60.5%; context — AA-LCR v1.1 73.7% (measured), BenchLeader long-context 62–63; multimodal — AA-MMMU-Pro 61.8% (measured); coding — LiveCodeBench (Vals) 79.0% thinking, AA-SciCode 45.7%, SciCode 32.9% (non-reasoning), LMArena Coding 1439 thinking.
- **Conflicts kept:** SWE-bench Verified 48.0% / 61.8% (est) / 71.7% (est) — a 23.7-point cluster; HLE 19.1% (AA measured) vs 26.6% (benchgap est); AA-LCR 73.7% (reasoning) vs LCR 20% (non-reasoning, TechBriefly); SimpleQA 85.0% (vendor) vs 95.0% (llm-stats).
- **Rankings (Oct 2026):** LMArena Text 1405 Elo (#154; per-language: French 1441 #114, Chinese 1443 #140, English 1415 #159, Japanese 1362 #122); LMArena Coding 1439 (#154–167); BenchLeader Index 54.0 ±6.4 (#245/760; thinking 52.0 #316, no-reasoning 40.7 #629); BenchLM 43.09/100 (#125/891); AA Intelligence Index 17.9 (v4.3.2).
- **Still open:** an MCP-Atlas row (no grok-4-fast entry on any captured board); a strong-scaffold Terminal-Bench 2.1 run; the SWE-bench Verified tiebreaker (three reads, 23.7-point spread); a vision-suite tiebreaker beyond AA-MMMU-Pro.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
