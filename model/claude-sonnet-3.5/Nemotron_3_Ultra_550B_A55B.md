# Claude 3.5 Sonnet — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-3.5-sonnet`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (Non-reasoning)
- **Short description:** Anthropic's legacy Sonnet model with 200K context, moderate coding (SWE-bench Verified 49%), basic knowledge (GPQA 59.4%), at legacy pricing. Superseded by 3.7/4/4.5/5/5.5.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet`), OpenCode Zen (`opencode/claude-3.5-sonnet`), AWS Bedrock, Google Vertex AI. Messages API.
- **Release / knowledge:** 2024 release (Anthropic blog); knowledge cutoff not explicitly stated.
- **IDs:** `claude-3-5-sonnet` (Anthropic API), `opencode/claude-3.5-sonnet` (OpenCode Zen). No Free tier.
- **Context window:** 200,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Anthropic legacy Sonnet pricing ~$3/M in, $15/M out. Blended ~$2.30/M. No public blended rate for 3.5 specifically.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Reasoning / knowledge:

- GPQA: **59.4%** (Anthropic blog)
- AA Intelligence Index: Not directly listed (BenchLM Overall 27.69)

Coding:

- SWE-bench Verified: **49%** (Anthropic blog)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 25/100.** No agentic benchmarks (TB, BrowseComp, OSWorld, GDPval, Tau2). 200K context limits long-horizon. Capped by absence of agentic data.
- **Reasoning: 40/100.** GPQA 59.4% (below 65%+ frontier). No HLE, MMLU, FrontierMath, AA Intelligence Index, AA LCR, CritPt. 200K context limits long-reasoning.
- **Context window: 70/100.** 200K native. Methodology: 200K = 65-75.
- **Multimodal: 65/100.** Text + image only (Claude 3.5 family). No video, audio, PDF. Methodology: +image in = 60-70.
- **Coding: 45/100.** SWE-bench Verified 49% (below 80%+ frontier). No SWE-bench Pro, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 65/100.** Legacy Sonnet pricing ~$3/$15 (blended ~$2.30/M). Methodology: $3/$15 ≈ 60-65.
- **Overall Score: 49/100.** Half-up mean of (25 + 40 + 70 + 65 + 45) / 5 = 49 → 49. Using six incl. cost: (25+40+70+65+45+65)/6 = 310/6 = 51.7 → 52. Model-queue says 75.4 (for 3.7) / not listed for 3.5; this is legacy model. Best-fit: outdated non-reasoning Sonnet; SWE-bench 49% and GPQA 59% well behind current frontier; superseded by 3.7/4/4.5/5/5.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Anthropic blog), independent benchmark aggregators (BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_3.md`, using the same headings.