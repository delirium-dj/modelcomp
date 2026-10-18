# Claude Opus 4.6 — findings by Space Bunny

- Source: Anthropic (`claude-opus-4-6`; adaptive reasoning, high/max configurations)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 87.2).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's frontier model for careful planning, long-running agentic coding, large codebases, research, and professional knowledge work. Now a legacy-tier model in Anthropic's own lineup, with four newer Claude generations (Opus 4.7, Opus 4.8, Opus 5, Opus 5.5) and a June-2026 knowledge cutoff on those in place of its May-2025 one.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-6`); claude.ai; Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Adaptive thinking; extended thinking (`budget_tokens`) is deprecated on this model.
- **Release / knowledge:** announced 2026-02-05. **Newly published and now verified: reliable knowledge cutoff May 2025, training-data cutoff August 2025** (Anthropic platform docs model card and Claude Help Center training-data article; Transparency Hub gives the same May 2025 knowledge cutoff). This is the single most consequential new fact of this pass — see Reasoning.
- **IDs:** `claude-opus-4-6` (dateless pinned snapshot from the 4.6 generation onward); effort configurations `high` (default) / `max`.
- **Context window:** 1M tokens (in beta); **max output 128K tokens** — newly confirmed in the Anthropic capability table; up to 300K output on the Message Batches API under the `output-300k-2026-03-24` beta header. Prompt-cache reads are 10% of base input price; Batch API is 50% off.
- **Modalities:** text and image in; text out. Vision, tool use, adaptive thinking, computer use, document/spreadsheet work. No audio or video input.
- **Pricing (verified 2026-10-17):** **$5 per 1M input / $25 per 1M output** — unchanged. Blended 3:1 ≈ $10.00 (Sophon/OpenRouter, via Artificial Analysis).
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

Lifecycle — **record, do not average** (a genuine three-way conflict):

- Anthropic's `model-deprecations` page lists `claude-opus-4-6` as **Active**, "not sooner than February 5, 2027" (no deprecation date). The model overview page's capability table says **Status: Active (legacy)**, and its header says "Legacy… you should consider migrating to Claude Opus 5.5". Anthropic's own deprecation vocabulary defines Legacy as "will no longer receive updates and may be deprecated in the future" — so Anthropic's three pages are internally inconsistent about whether this is Active or Legacy.
- Artificial Analysis banners both its Opus 4.6 pages **"This model is deprecated"** and suggests Opus 4.7.
- **Resolution used here: Anthropic wins.** AA is an aggregator restating a lifecycle it does not control; Anthropic publishes both the status vocabulary and the dates. Recorded because the conflict is real, not because it changes a score — **lifecycle status is not scored directly.**
- A live-probe note (Cyberine, 2026-08-25) records that AA's suggestion is itself out of date: Anthropic now recommends Opus 5.5, not 4.7.

Knowledge cutoffs (new, Anthropic primary):

- Reliable knowledge cutoff **May 2025**; training data cutoff **August 2025** (Anthropic platform docs; Claude Help Center; Transparency Hub).
- The comparison table on the same docs page shows Opus 4.7/4.8 at Jan 2026 and Opus 5/5.5/Sonnet 5.5 at Jun 2026 — i.e. **Opus 4.6 is five to thirteen months of training data behind its own successors.** This converts the hard-reasoning failures below from a harness mystery into a stated property of the model.

BenchLM ranked independent lanes (new, checked 2026-10-17):

- Agentic **45.7 (#57 of 128)** — Supported
- Coding **46.1 (#52 of 150)** — Supported
- Knowledge **58.9 (#52 of 184)** — **Estimated**, and BenchLM marks the comparison "Directional only"
- Overall **62.39 (#47 of 954)** — a *different* page (BenchLM's own composite, not a lane). Not used for scoring; recorded because the three lanes and this overall disagree in character.
- BenchLM's coding lane is **not** a contradiction of the vendor coding table: Opus 5 scores 70.7 (#9) on the same board against Opus 4.6's 46.1 (#52).

Agent / tool use (mostly carried forward; independently ranked now):

- SWE-bench Verified **81.42%** with prompt modification, averaged over 25 trials (Anthropic); system-card value **80.8%**
- MCP Atlas **62.7%** at high effort (max effort for the reported eval); BrowseComp **86.8%** with a multi-agent harness, **83.7%** single-agent, **84.0%** (LLMReference)
- Terminal-Bench 2.0 **65.4%** (Anthropic system card); AA Terminal-Bench Hard **48.5%** (Artificial Analysis)
- τ²-bench **84.8%** (AA; Sophon lists a best-of **92.1%**); Claw-Eval **70.4%**; OSWorld-Verified **72.7%**; CyberGym **66.6%**; DeepSearchQA **73.7%**
- Weak tail unchanged: ResearchClawBench **19.9%**, JobBench **36.7%**, ApprenticeBench **5%**; AA-IFBench **44.6%**
- GDPval-AA: Anthropic claims ~+144 Elo over GPT-5.2 and ~+190 over Opus 4.5; absolute Elo not published in the announcement
- Toolathon, SWE Atlas, Tau3, Claw-Eval re-runs: **no new exact value found**

Reasoning / knowledge:

- Vendor: GPQA Diamond **91.3%**, HLE with tools **53.0%** (53.1% corrected), HLE without tools **40%**, MMLU-Pro **82%** (Qwen table) or **89.1%** (Arcee table), SuperGPQA **95%**
- Independent: AA-GPQA Diamond **84.0%**; AA-HLE **19.1%** against the vendor's 53.0%; AA-Omniscience Index **2.4%**, Accuracy **45.8%**, Hallucination Rate **80.1%**; AA-LCR **67.0%**
- Epoch AI (via modelbenchmark.io), all independent, all recent — newly surfaced this pass:
  - **SimpleQA Verified 47.0% ±1.6** (max, 2026-08-27) — direct, current measurement of the May-2025-cutoff problem
  - **EBR-bench 12.7%** (2026-06-29); **FrontierMath Tier 4 v2 26.8% ±7.0** (max, 2026-06-11) — note the older Tier-4 (2025-07-01 cut) reading is only **11.4%**; both are recorded, they are different slices
  - FrontierMath v1 **65.3% ±10.0**; FrontierMath Tiers 1–3 v2 **66.0% ±2.8**; OTIS Mock AIME 94.4%; GPQA diamond **90.5% ±1.7** (32k) / 88.4% (max)
  - **Chess Puzzles 21.0% ±4.1**, **Furniture Assembly 28.3% ±5.9**, **Mystery Game Puzzles 25.0% ±4.4**, LiveBench **75.1**
  - Effort sensitivity is large: chess puzzles span **10.0–21.0%** across low/64k/120k/max settings.
- CritPt **2.8%** (AA) — still the lowest reading in this comparison
- **Not used:** BenchLM's own 62.39 overall, and its knowledge lane (Estimated). Both are internally flagged as low-confidence, and its lanes and its overall disagree about the same model.

Coding:

- SWE-bench Pro **53.4%** — unchanged from the first pass, but the successor comparison is now visible: **Claude Opus 5 79.2%**, **Claude Fable 5 80.3%**, Opus 4.8 69.2%, Qwen3.8-Max 67.7% (LLMReference peer bars). The first pass's framing of "Opus 5 at 80.3%" was wrong; **80.3% is Fable 5, Opus 5 is 79.2%.** Either way the gap to the next Opus generation is ~26 points.
- SWE-Rebench **65.3%**; LiveCodeBench Pro **70.7%**; Vibe Code Bench **57.57%** (Vals AI v1.1, #50 of 112); React Native Evals **84.1%**
- Independent Epoch/LLMReference: LiveCodeBench **70.2%**; HumanEval **95.0%** (rank 3 of 99); Aider Polyglot **72.0%**; AIME 2025 **94.2%**; MathVista **74.8%**
- Still low: **FrontierCode 1.1 Main 26.9%** (Cognition)
- Still absent: DeepSWE, SciCode, SWE-bench Verified under a third-party harness (SciCode appears only as a "Coming soon" cell on BenchLM's comparison page)

Sources consulted (2026-10-17): [Anthropic Opus 4.6 model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview), [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [Anthropic Opus 4.6 announcement](https://www.anthropic.com/news/claude-opus-4-6), [Anthropic Transparency Hub](https://www.anthropic.com/transparency), [Claude Help Center training-data cutoffs](https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data), [Artificial Analysis Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6), [BenchLM Opus 4.6](https://benchlm.ai/models/claude-opus-4-6), [BenchLM coding / agentic / knowledge boards](https://benchlm.ai/coding), [LLMReference Opus 4.6](https://www.llmreference.com/model/claude-opus-4-6), [modelbenchmark.io Opus 4.6 (Epoch AI rows)](https://modelbenchmark.io/models/claude-opus-4-6).

### Normalized scores (1–100)

- **Tool use: 92/100.** Held. Strong and independently ranked: SWE-bench Verified 80.8–81.42%, τ²-bench 84.8%, BrowseComp 83.7%, OSWorld-Verified 72.7%, Claw-Eval 70.4%, Terminal-Bench 2.0 65.4%. BenchLM's agentic lane (45.7, #57/128) is a mid-table *rank* against far newer models, not a quality downgrade, and it is consistent with the near-floor tail already priced in (ApprenticeBench 5%, ResearchClawBench 19.9%, AA-IFBench 44.6%, AA Terminal-Bench Hard 48.5%). Nothing new was found that moves this either way.
- **Reasoning: 82/100.** Cut 2 from 84. The vendor framing (GPQA 91.3, SuperGPQA 95, HLE-with-tools 53.0) is now contradicted by a documented cause rather than an unexplained gap: **reliable knowledge cutoff May 2025, training data August 2025** — five to thirteen months behind Opus 4.7/4.8/5/5.5. Newly measured independent evidence agrees: **SimpleQA Verified 47.0%** (knowledge freshness, directly attributable), **EBR-bench 12.7%**, **FrontierMath Tier 4 v2 26.8%** (and 11.4% on the earlier slice), **Chess Puzzles 21.0%**, **Furniture Assembly 28.3%**, alongside the already-recorded CritPt 2.8% and AA-HLE 19.1%. Held well above the mid band (55–65) because broad knowledge is genuinely strong (GPQA 84–91.3, MMLU-Pro 82–89.1, AA-LCR 67.0, HLE 53.0 with tools).
- **Context window: 98/100.** Held, now with the missing max-output figure filled in (**128K**; 300K on the batch beta header) and Anthropic's own MRCR v2 8-needle @1M result at **76%** (Sonnet 4.5: 18.5%) added alongside independent AA-LCR 67.0%. The 1M tier is verified and now evidenced rather than merely asserted; 98 not 100 because retrieval at 1M is strong but not ≥98%.
- **Multimodal: 70/100.** Held. MMMU-Pro 77.3% (vendor) / 72.5% (AA), ScreenSpot Pro 83.1%, MedXpertQA MM 64.8%, Design Arena Website 1298 Elo, ERQA 51.6%. No new independent multimodal measurement was found this pass, and the cap is structural: text + image in, text out, no audio or video.
- **Coding: 89/100.** Cut 3 from 92 on newly visible evidence. The first pass already carried SWE-bench Pro **53.4%**; what is new is the successor gap — **Claude Opus 5 79.2%, Fable 5 80.3%, Opus 4.8 69.2%** on the same peer bars — and BenchLM's independent coding lane at **46.1, #52 of 150** against Opus 5's 70.7 at #9. A 26-point drop to the next Opus generation on the hardest professional-SWE benchmark is a real capability ceiling that the first pass's framing underweighted. Offsets: LiveCodeBench Pro 70.7%, SWE-bench Verified 80.8–81.42%, SWE-Rebench 65.3%, Vibe Code Bench 57.57%, React Native 84.1%, HumanEval 95.0%. Capped further by FrontierCode 1.1 at 26.9% and the total absence of DeepSWE and SciCode.
- **Cost efficiency: 50/100.** Held. $5/$25 is expensive against the field's median of $2/$10 (AA). Mitigants that do not move it much: 10% cache reads, 50% Batch discount, and effort controls — offset by AA's measured **$2,486 to run one full Intelligence Index evaluation** (the second-most expensive of any model measured at the time) and 58M output tokens on that run, roughly 2× Opus 4.5.
- **Overall Score: 86.2/100.** (92 + 82 + 98 + 70 + 89) / 5 = **86.2**, cost excluded. Down from 87.2. Best fit unchanged: demanding coding agents, research and professional knowledge work at 1M context where quality outweighs cost and a May-2025 knowledge cutoff is tolerable — but it is now clearly a legacy-tier buy, and on anything post-May-2025 Opus 4.8/5/5.5 is strictly better for the same or lower price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public web research of Anthropic's own model documentation, deprecation policy, announcement, system-card footnotes, Transparency Hub and training-data help article; Artificial Analysis (including its Opus 4.6 launch article); BenchLM's ranked agentic/coding/knowledge lanes; Epoch AI rows republished by modelbenchmark.io; Vals AI; LLMReference peer bars. Every benchmark row is labelled vendor-reported or independent; aggregator restatements of vendor numbers are flagged where found. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- What changed this pass: Overall 87.2 → 86.2 (Reasoning 84 → 82, Coding 92 → 89). The two cuts are driven by evidence that did not exist in the first pass — the now-published May-2025 / Aug-2025 knowledge cutoffs plus four new independent Epoch AI rows (SimpleQA Verified 47.0%, EBR-bench 12.7%, FrontierMath Tier 4 v2 26.8%, Chess Puzzles 21.0%), and the newly-visible 26-point SWE-bench Pro gap to Opus 5 / Fable 5. Cost, Context, Multimodal and Tool use were held unchanged.
- Leads from the earlier lost pass: **verified** (May-2025/Aug-2025 cutoffs; BenchLM lanes 45.7 #57/128, 46.1 #52/150, 58.9 #52/184; SWE-bench Pro 53.4%; max output 128K; AA Index 26 marked *Estimated*; the AA-vs-Anthropic lifecycle conflict). **Corrected:** the 80.3% successor figure belongs to Claude Fable 5, not Opus 5 (79.2%).
- Still unmeasured: DeepSWE, SciCode, LiveCodeBench under any third-party harness, SWE-bench Verified under a third-party harness, Tau3, Toolathon, SWE Atlas, any audio/video capability, MMMU-Pro under an independent harness.
- Re-run when: (1) Anthropic's deprecation page gives Opus 4.6 a real deprecation date or moves it to Retired; (2) Artificial Analysis publishes a measured (non-estimated) Intelligence Index for either the high or max configuration; (3) a same-harness DeepSWE or SciCode run appears; (4) BenchLM re-labels the knowledge lane from Estimated; (5) the AA/Anthropic lifecycle disagreement changes sides.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.