# Ling 3.1 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's fast open-weights MoE model (560B total / 25B active) with 1M context, exceptional speed (210 tok/s), strong coding (SWE Multilingual 88.5%), and $0.30/$0.90 pricing under MIT license.
- **Provider / access:** InclusionAI Platform, OpenCode Zen (`opencode/ling-3.1-flash` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`inclusionAI/Ling-3.1-flash`), 2 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-10-01 release; knowledge cutoff not publicly disclosed.
- **IDs:** `inclusionAI/Ling-3.1-flash` (Hugging Face), `opencode/ling-3.1-flash` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 262,000 tokens per BenchLM; 1,000,000 tokens per AA; max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.30/M in, $0.90/M out (InclusionAI API / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.19/M (AA). Cost per Intelligence Index task: $1.00 (AA).
- **Architecture:** MoE (Mixture of Experts), 560 billion total parameters, 25 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **81.2%** (InclusionAI model card)
- Terminal-Bench 4.0: **46.0%** (InclusionAI model card)
- GDPval-AA v2: **1673 Elo** (InclusionAI model card) / **55.9%** normalized (Artificial Analysis)
- BrowseComp: **91.7%** (InclusionAI model card)
- CyberGym: **87.9%** (InclusionAI model card)
- DRACO: **85.5%** (InclusionAI model card)
- Finance Agent v2: **57.9%** (InclusionAI model card)
- Tau3-bench: **47.8%** (InclusionAI model card)
- MCP Atlas: **83%** (InclusionAI model card)
- WideResearch: **83.3%** (InclusionAI model card)
- AutomationBench: **52.5%** (InclusionAI model card)
- SkillsBench: **68.7%** (InclusionAI model card)
- Tau3-bench: **47.8%** (InclusionAI model card)

Reasoning / knowledge:

- HLE: **37.4%** (InclusionAI model card) / **39.4%** (Artificial Analysis)
- AA Intelligence Index: **41** (rank #7/121 open weights) (Artificial Analysis)
- AA LCR: **83.0%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- AA HLE: **39.4%** (Artificial Analysis)
- AA Omniscience Index: **2.2%** (Artificial Analysis)
- AA Omniscience Accuracy: **29.1%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **37.9%** (Artificial Analysis)
- HealthBench Professional: **65.3%** (InclusionAI model card)

Coding:

- SWE-bench Pro: **68.7%** (InclusionAI model card)
- SWE Multilingual: **88.5%** (InclusionAI model card)
- Terminal-Bench 4.0: **46.0%** (InclusionAI model card)
- Terminal-Bench 2.1: **81.2%** (InclusionAI model card)
- SWE-Atlas Codebase QnA: **64.5%** (InclusionAI model card)
- DeepSWE: **59.7%** (InclusionAI model card)
- AA-SciCode: **54.1%** (Artificial Analysis)

Multimodal:

- No verified public multimodal benchmarks found

Long context:

- AA LCR: **83.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 80/100.** TB 2.1 81.2%, BrowseComp 91.7%, GDPval 1673 Elo (near 1750+ frontier), CyberGym 87.9%, DRACO 85.5%, MCP Atlas 83%, WideResearch 83.3%, Tau3 47.8%. Capped by TB 4.0 46.0%, AutomationBench 52.5%, Tau3 47.8%.
- **Reasoning: 65/100.** HLE 37.4% (near 40%+ frontier), AA LCR 83.0%, HealthBench Pro 65.3%. Capped by AA Intelligence Index 41 (<60 frontier), CritPt 18.0%, AA Omniscience Index 2.2%, Hallucination 37.9%.
- **Context window: 95/100.** 1M native context (per AA); AA LCR 83.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 82/100.** SWE Multilingual 88.5% (exceptional), TB 2.1 81.2%, SWE-bench Pro 68.7%, SWE-Atlas 64.5%, DeepSWE 59.7%, TB 4.0 46.0%. Capped by AA-SciCode 54.1% (near 55%+), no LiveCodeBench/DeepSWE/FrontierCode.
- **Cost efficiency: 90/100.** $0.30/$0.90 per 1M, blended ~$0.19/M, 80% cache discount, cost/task $1.00. Methodology: $0.30/$0.90 is competitive for open weights → 90. MIT license enables free self-hosting.
- **Overall Score: 67/100.** Half-up mean of (80 + 65 + 95 + 15 + 82) / 5 = 67.4 → 67. Best-fit: fast, cost-efficient open-weights MoE for coding and agentic tasks; 210 tok/s, SWE Multilingual 88.5%, and $0.30/$0.90 are standout; text-only and weak Omniscience limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (InclusionAI Hugging Face), independent benchmark aggregators (Artificial Analysis, BenchLM), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.