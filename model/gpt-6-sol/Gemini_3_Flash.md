# GPT 6 Sol — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-10-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT 6 Sol
- **Short description:** A cost-efficient, reasoning-capable frontier model from OpenAI designed for agentic workflows, complex coding, and large-scale document analysis. It serves as the mid-tier "workhorse" of the GPT-6 family.
- **Provider / access:** OpenAI via API (`gpt-6-sol`), ChatGPT Plus, Pro, Business, Enterprise, and Codex.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-6-sol` (No Zen Free-tier ID exists; available via paid OpenAI API and subscription tiers).
- **Context window:** 1,050,000 total tokens (922,000 max input; 128,000 max output); verified via OpenAI model documentation and OpenRouter.
- **Modalities:** Text and image input; text output; reasoning yes (explicit reasoning effort settings: none, low, medium, high, xhigh); tool calls; JSON mode.
- **Pricing (as of 2026-10-04):** $2.00 per 1M input / $10.00 per 1M output; Cached input: $0.20 per 1M; free-tier privacy caveat applies to ChatGPT web usage.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **5.7%** (BenchLM)
- GDPval-AA: **61%** (Artificial Analysis v2)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld 2.0: **60.5%** (OpenAI / Artificial Analysis - xhigh effort)
- AutomationBench 1.0.6: **30.6%** (OpenAI/Vellum calculated from 6.1 delta)

Reasoning / knowledge:
- GPQA Diamond: **94.4%** (Mercor/BenchLM Pass@1)
- HLE: **47.9%** (Artificial Analysis)
- LCR / MLCR: **83.7%** (Artificial Analysis)
- CritPt: **32.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #25** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / 60.0%** (Artificial Analysis)

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (Note: SWE-bench team ceased new submissions Feb 2026)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **68.8%** (OpenAI/Artificial Analysis)

Long context:
- MRCR / RULER: **no long-context retrieval reported** (OpenAI claims support for 1M+ context window).

### Normalized scores (1-100)
- **Tool use: 62/100.** Strong performance in desktop/OS navigation (OSWorld 60.5%), but held back by low performance on specialized banking agents (Tau3 5.7%) and mid-tier business workflow automation.
- **Reasoning: 97/100.** Clear frontier performance on GPQA Diamond (94.4%) and HLE (47.9%), exceeding thresholds for PhD-level scientific reasoning and hard-logic tasks.
- **Context window: 100/100.** Tier 100 mapping; total verified window of 1,050,000 tokens exceeds the 1M threshold.
- **Multimodal: 65/100.** Supports text and image inputs with text output; lacks native audio/video processing found in GPT-6 Astra.
- **Coding: 85/100.** Strong results on DeepSWE v1.1 (68.8%), placing it in the high-mid tier for agentic software engineering in real codebases.
- **Cost efficiency: 78/100.** $2.00/$10.00 pricing provides significant value compared to flagship Astra ($10/$50), matching the ~$6 blended price point for mid-frontier models.
- **Overall Score: 81.8/100.** High-utility frontier workhorse; recommended for long-horizon agentic tasks and professional reasoning where cost-per-task is a primary constraint.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-04
- Method: Public internet research across OpenAI documentation, Artificial Analysis, BenchLM, and independent technical benchmarks; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.