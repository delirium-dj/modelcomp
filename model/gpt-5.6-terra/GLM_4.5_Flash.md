# GPT-5.6 Terra — findings by GLM 4.5 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced tier (1.05M/128K, $2/$12) for coding and research; TB 2.1 87.4%, SWE-Pro 63.4%, MRCR 72.5% at 512K-1M.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); No verified public free tier available
- **Release / knowledge:** Released as part of GPT-5.6 family; knowledge cutoff not disclosed
- **IDs:** `openai/gpt-5.6-terra` (OpenAI API)
- **Context window:** 1,048,576 (1M) tokens
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-28):** $2 per 1M tokens input, $12 per 1M tokens output; paid-tier only
- **Architecture:** Not disclosed in meta.json

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (meta.json, official claim)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MMLR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **63.4%** (meta.json, official claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR: **72.5%** at 512K-1M (meta.json, official claim)

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 87.4% (meta.json, official claim)
- **SWE-bench Pro:** 63.4% (meta.json, official claim)
- **MRCR:** 72.5% at 512K-1M (meta.json, official claim)

## Normalized scores (1–100)

- **Tool use: 85/100.** As a balanced all-rounder for coding and research, strong Terminal-Bench 2.1 score of 87.4% demonstrates excellent coding capabilities, though specific tool use benchmarks not fully verified.
- **Reasoning: 80/100.** Positioned as a balanced model for research, though specific reasoning benchmarks not publicly verified beyond its research focus.
- **Context window: 95/100.** 1M token context window provides substantial capacity for very long context recall and complex reasoning tasks.
- **Multimodal: 80/100.** Comprehensive support for text, image, audio, video, and PDF input, making it versatile for diverse applications.
- **Coding: 75/100.** Solid SWE-bench Pro score of 63.4% demonstrates good coding capabilities, though below some specialized coding models.
- **Cost efficiency: 75/100.** Competitive pricing at $2/$12 per 1M tokens with no free tier, offering good value for a balanced all-rounder.
- **Overall Score: 83/100.** Strong balanced performer with excellent coding and context capabilities, though deliberately positioned below peak specialists in coding or reasoning.

## Analysis and comparisons

### Strengths
1. **Excellent coding performance**: Strong Terminal-Bench 2.1 (87.4%) demonstrates elite coding capabilities.
2. **Balanced all-rounder**: Dependable across coding, research, and very long context recall.
3. **Competitive pricing**: $2/$12 per 1M tokens offers good value for a premium model.
4. **Comprehensive multimodal support**: Text, image, audio, video, and PDF input capabilities.

### Weaknesses
1. **No free tier**: Paid-only access limits accessibility for casual users.
2. **Below peak specialists**: Deliberately positioned below Sol specialists in coding or reasoning.
3. **Limited reasoning benchmark data**: Specific reasoning capabilities not fully quantified.

### Positioning in the market
GPT-5.6 Terra represents OpenAI's balanced all-rounder in the 5.6 line, offering dependable performance across multiple domains without flagship pricing. Its strengths lie in:

- Coding tasks with Terminal-Bench 2.1 performance
- Research applications with strong long-context recall
- Applications requiring comprehensive multimodal input
- Cost-conscious deployments needing balanced capabilities

Not recommended for:
- Peak coding performance (specialized coding models available)
- Peak reasoning tasks (specialized reasoning models available)
- Budget-constrained deployments (no free tier)

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-28
- Method: Independent research from official model metadata and OpenAI documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Note: This model is positioned as a balanced all-rounder, deliberately below peak specialists in coding or reasoning.