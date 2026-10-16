# Inkling Small — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/inkling-small (Thinking Machines Lab launch post), Artificial Analysis (`artificialanalysis.ai/models/inkling-small`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' open-weights MoE reasoning model (released July 30, 2026 per AA); 266B total / 12B active parameters, 1M-token context, text+image+speech in → text out, Apache 2.0 license; sibling: Inkling (larger variant).
- **Provider / access:** Thinking Machines API (`inkling-small`), OpenRouter, open weights on Hugging Face (`thinkingmachines/Inkling-Small`), 3 API providers per Artificial Analysis; Apache 2.0 license.
- **Release / knowledge:** Released July 30, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `inkling-small` (Thinking Machines API / OpenRouter), `thinkingmachines/Inkling-Small` (HF weights). No Free ID confirmed (Apache 2.0 → commercial use allowed with restrictions).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and speech in; text out; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.30/M input, $1.20/M output (AA; cache discount 80%, cost per task $0.09).
- **Architecture:** Open-weights MoE, 266B total / 12B active, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (Thinking Machines launch post; Vals AI 55.1%)
- BrowseComp: **83.5%** (Thinking Machines launch post)
- MCP Atlas: **79.6%** (Thinking Machines launch post)
- Toolathlon-Verified: **54.4%** (Thinking Machines launch post)
- GDPval-AA: **1191 Elo** (Artificial Analysis)
- AA Agentic Index: **24.9%** (Artificial Analysis)
- JobBench: **33.4%** (Thinking Machines launch post)

Reasoning / knowledge:

- GPQA: **89.5%** (Thinking Machines launch page); AA-GPQA Diamond **89.5%**
- HLE: **47.8%** (Thinking Machines launch page); AA-HLE **33.3%**
- MMLU-Pro: **88.5%** (Vals AI)
- ARC-AGI-1: **84.00%** (ARC Prize verified)
- ARC-AGI-2: **40.1%** (Thinking Machines launch page)
- Artificial Analysis Intelligence Index: **25.7%** (#29 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **75.7%** (Artificial Analysis)
- CritPt: **8.3%** (Thinking Machines launch page)
- AA-Omniscience Index **-8.9%**; Accuracy **33.2%**; Hallucination rate **63.0%** (AA)
- IFBench: **82.2%** (Thinking Machines launch page)
- FrontierMath v2 Tiers 1-3: **46.316%** (Epoch AI)
- FrontierMath v2 (Tier 4): **17.073%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.2%** (Thinking Machines launch page)
- SWE-bench Pro: **55.9%** (Thinking Machines launch page)
- LiveCodeBench v6: **85.9%** (Vals AI)
- SWE-bench (Vals): **82.2%** (Vals AI)
- SciCode: **48.7%** (Thinking Machines launch page)
- AA-SciCode: **49.7%** (Artificial Analysis)
- AA Coding Index: **53.0%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **74%** (Thinking Machines launch page); AA-MMMU-Pro **74.0%**
- CharXiv: **81.3%** (Thinking Machines launch page); CharXiv w/o tools: **77.4%**
- Design Arena Website: **1271** (OpenRouter)

Long context:

- AA-LCR: **75.7%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 (64.7%), BrowseComp (83.5%), MCP Atlas (79.6%), Toolathlon-Verified (54.4%), GDPval-AA (1191 Elo); capped by weak Agents' Last Exam (42.9%), JobBench (33.4%). Strong agentic tool-use profile.
- **Reasoning: 74/100.** GPQA 89.5%, MMLU-Pro 88.5%, ARC-AGI-1 (84.00%), AA-LCR (75.7%), FrontierMath T1-3 (46.316%); capped by CritPt (8.3%), HLE (47.8%), AA-Omniscience accuracy (33.2%), Intelligence Index (25.7%). Strong knowledge reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 75.7%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 82/100.** Text + image + speech in, text out; CharXiv 81.3%, AA-MMMU-Pro 74.0%; capped by text-only output.
- **Coding: 70/100.** SWE-bench Verified (80.2%), LiveCodeBench v6 (85.9%), SWE-bench Vals (82.2%), SciCode (48.7%); capped by SWE-bench Pro (55.9%), AA-SciCode (49.7%). Strong verified coding.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0) plus cheap hosted pricing ($0.30/$1.20, 80% cache discount, $0.09/task); not counted toward Overall.
- **Overall Score: 78.8/100.** Half-up mean of (78 + 74 + 90 + 82 + 70) / 5 = 76.8 → 77. Best-fit recommendation: strong open-weights multimodal coding agent at 1M context with excellent value; verify on HLE-class and agentic coding tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Thinking Machines launch post + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
