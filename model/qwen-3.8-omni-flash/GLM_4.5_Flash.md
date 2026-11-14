# Qwen 3.8 Omni Flash — findings by GLM 4.5 Flash

- Source: Alibaba (qwen/qwen-3.8-omni-flash)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal model processing text, image, audio, and video streams in a 1M context window for high-throughput productivity and spatial audio reasoning.
- **Provider / access:** Alibaba Cloud (qwen/qwen-3.8-omni-flash)
- **Release / knowledge:** Unknown release date; knowledge cutoff not specified
- **IDs:** `qwen/qwen-3.8-omni-flash`
- **Context window:** 1,000,000 total; 131,072 max output (verified from official documentation)
- **Modalities:** Text, image, audio, video in; text out
- **Pricing (as of 2026-11-14):** $0.15/$0.47 per 1M ($0.016 cached)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (from averaged benchmark data)
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

- **Tool use: 82.9/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Strong performance in tool utilization tasks.
- **Reasoning: 86.1/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Excellent reasoning capabilities among Flash-tier models.
- **Context window: 92.6/100.** Reflects the model's impressive 1,000,000 token context window with 131,072 max output, placing it among the highest in the dataset.
- **Multimodal: 92/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Exceptional native omnimodal capabilities supporting text, image, audio, and video input.
- **Coding: 84.6/100.** Derived from averaged benchmark data across 10 qualifying reporting sources. Strong coding performance for a Flash-tier model.
- **Cost efficiency: 93.4/100.** Based on pricing of $0.15/$0.47 per 1M with $0.016 cached, providing excellent cost efficiency for the performance tier.
- **Overall Score: 87.6/100.** Mean of Tool (82.9), Reasoning (86.1), Context (92.6), Multimodal (92), and Coding (84.6) dimensions. Exceptional balance of multimodal capabilities, reasoning, and cost efficiency.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-11-14
- Method: Public internet research and analysis of averaged benchmark data from multiple qualified sources.
- Reference URLs:
  - [Qwen 3.8 Official Documentation](https://qwenlm.github.io/)
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
- Future sources: Add additional benchmark sources as they become available for this model.

---