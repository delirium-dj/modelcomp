# Solar Pro 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/solar-pro-4 (Upstage Solar Pro 4 launch page), Artificial Analysis (`artificialanalysis.ai/models/solar-pro4`), OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary reasoning model; 512K context / text+in → text out; sibling models: Solar Pro 3, Solar Pro 2; related: Solar Open 2.
- **Provider / access:** Upstage API (`solar-pro-4`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Upstage; knowledge cutoff not stated.
- **IDs:** `solar-pro-4` (Upstage API / OpenRouter), `upstage/solar-pro4` (OpenRouter). No Free ID confirmed.
- **Context window:** 512K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per Upstage docs; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Upstage Solar Pro 4 launch page)
- BrowseComp: **49.2%** (Upstage Solar Pro 4 launch page)
- MCP Atlas: **61.4%** (Upstage Solar Pro 4 launch page)
- APEX-Agents: **18.7%** (Upstage Solar Pro 4 launch page)
- GDPval-AA: normalized **30.4%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA-D: **89.0%** (Upstage Solar Pro 4 launch page); AA-GPQA Diamond **89.1%**
- HLE: **29.2%** (Artificial Analysis)
- MMLU-Pro: **86.3%** (Upstage Solar Pro 4 launch page)
- Artificial Analysis Intelligence Index: **28.1%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **71.0%** (Upstage Solar Pro 4 launch page)
- CritPt: **5.4%** (Artificial Analysis)
- AA-Omniscience Index **-0.8%**; Accuracy **18.9%**; Hallucination rate **24.4%** (AA)
- KMMLU-Pro: **79.2%** (Upstage Solar Pro 4 launch page)

Coding:

- SWE-bench Verified: **70.6%** (Upstage Solar Pro 4 launch page)
- LiveCodeBench: **87.8%** (Upstage Solar Pro 4 launch page)
- AA-SciCode: **44.6%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1178** (OpenRouter)

Long context:

- AA-LCR: **71.0%** (Upstage Solar Pro 4 launch page); declared 512K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Terminal-Bench 2.1 (57.0%), BrowseComp (49.2%), MCP Atlas (61.4%), GDPval-AA normalized (30.4%); capped by weak APEX-Agents (18.7%). Moderate agentic tool-use profile.
- **Reasoning: 66/100.** GPQA-D 89.0%, MMLU-Pro 86.3%, AA-LCR (71.0%), KMMLU-Pro (79.2%); capped by CritPt (5.4%), HLE (29.2%), AA-HLE (29.2%), AA-Omniscience accuracy (18.9%), Intelligence Index (28.1%). Moderate reasoning.
- **Context window: 80/100.** Verified 512K tokens (benchlm.ai); AA-LCR 71.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Design Arena Website 1178; capped by text-only output assumption and thin multimodal coverage.
- **Coding: 65/100.** SWE-bench Verified (70.6%), LiveCodeBench (87.8%), AA-SciCode (44.6%); moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 62.2/100.** Half-up mean of (55 + 66 + 80 + 45 + 65) / 5 = 63.2 → 63. Best-fit recommendation: strong LiveCodeBench coding at 512K context; verify on agentic and HLE-class tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Upstage Solar Pro 4 launch page + Artificial Analysis + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
