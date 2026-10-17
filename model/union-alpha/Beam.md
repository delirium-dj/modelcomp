# Union Alpha — findings by Beam

- Source: Unbiased/Union Alpha (Pareto 26.9), `stealth/union-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth/union-alpha)
- **Short description:** OpenRouter stealth model (Sep 16, 2026) later identified as Unbiased's Pareto 26.9: composite/MoA system (multiple models compete, consensus layer picks best answer). 262K context, multimodal (text+image), frontier coding scores. Free preview, then paid.
- **Provider / access:** OpenRouter `stealth/union-alpha`; OpenCode; Cloudflare. Free during preview, then $2.50/$7.50 per 1M.
- **Release / knowledge:** Appeared 2026-09-16; officially Pareto 26.9 on 2026-09-17. Knowledge cutoff not stated.
- **IDs:** `stealth/union-alpha`
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes (JSON, no schema enforce).
- **Pricing (as of 2026-10-17):** $2.50 / 1M input, $7.50 / 1M output (post-preview); free during preview.
- **Architecture:** Composite/MoA (multiple models compete, consensus synthesis); proprietary.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **74.2%**
- DeepSWE: **74.0%**
- HumanEval+: **91.8%**
- MMLU-Pro: **89.8%**
- SMF Official A: **127/157 (80.9%)**
  - tool_calling: 2/2 (100%)
  - writing: 5/5 (100%)
  - reasoning: 27/30 (90.0%)
  - prose: 27/30 (90.0%)
  - instruction: 26/30 (86.7%)
  - coding: 20/30 (66.7%)
  - math: 20/30 (66.7%)

Reasoning / knowledge:

- GPQA-Diamond: **90.4%** (per Pareto 26.8 model card)
- HLE: **47.0%** (per Pareto 26.8)
- arXivMath: **69.2%**
- DRACO: **58.0%**
- MMMU-Pro: **77.9%**

Coding:

- SWE-bench Verified: **74.2%**
- DeepSWE: **74.0%**
- HumanEval+: **91.8%**

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Text/image in; MMMU-Pro 77.9%.

### Normalized scores (1–100)

- **Tool use: 76/100.** SMF Official A tool_calling 100%, coding 66.7%, math 66.7%; SWE-bench 74.2%; caps at SMF 80.9% overall.
- **Reasoning: 78/100.** GPQA-D 90.4%, HLE 47.0%, arXivMath 69.2%; caps at DRACO 58.0%.
- **Context window: 74/100.** 262K window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; MMMU-Pro 77.9%.
- **Coding: 76/100.** SWE-bench Verified 74.2%, DeepSWE 74.0%, HumanEval+ 91.8%.
- **Cost efficiency: 84/100.** Mid-low $2.50/$7.50 per 1M (post-preview).
- **Overall Score: 76/100.** Mean of five quality dims; best-fit for composite routing at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (GIGAZINE, union-alpha.org, SMF Clearinghouse, GizChina, LMSpeed, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>