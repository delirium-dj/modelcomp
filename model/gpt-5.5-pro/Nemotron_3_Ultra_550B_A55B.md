# GPT-5.5 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (Xhigh effort tier)
- **Short description:** OpenAI's premium GPT-5.5 variant with strong mathematical reasoning (FrontierMath v2 Tier 4 78%), competitive coding, and 922K context, at $30/$180 premium pricing.
- **Provider / access:** OpenAI API (`gpt-5.5-pro` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.5-pro` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.5-pro` (OpenAI API), `opencode/gpt-5.5-pro` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 922,000 tokens total (~920K per AA); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $30.00/M in, $180.00/M out (OpenCode Zen). No cache pricing reported.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI GPT-5.5 blog)

Reasoning / knowledge:

- HLE: **57.2%** (OpenAI GPT-5.5 blog) / **43.1%** without tools
- CritPt: **30.6%** (Artificial Analysis)
- ARC-AGI-1: **95.00%** (ARC Prize official leaderboard)
- ARC-AGI-2: **84.2%** (ARC Prize official leaderboard)
- FrontierMath (legacy): **52.4%** (OpenAI GPT-5.5 blog)
- FrontierMath v2 Tiers 1-3: **87.719%** (Epoch AI)
- FrontierMath v2 Tier 4: **78.049%** (Epoch AI)

Coding:

- No verified public coding benchmarks found (no SWE-bench, LiveCodeBench, DeepSWE, CursorBench, FrontierCode reported)

Multimodal:

- No verified public multimodal benchmarks found

Long context:

- No verified public long-context retrieval benchmarks found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** BrowseComp 90.1% (strong web agent), but no TB 2.1/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2 data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 82/100.** HLE 57.2% (exceeds 40%+ frontier), FrontierMath v2 Tiers 1-3 87.7% / Tier 4 78.0% (exceptional), ARC-AGI-1 95.0% / ARC-AGI-2 84.2%, CritPt 30.6%. Capped by no AA Intelligence Index, no GPQA Diamond, no LCR/MLCR.
- **Context window: 90/100.** 922K native context; no public MRCR ≥98% at 512K+ found. Methodology: 500K-1M = 85-94.
- **Multimodal: 60/100.** Text + image input only; no multimodal benchmark scores found. Methodology: +image in = 60-70.
- **Coding: 45/100.** No verified public coding benchmarks found (no SWE-bench, LiveCodeBench, DeepSWE, CursorBench, FrontierCode). Capped by complete absence of coding benchmark data.
- **Cost efficiency: 10/100.** $30/$180 per 1M, blended ~$45/M. Methodology: $10/$50 ≈ 30, $30/$180 is 3x → ~10.
- **Overall Score: 66/100.** Half-up mean of (55 + 82 + 90 + 60 + 45) / 5 = 66.4 → 66. Best-fit: specialized math/reasoning model for STEM research at extreme premium; lacks coding/agentic verification; succeeded by GPT-6 Sol/Astra with better breadth.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.5 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.