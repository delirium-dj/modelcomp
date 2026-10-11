# Claude Opus 4.6 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6`; API `claude-opus-4-6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February-2026 flagship — Terminal-Bench 2.0 SOTA and HLE leader at launch, GDPval-AA ~144 Elo above GPT-5.2, BrowseComp #1 (86.8% with a multi-agent harness), and the first Opus-class model with a 1M context window (beta at launch; GA since 2026-03-13 at flat $5/$25 with no >200K surcharge).
- **Provider / access:** Anthropic API, claude.ai, and major cloud platforms (Claude Platform, Azure AI Foundry, Google Cloud Vertex AI); extended/adaptive thinking, context compaction (beta), 128K output tokens; US-only inference at 1.1× token pricing. `noFreeId`.
- **Release / knowledge:** 2026-02-05 (1M context GA 2026-03-13); knowledge cutoff **May 2025** (training-data cutoff Aug 2025, per Anthropic's model docs).
- **IDs:** `anthropic/claude-opus-4.6` / `claude-opus-4-6`. NOTE: the repo `meta.json` is stale — it says "200K" context; the model has had a 1M-token window since launch (beta) and GA since 2026-03-13.
- **Context window:** 1,000,000 tokens (beta at launch, premium $10/$37.50 above 200K; GA 2026-03-13 — flat $5/$25 across the full window, no beta header, no request ceiling); 128K output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $5.00/$25.00 per 1M input/output, flat across the full 1M window; cached input **$0.50/M (10% of input)**, 5m cache write $6.25/M, 1h cache write $10/M, Batch API 50% off (Batch beta raises max output to 300K).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (Anthropic launch, 2026-02-05):

- Terminal-Bench 2.0: **highest score (SOTA at launch)** — exact figure not stated in the materials reviewed
- BrowseComp: **best of all models** — 86.8% with a multi-agent harness (web search, web fetch, programmatic tool calling, context compaction, max reasoning effort, up to 10M total tokens)
- GDPval-AA: **outperforms the next-best model (GPT-5.2) by ~144 Elo** and Opus 4.5 by 190 points
- Computer use / tool use: OSWorld-Verified **72.7%** (system card; vs Opus 4.5's 66.3% and Sonnet 4.5's 61.4%) and MCP Atlas **62.7%** (high effort, system card); τ²-bench **84.8%** (AA, independent); CyberGym 66.6%; AndroidWorld 62.0%; "industry-leading, often by a wide margin" (Anthropic)
- Chatbot Arena Elo — Coding: **1537**; Overall: **1497.3** (BenchGecko, 40 benchmarks, 48.1% average)

Reasoning / knowledge:

- Humanity's Last Exam: **53%** with tools (system card — led all frontier models at launch; web search, web fetch, code execution, programmatic tool calling, 50K–3M total tokens, max reasoning effort, adaptive thinking); **40%** without tools (Muse Spark comparison chart)
- GPQA Diamond: **91.3%** (system card) — clears the 90%+ frontier band; SuperGPQA 95%, MMLU-Pro 82%
- BigLaw Bench (Harvey): **90.2%**; METR task horizon: **12.0h** (Epoch AI); MASK: **96.3** (BenchGecko)
- AA Intelligence Index: **32 (Max) / 26 (non-reasoning, high)** — both `*`-estimated AA reads, unreliable; BenchLM/AgentTape carry 26.4 with AA-GPQA 84.0%, AA-HLE 19.1%, AA-Omniscience 2.4 (accuracy 45.8%, hallucination 80.1%), CritPt 3%, AIME 2025 25% — AA's own runs of Opus 4.6 sit far below the vendor figures

Coding:

- Terminal-Bench 2.0 SOTA (see above); 128K output tokens for larger-output tasks; "improves on its predecessor's coding skills… better code review and debugging" (Anthropic)
- SWE-bench Pro **53.4%**, LiveCodeBench Pro **70.7%**, SWE-Rebench **65.3%**, Vibe Code Bench v1.1 **57.57%** (vals.ai), FrontierCode 1.1 Main **26.9%** (Cognition), React Native Evals 84.1%, DeepSWE **28.0%** (rankedagi — a weak read; the system card publishes no DeepSWE figure); AA Coding Index **47.6** (AgentTape); Terminal-Bench 2.1 and SciCode remain unpublished for Opus 4.6 (AA's TB 2.1 board is now led by Fable 5.1 at 91.4%)

Long context:

- MRCR v2 (8-needle, 1M variant): **76%** at launch (vs Sonnet 4.5's 18.5%); **78.3% at 1M tokens at GA** — the highest published recall figure among frontier models at 1M (still ~1 in 5 multi-needle tasks failing); MRCR v2 at 128K: ~84.9% (similar to Gemini 3.1 Pro)
- GraphWalks BFS at 1M: published for Sonnet 4.6 (68.4%); Opus 4.6's own figure not stated in the materials reviewed
- AA-LCR v1.1: **67%** (AA's own retrieval run — a weaker independent read than the vendor's MRCR 78.3% at 1M; noted as a caveat)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 SOTA at launch (65.4%), BrowseComp #1 (86.8% with a multi-agent harness), a ~144-Elo GDPval-AA lead over GPT-5.2, and independent agentic rows — τ²-bench **84.8%** (AA), OSWorld-Verified **72.7%**, MCP Atlas 62.7%, CyberGym 66.6%, Claw-Eval #1 Pass³, METR horizon 12.0h — fill the gaps the 10-08 pass flagged; no TB 2.1 score keeps this under the current 88% frontier bar (Fable 5.1: 91.4%).
- **Reasoning: 86/100.** GPQA Diamond **91.3%** clears the 90%+ frontier band, HLE **53%** with tools (40% without) led the field at launch, and MASK 96.3, BigLaw Bench 90.2%, SuperGPQA 95% and a 12.0h METR horizon support the bump; AA's own runs (AA-HLE 19.1%, CritPt 3%, AIME 2025 25%) sit far below the vendor figures and cap the score.
- **Context window: 95/100.** 1M-token window (GA, flat-priced) with the highest published 1M recall among frontier models (MRCR v2 78.3%) — well under the ≥98%-at-512K+ bar for 100; AA-LCR 67% is a weaker independent read, noted as a caveat.
- **Multimodal: 70/100.** text/image (+file) in with text out — the +image-in band (60–70), at the top: OSWorld-Verified 72.7% is a strong vision-agent row; no MMMU or vision-suite figure, so the band is not exceeded.
- **Coding: 83/100.** Terminal-Bench 2.0 SOTA at launch and a Coding Arena Elo of 1537 support a strong score, now balanced by the captured mid-tier rows (SWE-bench Pro 53.4%, LiveCodeBench Pro 70.7%, Vibe Code Bench 57.6%, AA Coding Index 47.6, FrontierCode 26.9%) against SWE-bench Verified 80.8%; TB2.1, DeepSWE and SciCode remain unpublished.
- **Cost efficiency: 50/100.** $5/$25 per 1M interpolates to ~50 between the ~60 ($3/$15) and ~30 ($10/$50) references; the eliminated >200K premium (formerly $10/$37.50), 10%-of-input cache reads ($0.50/M) and half-rate Batch API are offsets, US-only inference (1.1×) a premium.
- **Overall Score: 84/100.** (86+86+95+70+83)/5 = 84.0 → 84 — a strong early-2026 flagship (TB2.0 SOTA, HLE lead, GDPval-AA +144 Elo, BrowseComp #1, 1M context at flat $5/$25) now behind the Opus 5-series, with unpublished TB2.1-era coding figures and the weak AA-run components as the gaps.

---

## Update 2026-10-08 (6-day re-research)

- **Terminal-Bench 2.0: 65.4%** (CodingFleet / dev.to cross-model table; system-card era) — fills the "exact figure not stated" gap; SWE-bench Verified **80.8%** (25-trial average; **81.42%** with the prompt modification per the launch post); BenchGecko: SWE-bench 78.7%, TB 66.4 ±7.4
- **Claw-Eval (arXiv 2604.06132, Peking University, 2026-04-07; 300 human-verified tasks, 3 trials, full-trajectory grading)** — fills the "Claw-Eval: no verified public score found" gap:
  - General: Score 80.6 / Pass@3 80.8 / Pass³ 70.8
  - Multi-turn: 79.6 / 89.5 / 68.4
  - **Overall: 80.4 / 82.4 / 70.4 — #1 Overall Pass³ of 14 models** (most reliable agent; Sonnet 4.6 leads Score at 81.4)
  - Multimodal: 54.7 / 52.5 / 24.8 (2nd overall; Video 15.4, Doc & Image 45.5, Code 25.9 — Video led jointly with Sonnet 4.6 at 15.4%)
  - Most resilient under error injection: Pass³ drops only 14.3pp at 0.6 error rate (vs Gemini 3.1 Pro −24.2pp), holding 56.5% Pass³ even at 0.6
  - Caveat: Opus 4.6 also served as the simulated-user agent and LLM judge for Claw-Eval's multi-turn tasks (temperature 0.7)
- Lineup context (2026-10-07): Haiku 5.5 launched; Sonnet 5.5 cache reads halved; Opus 4.6 pricing unchanged

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Score changes: Tool 84→86, Reasoning 85→86, Multimodal 65→70, Overall 82→84** — the system-card figures the file listed as "not stated" are now captured (GPQA 91.3%, HLE 53%/40%, OSWorld 72.7%, MCP Atlas 62.7%), plus a large independent/board set. Context 95 / Coding 83 / Cost 50 unchanged. New rows:

- **System card (Anthropic, via BenchLM):** GPQA Diamond **91.3%** (frontier band), HLE **53%** with tools / **40%** without, OSWorld-Verified **72.7%** (vs Opus 4.5's 66.3%), Terminal-Bench 2.0 **65.4%**, SWE-bench Verified **80.8%** (25-trial; 81.42% prompt-modified), BrowseComp **83.7–86.8%** (multi-agent harness), MCP Atlas **62.7%** (high), BigLaw Bench (Harvey) **90.2%**, MASK 96.3, GDPval-AA **1606 Elo** (+144 over GPT-5.2, +190 over Opus 4.5), BullshitBench v2 87%, Next.js Evals 58%; METR task horizon **12.0h** (Epoch AI, which also tracks Terminal-Bench at 79.8%).
- **Independent / board rows:** τ²-bench **84.8%** (AA), CyberGym 66.6%, DeepSearchQA 73.7%, Gert Labs 61.85%, JobBench 36.7%, ResearchClawBench 19.9%, AndroidWorld 62.0%, ApprenticeBench 5%, HealthBench Hard 14.8%, MedXpertQA 52.1%; SWE-bench Pro **53.4%**, LiveCodeBench Pro 70.7%, SWE-Rebench 65.3%, Vibe Code Bench v1.1 **57.57%** (vals.ai), FrontierCode 1.1 Main **26.9%** (Cognition), React Native Evals 84.1%, DeepSWE 28.0% (rankedagi — weak read; no system-card DeepSWE figure exists).
- **Artificial Analysis (current v4.3.2):** Intelligence Index **32 (Max) / 26 (non-reasoning, high)** — both `*`-estimated reads and unreliable; BenchLM/AgentTape carry **26.4** with components AA-GPQA 84.0%, AA-HLE 19.1%, AA-Omniscience 2.4 (accuracy 45.8%, hallucination 80.1%), AA-LCR 67%, AA Coding Index 47.6, AIME 2025 25%, CritPt 3%, IFBench 44.63% — AA's own runs sit far below the vendor figures (a caveat, not a contradiction: The Decoder noted Opus 4.6 topped AA's Index at its Feb-2026 launch with first-place finishes in agent work tasks, terminal coding and physics research). AA throughput: 41 t/s, TTFT 2.05s, blended $3.85/M.
- **Docs/pricing detail:** knowledge cutoff **May 2025** (training data Aug 2025); cache read **$0.50/M (10% of input)**, 5m cache write $6.25/M, 1h cache write $10/M, Batch API 50% off (Batch beta max output 300K); extended thinking deprecated in favor of adaptive, default effort `high`; current lineup — Fable 5.1 $10/$50, Opus 5.5 $4/$20, Opus 4.6 $5/$25, Sonnet 5.5 $2/$10, Haiku 5.5 from $0.10/$0.50 (all 1M/128K).
- **TB 2.1 context:** still unpublished for Opus 4.6; AA's TB 2.1 board is now led by Fable 5.1 (91.4% max), and the June-2026 cross-lab chart reads Opus 4.8 at 78.9 (Anthropic mini-SWE harness) / 82.7 (OpenAI-reported).
- **Score impact:** Tool 84→86 (τ²-bench 84.8% AA + OSWorld 72.7% + MCP Atlas 62.7% fill the independent-agentic gap; no TB 2.1 keeps it under the 88% frontier bar), Reasoning 85→86 (GPQA 91.3% frontier band + HLE 53% w/ tools captured; AA's weak runs cap it), Multimodal 65→70 (OSWorld-Verified 72.7% is a strong vision-agent row, top of the +image-in band; no MMMU/vision-suite figure, so the band is not exceeded), Overall 82→84. Context 95 stands (AA-LCR 67% noted as a weaker independent read vs MRCR 78.3% at 1M); Coding 83 stands (SWE-bench Pro 53.4%, AA Coding Index 47.6 and FrontierCode 26.9% balance SWE-bench Verified 80.8%); Cost 50 stands (10%-of-input cache reads and half-rate Batch are offsets to the $5/$25 list).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Anthropic Opus 4.6 launch + system card, Anthropic model docs, BenchLM, BenchGecko, AgentTape, The Decoder, ClaudeWorld, Epoch AI, rankedagi, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_6.md`, using the same headings.
