# Claude Opus 4.7 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-4-7`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 4.7
- **Short description:** Legacy Opus for precise coding, high-resolution vision and professional workflows; newer models do not supply its benchmark scores [S1,S3].
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Foundry and Claude Platform on AWS; active legacy, retirement not sooner than April 16, 2027 on Anthropic-operated platforms [S1].
- **Release / knowledge:** April 16, 2026; January 2026 reliable/training cutoff [S1].
- **IDs:** `claude-opus-4-7`, Bedrock `anthropic.claude-opus-4-7`; no verified Free ID.
- **Context window:** 1M; 128K synchronous output/300K batch beta. New tokenizer approximately 555K words per 1M rather than 750K earlier [S1].
- **Modalities:** Text/image input, text output; documents/tools, adaptive thinking/high default. Images up to 2,576px long edge/3.75MP [S1,S3].
- **Pricing (as of 2026-10-16):** $5 input/$25 output per million, cache read $0.50, five-minute write $6.25, hour write $10; Batch 50% discount [S1].
- **Architecture:** Proprietary; size not disclosed in inspected material. Same content can tokenize 1.0–1.35× longer than 4.6; higher effort adds reasoning, especially later turns [S3].

### Raw benchmarks found
Agent / tool use:
- Vals max/temp1/128K default: TB2.1 **68.54% ±1.30**, Finance Agent v2 **51.51% ±0.49**, legal-agent **6.67% ±2.00**, legal research **38.46% ±3.38** [S2]. Per-benchmark overrides possible.
- Google primary comparative test: MCP Atlas **79.1%**, GDPval-AA **1753 Elo**, OSWorld-Verified **78.0%** [S4]. Other labs' comparison is not an Anthropic rerun.
- Tau3/Tau2, Claw-Eval/ClawProBench: no verified exact score found.

Reasoning / knowledge:
- Vals GPQA **90.15% ±1.54**, MMLU Pro **89.87% ±0.30**, SAGE **56.10% ±3.37 (#1/91)** [S2]. Google comparative HLE **46.9%**, ARC2 **75.8%** [S4].
- Vals profile accuracy **59.66%** has no current ranked Index row. Historical launch “new SOTA” is dated, not present leadership [S2]. Current AA/CritPt/LCR/MLCR/Omniscience exact scores not verified.

Coding:
- Vals SWE **82% ±1.72**, LiveCodeBench **85.07% ±1.01**, Vibe v1.1 **71% ±4.51**, migration **43.88% ±4.22**, ProgramBench **0%** [S2].
- Google comparative SWE-Pro **64.3%**, TB2.1 **66.1% Terminus-2** [S4], distinct from Vals. Vendor-hosted Cursor testimonial **70%**, benchmark version unspecified; not a public standardized rerun [S3]. DeepSWE/SciCode exact scores not verified.

Long context / multimodal:
- Official 1M capacity; no directly verified exact-model ≥512K retrieval percentage [S1].
- Vals MMMU Pro **85.55% ±0.84**, Google comparative **75.2% no tools** [S2,S4]; configuration differences retained rather than averaged.

### Evidence comparison and research trail
Three fresh Google searches: `Claude Opus 4.7 official model`, `Claude Opus 4.7 independent benchmark`, `Claude Opus 4.7 review limitations pricing`; interstitials prevented readable results. Exact primary card/launch and independent Vals inspected; Google model card directly read in this batch [S4]. Vendor benchmark figures embedded only in images were not assumed read. Launch footnotes identify SWE memorization screens, revised MCP grading, internal multimodal SWE and TB2.0 thinking-disabled/Terminus-2 settings [S3]; those are not directly interchangeable with Vals max or Google's TB2.1. Vals reports refusals in academic/finance tasks and **258m59s** suite latency, not general chat response time [S2]. Literal instruction following may require harness retuning; unchanged token rates do not imply unchanged cost after tokenizer/thinking changes [S3].

### Normalized scores (1–100)
- **Tool use: 84/100.** Good finance/MCP/terminal evidence, capped by low complete legal tasks and configuration variance [S2,S4].
- **Reasoning: 89/100.** HLE/GPQA/MMLU and SAGE support high reasoning; refusals and current-coverage gaps cap ceiling [S2,S4].
- **Context window: 95/100.** Official 1M capacity, without verified perfect-retrieval credit [S1].
- **Multimodal: 80/100.** High-resolution image/document evidence; native audio/video/output absent [S1–S3].
- **Coding: 88/100.** Strong conventional SWE/Vibe/LiveCode, capped by ProgramBench zero, migration and memorization caveats [S2,S3].
- **Cost efficiency: 43/100.** Premium $5/$25 plus tokenizer/effort inflation; caching and batch reduce selected costs [S1,S3].
- **Overall Score: 87/100.** (84 + 89 + 95 + 80 + 88) / 5 = 87.2 → 87. Best fit established supervised coding/document workflows; cost excluded.

### Sources
- [S1] https://platform.claude.com/docs/en/models/opus-4-7/overview — exact primary model/rates/lifecycle.
- [S2] https://www.vals.ai/models/anthropic_claude-opus-4-7 — independent max results and dated launch observations.
- [S3] https://www.anthropic.com/news/claude-opus-4-7 — primary launch, tokenizer/harness caveats and partner claims.
- [S4] https://deepmind.google/models/model-cards/gemini-3-5-flash/ — primary cross-vendor comparison, directly read in this batch.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three search attempts, direct primary/independent inspection; test versions and operator differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
