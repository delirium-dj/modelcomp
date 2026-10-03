# MiMo-V2.6-Distill-Qwen-9B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B agentic model — a supervised fine-tune of Qwen3.5-9B on 77.4B tokens of MiMo-generated data, covering coding, general-purpose agent tasks, visual coding, and cybersecurity; released explicitly as an SFT checkpoint "as a starting point for open research in agentic reinforcement learning."
- **Provider / access:** Xiaomi (MiMo team) — open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, published 2026-09-27); MIT license with no commercial-use restrictions; no hosted API; small enough to self-host on a single modern GPU.
- **Release / knowledge:** 2026-09-21 (HokAI report; HF page 2026-09-27). Knowledge cutoff not captured.
- **IDs:** `MiMo-V2.6-Distill-Qwen-9B`; folder `mimo-v2.6-distill-qwen-9b`.
- **Context window:** Not documented for this derivative (the Qwen3.5-9B base is 262K, but that is not confirmed for the SFT model).
- **Modalities:** Text confirmed; "no confirmed video or audio input" (HokAI). Visual-coding benchmarks exist, but image input is unconfirmed.
- **Pricing (as of 2026-10):** Free (open weights, MIT; self-host only).
- **Architecture:** Dense 9B, distilled from Qwen3.5-9B via SFT on MiMo-generated data (SFT, not RL).
- **SFT data:** 77.4B total tokens / 27.2B loss-bearing — Code 23.2B (29.9%; 7.3B loss-bearing), Cyber 11.0B (14.2%; 4.8B), General 22.0B (28.5%; 5.7B), Visual coding 21.2B (27.4%; 9.4B).

### Raw benchmarks found

**Vendor-reported (Xiaomi MiMo evaluation table, per MiMo-V2.6 technical report; avg@3 for code rows, avg@1 for general rows; † = internal MiMo evaluation sets, not independently verifiable; format: Qwen3.5-9B base → MiMo-V2.6-Distill-Qwen-9B SFT):**
- SWE-bench Verified: 60.0 → **61.1**
- SWE-bench Pro: 32.0 → **44.6**
- MiMo Code (mini)†: 19.5 → **51.6**
- MiMo Cyber (mini)†: 5.7 → **31.3**
- AutomationBench v1.0.6: 5.0 → **30.3**
- Terminal-Bench 2.1: 27.0 → **37.1**
- Toolathlon-Verified: 25.9 → **35.2**
- OfficeQA: 9.0 → **19.5**
- JobBench: 2.6 → **18.3**
- MiMo General (mini)†: 28.5 → **62.2**
- MiMo Visual Coding (mini)†: 61.7 → **64.0**

**ModelCap (carried over, not measured):** Index **53.7**, #104 of 280 (range 36.8–70.6) — explicitly "carried over from the model it is built on"; the four reported evaluation leads (TB 2.1 37.1, Toolathlon 35.2, SWE-bench Pro 44.6, SWE-bench Verified 61.1) are marked "Reported, not used in launch estimate."

**Independent assessment (HokAI):** bottom third on SWE-bench Verified (rank 26 of 31, peer median 77.2%); no documented context window, no hosted API, no confirmed video or audio input; notes the SFT (not RL) nature — "should not be expected to approach Pro-RL or Flash-RL on agentic benchmarks"; also notes the vendor states it does not train on customer data (1 of 72 in that set).

## Scores

- **Tool use: 49/100.** Toolathlon-Verified 35.2%, AutomationBench 30.3%, JobBench 18.3% — mid-tier tool use, all vendor-reported single numbers.
- **Reasoning: 46/100.** No GPQA/HLE/MMLU row captured; MiMo General (mini)† 62.2 is internal-only; strong relative gains over the base (28.5 → 62.2) are real but unverifiable.
- **Context window: 57/100.** Not documented for the derivative (base Qwen3.5-9B is 262K — unconfirmed here); no long-context retrieval row.
- **Multimodal: 15/100.** No confirmed video or audio input; visual-coding benchmarks exist but image input is unconfirmed — treated as text-only until documented.
- **Coding: 59/100.** SWE-bench Verified 61.1%, SWE-bench Pro 44.6%, Terminal-Bench 2.1 37.1%, MiMo Code (mini)† 51.6% — credible mid-tier coding, though SWE-bench Verified sits in the bottom third (peer median 77.2%).
- **Cost efficiency: 100/100.** MIT open weights, no hosted-API gate, self-hostable on a single modern GPU.
- **Overall Score: 45.2/100.** Mean of Tool use 49, Reasoning 46, Context window 57, Multimodal 15, Coding 59 = 45.2.

> **Gap vs folder average (52.4): −7.2.** The peer set prices in the MiMo brand and the headline gains (SWE-bench Pro 32.0 → 44.6, TB 2.1 27.0 → 37.1). This report credits those gains but discounts the internal-only † rows, the undocumented context window, unconfirmed modalities, and the SFT-not-RL caveat: a distilled SFT checkpoint for agentic-RL research, not a frontier agent.

## Notes

- Verification trail: Hugging Face model card (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, 2026-09-27; MIT; base model; SFT data table), HokAI report (2026-09-21; peer-rank framing; missing-spec list; SFT-vs-RL caveat), Xiaomi MiMo technical report benchmark table (the 11 rows above, with base-model comparators), ModelCap (carried-over index 53.7 with "reported, not used" flags).
- Known conflicts: none material — all 11 rows are single-sourced (Xiaomi), with † rows explicitly internal.
- Open questions: context window for the derivative; whether image input is supported (visual-coding data share is 27.4%); hosted-API availability; independent replications of the † internal sets.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, context-window disclosure, modality confirmation.
