# MiniMax M3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/minimax-m3 (MiniMax blog), Artificial Analysis (`artificialanalysis.ai/models/minimax-m3`), Vals AI, Epoch AI, OpenHarmony Bench
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weights MoE reasoning model (released 1 Jun 2026 per AA) for coding and agentic tasks; 428B total / 23B active parameters, 1M-token context, text+image+video in → text out, MINIMAX COMMUNITY LICENSE; sibling: MiniMax M2.7, M3.1 Flash Preview.
- **Provider / access:** MiniMax API (`minimax-m3`), open weights on Hugging Face (`MiniMaxAI/MiniMax-M3`), 14 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-06-01 (AA); MINIMAX COMMUNITY LICENSE (commercial use allowed with restrictions); knowledge cutoff not stated.
- **IDs:** `minimax-m3` (MiniMax API), `MiniMaxAI/MiniMax-M3` (HF weights). No Free ID confirmed (community license → commercial use with restrictions).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out; reasoning yes (extended thinking); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.30/M input, $1.20/M output (AA; cache discount 80%, cost per task $0.51).
- **Architecture:** Open-weights MoE, 428B total / 23B active, MINIMAX COMMUNITY LICENSE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax blog; Vals AI 53.6%; AA 65.2%)
- Terminal-Bench 4.0: **2.0%** (Artificial Analysis)
- BrowseComp: **83.5%** (MiniMax blog)
- OSWorld-Verified: **70.1%** (MiniMax blog); OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- MCP Atlas: **74.2%** (MiniMax blog)
- Claw-Eval: **74.5%** (MiniMax blog)
- τ²-bench results: **88.9%** (Artificial Analysis)
- GDPval-AA: **1242 Elo** (Artificial Analysis)
- AA Briefcase Elo: **1091** (Artificial Analysis)
- AA AutomationBench: **21.3%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **32.1%** (Artificial Analysis)
- AA Harvey LAB v1.0: **88.4%** (Artificial Analysis)
- AA Tau3 Banking: **15.3%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **2.0%** (Artificial Analysis)
- GDP.pdf: **9.8%** (Artificial Analysis)
- AA Agentic Index: **30.8%** (Artificial Analysis)
- AA-AnalystAgent: **10.0%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **29.2%** (#21 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA Diamond: **92.9%** (Artificial Analysis); **92.7%** (Vals AI)
- HLE: **39.0%** (AA-HLE)
- MMLU-Pro: **84.2%** (Vals AI)
- USAMO 2026: **85.7%** (MiniMax blog)
- AA-LCR (long-context reasoning): **83.0%** (Artificial Analysis)
- MLCR-AA: **17.2%** (Artificial Analysis)
- CritPt: **3.7%** (Artificial Analysis)
- AA-Omniscience Index **1.4%**; Accuracy **16.7%**; Hallucination rate **18.4%** (AA)
- IFBench: **82.9%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80.5%** (MiniMax blog)
- SWE-bench Pro: **59%** (MiniMax blog)
- SWE-bench (Vals): **75.0%** (Vals AI)
- LiveCodeBench (Vals): **82.2%** (Vals AI)
- NL2Repo: **42.1%** (MiniMax blog)
- AA-SciCode: **47.1%** (Artificial Analysis)
- VIBE V2: **50.1%** (MiniMax model card)
- SVG-Bench: **63.7%** (MiniMax model card)
- KernelBench Hard: **28.8%** (MiniMax model card)
- OpenHarmony Bench: **48.4%** (leaderboard)
- AA Coding Index: **58.6%** (Artificial Analysis)

Multimodal & grounded:

- OfficeQA Pro: **45.1%** (MiniMax blog)
- OmniDocBench 1.5: **91.6%** (MiniMax blog)
- MMMU-Pro: **78.1%** (MiniMax blog); AA-MMMU-Pro **78.6%**
- VideoMMMU: **84.6%** (MiniMax blog)
- Video-MME (with subtitle): **85.4%** (MiniMax blog)
- Design Arena Website: **1259** (OpenRouter)

Long context:

- AA-LCR: **83.0%** (Artificial Analysis); MLCR-AA: **17.2%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Strong Terminal-Bench 2.1 (66.0), BrowseComp (83.5), OSWorld-Verified (70.1), GDPval-AA (1242 Elo), τ²-bench (88.9%); capped by weak Terminal-Bench 4.0 (2.0%), OSWorld 2.0 (4.6%), AA Agentic Index (30.8%). Strong agentic/tool profile on terminal tasks.
- **Reasoning: 72/100.** GPQA 92.9%, MMLU-Pro 84.2%, USAMO 2026 85.7%, AA Intelligence Index 29, AA-LCR 83.0%; capped by CritPt (3.7), HLE (39.0%), AA-Omniscience accuracy (16.7%), Intelligence Index (29.2). Strong math knowledge, very weak HLE/open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 83.0%; capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 82/100.** Text + image + video in, text out; VideoMMMU 84.6%, Video-MME 85.4%, OmniDocBench 91.6%, MMMU-Pro 78.1-78.6%; capped by text-only output.
- **Coding: 66/100.** SWE-bench Verified 80.5%, LiveCodeBench Vals 82.2%, SWE Multilingual 81%; capped by SWE-bench Pro (59%), KernelBench Hard (28.8%), SVG-Bench (63.7%). Strong verified coding, weaker kernel/kernelbench tasks.
- **Cost efficiency: 90/100.** Open-weights (self-host ~$0) plus cheap hosted pricing ($0.30/$1.20, 80% cache discount, $0.51/task); not counted toward Overall.
- **Overall Score: 76.8/100.** Half-up mean of (76 + 72 + 88 + 82 + 66) / 5 = 76.8 → 77. Best-fit recommendation: strong open-weights multimodal agent/coding model at 1M context with good value; verify on HLE-class and full-context tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + MiniMax blog + Artificial Analysis + Vals AI + Epoch AI + OpenHarmony Bench independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
