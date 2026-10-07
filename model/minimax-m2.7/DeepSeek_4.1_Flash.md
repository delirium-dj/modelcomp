# MiniMax M2.7 — findings by DeepSeek 4.1 Flash

- Source: MiniMax / MiniMax-M2.7 (`minimax-m2.7` — requested as Free; no free ID found on OpenCode Zen)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (published name MiniMax-M2.7)
- **Short description:** MiniMax's March 2026 agent-oriented model, marketed for autonomous, real-world productivity with continuous improvement. It is a mid-size open-weights MoE (229B total / 10B active per earlier coverage) with a 205K window — competent at tool use and mid-tier coding, but text-only and a full generation behind the current frontier.
- **Provider / access:** MiniMax's own API plus AtlasCloud (cheapest credible route), Groq, OpenRouter and others. **No `minimax-m2.7-free` ID was found on OpenCode Zen as of 2026-09-18**, so this file is scored on paid pricing.
- **Release / knowledge:** Released 2026-03-18.
- **IDs:** `minimax-m2.7` (OpenRouter / MiniMax). No OpenCode Zen Free ID. Weights: `MiniMaxAI/MiniMax-M2.7` on Hugging Face (open weights, non-commercial license per one tracker).
- **Context window:** 205,000 tokens (alternate listings 196K–229K per provider; BenchLM prints 200K). Max output not reproduced in the sources checked.
- **Modalities:** text in / text out only — no image, audio, video or PDF input; tool calls and reasoning yes; structured output is provider-dependent.
- **Pricing (as of 2026-09-18):** $0.30 / 1M in and $1.20 / 1M out — the list price was cut 50% on 2026-08-14 — with the cheapest credible provider (AtlasCloud) at those same rates after a September increase from $0.25/$1.00. No free tier; a price tracker also lists a $0.042 / 1M cached-input rate.
- **Architecture:** open-weights Mixture-of-Experts, 229B total parameters with ~10B active (per Groq's serving documentation for the same checkpoint); license described as non-commercial by one tracker, so commercial self-hosting needs review.

### Raw benchmarks found

> BenchLM's page (`benchlm.ai/models/minimax-m2-7`, checked 2026-10-07) computes a
> conservative **47.7 / 100, rank #104 of 887** overall on 40 of 621 benchmarks;
> the rows below mix vendor, Vals AI, Artificial Analysis, Claw-Eval and Arcee rows.

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **84.8%** (Epoch AI via Model Beat; BenchLM's τ²-bench row is the same 84.8% via Artificial Analysis)
- Terminal-Bench: **45.1%** (Epoch AI via Model Beat; listed as Terminal-Bench without a version suffix — treat as provisional); Terminal-Bench 2.0 **57%** and Terminal-Bench 2.1 (Vals) **48.7%** (MiniMax model page / Vals AI via BenchLM)
- Agentic index: 40th percentile of tracked models (Epoch AI via Model Beat); AA Agentic Index **16.8%** (Artificial Analysis via BenchLM)
- GDPval-AA: **1087** raw / **25.7%** normalized (Artificial Analysis via BenchLM)
- Claw-Eval: **48.7%** (Claw-Eval leaderboard via BenchLM); ClawProBench: **no verified public score found**
- Toolathlon: **46.3%**; MM-ClawBench: **62.7%**; MLE-Bench Lite: **66.6%** (MiniMax model page via BenchLM)
- APEX-Agents-AA: **10.6%**; Gert Labs: **40.40%** (Artificial Analysis / Gert Labs via BenchLM)
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (Epoch AI via Model Beat; AA-GPQA 87.4%, Arcee comparison 87.0%, Vals 86.6% via BenchLM)
- HLE: **29.6%** (improved from 28.1% in August; AA-HLE 29.6% via BenchLM)
- AA-LCR: **78.3%** (Artificial Analysis via BenchLM)
- WeirdML: **37.0%** (Epoch AI via Model Beat)
- MMLU-Pro: **80.8%** (Arcee) / **80.4%** (Vals) via BenchLM; CritPt **0.6%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **22.8** (Artificial Analysis via BenchLM); a tracker places it at the **42nd percentile**, and a separate index lists it at 42.0 with a 40.0 Agentic Index
- AA-Omniscience Accuracy **26.8%**, Hallucination Rate **35.6%**, Omniscience Index **0.8%** (Artificial Analysis via BenchLM)
- SimpleQA / MLCR: **no verified public score found**

Coding:

- SciCode: **50.1%** (revised up from 47.0% in September; AA-SciCode 50.1% via BenchLM)
- SWE-bench Verified: **75.4%** (Arcee Trinity-Large-Thinking comparison via BenchLM); SWE-bench Pro **56.2%** and SWE Multilingual **76.5%** (MiniMax model page via BenchLM)
- SWE-Rebench: **51.9%**; Multi-SWE Bench: **52.7%**; VIBE-Pro: **55.6%**; NL2Repo: **39.8%** (leaderboards / vendor via BenchLM)
- LiveCodeBench (Vals): **79.9%**; SWE-bench (Vals): **73.8%**; Vibe Code Bench: **27.04%**; React Native Evals: **71.4%** (Vals AI / leaderboards via BenchLM)
- WebDev Arena: **1398 Elo** (Epoch AI via Model Beat); Design Arena Website **1249** (OpenRouter via BenchLM)
- Coding index: 48th percentile of tracked models; AA Coding Index **52.6%** (Artificial Analysis via BenchLM)
- DeepSWE: **no verified public score found**

Instruction following / math:

- AA-IFBench: **75.7%**; AIME 2025: **80.0%** (Artificial Analysis / Arcee via BenchLM)

Long context:

- AA-LCR **78.3%** is the only published long-context reasoning figure (Artificial Analysis via BenchLM); no MRCR/RULER/GraphWalks recall value published, and the 205K window has no retrieval evidence behind it in the sources checked.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 84.8% is a strong tool-agent reliability signal, but Terminal-Bench 45.1% and a 40th-percentile agentic index mean it is not competitive with the current agent leaders; several agent benchmarks are unpublished.
- **Reasoning: 80/100.** GPQA Diamond 87.4% is strong for the class, but HLE 29.6%, WeirdML 37.0% and a 42nd-percentile Intelligence Index show modest depth.
- **Context window: 70/100.** 205,000 tokens sits mid-pack in a market of 1M windows (and roughly 1/24th of the 262K→1M cohort's leaders in value terms), with no recall evidence.
- **Multimodal: 15/100.** Text-in/text-out only; no image, audio, video or PDF input.
- **Coding: 80/100.** SciCode 50.1% and a 1398 WebDev Arena Elo are solid mid-tier results; the new SWE-bench Verified 75.4% and SWE-bench Pro 56.2% rows now give a repository-level signal, with Vals LiveCodeBench 79.9% the strongest coding number.
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M after a 50% cut is cheap, with a $0.042 cached rate; no free tier and a non-commercial open-weights license limit the value for commercial self-hosting.
- **Overall Score: 65/100.** (78 + 80 + 70 + 15 + 80) / 5 = 64.6 → **65**. Best fit: budget tool-use and scripting workloads where a 205K text window and paid-only access are acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Epoch AI and Artificial Analysis figures via Model Beat, BenchLM's MiniMax M2.7 page for Vals AI, Claw-Eval, Toolathlon, SWE-Rebench and Arcee rows, OpenRouter/Groq serving documentation, price-tracker listings, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
