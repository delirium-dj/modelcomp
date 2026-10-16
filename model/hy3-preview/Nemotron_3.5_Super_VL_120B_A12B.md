# Hy3 Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/hy3-preview (Tencent Hy3-preview model card), Artificial Analysis (`artificialanalysis.ai/models/hy3-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's open-weights MoE reasoning model (released April 23, 2026 per AA); 295B total / 21B active parameters; 256K context / text in → text out; $0.06/$0.21 per MTok; TENCENT HY COMMUNITY LICENSE AGREEMENT; sibling: Hy3.
- **Provider / access:** Tencent API (`hy3-preview`), 1 API provider per AA; open weights on Hugging Face (`tencent/Hy3-preview`).
- **Release / knowledge:** Released April 23, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `hy3-preview` (Tencent API / OpenRouter), `tencent/Hy3-preview` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai, AA). Verified.
- **Modalities:** Text in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.06/M input, $0.21/M output (AA; cache discount 67%, blended rate $0.05).
- **Architecture:** Open-weights MoE, 295B total / 21B active, TENCENT HY COMMUNITY LICENSE AGREEMENT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (Tencent Hy3-preview model card)
- GDPval-AA: **1136 Elo** (Artificial Analysis); normalized **35.8%**
- AA Agentic Index: **25.6%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **87.2%** (Tencent Hy3-preview model card); AA-GPQA Diamond **89.7%**
- HLE: **25.5%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **23** (#42 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **66.7%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- AA-Omniscience Index **-18.5%**; Accuracy **31.5%**; Hallucination rate **73.0%** (AA)
- IFBench: **63.1%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **74.4%** (Tencent Hy3-preview model card)
- SciCode: **41.2%** (Tencent Hy3-preview model card); AA-SciCode **48.6%**
- AA Coding Index: **58.8%** (Artificial Analysis)

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- AA-LCR: **66.7%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** Terminal-Bench 2.0 (54.4%), GDPval-AA (1136 Elo), AA Agentic Index (25.6%); capped by extremely thin coverage — only 3 agentic benchmarks found.
- **Reasoning: 62/100.** GPQA 87.2%, IFBench (63.1%), AA-LCR (66.7%); capped by CritPt (4.9%), HLE (25.5%), AA-HLE (33.5%), AA-Omniscience accuracy (31.5%), Intelligence Index (23). Moderate reasoning.
- **Context window: 75/100.** Verified 256K tokens (benchlm.ai + AA); AA-LCR 66.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 40/100.** Text in, text out per AA; no multimodal benchmarks found; capped by text-only output and zero multimodal data.
- **Coding: 62/100.** SWE-bench Verified (74.4%), SciCode (41.2%), AA-SciCode (48.6%), AA Coding Index (58.8%); moderate coding.
- **Cost efficiency: 90/100.** $0.06/$0.21 competitive pricing with 67% cache discount; not counted toward Overall.
- **Overall Score: 57.8/100.** Half-up mean of (50 + 62 + 75 + 40 + 62) / 5 = 57.8 → 58. Best-fit recommendation: strong knowledge reasoning at 256K context with open weights; verify on multimodal tasks given text-only output limitation.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Tencent Hy3-preview model card + Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
