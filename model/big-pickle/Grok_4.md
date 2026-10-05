# Big Pickle — findings by Grok 4 (xAI)
- Source: OpenCode Zen (`opencode/big-pickle`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Big Pickle (Free-tier / stealth promotional)
- **Short description:** Experimental stealth reasoning model hosted by OpenCode Zen as a free rotating endpoint optimized for multi-step coding agents, deliberate analysis, tool use, and debugging. Alias for dynamic backend weights (frequently GLM/DeepSeek/Qwen variants or pre-release); not a fixed standalone foundation model.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (or `big-pickle`) via OpenAI-compatible Chat Completions API at `https://opencode.ai/zen/v1/chat/completions`. Also listed on models.dev.
- **Release / knowledge:** 2025-10-17 release; knowledge cutoff 2025-01 (or Jan 1, 2025).
- **IDs:** `opencode/big-pickle` (Free ID exists on Zen; no separate paid ID needed during promo).
- **Context window:** 200,000 tokens total (input limit 160,000; max output 32,000) — verified via models.dev TOML, OpenCode Zen docs/API metadata, and multiple model cards.
- **Modalities:** text in; text out; reasoning yes (interleaved reasoning_content supported); tool calls yes; structured/JSON mode yes; no image/video/audio/PDF in or non-text out.
- **Pricing (as of 2026-10-05):** Free ($0 / $0 / $0 cached per 1M in/out/cache); free-tier privacy caveat — prompts may be used to improve the model during promotional period (OpenCode docs).
- **Architecture:** Proprietary / closed-weights (open_weights=false); rotating stealth backend (params/MoE unknown and changeable without notice); not open-weights.
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **71%** (10/14 tasks; independent reduced single-run suite by Fellipe Soares, OpenCode harness, Oct 2026)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (63/124 task resolve rate; mini-swe-agent 2.4.6 + Harbor v0.18.0 scaffold; self-reported reproducible GitHub run by PhillipChaffee on 2026-08-11, full verifier logs; tops mini-swe-agent class vs official leaderboard entries)
Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **38%** (100 questions; independent reduced single-run suite by Fellipe Soares, Oct 2026)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **64% / 58%** (AA-Omniscience style 100q index +43; independent reduced suite by Fellipe Soares, Oct 2026)
Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (SWE-bench Verified Mini subset: **65%** / 13/20; independent reduced single-run restricted-network by Fellipe Soares, Oct 2026)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **44%** (steps correct; independent reduced 20-problem suite by Fellipe Soares, Oct 2026)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (SWE Atlas QnA above used as coding/agent proxy)
Long context:
- no long-context retrieval reported (MRCR / RULER / GraphWalks)
### Normalized scores (1-100)
- **Tool use: 72/100.** Terminal-Bench 2.1 71% (indep. reduced) + strong SWE Atlas Codebase QnA 50.8% (mini-swe-agent); solid mid-high agentic/tool performance but capped by lack of full official TB/Tau3/GDPval and single-run/reduced nature + rotating backend.
- **Reasoning: 80/100.** HLE 38% near frontier threshold + strong Omniscience 64%/+43 indep.; capped by no verified GPQA Diamond/HLE full/AA Index/LCR and reduced single-run suite.
- **Context window: 70/100.** Tier mapping for verified 200K total (200K = 70 in 200K-500K band); no high-retrieval % at long windows reported.
- **Multimodal: 15/100.** Text-only in/out (no image/video/PDF/audio).
- **Coding: 68/100.** SWE Atlas 50.8%, SWE-Mini 65%, SciCode 44%, TB coding aspects; mid-tier agentic coding, capped by no full official SWE-bench Verified/LiveCodeBench/DeepSWE and independent/reduced harnesses + model rotation.
- **Cost efficiency: 100/100.** $0 input/output/cached (free promotional tier).
- **Overall Score: 61/100.** Mean of five non-cost dims (72+80+70+15+68)/5 = 61 (half-up); best-fit as free high-context coding/reasoning agent endpoint for OpenCode workflows where cost=0 and tool use matter more than multimodal or absolute frontier scores (monitor for backend rotation).
---
## Signature
- Provided by: **Grok 4 (xai/grok-4)** — 2026-10-05
- Method: Fresh public internet research (OpenCode Zen docs, models.dev TOML/metadata, GitHub SWE-Atlas run + logs, independent Fellipe Soares reduced suite blog, model cards, web search cross-checks); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.