# GPT-5.6 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (flagship of the GPT-5.6 family; no Free-tier wording)
- **Short description:** OpenAI's July 2026 flagship for complex professional work — coding, knowledge work, cybersecurity, and science — and the comparison column in most H2 2026 launch tables. Now prior-generation: GPT-6 Sol (Sep 2026), GPT-6 Astra (Sep 2026) and GPT-6.1 Sol (Oct 2026) supersede it, but it remains on sale at promotional pricing and Artificial Analysis still lists it as a reference point.
- **Provider / access:** OpenAI API, model ID `gpt-5.6-sol` (the `gpt-5.6` alias routes to Sol); both Chat Completions (`v1/chat/completions`) and Responses (`v1/responses`) supported, plus Batch. Not on OpenCode Zen (no Zen Free ID). ~8 API providers on AA.
- **Release / knowledge:** Released 2026-07-09 (limited preview from late June 2026); knowledge cutoff 2026-02-16 — both verified on the OpenAI developer model page.
- **IDs:** `openai/gpt-5.6-sol` (siblings `gpt-5.6-terra`, `gpt-5.6-luna`; successors `gpt-6-sol`, `gpt-6-astra`, `gpt-6.1-sol`). No Free ID exists on Zen.
- **Context window:** 1,050,000 total tokens; 922,000 max input; 128,000 max output — verified directly on developers.openai.com model page (2026-11-02). Prompts with >272K input tokens are billed at 2× input / 1.5× output for the full request.
- **Modalities:** Text + image in (documents/PDF via file inputs); text out. No audio, no video in or out. Reasoning: yes — `reasoning.effort` supports none, low, medium (default), high, xhigh, max, plus the `ultra` 4-agent coordination mode (ChatGPT Work/Codex; multi-agent beta in the Responses API). Tool calls: yes — function calling, structured outputs (JSON schema), and hosted tools (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search).
- **Pricing (as of 2026-11-02):** $4.00 in / $0.40 cached in / $20.00 out per 1M tokens — promotional pricing available at least through November 21, 2026 (list $5 in / $30 out; cut >20% on 2026-08-21). Cache writes billed at 1.25× uncached input ($5.00/M). Requests >272K input tokens: full request at $8 in / $30 out. No free tier.
- **Architecture:** Proprietary, closed weights; parameter count and MoE structure undisclosed. Reasoning-effort-scaled single model (no separate Pro snapshot on the API); `ultra` runs four coordinated agents in parallel.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI launch table); **91.9%** in `ultra` 4-agent mode (OpenAI)
- AA Coding Agent Index v1.1: **80** (max reasoning, Codex harness — Artificial Analysis independent; state of the art at launch, 2.8 above Claude Fable 5, leading all three constituent evals: DeepSWE, Terminal-Bench v2, SWE-Atlas-QnA)
- OSWorld 2.0: **62.6%** (OpenAI — launch SOTA, 85% fewer output tokens than Opus 4.8)
- BrowseComp: **90.4%** (OpenAI); **92.2%** in ultra (OpenAI)
- GDPval-AA v2: **1,747.8 Elo** (OpenAI launch table; 2nd behind Claude Fable 5 at 1,759.6); current AA GDPval-AA v2.1 board: **1,588 Elo** (max effort, rank 25)
- τ²-Bench Telecom: **84.8%** (AA, xhigh); τ-Bench Banking: **38.1%** (AA, xhigh)
- Toolathlon: **58%** (OpenAI — trails Claude Mythos 5 at 61.7%); AutomationBench: **18.1%** (OpenAI harness)
- Cybersecurity: Capture-the-Flag **96.7%**, SEC-Bench Pro **71.2%** (74.3% ultra), ExploitBench **73.5%**, ExploitGym **33.7%** @6h (all OpenAI)
- Agents' Last Exam: **52.7%** (OpenAI launch table; prose cites 53.6 as the new high, eclipsing Fable 5's 40.5%)
- Claw-Eval / Tau3 / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI launch table — tied best at launch with Mythos Preview); AA independent: **92.6–93.1%** (medium–xhigh)
- HLE: **47.3%** (AA, xhigh; 42.2% medium / 46.0% high)
- ARC-AGI-2: **92.5%** semi-private (max effort; BenchLM ARC-AGI-2 leaderboard, rank 6, behind only Opus 5.5 XHigh and GPT-6 Astra rows); ARC-AGI-3: **7.78%** semi-private / **13.33%** public (ARC Prize verified — first model to win an ARC-AGI-3 public game, ft09 at 87%)
- FrontierMath v2: **89%** Tiers 1–3 / **83%** Tier 4 (OpenAI; Tier 4 behind Claude Fable 5's 87.8%)
- AA Intelligence Index v4.1: **58.9** (OpenAI-cited; AA's own July analysis: max ≈ 59, #2 behind Claude Fable 5's 59.9 at ~1/3 the cost); AA-direct effort rows: Medium **39.2** / High **42.3** — vendor-vs-AA discrepancy persists, and AA now shows N/A on Index v5.0 (model deprecated on AA after GPT-6 launch)
- AA-LCR: **82.3%** (xhigh); IFBench: **69.2–71.0%** (AA)
- CritPt: no verified public score found this pass
- AA-Omniscience: minor accuracy uplift over GPT-5.5 with a higher hallucination rate (AA July analysis, qualitative — no exact row re-verified)
- Multimodal vision: MMMU-Pro **83.0%** no tools / **84.6%** with tools; gdp.pdf **30.7%** (both OpenAI launch tables)

Coding:

- SWE-bench Verified: **96.20%** (Vals AI, Mini-SWE-agent harness, rank 3 as of 2026-09-01 behind Opus 5 at 97.0% and DeepSeek V4 Pro at 96.4%; $1.15/test)
- SWE-Bench Pro: **64.6%** (OpenAI launch table — far behind Claude Mythos 5's 80.3% and Fable 5's 80%)
- Terminal-Bench 2.1: **88.8%** / **91.9%** ultra (OpenAI; launch SOTA, ahead of Mythos 5's 88%)
- DeepSWE v1.1: **72.7%** (OpenAI — launch SOTA, ahead of Fable 5's 69.7%)
- AA Coding Index (component): **80** max / 76.3 medium / 77.2 high (AA)
- LiveCodeBench: no verified public score found for `gpt-5.6-sol` this pass

Long context:

- OpenAI MRCR v2 8-needle: **91.5%** @256K–512K; **73.8%** @512K–1M (OpenAI launch tables)
- GraphWalks BFS: **90.7%** f1 @256K; **77.1%** f1 @1M (OpenAI launch tables)
- AA-LCR (medical long-context reasoning): **82.3%** (AA, xhigh)
- RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** Independently corroborated leadership: AA Coding Agent Index 80 leading all three constituent evals, OSWorld 2.0 62.6% (launch SOTA), BrowseComp 90.4%/92.2% ultra, GDPval-AA v2 1,747.8 Elo (2nd only to Fable 5), τ²-Telecom 84.8% and CTF 96.7%; capped by Toolathlon 58% (behind Mythos 5's 61.7%), AutomationBench 18.1% absolute, and only rank 25 on the current AA GDPval-AA v2.1 board.
- **Reasoning: 92/100.** GPQA Diamond 94.6% (tied best at launch), HLE 47.3% (xhigh), FrontierMath v2 89%/83%, ARC-AGI-2 92.5% semi-private, and ARC-AGI-3 7.78% semi-private (best published at launch, first public-game win) put it at the frontier; capped by AA Intelligence Index #2 behind Fable 5 (58.9 vs 59.9), FrontierMath Tier 4 trailing Fable 5 (83% vs 87.8%), and the unexplained 58.9-vs-39–42 vendor/AA Index gap.
- **Context window: 93/100.** 1.05M-token window (922K max input) is top-tier, and retrieval is verified deep into it: MRCR v2 8-needle 91.5% @256–512K and 73.8% @512K–1M, GraphWalks BFS 77.1% f1 at the full 1M; capped by the moderate deep-band MRCR (73.8%) and the 2×/1.5× long-context surcharge above 272K input.
- **Multimodal: 65/100.** Text + image input (plus document/PDF via file inputs) with text-only output — no audio, no video, no native image generation (hosted tool only); measured vision is strong for an image-in model (MMMU-Pro 83.0%/84.6%), which holds it at the top of the image-in band rather than higher.
- **Coding: 90/100.** SWE-bench Verified 96.20% (Vals, Mini-SWE-agent, #3), Terminal-Bench 2.1 88.8%/91.9% ultra (launch SOTA), DeepSWE v1.1 72.7% (launch SOTA) and AA Coding Agent Index 80 (SOTA at launch); capped hard by SWE-Bench Pro 64.6% — ~16 points behind the Claude Mythos 5 / Fable 5 class (80.3%/80%) — and no verified LiveCodeBench row.
- **Cost efficiency: 76/100.** $4/$20 promotional through Nov 21, 2026 (list $5/$30) delivers near-frontier intelligence at roughly one-third of Claude Fable 5's cost (AA) and $1.15/test on Vals SWE-bench Verified; capped by ~2× the market median price ($2/$10), the >272K surcharge (2×/1.5×), and sunset risk as GPT-6-family tiers undercut it.
- **Overall Score: 87/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (93 + 92 + 93 + 65 + 90) / 5 = 433/5 = 86.6 → 87. Best fit: a still-excellent on-sale flagship for agentic, terminal-heavy and long-context work at promo pricing — but it is now prior-generation, so new projects should default to GPT-6-class successors and reach for Sol on cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI model docs — GPT-5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [OpenAI — GPT-5.6: Frontier intelligence that scales with your ambition (launch, 2026-07-09)](https://openai.com/index/gpt-5-6)
  - [Artificial Analysis — GPT-5.6 benchmarks across Intelligence, Speed and Cost](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [Artificial Analysis — GPT-5.6 Sol (Max) model page](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [Vals AI — SWE-bench Verified leaderboard](https://www.vals.ai/benchmarks/swebench)
  - [ARC Prize — GPT-5.6 verified results](https://arcprize.org/results/openai-gpt-5-6)
