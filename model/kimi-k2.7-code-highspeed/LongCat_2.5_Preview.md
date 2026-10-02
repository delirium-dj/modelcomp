# Kimi K2.7 Code HighSpeed — findings by LongCat 2.5 Preview

- Source: Moonshot AI/Kimi K2.7 Code HighSpeed
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** High-speed variant of Kimi K2.7 Code, a coding-focused agentic model built on K2.6. Same coding ability with 5-6x faster output speed (~180 tokens/s median, ~260 tokens/s short context).
- **Provider / access:** Moonshot AI API — `kimi-k2.7-code-highspeed` (HighSpeed), `kimi-k2.7-code` (standard). Kimi Code — `kimi-for-coding-highspeed`. Open weights on Hugging Face (`moonshotai/Kimi-K2.7-Code`).
- **Release / knowledge:** 2026-06-12 (standard), 2026-06-15 (HighSpeed).
- **IDs:** `kimi-k2.7-code-highspeed` (API), `kimi-for-coding-highspeed` (Kimi Code)
- **Context window:** 262,144 tokens; max output 262,144 tokens (standard), 32,800 tokens (HighSpeed per Blackbox).
- **Modalities:** text, image, video input; text output; reasoning yes (thinking always on); tool calling yes; structured outputs yes.
- **Pricing (as of 2026-10-02):** $1.90/1M input, $8.00/1M output, $0.38/1M cached input (HighSpeed via Blackbox). Standard: $0.95/1M input, $4.00/1M output.
- **Architecture:** MoE — 1.02T total parameters, 32B activated. Modified MIT License (open weights).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **76.0%** (Moonshot AI forum, vs K2.6 69.4%)
- MCP Mark Verified: **81.1%** (Moonshot AI forum, vs K2.6 72.8%)
- Kimi Claw 24/7 Bench: **46.9%** (Moonshot AI forum, vs K2.6 42.9%)

Reasoning / knowledge:

- Kimi Code Bench V2: **62.0%** (Moonshot AI forum, vs K2.6 50.9%)
- MLS Bench Lite: **35.1%** (Moonshot AI forum, vs K2.6 26.7%)

Coding:

- Program Bench: **53.6%** (Moonshot AI forum, vs K2.6 48.3%)
- SWE Marathon: **+76.2%** over K2.6 (Moonshot AI forum)
- Long-horizon coding: 4,000+ tool call sequences, 12+ hours continuous execution (Moonshot AI)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for K2.7 Code HighSpeed.

Multimodal:

- Native video ingestion with temporal analysis and clip extraction via custom tools (Moonshot AI)
- Images (PNG, JPEG, WebP, GIF) and video (MP4, MOV, AVI) supported

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 76.0%, MCP Mark Verified 81.1%. Strong agentic tool use with long-horizon coding capability (4,000+ tool call sequences). Capped by lack of Terminal-Bench/OSWorld scores.
- **Reasoning: 70/100.** Kimi Code Bench V2 62.0%, MLS Bench Lite 35.1%. No direct GPQA/AIME scores publicly reported. Capped by limited reasoning benchmark coverage.
- **Context window: 75/100.** 262K token context window. Good but not class-leading. No long-context retrieval benchmark publicly reported.
- **Multimodal: 75/100.** Text, image, and video input. Native video ingestion with temporal analysis. Strong multimodal coverage for a coding-focused model.
- **Coding: 78/100.** Kimi Code Bench V2 62.0%, Program Bench 53.6%, SWE Marathon +76.2% over K2.6. Strong long-horizon coding with 30% reduction in thinking-token usage vs K2.6.
- **Cost efficiency: 72/100.** $1.90/1M input and $8.00/1M output (HighSpeed) — moderate pricing. Standard variant at $0.95/$4.00 is more cost-efficient. HighSpeed uses 3x quota.
- **Overall Score: 75/100.** Mean of five quality dims (78+70+75+75+78)/5 = 75.2 → 75. Best fit: high-volume agentic coding workflows where fast output speed and long-horizon task completion matter.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
