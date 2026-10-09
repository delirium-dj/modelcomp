# Solar Mini 4 — findings by Claude Opus 5.5
- Source: Upstage/Solar Mini 4, Upstage (`solar-mini4`, version `solar-mini4-260922`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Solar Mini 4. This is a paid model. No Free-tier API ID was verified. The only free access found is chatting in the Upstage Playground (Upstage docs: "Free — Chat with Solar Mini 4 in the Playground").
- **Short description:** Solar Mini 4 is Upstage's cost-efficient, compact model built for agentic use. Upstage says it is designed to handle repetitive tasks—including information retrieval, structured output generation, and tool use—using less compute and at lower cost. Alias/variant: `solar-mini4` is an alias for the dated version `solar-mini4-260922`. Artificial Analysis evaluates the reasoning version. Upstage notes that Solar Mini 4 does not use reasoning by default. For tasks that require multi-step analysis, developers can set reasoning_effort.
- **Provider / access:**
  - Upstage: the listed platforms are Upstage Console, Playground, On-premises.
  - OpenRouter: `upstage/solar-mini4`.
  - ModelsLab: `upstage-solar-mini4`, with OpenAI-compatible `/chat/completions` and Anthropic-compatible `/v1/messages` endpoints.
  - API type: Chat Completions (OpenAI-compatible) on the third-party hosts. The Responses API was not verified. The native Upstage endpoint format was not verified from the sources I fetched.
  - OpenCode Zen: no listing found.
- **Release / knowledge:** 2026-09-22, per Upstage's version history (solar-mini4-260922 Alias: solar-mini4 Released on 2026-09-22). Some third-party hosts list Sep 23, 2026. Training-data cutoff is February 2026.
- **IDs:** `upstage/solar-mini4` (OpenRouter); `solar-mini4` / `solar-mini4-260922` (Upstage). There is no Free ID on OpenCode Zen, and no Zen listing was verified.
- **Context window:** 512K total (vendor figure). 512K context length and up to 128K output tokens. OpenRouter lists a 524,288 token context window, maximum output of 131,072 tokens. The Artificial Analysis model page says 1M tokens, which conflicts with the vendor docs, so I used the vendor's 512K.
- **Modalities:**
  - Input/output: text in, text out. No image, audio, video or PDF input was found. Surfmind lists Input: Text and Output: Text.
  - Reasoning: yes (optional, set via `reasoning_effort`).
  - Features: Supports chat, reasoning, structured outputs, and tool calling. JSON mode and structured output are listed by ModelsLab.
  - Languages: English, Korean and Japanese.
- **Pricing (as of 2026-10-09):**
  - Paid, Upstage list price: $0.10 per 1M input tokens, $0.40 per 1M output, $0.01 per 1M cached.
  - Current promotion: 70% off through Oct 10 (UTC).
  - OpenRouter: $0.05 per million input tokens, $0.20 per million output tokens.
  - Real per-task cost is higher than the token price suggests. Artificial Analysis reports $0.36 per task to evaluate Solar Mini 4 on the Intelligence Index, which is about 5x GPT-6 Luna (max).
  - Free-tier privacy caveat: no free API tier was verified. Check the Playground's data-use terms before submitting sensitive data.
- **Architecture:** Proprietary sparse MoE with 35B total parameters with 3B active. The weights are not open. Artificial Analysis notes that as a proprietary model, its size cannot be independently verified.
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: no verified public score found. Artificial Analysis reports Terminal-Bench 4.0 instead: **1%** (It scores 1% on Terminal-Bench 4.0 and 22% on AutomationBench-AA.)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1072 Elo** (Artificial Analysis harness): it scores 1072 Elo on GDPval-AA and 872 Elo on AA-Briefcase. OpenRouter's AA table shows "29.5%" for GDPval-AA in a different unit; I used the Elo figure.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. Other agentic results: AutomationBench-AA **22.3%** (Upstage blog; 22% per Artificial Analysis) and AA-Briefcase **872 Elo**.

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: **25.8%** (Artificial Analysis, via the OpenRouter benchmarks table)
- LCR / MLCR: **83.3%**, AA-LCR v1.1 (Upstage blog and Artificial Analysis). AA says it scores 83% on AA-LCR v1.1, matching MiniMax-M3 and GPT-6 Luna (max).
- CritPt: **1.4%** (Artificial Analysis, via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1 / #129**
  - Index: Solar Mini 4 scored 24.1 on the Artificial Analysis Intelligence Index v4.3.2.
  - Rank: Intelligence Index: #129, as aggregated by cloudprice.net.
  - BenchLM: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **18.4% / ~35.8%**
  - The ~35.8% hallucination rate is derived as 100 − 64.2%. Artificial Analysis publishes the non-hallucination rate (64.2%), not a hallucination rate.
  - The AA-Omniscience index is −11: Solar Mini 4 scores -11 on AA-Omniscience with 18% accuracy.

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **47.6%** (Artificial Analysis and Upstage blog). Solar Mini 4 scored 83.3% on AA-LCR, which measures long-context reasoning, and 47.6% on SciCode.
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other:
  - Terminal-Bench 4.0: **1%** (Artificial Analysis). AA describes agentic coding is a relative weakness.
  - DeepSWE / AA Coding Index: no verified public score found.

Long context:
- No MRCR, RULER or GraphWalks retrieval results were reported. The only long-context measure is AA-LCR v1.1 (long-context reasoning) at 83.3%.
### Normalized scores (1-100)
- **Tool use: 35/100.**
  - Evidence: Terminal-Bench 4.0 is 1%, AutomationBench-AA is 22.3%, GDPval-AA is 1072 Elo (far below the frontier ~1750) and AA-Briefcase is 872 Elo.
  - What caps it: there is no TB2.1 or Tau3 data, and agentic terminal performance is near zero.
- **Reasoning: 58/100.**
  - Evidence: HLE of 25.8% is strong for a 3B-active model, and AA-LCR is 83.3%.
  - What caps it: the AA Index is 24.1, far below the frontier 60+. CritPt is 1.4%, Omniscience accuracy is 18.4%, and there is no GPQA score.
- **Context window: 87/100.**
  - Tier: the 500K–1M tier (85–94). The vendor-verified window is 512K (524,288 tokens) with 128K output, which sits at the low end of the tier.
  - The strong AA-LCR (83.3%) puts it slightly above the tier floor.
  - What caps it: there is no MRCR or RULER retrieval result at 512K. AA's 1M claim was not used because it conflicts with the vendor docs.
- **Multimodal: 15/100.** Text-only input and output. No image, audio, video or PDF support was found.
- **Coding: 45/100.**
  - Evidence: SciCode of 47.6% is close to the frontier 55% line.
  - What caps it: Terminal-Bench 4.0 is 1%, and there are no SWE-bench, LiveCodeBench or DeepSWE scores.
- **Cost efficiency: 94/100.**
  - List price is $0.10/$0.40 ($0.01 cached), about 97 on the price scale. Promo/OpenRouter pricing is $0.05/$0.20.
  - Deducted for very high verbosity: about 88K output tokens per task and $0.36 per AA Index task, roughly 5x GPT-6 Luna (max).
- **Overall Score: 48/100.**
  - Calculation: (35 + 58 + 87 + 15 + 45) / 5 = 48.0.
  - Best fit: cheap, text-only, long-document reasoning and structured-output or retrieval workloads, especially Korean/English/Japanese. Not suitable for agentic coding or terminal work.
---
## Signature
- Provided by: **Claude Opus 5.5 (anthropic/claude-opus-5-5)** — 2026-10-09
- Method: public internet research on 2026-10-09 using the Upstage console docs and blog, the Artificial Analysis model page/article/X post, and the OpenRouter, ModelsLab, Surfmind and cloudprice.net listings. Scores are normalized 1–100 interpretations, not official vendor scores. The search tool hit its usage limit before I could check OpenCode Zen, models.dev, HuggingFace, BenchLM or LiveCodeBench directly, so those entries are marked "no verified public score found".
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.