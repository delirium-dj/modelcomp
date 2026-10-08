# GPT-5.6 Luna — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna — the efficiency tier of OpenAI's GPT-5.6 family (GA 2026-07-09), sibling of GPT-5.6 Terra and GPT-5.6 Sol, not an alias of either.
- **Short description:** OpenAI's fastest and cheapest GPT-5.6 tier, aimed at high-volume inference (classification, extraction, routing) and low-latency production loops, with a reasoning ceiling deliberately capped below Terra and Sol; it is also the only GPT-5.6 tier on the consumer ChatGPT Free tier.
- **Provider / access:** OpenAI API, ChatGPT on all tiers including Free (rate-limited), Codex, Microsoft Copilot as an explicit selection, and gateway partners. OpenAI product conventions apply; the exact API surface (Responses vs Chat Completions) is not stated in the sources found. No OpenCode Zen Free ID.
- **Release / knowledge:** GA 2026-07-09 (HokAI vendor check, 19 Aug 2026); training data current through June 2026.
- **IDs:** `gpt-5.6-luna`. No Zen Free ID exists — the only free access is the consumer ChatGPT Free tier, which has no API ID in this scan.
- **Context window:** **conflicting records.** The curated entry for this folder states 1,050,000 in / 128K out and RankLLMs reports 1.1M; HokAI's vendor-page check reports only 200,000 in / 64,000 out. Scored below on the 1M-class record with the dissent flagged.
- **Modalities:** text + image in; text, tool calls and code out. No audio or video in/out. Reasoning effort none/low/medium/high — `xhigh`, `max` and `pro` stay reserved for Terra and Sol; no ultra multi-agent mode and no programmatic tool calling.
- **Pricing (as of 2026-09-20):** **conflicting records.** HokAI's vendor-page check: $1.00 in / $6.00 out per 1M, cached input $0.125 (90% discount), described as 20% of Sol's per-token price and 40% of Terra's, with no batch discount at launch (AA blended rate ≈$3.50/M, HokAI blended ≈$2.25/M). RankLLMs lists $0.31/1M blended, and the curated repo record states $0.20/$1.20. Paid API only.
- **Architecture:** proprietary. Shares the GPT-5.6 family architecture: token-efficiency improvements, prompt caching keyed to named breakpoints, reasoning persisted across turns, vision + text in. Latency ≈800 ms p50 / 3000 ms p99 (fastest in the family). Zero Data Retention eligible, US/EU data residency, SOC2 Type II / ISO 27001 / GDPR / HIPAA.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%** (RankLLMs verified panel — the single strongest figure found for this model, +2.1 pts over its frontier-top-10 average)
- GDPval-AA: **1166 Elo** (RankLLMs blind human-eval code arena — mid-tier, vs 1753 for Grok 4.6)
- OSWorld computer use: **46.0%**; BrowseComp: **44.0%** (RankLLMs)
- Tau3-Banking / Tau2-Bench / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **55.3%** (vendor-reported 26 Jun 2026; HokAI rank #43 of 44 peers whose median is 88.3%) — RankLLMs' panel shows 52.5%, consistent
- HLE: **14.2%** (vendor-reported 26 Jun 2026 — well below the 40%+ frontier reference)
- LiveBench: **52.4%** (vendor-reported); LMArena Elo **1340, rank #12** (independent, 12 Jul 2026)
- Artificial Analysis Intelligence Index: **45** (cited AA, 10 Jul 2026 — vs 61 for Grok 4.6)
- MATH-500: **50.2** (RankLLMs)
- ARC-AGI-2 / LCR / MLCR / CritPt / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **60.2%** (vendor-reported 26 Jun 2026; HokAI rank #25 of 28 peers whose median is 78.3%) — RankLLMs' panel shows 68.5% for the same benchmark, a conflict flagged but not resolvable from public pages
- Aider Polyglot: **62.1%** and HumanEval: **88.4%** (vendor-reported 26 Jun 2026)
- DeepSWE / LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Multimodal:

- Vision input is present but explicitly "not benchmarked against dedicated multimodal flagships" — no MMMU/MMMU-Pro or image score found, and no audio/video support.

Long context:

- No MRCR, RULER or GraphWalks retrieval score was found at either the 200K or the 1M-class window; effective long-context capability is therefore unverified, and the published window figures disagree by up to ~5×.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 82.5% is the strongest figure found and would alone suggest the high 80s, but GDPval-AA 1166 Elo, OSWorld 46.0% and BrowseComp 44.0% are mid-band, and Tau3/MCP-Atlas/Claw-Eval are entirely unpublished.
- **Reasoning: 58/100.** GPQA Diamond 55.3%, HLE 14.2%, MATH-500 50.2 and AA Intelligence Index 45 sit in the 55–65 mid band, softened only by LMArena #12; the efficiency tier is explicitly capped below Terra/Sol, so no higher score is defensible.
- **Context window: 95/100.** Scored on the 1M-class record the curated entry and RankLLMs both carry (1,050,000 in / 128K out), which is the floor of the ≥1M band; HokAI's vendor-page check reports 200K/64K, which would drop this to 70, and no retrieval measurement exists to justify 100.
- **Multimodal: 62/100.** Image input with text-only output occupies the image-only band, at the lower half because vision is admitted but not benchmarked and audio/video are unsupported.
- **Coding: 65/100.** SWE-bench Verified 60.2% (25th of 28 peers), Aider Polyglot 62.1% and HumanEval 88.4%; no DeepSWE, LiveCodeBench, SciCode or Vibe numbers exist, and the 68.5% SWE-bench figure on the other panel does not change the mid-band verdict.
- **Cost efficiency: 88/100.** The records span $0.20/$1.20 per 1M (curated) and $0.31 blended (RankLLMs) to $1.00/$6.00 with $0.125 cached input (vendor-page check) — a spread mapping to ~97 down to ~84 on the rubric; scored mid-range for a usable model that is 20% of Sol's per-token cost, docked for expensive output tokens and the absence of any batch discount at launch.
- **Overall Score: 70/100.** (70 + 58 + 95 + 62 + 65) / 5 = 70.0 → **70**. Best fit: high-throughput routing, classification and extraction, and cheap terminal-agent loops — not reasoning-heavy or multimodal work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — HokAI vendor-page-checked review (checked 19 Aug 2026) and RankLLMs verified panel (updated 2026-09-18), cross-checked against the curated record already stored for this folder; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
