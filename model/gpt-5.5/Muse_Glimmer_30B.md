# GPT-5.5 — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-5.5
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI flagship agentic model released April 2026 for coding, computer use, knowledge work and early scientific research. Stronger agentic coding and reasoning than GPT-5.4 with improved token efficiency.
- **Provider / access:** OpenAI ChatGPT Plus/Pro/Business/Enterprise, Codex, API Responses and Chat Completions APIs. No Free ID on Zen.
- **Release / knowledge:** 2026-04-23 release. Knowledge cutoff not publicly verified.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,000,000 tokens total API. Verified via OpenAI pricing page stating 1M context window for gpt-5.5.
- **Modalities:** text in/out, image in, reasoning yes, tool calls yes, JSON mode. Vision capability demonstrated on MMMU Pro.
- **Pricing (as of 2026-10-20):** $5 per 1M input tokens / $30 per 1M output tokens. GPT-5.5 Pro $30 / 1M input / $180 / 1M output. Paid only.
- **Architecture:** proprietary

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI Introducing GPT-5.5, 2026-04-23)
- OSWorld-Verified: **78.7%** (OpenAI Introducing GPT-5.5)
- Toolathlon: **55.6%** (OpenAI Introducing GPT-5.5)
- MCP Atlas: **75.3%** (OpenAI Introducing GPT-5.5, tool use table)
- Tau2-bench Telecom original prompts: **98.0%** (OpenAI Introducing GPT-5.5)
- GDPval wins or ties: **84.9%** (OpenAI Introducing GPT-5.5)
- BrowseComp: **84.4%** (OpenAI Introducing GPT-5.5)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI Introducing GPT-5.5)
- Humanity's Last Exam no tools: **41.4%** (OpenAI Introducing GPT-5.5)
- Humanity's Last Exam with tools: **52.2%** (OpenAI Introducing GPT-5.5)
- FrontierMath Tier 1–3: **51.7%** (OpenAI Introducing GPT-5.5)
- FrontierMath Tier 4: **35.4%** (OpenAI Introducing GPT-5.5)
- BixBench: **80.5%** (OpenAI Introducing GPT-5.5)

Coding:

- SWE-Bench Pro Public: **58.6%** (OpenAI Introducing GPT-5.5)
- Terminal-Bench 2.0: **82.7%** (OpenAI Introducing GPT-5.5)
- Expert-SWE Internal: **73.1%** (OpenAI Introducing GPT-5.5)
- SciCode: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Graphwalks BFS 256k f1: **73.7%** (OpenAI Introducing GPT-5.5)
- Graphwalks parents 256k f1: **90.1%** (OpenAI Introducing GPT-5.5)
- Graphwalks BFS 1mil f1: **45.4%** (OpenAI Introducing GPT-5.5)
- Graphwalks parents 1mil f1: **58.5%** (OpenAI Introducing GPT-5.5)
- OpenAI MRCR v2 8-needle 256K-512K: **81.5%** (OpenAI Introducing GPT-5.5)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 82.7% and OSWorld-Verified 78.7% show strong agentic tool coordination; GDPval 84.9% and Tau2 98.0% support high tool use. Capped by Toolathlon 55.6% and lack of public Claw-Eval.
- **Reasoning: 94/100.** GPQA Diamond 93.6% and HLE 52.2% with tools meet frontier reference. FrontierMath 51.7% Tier1-3 is solid. Capped by HLE no-tools 41.4%.
- **Context window: 96/100.** 1M total API window with Graphwalks retrieval 90.1% at 256k and 58.5% at 1M. Tier ≥1M maps to 95-100.
- **Multimodal: 76/100.** MMMU Pro no tools 81.2% and with tools 83.2% indicate image input capability. Text/image in, text out. No verified audio/video in.
- **Coding: 90/100.** SWE-Bench Pro 58.6%, Terminal-Bench 82.7%, Expert-SWE 73.1% show strong agentic coding. Token efficiency gains noted vs GPT-5.4. Capped by lack of published LiveCodeBench/SciCode numbers.
- **Cost efficiency: 45/100.** $5/$30 per 1M is premium pricing vs $1.25/$4.25 frontier reference ~88. Paid only.
- **Overall Score: 89/100.** Mean of five quality dims (Tool 88 + Reasoning 94 + Context 96 + Multimodal 76 + Coding 90) /5 = 88.8 → 89. Best-fit for high-intensity agentic coding and research with budget tolerance.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
