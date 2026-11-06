# Grok 4.7 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.7`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7. The successor to Grok 4.6 (66.69) — but **BenchLM assigns it no overall score and no rank** ("unranked") because it is too new for a stable score, while the repo's queue file already carries a computed Overall of 86.1. That gap between "unranked for lack of coverage" and "86.1 in the roster" is this model's defining evidence problem.
- **Short description:** A Grok 4.6-generation successor whose strongest asset is genuinely unusual — **AA-Omniscience hallucination rate 20.0%, the lowest measured in this research series** — paired with a solid agentic profile (GDPval-AA 1,718 Elo, AA AutomationBench 65.6%, AA Harvey LAB-adjacent figures) and **FrontierMath Tier 4 17.1%**. Its weaknesses are the 500K window (half the current standard), MazeBench 1%, and CritPt 17.7%.
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter, and OpenCode Zen (`xai/grok-4.7`) — the same partner-surface access pattern as Grok 4.6.
- **Release / knowledge:** released 2026-09-21 (the xAI model documentation's effective date). **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.7` (xAI, Zen); `x-ai/grok-4.7` (Openrouter).
- **Context window:** **500,000 tokens** — the same half-standard window as Grok 4.6.
- **Modalities:** **text and image in; text out** (xAI's lineup-wide statement).
- **Pricing (as of 2026-11-05):** **$2.00 input / $0.50 cached / $6.00 output per 1M below a 200K prompt**, with a **>200K long-context tier at $4.00 / $1.00 / $12.00** — identical to Grok 4.6's structure. Methodology anchors put $2/$6 near ~$1.25/$4.25 (≈88).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

xAI's Grok 4.7 launch post is the primary source (so its rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, Collinear and Openrouter supplying independent rows. 42 benchmarks total.

Agent / tool use — **the strongest dimension**:

- **GDPval-AA: 1,718 Elo** [AA] / 60.7% normalized — clears the 1,750+ reference only marginally short (by 32 Elo)
- **AA AutomationBench: 65.6%**; **AA ITBench: 42.1%**; AA-AnalystAgent: **52.5%**
- **AA Harvey LAB-adjacent: 19.6%** [AA] — weak legal agentic work
- **AA Briefcase: 1,657 Elo** [AA]
- **Terminal-Bench 4.0: 38.0%** (vendor) / **25.8%** [AA] — a 12.2-point gap, both far under frontier
- **Terminal-Bench 2.1 (Vals): 73.4%** — under the 88%+ reference
- **CWE-bench v1: 68.0%** (Collinear); CWE-Bench-AA: **68.3%**; **AA Cyber Index: 56.4%**; CyberGym-E2E-AA: 74.0%
- Hermes Bench: 74.4%; Hermes Index: 39.3%; **MazeBench: 1%**
- GDP.pdf: 20.0%; DeepsecBench-AA: 26.9%
- **τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, ALE: no verified public score found**

Reasoning / knowledge — **the best reliability in this research series**:

- **AA-Omniscience: index 31.2, accuracy 42.7%, hallucination rate 20.0%** — the **lowest hallucination rate measured anywhere in this research series**, below Muse Spark 1.2's 33.3%
- AA-HLE: **43.1%** — clears the 40%+ frontier reference
- AA Intelligence Index: **35.5%**; AA-LCR: **76.7%**; **CritPt: 17.7%**
- ARC-AGI-1: **89.5%**; ARC-AGI-2: **61.4%**; **ARC-AGI-3: 1.8%** (provider adapter 7.02%)
- FrontierMath v2 Tiers 1–3: **53.0%**; **Tier 4: 17.1%**
- HealthBench Professional: 56.7%; MLCR-AA: 20.0%
- **GPQA Diamond, MRCR: no verified public score found** — the primary reasoning reference is missing

Coding — mid-pack:

- DeepSWE: **71.0%** (vendor) — 3 points under the 74% reference; EEBench: 64.0% (vendor)
- **AA-SciCode: 57.4%** — clears the 55%+ reference
- **FrontierSWE v2: 29.5%**; FrontierCode 2.0: 28.6%; CursorBench 4.0: 46.3%; Bug Hunt Bench: 29.0 fixes
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro: no verified public score found** — so the 70%-index and SWE-bench references are unmeasured

Multimodal (image-in):

- Design Arena (website): **1,248 Elo**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found** — a single-benchmark visual suite

### Normalized scores (1–100)

- **Tool use: 76/100.** Above the methodology's mid band. **GDPval-AA 1,718 Elo is 32 Elo short of the 1,750 reference and AA AutomationBench 65.6% plus AA-AnalystAgent 52.5% are strong**, with CWE-Bench-AA 68.3% and AA Cyber Index 56.4% adding security-agentic depth. Capped because **Terminal-Bench 2.1 is 73.4%** (14.6 points under the reference), Terminal-Bench 4.0 is 38.0%/25.8%, AA Harvey LAB is 19.6%, MazeBench is 1%, and **τ³-Banking, MCP-Atlas, OSWorld, Toolathlon and Claw-Eval are entirely absent**.
- **Reasoning: 76/100.** Mid-band. **AA-Omniscience hallucination 20.0% is the lowest measured in this research series** — the model's single most decision-relevant property — and AA-HLE 43.1% clears the 40% reference, with AA-LCR 76.7% solid. Capped by **CritPt 17.7%, FrontierMath Tier 4 17.1%, ARC-AGI-2 61.4%, ARC-AGI-3 1.8%, an AA Intelligence Index of 35.5%, and the missing GPQA Diamond** — the methodology's primary reasoning reference. MLCR-AA 20.0% compounds it.
- **Context window: 85/100.** **500,000 tokens** places it in the methodology's 500K–1M tier (85–94) at the tier floor, and it is the same window as its predecessor. Scored at 85 rather than higher because AA-LCR is 76.7%, no MRCR figure exists, no max-output limit is published, and the **>200K tier doubles input cost**, making the top of the window economically gated.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on a single Design Arena result of 1,248 Elo. Held at 68 rather than above because the visual suite is **one benchmark** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision or ZeroBench figure — and there is no video or audio input.
- **Coding: 74/100.** Mid-band. DeepSWE 71.0% is 3 points under the 74% reference and AA-SciCode 57.4% clears the 55% reference, with EEBench 64.0% supporting. Capped by FrontierSWE v2 29.5%, FrontierCode 2.0 28.6%, CursorBench 4.0 46.3%, Bug Hunt Bench 29.0, and the **total absence of SWE-bench Verified, the AA Coding Index and LiveCodeBench**, so the 70%-index and SWE-bench references cannot be checked.
- **Cost efficiency: 88/100.** **$2.00/$0.50/$6.00 per 1M** maps directly onto the methodology's ≈88 anchor, and the 90% cache-read discount is a real mitigator for agentic loops. Held at exactly 88 rather than above because the **>200K tier doubles input cost**, there is no free tier, and it is priced identically to Grok 4.6 which scores 66.69 — so the price buys no generational advantage over its predecessor.
- **Overall Score: 75.8/100.** (76 + 76 + 85 + 68 + 74) / 5 = 75.8 → **76**. Recommendation: a **reliability-first agentic model** — the lowest hallucination rate measured in this research series (20.0%) combined with GDPval-AA 1,718 Elo and AA AutomationBench 65.6% at $2/$6 makes it unusually trustworthy for retrieval-heavy agent loops. Two cautions: **its Terminal-Bench and FrontierMath figures are weak** (2.1 73.4%, Tier 4 17.1%) so it is not a frontier reasoner; and **BenchLM leaves it unranked** because it is too new for a stable score, so the queue's 86.1 is a roster artefact rather than a measured one. Prefer Grok 4.6 for the same price unless the 20% hallucination rate is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using xAI's Grok 4.7 launch post and model documentation as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 42-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, Collinear and Openrouter) and xAI's pricing page. The central finding of this report is an evidence-gap note rather than a capability judgement: **BenchLM assigns Grok 4.7 no overall score and no rank ("unranked") while the repo's queue file already carries a computed Overall of 86.1** — that discrepancy is recorded explicitly rather than resolved in either direction. The lowest measured hallucination rate in this research series is attributed rather than presented bare. Missing benchmarks (τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, ALE, GPQA Diamond, MRCR, SWE-bench Verified, AA Coding Index, LiveCodeBench, and all multimodal benchmarks except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.7 launch post (primary benchmark source)](https://x.ai/news/grok-4-7)
  - [xAI — Grok 4.7 model documentation (pricing, context tiers)](https://docs.x.ai/developers/grok-4-7)
  - [BenchLM — Grok 4.7 benchmark scores (42 rows, unranked)](https://benchlm.ai/models/grok-4-7)
  - [Artificial Analysis — Grok 4.7](https://artificialanalysis.ai/models/grok-4-7)
  - [Vals AI — Grok 4.7 leaderboard results](https://www.vals.ai/models/grok_grok-4.7)
  - [ARC Prize — published semi-private results for Grok 4.7](https://arcprize.org/results/xai-grok-4-7)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
