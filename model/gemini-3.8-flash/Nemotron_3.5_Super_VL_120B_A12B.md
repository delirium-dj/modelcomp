# Gemini 3.8 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-3-8-flash/`), benchlm.ai, Vals AI, ARC Prize, Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash model (released 2 Sept 2026), built on Gemini 3.7 Flash, for long-horizon software engineering, autonomous agents, and complex enterprise workflows; 1M-token context, customizable effort levels, multimodal input, text output.
- **Provider / access:** Gemini API (`gemini-3.8-flash`), Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform, Gemini app; OpenAI-compatible not used — Google Gemini API.
- **Release / knowledge:** Published September 2026; knowledge cutoff March 2026 (some domains limited to January 2025).
- **IDs:** `gemini-3.8-flash` (Gemini API / Vertex); siblings include `gemini-3.8-flash-cyber`, `gemini-3.8-flash-tts`, `gemini-3.8-live` (voice — routed to `models_voice/`, not here). No Free ID confirmed.
- **Context window:** Up to 1M tokens; output 64K tokens. Verified on DeepMind model card Model Information and benchlm.ai.
- **Modalities:** Text, images, audio, and video in; text out; reasoning yes (customizable effort levels); tool use yes (agent tasks, computer use); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $0.75/1M tokens ($1.50 regular), output $3.75/1M tokens ($7.50 regular) — introductory pricing.
- **Architecture:** Proprietary (weights not public); based on Gemini 3.7 Flash; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (DeepMind model card; Vals AI 81.3%; AA 87.6%)
- Terminal-Bench 4.0: **19.1%** (DeepMind model card; AA 19.7%)
- GDPVal-AA v2 (Knowledge work, Elo): **1545** (DeepMind model card; AA normalized 46.8%)
- Vals Finance Agent v2: **61.4%** (DeepMind model card)
- Harvey's Legal Agent Benchmark (all pass): **10.0%** (DeepMind model card)
- OSWorld-2.0 (partial, batch tool enabled): **59.0%** (DeepMind model card)
- AA AutomationBench: **59.9%** (Artificial Analysis)
- AA Briefcase Elo: **1203** (Artificial Analysis)

Reasoning / knowledge:

- HLE-Verified: **54.9%** (DeepMind model card); AA-HLE **47.8%**
- GPQA Diamond: **95.3%** (AA); **94.4%** (Vals AI)
- MMLU-Pro: **90.2%** (Vals AI)
- AA Intelligence Index: **40.9%** (Artificial Analysis)
- AA-Omniscience Index **29.6%**; Accuracy **54.6%**; Hallucination rate **55.2%** (AA)
- CritPt: **18.3%** (AA)
- AA-LCR (long-context reasoning): **81.3%** (AA)
- MLCR-AA: **21.7%** (AA)
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (ARC Prize, verified)
- LABBench2: **86.2%** (DeepMind model card)
- BioMysteryBench human-solvable: **88.8%**; human-difficult **56.5%** (DeepMind model card)

Coding:

- DeepSWE v1.1: **73.7%** (DeepMind model card); **73.8%** (DeepSWE leaderboard)
- LiveCodeBench (Vals): **89.5%** (Vals AI)
- SWE-bench (Vals): **80.0%** (Vals AI)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%** (Cursor evals)
- AA-SciCode: **56.6%** (Artificial Analysis)
- AA Coding Index: **76.3%** (Artificial Analysis)
- FrontierSWE v2: **19.6%** (Proximal)

Multimodal & grounded:

- CharXiv Reasoning (no tools): **86.2%** (DeepMind model card)
- LVBench long video: **87.8% agentic / 87.1% static** (DeepMind model card)
- AA-MMMU-Pro: **85.6%** (Artificial Analysis)
- Design Arena Website: **1303** (OpenRouter)

Long context:

- LVBench (long video): **87.8% agentic / 87.1% static**; AA-LCR **81.3%**; MLCR-AA **21.7%**; declared 1M-token context with no public full-depth needle recall beyond these.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong Terminal-Bench 2.1 (89.4%), Finance Agent v2 (61.4%), GDPVal-AA Elo (1545); capped by weak Terminal-Bench 4.0 (19.1%), OSWorld-2.0 (59.0%), Harvey Legal all-pass (10.0%). Excellent terminal coding, uneven general agent use.
- **Reasoning: 78/100.** ARC-AGI-1 98.50%, ARC-AGI-2 89.2%, GPQA Diamond 95.3%, HLE-Verified 54.9%; capped by CritPt (18.3%), MLCR-AA (21.7%), ARC-AGI-3 (10.4%), AA-Omniscience accuracy (54.6%). Strong knowledge/reasoning but brittle on hard open-ended problems.
- **Context window: 90/100.** Verified 1M tokens (DeepMind card + benchlm), 64K output, strong long-video LVBench (87.1–87.8%); capped because no full-depth text needle-recall score at the full 1M window.
- **Multimodal: 85/100.** Text + images + audio + video in, text out; CharXiv 86.2%, MMMU-Pro 85.6%, LVBench 87.1%; capped by text-only output.
- **Coding: 76/100.** LiveCodeBench (Vals) 89.5%, SWE-bench (Vals) 80.0%, DeepSWE 73.7%, CursorBench 3.2 69.2%; capped by weak FrontierSWE v2 (19.6%) and CursorBench 4.0 (39.6%). Strong competitive coding, weaker full agentic SWE.
- **Cost efficiency: 90/100.** Introductory $0.75/$3.75 per 1M is among the cheapest frontier models; not counted toward Overall.
- **Overall Score: 82/100.** Half-up mean of (80 + 78 + 90 + 85 + 76) / 5 = 81.8 → 82. Best-fit recommendation: cost-effective, multimodal-capable Flash workhorse for long-context software engineering and agent tasks; verify on Terminal-Bench 4.0-class general agent work before production.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Vals AI + ARC Prize + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
