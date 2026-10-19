# Claude Haiku 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (Max effort tier)
- **Short description:** Anthropic's fast, cost-efficient Haiku 5.5 reasoning model with 232 tok/s output, 1M context, and ultra-low $0.10/$0.50 pricing, scoring 43 on AA Intelligence Index.
- **Provider / access:** Anthropic API (`claude-haiku-5-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-haiku-5-5` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-haiku-5-5` (Anthropic API), `opencode/claude-haiku-5-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤100K tokens: $0.10/M in, $0.01/M cache read, $0.50/M out. >100K tokens: $0.50/M in, $0.05/M cache read, $2.50/M out (Anthropic API & OpenCode Zen). 90% cache discount (AA). Blended 7:2:1 ≈ $0.08/M (AA). Cost per Intelligence Index task: $0.21 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **39.2%** (Anthropic Haiku 5.5 blog) / **32.8%** (Artificial Analysis)
- GDPval-AA v2: **1620 Elo** (Anthropic Haiku 5.5 blog) / **55.9%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1578** (Anthropic Haiku 5.5 blog)
- HLE with tools: **57.4%** (Anthropic Haiku 5.5 blog)
- AA AutomationBench: **35.4%** (Artificial Analysis)
- AA Harvey LAB v1.0: **89.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **32.8%** (Artificial Analysis)
- GDP.pdf: **20.8%** (Artificial Analysis)
- AA AnalystAgent: **53.8%** (Artificial Analysis)
- MazeBench: **1%** (ASCII mode, tools)
- Hermes Index: **37.0%** / Hermes Bench: **71.0%** (Nous Research)

Reasoning / knowledge:

- HLE without tools: **45.9%** (Anthropic Haiku 5.5 blog)
- AA Intelligence Index: **43** (rank #3/173 in price tier) (Artificial Analysis)
- AA HLE: **44.4%** (Artificial Analysis)
- AA LCR: **82.7%** (Artificial Analysis)
- CritPt: **18.9%** (Artificial Analysis)
- MLCR-AA: **63.3%** (Artificial Analysis)
- ARC-AGI-1: **89.00%** (ARC Prize semi-private)
- ARC-AGI-2: **61.3%** (ARC Prize semi-private)
- ARC-AGI-3: **0.5%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **2.82%** (ARC Prize)
- AA Omniscience Index: **10.7%** (Artificial Analysis)
- AA Omniscience Accuracy: **36.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **40.4%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **75.088%** (Epoch AI)
- FrontierMath v2 Tier 4: **46.341%** (Epoch AI)

Coding:

- FrontierCode v1.1 Main: **46.4%** (Anthropic System Card)
- AA-SciCode: **55.0%** (Artificial Analysis)
- Bug Hunt Bench: **21.5 fixes** (public data)
- FrontierSWE v2: **43.8%** (Proximal leaderboard)

Multimodal:

- Chartography (no tools): **46.4%** (Anthropic Haiku 5.5 blog)
- Design Arena Website: **1263** (OpenRouter)

Long context:

- AA LCR: **82.7%** (Artificial Analysis)
- MLCR-AA: **63.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** TB 4.0 39.2%, GDPval 1620 Elo (near 1750+ frontier), AA Briefcase 1578 Elo, HLE with tools 57.4%, AA Harvey LAB 89.9%, AA AnalystAgent 53.8%. Capped by TB 4.0 AA 32.8%, AutomationBench 35.4%, MazeBench 1%.
- **Reasoning: 68/100.** HLE 57.4% with tools / 45.9% without (exceeds 40%+ frontier), FrontierMath Tiers 1-3 75.1% / Tier 4 46.3%, AA LCR 82.7%, MLCR 63.3%, ARC-AGI-1 89% / ARC-AGI-2 61.3%. Capped by AA Intelligence Index 43 (<60 frontier), CritPt 18.9%, ARC-AGI-3 0.5%, AA Omniscience Index 10.7%.
- **Context window: 95/100.** 1M native context; AA LCR 82.7%, MLCR 63.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 60/100.** Text + image input only; Chartography 46.4%, Design Arena 1263. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 65/100.** FrontierCode 46.4%, AA-SciCode 55.0% (exceeds 55%+), FrontierSWE v2 43.8%, Bug Hunt 21.5 fixes. Capped by no SWE-bench/DeepSWE/LiveCodeBench/CursorBench/FrontierCode Extended data.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (≤100K), $0.50/$2.50 (>100K), blended ~$0.08/M, 90% cache discount, cost/task $0.21. Methodology: ~$0.10/$0.20 = 97-99; ultra-low Haiku pricing → 95.
- **Overall Score: 70.6/100.** Half-up mean of (65 + 68 + 95 + 60 + 65) / 5 = 70.6 → 71. Best-fit: fastest, cheapest Haiku-class model with 1M context and reasoning; 232 tok/s and $0.10/$0.50 are unmatched; reasoning depth (CritPt, Omniscience) limits complex tasks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic Haiku 5.5 blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.