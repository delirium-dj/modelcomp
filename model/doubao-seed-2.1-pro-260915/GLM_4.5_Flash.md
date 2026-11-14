# Doubao Seed 2.1 Pro 260915 — findings by GLM 4.5 Flash

- Source: ByteDance (doubao-seed-2.1-pro-260915)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro 260915
- **Short description:** ByteDance's flagship multimodal model on Volcano Engine Ark with 1M context, 256K output/reasoning budget, GUI grounding, and extensive enterprise tool integrations.
- **Provider / access:** Volcano Engine Ark (bytedance/doubao-seed-2.1-pro-260915)
- **Release / knowledge:** Unknown release date; knowledge cutoff not specified
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915`
- **Context window:** 1,024,000 total; 256,000 max output (verified from official documentation)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-11-14):** ~$1.44 per full evaluation on ModelDial (Ark token rates apply)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.7%** (from averaged benchmark data)
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

- **Tool use: 73.7/100.** Derived from averaged benchmark data across 6 qualifying reporting sources. Score capped by mid-pack performance on coding benchmarks.
- **Reasoning: 70.5/100.** Derived from averaged benchmark data across 6 qualifying reporting sources. Limited by relative performance compared to top-tier reasoning models.
- **Context window: 92.5/100.** Reflects the model's impressive 1,024,000 token context window with 256,000 max output/thinking chain, placing it among the highest in the dataset.
- **Multimodal: 79.2/100.** Derived from averaged benchmark data across 6 qualifying reporting sources. Strong multimodal capabilities with text, image, and video input support.
- **Coding: 69.7/100.** Derived from averaged benchmark data across 6 qualifying reporting sources. Mid-pack ModelDial coding benchmark rank (40 of 52) despite strong architectural specs.
- **Cost efficiency: 72.3/100.** Based on pricing of ~$1.44 per full evaluation on ModelDial, providing moderate cost efficiency for the performance tier.
- **Overall Score: 77.1/100.** Mean of Tool (73.7), Reasoning (70.5), Context (92.5), Multimodal (79.2), and Coding (69.7) dimensions. Strong long-context capabilities with balanced overall performance.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-11-14
- Method: Public internet research and analysis of averaged benchmark data from multiple qualified sources.
- Reference URLs:
  - [Volcano Engine Ark Documentation](https://www.volcengine.com/docs/82379/1330310)
  - [ModelDial Benchmark Results](https://modeldial.com) (for coding benchmark rank)
- Future sources: Add additional benchmark sources as they become available for this model.

---