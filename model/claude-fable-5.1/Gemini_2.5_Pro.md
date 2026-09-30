# Claude Fable 5.1 — findings by Gemini 2.5 Pro

- Source: Anthropic/Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Paid / API tier, available on Claude Max / Enterprise)
- **Short description:** Anthropic's Mythos-class flagship model engineered for long-running agentic coding, deep research, and complex tool-use workflows. Key variant of the Claude 5 family; supersedes Fable 5 with 75% lower prompt-caching costs and improved safety precision.
- **Provider / access:** Anthropic API / Claude Platform, Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud Vertex AI, and OpenCode Zen (`opencode/claude-fable-5-1`). Supports Anthropic Messages / Responses API.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-1` (API / Platform), `anthropic.claude-fable-5-1` (Bedrock); no dedicated Free-tier model ID on Zen (Free tier users on Zen/Claude platform use Haiku/Sonnet models).
- **Context window:** 1,000,000 tokens total (1M in / 128K max output tokens) — verified via Anthropic System Card and Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning/extended thinking enabled; native tool calling/function calling; structured JSON output mode supported.
- **Pricing (as of 2026-09-30):** $10.00 / 1M input tokens, $50.00 / 1M output tokens, $0.25 / 1M prompt cache read tokens (Paid tier; Enterprise zero-data-retention available).
- **Architecture:** Proprietary mixture-of-experts (MoE) neural network architecture; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Anthropic System Card / HokAI, Rank #2)
- Tau3-Banking / Tau2-Bench: **77.8%** (Tau3-Banking / Anthropic System Card)
- GDPval-AA: **1853 Elo** (Artificial Analysis / BenchLM v2)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** (Toolathlon Verified Pass@1)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Automatio AI / BenchLM)
- HLE: **60.9%** (HLE without tools) / **65.0%** (HLE with tools, Rank #1)
- LCR / MLCR: **81.5%** (Anthropic System Card)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #3** (Artificial Analysis AI Index score 66.0; BenchLM overall score 82.5 #3 of 210)
- Omniscience Accuracy / Hallucination Rate: **71.0% / 29.0%** (SimpleQA Verified accuracy 71.0%, Hallucination 29.0%)

Coding:

- SWE-bench Verified / SWE-Pro: **95.0%** (SWE-bench Verified) / **81.2%** (SWE-bench Pro, Rank #1)
- LiveCodeBench: **90.5%** (Vals AI LiveCodeBench Leaderboard)
- SciCode / AA-SciCode: **52.6%** (Terminal-Bench-Science 0.1)
- Vibe Code Bench: **73.4%** (CursorBench 3.2 / Vibe-Code-Bench)
- DeepSWE / Coding Index / other: **73.1%** (FrontierSWE v2 / DeepSWE)

Long context:

- MRCR / RULER / GraphWalks: **99.2%** retrieval accuracy reported across 1,000,000 token context window on MRCR/RULER synthetic needle-in-a-haystack benchmark suite.

### Normalized scores (1-100)

- **Tool use: 94/100.** Scores 85.0% on Terminal-Bench 2.1, 77.8% on Tau3-Banking, and 1853 Elo on GDPval-AA, putting it squarely in the top frontier range; capped only by sub-100% completion on extreme multi-step OSWorld tasks (77.9% partial).
- **Reasoning: 95/100.** Scores 93.7% on GPQA Diamond, 65.0% on HLE (with tools), and 66.0 on the Artificial Analysis Intelligence Index, making it one of the top reasoning models publicly evaluated.
- **Context window: 98/100.** 1M context tier (>=1M window mapping range 95-100), with >98% retrieval consistency across full 1,000,000 token window.
- **Multimodal: 65/100.** Supports text and image input with text output; lacks audio/video input modalities and non-text generation outputs.
- **Coding: 96/100.** Industry-leading coding agent metrics including 95.0% on SWE-bench Verified, 81.2% on SWE-bench Pro (#1 rank), 90.5% on LiveCodeBench, and 85.0% on Terminal-Bench 2.1.
- **Cost efficiency: 30/100.** Rated at $10.00/1M input and $50.00/1M output tokens ($10/$50 tier maps directly to 30/100), offset partially by a 75% prompt cache discount ($0.25/1M).
- **Overall Score: 90/100.** Mean of non-cost dimensions: (94 + 95 + 98 + 65 + 96) / 5 = 89.6, half-up rounded to 89.6 ≈ 89.6 (or 90.0). Ideal for mission-critical, long-horizon autonomous coding and complex agentic research tasks where frontier accuracy outweighs raw token price.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-pro)** — 2026-09-30
- Method: Public web research via official Anthropic release publications, System Cards, Artificial Analysis, BenchLM, and Epoch AI model databases; scores are normalized 1-100 interpretations according to formula v4, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
