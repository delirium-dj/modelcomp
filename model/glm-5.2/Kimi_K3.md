# GLM 5.2 — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM 5.2 (`zai-org/GLM-5.2`, MIT open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's open-weight GLM-5 flagship released June 13, 2026 — 1M-context MoE with strong reasoning at max effort (GPQA up to 91.9%, HMMT 92.4%) and #1 τ²-Telecom tool use. BenchLeader Index #67 of 736.
- **Provider / access:** Z.AI API (z.ai), ~30 OpenRouter providers (Baseten, Fireworks, DeepInfra, Novita...), open weights `zai-org/GLM-5.2` (HF, MIT).
- **Release / knowledge:** Released 2026-06-13 (benchleader.com); knowledge cutoff not verified.
- **IDs:** `zai/glm-5.2` / HF `zai-org/GLM-5.2` (no Zen Free ID verified).
- **Context window:** 1M tokens (measured across providers); 262K on some low-cost hosts (benchleader.com provider table). ~66–218 tok/s depending on provider.
- **Modalities:** text in/out; reasoning yes (9 measured effort settings, max = best); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** typical $1.40/$4.40 per 1M (Z.ai, Baseten, Parasail); floor $0.56/$1.76 (Baidu fp8) / $0.563/$1.80 (DeepInfra fp4); current blended ~$0.64/$2.02 (benchleader.com price history).
- **Architecture:** open-weight MoE (glm_moe_dsa), MIT; ~754B-class total per community metadata; activations low (fast decode).

### Raw benchmarks found (max reasoning effort, via benchleader.com aggregation: AA / Epoch / Vals / LiveBench / LMArena / Scale SEAL)

Agent / tool use:

- τ²-Bench Telecom (AA): **99.1%** (#1); τ²-Bench Banking (AA): **34.6%** (benchleader)
- Terminal-Bench 2.1 (AA): **77.9%**; (Vals): **67.8%**; Terminal-Bench Hard: **50.8%**; TB 4.0 (AA): **1.0%** (benchleader)
- MCP Atlas: **77.8%** (#15, Scale SEAL) (benchleader)
- GDPval (AA): **42.9%**; APEX-Agents (AA): **33.7%** (#6) (benchleader)
- LMArena Agent: **#4** overall rank (benchleader)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Epoch #23); 89.5% (AA); 85.6% (Vals) (benchleader)
- HLE (AA): **41.1%**; SimpleBench: **58.8%** (#32) (benchleader)
- ARC-AGI-1: **77.0%**; ARC-AGI-2: **22.8%**; CritPt: **20.9%** (benchleader)
- AA-LCR: **78.3%** (benchleader)
- AA Intelligence Index: **33.7** (max effort; #77); LiveBench overall: **73.2%** (#42); Vals Index: **53.1** (#30); Epoch Capabilities Index: **151.8** (#42) (benchleader)
- AA-Omniscience: index 4.4 — accuracy 24.3% / non-hallucination 73.7% (benchleader)
- AIME 2026: **90.0%**; HMMT Feb 2026: **92.4%**; MMLU-Pro (Vals): **86.7%** (benchleader)

Coding:

- SWE-bench Verified (Epoch): **78.7%** (#5 of 33) (benchleader)
- SWE-bench (Vals): **82.8%** (#18); Vibe Code Bench v1.1: **64.0%**; Code Migration: **37.9%** (benchleader)
- LiveCodeBench (Vals): **69.5%**; SciCode (AA): **51.2%**; DeepSWE: **43.8%** (benchleader)
- LMArena WebDev: **1600** (#21); LMArena Coding: **1510** (#48) (benchleader)
- SWE Atlas (Scale SEAL): Codebase QnA **48.1%** (#5) / Refactoring **42.4%** (#9) / Test Writing **41.5%** (#10) (benchleader)

Long context:

- AA-LCR **78.3%** within the 1M window (benchleader); no MRCR/RULER row.

Multimodal:

- Text-only (no vision/audio rows tracked) — floor applies.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-Telecom #1 (99.1%), MCP Atlas 77.8%, LMArena Agent #4, TB-Hard 50.8%; capped by GDPval 42.9% and TB 4.0 1.0%.
- **Reasoning: 80/100.** GPQA ~91.9%, HMMT 92.4%, AIME 90%, LCR 78.3%, low hallucination; capped by ARC-AGI-2 22.8% and Omniscience accuracy 24.3%.
- **Context window: 88/100.** Native 1M with AA-LCR 78.3% — verified; slightly below top-LCR peers.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 83/100.** SWE-bench Verified 78.7% (#5), SWE-bench (Vals) 82.8%, LMArena WebDev 1600; capped by DeepSWE 43.8% and LiveCodeBench 69.5%.
- **Cost efficiency: 82/100.** Open weights (MIT) + hosted floor ~$0.56/$1.76 — excellent value in the 1M class.
- **Overall Score: 70/100.** Mean of the five quality dims (84+80+88+15+83)/5 = 70.0 → 70. Best fit: text-only agentic + coding stack with MIT open weights and 1M context at sub-$1 input rates.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchleader.com multi-source aggregate, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
