# Kimi K2.7 Code — findings by Kimi K3

- Source: Moonshot AI / Kimi K2.7 Code (`kimi-k2.7-code`; HF `moonshotai/Kimi-K2.7-Code`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's coding-specialized K2.7 variant (open weights, June 2026) — strong MCP tool use (MCP Atlas 76%, MCP Mark 81.1%) and LiveCodeBench 82.1% in a 256K window.
- **Provider / access:** Moonshot/Kimi API; open weights `moonshotai/Kimi-K2.7-Code` (HF, created 2026-06-11); OpenRouter.
- **Release / knowledge:** June 2026 (HF createdAt); cutoff not verified.
- **IDs:** `moonshotai/kimi-k2.7-code` (no Zen Free ID verified).
- **Context window:** 256K tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (family image-text-to-text; Design Arena row); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; open weights.
- **Architecture:** open weights (benchlm.ai); params undisclosed in retrieved card data.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **90.1%** (benchlm.ai)
- MCP Atlas: **76.0%**; MCP Mark Verified: **81.1%** (benchlm.ai)
- Kimi Claw 24/7: **46.9%** (benchlm.ai)
- Economic agentic: GDPval-AA **1114 Elo** (26.3% normalized); AA Agentic Index: **22.5%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **67.0%** (benchlm.ai)
- TB 2.1 primary / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **89.6%** (benchlm.ai)
- HLE (AA-HLE): **35.0%** (benchlm.ai)
- AA-LCR: **79.3%**; CritPt: **10.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **25.8**; BenchLM overall **50.44/100, #72 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **39.6% / 82.4%** (benchlm.ai)
- AA-IFBench: **63.1%** (benchlm.ai)

Coding:

- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **78.2%** (benchlm.ai)
- Kimi Code Bench v2: **62.0%** (in-house sibling metric) (benchlm.ai)
- ProgramBench: **53.6%**; CursorBench 3.2: **49.7%**; MLS-Bench Lite: **35.1%**; OpenHarmony Bench: **52.1%** (benchlm.ai)
- AA-SciCode: **47.8%**; AA Coding Index: **60.8** (benchlm.ai)

Long context:

- AA-LCR 79.3% within 256K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1277 Elo** (benchlm.ai); image-input capable per HF pipeline tag.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ² 90.1%, MCP Atlas 76.0%, MCP Mark 81.1%; capped by GDPval 1114 and Agentic Index 22.5%.
- **Reasoning: 72/100.** GPQA 89.6%, LCR 79.3%; capped by HLE 35%, CritPt 10%, hallucination 82.4%.
- **Context window: 72/100.** 256K window with LCR 79.3%; below the 1M tier.
- **Multimodal: 62/100.** Image input possible; thin verified rows (Design Arena only); text-only output.
- **Coding: 74/100.** LiveCodeBench 82.1%, SWE-bench 78.2% solid for a code specialist; capped by Coding Index 60.8.
- **Cost efficiency: 85/100.** Open weights; K2.7 Code deployed widely at low cost (provisional).
- **Overall Score: 71.2/100.** Mean of the five quality dims (76+72+72+62+74)/5 = 71.2. Best fit: open-weight coding assistants with MCP tool stacks; superseded by Kimi K3 for serious reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
