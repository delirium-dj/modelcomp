# Gemini 3.7 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-3-7-flash/`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gemini-3-7-flash`), ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's most intelligent Flash workhorse (released 13 Aug 2026), built on Gemini 3.6 Flash, for agentic workflows, complex video reasoning, coding tasks, and enterprise workflows; 1M-token context, customizable thinking configurations, agentic video understanding.
- **Provider / access:** Gemini API (`gemini-3.7-flash`), Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform, Gemini App (Spark), Google Antigravity; OpenAI-compatible not used — Google Gemini API.
- **Release / knowledge:** Published August 2026; knowledge cutoff March 2026 (some domains limited to January 2025).
- **IDs:** `gemini-3.7-flash` (Gemini API / Vertex). No Free ID confirmed.
- **Context window:** Up to 1M tokens; output 64K tokens. Verified on DeepMind model card Model Information and benchlm.ai.
- **Modalities:** Text, images, audio, and video in; text out; reasoning yes (customizable thinking configurations); tool use yes (agentic workflows); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Introductory input $0.75/1M tokens, output $3.75/1M (expires 2026-12-31, then $1.50/$7.50 regular).
- **Architecture:** Proprietary (weights not public); based on Gemini 3.6 Flash; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (DeepMind model card; Vals AI 77.5%)
- Terminal-Bench 3.0: **14.9%** (DeepMind model card)
- AutomationBench: **30.4%** (DeepMind model card)
- OSWorld-2.0: **47.9%** (DeepMind model card)
- Agents' Last Exam pass rate: **26.3%** (DeepMind model card)
- DeepSearchQA: not listed for 3.7 (see 3.8)
- GDPVal-AA v2 (Elo): **1525** (DeepMind model card; AA normalized 44.6%)
- Harvey LAB-AA: **90.7%** (DeepMind model card)
- AA Agentic Index: **36.4%** (Artificial Analysis)
- AA Harvey LAB v1.0: **90.7%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (DeepMind model card; AA lists 39.1%)
- HLE-Verified: **53.6%** (DeepMind model card); AA-HLE **47.9%**
- GPQA Diamond: **94.5%** (Artificial Analysis); GPQA Diamond Vals **93.9%**
- MMLU-Pro: **90.1%** (Vals AI)
- ARC-AGI-1: **95.50%**; ARC-AGI-2: **84.6%** (ARC Prize, verified)
- AA-LCR (long-context reasoning): **81.7%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- AA-Omniscience Index **26.5%**; Accuracy **55.3%**; Hallucination rate **64.5%** (AA)
- FrontierMath v2 Tiers 1-3: **71.579%**; Tier 4: **36.585%** (Epoch AI)
- LABBench2: **82.1%** (DeepMind model card)
- BioMysteryBench human-solvable: **87.1%**; human-difficult **43.5%** (DeepMind model card)

Coding:

- DeepSWE v1.1: **65.3%** (DeepMind model card)
- FrontierCode 1.1 Main: **43.6%** (DeepMind model card)
- LiveCodeBench (Vals): **88.7%** (Vals AI)
- SWE-bench (Vals): **80.8%** (Vals AI)
- AA-SciCode: **57.2%** (Artificial Analysis)
- AA Coding Index: **76.1%** (Artificial Analysis)
- FrontierSWE v2: **20.3%** (Proximal)
- Code Arena Web Dev Elo: **1588** (DeepMind model card)

Multimodal & grounded:

- CharXiv Reasoning: **84.5% no tools / 88.7% with tools** (DeepMind model card)
- LVBench long video: **85.4%** (DeepMind model card)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis)
- Design Arena Website: **1305** (OpenRouter)

Long context:

- GDM-MRCR v2 (8-needle) 128k average: **97.0%** (DeepMind model card)
- AA-LCR: **81.7%** (Artificial Analysis)
- Declared 1M-token context; strong 128k needle recall; no public full-depth recall at 1M.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong Terminal-Bench 2.1 (85.8), Harvey LAB-AA (90.7), GDPVal-AA Elo (1525); capped by weak Terminal-Bench 3.0 (14.9), AutomationBench (30.4), OSWorld-2.0 (47.9), Agents' Last Exam (26.3). Solid terminal coding, weaker general agent/computer use.
- **Reasoning: 78/100.** AA Intelligence Index 56, ARC-AGI-1 95.50%, ARC-AGI-2 84.6%, GPQA 94.5%, HLE-Verified 53.6%; capped by weak CritPt (14.3) and AA-Omniscience accuracy (55.3%).
- **Context window: 90/100.** Verified 1M tokens (DeepMind + benchlm), excellent MRCR v2 128k recall (97.0%); capped because no public full-depth needle score at 1M.
- **Multimodal: 85/100.** Text + images + audio + video in, text out; CharXiv 84.5–88.7, LVBench 85.4, MMMU-Pro 85.5; capped by text-only output.
- **Coding: 74/100.** LiveCodeBench (Vals) 88.7%, SWE-bench (Vals) 80.8%, DeepSWE 65.3%, Code Arena Web Dev Elo 1588; capped by weak FrontierCode 1.1 Main (43.6) and FrontierSWE v2 (20.3). Strong competitive coding, weaker production/agentic SWE.
- **Cost efficiency: 90/100.** Introductory $0.75/$3.75 per 1M is very cheap; not counted toward Overall.
- **Overall Score: 81/100.** Half-up mean of (78 + 78 + 90 + 85 + 74) / 5 = 81.0 → 81. Best-fit recommendation: cheap, multimodal-capable Flash workhorse for coding and agent tasks; verify on Terminal-Bench 3.0-class general agent work before production.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
