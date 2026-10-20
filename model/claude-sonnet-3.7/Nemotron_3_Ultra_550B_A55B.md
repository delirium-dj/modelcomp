# Claude 3.7 Sonnet — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-3.7-sonnet`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet (Non-reasoning)
- **Short description:** Anthropic's Sonnet-tier model with 200K context, solid coding (SWE-bench Verified 62.3%), moderate multimodal (MMMU 71.8%), strong instruction following (IFEval 90.8%), at competitive Sonnet pricing. Has a "Thinking" variant with reasoning.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet`), OpenCode Zen (`opencode/claude-3.7-sonnet`), AWS Bedrock, Google Vertex AI. Messages API.
- **Release / knowledge:** 2025 release (Anthropic blog); knowledge cutoff not explicitly stated.
- **IDs:** `claude-3-7-sonnet` (Anthropic API), `opencode/claude-3.7-sonnet` (OpenCode Zen). No Free tier.
- **Context window:** 200,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no (base), yes (Thinking variant); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Anthropic typical Sonnet pricing ~$3/M in, $15/M out. Blended ~$2.30/M. No public blended rate for 3.7 specifically.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **50%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA: **68%** (Anthropic blog)
- MMMLU: **83.2%** (Anthropic blog)
- AA Intelligence Index: **15.3%** (AA)
- AA GPQA Diamond: **65.6%** (AA)
- AA HLE: **4.2%** (AA)
- AA Omniscience Index: **-9.7%** (AA)
- AA Omniscience Accuracy: **28.2%** (AA)
- AA Omniscience Hallucination Rate: **52.8%** (AA)
- MATH-500: **82.2%** (Anthropic blog)
- AIME 2024: **23.3%** (Anthropic blog)
- IFEval: **90.8%** (Anthropic blog)
- AA IFBench: **44.0%** (AA)

Coding:

- SWE-bench Verified: **62.3%** (Anthropic blog)

Multimodal:

- MMMU: **71.8%** (Anthropic blog)
- AA MMMU-Pro: **60.1%** (AA)

Long context:

- AA LCR: **51.7%** (AA)
- CritPt: **0.0%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 35/100.** Tau2 50% only agentic benchmark. No TB, BrowseComp, OSWorld, GDPval, MCP Atlas. Capped by extremely limited agentic data.
- **Reasoning: 50/100.** GPQA 68%, MMMLU 83.2%, IFEval 90.8%, MATH-500 82.2%. Capped by AA Intelligence Index 15.3% (<60), AA HLE 4.2% (<40%+), AA LCR 51.7%, CritPt 0.0%, AA Omniscience Index -9.7%, AA Omniscience Hallucination 52.8%. 200K context limits long-reasoning.
- **Context window: 70/100.** 200K native; AA LCR 51.7%. Methodology: 200K = 65-75.
- **Multimodal: 65/100.** Text + image only; MMMU 71.8%, AA MMMU-Pro 60.1%. No video, audio, PDF. Methodology: +image in = 60-70.
- **Coding: 65/100.** SWE-bench Verified 62.3% (below 80%+ frontier). IFEval 90.8% suggests good instruction following for code. Capped by no SWE-bench Pro, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 65/100.** Estimated Sonnet pricing ~$3/$15 (blended ~$2.30/M). Better than Opus tiers. Methodology: $3/$15 ≈ 60-65.
- **Overall Score: 57/100.** Half-up mean of (35 + 50 + 70 + 65 + 65) / 5 = 57 → 57. Using six incl. cost: (35+50+70+65+65+65)/6 = 350/6 = 58.3 → 58. Model-queue says 75.4; discrepancy suggests queue weights instruction following/multimodal higher. Best-fit: solid mid-tier non-reasoning Sonnet with strong IFEval (90.8%) and decent multimodal; 200K context limits long-horizon; superseded by Sonnet 4.5/5/5.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Anthropic blog, system card), independent benchmark aggregators (BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_3.md`, using the same headings.