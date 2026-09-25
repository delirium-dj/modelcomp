# GLM 5.2 Coding — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM 5.2 Coding (`opencode/glm-5.2-coding`; base weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Coding-focused serving of Z.AI's GLM 5.2 open-weights reasoning model (released June 13, 2026, MIT) on OpenCode Zen. GLM 5.2 is a ~754B-class MoE with 1M context that posts SWE-bench Verified 78.7% and τ²-Telecom 99.1%; this entry tracks the coding plan endpoint (Zen deployment listed at 128K total context).
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions); base model also on ~30 OpenRouter providers (Z.ai, Baseten, Fireworks, Novita...) and open weights `zai-org/GLM-5.2`.
- **Release / knowledge:** GLM 5.2 released 2026-06-13 (benchleader.com); knowledge cutoff not verified.
- **IDs:** `opencode/glm-5.2-coding` (Zen; no separate Free ID); `zai-org/GLM-5.2` (weights).
- **Context window:** 1M native (benchleader.com, measured); **Zen coding deployment listed at 128K total** per catalog.
- **Modalities:** text in/out (Zen listing); reasoning yes (max-effort configuration the strongest); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** hosted $1.40/$4.40 per 1M at Z.ai/Baseten/Fireworks; floor ~$0.56/$1.80 (DeepInfra fp4) (benchleader.com provider table); Zen tier pricing per plan.
- **Architecture:** open-weight MoE (glm_moe_dsa; ~754B-class per community metadata), MIT license.

### Raw benchmarks found (max reasoning-effort configuration, via benchleader.com aggregates of AA/Epoch/Vals/LiveBench)

Agent / tool use:

- τ²-Bench Telecom (AA): **99.1%** (#1); τ²-Bench Banking (AA): **34.6%** (benchleader/AA)
- Terminal-Bench 2.1 (AA): **77.9%**; (Vals): **67.8%**; Terminal-Bench Hard: **50.8%** (AA) (benchleader)
- MCP Atlas: **77.8%** (#15) (Scale SEAL via benchleader)
- GDPval (AA): **42.9%** (benchleader)
- LMArena Agent: **rank #4** (benchleader)
- APEX-Agents (AA): **33.7%** (#6); ITBench SRE: **42.7%** (#13) (benchleader)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Epoch, #23); 89.5% (AA); 85.6% (Vals); 71.2% (Epoch, no-reasoning) (benchleader)
- HLE (AA): **41.1%**; SimpleBench: **58.8%**; ARC-AGI-1: **77.0%**; ARC-AGI-2: **22.8%** (benchleader)
- CritPt: **20.9%**; AA-LCR: **78.3%** (benchleader)
- AA Intelligence Index: **33.7** (max effort); LiveBench: **73.2%**; SimpleQA Verified: **34.2%** (benchleader)
- AA-Omniscience: **4.4 index** — accuracy 24.3%, non-hallucination 73.7% (benchleader/AA)
- HMMT Feb 2026: **92.4%**; AIME 2026: **90.0%** (MathArena via benchleader)

Coding:

- SWE-bench Verified (Epoch): **78.7%** (#5 of 33) (benchleader)
- SWE-bench (Vals): **82.8%**; Vibe Code Bench v1.1: **64.0%**; Code Migration: **37.9%** (Vals via benchleader)
- LiveCodeBench (Vals): **69.5%**; SciCode (AA): **51.2%**; DeepSWE: **43.8%** (benchleader)
- LMArena WebDev: **1600** (#21); LMArena Coding: **1510** (#48) (benchleader)
- SWE Atlas: Codebase QnA 48.1% / Refactoring 42.4% / Test Writing 41.5% (Scale SEAL via benchleader)

Long context:

- AA-LCR 78.3% at up to 1M (benchleader); no MRCR/RULER row.

Multimodal:

- Text-only per Zen listing and GLM-5.2 deployment data (no vision rows). 15-floor applies.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-Telecom 99.1% (#1), MCP Atlas 77.8%, LMArena Agent #4, TB Hard 50.8%; capped by GDPval 42.9% and weak Tau3-Banking 34.6%.
- **Reasoning: 79/100.** GPQA up to 91.9%, HMMT 92.4%, AIME 90%, LCR 78.3%; capped by ARC-AGI-2 22.8% and Omniscience accuracy 24.3%.
- **Context window: 82/100.** Native 1M with AA-LCR 78.3% measured; Zen coding endpoint caps at 128K, costing practical headroom.
- **Multimodal: 15/100.** Text-only deployment — floor.
- **Coding: 83/100.** SWE-bench Verified 78.7% (#5), SWE-bench (Vals) 82.8%, LMArena WebDev 1600 #21; capped by DeepSWE 43.8% and TB 4.0 (AA) 1.0%.
- **Cost efficiency: 80/100.** ~$1.40/$4.40 typical hosted (down to $0.56/$1.80) with MIT open weights — strong value; not free on Zen coding plan.
- **Overall Score: 69/100.** Mean of the five quality dims (84+79+82+15+83)/5 = 68.6 → 69. Best fit: agentic coding on a budget with open-weight portability; multimodal users must look elsewhere (text-only).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchleader.com aggregate of Artificial Analysis / Epoch / Vals / LiveBench / LMArena; HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
