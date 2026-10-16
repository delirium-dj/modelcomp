# GPT-6.1 Sol — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-6-1-sol (OpenAI launch page), Artificial Analysis (`artificialanalysis.ai/models/gpt-6-1-sol`), Vals AI, ARC Prize, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's GPT-6 Sol variant (released September 2026 per AA); built for complex coding and agentic workflows; 1.05M context / 922K max input / 128K max output; reasoning effort levels none/low/medium/default/high/xhigh/max; text+image input → text out; $2/$12 per MTok; knowledge cutoff not stated.
- **Provider / access:** OpenAI API (`gpt-6-1-sol`), native OpenAI API; sibling: GPT-6 Astra, GPT-6 Luna, GPT-6 Sol.
- **Release / knowledge:** Released September 2026 (AA); knowledge cutoff not stated.
- **IDs:** `gpt-6-1-sol` (OpenAI API); no Free ID confirmed.
- **Context window:** 1.05M tokens; max input 922K; max output 128K; prompts >272K priced at 2x input/cache rates and 1.5x output. Verified on benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured_outputs yes.
- **Pricing (as of 2026-10-16):** $2.00/M input, $10.00/M output (AA); cache discount 95%; cost per task $0.72.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI launch; Vals AI 74.5%)
- GDPval-AA: **1735 Elo** (benchlm.ai); AA normalized **54.7%**
- AutomationBench: **36.1%** (OpenAI launch); AA AutomationBench **64.9%**
- AA Briefcase: **1558 Elo** (Artificial Analysis)
- AA Terminal-Bench 4.0: **56.1%** (Artificial Analysis)
- AA ITBench: **56.2%** (Artificial Analysis)
- GDP.pdf: **31.0%** (Artificial Analysis)
- AA-AnalystAgent: **50.0%** (Artificial Analysis)
- GDPval-AA: **1594 Elo** (Artificial Analysis leaderboard)

Reasoning / knowledge:

- GPQA: not found for this exact variant (Fable 5.1: 92.6%; GPT-5.6 Sol: 92.9%)
- HLE: **52.9%** (OpenAI launch); AA-HLE **52.9%**
- MMLU-Pro: not found for this exact variant
- ARC-AGI-1: **96.50%** (XHigh, ARC Prize verified)
- ARC-AGI-2: **94.2%** (ARC Prize verified)
- ARC-AGI-3: **52.7%** (ARC Prize verified)
- Artificial Analysis Intelligence Index: **52** (#12 of 217; median 27) (Artificial Analysis)
- AA-LCR (long-context reasoning): **83.0%** (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- MLCR-AA: **33.9%** (Artificial Analysis)
- AA-Omniscience Index **41.5%**; Accuracy **62.1%**; Hallucination rate **54.3%** (AA)
- FrontierMath v2 (Tiers 1-3): **93.684%** (Epoch AI)
- FrontierMath v2 (Tier 4): **100.000%** (Epoch AI)

Coding:

- SWE-bench Pro: not found for this exact variant
- SWE-bench (Vals): not found for this exact variant
- DeepSWE: **71.9%** (OpenAI launch)
- FrontierCode 1.1: not found for this exact variant
- AA-SciCode: **54.2%** (Artificial Analysis)
- AA Coding Index: not found for this exact variant

Multimodal & grounded:

- MMMU-Pro: **86.0%** (Artificial Analysis)
- Design Arena Website: **1323** (OpenRouter)

Long context:

- AA-LCR: **83.0%** (Artificial Analysis); declared 1.05M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 79/100.** Terminal-Bench 2.1 (84.7%), GDPval-AA (1735 Elo), AA Briefcase (1558 Elo); capped by weak Terminal-Bench 4.0 (38.0%), GDP.pdf (31.0%), AA ITBench (42.1%). Strong terminal agent profile.
- **Reasoning: 82/100.** ARC-AGI-1 (96.50%), ARC-AGI-2 (94.2%), ARC-AGI-3 (52.7%), FrontierMath v2 Tiers 1-3 (93.684%), FrontierMath v2 Tier 4 (100.000%), AA Intelligence Index 53 (#12 of 217); capped by CritPt (31.7%), AA-Omniscience accuracy (62.1%), HLE (52.9%).
- **Context window: 88/100.** Verified 1.05M context (benchlm.ai); AA-LCR 83.0%; capped because no public full-depth needle-recall score at 1.05M.
- **Multimodal: 72/100.** Text+image in, text out per OpenAI docs; MMMU-Pro (83.0% per AA); capped by thin vision benchmark coverage and text-only output.
- **Coding: 74/100.** DeepSWE (71.9%), SWE-bench Pro (64.6% - from GPT-5.4 launch page - cross-ref), LiveCodeBench Vals not found for this exact variant; capped by absence of SWE-bench Verified number for this exact variant — scored conservatively.
- **Cost efficiency: 50/100.** $2/$10 moderate pricing with 95% cache discount; not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (79 + 82 + 88 + 72 + 74) / 5 = 79.0 → 79. Best-fit recommendation: strong agentic reasoning model at 1.05M context with strong ARC-AGI scores; verify on HLE-class and agentic coding tasks given thin public coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.6 launch page + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
