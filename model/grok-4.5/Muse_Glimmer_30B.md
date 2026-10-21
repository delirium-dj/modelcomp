# Grok 4.5 — findings by Muse Glimmer 30B

- Source: xAI/Grok 4.5, e.g. OpenCode Zen `opencode/grok-4.5`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's 500K-context (450K out) flagship co-developed with Cursor for token-efficient agentic coding; SWE-bench 86.6%, GPQA 93.1%.
- **Provider / access:** OpenCode Zen `opencode/grok-4.5`. Chat Completions.
- **Release / knowledge:** 2026-07-08 public release; knowledge cutoff not published.
- **IDs:** `opencode/grok-4.5`. No Free ID on Zen; paid only.
- **Context window:** 500,000 total (500K; up to 450K out). Verified via meta.json.
- **Modalities:** Text, image, file in; text out. Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Paid $2.00/$6.00 per 1M input/output; $0.30 cached. PricingLinks: https://x.ai/api. No free tier.
- **Architecture:** Proprietary. Trained on tens of thousands of Nvidia GB300 GPUs with reinforcement learning stage covering hundreds of thousands of software-engineering tasks; co-developed with Cursor.

### Raw benchmarks found

> List measured numbers with source.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI: Grok 4.5 launch post, https://x.ai/news/grok-4-5)
- Terminal-Bench 3.0: **15.7%** (Terminal-Bench 3.0 leaderboard)
- GDPval-AA: **44.2%** normalized / **1430** Elo (Artificial Analysis model benchmarks)
- deepSWE: **53%** (xAI launch post)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (Artificial Analysis AA-GPQA Diamond)
- GPQA Diamond (Vals): **92.9%** (Vals AI leaderboard)
- HLE: **42.7%** AA-HLE (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis CritPt Leaderboard)
- Artificial Analysis Intelligence Index: **38.8%** (Artificial Analysis)

Coding:

- SWE-bench: **86.6%** (Vals AI SWE-bench leaderboard)
- SWE-bench Pro: **64.7%** (xAI launch post)
- SWE Multilingual: **78%** (Cursor launch post)
- LiveCodeBench (Vals): **87.4%** (Vals AI)
- AA-SciCode: **55.0%** (Artificial Analysis)
- VULCANBench v3: **89.9%** (VulcanBench Technical Report)
- AA Coding Index: **72.5%** (Artificial Analysis)

Multimodal / grounded:

- AA-MMMU-Pro: **80.4%** (Artificial Analysis)
- AA-Omniscience Accuracy: **51.6%**; Hallucination Rate **54.1%** (Artificial Analysis)

Long context:

- Context window 500K total / 450K out verified. No separate MRCR/RULER public score found for this exact ID.

### Normalized scores (1–100)

> Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding.

- **Tool use: 82/100.** Terminal-Bench 2.1 83.3% near frontier 88%+; deepSWE 53% caps score.
- **Reasoning: 92/100.** GPQA Diamond 93.1% meets frontier ≥90%; HLE 42.7% supports high reasoning tier.
- **Context window: 88/100.** 500K total / 450K out places in 500K–1M tier 85–94 per methodology.
- **Multimodal: 70/100.** Text + image + file in, text out; AA-MMMU-Pro 80.4% supports image input competence; no video/audio output.
- **Coding: 88/100.** SWE-bench 86.6%, LiveCodeBench 87.4%, AA-SciCode 55.0% consistent with strong coding tier; SWE-bench Pro 64.7% caps at high-80s.
- **Cost efficiency: 73/100.** $2/$6 per 1M with $0.30 cached is paid mid-tier; cheaper than $3/$15 ~60, pricier than $1.25/$4.25 ~88.
- **Overall Score: 84/100.** Mean of 82 + 92 + 88 + 70 + 88 = 84. Best-fit for token-efficient agentic coding with strong reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
