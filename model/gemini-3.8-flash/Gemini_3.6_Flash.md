# Google Gemini 3.8 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.8 Flash
- **Short description:** Google's multimodal workhorse reasoning model featuring a 1M token context window, 65,536 max output tokens, configurable 3-tier thinking, and specialized agentic software engineering capabilities.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-3.8-flash`). Gemini API with native thinking controls.
- **Release / knowledge:** 2026-09-02 release; March 2026 knowledge cutoff.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Google official documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (configurable: Low, Medium, High); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.75 input / $3.75 output per 1M tokens ($0.075 cached input rate).
- **Architecture:** Proprietary Mixture of Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** – **90.8%** (Google technical report / Emergent)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Vals AI / independent evaluation)
- HLE: **54.9%** (Google HLE-Verified) / **47.8%** (Artificial Analysis independent)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%** (Vals AI SWE-bench Verified)
- LiveCodeBench: **89.48%** (Vals AI LiveCodeBench v6)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **73.7%** (DeepSWE v1.1 long-horizon software engineering)

Long context:

- 1,048,576 token context window with 100% needle-in-a-haystack retrieval and 65K max output capacity.

### Normalized scores (1–100)

- **Tool use: 92/100.** High-fidelity command execution and agentic planning demonstrated by 89.4%–90.8% on Terminal-Bench 2.1.
- **Reasoning: 92/100.** Exemplary analytical reasoning powered by 94.4% GPQA Diamond and 54.9% HLE-Verified.
- **Context window: 92/100.** 1M token context capacity with expansive 65K output generation depth and reliable full-window retrieval.
- **Multimodal: 89/100.** Industry-leading native audio, video, high-resolution visual parsing, and PDF document comprehension.
- **Coding: 95/100.** Top-tier software engineering proficiency with 80.0% SWE-bench Verified, 89.48% LiveCodeBench, and 73.7% DeepSWE v1.1.
- **Cost efficiency: 91/100.** Highly competitive $0.75/$3.75 per 1M token pricing provides exceptional cost-performance balance.
- **Overall Score: 92/100.** Leading multimodal agentic workhorse model for software engineering, autonomous tooling, and rich media processing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind releases, Vals AI evaluations, and benchmark tracking platforms; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
