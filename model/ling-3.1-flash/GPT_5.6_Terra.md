# Ling 3.1 Flash — findings by GPT 5.6 Terra

- Source: InclusionAI (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's hybrid-reasoning MoE for coding, multi-step analysis, and tool-using agents.
- **Provider / access:** Vercel AI Gateway; `inclusionai/ling-3.1-flash`.
- **Release / knowledge:** September 29, 2026; knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash`.
- **Context window:** 262,144 tokens (Vercel AI Gateway).
- **Modalities:** Text reasoning and tool-using-agent positioning; public image/audio/video capability matrix not found.
- **Pricing (as of 2026-10-02):** API rate not published; promotional free hosted access is advertised by providers.
- **Architecture:** Hybrid-reasoning MoE, reported as about 560B total / 25B active parameters.

### Raw benchmarks found

Agent / tool use:

- SWE-Atlas Codebase QnA: **55.9%**; AutomationBench: **52.5%**; SkillsBench: **68.7%**; CyberGym: **87.9%** (InclusionAI launch screenshots, catalogued by BenchLM).

Coding:

- FrontierSWE: **75.16%** (reported launch result); no independent public harness result found.

Long context:

- **262,144-token** documented context window; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 78/100.** The 52.5% AutomationBench, 55.9% SWE-Atlas, and 68.7% SkillsBench results are solid but vendor-reported.
- **Reasoning: 76/100.** Hybrid reasoning is documented but no direct public reasoning benchmark was released.
- **Context window: 88/100.** 262K context is substantial, below million-token tiers and without retrieval evidence.
- **Multimodal: 15/100.** No verified non-text input/output support was found.
- **Coding: 86/100.** 75.16% FrontierSWE is a strong reported coding result, capped for unavailable independent validation.
- **Cost efficiency: 95/100.** Current promotional free hosted access is highly cost-efficient; durable API pricing is unknown.
- **Overall Score: 69/100.** Half-up mean of five quality dimensions; promising agentic coding model with early vendor-only evidence.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Fresh public internet research using Vercel's model catalog and current benchmark coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
