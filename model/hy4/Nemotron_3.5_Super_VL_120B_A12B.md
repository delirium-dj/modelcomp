# Hy4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Hugging Face model card (tencent/Hy4-preview)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent Hy Team's open-weights MoE reasoning model; 770B total / 49B active parameters; 1M context / text-in → text out; Apache 2.0 license; sibling: Hy3-preview.
- **Provider / access:** Tencent API, open weights on Hugging Face (`tencent/Hy4-preview`).
- **Release / knowledge:** Released August 2026 per HF model card; knowledge cutoff not stated.
- **IDs:** `hy4` / `hy4-preview` (Tencent API / HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (HF model card). Verified.
- **Modalities:** Text-in → text-out per HF model card; reasoning yes (chain-of-thought, with `enable_thinking` toggle); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights MoE, 770B total / 49B active per token, 78 layers, 256 routed experts + 1 shared expert per layer, top-8 routed + shared experts active per token, MTP layer for speculative decoding, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (HF model card / HF eval results)
- SWE-bench Pro: **65.7%** (HF model card / HF eval results)
- GPQA Diamond: **92.3%** (HF model card / HF eval results)
- Deep Swe: **64.3%** (HF model card / HF eval results)
- Toolathlon Verified: **74.1%** (Tencent HF model card / HF eval results)
- APEX-Agents: **37.1%** (HF model card / HF eval results)
- Long-Horizon Terminal-Bench: **15** tasks solved (LHTB-2.0, HF model card)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (HF model card)
- Artificial Analysis Intelligence Index: not found for this variant
- FrontierMath: not found for this variant
- AIME26: not found for this variant
- AA-LCR: not found for this variant
- CritPt: not found for this variant
- AA-Omniscience: not found for this variant

Coding:

- SWE-bench Pro: **65.7%** (HF model card)
- Deep Swe: **64.3%** (HF model card)
- Toolathlon Verified: **74.1%** (HF model card)

Multimodal & grounded:

- No multimodal benchmarks found; model is text-in → text-out per HF model card.

Long context:

- Terminal-Bench 2.1: **85.4%** (HF model card)
- Terminal-Bench 3.0: **15** tasks solved (LHTB-2.0, HF model card)
- Declared 1M context (HF model card); no public full-depth needle-recall score beyond HF eval results.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 2.1 (85.4%), SWE-bench Pro (65.7%), Toolathlon Verified (74.1%), GDPval-AA not found; capped by weak APEX-Agents (37.1%), MazeBench not found. Strong agentic tool-use profile.
- **Reasoning: 70/100.** GPQA Diamond 92.3%, AA Intelligence Index not found, FrontierMath not found, AA-LCR not found; capped by CritPt not found, HLE not found, AA-Omniscience not found. Strong knowledge reasoning but limited benchmarks available.
- **Context window: 90/100.** Verified 1M tokens (HF model card); AA-LCR not found for this variant; capped because no public full-depth needle-recall score beyond HF eval results.
- **Multimodal: 40/100.** Text-in → text-out per HF model card; capped by text-only output and zero multimodal benchmark data found.
- **Coding: 70/100.** SWE-bench Pro (65.7%), Deep Swe (64.3%), Toolathlon Verified (74.1%); capped by weak SWE-bench Pro relative to frontier models. Strong verified coding.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 69/100.** Half-up mean of (75 + 70 + 90 + 40 + 70) / 5 = 68.0 → 68. Best-fit recommendation: strong GPQA Diamond reasoning and verified coding at 1M context with open weights; verify on multimodal tasks given text-only output.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Hugging Face tencent/Hy4-preview model card; benchlm.ai page returned 404; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
