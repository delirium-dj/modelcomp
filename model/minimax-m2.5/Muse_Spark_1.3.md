# MiniMax M2.5 — findings by Muse Spark 1.3

- Source: MiniMax/M2.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight 229B/10B-active MoE (M2.5 + M2.5-highspeed) for high-throughput agentic coding; best Multi-SWE-bench in class, office-scenario strength.
- **Provider / access:** MiniMax API + Fireworks/Novita/GMI; Hugging Face `MiniMaxAI/MiniMax-M2.5` (vLLM/SGLang); OpenCode Zen `opencode/minimax-m2.5`.
- **Release / knowledge:** 2026-02-12 (RankedAGI; AA article 2026-02-13); cutoff not disclosed
- **IDs:** `opencode/minimax-m2.5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200,000 total (~205K class, 192K–205K) — verified via AA article + repo metadata
- **Modalities:** text in; text out only; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-17):** M2.5 $0.15 in / $0.60 out per 1M; M2.5-Lightning $0.30 in / $2.40 out; Modified-MIT self-host free; paid on Zen
- **Architecture:** 229B total / 10B active MoE (same size as M2.1); Modified-MIT (attribution required)

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **42** (AA — #3-5 open with GLM-4.7/DeepSeek V3.2, behind GLM-5 50 / K2.5 47; +2 over M2.1)
- GDPval-AA: **1215 Elo (AA article)** / **1186 (RankedAGI #34)** — #3 open-weights lane; harness snapshots differ, band noted
- Terminal-Bench 2.0: **51.7%** (RankedAGI — #27)
- Toolathlon Pass@1: **38.3%** (RankedAGI — #24)
- Tau2/Tau3: **no verified public score found** (closest: WildClawBench 27.1 overall per HF eval-results — provisional)
- BrowseComp / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- AA Agentic Index: **56** (AA — up from M2.1 47)
- AA-Omniscience Index: **-41** (AA — down from M2.1 -30; accuracy 25% vs 22% but hallucination 88% vs 67% — guesses more)
- HLE: **rank 52 lane per HF eval-results** (absolute not extracted — provisional, no verified absolute found)
- GPQA / LCR / CritPt: **no verified public score found**
- YC-Bench medium: **$230,465 avg final funds** (HF eval-results — niche agentic-finance lane)

Coding:

- SWE-bench Verified: **80.2%** (RankedAGI — #9; benchgap est 74.5% — measured taken)
- SWE-bench Pro: **55.4%** (RankedAGI — #22)
- SWE Multilingual: **74.1%** (RankedAGI — #8; vendor claims best Multi-SWE-bench in class — consistent)
- Code LiveBench: **70.7%** (RankedAGI — #22); AgenticCode LiveBench: **51.7%** (#10)
- Svelte Bench: **95.6%** (RankedAGI — #5); Code Arena 1383 (#33); DesignArena 1257 (#25)
- SciCode: **47.9% estimated** (benchgap est. high confidence — provisional)
- Vibe Code Bench: **14.9% measured** (benchgap — weak lane)

Long context:

- **200K verified; no standalone MRCR/RULER absolute found — GDPval long-work ELO used as proxy**

### Normalized scores (1–100)

- **Tool use: 72/100.** GDPval ~1200 Elo (#3 open) plus TB2.0 51.7% and Toolathlon 38.3%; capped with no Tau/BrowseComp/Claw absolutes.
- **Reasoning: 72/100.** Index 42 plus Agentic Index 56; capped hard by Omniscience -41 (88% hallucination) and no GPQA/HLE/LCR absolutes.
- **Context window: 68/100.** 200K verified; mid tier.
- **Multimodal: 15/100.** Text in/out only; no image/video/audio.
- **Coding: 84/100.** SWE-Verified 80.2% (#9) plus Multilingual 74.1% (#8), SWE-Pro 55.4%, Svelte 95.6%, LiveCode 70.7%; capped by Vibe 14.9% and est-only SciCode.
- **Cost efficiency: 85/100.** $0.15/$0.60 plus Modified-MIT self-host free; paid on Zen so below 100.
- **Overall Score: 62/100.** Mean (72+72+68+15+84)/5 = 311/5 = 62.2 → 62; best-fit open-weight multilingual coding pick where multimodal 15 + hallucination cap the mean.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (MiniMax M2.5 page, AA M2.5 article 2026-02-13, RankedAGI page, HF model + benchgap lane); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
