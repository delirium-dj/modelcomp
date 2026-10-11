# MiMo V2.6 Pro — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Pro (`mimo-v2.6-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight (MIT) omnimodal flagship, released 2026-09-22, built around a single mixed RL run across coding, agents, vision and cybersecurity; tops the Artificial Analysis open-weight leaderboard as of launch week. Flagship of a four-model series (Pro / Flash / Pro-UltraSpeed / Distill-Qwen-9B).
- **Provider / access:** Xiaomi MiMo API platform (`platform.xiaomimimo.com`, model ID `mimo-v2.6-pro`, OpenAI-compatible chat completions), OpenRouter (`xiaomi/mimo-v2.6-pro`), **and OpenCode Zen `opencode/mimo-v2.6-pro`** (CORRECTION vs my 2026-09-29 report: now live and ranked #16 by weekly tokens with ~500K+ sessions; my earlier pass had only the Flash-Free sibling on Zen). Self-hostable via vLLM/SGLang (`XiaomiMiMo/MiMo-V2.6-Pro-RL` — weights link confirmed live on OpenCode Data).
- **Release / knowledge:** Announced 2026-09-22 (UTC+8; confirmed by OpenCode Data release-date field); Hugging Face repos live late 2026-09-21 UTC. Knowledge cutoff not stated publicly.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter), `opencode/mimo-v2.6-pro` (Zen), `mimo-v2.6-pro` (Xiaomi platform). No Free **Pro** ID on Zen.
- **Context window:** 1M tokens total — verified via OpenCode Data, HF model card metadata, and Artificial Analysis; **max output 131K** (OpenCode Data catalog — was "not publicly specified" in my 2026-09-29 report); hybrid attention (60 of 70 layers sliding-window) makes the window practical to serve.
- **Modalities:** Text + image + audio + video in (OpenCode Data confirms); text out; reasoning model; tool calls; JSON/structured output.
- **Pricing (as of 2026-10-11):** $0.47/M input, $0.94/M output, cached input $0.0050/M (OpenCode Data catalog — mild upward drift vs the $0.435/$0.87/$0.0036 recorded 2026-09-22 via AA/OpenRouter; both noted). Pro-UltraSpeed API-only variant at ~10x. MIT weights free to self-host.
- **Architecture:** Sparse MoE, 1.02T total / 42B active parameters, 384 routed experts (8 active), no shared experts; 70 layers; 681M-param MiMo ViT vision encoder; audio tokenizer + patch encoder; 5-layer MTP speculative drafter; MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **76.9** (Xiaomi model card via OpenCode Data; Claude Opus 5: 80.6, GPT-5.6 Sol: 74.9)
- OSWorld-Verified: **82.0%** (Xiaomi model card via OpenCode Data; Opus 5: 83.4)
- AutomationBench v1.0.6: **53.1** (Xiaomi model card via OpenCode Data; Opus 5: 50.3, GPT-5.6 Sol: 45.8)
- GDPval-AA v2.1: **1673 Elo** (Xiaomi model card via OpenCode Data; Opus 5: 1708)
- Terminal-Bench 4.0: **34.9** / Terminal-Bench 2.1: **89.9** (Xiaomi model card via OpenCode Data; Opus 5: 49.0 / 89.1)
- Agents' Last Exam: **31.6** (Xiaomi model card via OpenCode Data — new this pass); JobBench: **62** (new this pass)
- Claw-Eval / ClawProBench / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.x: **46** — **#1 of ~114 tracked open-weight models** (Artificial Analysis; next: GLM-5.3 max 45, Kimi K3 max 44; Claude Opus 5.5 at 58 shows the remaining frontier gap)
- GPQA Diamond: no verified public score found
- HLE: no verified standalone score found (included in AA index mixture)
- CritPt: no verified standalone score found
- AA-Omniscience Accuracy / Hallucination Rate: measured in the AA index; per-model values not publicly visible without subscription
- AA-LCR v1.1: measured in the AA index; standalone value not publicly visible

Coding:

- DeepSWE v1.1: **71.9** (Xiaomi model card via OpenCode Data; Opus 5: 74.0, GPT-5.6 Sol: 73.0; V2.5-Pro was 19.0)
- ProgramBench: **26.5** (Xiaomi model card via OpenCode Data; Opus 5: 37.0)
- MiMo Code Bench: **63.2** (Xiaomi model card via OpenCode Data — new this pass); MiMo VisualCoding (vendor-internal): 72.3 — provisional
- Terminal-Bench 4.0 / 2.1: 34.9 / 89.9 (see above)
- SWE-bench Verified / SWE-Pro: no verified public score found for this model (only for the 9B distill sibling)
- LiveCodeBench: no verified public score found
- SciCode: included in AA index; standalone value not publicly visible

Security (vendor-reported, new rows this pass):

- ExploitBench: **47.9** (Opus 5: 70.0, GPT-5.6 Sol: 78.5); ExploitGym: **17.8** (new); CyberGym: **94.0**; SEC-Bench Pro: **66.3** (new); MiMo Cyber Bench: **80.2** (new)

Long context:

- 1M-token window vendor-, OpenCode- and AA-verified; no public MRCR / RULER / GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: Toolathlon-Verified 76.9, OSWorld-Verified 82.0 and AutomationBench 53.1 near Claude Opus 5 / GPT-5.6 Sol level — exceptional for open weights. Capped: hardest suites still gap (TB 4.0 34.9 vs 49.0; ExploitBench 47.9 vs 70+; new ExploitGym 17.8); most numbers vendor-harness.
- **Reasoning: 82/100.** Unchanged: AA Intelligence Index 46 = #1 open-weight, statistical tie with GLM-5.3 (45) and Kimi K3 (44), ~12 points below the closed frontier (Opus 5.5: 58).
- **Context window: 91/100.** Raised from 90: 131K max output now catalog-verified alongside the 1M window and 99% cache discount; still capped by absent independent retrieval probes.
- **Multimodal: 80/100.** Unchanged: true omnimodal input (text/image/video/audio, OpenCode-confirmed) with dedicated encoders; text-only output and no independently verified MMU score beyond vendor-internal numbers.
- **Coding: 80/100.** Unchanged: DeepSWE 71.9 nearly matches Opus 5 (74.0); V2.5→V2.6 jump (19.0→71.9) dramatic; TB 2.1 89.9 ties the frontier. Capped by TB 4.0 (34.9) and ProgramBench (26.5); no SWE-bench Verified published.
- **Cost efficiency: 90/100.** Lowered from 92: catalog price drifted up ~8% ($0.435/$0.87 → $0.47/$0.94) — still the cheapest flagship-tier open-weight API price by far, plus free MIT self-hosting; capped by verbosity and slow 42 t/s default speed.
- **Overall Score: 83/100.** Mean of the five non-cost dims (84+82+91+80+80)/5 = 83.4 → 83 (unchanged). Best fit: teams wanting frontier-adjacent open-weight capability for agentic/coding loops at the lowest flagship API price, or MIT-licensed self-hosting with data residency.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data model page `xiaomi/mimo-v2-6-pro` incl. Zen availability, usage, catalog pricing and the Xiaomi HF model card benchmark table; Artificial Analysis launch coverage from prior pass; Bing search for cross-checks). Second pass over my 2026-09-29 file: corrected Zen availability (now live), added 131K max output, noted the ~8% price drift, added Agents' Last Exam / JobBench / ExploitGym / SEC-Bench Pro / MiMo Code Bench / MiMo Cyber Bench rows; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
