# GPT-5.6 Terra — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced mid-tier model in the GPT-5.6 family (released July 9, 2026), offering competitive performance vs GPT-5.5 at a significantly lower cost; designed for professional workflows requiring a balance of speed, intelligence, and cost.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-terra`); available via ChatGPT and OpenAI API. Chat Completions API.
- **Release / knowledge:** 2026-06-26 (limited preview), 2026-07-09 (stable public); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID found; paid pricing)
- **Context window:** 1,050,000 tokens (~1.05M) with max output 128,000 tokens; verified via OpenAI API documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-07-09):** ~$2.00 / $12.00 per 1M input/output tokens. Paid — no free tier.
- **Architecture:** Proprietary (OpenAI); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **42** (Artificial Analysis, 2026)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Terminal-Bench 2.1: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1.05M context confirmed.

### Normalized scores (1–100)

- **Tool use: 77/100.** No verified Tau3/GDPval/TB2.1/Claw-Eval numbers found. AA Index 42 places it in the upper-mid tier; marketed as offering high performance at a fraction of Sol/Fable cost. Scored 77 based on positioning as intermediate model in a high-performing family.
- **Reasoning: 77/100.** AA Index 42 is upper-mid tier; positioned above GPT-5.5 in OpenAI's family ordering. No GPQA/HLE/LCR data publicly available. Scored 77 as proxy for its mid-tier designation.
- **Context window: 100/100.** 1,050,000 tokens (≥1M) → 100 per tier mapping.
- **Multimodal: 65/100.** Text + image input confirmed (standard for GPT-5.6 family); no audio/video/PDF input reported. Per methodology: image in = 60–70; scored 65.
- **Coding: 77/100.** No verified SWE-bench/DeepSWE/LiveCodeBench numbers published. Positioned as high-performance at lower cost than Sol; scored 77 as mid-tier proxy consistent with AA Index placement.
- **Cost efficiency: 85/100.** $2/$12 per 1M input/output tokens is competitive. Between the ~$0.60/$2.20 (~92) and $3/$15 (~60) anchors; scored 85 for the $2/$12 price point.
- **Overall Score: 79/100.** Mean of (Tool 77 + Reasoning 77 + Context 100 + Multimodal 65 + Coding 77) / 5 = 396 / 5 = 79.2 → 79. Best-fit: balanced professional workloads where GPT-5.5 costs are high and Sol-level is overkill; cost-efficient mid-tier OpenAI option.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (OpenAI official docs, Artificial Analysis, Wikipedia GPT-5.6 article, umesh-malik.com, openai.com/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
