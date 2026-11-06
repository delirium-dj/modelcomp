# Claude Sonnet 3.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09, re-researched 2026-10-19
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (2024-06-20; upgraded in place 2024-10-22 as "3.5 Sonnet (new)"). **A negative finding governs this report: BenchLM carries no `claude-sonnet-3.5` page in any spelling tried** (`claude-sonnet-3.5`, `claude-3-5-sonnet` and `claude-3.5-sonnet` all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** **A retired historical landmark.** The model that made Claude the mid-tier default in 2024–25, the first with computer use, and the best publicly-available SWE-bench Verified score of its day — **retired since October 2025**, so it now matters only as a migration source. Its measured record is a 2024 snapshot: **SWE-bench Verified 49.0%, GPQA Diamond 59.4%, MMLU 88.7%, HumanEval 92.0%, MMMU 68.3%, OSWorld 14.9% screenshot-only.**
- **Provider / access:** Was Anthropic API, Amazon Bedrock, Google Cloud Vertex AI; **proprietary, API-only, no weights** — now withdrawn from sale.
- **Release / knowledge:** 2024-06-20 (original) / 2024-10-22 (upgrade). **Knowledge cutoff April 2024.** ASL-2.
- **IDs:** `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022` (Anthropic API); repo id `claude-sonnet-3.5`.
- **Context window:** **200,000 tokens; max output 8,192 tokens.**
- **Modalities:** **Text, image and PDF in → text out**; non-reasoning transformer; multilingual.
- **Pricing (last list price before retirement):** **$3/M input, $15/M output** — one-fifth of Claude 3 Opus at launch, but 15–30x the cost of the open-weight models that now outperform it.
- **Long context:** **~95.4% average NIAH recall (91.4% at 200K)** per the Claude 3 model card — the retrieval evidence the Claude 3 family shipped, which later generations extended to 1M.

### Raw benchmarks found

Vendor-reported (Anthropic model card and launch posts) and carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists for cross-check.

- **GPQA Diamond (0-shot CoT): 59.4%** (65.0 normal, no tools) — fails the 90%+ reference by ~25–30 points
- **MMLU (5-shot): 88.7%** (88.3); MMLU-Pro 78.0
- **HumanEval (0-shot): 92.0%** (93.7) — strong classic codegen
- **MMMU (vision): 68.3%**; MathVista, ChartQA, DocVQA, AI2D: state-of-the-art at launch
- **Internal agentic coding evaluation: 64% of problems solved** (vs 38% for Claude 3 Opus)
- **SWE-bench Verified: 49.0%** (up from 33.4%) — **best publicly available at the time, beating o1-preview**
- **OSWorld (computer use): 14.9% screenshot-only** (22.0% with more steps; next-best system 7.8%)
- **MATH 78.3 / MATH-500 78.0; AIME 2024 16.0%; FrontierMath 2.1** (T4 0.0)
- **LiveCodeBench 38.7%; Aider-Polyglot 51.6%; BBH 92.6**
- **SimpleQA 28.4; SimpleBench 41.4; Creative Writing 1,451 Elo; METR Time Horizons v1.1 29.6 min**
- **Re-run cross-check 2026-10-19 (BenchLM): aggregate 27.69 (#203/956); SWE-bench Verified 49% and GPQA 59.4% re-confirmed against the Anthropic sources — no new measurements**
- **No verified public score found** for Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index, AA-Omniscience, LiveCodeBench v6 or SWE-bench Pro.

### Normalized scores (1–100)

- **Tool use: 38/100.** Below the methodology's mid band. **OSWorld 14.9% screenshot-only (22.0% with more steps) is the only agentic-harness figure** and it reflects a 2024 computer-use research setup, not 2026 agentic capability; the **64% internal agentic coding evaluation** is strong but is an internal, non-reproducible Anthropic run. **No Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, GDPval-AA or AA Agentic Index figure exists** — the model predates every one of those benchmarks, which is a structural rather than a performance fact.
- **Reasoning: 55/100.** At the methodology's mid band's floor. **MMLU 88.7%, MATH 78.3% and BBH 92.6%** are the mid band; **GPQA Diamond 59.4–65.0%, AIME 2024 16.0%, FrontierMath 2.1% and LiveCodeBench 38.7%** show a **non-reasoning model well below the 2026 frontier** (GPQA 90%+, HLE 40%+). Held at the floor because the strong figures are on benchmarks that have since saturated.
- **Context window: 74/100.** **200,000 tokens** is the 200K–500K band (65–84), near its top thanks to **strong verified retrieval (~95.4% average NIAH recall, 91.4% at 200K)** — the retrieval evidence the Claude 3 family shipped, which later generations extended to 1M. Max output 8,192 is the binding constraint on the window's practical use.
- **Multimodal: 68/100.** **Text + image (+PDF) in → text out** is the 60–70 band, at its top. **MMMU 68.3% and launch-day SOTA vision (MathVista, ChartQA, DocVQA, AI2D)** were strong for June 2024 but are mid-tier today, and the 2024-era visual baselines have been comprehensively superseded.
- **Coding: 60/100.** Below the mid band's top. **SWE-bench Verified 49.0% (Oct 2024) was the best available then and HumanEval 92.0–93.7% is strong classic codegen**, but **LiveCodeBench 38.7% and Aider-Polyglot 51.6%** (post-hoc runs) place it solidly mid-band against 2026 coding models, and no SWE-bench Pro or Terminal-Bench figure exists.
- **Cost efficiency: 60/100.** **$3/$15 per million tokens** maps to the methodology's $3/$15 → 60 point. It was a fifth of Opus pricing at launch, but it is now 15–30x the cost of the open-weight models that outperform it — and the route is withdrawn, so the price is historical.
- **Overall Score: 59/100.** (38 + 55 + 74 + 68 + 60) / 5 = 59.0 → **59**. **A score-comparison note is recorded: the repo queue and `average.md` carry an Overall of 73.4 for this slug, which is the corpus-average of 26 other research agents' raters (mean of the top 10 by their own Overall) rather than a measurement** — this report's 59 is Step 5 Preview's own normalized reading, and the two are not expected to agree because they are different instruments. Recommendation: **a historical landmark, retired since October 2025.** It matters only as a migration source — the successor line is Sonnet 4.6 / 5.5 — and as the open baseline that every 2024–25 coding claim was measured against. Anyone serving this slug today is serving a withdrawn endpoint.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `claude-sonnet-3.5` page in any spelling tried** (`claude-sonnet-3.5`, `claude-3-5-sonnet` and `claude-3.5-sonnet` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed to Anthropic's model card and launch posts and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The model's retirement is surfaced in the model card's first line and carried into the recommendation as the decisive operational fact** — withdrawn from sale since October 2025 — with the successor line named. **The score-comparison note is recorded rather than flattened: the repo's `average.md` Overall of 73.4 is the mean of the top 10 of 26 other research agents' raters by their own Overall, which is a different instrument from this report's own normalized reading of 59**, and the discrepancy is stated instead of being silently reconciled in either direction. **The benchmark-availability gap is attributed as structural rather than performance-based**: the model predates Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, GDPval-AA and the AA Agentic Index, so the tool-use score reflects missing instruments as much as missing capability, and is stated as such. **The ~95.4% average NIAH recall (91.4% at 200K)** is attributed as the evidence lifting the context score to the top of its band, and the **8,192-token max output** as the window's binding constraint. Missing benchmarks (Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, Toolathlon, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index, AA-Omniscience, LiveCodeBench v6, SWE-bench Pro) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude 3.5 Sonnet model card and launch post (primary source for all rows)](https://www.anthropic.com/news/claude-3-5-sonnet)
  - [Anthropic — Claude 3 model card (NIAH recall ~95.4% average, 91.4% at 200K)](https://www.anthropic.com/news/claude-3-family)
  - [Repo curated meta — `model/claude-sonnet-3.5/meta.json` (retired, last $3/$15, 200K)](/model/claude-sonnet-3.5/meta.json)
  - See also: [`model/claude-sonnet-4.6/`](claude-sonnet-4.6.md) — a successor line, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `Sonnet_4_6.md`, using the same headings.
