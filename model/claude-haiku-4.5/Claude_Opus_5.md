# Claude Haiku 4.5 — findings by Claude Opus 5

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small/fast tier from October 2025 — an efficiency-first model whose notable achievement at release was taking SWE-bench Verified to **73.3%** from a Haiku-class checkpoint, within striking distance of the far larger Sonnet 4 ([Anthropic announcement](https://www.anthropic.com/news/claude-haiku-4-5)). It is now explicitly **legacy**: Anthropic's own model page opens "**Legacy.** Released October 15, 2025" and directs users to migrate to Claude Haiku 5.5 ([platform docs](https://platform.claude.com/docs/en/models/haiku-4-5/overview)). Distinct model; Haiku 3.5, Haiku 5.5 and the `-thinking` snapshot variant are separate entries.
- **Provider / access:** Claude API (`claude-haiku-4-5-20251001`, with `claude-haiku-4-5` as a convenience alias resolving to that pinned snapshot), Amazon Bedrock (`anthropic.claude-haiku-4-5`, plus the legacy InvokeModel ID `anthropic.claude-haiku-4-5-20251001-v1:0`), Google Cloud Vertex AI (`claude-haiku-4-5@20251001`), Microsoft Foundry and Claude Platform on AWS. Also **OpenCode Zen** as `claude-haiku-4-5` on `https://opencode.ai/zen/v1/messages` ([Zen docs](https://opencode.ai/docs/zen/)).
- **Release / knowledge:** Released **2025-10-15**. Status **Active (legacy)**, with retirement committed "not sooner than **2026-10-15**" — i.e. the earliest permissible retirement date falls **roughly one week after this report**. **Reliable knowledge cutoff: Feb 2025**; training data cutoff Jul 2025. That Feb-2025 reliable cutoff is 16 months behind the current Claude line's Jun 2026 and is a material limitation, not a footnote.
- **IDs:** `claude-haiku-4-5-20251001` (canonical), `claude-haiku-4-5` (alias), plus platform-specific IDs above. **No free tier** on any route.
- **Context window:** **200,000 tokens**, **max output 64,000 tokens**. Two caveats from Anthropic's own comparison table: it is **excluded** from the Message Batches API 300K-output beta that every current model supports, and it predates the Claude 4.7 tokenizer — Anthropic notes that older models "fit about 750k words in 1M tokens" where current ones fit ~555k, so its 200K window holds *more* text per token than a current model's would. That is a small point in its favour.
- **Modalities:** **Text and images in → text out.** No audio, no video, no generated media. Reasoning: **manual extended thinking only** (`thinking.type: "enabled"` with `budget_tokens`) — **the `effort` parameter is explicitly "Not supported"**, so it lacks the adaptive thinking that every current Claude tier has. Tool calls: yes.
- **Pricing (as of 2026-10-08):** **$1 / MTok input, $5 / MTok output**; cache read **$0.10 / MTok**; 5-minute cache write $1.25; 1-hour cache write $2; Batch API 50% off ([platform docs](https://platform.claude.com/docs/en/models/haiku-4-5/overview)). Identical on OpenCode Zen. No free tier.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and distillation method undisclosed. The only architectural facts Anthropic publishes are positional (the smallest tier of the 4.5 generation) and the tokenizer generation (pre-4.7).

### Raw benchmarks found

> **Coverage is thin and Artificial Analysis has no entry for this model**, so there is no AA Intelligence Index, no AA-LCR, no CritPt, no AA-IFBench and — importantly — **no hallucination-rate measurement**. Note also that every Vals AI figure below was measured on the `claude-haiku-4-5-20251001-**thinking**` snapshot, i.e. **with extended thinking enabled**, which is the model's strongest configuration.

Agent / tool use:

- Terminal-Bench 2.1: **43.8%** ([Vals AI](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking), thinking enabled)
- JobBench: **16.0%** ([JobBench paper](https://arxiv.org/abs/2605.26329))
- **τ²/τ³-bench, OSWorld, GDPval-AA, MCP-Atlas, Toolathlon, Claw-Eval, BrowseComp: no verified public score found.** Two numbers, both mid-to-low, is the entire agentic record.

Reasoning / knowledge:

- GPQA Diamond: **72.2%** ([Vals AI](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking), thinking enabled)
- MMLU-Pro: **78.7%** (Vals AI, thinking enabled)
- FrontierMath v2: Tiers 1–3 **5.90%**, Tier 4 **2.08%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))
- BenchLM overall: **41.45/100, rank #127 of 889** (11 of 625 benchmarks, flagged conservative)
- **HLE, CritPt, AA-LCR, AA-IFBench, Artificial Analysis Intelligence Index, AA-Omniscience accuracy and hallucination rate: no verified public score found.**

Coding:

- **SWE-bench Verified: 73.3%** ([Anthropic](https://www.anthropic.com/news/claude-haiku-4-5)); independently **66.6%** ([Vals AI](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking)) — a **6.7-point** vendor premium
- **VulcanBench v3: 76.2%** ([VulcanBench v3 July 2026 expanded report](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-kimi-k3-2026-07.md))
- LiveCodeBench: **41.2%** (Vals AI, thinking enabled) — notably weak against its SWE-bench result
- SWE-bench Pro, SciCode, FrontierCode, Aider Polyglot, Vibe Code Bench: no verified public score found

Multimodal:

- **No vision benchmark of any kind exists for this model.** No MMMU, no chart, no document, no OCR, no GUI grounding. Design Arena — Website **1127 Elo** ([OpenRouter](https://openrouter.ai/anthropic/claude-haiku-4.5/benchmarks)) measures preference for generated front-end design and is not multimodal evidence.

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** The 200K window is entirely unvalidated by public measurement.

### Normalized scores (1–100)

- **Tool use: 48/100.** The entire public record is **Terminal-Bench 2.1 at 43.8%** (with thinking enabled) and **JobBench at 16.0%**. No τ²-bench, no OSWorld, no GDPval, no MCP — and no adaptive effort control to tune agent behaviour, since the `effort` parameter is unsupported on this model. Two mid-to-low numbers and no aggregate cannot support more than the high 40s.
- **Reasoning: 56/100.** GPQA Diamond 72.2% and MMLU-Pro 78.7% are respectable for a small model, and both were measured independently — but both with **extended thinking enabled**, which is the flattering configuration and the only one Vals tested. The ceiling is low: FrontierMath Tiers 1–3 at **5.90%**, Tier 4 at 2.08%, no HLE at all. And the structural limitation matters as much as the scores: a **Feb 2025 reliable knowledge cutoff** on a model being used in October 2026 means roughly 20 months of unknown world.
- **Context window: 62/100.** 200,000 tokens with a 64K output ceiling was ordinary at release and is now the smallest window of any Claude tier by a factor of five. Small credit for the pre-4.7 tokenizer packing more text per token. Held at 62 by two concrete deficits: **no long-context measurement exists at any depth**, and it is specifically **excluded from the 300K batch-output beta** that every current Anthropic model supports.
- **Multimodal: 48/100.** Text and images in, text only out — the capability is real and vendor-documented. But **not one vision benchmark exists** for this model: no MMMU, no chart, no document, no OCR, no screenshot grounding. Scored just below the midpoint because the modality is confirmed present and Anthropic's vision stack is competent in general, with no evidence whatsoever about *this* model's quality.
- **Coding: 66/100.** The dimension that justified the model, and still its best: **SWE-bench Verified 73.3%** from the vendor with an independent reproduction at **66.6%** — I score the independent figure — plus **VulcanBench v3 76.2%**, which is a genuinely strong security-coding result. Capped sharply by **LiveCodeBench at 41.2%**, a 25-point gap below its SWE-bench score that suggests competitive-programming ability well behind its repository-repair ability, and by the absence of SWE-bench Pro, SciCode or any agentic coding harness.
- **Cost efficiency: 24/100.** $1 in / $5 out per MTok, and the comparison that decides this is entirely internal to Anthropic's catalogue: **Claude Haiku 5.5 costs $0.10 / $0.50 — exactly 10× cheaper on both lines — and gives you a 1M context window instead of 200K, 128K output instead of 64K, adaptive thinking with an effort parameter instead of manual-only, a Jun 2026 knowledge cutoff instead of Feb 2025, and a BenchLM score of 66.35 against this model's 41.45.** Ten times the price for 60% of the aggregate score, from the same vendor, on the same API. Add that Anthropic itself labels this model Legacy and permits retirement from **2026-10-15** — about a week from now — and there is no defensible reason to start a new workload on it. Credit retained only for $0.10 cache reads and the 50% batch discount.
- **Overall Score: 56/100.** Mean of the five non-cost dims (48 + 56 + 62 + 48 + 66) / 5 = 56.0. Best fit: **nothing new.** Its one genuine legacy is proving that a Haiku-class model could reach the low 70s on SWE-bench Verified, and VulcanBench 76.2% shows real security-code competence. But it is superseded on every axis by a sibling that costs a tenth as much, it carries a 20-month-stale knowledge cutoff, it lacks adaptive thinking, it has no vision or long-context measurement at all, and it becomes eligible for retirement within days of this report. Existing deployments should migrate; new ones should start on Haiku 5.5.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's `platform.claude.com` model reference for Claude Haiku 4.5 (the explicit "Legacy" designation, 2025-10-15 release date and 2026-10-15 earliest retirement, all platform model IDs and the alias/snapshot relationship, 200K context and 64K output limits, the full pricing table including cache-write and cache-read tiers and the batch discount, text-and-images modality, the manual-extended-thinking-only design with `effort` unsupported, the Feb 2025 reliable and Jul 2025 training cutoffs, its exclusion from the 300K batch-output beta, and the comparison table against the current lineup), the Claude Haiku 4.5 announcement for the vendor SWE-bench figure, the OpenCode Zen pricing table, BenchLM's aggregated page, and the underlying Vals AI, VulcanBench, Epoch AI, JobBench and OpenRouter leaderboards. Artificial Analysis has **no entry** for this model, so the absence of an intelligence index, long-context reasoning score and hallucination rate is reported rather than proxied from sibling Claude models. Every Vals AI figure is flagged as measured on the `-thinking` snapshot. The 6.7-point SWE-bench vendor/independent gap is reported and the independent value scored. Design Arena is explicitly not credited as vision evidence. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
