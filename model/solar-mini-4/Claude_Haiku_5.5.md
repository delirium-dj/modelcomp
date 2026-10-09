# Solar Mini 4 — findings by Claude Haiku 5.5

- Source: Upstage/Solar Mini 4, e.g. Upstage (`solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4. No free tier verified. A third-party blog claims it is free inside Hermes Agent, but I could not confirm this.
- **Short description:** Upstage's compact, proprietary 35B-total / 3B-active mixture-of-experts text model, pretrained for high-volume agentic workloads (tool calling, structured output, retrieval). Upstage is a South Korean AI company. Top use case is cheap, fast agent backends. Not a variant or alias of another model, though the API accepts both a stable alias (`solar-mini4`) and a dated snapshot (`solar-mini4-260922`).
- **Provider / access:** Upstage Console API `solar-mini4` (snapshot `solar-mini4-260922`), base URL `https://api.upstage.ai/v1`, shown in an OpenAI-SDK-style example, so likely Chat Completions-compatible (not explicitly confirmed). OpenRouter `upstage/solar-mini4`. Also Solar Chat and on-premises deployment. OpenCode Zen: no verified listing found.
- **Release / knowledge:** Released 2026-09-23 (OpenRouter and cloudprice listings). Knowledge cutoff: no verified public figure found.
- **IDs:** `openrouter/upstage/solar-mini4`; `upstage/solar-mini4` (Upstage API alias `solar-mini4`, pinned `solar-mini4-260922`). No Free ID exists on OpenCode Zen (none verified).
- **Context window:** 524,288 tokens total (OpenRouter, Upstage listings), max output 131,072 tokens (OpenRouter). Some third-party sites say 512K and 128K. Verified from the OpenRouter model page, not measured independently.
- **Modalities:** Text in / text out. Reasoning: partly. Upstage says it does not reason by default and accepts a reasoning-effort setting (low through max). Artificial Analysis describes it as a reasoning model using about 72K reasoning tokens per Intelligence Index task. Tool calls: yes. Structured outputs / JSON mode: yes (surfmind, lmmarketcap listings).
- **Pricing (as of 2026-10-07):** $0.05 input / $0.20 output / $0.005 cached input per 1M tokens (OpenRouter, neura.market). Paid only; no free tier verified. Conflict: an Artificial Analysis article gives $0.10 input / $0.40 output. Privacy: Upstage offers zero data retention (ZDR) only on BYOK setups with a ZDR-enabled organization.
- **Architecture:** 35B total / 3B active parameters, mixture-of-experts. Proprietary, closed weights (Artificial Analysis). Parameter counts are Upstage's claims and are not independently verified.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported by Artificial Analysis: **1.0%**, a different and harder benchmark version)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **29.5%** (Artificial Analysis via OpenRouter; reported as a percentage, not an Elo rating, so no Elo is verified)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**. AutomationBench-AA: **22%** (AlphaSignal report, Artificial Analysis) is the closest agentic metric.

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **25.8%** (Artificial Analysis via OpenRouter)
- LCR / MLCR: **83.3%** on AA-LCR (Artificial Analysis via OpenRouter; AlphaSignal reports 83% on AA-LCR v1.1)
- CritPt: **1.4%** (Artificial Analysis via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1 / #129** (Artificial Analysis Intelligence Index v4.3.2; rank #129 from cloudprice listing, date unverified). BenchLM: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **18.4% / 64.2%** (AA-Omniscience via OpenRouter; Artificial Analysis article gives 18% accuracy and an Omniscience index of -11)

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **47.6%** (Artificial Analysis via OpenRouter)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**. Terminal-Bench 4.0 at 1.0% (Artificial Analysis) is the only terminal-coding signal.

Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported. AA-LCR (83.3%) measures long-document reasoning, not retrieval at 512K.

### Normalized scores (1-100)

- **Tool use: 35/100.** Evidence is thin: GDPval-AA 29.5% (percentage, no Elo), AutomationBench-AA 22%, and Terminal-Bench 4.0 at 1.0%. Tau3 and Terminal-Bench 2.1 are unverified, so the frontier and mid-tier bands cannot be checked. Capped by the terminal-agent result.
- **Reasoning: 45/100.** HLE 25.8% sits between the mid and frontier bands, and AA-LCR is 83.3%. The Intelligence Index of 24.1 is far below the 60+ frontier band, and CritPt at 1.4% is very low. GPQA is unverified. Capped by the Intelligence Index and CritPt.
- **Context window: 85/100.** 524,288 total tokens falls in the 500K–1M tier (85–94). Scored at the bottom of that tier because no retrieval test at 512K+ (MRCR/RULER) was found.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 40/100.** SciCode 47.6% is the main evidence and sits below the 55%+ frontier band. Terminal-Bench 4.0 at 1.0% and no SWE-bench, LiveCodeBench, or DeepSWE scores pull it down.
- **Cost efficiency: 97/100.** On the listed $0.05 / $0.20 price, this is cheaper than the $0.10 / $0.20 reference point (97–99). Caveat: Artificial Analysis reports about $0.36 per completed Intelligence Index task and about 88K output tokens per task (verbose output). If the $0.10 / $0.40 price is correct, the score is still about 97.
- **Overall Score: 44.0/100.** Mean of the five non-cost dimensions: (35 + 45 + 85 + 15 + 40) / 5 = 44.0. Best fit: high-volume, low-cost agent or long-context pipelines where the 524K window and price matter more than frontier reasoning or coding. Not recommended for hard coding, complex multi-step tool use, or tasks needing multimodal input.

---

## Signature

- Provided by: **Claude Haiku 5.5 (anthropic/claude-haiku-5-5)** — 2026-10-09
- Method: public internet research (OpenRouter, Upstage blog and docs, Artificial Analysis articles and listings, cloudprice, neura.market, third-party aggregators for cross-checks); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.