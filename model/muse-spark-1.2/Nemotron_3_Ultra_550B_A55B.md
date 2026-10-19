# Muse Spark 1.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Xhigh effort tier)
- **Short description:** Meta's 3rd Muse Spark release with improved agentic knowledge work (GDPval 1631 Elo, #5), fast 315 tok/s output, and competitive $1.25/$4.25 pricing; succeeded by 1.3.
- **Provider / access:** Meta Model API (`muse-spark-1.2`), OpenCode Zen (`opencode/muse-spark-1.2` via `https://opencode.ai/inference/openai/v1/responses`), OpenRouter. OpenAI-compatible on OpenCode.
- **Release / knowledge:** 2026-08-05 release; knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.2` (Meta Model API), `opencode/muse-spark-1.2` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.25/M in, $0.15/M cache read, $4.25/M out (Meta Model API & OpenCode Zen). 88% cache discount (AA). Blended 7:2:1 ≈ $0.78/M (AA). Cost per Intelligence Index task: $0.97 (AA).
- **Architecture:** Proprietary (Meta); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta model page) / **69.7%** (Vals AI)
- GDPval-AA v2: **1631 Elo** (Meta model page) / **48.6%** normalized (Artificial Analysis)
- AA Agentic Index: **44.0%** (Artificial Analysis)
- Tau3 Banking: **27%** (Artificial Analysis article)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Artificial Analysis)
- HLE: **45.5%** (Artificial Analysis) / **44%** (AA article)
- AA Intelligence Index: **40** (rank #59/217) (Artificial Analysis) / **54** (AA article for xhigh)
- AA LCR: **79.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- AA Omniscience Index: **27.2%** (Artificial Analysis)
- AA Omniscience Accuracy: **45.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **33.3%** (Artificial Analysis)
- MMLU-Pro (Vals): **88.3%** (Vals AI)
- SciCode: **56%** (AA article) / **57.4%** (AA)
- AA article notes: abstention rate increased (attempt rate 67%), hallucination rate fell 10 points (38% to 28%)

Coding:

- Terminal-Bench 2.1: **82.9%** (Meta model page)
- DeepSWE: **59.3%** (Meta model page)
- AA-SciCode: **57.4%** (Artificial Analysis)
- VulcanBench v3: **87.0%** (VulcanBench report)
- FrontierSWE v2: **12.0%** (Proximal leaderboard)
- SWE-bench (Vals): **86.6%** (Vals AI leaderboard)
- AA Coding Index: **72.2%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1313** (OpenRouter)

Long context:

- AA LCR: **79.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 82.9% (near 88%+ frontier), GDPval 1631 Elo (#5, near 1750+ frontier), Tau3 27% (below 50% frontier), AA Agentic Index 44.0%. Capped by MazeBench 0%, no TB 4.0/OSWorld/MCP Atlas/Toolathlon data.
- **Reasoning: 72/100.** GPQA Diamond 90.4% (meets 90%+ frontier), HLE 45.5% (exceeds 40%+ frontier), AA LCR 79.0%, MMLU-Pro 88.3%. Capped by AA Intelligence Index 40 (<60 frontier), CritPt 17.7%, Omniscience Index 27.2%, SciCode 56% (below 55%+ ref but close).
- **Context window: 95/100.** 1M native context; AA LCR 79.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 90/100.** Native text/image/audio/video input; AA article confirms speech+video. Methodology: +audio/video in = 90-100.
- **Coding: 78/100.** TB 2.1 82.9% (exceeds 85%+ ref? close), SWE-bench 86.6% (Vals), VulcanBench 87.0%, AA Coding Index 72.2% (exceeds 70%+), AA-SciCode 57.4% (exceeds 55%+). Capped by DeepSWE 59.3% (below 74%+ frontier), FrontierSWE v2 12.0%.
- **Cost efficiency: 95/100.** $1.25/$4.25 per 1M, blended ~$0.78/M, 88% cache discount, cost/task $0.97. Methodology: ~$0.10/$0.20 = 97-99; very competitive → 95.
- **Overall Score: 83/100.** Half-up mean of (78 + 72 + 95 + 90 + 78) / 5 = 82.6 → 83. Best-fit: fast, cost-efficient agentic model with native audio/video; GDPval #5 and 315 tok/s are standout; succeeded by 1.3 with better agentic scores.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Meta Muse Spark 1.2 page, Artificial Analysis article), independent benchmark aggregators (Artificial Analysis, BenchLM, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.