# Claude Haiku 5.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/claude-haiku-5-5 (Anthropic Claude Haiku 5.5 launch page), Artificial Analysis (`artificialanalysis.ai/models/claude-haiku-5-5`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's proprietary reasoning model (released October 7, 2026 per AA); 1M context / text+image in → text out; $0.10/$0.50 per MTok; sibling: Claude Haiku 4.5; 6 API providers per AA; very fast (236.6 t/s), very verbose (440M tokens on Intelligence Index).
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), 6 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released October 7, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `claude-haiku-5-5` (Anthropic API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.10/M input, $0.50/M output (AA; cache discount 90%, blended rate $0.08).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **39.20%** (Anthropic launch page; AA 32.8%)
- GDPval-AA: **1620 Elo** (Anthropic launch page); normalized **55.9%** (AA)
- HLE w/ tools: **57.4%** (Anthropic launch page)
- AA Briefcase: **1578 Elo** (Anthropic launch page)
- AA AutomationBench: **35.4%** (AA)
- AA Harvey LAB v1.0: **89.9%** (AA)
- GDP.pdf: **20.8%** (AA)
- AA-AnalystAgent: **53.8%** (AA)
- MazeBench: **1%** (MazeBench leaderboard)

Reasoning / knowledge:

- HLE w/o tools: **45.9%** (Anthropic launch page)
- Artificial Analysis Intelligence Index: **43.4%** (#2 of 171; median 13)
- AA-LCR (long-context reasoning): **82.7%** (Artificial Analysis)
- CritPt: **18.9%** (Artificial Analysis)
- MLCR-AA: **63.3%** (Artificial Analysis)
- AA-HLE: **44.4%** (Artificial Analysis)
- AA-Omniscience Index **10.7%**; Accuracy **36.4%**; Hallucination rate **40.4%** (AA)
- FrontierMath v2 Tiers 1-3: **75.088%** (Epoch AI)
- FrontierMath v2 Tier 4: **46.341%** (Epoch AI)

Coding:

- FrontierCode 1.1 Main: **46.4%** (Anthropic launch page)
- AA-SciCode: **55.0%** (Artificial Analysis)
- Bug Hunt Bench: **21.5 fixes** (Bug Hunt Bench public data)
- FrontierSWE v2: **43.8%** (Proximal)

Multimodal & grounded:

- Chartography (no tools): **46.4%** (Anthropic launch page)
- Design Arena Website: **1265** (OpenRouter)

Long context:

- AA-LCR: **82.7%** (Artificial Analysis); MLCR-AA: **63.3%** (AA); declared 1M context; no public full-depth needle-recall score beyond AA-LCR/MLCR-AA.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Terminal-Bench 4.0 (39.20%), GDPval-AA (1620 Elo), HLE w/ tools (57.4%), AA Briefcase (1578 Elo), AA AutomationBench (35.4%), AA Harvey LAB v1.0 (89.9%); capped by weak MazeBench (1%), GDP.pdf (20.8%), AA-AnalystAgent (53.8%). Strong agentic tool-use profile.
- **Reasoning: 76/100.** AA Intelligence Index (43.4%), AA-LCR (82.7%), FrontierMath T1-3 (75.088%), FrontierMath Tier 4 (46.341%); capped by CritPt (18.9%), AA-HLE (44.4%), AA-Omniscience accuracy (36.4%), Intelligence Index (43.4%). Strong math reasoning, moderate HLE/open-ended reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 82.7%, MLCR-AA 63.3%; capped because no public full-depth needle-recall score beyond AA-LCR/MLCR-AA.
- **Multimodal: 55/100.** Text+image in, text out per AA; Chartography (no tools) (46.4%), Design Arena Website 1265; capped by text-only output and thin multimodal coverage.
- **Coding: 55/100.** FrontierCode 1.1 Main (46.4%), AA-SciCode (55.0%), FrontierSWE v2 (43.8%); capped by Bug Hunt Bench (21.5 fixes). Moderate coding.
- **Cost efficiency: 95/100.** $0.10/$0.50 very competitive pricing with 90% cache discount, $0.21/task; not counted toward Overall.
- **Overall Score: 69/100.** Half-up mean of (68 + 76 + 90 + 55 + 55) / 5 = 68.8 → 69. Best-fit recommendation: strong reasoning and context window at very competitive price; verify on multimodal and coding tasks given moderate results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Anthropic Claude Haiku 5.5 launch page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
