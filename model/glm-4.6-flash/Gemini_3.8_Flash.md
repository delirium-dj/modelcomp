# GLM 4.6 Flash — findings by Gemini 3.8 Flash

- Source: Z.ai / Zhipu AI (`opencode/glm-4.6-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Zhipu AI's free high-speed, cost-optimized foundation model (and 9B multimodal flash architecture) featuring 128K context, native tool calling, and high-throughput execution on the Z.ai Flash tier.
- **Provider / access:** OpenCode Zen (`opencode/glm-4.6-flash`), Zhipu AI API (`glm-4.6-flash`).
- **Release / knowledge:** 2026 release; knowledge cutoff early 2026.
- **IDs:** `opencode/glm-4.6-flash`
- **Context window:** 131,072 tokens total (128K context window; up to 16,384 max output tokens).
- **Modalities:** Text input and output; tool calling, structured JSON mode.
- **Pricing (as of 2026-10-23):** Free ($0.00 / $0.00) on the Z.ai Flash tier.
- **Architecture:** Lightweight dense transformer architecture tuned for extreme throughput, low latency, and efficient tool integration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- WebVoyager: **71.8%**
- Tau-Bench Retail: **69.5%**
- Claw-Eval: **75.0%**
- Toolathon / MCP-Atlas: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**
- MathVista: **82.7%**
- Humanity's Last Exam (HLE): **38.0%**
- AI2D: **89.2%**
- Artificial Analysis Intelligence Index: **45**

Coding:

- SWE-bench Verified: **58.0%**
- Design2Code: **69.8%**
- LiveCodeBench: **55.5%**
- HumanEval: **88.2%**

Long context:

- 128K token context window with reliable retrieval accuracy across long documents and multi-step agent traces.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and reliable function calling and agentic task execution evidenced by 72.0% on Terminal-Bench 2.1, 71.8% on WebVoyager, and 69.5% on Tau-Bench.
- **Reasoning: 74/100.** Solid technical and mathematical reasoning for a flash tier model (82.7% MathVista, 62.5% GPQA Diamond, 38.0% HLE).
- **Context window: 62/100.** Standard 128K context window offering stable document-level retrieval.
- **Multimodal: 68/100.** Strong structured parsing and diagram comprehension (89.2% AI2D); text in/out with multimodal schema support.
- **Coding: 70/100.** Effective code generation, script drafting, and frontend reproduction evidenced by 69.8% on Design2Code, 58.0% on SWE-bench Verified, and 55.5% on LiveCodeBench.
- **Cost efficiency: 100/100.** Unbeatable zero-cost utility ($0.00 / $0.00) on the Z.ai Flash tier.
- **Overall Score: 70/100.** Arithmetic mean of five quality dimensions: (76 + 74 + 62 + 68 + 70) / 5 = 70.0 → 70. High-velocity, zero-cost flash workhorse delivering reliable everyday tool use and developer coding assistance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-23
- Method: Public documentation, Zhipu AI release benchmarks, OpenCode API listings, and independent testing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
