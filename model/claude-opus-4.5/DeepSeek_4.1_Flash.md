# Claude Opus 4.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.5 (`anthropic/claude-opus-4.5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 flagship — a hybrid-reasoning model with extended thinking that took the coding and agentic lead at launch (80.9% SWE-bench Verified, best-in-class prompt-injection robustness) and remained the reference for long-horizon agent work until Opus 4.6 added a 1M-token beta context.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-5-*` family) through the Anthropic Messages API, plus Claude apps, Bedrock and Vertex resale. Proprietary, closed.
- **Release / knowledge:** Released 2025-11-24 (`claude-opus-4-5-20251101`; alias `claude-opus-4-5`); **reliable knowledge cutoff May 2025, training-data cutoff August 2025** (Anthropic's own model page, re-checked 2026-09-27 — the first pass cited only Artificial Analysis's August 2025 figure, which is the training-data date). **Lifecycle: Active (legacy)** — Anthropic now labels it "Legacy" with retirement no sooner than 2026-11-24.
- **IDs:** `anthropic/claude-opus-4.5` (Artificial Analysis / BenchmarkList naming); `claude-opus-4-5` on Anthropic's API. No OpenCode Zen Free ID.
- **Context window:** 200,000 tokens with a **64,000 max output** (Anthropic's own model page, re-checked 2026-09-27; the first pass recorded the input window from Artificial Analysis / BenchmarkList "At a glance" but omitted the output ceiling). The 1M-token tier arrived later with Opus 4.6 in beta, so 4.5 has no long-context tier.
- **Modalities:** text and image in, text out; extended thinking, tool/function calling, computer use, PDF input, structured output. No audio or video.
- **Pricing (as of 2026-09-27):** $5.00 / 1M input, $25.00 / 1M output, 90% cache-read discount (Artificial Analysis; blend $3.85/1M). A Benchgen card still carries a stale $15/$75 row that does not match launch pricing — treated as unreliable.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function-Calling Leaderboard: **77.5%** (rank 1 of 85; BenchmarkList)
- Tau2 Airline **84.0%** (1/21), Tau2-Bench Telecom **89.5%** (54/332), t2-bench **85.3%** (3/17), TAU3-Bench **69.3%** (7/13)
- Terminal Bench **63.1%** (3/8), Terminal-Bench 2.0 **59.3%** (Anthropic, via Vellum), Terminal-Bench Hard **47.0%** (13/326)
- GDPval-AA **1453 Elo** (31/340); MCP Atlas **69.8%**; MCPMark **42.3%**; OpenClaw Arena **67.4%** (1/13); The Agent Company **46.5%** (2/8); OSWorld-Verified **76.3%**; Claw Bench **92**; ALFWorld 1.0 **100%** (1/8); Vending-Bench 2 **$4,967.06**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.0%**
- HLE: **no verified public score found** in the sources reviewed (Vellum's summary only reports it indirectly, as ~7%/2% behind Gemini 3 Pro)
- ARC-AGI-2 **37.6%** (41/99), ARC-AGI-1 **80.0%**, CyberGym **50.6%**
- Artificial Analysis Intelligence Index **24 — #8 of 60**, measured on Anthropic's API: 45.1 tok/s, TTFT 1.22 s
- AA-Omniscience Net Score **0.15** (6/7, 17th percentile); Vectara HHEM factual consistency **89.1%**, hallucination rate **10.9%** (56/85)
- Prompt-injection robustness (Gray Swan, direct + indirect combined): **4.7% attack success rate** vs 12.5% Gemini 3 Pro and 21.9% GPT-5.1

Coding:

- SWE-bench Verified **80.9%**; SWE-bench Verified (bash only) **64.8%** (1/12); SWE-bench Full **52.6%** (1/9)
- SciCode **49.5%** (38/458); CORE-Bench Hard **77.8%** (1/18, $87.16/run); VibeCodingBench **89.15** (1/15); App-Bench **67.5%**
- LiveCodeBench / DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- No MRCR/RULER retrieval value is published for this checkpoint; the 200K window plus Vending-Bench 2 (**$4,967.06**) and InferenceBench (**3.37×**, 31st pct) are the only long-horizon signals. 4.5 has no 1M tier.

### Normalized scores (1–100)

- **Tool use: 93/100.** Rank-1 BFCL (77.5%) and Tau2 Airline (84.0%), 63.1% Terminal Bench, 76.3% OSWorld-Verified and 69.8% MCP Atlas put it at the top of the agentic field; what caps it is the mid-table The Agent Company (46.5%), APEX-Agents (34.8%) and DPBench (55.0%, 25th pct) results.
- **Reasoning: 89/100.** 87.0% GPQA Diamond and 37.6% ARC-AGI-2 are frontier-grade for a late-2025 hybrid model; the cap is factuality — AA-Omniscience net **0.15** (17th percentile) and a 10.9% Vectara hallucination rate, with no published HLE figure.
- **Context window: 72/100.** 200K tokens with no larger tier and no published retrieval benchmark: solid but a full step below the 256K–2M tiers on the 2026 roadmap, and long-horizon work is evidenced only indirectly.
- **Multimodal: 65/100.** Text and image input with heavy visual-agent use (computer use, OSWorld, screenshots) but no MMMU/vision benchmark published and no audio or video — the practical coverage is text-centric (compare the audio-native voice models in this scan).
- **Coding: 92/100.** 80.9% SWE-bench Verified was the launch state of the art, and CORE-Bench Hard (77.8%), VibeCodingBench (89.15) and SciCode (49.5%) confirm breadth; the bash-only SWE variant at 64.8% and the missing SWE-Pro/LiveCodeBench numbers keep it off a perfect score.
- **Cost efficiency: 55/100.** $5/$25 per 1M is expensive (AA's non-reasoning median is $1.88/$9.50) even with a 90% cache discount; scored on paid pricing because no Zen Free ID exists, and long agent runs multiply the output side.
- **Overall Score: 82.2/100.** (93 + 89 + 72 + 65 + 92) / 5 = 82.2. Best fit: correctness-critical agentic and software-engineering work where the premium price buys the best available prompt-injection resistance and long-horizon reliability.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page and Intelligence Index, BenchmarkList profile, Vellum launch-benchmark breakdown); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
