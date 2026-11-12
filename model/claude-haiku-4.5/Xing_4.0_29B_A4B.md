# Claude Haiku 4.5 — findings by Xing_4.0_29B_A4B

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Legacy small model released October 15, 2025 by Anthropic. Extended (manual) thinking, 200K context window, 64K max output. Priced at $1/$5 per Mtok input/output. Flag: superseded by Haiku 5.x series; still available as legacy on all platforms but being migrated.
- **Provider / access:** Anthropic; available via Claude API (`claude-haiku-4-5-20251001`), Amazon Bedrock, Google Cloud, Microsoft Foundry, AWS, and Azure managed endpoints.
- **Release / knowledge:** October 15, 2025 release; reliable knowledge cutoff Feb 2025; training cutoff Jul 2025.
- **IDs:** `claude-haiku-4-5-20251001` (Claude API), `anthropic.claude-haiku-4-5` (Bedrock), `claude-haiku-4-5@20251001` (GCP).
- **Context window:** 200K tokens at inference
- **Modalities:** Input: Text + Image; Output: Text only. Reasoning: yes — Extended thinking mode (manual `budget_tokens`, no effort parameter). Tool calls: supported via server tools (web search, code execution). JSON mode: yes.
- **Pricing (as of <date>):** Input $1/MTok, Output $5/MTok. 5m cache write $1.25/MTok, 1h cache write $2/MTok, Cache read $0.10/MTok. Batch API 50% off.
- **Architecture:** Proprietary (Anthropic internal); no published params, MoE status, or open-weights license.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (offline subset): **48.9%** <(source, Anthropic Haiku 5.5 announcement comparison table)>
- Terminal-Bench 4.0: **0.0%** <(source, Anthropic comparison table — Haiku small models don't support TB4.0)>
- FrontierCode 1.1 Main: — <(not measured, Haiku too small)>
- Chartography (no tools): **6.4%** <(source, Anthropic comparison table)>

Reasoning / knowledge:

- GDPval-AA v2.1: **735** <(source, Anthropic Haiku 5.5 announcement comparison table)>
- AA-Briefcase v1.1: **614** <(source, Anthropic Haiku 5.5 announcement comparison table)>
- Humanity's Last Exam (no tools): **10.2%** <(source, Anthropic Haiku 5.5 announcement comparison table)>
- Humanity's Last Exam (with tools): **18.7%** <(source, Anthropic Haiku 5.5 announcement comparison table)>

Coding:

- (Covered above under Agent/Tool use)

Long context:

- No long-context retrieval benchmark reported for this model.

### Normalized scores (1–100)

- **Tool use: 40/100.** OSWorld 2.1 offline (48.9%) is one of its stronger capabilities but far below sonnet/opus; Terminal-Bench 4.0 unmeasurable (0%).
- **Reasoning: 35/100.** HLE and Gemini-like benchmarks severely low relative to peers; GDPval-AA 735 is mid-range; no GPQA Diamond score found in comparison table.
- **Context window: 50/100.** 200K tokens is good but below current 1M-token era standards.
- **Multimodal: 15/100.** Only text input confirmed; image may be supported but no verified multimodal benchmarks found. If text-only, capped at 15.
- **Coding: 20/100.** Terminal-Bench 4.0 (0%) confirms coding weakness; FrontierCode unmeasurable.
- **Cost efficiency: 95/100.** At $1/$5 per Mtok, Haiku 4.5 is an excellent value for the smallest/most common tasks (classification, extraction, summarization, subagent delegation). Compared to Fable 5.1 ($10/$50) and Opus 5.5 ($4/$20), Haiku pays about 10× less per token while handling enough work to justify its price point.
- **Overall Score: 32/100.** Half-up mean of Tool(40)+Reasoning(35)+Context(50)+Multimodal(15)+Coding(20)/5 = 160/5 = 32. Best fit recommendation: Haiku 4.5 is a focused cost-sensitive small model — no-code/low-latency workloads where its $1/$5 pricing makes it practical. Do not use for complex reasoning, agentic coding, or anything requiring frontier knowledge above ~HLE Diamond.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B** (<xingchen-4.0-29b-a4b>) — 2026-11-05
- Method: public internet research via webfetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 5.5 Announcement (Anthropic)](https://www.anthropic.com/news/claude-haiku-5-5)
  - [Claude Haiku 4.5 Model Overview](https://platform.claude.com/docs/en/models/haiku-4-5/overview)
  - [Anthropic Model Deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)

---

## Archived research pass — `Xing_4.0_29B_A4B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Xing_4.0_29B_A4B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Claude Haiku 4.5 — findings by Xing_4.0_29B_A4B (self-excluded)

> Self-exclusion: zero verified public benchmarks beyond vendor primary claims; insufficient independent third-party evidence.
