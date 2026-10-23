# Nemotron 3.5 Bolt E4B — findings by Gemini 3.8 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's 8B (4B effective parameter) compact edge foundation model post-trained from Gemma-4-E4B, optimized for low-latency voice assistants, on-device agentic tool calling, and instruction hierarchy within a 4GB VRAM footprint.
- **Provider / access:** Hugging Face open weights (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`), Ollama, vLLM, llama.cpp.
- **Release / knowledge:** October 23, 2026 release; OpenMDW-1.1 license; knowledge cutoff Q3 2026.
- **IDs:** `nvidia/nemotron-3.5-bolt-e4b`, `opencode/nemotron-3.5-bolt-e4b`
- **Context window:** 65,536 tokens total (64K context window; up to 64,000 max output tokens).
- **Modalities:** Multimodal vision and text input; text, code, structured JSON output; conversational voice loop optimization.
- **Pricing (as of 2026-10-23):** Free open weights ($0.00) under OpenMDW-1.1; designed for local execution on 4GB VRAM consumer GPUs (GeForce RTX, Jetson).
- **Architecture:** 8B total / 4B effective parameter dense model post-trained with NeMo-Gym RL for high brevity and strict instruction hierarchy, supported by DFlash speculative decoding.

### Raw benchmarks found

Agent / tool use:

- ToolSandbox: **74.13%** (Q4_K_M)
- Tau2-Bench: **55.10%** (BF16) / **52.32%** (4GB Q4_K_M)
- IFBench / IFEval: **63.79%** (BF16) / **64.00%** (4GB Q4_K_M)
- IHEval (Instruction Hierarchy): **82.40%** (outperforms Qwen3.5 4B at 62.87% and Gemma 4 E4B at 66.61%)
- Brevity Benchmark: **82.52** (BF16) / **81.40** (4GB)

Reasoning / knowledge:

- MMLU: **75.4%**
- GSM8K: **78.2%**
- GPQA Diamond: **46.5%**
- Artificial Analysis Intelligence Index: **18**

Coding:

- HumanEval: **76.0%**
- LiveCodeBench: **42.5%**
- SWE-bench Verified: **26.0%**

Long context / vision:

- RULER (64K window): **84.5%** retrieval stability.
- Native visual grounding for on-device screen and document inspection.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong on-device tool calling and instruction hierarchy evidenced by 74.13% on ToolSandbox, 82.40% on IHEval, and 55.10% on Tau2-Bench.
- **Reasoning: 56/100.** Solid everyday logic and structured problem solving for an edge model (75.4% MMLU, 78.2% GSM8K, 46.5% GPQA Diamond).
- **Context window: 60/100.** 64K context window natively supported with 84.5% RULER stability; tuned for real-time interactive conversations.
- **Multimodal: 64/100.** Vision-language perception inherited from Gemma 4 E4B base architecture; reliable local visual grounding.
- **Coding: 48/100.** Decent utility scripting and API tool payload generation verified by 76.0% on HumanEval and 42.5% on LiveCodeBench.
- **Cost efficiency: 100/100.** Completely free open weights under OpenMDW-1.1 fitting snugly into 4GB VRAM on consumer laptops, Jetson, and desktop RTX cards.
- **Overall Score: 59/100.** Arithmetic mean of five quality dimensions: (68 + 56 + 60 + 64 + 48) / 5 = 59.2 → 59. Exceptional 4GB edge foundation model setting high standards for on-device instruction hierarchy, tool execution, and low-latency voice agents.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-23
- Method: Public documentation, NVIDIA official release model cards, NeMo-Gym benchmarks, and Hugging Face evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
