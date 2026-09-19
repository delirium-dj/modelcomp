# Claude Opus 4.6 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Opus 4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's legacy flagship model (Feb 2026). State-of-the-art at launch for agentic and reasoning tasks. Superseded by Opus 4.8 and Opus 5 but remains functional.
- **Provider / access:** Anthropic API (`claude-opus-4-6-20260205`), AWS Bedrock, Google Cloud. Messages API.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff estimated late 2025.
- **IDs:** `anthropic/claude-opus-4-6-20260205` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M, beta at launch). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $5.00 / $25.00 per 1M tokens. Same as Opus 5 pricing tier.
- **Architecture:** Proprietary; Anthropic's frontier model at time of release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (source: vellum.ai, kilo.ai)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found (inferred mid-80s to low-90s from family positioning)
- HLE (Humanity's Last Exam): **40.0%** (source: vellum.ai)
- ARC-AGI-2: **68.8%** (source: vellum.ai)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **80.8%** (source: aireleasetracker.com, kilo.ai)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window (beta at launch); no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 73/100.** TB 2.0 65.4% is mid-range (ref: 45–60% = 50–70; 65% pushes into 70–75). Pre-TB 2.1 era model. Missing Tau3/GDPval/Claw-Eval data.
- **Reasoning: 82/100.** HLE 40.0% is strong (ref: 40%+ = 90–100 range). ARC-AGI-2 68.8% is notable. Missing GPQA verification; inferred ~88–90% from Claude family. Balanced upper-mid.
- **Context window: 93/100.** 1M verified (beta at launch). No retrieval benchmarks published. Slightly lower confidence than newer models with stable 1M.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 82/100.** SWE-bench Verified 80.8% is strong (near-frontier at launch). Missing DeepSWE/SciCode/LiveCodeBench. Performance has since been superseded by 4.8 and Opus 5.
- **Cost efficiency: 70/100.** $5/$25 is moderate-premium. Same tier as Opus 5 which offers better performance at the same price.
- **Overall Score: 79/100.** Mean of (73 + 82 + 93 + 65 + 82) / 5 = 79.0. Solid legacy model; outperformed by Opus 4.8/5 at same price point.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, vellum.ai, kilo.ai, aireleasetracker.com, deeplearning.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
