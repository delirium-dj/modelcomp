# Gemini 2.5 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (original 2025 GA release; a refreshed "Gemini 2.5 Flash (Sep)" variant exists — Artificial Analysis deprecates this page in its favor)
- **Short description:** Google's mid-2025 price/performance workhorse: a hybrid-thinking multimodal Flash model that replaced 2.0 Flash with upgraded reasoning, thinking budgets, and a 1M-token window. By 2026 it is a legacy budget model, superseded by the 3.x Flash line.
- **Provider / access:** Google — Gemini API ID `gemini-2.5-flash` (AI Studio, Gemini API, Vertex AI); also on DeepInfra and listed on OpenCode Zen with standard rate limits. Google's own `generateContent` API (not Chat Completions); MCP SDK support added at I/O 2025.
- **Release / knowledge:** preview 2025-04-17 (BenchmarkList tracks the preview); GA at Google I/O 2025-05-20 (llm-stats). Knowledge cutoff January 2025 (llm-stats + AA).
- **IDs:** `gemini-2.5-flash` (Google/DeepInfra). Free tier exists (Google AI Studio / Gemini API free tier; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000-token input; max output 65,536 tokens via Google (DeepInfra advertises 1M/1M). Verified via llm-stats provider table and benchlm.
- **Modalities:** text, image, audio and video input, text output (AA). Native tool calls (with Google Search grounding/code execution), JSON mode, thought summaries + thinking budgets. No PDF input and no audio/video output documented on the pages checked.
- **Pricing (as of 2026-10-09):** $0.30 in / $2.50 out per 1M (Google API; DeepInfra matches). 90% prompt-cache discount → AA blended 7:2:1 ≈ $0.33/1M. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed. Reasoning toggle (AA benchmarks the non-reasoning variant — all AA rows below are that class; a thinking variant is tracked separately).

### Raw benchmarks found

> AA rows via benchlm.ai (updated 2026-10-09, non-reasoning class) + earlier BenchmarkList/allthemodels aggregates. Previously-missing rows now measured.

Agent / tool use:

- Berkeley Function-Calling Leaderboard: **56.2%** (rank 12/85, 87th pct) (BenchmarkList)
- Claw Bench: **88** overall points (Task Completion 88, Efficiency 79.2, Security 83.6; run 2026-07-10) (BenchmarkList)
- Tau2-Bench Telecom: **14.9%** (AA via benchlm.ai — fills; weaker than the earlier BenchmarkList 31.6% reading — harness/variant difference, both listed)
- Terminal-Bench Hard: **13.6%** (rank 137/326) (BenchmarkList)
- MCP-Universe: **21.6%**; GDPval-AA: **742** (rank 157/340); Vending-Bench 2: **548.84**; DPBench: **90.0%** (rank 1/5) (BenchmarkList)
- TB2.0/TB2.1, Tau3, OSWorld, BrowseComp, Finance Agent: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.3%** (AA-GPQA Diamond, non-reasoning class via benchlm.ai — conflicts with the allthemodels aggregate of 83%; the 83% likely reflects a thinking-mode run, the AA row is the measured non-reasoning default; both listed)
- HLE: **4.7%** (AA-HLE — conflicts with the 11% aggregate; same variant issue)
- AIME 2024: **88%**; AIME 2025: **72%**; MMMU: **80%** (allthemodels aggregate)
- ARC-AGI-2: **2.5%** / ARC-AGI-1: **33.3%**; ECI: **120.49** (#141/398) (BenchmarkList)
- FrontierMath v2: Tiers 1–3 **4.8%**, Tier 4 **4.2%** (Epoch AI via benchlm.ai — new, weak); CritPt: **1.4%** (AA)
- Artificial Analysis Intelligence Index: **9.8** (AA current reading — corroborates the earlier 10)
- AA-LCR: **49.9%** (AA long-context-reasoning board — fills the previously-missing LCR)
- AA-Omniscience: Index -42.6, accuracy **26.1%**, hallucination rate **93.0%** (benchlm.ai — severe)
- AA-IFBench: **39.0%** (AA)

Coding:

- SWE-bench Verified: **60%** (allthemodels aggregate — corroborated)
- LiveCodeBench / SciCode / SWE-Pro / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **49.9%** measured (fills the previously-missing row); window 1M tokens (1M in / 65.5K out via Google; DeepInfra 1M/1M); no MRCR/RULER value

Multimodal / vision:

- AA-MMMU-Pro: **65.5%** (AA — fills the first measured vision row on the non-reasoning variant; the 80% MMMU aggregate likely reflects thinking mode); Design Arena Website: **1120**

### Normalized scores (1–100)

- **Tool use: 62/100.** Solid function calling (BFCL 56.2, Claw Bench 88 pts, DPBench 90) but the 2026-generation agentic evals are weak: Tau2 14.9% (AA, filled) / 31.6% (BenchmarkList), TB-Hard 13.6, MCP-Universe 21.6, midpack GDPval-AA 742.
- **Reasoning: 62/100.** GPQA conflict: AA 68.3% (non-reasoning default) vs the 83% thinking-mode aggregate; HLE 4.7%/11% and FrontierMath 4.8% are weak; AIME 2024 88 is respectable; AA II 9.8 and the 93.0% hallucination rate cap it well below the old 68.
- **Context window: 95/100.** Full 1M-token input at the top tier of this repo with the filled AA-LCR 49.9% measured; capped by the 65.5K max-output cap via Google and no ≥98% retrieval at depth.
- **Multimodal: 80/100.** Text + image + audio + video in (omni input tier) with the measured AA-MMMU-Pro 65.5% (non-reasoning variant); text-only output and no documented PDF input keep it below the 90–95 omni scorers.
- **Coding: 70/100.** SWE-bench Verified 60% is workhorse-class and Terminal-Bench Hard 13.6 is weak; no LiveCodeBench/SWE-Pro/SciCode numbers found to argue higher.
- **Cost efficiency: 95/100.** Rate-limited free tier on AI Studio/Zen plus a very cheap paid rate ($0.30/$2.50, 90% cache → ≈$0.33 blended); only output-side $2.50 keeps it from 100.
- **Overall Score: 74/100.** Mean of the five quality dims (62 + 62 + 95 + 80 + 70) / 5 = 73.8 → 74. Best fit: budget multimodal workhorse for high-volume chat/vision — not for hard agentic or coding runs on 2026 benchmarks, and not for knowledge-critical work given the 93% hallucination rate on the default variant.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing AA boards + earlier BenchmarkList/allthemodels/llm-stats aggregates — conflicts compared and both readings listed); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Tau2 14.9%, AA-LCR 49.9%, AA-MMMU-Pro 65.5%, AA-GPQA 68.3%, AA-HLE 4.7%, FrontierMath 4.8%, hallucination 93.0% — Tool 65→62, Reasoning 68→62, Context 97→95, Multimodal 88→80, Overall 78→74 (old draft also showed a six-dim calc next to a five-dim Overall).
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash_Sep.md`, using the same headings.
