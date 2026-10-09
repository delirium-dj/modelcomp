# Solar Pro 4 — findings by Step 5 Preview

- Source: Upstage (`solar-pro4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (SP4) — Upstage's closed commercial flagship
- **Short description:** The Korean lab's agent-first flagship (released 2026-08-06/11) — not pitched as "bigger and stronger" but as "agents that don't silently fail": retrained and re-evaluated around long documents, terminal tasks, multi-turn tool use, and an explicit refusal-to-fabricate design (it is built to answer "not verifiable" rather than invent). It scores 42 on Artificial Analysis' Intelligence Index (3× Solar Pro 3's 14, ahead of Nemotron 3 Ultra's 38 and Gemini 3.5 Flash-Lite's 37), with its biggest generational gains exactly where the pitch is: Terminal-Bench 2.1 12→57 (+4.8×), AA-LCR 31→71%, τ³-Banking 9→23%, GDPval-AA Elo 498→1,277 (past the human baseline). 524K-token context, 131K max output, English/Korean/Japanese, text-only, parameters undisclosed.
- **Provider / access:** Upstage Console API (OpenAI-compatible, `solar-pro4`), OpenRouter, Hermes Agent, Upstage Studio; dedicated/on-prem by contract. API-only, no weights.
- **Release:** 2026-08-06 (announcement 2026-08-11/20). Training data cutoff February 2026.
- **Context window:** 524,288 tokens; max output 131,072.
- **Modalities:** Text in → text out; reasoning on by default with a configurable effort level (high/low); tool calling, structured/JSON outputs, streaming.
- **Pricing (as of 2026-10-09):** list $0.30/M input, $1.20/M output, $0.06/M cached input (Upstage); OpenRouter at $0.09/$0.36/$0.018 (70% off); the 90%-off launch promo ended 2026-09-10.
- **Speed:** ~37.7–38 tok/s; 3.14 s TTFT; ~43K output tokens per Intelligence-Index task (17% fewer than Solar Pro 3).

### Raw benchmarks found

Upstage launch post (vendor; Solar Pro 3 in parentheses):

- Terminal-Bench 2.1: **57.0** (12); τ³-Banking: **23.0%** (9%); AA-LCR: **71.0%** (31%)
- GDPval-AA v2: **~1,277 Elo** (498 — below the 1,000 human baseline); GPQA Diamond: **89.0%** (85.6)
- BrowseComp: **49.2%** (37.3); MCP-Atlas: **61.4%** (58.2); APEX-Agents: 18.7% (16.6)
- SWE-bench Verified: **70.6%** (69.2, OpenHands scaffold); MMLU-Pro: 86.3%; LiveCodeBench: 87.8%; AIME 2026: 95.3%

Third-party:

- Artificial Analysis: Intelligence Index **42** (28.2 on the current index version); Coding Index 52.7; GPQA Diamond 89.1%; HLE 29.2%; AA-LCR 74.0%; τ-Bench Banking 23.3%; GDPval-AA 30.5%; CritPt 5.4%; SciCode 44.6%; TB 2.1 57.3%; TB 4.0 0.5%; AA-Omniscience 18.9% accuracy / 75.6% non-hallucination
- LMArena (Oct 2026): text 1,386 Elo (#181 of 413); coding 1,463 (#133 of 408); agent −15.9% (#50 of 50)
- Upstage's own enterprise framing: a 300K-input + 15K-output document fact-check costs ~$0.10 vs ~$1.00 on premium frontier pricing

### Normalized scores (1–100)

- **Tool use: 64/100.** MCP-Atlas 61.4%, TB 2.1 57.3%, GDPval-AA Elo 1,277 and BrowseComp 49.2% are solid upper-mid agentic results — past the human baseline on GDPval — but τ³-Banking 23.3%, APEX-Agents 18.7% and the #50-of-50 LMArena agent score show uneven multi-turn tool reliability.
- **Reasoning: 74/100.** GPQA Diamond 89.0–89.1%, AIME 95.3%, MMLU-Pro 86.3% and LiveCodeBench 87.8% are upper-mid-band; HLE 29.2% and CritPt 5.4% keep it below the frontier tier.
- **Context window: 84/100.** 524K is the 500K–1M band (85–94), near its top on AA-LCR 71–74% — the model's marquee strength, designed to keep deep-window document recall usable — with a 131K output ceiling to match.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20); no vision/audio despite the multimodal Korean-lab peers.
- **Coding: 68/100.** SWE-bench Verified 70.6% (OpenHands), LiveCodeBench 87.8%, SciCode 44.6% and the +13.8-point TB lead over its open sibling Solar Open 2 make it a credible coding workhorse; AA Coding Index 52.7 and TB 4.0 0.5% place it mid-upper, not frontier.
- **Cost efficiency: 93/100.** $0.30/$1.20 list with $0.06 cache reads — and $0.09/$0.36 on OpenRouter — lands in the methodology's ~$0.6/$2.2 ≈ 92 tier, with the enterprise math (≈$0.10 for a 300K-token document task vs ~$1 frontier) as the real selling point.
- **Overall Score: 60/100.** Best-fit recommendation: the reliable long-document agent workhorse — 524K context with genuinely usable deep-window recall (AA-LCR 71%) and past-human-baseline GDPval at a tenth of frontier cost; text-only and mid-tier on hard reasoning.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Upstage Console docs + PRNewswire launch release, Artificial Analysis launch article and OpenRouter benchmark table, Benchgen/HokAI/ModelCap/BenchLeader trackers, aimodeling analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_5.md`, using the same headings.
