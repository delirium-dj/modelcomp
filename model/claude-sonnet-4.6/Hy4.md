- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's 2026-02-18 mid-tier model — "Opus-level intelligence at Sonnet pricing" — with strong multi-step computer use (web forms, cross-tab coordination) and improved prompt-injection resistance. A distinct model; Sonnet 5 is its successor.
- **Provider / access:** Claude platform / Claude API and major clouds; from 2026-03-13 the full 1M-token window was offered at standard rates with no long-context surcharge.
- **Release / knowledge:** 2026-02-18; knowledge cutoff: no verified public score found.
- **IDs:** `claude-sonnet-4-6` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** at standard pricing with full rate limits at all context lengths and **no long-context surcharge** (effective 2026-03-13) — a distinctive pricing feature.
- **Modalities:** text and image in, text out; computer use (forms, multi-tab coordination), multi-step programming, coding benchmarks; improved resistance to prompt injection. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** uniform rate for the full context window, no long-context surcharge; described as higher than most contemporary mainstream models. No exact per-1M figures in the retrieved page — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- OpenRouter weekly call volume: **#1** for 2026-04-13→19 at **1.38 trillion tokens**, **+19%** week-over-week (was #3 the prior week)
- OpenClaw platform call-volume ranking (2026-03-05): **#5**, behind Step 3.5 Flash, MiniMax M2.5, Trinity Large Preview (free) and Kimi K2.5
- Multi-step computer operation: fills web forms and coordinates information across browser tabs; still behind the most skilled humans (vendor statement, no score)
- Improved resistance to prompt-injection attacks (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Described as performing well / ranking near the top on multiple programming benchmarks (directional; no exact scores in the retrieved page) — no verified public score found
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window at standard rates with no long-context surcharge; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** #1 global OpenRouter weekly call volume (1.38T tokens, +19%) — strong real-world adoption evidence — plus genuine multi-step computer use and better prompt-injection resistance; capped by no scored agent harness and computer use still trailing skilled humans.
- **Reasoning: 85/100.** "Opus-level intelligence at Sonnet pricing" positioning with improved safety behaviour; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 93/100.** A verified 1M-token window at **standard rates with no long-context surcharge** and full rate limits at every length — a genuinely differentiated long-context value proposition; capped by no retrieval benchmark.
- **Multimodal: 80/100.** Image input with visual computer use (forms/tabs); capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 85/100.** Top-tier programming benchmark standing and heavy developer adoption; capped by zero published named coding scores in the retrieved primary source.
- **Cost efficiency: 84/100.** Sonnet-tier pricing with no 1M-context surcharge; capped by being priced above most contemporaries and no verifiable rate card. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 87, 85, 93, 80, 85 = 86.0 → 86. Best fit: very high-volume developer coding and computer-use workflows where a surcharge-free 1M window matters.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Sonnet 4.6 article (release, 1M context at standard rates with no long-context surcharge, computer use, prompt-injection resistance, OpenRouter #1 call-volume week, OpenClaw #5 ranking, pricing notes). Directional "top programming benchmarks" and "behind skilled humans" statements are labelled as vendor/qualitative claims and are NOT assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Sonnet 4.6 — 百度百科 (release, 1M context pricing, computer use, call-volume rankings)](https://baike.baidu.com/item/Claude%20Sonnet%204.6/67403641)
