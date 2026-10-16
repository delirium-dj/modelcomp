# Gemini 3.6 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-3-6-flash/`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gemini-3-6-flash`), ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Flash workhorse (published 21 Jul 2026), built on Gemini 3.5 Flash, for agentic workflows, complex video reasoning, coding tasks, and enterprise workflows; 1M-token context, 64K output, better token-efficiency than 3.5 Flash.
- **Provider / access:** Gemini API (`gemini-3.6-flash`), Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform, Gemini app, Google Antigravity; OpenAI-compatible not used — Google Gemini API.
- **Release / knowledge:** Published July 2026; knowledge cutoff March 2026 (some domains limited to January 2025).
- **IDs:** `gemini-3.6-flash` (Gemini API / Vertex). No Free ID confirmed.
- **Context window:** Up to 1M tokens; output 64K tokens. Verified on DeepMind model card Model Information and benchlm.ai. GDM-MRCR v2 1M pointwise recall collapses to 54.0% vs 91.8% at 128k.
- **Modalities:** Text, images, audio, and video in; text out; reasoning yes (reasoning model); tool use yes (agentic workflows); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $1.50/1M tokens, output $7.50/1M tokens (DeepMind model card comparison table).
- **Architecture:** Proprietary (weights not public); based on Gemini 3.5 Flash; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (DeepMind model card; Vals AI 73.8%)
- DeepSearchQA: not listed for 3.6 (see 3.5/3.8)
- GDPVal-AA v2 (Elo): **1421** (DeepMind model card; AA normalized 39.2%)
- OSWorld-Verified: **83.0%** (DeepMind model card)
- MLE-Bench: **63.9%** (DeepMind model card)
- AA Agentic Index: **30.1%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34.0%** (Artificial Analysis)
- HLE: **40.8%** (AA-HLE)
- GPQA Diamond: **92.8%** (AA); **93.4%** (Vals AI)
- MMLU-Pro: **89.3%** (Vals AI)
- ARC-AGI-1: **91.20%**; ARC-AGI-2: **60.4%** (ARC Prize, verified)
- AA-LCR (long-context reasoning): **80.0%** (Artificial Analysis)
- CritPt: **10.6%** (Artificial Analysis)
- AA-Omniscience Index **22.1%**; Accuracy **50.0%**; Hallucination rate **55.6%** (AA)
- FrontierMath v2 Tiers 1-3: **58.947%**; Tier 4: **21.951%** (Epoch AI)

Coding:

- DeepSWE v1.1: **49.0%** (DeepMind model card)
- SWE-Bench Pro: **58.7%** (DeepMind model card)
- LiveCodeBench (Vals): **88.1%** (Vals AI)
- SWE-bench (Vals): **79.6%** (Vals AI)
- CursorBench 3.2: **53.5%** (Cursor evals)
- AA-SciCode: **53.4%** (Artificial Analysis)
- AA Coding Index: **69.2%** (Artificial Analysis)

Multimodal & grounded:

- CharXiv Reasoning: **85.2% no tools / 89.4% with tools** (DeepMind model card)
- AA-MMMU-Pro: **83.2%** (Artificial Analysis)
- Design Arena Website: **1302** (OpenRouter)

Long context:

- GDM-MRCR v2 (8-needle) 128k average: **91.8%**; 1M pointwise: **54.0%** (DeepMind model card) — sharp recall collapse at full context
- AA-LCR: **80.0%** (Artificial Analysis)
- Declared 1M-token context; long-context retrieval degrades markedly at the 1M pointwise setting.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 77/100.** Strong OSWorld-Verified (83.0), Terminal-Bench 2.1 (78.0), GDPVal-AA Elo (1421), MLE-Bench (63.9%); capped by weak AA Agentic Index (30.1). Solid terminal coding and OS agent use.
- **Reasoning: 75/100.** ARC-AGI-1 91.20%, ARC-AGI-2 60.4%, GPQA 92.8%, FrontierMath T1-3 58.9%; capped by CritPt (10.6), AA-Omniscience accuracy (50.0%), HLE (40.8%), Intelligence Index (34.0%). Strong knowledge, brittle on hardest open-ended problems.
- **Context window: 75/100.** Verified 1M tokens (DeepMind + benchlm), excellent 128k MRCR (91.8%); capped by severe 1M pointwise recall collapse (54.0%) — does not hold retrieval at the full window.
- **Multimodal: 84/100.** Text + images + audio + video in, text out; CharXiv 85.2–89.4, MMMU-Pro 83.2%; capped by text-only output.
- **Coding: 72/100.** LiveCodeBench Vals 88.1%, SWE-bench Vals 79.6%, SWE-Bench Pro 58.7%, DeepSWE 49.0%; capped by weak DeepSWE (49.0) and CursorBench 3.2 (53.5). Strong competitive coding, weaker long-horizon SWE.
- **Cost efficiency: 75/100.** $1.50/$7.50 moderate Flash pricing; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (77 + 75 + 75 + 84 + 72) / 5 = 76.6 → 77. Best-fit recommendation: cost-effective multimodal Flash workhorse for coding and agent tasks; verify full-context (1M) retrieval before relying on it for longest documents.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
