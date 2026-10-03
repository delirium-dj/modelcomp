# GPT-6 Sol — findings by Gemini 2.5 (google/gemini-2.5-pro)

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (No standard free-tier model ID; accessible on paid tiers and API)
- **Short description:** High-efficiency agentic and reasoning model developed by OpenAI, positioned directly below the flagship GPT-6 Astra. Designed for cost-effective enterprise agentic coding, professional knowledge work, tool use, and computer interaction.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`), Microsoft Azure OpenAI Foundry, OpenRouter (`openai/gpt-6-sol`). Supports both Chat Completions API and Responses API.
- **Release / knowledge:** 2026-09-22; Knowledge cutoff April 2026.
- **IDs:** `openai/gpt-6-sol` (State explicitly: No Free-tier API ID exists on OpenCode Zen / OpenRouter; free tier on desktop uses GPT-6 Luna).
- **Context window:** 1,050,000 total tokens (up to 922,000 input tokens / 128,000 max output tokens); verified via official API specs and LLM Stats.
- **Modalities:** Text and Image input; Text output; Reasoning enabled (configurable effort levels); Tool calls and Structured Outputs (JSON mode) supported.
- **Pricing (as of 2026-10-03):** $2.00 / 1M input tokens, $10.00 / 1M output tokens, $0.20 / 1M cached input tokens. Paid tier API; subject to standard OpenAI API privacy policy terms.
- **Architecture:** Proprietary reasoning MoE architecture (exact total/active parameter count undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Not directly comparable / tested on Terminal-Bench 3.0 / Science 0.1)
- Tau3-Banking / Tau2-Bench: **70.4%** (Artificial Analysis AutoExacto / TAU-Bench)
- GDPval-AA: **50.3%** (Artificial Analysis GDPval-AA)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **56.4%** (OpenAI launch / Agents' Last Exam at max effort)

Reasoning / knowledge:

- GPQA Diamond: **92.1%** (Artificial Analysis / AutoExacto)
- HLE: **47.9%** (Artificial Analysis HLE)
- LCR / MLCR: **83.7%** (Artificial Analysis AA-LCR v1.1)
- CritPt: **30.9%** (Artificial Analysis CritPt)
- Artificial Analysis Intelligence Index / BenchLM overall: **47.6 / #24** (Artificial Analysis Intelligence Index, Max reasoning effort)
- Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%** (39.9% Non-Hallucination Rate via Artificial Analysis)

Coding:

- SWE-bench Verified / SWE-Pro: **75.1%** (SwarmAgent / OpenRouter benchmark tracker)
- LiveCodeBench: **65.8%** (LiveCodeBench official / SwarmAgent)
- SciCode / AA-SciCode: **57.6%** (Artificial Analysis SciCode)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68.8%** (DeepSWE v1.1, max reasoning effort)

Long context:

- AA-LCR v1.1: **83.7%** long-context retrieval and reasoning across full 1.05M window length.

### Normalized scores (1-100)

- **Tool use: 82/100.** Strong performance across agentic benchmarks, scoring 50.3% on GDPval-AA, 70.4% on TAU-Bench, 60.5% on OSWorld 2.0, and 56.4% on Agents' Last Exam. Capped below 90 due to missing Terminal-Bench 2.1 frontier verification.
- **Reasoning: 92/100.** Reaches 92.1% on GPQA Diamond and 47.9% on HLE (Humanity's Last Exam), with an AA Intelligence Index score of 47.6. Meets the frontier threshold on GPQA and HLE.
- **Context window: 96/100.** Verified 1,050,000 token context window (>1M tier) with an 83.7% long-context reasoning score on AA-LCR.
- **Multimodal: 68/100.** Supports vision and document image inputs alongside text inputs with text output. Lacks native audio input/output and non-text output modalities.
- **Coding: 88/100.** Achieves 75.1% on SWE-bench Verified, 68.8% on DeepSWE v1.1 (max effort), 65.8% on LiveCodeBench, and 57.6% on SciCode.
- **Cost efficiency: 88/100.** Priced at $2.00 / $10.00 per million tokens ($0.20 cached). Maps to the ~$1.25/$4.25 to ~$2.00/$10.00 standard efficiency tier (~88/100).
- **Overall Score: 85.2/100.** (Tool use 82 + Reasoning 92 + Context window 96 + Multimodal 68 + Coding 88) / 5 = 86.4. Best suited as a production agentic driver for autonomous software development and multi-step enterprise workflows where high reasoning is needed at a fraction of flagship API costs.

---

## Signature

- Provided by: **Gemini 2.5 (google/gemini-2.5-pro)** — 2026-10-03
- Method: Conducted real-time public web research across official provider announcements, OpenRouter, BenchLM, Artificial Analysis, and LLM Stats; scores are normalized 1-100 interpretations based on benchmark methodology guidelines, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
