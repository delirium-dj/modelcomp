# Ling 3.1 Flash — findings by Iceman

- Source: inclusionAI/Ling-3.1-flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.1-flash
- **Short description:** inclusionAI’s Ling-3.1-flash is an open-weight 560B/25B-active hybrid-reasoning MoE (MIT) designed for tool-using agents, coding, and long-context workflows.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.1-flash`, MIT license) and hosted providers (OpenRouter/Vercel/OpenCode trial per metadata). Local metadata lists `inclusionai/ling-3.1-flash` and a free trial route.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Ling-3.1-flash`, `inclusionAI/Ling-3.1-flash`.
- **Context window:** 262,144 tokens (config/endpoints per metadata; card also advertises 1M-class capability in some contexts).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Hosted ~$0.075/$0.225 per 1M in/out on OpenRouter (discounted) per local metadata; open weights free to self-host (MIT).
- **Architecture:** Sparse MoE transformer, 560B total / 25B active parameters, hybrid reasoning, FP8/open-weight release (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `Ling-3.1-flash` (with/without reasoning as reported).

Agent / tool use:

- Terminal-Bench 2.1: **81.2%**
- Terminal-Bench 2.0: **75.3%**
- SWE-bench Verified: **73.0%**
- SWE-bench Multilingual: **59.7%**
- CyberGym: **87.9%**
- MCP Atlas (Tool Use): **43.3%**
- Toolathlon (Tool Use): **34.1%**
- GDPval: **52.5%**

Reasoning / knowledge:

- AIME 2026: **89.2%**
- GPQA Diamond: **83.8%**
- HLE (with tools): **25.9%** (no tools 17.8%)
- AA-Omniscience: **19.8%** (hallucination rate 37.9% reported in card/metadata context)
- AA Intelligence Index: **41** (per local metadata/card context)

Coding:

- SWE-bench Verified: **73.0%**
- SWE-bench Multilingual: **59.7%**
- LiveCodeBench Pro: **2,028** (score scale as reported)
- LiveCodeBench v6: **82.3%**
- SciCode: **45.1%**

Long context:

- AA-LCR: **71.5%**
- MRCR v2 (8-needle 128K): **26.7%**
- 262K context configured; long-context performance mixed.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 88/100.** Excellent terminal/cyber-agent performance (Terminal-Bench 2.1 81.2%, CyberGym 87.9%, SWE-bench Verified 73.0%) with moderate tool-use suite scores (MCP Atlas 43.3%, Toolathlon 34.1%).
- **Reasoning: 82/100.** Strong math/coding-reasoning signals (AIME 2026 89.2%, GPQA Diamond 83.8%) but weaker HLE/omniscience and notable hallucination risk.
- **Context window: 84/100.** 262K context with strong AA-LCR (71.5%) but weak MRCR v2 128K retrieval (26.7%).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong coding/agentic coding (LiveCodeBench v6 82.3%, SWE-bench Verified 73.0%, SciCode 45.1%, LiveCodeBench Pro 2028).
- **Cost efficiency: 92/100.** MIT open weights, low hosted pricing, and trial/free routes available; 25B active makes serving relatively efficient for its class.
- **Overall Score: 76/100.** Mean of the five non-cost dims (88, 82, 84, 40, 84) = 75.6 → 76. Best fit for open-weight text agentic coding and terminal/tool workflows at low cost.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Ling-3.1-flash model card (Hugging Face)](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - Local repository metadata consulted: `model/ling-3.1-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
