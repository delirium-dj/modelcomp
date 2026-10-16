# Gemini 3.1 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-3-1-pro/`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gemini-3-1-pro-preview`), Vals AI, ARC Prize, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's most advanced Pro-tier reasoning model as of Feb 2026 (model card published 19 Feb 2026), built on Gemini 3 Pro, for agentic performance, advanced coding, long context, and multimodal understanding; 1M-token context, customizable reasoning/Deep Think mode.
- **Provider / access:** Gemini API (`gemini-3.1-pro`), Google AI Studio, Vertex AI, Google Antigravity, Gemini Enterprise, NotebookLM; OpenAI-compatible not used — Google Gemini API.
- **Release / knowledge:** Published February 2026; reasoning model with explicit Deep Think / effort modes.
- **IDs:** `gemini-3.1-pro` (Gemini API / Vertex); preview variants `gemini-3.1-pro-preview`. No Free ID confirmed.
- **Context window:** Up to 1M tokens; output 64K tokens. Verified on DeepMind model card Model Information and benchlm.ai. Note: MRCR v2 1M pointwise recall collapses to 26.3% vs 84.9% at 128k.
- **Modalities:** Text, images, audio, and video in; text out; reasoning yes (explicit Deep Think mode); tool use yes (agentic tool use, MCP); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $2.00/1M tokens, output $12.00/1M tokens (third-party listings); tiered pricing ≤200K context noted by aistudio.quest.
- **Architecture:** Proprietary (weights not public); based on Gemini 3 Pro; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- tau2-bench Retail: **90.8%**; tau2-bench Telecom: **99.3%** (DeepMind model card)
- BrowseComp (search + Python + browse): **85.9%** (DeepMind model card)
- MCP Atlas (multi-step workflows): **69.2%** (DeepMind model card)
- Terminal-Bench 2.0 (Terminus-2): **68.5%** (DeepMind model card; other best self-reported 77.3% Codex)
- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI)
- DeepSearchQA: **69.7%** (Meta AI Muse Spark chart)
- APEX-Agents: **33.5%** (DeepMind model card); APEX-Agents-AA **32.0%** (Artificial Analysis)
- AA Agentic Index: **10.3%** (Artificial Analysis)
- GDPval-AA Elo: **1317** (DeepMind model card); normalized **14.6%** / **904** (Artificial Analysis)

Reasoning / knowledge:

- HLE full set text+MM no tools: **44.4%** (DeepMind model card); HLE w/o tools **45.4%** (Meta chart); AA-HLE **47.0%**
- GPQA Diamond no tools: **94.3%** (DeepMind); GPQA-D **94.3%** (Meta chart); AA-GPQA **94.1%**; GPQA Diamond Vals **95.5%**
- MMLU-Pro: **91.0%** (Vals AI)
- ARC-AGI-2: **77.1%** (ARC Prize verified); ARC-AGI-3: **0.4%** (ARC Prize)
- AA Intelligence Index: **29.7%** (Artificial Analysis)
- AA-Omniscience Index **31.9%**; Accuracy **54.9%**; Hallucination rate **50.9%** (AA)
- CritPt: **17.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **82.0%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **59.649%**; Tier 4: **26.829%** (Epoch AI)
- MMMLU: **92.6%** (DeepMind model card)

Coding:

- SWE-Bench Verified: **80.6%** (DeepMind model card); SWE-Bench (Vals): **78.8%** (Vals AI)
- SWE-Bench Pro (Public): **54.2%** (DeepMind model card)
- LiveCodeBench Pro Elo: **2887** (DeepMind model card); LiveCodeBench (Vals): **88.5%** (Vals AI)
- SciCode: **59%** (DeepMind model card); AA-SciCode **58.7%** (Artificial Analysis)
- Vibe Code Bench: **32.03%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- PostTrainBench v1.1: **22.0%** (public leaderboard)

Multimodal & grounded:

- MMMU-Pro: **80.5%** (DeepMind; Sonnet 4.6 leads 81.0); AA-MMMU-Pro **82.4%** (Artificial Analysis)
- CharXiv: **80.2%** (Meta chart)
- ScreenSpot Pro: **84.4%** (Meta chart)
- ERQA: **69.4%**; SimpleVQA: **72.4%**; ZeroBench: **29.0%**; MedXpertQA (MM): **81.3%** (Meta chart)
- Design Arena Website: **1254** (OpenRouter)

Long context:

- MRCR v2 (8-needle) 128k average: **84.9%**; 1M pointwise: **26.3%** (DeepMind model card) — sharp recall collapse at full context
- AA-LCR: **82.0%** (Artificial Analysis)
- Declared 1M-token context; long-context retrieval degrades markedly at the 1M pointwise setting.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Exceptional tau2-bench (Retail 90.8, Telecom 99.3), strong BrowseComp (85.9), MCP Atlas (69.2), Terminal-Bench 2.0 (68.5); capped by weak APEX-Agents (33.5) and AA Agentic Index (10.3). Best-in-class tool/calling reliability.
- **Reasoning: 72/100.** Strong GPQA (94.3), ARC-AGI-2 (77.1), MMMLU (92.6), FrontierMath T1-3 (59.6); capped by weak HLE (44.4–47.0), CritPt (17.7), AA Intelligence Index (29.7), ARC-AGI-3 (0.4). Strong knowledge, brittle on hardest open-ended reasoning.
- **Context window: 75/100.** Verified 1M tokens (DeepMind + benchlm), strong 128k MRCR (84.9%) and AA-LCR (82.0%); capped by severe 1M pointwise recall collapse (26.3%) — does not hold retrieval at the full window.
- **Multimodal: 82/100.** Text + images + audio + video in, text out; MMMU-Pro 80.5–83.9, CharXiv 80.2, ScreenSpot Pro 84.4, MedXpertQA MM 81.3; capped by text-only output and weak ZeroBench (29.0).
- **Coding: 80/100.** SWE-Bench Verified 80.6%, LiveCodeBench Elo 2887 / Vals 88.5%, SWE-bench Vals 78.8%, SciCode 59%; capped by weak Vibe Code Bench (32.0), PostTrainBench (22.0), SWE-Bench Pro (54.2). Strong verified coding, weaker agentic SWE-Pro.
- **Cost efficiency: 60/100.** $2/$12 moderate-to-high pricing; not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (85 + 72 + 75 + 82 + 80) / 5 = 78.8 → 79. Best-fit recommendation: strong tool-use and verified-coding workhorse with native multimodal input, but verify full-context (1M) retrieval before relying on it for longest documents.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Artificial Analysis + Vals AI + ARC Prize + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
