# GPT-5.6 Terra — findings by Muse Glimmer 30B

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced tier in the GPT-5.6 family for everyday work, coding and research with 1M context and multimodal input. Described as dependable across coding, research and long context recall without flagship pricing.
- **Provider / access:** OpenAI API `openai/gpt-5.6-terra`; available via Chat Completions and Responses APIs, Business/Enterprise plans.
- **Release / knowledge:** GPT-5.6 family announced 2026-07-09; knowledge cutoff not publicly specified in launch materials.
- **IDs:** `openai/gpt-5.6-terra`; no verified OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens total per meta.json; max output 128K tokens reported in launch table.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning and tool calling supported.
- **Pricing (as of 2026-10-20):** Paid API tier. Meta.json indicates $2/$12 per 1M tokens; OpenAI reduced Terra price by 20% on 2026-07-30. No free tier.
- **Architecture:** Proprietary; parameter count and architecture not publicly disclosed.

### Raw benchmarks found

> Measured numbers from OpenAI GPT-5.6 launch page 2026-07-09 and pricing update 2026-07-30.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch table)
- AutomationBench: **15.2%** (OpenAI launch table)
- Toolathlon: **53.1%** (OpenAI launch table)
- Agents' Last Exam: **50.4%** (OpenAI launch table)
- OSWorld 2.0: **50.2%** (OpenAI launch table)
- BrowseComp: **87.5%** (OpenAI launch table)
- GDPval-AA v2: **1593 Elo** (OpenAI launch table)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI launch table)
- FrontierMath v2 Tier 1-3: **84.9%**; Tier 4: **68.3%** (OpenAI launch table)
- Artificial Analysis Intelligence Index v4.1: **55 Index score** (OpenAI launch table)
- Big Finance Bench: **51%** (OpenAI launch table)
- Management Consulting Tasks: **37.2%** (OpenAI launch table)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch table)
- DeepSWE v1.1: **69.6%** (OpenAI launch table)
- Artificial Analysis Coding Agent Index v1.1: **77.4 Index score** (OpenAI launch table)

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **89.6%**; 512K-1M: **72.5%** (OpenAI launch table)
- GraphWalks BFS F1 256K: **76.9%**; 1M: **71.2%** (OpenAI launch table)

Multimodal:

- MMMU Pro no tools: **80.7%**; with tools: **82.0%** (OpenAI launch table)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 87.4% and BrowseComp at 87.5% show strong tool use; AutomationBench at 15.2% and OSWorld 50.2% cap the score.
- **Reasoning: 89/100.** GPQA Diamond 92.9% and FrontierMath T1-3 84.9% support high reasoning; AA Intelligence Index 55 and limited HLE/LCR publication cap it.
- **Context window: 93/100.** 1M official window with MRCR 72.5% at 512K-1M and GraphWalks 71.2% at 1M demonstrates real retrieval at scale, below perfect retention.
- **Multimodal: 78/100.** Text + image/audio/video/PDF input confirmed with MMMU Pro ~81% performance; output is text only and no audio/video generation.
- **Coding: 88/100.** SWE-bench Pro 63.4%, DeepSWE 69.6%, Terminal-Bench 87.4% and AA Coding Index 77.4 indicate strong agentic coding; no public LiveCodeBench/SciCode rows.
- **Cost efficiency: 64/100.** $2/$12 per MTok paid mid-tier pricing with July 2026 price cut; not free tier.
- **Overall Score: 87/100.** Mean of five quality dims (85 + 89 + 93 + 78 + 88) / 5 = 86.6, half-up to 87; best suited to balanced tool-enabled long-context work at paid mid-tier cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
