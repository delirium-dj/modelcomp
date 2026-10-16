# GPT-6 Sol — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-6-sol`), benchlm.ai/models/gpt-6-sol (OpenAI launch page + ARC Prize + Epoch AI + Vals AI), Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's GPT-6 Sol model (default snapshot gpt-6-sol; superseded by GPT-6.1 Sol) built for complex coding and agentic workflows; 1.05M context / 922K max input / 128K max output, reasoning effort none/low/medium(default)/high/xhigh/max, text+image input → text output, knowledge cutoff Apr 20, 2026, $2/$12 per MTok.
- **Provider / access:** OpenAI API (`gpt-6-sol`, Chat Completions + Responses APIs); native OpenAI API. Sibling: GPT-6.1 Sol (newer), GPT-6 Astra, GPT-6 Luna.
- **Release / knowledge:** GPT-6 family launch per openai.com/index/gpt-6-sol-and-luna/; knowledge cutoff Apr 20, 2026.
- **IDs:** `gpt-6-sol` (OpenAI API); no Free ID confirmed.
- **Context window:** 1,050,000 tokens; maximum input 922,000; max output 128,000; prompts >272K priced at 2x input/cache and 1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $2/1M tokens, cached input $0.2/1M, cache writes $2.5/1M, output $10/1M; regional +10% premium; batch/Flex 50% off; Fast mode 2x.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **56.4%** (OpenAI GPT-6 Sol and Luna launch)
- AutomationBench: **33.2%** (OpenAI GPT-6 Sol and Luna launch)
- OSWorld 2.0: **60.5%** (OpenAI GPT-6 Sol and Luna launch)
- ExploitGym: **22.1%** (OpenAI GPT-6 Astra system card)
- GDPval-AA normalized: **50.4%** (Artificial Analysis)
- AA ITBench: **49.4%** (Artificial Analysis)
- CWE-bench v1: **52.0%** (Collinear leaderboard)
- Hermes Index: **44.1%**; Hermes Bench: **73.5%** (Nous Research)
- MazeBench: **7%** (leaderboard)

Reasoning / knowledge:

- ARC-AGI-1: **95.50%** (Max, ARC Prize verified); ARC-AGI-2: **89.6%**; ARC-AGI-3: **4.6%** (ARC Prize)
- Artificial Analysis Intelligence Index: **47.6%** (Artificial Analysis)
- HLE: **47.9%** (AA-HLE)
- CritPt: **30.9%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **83.7%** (Artificial Analysis)
- AA-Omniscience Index **27.1%**; Accuracy **54.5%**; Hallucination rate **60.1%** (AA)
- FrontierMath v2 Tiers 1-3: **89.825%**; Tier 4: **90.000%** (Epoch AI)

Coding:

- DeepSWE: **68.8%** (OpenAI GPT-6 Sol and Luna launch)
- AA-SciCode: **57.6%** (Artificial Analysis)
- No verified public SWE-bench/LiveCodeBench numbers found for this exact model.

Multimodal & grounded:

- AA-MMMU-Pro: **82.9%** (Artificial Analysis)
- Text+image in, text out per official API docs; no audio/video input.

Long context:

- AA-LCR: **83.7%** (Artificial Analysis); declared 1.05M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Agents' Last Exam (56.4%), OSWorld 2.0 (60.5%), AutomationBench (33.2%), GDPval-AA (50.4% normalized); capped by weak ExploitGym (22.1%), MazeBench (7%), AutomationBench raw (33.2%). Moderate agentic tool use.
- **Reasoning: 76/100.** ARC-AGI-1 95.50%, ARC-AGI-2 89.6%, FrontierMath T1-3 89.8%, FrontierMath T4 90.0%, GPQA not found for this exact model, AA Intelligence Index 47.6%; capped by CritPt (30.9), AA-Omniscience accuracy (54.5%), HLE (47.9%). Strong math/puzzle reasoning.
- **Context window: 88/100.** Verified 1.05M context (official OpenAI docs); AA-LCR 83.7%; capped because no public full-depth needle-recall score at the full window.
- **Multimodal: 74/100.** Text+image in, text out; AA-MMMU-Pro 82.9%; capped by text-only output and thin vision benchmark coverage.
- **Coding: 68/100.** DeepSWE 68.8%, AA-SciCode 57.6%; capped by absence of public SWE-bench/LiveCodeBench numbers — scored conservatively.
- **Cost efficiency: 80/100.** $2/$12 moderate pricing with 90% cache-read discount; not counted toward Overall.
- **Overall Score: 75.2/100.** Half-up mean of (70 + 76 + 88 + 74 + 68) / 5 = 75.2 → 75. Best-fit recommendation: balanced GPT-6 Sol coding/agentic model at moderate price; verify on agentic SWE and exploit tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
