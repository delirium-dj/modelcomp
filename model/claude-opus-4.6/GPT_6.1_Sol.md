# Claude Opus 4.6 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-4-6`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 4.6
- **Short description:** Legacy Opus reasoning/coding model with adaptive thinking and million-token context; thinking/nonthinking are configurations, not separate model folders [S1,S2].
- **Provider / access:** Claude Messages API, Google Cloud, Foundry, Claude Platform on AWS; Bedrock legacy InvokeModel integration. Active legacy, retirement not sooner than February 5, 2027 on Anthropic platforms [S1].
- **Release / knowledge:** February 5, 2026; May 2025 reliable knowledge/August 2025 training cutoff [S1].
- **IDs:** `claude-opus-4-6`; Bedrock `anthropic.claude-opus-4-6-v1`; no verified Free ID.
- **Context window:** Current primary 1M/128K output, batch 300K beta. Launch 1M was beta; compaction supports longer sessions, not a larger native window [S1,S2].
- **Modalities:** Text/image input, text output, document/tool workflows; adaptive thinking/high default, extended manual thinking deprecated [S1].
- **Pricing (as of 2026-10-16):** Current card $5 input/$25 output/$0.50 cache per million; five-minute/hour writes $6.25/$10; batch half. Historical launch over-200K $10/$37.50 is not imposed as current pricing without verification [S1,S2].
- **Architecture:** Proprietary, parameter count not verified; pre-4.7 tokenizer fits roughly 750K words per 1M tokens [S1].

### Raw benchmarks found
Agent / tool use:
- Vals thinking max/temp1/128K default: TB2.0 **58.43% ±5.25** [S3]. Vendor launch MCP Atlas **62.7% at high**, BrowseComp **86.8% multi-agent**, settings differ from single-agent max/no-thinking benchmark [S2].
- BenchLM vendor/evaluator-attributed TB2.0 **65.4%**, OSWorld **72.7%**, Tau2 **84.8%**, Claw-Eval **70.4%**, ResearchClawBench **19.9%**, secondary-only; aggregation marked non-reasoning and mixes settings [S5]. No exact Tau3/GDPval Elo directly verified; vendor reports +144 Elo versus GPT5.2, not an absolute score [S2].

Reasoning / knowledge:
- Primary corrected HLE tools **53.0%**, down from 53.1 after additional cheating detection [S2]. Tool harness includes web/code/compaction and up to 3M cumulative tokens, not 3M native context.
- Vals thinking GPQA **89.65% ±1.19**, MMLU Pro **89.11% ±0.46**, LegalBench **85.30% ±0.37** [S3]. Its **73.39% profile accuracy** lacks a current ranked Index row and must not be ranked against other suite aggregates.
- BenchLM CritPt **2.8%**, LCR **67%**, Omniscience accuracy/hallucination **45.8%/80.1%**, AA index **26.4**, secondary non-reasoning snapshots only, not adaptive-thinking results [S5]. No verified MLCR.

Coding:
- Vals thinking SWE **78.20% ±1.85**, LiveCodeBench **84.68% ±1.02**, Vibe v1.1 **53.50% ±4.68** [S3]. Nonthinking Vibe **57.57% ±4.37** from separate configuration [S4], not averaged or proof of universal inverse effort.
- Vendor launch SWE prompt modification **81.42%** versus separately reported averaged result; BenchLM vendor-attributed SWE **80.8%**, secondary-only [S2,S5]. Exact DeepSWE/SciCode not verified.

Long context / multimodal:
- Primary MRCR v2 8-needle 1M **76%** [S2]. No ≥98% full-window retrieval.
- Vals thinking MMMU Pro **83.87% ±0.88** [S3]. Native audio/video/output not verified [S1].

### Evidence comparison and research trail
Three fresh Google queries: `Claude Opus 4.6 official model`, `Claude Opus 4.6 independent benchmark`, `Claude Opus 4.6 review pricing limitations`; interstitials. Direct primary model/launch, both Vals thinking configurations and BenchLM inspected. Bare Vals route explicitly nonthinking despite “max” effort field; thinking route separate. These labels control rather than assuming every max setup enables thinking [S3,S4]. Launch image charts not treated as readable numbers. Vendor recommends medium if overthinking adds cost/latency; launch leadership is historical. HLE correction and compaction budgets show why harness/decontamination matter [S2]. BenchLM aggregate **62.38/#47 of954, 48/639 partial coverage** mixes sourced modes; not repository Overall or a single adaptive rerun [S5].

### Normalized scores (1–100)
- **Tool use: 82/100.** Useful MCP/terminal/professional evidence, capped by older coverage and mixed harnesses [S2,S3].
- **Reasoning: 88/100.** Corrected HLE and thinking GPQA/MMLU support high reasoning, with calibration/configuration uncertainty [S2,S3].
- **Context window: 95/100.** Current 1M native; 76% retrieval earns no perfect bonus [S1,S2].
- **Multimodal: 80/100.** Verified image/document reasoning, no native audio/video/media output [S1,S3].
- **Coding: 85/100.** Good SWE/LiveCode, capped by modest Vibe and absent exact modern hard-suite evidence [S3].
- **Cost efficiency: 45/100.** Premium $5/$25, caching/batch helpful but overthinking adds spend [S1,S2].
- **Overall Score: 86/100.** (82 + 88 + 95 + 80 + 85) / 5 = 86.0 → 86. Best fit established supervised reasoning/document/coding workflows; cost excluded.

### Sources
- [S1] https://platform.claude.com/docs/en/models/opus-4-6/overview — current primary specs/cutoffs/lifecycle.
- [S2] https://www.anthropic.com/news/claude-opus-4-6 — primary launch, HLE correction, retrieval and tool budgets.
- [S3] https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking — direct independent thinking configuration.
- [S4] https://www.vals.ai/models/anthropic_claude-opus-4-6 — direct independent nonthinking configuration.
- [S5] https://benchlm.ai/models/claude-opus-4-6 — secondary mixed-configuration aggregation, October 16.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three searches and direct primary/evaluator inspection; thinking, tool, cumulative-context and snapshot differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
