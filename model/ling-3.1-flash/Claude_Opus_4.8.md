# Ling 3.1 Flash — findings by Claude Opus 4.8

- Source: InclusionAI / Ant Group (`opencode/ling-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI (Ant Group) hybrid-reasoning MoE (560B total / ~25B active, Sep 2026) for coding and tool-using agents; text-only, 256K context, free during trial. Top use case: free/cheap agentic coding.
- **Provider / access:** OpenCode Zen `opencode/ling-3.1-flash` (free trial through 2026-10-13); OpenRouter/Vercel.
- **Release / knowledge:** 2026-09-30; knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash` (free trial ID).
- **Context window:** 262,144 (256K) served; 32K max output (1M behind paid tier).
- **Modalities:** text in/out; hybrid reasoning, tool calling.
- **Pricing (as of 2026-10-03):** Free during trial ($0/$0); paid pricing unannounced.
- **Architecture:** 560B total / ~25B active hybrid-reasoning MoE.

### Raw benchmarks found

> Vendor-reported (Ant Ling launch); BenchLM lists 8 rows, no overall. Several standard dims (GPQA/HLE/AA Index) have no verified public score.

Agent / tool use:

- CyberGym **87.9%**; DRACO **85.5%**; skillsBench **68.7%**; Finance Agent v2 **57.9%**; AutomationBench **52.5%**

Reasoning / knowledge:

- HealthBench Professional **65.3%**; GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- SWE-Atlas Codebase QnA **55.9%**; Terminal-Bench 4.0 **40.4%**

Multimodal:

- Text-only

### Normalized scores (1–100)

- **Tool use: 75/100.** CyberGym 87.9%, DRACO 85.5%, skillsBench 68.7%, Finance Agent 57.9%, AutomationBench 52.5%.
- **Reasoning: 68/100.** HealthBench Pro 65.3% and hybrid reasoning; no public GPQA/HLE/Index — scored conservatively.
- **Context window: 84/100.** 256K served (1M paid) — the 200K–500K tier.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 68/100.** SWE-Atlas Codebase QnA 55.9%, TB4.0 40.4% (vendor-reported).
- **Cost efficiency: 95/100.** Free during trial ($0); cheap expected paid.
- **Overall Score: 62/100.** Half-up mean of the five quality dims (75/68/84/15/68). A free/cheap agentic-coding MoE; text-only caps Overall and reasoning rests on limited public data.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Ant Ling launch screenshots via BenchLM, Vercel listing). All numbers vendor-reported; some standard dims lack verified public benchmarks and are conservative. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
