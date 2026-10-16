# GPT-5.4 Pro — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.4-pro`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.4 Pro
- **Short description:** Higher-compute GPT-5.4 reasoning route for demanding research; exact Pro evidence is much narrower than standard GPT-5.4 coverage [S1,S2].
- **Provider / access:** Responses API only; background mode recommended for minute-long requests. Chat Completions and Batch are listed unsupported, despite a generic Batch queue-limit table elsewhere on the same card [S1].
- **Release / knowledge:** Snapshot March 5, 2026; August 31, 2025 cutoff [S1].
- **IDs:** `gpt-5.4-pro`, `gpt-5.4-pro-2026-03-05`; no verified Free ID.
- **Context window:** 1,050,000 total, output 128,000 [S1].
- **Modalities:** Text/image input, text output; function calls, search/files, MCP, computer use/apply_patch; image generation is external tooling. Effort medium default/high/xhigh [S1].
- **Pricing (as of 2026-10-16):** $30 input/$180 output per million, no cache discount listed. Above 272K input, full-session input 2× and output 1.5×; regional +10% [S1].
- **Architecture:** Proprietary; size undisclosed in inspected material.

### Raw benchmarks found
Agent / tool use:
- Exact-Pro vendor comparative table: BrowseComp **89.3%**, GDPval **82.0% wins/ties**, investment-banking internal **83.6%** [S2]. Not AA Elo or independently rerun professional-work success.
- TB2.1/TB4, Tau3/Tau2, MCP-Atlas, Claw-Eval/ClawProBench: no verified exact-Pro score found. Standard-5.4 terminal results are excluded.

Reasoning / knowledge:
- Primary comparative table: GPQA **94.4%**, HLE **42.7% no tools /58.7% tools**, FrontierMath legacy **50.0% tiers1–3 /38.0% tier4**, GeneBench **25.6%**, ARC1 **94.5% /ARC2 83.3%**, xhigh research setup [S2].
- BenchLM current aggregate **68.59/100, #24/954**, coverage **12/639** partial; CritPt **30%**, FrontierMath v2 **82.456% tiers1–3 /58.537% tier4** are secondary-attributed snapshots, not directly reverified evaluator rows [S3]. Legacy/v2 not averaged.
- Exact current AA Intelligence Index, LCR/MLCR and Omniscience: no verified figure found.

Coding:
- SWE-Pro/Verified, LiveCodeBench, DeepSWE, SciCode, Vibe: no exact-Pro numerical public score verified in inspected sources. Code-assisted scientific reasoning and apply_patch support a provisional coding interpretation, not a measured repository-fixing score [S1,S2].

Long context / multimodal:
- Verified million-token capacity, no exact-Pro MRCR/RULER retrieval result found [S1]. Standard-5.4 long-context and MMMU rows are not transferred. Image input documented, no exact-Pro vision percentage verified [S1,S2].

### Evidence comparison and research trail
Three fresh DuckDuckGo queries: `GPT-5.4 Pro official model`, `GPT-5.4 Pro independent benchmark`, `GPT-5.4 Pro review pricing limitations`; all challenged. Direct exact docs and BenchLM inspected; guessed Vals exact-Pro route 404. The original GPT-5.5 launch comparative table was directly read earlier in this session and has a separate 5.4 Pro column [S2]. Missing Vals route does not prove no other route exists. BenchLM largely aggregates vendor/evaluator results rather than independently replicating them. Pro does not mean best on every task: vendor 5.5 Pro HLE tools 57.2% is below 5.4 Pro 58.7%, while other research dimensions improve [S2]. API Batch contradiction retained rather than assuming support; high expense and missing exact coding/vision reruns lower deployment confidence [S1].

### Normalized scores (1–100)
- **Tool use: 87/100.** Good exact-Pro browsing/professional results, capped by missing terminal/workflow reruns [S1,S2].
- **Reasoning: 93/100.** HLE/GPQA/math and exact-Pro ARC support high reasoning, capped by sparse current independent coverage [S2,S3].
- **Context window: 95/100.** Official 1.05M, no verified full-window retrieval bonus [S1].
- **Multimodal: 70/100.** Verified image understanding/tools; native audio/video absent and Pro vision scores missing [S1].
- **Coding: 79/100.** Provisional from code-assisted research and developer tools, capped by absent exact-Pro engineering scores [S1,S2].
- **Cost efficiency: 8/100.** $30/$180 and long-context surcharge without a listed cache discount are exceptionally expensive [S1].
- **Overall Score: 85/100.** (87 + 93 + 95 + 70 + 79) / 5 = 84.8 → 85. Lower-confidence fit for difficult scientific/professional research; coding provisional, cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-5.4-pro — exact primary API card.
- [S2] https://openai.com/index/introducing-gpt-5-5/ — primary comparative table, directly inspected this session; separate exact-Pro columns.
- [S3] https://benchlm.ai/models/gpt-5-4-pro — secondary source-linked aggregation, October 16, partial coverage.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research; three searches, direct primary and secondary comparison; absent and provisional dimensions explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
