# Gemini 3.1 Flash Lite — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemini-3.1-flash-lite`, preview launched 2026-03-03)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's fastest, cheapest Gemini 3-series tier — a distinct, real, GA-listed model (unlike the phantom base "Gemini 3.1 Flash", self-excluded in its own folder). Positioned for high-volume developer workloads: translation, content moderation, tagging, UI generation, with standard adaptive thinking levels in AI Studio/Vertex.
- **Provider / access:** Gemini API in Google AI Studio + Vertex AI (preview at launch, GA-listed since); OpenCode Zen free tier; OpenRouter `google/gemini-3.1-flash-lite`. BenchLM ranks it **#82–86 of ~507** — confirming it is an independently tracked model, not a relabel.
- **Release / knowledge:** announced 2026-03-03 (Google blog "Built for intelligence at scale"); superseded as the Lite tier by Gemini 3.5 Flash-Lite (Jul 2026, 1M context / 86.9% GPQA per DeepMind's own flash-lite page), so 3.1's launch "top-of-tier" claims are now a generation stale.
- **IDs:** `google/gemini-3.1-flash-lite` (also `-preview` at launch).
- **Context window:** 1,048,576 tokens in / 8,192 max out (Gemini 3.6 Flash's verified docs row; consistent with curated `meta.json`).
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls + JSON mode; thinking levels configurable.
- **Pricing (as of 2026-10-02):** **$0.25 / $1.50 per 1M** (Google blog, confirmed by llm-stats / pricepertoken / ai-toolbox); free tier on AI Studio and Zen. Gemini 3.6 Flash's sibling report claims a $0.0375/$0.15 discounted lane — unconfirmed elsewhere, noted but not relied on. Cost excluded from Overall.
- **Architecture:** proprietary lightweight model (sibling reports variously say lightweight transformer / MoE; params undisclosed).

### Raw benchmarks found

> Verified against the Google launch blog (fetched 2026-10-02: 86.9% GPQA Diamond, 76.8% MMMU-Pro, Arena Elo 1432, 2.5× TTFA / +45% output speed vs 2.5 Flash per Artificial Analysis), plus independent lanes: AA index-comparison snippet (scores **26** vs Nova 2.0 Omni's 10), datastudios (GPQA **82.2%**, coding index **34.7**), and in-cohort sibling reports (Kimi_K3: BenchLM 48.51/#82, Vals GPQA 81.1 / SWE-V 62.8 / LCB 80.1 / TB 34.1; Gemini_3.6_Flash: GPQA 58, HLE 8.5, SWE-V 41, TB 48, GDPval-AA 980, BenchLM #68). The lanes disagree wildly — this is a textbook vendor-hype vs independent-execution gap for a Lite tier.

Agent / tool use:

- Terminal-Bench 2.1: **34.1%** (Vals, via Kimi_K3) / **48.0%** (Gemini 3.6 Flash report) — weak terminal execution either way
- GDPval-AA: **980** (Gemini 3.6 Flash report); τ²/τ³: **~34–65%** across sibling reports (the 65 is the implausible same-family self-report lane)
- Function calling / tool calls: supported and demoed at launch (multi-step SaaS agent, wireframe filling); no strong independent agentic row found

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (vendor launch) vs **82.2%** (datastudios) vs **58.0%** (Gemini 3.6 Flash report) — the launch 86.9 is at risk of 3.5-gen conflation (HokAI now attaches the identical 86.9 to 3.5 Flash-Lite); treated as vendor-claimed, mid-60s–low-80s true range
- HLE: **8.5%** (Gemini 3.6 Flash report) — far below the 40% frontier bar; Artificial Analysis Intelligence Index: **26** (AA comparison snippet) / coding index 34.7 (datastudios)
- Omniscience: not independently measured here; the same-family self-report's 91.2/3.7 is implausible round and discounted

Coding:

- SWE-bench Verified: **62.8%** (Vals, generous lane) / **41.0%** (Gemini 3.6 Flash report)
- LiveCodeBench: **80.1%** (Vals) / **54.0%** (3.6 Flash report); SciCode ~26; independent coding index 34.7 (datastudios)

Long context:

- 1M input window confirmed; MRCR/RULER ~95.5% retrieval claimed in the 3.6 Flash sibling report; 8,192 max output is the practical ceiling.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where vendor and independent lanes disagree, I split toward the independent evidence rather than averaging in the implausible self-report.

- **Tool use: 60/100.** Real, well-instrumented tool calling (function calls, JSON, adaptive thinking) and a credible GDPval-AA ~980, but every independent execution lane is weak for its era (TB 34–48, τ ~34) — fast invocation, light verified agentic depth.
- **Reasoning: 62/100.** Its headline 86.9 GPQA is a launch-era, tier-leading claim that two later sources re-attribute to the 3.5 successor; the independent picture (AA index 26, HLE 8.5, contested GPQA 58–82) says genuinely-good-for-cheap but nowhere near frontier. High-mid at a Lite price point, which was exactly the product promise.
- **Context window: 95/100.** 1,048,576 input verified (≥1M band 95–100); floored at 95 because max output is only 8,192.
- **Multimodal: 90/100.** Text+image+audio+video+PDF input is the top input band (90–100); text-only output keeps it off the ceiling. MMMU-Pro 76.8 (vendor) supports real vision strength for the tier.
- **Coding: 50/100.** Vals 62.8 SWE-V is the generous lane; 3.6 Flash's 41 SWE-V / 54 LCB and datastudios' 34.7 coding index pull the independent read to mid-band. Fine for boilerplate and UI scaffolding (its marketed use), not for repo-level engineering.
- **Cost efficiency: 97/100.** $0.25/$1.50 per 1M plus a true free tier — near the methodology's $0.10–0.20 floor anchor; a standout regardless of lane. Cost excluded from Overall.
- **Overall Score: 71/100.** Mean of Tool 60, Reasoning 62, Context 95, Multimodal 90, Coding 50 = 357/5 = 71.4 → **71**. Best fit: **massive-volume, latency-critical lightweight workloads** — translation, moderation, tagging/classification, simple UI generation — where its 1M multimodal context at $0.25/$1.50 is essentially unmatched; explicitly not a coding or deep-reasoning pick, and now a generation behind 3.5 Flash-Lite. Close to the cohort's 73.2; the five raters who ignored this folder's evidence vacuum and leaned on the inflated same-family self-report (85.6) are the outliers.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Google launch blog 2026-03-03 fetched for GPQA 86.9 / MMMU-Pro 76.8 / Elo 1432 / $0.25/$1.50 / speed claims; AA model-comparison snippet for intelligence index 26; datastudios for GPQA 82.2 / coding index 34.7; DeepMind flash-lite page + HokAI for the 3.5-successor 86.9 re-attribution; llm-stats/pricepertoken/ai-toolbox pricing confirmation) cross-checked against qualifying in-folder reports (Kimi_K3 BenchLM/Vals rows, Gemini_3.6_Flash independent-style rows) and curated `meta.json`. Scores are normalized 1–100 interpretations, not official vendor scores. Distinctness confirmed (BenchLM-ranked, live API ID) — unlike the self-excluded base `gemini-3.1-flash`.
- Revisit trigger: if Artificial Analysis or BenchLM publish full GPQA/HLE/SWE-bench/MRCR panels under the settled (non-preview) `gemini-3.1-flash-lite` ID resolving the 58↔86.9 GPQA lane war, re-score — Reasoning is the dim most sensitive to that unresolved conflict.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
