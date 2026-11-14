- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The balanced, lower-cost tier of OpenAI's GPT-5.6 generation (Sol / Terra / Luna), aimed at enterprise office work and everyday development. Near-GPT-5.5 performance at about half the cost. A distinct SKU; Sol and Luna are siblings, not variants of this model.
- **Provider / access:** OpenAI API, ChatGPT, Codex, plus third-party clouds (Amazon Bedrock, Azure AI Foundry, Databricks, GitHub Models, OpenRouter, Replicate, Snowflake, Vercel AI Gateway, etc.). OpenAI-compatible API with explicit prompt-cache breakpoints. A deprecation date of 2026-11-16 is listed by a third-party tracker.
- **Release / knowledge:** limited preview 2026-06-26, public release **2026-07-09** (US Commerce safety approval after additional testing), global availability 2026-07-10. **Knowledge cutoff 2026-02-16** per a third-party model catalogue.
- **IDs:** `gpt-5.6-terra` (canonical `openai-gpt-5-6-terra`); `gpt-5-6-terra-high` / `Pro` / `batch` are serving profiles, not separate models. No free Zen ID verified.
- **Context window:** **1,050,000 tokens** per a third-party catalogue (another lists 1.1M total ≈ 922K input + 128K max output); reasoning-effort levels default / none / xhigh. No vendor-stated figure in the retrieved Baike article — the window is reported from third-party sources only.
- **Modalities:** text, image and PDF in, text out; native web search, function calling, parallel function calling, structured outputs / native JSON schema, prompt caching. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2.00 / 1M input, $12.00 / 1M output** ($4.50 blended at 3:1); cache read $0.20 / 1M, 5-min cache write $2.50 / 1M; batch tier $1.00 / $6.00-ish. A **20% price cut** was applied on 2026-07-30; a third-party tracker notes a 100% price increase on 2026-08-18 for one variant listing. Launch sibling pricing: Terra $2.50 / $15 (a secondary source), Sol $5 / $30, Luna $0.20/1M input — reported separately, not merged.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Upgraded prompt caching with explicit breakpoints.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (enterprise automation): **23.6%**
- OSWorld 2.0: **50.2%** (third-party HorizonLux, from OpenAI's launch post)
- Terminal-Bench 2.1: **87.4%** (third-party HorizonLux, from OpenAI's launch post)
- BenchGecko agentic subscore **58.2 (#19 globally)**; BenchLeader agents & tools **59**
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (Baike), with **~$1.40 average cost per test task**; a separate BenchLeader Index of **60.4** (max-effort configuration, #76 of 600) and BenchGecko average **71.9** are different aggregators/versions — reported separately, not merged
- GPQA Diamond: **94.9%** (BenchGecko) / **92.9%** (HorizonLux launch-post figure); ARC-AGI **96.5%**, ARC-AGI-2 **83.9%**, OTIS Mock AIME 2024-25 **99.7%**, FrontierMath Tiers 1-3 **90.5%**, Tier 4 **70.7%**, WeirdML **78.3%**, SimpleBench **38.7%** (third-party aggregator)
- HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- FrontierCode 1.1 Main: **41.3%**
- DeepSWE v1.1: **69.6%**
- WebDev Code Arena Elo: **1523**
- SWE-bench Pro: **63.4%** (HorizonLux, self-reported by OpenAI)
- BenchGecko coding subscore **57.6 (#60)**
- LiveCodeBench / SciCode / Vibe Code Bench / Terminal-Bench 4.0 / FrontierSWE: no verified public score found

Long context:

- 1.05M-token third-party-reported window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** 87.4% Terminal-Bench 2.1, 50.2% OSWorld 2.0 and native web search / parallel function calling / structured outputs; capped by a low 23.6% AutomationBench and no τ-bench/GDPval figure.
- **Reasoning: 88/100.** GPQA Diamond ~93–95%, ARC-AGI 96.5%, ARC-AGI-2 83.9% and 99.7% OTIS Mock AIME; capped by a low AA Intelligence Index 42, SimpleBench 38.7% and conflicting aggregator scores.
- **Context window: 91/100.** A 1.05M-token third-party-reported window with explicit prompt caching and a 128K output; capped by no vendor-verified figure and no long-context retrieval benchmark.
- **Multimodal: 83/100.** Text, image and PDF input with native web search; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 88/100.** DeepSWE v1.1 69.6%, SWE-bench Pro 63.4%, Terminal-Bench 2.1 87.4% and WebDev Arena 1523; capped by a weaker FrontierCode 1.1 41.3% and no Terminal-Bench 4.0 figure.
- **Cost efficiency: 90/100.** $2/$12 per 1M (after a 20% cut), $0.20 cached reads, cheap batch tier, ~$1.40 per AA task and 97–110 tok/s; capped by a listed 2026-11-16 deprecation. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 86, 88, 91, 83, 88 = 87.2 → 87. Best fit: high-volume everyday coding, reasoning and enterprise automation where a large window and low cost matter more than frontier intelligence.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.6 Terra article (release timeline, 20% price cut, FrontierCode 1.1 41.3%, WebDev Arena 1523, DeepSWE 69.6%, AutomationBench 23.6%, AA index 42 at $1.40/task). Third-party trackers (BenchGecko, HorizonLux, BenchLeader, CloudPrice) supply the rate card, context window, knowledge cutoff and additional benchmark rows and are explicitly labelled third-party; their conflicting index figures (42 / 60.4 / 71.9) are kept separate, never averaged. `Pro`, `batch` and `high` are treated as serving profiles, not separate models. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.6 Terra — 百度百科 (release, price cut, official benchmark table)](https://baike.baidu.com/item/GPT-5.6%20Terra/68076486)
  - [GPT-5.6 Terra — HorizonLux (launch-post benchmarks, 1.05M context, pricing)](https://horizonlux.com/tools/ai-models/gpt-5-6-terra)
