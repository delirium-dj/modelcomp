# Gemini 3.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`deepmind.google/models/model-cards/gemini-3-5-flash/`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gemini-3-5-flash`), ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-iteration Gemini 3 Flash reasoning model (published 19 May 2026) for agentic workflows, coding tasks, and multi-week enterprise processes; natively multimodal with thinking levels to control quality/cost/latency; 1M-token context, 64K output.
- **Provider / access:** Gemini API (`gemini-3.5-flash`), Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform, Gemini app, Google Search AI Mode, Google Antigravity; OpenAI-compatible not used — Google Gemini API. Deprecated earlier-generation Flash model per ai.google.dev (superseded by 3.6/3.7/3.8 Flash).
- **Release / knowledge:** Published May 2026; knowledge cutoff not stated in fetched sources.
- **IDs:** `gemini-3.5-flash` (Gemini API / Vertex); sibling `gemini-3.5-flash-lite`, `gemini-3.5-flash-cyber`. No Free ID confirmed.
- **Context window:** Up to 1M tokens; output 64K tokens. Verified on DeepMind model card Model Information and benchlm.ai. MRCR v2 1M pointwise recall collapses to 26.6% vs 77.3% at 128k.
- **Modalities:** Text, images, audio, and video in; text out; reasoning yes (thinking levels); tool use yes (agentic tool use, MCP Atlas); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Input $1.50/M, output $9.00/M (llm-stats). Deprecated generation — pricing may not be current.
- **Architecture:** Proprietary (weights not public); based on Gemini 3 Flash reasoning foundation; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (DeepMind launch screenshots; Vals AI 74.2%)
- MCP Atlas: **83.6%** (DeepMind launch screenshots)
- Toolathlon: **56.5%** (DeepMind launch screenshots)
- OSWorld-Verified: **78.4%** (DeepMind launch screenshots)
- Finance Agent v2: **57.9%** (DeepMind; Vals AI)
- GDPval-AA Elo: **1656** (DeepMind launch screenshots; AA normalized 42.2%)
- APEX-Agents-AA: **47.1%** (Artificial Analysis)
- AA Agentic Index: **27.3%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **50.1%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **40.2%** (DeepMind launch screenshots); AA-HLE **42.7%**
- GPQA: **92.2%**; GPQA-D: **92.7%** (Artificial Analysis / Vals); AA-GPQA Diamond **92.2%**
- MMLU-Pro: **89.5%** (Vals AI)
- ARC-AGI-1: **92.50%** (High, ARC Prize); ARC-AGI-2: **72.1%** (DeepMind launch screenshots)
- Artificial Analysis Intelligence Index: **50.2%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **69.3%** (Artificial Analysis)
- CritPt: **13.1%** (Artificial Analysis)
- AA-Omniscience Index **21.2%**; Accuracy **51.9%**; Hallucination rate **60.7%** (AA)
- IFBench: **76.3%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **62.807%**; Tier 4: **26.829%** (Epoch AI)

Coding:

- SWE-Bench Pro (Public): **55.1%** (DeepMind launch screenshots); SWE-bench (Vals): **78.8%** (Vals AI)
- LiveCodeBench (Vals): **87.6%** (Vals AI)
- SciCode: **53.1%** (Artificial Analysis); AA-SciCode **53.9%**
- Vibe Code Bench: **48.68%** (Vals AI)
- CursorBench 3.1: **49.8%**; CursorBench 3.2: **48.8%** (Cursor evals)
- AA Coding Index: **70.1%** (Artificial Analysis)

Multimodal & grounded:

- CharXiv Reasoning: **84.2%** (DeepMind launch screenshots)
- MMMU-Pro: **83.6%** (DeepMind); AA-MMMU-Pro **84.3%**
- Blueprint-Bench 2: **33.6%** (DeepMind launch screenshots)
- Design Arena Website: **1269** (OpenRouter)

Long context:

- MRCR v2 (8-needle) 128k average: **77.3%**; MRCR 1M pointwise: **26.6%** (DeepMind launch screenshots) — sharp recall collapse at full context
- AA-LCR: **69.3%** (Artificial Analysis)
- Declared 1M-token context; long-context retrieval degrades markedly at the 1M pointwise setting.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong MCP Atlas (83.6), OSWorld-Verified (78.4), GDPval-AA Elo (1656); capped by weak Toolathlon (56.5), Finance Agent v2 (57.9), AA Agentic Index (27.3). Solid tool use, weaker on broad agent-eval suites.
- **Reasoning: 75/100.** ARC-AGI-1 92.50%, GPQA 92.2%, ARC-AGI-2 72.1%, FrontierMath T1-3 62.8%; capped by weak HLE (40.2–42.7), CritPt (13.1), AA-Omniscience accuracy (51.9%). Strong puzzle/knowledge reasoning, weakest on HLE-style open-ended reasoning.
- **Context window: 75/100.** Verified 1M tokens (DeepMind + benchlm), strong 128k MRCR (77.3%); capped by severe 1M pointwise recall collapse (26.6%) — does not hold retrieval at the full window.
- **Multimodal: 82/100.** Text + images + audio + video in, text out; CharXiv 84.2%, MMMU-Pro 83.6–84.3%; capped by text-only output and weak Blueprint-Bench 2 (33.6%).
- **Coding: 75/100.** LiveCodeBench Vals 87.6%, SWE-bench Vals 78.8%, Terminal-Bench 2.1 76.2%; capped by weak SWE-Bench Pro (55.1), CursorBench 3.2 (48.8), Vibe Code Bench (48.68). Strong competitive coding, weaker agentic SWE-Pro.
- **Cost efficiency: 70/100.** $1.50/$9 moderate Flash-tier pricing; not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (78 + 75 + 75 + 82 + 75) / 5 = 77.0 → 77. Best-fit recommendation: capable, natively multimodal Flash workhorse for coding and agent tasks; verify full-context (1M) retrieval before relying on it for longest documents. Deprecated generation — prefer 3.7/3.8 Flash for new work.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Google DeepMind model card + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
