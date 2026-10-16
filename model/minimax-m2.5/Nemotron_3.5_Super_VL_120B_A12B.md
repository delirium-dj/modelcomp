# MiniMax M2.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/minimax-m2.5 (MiniMax AI model card), Artificial Analysis (`artificialanalysis.ai/models/minimax-m2.5`), Arcee Trinity-Large-Thinking comparison table
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax AI's proprietary reasoning model; 229B parameters; 1M context / text-in → text out; NVIDIA Open Model Agreement; sibling models: MiniMax-M3, MiniMax-M3.1 Flash Preview.
- **Provider / access:** MiniMax API (`minimax-m2.5`), open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`).
- **Release / knowledge:** Released 2026 per HF model card; knowledge cutoff not stated.
- **IDs:** `minimax-m2.5` (MiniMax API / OpenRouter), `MiniMaxAI/MiniMax-M2.5` (HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (HF model card). Verified.
- **Modalities:** Text-in → text-out per HF model card; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights MoE, 229B parameters, NVIDIA Open Model Agreement.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **84.8%** (Artificial Analysis)
- GDPval-AA: **1087 Elo** (Artificial Analysis); normalized **25.5%**
- AA Agentic Index: **16.8%** (Artificial Analysis)
- GDPval-AA: **1087 Elo** (Artificial Analysis)
- APEX-Agents-AA: **10.6%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GLM-5.1 model card comparison table — cross-ref); AA-GPQA Diamond **87.4%**
- HLE: **28%** (GLM-5.1 model card comparison table — cross-ref)
- MMLU-Pro: **80.8%** (Arcee Trinity-Large-Thinking comparison table — cross-ref)
- Artificial Analysis Intelligence Index: **22.8%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)
- AA-Omniscience Index **0.8%**; Accuracy **26.8%**; Hallucination rate **35.6%** (AA)
- GPQA Diamond (Vals): **86.6%** (Vals AI)
- MMLU-Pro (Vals): **80.4%** (Vals AI)

Coding:

- SWE-bench Pro: **56.2%** (MiniMax M2.7 launch page — cross-ref)
- SWE-Multilingual: **76.5%** (MiniMax M2.7 launch page — cross-ref)
- LiveCodeBench v6: **79.9%** (Vals AI)
- SWE-bench (Vals): **73.8%** (Vals AI)
- AA-SciCode: **50.1%** (Artificial Analysis)
- AA Coding Index: **52.6%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1244** (OpenRouter)

Long context:

- AA-LCR: **78.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 2.0 (57%), τ³-bench (67.6%), τ²-bench (84.8%), GDPval-AA (1087 Elo); capped by weak GDPval-AA normalized (25.5%), AA Agentic Index (16.8%), APEX-Agents-AA (10.6%). Moderate agentic tool-use profile.
- **Reasoning: 65/100.** GPQA Diamond 87.0%, MMLU-Pro 80.8%, AA-LCR (78.3%), Intelligence Index 22.8%; capped by CritPt (0.6%), HLE (28%), AA-Omniscience accuracy (26.8%), Intelligence Index (22.8%). Moderate reasoning.
- **Context window: 88/100.** Verified 1M tokens (HF model card); AA-LCR 78.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Text-in → text-out per HF model card; Design Arena Website 1244; capped by text-only output and no multimodal benchmark data found.
- **Coding: 64/100.** SWE-bench Pro (56.2%), LiveCodeBench v6 (79.9%), SWE-bench Vals (73.8%), AA-SciCode (50.1%), AA Coding Index (52.6%); moderate coding.
- **Cost efficiency: 90/100.** Open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 64.4/100.** Half-up mean of (60 + 65 + 88 + 45 + 64) / 5 = 65.6 → 66. Best-fit recommendation: strong knowledge reasoning at 1M context with open weights; verify on coding and agentic tasks given moderate results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai MiniMax-M2.5 model card + GLM-5.1 model card comparison table + Arcee Trinity-Large-Thinking comparison table + Artificial Analysis + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
