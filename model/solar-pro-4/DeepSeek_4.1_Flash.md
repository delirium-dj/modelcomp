# Solar Pro 4 — findings by DeepSeek 4.1 Flash

- Source: Upstage/Solar Pro 4 (`upstage/solar-pro4`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary flagship reasoning model, replacing Solar Pro 3: an agentic/document-work LLM tuned to finish multi-step jobs (read the documents, run the tools, produce the deliverable) and to say "cannot verify" instead of guessing. Its biggest gains over Pro 3 are agentic and long-context work, not raw knowledge.
- **Provider / access:** OpenAI-compatible Upstage API (`solar-pro4`), Upstage Console, SolarChat, OpenRouter, Hermes Agent, Upstage Studio no-code document agents, plus dedicated/on-premises deployment. **No OpenCode Zen Free ID; no open weights** (API-only, proprietary). Operated under SOC 2 and ISO 27001.
- **Release / knowledge:** **2026-08-10/11** (first seen in catalogues 2026-08-10; Upstage launch post 2026-08-11), replacing Solar Pro 3 (April 2026). Knowledge cutoff not published.
- **IDs:** `upstage/solar-pro4` (OpenRouter), `solar-pro4` (first-party API model name). No Zen Free ID observed.
- **Context window:** sources disagree — Upstage's launch post says **512K** with up to **128K output**; OpenRouter and ModelCap publish **524,288 (524K)** with **131,072 (131K) max completion**; Artificial Analysis' launch analysis states **384K** with **256K max output**. Treat ~512K as the working figure and 384K as the conservative floor; max output is likewise disputed.
- **Modalities:** **Text in / text out only** (English, Korean and Japanese for both input and output). Reasoning is on by default with a reasoning-effort dial (high for deep analysis, low for chat-speed responses) and the reasoning trace is returned; tool calling with `tools`/`tool_choice`; structured outputs via JSON-schema `response_format`.
- **Pricing (as of 2026-09-18):** first-party Upstage **$0.30 / 1M in, $1.20 / 1M out, $0.06 cache hit** (80% cache discount) — up from Solar Pro 3's $0.15/$0.60/$0.02. OpenRouter lists the same model at **$0.09 in / $0.36 out / $0.018 cache read** under a 70% launch promotion (Upstage announced 90% off through 2026-09-10). Paid only.
- **Architecture:** proprietary (no weights released); trained/validated on Upstage's OfficeVerse pipeline across 11 industry domains and 12 task types, with Ko-GDPval for Korean office work. Solar Pro 3 was a 102B-A12B MoE, but Upstage does not publish Solar Pro 4's parameter count.

### Raw benchmarks found

> Upstage cites Artificial Analysis for its three headline numbers; the full AA row set is published on OpenRouter's model page and in AA's launch analysis. Independent leaderboard rows (RankLLMs, ModelCap) are listed alongside because they diverge sharply.

Agent / tool use:

- Terminal-Bench v2.1: **57%** (AA via Upstage; up from Solar Pro 3's 12%) — vs **22.1%** independent (RankLLMs)
- Tau³-Banking: **23%** (AA via Upstage; up from 9%)
- GDPval-AA v2 Elo: **1277** (AA via Upstage; Solar Pro 3 scored 498, human baseline 1000; AA places it just ahead of Qwen3.7 Max 1272 and MiMo-V2.5-Pro 1266) — OpenRouter's AA table instead lists GDPval-AA as 33.6%
- OSWorld (independent, RankLLMs): **13.8%**; BrowseComp (independent, RankLLMs): **13.8%**; LMArena Agent: **−15.5% (rank #46 of 46)** per ModelCap
- MCP Atlas / Claw-Eval / APEX-Agents / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (AA, via OpenRouter) — vs **35.6%** independent (RankLLMs' GPQA proxy)
- HLE: **29.2%** (AA; ModelCap ranks it #118 of 611)
- CritPt: **5.4%**; SciCode: **44.6%** (AA)
- LCR: **AA-LCR 71%** (Upstage launch post, citing AA, ~100k-token multi-document reasoning) — OpenRouter's AA row lists **74.0%**; up from Solar Pro 3's 31%
- Artificial Analysis Intelligence Index: **42** (AA launch analysis 2026-08-12), "alongside Inkling (xhigh, 42) and just behind MiMo-V2.5-Pro (43)", a 27-point jump over Solar Pro 3's 14 — note this is the AA *article* scale, which prints different integers than the AA model pages used elsewhere in this repo
- Omniscience / honesty: AA-Omniscience **−1** (from −53), but the gain came from abstaining — Solar Pro 4 answers only **41%** of questions (vs 92% for Pro 3), accuracy stays at **19%**, and hallucination rate is **24%** (non-hallucination 75.6%), better than Pro 3's 88% but worse than MiniMax-M3's 18%
- ModelCap Index: **43.6 / 100, rank #105 of 224** (Arena coding 51.6, agents 13.5, reasoning 43.9); RankLLMs composite **36.0 / 100, rank #76 of 80**

Coding:

- SciCode: **44.6%**; AA Coding Index: **52.7** (AA via OpenRouter)
- Design Arena Elos: Code Categories **1197**, Agents Arena Webapps **1121**, Website **1188**, Data Visualization **1195**, UI Component **1165**, Game Development **1195**, 3D **1208**; Arena coding Elo **1449 (rank #144 of 397)** per ModelCap
- SWE-bench Verified (independent, RankLLMs): **22.1%**
- SWE-bench Pro / DeepSWE / LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- **AA-LCR 71%** at ~100k tokens is the headline long-context result (31% → 71% versus Pro 3), with the 512K window structural; **no MRCR / RULER / GraphWalks value was published**, so retrieval beyond the AA-LCR workload is unmeasured.
- Efficiency/latency: **43k output tokens per Intelligence Index task** (~17% fewer than Pro 3's 52k, still verbose) but **8.6 minutes per task** versus Pro 3's 6.0 minutes — the intelligence gain costs latency. OpenRouter serves it at ~26–32 tok/s with 1.85s P50 latency.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = arithmetic mean of the six. Conflicting sources are resolved conservatively.

- **Tool use: 68/100.** Terminal-Bench 2.1 57% and Tau³-Banking 23% both sit at the top of the mid band (TB2.1 45–60%, Tau3 10–25%) and GDPval-AA v2 Elo 1277 clears the human baseline of 1000 while edging Qwen3.7 Max — genuine agentic progress — but the frontier refs (TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+) are far off, independent RankLLMs prints TB 2.1 22.1% / OSWorld 13.8% / BrowseComp 13.8%, and LMArena Agent places it last of 46.
- **Reasoning: 75/100.** GPQA Diamond 89.1% is frontier-adjacent and the AA article Index of 42 sits alongside Inkling and just behind MiMo-V2.5-Pro, but HLE 29.2% and CritPt 5.4% are mid-band, AA-Omniscience accuracy is only 19% with 59% of questions abstained, and RankLLMs' independent GPQA proxy is 35.6% — good, not frontier.
- **Context window: 87/100.** Vendor/OpenRouter publish 512K–524K (the 500K–1M tier, 85–94) while AA says 384K (the 200K–500K tier, 65–84, where 384K ≈ 81); scoring the midpoint of the disagreement at **87** with a documented caveat is the honest reading, and no ≥512K retrieval benchmark exists to justify more.
- **Multimodal: 15/100.** Artificial Analysis confirms text input and text output only — no image, audio, video or PDF input and no non-text output, so the text-only band (10–20) applies even though the model is document-work oriented.
- **Coding: 62/100.** SciCode 44.6% and AA Coding Index 52.7 are below both the mid coding band (65–75) and the frontier refs (SciCode 55%+, Coding Index 70%+), Arena coding Elo 1449 ranks only #144 of 397, and the independent SWE-bench Verified row is 22.1% — this is an office/document agent with usable but not competitive code ability, with no SWE-bench Pro, DeepSWE or LiveCodeBench result to argue otherwise.
- **Cost efficiency: 90/100.** First-party $0.30/$1.20 matches the ~90 anchor (same list price as MiniMax M2.7/M3) with an $0.06 cache-hit rate (80% discount), and OpenRouter's 70%-off $0.09/$0.36 promo makes it temporarily a 97+ proposition; scored 90 because the promotional rate is time-limited and there is no $0 tier.
- **Overall Score: 61/100.** (68 + 75 + 87 + 15 + 62 + 90) / 6 = 66.2 → **66**. Best fit: Korean/Japanese/English enterprise document and office-automation agents where abstention over hallucination matters — not a pick for top-end coding, multimodal input or latency-sensitive chat.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-18
- Method: Public internet research from zero — Upstage Solar Pro 4 launch post (specs, AA-cited headline benchmarks, OfficeVerse training, languages, promo), Artificial Analysis launch analysis (Index 42, GDPval Elo, Omniscience abstention/hallucination, latency, pricing, context conflict), OpenRouter model page (full AA benchmark table, Design Arena Elos, live pricing, throughput), ModelCap (catalogue facts, Arena ranks) and RankLLMs (independent rows). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.