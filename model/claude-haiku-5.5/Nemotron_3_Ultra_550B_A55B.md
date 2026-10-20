# Claude Haiku 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-haiku-5.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (Max reasoning tier)
- **Short description:** Anthropic's Haiku-tier reasoning model with exceptional speed (234 t/s), 1M context, strong reasoning (HLE 45.9%, FrontierMath Tiers 1-3 75.1%), and ultra-low pricing ($0.10/$0.50). Best-in-class cost efficiency.
- **Provider / access:** Anthropic API (`claude-haiku-5.5`), OpenCode Zen (`opencode/claude-haiku-5.5`), AWS Bedrock, Google Vertex AI (6 providers). Messages API.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-haiku-5.5` (Anthropic API), `opencode/claude-haiku-5.5` (OpenCode Zen). No Free tier.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** $0.10/M in, $0.01/M cache read, $0.50/M out (Anthropic API & OpenCode Zen). Blended 7:2:1 ≈ $0.08/M (AA). Cost per Intelligence Index task: $0.21 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **39.20%** (Anthropic blog) / **32.8%** (AA)
- GDPval-AA: **1620 Elo** (Anthropic blog) / normalized **55.9%** (AA)
- HLE w/ tools: **57.4%** (Anthropic blog)
- AA Briefcase: **1578 Elo** (Anthropic blog)
- AA AutomationBench: **35.4%** (AA)
- AA Harvey LAB: **89.9%** (AA)
- AA Terminal-Bench 4.0: **32.8%** (AA)
- GDP.pdf: **20.8%** (AA)
- GDPval-AA normalized: **55.9%** (AA)
- AA AnalystAgent: **53.8%** (AA)
- MazeBench: **1%** (ASCII mode, tools)
- Hermes Index: **37.0%** (Nous Research)
- Hermes Bench: **71.0%** (Nous Research)

Reasoning / knowledge:

- HLE w/o tools: **45.9%** (Anthropic blog)
- AA Intelligence Index: **43.4%** (AA) / rank #3/173
- AA HLE: **44.4%** (AA)
- AA Omniscience Index: **10.7%** (AA)
- AA Omniscience Accuracy: **36.4%** (AA)
- AA Omniscience Hallucination Rate: **40.4%** (AA)
- FrontierMath v2 Tiers 1-3: **75.088%** (Epoch AI)
- FrontierMath v2 Tier 4: **46.341%** (Epoch AI)
- ARC-AGI-1: **89.00%** (ARC Prize)
- ARC-AGI-2: **61.3%** (ARC Prize)
- ARC-AGI-3: **0.5%** (ARC Prize)
- HLE w/o tools: **45.9%** (Anthropic blog)

Coding:

- FrontierCode 1.1 Main: **46.4%** (Anthropic System Card)
- AA SciCode: **55.0%** (AA)
- Bug Hunt Bench: **21.5 fixes** (public data)
- FrontierSWE v2: **43.8%** (Proximal)

Multimodal:

- Chartography (no tools): **46.4%** (Anthropic blog)
- Design Arena Website: **1263 Elo** (OpenRouter)

Long context:

- AA LCR: **82.7%** (AA)
- CritPt: **18.9%** (AA)
- MLCR-AA: **63.3%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** TB 4.0 39.2%, GDPval 1620 Elo (below 1750+), HLE w/ tools 57.4%, AA Briefcase 1578 Elo, AA Harvey LAB 89.9%, AA AutomationBench 35.4%. Capped by TB 4.0 32.8% (AA), MazeBench 1%, GDP.pdf 20.8%, AA Agentic Index not listed.
- **Reasoning: 78/100.** HLE 45.9% (exceeds 40%+ frontier), FrontierMath Tiers 1-3 75.1%, ARC-AGI-1 89%, ARC-AGI-2 61.3%, AA LCR 82.7%, AA Intelligence Index 43.4% (near 60 frontier). Capped by ARC-AGI-3 0.5%, CritPt 18.9%, AA Omniscience Index 10.7%, AA Omniscience Hallucination 40.4%.
- **Context window: 95/100.** 1M native context; AA LCR 82.7%. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image only; Chartography 46.4%, Design Arena 1263 Elo. No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 65/100.** FrontierCode 46.4%, AA SciCode 55.0%, FrontierSWE v2 43.8%. Capped by no SWE-bench Verified, LiveCodeBench, AA Coding Index, Bug Hunt Bench 21.5 fixes.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M, blended ~$0.08/M, 90% cache discount, cost/task $0.21. Best-in-class cost efficiency. Methodology: <$0.50/$1 ≈ 98.
- **Overall Score: 73.6/100.** Half-up mean of (60 + 78 + 95 + 70 + 65) / 5 = 73.6 → 74. Using six incl. cost: (60+78+95+70+65+98)/6 = 476/6 = 79.3 → 79. Model-queue says 67.2; **discrepancy** — queue score may weight benchmarks differently; this model excels at cost efficiency and reasoning per dollar.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Anthropic blog, System Card), independent benchmark aggregators (BenchLM, Artificial Analysis, Epoch AI, ARC Prize, OpenRouter, Nous Research); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`, using the same headings.