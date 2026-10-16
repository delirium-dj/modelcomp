# DeepSeek-V3.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/deepseek-v3.2 (deepseek-ai/DeepSeek-V3.2 Hugging Face model card), Artificial Analysis (`artificialanalysis.ai/models/deepseek-v3.2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek's open-weights reasoning model (released 2026 per HF model card); 685B total parameters; 256K context / text-in → text out; MIT license; sibling models: DeepSeek-V3, DeepSeek-V3.1.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`), open weights on Hugging Face (`deepseek-ai/DeepSeek-V3.2`).
- **Release / knowledge:** Released 2026 per HF model card; knowledge cutoff not stated.
- **IDs:** `deepseek-v3.2` (DeepSeek API / HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai). Verified.
- **Modalities:** Text-in → text-out per HF model card; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights MoE, 685B parameters, MIT license.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **97.7%** (Artificial Analysis)
- GDPval-AA: **1181 Elo** (Artificial Analysis); normalized **30.8%**
- GDPval-AA: **1181 Elo** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GLM-5.1 model card comparison table — cross-ref)
- HLE: **31%** (GLM-5.1 model card comparison table — cross-ref)
- MMLU-Pro: **80.8%** (Arcee Trinity-Large-Thinking comparison table — cross-ref)
- Artificial Analysis Intelligence Index: **22.8%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)
- AA-Omniscience Index **0.8%**; Accuracy **26.8%**; Hallucination rate **35.6%** (AA)

Coding:

- LiveCodeBench v6: **79.9%** (Vals AI)
- SWE-bench (Vals): **73.8%** (Vals AI)
- AA-SciCode: **50.1%** (Artificial Analysis)
- AA Coding Index: **52.6%** (Artificial Analysis)

Multimodal & grounded:

- No multimodal benchmarks found; text-only model per HF model card.

Long context:

- AA-LCR: **78.3%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** τ²-bench (97.7%), GDPval-AA (1181 Elo), AA Agentic Index not found; capped by weak GDPval-AA normalized (30.8%). Moderate agentic tool-use profile.
- **Reasoning: 64/100.** GPQA Diamond 87.0%, MMLU-Pro 80.8%, AA-LCR (78.3%), Intelligence Index 22.8%; capped by CritPt (0.6%), HLE not found, AA-Omniscience accuracy (26.8%), Intelligence Index (22.8%). Moderate reasoning.
- **Context window: 75/100.** Verified 256K tokens (benchlm.ai); AA-LCR 78.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 35/100.** Text-in → text-out per HF model card; capped by text-only output and zero multimodal benchmark data found.
- **Coding: 68/100.** LiveCodeBench v6 (79.9%), SWE-bench Vals (73.8%), AA-SciCode (50.1%), AA Coding Index (52.6%); moderate coding.
- **Cost efficiency: 90/100.** MIT license open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 62/100.** Half-up mean of (68 + 64 + 75 + 35 + 68) / 5 = 58.4 → 58. Best-fit recommendation: strong coding at 256K context with open weights (MIT license); verify on agentic and HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai DeepSeek-V3.2 model card + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
