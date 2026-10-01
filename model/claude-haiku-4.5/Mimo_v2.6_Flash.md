# Claude Haiku 4.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-haiku-4-5`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest, most cost-efficient model (2025-10-15), marketed as matching Claude Sonnet 4 on coding, computer use and agent tasks at ~1/3 the cost and >2x the speed; positioned for parallelized sub-agents and high-volume operations. Not a variant/alias of another entry.
- **Provider / access:** Anthropic Claude Platform Messages API (`https://api.anthropic.com/v1/messages`), plus Amazon Bedrock, Google Cloud Vertex AI and Microsoft Foundry; also in Claude Code and the Claude.ai apps. Chat-completions style (Messages API), not OpenAI Chat Completions.
- **Release / knowledge:** released 2025-10-15; knowledge cutoff July 2025 (Artificial Analysis model page).
- **IDs:** `claude-haiku-4-5` (API alias), `claude-haiku-4-5-20251001` (dated snapshot, BenchLM via Claude API pricing). **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 200,000 tokens input (Anthropic docs; BenchLM/LLMReference context rows agree). Max output token cap: not verified in sources found.
- **Modalities:** text + image in (vision); text out; extended thinking supported (Anthropic methodology uses 128K thinking budget; AA lists a "Reasoning" mode); tool/function calling, structured outputs (LLMReference capability rows). No audio/video input or output found; no verified MMMU score captured (see benchmarks).
- **Pricing (as of 2026-10-01):** $1.00 / 1M input, $5.00 / 1M output (Anthropic announcement + model page); cached input $0.10 / 1M (BenchLM spec row); up to 90% savings with prompt caching, 50% with batch processing. Artificial Analysis blended price $0.77 / 1M at a 7:2:1 cache-hit/input/output ratio. Paid tier only — no free API tier verified.
- **Architecture:** proprietary; weights not released (LLMReference: "Weights: Not released").

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench (Terminus 2, Anthropic harness): **40.21%** (no thinking) / **41.75%** (32K thinking budget), avg over 11 runs (Anthropic Haiku 4.5 announcement, methodology note)
- Terminal-Bench 2.1 (Vals AI): **43.8%** (BenchLM comparison row)
- τ²-Bench Retail (Anthropic, 128K thinking): **83.2%** (llm-stats shared-benchmark table)
- τ²-Bench Telecom: **32%** (Artificial Analysis run, vanilla harness); Anthropic's own τ² runs (128K thinking + policy prompt addendum) report Haiku 4.5 beating o3 on Telecom but the exact value was not captured in sources found
- JobBench: **16.0%** (BenchLM / Vals row)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: **no verified public score found** — Anthropic's methodology states OSWorld-Verified was run (official framework, 100 steps, avg of 4 runs) but the numeric value was not captured in sources found; Anthropic notes Haiku 4.5 subagents reached 87.0% on Terminal-Bench 2.0 when orchestrated by Opus 4.5 (context, not a solo score)

Reasoning / knowledge:

- GPQA Diamond: **65%** (Artificial Analysis via Opper AI); **72.2%** (Vals AI row via BenchLM)
- MMLU-Pro: **80%** (AA via Opper); **78.7%** (Vals)
- HLE (Humanity's Last Exam): **4%** (AA via Opper)
- AIME 2025: **39%** (AA via Opper; Anthropic methodology: avg of 10 runs × 16 trials, 128K thinking budget)
- Artificial Analysis Intelligence Index v4.1.1: **30** (AA "Claude 4.5 Haiku (Reasoning)" comparison page); non-reasoning baseline **17.4** (Opper/AA)
- Long-context reasoning (AA-LCR): **50%** (AA via Opper)
- FrontierMath v2: **5.903%** (Tiers 1–3), **2.083%** (Tier 4) (BenchLM/Vals rows)
- CritPt / AA-Omniscience / BenchLM overall: no verified public score found (BenchLM public rank #102/230, 52.89/100 — composite, display only)

Coding:

- SWE-bench Verified: **73.3%** (Anthropic, 500-problem set, avg over 50 trials, 128K thinking budget, simple bash + string-edit scaffold)
- SWE-bench Verified (Vals AI rerun): **66.6%**
- LiveCodeBench: **51%** (AA via Opper); **41.2%** (Vals)
- VulcanBench v3: **76.2%** (Vals via BenchLM)
- SciCode / DeepSWE / Vibe Code Bench / SWE-bench Pro: **no verified public score found**

Long context:

- 200K window (Anthropic docs); AA long-context reasoning (LCR) **50%**; MRCR / RULER / GraphWalks retrieval: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-Bench Retail 83.2% (Anthropic, 128K thinking) shows strong customer-facing tool discipline, but Terminal-Bench 2.1 at ~44% (Vals) / TB ~41–42% (Anthropic) sits just below the mid band and JobBench 16.0% caps the score well below frontier agents.
- **Reasoning: 65/100.** GPQA 65–72% and MMLU-Pro ~79–80% land in the documented mid band (GPQA 60–80%), with AA Index 30 (reasoning mode) at the top of the 20–35 range; HLE 4% and FrontierMath ~6% are what cap it.
- **Context window: 70/100.** Exactly the 200K anchor of the tier mapping (200K = 70); AA long-context reasoning at 50% confirms usable but unremarkable retrieval at that window.
- **Multimodal: 68/100.** Text + image input with vision-driven computer use (Anthropic: Haiku 4.5 matches Sonnet 4 on computer-use tasks) puts it in the +image-in band (60–70); no video/audio/PDF input verified, no non-text output, and no captured MMMU score — that caps it at 68.
- **Coding: 78/100.** SWE-bench Verified 73.3% (Anthropic) is within a point of the frontier reference (DeepSWE 74%+) and far above the mid band, but LiveCodeBench 41–51% and Terminal-Bench ~44% keep it out of the 90s.
- **Cost efficiency: 87/100.** $1/$5 list sits right at the ~$1.25/$4.25 ≈ 88 anchor of the cost curve; cache reads at $0.10 and batch −50% push it slightly up, but there is no $0 tier to reach 100.
- **Overall Score: 69/100.** (65 + 65 + 70 + 68 + 78) / 5 = 69.2 → 69 — best-fit as a low-latency paid sub-agent/coding worker: near-frontier SWE-bench per dollar, capped by 200K context, image-only multimodal and sub-10% HLE.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (Anthropic announcement + model page + system-card methodology, Artificial Analysis model/comparison pages via Opper AI, BenchLM and Vals AI rows, LLMReference spec sheet, llm-stats shared-benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
