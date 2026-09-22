# MiniMax M2.7 — findings by Mimo v2.6 Flash

- Source: MiniMax/`minimax-m2.7`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (Zen entry `opencode/minimax-m2.7`)
- **Short description:** MiniMax's self-improving open-weights MoE (~229B total / ~10B active, 2026-03-18) for agentic coding, multi-agent collaboration, and Office/document productivity — billed as the first model to autonomously drive a share of its own RL R&D ("self-evolution"); **no Zen Free ID** (paid).
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` (Chat Completions, **paid**, `noFreeId: true`); MiniMax API; OpenRouter `minimax/minimax-m2.7` (often ~$0.24/$0.96 promo); Groq; HF `MiniMaxAI/MiniMax-M2.7`; 2×-priced `M2.7-highspeed` tier (same weights).
- **Release / knowledge:** 2026-03-18 (launch + arXiv M2 series paper). Knowledge cutoff not restated in extracts.
- **IDs:** `opencode/minimax-m2.7` (Zen); `minimax/minimax-m2.7`.
- **Context window:** **196K–205K** (200K class) in / **131K** out (meta; Groq docs 196K).
- **Modalities:** **text only** in/out (meta); tool calls yes; full Office generation (Word/Excel/PowerPoint) via agentic tools; structured outputs.
- **Pricing (as of 2026-09-22):** Zen **$0.30 in / $1.20 out per 1M** (meta; no Free ID); cache ~$0.06; OpenRouter promo ~$0.24/$0.96; LLMRef ~$0.279/$1.20.
- **Architecture:** Sparse MoE **~229B total / ~10B active** (arXiv/Groq); open weights (HF); hybrid SWA attention variants in paper.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). MiniMax official launch + arXiv paper + OpenRouter/ModelBeats/WritingMate cross-checks. Provider-reported where noted.

Agent / tool use:

- GDPval-AA: **1495 Elo** (MiniMax/OpenRouter — strong; near Muse-class boards)
- Terminal-Bench 2 (launch, minor version undisclosed): **57.0%** (MiniMax official) / Terminal-Bench 2.0: **55.0%** (ModelBeats)
- Toolathlon: **46.3%** (MiniMax/WritingMate — provider-reported)
- BrowseComp: **77.8%** (arXiv/MiniMax)
- MM Claw: **62.7%** (arXiv/MiniMax)
- MCP-Atlas / Tau3 / Claw-Eval Pass^3: no verified public score found in this pass

Reasoning / knowledge:

- GPQA-Diamond: **89.8%** (arXiv/MiniMax)
- AIME 2026: **94.2%** (arXiv/MiniMax)
- Artificial Analysis Intelligence Index: **~45** (AA via AI//COST comparison note — "MiniMax-M3 scores 45"; M2.7 close band; exact M2.7 Index not separately extracted — treat as ~40–45 provisional)
- HLE / CritPt / Omniscience: no verified public score found for M2.7 specifically

Coding:

- SWE-bench Pro: **56.22% / 56.2%** (MiniMax official — "nearly matching Opus's best level" per vendor; ModelBeats rank #27)
- SWE-bench Verified: **75.4%** (ModelBeats; arXiv SFT-scale table shows 54.7/50.2 for smaller configs — launch post-trained figure preferred)
- SWE-bench Multilingual: **76.5%** (arXiv/MiniMax) / OpenRouter notes 72.5% on related M2.1 row — cite 76.5 M2.7
- Multi-SWE-bench: **52.7%** (arXiv) / OpenRouter 49.4% (M2.1 comparison) — cite 52.7
- VIBE-Pro (full project delivery): **55.6%** (MiniMax official)
- LiveCodeBench / DeepSWE / SciCode: no verified public score found in this pass

Long context:

- 200K-class window; MRCR / RULER: no verified public score found

Multimodal:

- **Text-only** product surface (meta) — template: 15. (Office outputs are files via tools, not native image/vision I/O.)

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 1495 and BrowseComp 77.8 are strong real-world agentic marks; TB2 ~55–57 and MM Claw 62.7 solid; Toolathlon 46.3 mid; no Tau3/MCP/Claw-Eval rows.
- **Reasoning: 84/100.** GPQA 89.8 and AIME 94.2 are excellent open science/math; missing HLE/CritPt/AA-Index (provisional ~45) caps below full-frontier reasoning breadth.
- **Context window: 70/100.** ~200K served window (methodology: 200K = 70); 131K out is generous; no long-context retrieval curve.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 80/100.** SWE-Pro 56.2, SWE-Verified 75.4, Multilingual 76.5, VIBE-Pro 55.6 — strong open agentic coding near closed mid-frontier; trails Opus/GLM-5.2 SWE-Pro and lacks DeepSWE/LiveCode rows here.
- **Cost efficiency: 93/100.** $0.30/$1.20 with ~10B active params is excellent intelligence-per-dollar (OpenRouter often cheaper); **no Zen Free ID** keeps it just below free-tier 95+.
- **Overall Score: 65/100.** Mean of five quality dims (78+84+70+15+80)/5 = 65.4 → 65. Best-fit: paid private text agents and multi-file SWE work where GDPval/BrowseComp strength and low active-params throughput matter; pair with a multimodal model when vision is required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (minimax.io/models/text/m27, arXiv 2605.26494 MiniMax-M2 series, OpenRouter benchmarks, ModelBeats, WritingMate, model-comparison historical M2.7 row); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
