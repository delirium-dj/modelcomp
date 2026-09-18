# Claude Sonnet 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (API id `claude-sonnet-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's cost-efficient frontier Sonnet, released 2026-02-17, positioned as near-Opus intelligence at roughly a third of Opus pricing. In Anthropic's early testing developers preferred it to Sonnet 4.5 about 70% of the time and to the November 2025 flagship Opus 4.5 about 59% of the time, citing less over-engineering and better instruction following.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Closed, API-only.
- **Release / knowledge:** Released 2026-02-17. Knowledge cutoff not disclosed.
- **IDs:** `claude-sonnet-4-6`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens in beta (roughly 1,500 pages per request). Max output not stated in the sources checked.
- **Modalities:** multimodal text + vision input, text output; reasoning yes (hybrid: adaptive + extended thinking with effort controls); tool calls and structured output yes.
- **Pricing (as of 2026-09-18):** $3.00 / 1M in, $15.00 / 1M out — unchanged from Sonnet 4.5. Paid only.
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Terminal-Bench 2.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-Verified (computer use): **large gains reported versus Sonnet 4.5, exact value not published in the sources checked** — treat as direction-only evidence
- Partner insurance computer-use benchmark: **94%** (Anthropic, 2026-02)
- Box heavy-reasoning Q&A (partner): **+15 points versus Sonnet 4.5** (Anthropic, 2026-02)
- Vending-Bench Arena (long-horizon business simulation): **an inventive strategy credited by Anthropic; no numeric score reproduced**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** for this checkpoint at search time
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.2%** (Anthropic, 2026-02-17) — versus Opus 4.6's 81.42% at 40% higher per-token price in the same comparison table
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall result published for Sonnet 4.6; the 1M window is in beta and its recall-at-depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 82/100.** Partner-verified computer-use strength (94% insurance workflow, big OSWorld gains) and a 70%-vs-Sonnet-4.5 developer preference signal, capped by the complete absence of Terminal-Bench, Tau3 or GDPval numbers.
- **Reasoning: 78/100.** Anthropic frames it as near-Opus intelligence at a third of the price and it beats Opus 4.5 in blind developer preference, but no GPQA/HLE figure was published, so the score stays conservatively sub-Opus.
- **Context window: 95/100.** 1M-token window (beta) with reasoning that the vendor says uses the context rather than merely storing it; capped by beta status and the missing recall-depth measurement.
- **Multimodal: 80/100.** Text and vision input with strong document/computer-use grounding; no audio, video or non-text output.
- **Coding: 88/100.** 80.2% SWE-bench Verified is only ~1 point behind Opus 4.6, a class-leading value proposition; capped by unverified harder-harness scores.
- **Cost efficiency: 70/100.** $3/$15 per 1M is mid-tier: roughly 40% cheaper than Opus 4.6 on both sides, but six times Gemini 2.5 Flash-Lite's input rate and far from free.
- **Overall Score: 82/100.** (82 + 78 + 95 + 80 + 88 + 70) / 6 = 82.2 → **82**. Best fit: high-volume agentic coding and computer-use pipelines that want near-Opus output quality without Opus pricing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic launch coverage via Benchgen model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.