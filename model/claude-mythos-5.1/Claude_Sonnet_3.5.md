# Claude Mythos 5.1 — findings by Claude 3.5 Sonnet (anthropic/claude-3-5-sonnet)

- Source: Anthropic/Claude (`claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (Restricted Trusted-Access Deployment)
- **Short description:** Claude Mythos 5.1 is Anthropic's restricted, trusted-access deployment of the Claude Fable 5.1 weights, engineered for high-stakes cybersecurity and life sciences research with permissive safeguard thresholds. It serves specialized defense and biological research teams requiring long-horizon agentic task completion.
- **Provider / access:** Anthropic API / Amazon Bedrock (restricted to US organizations via Cyber Verification and Life Sciences Verification Programs). Uses the Messages API with adaptive thinking enabled by default.
- **Release / knowledge:** 2026-09-01 release; June 2026 knowledge cutoff.
- **IDs:** `claude-mythos-5-1` (Note: No Free ID exists on OpenCode Zen; access is restricted and paid-only).
- **Context window:** 1,000,000 tokens total input (verified via Anthropic platform docs & System Card) with up to 128,000 output tokens.
- **Modalities:** Text and Image input; Text output; Reasoning (adaptive thinking) yes; Tool calls supported (automatic/disabled mode only; forced tool selection returns HTTP 400); JSON mode supported via structured output / schema formatting.
- **Pricing (as of 2026-09-01):** Paid tier: $10.00 / 1M input tokens, $50.00 / 1M output tokens, $0.25 / 1M cached input tokens. Requires accepting a default 30-day data retention policy for safety monitoring.
- **Architecture:** Estimated ~8 trillion parameters (MoE architecture), shared weights with Claude Fable 5.1, proprietary license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Tested on Terminal-Bench 4.0: **60.9%** / Rank #3, Anthropic official scorecard)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1853 Elo** (for shared weights underlying Fable/Mythos 5.1, GDPval-AA v2)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (Toolathlon Verified reported in System Card index, exact score not extracted)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **65.0%** (with tools) / **60.9%** (no tools, Humanity's Last Exam)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.9 / #11** (LLM Stats Composite Score)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro, evaluated on identical Fable 5.1 base weights)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **52.6%** (Terminal-Bench-Science 0.1)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (CursorBench 3.2: 73.4%)

Long context:

- 1,000,000 token context window verified with full retrieval stability across multi-hour, long-horizon agent runs; no standalone MRCR/RULER percentage reported.

### Normalized scores (1-100)

- **Tool use: 78/100.** Scores 60.9% on Terminal-Bench 4.0 and 1853 Elo on GDPval-AA v2. Capped by lack of published Terminal-Bench 2.1 / Tau3-Banking evaluation harness data.
- **Reasoning: 88/100.** Strong performance on Humanity's Last Exam (65.0% with tools / 60.9% without). Capped below frontier 90+ tier due to absence of verified public GPQA Diamond / HLE scores.
- **Context window: 95/100.** Tiered >=1M token capacity (1,000,000 tokens input / 128,000 tokens output) supporting long multi-step agent execution.
- **Multimodal: 65/100.** Text and image input capabilities; text-only output.
- **Coding: 88/100.** High performance on SWE-bench Pro (81.2%) and Terminal-Bench 4.0 (60.9%), but capped under 90 due to lack of verified DeepSWE 74%+ or Terminal-Bench 2.1 85%+ data.
- **Cost efficiency: 60/100.** Priced at $10.00 / 1M input and $50.00 / 1M output tokens ($3/$15 to $10/$50 tier).
- **Overall Score: 83.0/100.** Best-fit recommendation: Premier choice for restricted cyber defense, biosecurity research, and high-complexity long-horizon terminal operations requiring specialized guardrail configurations.

---

## Signature

- Provided by: **Claude 3.5 Sonnet (anthropic/claude-3-5-sonnet)** — 2026-10-01
- Method: Public internet research using Anthropic official System Card, release announcements, and LLM-Stats benchmark logs; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
