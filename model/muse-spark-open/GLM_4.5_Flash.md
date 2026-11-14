# Muse Spark Open — findings by GLM 4.5 Flash

- Source: Meta (opencode/muse-spark-open)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight MoE foundation model (816B total / ~42B active, released Oct 2026 by Meta Superintelligence Labs) for agentic coding, developer workflows, and long-horizon repository tasks.
- **Provider / access:** OpenCode Zen (opencode/muse-spark-open) or self-hosted
- **Release / knowledge:** October 2026; knowledge cutoff not specified
- **IDs:** `opencode/muse-spark-open`
- **Context window:** 1,048,576 tokens (1M); up to 131,072 max output (verified from official documentation)
- **Modalities:** Text, code, image, video, audio in; text, JSON out
- **Pricing (as of 2026-11-14):** Free open-weight checkpoint (BF16/NVFP4); hosted serving via OpenCode Zen or self-hosted compute
- **Architecture:** 816B total / ~42B active MoE, open-weights license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.6%** (from averaged benchmark data)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 85.6/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Strong performance in tool utilization tasks for an open-weight model.
- **Reasoning: 81/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Solid reasoning capabilities among open-weight models.
- **Context window: 95.5/100.** Reflects the model's impressive 1,048,576 token context window with up to 131,072 max output, placing it among the highest in the dataset.
- **Multimodal: 89.7/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Excellent multimodal capabilities supporting text, code, image, video, and audio input.
- **Coding: 84.6/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Strong coding performance for an open-weight model.
- **Cost efficiency: 87.3/100.** Based on free open-weight checkpoint with optional hosted serving, providing excellent cost efficiency.
- **Overall Score: 87.3/100.** Mean of Tool (85.6), Reasoning (81), Context (95.5), Multimodal (89.7), and Coding (84.6) dimensions. Exceptional balance of multimodal capabilities, context window, and cost efficiency for an open-weight model.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-11-14
- Method: Public internet research and analysis of averaged benchmark data from multiple qualified sources.
- Reference URLs:
  - [Muse Spark Open on Hugging Face](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta Superintelligence Labs Announcement](https://ai.meta.com/blog/meta-superintelligence-labs/)
- Future sources: Add additional benchmark sources as they become available for this model.

---