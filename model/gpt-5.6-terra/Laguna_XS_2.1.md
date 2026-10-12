# GPT-5.6 Terra — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier (GA 2026-07-09) — the "mini"-class successor, competitive with GPT-5.5 at roughly half the cost; sits between flagship Sol and budget Luna. Free/Go ChatGPT Work users can access it.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), ChatGPT Work, Codex, Azure, AWS Bedrock. Chat Completions + Responses + Batch.
- **Release / knowledge:** 2026-07-09 (GA; preview 2026-06-26); knowledge cutoff 2026-02-16.
- **Context window:** 1,050,000 tokens; 128K max output.
- **Modalities:** text, image, PDF in; text out; reasoning yes (efforts none/low/medium/high/xhigh/max); tool calls yes; JSON mode yes.
- **Pricing:** $2 / $12 per 1M in/out; cached input $0.20; cache write $2.50; Batch 50%.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch)
- Terminal-Bench Hard: **57.6-62.9%** (AA, high-max)
- τ²-Bench Telecom: **86.3%** max / 78.4% high (AA)
- OSWorld 2.0: **50.2%** (OpenAI launch)
- BrowseComp: **87.5%** (OpenAI launch)
- Agents' Last Exam: **50.4%**
- GDPval-AA v2: **1593 Elo** (OpenAI launch)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI)
- HLE: **42.9%** max / 38.5% high (AA)
- FrontierMath v2: Tier 1-3 **84.9%**, Tier 4 **68.3%** (OpenAI)
- AA Intelligence Index: **55 (v4.1)** / **42.1 max**
- IFBench: **71.2%** max

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch)
- DeepSWE v1.1: **69.6%** (OpenAI launch)
- CursorBench 3.2: **64.9%**
- AA Coding Index: **76.7 max** (#6 of 198)

Long context:

- OpenAI MRCR v2: **89.6%** at 256K-512K; **72.5%** at 512K-1M
- GraphWalks BFS: **76.9%** at 256K; **71.2%** at 1M
- AA-LCR: **83.0%** max

Multimodal: MMMU-Pro **80.7%** (OpenAI launch)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 87.4%, BrowseComp 87.5%, Agents' Last Exam 50.4% near-flagship; capped by OSWorld 50.2% and GDPval 46.6%.
- **Reasoning: 85/100.** GPQA 92.9%, AA Index 55, FrontierMath T4 68.3% strong mid-frontier; capped by HLE 42.9%.
- **Context window: 95/100.** 1.05M window with MRCR 89.6% at 256–512K, GraphWalks 71.2% at 1M — solid but under ≥98% bar for 100.
- **Multimodal: 68/100.** Text/image/PDF in, text out; MMMU-Pro 80.7% top of image-in band.
- **Coding: 86/100.** DeepSWE 69.6%, SWE-bench Pro 63.4%, TB 2.1 87.4% excellent for mid-tier.
- **Cost efficiency: 75/100.** $2/$12 between $1.25/$4.25 (~88) and $3/$15 (~60) anchors.
- **Overall Score: 84.2/100.** Mean of (87,85,95,68,86)/5 = 84.2 — sensible default OpenAI model for everyday agentic work.