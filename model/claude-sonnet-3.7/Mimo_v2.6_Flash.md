# Claude Sonnet 3.7 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-3-7-sonnet`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's 2025-02-24 Sonnet release — the first Claude with hybrid extended thinking and a controllable thinking budget; a general-purpose coding/agent model that was Anthropic's mid-tier workhorse until the Sonnet 4 generation. Not a variant/alias of another entry in this dataset.
- **Provider / access:** Anthropic Claude Platform Messages API (`https://api.anthropic.com/v1/messages`), Amazon Bedrock, Google Cloud Vertex AI; also Claude Code and Claude.ai apps. Messages API (Chat-completions style), not OpenAI Chat Completions.
- **Release / knowledge:** released 2025-02-24 (`claude-3-7-sonnet-20250219` snapshot); knowledge cutoff not published in sources found. Availability note: Anthropic's pricing docs still listed Claude 3.7 Sonnet rates as of 2026-09-06 (AnotherWrapper reading of `platform.claude.com/docs/en/about-claude/pricing`), while one gateway (Future AGI, reading litellm metadata) flags the `-latest` alias as deprecated — verify live availability before adopting.
- **IDs:** `claude-3-7-sonnet`, `claude-3-7-sonnet-20250219`, `claude-3-7-sonnet-latest`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 200,000 tokens input; max output 64,000 tokens (litellm via Future AGI; another pricing tracker lists 128K — treat 64K as the documented figure, 128K unverified).
- **Modalities:** text + image + PDF in; text out; hybrid extended thinking (controllable budget); function calling, prompt caching, vision (Future AGI capability rows: "vision, pdf, text"; Vals: text/image/file in, video **not** supported). No audio/video input verified (the llm-stats multimodal table claiming audio/video is a generic matrix, contradicted by Vals).
- **Pricing (as of 2026-10-01):** $3.00 / 1M input, $15.00 / 1M output (Anthropic pricing docs; identical to Claude Sonnet 4's list price); cached input $0.30 / 1M (litellm via Future AGI). Blended $18.00 / 1M in+out (AnotherWrapper). Paid tier only — no free API tier verified.
- **Architecture:** proprietary; weights not released (Vals: "Weights: Private").

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench: **35.2%** (AnotherWrapper shared table); Terminal-Bench Hard: **21%** (Artificial Analysis via Opper)
- τ²-Bench Retail: **81.2%**; τ²-Bench Airline: **58.4%** (AnotherWrapper shared table)
- τ²-Bench Telecom: **50%** (AA via Opper)
- OSWorld / OSWorld Verified: **35.8%** (AnotherWrapper shared table)
- The Agent Company: **40.2%**; DeepResearch Bench: **43.6%** (AnotherWrapper)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA: **84.8%**; GPQA Diamond: **78.5%** (AnotherWrapper shared table, thinking-on); GPQA Diamond: **66%** (AA via Opper, AA harness)
- HLE: **8.0%** (AnotherWrapper); **4%** (AA via Opper)
- MMLU-Pro: **80.7%** (AnotherWrapper) / **80%** (AA); MMMLU: **86.1%**; MGSM: **92.4%**; IFEval: **93.2%**; IFBench: **44%** (AA)
- AIME 2025: **54.8%** (AnotherWrapper) / **21%** (AA harness); AIME 2024: **80%**; MATH-500: **96.2%**; MATH: **91.2%**
- FrontierMath: **3.1%** (Tiers 1–3); ARC-AGI-1 Verified: **28.6%**; ARC-AGI-2: **0.9%**
- Artificial Analysis Intelligence Index: **23.9** (AA via Opper); Math Index **21.0**; AA long-context reasoning **50%**
- MMMU: **75%**; LiveBench: **76.1%**; SimpleBench: **46.4%**; Chatbot Arena ELO: **1,340–1,372** (Serenities AI / LMArena capture 2026-08-08)

Coding:

- SWE-bench Verified: **70.3%** (Anthropic-reported figure via AnotherWrapper shared table); **62.3%** (Serenities AI index, different scaffold)
- LiveCodeBench: **56.7%** (AnotherWrapper) / **39%** (AA via Opper)
- SciCode: **38%** (AA via Opper); HumanEval+: **86.0%** (Serenities)
- CyberBench: **20%**; Tax Eval v2: **72.4%** (AnotherWrapper)
- SWE-bench Pro / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 200K window (Anthropic pricing/spec rows); AA long-context reasoning (LCR) **50%**; MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- MMMU: **75%** (AnotherWrapper); MMMU Pro: measured by Vals (accuracy value not captured in sources found); PDF input supported (Future AGI modalities row)

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-Bench Retail 81.2% and Airline 58.4% are solidly mid-upper, but Terminal-Bench 35.2% (AA Hard 21%) sits below the mid band (TB 45–60 → 50–70) and OSWorld 35.8% / The Agent Company 40.2% keep the model out of the frontier tier.
- **Reasoning: 66/100.** GPQA 66–78.5% and MMLU-Pro ~80% push the top of the documented mid band, with AA Index 23.9 inside the 20–35 range; HLE 4–8%, FrontierMath 3.1% and ARC-AGI-2 0.9% are the caps.
- **Context window: 70/100.** 200K tokens = the 200K anchor of the tier mapping; AA long-context reasoning at 50% is mid-pack for that window.
- **Multimodal: 80/100.** Text + image + PDF input with a 75% MMMU score lands in the +video/PDF-in band (75–90); no audio in or non-text out, which caps it below 90.
- **Coding: 72/100.** SWE-bench Verified 70.3% (Anthropic figure; 62.3% on an independent scaffold) is well above the mid band, but LiveCodeBench 39–57%, SciCode 38% and Terminal-Bench 35% prevent a frontier-grade score.
- **Cost efficiency: 60/100.** $3/$15 is the documented ~60 anchor of the cost curve ($3/$15 ≈ 60); cached input at $0.30 and no $0 tier hold it there.
- **Overall Score: 70/100.** (60 + 66 + 70 + 80 + 72) / 5 = 69.6 → 70 — best-fit as a proven PDF/vision + long-output workhorse at mid-tier pricing; strong τ² retail and MMMU, capped by Terminal-Bench-class agentic performance and a dated (Feb 2025) knowledge base.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (Anthropic pricing/model pages, Artificial Analysis via Opper AI, AnotherWrapper shared-benchmark table, Serenities AI AI Value Index, Vals AI model page, llm-stats, Future AGI/litellm spec sheet); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
