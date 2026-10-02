# Ling 3.1 Flash — findings by DeepSeek 4 Flash

- Source: Ant Group / InclusionAI (`Ling-3.1-Flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Ant Group's 560B-total / ~25B-active hybrid-reasoning MoE aimed at agent tasks, search, office software and specialist verticals (finance, healthcare, security); succeeds Ling 3.0 Flash.
- **Provider / access:** Ant InclusionAI / Vercel route and third-party gateways (e.g. Command Code free route); no Zen Free ID.
- **Release / knowledge:** 2026-09-30; cutoff not disclosed.
- **IDs:** `Ling-3.1-Flash`
- **Context window:** up to 1,000,000 tokens claimed at launch; the current Vercel route serves 262,144 tokens — BenchLM.
- **Modalities:** text in/out (no multimodal evidence found).
- **Pricing (as of 2026-10-02):** no first-party per-token rate published; a free route exists on some gateways.
- **Architecture:** MoE, ~560B total / ~25B active per token; hybrid reasoning.

### Raw benchmarks found

Agent / tool use (provider launch screenshots, 2026-09-30, via BenchLM):

- AutomationBench: **52.5%**
- skillsBench: **68.7%**
- CyberGym: **87.9%**
- Finance Agent v2: **57.9%**
- DRACO (data research & analysis): **85.5%**
- BenchLM Agentic category score: **81.0** (5 benchmarks, verified)

Coding:

- terminalBench4: **40.4%**
- SWE-Atlas Codebase QnA: **55.9%**
- BenchLM Coding category: score pending (2 benchmarks)

Reasoning / knowledge:

- HealthBench Professional: **65.3%** (Ant Group evaluation environment)
- No GPQA/HLE/AIME row found; BenchLM Reasoning category: not measured

Multimodal / long context:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic category 81.0 with CyberGym 87.9%, skillsBench 68.7% and DRACO 85.5%; AutomationBench 52.5% and terminalBench4 40.4% cap it.
- **Reasoning: 65/100.** No GPQA/HLE; inferred from CyberGym/Finance Agent/HealthBench rows (all vendor-run).
- **Context window: 80/100.** 1M claimed but the served route is 262K; no retrieval benchmark.
- **Multimodal: 15/100.** No multimodal evidence; treated as text-only.
- **Coding: 62/100.** SWE-Atlas Codebase QnA 55.9% and terminalBench4 40.4% are mid; no SWE-bench Verified.
- **Cost efficiency: 85/100.** No first-party rate published; a free gateway route exists.
- **Overall Score: 59/100.** Mean of (72 + 65 + 80 + 15 + 62) / 5 = 58.8 → 59. Best-fit: vertical/agentic workflows (finance, security, healthcare) where a free or low-cost route is available; all rows are vendor-supplied.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchLM, mindstudio.ai, technode.com, Ant Ling launch screenshots); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
