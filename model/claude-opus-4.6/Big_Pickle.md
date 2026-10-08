# Claude Opus 4.6 — findings by Big Pickle

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Feb 2026 Opus upgrade — "a major coding upgrade" (SOTA on Terminal-Bench 2.0, HLE, BrowseComp, GDPval-AA, OSWorld at launch), first Opus with a GA 1M context window and 128K output. Plans more carefully, sustains agentic tasks longer, and catches its own coding mistakes (Anthropic).
- **Provider / access:** Claude API (`claude-opus-4-6`), Claude Code, claude.ai; AWS/GCP/Azure.
- **Release / knowledge:** 2026-02-05; 1M context GA'd March 2026; superseded by Opus 4.7/4.8.
- **IDs:** `claude-opus-4-6` (Anthropic; proprietary).
- **Context window:** 1M tokens; max output 128K.
- **Modalities:** vision (image), text, PDF inputs; text output; function calling, reasoning, prompt caching.
- **Pricing (as of 2026-09-20):** $5.00 in / $25.00 out per 1M; cached input $0.50 (Future AGI/litellm; unchanged from Opus 4.5/4.7/4.8 tier).
- **Architecture:** Proprietary Claude hybrid-reasoning transformer (undisclosed); ~42 tok/s throughput (anotherwrapper) / 68 tok/s (serenities).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** — SOTA at launch (GPT-5.2: 64.7%) (Anthropic/claudefa).
- OSWorld: **72.7%** — state-of-the-art for computer use at launch (also listed as OSWorld-Verified baseline: 72.5-72.7 ranges).
- GDPval-AA (Elo): **1,606** — +144 over GPT-5.2, +190 over Opus 4.5 (Anthropic).
- BrowseComp: leading (highest at finding hard info online) (Anthropic); anotherwrapper lists 84%.
- τ-bench retail **91.9%**; τ²-bench telecom **99.3%** (Anthropic).
- MCP Atlas: **62.7%**; tau2 Retail 91.9 (anotherwrapper).
- /today's rows: GDPval rank above GPT-5.2-class at release.

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (Anthropic/serenities/futureagg).
- HLE: **40.0% no-tools / 53.1% with tools** (Anthropic/Mythos comparison card) — led all frontier models at release.
- ARC-AGI-2: **68.8%** (max effort, 120K thinking budget) (futureagg/anotherwrapper).
- SimpleQA: 41.0%; FrontierMath: 40.7%; Math composite 99.8% (anotherwrapper); Chatbot Arena Elo ~1,496-1,498; jailbreak/TruthfulQA not captured.

Coding:

- SWE-bench Verified: **80.8%** (~flat vs Opus 4.5's 80.9%) (Anthropic/veillum).
- SWE-bench Multilingual: **77.8%**; SWE-bench Pro: **53.4%** (Anthropic/Mythos card).
- LiveCodeBench: 72.0% (serenities/papers); HumanEval+ 93.5%; BFCL 70.4%; Aider Polyglot 75.0%.
- CharXiv-R: 77.4%; ProofBench 50%; TermBench (halt) 65.4%.

Long context:

- 1M window (GA); MRCR v2 8-needle: **78.3%** — highest among frontier models at 1M at release; GraphWalks BFS (0K-128K): **61.5%** (anotherwrapper).
- Context spans "hundreds of thousands of tokens with less drift" — per Anthropic boost over 4.5.

Multimodal:

- vision + PDF input; MMMU-Pro: **73.9%** no-tools (futureagg) to **77.3%** (anotherwrapper); no audio.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 SOTA 65.4%, OSWorld 72.7% SOTA, GDPval 1,606 and τ² 99.3% — the strongest launch-era agent profile in its class; new independent rows: **Claw-Eval 70.4%**, τ²-bench 84.8% (AA harness, lower than vendor 99.3), CyberGym 66.6%, BrowseComp 83.7%; MCP Atlas 62.7% and ApprenticeBench 5% are mid/low vs later models.
- **Reasoning: 85/100.** (Lowered from 87 on 2026-10-08.) Vendor GPQA 91.3% and launch-leading HLE (53.1% with tools / 40% no-tools) still stand, but independent AA re-runs are much weaker: **AA-HLE 19.1%, CritPt 2.8%, AA-Omniscience index 2.4 (hallucination rate 80.1%), AA-IFBench 44.6%, AA-GPQA 84.0** — the "jagged" profile shows more clearly with age.
- **Context window: 84/100.** 1M GA window with best-in-class MRCR v2 @1M (78.3%) at launch; GraphWalks mid-tier; no newer long-context re-runs published.
- **Multimodal: 80/100.** Vision + PDF with MMMU-Pro 77.3% (system card) confirmed, AA-MMMU-Pro 72.5%; new grounded rows: Design Arena Website 1,296, ScreenSpot Pro 83.1, ERQA 51.6; no audio.
- **Coding: 84/100.** (Lowered from 85 on 2026-10-08.) SWE-bench Verified 80.8%, Terminal-Bench 2.0 SOTA, Multilingual 77.8%; SWE-bench Pro 53.4% shows the ceiling vs the later 4.8/5.x line; new weaker rows **FrontierCode 1.1 Main 26.9%** and **Vibe Code Bench 57.57%** pull it down a notch.
- **Cost efficiency: 78/100.** $5/$25 with $0.50 cache — unchanged (Opus 4.8/5 both launched at the same tier), same premium Opus-tier pricing for 6 months of leadership.
- **Overall Score: 83/100.** Mean of the five quality dims (84+85+84+80+84)/5 = 83.4 → 83 (lowered from 84). Six-month run as the refiner's Opus for coding+agents before 4.7/4.8 took the crown.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 84 | 84 | — |
| Reasoning | 87 | 85 | −2 |
| Context window | 84 | 84 | — |
| Multimodal | 80 | 80 | — |
| Coding | 85 | 84 | −1 |
| Cost efficiency | 78 | 78 | — |
| **Overall** | **84** | **83** | **−1** |

New and corrected data (all found 2026-10-08, BenchLM updated 2026-10-07 unless noted):

- **Claw-Eval gap filled: 70.4%** (leaderboard) — recurring gap in the original report.
- New agentic rows: τ²-bench 84.8% (AA, vs vendor 99.3 telecom — harness/variant conflict), CyberGym 66.6%, DeepSearchQA 73.7%, BrowseComp 83.7% (now sourced from a later Anthropic system card), ResearchClawBench 19.9%, JobBench 36.7%, ApprenticeBench 5%.
- New coding rows: **Vibe Code Bench 57.57%**, **FrontierCode 1.1 Main 26.9%**, SWE-Rebench 65.3%, LiveCodeBench Pro 70.7%, React Native Evals 84.1%; SWE-bench Verified 80.8% confirmed (Arcee's 75.6% variant noted), SWE-bench Pro 53.4% confirmed.
- New reasoning rows exposing the independent-vendor split: **AA-HLE 19.1%** (vs vendor 40% no-tools), **CritPt 2.8%**, **AA-Omniscience index 2.4** (accuracy 45.8, hallucination rate 80.1), AA-IFBench 44.6%, AA-GPQA 84.0%, SuperGPQA 95%, HealthBench Hard 14.8%, FrontierMath v2 40.7% / Tier 4 22.9% (confirms old numbers on the current leaderboard).
- New multimodal rows: AA-MMMU-Pro 72.5%, Design Arena Website 1,296, ScreenSpot Pro 83.1%, ERQA 51.6%, MedXpertQA MM 64.8% / Text 52.1%.
- **Artificial Analysis Intelligence Index: 26.4** on the current v4.3 scale (era re-base across all models; old launch-era 60s-era values are cross-era only).
- **Pricing recheck: unchanged** — $5/$25 tier persists (Opus 4.8, Opus 5, and Opus 5.5 line all at $5/$25-or-below; Opus 5.5 at $4/$20); no cut for 4.6.
- Context note: Opus 4.7/4.8/5/5.5 have all since shipped; BenchLM ranks Opus 4.6 at 62.01, #45/887 — behind Opus 4.8 (69.11), Fable 5 (78.84), and Opus 5 (79.28).

Gaps still open after re-run: MRCR v2 refresh (only launch-era 78.3%), Terminal-Bench 2.1/3.0 for this model, HAL / CyberBench / APEX individual scores (CyberGym found), τ³-Banking.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (Anthropic release/system card, claudefa spec-plus-bench table, anotherwrapper vs 4.8, futureagg/veillum, serenitiesai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.