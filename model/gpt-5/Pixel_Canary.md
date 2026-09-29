# GPT-5 — findings by Pixel Canary

- Source: OpenAI (`openai/gpt-5`), OpenCode catalog `opencode/gpt-5`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (OpenAI's August 2025 flagship "system" — a router that pairs a fast base model with a deeper reasoning model behind one name; **no OpenCode Zen Free ID**, `noFreeId = true`)
- **Short description:** The model that reset the bar at launch on math and agentic coding (AIME2025 99.6, Aider-Polyglot #1 of 47) and is now a legacy tier: OpenAI has marked it **deprecated with scheduled retirement on 2026-12-11**, and it has been superseded five times over (GPT-5.1 → 5.2 → 5.4 → 5.6 → GPT-6).
- **Provider / access:** OpenAI API and Azure AI Foundry (`llmgateway-providers/openai/gpt-5`, `…/azure/gpt-5`), Databricks, Snowflake Cortex (reduced 272K window), poe / nano-gpt / nearai / kilo resellers, and OpenCode Zen; OpenAI-compatible Responses/Chat-Completions with tool calling, structured output and image input.
- **Release / knowledge:** released **2025-08-07** (models.dev `release_date` for every listing; some mirrors carry 2025-08-05); LLMLearner shows a knowledge cutoff field as empty — OpenAI never published one for this ID. **Scheduled retirement 2026-12-11.**
- **IDs:** `opencode/gpt-5` (repo), `openai/gpt-5` (vendor), plus effort-aliased profiles `gpt-5-high` / `gpt-5-medium` / `gpt-5-mini` / `gpt-5-nano`.
- **Context window:** **400,000 input / 128,000 max output** — identical in all 8 provider listings checked (models.dev), and matching this folder's `meta.json`. Note BenchLM still profiles the effort variant at "128K", and Snowflake's hosted copy is capped at 272K / 8,192.
- **Modalities:** Text + image in (files accepted via the Responses API); text out. Reasoning: yes — graded effort (`minimal`/`low`/`medium`/`high`) rather than a thinking on/off switch. Tool calling and structured output: yes.
- **Pricing (as of 2026-09-29):** OpenAI/Azure **$1.25 / 1M input, $10.00 / 1M output, $0.125 cached input**, image input billed at the text input rate ($0.625 in batch); blended 4:1 ≈ **$3.00 / 1M**. OpenCode Zen resells at **$1.07 / $8.50** with $0.107 cache reads (verified in models.dev `opencode/gpt-5`).
- **Architecture:** proprietary, undisclosed parameters; OpenAI describes it as a router system rather than a single checkpoint, and no weights are published.

### Raw benchmarks found

LLMLearner carries **43 published results** for this exact ID (best-in-class on 6 of 10 categories); BenchLM profiles the effort variants (`gpt-5-medium` composite **44.87/100, #107 / 512**, updated 2026-09-28) rather than a bare `gpt-5` row.

Agentic / tool use:

- τ²-Bench: **80.0%** (#15 of 40); τ²-Bench Telecom **95.8%** (#18/36)
- τ³-Banking: **22.1%** (#46/106); SAGE **43.7** (#35/55) — both collapse against 2026 service-work agents
- METR Time Horizons v1.1: **203** (#8) — the 50% time-horizon metric at launch was ~tens of minutes
- BrowseComp: **54.9** (#36/51); Creative Writing arena 1627 (#39/110); Text Arena Coding 1395 (#25/28)

Coding:

- Aider-Polyglot: **88.0** — **#1 of 47** (the one leaderboard it still tops)
- SWE-bench Verified: **72.8%** (#44/101); SWE-Bench Pro (public): **36.3%** (#53/56, near-last)
- LiveCodeBench: **84.6%** (#26/119); CodeClash **1360 Elo** (#2/8); IOI 2025 (Vals v1) **29** (#2/8), IOI 2024 **11** (#4/9)
- Terminal-Bench: **43.8** (#7/27 on the original small board) but Terminal Bench Hard **37.9** (#36/149); Vibe Code Bench v1.1 **20.1** (#46/58); GSO **6.9** (#13/18); WeirdML v2 **60.7** (#20/39)

Reasoning / knowledge:

- AIME2025: **99.6** (#9/86); AA MATH-500 **99.1%**; IMO-ProofBench **59.0** (#2/15)
- AA-GPQA Diamond: **84.2%**; AA-HLE **25.4%**; CritPt **0.0%**; SimpleBench **56.7** (#43/93); ECI **150** (#47/167)
- ARC-AGI-1 **65.7** (#33/64); ARC-AGI-2 **9.9** (#40/58)
- Artificial Analysis Intelligence Index **22.9**; AA-Omniscience Accuracy **39.5%** vs Hallucination Rate **83.2%** (Index **−10.9**); AA-IFBench **70.6%**

Long context:

- AA-LCR: **76.0%**; Fiction.liveBench **97.2** (#1 of 16 long-reasoning); EBR-bench **12.7** (#16/23)
- MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

Multimodal:

- MMMU: **84.2%** (#5/61); GeoBench ACW **81.0** (#5/17); VPCT **66.0** (#4/18); AA-MMMU-Pro **74.3%**; Design Arena Website Elo **1192**
- MedCode **49.6** (#13/54); MedScribe **83.7** (#28/56)
- MedCode **49.6** (#13/54); MedScribe **83.7** (#28/56)
- Video / audio: none — input surface is text + image only

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench 80.0% (#15/40) and τ²-Bench Telecom 95.8% (#18/36) held up well for a 2025 model, and METR Time Horizons 203 (#8) was frontier at launch, but it falls off modern service-agent work: τ³-Banking 22.1% (#46/106) and SAGE 43.7 (#35/55) are half the score of current agentic specialists, and BrowseComp 54.9 (#36/51) is mediocre research browsing.
- **Reasoning: 60/100.** Competition math is still elite — AIME2025 99.6 (#9/86), AA MATH-500 99.1%, IMO-ProofBench 59.0 (#2/15) — yet on the 2026 reasoning boards it is a mid-table legacy model: AA-HLE 25.4%, CritPt 0.0%, ARC-AGI-2 9.9 (#40/58), AA Intelligence Index 22.9, and an AA-Omniscience profile of 39.5% accuracy against an **83.2% hallucination rate** (Index −10.9).
- **Context window: 70/100.** 400K input / 128K output verified identical across 8 provider listings, with AA-LCR 76.0% and a #1-of-16 Fiction.liveBench (97.2) showing real long-reasoning depth; capped because EBR-bench memory persistence is only 12.7 (#16/23), no MRCRv2/RULER retrieval-depth curve exists, and hosts diverge hard (BenchLM profiles the variant at 128K, Snowflake caps at 272K/8K).
- **Multimodal: 62/100.** Text + image only, and within that it is respectable — MMMU 84.2% (#5/61), GeoBench ACW 81.0 (#5/17), VPCT 66.0 (#4/18), AA-MMMU-Pro 74.3% — but there is no video, no audio, no PDF path, and Design Arena 1192 now trails MiMo-V2.6-Pro (1325) and Grok 4.6 (1299).
- **Coding: 66/100.** Aider-Polyglot 88.0 is still **#1 of 47** and LiveCodeBench 84.6% (#26/119) plus CodeClash 1360 Elo (#2/8) are strong single-shot generation; the agentic end is where it fails today — SWE-bench Verified 72.8% (#44/101), SWE-Bench Pro 36.3% (**#53 of 56**), Vibe Code Bench 20.1 (#46/58), Terminal Bench Hard 37.9 (#36/149).
- **Cost efficiency: 55/100.** $1.25 / $10.00 per 1M ($0.125 cached, blended ≈ $3.00) with OpenCode Zen at $1.07 / $8.50 was reasonable in 2025, but it is ~3.5× MiMo-V2.6-Pro's blended cost and ~10× DeepSeek V4.1-Flash's at a far lower agentic score; there is no free tier for this ID and the model is deprecated.
- **Overall Score: 64/100.** (62 + 60 + 70 + 62 + 66) / 5 = 64.0 — keep it only where Aider-style diff editing or competition math is the task; for anything agentic, retire it to GPT-5.4/5.6 or a modern open-weight tier before the 2026-12-11 shutdown.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (LLMLearner sourced snapshot of 43 published results for `gpt-5` incl. the deprecation/retirement record, BenchLM effort-variant profiles `gpt-5-medium` refreshed 2026-09-28, models.dev pricing/limit index for `openai/gpt-5` and `opencode/gpt-5`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

