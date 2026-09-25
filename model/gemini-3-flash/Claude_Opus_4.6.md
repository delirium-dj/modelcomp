# Gemini 3 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind (`gemini-3-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's high-efficiency model in the Gemini 3 generation, released December 2025. Designed to deliver near-Pro-level reasoning at significantly lower latency and cost, optimized for interactive development, long-running agent loops, and cost-effective agentic workflows.
- **Provider / access:** Google AI Studio / Vertex AI — Chat Completions API. Model ID `gemini-3-flash`.
- **Release / knowledge:** 2025-12-17 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3-flash` (no free-tier ID on Zen; paid API only)
- **Context window:** 1 000 000 tokens input; max output not separately specified (standard Gemini output limits apply). Verified via official Google documentation and OpenRouter.
- **Modalities:** Text, image, audio, video, PDF in; text out; configurable thinking levels (minimal to high); tool/function calls; JSON mode.
- **Pricing (as of 2025-12-17):** $0.50 / $3.00 per 1M tokens (input / output). Paid API; no free tier at launch.
- **Architecture:** Sparse Mixture-of-Experts (MoE); proprietary; parameter count undisclosed. Knowledge-distilled from Gemini 3 Pro for efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the base Gemini 3 Flash specifically (successor 3.7 Flash scored 85.8%, 3.8 Flash scored 89.4%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (source: Google blog / official model card at launch)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: positioned near top of price-to-performance efficiency class (source: Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **75.8%** (source: SWE-bench leaderboard, "Gemini 3 Flash high" configuration, February 2026 evaluation); initial launch report cited 78%
- LiveCodeBench: no verified standalone Pass@1 score found; competitive in Artificial Analysis coding index
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER: no verified public retrieval score found at specific window lengths; 1M token context window supported.

### Normalized scores (1–100)

- **Tool use: 79/100.** No verified Terminal-Bench score for the base Gemini 3 Flash; however, its successors (3.7 Flash: 85.8%, 3.8 Flash: 89.4%) suggest strong agentic foundations. Native tool/function calling and configurable thinking levels support. Capped by the absence of any direct tool-use benchmark data for this specific model version.
- **Reasoning: 88/100.** GPQA Diamond at 90.4% is excellent PhD-level reasoning, nearly matching the Pro variant (91.9%). The configurable thinking architecture allows depth tuning. Capped by no HLE, CritPt, or LCR scores, and it trails Pro marginally.
- **Context window: 78/100.** 1M token context window is competitive, matching Pro. However, no MRCR or RULER retrieval scores are available to verify long-context faithfulness, and no max output size is separately documented for Flash (Pro has 64K). Standard Flash output limits are typically lower.
- **Multimodal: 75/100.** Natively multimodal across text, image, audio, video, and PDF inputs with text output. Same input breadth as Pro. No output generation in non-text modalities. Strong input coverage.
- **Coding: 80/100.** SWE-bench Verified at 75.8% (or up to 78% per launch report) is strong for an efficiency-optimized model, approaching Pro-tier. No LiveCodeBench, SciCode, or DeepSWE standalone scores limit precision. Flash's speed advantage makes it practical for iterative coding loops.
- **Cost efficiency: 88/100.** At $0.50/$3.00 per 1M tokens, this is extremely cost-efficient for near-Pro-level performance. Roughly 4× cheaper on input and 4× cheaper on output than Pro. Excellent value proposition for high-volume agentic workflows.
- **Overall Score: 80/100.** Mean of (79 + 88 + 78 + 75 + 80) / 5 = 80.0. An excellent efficiency-optimized model delivering near-Pro reasoning at a fraction of the cost. Best suited for interactive development, agent loops, and production-scale workflows where latency and cost matter.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-25
- Method: public internet research (Google DeepMind documentation, Google blog, SWE-bench leaderboard, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
