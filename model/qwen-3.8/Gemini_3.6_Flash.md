# Qwen 3.8 — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.8` / `opencode/qwen-3.8`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache 2.0 open-weight 27B dense multimodal foundation model engineered for self-hosted agentic coding, video comprehension, and near-flagship performance on consumer hardware.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.8`), Alibaba DashScope, Hugging Face open weights. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-15 release; June 2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.8`, `alibaba/qwen-3.8`
- **Context window:** 262,144 tokens native (extensible to 1,048,576 tokens via YaRN; 32,768 max output) — verified via Alibaba Qwen technical documentation.
- **Modalities:** text, image, video in; text out; reasoning yes (configurable effort: low, medium, xhigh); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** API: ~$0.42 input / $3.00 output per 1M tokens; Self-hosted: $0.00 (Apache 2.0 license).
- **Architecture:** 27B dense multimodal Transformer with YaRN context extension and native vision-language architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**
- Tau3-Banking / Tau2-Bench: **71.2%**
- OSWorld: **competitive desktop agent navigation**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.2%**
- HLE: **38.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **top open-weights dense tier (v4.3.2)**
- LCR / MLCR: **84.0%**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **87.2% / 5.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.7%** (SWE-bench Pro)
- LiveCodeBench: **83.9%** (LiveCodeBench v6)
- SciCode / AA-SciCode: **44.8%**
- Vibe Code Bench: **81.5%**
- DeepSWE / Coding Index / other: **85.2**

Long context:

- MRCR / Needle in Haystack: **98.7%** retrieval accuracy across 262K native and 1M YaRN extended context windows.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong terminal automation and tool calling execution evidenced by 82.4% on Terminal-Bench 2.1 and 79.5% on MCP Atlas.
- **Reasoning: 89/100.** Robust scientific deduction and reasoning depth supported by 89.2% on GPQA Diamond and configurable thinking levels.
- **Context window: 92/100.** Native 262K token context extensible to 1M via YaRN with 33K max output tokens.
- **Multimodal: 84/100.** Native multimodal perception processing text, images, and video frame sequences with text output.
- **Coding: 86/100.** Strong software engineering performance backed by 83.9% on LiveCodeBench v6 and 61.7% on SWE-bench Pro.
- **Cost efficiency: 97/100.** Permissive Apache 2.0 open weights allowing single-GPU (24 GB) local deployment, alongside cheap API rates ($0.42/$3.00).
- **Overall Score: 88/100.** High-utility open-weights dense model providing near-frontier reasoning, coding, and multimodal analysis for local or cloud deployment.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Alibaba Qwen technical releases, Artificial Analysis benchmarks, and Hugging Face model cards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
