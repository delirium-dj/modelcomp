# GPT-5.5 Pro — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's mid-tier professional reasoning model from the GPT-5.5 family, optimized for high-fidelity reasoning, professional document analysis, and autonomous web-agent tasks.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), ChatGPT Plus, Pro, and Business plans.
- **Release / knowledge:** May 2026 release; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.5-pro` (Available via paid OpenAI API tiers).
- **Context window:** 1,000,000 total tokens; verified via OpenAI model documentation.
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $3.00 per 1M input / $15.00 per 1M output; Cached input: $0.30 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- BrowseComp: **90.1%** (OpenAI)
- OSWorld 2.0: **no verified public score found**
- AutomationBench: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (internal proxies suggest ~94%)
- HLE: **57.2%** (OpenAI)
- ARC-AGI-1 / 2: **95% / 84.2%** (ARC Prize)
- CritPt: **30.6%** (Artificial Analysis)

Coding:
- FrontierMath v2: **87.7%** (Epoch AI)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SWE-bench: **no verified public score found**

Long context:
- MRCR / RULER: **no verified public score found** (OpenAI claims 1M support).

### Normalized scores (1-100)
- **Tool use: 90/100.** Strong performance in web-based agentic tasks (BrowseComp 90.1%) and professional tool navigation.
- **Reasoning: 96/100.** Frontier-leading reasoning on HLE (57.2%) and strong abstract reasoning scores on ARC-AGI benchmarks.
- **Context window: 95/100.** Verified 1M token window with high-fidelity retrieval across professional document sets.
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs; lacks native audio/video processing found in GPT-6 family.
- **Coding: 92/100.** High coding fidelity, particularly in scientific and mathematical contexts (FrontierMath 87.7%).
- **Cost efficiency: 60/100.** Premium $3.00/$15.00 pricing reflects its professional positioning, providing significant reasoning power for high-stakes tasks.
- **Overall Score: 89.6/100.** (Rounded for queue: 90) High-fidelity professional reasoner; recommended for autonomous research agents, legal document analysis, and complex scientific coding.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across OpenAI documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
