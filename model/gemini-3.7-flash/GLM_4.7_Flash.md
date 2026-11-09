# GLM 4.7 Flash vs Gemini 3.7 Flash

## Model Overview

**Gemini 3.7 Flash** is Google's most intelligent workhorse model yet for coding and agents, released August 13, 2026. It's the next iteration in the Gemini 3 model family, featuring algorithmic improvements to its core reasoning foundation and support for agentic video understanding.

- **Provider**: Google DeepMind / Google AI
- **Release Date**: August 13, 2026
- **Access**: Gemini App, AI Studio, API, Enterprise Agent Platform
- **Pricing**: $0.75 input / $3.75 output per 1M tokens (introductory until Dec 31, 2026)
- **Status**: General availability

## Key Capabilities

### Coding Excellence

Gemini 3.7 Flash shows strong gains over 3.6 Flash in coding tasks:

- **FrontierCode 1.1 Main**: 43.6% (9.2 points above 3.6 Flash's 34.4%)
- **DeepSWE v1.1**: 65.3% (16.7 points above 3.6 Flash's 48.6%)
- **Terminal-bench 2.1**: 85.8% (7.8 points above 3.6 Flash's 78.0%)
- **Code Arena**: 1588 Elo (50 points above 3.6 Flash's 1538)

### Web Development

- Generates more functional layouts and feature-complete apps in fewer prompts
- High design adherence and parity based on reference input (screenshot, image, or design system)
- Outperforms 3.6 Flash on Arena.ai's WebDev Arena with Elo score of 1588

### Knowledge Work

Strong performance in knowledge-dense fields:

- **GDP.pdf**: 34.0% (12 points above 3.6 Flash's 22.0%)
- **AutomationBench**: 30.4% (13.4 points above 3.6 Flash's 17.0%)
- **Harvey LAB-AA**: 90.7% (5.6 points above 3.6 Flash's 85.1%)

### Agentic Capabilities

- Better adapts to roadblocks
- Clarifies intent when needed
- Follows instructions with greater fidelity
- Thinks more diligently, putting in more effort into multi-step planning and tool calls
- More disciplined execution means less manual oversight and fewer retries

### Video Understanding

- Supports agentic video understanding
- Strong performance on LVBench (85.4% vs 3.6 Flash's 84.2%)

### Long Context

- **GDM-MRCR v2 (8-needle)**: 97.0% (5.2 points above 3.6 Flash's 91.8% at 128k average)
- Strong long-context performance for RAG workflows

### Scientific Research

- **BioMysteryBench (Human solvable)**: 87.1% (6.5 points above 3.6 Flash's 80.6%)
- **BioMysteryBench (Human difficult)**: 43.5% (2.3 points above 3.6 Flash's 41.2%)
- **LABBench2**: 82.1% (6.0 points above 3.6 Flash's 76.1%)

### Multimodal Capabilities

- Supports text, images, audio, and video files
- Token context window: up to 1M
- Output: text with 64K token output limit

## Benchmark Performance

### Coding Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.6 Terra | Difference |
|-----------|------------------|------------------|-----------------|---------------|------------|
| FrontierCode 1.1 Main | 43.6% | 34.4% | 42.7% | 41.3% | +9.2 |
| DeepSWE v1.1 | 65.3% | 48.6% | 53.8% | 69.6% | +16.7 |
| Terminal-bench 2.1 | 85.8% | 78.0% | 80.4% | 87.4% | +7.8 |
| Code Arena Elo | 1588 | 1538 | 1541 | 1523 | +50 |

### Knowledge Work Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.6 Terra | Difference |
|-----------|------------------|------------------|-----------------|---------------|------------|
| GDP.pdf | 34.0% | 22.0% | 28.0% | 24.7% | +12.0 |
| AutomationBench | 30.4% | 17.0% | 10.7% | 23.6% | +13.4 |
| Harvey LAB-AA | 90.7% | 85.1% | 90.1% | 85.2% | +5.6 |
| GDPval-AA v2 Elo | 1525 | 1422 | 1598 | 1578 | +103 |

### Agentic Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.6 Terra | Difference |
|-----------|------------------|------------------|-----------------|---------------|------------|
| OSWorld-2.0 | 47.9% | 33.8% | — | 50.2% | +14.1 |
| Agent's Last Exam | 26.3% | 24.2% | 33.3% | 28.0% | +2.1 |
| HLE-Verified | 53.6% | 51.2% | 31.0% | 51.1% | +2.4 |

### Scientific Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.6 Terra | Difference |
|-----------|------------------|------------------|-----------------|---------------|------------|
| BioMysteryBench (Human solvable) | 87.1% | 80.6% | 87.5% | 83.8% | +6.5 |
| BioMysteryBench (Human difficult) | 43.5% | 41.2% | 34.1% | 49.4% | +2.3 |
| LABBench2 | 82.1% | 76.1% | 80.1% | 81.2% | +6.0 |

### Long Context Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.6 Terra | Difference |
|-----------|------------------|------------------|-----------------|---------------|------------|
| GDM-MRCR v2 (8-needle 128k) | 97.0% | 91.8% | 81.5% | 93.5% | +5.2 |

### Multimodal Benchmarks

| Benchmark | Gemini 3.7 Flash | Gemini 3.6 Flash | Claude Sonnet 5 | GPT-5.5 | Difference |
|-----------|------------------|------------------|-----------------|---------|------------|
| CharXiv (no tools) | 84.5% | 85.2% | 77.0% | — | -0.7 |
| CharXiv (with tools) | 88.7% | 89.4% | 88.3% | — | -0.7 |
| LVBench | 85.4% | 84.2% | 68.5% | — | +1.2 |

## Comparative Analysis

### vs. Gemini 3.6 Flash

Gemini 3.7 Flash delivers substantial improvements:

- **Coding**: +9.2 points on FrontierCode, +16.7% on DeepSWE, +7.8% on Terminal-Bench
- **Web Development**: +50 Elo on Code Arena
- **Knowledge Work**: +12 points on GDP.pdf, +13.4% on AutomationBench, +5.6% on Harvey LAB-AA
- **Agentic**: +2.1% on Agent's Last Exam, +2.4% on HLE-Verified
- **Scientific**: +6.5% on BioMysteryBench (human solvable), +2.3% on BioMysteryBench (human difficult), +6.0% on LABBench2
- **Long Context**: +5.2% on GDM-MRCR v2

### vs. Claude Sonnet 5

**Gemini 3.7 Flash vs. Claude Sonnet 5:**

- **Coding**: 3.7 Flash wins on FrontierCode (43.6% vs 42.7%) and Terminal-Bench (85.8% vs 80.4%), but Sonnet 5 wins on DeepSWE (53.8% vs 65.3%)
- **Web Development**: 3.7 Flash wins on Code Arena (1588 vs 1541 Elo)
- **Knowledge Work**: 3.7 Flash wins on GDP.pdf (34.0% vs 28.0%) and AutomationBench (30.4% vs 10.7%), but Sonnet 5 wins on Harvey LAB-AA (90.7% vs 90.1%)
- **Agentic**: Sonnet 5 wins on Agent's Last Exam (33.3% vs 26.3%), but 3.7 Flash wins on HLE-Verified (53.6% vs 31.0%)
- **Scientific**: 3.7 Flash wins on BioMysteryBench (87.1% vs 87.5% - very close) and LABBench2 (82.1% vs 80.1%), but Sonnet 5 wins on BioMysteryBench (human difficult)
- **Long Context**: 3.7 Flash wins on GDM-MRCR (97.0% vs 81.5%)
- **Cost**: 3.7 Flash is $0.75/$3.75 per 1M tokens (37.5% of Sonnet 5's cost)

**Verdict**: Gemini 3.7 Flash is more cost-efficient and has stronger coding and knowledge work performance, while Sonnet 5 has better agentic performance on Agent's Last Exam.

### vs. GPT-5.6 Sol

**Gemini 3.7 Flash vs. GPT-5.6 Sol:**

- **Coding**: Sol wins on Terminal-Bench (88.8% vs 85.8%) and DeepSWE (72.7% vs 65.3%), but 3.7 Flash wins on FrontierCode (43.6% vs 41.3%)
- **Web Development**: Sol wins on Code Arena (80 vs 1588 Elo - actually Sol's score is 80, which is much higher than 1588)
- **Knowledge Work**: Sol wins on GDPval-AA v2 (1,747.8 vs 1,525 Elo) and AutomationBench (18.1% vs 30.4% - actually 3.7 Flash wins on AutomationBench)
- **Agentic**: Sol wins on Agent's Last Exam (53.6% vs 26.3%) and HLE-Verified (51.1% vs 53.6% - 3.7 Flash wins)
- **Scientific**: Sol wins on GeneBench Pro (28.7% vs 87.1% - actually 3.7 Flash wins on BioMysteryBench)
- **Long Context**: Sol wins on GDM-MRCR (91.5% vs 97.0% - actually 3.7 Flash wins)
- **Cost**: 3.7 Flash is $0.75/$3.75 per 1M tokens (15% of Sol's cost)

**Verdict**: Gemini 3.7 Flash is significantly more cost-efficient and has stronger scientific research performance, while GPT-5.6 Sol has stronger coding and agentic performance.

### vs. Claude Fable 5

**Gemini 3.7 Flash vs. Claude Fable 5:**

- **Coding**: Fable 5 wins on FrontierCode (80% vs 43.6%) and SWE-Bench Pro (80% vs 65.3%), but 3.7 Flash wins on Terminal-Bench (85.8% vs 83.1%)
- **Knowledge Work**: Fable 5 wins on Finance Benchmark (highest score), GDPval-AA v2 (1,759.6 vs 1,525 Elo), and Harvey LAB-AA (90.1% vs 90.7% - very close)
- **Agentic**: Fable 5 wins on Agent's Last Exam (40.5% vs 26.3%) and HLE-Verified (31.0% vs 53.6% - actually 3.7 Flash wins)
- **Scientific**: Fable 5 wins on protein design and novel hypothesis generation
- **Cost**: 3.7 Flash is $0.75/$3.75 per 1M tokens (7.5% of Fable 5's cost)

**Verdict**: Gemini 3.7 Flash is dramatically more cost-efficient and has stronger scientific research and long-context performance, while Fable 5 has stronger coding and knowledge work performance.

## Strengths

1. **Cost Efficiency**: $0.75/$3.75 per 1M tokens (15% of GPT-5.6 Sol's cost, 7.5% of Fable 5's cost)
2. **Strong Coding**: Strong performance across coding benchmarks with 50 Elo advantage on Code Arena
3. **Web Development**: Best-in-class Code Arena performance (1588 Elo)
4. **Scientific Research**: Strong performance on BioMysteryBench and LABBench2
5. **Long Context**: Excellent long-context performance (97% on 128k needle test)
6. **Video Understanding**: Strong LVBench performance
7. **Agentic Workflows**: Better at following instructions and adapting to roadblocks
8. **Enterprise Workflows**: Strong AutomationBench performance

## Weaknesses

1. **Coding**: Lower than Fable 5 and Mythos 5 on SWE-Bench Pro
2. **Agentic Performance**: Lower than Sonnet 5 and Fable 5 on Agent's Last Exam
3. **Knowledge Work**: Lower than Fable 5 on Finance Benchmark and GDPval-AA v2
4. **General Intelligence**: Lower than Fable 5 on AI Index (56 vs 59.9)
5. **Cybersecurity**: Not designed for cybersecurity tasks
6. **Video Generation**: No video generation capabilities (unlike some competitors)

## Safety & Alignment

### Safety Performance

Gemini 3.7 Flash maintains similar safety and tone performance to Gemini 3.6 Flash:

- **Text to Text Safety**: +1.17pp (lower is better)
- **Multilingual Safety**: -0.48pp (lower is better)
- **Image to Text Safety**: No change
- **Tone**: -0.47pp (higher is better - more objective refusals)
- **Unjustified Refusals**: +0.84pp (lower is better - fewer false positives)

### Frontier Safety Assessment

Gemini 3.7 Flash did not reach any tracked or critical capability levels:

- **CBRN**: Uplift TCL not reached, CCL not reached
- **Cybersecurity**: Alert threshold reached, but CCL not reached
- **Harmful Manipulation**: Level 1 CCL not reached
- **ML R&D**: Stealth and Situational Awareness TCL not reached
- **Acceleration**: CCL not reached, Automation Level 1 CCL not reached

### Safety Improvements

Gemini 3.7 Flash ships with updated safeguards against misuse in:
- Chemical, Biological, Radiological, and Nuclear (CBRN)
- Cyber offense

## Use Cases

1. **Coding**: Software engineering, web development, terminal workflows
2. **Knowledge Work**: Complex document processing, financial analysis, legal workflows
3. **Enterprise Automation**: Business workflow automation (AutomationBench)
4. **Scientific Research**: Bioinformatics, protein design, life sciences
5. **Video Understanding**: Analyzing and reasoning about video content
6. **Long Context**: RAG workflows with large document collections
7. **Agentic Workflows**: Multi-step tasks with tool use

## Customer Feedback

### Box
> "Early customer feedback is highlighting 3.7 Flash’s performance and precision, achieving results that are significantly better than 3.6 Flash at a low cost."

### Browser Use
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Cartwheel
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Databricks
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Emergent
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Harvey
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Hebbia
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### LangChain
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Nunu.ai
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Open Code
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Pydantic
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

### Stanford Department of Biology
> "Achieving results that are significantly better than 3.6 Flash at a low cost."

## Pricing

- **Input**: $0.75 per 1M tokens (introductory until Dec 31, 2026)
- **Output**: $3.75 per 1M tokens (introductory until Dec 31, 2026)
- **Standard Pricing** (after Dec 31, 2026): $1.50 input / $7.50 output per 1M tokens

This is **15% of GPT-5.6 Sol's cost** and **7.5% of Claude Fable 5's cost**.

### Normalized scores (1–100)

- **Tool use: 100/100**
- **Reasoning: 90/100**
- **Context window: 100/100**
- **Multimodal: 90/100**
- **Coding: 90/100**
- **Cost efficiency: 100/100**
- **Overall Score: 94/100**

## Overall Score: 88/100

### Breakdown:

**Tool Use (20/20)**: Excellent - Strong agentic capabilities with strong coding and tool use

**Reasoning (18/20)**: Very Good - Strong knowledge work and scientific research

**Context (20/20)**: Excellent - Strong long-context performance

**Multimodal (18/20)**: Very Good - Strong video understanding and multimodal capabilities

**Coding (18/20)**: Very Good - Strong coding performance but lower than Fable 5 and Mythos 5

**Cost Efficiency (20/20)**: Excellent - Dramatically lower cost than competitors

---

**Key Takeaway**: Gemini 3.7 Flash is an exceptional cost-efficient model that delivers strong performance across coding, knowledge work, and scientific research. Its low pricing (15% of GPT-5.6 Sol's cost and 7.5% of Fable 5's cost) makes it an excellent choice for enterprises and developers. While it doesn't match the top frontier models on SWE-Bench Pro and Agent's Last Exam, its strong performance across multiple benchmarks and dramatically lower cost make it a highly attractive option for most use cases.
