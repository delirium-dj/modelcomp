# Muse Wonder — findings by Big Pickle

- Source: Meta (`muse-wonder-1.0`, Meta Model API + Muse Code)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta's API-served frontier agentic model (October 2026) for long-horizon coding, computer use and professional agent work; it is the modestly smaller sibling of Muse Wonder Full — same 1M-token family and modalities, four Intelligence Index points behind it, and the only Muse Wonder variant you can actually buy per token.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`, OpenAI-compatible Responses + Chat Completions; Anthropic Messages at `https://api.meta.ai`) and Muse Code (every plan, Standard and Contributor modes). Also resold through OpenCode (`opencode/muse-wonder-1.0`, `openai-responses` at `https://opencode.ai/inference/openai/v1`), Vercel and Cloudflare. Preview status; not available in South Korea.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** `muse-wonder-1.0` / `meta/muse-wonder-1.0` (LiteLLM) / `opencode/muse-wonder-1.0`; no Free Zen ID.
- **Context window:** 1,048,576 tokens (1M) with 131,072 max output — verified by Meta's Model API docs, LiteLLM's catalog and Pi's provider config.
- **Modalities:** Text, image, video, audio and PDF in; text out. Reasoning is always on with `effort` from `minimal` to `max` (`effort: none` returns HTTP 400 — send `minimal`); tool calling, parallel tool use, structured output, search grounding, computer use.
- **Pricing (as of 2026-10-30):** $4.00 in / $20.00 out / $0.20 cached input per 1M tokens — identical to Claude Opus 5.5. Standard mode (no training on your content) is the API default; Contributor mode (content used for training in exchange for more usage) is subscription-only, on by default for Muse Code subscribers.
- **Architecture:** Proprietary, closed weights; built on a smaller base model than Muse Wonder Full, parameter counts undisclosed.

### Raw benchmarks found

> Two independent index generations are in circulation: AA Intelligence Index **v4.3** (Muse Wonder 52) and **v5.0** (Muse Wonder 43). Both are cited below because the v5.0 test list changed (HLE-Diamond, FrontierCode, Terminal-Bench-Science in; LCR and SciCode out). Meta's own table also disagrees with AA on AutomationBench (39.1 vs 68%).

Agent / tool use:

- AutomationBench-AA: **68%** (AA v5.0) vs **39.1** on Meta's own card row vs Opus 5.5 41.2 — three different versions, quote the harness
- AA-Briefcase v1.1: **1659 Elo** (AA v5.0) vs Claude Opus 5.5 1801
- GDPval-AA: no published Muse Wonder Elo (Meta's table lists n/a); the Full variant scores 1857
- APEX-Agents: **66.1%** (external, best reported setting) — 87th percentile, 80% is the best recorded
- Terminal-Bench 4.0: **52.0%** (AA; Opus 5.5 59.6–60%, Gemini 4 Argon 57%) and **49.5%** on Vals AI's Mini-SWE-agent harness
- Harvey LAB-AA (legal): **10.0** on Meta's card (Opus 5.5 4.2) but **23.8%** on Vals AI's own Harvey run — different harnesses, do not mix
- OSWorld V2.1: **72.6% partial reward** (Meta card; strict binary figure is lower and not quoted per model)
- Vending-Bench 2: **$9,432** (Epoch AI) vs Opus 5.5 $9,235 — a rare Wonder win in a long-horizon agentic sim
- JobBench: **70.5%** (Meta card) vs Opus 5.5 75.4%
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (AA never published a Wonder GPQA row; benchgap only lists modeled estimates)
- HLE: **50.1% (max)** on AA's run per llmbenchmark.ai; **HLE-Diamond 39%** on AA v5.0 vs Opus 5.5 **68%** — the single largest deficit
- LCR / MLCR: **AA-LCR 80.7% (max)** per llmbenchmark.ai (v4.3 eval; not part of v5.0)
- CritPt: **28.3%** (Epoch AI) / **48%** CritPt v2-hard-subset (AA v5.0) vs Opus 5.5 61%
- Artificial Analysis Intelligence Index: **43 (v5.0)** / **52 (v4.3)** — leaderboard places it 43, mid-pack (median 37); Meta's card row says 52
- Epoch Capabilities Index: **161.8, #13 of 273** (90% CI 159.3–164.9)
- Omniscience Accuracy / Hallucination Rate: **25 knowledge index / 27% hallucination** (AA v4.3) vs Opus 5.5 46–48 knowledge — the model knows far fewer facts but guesses less
- FrontierMath: **82.1% tiers 1–3 / 70.7% tier 4** (Epoch, private sets) vs Opus 5.5 91.2% / 95.0%; OTIS Mock AIME **99.4%**; ProofBench 84.0%

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (benchgap's 91.9% / 78.x figures are estimates, not measurements)
- LiveCodeBench: no verified public score found
- SciCode: **60.3%** (Epoch AI / AA) — 90th percentile
- DeepSWE 1.1: **78.8%** (Datacurve third-party) vs Opus 5.5 74.2%
- SWE-Marathon: **53.1%** vs Opus 5.5 46.3% — Meta's own card flags this row as *not* a common-harness comparison
- ProgramBench (common mini-swe-agent harness): **50.0%** vs Opus 5.5 **70.5%** — the controlled coding row where Wonder loses badly
- Terminal-Bench-Science 0.1: **26%** (AA v5.0) vs Opus 5.5 59%; **22.9%** on Vals' Mini-SWE-agent run
- FrontierCode 2.0: **28%** vs Opus 5.5 46% — weakest coding sub-score on the new index
- Coding Agents Index: **63** (AA v4.3) vs Claude Code + Opus 5.5 66; LiveBench Coding **80.7**, Agentic Coding **62.7**, CursorBench **50.4**, MirrorCode **45.6**, GameBench 2 **78.8** (xHigh), Vals Vibe Code Bench **83.1%** (OpenHands), IOI **66.9%**
- Human preference: LMArena Text Elo **1509** (other aggregators report 1499 and 1725 on rescaled boards — conflicts noted), WebDev **1651–1652**, Coding **1545–1518** (two aggregators disagree), Agent Arena **0.033** vs Opus 5.5 0.208

Long context:

- AA-LCR **80.7%** at max effort (v4.3 eval). No vendor RULER/MRCR curve; benchgap's LongBench v2 / GraphWalks / MRCRv2 rows for Wonder are modeled estimates only.

### Normalized scores (1–100)

- **Tool use: 85/100.** 68% AutomationBench-AA, 66.1% APEX-Agents, 1659 AA-Briefcase Elo and a Vending-Bench win over Opus show real long-horizon agent competence, but ProgramBench 50 vs 70.5 and the unmeasured GDPval Elo keep it clearly behind the frontier three.
- **Reasoning: 83/100.** Index 43 on v5.0 / 52 on v4.3, HLE-Diamond 39 vs 68 for Opus, CritPt 48 vs 61 and a 25-point knowledge index anchor it — math is fine (82.1% FrontierMath t1–3, 99.4% AIME), factual recall is the limiter.
- **Context window: 93/100.** 1,048,576 in / 131,072 out with 80.7% AA-LCR measured retrieval; no 1M-token vendor retrieval curve keeps it just under the top band.
- **Multimodal: 87/100.** Text, image, video, audio and PDF input with text-only output; Furniture Assembly 54.2% (vs 65% best) and Meta's own spatial-reasoning caveat cap it.
- **Coding: 89/100.** DeepSWE 78.8% and SWE-Marathon 53.1% are genuine frontier-coding signals, but FrontierCode 28%, ProgramBench 50 and Terminal-Bench-Science 26% show the edge is narrow and harness-sensitive.
- **Cost efficiency: 60/100.** Priced exactly like Claude Opus 5.5 ($4/$20, $0.20 cached) while scoring a tier below it; it is cheaper per task ($6.95 vs $10.04) and much faster (147 t/s, ~30s first token), which rescues the value somewhat.
- **Overall Score: 87.4/100.** Mean of the five quality dims (85 + 83 + 93 + 87 + 89 = 437 / 5); best fit is long-horizon coding/agent loops where you want Opus-class pricing with faster turns, with retrieval grounding for factual work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-30
- Method: public internet research across Meta's Model API documentation and model card, Artificial Analysis model pages (both index generations), Epoch AI's benchmarking hub results, Vals AI / LMArena / LiveBench aggregates, and hands-on creator tests used to stress-test vendor claims; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Model API — Models (muse-wonder-1.0 specs, modalities, availability)](https://dev.meta.ai/docs/models)
  - [Muse Wonder — Meta model page (pricing, plans)](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder and Muse Wonder Full model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Artificial Analysis — Muse Wonder (max) model page](https://artificialanalysis.ai/models/muse-wonder)
  - [Artificial Analysis — Muse Wonder vs Claude Opus 5.5](https://artificialanalysis.ai/models/comparisons/muse-wonder-vs-claude-opus-5-5)
  - [Epoch AI Benchmarking Hub results for Muse Wonder (via AI Stats Live)](https://aistatslive.com/model/muse-wonder)
  - [LiteLLM — Claude Opus 5.5 vs Muse Wonder 1.0 benchmark table](https://models.litellm.ai/compare/claude-opus-5-5-vs-muse-wonder-1.0)
  - [Apidog — Muse Wonder vs Claude Opus 5.5: Same Price, Different Jobs](https://apidog.com/blog/muse-wonder-vs-claude-opus-5-5/)
  - [Codersera — Muse Wonder guide: pricing, API, benchmarks](https://codersera.com/blog/muse-wonder-complete-guide-2026/)
  - [The AI Automators — hands-on Muse Wonder Full vs GPT-6 / Claude builds](https://www.theaiautomators.com/muse-wonder-vs-gpt-6-and-claude/)

---
