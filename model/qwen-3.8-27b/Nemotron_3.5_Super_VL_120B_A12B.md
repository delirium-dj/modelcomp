# Qwen3.8-27B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-8-27b (Qwen3.8-27B model card), Artificial Analysis (`artificialanalysis.ai/models/qwen3-8-27b`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's open-weights MoE reasoning model (released August 14, 2026 per AA); 27B total / 23B active parameters, 262K context window, text+image+video in → text out, Apache 2.0 license.
- **Provider / access:** Qwen API (`qwen3-8-27b`), Hugging Face (`Qwen/Qwen3.8-27B`), 12 API providers per Artificial Analysis; Qwen Community License 1.0.
- **Release / knowledge:** Released 2026-08-14 (AA); knowledge cutoff not stated.
- **IDs:** `qwen3-8-27b` (Qwen API); `Qwen/Qwen3.8-27B` (HF weights). No Free ID confirmed (Apache 2.0 → commercial use allowed with restrictions).
- **Context window:** 262K tokens (benchlm.ai); AA lists 256k tokens (~384 A4 pages). Verified.
- **Modalities:** Text, image, and video in; text out; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.50/M input, $3.00/M output (AA; cache discount 80%, cost per task $1.01).
- **Architecture:** Open-weights MoE, 27B total / 23B active, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Qwen model card; Vals AI 58.4%; AA 79.8%)
- CoWorkBench: **70.7%** (Qwen model card)
- JobBench: **33.4%** (Qwen model card)
- Agents' Last Exam: **42.9%** (Qwen model card)
- OSWorld-Verified: **84.3%** (Qwen model card)
- WebArena-Verified: **64.8%** (Qwen model card)
- AndroidWorld: **81.9%** (Qwen model card)
- GDPval-AA: **1420 Elo** (Artificial Analysis); normalized **46.0%**
- AA Briefcase Elo: **1397** (Artificial Analysis)
- AA AutomationBench: **48.2%** (Artificial Analysis)
- AA Agentic Index: **46.5%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **5.6%** (Artificial Analysis)
- GDP.pdf: **16.4%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **90.3%** (Qwen model card); AA-GPQA Diamond **90.0%**; Vals **88.9%**
- HLE: **30.8%** (Qwen model card); AA-HLE **33.9%**
- MMLU-Pro: **84.3%** (Vals AI)
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis)
- CritPt: **5.4%** (Artificial Analysis)
- MLCR-AA: **21.7%** (Artificial Analysis)
- AA-Omniscience Index **-10.0%**; Accuracy **15.6%**; Hallucination rate **30.3%** (AA)
- FrontierMath v2 (Tiers 1-3): **34.386%** (Epoch AI)
- FrontierMath v2 (Tier 4): **17.073%** (Epoch AI)

Coding:

- SWE-bench Pro: **61.7%** (Qwen model card)
- SWE Multilingual: **75.8%** (Qwen model card)
- LiveCodeBench v6: **90.3%** (Qwen model card); LiveCodeBench Vals: **84.0%**; SWE-bench Vals: **86.0%** (Vals AI)
- DeepSWE: **42.2%** (Qwen model card)
- NL2Repo: **42.3%** (Qwen model card)
- AA-SciCode: **46.6%** (Artificial Analysis)
- AA Coding Index: **68.1%** (Artificial Analysis)
- VulcanBench v3: **82.6%** (VulcanBench leaderboard)
- Bug Hunt Bench: **15.0 fixes** (Bug Hunt Bench public data)

Multimodal & grounded:

- MathVision: **90.0%**; MathVision w/ Python: **94.6%** (Qwen model card)
- BabyVision: **65.7%**; BabyVision w/ Python: **85.6%** (Qwen model card)
- CharXiv: **83.7%** w/o tools; **90.2%** with tools (Qwen model card)
- OmniDocBench 1.5: **91.1%** (Qwen model card)
- RealWorldQA: **85.9%** (Qwen model card)
- ERQA: **65.5%** (Qwen model card)
- AA-MMMU-Pro: **79.8%** (Artificial Analysis)
- Design Arena Website: **1271** (OpenRouter)

Long context:

- AA-LCR: **79.7%** (Artificial Analysis); MLCR-AA: **21.7%** (Artificial Analysis); declared 262K-262K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 (73.0%), OSWorld-Verified (84.3%), GDPval-AA (1420 Elo), AndroidWorld (81.9%), Toolathlon-Verified (73.5%); capped by weak Agents' Last Exam (42.9%), JobBench (33.4%), AA Agentic Index (46.5%). Strong agentic tool-use profile.
- **Reasoning: 74/100.** GPQA 90.3%, MMLU-Pro 84.3%, ARC-AGI-1 (not found for this exact variant), AA Intelligence Index 25.2 (#1 of 141 open-weights), AA-LCR 79.7%; capped by CritPt (5.4%), HLE (30.8%), AA-Omniscience accuracy (15.6%). Strong knowledge reasoning but weak on hardest open-ended problems.
- **Context window: 70/100.** Verified 262K tokens (benchlm.ai, AA); AA-LCR 79.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 82/100.** Text + image + video in, text out; MathVision 90.0-94.6%, CharXiv 83.7-90.2%, OmniDocBench 91.1%, RealWorldQA 85.9%, AA-MMMU-Pro 79.8%; capped by text-only output.
- **Coding: 66/100.** LiveCodeBench v6 90.3%, SWE-bench Pro 61.7%, SWE Multilingual 75.8%, DeepSWE 42.2%; capped by ProgramBench (20.3%), DeepSWE (42.2%), SWE-bench Pro (61.7%). Strong competitive coding, weaker agentic coding benchmarks.
- **Cost efficiency: 80/100.** Apache 2.0 open weights (self-host ~$0) plus cheap hosted pricing ($0.50/$3.00, 80% cache discount, $1.01/task); not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (78 + 74 + 70 + 82 + 66) / 5 = 74.8 → 74. Best-fit recommendation: strong open-weights multimodal coding agent at 262K context with excellent value; verify on SWE-Pro and agentic coding tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Qwen3.8-27B model card + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
