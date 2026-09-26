# Claude Sonnet 4 — findings by Big Pickle

- Source: Anthropic/`claude-sonnet-4-20250514`
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** The balanced half of Anthropic's May 2025 Claude 4 launch — the model that held the SWE-bench Verified crown (72.7%) at a third of Opus 4's price, and the default "practical frontier" pick for high-volume production agents. It is a **legacy model now**: Anthropic's pricing table lists Claude Sonnet 4 as *retired except on Amazon Bedrock and Google Cloud Vertex AI*, superseded within the family by Sonnet 4.5, 4.6 and 5.
- **Provider / access:** Anthropic first-party Claude API (`https://api.anthropic.com/v1/messages`, Messages API) while served, plus **Amazon Bedrock** (`anthropic.claude-sonnet-4-20250514-v1:0`) and **Google Vertex AI** (`claude-sonnet-4@20250514`) — those two are where it remains available. OpenRouter also carries it at $3/$15. Repo ID form: `anthropic/claude-sonnet-4`.
- **Release / knowledge:** released 2025-05-22 alongside Claude Opus 4. **Knowledge cutoff March 2025** (Anthropic / Artificial Analysis). A few aggregators disagree (Jan 2025, Apr 2025); March 2025 is the vendor figure.
- **IDs:** `claude-sonnet-4-20250514` (dated snapshot), `claude-sonnet-4` (alias). 1M context requires the `context-1m-2025-08-07` beta header. **No Free ID exists on OpenCode Zen** — paid tier only.
- **Context window:** **200K native, 64K max output**; **1M in public beta** since 2025-08-12 (Tier 4+ at launch, i.e. ≥$400 in prepaid credits), also live on Bedrock and Vertex AI. Long context is the first Anthropic model to use **length-tiered pricing**: ≤200K prompts $3/$15, **>200K prompts $6/$22.50**. Verified from `anthropic.com/news/1m-context` and the Anthropic pricing table. Note the current platform docs' 1M list (Fable 5.1, Mythos 5.1, Fable 5, Mythos 5, Opus 5, Opus 4.8, Opus 4.7, Opus 4.6, Sonnet 5, Sonnet 4.6, Mythos Preview) does **not** include Sonnet 4 — its 1M remains the old opt-in beta.
- **Modalities:** text + image in (PDF via document blocks), text out; **hybrid reasoning** with extended thinking up to 64K tokens; tool use / function calling, JSON mode, prompt caching, batch API. No audio or video input; text-only output.
- **Pricing (as of 2026-09-26):** $3.00 / $15.00 per 1M input/output; cache read $0.30, 5-minute cache write $3.75; batch −50%; **>200K prompts $6.00 / $22.50**. Blended 7:2:1 cache/input/output ≈ **$2.31 per 1M** (Artificial Analysis). Paid tier — no free tier, hence no data-usage/privacy caveat, but also no $0 entry point.
- **Architecture:** proprietary — no parameter count, no open weights (Artificial Analysis: "Weights: Not available"). Deployed under the AI Safety Level 2 standard (Opus 4 was ASL-3).

### Raw benchmarks found

> Vendor numbers from the Anthropic *Introducing Claude 4* post (2025-05-22) and the Claude Opus 4 / Sonnet 4 system card. Independent harness numbers listed alongside — the gap on SWE-bench is large and worth stating plainly.

Agent / tool use:

- SWE-bench Verified: **72.7%** (Anthropic launch, extended thinking **off**) — state of the art at release. The same post's appendix reports **80.2%** when scored out of a 477-problem subset (Opus 4: 79.4%), and the official SWE-bench site records **64.93%** for the `20250514` snapshot under the default mini-SWE-agent Verified view. Three different numbers, three different scaffolds.
- SWE-bench Pro (Scale, 1,865 problems): **42.7%** (Vector Wire). SWE-bench Multilingual: **56.9%**. Multi-SWE-Bench: **35.7%**.
- **Terminal-Bench 2.1: 36.3%** (Vector Wire) — a real 2.1 number, unlike Opus 4.5.
- Terminal-Bench 2.0: **35.5%** (no extended thinking) / **36.4%** (with thinking) (HuggingFace model card, via Vector Wire); **rank 57 of 299** on the aggregated Terminal-Bench table (AI War Tracker). Terminal-Bench Hard: **31.1%** (Artificial Analysis subset, via Vector Wire).
- **MCP Atlas: 35.6%** pass rate, 57.3% coverage (Scale's MCP-Atlas paper, 1,000 tasks / 36 servers / 220 tools) — versus Opus 4.5's 62.3% on the identical harness. This is the single cleanest apples-to-apples agentic datapoint for the model.
- TAU-bench / τ² / τ³: Anthropic reports a TAU-bench number for Sonnet 4 with extended thinking but **no figure I could verify**; no τ²-Bench or τ³-Bench entry found. **Tau3-Banking: no verified public score found.**
- GDPval-AA: **no verified public Elo found** for Sonnet 4.
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found** (SWE Atlas's own leaderboard starts at Opus 4.6; Sonnet 4 appears only as a comparison row in secondary tables).
- Aider Polyglot: **61.3%** (55th percentile, pricepertoken, sourced from Artificial Analysis/HF). No BFCL, MCPMark or Toolathlon entry found for this snapshot.

Reasoning / knowledge:

- GPQA Diamond: **70.0%** (no extended thinking) / **75.4%** (with extended thinking, up to 64K) per Anthropic. Independent: **78.0%** (thinking, HuggingFace card), **77.68%** (Artificial Analysis reasoning variant), **68.28%** (Artificial Analysis non-reasoning).
- MMLU: **88.7%**; MMLU-Pro: **83.7%** (85th percentile); MMMLU: **85.4%** (no thinking) / **86.5%**; SuperGPQA **55.7%**.
- AIME 2025: **33.1%** (no thinking) / **40.7%** standard / **77.3%** thinking (pricepertoken).
- HLE: **10.7%** (Vector Wire). CritPt: **0.3%** (Vector Wire) / **1%** (Artificial Analysis non-reasoning).
- **Artificial Analysis Intelligence Index: 30** (reasoning variant) / **17** (non-reasoning, estimated, v4.3.2). Older index versions report 19.1 (modelgrep) and 16.6 / 18.9 (pricepertoken) — the spread is index-version drift, not a real change in the model.
- LCR / MLCR: **AA-LCR v1.1 44%** (non-reasoning variant) — a genuinely weak long-document reasoning result.
- **Omniscience Accuracy / Hallucination Rate: AA-Omniscience −9** (non-reasoning) — i.e. *negative*: it answers incorrectly more often than correctly on AA-Omniscience's hard factual set. No separate accuracy/hallucination split published for this model.
- LMArena Vision Elo: **1191** (vs 1304 for Gemini 3 Pro and 1315 for Opus 4.6).

Coding:

- SWE-bench Verified / Pro / Multilingual / Multi: **72.7% / 42.7% / 56.9% / 35.7%** (see above; 80.2% on the 477-subset, 64.93% on the official leaderboard).
- LiveCodeBench: **65.5%** (thinking) / **44.9%** (standard) (pricepertoken, sourced from Artificial Analysis) — **rank 79 of 204** (AI War Tracker).
- SciCode: **40%** (AI War Tracker, **rank 79 of 307**) — exactly at the methodology's `<40%` mid-band boundary.
- Vibe Code Bench / VibeCodingBench: **no verified public score found** for Sonnet 4.
- DeepSWE / SWE Atlas / OpenHands Index: **no verified public score found** (the DeepSWE table starts at Opus 4.8; SWE Atlas's ranked entries start at Opus 4.6).
- BullshitBench v2: **30%** (launch-day tracker) — a sharp contrast with Opus 4.5's 90% on the same eval.

Long context:

- **No measured long-context retrieval number exists for Sonnet 4.** No MRCR, RULER, HELMET, NoLiMa or GraphWalks entry found for this model.
- The closest measured proxy is the sibling **Sonnet 4.5, which scored 18.5% on MRCR v2 8-needle at 1M tokens** (Anthropic's own Opus 4.6 announcement quotes it) — an 81.5% failure rate at the top of the same 1M window, from the same family, one version later. Treat as a **provisional** family-level proxy, not a Sonnet 4 measurement.
- **AA-LCR v1.1 44%** *is* a measured long-document reasoning number for Sonnet 4 itself (documents 10K–100K tokens), and it lands in the methodology's "LCR <40% → 55–65 reasoning" territory.
- General RULER finding (frontier models hold ~32K, then lose 15–30 points by 128K) applies as context, not as a Sonnet 4 measurement.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Cost efficiency is scored independently and is **excluded** from Overall.

- **Tool use: 48/100.** Sonnet 4 was a top-tier agentic model in May 2025 — SWE-bench Verified 72.7% led the field — but every *current* tool-use benchmark puts it below the methodology's mid band: **Terminal-Bench 2.1 36.3%** and **TB2.0 35.5%** sit under the "TB2.1 ~45–60% → 50–70" mid anchor, and **MCP Atlas 35.6%** is less than 60% of Opus 4.5's identical-harness 62.3%. **Terminal-Bench Hard 31.1%** and the complete absence of a τ²/τ³, Toolathon or GDPval-AA entry confirm the drop. Capped hard because tool use is exactly the axis where a two-generation gap shows most cleanly.
- **Reasoning: 61/100.** All four methodology markers sit inside the mid band simultaneously — **GPQA 70–78%** (60–80% band), **HLE 10.7%** (just above the `<10%` marker), **AA-LCR 44%** (just above the `<40%` marker), **AA Index 30** (20–35 band) — which the methodology maps to 55–65. Above that band because ARC-free reasoning is respectable and AIME-thinking reaches 77.3%; below it because **CritPt 0.3%** is effectively floor and **AA-Omniscience −9** means it hallucinates more than it knows.
- **Context window: 82/100.** Nominally it qualifies for the ≥1M band (95–100): Anthropic shipped a real 1M window in public beta and bills it, so the capability is not marketing. It scores far below that band because the 1M is **opt-in and gated** (beta header, Tier 4+ at launch, ~2× input price above 200K), because Bedrock/Vertex exposure varies, and because **measured** long-context behavior is weak — **AA-LCR 44%**, and the family proxy of **18.5% MRCR 8-needle at 1M** for Sonnet 4.5 implies real effective context nearer 200–256K. The methodology's "100 only if ≥98% retrieval at 512K+" condition is nowhere near met.
- **Multimodal: 65/100.** Text **+ image** in, text out — the methodology's 60–70 band. **MMMU 74.4%** and **MMMLU 86.5%** are solid; **MMMU-Pro 61.8%** and **LMArena Vision 1191** (a full ~110 Elo behind Opus 4.6's 1315) show the vision path is competent, not strong. No audio in, no video in, text-only output keeps it out of the 75+ tiers.
- **Coding: 70/100.** Its launch identity was coding — **SWE-bench Verified 72.7% SOTA in May 2025** (80.2% on the 477-problem subset), **SWE-bench Multilingual 56.9%**, **LiveCodeBench 65.5%** with thinking, **SciCode 40%**. That matches the methodology's mid recipe ("LiveCode 80% but Vibe <10% and SciCode <40% → 65–75") almost exactly, minus the missing Vibe datapoint. Capped there by **SciCode 40%** (frontier marker is 55%+), **Terminal-Bench 35.5%** (frontier marker TB2.1 85%+), **SWE-bench Pro 42.7%**, and the 72.7 → 64.93% drop on the official leaderboard's stricter harness.
- **Cost efficiency: 60/100.** The methodology names this price point directly: **"$3/$15 = ~60."** Cache reads at **$0.30/MTok** and a 50% batch discount push the blended 7:2:1 rate to ≈ **$2.31 per 1M** — roughly half of Opus 4.5's $3.85 and the best cost-per-capability in this family. Deducted for the **>200K tier at $6/$22.50**, so the 1M-context mode is a 60→45 trade in practice.
- **Overall Score: 65.2/100.** Mean of the five non-cost dims — (48 + 61 + 82 + 65 + 70) / 5 = 65.2. **Best-fit recommendation:** Sonnet 4 is a **legacy high-volume workhorse**, not a frontier pick — reach for it only when you want a stable, cheap, well-documented 200K-token agent (or a beta-gated 1M on Bedrock/Vertex) and can accept tool-use and terminal scores ~25 points behind Opus 4.5. For anything new, Sonnet 4.5 at the same $3/$15 price dominates it outright, and Sonnet 4.6/5 add 1M context at standard pricing.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-26
- Method: public internet research (Anthropic *Introducing Claude 4* launch post and Claude Opus 4 / Sonnet 4 system card, Anthropic 1M-context announcement and pricing/context-window docs, Artificial Analysis model and comparison pages incl. AA-LCR / AA-Omniscience, Scale's MCP-Atlas paper, SWE-bench leaderboard, Benchmark Atlas / Vector Wire / AI War Tracker / pricepertoken / modelgrep aggregators). Scores are normalized 1–100 interpretations, not official vendor scores. Where the same benchmark has three published values I list all three and name the harness rather than picking the flattering one.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
