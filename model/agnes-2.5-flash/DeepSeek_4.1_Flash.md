# Agnes 2.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Sapiens AI (Agnes AI) / Agnes 2.5 Flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Singapore-based Sapiens AI's (brand: Agnes AI) fast everyday coding-and-agent text model — the GA upgrade of Agnes 2.0 Flash, tuned for coding, tool calling, multi-turn dialogue and image understanding, and kept free on the API by the vendor. Distinct from the open-weight "Agnes-2.5-Flash-Base" (202.4B sparse MoE, 1024K context, Apache 2.0) and from the paid 2.5 Pro tier.
- **Provider / access:** Agnes AI API (`https://apihub.agnes-ai.com/v1`) with Chat Completions, Responses and Anthropic-compatible Messages endpoints; also resold via AIHubMix ($0.03/$0.15). No OpenCode Zen route.
- **Release / knowledge:** July 2026 (review coverage 2026-07-15); knowledge cutoff not published.
- **IDs:** `agnes-2.5-flash` (Agnes AI API); no Zen Free ID.
- **Context window:** 512K total; 65.5K max output (official docs).
- **Modalities:** text and image-URL input; text out; Thinking mode; tool calling; streaming.
- **Pricing (as of 2026-11-12):** free on Agnes AI (the vendor says Flash stays free rather than a limited promo; rate/plan quotas still apply, and free lanes can carry data-retention caveats — check account terms). List price if billed: $0.05 in / $0.15 out / $0.005 cached per 1M (Angel trial $0). AIHubMix route: $0.03/$0.15.
- **Architecture:** proprietary served checkpoint (details undisclosed); an open sparse-MoE Base model exists separately (202.4B params, Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.3%** (vendor-internal comparison chart, July 2026)
- SWE Atlas — QnA: **36.5** (vendor-internal; up from 15.8 on 2.0 Flash)
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Hands-on (qualitative, not scored): diagnosed a deliberately hidden gravity bug in an unfamiliar repo (~3 min to diagnose, ~12 s to patch), built a single-file app from spec, added a two-player mode across a multi-file project (we0.ai review)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found for this ID (the sibling 2.5 Pro Beta carries a ~35 AA Intelligence Index estimate)
- No Omniscience/hallucination numbers published

Coding:

- SWE-bench Verified: **75.6%** (vendor-internal)
- SWE-bench Pro: **50.4** (vendor-internal)
- SWE-bench Multilingual: **69.1** (vendor-internal)
- SWE Atlas — Refactoring **29.5** / Test Writing **27.5** (vendor-internal)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (512K window advertised; no MRCR/RULER table)

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor-internal Terminal-Bench 2.1 62.3% and a large SWE-Atlas QnA jump, with agent-workflow positioning and hands-on multi-file success; all numbers are company-reported and no independent agent evals exist.
- **Reasoning: 64/100.** No direct reasoning benchmarks for this ID; class evidence (SWE Atlas refactor/test tracks in the 27–30 range, weaker sibling positioning than 3.0 Flash) puts it in the modest-mid band — a coding utility, not a reasoning model.
- **Context window: 88/100.** 512K-token tier (500K–1M band) with 65.5K max output; no retrieval-depth test for the 95+ band.
- **Multimodal: 76/100.** Text plus image-URL input, text out; no video/audio input and no generation.
- **Coding: 74/100.** SWE-bench Verified 75.6% and TB2.1 62.3% (vendor) are solid mid-band results with strong hands-on demos, but they are internal numbers and the SWE Atlas refactor/test-writing scores remain low.
- **Cost efficiency: 100/100.** Free on the API by vendor policy (not a trial), with an inexpensive $0.03–0.05/$0.15 paid route behind it; quota limits and free-lane data terms are the practical caveats.
- **Overall Score: 75/100.** (73 + 64 + 88 + 76 + 74) / 5 = 75.0 — a zero-cost everyday coding model that covers routine repository work well; not a substitute for a reasoning flagship on hard tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-12
- Method: public internet research (official Agnes AI docs, we0.ai hands-on review with the vendor's internal coding-benchmark chart, modelbenchmark.io and AIHubMix listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI — Agnes 2.5 Flash official documentation](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [we0.ai — Agnes-2.5-Flash Review: A Free AI Coding Model Tested on Bug Fixing, App Building, and Multi-File Refactoring](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [modelbenchmark.io — Agnes 2.5 Flash: specs, pricing and lifecycle](https://modelbenchmark.io/models/agnes-2-5-flash)
  - [AIHubMix — Agnes 2.5 Flash model page](https://aihubmix.com/model/agnes-2.5-flash)
  - [Hugging Face — Agnes-AI/Agnes-2.5-Flash-Base (open base model)](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
