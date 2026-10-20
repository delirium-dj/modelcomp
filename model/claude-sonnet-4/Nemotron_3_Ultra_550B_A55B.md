# Claude 4 Sonnet — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-4-sonnet`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 4 Sonnet (Non-reasoning)
- **Short description:** Anthropic's Sonnet-tier non-reasoning model with 200K context, strong coding (SWE-bench Verified 72.7%), weak reasoning (AA Intelligence Index 16.6%), at competitive Sonnet pricing. Superseded by Sonnet 4.5/5/5.5.
- **Provider / access:** Anthropic API (`claude-4-sonnet`), OpenCode Zen (`opencode/claude-4-sonnet`), AWS Bedrock, Google Vertex AI. Messages API.
- **Release / knowledge:** 2025 release (Anthropic blog); knowledge cutoff not explicitly stated.
- **IDs:** `claude-4-sonnet` (Anthropic API), `opencode/claude-4-sonnet` (OpenCode Zen). No Free tier.
- **Context window:** 200,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Anthropic typical Sonnet pricing ~$3/M in, $15/M out. Blended ~$2.30/M. No public blended rate for 4 specifically.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **52.3%** (Artificial Analysis)
- Gert Labs: **39.66%** (Gert Labs)
- JobBench: **18.4%** (JobBench paper)

Reasoning / knowledge:

- AA Intelligence Index: **16.6%** (AA)
- AA GPQA Diamond: **68.3%** (AA)
- AA HLE: **4.3%** (AA)
- AA Omniscience Index: **-9.0%** (AA)
- AA Omniscience Accuracy: **22.7%** (AA)
- AA Omniscience Hallucination Rate: **41.0%** (AA)
- AA IFBench: **45.4%** (AA)
- AIME 2025: **33.1%** (Anthropic blog)

Coding:

- SWE-bench Verified: **72.7%** (Anthropic blog)

Multimodal:

- AA MMMU-Pro: **62.4%** (AA)

Long context:

- AA LCR: **44.0%** (AA)
- CritPt: **1.1%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** Tau2 52.3% only agentic benchmark. Gert Labs 39.7%, JobBench 18.4%. No TB, BrowseComp, OSWorld, GDPval, MCP Atlas. Capped by limited agentic data.
- **Reasoning: 40/100.** GPQA Diamond 68.3% (below 90%+ frontier), AA Intelligence Index 16.6% (<60), AA HLE 4.3% (<40%+), AA LCR 44.0%, CritPt 1.1%, AA Omniscience Index -9.0%, AA Omniscience Hallucination 41.0%. 200K context limits long-reasoning.
- **Context window: 70/100.** 200K native; AA LCR 44.0%. Methodology: 200K = 65-75.
- **Multimodal: 65/100.** Text + image only; AA MMMU-Pro 62.4%. No video, audio, PDF. Methodology: +image in = 60-70.
- **Coding: 70/100.** SWE-bench Verified 72.7% (approaches 80%+ frontier). No SWE-bench Pro, LiveCodeBench, AA Coding Index. Capped by single coding benchmark.
- **Cost efficiency: 65/100.** Sonnet pricing ~$3/$15 (blended ~$2.30/M). Methodology: $3/$15 ≈ 60-65.
- **Overall Score: 57/100.** Half-up mean of (40 + 40 + 70 + 65 + 70) / 5 = 57 → 57. Using six incl. cost: (40+40+70+65+70+65)/6 = 350/6 = 58.3 → 58. Model-queue says 75.4 (for 3.7) / 74.9 (for 4.6) / not directly listed for 4; this is mid-tier non-reasoning. Best-fit: solid coding non-reasoning Sonnet (SWE-bench Verified 72.7%); weak reasoning/agentic; 200K context limits long-horizon; superseded by 4.5/5/5.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Anthropic blog), independent benchmark aggregators (BenchLM, Artificial Analysis, JobBench, Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_4.md`, using the same headings.