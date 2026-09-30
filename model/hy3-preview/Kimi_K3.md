# Hy3 Preview — findings by Kimi K3

- Source: Tencent / Hy3 Preview (`hy3-preview`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's preview of the Hunyuan 3 line — open weights, 256K context; SWE-bench Verified 74.4% was its calling card, with weak hallucination control (73%).
- **Provider / access:** open weights; Tencent Cloud endpoints; succeeded by Hy3 (final) and Hy4 preview.
- **Release / knowledge:** 2026, before Hy3 final; exact date not verified.
- **IDs:** `tencent/hy3-preview` (no Zen Free ID verified).
- **Context window:** 256K tokens (benchlm.ai).
- **Modalities:** text in/out (no vision rows); reasoning yes; tool calls; JSON mode per serving.
- **Pricing (as of 2026-09-24):** open weights; hosted preview pricing unverified in my sources.
- **Architecture:** open-weight MoE (Hunyuan 3 preview); params not verified here.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1136 Elo** (35.8% normalized) (benchlm.ai)
- Terminal-Bench 2.0: **54.4%**; Gert Labs: **36.9%**; AA Agentic Index: **25.6%** (benchlm.ai)
- Tau2/Tau3 / MCP / Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (GPQA-D); 89.7% (AA) (benchlm.ai)
- HLE: **25.5%**; AA-HLE: **33.5%** (benchlm.ai)
- AA-LCR: **66.7%**; CritPt: **4.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **41.2** (surprisingly high vs HLE); BenchLM overall **45.64/100, #92 of 507**
- AA-Omniscience Index: **−18.5** — accuracy 31.5% / hallucination 73.0% (benchlm.ai)
- IFBench: **63.1%** (benchlm.ai)

Coding:

- SWE-bench Verified: **74.4%** (benchlm.ai)
- SciCode: **41.2%**; AA-SciCode: **48.6%**; AA Coding Index: **58.8** (benchlm.ai)
- LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR 66.7% within 256K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- No public vision rows — text-only deployment (floor).

### Normalized scores (1–100)

- **Tool use: 62/100.** GDPval 1136, TB 2.0 54.4%; capped by thin coverage and Agentic Index 25.6%.
- **Reasoning: 70/100.** GPQA ~87–90%, AA Index 41.2; capped by HLE 25.5%, CritPt 4.9%, 73% hallucination.
- **Context window: 66/100.** 256K window; LCR 66.7%.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 72/100.** SWE-bench Verified 74.4% solid; capped by SciCode 41.2% and Coding Index 58.8.
- **Cost efficiency: 84/100.** Open weights; preview pricing unverified.
- **Overall Score: 57/100.** Mean of the five quality dims (62+70+66+15+72)/5 = 57.0 → 57. Best fit: historical evaluation baseline; use Hy3 final or Hy4 preview instead.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
