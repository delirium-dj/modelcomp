# MiniMax M2.7 — findings by Laguna S 2.1

> Source: opencode/minimax-m2.7 (MiniMax), e.g. Artificial Analysis, OpenRouter
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiniMax-M2.7 (MiniMax). Open-weights reasoning MoE for agentic coding/agentic workflows.
- Short description: Next-gen MiniMax reasoning MoE optimized for autonomous real-world productivity (live debugging, root-cause, document gen) via multi-agent collaboration; leading multilingual coding performance.
- Provider / access: MiniMax API; 4 providers on Artificial Analysis; OpenRouter `/minimax/minimax-m2.7`. OpenCode Zen `opencode/minimax-m2.7`.
- Release: March 18, 2026 (OpenRouter); "Released March 2026" (AA).
- Architecture: Mixture-of-Experts — **230B total parameters / 10B active** per token during inference (Artificial Analysis; OpenRouter confirms 10B active). *Reconciles the repo `meta.json`, which lists "60/65B total / 6.5B active" — the AA + OpenRouter authoritative figures (230B/10B) are used here.*
- License: **NON-COMMERCIAL LICENSE** (Artificial Analysis) — open weights downloadable (Hugging Face) but **not commercial-use permissive**.
- Context window: **200,000–205,000 total tokens** (AA "205k"; OpenRouter "205K"); 32K output (repo `meta.json`). ≥64K caveat cleared but **below the 1M tier**.
- Modalities: **text in → text out only** (Artificial Analysis: "supports text input only... not multimodal"; OpenRouter: text only). +text-in only (0 of image/video/audio/PDF).
- Knowledge cutoff: not stated on AA or OpenRouter model page.
- Reasoning / tools: Yes — reasoning on (OpenRouter recommends preserving `reasoning_details` between turns); function calling, structured outputs, tool use (tau²-Bench Telecom 84.8%, Agentic Index context).
- Pricing: **$0.30 / $1.20** per 1M in/out (MiniMax API + OpenRouter; 80% cache discount → ~$0.22/MTok blended; $0.10/Intelligence-task). OpenRouter shows a "30% off $0.21/$0.84" promo (discounted customer-paid rate; list is $0.30/$1.20). nonFree (noFreeId; no $0 tier).

### Raw benchmarks found

> Verified public numbers (Artificial Analysis model page 2026-09; OpenRouter benchmarks 2026-09, sourced to AA). Benchmarks not located are NOT fabricated.

Agent / tool use:
- AA Intelligence Index v4.3.2: **23** (#36/114 open-weights class; class median 18; "above average among comparable open-weight models") (Artificial Analysis)
- Terminal-Bench v2.1: **57.0%** (OpenRouter, AA-sourced)
- Terminal-Bench Hard: **39.4%** (OpenRouter)
- GDPval-AA v2: **1495 Elo** (OpenRouter)
- tau²-Bench Telecom: **84.8%** (OpenRouter)
- AA-LCR: **78.3%** (OpenRouter)
- Agentic Index: **15.3** (Artificial Analysis)
- IFBench: **75.7%** (OpenRouter)
- BFCL v4 / tau3-Banking / OSWorld / MCP-Atlas / Toolathon: NOT FOUND for this model in fetched pages.

Reasoning / knowledge:
- GPQA Diamond: **87.4%** (OpenRouter, AA-sourced) — strong
- HLE: **29.6%** (OpenRouter, AA-sourced) — weak
- AA Coding Index: **52.6** (OpenRouter, AA-sourced)
- AA-Omniscience: accuracy **26.8%**, Non-Hallucination Rate **64.4%** (OpenRouter)
- CritPt: **0.6%** (OpenRouter) — weak
- SciCode: **50.1%** (OpenRouter, AA-sourced)
- Knowledge cutoff / AA-Briefcase / AutomationBench-AA / GDPval-AA v2 rank / MRCR / RULER: NOT FOUND or NOT RANKED.

Coding:
- SWE-Pro: **56.2%** (OpenRouter)
- (SWE-bench Verified / DeepSWE / LiveCodeBench / Vibe Code Bench: NOT FOUND as standalone figures for M2.7.)

Long context: 205K window verified (no MRCR/RULER/GraphWalks retrieval % found).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`; Cost excluded. Anchored on AA Intelligence Index v4.3.2 = 23 (open-weights class, median 18; "above average among comparable open-weight models"). Open-weight Index 23 ≈ closed-weight Index ~27-30, so quality dims land mid-60s.

- **Tool use: 66/100.** GDPval-AA 1495 (OpenRouter: "new standard for multi-agent") + TB v2.1 57% + tau²-Bench Telecom 84.8% + AA-LCR 78.3%; capped by Agentic Index 15.3, TB Hard 39.4%, CritPt 0.6%, no tau3-Banking.
- **Reasoning: 67/100.** GPQA 87.4% (strong) + Index 23; capped by HLE 29.6% (well below ~40% frontier) + no HLE/CritPt rank.
- **Context window: 80/100.** 205,000 native tokens (≥64K caveat cleared) but below the 1M tier; no retrieval-percentage figure.
- **Multimodal: 15/100.** **Text-only** (AA + OpenRouter: no image/video/audio/PDF) — largest downward cap.
- **Coding: 64/100.** SWE-Pro 56.2% + TB v2.1 57% + Coding Index 52.6 + AA-LCR 78.3; capped by no SWE-Verified/LiveCodeBench/DeepSWE %.
- **Cost efficiency: 58/100.** $0.30/$1.20 ($0.22/MTok blended) is reasonable for a 230B MoE but not a $0/free tier; NON-COMMERCIAL license is a usage caveat.
- **Overall Score: 58/100.** (66 + 67 + 80 + 15 + 64) / 5 = 292 / 5 = 58.4 → 58.

> ⚠️ **Reconciliation note:** The repo AI-Rankings average for this model is **66.6** (`model-comparison.md`; audit). My score (58) uses the **current AA Intelligence Index v4.3.2 = 23** (open-weights class median 18 — "above average" but not frontier vs the newer M3/3.8-flash generation), and fully applies the **structural Multimodal=15 text-only penalty** and the 205K-context cap (80, not the 1M-95 tier). The ~8-point gap stems from (a) the **AA v4.3.2 re-base** lowering the open-weight median to 18, (b) the **text-only penalty**, and (c) the repo's 66.6 likely reflecting a stronger earlier index reading. Both figures preserved for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis MiniMax-M2.7 model page; OpenRouter M2.7 pricing+benchmarks; repo `meta.json`). Re-normalized via `model-comparison.md` v4, anchored on the **current AA Intelligence Index v4.3.2 = 23**. Param-count conflict reconciled to AA/OpenRouter's 230B/10B (meta.json's "60/65B/6.5B-active" corrected). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.