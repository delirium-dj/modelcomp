# GPT-5.6 Sol — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's high-efficiency frontier reasoning model from the GPT-5.6 family, designed for autonomous system navigation, complex agentic coding, and large-scale document analysis.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), ChatGPT Plus, Team, and Enterprise plans.
- **Release / knowledge:** July 2026 release; knowledge cutoff April 2026.
- **IDs:** `openai/gpt-5.6-sol` (Available via paid OpenAI API tiers).
- **Context window:** 1,050,000 total tokens; verified via OpenAI model documentation.
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $2.00 per 1M input / $10.00 per 1M output; Cached input: $0.20 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **91.9%** (OpenAI) / **85.8%** (Vals AI)
- BrowseComp: **92.2%** (OpenAI)
- OSWorld 2.0: **62.6%** (OpenAI)
- τ²-bench: **85.1%** (Artificial Analysis)
- GDPval-AA: **55.4%** (Artificial Analysis) / **1735 Elo**
- Intelligence Index: **58.9** (OpenAI)

Reasoning / knowledge:
- GPQA Diamond: **94.6%** (OpenAI) / **95.2%** (Vals AI)
- HLE: **49.5%** (Artificial Analysis)
- ARC-AGI-1 / 2: **96.5% / 92.5%** (ARC Prize)
- CritPt: **32.3%** (Artificial Analysis)

Coding:
- SWE-bench (Vals): **96.2%** (Vals AI)
- DeepSWE: **72.7%** (OpenAI)
- LiveCodeBench (Vals): **82.6%** (Vals AI)
- FrontierMath v2: **89.0%** (OpenAI)

Long context:
- AA-LCR: **84.0%** (Artificial Analysis)
- MRCR: **no verified public score found** (OpenAI claims 1M support).

### Normalized scores (1-100)
- **Tool use: 95/100.** SOTA performance on Terminal-Bench 2.1 (91.9%) and exceptional web-agent capabilities (BrowseComp 92.2%).
- **Reasoning: 98/100.** Elite reasoning performance on GPQA Diamond (94.6%) and strong results on ARC-AGI-2 (92.5%).
- **Context window: 100/100.** Verified 1M+ token window with high-fidelity retrieval and synthesis (AA-LCR 84.0%).
- **Multimodal: 70/100.** Supports high-fidelity text and image inputs; lacks native audio/video processing found in GPT-6 family.
- **Coding: 94/100.** Elite coding performance with exceptional results on SWE-bench and strong mathematical coding (FrontierMath 89.0%).
- **Cost efficiency: 82/100.** Competitive $2.00/$10.00 pricing for a frontier reasoning model, matching the blended value of top-tier efficiency variants.
- **Overall Score: 91.4/100.** (Rounded for queue: 91) High-fidelity frontier workhorse; recommended for autonomous engineering agents, complex document-based reasoning, and large-scale terminal automation.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across OpenAI documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
