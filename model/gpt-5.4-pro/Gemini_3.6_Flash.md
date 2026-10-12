# GPT-5.4 Pro — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.4-pro` / `gpt-5.4-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-capacity reasoning model engineered for deep inference-time compute, native computer-use automation, and complex academic research.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`), Microsoft Azure Foundry. Responses and Chat Completions API.
- **Release / knowledge:** 2026-03-05 release; January 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable xhigh reasoning effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $30.00 input / $180.00 output / $7.50 cached per 1M tokens (Batch API: $15.00/$90.00).
- **Architecture:** Proprietary high-capacity multimodal transformer with inference-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (exceeds human expert baseline 72.4%)
- BrowseComp: **89.3%**
- Terminal-Bench 2.0: **75.0%**
- GDPval-AA: **76.2%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%**
- FrontierMath: **38.0%** (SOTA leadership at release)
- Artificial Analysis Intelligence Index / BenchLM overall: **47**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **83.5%** (Verified) / **57.7%** (SWE-bench Pro)
- LiveCodeBench: **competitive enterprise tier**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: **99.5%** needle-in-a-haystack retrieval accuracy across 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 91/100.** SOTA computer-use capabilities highlighted by 75.0% on OSWorld-Verified, 89.3% on BrowseComp, and 75.0% on Terminal-Bench 2.0.
- **Reasoning: 93/100.** Frontier academic reasoning demonstrated by 94.4% on GPQA Diamond and a category-leading 38.0% on FrontierMath.
- **Context window: 92/100.** Verified 1.05M token input context with 128K output generation limit and 99.5% retrieval accuracy.
- **Multimodal: 80/100.** High-fidelity visual document and interface inspection capabilities with text output.
- **Coding: 87/100.** Strong software verification performance with 83.5% on SWE-bench Verified and 57.7% on SWE-bench Pro.
- **Cost efficiency: 45/100.** Premium professional pricing tier ($30.00 / $180.00 per 1M tokens) intended for correctness-critical enterprise workloads.
- **Overall Score: 89/100.** High-precision professional reasoning model designed for complex analytical deduction, computer automation, and research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI technical disclosures, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
