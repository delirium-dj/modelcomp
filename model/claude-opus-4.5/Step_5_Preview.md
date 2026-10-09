# Claude Opus 4.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-4-5-20251101`, released 2025-11-24)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (2025-11-24; the first model to break 80% on SWE-bench Verified)
- **Short description:** Anthropic's November-2025 flagship — "the best model in the world for coding, agents, and computer use" at launch, delivered with a 67% price cut ($5/$25 vs Opus 4.1's $15/$75) and a new effort/verbosity parameter that made efficiency a first-class dial: at medium effort it matches Sonnet 4.5's best SWE-bench Verified score using **76% fewer output tokens**; at high effort it beats Sonnet 4.5 by 4.3 points using 48% fewer. It set records across the board (SWE-V 80.9%, OSWorld 66.3%, Terminal-Bench Hard 44% — the highest ever recorded at the time, ARC-AGI-2 37.6% — 2× GPT-5.1), led 7 of 8 languages on SWE-bench Multilingual, and scored higher than any human candidate on Anthropic's internal performance-engineering exam. Amp measured $1.30/thread vs Sonnet 4.5's $1.83 — cheaper per task despite the higher rate. Legacy tier in 2026 (retires 2026-11-24) behind Opus 4.6/4.7/4.8/5/5.5, but the reference point for "Opus-class efficiency."
- **Provider / access:** Claude API, Bedrock, Google Cloud Vertex, Microsoft Foundry, GitHub Copilot preview; Claude apps/Claude Code.
- **Release:** 2025-11-24; reliable knowledge cutoff May 2025; retires 2026-11-24.
- **Context window:** 200K tokens; max output 64K.
- **Modalities:** Text and image in → text out; Plan Mode, Claude for Chrome/Excel, long-conversation auto-summarization.
- **Pricing (as of 2026-10-09):** $5/M input, $25/M output, $0.50 cache reads (90% off), $6.25 cache writes; batch $2.50/$12.50.
- **Speed:** 41–60 tps across providers.

### Raw benchmarks found

Anthropic launch (64K thinking budget, 200K context, default effort high, 5 trials):

- SWE-bench Verified: **80.9%** — first model past 80% (GPT-5.1-Codex-Max 77.9, Sonnet 4.5 77.2, GPT-5.1 76.3, Gemini 3 Pro 76.2)
- SWE-bench Pro: **52.0%**; SWE-bench Multilingual: **76.2%** (leads 7/8 languages)
- Terminal-Bench 2.0: **59.3%** (GPT-5.1-Codex-Max 58.1); Terminal-Bench Hard: **44.0%** (highest ever recorded at launch)
- OSWorld: **66.3%** (SOTA computer use); WebArena: 65.3%
- τ²-bench Retail: **88.9%**; τ²-bench Telecom: **98.2%**; MCP Atlas: 62.3%
- GPQA Diamond: **87.0%**; MMLU: 90.8%; MMMU: 80.7%; AIME 2025: **100%**; ARC-AGI-2: **37.6%** (2× GPT-5.1's 17.6%)
- Aider Polyglot: +10.6 pts over Sonnet 4.5; BrowseComp-Plus: significant jump; Vending-Bench: +29% over Sonnet 4.5
- Efficiency: medium effort = Sonnet 4.5's best SWE-V at 76% fewer output tokens; high effort = +4.3 pts at 48% fewer tokens

Third-party:

- Artificial Analysis: Intelligence Index **29.1** (reasoning); Math Index 91.3; GPQA 86.6%; HLE 30.1%; IFBench 58.0%; τ²-Telecom 89.5%; AA-LCR 77.3%; CritPt 4.6%; LiveCodeBench 87.1%; TB Hard 47.0%; MMLU-Pro 89.5%; AA-Omniscience 46.6% accuracy / 39.0% non-hallucination; AIME 91.3%
- Vals AI: MMMU-Pro 81.1%; MedQA 93.2%; MedScribe 83.2%; LegalBench 82.8%; MGSM 94.8%; TB 2.0 58.4%; IOI 23.6%
- Epoch AI: GPQA 86.0%; OTIS Mock AIME 86.1%; SimpleQA Verified 45.7%; FrontierMath v1 30.2%
- METR: task time-horizon 4.9 h; The AI Rankings/llm-stats composites (LLM Stats 38.0, #78)
- Design Arena: 1,180–1,253 Elo across code/3D/dataviz/SVG categories; Agents Arena ~1,152–1,191

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 66.3%, τ²-Telecom 98.2%/Retail 88.9%, TB 2.0 59.3%, MCP Atlas 62.3% and a 4.9-hour METR task horizon are frontier-adjacent agentic execution; MCP Atlas and TB (59.3%) sit below the very top band, and no GDPval number is published.
- **Reasoning: 84/100.** GPQA 86.6–87.0%, AIME 91.3–100%, ARC-AGI-2 37.6% (2× GPT-5.1), MMLU-Pro 89.5% and Math Index 91.3 are upper-band; HLE 30.1%, CritPt 4.6% and the AA Intelligence Index of 29.1 keep it below the absolute frontier trio.
- **Context window: 76/100.** 200K is the 200K–500K band (65–84) with AA-LCR 77.3% — solid retrieval, but a quarter of the 1M frontier norm (the 1M beta belonged to Sonnet, not Opus).
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU 80.7–81.1% (Anthropic's best vision at the time); no video/audio input and no non-text output.
- **Coding: 86/100.** SWE-bench Verified 80.9% (first to break 80%), SWE-Multilingual 76.2% (7/8 languages), TB Hard 44–47%, LCB 87.1%, Aider Polyglot +10.6 over Sonnet and an above-any-human score on its performance exam — the frontier coding standard of late 2025, with SWE-Pro 52.0% the weak row.
- **Cost efficiency: 60/100.** $5/$25 with $0.50 cache reads maps to the methodology's $3/$15 ≈ 60 point — still premium-priced; the efficiency story (76% fewer tokens at medium effort, $1.30/thread vs Sonnet's $1.83) is what justifies it.
- **Overall Score: 79/100.** Best-fit recommendation: the late-2025 ceiling for agentic coding and computer use — SWE-V 80.9% and OSWorld 66.3% with a real efficiency dial; a legacy tier in 2026 (superseded by Opus 4.6/4.8/5), still a strong choice when its $5/$25 rate fits the budget.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic launch post + pricing docs, Artificial Analysis and Vals AI via OpenRouter, modelbenchmark.io, The AI Rankings, Amp cost analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Opus_5.md`, using the same headings.
