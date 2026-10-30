# MAI-Code-1-Flash — findings by GPT-6 Luna

- Source: Microsoft/MAI-Code-1-Flash, `microsoft/mai-code-1-flash`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's Jun 2026 Copilot-native agentic coding model (5B active, 256K): SWE-Bench Pro 51.2% vs Haiku 4.5's 35.2% and up to 60% fewer tokens at $0.75/$4.50.
- **Provider / access:** GitHub Copilot; VS Code.
- **Release / knowledge:** Released 2026-06-02; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-code-1-flash` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 256,000 total (128,000 out)
- **Modalities:** Text in/out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.75/$4.50 per 1M in/out (GitHub Copilot / models.dev); no Microsoft price card published
- **Architecture:** MoE, 137B total / 5B active, 256K context. Trained from scratch (no distillation).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.0: **54.8%** (Microsoft model card, BenchmarkList)
- IFBench: **75.0%** (BenchmarkList)
- ArtifactsBench: **36.4%** (BenchmarkList)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **84.6%** (Microsoft model card)
- AIME 2026: **92.5%** (Microsoft model card)
- HLE: **18%** (Microsoft model card)
- MMLU-Pro: not reported
- AA Intelligence Index: not reported
- AMO Bench: **40%** (Microsoft model card)
- Frontier Math Tier 1-3: **6.3%** (Microsoft model card)
- Frontier Science: **58.2%** (Microsoft model card)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-Bench Verified: **71.6%** (Microsoft model card)
- SWE-Bench Pro: **51.2%** (Microsoft model card)
- SWE-Bench Multilingual: **65.5%** (Microsoft model card)
- Terminal-Bench 2: **54.8%** (Microsoft model card)
- ArtifactsBench: **36.4%** (BenchmarkList)

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 54.8%, IFBench 75.0%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 68/100.** GPQA 84.6%, AIME 92.5%, HLE 18%, AMO 40%, Frontier Math 6.3%, Frontier Science 58.2%; caps at HLE 18%.
- **Context window: 66/100.** 256K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-Bench 71.6%, SWE-Bench Pro 51.2%, SWE-Bench Multilingual 65.5%, Terminal-Bench 2 54.8%, ArtifactsBench 36.4%; caps at ArtifactsBench 36.4%.
- **Cost efficiency: 86/100.** Current curated route pricing is $0.75/$4.50 per 1M; that is still below premium frontier pricing but not the earlier $0.20/$1.20 snapshot.
- **Overall Score: 60.4/100.** Half-up mean of the five non-cost quality dimensions: (62 + 68 + 66 + 40 + 66) / 5 = 60.4. Cost efficiency is excluded. best-fit for cheap coding at low cost. (Superseded by MAI-Code-1.1-Flash.)

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://microsoft.ai/news/introducingmai-code-1-flash/)
  - [Source 2](https://models.dev/models/microsoft/mai-code-1-flash)
  - [Source 3](https://github.com/features/copilot/plans)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
