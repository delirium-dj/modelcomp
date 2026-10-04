# GPT-5.6 Terra — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier (GA 2026-07-09) — the "mini"-class successor, competitive with GPT-5.5 at roughly half the cost; sits between flagship Sol and budget Luna. Free/Go ChatGPT Work users can access it.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), ChatGPT Work, Codex, Azure ($2.20/$13.20), AWS Bedrock ($2.20/$13.20). Chat Completions + Responses + Batch.
- **Release / knowledge:** 2026-07-09 (GA; preview 2026-06-26); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-terra` (OpenAI API); `openai/gpt-5.6-terra` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,050,000 tokens; 128K max output. Prompts >272K input bill at 2x input / 1.5x output ($4/$18).
- **Modalities:** text, image, PDF in; text out; reasoning yes (efforts none/low/medium default/high/xhigh/max); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $2 / $12 per 1M in/out (cut 20% on 2026-07-30 from $2.50/$15); cached input $0.20; cache write $2.50 (1.25x); Batch 50%; web search tool $10/1K calls.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch; 84.3% per AI Release Tracker); Terminal-Bench Hard **57.6–62.9%** (AA, high–max)
- τ²-Bench Telecom: **86.3% max / 78.4% high** (AA via OpenRouter)
- Toolathlon: **53.1%** (OpenAI launch)
- OSWorld 2.0: **50.2%** (OpenAI launch)
- BrowseComp: **87.5%** (OpenAI launch)
- Agents' Last Exam: **50.4%** (OpenAI launch)
- GDPval-AA v2: **1593 Elo** (OpenAI launch); AA-measured GDPval-AA **46.6% max**
- AA Agentic Index: **43.2 max** (AA)
- Cyber: CTF **91.8%**, SEC-Bench Pro **57.7%**, ExploitBench **52.9%**, ExploitGym **23.2%** (OpenAI launch)
- Frontier-Bench v0.1: **20.8%** (Harbor/Laude via AI Release Tracker)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI); **92.5% max** (AA)
- HLE: **42.9% max / 38.5% high** (AA)
- FrontierMath v2: Tier 1–3 **84.9%** / Tier 4 **68.3%** (OpenAI launch)
- AA Intelligence Index: **55 (v4.1, July)** / **42.1 max** (current methodology)
- CritPt: **30.0% max** (AA)
- IFBench: **71.2% max** (AA)
- AA-Omniscience: accuracy **46.8%** / non-hallucination **12.1%** (AA max — weak)
- Arena Elo: Text **1467** / Code **1521**
- BullshitBench v2: **53%**; Gray Swan IPI k=1: **5.4%** (AI Release Tracker)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch)
- DeepSWE v1.1: **69.6%** (OpenAI launch)
- CursorBench 3.2: **64.9%** (AI Release Tracker)
- AA Coding Index: **76.7 max** (#6 of 198 per Design for Online)
- SciCode: **55.0% max** (AA)
- SWE-bench Verified / LiveCodeBench: no verified public score found in sources checked

Long context:

- OpenAI MRCR v2 (8-needle): **89.6%** at 256K–512K; **72.5%** at 512K–1M (OpenAI)
- GraphWalks BFS f1: **76.9%** at 256K; **71.2%** at 1M (OpenAI)
- AA-LCR: **83.0% max** (AA)

Multimodal (supporting): MMMU-Pro **80.7%** (OpenAI launch)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 87.4%, τ² 86.3% (max), BrowseComp 87.5% and Agents' Last Exam 50.4% are near-flagship; capped by OSWorld 50.2%, Toolathlon 53.1% and AA GDPval 46.6% sitting a tier below Sol/Fable-class numbers.
- **Reasoning: 85/100.** GPQA 92.9%, AA Index 55 (v4.1) and FrontierMath T4 68.3% are strong mid-frontier; capped by HLE 42.9% and weak Omniscience non-hallucination (12.1%).
- **Context window: 95/100.** 1.05M window (95–100 tier) with MRCR 89.6% at 256–512K, GraphWalks 71.2% at 1M and AA-LCR 83.0% — solid but under the ≥98% bar for 100; the >272K billing step is a caveat.
- **Multimodal: 68/100.** Text/image/PDF in, text out (top of the image-in band for the PDF support per OpenCode Data); no audio/video input, no non-text output.
- **Coding: 86/100.** DeepSWE 69.6%, SWE-bench Pro 63.4%, TB 2.1 87.4% and Coding Index 76.7 (#6 of 198) are excellent for a mid-tier; capped below the 74%+ DeepSWE frontier ref.
- **Cost efficiency: 75/100.** $2/$12 sits between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors; $0.20 cache reads, 50% Batch and free-tier ChatGPT Work access help; the 272K long-context surcharge dents it.
- **Overall Score: 84.2/100.** Mean of (87, 85, 95, 68, 86) = 84.2 — the sensible default OpenAI model for everyday agentic work when Sol/Astra are overkill.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI GPT-5.6 launch + pricing posts + developer docs, OpenRouter, AI Release Tracker, OpenCode Data, Design for Online, llm-stats, Artificial Analysis via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
