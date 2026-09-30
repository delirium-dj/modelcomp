# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's production Flash upgrade (2026-09-02), built directly on Gemini 3.7 Flash: it spends more computation on hard tasks, takes more reasoning steps and uses tools more persistently, buying higher completion rates on long-horizon coding/agentic work at the cost of more reasoning tokens and latency.
- **Provider / access:** Google — Gemini API (`gemini-3.8-flash`, stable ID), AI Studio, Gemini app; also relayed by gateways such as CometAPI.
- **Release / knowledge:** 2026-09-02 — three weeks after Gemini 3.7 Flash. Knowledge cutoff **March 2026** (llm-stats, third-party; Google's card omits it).
- **IDs:** `gemini-3.8-flash` (no Zen Free ID — paid only).
- **Context window:** 1,048,576 input tokens / 65,536 output tokens (verified 2026-09-29).
- **Modalities:** text, image, video, audio and PDF input; **text output only** (no image or audio generation); thinking levels; persistent tool use.
- **Pricing (as of 2026-09-29):** introductory standard rate **$0.75 / 1M in** and **$3.75 / 1M out**, held through 2026-12-31, higher standard rates after. The previously recorded 50%-off batch/flex tier and $0.075 cached rate were not re-verified.
- **Architecture:** proprietary; a 3.7-Flash foundation with more test-time compute, not a larger-context redesign.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (previously found; **not re-verified this run**) — meanwhile the launch comparison reports Claude Opus 5 leading substantially on the harder Terminal-Bench 4.0 and OSWorld 2.0
- Tau3-Bench Banking: **38.1%** (up from 30.9% on 3.7 Flash — previously found, not re-verified)
- SWE-Atlas Codebase QnA: **51.9%** (up from 48.0%, previously found); Vals Finance Agent v2 **61.4%** (previously found)
- GDPval-AA v2: **1,140–1,421** across Gemini 3.5–3.8 material, 3.8 material citing the top of that range — exact value unverified
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.4%** (Epoch AI via Model Beat — previously found, not re-verified)
- HLE: **47.8%** (Epoch AI) and **54.9%** HLE-Verified (Google's page) — previously found, not re-verified
- SimpleQA Verified **69.7%**; AIME **98.9%**; CharXiv **86.2%**; Artificial Analysis Intelligence Index **59** (high reasoning) — previously found
- Safety deltas newly found: **Multilingual Safety −5.4 points** (lower-is-better → regression), unjustified refusals **+1.1pp** (regression), tone **+0.2pp** (improvement)

Coding:

- DeepSWE v1.1: **73.7%** vs Gemini 3.7 Flash **65.3%** on the same comparison — **newly confirmed exact value**, replacing "minimum above 70%"
- SWE-bench Pro: **61.6%** (from 60.4% on 3.7 Flash); SciCode **56.6%** (revised up from 53.6%); WebDev Arena **Elo 1567** — previously found, not re-verified
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Speed: **327 tok/s** median (5th of 36 tracked models), with multi-second TTFT and higher output-token usage than peers

Long context:

- No GDM-MRCR specific to 3.8 Flash reproduced; Google's nearest published proxy is Gemini 3.6 Flash at **91.8% @128K / 54.0% @1M**, so recall at depth is undocumented for this checkpoint

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 90.8% was the best terminal-agent result found for this model, with Tau3 38.1%, SWE-Atlas 51.9% and finance-agent 61.4% supporting a top-band score; capped because none were re-verifiable this run and Opus 5 now leads on Terminal-Bench 4.0 / OSWorld 2.0.
- **Reasoning: 93/100.** GPQA Diamond 95.4%, HLE 47.8–54.9% across two harnesses, AIME 98.9% and AA Index 59 are near-frontier for a Flash tier.
- **Context window: 92/100.** 1,048,576 tokens with a 65,536-token output cap; no model-specific recall-at-depth benchmark, and multi-second TTFT limits interactive use.
- **Multimodal: 86/100.** Text, image, video, audio and PDF input with CharXiv 86.2% document reasoning; text-only output and no image/audio generation.
- **Coding: 90/100.** DeepSWE v1.1 73.7%, SWE-bench Pro 61.6% and SciCode 56.6% are top-of-class for the price; the absent SWE-bench Verified number is the main gap.
- **Cost efficiency: 88/100.** $0.75/$3.75 with an end-2026 introductory hold is outstanding value, but rates rise in January 2027 and it burns more output tokens than peers.
- **Overall Score: 91/100.** (92 + 93 + 92 + 86 + 90) / 5 = 90.6 → **91**. Best fit: autonomous coding agents, terminal tasks and finance/document workflows needing top-tier agentic scores at Flash prices.

## Re-run audit — 2026-09-29

Previous DeepSeek 4.1 Flash file: 2026-09-18, Overall 91. After re-verifying live sources:

- **Confirmed:** the 1,048,576-token input window and 65,536-token output cap; $0.75/$3.75 introductory pricing ending 2026-12-31 (so the previous "rates double in January 2027" holds); text-only output; release pinned to 2026-09-02, three weeks after 3.7 Flash.
- **Corrected:** DeepSWE moves from "above 70% (minimum)" to the exact **73.7%**, with 3.7 Flash's 65.3% as the same-comparison baseline.
- **Newly added:** the multilingual-safety regression (−5.4 points) and tone/refusal deltas; the fact that Opus 5 leads substantially on Terminal-Bench 4.0 / OSWorld 2.0 despite 3.8 Flash's strong Terminal-Bench **2.1** result.
- **Could not re-verify (kept and flagged above, never restated as fresh):** Terminal-Bench 2.1 90.8%, Tau3 38.1%, SWE-Atlas 51.9%, finance-agent 61.4%, GPQA 95.4%, HLE 47.8%/54.9%, SimpleQA 69.7%, AIME 98.9%, AA Index 59, CharXiv 86.2%, SWE-bench Pro 61.6%, SciCode 56.6%, WebDev Arena Elo 1567, batch/flex and cached rates.
- **Arithmetic fix:** the previous file averaged six dims in prose (90.2 → 90) while the rule counts five quality dims; the correct five-dim mean is 453 / 5 = 90.6 → **91**, matching the file's headline. Overall unchanged at 91 and no dimension moved.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research re-run (Google's 3.8 Flash model card and release material, CometAPI's specs/benchmarks/pricing breakdown); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
