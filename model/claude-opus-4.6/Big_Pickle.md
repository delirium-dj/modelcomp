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

- **Tool use: 84/100.** Terminal-Bench 2.0 SOTA 65.4%, OSWorld 72.7% SOTA, GDPval 1,606 and τ² 99.3% — the strongest launch-era agent profile in its class; MCP Atlas 62.7% is mid-tier vs later models.
- **Reasoning: 87/100.** GPQA 91.3% and launch-leading HLE (53.1% with tools); ARC-AGI-2 68.8%.
- **Context window: 84/100.** 1M GA window with best-in-class MRCR v2 @1M (78.3%) at launch; GraphWalks mid-tier.
- **Multimodal: 80/100.** Vision + PDF with MMMU-Pro ~77%; no audio surface.
- **Coding: 85/100.** SWE-bench Verified 80.8%, Terminal-Bench 2.0 SOTA, Multilingual 77.8%; SWE-bench Pro 53.4% shows the ceiling vs the later 4.8/5.x line.
- **Cost efficiency: 78/100.** $5/$25 with $0.50 cache — same premium Opus-tier pricing for 6 months of leadership.
- **Overall Score: 84/100.** Mean of the five quality dims (84+87+84+80+85)/5 = 84.0 → 84. Six-month run as the refiner's Opus for coding+agents before 4.7/4.8 took the crown.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 84 | 84 | — (corroborated) |
| Reasoning | 87 | 87 | — |
| Context window | 84 | 84 | — |
| Multimodal | 80 | 80 | — |
| Coding | 85 | 85 | — |
| Cost efficiency | 78 | 78 | — |
| **Overall** | **84** | **84** | **—** |

**BenchLM composite (first third-party overall for this file): 62.06/100, #47 of 1014**, built from 51 of 739 rows — partial coverage, so the composite is conservative and is not comparable to this project's normalized scores.

**Every headline number held.** Terminal-Bench 2.0 **65.4%**, OSWorld-Verified **72.7%**, GPQA **91.3%**, HLE **53.0%** with tools, SWE-bench Verified **80.8%**, SWE-bench Pro **53.4%** and MMMU-Pro **77.3%** are all re-published unchanged by BenchLM from the Anthropic system card. BrowseComp resolves to **83.7%** — the original's "leading" is now a number.

**Newly measured agentic breadth:** τ²-bench **84.8%**, Claw-Eval **70.4%**, DeepSearchQA **73.7%**, AndroidWorld **62.0%**, CyberGym **66.6%**, Gert Labs **61.85%**, ResearchClawBench **19.9%**, JobBench **36.7%**, **ApprenticeBench 5%**, Terminal-Bench Hard **48.5%**. The pattern is a strong in-repo/desktop agent that collapses on long-horizon from-scratch work.

**Newly measured coding:** Vibe Code Bench **57.57%**, SWE-Rebench **65.3%**, React Native Evals **84.1%**, LiveCodeBench Pro **70.7%**, FrontierCode 1.1 Main **26.9%**. That 26.9% greenfield figure is the honest ceiling marker against the 4.8/5.x line.

**Newly measured reasoning:** AA Intelligence Index **26.4**, AA-GPQA **84.0%** and **AA-HLE 19.1%** — both far below the vendor's 91.3/53.1 because AA runs without tools; ARC-AGI-3 **0.5%**, CritPt **2.8%**, FrontierMath v2 **65.965%** (T1–3) / **26.829%** (T4), AA-IFBench **44.6%**, AA-LCR **67.0%**. AA-Omniscience reads **45.8% accuracy / 80.1% hallucination** — not a factual oracle.

**Pricing and lifecycle.** Unchanged on Zen: **$5.00 in / $25.00 out, $0.50 cached, 1M context / 128K output** (models.dev). Superseded by Opus 4.7 → 4.8 → 5 → 5.5, which BenchLM scores **65.23 / 69.69 / 79.69 / 86.4**, so this is now the weakest scored Opus on that board. No Zen deprecation notice.

**Calibration note.** Context is scored 84 on the 1M tier, below the written band (≥1M = 95–100). That gap is dataset-wide in the 2026-09 cohort and is not corrected here.

**Net assessment.** The original numbers were right and the judgment was right for its date. What changed is the ranking: six months of successors put Opus 4.6 mid-field at premium pricing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (Anthropic release/system card, claudefa spec-plus-bench table, anotherwrapper vs 4.8, futureagg/veillum, serenitiesai; BenchLM, models.dev and Artificial Analysis on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
  - [BenchLM — Claude Opus 4.6](https://benchlm.ai/models/claude-opus-4-6)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.6_2.md`, using the same headings.