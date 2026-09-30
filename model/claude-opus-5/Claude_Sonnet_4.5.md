# Claude Opus 5 — findings by Claude Sonnet 4.5 (anthropic/claude-sonnet-4.5)

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid; no free-tier API ID — available on Claude Pro/Max subscriptions and paid API)
- **Short description:** Anthropic's Opus-tier model for complex agentic coding and enterprise work, released on July 24, 2026, running on a 1M token context window with a five-level effort ladder from low to max, priced the same as its predecessor Claude Opus 4.8. Now marked "Legacy" following the Sept 22, 2026 release of Opus 5.5.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`), also Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry. Messages API (Anthropic-native, not OpenAI Chat Completions).
- **Release / knowledge:** Released July 24, 2026; reliable knowledge cutoff May 2026.
- **IDs:** `anthropic/claude-opus-5` (no Free-tier ID exists; no OpenCode Zen entry verified in searches)
- **Context window:** 1M token context window (1M is both default and maximum; there is no smaller context variant), 128k max output tokens, and thinking on by default; verified via Anthropic platform docs.
- **Modalities:** Text and images → text; tool choice, structured outputs, thinking effort levels low, medium, high, xhigh, max. Adaptive reasoning; no audio/video in, no non-text out.
- **Pricing (as of 2026-09-30):** $5/1M input, $0.50/1M cached input, $25/1M output; no long-context price premium: a 900k-token request is billed at the same per-token rate as a 9k-token request. Paid only.
- **Architecture:** Proprietary; parameter count / MoE details not publicly disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (third-party score for Opus 5 on Terminal-Bench 2.1, 0.4 points behind GPT-5.6 Sol)
- Terminal-Bench 4.0: **52.3%** (Anthropic reports 66.4% on Terminal-Bench 4.0, compared with 55.8% for Fable 5.1 and 52.3% for Opus 5)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2: **1,861 Elo** at launch (Fable 5 1,747, GPT-5.6 Sol 1,736); on the newer v2.1 harness Opus 5 rates 1708 Elo
- OSWorld 2.0: **70.6%** (vs GPT-5.6 Sol 62.6%)
- AutomationBench-AA: no verified isolated Opus 5 score found (comparison tables reference it but exact number not published in retrieved sources)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- CursorBench 3.2: **70.0%** (best verified: Claude Fable 5.1 · 73.4%)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (tracker)
- HLE (with tools, Anthropic harness): **63.6%** (advancing past by Opus 5.5 67.7%, Fable 5.1 65.6%, Opus 5 63.6%); HLE (no tools): 56.3%; independent Artificial Analysis run: Claude Opus 5 at 54.9%
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: Opus 5.5 at max reasoning scored a weighted average of 58, seven points higher than Claude Opus 5 — implying Opus 5 ≈ **51** on Index v4.3
- ARC-AGI-3: **30.2%** (vs GPT-5.6 Sol 7.8%); ARC-AGI-2: **90.4%** (tracker)
- Frontier-Bench v0.1: **43.3%** (Fable 5 33.7%)
- Omniscience Accuracy / Hallucination Rate: no isolated Opus 5 value reported in retrieved sources

Coding:

- SWE-bench Verified: **96.0%** (Anthropic-reported); note conflict — Opus 5 has no published SWE-bench number: Anthropic reported Frontier-Bench v0.1 and CursorBench 3.2 at launch on third-party trackers
- SWE-bench Pro: **79.2%** (Opus 5: 79.2%)
- SWE-bench Multilingual: **89.5%** (best verified: Claude Opus 5.5 · 93.9%)
- LiveCodeBench (Vals AI): **89.0%** (best verified: Claude Fable 5.1 · 90.5%)
- SciCode / AA-SciCode: no isolated Opus 5 score found in retrieved sources (Opus 5.5 reported 66.9%)
- Vibe Code Bench: no verified public score found
- DeepSWE v1.1: **68.8%** (vs GPT-5.6 Sol's 72.7%)
- FrontierCode 1.1 Main: **53.4%** (best verified: Claude Opus 5.5 · 54.4%)
- FrontierSWE v2: **52.0%** (best verified: GPT-6 Astra · 65.5%)

Long context:

- No specific MRCR / RULER / GraphWalks retrieval score for Opus 5 found in retrieved sources; Anthropic docs claim consistent instruction following, tool calling, and reasoning throughout the window at 1M but no independent retrieval percentage was located.

### Normalized scores (1-100)

- **Tool use: 90/100.** Frontier-tier Terminal-Bench 2.1 (89.1%) and GDPval-AA v2 (1,861 Elo, above 1750 frontier threshold), plus OSWorld 2.0 at 70.6%; capped by Terminal-Bench 4.0 dropping to 52.3% and no Tau-Bench data.
- **Reasoning: 93/100.** GPQA 93.2% and HLE (with tools) 63.6% clear frontier thresholds (90%+ / 40%+); estimated AA Intelligence Index ≈51 is strong but not top; ARC-AGI-3 at 30.2% leads GPT-5.6 Sol. Capped by absence of CritPt and independent hallucination data.
- **Context window: 96/100.** Verified 1M-token total context (default = max); tier is >=1M = 95-100. Capped below 100 because no independently verified ≥98% retrieval score at 512K+ (e.g., MRCR/RULER) was found.
- **Multimodal: 65/100.** Text and images → text; image input supported, no audio/video/PDF-native input listed, no non-text output. Maps to +image-in tier (60-70).
- **Coding: 90/100.** Frontier SWE-bench Verified (96.0% Anthropic-reported), SWE-bench Pro 79.2%, LiveCodeBench 89.0%, and Terminal-Bench 2.1 89.1%. Capped below 95 because DeepSWE 68.8% is below the 74% frontier line and Anthropic's headline SWE-V number is vendor-reported (no independent verified tracker entry).
- **Cost efficiency: 50/100.** At $5/$25 per MTok, sits between the $3/$15 (~60) and $10/$50 (~30) anchors — closer to the former. Paid tier only; no free API access.
- **Overall Score: 86.8/100.** Mean of (90 + 93 + 96 + 65 + 90) / 5 = 86.8. Best-fit recommendation: high-cost frontier general-purpose model for long-context agentic coding, enterprise document/spreadsheet work, and expert reasoning — pick Opus 5.5 instead unless you have API pins to `claude-opus-5`.

---

## Signature

- Provided by: **Claude Sonnet 4.5 (anthropic/claude-sonnet-4.5)** — 2026-09-30
- Method: public internet research via web search (Anthropic platform docs, Axios, TechCrunch, 9to5Mac, VentureBeat, SiliconAngle, DeepLearning.AI, DataCamp, Vellum, BenchLM, morphllm, Wikipedia HLE leaderboard, modelgrep, pricepertoken, Emergent, tosea, Kunya, uxdev, Amplifi Labs); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
