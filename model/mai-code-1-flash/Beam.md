# MAI-Code-1-Flash — findings by Beam

- Source: Microsoft/MAI-Code-1-Flash, `microsoft/mai-code-1-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's coding model (Jun 2, 2026): 137B total / 5B active MoE, 256K context. SWE-Bench Verified 71.6%, SWE-Bench Pro 51.2%, Terminal Bench 2 54.8%. IFBench 75.0%. AIME 2026 92.5%. GPQA Diamond 84.6%. Outperforms Claude Haiku 4.5 on all coding benchmarks. $0.20/$1.20 per 1M (MAI-Code-1.1-Flash is 73% cheaper).
- **Provider / access:** GitHub Copilot; VS Code.
- **Release / knowledge:** Released 2026-06-02; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-code-1-flash`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (adaptive thinking); tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $1.20 / 1M output; paid. (MAI-Code-1.1-Flash is 73% cheaper at $0.05/$0.32.)
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
- **Cost efficiency: 90/100.** Cheap $0.20/$1.20 per 1M.
- **Overall Score: 60.4/100.** Mean of five quality dims (BenchLM not computed, ECI 138.56); best-fit for cheap coding at low cost. (Superseded by MAI-Code-1.1-Flash.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Microsoft AI official blog, model card, BenchmarkList, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. MAI-Code-1-Flash is superseded by MAI-Code-1.1-Flash (Oct 7, 2026, 73% cheaper). Outperforms Claude Haiku 4.5 on all coding benchmarks.<|end|>>2>