# GPT-5.4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5.4`), benchlm.ai/models/gpt-5-4 (OpenAI launch pages + comparison tables), Artificial Analysis, ARC Prize, Epoch AI, Vals AI, Meta AI chart
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's more affordable flagship for complex professional work (default snapshot gpt-5.4-2026-03-05, released Mar 2026); reasoning effort none(default)/low/medium/high/xhigh; text+image input → text output; 1.05M context / 128K max output; knowledge cutoff Aug 31, 2025; $2.5/$15 per MTok.
- **Provider / access:** OpenAI API (`gpt-5.4`, Chat Completions + Responses APIs); native OpenAI API. Siblings: GPT-5.4 Pro ($30/$180), GPT-5.4 mini, GPT-5.4 nano.
- **Release / knowledge:** Snapshot 2026-03-05; knowledge cutoff Aug 31, 2025; flagship for complex professional work at affordable pricing vs Pro variant.
- **IDs:** `gpt-5.4` / `gpt-5.4-2026-03-05` (OpenAI API); siblings `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano`. No Free ID confirmed.
- **Context window:** 1,050,000 tokens; max output 128,000; prompts >272K priced at 2x input/1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); tool use yes (function_calling, web_search, file_search, tool_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $2.5/1M tokens, cached input $0.25/1M, output $15/1M; regional processing +10% uplift.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 launch)
- CyberGym: **79.0%** (OpenAI GPT-5.5 comparison table)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 launch)
- OSWorld-Verified: **75%** (OpenAI GPT-5.4 launch)
- MCP Atlas: **70.6%** (OpenAI GPT-5.5 comparison table)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 launch)
- τ²-bench results: **98.9%** (OpenAI GPT-5.4 mini/nano launch)
- DeepSearchQA: **73.6%** (Meta AI Muse Spark chart)
- GDPval-AA: **1307 Elo** (Artificial Analysis)
- AA Agentic Index: **43.7%** (Artificial Analysis — actually listed for terra; here APEX-Agents-AA 33.3%)
- APEX-Agents-AA: **33.3%** (Artificial Analysis)
- ExploitGym: **6.0%** (paper)
- JobBench: **38.9%** (paper)

Reasoning / knowledge:

- GPQA: **92.8%**; GPQA-D: **92.8%** (OpenAI GPT-5.4 launch / Meta chart); AA-GPQA Diamond **92.0%**
- HLE: **52.1%**; HLE w/o tools: **39.8%** (OpenAI GPT-5.5 comparison table / GPT-5.4 launch); AA-HLE **43.7%**
- MMLU-Pro not found; MedXpertQA Text: **59.6%**; HealthBench Hard: **40.1%** (Meta chart)
- ARC-AGI-1: **93.67%** (XHigh, ARC Prize); ARC-AGI-2: **74.0%**; ARC-AGI-3: **0.2%** (ARC Prize)
- Artificial Analysis Intelligence Index: **39.0%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **82.0%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- AA-Omniscience Index **5.8%**; Accuracy **50.8%**; Hallucination rate **91.7%** (AA)
- IFBench: **73.9%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **78.596%**; Tier 4: **49.000%** (Epoch AI)

Coding:

- SWE-bench Pro: **57.7%** (OpenAI GPT-5.4 launch)
- LiveCodeBench Pro: **87.5%** (Meta AI Muse Spark chart)
- Vibe Code Bench: **67.42%** (Vals AI)
- React Native Evals: **85.3%** (leaderboard)
- AA Coding Index: **71.0%** (Artificial Analysis)
- PostTrainBench v1.1: **19.0%** (public leaderboard)

Multimodal & grounded:

- MMMU-Pro: **81.2%**; MMMU-Pro w/ Python: **82.1%** (OpenAI GPT-5.4 launch / GPT-5.5 comparison); AA-MMMU-Pro **78.4%**
- CharXiv: **82.8%**; ERQA: **65.4%**; SimpleVQA: **61.1%**; ScreenSpot Pro: **85.4%**; ZeroBench: **41.0%**; MedXpertQA MM: **77.1%** (Meta chart)
- OfficeQA Pro: **53.2%** (OpenAI GPT-5.5 comparison table)
- Design Arena Website: **1221** (OpenRouter)

Long context:

- AA-LCR: **82.0%** (Artificial Analysis); declared 1.05M context; no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Strong BrowseComp (82.7), CyberGym (79.0), OSWorld-Verified (75), τ²-bench (98.9 — though mini/nano variant), DeepSearchQA (73.6); capped by weak Toolathlon (54.6), ExploitGym (6.0), JobBench (38.9). Good general agent tool use.
- **Reasoning: 76/100.** ARC-AGI-1 93.67%, ARC-AGI-2 74.0%, GPQA 92.8%, FrontierMath T1-3 78.6%, AA-LCR 82.0%; capped by CritPt (23.4), AA-Omniscience accuracy (50.8%), HLE (39.8–52.1%). Strong puzzle/knowledge reasoning.
- **Context window: 88/100.** Verified 1.05M context (official OpenAI docs); AA-LCR 82.0%; capped because no public full-depth needle-recall score at the full window.
- **Multimodal: 76/100.** Text+image in, text out; MMMU-Pro 81.2–82.1%, ScreenSpot Pro 85.4%, CharXiv 82.8%; capped by text-only output and weak ZeroBench (41.0%).
- **Coding: 70/100.** LiveCodeBench Pro 87.5%, React Native Evals 85.3%, AA Coding Index 71.0%; capped by SWE-bench Pro (57.7), Vibe Code Bench (67.42), PostTrainBench (19.0). Strong evals coding, weaker agentic SWE-Pro.
- **Cost efficiency: 80/100.** $2.5/$15 mid-range flagship pricing with 90% cache-read discount; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (76 + 76 + 88 + 76 + 70) / 5 = 77.2 → 77. Best-fit recommendation: affordable flagship for complex professional work with strong ARC and evals coding; verify on agentic SWE and exploit tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Meta AI chart independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
