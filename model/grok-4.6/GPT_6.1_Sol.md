# Grok 4.6 — findings by GPT 6.1 Sol

- Source: xAI / `grok-4.6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.6
- **Short description:** Proprietary coding/agent model built on4.5 with supplemental pretraining/SFT/RL; not4.7 or voice [S1,S3].
- **Provider / access:** xAI API, Cursor/Grok Build and partners; functions/structured output, no Batch [S1,S3].
- **Release / knowledge:** August12,2026; cutoff unverified [S2,S3].
- **IDs:** `grok-4.6`; no verified Free API ID.
- **Context window:** Primary500,000; Vals configured500K max output, not a promise of500K output plus full500K input [S1,S2].
- **Modalities:** Primary text/image input, text output; Vals file workflows. Native audio/video unverified despite some search summaries claiming audio [S1,S2].
- **Pricing (2026-10-17):** <200K prompt$2 input/$0.50 cache/$6 output per million; **>=200K** doubles all request tokens. Fast2× base [S1,S3].
- **Architecture:** Proprietary, size unverified. Effort low/medium/high(default)/xhigh [S1].

### Raw benchmarks found
Agent / tool use:
- Vals high/temp0.7/top_p0.95/500K default: TB4 **17.17% ±1.34**, SkillsBench **55.77% ±4.84**, financev2 **53.68% ±0.67**, legal-agent **15.83% ±2.65**, legal research **48.08% ±3.47**, KSP **5.83%** [S2]. Overrides possible. Tau3/Tau2/GDPval/Claw/MCP exact values not verified.
Reasoning / knowledge:
- Vals GPQA **94.70% ±1.13**, MMLU **89.40% ±0.30**, ProofBench **51% ±5.02**, BioMystery **72.22%**, Science Index **38.09% ±1.64**, overall Index **52.09% ±1.15 (#23/49)** [S2]. Exact HLE/CritPt/Omniscience/LCR/MLCR/current AA values not verified.
Coding:
- Vals SWE **95.60% ±0.92**, LiveCode **88.22% ±0.94**, Vibe1.1 **76.24% ±3.82**, Vibe1–100 **14.75% ±3.17**, migration **44.57% ±4.48**, ProgramBench **1% ±0.70**, terminal-science **11.43% ±3.83** [S2]. SWE-Pro/DeepSWE/SciCode exact figures not verified.
Long context / multimodal:
- Verified500K capacity, no exact full-window MRCR/RULER percentage [S1]. Image support confirmed; exact visual-accuracy score not found in inspected direct sources. No automatic1M credit from older Grok4.3/4.20.

### Evidence comparison and research trail
Three successful DuckDuckGo queries: `"Grok 4.6" official model`, `"Grok 4.6" independent benchmarks`, `"Grok 4.6" review pricing limitations`. Primary API, joint Cursor launch and independent Vals inspected. Cursor is co-release evidence, not an independent reviewer; its launch claim matching5.6Sol's then-nine-test AA Index is dated and image-only, no current score inferred. Vals **$4.492/index test /37m01s** is task-suite-specific. Strong SWE95.6/GPQA94.7 coexist with TB4~17/ProgramBench1/KSP5.83. Price boundary is>=200K primary versus gateway display>200K; primary controls native quote. Search audio and1M claims rejected in favor exact card. Initial own report, not a score revision.

### Normalized scores (1–100)
- **Tool use: 82/100.** Useful professional/skills performance, capped by hard terminal/horizon failures [S2].
- **Reasoning: 88/100.** Strong GPQA/MMLU, capped by Proof51 and missing hardest/calibration corroboration [S2].
- **Context window: 88/100.** Verified500K tier, no full-window retrieval evidence [S1].
- **Multimodal: 70/100.** Verified image input/document workflows, narrower measured visual evidence and no audio/video [S1,S2].
- **Coding: 89/100.** Strong SWE/LiveCode/Vibe, capped by complete programs/science/terminal [S2].
- **Cost efficiency: 76/100.** Moderate$2/$6 but200K cliff/Fast and real task costs matter [S1–S3].
- **Overall Score: 83/100.** (82+88+88+70+89)/5=83.4 →83; supervised coding/research at checked prompt sizes. Cost excluded.

### Sources
- [S1] https://docs.x.ai/developers/models/grok-4.6 — primary exact modalities/limits/effort/pricing.
- [S2] https://www.vals.ai/models/grok_grok-4.6 — independent high configuration/current suite.
- [S3] https://cursor.com/blog/grok-4-6 — joint primary launch/training and Fast pricing context.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three searches and direct primary/evaluator comparison; historical marketing and modality/price-boundary conflicts explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
