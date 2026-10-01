# Claude Sonnet 3.7 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Sonnet 3.7 (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid-reasoning Sonnet (Feb 2025): standard fast mode plus visible extended-thinking mode with configurable thinking budget. Launch-time SWE-bench leader; strong TAU-bench agent with image understanding.
- **Provider / access:** Anthropic Claude API (`claude-3-7-sonnet-20250219`, Messages API with `thinking: { type: "enabled", budget_tokens }`); Claude plans (Free without extended thinking; Pro/Team/Enterprise full); Amazon Bedrock; Google Cloud Vertex AI. OpenCode Zen `opencode/claude-sonnet-3.7`.
- **Release / knowledge:** Released 2025-02-24 (Anthropic newsroom; API ID dated 2025-02-19). Knowledge cutoff Jan 2025 (benchgen model card); training cutoff Oct 2024 (datacamp API table).
- **IDs:** `claude-3-7-sonnet-20250219` (Anthropic API); `opencode/claude-sonnet-3.7` (Zen catalogue / meta.json)
- **Context window:** 200,000 total tokens with 64,000 max output in extended-thinking mode (16,000 standard; 8,192 base per datacamp table) — verified via benchgen + datacamp API tables
- **Modalities:** Text and images in; text out; extended thinking with visible chain-of-thought (budget up to 128K per awesomeagents; thinking tokens billed as output); tool calls yes (bash + file-edit + planning tool in vendor SWE/TAU scaffolds)
- **Pricing (as of 2026-10-01):** Paid $3.00 per 1M input / $15.00 per 1M output including thinking tokens (Anthropic newsroom + benchgen pricing table). Prompt caching 90% off cache reads. No $0 free tier — scored on paid pricing.
- **Architecture:** Proprietary (undisclosed parameters; single-weight hybrid fast/thinking model)

### Raw benchmarks found

Agent / tool use:

- TAU-bench Retail / Airline: **81.2% / 58.4%** (datacamp.com Claude 3.7 Sonnet review table, vendor-reported; vs OpenAI o1 73.5%/54.2% alongside)
- OSWorld-Verified: **35.8%** (anotherwrapper.com Claude 3.7 vs GPT-4o comparison table, compiled third-party; vendor research post confirms improvement over predecessor with visible-thinking growth over steps, no vendor number)
- Terminal-Bench: **35.2%** (anotherwrapper.com comparison table, compiled third-party — provisional, no vendor harness stated)
- SHADE-Arena overall success: **26.2%** (benchgen.com model page, Anthropic research post source; one of the highest in class on agentic safety eval)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **78.2%** extended thinking, **84.8%** with internal scoring + parallel test-time compute (langbase.com benchmark table + Anthropic visible-thinking research post: 68.0% no-thinking baseline; 84.8% uses 256 samples + learned scoring model + 64K thinking budget, physics subscore 96.5%)
- AIME 2025: **80.0%** (awesomeagents.ai model page; langbase notes +38% thinking lift on AIME 2024, 23.3% to 61.3% standard / 80.0% scored)
- MATH 500: **96.2%** with thinking vs 82.2% without (langbase.com extended-thinking table)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLeader Index 51.7 thinking-best #300/430 is a different composite, not the AA Index — listed here for context only, not scored)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **62.3%** standard pass@1, **70.3%** custom scaffold (Anthropic newsroom appendix: bash + file-edit string-replacement tools + planning tool, 489/500 solvable subset, 11 infra-unsolvable counted as failures; datacamp confirms 62.3% vs Sonnet 3.5 49.0%, 70.3% scaffolded SOTA at launch vs o1 48.9% / o3-mini 49.3% / R1 49.2%)
- LiveCodeBench: **60.4%** thinking (benchleader.com table, Vals AI source; 56.7% not-stated alongside)
- BigCodeBench: **35.8%** (benchgen.com evaluation, 2025-07)
- Aider Polyglot: **60.4-64.9%** (benchleader.com: 60.4% no-reasoning #14 / 64.9% not-stated #10)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (CyberGym 14.5% security-task score per benchgen is adjacent, not a coding-generation benchmark)

Long context:

- No verified MRCR / RULER / GraphWalks score found; 200K context is a documented ceiling only (extended thinking reasons more effectively over long docs per Anthropic, unmeasured for retrieval)

### Normalized scores (1–100)

- **Tool use: 75/100.** TAU-bench Retail 81.2% / Airline 58.4% plus SHADE-Arena 26.2% show strong 2025-era agency; capped by OSWorld-Verified 35.8% and Terminal-Bench 35.2% (both below the 45-60% mid band) and missing GDPval/Claw/MCP coverage.
- **Reasoning: 76/100.** GPQA 78.2% (84.8% scored) plus AIME 80.0% and MATH 96.2% with thinking show above-PhD-baseline graduate reasoning; capped by missing HLE/LCR/CritPt/Index and scored-compute dependence of the top number.
- **Context window: 70/100.** 200K total / 64K thinking max output per API tables maps to the 200K = 70 tier; no measured at-limit retrieval.
- **Multimodal: 70/100.** Text + image in to text out fits the +image-in 60-70 band top; ChartQA 91.2% / DocVQA 93.5% document-vision strength cited by reviewers supports the upper end; no video/audio in or non-text out.
- **Coding: 78/100.** SWE-bench Verified 62.3% (70.3% scaffolded, launch SOTA) plus LiveCodeBench 60.4% and Aider ~64.9% show strong generation; capped by BigCodeBench 35.8% and missing SciCode/Vibe/DeepSWE.
- **Cost efficiency: 60/100.** Paid $3.00/$15.00 per 1M matches the ~$3/$15 = ~60 tier; thinking tokens billed as output; caching/batch soften but no $0 tier.
- **Overall Score: 74/100.** Mean of the five quality dims (75+76+70+70+78)/5 = 73.8; best fit as 2025-era hybrid-reasoning coding agent, escalate to Sonnet 4.5+/Opus for frontier work.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Anthropic newsroom 2025-02-24 + visible-thinking research post, datacamp.com review 2025-02-25, benchgen.com model page 2026-07-21, langbase.com benchmarks table, awesomeagents.ai page, benchleader.com 2026 tabs, anotherwrapper.com comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
