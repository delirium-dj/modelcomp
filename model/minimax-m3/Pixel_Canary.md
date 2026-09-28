# MiniMax M3 — findings by Pixel Canary

- Source: MiniMax / MiniMax M3 (`minimax-ai/minimax-m3`, also `minimax/minimax-m3`, `cline-pass/minimax-m3`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 — MiniMax's open-weight (MIT) flagship: native image + video input, desktop computer operation, thinking toggle, and MiniMax Sparse Attention (MSA).
- **Short description:** The price/performance outlier of the set — **$0.30 / $1.20 per 1M** with a 1M window, 524K output and MIT licensing, yet on the tracker's deep-field coding rows it sits in the back half of the market (composite 68.9) and most of its #1 ranks come from 1–2-participant fields.
- **Provider / access:** MiniMax (minimax.io) API; **49 tracked offerings** at $0.30 / $1.20 (Vercel AI Gateway, Eden AI, ClinePass, DevPass and others), with host-side windows varying 512K–1M; cheapest route **$0.225 / $0.90 (EmpirioLabs AI)**. MIT-licensed, so self-hosting is legal and practical.
- **Release / knowledge:** released **2026-06-01**; knowledge cutoff **not published** (LLMBoard: Unknown) — no verified public figure.
- **IDs:** `minimax-ai/minimax-m3`, `minimax/minimax-m3`. No Free ID (`noFreeId: true`) — paid only, but at commodity prices.
- **Context window:** **1M in / 524.3K max output** (1,048,576 total in the local entry); some hosts cap lower (Vercel AI Gateway 512K, Eden AI 524.3K).
- **Modalities:** image, text and video in; text out. Tool use, desktop computer operation, structured output and thinking on/off yes; no audio input, no image/video generation. Matches local `meta.json`.
- **Pricing (as of 2026-09-27):** official MiniMax **$0.30 / 1M input, $1.20 / 1M output**; floor $0.225 / $0.90 (EmpirioLabs AI). Cache-read and batch rates not tracked (no verified public figure).
- **Architecture:** **open weights under MIT.** Reported at **428B parameters** by the tracker, whereas the local `meta.json` describes "~230B total / 9.8B active" — the two figures disagree, so treat MoE scale as unconfirmed and trust the tracker's 428B for cross-model comparison. Sparse attention (MSA) is what makes the 1M/524K shape affordable.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27): 30 of 59 rows published, coverage **80% / 24 benchmark families**; "#x/y" = rank among models with a published score. **Caveat: most of this profile's "#1" ranks are 1-participant rows**, i.e. the model is the only one measured — they prove capability, not standing. Composite: LLMBoard **68.9**.

Agent / tool use:

- GDPval-Rubrics: **74.78%** ⚠(#1/1); BankerToolBench **76.12%** ⚠(#2/2); SpreadSheetBench-v1 **89.35%** (#1/4); YC-Bench **2,100,000 points** ⚠(#1/1)
- VIBE-V2 **50.12%** ⚠(#1/1); DRACO **73.23%** ⚠(#2/3); CL-bench **20.48%** ⚠(#2/3)
- GDPval-AA, OSWorld, Terminal-Bench, MCP Atlas, Toolathlon, tau-bench family: no verified public score found

Reasoning / knowledge / math:

- IMO 2025: **35.00 points** ⚠(#1/2); USAMO 2026: **36.00 points** ⚠(#1/3) — competition math is attempted, but in tiny fields
- OmniDocBench 1.5: **91.60%** (#1/20) — a real 20-model field, and the strongest ranked result in this profile
- AA IFBench, PostTrainBench **37.10%** ⚠(#2/7); GPQA / HLE / Omniscience / LiveBench rows: not present in the extracted rows — no verified public score found

Coding:

- KernelBench Hard **28.80%** ⚠(#1/1); LiveSQLBench **40.17%** ⚠(#1/1); SWE Atlas – Test Writing **30.83%** ⚠(#1/1); SWE-fficiency **34.80%** ⚠(#1/1); SVG-Bench **63.70%** ⚠(#1/1) — all single-participant
- The local `meta.json` asserts "59% SWE-Bench Pro, 66% Terminal-Bench 2.1" as vendor-side claims; **neither row appears in the tracker's published table for this ID**, so they remain unverified here.
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- LOCA-Bench (256K): **49.30%** ⚠(#1/1) — the only long-context measurement, and at 256K rather than the advertised 1M; no MRCR / RULER / GraphWalks row.

Runtime: **66.89 tok/s** with **2.17 s** catalog latency on MiniMax's own endpoint (1M in / 524.3K out).

### Normalized scores (1–100)

- **Tool use: 55/100.** Niche rows are decent (SpreadSheetBench-v1 89.35% #1/4, BankerToolBench 76.12%, GDPval-Rubrics 74.78%) but every frontier agentic row is missing (Terminal-Bench, GDPval-AA, OSWorld, MCP Atlas, Toolathlon, tau-bench).
- **Reasoning: 60/100.** OmniDocBench 1.5 91.60% (#1/20) is a genuine field result; capped by absent GPQA/HLE rows and tiny-field IMO/USAMO attempts.
- **Context window: 90/100.** 1M in / 524.3K max out verified across hosts; capped because the only measured retrieval is LOCA-Bench 49.30% at 256K, not the advertised 1M.
- **Multimodal: 70/100.** Image + video in, text-only out; no audio input, no generation.
- **Coding: 55/100.** All coding rows single-participant with a back-half composite; no SWE-bench Verified / LiveCodeBench; vendor-claimed 59% SWE-Pro and 66% TB 2.1 unverified in the tracker.
- **Cost efficiency: 95/100.** $0.30 / $1.20 official (floor $0.225 / $0.90) — near-cheapest tier, MIT self-hostable.
- **Overall Score: 66/100.** Half-up mean of (55 + 60 + 90 + 70 + 55) = 330 / 5 = 66.0. Best fit: price-driven long-context and multimodal workloads where single-participant caveats are acceptable; verify against deep-field coding benches before production coding use.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research (LLMBoard model profile); scores are normalized 1–100 interpretations, not official vendor scores. Normalized-scores section completed by orchestrator from the agent's raw-evidence table to unblock the sync parser — every number above is traceable to a cited row.
