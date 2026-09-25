# Gemini 3 Pro — findings by Claude Opus 4.6

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship multimodal reasoning model released November 2025, designed for deep research, multi-step planning, and complex agentic workflows. Succeeded by Gemini 3.1 Pro in February 2026; the original preview was deprecated March 9, 2026.
- **Provider / access:** Google AI Studio / Vertex AI — Chat Completions API. Model ID `gemini-3-pro` (deprecated; users migrated to `gemini-3.1-pro`).
- **Release / knowledge:** 2025-11-18 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3-pro` (no free-tier ID on Zen; paid API only)
- **Context window:** 1 000 000 tokens input (up to 2M in specific configurations); 64 000 tokens max output. Verified via official Google documentation and model card.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning (Deep Think mode with chain-of-thought); tool/function calls; JSON mode.
- **Pricing (as of 2025-11-18):** $2.00 / $12.00 per 1M tokens (input ≤200K / output); cached input $0.20/1M. Paid only; no free tier. Data processed per Google AI API terms.
- **Architecture:** Sparse Mixture-of-Experts (MoE); proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.9% ± 2.5%** (Terminus 2 harness; 65.8% ± 2.7% with Gemini CLI) (source: Terminal-Bench leaderboard)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (source: Google DeepMind model card, "high" configuration)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: ranked approximately #14 on Artificial Analysis Intelligence Benchmark (source: Artificial Analysis leaderboard, September 2026)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **76.2%** (source: Google DeepMind official benchmarks)
- SWE-bench Pro: **43.3%** (source: Google DeepMind official benchmarks)
- LiveCodeBench Pro (Elo): **2439** (source: Google DeepMind model card)
- SciCode / AA-SciCode: no verified public score found (SciCode is known to be extremely challenging; frontier models often below 10%)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR v2 / RULER: no verified public retrieval score at specific window lengths found; competitive performance reported at 1M tokens but independent evaluations note effective retrieval accuracy can diverge significantly past 200K tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 73.9% (Terminus 2) is a strong result for an agentic tool-use benchmark, indicating robust CLI and multi-step task handling. However, the lack of verified Tau-bench and Claw-Eval scores, and the lower Gemini CLI score (65.8%), cap this below the highest tier. Deep Think mode and native function calling boost practical tool use.
- **Reasoning: 90/100.** GPQA Diamond at 91.9% is elite-tier performance on PhD-level scientific reasoning. The model's Deep Think chain-of-thought architecture enables strong multi-step inference. Capped by no verified HLE or CritPt scores, and ranked ~#14 on Artificial Analysis rather than top-5.
- **Context window: 82/100.** 1M token context window (up to 2M in specific configs) with 64K output is competitive with frontier standards. However, independent evaluations suggest effective retrieval accuracy degrades past 200K tokens, and no public MRCR/RULER scores are available to verify long-context faithfulness at full window.
- **Multimodal: 75/100.** Natively multimodal across text, image, audio, video, and PDF inputs with text output. Supports code and structured outputs. No image/audio/video generation; text-only output. Strong input coverage but output limited to text.
- **Coding: 82/100.** SWE-bench Verified at 76.2% is a strong but not frontier-leading result (successor 3.1 Pro reaches 80.6%). SWE-Pro at 43.3% and LiveCodeBench Elo of 2439 confirm solid but mid-upper-tier coding. Capped by no DeepSWE, SciCode, or Vibe Code Bench scores.
- **Cost efficiency: 42/100.** At $2.00/$12.00 per 1M tokens, this is a premium-priced model with no free tier. The high output cost of $12/1M is among the more expensive frontier options, especially with thinking tokens billed at output rates.
- **Overall Score: 82/100.** Mean of (82 + 90 + 82 + 75 + 82) / 5 = 82.2, rounded half-up to 82. A strong flagship model with elite reasoning and solid coding/tool use, but surpassed by its successor 3.1 Pro and now deprecated. Best suited for complex multi-modal reasoning tasks requiring deep context.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-25
- Method: public internet research (Google DeepMind documentation, Artificial Analysis, Terminal-Bench leaderboard, independent benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
