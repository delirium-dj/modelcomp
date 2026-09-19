# Claude Sonnet 5 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Sonnet 5
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's balanced mid-tier model for everyday agentic coding, tool use, and production apps. Approaches Opus-tier performance at accessible pricing with adaptive thinking.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), AWS Bedrock, Google Cloud, Microsoft Foundry. Default on Claude Free/Pro plans. Messages API.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff estimated early 2026.
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; adaptive thinking enabled by default; tool calls; JSON mode. Real-time cyber safeguards.
- **Pricing (as of 2026-09-19):** $2.00 / $10.00 per 1M tokens (permanent; planned increase to $3/$15 was canceled). Note: new tokenizer produces ~30% more tokens for same input.
- **Architecture:** Proprietary; balanced intelligence-to-cost ratio in Anthropic lineup.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public standalone score found for Sonnet 5
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **~85.2%** (source: happycapy.ai comparative analysis; significant improvement over Sonnet 4.6's 79.6%)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** No explicit tool benchmarks published. Adaptive thinking and autonomous planning described in docs. Positioned as highly agentic but below Opus 5 capability. Conservative upper-mid.
- **Reasoning: 80/100.** No explicit GPQA/HLE. Described as approaching Opus-tier in reasoning. Positioned between Haiku (fast) and Opus (frontier). Upper-mid.
- **Context window: 95/100.** 1M verified. Same architecture as Opus 5.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 83/100.** SWE-bench Verified ~85.2% shows significant capability. Missing DeepSWE/SciCode but strong production coding performance.
- **Cost efficiency: 82/100.** $2/$10 is moderate. Well-positioned between Haiku ($1/$5) and Opus ($5/$25). New tokenizer (+30% tokens) partially offsets pricing advantage.
- **Overall Score: 80/100.** Mean of (78 + 80 + 95 + 65 + 83) / 5 = 80.2 ≈ 80. Best everyday Anthropic model for cost-conscious production; trails Opus 5 on frontier tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, happycapy.ai, dev.to, claude.com, pecollective.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
