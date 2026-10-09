# GPT-6.1 Sol — findings by Claude Sonnet 5.5
- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-6.1 Sol (paid only; no Free-tier variant found)
- **Short description:** OpenAI's mid-tier reasoning model in the GPT-6 series, an upgrade to GPT-6 Sol that sits below GPT-6 Astra and above GPT-6 Luna. Top use case is agentic coding, computer use and business workflows at roughly one-fifth of Astra's task cost. It is the only 6.1 model; no GPT-6.1 Astra exists (DataCamp).
- **Provider / access:** OpenAI API `gpt-6.1-sol`; OpenRouter `openai/gpt-6.1-sol`; also listed on GitHub Copilot, Vercel AI Gateway, Azure AI Foundry and models.dev (DataCamp). Tool calling requires the Responses API. Chat Completions works only without tools. `none` and `minimal` reasoning effort are not supported.
- **Release / knowledge:** 2026-09-29 (OpenAI DevDay); knowledge cutoff: no verified public score found
- **IDs:** `openai/gpt-6.1-sol` (OpenRouter), `gpt-6.1-sol` (OpenAI API). No OpenCode Zen ID or Free ID verified.
- **Context window:** 1,050,000 total, 128,000 max output. Verified by OpenRouter, Artificial Analysis ("1M tokens") and DataCamp. Prompts over 272,000 input tokens are billed at 2x input and 1.5x output for the whole request.
- **Modalities:** Text and image in (file input also listed on OpenRouter; PDF/video not independently verified); text out. Reasoning always on (low, medium, high, xhigh, max). Tool calls via Responses API. JSON mode: no verified public score found.
- **Pricing (as of 2026-10-09):** Paid: $2.00 in / $10.00 out / $0.10 cached per 1M (cache writes $2.50). Batch and Flex are 50% below standard; Fast mode is 2x. Promotional pricing is listed through at least 2026-11-21 (DataCamp). Free-tier privacy caveat: not applicable, no free tier.
- **Architecture:** Proprietary; parameter count, MoE and open-weights status not disclosed
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**. Related: Terminal-Bench 4.0 on Vals AI shows 55.05% ±1.82, rank 6/44, but the scraped table layout is ambiguous. Terminal-Bench Science 0.1: $5.47/task at max effort (OpenAI via DataCamp); accuracy no verified public score found (Astra 68.1%). Vals AI ranks it #2 of 38 on Terminal-Bench Science.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1486 (High) / 1510 (Xhigh)** (Artificial Analysis, GDPval-AA v2.1; not on the legacy ~1750+ scale)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**. Other agentic results: AutomationBench-AA **64% (High) / 67% (Xhigh)** (Artificial Analysis); OSWorld 2.0 offline set **71.4%** at max effort (OpenAI via Vellum; Astra 73.5%).
Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **52.9% (Max)** / 52.6% (Xhigh) (Artificial Analysis via OpenRouter)
- LCR / MLCR: **84% (Low effort)** (Artificial Analysis via Dataconomy); higher-effort value no verified public score found
- CritPt: **31.7% (Max and Xhigh)** (Artificial Analysis via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **52 (Max; 51.8) / #6** (Artificial Analysis, index v4.3.2; rank per apxml). Xhigh 51, High 50, Medium 48, Low 42. Vals Index 61.15%, #8 of 44. BenchLM: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**. Separate OpenAI result: factual-error share on user-flagged ChatGPT conversations fell from 11.4% to 7.7% at low effort (vendor-reported, different benchmark).
Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**. Related: LiveBench Coding 0.81, rank 15; LiveBench Agentic Coding 0.57, rank 22 (apxml).
- SciCode / AA-SciCode: **55.7% (Xhigh)** / 55.8% High / 54.2% Max (Artificial Analysis via OpenRouter)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 75.2%** at higher reasoning settings (OpenAI via Vellum; Layer3 and DataCamp say it matches Astra's ~74.8%, so the figures are vendor-reported and slightly inconsistent). WebDev Arena 1757, rank 4 (apxml).
Long context:
- No MRCR / RULER / GraphWalks result reported. Only AA-LCR 84% (Low effort); window verified at 1,050,000.
### Normalized scores (1-100)
- **Tool use: 82/100.** Evidence: AutomationBench-AA 67%, OSWorld 2.0 71.4%, GDPval-AA v2.1 1510. Capped because TB2.1 and Tau3 have no verified score, and GDPval-AA is on a different scale from the methodology thresholds.
- **Reasoning: 90/100.** Evidence: HLE 52.9%, CritPt 31.7%, AA Index 52 (#6). Capped because GPQA Diamond is unverified and the AA Index is below the ~60 frontier threshold.
- **Context window: 95/100.** Tier: ≥1M, with a verified 1,050,000 window. Not 100 because there is no ≥98% retrieval evidence at 512K+ (only AA-LCR 84%), and pricing steps up at 272K.
- **Multimodal: 70/100.** Text and image in, text out. File input is listed on OpenRouter but PDF/video is unverified, so this is capped at the image-in band. It could reach 75+ if PDF is confirmed.
- **Coding: 92/100.** Evidence: DeepSWE v1.1 75.2% (vendor-reported), SciCode 55.7%. Capped because SWE-bench Verified, LiveCodeBench and TB2.1 are unverified, and DeepSWE comes from third-party reporting of OpenAI numbers.
- **Cost efficiency: 72/100.** $2/$10 sits between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors. Prompts over 272K tokens raise the price to $4/$15 for the whole request.
- **Overall Score: 85.8/100.** (82 + 90 + 95 + 70 + 92) / 5 = 85.8. Best fit: default model for agentic coding, computer use and business workflows. Escalate to GPT-6 Astra for security research and wet-lab reasoning, and keep a human review step on unattended runs (coding deception 1.50%, unwanted persistence 23.5%, vendor-reported).
---
## Signature
- Provided by: **Claude Sonnet 5.5 (anthropic/claude-sonnet-5-5)** — 2026-10-09
- Method: Public internet research (Artificial Analysis, Vals AI, OpenRouter, OpenAI system card addendum, DataCamp, Vellum, apxml, Dataconomy); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.