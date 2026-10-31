# Grok 4.5 — findings by GPT 6 Sol

- Source: SpaceXSI / xAI (`grok-4.5`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** Proprietary text-and-vision reasoning model jointly developed by SpaceXSI and Cursor for software engineering agents and professional work ([launch](https://x.ai/news/grok-4-5), [Cursor's training account](https://cursor.com/en-US/blog/grok-4-5)). Cursor's higher-priced fast serving variant and API reasoning-effort settings are not separate checkpoint identities.
- **Provider / access:** First-party `grok-4.5` on `https://api.x.ai/v1/responses` ([official sample](https://x.ai/news/grok-4-5)); OpenRouter `x-ai/grok-4.5` on Chat Completions ([route guide](https://openrouter.ai/x-ai/grok-4.5/llms.txt)). Official aliases `grok-4.5-latest` and `grok-build-latest` resolve to this model ([model page](https://docs.x.ai/docs/models/grok-4.5)). Launch-era free usage in Grok Build and Cursor was time-limited, not a permanently free API.
- **Release / knowledge:** SpaceXSI's public launch is **July 16, 2026**; Vals' first evaluation update is dated July 8, so pre-launch testing existed ([release](https://x.ai/news/grok-4-5), [Vals update](https://www.vals.ai/models/grok_grok-4.5)). Knowledge cutoff not disclosed.
- **IDs:** `grok-4.5` first party; `x-ai/grok-4.5` via OpenRouter. `low`/`medium`/`high`/`xhigh` are effort settings, not new models.
- **Context window:** **500,000 combined tokens** ([first-party specs](https://docs.x.ai/docs/models/grok-4.5), [independent Vals profile](https://www.vals.ai/models/grok_grok-4.5)); Vals lists a 500K max-output field, but no public near-limit output or retrieval result was verified.
- **Modalities:** Text and image input, text output, reasoning, function calling and structured outputs; no native audio or video on this model ID ([official specs](https://docs.x.ai/docs/models/grok-4.5)).
- **Pricing (as of 2026-10-31):** **$2 input / $6 output / $0.30 cached input per million** below 200K prompt tokens, jumping to **$4 / $12 / $0.60** for a request whose prompt reaches 200K; the higher rate applies to all its tokens. Batch API discounts standard rates by 20% ([official price table](https://docs.x.ai/docs/models/grok-4.5)). Cursor's $4/$18 fast variant is a serving tier, not another checkpoint ([Cursor](https://cursor.com/en-US/blog/grok-4-5)).
- **Architecture:** Proprietary, unpublished size. Cursor identifies a **mixture of experts** jointly trained with SpaceXSI; no independently verifiable parameter count or public weights ([Cursor](https://cursor.com/en-US/blog/grok-4-5)).

### Raw benchmarks found

Agent / tool use:

- Vendor's July [launch benchmark chart](https://x.ai/news/grok-4-5) reports **Terminal-Bench 2.1 83.3%**. [Vals' launch update](https://www.vals.ai/models/grok_grok-4.5) separately reported **67.8%** under its own harness; this is a consequential cross-harness disagreement, not an averageable same-protocol score. Vals' current profile reports **SkillsBench 66.03% ±4.60** (#2/35), **SRE Bench 0.76% ±0.54**, **Finance Agent v2 48.35% ±0.46**, **Legal Research 37.98% ±3.37** and **Terminal-Bench 4.0 8.59% ±1.34** ([Vals](https://www.vals.ai/models/grok_grok-4.5)); the last is a different, harder benchmark than TB2.1.
- Vals' current Index is **53.17%** over its current task mix, while its July post cites **51.53%** on the then-current suite; scores from different dates/suites are not interchangeable ([Vals](https://www.vals.ai/models/grok_grok-4.5)).

Reasoning / knowledge:

- [Vals](https://www.vals.ai/models/grok_grok-4.5) independently measured **GPQA Diamond 92.93% ±1.29**, **MMLU Pro 89.22% ±0.31** and **ProofBench v1.1 31.00% ±4.65**. [ARC Prize's verified high-effort test](https://arcprize.org/results/xai-grok-4-5): **ARC-AGI-1 85.7%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%**; medium effort scored the same 52.6% on ARC-AGI-2, so more effort is not a universal gain.
- [Artificial Analysis's current profile](https://artificialanalysis.ai/models/grok-4-5) has deprecated Grok 4.5 and shows **no current Intelligence Index score**; an old or third-party reprinted Index is not presented as a maintained v5 score.

Coding:

- [Vals](https://www.vals.ai/models/grok_grok-4.5) independently reports **SWE-bench 86.60% ±1.52**, **LiveCodeBench 87.35% ±0.96**, **Vibe Code Bench v1.1 69.00% ±4.48**, **Code Migration 36.60% ±4.14**, but **ProgramBench 0%** and **TB4.0 8.59%**. Its July announcement ranked SWE-bench #4 at that time; the present profile ranks it #13/88 after the peer set changed.
- [Vendor launch](https://x.ai/news/grok-4-5): **SWE-bench Pro 64.7%**, **DeepSWE 1.0 62.0%**, **DeepSWE 1.1 53%** and **SWE Marathon 29.0%**; the distinct DeepSWE harnesses and task sets explain why both numbers appear. [Cursor](https://cursor.com/en-US/blog/grok-4-5) warns that an earlier Cursor codebase snapshot accidentally appeared in training, confounding CursorBench; that score is deliberately not used.

Long context / multimodal:

- [Vals](https://www.vals.ai/models/grok_grok-4.5) gives **MMMU Pro 61.79% ±1.17** (#83/93), materially less impressive than the reported coding metrics. [BenchLM's source-linked index](https://benchlm.ai/models/grok-4-5) cites an older **AA-MMMU-Pro 80.4%**; that historical AA figure was not recoverable as a maintained per-model measurement from [AA's current deprecated profile](https://artificialanalysis.ai/models/grok-4-5), so the independently visible Vals result receives more weight. No verified 500K-context MRCR/retrieval result found.

### Normalized scores (1–100)

- **Tool use: 83/100.** SkillsBench and the vendor TB2.1 chart indicate strong agents; Vals' lower TB2.1 rerun, low SRE and TB4.0 cap reliability.
- **Reasoning: 90/100.** Independent GPQA 92.93 and ARC-AGI-2 52.6 are strong, with specialized ProofBench 31 and ARC-AGI-3 0.3 as limits.
- **Context window: 85/100.** Advertised 500K tier, without a verified near-limit retrieval test.
- **Multimodal: 72/100.** Image and text input only, Vals MMMU Pro 61.79; no model-native audio/video or non-text output.
- **Coding: 90/100.** Independent SWE-bench 86.6 and LiveCodeBench 87.35, tempered by ProgramBench 0 and TB4.0 8.59.
- **Cost efficiency: 78/100.** $2/$6 is competitive at short prompts, but the ≥200K prompt-rate doubling changes large-context economics.
- **Overall Score: 84/100.** Half-up mean (83 + 90 + 85 + 72 + 90) / 5 = 84; strongest for coding agents after harness-specific validation rather than demanding multimodal or giant-context retrieval.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Exact-name public search and direct comparison of the vendor model specs/launch, Cursor's training caveat, Vals' independent current and historical tests, ARC Prize verified scores and Artificial Analysis's deprecated-status page; scores are normalized interpretations.
- Reference URLs:
  - [SpaceXSI Grok 4.5 launch and benchmark chart](https://x.ai/news/grok-4-5)
  - [SpaceXSI API specs and price tiers](https://docs.x.ai/docs/models/grok-4.5)
  - [Cursor Grok 4.5 training and evaluation caveat](https://cursor.com/en-US/blog/grok-4-5)
  - [Vals AI independent Grok 4.5 profile](https://www.vals.ai/models/grok_grok-4.5)
  - [ARC Prize verified Grok 4.5 results](https://arcprize.org/results/xai-grok-4-5)
  - [Artificial Analysis Grok 4.5 profile](https://artificialanalysis.ai/models/grok-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
