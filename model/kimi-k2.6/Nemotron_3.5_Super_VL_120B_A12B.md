# Kimi K2.6 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/kimi-k2-6 (MoonshotAI Kimi K2.6 tech blog + model card), Artificial Analysis (`artificialanalysis.ai/models/kimi-k2-6`), OpenRouter, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** MoonshotAI's open-weights MoE reasoning model (released Apr 2026 per AA; Kimi K2.6 tech blog) for reasoning, coding, and agent tasks; 1T total / 32B active parameters, 256K–260K context window (benchlm 256K, AA 260K), text/image/video in → text out, Modified MIT license.
- **Provider / access:** Kimi/Moonshot AI API (`kimi-k2.6`), OpenRouter (`moonshotai/kimi-k2.6`), open weights on Hugging Face (`moonshotai/Kimi-K2.6`), 12 API providers per Artificial Analysis. Related: Kimi K3, Kimi K2.5, Kimi K2.7 Code.
- **Release / knowledge:** Released 2026-04 (AA says 20 Apr 2026); deprecated by AA in favor of Kimi K3; knowledge cutoff not stated.
- **IDs:** `kimi-k2.6` (Kimi API / OpenRouter), `moonshotai/Kimi-K2.6` (HF weights). No Free ID confirmed (Modified MIT open weights → self-host effectively $0 with restrictions).
- **Context window:** 256K tokens (benchlm.ai) / 260K tokens (Artificial Analysis); ~384 A4 pages.
- **Modalities:** Text, image, and video in; text out; reasoning yes (extended thinking); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.95/M input, $4.00/M output (cache discount 83%, cost per task $0.80 per Artificial Analysis).
- **Architecture:** Open-weights MoE, 1T total / 32B active, Modified MIT license (commercial use allowed with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Kimi K2.6 tech blog)
- BrowseComp: **83.2%** (Kimi K2.6 tech blog)
- OSWorld-Verified: **73.1%** (Kimi K2.6 tech blog); OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- Toolathlon: **50%** (Kimi K2.6 tech blog)
- MCP Atlas: **55.9%** (Kimi K2.6 model card)
- DeepSearchQA: **92.5%** (Kimi K2.6 tech blog)
- WideResearch: **80.8%** (Kimi K2.6 model card)
- τ²-bench results: **95.9%** (Artificial Analysis)
- GDPval-AA: **1115 Elo** (Artificial Analysis)
- APEX-Agents-AA: **28.5%** (Artificial Analysis)
- AA Agentic Index: **22.1%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27** (#24 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA: **90.5%**; GPQA-D: **90.5%** (Kimi K2.6 model card); AA-GPQA Diamond **91.1%**; Vals **89.1%**
- MMLU-Pro: **87.6%** (Vals AI)
- HLE: **34.7%** (Kimi K2.6 model card); AA-HLE **37.5%**
- AA-LCR (long-context reasoning): **81.0%** (Artificial Analysis)
- CritPt: **8.0%** (Artificial Analysis)
- AA-Omniscience Index **5.3%**; Accuracy **32.6%**; Hallucination rate **40.5%** (AA)
- IFBench: **76.0%** (Artificial Analysis)
- AIME26: **96.4%**; HMMT Feb 2026: **92.7%**; MMAnswerBench: **86.0%** (Kimi K2.6 model card)
- FrontierMath v2 Tiers 1-3: **57.193%**; Tier 4: **25.641%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.2%** (Kimi K2.6 model card)
- LiveCodeBench v6: **89.6%** (Kimi K2.6 model card); LiveCodeBench Vals: **86.8%** (Vals AI)
- SWE-bench Pro: **58.6%** (Kimi K2.6 model card)
- SWE Multilingual: **76.7%** (Kimi K2.6 tech blog)
- SciCode: **52.2%** (Kimi K2.6 model card)
- Vibe Code Bench: **37.89%** (Vals AI)
- CursorBench 3.1: **47.6%** (Cursor evals)
- AA-SciCode: **51.5%** (Artificial Analysis)
- AA Coding Index: **61.8%** (Artificial Analysis)
- SWE-bench Vals: **76.2%** (Vals AI)

Multimodal & grounded:

- MMMU-Pro: **79.4%**; MMMU-Pro w/ Python: **80.1%** (Kimi K2.6 model card); AA-MMMU-Pro **79.4%**
- CharXiv: **80.4%**; MathVision: **87.4%**; V*: **96.9%** (Kimi K2.6 model card / tech blog)
- Design Arena Website: **1271** (OpenRouter)

Long context:

- AA-LCR: **81.0%** (Artificial Analysis); declared 256K–260K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong BrowseComp (83.2), OSWorld-Verified (73.1), DeepSearchQA (92.5), τ²-bench (95.9); capped by weak Toolathlon (50), Agents'-style general agent evals not reported, AA Agentic Index (22.1). Strong browse/deep-research agent profile.
- **Reasoning: 78/100.** AIME26 96.4%, HMMT 92.7%, GPQA 90.5%, ARC-AGI not reported for this model; capped by CritPt (8.0), AA-Omniscience accuracy (32.6%), HLE (34.7–37.5%), Intelligence Index (27). Elite math reasoning.
- **Context window: 75/100.** Verified 256K–260K tokens (benchlm + AA); AA-LCR 81.0%; capped because context is below the 1M frontier and no public full-depth recall at 260K beyond LCR.
- **Multimodal: 82/100.** Text + image + video in, text out; MMMU-Pro 79.4–80.1%, CharXiv 80.4%, MathVision 87.4%, V* 96.9%; capped by text-only output.
- **Coding: 76/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, SWE Multilingual 76.7%; capped by SWE-bench Pro (58.6), Vibe Code Bench (37.89), CursorBench 3.1 (47.6). Strong competitive coding, weaker agentic SWE-Pro.
- **Cost efficiency: 65/100.** $0.95/$4.00 somewhat expensive for open-weights class; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (75 + 78 + 75 + 82 + 76) / 5 = 77.2 → 77. Best-fit recommendation: strong open-weights math/reasoning and multimodal agent model; verify on general agent tasks given thin AutomationBench/AppenticeBench coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + MoonshotAI tech blog + model card + Artificial Analysis + OpenRouter + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
