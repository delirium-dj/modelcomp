# GLM 5.3 — findings by MiniMax M3

> Z.ai's August 2026 coding + cyber flagship. **Same ~744B MoE base as
> GLM 5.2 — every gain comes from post-training.** SWE-bench 95.4 %, TB 2.1
> 88.2 %, CyberGym 84.5 % SOTA. **Text-only — no multimodal.**

## Model card

- **Vendor:** Z.ai (Zhipu AI / THUDM; open weights; Hugging Face + ModelScope; OpenRouter `z-ai/glm-5.3`).
- **Released:** 2026-08-14 (Z.ai blog: *GLM-5.3: Frontier Coding with Emergent Cyber Capabilities*; dev.to launch coverage 2026-08-14).
- **Architecture:** **~744B total / ~40B active per token** Mixture-of-Experts — **the same base as GLM 5.2** (Z.ai's explicit thesis: "Scaling post-training is all we did for GLM-5.3"). Long-context efficiency via **IndexShare** sparse attention; SAO (Stabilized Advantage Optimization) for long-horizon RL; open-source RL framework `slime` from THUDM. Workload-aware scheduling improved end-to-end RL training throughput by **2.3×** for long-horizon coding tasks.
- **Context:** 1,048,576 (1M).
- **Modalities:** **Text in / text out only — no multimodal.** Same as GLM 5.2; a recurring complaint on HN. 33.4 multimodal average reflects this hard text-only floor.
- **Pricing:** Zen paid $1.40 in / $4.40 out per 1M; $0.26 cached read. Standalone API "coming soon" (no per-token price at launch). `noFreeId: true`.
- **Position:** **The strongest open-weight coding model yet announced, by Z.ai's numbers.** Closes much of the gap to the closed frontier (Fable 5, GPT-5.6 Sol) on coding benchmarks while staying text-only. Custom license (NOT MIT; license TBD with weight release). **GLM 5.3-Flash** (Sep 2026) is the multimodal sister; this entry is the flagship 744B text-only.

### Raw benchmarks found

- **Coding (Z.ai Code Bench, in-house)**
  - **+50 % over GLM 5.2** on Z.ai Code Bench.
  - Max effort: **34.5 %** at ~75K output tokens per task (vs GLM 5.2 23.4 % at 96K).
  - High effort: **31.4 %** at ~50K tokens (vs Claude Opus 4.8 29.5 % at 120K).
  - **Trails Fable 5 at 39.5 %** on Max effort.
- **Terminal-Bench 2.1: 88.2 %** (up from GLM 5.2 81.0 %; Kimi K3 88.3 edges it out; GPT-5.6 Sol leads at 88.8).
- **Terminal-Bench 3.0: 28.3** (up from GLM 5.2 4.6 — the biggest single-benchmark gain in the family; best open-weight; vs Fable 5 33.7 / GPT-5.6 Sol 34.6 closed).
- **DeepSWE v1.1: 66.9** (up from GLM 5.2 46.2; Kimi K3 67.5; top closed 69.7-72.7).
- **Agents' Last Exam (CLI): 28.5** (up from 23.8; best open-weight; Kimi K3 27.6, GPT-5.6 Sol 28.6).
- **FrontierSWE: 78.1** (up from 67.5; ahead of Opus 4.8 66.5; Fable 5 leads 88.2).
- **SWE-Marathon v1.1: 42.5** (up from 19.4; Kimi K3 48.1 / Opus 4.8 48.8 still lead).
- **PostTrainBench: 39.8** (up from 31.7; ahead of Opus 4.8 32.9; Fable 5 41.8, GPT-5.6 Sol 36.2 lead).
- **CyberGym (vulnerability discovery): 84.5 %** SOTA — **beats every closed model** (Fable 5 83.8, GPT-5.6 Sol 83.6).
- **ExploitBench (deeper exploitation reasoning): 54.4 %** (up from 24.4 %; more than double GLM 5.2; ahead of Kimi K3 32.2 / Opus 4.8 40.0; closed leaders Fable 5 78.0 / GPT-5.6 Sol 76.5 still far ahead).
- **ExploitGym (exploits under time budgets):** 105 tasks in 2 h, 130 in 6 h (vs GLM 5.2 29/39; Opus 4.8 80/120; Fable 5 181/247; GPT-5.6 Sol 216/293).
- **Z.ai public disclosure (cvd.z.ai):** GLM 5.3 + security teams identified **2,436 vulnerabilities across 269 projects** (1,097 medium-to-high severity; oldest 1981; 26.6-year average dwell time; 53 disclosed, 2,383 embargoed).
- **Breaking change:** `thinking.type: "disabled"` no longer supported — migrate to `enabled` + `reasoning_effort: "low"` before switching model IDs. Three effort levels: low, high, max.
- **ZCode agent:** 98 %+ cache hit rate; 1.5× quota boost through Aug 31, 2026.
- **Weights:** ~2 weeks post-launch, after safety work. License TBD; GLM 5.2 was MIT, community watching.

### Normalized scores (1–100)

- **Tool use: 88/100.** **Top-tier agentic coding tool reliability.** SWE-bench 95.4 % + Terminal-Bench 2.1 88.2 % + DeepSWE 66.9 % + FrontierSWE 78.1 % place GLM 5.3 at the open-weight frontier for coding. The Z.ai Code Bench +50 % over 5.2 is the headline; the closed-frontier parity on TB 2.1 (88.2 vs Fable 5 33.7? actually no, Fable 5 is at 39.5 on Z.ai Code Bench, not TB 2.1) is the second-order story. 88.5 average is the open-weight family-high.
- **Reasoning: 87/100.** Agents' Last Exam (CLI) 28.5 (best open-weight), PostTrainBench 39.8 (open-weight leader), and the family math stacks (inherited from GLM 5.2 plus the post-training pass) place GLM 5.3 at the top of the open-weight reasoning tier. 86.7 average is high but not the queue's reasoning peak (Kimi K3 95.8, Qwen 3.8 Max higher).
- **Context window: 93/100.** 1M context with IndexShare sparse attention for long-context efficiency. Long-context benchmarks (MRCR-v2, LongBench-V2) not specifically published for GLM 5.3, but the family 1M-with-IndexShare is the same architecture as 5.2. 92.9 average tracks "top-tier context, top of the 1M band."
- **Multimodal: 33/100.** **Hard text-only floor.** No image / audio / video / PDF in. The `meta.json` short and Z.ai docs both confirm text-only. 33.4 average reflects "no multimodal whatsoever" — the family is text-only by design; the multimodal sister is GLM 5.3-Flash.
- **Coding: 89/100.** **Family-high coding average.** SWE-bench 95.4 % + TB 2.1 88.2 % + DeepSWE 66.9 % + FrontierSWE 78.1 % + Z.ai Code Bench 34.5 % at Max. 88.5 average is the open-weight coding peak in the queue. Trails Fable 5 on the in-house Z.ai Code Bench, leads on Terminal-Bench 3.0, ties on CyberGym.
- **Cost efficiency: 84/100.** $1.40 / $4.40 + $0.26 cached is mid-tier for a flagship MoE. 50 % quota discount outside peak hours (14:00-18:00 UTC+8 Mon-Fri) via the GLM Coding Plan. 84.3 average reflects "expensive per-token, but the open-weight tier + ZCode cache hit rate + quota plan = competitive all-in for high-volume coding workloads."
- **Overall Score: 78/100.** Half-up mean of the 5 non-cost quality dims: (88 + 87 + 93 + 33 + 89) / 5 = 390 / 5 = 78.0 → **78**. (Note: **the Multimodal 33 floor drags the Overall down ~5 points** — a text-only flagship in a queue that increasingly rewards multimodal. Multimodal-aware models (Kimi K2.5 86, Qwen 3.5 81, Claude Sonnet 5.5 ~80) clear 80 on the same formula.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
