# Gemma 4 26B A4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemma-4-26b-a4b (Google Gemma 4 26B A4B Hugging Face model card), Artificial Analysis (`artificialanalysis.ai/models/gemma-4-26b-a4b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE reasoning model (released April 2, 2026 per AA); 25.2B total / 3.8B active parameters; 256K context / text+image+video in → text out; $0.10/$0.37 per MTok; Apache 2.0 license; sibling models: Gemma 4 31B, Gemma 4 12B, Gemma 4 E4B, Gemma 4 E2B.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it`); 8 API providers per AA; Apache 2.0 license.
- **Release / knowledge:** Released April 2, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `gemma-4-26b-a4b` / `gemma-4-26b-a4b-it` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.10/M input, $0.37/M output (AA; cache discount 50%, blended rate $0.09).
- **Architecture:** Open-weights MoE, 25.2B total / 3.8B active, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **43.6%** (Artificial Analysis)
- GDPval-AA: **713 Elo** (Artificial Analysis); normalized **3.3%**
- Gert Labs not found for this variant

Reasoning / knowledge:

- GPQA: **82.3%** (Google Gemma 4 26B A4B HF model card — cross-ref); AA-GPQA Diamond **79.2%**
- HLE: **17.2%** (Google Gemma 4 26B A4B HF model card — cross-ref); HLE w/o tools: **8.7%**
- MMLU-Pro: **82.6%** (Google Gemma 4 26B A4B model card — cross-ref)
- Artificial Analysis Intelligence Index: **16.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **65.7%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA-Omniscience Index **-50.8%**; Accuracy **19.1%**; Hallucination rate **86.4%** (AA)
- MRCRv2: **44.1%** (Google Gemma 4 26B A4B HF model card — cross-ref)

Coding:

- LiveCodeBench v6: **77.1%** (Google Gemma 4 26B A4B HF model card — cross-ref)
- AA-SciCode: **40.0%** (Artificial Analysis)
- AA Coding Index: **39.3%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **73.8%** (Google Gemma 4 26B A4B model card — cross-ref); AA-MMMU-Pro **69.2%**

Instruction Following:

- AA-IFBench: **72.4%** (Artificial Analysis)

Long context:

- AA-LCR: **65.7%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** τ²-bench (43.6%); capped by weak GDPval-AA normalized (3.3%), AA Agentic Index not found, extremely thin coverage — only 2 agentic benchmarks found.
- **Reasoning: 62/100.** GPQA 82.3%, MMLU-Pro 82.6%, MRCRv2 (44.1%), AA-LCR (65.7%), AA-GPQA Diamond (79.2%); capped by CritPt (0.0%), HLE (17.2%), AA-HLE (19.3%), AA-Omniscience accuracy (19.1%), Intelligence Index (16.7%). Strong knowledge reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 75/100.** Verified 256K tokens (benchlm.ai + AA); AA-LCR 65.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 70/100.** Text + image + video in, text out per AA; MMMU-Pro (73.8%), AA-MMMU-Pro (69.2%); capped by text-only output assumption.
- **Coding: 50/100.** LiveCodeBench v6 (77.1%), AA-SciCode (40.0%); capped by AA Coding Index (39.3%). Moderate coding.
- **Cost efficiency: 85/100.** $0.10/$0.37 competitive pricing with 50% cache discount, Apache 2.0 open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 58/100.** Half-up mean of (35 + 62 + 75 + 70 + 50) / 5 = 58.4 → 58. Best-fit recommendation: strong knowledge reasoning at 256K context with open weights and competitive pricing; verify on agentic tasks given thin tool-use coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Gemma 4 26B A4B model card + HF model card comparison table + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
