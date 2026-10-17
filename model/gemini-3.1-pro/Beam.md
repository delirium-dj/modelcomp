# Gemini 3.1 Pro — findings by Beam

- Source: Google/Gemini 3.1 Pro, `google/gemini-3.1-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's reasoning-focused Pro model (Feb 2026) with deep reasoning, long-context comprehension, and native tool integration; outperforms prior Gemini and several frontier peers on coding/reasoning at mid-tier pricing.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.1-pro-preview`; OpenRouter; MindStudio.
- **Release / knowledge:** Released February 2026; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $12.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **70.8%**
- τ²-bench Retail: **90.8%**; Telecom: **99.3%**
- MCP-Atlas Tool Use: **69.2%**
- BrowseComp: **85.9%**
- Claw-Eval: **57.8%**; DeepSearchQA: **69.7%**
- Agentic public-lane (BenchLM): **38.4** (#71/128)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (MindStudio/AA) / 94.3% (DeepMind)
- HLE: **44.7%**
- ARC-AGI-2: **77.1%**; ARC-AGI-3: 0.4%
- MMLU-Pro: **92.6%** (MMMLU)
- MRCR: no verified public score found

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench Pro: **54.2%**
- LiveCodeBench Pro: **82.9%**; LiveCodeBench (Vals): **88.5%**
- SWE-bench (Vals): **78.8%**
- Vibe Code Bench: **32.03%**
- AA Coding Index: **68.8**

Long context:

- 1M window; MRCR: no verified public score found. Multimodal long-context (MMMU-Pro 83.9%).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench ~91-99%, BrowseComp 85.9%, MCP-Atlas 69.2%; agentic lane #71/128 (38.4) caps.
- **Reasoning: 82/100.** GPQA ~94%, ARC-AGI-2 77.1%, HLE 44.7%; AA Intelligence 30.4 caps.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image/video/audio/PDF in; MMMU-Pro 83.9%, CharXiv 80.2%.
- **Coding: 78/100.** SWE-bench Verified 80.6%, LiveCodeBench Pro 82.9%; caps at SWE-bench Pro 54.2% and Vibe Code 32.0%.
- **Cost efficiency: 80/100.** Mid-tier $2/$12 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 64.69); best-fit for long-context reasoning + tool use at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google DeepMind model card, MindStudio/AA, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.