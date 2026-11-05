# Gemini 3 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): still **available** — the
> Oct 8 and Nov 2 deprecation waves hit 3.5/3.7 Flash and the 2.5 line, not this model,
> though Firebase now steers it toward 3.5/3.8 Flash and its routed-market share has slid
> to 0.30%. Strong new measured rows (LiveCodeBench-AA 90.8% #1, SWE-bench Multilingual
> 72.7% top-overall, TB-Hard 38.6%, official SWE-V 75.8%) lift Coding 82→83 and Tool
> 60→61; Overall holds at 80.

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's fast, cost-effective Gemini 3-family model offering Pro-grade reasoning at Flash-level latency; it became the default model in the Gemini app and AI Mode in Search. Released December 2025 as the third member of the Gemini 3 family (after Gemini 3 Pro and 3 Deep Think). Now two Flash generations behind (3.5→3.8), with Firebase steering migrations — but no deprecation of its own.
- **Provider / access:** Google Gemini API via Google AI Studio (`gemini-3-flash-preview`), Gemini CLI, Google Antigravity, Android Studio, Vertex AI (flex $0.25/$1.50), Gemini Enterprise; consumer access via the Gemini app and AI Mode. Chat Completions-style Gemini API.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff January 2025 (AA and llm-stats pages).
- **IDs:** `gemini-3-flash-preview` (Google Gemini API / Vertex AI). No Free ID on OpenCode Zen.
- **Lifecycle (verified Nov 3):** available on both Google surfaces; the Oct 8 deprecation (3.5/3.7 Flash) and Nov 2 deprecation (2.5 Pro/Flash, routing from Dec 1) do not touch it; Firebase lists migration guidance to 3.5/3.8 Flash and OpenRouter routed share fell to 0.30% (#37, −4.02pp) — a legacy-drift signal, not a shutdown.
- **Context window:** 1,048,576 total; 1M input / 65,536 max output (llm-stats; Vertex lists 66K).
- **Modalities:** text, image, speech/audio, video input; text output; thinking with adjustable levels; function calling, search-as-a-tool; JSON mode via response schemas.
- **Pricing (as of 2026-11-05):** $0.50 / $3.00 per 1M in/out (AI Studio; cached $0.05); **Vertex AI flex $0.25 / $1.50** (abracadabra, Nov 3 — the cheapest Google route found); Priority $0.90/$5.40; audio input $1/1M. Paid tier only; consumer default inside the Gemini app/AI Mode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **53.93% ±1.30** (#52/75 — unchanged); Terminal-Bench 2.0: 51.7% (BenchmarkList)
- Terminal-Bench Hard: **38.6%** (90th percentile — NEW, strong for its class)
- Tau2-bench: 43.3% (AA); **Tau2 Airline 82.5%** (NEW); Claw-Eval 49.2%
- Agentic (NEW, llmbenchmark): BALROG **48.1%** (#6 of 22), DeepResearch Bench **49.8%** (#7 of 20), Vending-Bench 2 $3,635 (#40), Design Arena Godot 1161 Elo
- JobBench 11.4%; Gert Labs 56.63%; GDPval / MCP-Atlas / SWE-Atlas: no verified public score found
- Efficiency: 30% fewer tokens than 2.5 Pro (launch); 3x faster

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA, non-reasoning class) / **87.88% ±1.64** (Vals, #37/138); HLE: **15.0%** (AA) vs Google's 33.7% claim
- LiveBench-class rows (NEW): the AA LiveCodeBench run reads **90.8% (#1 of 79)** — the strongest single measured coding row found for this model
- Artificial Analysis Intelligence Index: **17.9** (unchanged)
- AA-LCR: **55.3%**; CritPt 1.4%
- FrontierMath v2: Tiers 1–3 **51.2%** / Tier 4 **17.1%** (Epoch re-score, unchanged from the 2026-10-16 pass)
- AA-Omniscience: index −4.3, accuracy 45.8%, hallucination **92.4%** (severe — standing warning)
- MMLU-Pro (Vals): **88.59%** (#19/138); AA-IFBench 55.1%; AA Global-MMLU-Lite 92.7%
- MMMU Pro: 81.2% (Google) / AA-MMMU-Pro 78.6% / **87.63% ±0.79** (Vals, #13/93 — NEW, strongest reading)
- MOSAIC-Bench 70.4% (#2/9); Poker Agent 1100 TrueSkill (#3/17); PBT-Bench 62.8%; 3DCodeBench 1039 (#5/13); CCBench 51.3% (#3/6); Omni-DeepSearch 20.5%

Coding:

- SWE-bench Verified: **75.8%** (swebench.com official board — #2 of 36 at the Feb snapshot; BenchmarkList reads 75.0% #30/72) — measured, replacing the launch-blog claim
- **SWE-bench Multilingual: 72.7%** — top overall per llmrun's aggregation (NEW)
- SWE-bench (Vals): **75.0% ±1.94**; LiveCodeBench (Vals): **85.59%** (#30/143); LiveCodeBench-Plus 40.1%
- Vibe Code Bench: **20.2%** (Vals — still weak); Code Migration 6.39%; ProgramBench 0.0% (Vals) / 31.8% raw (BenchmarkList)
- SciCode: 12.7% (llmbenchmark scale); SWE-rebench 52.5%; Android Bench 62.5%; SWE-bench Live 37.8%
- SciCode (AA) / DeepSWE: no verified public score found

Long context:

- AA-LCR **55.3%**; no MRCR/RULER/GraphWalks at window length verified for this exact model

### Normalized scores (1–100)

- **Tool use: 61/100.** CHANGED from 60 — the new BALROG #6, DeepResearch #7 and Tau2-Airline 82.5% rows nudge the mid-band agentic evidence up, while TB2.1 53.9% and JobBench 11.4% still cap it.
- **Reasoning: 74/100.** Unchanged — GPQA 81.2/87.9% vs the 90.4% launch claim, HLE 15.0% vs 33.7%, AA Index 17.9, CritPt 1.4% and the severe 92.4% hallucination rate keep it mid-band; FrontierMath 51.2/17.1% stands.
- **Context window: 95/100.** Unchanged — 1M tokens (≥1M tier) with 65.5K output; AA-LCR 55.3% mid-pack; no ≥98% retrieval at depth.
- **Multimodal: 88/100.** Unchanged — text/image/audio/video in; MMMU-Pro now triple-sourced (81.2 Google / 78.6 AA / 87.6 Vals); text-only output.
- **Coding: 83/100.** CHANGED from 82 — the measured SWE-V 75.8% (official board #2), SWE-Multilingual 72.7% (top overall) and the #1 LiveCodeBench-AA row strengthen the verified coding story; Vibe 20.2% and the missing SciCode/DeepSWE rows still block 90+.
- **Cost efficiency: 93/100.** Unchanged — $0.50/$3.00 with a 90% cache discount, now joined by a $0.25/$1.50 Vertex flex route; still on the quality-vs-cost Pareto frontier.
- **Overall Score: 80/100.** (61 + 74 + 95 + 88 + 83) / 5 = 401/5 = 80.2 → 80 (unchanged). Best-fit: the cheap multimodal workhorse for high-volume interactive applications — verify anything knowledge-critical (92.4% hallucination rate) and prefer 3.8 Flash where budget allows.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Google changelog/deprecation waves (Oct 8 + Nov 2) confirming this model untouched, abracadabra/Ganivra/yellow3 pricing-and-adoption drift, llmbenchmark + BenchmarkList + Vals + swebench.com + llmrun measured rows); deprecation waves documented as adjacent context; estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1.md`, using the same headings.
