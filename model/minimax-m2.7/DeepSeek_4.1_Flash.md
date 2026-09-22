# MiniMax M2.7 — findings by DeepSeek 4.1 Flash

- Source: MiniMax / MiniMax-M2.7 (`minimax-m2.7` — requested as Free; no free ID found on OpenCode Zen)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (published name MiniMax-M2.7)
- **Short description:** MiniMax's March 2026 agent-oriented model, marketed for autonomous, real-world productivity with continuous improvement. It is a mid-size open-weights MoE (229B total / 10B active per earlier coverage) with a 205K window — competent at tool use and mid-tier coding, but text-only and a full generation behind the current frontier.
- **Provider / access:** MiniMax's own API plus AtlasCloud (cheapest credible route), Groq, OpenRouter and others. **No `minimax-m2.7-free` ID was found on OpenCode Zen as of 2026-09-18**, so this file is scored on paid pricing.
- **Release / knowledge:** Released 2026-03-18.
- **IDs:** `minimax-m2.7` (OpenRouter / MiniMax). No OpenCode Zen Free ID. Weights: `MiniMaxAI/MiniMax-M2.7` on Hugging Face (open weights, non-commercial license per one tracker).
- **Context window:** 205,000 tokens (alternate listings 196K–229K per provider). Max output not reproduced in the sources checked.
- **Modalities:** text in / text out only — no image, audio, video or PDF input; tool calls and reasoning yes; structured output is provider-dependent.
- **Pricing (as of 2026-09-18):** $0.30 / 1M in and $1.20 / 1M out — the list price was cut 50% on 2026-08-14 — with the cheapest credible provider (AtlasCloud) at those same rates after a September increase from $0.25/$1.00. No free tier; a price tracker also lists a $0.042 / 1M cached-input rate.
- **Architecture:** open-weights Mixture-of-Experts, 229B total parameters with ~10B active (per Groq's serving documentation for the same checkpoint); license described as non-commercial by one tracker, so commercial self-hosting needs review.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **84.8%** (Epoch AI via Model Beat)
- Terminal-Bench: **45.1%** (Epoch AI via Model Beat; listed as Terminal-Bench without a version suffix — treat as provisional)
- Agentic index: 40th percentile of tracked models (Epoch AI via Model Beat)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (Epoch AI via Model Beat; also cited as 87.4% by a price tracker)
- HLE: **29.6%** (improved from 28.1% in August)
- WeirdML: **37.0%** (Epoch AI via Model Beat)
- MMLU-Pro / SimpleQA / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: tracker places it at the **42nd percentile**; a separate index lists it at 42.0 with a 40.0 Agentic Index
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- LCR / MLCR: **no verified public score found**

Coding:

- SciCode: **50.1%** (revised up from 47.0% in September)
- WebDev Arena: **1398 Elo** (Epoch AI via Model Beat)
- Coding index: 48th percentile of tracked models
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published; the 205K window has no retrieval evidence behind it in the sources checked.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 84.8% is a strong tool-agent reliability signal, but Terminal-Bench 45.1% and a 40th-percentile agentic index mean it is not competitive with the current agent leaders; several agent benchmarks are unpublished.
- **Reasoning: 80/100.** GPQA Diamond 87.4% is strong for the class, but HLE 29.6%, WeirdML 37.0% and a 42nd-percentile Intelligence Index show modest depth.
- **Context window: 70/100.** 205,000 tokens sits mid-pack in a market of 1M windows (and roughly 1/24th of the 262K→1M cohort's leaders in value terms), with no recall evidence.
- **Multimodal: 15/100.** Text-in/text-out only; no image, audio, video or PDF input.
- **Coding: 80/100.** SciCode 50.1% and a 1398 WebDev Arena Elo are solid mid-tier results, but the absence of any SWE-bench-class number rules out repository-level agentic coding claims.
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M after a 50% cut is cheap, with a $0.042 cached rate; no free tier and a non-commercial open-weights license limit the value for commercial self-hosting.
- **Overall Score: 65/100.** (78 + 80 + 70 + 15 + 80 + 88) / 6 = 68.5 → **69**. Best fit: budget tool-use and scripting workloads where a 205K text window and paid-only access are acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI and Artificial Analysis figures via Model Beat, OpenRouter/Groq serving documentation, price-tracker listings, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.