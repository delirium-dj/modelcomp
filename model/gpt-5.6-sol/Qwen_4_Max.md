# GPT-5.6 Sol — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** Flagship tier of OpenAI's GPT-5.6 family (Jul 9, 2026 GA; limited Sol preview from Jun 26) — the first OpenAI release split into three named tiers (Sol flagship / Terra balanced / Luna low-cost) instead of base/mini/nano. Replaced GPT-5.5 as the ChatGPT default. Strong agentic browsing and math reasoning; superseded at the frontier by GPT-6 Astra / GPT-6.1 Sol. **Not GPT-6 Sol** (a distinct Sep 22 model) and not GPT-6.1 Sol.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, also reachable via the plain `gpt-5.6` alias) through Responses, Chat Completions, and Batch; Azure OpenAI; ChatGPT (Sol medium/high from Plus up; extra-high reasoning and Sol Pro reserved for Pro/Business/Enterprise; Free/Go default to Luna); Codex (all three tiers from Plus up).
- **Release / knowledge:** GA 2026-07-09 (preview 2026-06-26). Knowledge cutoff **2026-02-16** on all three tiers — older than the launch date suggests; spring-2026 events require retrieval.
- **IDs:** `gpt-5.6-sol` (alias `gpt-5.6`); siblings `gpt-5.6-terra`, `gpt-5.6-luna`; a `gpt-5.6-cyber` variant is listed by BenchLM.
- **Context window:** 1,050,000 tokens; 128K max output. **Long-context surcharge: requests >~272K input tokens bill at 2x input and 1.5x output for the entire request** (not just the overage) — a real billing cliff for long agent transcripts.
- **Modalities:** Text and images in; text out. No native audio/video on Sol (OpenAI's Realtime/Audio models are separate SKUs).
- **Pricing (as of 2026-11-11):** $4 in / $20 out per 1M, cached input $0.40 (10%), cache writes 1.25x. Launch price was $5/$30 ($0.50 cached); cut 2026-08-21 with promotional pricing promised "at least through November 21, 2026" (a floor, not an expiry). Terra $2/$12 and Luna $0.20/$1.20 were cut earlier (Jul 30). OpenAI's general pricing page lagged the cut; model docs are authoritative.
- **Architecture:** Proprietary reasoning model; parameters undisclosed. Reasoning effort tiers (medium/high/extra-high) plus a Sol Pro variant in ChatGPT.

### Raw benchmarks found

Agentic / tool use (OpenAI launch post via BenchLM's sourced table, unless labelled):

- Terminal-Bench 2.1 **91.9%** (OpenAI harness) vs **85.8%** (Vals AI independent run) — both cited, not averaged; Terminal-Bench 4.1 **38.5%** (tbench.ai leaderboard), TB 3.0 34.6%, AA terminalBench-Hard 65.9%
- BrowseComp **92.2%**; OSWorld 2.0 **62.6%**; CyberGym **84.5%**; ExploitGym 33.7%; Toolathlon 58%; LifeVal 80.0%; τ²-bench 85.1% (AA)
- GDPval-AA **1,735 Elo** (OpenAI) / 1,710 (Google Gemini 3.8 Flash model-card table, GDPval v2) / 55.4% AA-normalized — harness variants labelled
- AA Agentic Index 50.5%; AA ITBench 56.2%; EnterpriseOps-Gym 42.9%; Tau3 Banking 44.3%; AnalystAgent 47.5%; ApprenticeBench 26% (NeoCognition); MazeBench 13% (ASCII)
- Safety/robustness: Gray Swan IPI ASR@15 **27.0%** (Google Gemini 4 Argon launch chart) — markedly worse than GPT-6 Sol's 10.1% and Opus 5's 4.8%; AA-IFBench 72.7%

Coding:

- SWE-bench (Vals) **96.2%**; SWE-bench Pro **64.6%** (OpenAI); DeepSWE **72.7%**; LiveCodeBench (Vals) 82.6%
- FrontierCode 1.1 Extended **60.6%** (Cognition/Devin); FrontierCode 2.0 27.6%; FrontierSWE v2 32.2% (Proximal)
- CursorBench 3.2 **67.2%** / CursorBench 4.0 **41.7%** (Cursor evals); VulcanBench v3 87.0% / CII v1 86.5%
- AA Coding Index 77.4%; AA Coding Agent Index v1.1 **80** at launch (+2.8 vs Claude Fable 5, per Presenc); AA-SciCode 57.1%; Bug Hunt 42.0 fixes; PostTrainBench v1.1 36.2%

Reasoning / knowledge / math:

- ARC-AGI-2 **92.5%**, ARC-AGI-1 96.5%, ARC-AGI-3 **7.8%** (ARC Prize semi-private results); GPQA Diamond **94.6%** (OpenAI) / 94.1% (AA) / 95.2% (Vals)
- FrontierMath legacy **89%**, v2 Tiers 1–3 89.0%, Tier 4 **83.0%**; HLE-Verified **54.5%** (Google model card) vs AA-HLE 49.5% (different HLE variant); MMLU-Pro (Vals) 89.1%
- AA Intelligence Index 58.9% (version not stated by the aggregator — AA versions are not comparable); AA-LCR 84.0%; CritPt 32.3%; BioBasicsBench 45.6%; GeneBench-Pro 28.7%; LABBench2 82.1%; HealthBench Pro 60.5% / Hard 33.1%
- Weak spot: AA-Omniscience Index 22.0 with **92.2% hallucination rate** (accuracy 59.4%) — heavy abstention failure on open-domain factual recall

Multimodal / long context:

- MMMU-Pro **83%** (OpenAI) / 83.4% (AA) / 84.6% with Python; ExtractBench **93.77%** and ParseBench 74.40% (LlamaIndex leaderboards, Nov 10 snapshot) — elite document extraction
- 1.05M window on every tier; the 272K surcharge threshold is the practical long-context limiter, not retrieval quality

### Normalized scores (1–100)

- **Tool use: 88/100.** Elite browsing (BrowseComp 92.2) and strong TB2.1 91.9/85.8, CyberGym 84.5, τ² 85.1, GDPval ~1,710–1,735; capped by TB4.1 38.5 / TB3.0 34.6 on harder terminal suites, OSWorld 62.6 mid-pack, and Gray Swan IPI 27.0% prompt-injection susceptibility.
- **Reasoning: 92/100.** ARC-AGI-2 92.5, GPQA-D 94.6–95.2, FrontierMath 89 (Tier 4 83), HLE-Verified 54.5 — frontier-class; capped by ARC-AGI-3 7.8, CritPt 32.3, and the 92.2% AA-Omniscience hallucination rate.
- **Context window: 88/100.** 1.05M/128K with strong AA-LCR 84.0; deducted for the >272K-token 2x-input/1.5x-output whole-request surcharge, which makes million-token agent runs materially expensive.
- **Multimodal: 80/100.** Image-in/text-out with MMMU-Pro 83–84.6 and best-in-class ExtractBench 93.77; no native audio/video input or media generation on this SKU.
- **Coding: 90/100.** SWE-bench Vals 96.2, DeepSWE 72.7, CursorBench 3.2 67.2, VulcanBench 87.0, AA Coding Agent Index 80 at launch; capped by SWE-Pro 64.6, CursorBench 4.0 41.7, FrontierCode 2.0 27.6 and TB4.1 38.5 versus the 5.5/6-generation leaders.
- **Cost efficiency: 55/100.** $4/$20 post-cut (from $5/$30) with 10% cache reads; promotional floor only through Nov 21, 2026, and the 272K surcharge doubles effective input cost on long agent workloads.
- **Overall Score: 87.6/100.** Mean of the five quality dims (88+92+88+80+90)/5 = 87.6. Best-fit: search-heavy deep research, math/science reasoning, and document-extraction pipelines at a mid-premium rate; for hardest terminal-agent and injection-resistant work the GPT-6 generation and Anthropic 5.5-class models lead.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (OpenAI launch/preview pages reached via search snippets and BenchLM's per-benchmark source attributions — direct openai.com fetch returned 403; corroborated by BenchLM's full profile, CellCog's dated rate card, and Presenc's release brief); scores are normalized 1–100 interpretations, not official vendor scores. GPT-5.6 Sol kept strictly separate from GPT-6 Sol ($2/$10, Sep 22, TB4.1 50.3, Gray Swan 10.1) and GPT-6.1 Sol. Same-benchmark conflicts labelled by harness, never averaged: TB2.1 91.9 (OpenAI) vs 85.8 (Vals); GDPval 1,735 (OpenAI) vs 1,710 (Google v2 table) vs 55.4% (AA-normalized); GPQA 94.6/94.1/95.2; HLE-Verified 54.5 vs AA-HLE 49.5. AA Intelligence Index 58.9 carries no version label from the aggregator and is not compared across AA versions. Pricing history (launch $5/$30 → Aug 21 cut $4/$20, promo floor Nov 21) and the 272K surcharge verified against two independent dated sources.
- Reference URLs:
  - [Introducing GPT-5.6 — OpenAI](https://openai.com/index/gpt-5-6/)
  - [Previewing GPT-5.6 Sol — OpenAI](https://openai.com/index/previewing-gpt-5-6-sol)
  - [GPT-5.6 Sol benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-6-sol)
  - [GPT-5.6 Sol vs GPT-6 Sol — BenchLM](https://benchlm.ai/compare/gpt-5-6-sol-vs-gpt-6-sol)
  - [GPT-5.6 pricing: Sol vs Terra vs Luna — CellCog](https://cellcog.ai/blog/gpt-5-6-pricing)
  - [GPT-5.6 release brief — Presenc AI](https://presenc.ai/research/gpt-5-6-release-brief)
  - [GPT-5.6 Sol — Vals AI](https://www.vals.ai/models/openai_gpt-5.6-sol)
  - [GPT-5.6 Sol semi-private results — ARC Prize](https://arcprize.org/results/openai-gpt-5-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.