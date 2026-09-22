# Muse Spark 1.3 Contributor — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free (`opencode/muse-spark-1.3-contributor-free`)
- **Short description:** Meta's frontier agentic coding model released September 2, 2026, optimized for long-horizon coding, codebase reasoning, and autonomous software engineering workflows with 20% fewer tool calls and 25% fewer tokens than 1.2.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`); also available at standard pricing as `muse-spark-1.3-xhigh` and `muse-spark-1.3-max` via Vercel AI Gateway, Amazon Bedrock, Google Cloud. Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free ID exists on Zen)
- **Context window:** 1,048,576 tokens (~1M); verified via Vercel changelog and official Meta model card.
- **Modalities:** Text + image + video + PDF input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-02):** Free (Contributor tier — $0 input/$0 output on Zen); Standard tier $1.25/$4.25 per 1M tokens. Note: free tier carries Contributor-level training-data consent; do not use for confidential code.
- **Architecture:** Proprietary transformer (Meta); 405B+ effective params estimated from TB ratio; MoE-style routing unconfirmed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch blog, September 2026 — tied with GPT-5.6 Sol; BenchLM muse-spark-1-3 confirms 88.8%)
- Tau3-Banking / Tau2-Bench: **50.5% / no verified public Tau2 score found** (BenchLM muse-spark-1-3, September 2026)
- GDPval-AA: **1754 Elo** (Artificial Analysis, September 2026 — trails Claude Opus 5 at 1824)
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: **59.4%** (Meta launch blog, September 2026)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM muse-spark-1-3, September 2026)
- HLE: **48.7%** (BenchLM muse-spark-1-3, September 2026)
- LCR / MLCR: **83%** (BenchLM muse-spark-1-3, September 2026)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **48** (Artificial Analysis model page, September 2026)
- MRCR: **98.5%** at 256K–512K / **98.1%** at 512K–1M tokens (Meta launch blog, September 2026)

Coding:

- SWE-bench Verified / SWE-Pro: no separate Verified score found; SWEAtlas CodeBase QnA **59.4%** (Meta launch blog)
- DeepSWE v1.1: **75.4%** (Meta launch blog, September 2026 — cited as leading result for end-to-end agentic SE)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **58.8%** (BenchLM muse-spark-1-3, September 2026)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR 98.5% at ~512K tokens / 98.1% at ~1M tokens (Meta launch blog, September 2026)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.8% is near frontier (frontier ref ~88%+ = 90–100); GDPval 1754 is strong but below 1800 frontier threshold; Tau3 50.5% is solid mid-tier; SWEAtlas 59.4% supports competent agentic performance. Score capped at 92 due to lack of Claw-Eval data.
- **Reasoning: 94/100.** GPQA 93.5% is frontier-class (ref ≥90% → 90–100); HLE 48.7% is very strong; LCR 83% is high; AA Index 48 places it in top tier. MRCR 98.5%/98.1% confirms excellent long-context retrieval. Capped at 94 given no CritPt data.
- **Context window: 100/100.** 1,048,576 tokens (≥1M) with verified near-perfect MRCR retrieval at 512K–1M → 100 per tier mapping.
- **Multimodal: 80/100.** Text + image + video + PDF input confirmed (Vercel changelog, Meta model card). No audio input or non-text output. Per methodology: image+video+PDF in = 75–90; scored 80 reflecting video/PDF coverage without audio.
- **Coding: 93/100.** DeepSWE 75.4% is frontier-class (ref ≥74%+ → 90–100); SciCode 58.8% is strong (ref >55% → 90–100); TB2.1 88.8% tied for top; SWEAtlas 59.4% above mid-tier. No LiveCodeBench or Vibe data; capped at 93.
- **Cost efficiency: 100/100.** $0 input/$0 output on Zen Contributor Free tier → 100.
- **Overall Score: 92/100.** Mean of (Tool 92 + Reasoning 94 + Context 100 + Multimodal 80 + Coding 93) / 5 = 459 / 5 = 91.8 → 92. Best-fit: default for long-horizon agentic coding/research when free Contributor tier is available; upgrade to Standard only when confidentiality is required.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Meta launch blog, BenchLM, Artificial Analysis, Vercel AI Gateway changelog, DataCamp/ExplainX summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
