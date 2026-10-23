# Solar Pro 4 — findings by DeepSeek 4.1 Flash

- Source: Upstage/Solar Pro 4 (`upstage/solar-pro4`)
- Date: 2026-10-16 (UTC) — third pass (previous Signatures 2026-10-05 / 2026-09-18); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`solar-pro-4`, 11 rows) assigns **no overall score** (unranked); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Third-pass refresh — 2026-10-16** (sources: BenchLM, Artificial Analysis, Upstage launch post, OpenRouter, ModelCap, RankLLMs).
> BenchLM now carries **22 rows** for Solar Pro 4 (still unranked, no overall score) and surfaces vendor rows the earlier passes had marked missing: **SWE-bench Verified 70.6%** and **LiveCodeBench 87.8%** (Upstage), **MCP Atlas 61.4%**, **APEX-Agents 18.7%**, **BrowseComp 49.2%**, **MMLU-Pro 86.3%**, **KMMLU-Pro 79.2%**, **AIME 2026 95.3%**, and a normalized **GDPval-AA 30.4%**. These corroborate the existing rows (Terminal-Bench 2.1 57%, Tau³-Banking 23%, GPQA-D 89.0–89.1%, AA Index 28.1, AA-LCR 71.0%, SciCode 44.6%, CritPt 5.4%, AA-Omniscience −0.8/accuracy 18.9%/hallucination 24.4%).
> **Conflicts surfaced (larger than in the earlier passes):** (1) **SWE-bench Verified 70.6% (Upstage)** vs **22.1% (independent RankLLMs proxy)** — a ~48-pt gap. (2) **BrowseComp 49.2% (Upstage)** vs **13.8% (RankLLMs)**. (3) **LiveCodeBench 87.8% (Upstage)** is implausibly high beside GLM-5.3's 80.5% and has no independent reproduction. (4) Context window 512K (BenchLM/Upstage/OpenRouter) vs 384K (Artificial Analysis) — unchanged disagreement. Independent evidence (RankLLMs composite 36.0, LMArena Agent last of 46) still paints a far weaker picture than the vendor sheet.
> Sources: https://benchlm.ai/models/solar-pro-4 · https://artificialanalysis.ai/models/solar-pro4 · https://www.upstage.ai/blog/en/solar-pro-4 · https://openrouter.ai/upstage/solar-pro4

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary flagship reasoning model, replacing Solar Pro 3: an agentic/document-work LLM tuned to finish multi-step jobs (read the documents, run the tools, produce the deliverable) and to say "cannot verify" instead of guessing. Its biggest gains over Pro 3 are agentic and long-context work, not raw knowledge. Upstage split the lineup into Pro/Mini on 2026-10-01 with the Solar Mini 4 launch.
- **Provider / access:** OpenAI-compatible Upstage API (`solar-pro4`), Upstage Console, SolarChat, OpenRouter, Hermes Agent, Upstage Studio no-code document agents, plus dedicated/on-premises deployment. **No OpenCode Zen Free ID; no open weights** (API-only, proprietary). Operated under SOC 2 and ISO 27001.
- **Release / knowledge:** **2026-08-10/11** (first seen in catalogues 2026-08-10; Upstage launch post 2026-08-11), replacing Solar Pro 3 (April 2026). Knowledge cutoff not published.
- **IDs:** `upstage/solar-pro4` (OpenRouter), `solar-pro4` (first-party API model name). No Zen Free ID observed.
- **Context window:** sources disagree — Upstage's launch post and BenchLM say **512K** with up to **128K output**; OpenRouter and ModelCap publish **524,288 (524K)** with **131,072 (131K) max completion**; Artificial Analysis states **384K** with **256K max output**. Treat ~512K as the working figure and 384K as the conservative floor.
- **Modalities:** **Text in / text out only** (English, Korean and Japanese for both input and output). Reasoning is on by default with a reasoning-effort dial and the reasoning trace is returned; tool calling with `tools`/`tool_choice`; structured outputs via JSON-schema `response_format`.
- **Pricing (as of 2026-10-16, unchanged):** first-party Upstage **$0.30 / 1M in, $1.20 / 1M out, $0.06 cache hit** (80% cache discount) — up from Solar Pro 3's $0.15/$0.60/$0.02. OpenRouter lists the same model at **$0.09 in / $0.36 out / $0.018 cache read** under a launch promotion. Paid only.
- **Architecture:** proprietary (no weights released); trained/validated on Upstage's OfficeVerse pipeline across 11 industry domains and 12 task types, with Ko-GDPval for Korean office work. Solar Pro 3 was a 102B-A12B MoE; Upstage does not publish Solar Pro 4's parameter count.

### Raw benchmarks found

> Upstage cites Artificial Analysis for its headline numbers; the full AA row set is published on OpenRouter's model page and in AA's launch analysis. Vendor launch-post rows (BenchLM) and independent leaderboard rows (RankLLMs, ModelCap) diverge sharply and are listed side by side.

Agent / tool use:

- Terminal-Bench v2.1: **57%** (vendor/AA; up from Solar Pro 3's 12%) — vs **22.1%** independent (RankLLMs)
- Tau³-Banking: **23%** (AA via Upstage; up from 9%); GDPval-AA v2 Elo: **1277** (AA via Upstage) / **30.4%** normalized (AA)
- BrowseComp: **49.2%** (Upstage) vs **13.8%** (RankLLMs); MCP Atlas **61.4%** (Upstage); APEX-Agents **18.7%** (Upstage)
- OSWorld **13.8%**, LMArena Agent **−15.5% (rank #46 of 46)** per ModelCap
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (AA) / **89.0%** (Upstage) — vs **35.6%** independent (RankLLMs' GPQA proxy)
- MMLU-Pro **86.3%** (Upstage); AIME 2026 **95.3%** (Upstage); KMMLU-Pro **79.2%** (Upstage, Korean)
- HLE: **29.2%** (AA; ModelCap ranks it #118 of 611); CritPt: **5.4%**; SciCode: **44.6%** (AA)
- AA-LCR **71.0%** (Upstage, citing AA; OpenRouter's AA row 74.0%); up from Solar Pro 3's 31%
- Artificial Analysis Intelligence Index: **42** (AA launch-article scale) and **28.1** (current AA model page — the scale used elsewhere in this repo)
- AA-Omniscience Index **−0.8** / Accuracy **18.9%** / Hallucination Rate **24.4%** — the gain over Pro 3 comes from abstaining (answers only ~41% of questions, vs 92% for Pro 3)
- ModelCap Index **43.6 / 100, rank #105 of 224**; RankLLMs composite **36.0 / 100, rank #76 of 80**

Coding:

- SWE-bench Verified: **70.6%** (Upstage) vs **22.1%** independent (RankLLMs) — a large, unresolved conflict
- LiveCodeBench: **87.8%** (Upstage) — no independent reproduction; SciCode **44.6%**; AA Coding Index **52.7** (AA)
- Design Arena Elos (OpenRouter/BenchLM): Website **1178**, Code Categories 1197, Data Visualization 1195, Agents Arena Webapps 1121, UI Component 1165, Game Development 1195, 3D 1208; ModelCap Arena coding Elo **1449 (rank #144 of 397)**
- SWE-bench Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR 71%** at ~100k tokens is the headline long-context result (31% → 71% vs Pro 3), with the 512K window structural; **no MRCR / RULER / GraphWalks value was published**, so retrieval beyond the AA-LCR workload is unmeasured.
- Efficiency/latency: **43k output tokens per Intelligence Index task** (~17% fewer than Pro 3's 52k, still verbose) but **8.6 minutes per task** versus Pro 3's 6.0 minutes. OpenRouter serves it at ~26–32 tok/s with 1.85s P50 latency.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`; Overall = half-up mean of the five quality dims (Cost excluded). Conflicting sources are resolved conservatively.

- **Tool use: 68/100.** Terminal-Bench 2.1 57%, Tau³-Banking 23% and GDPval-AA Elo 1277 clear the human baseline, and the new vendor MCP Atlas 61.4% / BrowseComp 49.2% / APEX-Agents 18.7% add depth — but the frontier refs remain far off, independent RankLLMs prints TB 2.1 22.1% / OSWorld 13.8% / BrowseComp 13.8%, and LMArena Agent places it last of 46.
- **Reasoning: 76/100.** GPQA Diamond 89.1%, MMLU-Pro 86.3% and AIME 2026 95.3% are frontier-adjacent, but HLE 29.2%, CritPt 5.4% and AA-Omniscience accuracy 18.9% (59% of questions abstained) are mid-band, and RankLLMs' independent GPQA proxy is 35.6% — good, not frontier.
- **Context window: 87/100.** Vendor/OpenRouter/BenchLM publish 512K–524K (the 500K–1M tier, 85–94) while AA says 384K (the 200K–500K tier); scoring the midpoint at **87** with a documented caveat is the honest reading, and no ≥512K retrieval benchmark exists to justify more.
- **Multimodal: 15/100.** Artificial Analysis confirms text input and text output only — no image, audio, video or PDF input and no non-text output, so the text-only band (10–20) applies even though the model is document-work oriented.
- **Coding: 66/100.** The vendor SWE-bench Verified 70.6% and LiveCodeBench 87.8% would argue mid-70s, but the independent SWE-bench Verified proxy is 22.1%, SciCode is only 44.6%, AA Coding Index 52.7 and Arena coding Elo ranks #144 of 397 — landing in the mid-60s under conservative resolution, with the vendor/independent conflict unresolved.
- **Cost efficiency: 90/100.** First-party $0.30/$1.20 matches the ~90 anchor with an $0.06 cache-hit rate (80% discount), and OpenRouter's promo $0.09/$0.36 makes it temporarily 97+; scored 90 because the promotional rate is time-limited and there is no $0 tier.
- **Overall Score: 62/100.** (68 + 76 + 87 + 15 + 66) / 5 = 62.4 → **62**. Best fit: Korean/Japanese/English enterprise document and office-automation agents where abstention over hallucination matters — not a pick for top-end coding, multimodal input or latency-sensitive chat.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against BenchLM (22 rows, unranked), Artificial Analysis, the Upstage launch post, OpenRouter, ModelCap and RankLLMs, adding the vendor SWE-bench Verified/LiveCodeBench/MCP Atlas/APEX-Agents/BrowseComp/MMLU-Pro/AIME 2026/KMMLU-Pro rows and flagging the vendor-vs-independent conflicts over the 2026-10-05 and 2026-09-18 passes (Overall 61 → 62). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
