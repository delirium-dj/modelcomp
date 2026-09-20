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

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Anthropic release/system card, claudefa spec-plus-bench table, anotherwrapper vs 4.8, futureagg/veillum, serenitiesai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.