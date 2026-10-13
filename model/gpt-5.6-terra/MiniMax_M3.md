# GPT-5.6 Terra — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced mid-tier of the GPT-5.6 family (with Sol flagship and Luna cheap tier). Marketed as "GPT-5.5-competitive performance at 2× lower cost." Retains most of Sol's HealthBench Professional jump (~57.7 length-adjusted).
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); ChatGPT; Microsoft Foundry; OpenCode Zen `opencode/gpt-5.6-terra`. Responses API + Chat Completions.
- **Release / knowledge:** Released 2026-07-09 (broad GA after government-gated preview starting 2026-06-26). Knowledge cutoff 2026-02-16 (shared with Sol and Luna).
- **IDs:** `openai/gpt-5.6-terra`; `opencode/gpt-5.6-terra` (Zen). No free ID.
- **Context window:** 1,050,000 total — 922K max input / 128K max output. Note: prompts >272K input tokens billed at 2× input / 1.5× output for the entire request.
- **Modalities:** Text, image in; text out (per OpenAI confirmed spec — note: the project's meta.json also lists audio/video/PDF in, but the verified OpenAI system card says "text and image input with text output. There is no audio." Treat as text + image in.). Reasoning: yes (`reasoning.effort` parameter: none / low / medium / high / max).
- **Pricing (as of 2026-10-13):** $2 input / $12 output per 1M; cached input $0.20 (10% of base); cache writes 1.25× multiplier. No free tier.
- **Architecture:** Proprietary OpenAI. Shares the GPT-5.6 training run with Sol and Luna; positioned at the cost-capability middle.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for GPT-5.6 Terra at OpenAI's published harness (OpenAI's launch chart deliberately omits Terra's Terminal-Bench number; third-party aggregator numbers contradict each other). Base Sol single = 88.8% (o-mega).
- SWE-Bench Pro (Public, single attempt): **no verified public score found** for Terra at standard harness.
- SWE-Bench Pro (Multi-Agent): **no verified public score found** for Terra; Sol leads OpenAI's headline chart (OpenAI GPT-5.6 page).
- SEC-Bench Pro (Multi-Agent): **no verified public score found** for Terra.
- MCP Atlas / OSWorld-Verified / GDPval-AA: **no verified public score found** for Terra.
- Tau2-bench / Toolathlon / Tau3-Banking: **no verified public score found** for Terra.

Reasoning / knowledge:

- HealthBench Professional (length-adjusted): **57.7** (OpenAI system card) — Terra retains most of Sol's +8.7 health jump over GPT-5.5; Luna 55.7. The most-cited Terra-specific number.
- Biology troubleshooting (multimodal virology, protocol): Terra retains most of Sol's gain; specific Terra figure not separately published.
- GPQA Diamond / AIME / Humanity's Last Exam / CritPt / AA-Omniscience Index / LCR: **no verified public score found** for Terra.

Coding:

- SWE-Bench Pro / Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierCode: **no verified public score found** for Terra.

Multimodal:

- MMMU-Pro / Blueprint-Bench 2 / CharXiv Reasoning: **no verified public score found** for Terra.

Long context:

- MRCR / RULER / GraphWalks at window length: **no long-context retrieval reported** for Terra.
- 1.05M context window. Reasoning tokens can extend proportionally.

### Normalized scores (1–100)

- **Tool use: 78/100.** "GPT-5.5-competitive" per OpenAI marketing — implying ~75–85 range across most agentic axes but not a top-of-leaderboard model. Capped at 78 because no specific Terminal-Bench / MCP Atlas / SWE-Bench Pro figure is published for Terra at the standard harness, and third-party aggregator numbers contradict each other.
- **Reasoning: 80/100.** HealthBench Professional 57.7 (length-adjusted, OpenAI system card) — Terra retains most of Sol's gain. "GPT-5.5-competitive" reasoning quality per OpenAI. Capped at 80 because GPQA / HLE / ARC-AGI-2 figures for Terra specifically are not published; the GPT-5.5 baseline (GPQA 93.6, ARC-AGI-2 85.0) sets the implied ceiling.
- **Context window: 88/100.** 1.05M context (922K input / 128K output), shared with Sol and Luna. Capped at 88 because no MRCR / RULER retrieval number at window length is published for Terra, and prompts >272K are subject to the 2×/1.5× multiplier.
- **Multimodal: 72/100.** Text + image in (per OpenAI confirmed spec). Capped at 72 because MMMU-Pro / Blueprint-Bench 2 are not published for Terra specifically.
- **Coding: 78/100.** "GPT-5.5-competitive" coding quality at half of Sol on input. Capped at 78 because SWE-Bench Pro / LiveCodeBench / SciCode figures are not published for Terra at any harness.
- **Cost efficiency: 78/100.** $2 in / $12 out; cached $0.20 (90% off). Half of Sol on input. Capped at 78 because output at $12 is still 4× GPT-5.5 base, and the >272K multiplier still applies.
- **Overall Score: 79/100.** Half-up mean of Tool 78, Reasoning 80, Context 88, Multimodal 72, Coding 78 = 396/5 = 79.2 → half-up 79. GPT-5.6 Terra is OpenAI's mid-tier segmentation play: GPT-5.5-class capability at $2/$12 (half of Sol), retaining most of Sol's health-benchmark gain. Strong when the workload is moderate-cost agentic work, but the absence of published Terminal-Bench / SWE-Bench Pro / MRCR numbers for Terra at the standard harness means this is more a positioning call than a verified benchmark lead.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (OpenAI GPT-5.6 launch page, OpenAI Preview System Card via o-mega, o-mega.ai GPT-5.6 pricing & benchmark article, Microsoft Foundry availability announcement, OpenRouter GPT-5.6 Terra batch API page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra_OpenAI.md`, using the same headings.