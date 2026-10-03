# Claude 3.5 Sonnet — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Claude 3.5 Sonnet
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's mid-2024 workhorse — the June 2024 original (`claude-3-5-sonnet-20240620`) and the October 2024 upgrade (`claude-3-5-sonnet-20241022`), which raised SWE-bench Verified from 33.4% to 49.0% (then a record, held for over a year) and added beta computer use.
- **Provider / access:** Anthropic — API, Amazon Bedrock, Google Vertex AI; was the default coding engine across GitHub Copilot, Cursor, and Cline in 2024-2025.
- **Release / knowledge:** 2024-06-20 (original) / 2024-10-22 (upgrade; Anthropic blog 2024-10-30 "Raising the bar on SWE-bench Verified"). Knowledge cutoff April 2024.
- **IDs:** `claude-3-5-sonnet-20240620`, `claude-3-5-sonnet-20241022`; folder `claude-sonnet-3.5`.
- **Context window:** 200,000 tokens.
- **Modalities:** Text and image in, text out; computer use (beta, Oct 2024+).
- **Pricing (as of 2026-10):** $3.00 / $15.00 per 1M input/output; prompt caching up to 90% input reduction; Batch API 50% off.
- **Architecture:** Not publicly disclosed (proprietary).

### Raw benchmarks found

**Vendor-reported (Anthropic model card / Oct 2024 blog):**
- SWE-bench Verified **49.0%** (original June model 33.4%; previous SOTA 45%) — "no model had crossed 50%" at the time; agent built around the model; Verified = 500 human-reviewed solvable problems.
- TAU-bench Airline **46.0%** (original 36.0%).
- OSWorld **14.9%** (inaugural computer-use beta).

**Third-party trackers (benchgen, AnotherWrapper, RankLLMs, AI Olympus — Sept 2026 snapshots):**
- GPQA Diamond **54.0%** and GPQA **59.4%** (AnotherWrapper, June-2024 snapshot); benchgen lists **GPQA Diamond 65.0%** citing the Oct model card — conflicting values, flagged (likely different snapshots/settings).
- HumanEval **93.7%**; MMLU **88.7%**.
- Terminal-Bench 2.1 **18.2%** (RankLLMs comparison table, Oct-2024 generation; Sonnet 4.6: 24.8%; Sonnet 5: 31.2%).
- RankLLMs progression: Claude 3.5 Sonnet (Oct 2024) SWE-bench 49.0% -> Sonnet 4.6 (2025) 58.4% -> Sonnet 5 (2026) 66.8%.
- AnotherWrapper comparisons (Sept 2026): vs GPT-4.5 — GPQA Diamond 54.0% vs 68.7%, SWE-bench 49% vs 38%; vs Grok 4.5 — GPQA Diamond 54.0% vs 93.4%, SWE-bench 49% vs 86.6%; leads Claude 3 Opus on 14/14 shared benchmarks.
- AI Olympus scaled scores (0-100, not raw %): GPQA 85.2, SWE-bench 75.2/48.6 (raw 48.6% conflicts with the vendor's 49.0% — rounding, flagged).

## Scores

- **Tool use: 50/100.** TAU-bench Airline 46.0%, OSWorld 14.9% (computer-use beta), SWE-bench agentic scaffold; no MCP-Atlas/Toolathlon era benchmarks captured.
- **Reasoning: 50/100.** GPQA Diamond 54.0-65.0% (conflicting snapshots), MMLU 88.7%; no HLE/AIME captured; mid-band for the 2026-10 frontier.
- **Context window: 70/100.** 200K tokens; no long-context retrieval benchmark captured.
- **Multimodal: 61/100.** Text and image in, text out, plus computer use (OSWorld 14.9%) — above the text-only floor but below modern native multimodal models.
- **Coding: 54/100.** SWE-bench Verified 49.0% (a 2024 record, now mid-tier), HumanEval 93.7%, TB 2.1 18.2%.
- **Cost efficiency: 58/100.** $3.00/$15.00 per 1M — the 2024-era mid price; by 2026-10 standards expensive for the measured capability (blended ~$9/M at 3:1).
- **Overall Score: 57.0/100.** Mean of Tool use 50, Reasoning 50, Context window 70, Multimodal 61, Coding 54 = 57.0.

> **Gap vs folder average (68.2): −11.2.** The folder average still reflects this model's 2024-2025 standing (SWE-bench record-holder, default coding engine). Anchored to the 2026-10 frontier per the methodology, its flagship row (SWE-bench Verified 49.0%) is now mid-tier, GPQA lands in the 50s, and TB 2.1 is 18.2% — the gap is the anchoring, not a dispute of its historical significance.

## Notes

- Verification trail: Anthropic model card (SWE-bench 49.0/33.4, TAU-bench 46.0/36.0, OSWorld 14.9), Anthropic blog "Raising the bar on SWE-bench Verified" (2024-10-30), benchgen (GPQA Diamond 65.0, HumanEval 93.7, MMLU 88.7, max output 8,192), AnotherWrapper (GPQA 59.4/Diamond 54.0, comparisons vs GPT-4.5/Grok 4.5/Claude 3 Opus), RankLLMs (TB 2.1 18.2%; generational progression), AI Olympus (scaled scores), pricing/caching/batch docs.
- Known conflicts: GPQA Diamond 54.0% (AnotherWrapper) vs 65.0% (benchgen citing the Oct model card); SWE-bench 48.6% (AI Olympus) vs 49.0% (vendor — rounding); AnotherWrapper's "Max Output Tokens 200K" vs benchgen's 8,192 (the 8,192 figure is consistent with Anthropic's documented 3.5 Sonnet limit).
- Open questions: which GPQA Diamond value corresponds to the Oct 2024 upgrade; full Oct-upgrade benchmark table (MMLU-Pro, MathVista).

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: archived Oct-2024 model card, independent replications of the SWE-bench 49.0% row.
