# Hy3 — findings by Iceman

- Source: Tencent/Hy3
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent’s Hy3 is an open-weight 295B/21B-active MoE model (Apache 2.0) with 256K context, optimized for reasoning, agentic coding, and product reliability.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3`, Apache 2.0) and hosted providers. Local metadata lists `tencent/hy3`, pricing ~$0.0825/$0.33 off-peak (Tencent fp8) to ~$0.14/$0.58 on other hosts, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Hy3`, `tencent/Hy3`.
- **Context window:** 256,000 tokens (262,144 on some hosts); 64,000–128,000 max output per local metadata.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted ~$0.0825/$0.33 off-peak (Tencent fp8), ~$0.14/$0.58 on other hosts (local metadata).
- **Architecture:** Sparse MoE transformer, 295B total / 21B active (+3.8B MTP layer params), 80 layers, 256K context (HF card).

### Raw benchmarks found

> Verified figures below are from Hugging Face model card/evaluation result snippets for `tencent/Hy3` as visible in reviewed page text. Card also references benchmark appendix charts; text-extractable/visible eval results used where clear.

Agent / tool use:

- TerminalBench 2.1: **71.7%** (HF eval result snippet)
- SWE-bench Verified: **78%** (HF eval result snippet)
- SWE-bench Multilingual: **75.8%** (HF eval result snippet)
- Apex Agents: **25.6** (HF eval result snippet)
- Long-Horizon-Terminal-Bench (LHTB solved): **1** (HF eval result snippet)
- Strong tool-call reliability and agent scaffold compatibility emphasized in card text.

Reasoning / knowledge:

- GPQA Diamond: **90.4** (HF eval result snippet)
- HLE: **53.2** (HF eval result snippet)
- Reasoning/agent capabilities described as competitive with larger flagship models.

Coding:

- SWE-bench Verified: **78%**
- SWE-bench Multilingual: **75.8%**
- TerminalBench 2.1: **71.7%**
- DeepSWE: **28** (HF eval result snippet)

Long context:

- 256K context supported; long-dialogue/multi-turn context retention improvements emphasized qualitatively (MRCR mentioned), but standalone numeric long-context benchmark not clearly extracted.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified/visible evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Conservative where some benchmark details are in non-extracted appendix charts.

- **Tool use: 84/100.** Strong terminal/agentic coding signals (TerminalBench 2.1 71.7%, SWE-bench Verified 78%, Apex Agents 25.6) with product-focused tool-call reliability improvements.
- **Reasoning: 86/100.** Strong reasoning/knowledge evidence (GPQA Diamond 90.4, HLE 53.2) consistent with competitive positioning in card.
- **Context window: 86/100.** 256K context and improved long-dialogue retention, though limited standalone numeric long-context benchmark extraction.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong coding/agentic coding results (SWE-bench Verified 78%, SWE-bench Multilingual 75.8%, TerminalBench 2.1 71.7%, DeepSWE 28).
- **Cost efficiency: 93/100.** Apache 2.0 open weights and very competitive hosted pricing (as low as ~$0.0825/$0.33 off-peak) with 21B active parameters.
- **Overall Score: 76/100.** Mean of the five non-cost dims (84, 86, 86, 40, 86) = 76.4 → 76. Best fit as a cost-efficient open-weights text model for coding, reasoning, and agentic workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card/eval snippets; scores are normalized 1–100 interpretations from verified visible figures, not official vendor scores.
- Reference URLs:
  - [Hy3 model card (Hugging Face)](https://huggingface.co/tencent/Hy3)
  - Local repository metadata consulted: `model/hy3/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
