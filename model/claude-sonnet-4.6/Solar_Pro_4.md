# Claude Sonnet 4.6 — findings by Solar Pro 4

- Source: Anthropic/Claude Sonnet 4.6, e.g. Anthropic (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic proprietary, Claude Sonnet family)
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4-6`) via Messages API. Available on 46+ providers including GitHub Copilot, Amazon Bedrock, Azure, OpenRouter, Vercel AI Gateway, OpenCode Zen, etc. Messages API.
- **Release / knowledge:** Released 2026-02-17; knowledge cutoff 2025-08-31.
- **IDs:** `anthropic/claude-sonnet-4-6` (primary); also `claude-sonnet-4-6` on Azure, Bedrock, OpenRouter, etc. No free tier.
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens. Note: some providers (GitHub Copilot, DigitalOcean) report 200K context.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes. Structured output / JSON mode: yes. Reasoning: yes. No audio I/O. Attachments: no (PDF handled as document input).
- **Pricing (as of 2026-09-18):** $3.00/1M input, $15.00/1M output (Anthropic direct). Cache reads: $0.30/1M (90% discount). Cache writes: $3.75/1M. Blended rate at 7:2:1 cache hit/input/output ratio: ~$2.31/1M. No free tier. Note: Anthropic has flagged Sonnet 4.6 as legacy; Sonnet 5 is the recommended upgrade.
- **Architecture:** Proprietary. Parameter count not disclosed by Anthropic.
- **Short description:** Anthropic's Claude Sonnet 4.6, released February 2026 as part of the Claude Sonnet family. A proprietary multimodal model supporting text and image input with text output, featuring tool calling, structured output, and a 1M token context window. Positioned as a mid-to-high tier model in Anthropic's lineup, offering strong capabilities at a lower price point than the Opus family. Since superseded by Claude Sonnet 5 (released June 2026), which Anthropic has flagged as a legacy model with no retirement date.
### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Claude Sonnet 4.6 specifically (superseded by Sonnet 5). Based on trajectory (Sonnet 5: 82.1%), Sonnet 4.6 was likely in the ~75-80% range but unverified.
- Terminal-Bench 2.1: no verified public score found for Sonnet 4.6 specifically.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Sonnet 4.6 specifically. Based on trajectory (Sonnet 5: 96.2% — #1 of 44), Sonnet 4.6 was likely in the ~85-90% range but unverified.
- HLE (Humanity's Last Exam): no verified public score found for Sonnet 4.6. Included in AA Intelligence Index composite.
- LCR / MLCR: no verified public score found (included in AA Intelligence Index composite via AA-LCR v1.1).
- CritPt: no verified public score found (included in AA Intelligence Index composite).
- Artificial Analysis Intelligence Index: **25** (Artificial Analysis, v4.3, non-reasoning high effort mode). Ranked **#5 out of 62** models in its class (non-reasoning, high price tier).
- MMLU Pro: no verified public score found for Sonnet 4.6 specifically.
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA-Omniscience included in AA Intelligence Index composite).

Coding:

- SWE-bench Verified: see Agent/tool use above — no direct score found for Sonnet 4.6. Sonnet 5 scored 82.1%.
- SWE-bench Pro: no verified public score found for Sonnet 4.6 specifically.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (included in AA Intelligence Index composite via SciCode).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Sonnet 4.6 specifically.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 70/100.** No direct SWE-bench or Terminal-Bench scores found for Sonnet 4.6 specifically. AA Intelligence Index of 25 provides a composite signal. Based on family trajectory (Sonnet 5 SWE-bench 82.1%), Sonnet 4.6 was likely in the ~75-80% SWE-bench range. Without direct verification, scoring conservatively at 70. Capped by absence of direct benchmark verification.
- **Reasoning: 75/100.** AA Intelligence Index 25 places this above average among non-reasoning models in its price tier (median: 15). Based on family trajectory (Sonnet 5 GPQA 96.2% — #1 of 44), Sonnet 4.6 likely scored in the high 80s to low 90s on GPQA. Without direct verification, scoring at 75. Capped by absence of direct GPQA/HLE scores.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. Top-tier ≥1M context with 128K max output.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. No audio I/O. With both image and PDF input, score 75. Capped by lack of video input and text-only output.
- **Coding: 70/100.** No direct SWE-bench or LiveCodeBench scores found. Based on family trajectory (Sonnet 5 SWE-bench 82.1%, GPQA 96.2%), Sonnet 4.6 was likely competitive in the ~75-80% SWE-bench range. Without direct verification, scoring conservatively at 70. Capped by absence of direct coding benchmark verification.
- **Cost efficiency: 65/100.** $3.00/$15.00 per 1M input/output. Per methodology: ~$3/$15 = ~65-70 range. This is moderately priced — cheaper than Opus-tier models ($5/$25) but more expensive than budget options. Cache discount of 90% ($0.30/1M reads) helps for repeat-context workloads. Blended rate ~$2.31/1M. Capped by pricing relative to Sonnet 5's intro pricing ($2/$10 through Aug 31, 2026) and budget alternatives.
- **Overall Score: 77/100.** Mean of (70 + 75 + 100 + 75 + 70 + 65) / 6 = 75.8 → **76**. Best-fit recommendation: Claude Sonnet 4.6 is now superseded by Sonnet 5 (released June 2026), which offers significantly better benchmarks (SWE-bench 82.1% vs unverified ~75-80%, GPQA 96.2% vs unverified ~85-90%) at the same or lower price ($2/$10 intro pricing through Aug 31, 2026 vs $3/$15 standard). For new deployments, Sonnet 5 is the clear choice. Sonnet 4.6 may still be relevant for existing deployments or where specific compatibility is required. Scores are conservative due to lack of direct benchmark verification for this specific model version; actual capabilities were likely higher based on family trajectory.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, Artificial Analysis), vendor documentation, and Claude model family benchmark progression analysis; scores are normalized 1–100 interpretations, not official vendor scores. Note: Claude Sonnet 4.6 is now deprecated/superseded by Sonnet 5; direct benchmark scores for this specific version are scarce, so scores are conservative estimates based on family trajectory.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.