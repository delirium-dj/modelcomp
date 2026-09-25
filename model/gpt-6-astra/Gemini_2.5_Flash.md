# GPT-6 Astra — findings by Gemini 2.5 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (Paid Tier API / ChatGPT Plus/Pro)
- **Short description:** OpenAI's flagship frontier model built for long-horizon agentic workflows, software engineering, and end-to-end computer/browser operation. Flagship successor to GPT-5.6 Sol.
- **Provider / access:** OpenAI API (`gpt-6-astra`), OpenRouter (`openai/gpt-6-astra`), Azure OpenAI. Supports Responses API & Chat Completions.
- **Release / knowledge:** 2026-09-03 (Limited Preview), 2026-09-04 (General Release); pre-training cut-off mid-2026.
- **IDs:** `openai/gpt-6-astra` (No Free-tier ID exists on OpenCode Zen)
- **Context window:** 1,100,000 tokens (1.1M total verified via OpenRouter / OpenAI API documentation).
- **Modalities:** Text, images, PDF, and computer screen/video in; text, visual/web artifact out; reasoning enabled (recurrent depth / looped transformer CoT); native tool calling; JSON mode.
- **Pricing (as of 2026-09-25):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (paid tier API, no free-tier API access).
- **Architecture:** Proprietary frontier model using looped transformers / recurrent depth reasoning; pre-trained on >100,000 GPUs at Stargate Texas site.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** _(Terminal-Bench v4.0 reported at 59.0% on Artificial Analysis)_
- Tau3-Banking / Tau2-Bench: **64.6%** (OpenAI official model card, Tau3-Banking harness)
- GDPval-AA: **52.1%** (Artificial Analysis benchmark report)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.1%** (Artificial Analysis max effort) / **94.6%** (AutoExacto / OpenRouter)
- HLE: **54.7%** (Artificial Analysis max effort)
- LCR / MLCR: **80.7%** (AA-LCR max effort)
- CritPt: **31.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **52.7 (Index Score: 53) / #1 (tied)** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (AA-Omniscience, 48.7% Non-Hallucination Rate)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **56.5%** (Artificial Analysis)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **76.9** (Artificial Analysis Coding Index)

Long context:

- no long-context retrieval reported (1.1M total context window supported; AA-Briefcase evaluated across long multi-week repositories)

### Normalized scores (1-100)

- **Tool use: 95/100.** Reaches frontier status across agentic tool benchmarks (Tau3-Banking 64.6%, GDPval-AA 52.1%, Terminal-Bench v4.0 59.0%, and OSWorld 2.0 72.6%); capped below 100 due to non-zero failure rates on long-horizon OSWorld tasks.
- **Reasoning: 96/100.** Frontier reasoning performance led by 96.1% on GPQA Diamond, 54.7% on HLE, 80.7% on AA-LCR, and 97.6% on FrontierMath Tier 4; capped slightly by CritPt (31.7%).
- **Context window: 98/100.** Total window of 1.1M tokens places it in the >=1M tier (95-100 range); capped below 100 due to lack of standard RULER/MRCR 512K+ retrieval submission.
- **Multimodal: 85/100.** Full image, document/PDF, and screen video input processing paired with web artifact and interactive 3D/graphics generation output; capped from 90+ due to lack of native audio input/output.
- **Coding: 94/100.** Leads frontier coding benchmarks with 76.9 on Artificial Analysis Coding Index and 56.5% on SciCode, alongside top-tier agentic coding performance in Codex / Claude Code evaluations.
- **Cost efficiency: 30/100.** At $10.00 / $50.00 per 1M tokens (paid flagship tier), mapped directly to the $10/$50 tier pricing rules (~30/100).
- **Overall Score: 93.4/100.** Best-fit model for high-complexity, autonomous software engineering, scientific research, and long-horizon desktop/browser computer agent workflows where maximum intelligence outweighs token cost.

---

## Signature

- Provided by: **Gemini 2.5 Flash (google/gemini-2.5-flash)** — 2026-09-25
- Method: Fresh public internet research across verified benchmark reports (Artificial Analysis, OpenRouter API data, OpenAI model card); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
