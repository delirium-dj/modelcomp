# Claude Haiku 4.5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Haiku 4.5
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Small proprietary hybrid-reasoning model for responsive coding and tool workflows; legacy but still active.
- **Provider / access:** Anthropic Messages API; also Bedrock, Google Cloud and Microsoft Foundry.
- **Release / knowledge:** October 15, 2025; reliable knowledge February 2025, training data July 2025.
- **IDs:** Pinned `claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`. No verified Zen Free ID.
- **Context window:** 200K; maximum output 64K.
- **Modalities:** Text/image input, text output; manual extended thinking and tools. Structured JSON enforcement not independently checked.
- **Pricing (as of 2026-10-07):** $1 input / $5 output / $0.10 cache read per million tokens; 5-minute/1-hour cache writes $1.25/$2. Batch input/output discount 50%. Paid API, no free-training policy inferred.
- **Architecture:** Proprietary; total/active parameters and internal topology undisclosed.

Model-card specifications and availability: [official model documentation](https://platform.claude.com/docs/en/models/haiku-4-5/overview). Architecture disclosure: [system card](https://www.anthropic.com/claude-haiku-4-5-system-card).

### Raw benchmarks found

Publisher launch results, visually verified from the [benchmark table](https://www-cdn.anthropic.com/images/4zrzovbb/website/029af67124b67bdf0b50691a8921b46252c023d2-1920x1625.png); not independent leaderboard ranks.

Agent / tool use:
- Terminal-Bench: **41.0%**, historical launch version, not Terminal-Bench 2.1.
- Tau2: retail **83.2%**, airline **63.6%**, telecom **83.0%**.
- OSWorld: **50.7%**.
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found.

Reasoning / knowledge:
- GPQA Diamond **73.0%**; AIME 2025 **80.7%** without tools, **96.3%** with Python; MMMLU **83.0%**.
- HLE, LCR/MLCR, CritPt, current AA Intelligence Index and Omniscience: no verified public score found.

Coding:
- SWE-bench Verified **73.3%**.
- SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.

Long context / multimodal:
- No long-context retrieval reported in the inspected sources.
- MMMU validation **73.2%**.

[Evaluation methodology](https://www.anthropic.com/news/claude-haiku-4-5): SWE-bench used 500 problems, 50 trials, bash/edit tools and a 128K thinking budget. Tau2 averaged ten runs with prompt additions. OSWorld used 100 steps, four runs and 2K thinking per step. Terminal-Bench combined six non-thinking and five 32K-thinking runs in Terminus 2. Other launch evaluations generally used ten runs with 128K thinking; these research budgets should not be confused with the documented API output cap.

### Normalized scores (1–100)

- **Tool use: 63/100.** Tau2 and OSWorld show useful agents; historical Terminal-Bench 41.0% and missing modern evaluations cap the tier.
- **Reasoning: 62/100.** GPQA 73.0% and no-tool AIME 80.7% support the methodology's midrange.
- **Context window: 70/100.** Documented 200K tier; no verified retrieval evidence supports an uplift.
- **Multimodal: 70/100.** Image understanding with MMMU 73.2%; no native audio/video output.
- **Coding: 70/100.** SWE-bench Verified 73.3% supports capable repository work; no current DeepSWE or Terminal-Bench 2.1 verification.
- **Cost efficiency: 87/100.** $1/$5 with inexpensive cache reads provides good paid value, below newer ultra-low-cost tiers.
- **Overall Score: 67/100.** Half-up mean: (63 + 62 + 70 + 70 + 70) / 5 = 67. Cost-conscious legacy tool and coding workloads.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Independent public-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: Add a separate signed report using the same headings.

