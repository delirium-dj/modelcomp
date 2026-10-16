# GPT-5.6 Sol — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-6-sol (OpenAI GPT-5.6 launch page), developers.openai.com/api/docs/models/gpt-5.6-sol, Artificial Analysis (`artificialanalysis.ai/models/gpt-5-6-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's GPT-5.6 flagship model (released April 2026 per benchlm.ai; July 2026 per Artificial Analysis) built for complex professional work; 1.05M context / 922K max input / 128K max output; reasoning effort levels none/low/medium(default)/high/xhigh/max; text+image input → text out; $4/$20 per MTok; knowledge cutoff Feb 16, 2026.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), native OpenAI API; sibling: GPT-5.6 Terra, GPT-5.6 Luna, GPT-5.6 Cyber.
- **Release / knowledge:** Released April 2026 (benchlm.ai) / July 2026 (AA); knowledge cutoff Feb 16, 2026.
- **IDs:** `gpt-5.6-sol` (OpenAI API); no Free ID confirmed.
- **Context window:** 1.05M tokens; max input 922K; max output 128K; prompts >272K priced at 2x input/cache rates and 1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured_outputs yes.
- **Pricing (as of 2026-10-16):** Input $4/MTok, Output $20/MTok; cached input $0.4/MTok; cache writes $2.5/MTok; prompts >272K priced at 2x input/cache rates and 1.5x output. 20% input price reduction and 33% output price reduction vs GPT-5.5; introductory pricing available at least through November 21, 2026.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI GPT-5.6 launch page; Vals AI 85.8%)
- BrowseComp: **92.2%** (OpenAI GPT-5.6 launch page)
- OSWorld 2.0: **62.6%** (OpenAI GPT-5.6 launch page)
- CyberGym: **84.5%** (OpenAI GPT-5.6 launch page)
- ExploitGym: **33.7%** (OpenAI GPT-5.6 launch page)
- Toolathlon: **58%** (OpenAI GPT-5.6 launch page)
- GDPval-AA: **1735 Elo** (OpenAI GPT-5.6 launch page; AA normalized 55.4%)
- AA ITBench: **56.2%** (Artificial Analysis)
- AA Agentic Index: **50.5%** (Artificial Analysis)
- Terminal-Bench 3.0: **34.6%** (frontierbench.ai)
- Terminal-Bench 2.1 (Terminal-Bench Hard): **65.9%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **94.6%** (OpenAI GPT-5.6 launch page); AA-GPQA Diamond **94.1%**; Vals **95.2%**
- HLE: **54.5%** (DeepMind Gemini 3.8 Flash card — cross-ref); AA-HLE **49.5%**
- MMLU-Pro: **89.1%** (Vals AI)
- ARC-AGI-1: **96.50%** (ARC Prize verified)
- ARC-AGI-2: **92.5%** (ARC Prize verified)
- ARC-AGI-3: **7.8%** (ARC Prize verified)
- Artificial Analysis Intelligence Index: **58.9%** (OpenAI GPT-5.6 launch page)
- AA-LCR (long-context reasoning): **84.0%** (Artificial Analysis)
- CritPt: **32.3%** (Artificial Analysis)
- AA-Omniscience Index **22.0%**; Accuracy **59.4%**; Hallucination rate **92.2%** (AA)
- IFBench: **72.7%** (Artificial Analysis)
- FrontierMath legacy: **89%** (OpenAI GPT-5.6 launch page)
- FrontierMath v2 (Tiers 1-3): **89.000%** (OpenAI GPT-5.6 launch page)
- FrontierMath v2 (Tier 4): **83.000%** (OpenAI GPT-5.6 launch page)

Coding:

- SWE-bench Pro: **64.6%** (OpenAI GPT-5.6 launch page)
- SWE-bench (Vals): **96.2%** (Vals AI)
- LiveCodeBench (Vals): **82.6%** (Vals AI)
- DeepSWE: **72.7%** (OpenAI GPT-5.6 launch page)
- FrontierCode 1.1 Extended: **60.6%** (Cognition/Devin)
- FrontierSWE v2: **32.2%** (Proximal)
- CursorBench 3.2: **67.2%** (Cursor evals)
- CursorBench 4.0: **41.7%** (Cursor evals)
- AA-SciCode: **57.1%** (Artificial Analysis)
- AA Coding Index: **77.4%** (Artificial Analysis)
- VulcanBench v3: **87.0%** (VulcanBench frontier results)
- VulcanBench CII v1: **86.5%** (VulcanBench CII v1 frontier results)
- Bug Hunt Bench: **42.0 fixes** (Bug Hunt Bench public data)

Multimodal & grounded:

- MMMU-Pro: **83%** (OpenAI GPT-5.6 launch page); MMMU-Pro w/ Python: **84.6%**
- AA-MMMU-Pro: **83.4%** (Artificial Analysis)

Long context:

- AA-LCR: **84.0%** (Artificial Analysis); declared 1.05M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Terminal-Bench 2.1 (91.9%), BrowseComp (92.2%), CyberGym (84.5%), OSWorld-Verified (62.6%), GDPval-AA (1735 Elo), τ²-bench (85.1%); capped by weak ExploitGym (33.7%), Toolathlon (58%), Terminal-Bench 3.0 (34.6%). Strong terminal and web agent profile.
- **Reasoning: 82/100.** ARC-AGI-1 (96.50%), ARC-AGI-2 (92.5%), GPQA (94.6%), FrontierMath legacy (89%), FrontierMath v2 Tiers 1-3 (89.000%), Artificial Analysis Intelligence Index (58.9%); capped by ARC-AGI-3 (7.8%), CritPt (32.3%), AA-Omniscience accuracy (59.4%), HLE (54.5%). Elite knowledge/puzzle reasoning.
- **Context window: 88/100.** Verified 1.05M context / 922K max input (official OpenAI docs); AA-LCR 84.0%; capped because no public full-depth needle-recall score at 1.05M.
- **Multimodal: 78/100.** Text+image in, text out per official API docs; MMMU-Pro (83%), MMMU-Pro w/ Python (84.6%); capped by text-only output.
- **Coding: 76/100.** SWE-bench Pro (64.6%), DeepSWE (72.7%), LiveCodeBench Vals (82.6%), SWE-bench Vals (96.2%), FrontierCode 1.1 Extended (60.6%); capped by FrontierSWE v2 (32.2%), CursorBench 4.0 (41.7%). Strong verified coding but weaker agentic/extended coding suites.
- **Cost efficiency: 50/100.** $4/$20 premium pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 81.2/100.** Half-up mean of (82 + 82 + 88 + 78 + 76) / 5 = 80.4 → 80. Best-fit recommendation: premium agentic reasoning model for complex coding and knowledge work; premium price justified only for the most demanding tasks where its 1.05M context and high reasoning edge matter.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
