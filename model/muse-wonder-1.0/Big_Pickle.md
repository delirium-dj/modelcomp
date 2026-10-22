# Muse Wonder 1.0 - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (Meta's API-served frontier agent model — **not** the sibling "Muse Wonder Full")
- **Short description:** Meta Superintelligence Labs' frontier model for personal and professional
  agentic work, released 2026-10-12 alongside the stronger Muse Wonder Full. Muse Wonder 1.0 is the
  variant that is actually purchasable: it runs on the Meta Model API (preview) and in Muse Code,
  with "Active Memory" (context carried across conversations) and "Active Focus" (persisting past
  blockers) as its two headline features. It is a sibling, not an alias, of Muse Wonder Full
  (full 56 vs 52 on the Artificial Analysis Intelligence Index); Full is subscription-only inside
  Muse Code and has no API id or per-token price.
- **Provider / access:** Meta Model API (preview) — OpenAI-compatible Responses, Chat Completions and
  Messages endpoints; also on OpenRouter (`meta/muse-wonder`) and Vercel/Cloudflare/Eden AI
  gateways. On OpenCode Zen the id is `opencode/muse-wonder-1.0`, served over the **Responses API**
  endpoint `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** Released 2026-10-12 (Meta Model API + Muse Code). **Knowledge cutoff is
  not published** by Meta; the model card lists only a release date.
- **IDs:** `muse-wonder-1.0` (Meta Model API), `meta/muse-wonder-1.0` (OpenRouter / gateway ids),
  `opencode/muse-wonder-1.0` (OpenCode Zen). Sibling id: `muse-wonder-full-1.0` (Muse Code
  subscribers only). No Free id exists on Zen for this family.
- **Context window:** 1M tokens — listed as 1,048,576 in the Meta Model API docs and as "Context 1M"
  on the model page; Artificial Analysis reports 1049k and ~1,573 A4 pages. Max output 131,072
  tokens (OpenCode model catalogue). No long-context premium is charged.
- **Modalities:** Input text, image, video, audio and PDF; output text. Reasoning is always on and
  cannot be disabled (effort levels minimal → max; with no effort set the model picks its own
  level). Tool calling supported; JSON mode supported; web-search grounding available as a tool.
- **Pricing (as of 2026-10-22):** $4.00 input / $0.20 cached input / $20.00 output per 1M tokens;
  web-search grounding $2.50 per 1,000 searches. No batch discount and no discounted "Contributor"
  mode for Muse Wonder on the API. Standard mode only, so API content is not used to train Meta
  models; zero data retention is available for qualified Meta Model API accounts on request.
- **Architecture:** Proprietary — no public weights (Meta released only Muse Spark Open under the
  Muse Model License; Wonder stays API-only). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA): **52.0%** (Artificial Analysis, AA harness, max effort) vs **49.49%**
  (Vals AI, Mini-SWE-agent harness, avg@3, 66 tasks) — **conflict: same benchmark, different
  harness**; Vals ranks Muse Wonder **9th of 36** (Claude Opus 5.5 65.15%, Claude Sonnet 5.5
  64.14%, GPT-6 Astra 59.60% on the same board).
- Terminal-Bench 4.0 cost/test (Vals AI): $14.66 per test, 54m41s median duration.
- AutomationBench-AA: **68%** (Artificial Analysis public row) — Meta's own model card reports
  **39.1%** "strict pass@1" for the same benchmark — **conflict: different metric definition
  (end-state assertion pass rate vs strict pass@1) and different harness**; both are listed, the
  vendor number is the lower one.
- JobBench (professional tool use, Meta card): **70.5** mean reward (Muse Wonder Full 75.3;
  Claude Opus 5.5 75.4).
- OSWorld V2.1 (Meta card, 108-task Ubuntu set): **72.6%** mean partial score / **34.3%** strict
  binary completion (Muse Wonder Full 78.4 / 39.4; Claude Opus 5.5 81.8 partial).
- Harvey LAB-AA v1.1 (legal agent work, AA): **10.0%** all-pass — **2nd of 19** (Muse Wonder Full
  13.1% #1, GPT-6 Astra 8.6%, Claude Opus 5.5 4.2%).
- Vals Finance Agent V2 (Meta card): **56.6** accuracy (Full 59.1).
- Agents' Last Exam (105-task Linux set, Meta card): no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1770** Elo (Artificial Analysis, AA-Briefcase v1.1 **1659** Elo; AA's Muse Wonder
  Full row 1857 / 1729)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Coding Agents Index (Muse Code harness): **63** (Muse Wonder Full 68; Muse Code with Muse
  Spark 1.3 54) — agent-product index, not a raw model score.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2 (max effort): **52** (52.4 with task-specific tools)
  — **#9 of 214** on the model page / #10 of 750 in a mirror; Muse Wonder Full 56, Claude Opus 5.5
  58, Claude Sonnet 5.5 56, GPT-6 Astra 53, GPT-6.1 Sol 52, Muse Spark 1.3 (max) 48.
- HLE: **50.1%** (Artificial Analysis; #24 of 670 on a mirror; Muse Spark 1.3 max 49%, Claude
  Sonnet 5.5 leaderboard row 47-56 by effort).
- SciCode: **60.3%** (Artificial Analysis; #11 of 237 on a mirror).
- CritPt: **28.3%** (Artificial Analysis).
- AA-LCR v1.1 (long-context reasoning): **80.7%** / **81%** (Artificial Analysis).
- AA-Omniscience: **25** (Artificial Analysis).
- FrontierMath v2 Tiers 1-3: **82.1%** (Epoch AI, dated 2026-10-21).
- GDP.pdf (professional work, Meta card): **30.8** (Full 33.2; Surge-reported).
- HealthBench Pro (525 professional health questions, Meta card): **60.5**
  length-normalized weighted rubric score (Full 62.3; Claude Opus 5.5 65.6).
- Personal Superintelligence Index (Meta internal composite of 7 evals): **54.3** (Full 59.1).
- MemoryBench (Meta internal, 64K-100K multi-turn recall, LLM-judged): **85.6** (Full 85.5).
- FocusBench (Meta internal): **44.9**.
- Arena+ Elo: **1510** (joint 9th of 33; Muse Wonder Full 1518).
- GPQA Diamond: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no separate verified public score found beyond AA-Omniscience 25

Coding:

- DeepSWE 1.1 (113 tasks, 91 repos, 5 languages): **78.8%** pass@1 (Datacurve third-party results;
  Muse Wonder Full 79.0, Claude Opus 5.5 74.2, GPT-6 Astra 74.1).
- SWE-Marathon (ultra-long-horizon, Abundant AI source): **53.1%** pass@1 (Full 57.5).
- ProgramBench (clean-room program reconstruction, mini-swe-agent): **50.0%** of rollouts passing
  ≥95% of tests (Full 59.0).
- SWE-bench Verified / SWE-Pro: no verified public score found — Vals AI stopped adding new models
  to its SWE-bench Verified board on 2026-09-01, so newer models have no row.
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Agents Index **63** (Muse Code harness)

Long context:

- AA-LCR v1.1 (long-context reasoning over 1M-class window): **80.7%** — no RULER / MRCR /
  GraphWalks number published for this model.
- MemoryBench (Meta internal, multi-turn conversations of 64K-100K tokens with distractor and
  updated facts): **85.6** — internal, LLM-judged, not reproducible.
- Context window claim itself: 1,048,576 tokens (Meta Model API docs), no long-context premium.
- **No ≥98%-retrieval-at-512K+ number published**, so the 1M tier is scored 95, not 100.

### Normalized scores (1-100)

- **Tool use: 85/100.** GDPval-AA 1770 Elo is at the frontier reference (1750+), AutomationBench-AA
  68%, JobBench 70.5, OSWorld 2.1 72.6% partial, DeepSWE 78.8% and the AA Coding Agents Index 63
  all show strong real-world agentic tool use; the cap is Terminal-Bench 4.0 at 49.5-52.0%
  (9th of 36 on Vals) and a strict binary OSWorld completion of only 34.3%, plus no public
  Tau3/Tau2 or Claw-Eval number to confirm the tool-call-quality band.
- **Reasoning: 78/100.** HLE 50.1% clears the 40%+ frontier reference, FrontierMath v2 82.1%,
  AA-LCR 80.7% and GDPval-AA 1770 are strong, but the AA Intelligence Index is 52 (frontier band
  starts at 60), CritPt is 28.3%, no GPQA Diamond has been published, and the composite
  "Personal Superintelligence Index" 54.3 is Meta-internal.
- **Context window: 95/100.** 1,048,576 tokens verified in the Meta Model API docs with 131,072
  max output and no long-context premium; scored 95 rather than 100 because no ≥98% retrieval
  result at 512K+ has been published (AA-LCR 80.7% is the best public proxy).
- **Multimodal: 92/100.** Text, image, video, audio and PDF input with text output puts it in the
  "audio in" band (90-100), and screenshot-driven OSWorld 2.1 work (72.6% partial) shows real
  visual grounding; capped by Meta's own note that visual/spatial reasoning, especially 3D
  tasks, remains a known limitation and by the absence of a published MMMU-Pro score.
- **Coding: 82/100.** DeepSWE 1.1 78.8% and SciCode 60.3% both clear the frontier references
  (74%+, 55%+), and SWE-Marathon 53.1% shows long-horizon engineering strength; the cap is
  Terminal-Bench 4.0 at 49.5% (#9), ProgramBench 50.0%, an AA Coding Agents Index of 63 (below the
  70+ frontier reference) and no SWE-bench Verified, LiveCodeBench or Vibe Code Bench number.
- **Cost efficiency: 50/100.** $4.00 in / $20.00 out per 1M tokens with $0.20 cached reads (95%
  cache discount) sits just above the $3/$15 ≈ 60 band and well above the $10/$50 ≈ 30 band;
  Artificial Analysis measures $4.52 per Intelligence Index task (#103 of 112 models) against
  $1.60 for Muse Spark 1.3, and there is no free or Contributor-mode tier on the API.
- **Overall Score: 86/100.** A 1M-context, multimodal frontier agent model with top-decile
  intelligence-index placement (52, #9 of 214) and DeepSWE-class coding, best used as a
  high-stakes long-horizon coder/agent when the $4/$20 price and ~29s TTFT are acceptable —
  Muse Spark 1.3 (max) remains the cheaper sibling for the same agentic work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: public internet research, cross-checked across four source classes — (1) official Meta
  material: the model page `dev.meta.ai/models/muse-wonder` (pricing $4/$0.20/$20, 1M context,
  model table `muse-wonder-1.0`), the Muse Wonder Model Card PDF (release date, modalities,
  1M-token inference context, per-benchmark methodology and score-selection rule), and the Meta
  Model API docs (1,048,576-token context, 131,072 max output, reasoning effort levels, preview
  status, rate limits); (2) Artificial Analysis (Intelligence Index v4.3.2 52 / 52.4 and #9 of 214,
  plus the ten component evaluations — AA-Briefcase 1659, GDPval-AA 1770, AutomationBench-AA 68%,
  Terminal-Bench 4.0 52%, SciCode 60.3%, HLE 50.1%, GDP.pdf 31%, CritPt 28.3%, AA-Omniscience 25,
  AA-LCR 81% — and the Meta launch article with per-benchmark deltas vs Muse Spark 1.3); (3) Vals AI
  (Terminal-Bench 4.0 Mini-SWE-agent leaderboard: Muse Wonder 49.49%, #9 of 36, $14.66/test) plus
  Harvey LAB-AA and Arena+ Elo from the AA / Arena boards; (4) independent trackers and reviews —
  Epoch AI FrontierMath v2 82.1%, Datacurve DeepSWE 1.1 78.8%, Abundant AI SWE-Marathon 53.1%,
  VentureBeat launch analysis, NoBrainer.tech, toolist.ai, ANTM, tokenstat, modelbenchmark.io,
  ModelRegistry, Ridge's ledger and llm-stats. Conflicting numbers are reported side by side with
  their harness (Terminal-Bench 4.0: AA 52.0% vs Vals 49.49%; AutomationBench-AA: AA 68% vs Meta
  card 39.1% strict pass@1), and a LiveBench 81.9 figure attributed to this model by
  modelbenchmark.io was discarded because its run date (2026-06-25) precedes the model's release.
  Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
