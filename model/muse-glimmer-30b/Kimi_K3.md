# Muse Glimmer 30B — findings by Kimi K3

- Source: Meta / Muse Glimmer 30B (`muse-glimmer-30b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's compact open-weights Muse family member (30B) — a standout efficient reasoner: AIME'26 94.7%, AA-LCR 83.3%, SWE-bench Verified 76%, but weak at GDPval-style knowledge work and heavy hallucination (81.9%).
- **Provider / access:** open weights (Meta, Apache 2.0); hosted per community providers; official quantizations target 24 GB and 32 GB devices (vorplabs.com).
- **Release / knowledge:** 2026-08-10 (vorplabs.com, aitoolsreview.co.uk, nextaimodel.com) — Meta's first open-weight model since Llama 4; cutoff not verified.
- **IDs:** `meta/muse-glimmer-30b` (no Zen Free ID verified).
- **Context window:** 131K tokens (benchlm.ai; 131,072 per vorplabs.com); max output not verified.
- **Modalities:** text/image in (CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** open weights (Apache 2.0) → self-host; hosted rates unverified.
- **Architecture:** open weights, 29.6B dense parameters + vision encoder (vorplabs.com), Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%**; DeepSearchQA: **74.6%**; OSWorld-Verified: **65.9%**; skillsBench: **44.3%** (benchlm.ai)
- GDPval-AA: **774 Elo** (13.7% normalized); AA EnterpriseOps-Gym: **34.7%**; AA Agentic Index: **10.5%** (benchlm.ai)
- Tau3 Banking (AA): **23.5%**; AA Briefcase: **474 Elo**; AA AutomationBench: **6.8%**; GDP.pdf: **10.0%** (benchlm.ai)
- Terminal-Bench 2.1: **51.7%** (aaTerminalBench21 same); AA Terminal-Bench 4.0: **0.5%** (benchlm.ai)
- Tau2 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **83.5%** (benchlm.ai)
- HLE (AA-HLE): **22.0%** (benchlm.ai)
- AA-LCR: **83.3%** — remarkable for a 30B (benchlm.ai); MLCR-AA: **20.0%**; CritPt: **2.6%**
- Artificial Analysis Intelligence Index: **17.5**; BenchLM overall **41.48/100, #121 of 514**
- AA-Omniscience Accuracy / Hallucination Rate: **27.0% / 81.9%**; AA-Omniscience Index: **-32.8%** (benchlm.ai)
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

- **Tool use: 58/100.** MCP Atlas 75.5% decent; capped by GDPval 774, Agentic Index 10.5%, Tau3 23.5% and AutomationBench 6.8%.
- **Reasoning: 66/100.** AIME 94.7% and LCR 83.3% punch far above weight; capped by HLE 22%, CritPt 2.6%, AA Index 17.5, 81.9% hallucination.
- **Context window: 62/100.** 131K window, but LCR 83.3% within it is excellent for the size.
- **Multimodal: 72/100.** Real vision suite (CharXiv 78.8%, MMMU-Pro 74%); text-only output caps it.
- **Coding: 66/100.** SWE-bench Verified 76% strong; capped by SciCode ~44% and TB 2.1 51.7%.
- **Cost efficiency: 92/100.** Open Apache-2.0 30B weights — cheap to self-host (24/32 GB official quants).
- **Overall Score: 65/100.** Mean of the five quality dims (58+66+62+72+66)/5 = 64.8 → 65. Best fit: local math/vision experiments at 30B scale with zero marginal cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, vorplabs.com, aitoolsreview.co.uk, nextaimodel.com); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release dated 2026-08-10 under Apache 2.0 (29.6B dense + vision encoder, 24/32 GB quants); GDPval-AA 893→774 Elo; Tau3 Banking 23.5% now has a verified score; BenchLM overall 41.73/100 #108 of 507 → 41.48/100 #121 of 514; added AA Briefcase 474, AA AutomationBench 6.8%, GDP.pdf 10.0%, AA TB 4.0 0.5%, AA-Omniscience Index -32.8%; scores unchanged.
- Future sources: add a new file next to this one using the same headings.
