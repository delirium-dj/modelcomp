# MiniMax M2.7 — findings by Kimi K3

- Source: MiniMax / MiniMax M2.7 (`minimax-m2.7`; HF `MiniMaxAI/MiniMax-M2.7`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight self-evolution M2.7 (229B total / 10B active sparse MoE — smallest active footprint in its class) — dependable mid-tier coding (vendor SWE-Pro 56.22%, ≈ Opus's best level at launch) and τ²-bench 84.8% tool use at 200K context; non-reasoning base per BenchLM. Succeeded by M3.
- **Provider / access:** MiniMax API (OpenAI-compatible); open weights on HF `MiniMaxAI/MiniMax-M2.7` + GitHub `MiniMax-AI/MiniMax-M2.7` (Apache 2.0 per bestllmfor.com catalog); OpenRouter; Token Plan unchanged-price upgrade (minimax.io).
- **Release / knowledge:** Announced 2026-03-18 (minimax.io news "Early Echoes of Self-Evolution"); cutoff not verified.
- **IDs:** `minimax-m2.7` (OpenCode Zen, $0.30/$1.20); `minimax/minimax-m2.7` (OpenRouter).
- **Context window:** 200K tokens (benchlm.ai, bestllmfor.com concur).
- **Modalities:** text in (Design Arena row is text-driven site design, not vision); text out; reasoning: no (benchlm.ai classification); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.30/M input, $1.20/M output on Zen (per brief; MiniMax's flat cheap-tier rate, same as M3 official); open weights free to self-host.
- **Architecture:** 229B total / 10B active sparse MoE (aitooltier.com, bestllmfor.com); ~138GB VRAM at Q4; open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **84.8%** (benchlm.ai)
- Terminal-Bench 2.0: **57.0%** (matches vendor TB2 claim — minimax.io); TB 2.1 (Vals): **48.7%** (benchlm.ai)
- Claw-Eval: **48.7%**; MM-ClawBench: **62.7%** (benchlm.ai)
- MLE-Bench Lite: **66.6%**; Toolathlon: **46.3%** (benchlm.ai; matches vendor figure per brief)
- GDPval-AA (AA-measured): **1087 Elo** (24.9% normalized) (benchlm.ai); **vendor-reported GDPval: 1495 Elo** (per brief/minimax.io vendor table)
- APEX-Agents-AA: **10.6%**; AA Agentic Index: **16.8%** (benchlm.ai)
- Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GPQA-D); 87.4% (AA); 86.6% (Vals) (benchlm.ai)
- HLE (AA-HLE): **29.6%** (benchlm.ai)
- AA-LCR: **78.3%**; CritPt: **0.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.8**; BenchLM overall **48.08/100** (benchlm.ai; leaderboard re-sliced from "#83 of 507" to "#83 of 194" cohort)
- AA-Omniscience Accuracy / Hallucination Rate: **26.8% / 35.6%** (benchlm.ai)
- AIME 2025 (Arcee): **80.0%**; MMLU-Pro: **80.4–80.8%**; AA-IFBench: **75.7%** (benchlm.ai)

Coding:

- SWE-bench Verified*: **75.4%** (Arcee harness); SWE-bench (Vals): **73.8%**; SWE-bench Pro: **56.2%** (benchlm.ai — matches vendor SWE-Pro 56.22% claim, "nearly matching Opus's best level" per minimax.io); SWE-Rebench: **51.9%**; SWE Multilingual: **76.5%**; Multi-SWE Bench: **52.7%** (benchlm.ai)
- LiveCodeBench (Vals): **79.9%** (benchlm.ai)
- Vibe Code Bench: **27.0%**; NL2Repo: **39.8%**; AA-SciCode: **50.1%**; AA Coding Index: **52.6**; VIBE-Pro: **55.6%** (vendor "end-to-end full project delivery"); React Native Evals: **71.4%** (benchlm.ai)

Long context:

- AA-LCR 78.3% within the 200K window (benchlm.ai); no MRCR rows.

Multimodal:

- None applicable — text-only model (Design Arena Website **1254 Elo** on benchlm.ai is a text-driven site-design eval).

### Normalized scores (1–100)

- **Tool use: 70/100.** τ² 84.8% and MLE-Bench Lite 66.6% good; capped by GDPval (AA) 1087, APEX 10.6%, Agentic Index 16.8%.
- **Reasoning: 68/100.** GPQA ~87% consistent across harnesses, AIME 80%; capped by HLE 29.6% and CritPt 0.6%.
- **Context window: 62/100.** 200K window with decent LCR 78.3% — just under the 256K/70s band; below the 1M tier.
- **Multimodal: 12/100.** Text-only variant — no vision/audio input on this checkpoint (band: text-only → low); MiniMax's multimodality arrived with M3.
- **Coding: 70/100.** Broad SWE coverage (~74% verified-ish; SWE-Pro 56.22% ≈ frontier at launch); capped by NL2Repo 39.8% and Coding Index 52.6.
- **Cost efficiency: 93/100.** Verified Zen rate $0.30/$1.20 per 1M — cheap-tier band; Apache-2.0 open weights free to self-host (~138GB at Q4).
- **Overall Score: 56.4/100.** Mean of the five quality dims (70+68+62+12+70)/5 = 56.4. Best fit: budget open-weights tool calling and mid-difficulty coding; M3 is the current generation.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (minimax.io official M2.7 page/news, benchlm.ai scorecard, aitooltier.com, bestllmfor.com, HF/GitHub metadata); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release pinned to 2026-03-18; architecture declassed (229B/10B active MoE, Apache 2.0, HF `MiniMaxAI/MiniMax-M2.7`); pricing verified at Zen $0.30/$1.20; vendor figures reconciled (SWE-Pro 56.22% = benchlm SWE-bench Pro 56.2%; TB2 57.0% same; Toolathlon 46.3% same; **vendor GDPval 1495 added alongside AA-measured 1087**); modalities confirmed text-only → Multimodal 55→12 per band; Cost 84→93 per band; BenchLM rank note re-sliced; Overall 65.0→56.4.
- Future sources: add a new file next to this one using the same headings.
