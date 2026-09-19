# Claude Sonnet 4.6 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Sonnet 4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's legacy balanced mid-tier model. Superseded by Sonnet 5 (June 2026) but remains functional. Good agentic coding at accessible pricing.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6-20260217`). Messages API.
- **Release / knowledge:** 2026-02-17 release; knowledge cutoff estimated late 2025.
- **IDs:** `anthropic/claude-sonnet-4-6-20260217` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M, likely 200K stable at launch). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $2.00 / $10.00 per 1M tokens (same tier as Sonnet 5).
- **Architecture:** Proprietary; Anthropic's mid-tier model at time of release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public standalone score found for Sonnet 4.6
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **~79.6%** (source: happycapy.ai; Sonnet 5 improved to ~85.2%)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 1M nominal; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 70/100.** No explicit tool benchmarks. Positioned as agentic but below Opus 4.6 and Sonnet 5 on tool use. Conservative mid-range.
- **Reasoning: 72/100.** No explicit benchmarks. Legacy mid-tier positioning. Significantly below Sonnet 5 improvements. Lower-mid.
- **Context window: 90/100.** 1M nominal; practical stability at launch likely 200K. No retrieval data.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio. Text+image = 60–70 range.
- **Coding: 78/100.** SWE-bench Verified ~79.6% is solid. Superseded by Sonnet 5's ~85.2%. Missing DeepSWE.
- **Cost efficiency: 82/100.** $2/$10 is moderate. Same as Sonnet 5 which offers better performance — Sonnet 4.6 is less cost-efficient in practice.
- **Overall Score: 75/100.** Mean of (70 + 72 + 90 + 65 + 78) / 5 = 75.0. Functional legacy model; users should upgrade to Sonnet 5 for better value.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, happycapy.ai, secondtalent.com, community evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
