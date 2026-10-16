# GPT-5.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5.5`), benchlm.ai/models/gpt-5-5 (OpenAI launch page + ARC Prize + Epoch AI + Vals AI), Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship model for the most complex professional work (default snapshot gpt-5.5-2026-04-23, released Apr 2026); reasoning effort none/low/medium(default)/high/xhigh; text+image input → text output; 1.05M context / 922K max input / 128K max output; knowledge cutoff Dec 01, 2025; $5/$30 per MTok.
- **Provider / access:** OpenAI API (`gpt-5.5`, Chat Completions + Responses APIs); native OpenAI API. Sibling: GPT-5.5 Pro.
- **Release / knowledge:** Snapshot 2026-04-23; knowledge cutoff Dec 01, 2025.
- **IDs:** `gpt-5.5` / `gpt-5.5-2026-04-23` (OpenAI API); sibling `gpt-5.5-pro`. No Free ID confirmed.
- **Context window:** 1,050,000 tokens; maximum input 922,000; max output 128,000; prompts >272K priced at 2x input/1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (function_calling, web_search, file_search, tool_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $5/1M tokens, cached input $0.5/1M, output $30/1M; regional processing +10% uplift.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82%** (Terminal-Bench leaderboard; OpenAI GPT-5.5 launch)
- CyberGym: **81.8%** (OpenAI GPT-5.5 launch)
- BrowseComp: **84.4%** (OpenAI GPT-5.5 launch)
- OSWorld-Verified: **78.7%** (OpenAI GPT-5.5 launch); OSWorld 2.0: **13.0%** (OSWorld 2.0 paper)
- MCP Atlas: **75.3%** (OpenAI GPT-5.5 launch)
- Toolathlon: **55.6%** (OpenAI GPT-5.5 launch)
- τ²-bench results: **98%** (OpenAI GPT-5.5 launch)
- APEX-Agents-AA: **37.7%** (Artificial Analysis)
- GDPval-AA: **1396 Elo** (Artificial Analysis)
- AA ITBench: **45.8%**; AA Agentic Index: **37.3%**; AA-AnalystAgent: **50.0%** (Artificial Analysis)
- JobBench: **42.7%**; ExploitGym: **13.4%**; ResearchClawBench: **17.0%**; ApprenticeBench: **20%**

Reasoning / knowledge:

- GPQA: **93.6%**; GPQA-D: **93.6%** (OpenAI GPT-5.5 launch); AA-GPQA Diamond **93.5%**; Vals **93.2%**
- HLE: **52.2%**; HLE w/o tools: **41.4%** (OpenAI GPT-5.5 launch); AA-HLE **45.8%**
- MMLU-Pro: **88.1%** (Vals AI)
- ARC-AGI-1: **95.00%** (XHigh, ARC Prize verified); ARC-AGI-2: **85%**; ARC-AGI-3: **0.4%** (ARC Prize)
- Artificial Analysis Intelligence Index: **38.4%** (Artificial Analysis)
- MRCR v2 64K-128K: **83.1%**; MRCR v2 128K-256K: **87.5%** (OpenAI GPT-5.5 launch)
- AA-LCR (long-context reasoning): **84.3%** (Artificial Analysis)
- CritPt: **27.1%** (Artificial Analysis)
- AA-Omniscience Index **20.5%**; Accuracy **58.0%**; Hallucination rate **89.0%** (AA)
- IFBench: **75.9%** (Artificial Analysis)
- FrontierMath legacy: **51.7%**; FrontierMath v2 Tiers 1-3: **85.263%**; Tier 4: **72.500%** (Epoch AI)

Coding:

- SWE-bench Pro: **58.6%** (OpenAI GPT-5.5 launch)
- Vibe Code Bench: **69.85%** (Vals AI)
- React Native Evals: **84.7%** (leaderboard)
- CursorBench 3.1: **59.2%**; CursorBench 3.2: **58.4%** (Cursor evals)
- AA-SciCode: **55.8%** (Artificial Analysis)
- FrontierCode 1.1 Main: **43.0%** (Cognition)
- LiveCodeBench Vals: **85.3%**; SWE-bench Vals: **82.6%** (Vals AI)
- AA Coding Index: **74.9%** (Artificial Analysis)
- PostTrainBench v1.1: **27.2%** (public leaderboard)

Multimodal & grounded:

- MMMU-Pro: **81.2%**; MMMU-Pro w/ Python: **83.2%** (OpenAI GPT-5.5 launch); AA-MMMU-Pro **79.9%**
- OfficeQA Pro: **54.1%** (OpenAI GPT-5.5 launch)
- Design Arena Website: **1258** (OpenRouter)

Long context:

- MRCR v2: 83.1% at 64K–128K, 87.5% at 128K–256K (OpenAI GPT-5.5 launch); AA-LCR 84.3%; declared 1.05M context; no public full-depth needle-recall score at the full window.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong Terminal-Bench 2.0 (82%), BrowseComp (84.4%), CyberGym (81.8%), OSWorld-Verified (78.7%), τ²-bench (98%); capped by weak Toolathlon (55.6%), OSWorld 2.0 (13.0%), ExploitGym (13.4%). Good general agent tool use, weak on exploit tasks.
- **Reasoning: 80/100.** ARC-AGI-1 95.00%, ARC-AGI-2 85%, GPQA 93.6%, FrontierMath v2 T1-3 85.3%, HLE 52.2%; capped by ARC-AGI-3 (0.4), CritPt (27.1), AA-Omniscience accuracy (58.0%). Elite puzzle/knowledge reasoning.
- **Context window: 88/100.** Verified 1.05M context (official OpenAI docs); MRCR shows strong retrieval up to 256K; capped because no public full-depth needle-recall score at 1.05M.
- **Multimodal: 76/100.** Text+image in, text out; MMMU-Pro 81.2–83.2%, AA-MMMU-Pro 79.9%; capped by text-only output.
- **Coding: 73/100.** LiveCodeBench Vals 85.3%, SWE-bench Vals 82.6%, React Native Evals 84.7%, Vibe Code Bench 69.85%; capped by SWE-bench Pro (58.6), FrontierCode Main (43.0), PostTrainBench (27.2). Strong evals coding, weaker agentic SWE-Pro.
- **Cost efficiency: 45/100.** $5/$30 is expensive frontier pricing; not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (78 + 80 + 88 + 76 + 73) / 5 = 79.0 → 79. Best-fit recommendation: high-compute reasoning model for complex professional work at premium price; verify on exploit/security tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
