# Big Pickle — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: OpenCode Zen / stealth host (Big Pickle; consensus alias for GLM-4.6)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (stealth Zen model, generally treated as a GLM-4.6 wrapper)
- **Short description:** Stealth daily-driver model exposed by OpenCode Zen under the `big-pickle` slug. Community consensus (Grokipedia, community skill `inkwake/skills/opencode/big-pickle.md`) ties it to GLM-4.6 weights. Sonnet-class coding/agent capability at zero cost.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`; Chat Completions endpoint. Pi proxy `https://pi.dev/models/opencode/big-pickle`. Vendor does not disclose weights or paper.
- **Release / knowledge:** Listed on Zen since at least 2026-Q3; knowledge cutoff inferred from GLM-4.6 ≈ 2025-10.
- **IDs:** `opencode/big-pickle` (Zen). No Free ID distinct from main — the Zen entry itself is the free tier ($0 in/out during the limited free period).
- **Context window:** 200K total (160K input / 32K output per models.dev `big-pickle.toml`).
- **Modalities:** Text in/out only. Tool calls supported; no image/video/audio/PDF in.
- **Pricing (as of 2026-09-17):** $0 in / $0 out on the Zen free tier (training-data consent applies). Paid GLM-4.6 fallback ≈ $0.60 in / $2.20 out per 1M tokens.
- **Architecture:** Proprietary stealth host; consensus identity = GLM-4.6 = 357B-A32B MoE (≈32B active), 200K context. Vendor has not confirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.4%** (BenchmarkList `z-ai-glm-4.6`)
- Tau3-Banking: **10.5%** (BenchmarkList `z-ai-glm-4.6`); vendor/ApX reports Tau2-Bench up to 76.9% (BenchLM) — harness gap.
- GDPval-AA: **934** Elo (BenchmarkList); ≈1000 range from AA.
- Claw-Eval / ClawProBench: **no verified public score found** at the same harness as frontier peers.
- Toolathon / MCP-Atlas: **no verified public score found** under `big-pickle` slug.

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (BenchLM `glm-4-6`) — note BenchmarkList/ApX occasionally show 0.81 normalized; we use the % form (63.2%).
- HLE: **5.5%** (BenchLM)
- LCR: **28.3%** (BenchLM) — long-context recall weak.
- MRCR: **no verified public score found** at 512K+ for `big-pickle`.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **no verified public score found** under `big-pickle`; GLM-4.6 proxy ≈ 30–35 (Index 53.94 #107/411 in BenchLM is GLM-4.6 raw, not the Zen wrapper).

Coding:

- SWE-bench Verified: **0.68** (ApX) ≈ 68% on GLM-4.6 proxy.
- SWE-Pro: **no verified public score found** for `big-pickle`.
- LiveCodeBench: **81.0%** (BenchmarkList).
- SciCode: **38.4%** (BenchmarkList).
- SWE-Atlas direct eval (PhillipChaffee): **50.8%** (63/124) — direct `big-pickle` measurement, the only primary number on the slug.
- Vibe Code Bench: **3.1%** (BenchmarkList) — agentic coding under stress.
- DeepSWE: **no verified public score found** for `big-pickle`.

Long context:

- RULER / MRCR at 200K: **no long-context retrieval reported**; LCR 28.3% suggests weak needle retrieval at depth.

### Normalized scores (1–100)

> Methodology in `model-comparison.md`. Cap each score by what is verified.

- **Tool use: 55/100.** TB2.1 49.4% (mid), Tau3 10.5% (low), GDPval 934 (mid). Claw-Eval missing → no credit. Cap = Tau3 weak tool reliability.
- **Reasoning: 60/100.** GPQA 63.2% (mid), HLE 5.5% (low), LCR 28.3% (low). Cap = weak multi-step + long-context recall.
- **Context window: 70/100.** 200K total maps to 65–84 band; 200K = 70 baseline. No measured retrieval at depth → no bonus.
- **Multimodal: 15/100.** Text-only input. Baseline 15 per methodology.
- **Coding: 70/100.** SWE-Atlas 50.8% direct, SWE-bench ~68% proxy, LiveCode 81% (compensating), SciCode 38.4% (weak), Vibe 3.1% (very weak agentic). Cap = Vibe floor; bonus from LiveCode.
- **Cost efficiency: 100/100.** $0 in/out on Zen free tier.
- **Overall Score: 54/100.** Mean (55+60+70+15+70+100)/6 = 61.7 → 62. Best fit: free daily-driver; escalate on tool-heavy or 1M-context jobs.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (BenchmarkList, BenchLM, ApX, AA, models.dev, community skill `inkwake/skills/opencode/big-pickle.md`, direct SWE-Atlas 50.8% by PhillipChaffee); scores are normalized 1–100 interpretations, not official vendor scores. Where no same-harness number exists for the `big-pickle` slug, that is stated explicitly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.