# MiMo-V2.5-Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/mimo-v2-5-pro (Xiaomi MiMo-V2.5-Pro launch page), Artificial Analysis (`artificialanalysis.ai/models/mimo-v2-5-pro`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's proprietary reasoning model; 1M context / text+in → text out; sibling models: MiMo-V2.6-Pro, MiMo-V2.6-Flash, MiMo-V2-Pro; related: MiMo-V2-Omni, MiMo-V2-Flash.
- **Provider / access:** Xiaomi API (`mimo-v2-5-pro`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Xiaomi; knowledge cutoff not stated.
- **IDs:** `mimo-v2-5-pro` (Xiaomi API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per Xiaomi docs; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **63.8%** (Claw-Eval leaderboard)
- GDPval-AA: **1265 Elo** (Xiaomi MiMo-V2.5-Pro launch page); normalized **31.0%** (AA)
- τ³-bench results: **72.9%** (Xiaomi MiMo-V2.5-Pro launch page)
- Terminal-Bench 2.0: **68.4%** (Xiaomi MiMo-V2.5-Pro launch page)
- τ²-bench results: **94.2%** (Artificial Analysis)
- GDPval-AA: **1265 Elo** (Artificial Analysis)
- APEX-Agents-AA: **2.4%** (Artificial Analysis)
- Gert Labs: **62.70%** (Gert Labs rankings)
- Terminal-Bench 2.1 (Vals): **57.3%** (Vals AI)
- AA Agentic Index: **22.7%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- HLE: **48%** (Xiaomi MiMo-V2.5-Pro launch page); HLE w/o tools: **34%**
- Artificial Analysis Intelligence Index: **26.0%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis)
- CritPt: **4.0%** (Artificial Analysis)
- AA-Omniscience Index **3.3%**; Accuracy **22.4%**; Hallucination rate **24.7%** (AA)
- GPQA Diamond: **86.6%** (Artificial Analysis); GPQA Diamond (Vals) **82.6%**
- MMLU-Pro: **84.6%** (Vals AI)
- FrontierMath not found for this variant

Coding:

- SWE-bench Pro: **57.2%** (Xiaomi MiMo-V2.5-Pro launch page)
- AA-SciCode: **50.6%** (Artificial Analysis)
- LiveCodeBench v6: **81.4%** (Vals AI)
- SWE-bench (Vals): **74.0%** (Vals AI)
- AA Coding Index: **60.2%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1269** (OpenRouter)

Long context:

- AA-LCR: **79.7%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 2.0 (68.4%), Claw-Eval (63.8%), GDPval-AA (1265 Elo), τ³-bench (72.9%), Terminal-Bench 2.1 Vals (57.3%); capped by weak MazeBench (0%), AA Agentic Index (22.7%), APEX-Agents-AA (2.4%), GDPval-AA normalized (31.0%). Moderate agentic tool-use profile.
- **Reasoning: 68/100.** GPQA Diamond 86.6%, MMLU-Pro 84.6%, AA-LCR (79.7%), HLE (48%), FrontierMath not found; capped by CritPt (4.0%), HLE w/o tools (34%), AA-HLE (35.7%), AA-Omniscience accuracy (22.4%), Intelligence Index (26.0%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai); AA-LCR 79.7%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 55/100.** Design Arena Website 1269; capped by text-only output assumption and no MMMU-Pro/CharXiv numbers found.
- **Coding: 62/100.** SWE-bench Pro (57.2%), LiveCodeBench v6 (81.4%), SWE-bench Vals (74.0%), AA-SciCode (50.6%), AA Coding Index (60.2%); moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 66.6/100.** Half-up mean of (60 + 68 + 88 + 55 + 62) / 5 = 66.6 → 67. Best-fit recommendation: strong knowledge reasoning at 1M context; verify on coding and HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Xiaomi MiMo-V2.5-Pro launch page + Artificial Analysis + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
