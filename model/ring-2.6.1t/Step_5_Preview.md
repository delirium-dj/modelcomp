# Ring-2.6-1T — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionAI/Ring-2.6-1T`, released May 2026)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T (the reasoning companion to Ling-2.6-1T in the Ling/Ring 2.6 family)
- **Short description:** A trillion-parameter MIT open-weights MoE (1,025,657,871,744 params, ~63B active) from Ant's inclusionAI, optimized for deeper reasoning with controllable effort (`high`/`xhigh`) — built by architecturally retrofitting the Ling-2.0 base model rather than training from scratch. Its training novelty is **KPop**, an RL algorithm replacing IcePop's uniform fixed-ratio constraint with binary KL divergence, plus asynchronous RL that decouples rollouts from parameter updates to make long environment-bound trajectories tractable at trillion scale. Agentic ability is a native training objective, not a chat-data byproduct. It posts big vendor numbers — PinchBench 87.6 (edge past GPT-5.4 xHigh and Gemini-3.1-Pro high), ARC-AGI-V2 66.18 xhigh, AIME 95.83, GPQA 88.27, GAIA-2 Search 77.9 — but Artificial Analysis is far colder (Intelligence Index 17.3, below the open-weights median) and the deploy story is heavy: 128K native (256K via YaRN), ~500GB VRAM at Q4, multi-node only.
- **Provider / access:** Hugging Face / ModelScope open weights (MIT); OpenRouter and third-party hosts.
- **Release:** 2026-05-08/14 (technical report arXiv:2606.15079).
- **Context window:** 128K native → 256K with YaRN (AA lists 262K).
- **Modalities:** Text in → text out; reasoning effort `high` / `xhigh`.
- **Pricing (as of 2026-10-09):** $0.07–0.30/M input, $0.63–2.50/M output depending on route (AA median $0.30/$2.50; Model Beat $0.07/$0.63); ~$0.29 per AA Index task.
- **Speed:** 110–120 tok/s; TTFT 2.0–3.9 s (provider-dependent).

### Raw benchmarks found

Vendor (technical report, named effort; high unless noted):

- PinchBench: **87.60** (GPT-5.4 xHigh ~84, Gemini-3.1-Pro high below)
- ClawEval: **63.82** (Pass@3)
- τ2-Bench Telecom: **95.32** (Mean@4; <1 point off the leader)
- ARC-AGI-V2: **66.18** (xhigh; ahead of Gemini-3.1-Pro high and Claude-Opus-4.7 xhigh)
- AIME 2026: **95.83** (xhigh); GPQA Diamond: **88.27** (xhigh)
- GAIA-2 Search: **77.90** (xhigh, Pass@1)
- SWE-bench Verified: **74.0** (Claude Code scaffold; rank 47/89 on its leaderboard)

Artificial Analysis (independent, current index):

- Intelligence Index: **17.3** (v4.3) / 16.6 (v4.3.2) — below the open-weights median (18); #64 of 117
- Coding Index: **42.8**; Agentic Index: **18.9**
- GPQA Diamond: **85.7–86%**; HLE: **21.6–22%**; AA-LCR: 64.3 / 70.0 (v1.1); IFBench: **44.6%**
- SciCode: **45.0%**; Terminal-Bench 2.1: **43.1%**; TB Hard: **28.8%**; TB 4.0: 0.51%
- τ²-Bench Telecom: **92.4%**; AutomationBench-AA: 2.1%; AA-Briefcase: 654–656 Elo
- AA-Omniscience: index **−37.7**, 85.3% hallucination rate (worst-tier reliability)
- BLXBench: pass rate 44.7% (coding category 96.8, debugging 50.8)

Deployment: ~2TB VRAM at FP16, ~500GB at Q4_K_M — multi-GPU server required; no single-GPU path.

### Normalized scores (1–100)

- **Tool use: 60/100.** Vendor PinchBench 87.6 and τ²-Telecom 92.4–95.3% are strong on workflow/telecom tasks, and ClawEval 63.8 is decent; the independent read collapses it (Agentic Index 18.9, AutomationBench 2.1%, TB Hard 28.8%) — mid-band with a large vendor-vs-independent gap.
- **Reasoning: 66/100.** GPQA 85.7–88.3%, AIME 95.8% and ARC-AGI-V2 66.2% (xhigh) are upper-mid-band and genuinely strong; HLE 21.6% and AA Intelligence Index 17.3 keep it below the frontier tier.
- **Context window: 70/100.** 128K native / 256K with YaRN is the band floor-to-mid, with AA-LCR 64.3–70.0% — modest retrieval quality for the size.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 60/100.** SWE-bench Verified 74.0% and SciCode 45.0% are mid-upper for open weights; Coding Index 42.8%, TB 2.1 43.1% and TB Hard 28.8% show the agentic-coding gap.
- **Cost efficiency: 90/100.** From $0.07/$0.63 on cheap routes (AA median $0.30/$2.50) with MIT weights — mid-tier pricing; the 1T parameter footprint (~500GB VRAM at Q4) means self-hosting is a multi-node commitment.
- **Overall Score: 54/100.** Best-fit recommendation: a big open-weights reasoning MoE with standout xhigh-effort ARC-AGI-2 and AIME numbers and MIT licensing — but the independent record is much colder than the vendor table, its 85% hallucination rate is the worst in its class, and 1T parameters need a server room.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (inclusionAI Hugging Face card, Ling/Ring 2.6 technical report arXiv:2606.15079, Artificial Analysis via OpenRouter/Opper/Model Beat/Benchmark Atlas, ling-1t.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ring_2_7.md`, using the same headings.
