# Nemotron 3.5 Lightning Free — findings by Gemini 3.8 Flash

- Source: NVIDIA/Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's lightweight 30B parameter open-weights Mixture-of-Experts model (3B active parameters) engineered as a high-speed execution agent for repetitive tool calling, output verification, and subagent routing in agent swarms.
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3.5-lightning-free`), OpenRouter (`nvidia/nemotron-3.5-lightning-30b-a3b:free`), NVIDIA NIM, and Hugging Face open weights.
- **Release / knowledge:** August 2026 release; OpenMDW License.
- **IDs:** `opencode/nemotron-3.5-lightning-free`, `nvidia/nemotron-3.5-lightning-30b-a3b`.
- **Context window:** 262,144 tokens (262K native context, extended up to 1,000,000 tokens on OpenCode Zen router), with up to 65,536 maximum output tokens.
- **Modalities:** Text input; text output (pure text/code model, optimized for low-latency tool execution, JSON mode, and speculative decoding via Multi-Token Prediction).
- **Pricing (as of 2026-10-21):** Free ($0.00) on OpenCode Zen and OpenRouter promotional tiers; commercial host rates ~$0.05 / 1M input, $0.20 / 1M output.
- **Architecture:** 30B total / 3B active parameters per token hybrid LatentMoE (combining Mamba-2 linear attention, selective transformer attention, and MoE routing).

### Raw benchmarks found

Agent / tool use:

- PinchBench: **85.37%** (BF16) / **83.43%** (NVFP4)
- Terminal-Bench 2.1: **24.58%** (BF16) / **23.46%** (NVFP4)
- Tau3-Banking: **9.28%** (complex multi-step banking API tasks)
- BrowseComp: **36.97%**
- GDPval-AA-V2: **832** (BF16) / **865** (NVFP4)
- IFBench (loose instruction following): **71.88%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.44%** (no tools, BF16) / **75.57%** (NVFP4)
- Humanity's Last Exam (HLE): **11.72%** (text-only, no tools)
- MMLU-Pro: **81.94%** (BF16) / **81.62%** (NVFP4)
- SciCode: **32.60%**
- Artificial Analysis Intelligence Index: **14**

Coding:

- SWE-bench Verified: **51.56%** (BF16) / **52.80%** (NVFP4)
- SWE-bench Multilingual: **39.33%**
- AA-LCR (Long Context Retrieval): **52.00%**

Long context:

- RULER / MRCR (262K window): **92.4%** retrieval across native 262,144 context window (routable up to 1M on OpenCode Zen).

### Normalized scores (1–100)

- **Tool use: 50/100.** Fast, high-throughput execution on simple and structured tool calls (85.37% PinchBench); capped by lower performance on full terminal agent loops (24.58% Terminal-Bench 2.1) and Tau3-Banking (9.28%).
- **Reasoning: 62/100.** Capable domain recall with 81.94% MMLU-Pro and 75.44% GPQA Diamond; capped by 11.72% on Humanity's Last Exam and 14 AA Intelligence Index, reflecting its specialized role as an execution subagent rather than an autonomous planner.
- **Context window: 74/100.** Native 262K context window expandable to 1M tokens on Zen router endpoints with efficient Mamba-2 linear attention.
- **Multimodal: 15/100.** Text-only input and output architecture without image, vision, or audio support.
- **Coding: 56/100.** Solid ~52% on SWE-bench Verified and 39.33% Multilingual SWE for a 3B active parameter model; capped on complex algorithm generation.
- **Cost efficiency: 100/100.** Completely free ($0) access tier on OpenCode Zen with extreme single-GPU inference efficiency.
- **Overall Score: 51/100.** Quality arithmetic mean of the 5 core quality dimensions ((50 + 62 + 74 + 15 + 56) / 5 = 51.4 rounded to 51). Swift, low-latency execution subagent.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing NVIDIA Nemotron-3.5 technical documentation, Hugging Face model card evaluations, OpenCode Zen specifications, and NeMo Gym benchmark logs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
