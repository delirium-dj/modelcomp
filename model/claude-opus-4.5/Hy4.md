- Source: Anthropic/Claude Opus 4.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's 2025-11-24 Opus flagship that cut API pricing by two-thirds while topping SWE-bench Verified; introduced the `effort` parameter and Plan Mode. A distinct model; Opus 4.6/4.7/4.8 are successors.
- **Provider / access:** Anthropic app and API; AWS, Google Cloud and Microsoft Azure; Microsoft Foundry, GitHub Copilot paid plans, Copilot Studio; Claude Code, Chrome extension, Claude for Excel. A $200/month top tier.
- **Release / knowledge:** 2025-11-24; knowledge cutoff: no verified public score found.
- **IDs:** `claude-opus-4-5` family ID as cited. No free Zen ID verified.
- **Context window:** **200,000 tokens** ("endless conversation" long-dialogue support) with context compression for longer complex tasks.
- **Modalities:** text, image and code in, text/code out; plan mode with auto execution-path planning; strong prompt-injection resistance (better than GPT-5.1 and Gemini 3 Pro in internal evals). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$5 / 1M input, $25 / 1M output** — one third of the prior Opus 4.1 price ($15/$75); a third-party Tokenando page lists $15/$75 with a Sep 2025 date, a conflicting figure reported separately.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. New `effort` parameter (medium setting reduces output tokens **76%**; max setting **+4.3 points** over the previous generation).

### Raw benchmarks found

Agent / tool use:

- LiveBench (upgraded leaderboard, 2026-01): **#1**
- Vending-Bench: **+29% task-completion revenue** vs the prior generation (relative)
- τ2-bench: reported as solved/cracked (directional, no score)
- Prompt-injection resistance better than GPT-5.1 and Gemini 3 Pro in internal evals (directional)
- Rakuten test: agent reached peak performance in **4 iterations** (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- LMArena Elo **1366**, MMLU **~87%**, GPQA Diamond **~76%**, MATH **~88%** (third-party Tokenando hand-curated table, labelled directional) — conflicting with the Baike "SWE-Bench Verified >80%" narrative; kept separate
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found in the primary sources

Coding:

- SWE-bench Verified: **80.9%** at launch (a separate Baike/Newton source says ">80%"; Best of AI gives the exact 80.9%) — ahead of Gemini 3 Pro's 76.2% and GPT-5.1-Codex-Max's 77.9% on the same harness (comparison rows, labelled)
- SWE-bench Multilingual: **#1 in 7 of 8 languages** (directional)
- HumanEval **~93%** (third-party Tokenando, labelled directional)
- One-shot generation of **3,500 lines** of code recreating Minecraft; native MoonBit language support
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 200K window with context compression; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** #1 on the upgraded LiveBench, +29% Vending-Bench revenue, 4-iteration Rakuten agent convergence and strong prompt-injection resistance; capped by no scored τ-bench/OSWorld/GDPval figure.
- **Reasoning: 86/100.** LiveBench leadership, ~87% MMLU and ~76% GPQA Diamond (third-party) with configurable effort; capped by those being third-party directional values and no HLE/ARC figure.
- **Context window: 83/100.** 200K with context compression for long complex tasks; capped by being 1/5 of the 1M class and no retrieval benchmark.
- **Multimodal: 81/100.** Text/image/code cross-modal integration, one-shot web-layout design (four Hero Sections) and Claude for Excel/Chrome; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark.
- **Coding: 90/100.** 80.9% SWE-bench Verified (launch-leading), 7-of-8 languages topped on Multilingual, and 3,500-line one-shot generation; capped by no Terminal-Bench / LiveCodeBench figure.
- **Cost efficiency: 82/100.** A two-thirds price cut to $5/$25 with a medium-effort 76% output-token reduction; capped by a $200/month top tier and a conflicting third-party rate card. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 88, 86, 83, 81, 90 = 85.6 → 86. Best fit: agentic software engineering and professional knowledge work at the 2025-11 frontier; superseded by Opus 4.6→5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 4.5 page retrieved via public web search excerpt (200K context, $5/$25 pricing, effort parameter, LiveBench #1, prompt-injection resistance, Vending-Bench +29%), plus a Taiwanese Chinese-encyclopedia mirror and Sogou Baike excerpt (SWE-Bench Verified >80%, 7-of-8 languages, 3,500-line Minecraft) and third-party aggregators (Best of AI for the exact 80.9%, Tokenando for the directional MMLU/GPQA/MATH/LMArena table and conflicting $15/$75 rate) — all labelled by provenance. Comparison rows for Gemini 3 Pro and GPT-5.1-Codex-Max are labelled by harness and never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude Opus 4.5 — 百度百科 (retrieved via search excerpt; pricing, effort, LiveBench, context)](https://baike.baidu.com/item/Claude%20Opus%204.5/67024159)
  - [Claude Opus 4.5 — Best of AI (80.9% SWE-bench Verified, price cut)](http://bestofai.io/models/claude-opus-4-5)
  - [Claude Opus 4.5 — Newton 中文百科 (SWE-Bench, multilingual, MoonBit)](https://www.newton.com.tw/wiki/Claude%20Opus%204.5/67024159)
