# GPT-5.4 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (Xhigh effort tier)
- **Short description:** OpenAI's ultra-premium GPT-5.4 Pro variant with strong reasoning (ARC-AGI-2 83.3%, HLE 58.7%), 1.05M context, at extreme $30/$180 pricing; succeeded by GPT-5.5 Pro.
- **Provider / access:** OpenAI API (`gpt-5.4-pro` via `https://api.openai.com/v1/responses`), 1 total provider (OpenCode Zen not listed). Responses API (not Chat Completions).
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff August 2025.
- **IDs:** `openai/gpt-5.4-pro` (OpenAI API). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $30.00/M in, $180.00/M out (OpenAI API). Blended 7:2:1 ≈ $45.00/M (AA). No cache pricing reported.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI GPT-5.4 blog)

Reasoning / knowledge:

- ARC-AGI-1: **94.50%** (ARC Prize verified)
- ARC-AGI-2: **83.3%** (OpenAI GPT-5.4 blog)
- CritPt: **30.0%** (Artificial Analysis)
- HLE: **58.7%** (OpenAI GPT-5.4 blog) / **42.7%** without tools
- FrontierScience: **36.7%** (OpenAI GPT-5.4 blog / Meta Muse Spark chart)
- HLE without tools: **42.7%** (OpenAI GPT-5.4 blog)
- FrontierMath v2 Tiers 1-3: **82.456%** (Epoch AI)
- FrontierMath v2 Tier 4: **58.537%** (Epoch AI)
- IPhO 2025 Theory: **93.5%** (Meta Muse Spark chart)
- FrontierMath (legacy): **50%** (OpenAI GPT-5.4 blog)

Coding:

- No verified public coding benchmarks found

Multimodal:

- No verified public multimodal benchmarks found

Long context:

- No verified public long-context retrieval benchmarks found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** BrowseComp 89.3% (strong web agent), but no TB 2.1/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2 data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 80/100.** ARC-AGI-1 94.5% / ARC-AGI-2 83.3% (exceptional), HLE 58.7% (exceeds 40%+ frontier), CritPt 30.0%, FrontierMath Tiers 1-3 82.5% / Tier 4 58.5%, IPhO 93.5%. Capped by no AA Intelligence Index, no GPQA Diamond, no LCR/MLCR, no Omniscience data.
- **Context window: 95/100.** 1.05M native context — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 60/100.** Text + image input only; no multimodal benchmark scores found. Methodology: +image in = 60-70.
- **Coding: 35/100.** No verified public coding benchmarks found (no SWE-bench, LiveCodeBench, DeepSWE, CursorBench, FrontierCode). Capped by complete absence of coding benchmark data.
- **Cost efficiency: 5/100.** $30/$180 per 1M, blended ~$45/M. Methodology: $10/$50 ≈ 30, $30/$180 is 3x → ~5.
- **Overall Score: 64/100.** Half-up mean of (50 + 80 + 95 + 60 + 35) / 5 = 64.0 → 64. Best-fit: specialized reasoning model for math/science at extreme premium; ARC-AGI-2 83.3% and HLE 58.7% are standout; lacks coding/agentic verification; succeeded by GPT-5.5 Pro at 1/6 the cost.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.4 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.