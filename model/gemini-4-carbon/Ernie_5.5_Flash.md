# Gemini 4 Carbon — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 4 Carbon (`gemini-4-carbon`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's most capable Gemini 4 reasoning model (released 2026-11-10, one day before this report), tuned for complex software engineering, deep math/science, high factual accuracy and long-horizon autonomous agents. Sits above Gemini 4 Argon in Google's line-up.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-4-carbon`), Vertex AI (`google-vertex/gemini-4-carbon`), OpenRouter, Vercel AI Gateway, LLM Gateway, Prime, Merge Gateway.
- **Release / knowledge:** 2026-11-10; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `gemini-4-carbon`, `google-vertex/gemini-4-carbon`, `google/gemini-4-carbon`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536 on Google/Vertex routes.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking/reasoning and tool calls supported.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.10 (llmgateway lists $4/$20 — treat as a gateway markup, not the Google rate).
- **Architecture:** proprietary (sparse MoE, undisclosed).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **53.9%** (best verified row in the BenchLM comparison set)
- OSWorld 2.1 offline subset (82 tasks): **81.5%**
- CursorBench 4.0: **60.4%** (best verified row at publication)
- CWE-bench v1: **71.0%**; ExploitGym: **53.5%**
- DAYJOB: **19.7%**; DAYJOB Healthcare: **15.6%**
- Terminal-Bench 4.x / Toolathlon: no verified public row published for Carbon

Reasoning / knowledge:

- FrontierMath v2 Tier 4: **95.122%**; Tiers 1–3: **90.526%** (Google-reported, tier-filtered)
- ARC-AGI-1 (semi-private): **97.50%**; ARC-AGI-2: **92.1%**; ARC-AGI-3: **63.9%** (provider-adapter harness 96.85%)
- GraphWalks BFS 256K–1M: **96.2%**
- Chess Puzzles (Epoch AI): **78.0%**; Mystery Game Puzzles: **73.0%**; Furniture Assembly: **77.5%**
- FACTS Multimodal: **60.2%**; Chart Arena **1486** Elo; Landing Page Arena **1469** Elo
- Gray Swan indirect prompt injection (15 attempts): **0.0%** attack success (best in class)
- HLE / GPQA Diamond / CritPt: no verified public score found

Coding:

- FrontierSWE v2: **61.2%**; FrontierCode 2.0: **40.0%**
- SEC-Bench Pro: **88.2%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public row published for Carbon
- LiveCodeBench / SciCode: no verified public score found

Long context:

- GraphWalks BFS 256K–1M: **96.2%** — the strongest verified long-range graph traversal in this comparison
- MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** AutomationBench 53.9% leads the verified field and OSWorld 2.1 offline 81.5% is strong; capped by DAYJOB 19.7% and the absence of a Terminal-Bench 4.x row.
- **Reasoning: 96/100.** FrontierMath v2 90.5% (T1–3) and 95.1% (Tier 4) plus ARC-AGI-2 92.1% and GraphWalks 96.2% are the best verified reasoning cluster in the dataset; only the missing HLE/GPQA rows keep it off 100.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 95/100.** Full text/image/video/audio/PDF input; FACTS Multimodal 60.2% and Chart/Landing Page Arena Elo confirm grounded visual work, though no LVBench-style long-video row is published.
- **Coding: 88/100.** FrontierSWE v2 61.2% and SEC-Bench Pro 88.2% are strong, but FrontierCode 2.0 (40.0%) and the missing SWE-bench Verified/Pro rows cap it below the coding specialists.
- **Cost efficiency: 82/100.** $2/$10 per 1M with $0.10 cache reads — frontier quality at roughly one fifth of GPT-6 Astra's price.
- **Overall Score: 93.8/100.** Best fit for math/AI-research reasoning, cyber-defence analysis and long-context graph traversal where verified numbers matter more than terminal-style agentic tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, Artificial Analysis, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Carbon — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-4-carbon/)
  - [Gemini 4 Carbon benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon intelligence & price analysis — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon_v2.md`, using the same headings.