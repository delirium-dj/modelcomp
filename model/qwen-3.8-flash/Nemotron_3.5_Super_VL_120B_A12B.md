# Qwen3.8-Flash-Next — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-8-flash-next (Qwen3.8-Flash-Next model card), Artificial Analysis (`artificialanalysis.ai/models/qwen3-8-flash-next`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's Qwen3.8-Flash-Next open-weights MoE reasoning model (released 26 Aug 2026 per AA; Qwen Community License 1.0) for coding and agentic tasks; 180B total / 6B active parameters, 256K–262K context window, text+image+video in → text out; sibling of Qwen3.8 Max.
- **Provider / access:** Qwen API (`qwen3.8-flash-next`), open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`), 1 API provider per Artificial Analysis.
- **Release / knowledge:** Released 2026-08-26 (AA); Qwen Community License 1.0 (commercial use allowed with restrictions); knowledge cutoff not stated.
- **IDs:** `qwen3.8-flash-next` (Qwen API), `Qwen/Qwen3.8-Flash-Next` (HF weights). No Free ID confirmed (Qwen Community License → commercial use with restrictions).
- **Context window:** 256K–262K tokens (benchlm 262K, AA 256k/260k). Verified via benchlm.ai and AA.
- **Modalities:** Text, image, and video in; text out; reasoning yes (extended thinking); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.15/M input, $0.47/M output (AA; cache discount 89%, cost per task $0.37).
- **Architecture:** Open-weights MoE, 180B total / 6B active, Qwen Community License 1.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: not found for this variant
- CoWorkBench: **73.9%** (Qwen model card)
- JobBench: **55.7%** (Qwen model card)
- Agents' Last Exam: **51.2%** (Qwen model card)
- Toolathlon-Verified: **73.5%** (Qwen model card)
- AndroidWorld: **84.5%** (Qwen model card)
- OSWorld 2.0: **19.4%** (Qwen model card)
- GDPval-AA: **1648 Elo** (Artificial Analysis); normalized **56.4%**
- AA Agentic Index: not found for this variant

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **40** (#8 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA: **91.7%**; GPQA-D: **91.7%** (Qwen model card); AA-GPQA Diamond **92.3%**
- HLE: **35.9%**; HLE w/o tools: **35.9%** (Qwen model card); AA-HLE **38.0%**
- MMLU-Pro: not found for this variant
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis)
- CritPt: **11.1%** (Artificial Analysis)
- AA-Omniscience Index **-9.7%**; Accuracy **24.5%**; Hallucination rate **45.3%** (AA)
- IFBench: **81.3%** (Qwen model card)

Coding:

- SWE-bench Pro: **62.5%** (Qwen model card)
- SWE Multilingual: **81%** (Qwen model card)
- DeepSWE: **58.7%** (Qwen model card)
- LiveCodeBench v6: **91.9%** (Qwen model card)
- NL2Repo: **48.1%** (Qwen model card)
- AA-SciCode: **50.6%** (Artificial Analysis)
- AA Coding Index: **73.0%** (Artificial Analysis)

Multimodal & grounded:

- Vision2Web: **64.0%** (Qwen model card)
- ERQA: **72.3%** (Qwen model card)
- LVBench: **76.6%** (Qwen model card)
- RealWorldQA: **88.5%** (Qwen model card)
- MathVision: **90.6%**; MathVision w/ Python **95.7%** (Qwen model card)
- CharXiv: **84.6%** w/o tools; **90.6%** with tools (Qwen model card)
- AA-MMMU-Pro: **79.8%** (Artificial Analysis)

Long context:

- AA-LCR: **79.7%** (Artificial Analysis); declared 256K–262K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Strong Toolathlon-Verified (73.5), CoWorkBench (73.9), AndroidWorld (84.5), GDPval-AA (1648 Elo); capped by weak Agents' Last Exam (51.2), OSWorld 2.0 (19.4%). Solid agentic tool profile.
- **Reasoning: 74/100.** GPQA 91.7%, AA Intelligence Index 40 (#8 open-weights), AA-LCR 79.7%, IFBench 81.3%; capped by CritPt (11.1), HLE (35.9%), AA-Omniscience accuracy (24.5%). Strong knowledge reasoning.
- **Context window: 85/100.** Verified 256K–262K tokens (benchlm + AA); AA-LCR 79.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 82/100.** Text + image + video in, text out; MathVision 90.6–95.7%, CharXiv 84.6–90.6%, RealWorldQA 88.5%, AA-MMMU-Pro 79.8%; capped by text-only output.
- **Coding: 70/100.** LiveCodeBench v6 91.9%, SWE-bench Pro 62.5%, DeepSWE 58.7%, NL2Repo 48.1%; capped by weak deepSWE (58.7%), no SWE-bench Verified number found — scored conservatively.
- **Cost efficiency: 93/100.** Qwen Community License open weights (self-host ~$0) plus cheap hosted pricing ($0.15/$0.47, 89% cache discount, $0.37/task); not counted toward Overall.
- **Overall Score: 77.4/100.** Half-up mean of (76 + 74 + 85 + 82 + 70) / 5 = 78.2 → 78. Best-fit recommendation: strong open-weights multimodal coding agent at 256K context with excellent value; verify on SWE-Verified and full-context tasks given mixed coding coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Qwen3.8-Flash-Next model card + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
