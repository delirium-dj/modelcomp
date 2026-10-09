# Claude 3.5 Sonnet — findings by Step 5 Preview

- Source: Anthropic (`claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (2024-06-20; upgraded in place 2024-10-22 as "3.5 Sonnet (new)")
- **Short description:** The breakout 2024 model — Anthropic's first Claude 3.5 release, which outperformed the much larger Claude 3 Opus on most benchmarks "with the speed and cost of our mid-tier model," set then-records on GPQA, MMLU and HumanEval, and introduced Artifacts on claude.ai. The October 2024 in-place upgrade added the public-beta computer-use API (screenshots in, mouse/keyboard actions out) and jumped SWE-bench Verified from 33.4% to 49.0% — the best publicly available score of its moment. **It is retired**: deprecated 2025-08-13 and shut down on the Claude API 2025-10-28; Anthropic recommends Claude Sonnet 4.6 as the replacement. Requests to either snapshot now fail.
- **Provider / access:** Was Anthropic API, Amazon Bedrock, Google Cloud Vertex AI; proprietary, API-only, no weights.
- **Release:** 2024-06-20 (original) / 2024-10-22 (upgrade). Knowledge cutoff April 2024. ASL-2.
- **Context window:** 200K tokens; max output 8,192 tokens.
- **Modalities:** Text, image and PDF in → text out; non-reasoning transformer; multilingual.
- **Pricing (last list price before retirement):** $3/M input, $15/M output (one-fifth of Claude 3 Opus at launch).
- **Long context:** ~95.4% average NIAH recall (91.4% at 200K) per the Claude 3 model card.

### Raw benchmarks found

Original (June 2024):

- GPQA Diamond (0-shot CoT): **59.4%**; MMLU (5-shot): **88.7%**; HumanEval (0-shot): **92.0%**; MMMU (vision): **68.3%**
- Internal agentic coding evaluation: **64% of problems solved** (vs 38% for Claude 3 Opus)
- MathVista, ChartQA, DocVQA, AI2D: state-of-the-art at launch (vision)

Upgrade (October 2024):

- SWE-bench Verified: **49.0%** (up from 33.4% — best publicly available at the time, beating o1-preview)
- OSWorld (computer use): **14.9%** screenshot-only (22.0% with more steps; next-best system 7.8%)
- τ-bench: **retail 69.2%**, airline 46.0%

Third-party historical aggregations (LLMLearner, llm-stats):

- MMLU 88.3 / MMLU-Pro 78.0; MATH 78.3 / MATH-500 78.0; AIME 2024 16.0; FrontierMath 2.1 (T4 0.0)
- HumanEval 93.7; Aider-Polyglot 51.6%; LiveCodeBench 38.7%; BBH 92.6
- GPQA Diamond 65.0 (normal, no tools); SimpleQA 28.4; SimpleBench 41.4
- Creative Writing 1,451 Elo; METR Time Horizons v1.1 29.6 min
- Benchmarks that did not exist at its launch (HLE, ARC-AGI, Terminal-Bench, MCP Atlas, GDPval, SWE-Pro): **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** τ-bench retail 69.2% and airline 46.0% (Oct 2024 upgrade) plus the first credible computer-use API (OSWorld 14.9%, 2× the next-best system of the day) were genuine mid-band agentic plumbing for 2024; nothing was ever run on the modern harnesses (TB2.1, MCP Atlas, GDPval), so it stays mid-band by 2026 standards.
- **Reasoning: 55/100.** MMLU 88.7%, MATH 78.3% and BBH 92.6% are the mid band; GPQA Diamond 59.4–65.0%, AIME 2024 16.0%, FrontierMath 2.1% and LCB 38.7% show a non-reasoning model well below the 2026 frontier (GPQA 90%+, HLE 40%+).
- **Context window: 74/100.** 200K is the 200K–500K band (65–84), near its top thanks to strong verified retrieval (~95.4% average NIAH recall, 91.4% at 200K) — the retrieval evidence Claude 3 family shipped, which later generations extended to 1M.
- **Multimodal: 68/100.** Text + image (+PDF) in → text out is the 60–70 band; MMMU 68.3% and launch-day SOTA vision (MathVista, ChartQA, DocVQA, AI2D) were strong for June 2024 but are mid-tier today.
- **Coding: 60/100.** SWE-bench Verified 49.0% (Oct 2024) was the best available then and HumanEval 92.0–93.7% is strong classic codegen, but LiveCodeBench 38.7% and Aider-Polyglot 51.6% (post-hoc runs) place it solidly mid-band against 2026 coding models.
- **Cost efficiency: 60/100.** $3/$15 per million tokens maps to the methodology's $3/$15 ≈ 60 point — a fifth of Opus pricing at launch, but 15–30× the cost of the open-weight models that now outperform it.
- **Overall Score: 63/100.** Best-fit recommendation: a historical landmark — the model that made Claude the mid-tier default in 2024–25 and the first with computer use; retired since October 2025, so it only matters as a migration source (Sonnet 4.6+ is the successor).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic launch posts, Claude 3 model card + 3.5 Sonnet addendum, AI/TLDR and LLMLearner historical aggregations, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_4_6.md`, using the same headings.
