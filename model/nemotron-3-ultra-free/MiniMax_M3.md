# Nemotron 3 Ultra Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: NVIDIA / Nemotron 3 Ultra Free (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's 550B/55B MoE reasoning model targeted at long-running agents. Free tier on OpenCode Zen. Strong honesty (low hallucination) and orchestration; designed as a fast long-agent planner.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free`; NVIDIA NIM / build.nvidia; AA article references. Chat Completions.
- **Release / knowledge:** Released 2026-Q3 per NVIDIA blog (550B/55B); knowledge cutoff ≈ mid-2026.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen Free). Paid `nemotron-3-ultra`.
- **Context window:** Long context (vendor blog cites RULER 95%); AA Elo 1378.
- **Modalities:** Text in/out. Tool calls; reasoning on. Multimodal limited (20).
- **Pricing (as of 2026-09-17):** $0/$0 Zen Free.
- **Architecture:** 550B total / 55B active MoE; proprietary NVIDIA.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54%** (NVIDIA blog); TB2.1 **56.4** (build.nvidia card).
- Tau3 Airline: **81.5** (build.nvidia); Tau3 Retail: **86.4** (build.nvidia).
- GDPval-AA: **1448** (NVIDIA blog).
- SWE-bench Verified: **71.9** (build.nvidia).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **87** (build.nvidia).
- LCR: **65.4** (build.nvidia).
- HLE: **no verified public score found**.
- CritPt: **no verified public score found**.
- AA Intelligence Index: **38** (AA Ultra article, Elo 1378).

Coding:

- SWE-bench Verified: **71.9** (build.nvidia).
- LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

Long context:

- RULER: **95%** (NVIDIA blog) — strong retrieval.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 56.4 (mid), Tau3 Airline 81.5 (frontier-mid), Tau3 Retail 86.4 (frontier-mid), GDPval 1448 (mid-high).
- **Reasoning: 75/100.** GPQA 87 (high), LCR 65.4 (mid-high). Cap = missing HLE/CritPt direct.
- **Context window: 97/100.** Long context + RULER 95% reported → 95–100 band; 97.
- **Multimodal: 20/100.** Text-only in practice for free tier; mild lift to 20 per methodology baseline text-only 15 + light claims.
- **Coding: 80/100.** SWE-bench 71.9 (mid-high), TB2.1 56.4 lifts agentic coding.
- **Cost efficiency: 100/100.** $0/$0 Zen Free.
- **Overall Score: 75/100.** Mean (78+75+97+20+80+100)/6 = 75.0 → 75. Best fit: best open orchestration/fast long-agent pick with strong honesty (low hallu).

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (NVIDIA developer blog, build.nvidia model card, AA Nemotron Ultra article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.