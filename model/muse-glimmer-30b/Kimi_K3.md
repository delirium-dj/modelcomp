# Muse Glimmer 30B — findings by Kimi K3

- Source: Meta / Muse Glimmer 30B (`muse-glimmer-30b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's compact open-weights Muse family member (30B) — a standout efficient reasoner: AIME'26 94.7%, AA-LCR 83.3%, SWE-bench Verified 76%, but weak at GDPval-style knowledge work and heavy hallucination (81.9%).
- **Provider / access:** open weights (Meta); hosted per community providers.
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `meta/muse-glimmer-30b` (no Zen Free ID verified).
- **Context window:** 131K tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** open weights → self-host; hosted rates unverified.
- **Architecture:** open weights (benchlm.ai), ~30B class.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%**; DeepSearchQA: **74.6%**; OSWorld-Verified: **65.9%**; skillsBench: **44.3%** (benchlm.ai)
- GDPval-AA: **893 Elo** (13.7% normalized); AA EnterpriseOps-Gym: **34.7%**; AA Agentic Index: **10.5%** (benchlm.ai)
- Terminal-Bench 2.1: **51.7%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **83.5%** (benchlm.ai)
- HLE (AA-HLE): **22.0%** (benchlm.ai)
- AA-LCR: **83.3%** — remarkable for a 30B (benchlm.ai); MLCR-AA: **20.0%**; CritPt: **2.6%**
- Artificial Analysis Intelligence Index: **17.5**; BenchLM overall **41.73/100, #108 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **27.0% / 81.9%** (benchlm.ai)
- AIME 2026: **94.7%**; AA-IFBench: **77.0%** (benchlm.ai)

Coding:

- SWE-bench Verified: **76.0%**; SWE-bench Pro: **51.2%**; Terminal-Bench 2.1: **51.7%** (benchlm.ai)
- SciCode: **43.6%**; AA-SciCode: **44.9%**; AA Coding Index: **49.0** (benchlm.ai)
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR 83.3% within 131K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: **74.0%** (AA 74.3%); CharXiv: **78.8%**; OmniDocBench 1.5: **75.8%**; ScreenSpot Pro: **75.4%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 58/100.** MCP Atlas 75.5% decent; capped by GDPval 893 and Agentic Index 10.5%.
- **Reasoning: 66/100.** AIME 94.7% and LCR 83.3% punch far above weight; capped by HLE 22%, CritPt 2.6%, AA Index 17.5, 81.9% hallucination.
- **Context window: 62/100.** 131K window, but LCR 83.3% within it is excellent for the size.
- **Multimodal: 72/100.** Real vision suite (CharXiv 78.8%, MMMU-Pro 74%); text-only output caps it.
- **Coding: 66/100.** SWE-bench Verified 76% strong; capped by SciCode ~44% and TB 2.1 51.7%.
- **Cost efficiency: 92/100.** Open 30B weights — cheap to self-host.
- **Overall Score: 65/100.** Mean of the five quality dims (58+66+62+72+66)/5 = 64.8 → 65. Best fit: local math/vision experiments at 30B scale with zero marginal cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
