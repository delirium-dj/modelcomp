# Qwen 3.7-Max — findings by GLM 5.3 Flash

- Source: Alibaba (`qwen3.7-max`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7-Max
- **Short description:** Alibaba's May 2026 top-tier proprietary frontier model with a toggleable "thinking mode," which set the highest open-API SWE-bench Pro score at launch and established itself as the primary frontier alternative for cost-conscious enterprise teams. Superseded within the family by Qwen 3.8 in August 2026.
- **Provider / access:** Alibaba API (`qwen3.7-max`, Model Studio / Alibaba Cloud, OpenAI-compatible Chat Completions); also available via gateways (Yotta AI Gateway, FlowHunt). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-20; knowledge cutoff not verified.
- **IDs:** `qwen3.7-max` (Alibaba Model Studio / gateways). No Free ID on Zen.
- **Context window:** 1,000,000 tokens (verified via Alibaba materials and FlowHunt leaderboard).
- **Modalities:** no image/audio input documented for 3.7-Max (its 3.8 successor is the multimodal one) — text input; text output; reasoning yes (toggleable thinking mode with internal deliberation step); tool calls; JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-09-24):** ~$1.25 / $3.75 per 1M in/out on the Yotta AI Gateway (gateway rate; official Alibaba Model Studio list pricing not verified in this research). Paid only — no free API tier.
- **Architecture:** Proprietary, closed-weight — parameter count not disclosed; cannot be self-hosted or fine-tuned.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0-Terminus: **69.7%** (self-reported, Alibaba; #3 of 8 on FlowHunt leaderboard)
- SWE-bench Pro: **60.6%** (self-reported; #4 of 9 — the highest open-API score on that benchmark at launch)
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon/MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (self-reported; third globally at launch, #4 of 14 on FlowHunt)
- HLE: **41.4%** (self-reported; #2 of 6 on FlowHunt)
- MMLU-Pro: **89.6%** (self-reported; #1 of 8 on FlowHunt)
- MRCR-v2 128k: **90.4** (published, Alibaba; cited by yottalabs.ai)
- Artificial Analysis Intelligence Index: **56.6 pts / #4 of 9** frontier-tier models (independent, AA, via FlowHunt)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.4%** (self-reported; #7 of 13 on FlowHunt; trails Opus 4.8's 88.6% and Opus 4.7's 87.6%)
- SWE-bench Pro: **60.6%** (as above; trails Opus 4.8's 69.2%)
- LiveCodeBench: **91.6%** (self-reported; #2 of 5 on FlowHunt)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR-v2 128k **90.4** (as above); no retrieval value verified at 512K+ of the 1M window

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 69.7% (#3 of 8) is just above the mid band; missing TB2.1/Tau3/GDPval numbers and self-reported-only sourcing keep it in the mid band.
- **Reasoning: 90/100.** GPQA Diamond 92.4% clears the 90%+ frontier reference, HLE 41.4% clears the 40% bar, MMLU-Pro 89.6% is top-of-board and the independent AA Index 56.6 confirms frontier-class; docked for self-reported-only vendor harnesses.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100); MRCR-v2 90.4 at 128K is strong but no ≥98% retrieval at 512K+ is verified, so no 100.
- **Multimodal: 15/100.** No image/audio/video input documented for this model — text-only per available evidence (its 3.8 successor adds multimodality).
- **Coding: 87/100.** SWE-bench Verified 80.4%, SWE-bench Pro 60.6% (highest open-API score at launch) and LiveCodeBench 91.6% are strong; trailing Claude Opus 4.8 on both SWE benches caps it below 90.
- **Cost efficiency: 88/100.** ~$1.25/$3.75 per 1M (gateway rate) sits at the ~$1.25/$4.25 = ~88 methodology reference with a slightly cheaper output price.
- **Overall Score: 71.8/100.** Mean of the five quality dims (72 + 90 + 95 + 15 + 87) / 5 = 71.8. Best-fit: a frontier-reasoning, coding-strong API model for enterprise software engineering — best avoided where multimodal input or self-hosting is required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (FlowHunt leaderboard page, yottalabs.ai comparisons, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
