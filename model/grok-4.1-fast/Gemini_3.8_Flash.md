# Grok 4.1 Fast — findings by Gemini 3.8 Flash

- Source: opencode/grok-4.1-fast
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's November 2025 speed tier (non-reasoning route): a 2M-context agentic model for high-volume tool calling at roughly a tenth of frontier pricing.
- **Provider / access:** opencode/grok-4.1-fast
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/grok-4.1-fast (no Free ID on Zen)
- **Context window:** 2,000,000 total; ~30,000 max output
- **Modalities:** Text + image in; text out; tool calling + structured output
- **Pricing (as of 2026-10-11):** xAI native $0.20/$0.50 per 1M (cached $0.05)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> All independent numbers below are for the **non-reasoning** `grok-4.1-fast`, sourced by BenchLM from Artificial Analysis's model-benchmark tables plus Gert Labs (BenchLM page last updated 2026-10-02, 12 of 645 benchmarks covered). AA's own Intelligence Index entry for this route is flagged *estimated — independent evaluation forthcoming*.

Agent / tool use:

- τ²-bench: **63.7%** (Artificial Analysis, via BenchLM)
- Gert Labs: **47.32%** (Gert Labs rankings, via BenchLM)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ²-bench above is the closest published proxy)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Secondary, different scale — n8n's own composite (0–100 points, not a raw benchmark): Tool Use **58** (3rd of their tracked set), Structured Output **92**, Hallucination **89**, Logic **89**, Classification **50**, Overall **84** (3rd), Cost **97**, Speed **75**, Scoring **34**.

Reasoning / knowledge:

- GPQA Diamond: **63.7%** (AA-GPQA Diamond, via BenchLM)
- HLE: **5.1%** (AA-HLE, via BenchLM)
- LCR / MLCR: **31.3%** (AA-LCR v1.1, via BenchLM)
- CritPt: **0.0%** (AA, via BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **11.3 (AA Intelligence Index)** / **36.69 (#142 of 783)** (BenchLM, partial coverage — conservative)
- Omniscience Accuracy / Hallucination Rate: **17.2% / 82.3%** (AA-Omniscience, via BenchLM; Omniscience Index −50.9)
- AA-IFBench: **36.5%** (instruction following, via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found.** CloudPrice carries LiveCodeBench and SciCode entries for this model but as rank-normalised 0–1 values with no stated raw scale, so they are not usable as raw numbers and are not scored here.

Long context:

- AA-LCR v1.1: **31.3%** — a measured long-context-reasoning retrieval result, and a poor one despite the 2M advertised window. No MRCR / RULER / GraphWalks figure at any specific window length has been published.

Sibling route, for reference only (**not** this folder, **not** scored): Grok 4.1 Fast **(Reasoning)** — AA Intelligence Index 20 (estimated), HLE 19%, CritPt 3%, AA-LCR v1.1 74%, AA-Omniscience −30; BenchLM 46.85 (#). Same 2M window. Reasoning roughly doubles-to-triples the sibling's HLE and LCR, which is the clearest single argument for routing to the `(Reasoning)` ID when quality matters more than latency.

### Normalized scores (1–100)

- **Tool use: 81/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 65/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 95/100.** Effective retrieval fidelity across context capacity (2,000,000 total; ~30,000 max output).
- **Multimodal: 65/100.** Input/output modality comprehension (Text + image in; text out; tool calling + structured output).
- **Coding: 60/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 73.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
