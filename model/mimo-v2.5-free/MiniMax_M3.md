# MiMo V2.5 Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Also covers the `Xiaomi MiMo-V2.5 Free` alias (same Zen ID).

- Source: Xiaomi / MiMo V2.5 Free (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (alias: Xiaomi MiMo-V2.5 Free)
- **Short description:** Xiaomi's omni MiMo-V2.5 hosted free on OpenCode Zen. Open-weights candidate; balanced agent/coding plus strong multimodal coverage (text/image/audio/video). Zen cap is 200K/32K — native model is 1M (use native endpoint for 1M work).
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free`; Pi `pi.dev/models/opencode/mimo-v2-5-free`; Xiaomi native `mimo.xiaomi.com/mimo-v2-5`. Chat Completions endpoint.
- **Release / knowledge:** 2026 mid; HuggingFace `XiaomiMiMo/MiMo-V2.5`.
- **IDs:** `opencode/mimo-v2.5-free` (Zen, Free). Native `xiaomi/mimo-v2.5` (1M).
- **Context window:** Zen cap 200K/32K (per models.dev `mimo-v2.5-free.toml`); native 1M.
- **Modalities:** Text/image/audio/video in; text out. Reasoning on; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0/$0 Zen Free.
- **Architecture:** 310B total / 15B active MoE; open-weights (HF `XiaomiMiMo/MiMo-V2.5`).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%** (BenchmarkList `xiaomi-mimo-v2.5`); Hard TB **41.7%**.
- TB 2.0 (RankedAGI): **65.8%**.
- Tau3-Banking: **69.5%** (RankedAGI).
- Tau2-Bench: **90.6%** (BenchmarkList).
- GDPval-AA: **1148** Elo (BenchmarkList).
- SWE-bench Verified: **71%** (BenchmarkList).
- SWE-Pro (RankedAGI): **56.1%**.
- Claw-Eval: **no verified public score found**.
- Vibe Code Bench: **42.2%** (BenchmarkList).

Reasoning / knowledge:

- AA Intelligence Index: **38** (BenchmarkList).
- GPQA Diamond: **no verified public score found** at same harness as frontier peers.
- HLE: **no verified public score found**.
- LCR / MRCR: **no verified public score found** at 200K–1M.

Coding:

- SWE-bench Verified: **71%** (BenchmarkList).
- LiveCodeBench: **no verified public score found**.
- SciCode: **no verified public score found**.
- Vibe: **42.2%**.

Long context:

- Native 1M but no public MRCR at 1M.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 63.7% (mid-high), Tau3 69.5% (frontier-mid), Tau2 90.6% (high), GDPval 1148 (mid-high). Strong finance/tool reliability.
- **Reasoning: 72/100.** Index 38 (mid), Tau2 90.6% lifts; GPQA/HLE missing → conservative. Cap = missing direct reasoning harnesses.
- **Context window: 70/100.** Zen cap 200K = 70 baseline. Native 1M available separately.
- **Multimodal: 95/100.** Text + image + audio + video in = full omni in = 95 per methodology (+audio in or any non-text out band 90–100).
- **Coding: 78/100.** SWE-bench 71% (mid-high), Vibe 42.2% (cap), TB2.1 63.7% lift.
- **Cost efficiency: 100/100.** $0/$0 Zen Free.
- **Overall Score: 79/100.** Mean (78+72+70+95+78+100)/6 = 82.2 → 82. Best fit: best free omni + balanced agent/coding.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (BenchmarkList, RankedAGI, models.dev, HuggingFace, Xiaomi native page, Pi model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.