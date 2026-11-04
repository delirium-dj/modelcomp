# Claude Mythos 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's verification-gated configuration of the Claude Fable 5 weights (same underlying model, no general-access safety classifiers), offered to vetted organizations for defensive cybersecurity and biology research via Project Glasswing / Cyber Verification Program. Restricted variant of Claude Fable 5 — capability is Fable-class, access is not.
- **Provider / access:** Anthropic Claude API (Messages API) `claude-mythos-5`; Amazon Bedrock `anthropic.claude-mythos-5`; Google Cloud (Google managed) `claude-mythos-5`; Microsoft Foundry `claude-mythos-5`. Verification required — not self-serve.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge cutoff Jan 2026; training data cutoff Jan 2026. Retirement not sooner than 2027-06-09.
- **IDs:** `anthropic/claude-mythos-5` (Claude API) and `anthropic.claude-mythos-5` (Bedrock). No Free ID exists on OpenCode Zen — access is verification-program only (no independent evaluator can even call the model, per OrcaRouter/Gradually).
- **Context window:** 1,048,576 (1M) total; 128,000 max output (official specs page, verified on platform.claude.com 2026-11-04). GraphWalks 1M variants were run on an internal setting (not reproducible via the public API, per the system card).
- **Modalities:** Text, image in; text out; reasoning yes (adaptive thinking, always on, default effort high — five effort levels low/medium/high/xhigh/max per the launch coverage); tool calls yes; JSON mode not explicitly documented on the model page.
- **Pricing (as of 2026-11-04):** $10.00 in / $50.00 out per 1M; 5m cache write $12.50, 1h cache write $20.00, cache read $1.00 per 1M; Batch API 50% discount. Paid only — no free tier (verification-gated); Anthropic retains business customer data 30 days on Mythos-class models (usage for malicious-activity management, not training).
- **Architecture:** Proprietary; parameter count and architecture undisclosed. Same weights as Claude Fable 5 (Anthropic system card, 2026-06-09): Fable 5 = general access with safeguards, Mythos 5 = unsafeguarded weights for verified partners.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic system card via BenchmarkList — rank 9/182, 96th percentile; field leader GLM-5.3 88.3%)
- OSWorld-Verified: **85%** (system card via BenchLM)
- BrowseComp: **88%** (system card via BenchLM)
- CyberGym: **83.8%** (system card via BenchLM)
- Harvey Legal Agent Benchmark: **16.9% all-pass / 92.0% criterion-pass** (BenchmarkList — rank 3/13 all-pass; leader O-5 23.6%)
- Toolathon: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found (τ²-Bench Telecom was measured on Claude Fable 5, not Mythos 5)
- GDPval-AA: no verified public score found for this ID — the system card's GDPval-AA top-score claim (Fable 5, ~+42 Elo over Opus 4.8, run by Artificial Analysis) is attributed to Fable 5, treated as provisional proxy only
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (system card via BenchmarkList/BenchLM — rank 7/464, 99th percentile)
- HLE: **64.5%** with tools (rank 4/466, 99th percentile); **59%** without tools (BenchLM, system card)
- CritPt: **28.6%** (system card, graded independently by Artificial Analysis via the CritPt grading API — ahead of GPT-5.5 27.1%, Opus 4.8 20.9%; BenchmarkList rank 6/31, 83rd percentile)
- SimpleQA Net Score: **0.49** (83rd percentile, rank 2/7) · 100Q-Hard Net Score: **0.42** (rank 1/7) (BenchmarkList)
- Artificial Analysis Intelligence Index: **not listed** — Mythos 5 never appears on any independent composite board (Artificial Analysis, BenchLM overall: unranked "no public overall score") because no evaluator can call the verification-gated model (OrcaRouter, Gradually, deeplearning.ai The Batch 2026-06-12)
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this ID (measured on Fable 5: top accuracy, 15th on non-hallucination)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **95.5%** (system card via BenchmarkList — rank 2/46, 98th percentile; leader O-5 96%)
- SWE-bench Pro: **80.3%** (rank 2/49, 98th percentile; leader Fable 5.1 81.2%; DataCamp: vs Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)
- SWE-bench Multilingual: **92.2%** (rank 1/46, 100th percentile)
- SWE-bench Multimodal: **54.9%** (rank 2/15; leader O-5 59.4%)
- ProgramBench (Anthropic harness): **93.0%** (rank 2/8, 86th percentile)
- FrontierCode (Diamond): **29.3%** at xhigh effort (system card via DataCamp — vs Opus 4.8 13.4%, GPT-5.5 5.7%)
- LiveCodeBench: no verified public score found for this ID
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- GraphWalks Parents 1M (F1): **97.5%** (rank 1/7, 100th percentile — system card via BenchmarkList/Klu; 256k variant 99.96%)
- GraphWalks BFS 1M (F1): **79.4%** (rank 2/10, 89th percentile; leader GPT-5.6 Sol 83.4% — system card via BenchmarkList/Klu; 256k variant 91.1%, rank 4/10)
- Note: the 1M runs used an internal setting — "not reproducible via the public API, as the problems exceed its 1M token limit" (system card)

Mathematics / other (context for reasoning score):

- USAMO 2026: **97.6%** (BenchLM) vs **99.8%** (BenchmarkList, rank 1/5) — conflicting system-card transcriptions, both cited; treat as ~97–100% band
- RiemannBench: **55.0%** (rank 2/4; leader O-5 79.0%)
- ArxivMath: **89.3%** with tools / **87.8%** without tools (rank 3/23)
- CharXiv: **93.5%** (88.9% without tools) — multimodal chart reasoning (BenchLM)

Conflicting-source notes (compared across sites):

1. **USAMO 2026** — BenchLM 97.6% vs BenchmarkList 99.8% (both sourced to the same system card): unresolved transcription conflict.
2. **Release date** — official docs and system card say 2026-06-09; LLMPodium lists "Aug 1, 2026" (disagrees with the vendor; vendor date used).
3. **Independent-evaluation asymmetry** — deeplearning.ai (2026-06-12) says "independent evaluations were not available for Claude Mythos 5"; OrcaRouter (2026-10) and Gradually confirm it is still absent from the Artificial Analysis Intelligence Index while sibling Fable 5 tops that index (64.9 with Opus 4.8 fallbacks). Benchmarks above are Anthropic first-party (system card) as mirrored by aggregators.
4. **Terminal-Bench 2.1 comparator gap** — DataCamp reports the Mythos-vs-Opus-4.8 gap as 88.0% vs 82.7%, BenchLM lists Opus 4.8 at 74.6%; Mythos's own 88.0% is consistent across all sources.
5. **LLMPodium category radar** (intelligence 79 / coding 66 / multimodal 40) is explicitly "approximated from category scores where direct measurements are missing" — provisional, not used for scoring here.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 2.1 88.0% (96th pct), OSWorld-Verified 85%, BrowseComp 88%, CyberGym 83.8% — near-field-leading agentic tool use with several top-rank rows; capped below 95 because Toolathon, GDPval-AA and Tau2/Tau3 have no verified public score for this exact gated ID.
- **Reasoning: 93/100.** GPQA Diamond 94.1% (99th pct), HLE 64.5% with tools (rank 4/466), USAMO ~97.6–99.8%, SimpleQA/100Q-Hard top-2; capped by mid-pack CritPt (rank 6/31) and a 24-point RiemannBench gap to the leader, plus the absence of any independent AA composite for this ID.
- **Context window: 96/100.** 1M total / 128K max output is the top published tier, backed by measured GraphWalks Parents 1M at 97.5% F1 (rank 1) and BFS 1M at 79.4% (rank 2); capped slightly because the 1M runs used a non-reproducible internal setting and BFS retrieval at 1M trails GPT-5.6 Sol.
- **Multimodal: 80/100.** Text+image input (text output only): SWE-bench Multimodal 54.9% (rank 2), CharXiv 93.5%, OSWorld-Verified 85% show strong vision-grounded work; capped by image-only input (no audio/video), text-only output, and no MMMU/GDP.pdf/Blueprint-Bench public numbers for this ID.
- **Coding: 97/100.** SWE-bench Verified 95.5%, SWE-bench Pro 80.3%, SWE-bench Multilingual 92.2% (#1), ProgramBench 93.0%, FrontierCode Diamond 29.3% (2.2× Opus 4.8) — top-2 across five coding evals; capped only by LiveCodeBench/SciCode/Vibe Code Bench having no verified public score for this ID and rank-2 (not rank-1) on Verified/Pro.
- **Cost efficiency: 40/100.** $10/$50 per 1M with $1.00 cache read is among the most expensive public list prices (Gradually price rank 91/94) and there is no free lane; cache and batch discounts help but a Fable-class run costs ~$7.63 per AA-index task (third-party tracker), ~4× the cheapest frontier lane.
- **Overall Score: 92/100.** Mean of the five non-cost dims (94+93+96+80+97)/5 = 92.0 — best fit: verified-partner defensive cyber/biology and hardest agentic-coding work where Fable-class capability is needed without general-access safeguards; expensive and verification-gated for everyone else.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-04
- Method: public internet research (official Anthropic platform docs + Fable 5/Mythos 5 system card, cross-checked against independent benchmark aggregators and press); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5 — Claude Platform Docs (official specs/pricing)](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Fable 5 & Claude Mythos 5 System Card — Anthropic (PDF)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchmarkList — Claude Mythos 5 benchmark scores](https://benchmarklist.com/models/anthropic-claude-mythos-5)
  - [BenchLM — Claude Mythos 5 benchmarks & coverage](https://benchlm.ai/models/claude-mythos-5)
  - [DataCamp — Claude Mythos 5 features & benchmarks](https://www.datacamp.com/blog/claude-mythos-5)
  - [deeplearning.ai The Batch — Anthropic releases Mythos 5 / Fable 5](https://www.deeplearning.ai/the-batch/behold-mythos)
  - [OrcaRouter — Claude Mythos 5 vs Gemini 4 Argon (independent index gap)](https://www.orcarouter.ai/blog/claude-mythos-5-vs-gemini-4-argon)
  - [Gradually — Claude Mythos 5 specifications & sources](https://www.gradually.ai/en/ai-models/claude-mythos-5)
  - [Klu — GraphWalks long-context results table](https://klu.ai/benchmarks/graphwalks)
