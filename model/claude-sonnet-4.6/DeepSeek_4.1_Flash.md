# Claude Sonnet 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (API id `claude-sonnet-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's cost-efficient frontier Sonnet, released 2026-02-17, positioned as near-Opus intelligence at about a third of Opus pricing. In early testing developers preferred it to Sonnet 4.5 ~70% of the time and to Opus 4.5 ~59% of the time, citing less over-engineering and better instruction following.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Closed, API-only.
- **Release / knowledge:** Released 2026-02-17. Knowledge cutoff not disclosed.
- **IDs:** `claude-sonnet-4-6`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens in beta (roughly 1,500 pages per request). Max output not stated in the sources checked.
- **Modalities:** text + vision in, text out; reasoning yes (adaptive + extended thinking with effort controls); tool calls and structured output yes.
- **Pricing (as of 2026-10-01):** $3.00 / 1M in, $15.00 / 1M out — unchanged from Sonnet 4.5. Paid only.
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld / OSWorld-Verified (computer use): **81.5%** — rank 1 of 72 and 100th percentile on OSWorld, rank 9 of 61 on OSWorld-Verified (BenchmarkList)
- Tau3-Banking: **34.4%** (rank 28 of 174); Tau2-Bench Telecom: **79.5%** (BenchmarkList)
- Terminal-Bench Hard: **53.0%** (rank 7 of 326); ClawProBench: **60.5**; Claw-Eval-Live: **61.9%**
- Partner insurance computer-use benchmark: **94%** (Anthropic, 2026-02)
- GDPval-AA / Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- ARC-AGI-2: **60.4%** (BenchmarkList)
- BenchmarkList ECI: **135.66 / 100** (rank 32 of 354)
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **80.2%** (Anthropic, 2026-02-17; vs Opus 4.6's 81.42% at ~40% higher price)
- SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall result published; the 1M window is in beta and its recall-at-depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 86/100.** Best-in-class computer-use evidence — 81.5% OSWorld (rank 1 of 72), 34.4% Tau3-Banking, 53.0% Terminal-Bench Hard, 94% on Anthropic's insurance workflow — raised from the previous 82; capped by missing Terminal-Bench 2.1/GDPval numbers.
- **Reasoning: 78/100.** Anthropic frames it as near-Opus intelligence at a third of the price and it edges Opus 4.5 in blind developer preference, but no GPQA/HLE figure is published, so it stays conservatively sub-Opus.
- **Context window: 95/100.** 1M-token window (beta) that the vendor says uses context rather than merely storing it; capped by beta status and no recall-depth measurement.
- **Multimodal: 80/100.** Text and vision input with strong document/computer-use grounding; no audio, video or non-text output.
- **Coding: 88/100.** 80.2% SWE-bench Verified is only ~1 point behind Opus 4.6 — a class-leading value proposition; capped by unverified harder-harness scores.
- **Cost efficiency: 70/100.** $3/$15 per 1M is mid-tier: ~40% cheaper than Opus 4.6 on both sides, but far from free.
- **Overall Score: 85/100.** Mean of the five quality dims (86+78+95+80+88)/5 = 85.4 → 85. Best fit: high-volume agentic coding and computer-use pipelines that want near-Opus output quality without Opus pricing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Anthropic launch coverage); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
