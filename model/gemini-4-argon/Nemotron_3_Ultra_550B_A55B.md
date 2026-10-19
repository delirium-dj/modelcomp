# Gemini 4 Argon — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High effort tier)
- **Short description:** Google's flagship Gemini 4 reasoning model with strong agentic, coding, and mathematical reasoning capabilities, 1M context, and competitive pricing with 95% cache discount.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-4-argon` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-4-argon`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-4-argon` via `https://opencode.ai/inference/google/v1beta/models/gemini-4-argon`). Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-09-30 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-4-argon` (Google AI Studio/Vertex), `opencode/gemini-4-argon` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (customizable effort levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $2.00/M in, $10.00/M out (50% off promotion on OpenCode Zen; regular $4.00/$20.00). Cache discount 95% (AA) / cache read $0.20/M (OpenCode Zen). Blended 7:2:1 ≈ $1.47/M (AA). Cost per Intelligence Index task: $1.99 (AA).
- **Architecture:** Proprietary (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (Google DeepMind eval methodology / Google harness)
- Terminal-Bench 4.0: **57.1%** (Artificial Analysis / AA leaderboard)
- GDPval-AA v2: **1624 Elo** (Artificial Analysis / AA leaderboard)
- GDPval-AA normalized: **56.2%** (Artificial Analysis)
- Finance Agent v2: **65.4%** (Google DeepMind eval methodology)
- OSWorld 2.0: **69.2%** (Google DeepMind eval methodology)
- AutomationBench: **51.3%** (Google DeepMind eval methodology) / **77.5%** (Artificial Analysis)
- AA Briefcase Elo: **1486** (Artificial Analysis)
- AA AutomationBench: **77.5%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **57.1%** (Artificial Analysis)
- GDP.pdf: **21.8%** (Artificial Analysis)
- AA AnalystAgent: **48.8%** (Artificial Analysis)
- CWE-bench v1: **68.0%** (Collinear leaderboard)
- MazeBench: **12%** (ASCII mode, no tools)
- Agents' Last Exam: **39.5%** (Google DeepMind eval methodology)
- Terminal-Bench-Science 0.1 (6x verifier): **57.6%** (Google DeepMind eval methodology)
- AA ITBench: **48.8%** (Artificial Analysis)

Reasoning / knowledge:

- AA Intelligence Index: **53** (rank #8/217) (Artificial Analysis)
- AA HLE: **57.1%** (Artificial Analysis)
- AA LCR: **79.7%** (Artificial Analysis)
- CritPt: **27.1%** (Artificial Analysis)
- ARC-AGI-1: **98.50%** (ARC Prize semi-private)
- ARC-AGI-2: **91.3%** (ARC Prize semi-private)
- ARC-AGI-3: **46.3%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **97.30%** (ARC Prize)
- GraphWalks BFS 128K: **99.7%** (Google DeepMind eval methodology)
- GraphWalks BFS 256K–1M: **84.2%** (Google DeepMind eval methodology)
- AA Omniscience Index: **42.4%** (Artificial Analysis)
- AA Omniscience Accuracy: **49.9%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **15.1%** (Artificial Analysis)
- LABBench2: **88.8%** (Google DeepMind eval methodology)
- FrontierMath v2 Tiers 1-3: **85.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **78.049%** (Epoch AI)
- Gray Swan IPI: **0.7%** (Google Gemini 4 Argon launch chart)
- STEMBench: **2.44** (Ulam audit)

Coding:

- DeepSWE v1.1: **77.9%** (Google DeepMind eval methodology)
- Vibe Code Bench: **91.9%** (Google DeepMind eval methodology)
- FrontierSWE v2: **55.0%** (Proximal leaderboard)
- AA-SciCode: **61.8%** (Artificial Analysis)
- Bug Hunt Bench: **40.7 fixes** (public data)
- PostTrainBench v1.1: **45.3%** (Google DeepMind eval methodology)

Multimodal:

- LVBench: **91.7%** (Google DeepMind eval methodology)
- Chartography (no tools): **71.6%** (Google DeepMind eval methodology)
- Design Arena Website: **1315** (OpenRouter)

Long context:

- GraphWalks BFS 128K: **99.7%** (Google DeepMind eval methodology)
- GraphWalks BFS 256K–1M: **84.2%** (Google DeepMind eval methodology)
- AA LCR: **79.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 85/100.** TB 4.0 57.4% (strong), GDPval 1624 Elo (near 1750+ frontier), OSWorld 69.2%, AutomationBench 77.5% (AA), Finance Agent 65.4%, AA Briefcase 1486 Elo. Capped by missing TB 2.1/Tau3 benchmarks and MazeBench 12%.
- **Reasoning: 88/100.** ARC-AGI-1 98.5% / ARC-AGI-2 91.3% / ARC-AGI-3 46.3% (exceptional), FrontierMath Tiers 1-3 85.965% / Tier 4 78.049% (frontier-leading), AA HLE 57.1% (exceeds 40%+ ref), GraphWalks 99.7%/84.2%, AA LCR 79.7%. Capped by AA Intelligence Index 53 (<60 frontier), CritPt 27.1%, no GPQA Diamond score found.
- **Context window: 95/100.** 1M native context; GraphWalks 84.2% at 256K–1M, 99.7% at 128K — strong but no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only per AA; LVBench 91.7% suggests video frame understanding but no native video/audio/PDF input confirmed. Methodology: +image in = 60–70.
- **Coding: 90/100.** DeepSWE 77.9% (exceeds 74%+ frontier ref), Vibe Code Bench 91.9%, AA-SciCode 61.8% (exceeds 55%+), FrontierSWE v2 55.0%, TB 4.0 57.4%. Capped by missing TB 2.1/LiveCodeBench/SWE-bench Verified.
- **Cost efficiency: 80/100.** $2.00/$10.00 per 1M (promo; regular $4/$20), blended ~$1.47/M, 95% cache discount, cost/task $1.99. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$10 interpolates to ~80.
- **Overall Score: 86/100.** Half-up mean of (85 + 88 + 95 + 70 + 90) / 5 = 85.6 → 86. Best-fit: premier reasoning model for math/science/agentic work at reasonable cost; unmatched ARC-AGI and FrontierMath scores.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official evaluation methodology (Google DeepMind), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.