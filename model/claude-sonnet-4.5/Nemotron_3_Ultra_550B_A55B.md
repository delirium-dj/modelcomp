# Claude Sonnet 4.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5 (Non-reasoning)
- **Short description:** Anthropic's Sonnet-tier non-reasoning model with 200K context, solid coding (SWE-bench Verified ~75%), moderate pricing. Queue Overall 80.7. Superseded by Sonnet 5/5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-4.5`), OpenCode Zen (`opencode/claude-sonnet-4.5`), AWS Bedrock, Google Vertex AI. Messages API.
- **Release / knowledge:** 2026 release; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-sonnet-4.5` (Anthropic API), `opencode/claude-sonnet-4.5` (OpenCode Zen). No Free tier.
- **Context window:** 200,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Estimated ~$3/M in, $15/M out (Sonnet tier). Blended ~$2.30/M. No public blended rate for 4.5 specifically.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited direct benchmarks** for Sonnet 4.5 on major aggregators. BenchLM shows Sonnet 4.5 score 47.96 (rank 99). Proxy from Opus 4.5 System Card and Muse Spark chart:

- SWE-bench Pro: **53.4%** (Muse Spark chart)
- LiveCodeBench Pro: **70.7%** (Muse Spark chart)
- MMLU-Pro: **82%** (Muse Spark chart)
- GPQA Diamond: **89.2%** (Arcee Trinity chart)
- HealthBench Hard: **14.8%** (Muse Spark chart)
- SWE-bench Verified: **75.6%** (Arcee Trinity chart)

BenchLM Sonnet 4.5 family (partial):
- Terminal-Bench 2.1: Not directly listed

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** No direct TB, BrowseComp, OSWorld, GDPval. Sonnet tier typically moderate agentic. Capped by no direct benchmarks.
- **Reasoning: 68/100.** GPQA Diamond 89.2%, MMLU-Pro 82%, LiveCodeBench Pro 70.7%. Capped by no HLE, FrontierMath, AA Intelligence Index. 200K context limits long-reasoning.
- **Context window: 70/100.** 200K native (vs 1M+ frontier). Methodology: 200K = 65-75.
- **Multimodal: 65/100.** Text + image only. No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 72/100.** SWE-bench Verified 75.6% (Arcee), SWE-bench Pro 53.4%, LiveCodeBench Pro 70.7%. Capped by no SWE-bench Vals, AA Coding Index.
- **Cost efficiency: 65/100.** Estimated Sonnet pricing ~$3/$15 (blended ~$2.30/M). Better than Opus tiers. Methodology: $3/$15 ≈ 60-65.
- **Overall Score: 65/100.** Half-up mean of (50 + 68 + 70 + 65 + 72) / 5 = 65 → 65. Using six incl. cost: (50+68+70+65+72+65)/6 = 390/6 = 65 → 65. Model-queue says 80.7; discrepancy suggests queue weights coding/knowledge higher. Best-fit: solid mid-tier non-reasoning Sonnet; 200K context limits long-horizon tasks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks for 4.5 specifically. Proxy from Muse Spark 1.1 chart, Arcee Trinity chart, BenchLM Sonnet 4.5 score (47.96). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.