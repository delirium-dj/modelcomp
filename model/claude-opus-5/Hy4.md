- Source: Anthropic/Claude Opus 5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-tier flagship released 2026-07-24, positioned as near-Fable-5 quality at roughly half the cost for everyday office and programming work, but weaker than Fable 5 on high-risk cyber vulnerability discovery. A distinct model; Opus 5.5 (Sept) is its successor.
- **Provider / access:** All Anthropic platforms at launch (Claude API, claude.ai, Claude Code); also listed in Google Vertex AI's model library and, from 2026-10, selectable as the underlying model inside Google's Gemini Business enterprise agent. Leaked pre-release codename **Honeycomb EAP** (Cursor model selector, 2026-07-09).
- **Release / knowledge:** 2026-07-24; knowledge cutoff: no verified public score found.
- **IDs:** `claude-opus-5` family ID as cited; leaked codename Honeycomb EAP. No free Zen ID verified.
- **Context window:** 1,000,000 tokens for the Claude 5 series; a Karpathy benchmark run used ~1M tokens at ~$10 cost. No Opus 5-specific input/output split verified — no verified public score found for the exact split.
- **Modalities:** text, image and document/PDF in, text out; OmniDocBench / chart / web-screenshot generation and 3D interactive scene code; extended reasoning with a `max` effort tier; native tool use and Claude Code integration (Skills, CLAUDE.md, `claude doctor`). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** launch pricing stated as **identical to Claude Opus 4.8** and roughly half of Fable 5's $10/$50 per 1M (i.e. approximately the $5/$25 class, derived rather than directly published); no exact Opus 5 rate card was verifiable this pass. A ~1M-token Karpathy 3D-scene benchmark run cost ~$10.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Notable for Anthropic's shift from prompt engineering to "context engineering" — 80%+ of Claude Code's system prompt removed with no measurable coding-eval loss.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **75.4%** (Gemini 3.8 Flash 59.0%)
- Terminal-Bench 2.1: **89.1%** (Gemini 3.8 Flash 89.4%)
- Terminal-Bench 4.0: **51.8%** (Gemini 3.8 Flash 19.1%)
- GDPval-AA v2: **1824 Elo** (Fable 5.1 later reached 1853)
- SpireBench (Slay the Spire A20 long-term strategy): average **1.3 stages** cleared, ranked **top 4**
- FrontierFinance: Step 5 Preview scored second only to Claude Opus 5 (Opus 5's own number not published)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis general-intelligence test: **63 points** (reported in the Muse Spark 1.3 comparison: Spark 1.3 62, GPT-6 Astra max 61, Fable 5.1 66)
- HLE-Verified: **54.4%** (Gemini 3.8 Flash 54.9%, GPT-5.6 Sol 54.5%)
- AA nine-benchmark composite (2026-08-13): Opus 5 and Fable 5 Max both scored above Grok 4.6 and GPT-5.6 Sol (directional, no exact number)
- Automated post-training task: raised Qwen3-30B-A3B AIME24 accuracy to **60%** (tied with Step 5 Preview)
- PG-LLM protein-mutation ranking and Realtime-Bench: included in the evaluation, no Opus 5 numeric score published
- GPQA Diamond / HLE (unverified variant) / LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **74.0%** (Gemini 3.8 Flash 73.7%)
- Terminal-Bench 2.1 89.1% / Terminal-Bench 4.0 51.8% as above
- GPU-kernel optimisation peak: **493 TFLOPS** (Step 5 Preview 508 TFLOPS)
- Karpathy 3D-scene test: ~**5,500 lines** of code in ~**2 hours** from LOTR text at ~1M tokens / ~$10
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- OmniDocBench 1.5: **90.56**; ZEROBench (Sub): **39.52**; Vision2Web: **80.20** (all Opus 5 `max`, measured in Ant Ling's Ling-3.2-flash comparison; Ling-3.2-flash scored 92.21 / 43.71 / 85.86)
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong OSWorld 2.0 (75.4%), Terminal-Bench 2.1 (89.1%) and GDPval-AA (1824 Elo); capped by only 51.8% on the harder Terminal-Bench 4.0 and by no scored τ-bench/agent-harness figure.
- **Reasoning: 91/100.** AA general-intelligence 63 and HLE-Verified 54.4% were frontier for the July 2026 window; capped by no GPQA/ARC figures and by being overtaken by Fable 5.1, Opus 5.5 and GPT-6 Astra within two months.
- **Context window: 90/100.** Claude 5-class 1M window with the industry's most influential context-engineering practice; capped by no verified exact split and no published long-context retrieval score.
- **Multimodal: 86/100.** Excellent document understanding (OmniDocBench 90.56), web-screenshot/Vision2Web 80.20 and 3D scene generation; capped by text-only output, no verified audio/video input, and ZEROBench (Sub) 39.52.
- **Coding: 91/100.** DeepSWE v1.1 74.0% (near-best at launch), 89.1% Terminal-Bench 2.1 and 493 TFLOPS kernel work; capped by 51.8% Terminal-Bench 4.0 and no SWE-bench Verified figure.
- **Cost efficiency: 74/100.** Roughly half the Fable 5 price at near-flagship quality, with token-efficient context engineering; capped by higher token consumption than Fable 5 and no verified rate card. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 91, 91, 90, 86, 91 = 89.8 → 90. Best fit: general-purpose office, coding and document workflows at half the flagship price; now superseded by Opus 5.5 and Sonnet 5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 5 article, cross-checked against the Baidu Baike Claude 5 series, Fable, Gemini 3.8 Flash and Muse Spark 1.3 articles that publish Opus 5 comparison rows. Figures measured under other models' comparisons are labelled with the harness and comparand; derived pricing is explicitly labelled as derived, not a vendor rate card. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Opus 5 — 百度百科 (release, pricing, OmniDocBench, ZEROBench, Vision2Web, SpireBench)](https://baike.baidu.com/item/Claude%20Opus%205/68354135)
  - [Claude 5系列模型 — 百度百科 (GDPval-AA 1824, series benchmarks)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
  - [Gemini 3.8 Flash — 百度百科 (official Opus 5 comparison rows)](https://baike.baidu.com/item/Gemini%203.8%20Flash/68788174)
  - [Muse Spark 1.3 — 百度百科 (AA general-intelligence 63 for Opus 5)](https://baike.baidu.com/item/Muse%20Spark%201.3/68841681)
