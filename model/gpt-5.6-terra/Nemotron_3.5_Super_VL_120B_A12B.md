# GPT-5.6 Terra — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5.6-terra`), benchlm.ai/models/gpt-5-6-terra (OpenAI GPT-5.6 launch page + system card), Artificial Analysis, ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's GPT-5.6 model that "balances intelligence and cost" — roughly the mini-model tier of the GPT-5 family (default snapshot gpt-5.6-terra); reasoning effort none/low/medium(default)/high/xhigh/max; text+image input → text output; 1.05M context / 922K max input / 128K max output; knowledge cutoff Feb 16, 2026.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Chat Completions + Responses APIs); native OpenAI API.
- **Release / knowledge:** GPT-5.6 family launch per openai.com/index/gpt-5-6/; knowledge cutoff Feb 16, 2026.
- **IDs:** `gpt-5.6-terra` (OpenAI API); siblings `gpt-5.6-sol`, `gpt-5.6-luna`, `gpt-5.6-cyber`. No Free ID confirmed.
- **Context window:** 1,050,000 tokens; maximum input 922,000; max output 128,000; prompts >272K priced at 2x input/1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $2/1M tokens, cached input $0.2/1M, output $12/1M; cache writes 1.25x uncached input rate.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 launch; Vals AI 77.5%)
- Terminal-Bench 3.0: **20.8%** (frontierbench.ai)
- BrowseComp: **87.5%** (OpenAI GPT-5.6 launch)
- OSWorld 2.0: **50.2%** (OpenAI GPT-5.6 launch)
- CyberGym: **81.8%** (OpenAI GPT-5.6 launch)
- ExploitGym: **23.2%** (OpenAI GPT-5.6 launch)
- Toolathlon: **53.1%** (OpenAI GPT-5.6 launch)
- τ²-bench results: **86.3%** (Artificial Analysis)
- GDPval-AA: **1583 Elo** (OpenAI GPT-5.6 launch; AA normalized 47.6%)
- AA ITBench: **51.0%** (Artificial Analysis)
- APEX-Agents-AA: **38.9%** (Artificial Analysis)
- AA Agentic Index: **43.7%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **92.9%**; GPQA-D: **92.9%** (OpenAI GPT-5.6 launch); AA-GPQA Diamond **92.5%**; Vals **90.9%**
- MMLU-Pro: **86.7%** (Vals AI)
- ARC-AGI-1: **96.50%** (Terra Max, ARC Prize verified); ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%** (ARC Prize)
- Artificial Analysis Intelligence Index: **55.0%** (Artificial Analysis)
- HLE-Verified: **51.1%** (DeepMind GPT-3.8 Flash card cross-ref); AA-HLE **42.9%**
- AA-LCR (long-context reasoning): **83.0%** (Artificial Analysis)
- CritPt: **30.0%** (Artificial Analysis)
- AA-Omniscience Index **0.1%**; Accuracy **46.8%**; Hallucination rate **87.9%** (AA)
- IFBench: **71.2%** (Artificial Analysis)
- FrontierMath legacy: **84.9%**; FrontierMath v2 Tiers 1-3: **84.900%**; Tier 4: **68.300%** (OpenAI GPT-5.6 launch)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI GPT-5.6 launch)
- DeepSWE: **69.6%** (OpenAI GPT-5.6 launch)
- FrontierCode 1.1 Extended: **55.8%** (Cognition/Devin)
- CursorBench 3.2: **64.9%**; CursorBench 4.0: **41.3%** (Cursor evals)
- AA-SciCode: **55.0%** (Artificial Analysis)
- AA Coding Index: **76.7%** (Artificial Analysis)
- VulcanBench v3: **87.0%** (vulcanbench.com)
- LiveCodeBench Vals: **85.9%**; SWE-bench Vals: **95.4%** (Vals AI)

Multimodal:

- MMMU-Pro: **80.7%**; MMMU-Pro w/ Python **82%** (OpenAI GPT-5.6 launch); AA-MMMU-Pro **80.7%**

Long context:

- AA-LCR: **83.0%** (Artificial Analysis); declared 1.05M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 79/100.** Terminal-Bench 2.1 (87.4), BrowseComp (87.5), CyberGym (81.8), GDPval-AA (1583 Elo), τ²-bench (86.3); capped by weak Terminal-Bench 3.0 (20.8), OSWorld 2.0 (50.2), ExploitGym (23.2), Toolathlon (53.1). Strong terminal/browse agent, weaker on computer-use and exploit tasks.
- **Reasoning: 80/100.** ARC-AGI-1 96.50%, ARC-AGI-2 83.9%, GPQA 92.9%, FrontierMath legacy 84.9%, AA Intelligence Index 55.0%; capped by ARC-AGI-3 (0.8), CritPt (30.0), AA-Omniscience accuracy (46.8%), HLE (42.9–51.1%). Elite puzzle/math reasoning.
- **Context window: 88/100.** Verified 1.05M context (official OpenAI docs); AA-LCR 83.0% shows long-context reasoning; capped because no public full-depth needle-recall score at the full window.
- **Multimodal: 76/100.** Multimodal input; MMMU-Pro 80.7–82%; capped by text-only output (not confirmed otherwise) and thin vision benchmark coverage.
- **Coding: 76/100.** LiveCodeBench Vals 85.9%, SWE-bench Vals 95.4%, VulcanBench v3 87.0%, DeepSWE 69.6%; capped by SWE-bench Pro (63.4), FrontierCode Extended (55.8), CursorBench 4.0 (41.3). Strong verified SWE/competitive coding.
- **Cost efficiency: 75/100.** $2/$12 mid-range pricing with 90% cache-read discount; not counted toward Overall.
- **Overall Score: 80/100.** Half-up mean of (79 + 80 + 88 + 76 + 76) / 5 = 79.8 → 80. Best-fit recommendation: cost-balanced GPT-5.6 agentic model strong on verified SWE and terminal coding; verify on OSWorld/cyber/exploit given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
