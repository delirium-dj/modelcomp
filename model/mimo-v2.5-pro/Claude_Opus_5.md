# MiMo V2.5 Pro — findings by Claude Opus 5

- Source: Xiaomi (MiMo team) — `mimo-v2.5-pro`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship **long-horizon agentic** model — a 1.02-trillion-parameter MoE with 42B active, open-sourced, and built explicitly for tasks that run for hours across **more than a thousand tool calls**. Xiaomi's own framing is unusually concrete: "When paired with a proper harness, V2.5-Pro can sustain complex, long-horizon tasks spanning more than a thousand tool calls", with "substantial improvements in instruction following within agentic scenarios" ([Xiaomi MiMo-V2.5-Pro, 2026-04-27](https://mimo.xiaomi.com/mimo-v2-5-pro)). It is the **text-focused** sibling of `mimo-v2.5-free`/`mimo-v2.5` — a genuinely different checkpoint (1.02T/42B hybrid-attention vs the omni-modal 310B/15B), not a serving tier.
- **Provider / access:** Xiaomi's API Platform (model tag `mimo-v2.5-pro`), AI Studio, and **open weights on Hugging Face** with SGLang and vLLM deployment guides. Xiaomi explicitly invites integration "into scaffolds such as Claude Code, **OpenCode**, and Kilo — accessing top-tier intelligence at a lower cost". **Not on OpenCode Zen** (Zen carries `mimo-v2.5-free` and `mimo-v2.6-flash-free`, not Pro).
- **Release / knowledge:** Released and open-sourced **2026-04-27**, rolled out across all Xiaomi surfaces "with no change in pricing". Knowledge cutoff: no verified public date found. Pre-training corpus: **27T tokens**.
- **IDs:** `mimo-v2.5-pro` (Xiaomi API), `xiaomi/mimo-v2-5-pro` on aggregators. **No free tier** — `noFreeId: true` is correct; the open weights are the free path.
- **Context window:** **1,000,000 tokens** on the released `MiMo-V2.5-Pro` checkpoint (the `-Base` checkpoint is **256K**). Pre-training ran at a **native 32K sequence length** with context subsequently "extended up to 1M tokens" — an honest disclosure that the 1M is an extension rather than native. Max output: no verified public figure found.
- **Modalities:** **Text in → text out.** This needs care, because the sibling `MiMo-V2.5` *is* omni-modal (visual and audio encoders): Xiaomi's V2.5-Pro page makes **no vision or audio claim at all**, describes only the hybrid-attention/MTP language stack, and publishes **no multimodal benchmark**; this repo's curated metadata states "Text-only (Pro)". I could find no positive vendor statement either way, so I score it text-only on the strength of that absence and flag the inference. (The video-editor demo's voice-over was produced by the separate **MiMo-V2-TTS** model, not by this one.) Reasoning: yes. Tool calls: yes, and they are the point of the model.
- **Pricing (as of 2026-10-08):** **~$0.44 / MTok input, ~$0.87 / MTok output** per this repo's curated metadata — reported as curated rather than re-verified by me. On Xiaomi's Token Plan, V2.5-Pro bills at **2× the base rate** (1 token = 2 credits) versus 1× for MiMo-V2.5. Open weights are free under what Xiaomi calls "a permissive license" — **the licence is not named on the release page**, which is a real gap for commercial users.
- **Architecture:** Thoroughly disclosed. **1.02T total parameters, 42B active**, FP8 (E4M3) mixed precision, Mixture-of-Experts on a hybrid-attention backbone inherited from MiMo-V2-Flash:
  - **Local Sliding Window Attention and Global Attention interleaved at a 6:1 ratio with a 128-token window**, which "cuts KV-cache storage by nearly **7×** at long context while preserving performance through a learnable **attention-sink bias**";
  - a lightweight **Multi-Token Prediction (MTP)** module with dense FFNs natively integrated for both training and inference, "roughly **tripling output throughput**" and accelerating RL rollouts.
  Pre-training: 27T tokens, FP8, native 32K, extended to 1M. Post-training in three stages: **SFT** → **Domain-Specialized Training** (separate teacher models each optimised by domain-specific RL across math, safety, agentic tool use and more) → **Multi-Teacher On-Policy Distillation (MOPD)**, where one student learns on-policy from its own rollouts under token-level guidance from every specialist teacher.

### Raw benchmarks found

> This entry has something almost nothing else in this dataset does: **fully-specified autonomous long-horizon task records with tool-call counts, wall-clock durations and hidden-test outcomes.** Those are not benchmarks in the leaderboard sense, but they are far more informative than most benchmarks about long-horizon capability, and they are reported in detail below. Independent figures are given alongside the vendor's wherever they exist.

Agent / tool use:

- **τ²-bench: 94.2%** ([Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-5-pro))
- **τ³-bench: 72.9%** (Xiaomi)
- **Terminal-Bench 2.0: 68.4%** (Xiaomi); independently **Terminal-Bench 2.1: 57.3%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro))
- **Claw-Eval: 63.8%** ([Claw-Eval leaderboard](https://claw-eval.github.io/)) — and Xiaomi independently claims **64% Pass^3**, a near-exact match with the public leaderboard
- Gert Labs rankings: **62.70%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: **1265 Elo** (Xiaomi) / **31.2%** normalized (Artificial Analysis)
- AA Agentic Index: **22.7%**; **APEX-Agents-AA: 2.4%** (Artificial Analysis) — a near-total collapse that sits oddly against everything else here
- **Documented autonomous runs** (Xiaomi, with full parameters):
  - **SysY compiler in Rust**, from Peking University's Compiler Principles course project — lexer, parser, AST, Koopa IR codegen, RISC-V assembly backend and performance optimization, built from scratch: **4.3 hours, 672 tool calls, 233/233 on the course's hidden test suite** (Koopa IR 110/110, RISC-V backend 103/103, perf 20/20). The first compile already passed **137/233 (59% cold start)**. At turn 512 a refactoring regressed two tests; the model diagnosed, recovered and continued.
  - **Full-featured desktop video editor** — multi-track timeline, clip trimming, cross-fades, audio mixing, export pipeline: **8,192 lines of code over 1,868 tool calls across 11.5 hours** of autonomous work.
  - **Analog EDA: FVF-LDO regulator design in TSMC 180nm CMOS**, wired into an ngspice loop with Claude Code as harness: ~1 hour of closed-loop iteration produced a design meeting **all six** target metrics (phase margin, line and load regulation, quiescent current, PSRR, transient response), four improved by an order of magnitude over its own first attempt.
  - Xiaomi describes the recurring behaviour as "**harness awareness**": the model "makes full use of the affordances of its harness environment, manages its memory, and shapes how its own context is populated toward the final objective."
- OSWorld, MCP-Atlas, Toolathlon: no verified public score found

Reasoning / knowledge:

- **AA-GPQA Diamond: 86.6%** (Artificial Analysis); independently **82.6%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro))
- **HLE: 34% without tools, 48% with tools** (Xiaomi); independently **AA-HLE 35.7%** — within 1.7 points of the vendor's no-tools figure
- MMLU-Pro: **84.6%** (Vals AI)
- **AA-IFBench: 79.9%** (Artificial Analysis) — one of the highest instruction-following scores in this pass, and consistent with Xiaomi's claim about agentic instruction adherence
- AA-LCR: **79.7%**; CritPt: **4.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **26.0**; BenchLM overall **52.44/100, rank #83 of 889** (30 of 625 benchmarks — well covered)
- **AA-Omniscience: Index +3.3, Accuracy 22.4%, Hallucination Rate 24.7%** — a **positive** index and a 24.7% hallucination rate, among the best abstention behaviour in this entire pass

Coding:

- **SWE-bench Verified: 74.0%** ([Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro)) — independent
- **LiveCodeBench: 81.4%** (Vals AI)
- SWE-bench Pro: **57.2%** (Xiaomi)
- Terminal-Bench 2.0: **68.4%** (Xiaomi; counted once for agentic and once here)
- AA Coding Index: **60.2%**; AA-SciCode: **50.6%** (Artificial Analysis)
- MiMo Coding Bench (Xiaomi's in-house agentic suite covering repo understanding, project building, code review, structured artifact generation, planning and SWE): presented as a chart "closing the gap to Opus 4.6" with **no extractable value** — not estimated

Multimodal:

- **Nothing, consistent with a text-only model.** Design Arena — Website **1273 Elo** ([OpenRouter](https://openrouter.ai/xiaomi/mimo-v2.5-pro/benchmarks)) measures preference for generated front-end design from a text model and is **not** multimodal evidence.

Long context:

- No MRCR / RULER / needle-retrieval curve published. **AA-LCR 79.7%** is the quantified signal. The supporting evidence is unusually good in a different way: the SWA/GA 6:1 design with a learnable attention-sink bias cuts KV cache ~7× at long context *by construction*, and the 1,868-tool-call / 11.5-hour autonomous build is direct demonstration of sustained coherence over an extremely long session. Against that, Xiaomi discloses that pre-training was at **native 32K** with 1M reached by extension.

### Normalized scores (1–100)

- **Tool use: 82/100.** The best-evidenced long-horizon agentic capability in this research pass, and the evidence is of a type benchmarks cannot capture: **672 tool calls over 4.3 hours producing 233/233 on a hidden university test suite**, a 59% cold-start compile, autonomous diagnosis and recovery from a self-inflicted regression at turn 512, and an 1,868-tool-call 11.5-hour build of an 8,192-line application. Benchmarks back it up — τ²-bench 94.2%, τ³-bench 72.9%, Claw-Eval 63.8% independently matching Xiaomi's own 64% claim. Capped below the mid-80s by Terminal-Bench 2.1 landing at **57.3%** independently against the vendor's 68.4% on 2.0, an AA Agentic Index of 22.7%, and **APEX-Agents at 2.4%** — an outlier I cannot explain and will not dismiss.
- **Reasoning: 78/100.** Strong and well-corroborated: GPQA Diamond 86.6% (82.6% on a second harness), MMLU-Pro 84.6%, AA-LCR 79.7%, and an **HLE no-tools figure of 34% that an independent lab reproduced at 35.7%** — vendor honesty that earns credit. **AA-IFBench 79.9%** is excellent and directly supports Xiaomi's claim about adhering to subtle in-context requirements. Capped by CritPt 4.0%, an AA Intelligence Index of 26.0, and 22.4% Omniscience accuracy — though the **24.7% hallucination rate with a positive index** is a genuine strength that keeps this in the high 70s.
- **Context window: 88/100.** 1,000,000 tokens with the engineering published rather than asserted: **SWA/GA interleaved 6:1 at a 128-token window cutting KV-cache storage ~7×**, held together by a learnable attention-sink bias, with MTP roughly tripling output throughput. AA-LCR 79.7% confirms usability, and the 11.5-hour / 1,868-call session is about as direct a demonstration of sustained long-context coherence as exists. Held under 90 because Xiaomi discloses native pre-training at **32K** with 1M by extension, and no retrieval curve was published.
- **Multimodal: 15/100.** **Text-only.** Xiaomi's V2.5-Pro release page makes no vision or audio claim, publishes no multimodal benchmark, and describes only a language stack — while the *sibling* MiMo-V2.5 is explicitly omni-modal. This is the template's floor for a text-only model. It is also the single reason an otherwise excellent model lands in the 60s overall: if you need vision, the cheaper `mimo-v2.5-free` is the right Xiaomi model.
- **Coding: 80/100.** Excellent, and the independent numbers lead: **SWE-bench Verified 74.0% and LiveCodeBench 81.4%, both measured by Vals AI**, with SWE-bench Pro 57.2% and Terminal-Bench 2.0 68.4% from the vendor. The compiler and video-editor builds are qualitatively stronger evidence of real engineering capability than most benchmark suites provide. Capped by AA-SciCode 50.6%, an AA Coding Index of 60.2%, and Xiaomi publishing MiMo Coding Bench only as a chart.
- **Cost efficiency: 90/100.** ~$0.44 in / ~$0.87 out per MTok for a model posting SWE-bench 74.0% and GPQA 86.6% is strong value on price alone, but the **token-efficiency** evidence is what lifts this: Xiaomi measures **ClawEval 64% Pass^3 at only ~70K tokens per trajectory — 40–60% fewer tokens than Claude Opus 4.6, Gemini 3.1 Pro and GPT-5.4 at comparable capability**, which compounds directly into bills on long agentic runs. MTP tripling output throughput and a ~7× KV-cache reduction are real serving-cost reductions, and the weights are open. Docked because **1.02T parameters** makes self-hosting a major undertaking, there is no free tier, Pro bills at 2× the base MiMo rate, and — a genuine concern — the "permissive license" is **never actually named** on the release page.
- **Overall Score: 68.6/100.** Mean of the five non-cost dims (82 + 78 + 88 + 15 + 80) / 5 = 68.6. Best fit: **multi-hour autonomous engineering** — the kind of work measured in hundreds of tool calls rather than turns: from-scratch compiler and application builds, closed-loop simulation and EDA optimisation, large-repository refactors — at a fraction of frontier cost and with markedly better token efficiency. Its abstention behaviour (24.7% hallucination, positive Omniscience index) makes it unusually trustworthy for autonomous operation. The Overall is suppressed roughly 13 points by the text-only multimodal floor; on text-and-tools workloads this is one of the strongest models in the dataset.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Xiaomi's MiMo-V2.5-Pro release page (2026-04-27 release and open-sourcing, 1.02T-total/42B-active MoE, FP8 E4M3 precision, the 1M and 256K-Base context specs with the disclosure that pre-training was at native 32K, the SWA/GA 6:1 128-token-window design with learnable attention-sink bias and ~7× KV-cache reduction, the MTP module and its ~3× output-throughput claim, the 27T-token pre-training corpus, the three-stage SFT → Domain-Specialized Training → MOPD post-training pipeline, the Token Plan 2× rate and "no change in pricing" rollout, the Claude Code / OpenCode / Kilo integration invitation, the vendor benchmark figures, the ClawEval token-efficiency comparison, and the three fully-parameterised autonomous task records with their tool-call counts, durations and hidden-test results), BenchLM's aggregated page, and the underlying Artificial Analysis, Vals AI, Claw-Eval, Gert Labs and OpenRouter leaderboards. Where vendor and independent figures diverge (Terminal-Bench 2.0 68.4 vs 2.1 57.3) the independent value is weighted; where they agree closely (HLE 34 vs 35.7; Claw-Eval 64 vs 63.8) that is reported as a credibility signal. The MiMo Coding Bench chart was not estimated. The text-only modality finding rests on the complete absence of any vision/audio claim or benchmark on the vendor's Pro page plus this repo's curated metadata, and is explicitly flagged as an inference; Design Arena is **not** credited as multimodal evidence. No data was imported from `mimo-v2.5-free`, which has its own folder and is a different checkpoint. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
