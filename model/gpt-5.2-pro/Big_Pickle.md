# GPT-5.2 Pro - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute "Pro" tier of the GPT-5.2 family (2025-12-11),
  sold as a single model id in the Responses API only - it trades latency and price for the
  strongest quality of the family, and is now a previous-generation model (OpenAI recommends
  GPT-5.5 Pro).
- **Provider / access:** OpenAI API - `gpt-5.2-pro`, default snapshot `gpt-5.2-pro-2025-12-11`,
  **Responses API only** (Chat Completions, Batch, Realtime and the legacy endpoints are all
  "Not supported"); multi-turn server-side context, background mode recommended because some
  requests take several minutes. Also on OpenRouter (`openai/gpt-5.2-pro`). **Not served on
  OpenCode Zen:** the live Zen catalogue (`https://opencode.ai/zen/v1/models`, checked 2026-10-22)
  lists `gpt-5.2`, `gpt-5.2-codex`, `gpt-5.3-codex`, `gpt-5.4`, `gpt-5.4-pro`, `gpt-5.5`,
  `gpt-5.5-pro` and the `gpt-6.x` line, but **no `gpt-5.2-pro`** - the folder's curated id
  `opencode/gpt-5.2-pro` resolves to no live route, so the scores below are vendor-API facts
  (OpenAI / OpenRouter), not Zen-served facts.
- **Release / knowledge:** Released 2025-12-11 (API and ChatGPT Pro rollout). Knowledge cutoff
  **2025-08-31**. Reasoning effort: medium / high / xhigh.
- **IDs:** `gpt-5.2-pro` and snapshot `gpt-5.2-pro-2025-12-11` (OpenAI), `openai/gpt-5.2-pro`
  (OpenRouter). Sibling ids in the same family: `gpt-5.2` (Thinking), `gpt-5.2-chat-latest`
  (Instant) - separate models, different prices, different published evals.
- **Context window:** **400,000 tokens** total, **128,000 max output tokens** (OpenAI model
  page). Long-context rate-limit tier starts at 128k input tokens. No long-context premium is
  published for this id.
- **Modalities:** Input text, image; output text. Supported tools: function calling, file search,
  image generation, MCP, web search; streaming, reasoning tokens.
- **Pricing (as of 2026-10-22):** **$21.00 input / $168.00 output per 1M tokens** (official model
  page); cached input is reported at ~$2.10 (90% off input, per the family pricing note in
  OpenAI's launch post and third-party price tables). Web-search tool calls are billed separately
  ($10.00 per 1k calls). No free tier, no Zen free id, and **no Batch endpoint** for this model -
  so no batch discount applies (contrary to price tables that show $10.50/$84 for it).
- **Architecture:** Proprietary, API-only; parameter count and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval (professional knowledge work, 44 occupations; official): **74.1%** wins-or-ties, **60.0%**
  clear wins, **67.6%** no-ties; internal investment-banking spreadsheet tasks **71.7%**
  (GPT-5.2 Thinking 68.4%).
- BrowseComp (official, xhigh effort): **77.9%** (GPT-5.2 Thinking 65.8%).
- Terminal-Bench Hard (Artificial Analysis, independent): **47.0%** - the only Terminal-Bench
  number published for this model by a measured third party (see conflicts).
- SWE-bench Verified (Vals AI mini-SWE-agent protocol, independent): **67.8%** (2025-12-20).
- ARC-AGI-2 (ARC Prize, independent): **54.2%** at high effort, **$15.72 per task**;
  ARC-AGI-1 **90.5%** at **$11.65 per task** - cost per task, not tool-use rate, but the measured
  price of an agentic roll-out.
- Tau2-bench (Telecom / Retail): no verified public score found for the Pro variant (the family's
  98.7 / 82.0 numbers belong to GPT-5.2 Thinking).
- Toolathlon / MCP-Atlas / Claw-Eval / OSWorld / AutomationBench: no verified public score found
  for the Pro variant (MCP-Atlas 60.6 and Toolathlon 46.3 are GPT-5.2 Thinking numbers).
- Agents' Last Exam, JobBench, DEEPSYNTH: DEEPSYNTH F1 **8.70** (#2 of 10, BenchmarkList,
  2026-05-27) - agentic multi-source synthesis; no Agents' Last Exam or JobBench row for Pro.

Reasoning / knowledge:

- GPQA Diamond (no tools, official): **93.2%** (GPT-5.2 Thinking 92.4%, GPT-5.1 88.1%).
- ARC-AGI-1 (Verified, ARC Prize): **90.5%** - first model above 90% on ARC-AGI-1.
- ARC-AGI-2 (ARC Prize, independent): **54.2%** (high) / 52.9% for Thinking - CoT state of the
  art at launch; **#35 of 99** on the ARC leaderboard snapshot.
- HLE (official): **36.6%** no tools; **50.0%** with search + Python (Thinking 34.5 / 45.5).
- AIME 2025 (no tools, official): **100.0%**; HMMT Feb 2025 (no tools): **100.0%**.
- FrontierMath (official, w/ Python): Tier 1-3 **40.3%**, Tier 4 **14.6%** for GPT-5.2 Thinking;
  Benchmark Atlas lists **FrontierMath Tiers 1-3 (v2) 74.0%** and Tier 4 (v2) **46.0%** for
  GPT-5.2 Pro (private sets, Epoch-sourced) - see conflicts.
- Epoch Capabilities Index (independent): **ECI 155.07** (90% CI 153.04-157.24) - **#30 of 253**
  tracked models, and **#1 of 166** at release; #122 of 656 on a 2026 mirror.
- SimpleBench (independent): **57.4%** (#43 of 101).
- TaxBench (independent): mean pass^5 **17.8%** (#7 of 16), mean pass@1 67.2%.
- GeneBench-Pro (independent): **8.5%** mean pass rate (#13 of 30).
- Artificial Analysis Intelligence Index: **not rated for the Pro variant** (ARBITER lists "Not
  rated"); the launch-day v3.0 score of 73 belonged to **GPT-5.2 (High)** i.e. the Thinking tier,
  not Pro.
- MMLU-Pro / MMMLU / CharXiv / Video MMMU / ScreenSpot Pro: no verified public score found for
  the Pro variant (79.5 / 89.6 / 88.7 / 85.9 / 86.3 are GPT-5.2 Thinking numbers).

Coding:

- SWE-bench Verified (Vals AI mini-SWE-agent, independent): **67.8%** (2025-12-20); the same
  leaderboard shows **72.8%** for GPT-5.2 Thinking under the refreshed mini-SWE-agent 2.0.0
  protocol (2026-02-17).
- Terminal-Bench Hard (Artificial Analysis, independent): **47.0%**.
- SWE-bench Pro / SWE-bench Verified / SWE-Lancer IC Diamond (official): **no score published for
  the Pro variant** - OpenAI published SWE-bench Verified 80.0%, SWE-bench Pro (public) 55.6% and
  SWE-Lancer IC Diamond 74.6% for **GPT-5.2 Thinking** only.
- Vibe Code Bench v1.1 (Vals AI): **53.50%** for **GPT-5.2** (Stanford AI Index 2026 quotes
  "GPT 5.2 at nearly 54%") - family-tier number, not a Pro-only measurement.
- LiveCodeBench / SciCode / DeepSWE 1.1 / SWE-Atlas: no verified public score found for the Pro
  variant (SciCode 52.1 and LiveCodeBench 88.9 in the same tables belong to GPT-5.2 Thinking).

Long context:

- Context window 400,000 tokens with 128,000 max output (official model page); long-context rate
  limits listed from 128k input tokens.
- Long-context retrieval: **no MRCRv2 / RULER number published for the Pro variant** - OpenAI's
  MRCRv2 table is GPT-5.2 Thinking only (98.2% at 4k-8k, 77.0% at 128k-256k, near-100% on the
  4-needle variant to 256k). Benchmark Atlas lists Fiction.LiveBench for GPT-5.2 Pro: 100% at
  400-4k tokens, 88.9% at 8k, 80.6% at 32k, 75.0% at 120k, **78.1% at 192k and 400k** - a
  long-form reading/comprehension eval, not a retrieval needle test.
- `/compact` context extension: documented for GPT-5.2 Thinking, not for the Pro variant.

### Normalized scores (1-100)

- **Tool use: 75/100.** GDPval 74.1% (wins-or-ties) / 60.0% clear wins and BrowseComp 77.9% are
  genuine professional-agent strengths, and SWE-bench Verified 67.8% (Vals mini-SWE-agent) shows
  solid repo-level agent work; the cap is Terminal-Bench Hard at only 47.0% plus the complete
  absence of a published Tau2, Toolathlon, MCP-Atlas, OSWorld or AutomationBench number for the
  Pro variant, so the tool-call-quality band cannot be confirmed.
- **Reasoning: 90/100.** GPQA Diamond 93.2% clears the 90% frontier reference, ARC-AGI-1 90.5%
  (first model over the line) and ARC-AGI-2 54.2% are state-of-the-art-for-CoT results, AIME 2025
  and HMMT are both 100.0%, HLE 50.0% with search+Python clears the 40% reference, FrontierMath v2
  Tiers 1-3 74.0% and Epoch ECI 155.07 (#1 of 166 at release) confirm top-tier general reasoning;
  the deductions are for the weaker no-tools HLE (36.6%), TaxBench (17.8% pass^5) and GeneBench-Pro
  (8.5%), plus no AA Intelligence Index for this variant.
- **Context window: 78/100.** 400,000 total with 128,000 max output places it in the 200K-500K
  band (65-84), near the top of it; no long-context premium and no `/compact` for this variant, and
  no MRCRv2/RULER retrieval result published for Pro (the family's MRCRv2 numbers belong to
  Thinking), so it cannot be credited with the >=1M/98%-retrieval tier.
- **Multimodal: 70/100.** Officially text + image in, text out - the top of the "+image in"
  band (60-70); the family's published vision results (MMMU Pro 79.5%, CharXiv reasoning 88.7%,
  Video MMMU 85.9%, ScreenSpot Pro 86.3%) belong to GPT-5.2 Thinking, and no video, audio or
  non-text output path exists for this variant, so it stays below the multimodal 75-90 band.
- **Coding: 72/100.** The measured Pro numbers are SWE-bench Verified 67.8% (independent
  mini-SWE-agent protocol) and Terminal-Bench Hard 47.0% - solid but short of the frontier
  references (DeepSWE 74%+, TB2.1 85%+, Coding Index 70+); OpenAI published **no** coding
  benchmark for the Pro variant at all, and the sibling Thinking scores (SWE-bench Verified 80.0%,
  SWE-bench Pro 55.6%, SWE-Lancer 74.6%) are family context, not this model's measurement.
- **Cost efficiency: 15/100.** $21.00 / $168.00 per 1M tokens is the most expensive id in this
  dataset (cached reads ~$2.10 and OpenAI's token-efficiency argument, plus ARC-AGI cost/task of
  $11.65-15.72, soften it slightly), but with no free tier, no Zen free id and no Batch endpoint
  for this model it lands far below the $10/$50 (~30) and $3/$15 (~60) reference points.
- **Overall Score: 77/100.** One of the strongest reasoning engines ever measured on GPQA and
  ARC-AGI, with professional-agent numbers to match, but a 400K window, image-only input, no
  published coding or long-context evaluation for the Pro variant itself, and a $21/$168 price
  make it a specialist pick for expensive, quality-critical analysis rather than a general
  workhorse - GPT-5.5 Pro, GPT-6.x and Muse Wonder 1.0 all dominate it on cost per point.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: public internet research, cross-checked across four source classes - (1) official OpenAI
  material: the model page `developers.openai.com/api/docs/models/gpt-5.2-pro` (model id, snapshot
  `gpt-5.2-pro-2025-12-11`, Responses-API-only endpoint table, 400,000-token context, 128,000 max
  output, 2025-08-31 knowledge cutoff, $21/$168 pricing, supported tools, rate-limit tiers) and
  the launch post `openai.com/index/introducing-gpt-5-2/` (full benchmark table, the GPT-5.2 Pro
  column, family pricing table, MRCRv2 long-context table, ARC-AGI and GDPval notes); (2)
  independent trackers: Artificial Analysis Terminal-Bench Hard (47.0%, read from the AA-leaderboard
  mirror pricepertoken.com, updated 2026-10-21), Epoch AI (ECI 155.07, #30 of 253; ECI frontier
  CSV), ARC Prize (ARC-AGI-1 90.5%, ARC-AGI-2 54.2%, cost per task $11.65 / $15.72), Vals AI
  SWE-bench Verified mini-SWE-agent row (67.8%, 2025-12-20) and Vibe Code Bench v1.1 (53.50% for
  GPT-5.2, Stanford AI Index 2026 chapter 2); (3) aggregator rows cross-checked for conflicts:
  BenchmarkList (DEEPSYNTH 8.70 #2/10, Agent Island 1.82 #7/49, TaxBench 17.8% #7/16,
  GeneBench-Pro 8.5% #13/30, ARC-AGI ranks), Benchmark Atlas (FrontierMath v2 74.0/46.0,
  Fiction.LiveBench long-context series, ECI 156), ARBITER (SimpleBench 57.4, #48 of 146 overall,
  "Artificial Analysis: not rated"), ATLABYTE and TrustTheBench (SWE-bench Verified and
  Terminal-Bench rows, Vibe Code Bench); (4) the live OpenCode Zen catalogue
  (`https://opencode.ai/zen/v1/models`, 2026-10-22) to check whether the id is actually served -
  it is not, and the folder's placeholder meta ("128K total", "Text in/out", "Standard pricing") is
  contradicted by the official 400,000-token, text+image, $21/$168 specs. Conflicts are reported
  side by side with their harness: Terminal-Bench (Artificial Analysis Hard 47.0% vs
  anotherwrapper's unsourced "TB 2.1 82.9%" for the same model and TrustTheBench's 60.8%, whose
  dates are demonstrably unreliable - it lists Muse Wonder in 2025-05, five months before that
  model existed), SWE-bench Verified (67.8% mini-SWE-agent vs OpenAI's 80.0% for the Thinking
  tier under its own harness), ARC-AGI-2 (54.2% ARC-Prize-verified high effort vs Benchmark
  Atlas's 38.5% row, effort unlabeled), FrontierMath (40.3% official Tier 1-3 for Thinking vs
  74.0% private Tier 1-3 for Pro) and pricing (official $21/$168 vs several aggregators that
  repeat the family's $1.75/$14 under the Pro name). Scores are normalized 1-100 interpretations,
  not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
