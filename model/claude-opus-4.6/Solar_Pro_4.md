# Claude Opus 4.6 — findings by Solar Pro 4

- Source: Anthropic/Claude Opus 4.6, e.g. Anthropic (`anthropic/claude-opus-4-6`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Anthropic proprietary, Claude Opus family)
- **Short description:** Anthropic's Claude Opus 4.6, released February 2026 as part of the Claude Opus family. A proprietary multimodal model supporting text and image input with text output, featuring tool calling, structured output, and a 1M token context window. Since superseded by Claude Opus 4.7, 4.8, and Claude Opus 5.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4-6`) via Messages API. Available on 39+ providers including Azure, Amazon Bedrock, OpenRouter, Vercel AI Gateway, OpenCode Zen, GitHub Copilot, etc.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff 2025-05-31.
- **IDs:** `anthropic/claude-opus-4-6` (primary); also `claude-opus-4-6` on Azure, Bedrock, OpenRouter, etc. No free tier.
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens. Note: some providers report 200K context.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes. Structured output / JSON mode: yes. Reasoning: yes. No audio I/O.
- **Pricing (as of 2026-09-18):** $5.00/1M input, $25.00/1M output (Anthropic direct). Cache reads: $0.50/1M (90% discount). Cache writes: $6.25/1M. Blended rate at 7:2:1 cache hit/input/output ratio: ~$3.85/1M. No free tier.
- **Architecture:** Proprietary. Parameter count not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: no verified public score found for Claude Opus 4.6 specifically (superseded by 4.7/4.8/Opus 5). Based on family trajectory (4.7: 87.6%, 4.8: 88.6%, Opus 5: 97.0%), Opus 4.6 was likely ~85-87% but unverified.
- Terminal-Bench 2.1: no verified public score found. Opus 4.7 scored 66.1%, 4.8 scored 74.6%. Opus 4.6 likely ~60-66% but unverified.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Opus 4.6 specifically. Family trajectory: 4.7 ~90%+, 4.8: 93.6%, Opus 5: 94.1%. Opus 4.6 likely ~88-90% but unverified.
- HLE (Humanity's Last Exam): no verified public score found for Opus 4.6. Included in AA Intelligence Index composite.
- LCR / MLCR: no verified public score found (included in AA Intelligence Index composite via AA-LCR v1.1).
- CritPt: no verified public score found (included in AA Intelligence Index composite).
- Artificial Analysis Intelligence Index: **26** (Artificial Analysis, v4.3, non-reasoning high effort mode). Ranked **#4 out of 62** models in its class (non-reasoning, high price tier).
- MMLU Pro: no verified public score found for Opus 4.6 specifically.

Coding:

- SWE-bench Verified: see Agent/tool use above — no direct score found for Opus 4.6.
- SWE-bench Pro: no verified public score found. Opus 4.7: 64.3%, 4.8: 69.2%, Opus 5: 79.2%. Opus 4.6 likely ~60-64% but unverified.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (included in AA Intelligence Index composite via SciCode).
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Opus 4.6 specifically.

### Normalized scores (1–100)

- **Tool use: 70/100.** No direct SWE-bench or Terminal-Bench scores found for Opus 4.6. AA Intelligence Index of 26 provides a composite signal. Based on family trajectory, Opus 4.6 was likely a strong model (SWE-bench ~85-87%), but without direct verification I'm scoring conservatively at 70. Capped by absence of direct benchmark verification.
- **Reasoning: 75/100.** AA Intelligence Index 26 places this above average among non-reasoning models in its price tier (median: 15). Based on family trajectory (4.8 GPQA 93.6%, Opus 5 GPQA 94.1%), Opus 4.6 likely scored high 80s to low 90s on GPQA. Without direct verification, scoring at 75. Capped by absence of direct GPQA/HLE scores.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. Top-tier ≥1M context with 128K max output.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. No audio I/O. With both image and PDF input, score 75. Capped by lack of video input and text-only output.
- **Coding: 70/100.** No direct SWE-bench or LiveCodeBench scores found. Based on family trajectory (4.7→4.8→Opus 5: 87.6%→88.6%→97.0% SWE-bench), Opus 4.6 was likely ~85% SWE-bench, mapping to ~88-90. Without direct verification, scoring conservatively at 70. Capped by absence of direct coding benchmark verification.
- **Cost efficiency: 55/100.** $5.00/$25.00 per 1M input/output. Somewhat expensive but not highest tier. Cache discount of 90% ($0.50/1M reads) helps for repeat-context workloads. Blended rate ~$3.85/1M. Capped by premium pricing relative to Sonnet-tier alternatives.
- **Overall Score: 74/100.** Mean of (70 + 75 + 100 + 75 + 70 + 55) / 6 = 74.2 → **74**. Best-fit recommendation: Claude Opus 4.6 is now superseded by newer models (Opus 4.8, Opus 5) with significantly better benchmarks at the same price point ($5/$25). For new deployments, use Opus 5 (Overall ~92) or Opus 4.8. Opus 4.6 may still be relevant for existing deployments. Scores are conservative due to lack of direct benchmark verification; actual capabilities were likely higher based on family trajectory.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, Artificial Analysis), vendor documentation, and Claude model family benchmark progression analysis; scores are normalized 1–100 interpretations, not official vendor scores. Note: Claude Opus 4.6 is now deprecated/superseded; direct benchmark scores for this specific version are scarce, so scores are conservative estimates based on family trajectory.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.
