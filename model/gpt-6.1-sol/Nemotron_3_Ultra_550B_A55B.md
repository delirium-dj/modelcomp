# GPT-6.1 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (Max effort tier)
- **Short description:** OpenAI's enhanced GPT-6 Sol variant with perfect FrontierMath Tier 4 (100%), strong reasoning (ARC-AGI-3 52.7%), and competitive $2/$10 pricing with 95% cache discount.
- **Provider / access:** OpenAI API (`gpt-6.1-sol` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-6.1-sol` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 10 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6.1-sol` (OpenAI API), `opencode/gpt-6.1-sol` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $2.00/M in, $0.20/M cache read, $2.50/M cache write, $10.00/M out. >272K tokens: $4.00/M in, $0.40/M cache read, $5.00/M cache write, $15.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $1.47/M (AA). Cost per Intelligence Index task: $0.72 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- AutomationBench: **36.1%** (OpenAI GPT-6.1 Sol blog)
- Terminal-Bench-Science 0.1: **57.0%** (OpenAI GPT-6.1 Sol blog)
- ExploitGym: **35.1%** (OpenAI System Card addendum)
- GDPval-AA v2: **1594 Elo** (Artificial Analysis) / **54.7%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1557** (Artificial Analysis)
- AA AutomationBench: **64.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **56.1%** (Artificial Analysis)
- GDP.pdf: **31.0%** (Artificial Analysis)
- AA AnalystAgent: **50.0%** (Artificial Analysis)
- MazeBench: **17%** (ASCII mode, tools)
- Hermes Index: **57.1%** / Hermes Bench: **73.9%** (Nous Research)

Reasoning / knowledge:

- ARC-AGI-1: **96.50%** (ARC Prize semi-private)
- ARC-AGI-2: **94.2%** (ARC Prize semi-private)
- ARC-AGI-3: **52.7%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **96.18%** (ARC Prize)
- AA Intelligence Index: **52** (rank #12/217) (Artificial Analysis)
- AA HLE: **52.9%** (Artificial Analysis)
- AA LCR: **83.0%** (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- MLCR-AA: **33.9%** (Artificial Analysis)
- STEMBench: **2.76** (Ulam audit)
- HealthBench raw: **56.7%** / length-adjusted **58.5%** / Professional **64.2%** / Professional raw **67.2%** / Hard **36.2%** (OpenAI System Card addendum)
- FrontierMath v2 Tiers 1-3: **93.684%** (Epoch AI)
- FrontierMath v2 Tier 4: **100.000%** (Epoch AI)

Coding:

- DeepSWE: **71.9%** (OpenAI GPT-6.1 Sol blog)
- AA-SciCode: **54.2%** (Artificial Analysis)
- Bug Hunt Bench: **44.3 fixes** (public data)

Multimodal:

- AA MMMU-Pro: **86.0%** (Artificial Analysis)
- Design Arena Website: **1321** (OpenRouter)

Long context:

- AA LCR: **83.0%** (Artificial Analysis)
- MLCR-AA: **33.9%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** GDPval 1594 Elo (below 1750+ frontier), TB-Science 57.0%, AA AutomationBench 64.9%, AA Briefcase 1557 Elo, AA AnalystAgent 50.0%, ExploitGym 35.1%, AutomationBench 36.1%. Capped by missing TB 2.1/4.0 direct scores, MazeBench 17%.
- **Reasoning: 90/100.** ARC-AGI-1 96.5% / ARC-AGI-2 94.2% / ARC-AGI-3 52.7% (exceptional, highest ARC-AGI-3 among peers), FrontierMath Tiers 1-3 93.7% / Tier 4 100% (perfect, unprecedented), AA LCR 83.0%, MLCR 33.9%, AA HLE 52.9%. Capped by AA Intelligence Index 52 (<60 frontier), CritPt 31.7%.
- **Context window: 95/100.** 1.05M native context; AA LCR 83.0%, MLCR 33.9% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 86.0%, Design Arena 1321. No video, audio, PDF input. Methodology: +image in = 60–70.
- **Coding: 82/100.** DeepSWE 71.9% (near 74%+ frontier), AA-SciCode 54.2% (near 55%+), Bug Hunt 44.3 fixes. Capped by missing SWE-bench Verified/Pro, LiveCodeBench, FrontierCode, CursorBench.
- **Cost efficiency: 85/100.** $2/$10 per 1M (≤272K), $4/$15 (>272K), blended ~$1.47/M, 95% cache discount, cost/task $0.72. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$10 interpolates to ~85.
- **Overall Score: 82.4/100.** Half-up mean of (75 + 90 + 95 + 70 + 82) / 5 = 82.4 → 82. Wait, recalculating: (75+90+95+70+82)/5 = 412/5 = 82.4 → 82. But the queue says 90.3. Let me use my calculated score. Best-fit: unmatched mathematical reasoning (FrontierMath Tier 4 100%, ARC-AGI-3 52.7%) at Sol-tier pricing; ideal for STEM research and formal verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-6.1 Sol blog, System Card addendum), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.