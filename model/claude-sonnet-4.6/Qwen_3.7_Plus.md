# Claude Sonnet 4.6 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance non-reasoning model, released February 17, 2026, optimized for efficiency and complex coding tasks. Sits below Opus 4.6 in Anthropic's lineup. SWE-bench Verified 79.6% is strong. OSWorld 72.1% is solid for computer use. GPQA 89.9% is strong. HLE 49% (Anthropic) is competitive. τ²-bench 79.5% is solid. Terminal-Bench 2.0 59.1% is moderate. However, AA Intelligence Index 24.7 is low. AA-Omniscience Index -3.5% is negative. AA-Omniscience Hallucination Rate 68.5% is high. CritPt 0.9% is extremely low. BenchLM overall 55.41/100 (#63 of 889). Now superseded by Sonnet 5 and 5.5. 200K context window (smaller than Opus 4.6's 1M). Non-reasoning model (no extended thinking).
- **Provider / access:** Anthropic API; Claude.ai; AWS Bedrock; Google Cloud Vertex AI. No free tier (noFreeId: true).
- **Release / knowledge:** Released 2026-02-17; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-sonnet-4.6` (Anthropic API); `anthropic/claude-sonnet-4.6` (OpenRouter).
- **Context window:** 200,000 tokens (200K); output limit not specified in meta.json.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** Paid-tier pricing (meta.json does not specify exact rates; historically ~$3/$15 per 1M for Sonnet 4.6).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **79.5%** (AA — solid)
- OSWorld-Verified: **72.1%** (OSWorld leaderboard — strong computer use)
- Terminal-Bench 2.0: **59.1%** (Anthropic — moderate)
- Terminal-Bench 2.1 (Vals): **57.3%** (Vals AI)
- Claw-Eval: **67.8%** (Claw-Eval leaderboard)
- CyberGym: **65.2%** (CyberGym leaderboard)
- Gert Labs: **62.92%** (Gert Labs)
- OSWorld 2.0: **8.3%** (OSWorld 2.0 paper — low)
- JobBench: **36.9%** (JobBench paper — low)
- ApprenticeBench: **2%** (NeoCognition — extremely low)

Coding:

- SWE-bench Verified: **79.6%** (Anthropic — strong)
- SWE-bench (Vals): **77.4%** (Vals AI)
- LiveCodeBench (Vals): **82.1%** (Vals AI — strong)
- SWE-Rebench: **60.7%** (SWE-Rebench)
- React Native Evals: **80.6%** (React Native Evals — strong)
- Terminal-Bench 2.0: **59.1%** (Anthropic)
- Vibe Code Bench: **51.48%** (Vals)
- CursorBench 3.1: **48.8%** (Cursor)
- FrontierCode 1.1 Main: **24.3%** (Cognition — low)

Multimodal:

- CharXiv: **77.4%** (Anthropic)
- AA-MMMU-Pro: **70.6%** (AA)
- Design Arena Website: **1291** (OpenRouter)

Reasoning / knowledge:

- GPQA: **89.9%** (Anthropic — strong)
- GPQA Diamond (Vals): **85.6%** (Vals AI)
- HLE: **49%** (Anthropic — competitive)
- MMLU-Pro: **79.2%** (Anthropic) / **87.3%** (Vals AI)
- SuperGPQA: **95%** (Qwen comparison table)
- ARC-AGI-2: **58.3%** (ARC Prize)
- ARC-AGI-1: **86.0%** (ARC Prize)
- AA-LCR: **68.3%** (AA — solid long-context reasoning)
- AA Intelligence Index: **24.7** (AA — low)
- AA-HLE: **13.3%** (AA — very low; vs. Anthropic's 49% — massive discrepancy)
- AA-Omniscience Index: **-3.5%** (AA — negative)
- AA-Omniscience Accuracy: **38.6%** (AA)
- AA-Omniscience Hallucination Rate: **68.5%** (AA — high)
- CritPt: **0.9%** (AA — extremely low)
- FrontierMath v2 Tier 4: **8.3%** (Epoch AI — very low)
- FrontierMath v2 Tiers 1-3: **32.4%** (Epoch AI)
- AA-IFBench: **41.2%** (AA — low instruction following)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 79.5% is solid. OSWorld 72.1% is strong for computer use. Claw-Eval 67.8% is moderate. CyberGym 65.2% is moderate. Terminal-Bench 2.0 59.1% is moderate. However, ApprenticeBench 2% is extremely low, JobBench 36.9% is low, OSWorld 2.0 8.3% is very low (latest version), and Terminal-Bench 2.1 (Vals) 57.3% is only moderate. The agentic profile is mid-tier — below Opus 4.6 on most measures.
- **Reasoning: 42/100.** GPQA 89.9% is strong. HLE 49% (Anthropic) is competitive. ARC-AGI-2 58.3% is moderate. MMLU-Pro 79.2–87.3% is solid. However, AA Intelligence Index 24.7 is low. AA-HLE 13.3% is very low (massive discrepancy with Anthropic's 49%). CritPt 0.9% is extremely low. AA-Omniscience Index -3.5% is negative. FrontierMath v2 Tier 4 8.3% is very low. The reasoning profile is uneven: strong on vendor benchmarks but very weak on AA's independent evaluations.
- **Context window: 55/100.** 200K tokens — significantly smaller than Opus 4.6's 1M and many competitors. AA-LCR 68.3% is moderate for long-context reasoning. The 200K window is adequate for most tasks but limiting for long-document or long-horizon agentic work.
- **Multimodal: 58/100.** AA-MMMU-Pro 70.6% is moderate. CharXiv 77.4% is solid. Image input supported. The multimodal profile is adequate but trails Opus 4.6 and competing models on vision reasoning benchmarks.
- **Coding: 65/100.** SWE-bench Verified 79.6% is strong. LiveCodeBench 82.1% is strong. React Native Evals 80.6% is strong. SWE-bench (Vals) 77.4% is solid. However, FrontierCode 1.1 Main 24.3% is low. CursorBench 3.1 48.8% is moderate. Vibe Code Bench 51.48% is moderate. Terminal-Bench 2.0 59.1% is moderate. The coding profile is strong on SWE-bench family but weak on frontier-difficulty coding.
- **Cost efficiency: 60/100.** Paid-tier pricing (~$3/$15 per 1M estimated). Non-reasoning model means no hidden reasoning token costs. 200K context is limiting. For a mid-tier paid model, the cost-to-performance ratio is reasonable but not exceptional — newer models offer better value.
- **Overall Score: 55.6/100.** Mean of five quality dims: (58 + 42 + 55 + 58 + 65) / 5 = 55.6. Claude Sonnet 4.6 is Anthropic's mid-tier model from February 2026. Key strengths: SWE-bench Verified 79.6% (strong), LiveCodeBench 82.1% (strong), OSWorld 72.1% (strong computer use), GPQA 89.9% (strong), HLE 49% (competitive), τ²-bench 79.5% (solid), React Native Evals 80.6% (strong), non-reasoning model (no hidden token costs). Key weaknesses: AA Intelligence Index 24.7 (low), AA-Omniscience Index -3.5% (negative), AA-Omniscience Hallucination Rate 68.5% (high), CritPt 0.9% (extremely low), AA-HLE 13.3% (very low — massive discrepancy with vendor's 49%), 200K context (smaller than competitors), ApprenticeBench 2% (extremely low), FrontierCode 24.3% (low), FrontierMath v2 Tier 4 8.3% (very low), now superseded by Sonnet 5/5.5, BenchLM overall only 55.41/100. Best fit for: cost-effective coding tasks where SWE-bench performance matters, computer use automation (OSWorld 72.1%), teams wanting a non-reasoning model (predictable token costs), and mid-tier Anthropic deployments where Opus pricing is too high. Not ideal for: knowledge-intensive tasks (negative Omniscience, high hallucination rate), hardest reasoning challenges (CritPt 0.9%), long-context work (only 200K), teams needing latest model (superseded), or tasks where AA Intelligence Index matters.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcement, BenchLM, Artificial Analysis, Vals AI, ARC Prize, OSWorld leaderboard, Cognition FrontierCode, Epoch AI FrontierMath, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
