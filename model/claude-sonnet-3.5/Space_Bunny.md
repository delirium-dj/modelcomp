# Claude Sonnet 3.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-3-5-sonnet-20241022`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (this report scores the final `claude-3-5-sonnet-20241022` checkpoint; the original 2024-06-20 release is called out where its numbers differ)
- **Short description:** Anthropic's mid-2024 mainstream "frontier-adjacent" Sonnet — the model that set the price/performance reference for a whole generation of coding assistants and was the first Claude with computer use (public beta, October 2024). By 2026 it is fully superseded: Claude 3.7 Sonnet beat it on all five shared benchmarks, and the 3.5 line is no longer offered on OpenCode Zen. It remains relevant as the historical baseline every newer mid-tier model is measured against. Not a variant/alias of another entry in this comparison — though it is the direct predecessor of the `claude-sonnet-4` line that follows it.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com/v1/messages`), model ID **`claude-3-5-sonnet-20241022`** (also `claude-3-5-sonnet-latest` while it existed); AWS Bedrock and Google Cloud Vertex AI carried the same weights. Anthropic's native **Messages API**, not Chat Completions — an OpenAI-compatible shim existed but the canonical surface is Messages with tool-use blocks and computer-use tool versions. **No OpenCode Zen entry**: checked against the current Zen model and pricing tables on 2026-10-01, the 3.5 line is absent entirely (Zen's deprecation table separately records Claude Sonnet 4 as retired 2026-06-15, Claude Opus 4.1 on 2026-08-05).
- **Release / knowledge:** original 2024-06-20; upgraded checkpoint 2024-10-22. **Knowledge cutoff April 2024** (Anthropic system card). Roughly two and a half years stale as of this report.
- **IDs:** `claude-3-5-sonnet-20241022` (Anthropic / Bedrock / Vertex), `anthropic/claude-3-5-sonnet` (aggregator routing form). No Free ID anywhere.
- **Context window:** **200,000 tokens total, 8,192 maximum output** — Anthropic's documented limits for this checkpoint (Puter and Bedrock/Vertex provider tables both list 200K in / 200K context with an 8K output cap). Note: the curated `meta.json` for this entry says "64K max output", which belongs to the later 3.7/4 generation, not to 3.5 Sonnet — the 8,192-token cap is the verified one.
- **Modalities:** **text, image and PDF in; text out**; extended-thinking-free (no reasoning mode — non-reasoning by construction); tool use / function calling (system tools); **computer use (public beta, added 2024-10-22)**; prompt caching; streaming. No audio or video input.
- **Pricing (as of 2026-10-01):** **$3.00 in / $15.00 out per 1M** on Anthropic, Bedrock and Vertex (Bedrock/Vertex tables both $3.00/$15.00; OpenRouter lists the same). Prompt caching cuts input cost; batch processing halves both. Paid — there has never been a Free tier.
- **Architecture:** **proprietary** — dense transformer, parameter count and layer configuration undisclosed; ASL-2 safety level.

### Raw benchmarks found

Primary source for the Oct '24 checkpoint: Anthropic, *Model Card Addendum: Claude 3.5 Haiku and Upgraded Claude 3.5 Sonnet* (2024-10-22). Original 2024-06-20 checkpoint: Anthropic, *Claude 3.5 Sonnet Model Card Addendum* (2024-06-20). Aggregated figures are labelled as such — aggregator column orderings mix the two checkpoints and are not always reliable.

Agent / tool use:

- SWE-bench Verified: **49.0%** pass@1 (Anthropic model card, 2024-10) — reported as state of the art at the time against a 45.2% leaderboard best. Same table: Claude 3.5 Haiku 40.6%, original Claude 3.5 Sonnet **33.4%**, Claude 3 Opus 22.2%, Claude 3 Haiku 7.2%.
- TAU-bench, pass@1: **Retail 69.2% / Airline 46.0%** (2024-10). Original checkpoint: Retail 62.6% / Airline 36.0%; Claude 3.5 Haiku 51.0% / 22.8%.
- OSWorld (computer use, screenshot-only input): **14.9%** average success rate (2024-10) — Anthropic called it state of the art, and it was still far from a reliable digital worker; the beta's failure modes (drag, scroll, zoom) were documented publicly.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (Terminal-Bench 2.1 postdates this model; the 14.9% OSWorld figure is the only computer-use row and it is not OSWorld-Verified)
- Aggregated trackers: BenchLM lists a "Tool use" index of **8.6 (#129)** on only 2 evals — noted as thin, not load-bearing.

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (0-shot CoT, 2024-10 card). Original checkpoint: **59.4%**.
- MMLU: **90.5%** (5-shot CoT) / **88.7%** (5-shot) (2024-10 card).
- Aggregated: MMLU-Pro **73.0%**, IFEval **86.0%**, BBH **93.1%**, SimpleQA **28.9%**, TruthfulQA **84.2%**, MT-Bench **9.1**, AlpacaEval 2.0 **52.4%**, Chatbot Arena ELO **1268**.
- Math: MATH **83.5%** (original card, 3-shot), GSM8K **96.4%** (original card, 0-shot CoT); aggregated MATH 78.3%, GSM8K 91.0%, **AIME 2025 23.0%**.
- ARC-AGI: **15.0%** — the weakest signal in the set and a direct read on genuine multi-step reasoning.
- HLE / CritPt / LCR / MLCR / Omniscience Accuracy / Hallucination Rate: no verified public score found.
- Artificial Analysis Intelligence Index: **10** (estimated) for "Claude 3.5 Sonnet (Oct '24)" — https://artificialanalysis.ai/models/comparisons/claude-3-5-haiku-vs-claude-35-sonnet; AA's v4.1.1 index is dominated by benchmarks that postdate this model, so treat the 10 as a "how far the field has moved" datapoint more than a capability verdict.
- LLM Stats composite: **19.4 (#189)**, Reasoning index 20.4 (#171).

Coding:

- SWE-bench Verified: **49.0%** (see above; also the single row BenchLM carries for this model, coding category 49.0).
- HumanEval: **92.0%** (0-shot CoT, original card); aggregated HumanEval+ **81.7%**.
- Anthropic internal agentic coding evaluation: **64%** solved vs 38% for Claude 3 Opus (original 2024-06 card; internal and not independently runnable).
- LiveCodeBench: **38.0%** (aggregated, livecodebench).
- SWE-bench Pro / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found.
- LLM Stats coding index: **11.6 (#141)** on 2 evals — thin, noted not load-bearing.

Long context:

- **RULER 89.5%** (aggregated, listed at the 200K window) — the best long-context evidence available for this checkpoint.
- No MRCR, GraphWalks, LCR or LongBench v2 row; AA-LCR is part of AA's v4.1.1 index but no standalone number is published.

Multimodal (vision):

- MMMU (validation): **70.4%** (2024-10 card); original checkpoint **68.3%**.
- MathVista (testmini, Math): **67.7%** — Anthropic reported state of the art at release; original card.
- AI2D (test): **94.7%**, ChartQA (test, relaxed accuracy): **90.8%**, DocVQA: **95.2%**, OCRBench: **788** — all reported state of the art in the original 2024-06 card.
- Vision was a headline strength at release: 4 of 5 vision benchmarks ahead of GPT-4o and Gemini 1.5 Pro (The Verge, 2024-06-20).
- Aggregated multimodal index: 18.2 (#68, 5 evals).

### Normalized scores (1–100)

Bands per `model-comparison.md`. Scored against the **2026-10-01** field, not against the October 2024 field — that gap is the whole story of this entry, and it is why a model that was state of the art two years ago lands in the mid-50s to low-80s rather than at the top.

- **Tool use: 62/100.** TAU-bench Retail 69.2% and Airline 46.0% are respectable multi-step simulated-user results and SWE-bench Verified 49.0% shows real GitHub-issue-level agentic work. That places it in the methodology's mid band (50-70). It cannot clear into the frontier band because computer use was the weak link: **OSWorld 14.9%** (screenshot-only, public beta) means the model could not actually operate a desktop, and there is no Terminal-Bench 2.1, Tau3-Banking or GDPval-AA row to show modern agentic reliability. No Claw-Eval was found — noted N/A, no invented substitute.
- **Reasoning: 62/100.** GPQA Diamond 65.0% and MMLU 90.5% put it at the top of the methodology's mid band (GPQA 60-80% → 55-65). Above that band it fails on every frontier anchor: GPQA 90%+, HLE 40%+, an Intelligence Index of 60+ — its AA Index is **10**. AIME 2025 at **23.0%** and ARC-AGI at **15.0%** confirm the ceiling; this is strong 2024 pattern-matching, not deep multi-step deduction. IFEval 86.0% and MMLU-Pro 73.0% keep it from going lower.
- **Context window: 71/100.** 200,000 tokens is the exact anchor the methodology names for this tier (200K = 70; band 200K-500K spans 65-84). **RULER 89.5%** is genuinely good measured retention at that length and lifts it a point above the bare mapping. It stays far below the 500K-1M band (85-94) and the 1M band (95-100) because the window is hard-capped at 200K. Caveat per methodology, not separately scored: max output is only **8,192 tokens**, which badly constrains long generations.
- **Multimodal: 82/100.** Text, image **and PDF** in with text out puts it in the methodology's 75-90 band (PDF input is what lifts it above the plain "+image in = 60-70" band), and the vision numbers justify the upper half: DocVQA 95.2%, AI2D 94.7%, ChartQA 90.8%, MMMU 70.4%, MathVista 67.7%, OCRBench 788. It stops below the 90-100 top band because there is no audio input, no video input and no non-text output.
- **Coding: 58/100.** This is the dimension that has aged worst. SWE-bench Verified **49.0%** and LiveCodeBench **38.0%** both sit *below* the methodology's mid-band example (LiveCode ~80% with weak Vibe/SciCode → 65-75), and the internal agentic-coding figure of 64% is not independently runnable. HumanEval 92.0% / HumanEval+ 81.7% measure function-level synthesis, not repository work, and are the reason this is 58 rather than 45. Against the frontier band (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+) there is no overlap.
- **Cost efficiency: 60/100.** $3.00 in / $15.00 out per 1M maps to the methodology's "$3/$15 = ~60" almost exactly. No adjustment in either direction: prompt caching and batch discounts exist but do not change the list price, and there is no Free tier (Zen never carried a 3.5 entry). For its 2026 capability level this is poor value — cheaper current models outperform it — but cost efficiency is scored on the price point, not the value ratio.
- **Overall Score: 67/100.** Half-up mean of the five quality dims — (62 + 62 + 71 + 82 + 58) / 5 = **67.0 → 67**. Best fit: a historical reference point and, at $3/$15 with a 200K window and genuinely strong document/chart/diagram vision, a still-workable budget pick for long-document analysis where image and PDF comprehension matter more than agentic coding. For anything else in 2026 it is a bad buy: Claude 3.7 Sonnet already beat it on all five shared benchmarks, and current Sonnet/Opus, GPT-6, Gemini 3.x and Kimi K3 are far ahead on coding, reasoning and context at comparable or better prices.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research (Anthropic's 2024-06-20 Claude 3.5 Sonnet model card addendum and 2024-10-22 Claude 3.5 Haiku / upgraded Claude 3.5 Sonnet addendum as primary sources, Artificial Analysis and BenchLM comparison pages, LLM Stats and Serenities AI aggregators, Bedrock/Vertex/Puter provider spec tables, The Verge launch coverage, OpenCode Zen docs model + pricing + deprecation tables); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.