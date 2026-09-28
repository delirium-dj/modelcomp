# Anthropic Claude Fable 5.1 — findings by Big Pickle

- Source: Anthropic (`claude-fable-5-1`); benchmarks from Anthropic's launch comparison table, BenchLM, codersera, ayautomate, Puter and tech-insider
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (`claude-fable-5-1`), released **2026-09-01** — a point release on Claude Fable 5, which launched **2026-06-09**. Anthropic released it simultaneously with **Claude Mythos 5.1**, which is **the same underlying model with different, more permissive safety safeguards** (Mythos 5.1 is trusted-access only). This matters for every benchmark below.
- **Short description:** Anthropic's top-end model, and largely an *economic* release rather than a capability one. Base input/output pricing is unchanged from Fable 5; the substantive change is a **75% cut to cache reads, from $1.00 to $0.25 per MTok**, which Anthropic says is where most of its claimed **25–45% cost savings** come from, with the high end tied to "highly agentic" workloads that hit the cache constantly. There is also a **breaking change to forced tool use** and a mid-conversation effort control.
- **Provider / access:** Claude API, Claude products (Code, Cowork, claude.ai), AWS Bedrock, Google Cloud, Microsoft Azure. Generally available. Companion **Enterprise Frontier Safeguards** were built with 100+ customers across financial services, healthcare, manufacturing, telecom, law, retail and government, in partnership with AWS, Google Cloud and Microsoft Azure, rolling out in phases from autumn 2026 across Claude Code, Claude Enterprise, the Claude Platform, Bedrock, Google's Agent Platform and Microsoft Foundry. Until general availability, eligible enterprise customers can already run Fable 5.1 under a **standard zero-data-retention policy**.
- **Release / knowledge:** released **2026-09-01**. **Reliable knowledge cutoff June 2026.**
- **IDs:** `claude-fable-5-1`.
- **Context window:** **1,000,000 tokens (default and maximum)**, **128,000 max output**. Important billing property: **the 1M window is billed at standard per-token rates across its full length — a 900K-token request costs the same per token as a 9K-token one, with no long-context premium.** This is a meaningful contrast to GPT-6 Astra, where rates double above 272K.
- **Modalities:** **text and images in, text out.** Puter additionally lists PDF input. **No audio or video input documented** — the same structural limit as the rest of the Claude line.
- **Thinking:** **adaptive, always on.** Default effort is **high in Claude Code** and **medium in Claude Cowork and on claude.ai**, and — a real usability change — **effort can be adjusted mid-conversation without restarting the session.**
- **Pricing (as of 2026-09-28), per 1M:** **$10.00 input / $50.00 output (both unchanged from Fable 5); $0.25 cache read (down 75% from $1.00)**. New cache-write tiers: **$12.50 (5-minute)** and **$20.00 (1-hour)**. **Batch API 50% off base: $5 in / $25 out.** Anthropic's pricing table carries a footnote that cache hits and refreshes on Fable 5.1 and Mythos 5.1 are priced at **0.025×** rather than the 0.1× that every other Claude model uses.
- **Architecture:** **proprietary / closed weights.** No parameter count.
- **Critical cost caveat — the tokenizer:** Fable 5.1 uses the **tokenizer introduced with Claude Opus 4.7, which produces roughly 30% more tokens for the same text** than the pre-4.7 tokenizer. A 75% cache-read cut is real, but it is levied on a token count inflated by ~30% versus the previous generation. Both facts are true and they work against each other.

### Raw benchmarks found

**Anthropic's published launch comparison table:**

| Benchmark | Fable 5.1 | Fable 5 | Opus 5 | GPT-5.6 Sol |
|---|---|---|---|---|
| Terminal-Bench-Science 0.1 (research) | **52.6%** | 24.7% | 29.0% | 22.4% |
| Terminal-Bench 4.0 (agentic coding) | **55.8%** | 42.0% | 52.3% | 37.3% |
| AutomationBench | **31.4%** | 17.1% | 26.9% | 19.6% |
| OSWorld 2.0 (partial) | **77.9%** | 72.9% | 75.4% | — |
| OSWorld 2.0 (strict) | **41.7%** | 36.1% | 39.6% | — |
| Humanity's Last Exam (no tools) | **60.9%** | 57.8% | 56.6% | — |
| CursorBench 3.2.0 | **73.4%** | 70.5% | 70.0% | 67.2% |
| GDPval-AA v2 (raw knowledge-work score) | **1853** | 1723 | 1824 | — |

- **Humanity's Last Exam (with tools): 65.0%** (tech-insider's copy of the table) versus Fable 5 at 63.8% and Opus 5 at 63.6%. Both the no-tools and with-tools conditions are published, and the no-tools figure is the one in the canonical table.
- **Standard-error caveat, stated by Anthropic's own coverage:** Terminal-Bench-Science 0.1 carries a wide standard error, **on the order of 3.5 to 4.5 points per model**, so the 52.6% lead should be read as "directionally large" rather than precise to a decimal.
- **Safeguard sensitivity, and it is large:** run with **Mythos 5.1's more permissive safeguards on the identical underlying model**, Terminal-Bench 4.0 posts **60.9% — five points above Fable 5.1**. For reference, **Claude Opus 5.5 posts 66.4%** on the same benchmark. So roughly 5 points of Fable 5.1's TB4 score is a safety-policy choice, not a capability limit, and the ceiling for these weights is above anything Fable 5.1 itself demonstrates.

Coding:

- **SWE-bench Pro: 81.2%** — ahead of Fable 5 (80%), Mythos 5 (80.3%) and MiniMax M3 (59%). **This is the highest SWE-bench Pro score found anywhere in this dataset**, ahead of Claude Opus 4.8's 69.2%.
- **Claude Fable 5 (not 5.1) posts SWE-bench Verified 0.950** on llm-stats' leaderboard — **#1 of 48 models**. Lineage, not a 5.1 figure, and it is recorded as such.
- Terminal-Bench 4.0 55.8% and CursorBench 3.2.0 73.4% (above).
- SWE-bench Verified, LiveCodeBench, DeepSWE v1.1, Vibe Code: **no verified public score found for Fable 5.1 specifically.**

Agent / tool use:

- Terminal-Bench 4.0 55.8%; **AutomationBench 31.4%**, the best in Anthropic's table; **OSWorld 2.0 77.9% partial / 41.7% strict**; CursorBench 3.2.0 73.4%; Terminal-Bench-Science 0.1 52.6%; GDPval-AA v2 1853
- For lineage: **Claude Fable 5** scores Terminal-Bench 2.0 84.3%, **OSWorld-Verified 85%**, agentic lane **84.6** on BenchLM
- BrowseComp, Toolathlon, MCP Atlas, Claw-Eval: **no verified public score found** for Fable 5.1

BenchLM composite:

- **82.76–82.95, "Estimated", public rank #1** — but with a **90% interval of 71.3–94.5**, which is a very wide band. A #1 rank inside a 71–95 confidence interval is not a #1 result, and it is flagged here so the ranking is not over-read.

Speed / latency:

- Puter measures **70 output tokens/s** and **142.27 s time to first token**. Both are Puter-endpoint figures rather than first-party Anthropic numbers, and the 142 s TTFT should be treated as characteristic of a high-effort Fable-tier reasoning call on a reseller rather than as a model constant.

### Normalized scores (1–100)

- **Tool use: 89/100.** Down 1. **AutomationBench 31.4%** is the best in Anthropic's own table (Opus 5 26.9%, Sol 19.6%), **OSWorld 2.0 at 77.9% partial and 41.7% strict** leads its comparison set on both conditions, **CursorBench 3.2.0 73.4%** leads, and **Terminal-Bench-Science 0.1 at 52.6% more than doubles Fable 5's 24.7% and beats Opus 5's 29.0%** — though that last gap carries a 3.5–4.5 point standard error and is explicitly directional. Held at 89 rather than higher because **Terminal-Bench 4.0 at 55.8% now sits behind Claude Opus 5.5's 66.4%** on the same benchmark, and because **Mythos 5.1's permissive safeguards yield 60.9% on identical weights** — roughly 5 points of the shipped score is a safety-policy choice, which caps what the model itself is credited with.
- **Reasoning: 90/100.** Held. **Humanity's Last Exam 60.9% without tools and 65.0% with tools** — both leading Anthropic's own table — plus **GDPval-AA v2 at 1853**, the highest raw knowledge-work score recorded in this batch. Solid frontier reasoning on professional and multidisciplinary knowledge. Not higher because there is **no GPQA Diamond, CritPt, ARC-AGI or FrontierMath figure published** for this checkpoint, and because the sibling Opus 5.5 is now Anthropic's flagship at a fraction of the price with a higher TB4 score.
- **Context window: 90/100.** Up 5. **1,000,000 default and maximum, 128,000 max output**, and critically the **whole window bills at standard per-token rates with no long-context premium** — a 900K request costs the same per token as a 9K one. For a model aimed at long-horizon agentic work, that is arguably more valuable than raw window size, and it is a direct structural advantage over GPT-6 Astra's 2× multiplier above 272K. Held below the top band because **no MRCR, RULER or needle-in-a-haystack result has been published**, so the window remains documented rather than measured.
- **Multimodal: 78/100.** Down 8, and the largest correction in this report. The confirmed modality set is **text and images in, text out, with no audio or video documented** — Puter's PDF listing is the only extension and it is uncorroborated. More importantly, **BenchLM records Fable 5.1's multimodal lane as "Not measured" with zero rankable rows**, while reporting Fable 5's multimodal lane at only **57.9** (below Qwen3.5-122B-A10B's 77.2). BenchLM's 93.5 for Claude Mythos 5 on the same family points to a **coverage artifact rather than a capability difference** — one row each, different rows — and is explicitly *not* treated here as evidence that Fable 5.1 is weak at vision. The honest position: multimodal is unmeasured for this checkpoint, the declared modality set is the narrowest of any top-ranked model here, and neither Gemini's speech/video input nor the Muse Spark family's video input is matched. 78 reflects "plausible, well-likely competent, entirely undocumented" rather than any measured deficiency.
- **Coding: 93/100.** Up 1, and the strongest dimension. **SWE-bench Pro 81.2% is the best score on that benchmark anywhere in this dataset**, clearing Mythos 5 (80.3%), Fable 5 (80%) and Opus 4.8 (69.2%). **Terminal-Bench 4.0 55.8%** leads Anthropic's table, and **CursorBench 3.2.0 73.4%** leads it. Held at 93 because the 81.2% is single-sourced, because **SWE-bench Verified, LiveCodeBench, DeepSWE and Vibe Code are all unverified** for 5.1, and because Claude Opus 5.5 now posts a higher Terminal-Bench 4.0 at a third of the price.
- **Cost efficiency: 66/100.** Up 6. The gain is well-earned: **cache reads at $0.25 are 4× cheaper than Fable 5's $1.00 and 2.5% of the $10 input rate**, and because cache reads dominate agentic and coding costs, Anthropic's claimed **25–45% real-world saving** is credible for cache-heavy workloads. **Batch API at $5/$25 (50% off)** adds a second real lever, and the mid-conversation effort control lets a caller spend `high` only where it matters. Two things prevent a higher score. First, **base input and output pricing did not move at all — $10/$50 is among the most expensive lists in this dataset** (Astra is $10/$50, Opus 5.5 is $4/$20), so a workload that does not cache sees zero benefit. Second, and easy to miss: **Fable 5.1 uses the Opus 4.7 tokenizer, which produces roughly 30% more tokens for the same text.** A 75% cut on an inflated token count is a materially smaller saving than it appears, and token-count inflation is invisible on the price sheet.
- **Overall Score: 88.0/100.** Half-up mean of the five quality dims: (89 + 90 + 90 + 78 + 93) / 5 = 88.0. Best fit: **the best pure coding model in this dataset by SWE-bench Pro, with the best long-context *billing* terms of any 1M-window model, and a 4× cache-read cut that makes it the cheapest Fable-tier agent to run at volume provided the workload caches.** The trade-offs: **$50/M output is the joint-highest price here and unchanged from the prior generation**, the ~30% tokenizer inflation quietly eats into the caching win, multimodal is unmeasured with no audio or video, and Anthropic's own Claude Opus 5.5 — at $4/$20 — now beats it on Terminal-Bench 4.0 while matching it on most tasks. Fable 5.1 is the choice when SWE-bench Pro score is the objective; Opus 5.5 is the choice when the budget is.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Anthropic's Fable 5.1 and Mythos 5.1 launch comparison table as reproduced by codersera, ayautomate and tech-insider, BenchLM comparison pages `claude-fable-5-1-vs-claude-mythos-5`, `claude-fable-5-1-vs-minimax-m3`, `claude-fable-5-1-vs-gpt-5-1` and `claude-fable-vs-qwen3-5-122b-a10b`, platform.claude.com pricing, Puter developer page, llm-stats SWE-bench Verified leaderboard). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 89 → **88.0**, driven by one large correction and two moderate upgrades. **Multimodal 86 → 78** is the correction: BenchLM records Fable 5.1's multimodal lane as **"Not measured" with zero rankable rows**, the confirmed modality set is **text and image only with no audio or video**, and no vision benchmark exists for this checkpoint. **Context 85 → 90** on the newly surfaced billing property that **the full 1M window bills at standard rates with no long-context premium**, which matters more for long-horizon agents than window size alone. **Cost 60 → 66** on the **75% cache-read cut to $0.25** plus the 50%-off Batch API — tempered, and this is the substantive analytical point of the re-run, by the **Opus 4.7 tokenizer's ~30% token inflation**, which silently offsets a large share of the caching gain. Tool use 90 → 89 and Coding 92 → 93 on the SWE-bench Pro 81.2% figure, which is the best result in the dataset and moves Coding rather than Tool use.
- **Conflicts and misattribution guards recorded rather than smoothed over:** (1) **Puter's page contains misattributed data** — its "SWE-bench Pro 63.2%", "Terminal-Bench 2.1 80.4%" and "OSWorld-Verified 81.2%" figures are **Claude Sonnet 4.6's** numbers (it explicitly compares them to Sonnet 4.6's 58.1%, 67.0% and 78.5%), presented as Fable 5.1's. None are used here; the 81.2% SWE-bench Pro figure is taken from BenchLM, which three separate pages corroborate. (2) **SWE-bench Verified 0.950 is Claude Fable 5, not 5.1**, per llm-stats; recorded as lineage only. (3) **HLE appears in two conditions** — 60.9% without tools (canonical table) and 65.0% with tools — and both are reported rather than one being silently chosen. (4) **BenchLM's #1 rank carries a 71.3–94.5 90% interval**; a #1 inside that band is not treated as a #1 result. (5) **Mythos 5.1 is the same weights with different safeguards** and posts TB4 60.9% versus Fable 5.1's 55.8%, so ~5 points of the shipped score is a policy choice, not a capability ceiling.
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.1.md`, using the same headings.
