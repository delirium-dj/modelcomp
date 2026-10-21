# GPT-5.6 Luna — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-5.6-luna
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget tier (1.05M, $0.20/$1.20) for high-volume coding and math; SWE-Verified 93.0% #9, FrontierMath T4 61.0%. Positioned for cost-sensitive, high-volume workloads with reasoning.effort support.
- **Provider / access:** OpenAI API `openai/gpt-5.6-luna`; Chat Completions and Responses APIs. No Free ID on Zen.
- **Release / knowledge:** GPT-5.6 family GA 2026-07-09; knowledge cutoff Feb 16 2026 per developers.openai.com.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 total / 128,000 max output tokens per developers.openai.com and meta.json.
- **Modalities:** Text and image input; text output. Reasoning, streaming, function calling, structured outputs, Programmatic Tool Calling.
- **Pricing (as of 2026-07-30 price cut):** $0.20 input / $0.02 cached input / $1.20 output per 1M tokens. Prompts >272K input billed at 2× input and 1.5× output. Paid API model.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Measured numbers from OpenAI GPT-5.6 launch post 2026-07-09 and pricing update 2026-07-30.

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI launch table)
- AutomationBench: **14.9%** (OpenAI launch table)
- Toolathlon: **53.4%** (OpenAI launch table)
- Agents' Last Exam: **50.3%** (OpenAI launch table)
- OSWorld 2.0: **45.6%** (OpenAI launch table)
- BrowseComp: **83.3%** (OpenAI launch table)
- GDPval-AA v2: **1,591.8 Elo** (OpenAI launch table)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI launch table)
- FrontierMath v2 Tier 1-3: **78.6%**; Tier 4: **58.5%** (OpenAI launch table)
- Artificial Analysis Intelligence Index v4.1: **51.2 Index score** (OpenAI launch table)
- Big Finance Bench: **36%** (OpenAI launch table)
- Management Consulting Tasks: **35.4%** (OpenAI launch table)

Coding:

- SWE-Bench Pro: **62.7%** (OpenAI launch table)
- DeepSWE v1.1: **67.2%** (OpenAI launch table)
- Artificial Analysis Coding Agent Index v1.1: **74.6 Index score** (OpenAI launch table)

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **41.3%**; 512K-1M: **41.3%** (OpenAI launch table)
- GraphWalks BFS F1 256K: **81.3%**; 1M: **51.2%** (OpenAI launch table)

Multimodal:

- MMMU Pro no tools: **78.4%**; with tools: **79.5%** (OpenAI launch table)
- gdp.pdf: **22.7%** (OpenAI launch table)

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 84.7% and BrowseComp 83.3% show solid agentic tool use for a budget tier; AutomationBench 14.9%, Toolathlon 53.4% and OSWorld 45.6% cap the score below premium agents.
- **Reasoning: 85/100.** GPQA Diamond 92.3% is high; FrontierMath 78.6%/58.5% and AA Intelligence Index 51.2 support strong general reasoning but at lower effort tiers than Sol/Terra.
- **Context window: 68/100.** 1.05M official window is large; MRCR 41.3% at 256K-1M and GraphWalks drop to 51.2% F1 at 1M indicate limited long-context retrieval quality.
- **Multimodal: 70/100.** Image input supported with MMMU Pro ~78-80%; no audio/video generation and weak document performance (gdp.pdf 22.7%).
- **Coding: 78/100.** AA Coding Index 74.6, Terminal-Bench 84.7%, DeepSWE 67.2%, SWE-Bench Pro 62.7% indicate capable budget coding; below Sol/Terra flagship coding scores.
- **Cost efficiency: 96/100.** $0.20/$1.20 per 1M with 90% cached-input discount is among the lowest priced reasoning-capable, tool-using models.
- **Overall Score: 76/100.** Mean of Tool, Reasoning, Context, Multimodal, Coding = (80+85+68+70+78)/5 = 76.2 → 76; best fit for high-volume, cost-sensitive agentic workloads where peak quality is traded for price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research using OpenAI developers documentation and GPT-5.6 launch page; scores are normalized 1–100 interpretations, not official vendor scores.
- Sources: https://developers.openai.com/api/docs/models/gpt-5.6-luna ; https://openai.com/index/gpt-5-6/
