# Solar Pro 4 — findings by MiniMax M3.1 Flash

- Source: Upstage (Solar Pro 4), `solar-pro4`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's August 2026 closed agentic flagship — 512K context, GPQA 89.0%, LiveCodeBench 87.8%, SWE-bench Verified 70.6% and Terminal-Bench 2.1 57.0% for **$0.30/M in and $1.20/M out** — the folder's "$2/$6" price and "GDPval 1277" claim are both wrong, and the real GDPval-AA Elo is 1106.
- **Provider / access:** Upstage Console (`solar-pro4`, OpenAI-compatible; "changing the endpoint and the model name (`solar-pro4`) is the whole migration"), OpenRouter `upstage/solar-pro4` (same model, $0.15/$0.60 with a 50%-off badge), Microsoft Foundry-style gateways. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-08-11** (Upstage blog) vs 2026-08-10 (OpenRouter) vs **2026-08-06** (AA and models.dev) — conflicting dates, all cited. Knowledge cutoff **2026-02-28** (AA).
- **IDs:** `solar-pro4` (Upstage Console), `upstage/solar-pro4` (OpenRouter).
- **Context window:** **512,000** tokens (524,288 in models.dev and OpenRouter), max output 128,000.
- **Modalities:** text in / text out — **not multimodal** (AA: "cannot process images").
- **Pricing (as of 2026-10-20):** **$0.30/M in, $0.06/M cached, $1.20/M out** (Upstage blog, AA) — the folder's "$2/$6" is wrong. OpenRouter lists $0.15/$0.60 with a 50%-off badge; models.dev shows a $0.03/$0.12 lowest-provider figure. The 90%-off launch promo expired 2026-09-10.
- **Architecture:** proprietary, closed weights; reasons by default with a `reasoning_effort` high/low dial and a reasoning trace in the response.

### Raw benchmarks found

> Upstage's launch post against Artificial Analysis's independent measurement; the two agree closely.

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Upstage) / **89.1%** (AA) / **89.09%** (AA record) — consistent
- LiveCodeBench: **87.8%** (Upstage) · MMLU-Pro: **86.3%** · AIME 2026: **95.3%** · HLE: **29.8%** (AA) · AA-LCR: **71.0%** (Upstage) / **70.7%** (AA) · CritPt: **6.3%** (AA)
- Artificial Analysis Intelligence Index: **26.6** (record) / **27** (#29/173) · output speed **119.0 tok/s**, TTFT 1.66s · $0.71 per Intelligence-Index task
- Omniscience Index / Accuracy / Hallucination Rate: **0.3 / 19.4% / 23.8%** (AA) · SciCode: **48.0%** (AA) · Design Arena Website Elo: **1177** (OpenRouter)
- Korean: KMMLU-Pro **79.2%** · KBL **77.5%** · Ko-GDPval **87.3%** · KorMedMCQA **93.2%**; Japanese: Arena-Hard v2 **81.9%**, MMLU **89.5%**, IFEval **81.6%**

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Upstage) / **57.30%** (AA) · Terminal-Bench 4.0: **0%** (AA) · MCP-Atlas: **61.4%** · APEX-Agents: **18.7%** · τ³-Banking: **23.0%** (Upstage) / **23.3%** (AA) · BrowseComp: **49.2%**
- GDPval-AA v2.1: **Elo 1106** (AA leaderboard) / **30.3% normalised** (AA) / **38.8%** (Upstage in-house) — the folder's "GDPval 1277" is not verified; 1177 is the Design Arena Website Elo
- AutomationBench partial: **13.6%** (AA)

Coding:

- SWE-bench Verified: **70.6%** (OpenHands harness) · SWE-bench Pro: no verified public score found · DeepSWE / SciCode: SciCode **48.0%** (AA), DeepSWE none

Long context:

- No MRCR / RULER measurement published for Solar Pro 4.

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 2.1 57.0%, MCP-Atlas 61.4% and BrowseComp 49.2% are mid, but APEX-Agents 18.7%, τ³-Banking 23.0%, Terminal-Bench 4.0 at 0% and AutomationBench 13.6% keep the agentic evidence modest.
- **Reasoning: 76/100.** GPQA 89.0%, MMLU-Pro 86.3%, AIME 2026 95.3%, HLE 29.8% and a 23.8% hallucination rate are strong, capped by CritPt 6.3% and an AA Intelligence Index of 26.6.
- **Context window: 80/100.** 512,000 tokens with 128,000 max output is the 200K–500K tier at its top, discounted for the absence of a published retrieval test.
- **Multimodal: 15/100.** Text-in/text-out only — AA confirms it cannot process images.
- **Coding: 72/100.** SWE-bench Verified 70.6%, LiveCodeBench 87.8% and SciCode 48.0% are mid-to-high band, capped by Terminal-Bench 2.1 at 57.0% and no SWE-bench Pro or DeepSWE figure.
- **Cost efficiency: 96/100.** $0.30/M in, $1.20/M out and a $0.06/M cache read is very cheap for a closed flagship — the folder's $2/$6 belief overstates the cost 6×.
- **Overall Score: 60/100.** Mean of the five quality dims = (56 + 76 + 80 + 15 + 72) / 5 = 59.8 → **60**. Best fit: Korean/Japanese enterprise agents and document workflows at a low price — and note there is no "Solar Pro 4.1"; Solar Mini 4 is Upstage's newest release.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Upstage blog posts, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Mini_4.md`, using the same headings.
