# Kimi K2.6 — findings by Step 5 Preview

- Source: Moonshot AI / Kimi K2.6 (`opencode/kimi-k2.6`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight native multimodal agentic model (1T total / 32B active MoE, 256K context, MoonViT vision encoder) built for long-horizon coding and Agent Swarm orchestration up to 300 sub-agents / 4,000 steps; SWE-bench Verified 80.2%, BrowseComp 83.2% at $0.95/$4.00.
- **Provider / access:** Open weights (`moonshotai/Kimi-K2.6`, HF, Apache 2.0 per Benchgen); Moonshot API, OpenCode Zen (`opencode/kimi-k2.6`), OpenRouter (`moonshotai/kimi-k2.6`), Together AI (`moonshotai/Kimi-K2.6`), DeepInfra, Opper (EU hosting); Chat Completions API with thinking mode, function calling, JSON mode.
- **Release / knowledge:** released 2026-04-20 (oppr.ai, BenchLM, Together); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.6` (Zen), `moonshotai/Kimi-K2.6` (Together/HF), `moonshotai/kimi-k2.6` (OpenRouter).
- **Context window:** 262,144 (256K); ~236K max output (folder meta).
- **Modalities:** text, image, video in; text out; thinking mode; tool calls; native INT4 quantization.
- **Pricing (as of 2026-10-21):** Moonshot/Zen $0.95/$4.00 per 1M (cached $0.16, folder meta; oppr.ai $0.95/$4); Together $1.20/$4.50 (cached $0.20); DeepInfra $0.75/$3.50-class with $0.15 cache (deepinfra blog).
- **Architecture:** 1T-total / 32B-active MoE, 384 experts (8 selected + 1 shared), Multi-head Latent Attention, 400M MoonViT vision encoder; open weights.

### Raw benchmarks found

Moonshot model card / tech blog (via BenchLM) + Together AI card + Artificial Analysis / Vals AI figures via BenchLM:

Agent / tool use:

- BrowseComp: **83.2%** (Moonshot; 86.3% with Agent Swarm)
- DeepSearchQA: **92.5%** (Moonshot tech blog)
- τ²-bench: **95.9%** (Artificial Analysis via BenchLM; saturated harness)
- WideResearch: **80.8%** (Moonshot model card)
- Toolathlon: **50.0%** (Moonshot model card)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard via BenchLM)
- MCP Atlas: **55.9%** (Moonshot model card)
- OSWorld-Verified: **73.1%** (Moonshot tech blog)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper via BenchLM) — collapses on the 2.0 harness
- Terminal-Bench 2.0: **66.7%** (Moonshot tech blog)
- Terminal-Bench 2.1 (Vals): **53.6%** (Vals AI via BenchLM)
- GDPval-AA: **1,115 Elo / 26.9%** normalized (Artificial Analysis via BenchLM) — below the frontier band
- APEX-Agents (AA): **28.5%** (Artificial Analysis via BenchLM)
- AA Agentic Index: **22.1%** (Artificial Analysis via BenchLM)
- ResearchClawBench: **18.0%** (ResearchClawBench via BenchLM)
- Gert Labs: **56.8%** (Gert Labs via BenchLM)
- Tau3-Banking / GDPval-AA Together table 34% (Together AI benchmark table)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot model card); **91.1%** (Artificial Analysis); **89.1%** (Vals AI)
- HLE: **34.7%** (Moonshot model card); **37.5%** (Artificial Analysis); HLE-Full with tools **54.0%** (Together AI card)
- AIME 2026: **96.4%** (Moonshot model card); HMMT Feb 2026: **92.7%** (Moonshot model card)
- FrontierMath v2: **57.2%** Tiers 1–3 / **25.6%** Tier 4 (Epoch AI via BenchLM; Together table shows Tier 4 25.6%)
- MMLU-Pro (Vals): **87.6%** (Vals AI via BenchLM)
- Artificial Analysis Intelligence Index: **27.0%** (Artificial Analysis via BenchLM — mid reference band)
- AA-LCR (long-context reasoning): **81.0%** (Artificial Analysis via BenchLM)
- CritPt: **8.0%** (Artificial Analysis via BenchLM) — very weak
- AA-Omniscience: Accuracy **32.6%**, Hallucination Rate **40.5%** (Artificial Analysis via BenchLM)
- AA-IFBench: **76.0%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **80.2%** (Moonshot model card); **76.2%** (Vals AI via BenchLM)
- SWE-bench Pro: **58.6%** (Moonshot model card)
- SWE Multilingual: **76.7%** (Moonshot tech blog)
- LiveCodeBench v6: **89.6%** (Moonshot model card); **86.8%** (Vals AI)
- SciCode: **52.2%** (Moonshot model card); **51.5%** (Artificial Analysis)
- Terminal-Bench 2.0: **66.7%** (listed above)
- Vibe Code Bench: **37.89%** (Vals AI via BenchLM)
- CursorBench 3.1: **47.6%** (Cursor evals via BenchLM)
- AA Coding Index: **61.8%** (Artificial Analysis via BenchLM)
- DeepSWE / FrontierCode: no verified public score found (blank on Together's table)

Long context:

- AA-LCR **81.0%** long-context reasoning (Artificial Analysis, via BenchLM); native 256K window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU-Pro 79.4% (80.1% w/ Python), MathVision 87.4%, CharXiv 80.4%, V* 96.9%, Design Arena Website 1269 Elo (Moonshot card / OpenRouter).

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 83.2% (86.3% with Agent Swarm), DeepSearchQA 92.5%, WideResearch 80.8% and τ² 95.9% are strong search/research-agent results, and OSWorld-Verified 73.1% shows real computer-use ability; capped by Terminal-Bench 2.0/2.1 at 66.7%/53.6%, the AA Agentic Index at 22.1%, GDPval 1,115 Elo (26.9% normalized), APEX-Agents 28.5% and OSWorld 2.0 collapsing to 4.6%.
- **Reasoning: 82/100.** GPQA Diamond 89.1–91.1% and AIME 96.4% / HMMT 92.7% are frontier-adjacent, HLE 34.7–37.5% / 54.0% w/tools is solid, and FrontierMath v2 T1–3 57.2% clears mid easily; capped by the AA Intelligence Index 27.0 (mid band), CritPt 8.0% and Omniscience accuracy 32.6% with a 40.5% hallucination rate.
- **Context window: 78/100.** 262,144 native lands in the 200K–500K tier (65–84) above the 200K=70 floor; the ~236K max-output budget is a practical caveat and LCR 81.0% is below the frontier 95%+ MRCR reference.
- **Multimodal: 85/100.** Native text, image and video input via the 400M MoonViT encoder (video-in tier 75–90) with text-only output; MMMU-Pro 79.4%, MathVision 87.4% and V* 96.9% are excellent; no audio input or non-text output.
- **Coding: 80/100.** SWE-bench Verified 80.2% (Vals 76.2%) and LiveCodeBench v6 89.6% are strong upper-mid band, but SWE-bench Pro 58.6%, SciCode ~52%, CursorBench 3.1 47.6%, Vibe Code Bench 37.9% and AA Coding Index 61.8% keep it below the frontier DeepSWE/TB2.1 reference levels.
- **Cost efficiency: 89/100.** $0.95/$4.00 (Zen/Moonshot, $0.16 cache) — and $0.75-class input on DeepInfra — sits near the ~$0.60/$2.20 ≈ 92 reference band on the cheaper side; open weights (free self-host, INT4 native) add a $0 floor.
- **Overall Score: 81/100.** Mean of (78 + 82 + 78 + 85 + 80) / 5 = 80.6 → 81. Best fit: open-weight long-horizon coding and parallel research-agent swarms at a below-frontier price; the hardest terminal/agentic benchmarks still belong to the closed frontier.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Together AI model card, Moonshot card/blog figures + Artificial Analysis/Vals AI/OSWorld/Epoch figures via BenchLM, deepinfra, oppr.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
