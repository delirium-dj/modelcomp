# Solar Open 2 — findings by Space Bunny

- Source: Upstage (`upstage/Solar-Open2-250B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (Solar-Open2-250B, 250B-A15B)
- **Short description:** Upstage's **Korean sovereign foundation model**, released **July 2026** (weights on Hugging Face announced 2026-07-23) — a 250B-total / 15B-active hybrid-attention MoE purpose-built for **long-horizon agentic tasks** and scaled up from Solar Open 1 (Solar Open 100B). Its distinguishing claim is a genuinely usable **1M-token window** that can hold entire agent trajectories in one context, delivered via a hybrid attention stack at roughly one quarter the memory and compute of an all-softmax design. Top use cases: Korean-language enterprise and officework agents (Ko-GDPval 86.8), document-intensive work, and coding. Second place of four finalists in Korea's government sovereign-AI evaluation round.
- **Provider / access:** Hugging Face `upstage/Solar-Open2-250B`; ModelScope `upstage/Solar-Open2-250B`. **No pay-per-token hosted API price is published** — Artificial Analysis lists the cost as $0.00/$0.00 with "Not publicly available" as the price tier. Self-hosting minimum H200 × 4, recommended H200 × 8. No OpenCode Zen ID found.
- **Release / knowledge:** Weights released **2026-07-23** (Upstage Media Day; Chosun coverage 2026-07-23); technical report **arXiv:2607.20062v1, submitted 2026-07-22, v2 2026-07-24**. Artificial Analysis lists "Released August 2026" — a minor discrepancy, July is corroborated by the release announcement and the arXiv dates. **Knowledge cutoff: February 2026** (Artificial Analysis).
- **IDs:** `upstage/Solar-Open2-250B` (HF/ModelScope); Upstage API aliases `solar-open2-250b`, `upstage-solar-open2-250b`
- **Context window:** **1,048,576 tokens (1M)** — verified in the technical report and on Artificial Analysis and CloudPrice. This is a **native** window, not RoPE scaling: the architecture interleaves one softmax layer among every three linear-attention layers with **no positional encoding** and a gated delta rule extended to negative eigenvalues, which the report says means the context is "in principle… unbounded regardless of the length distribution of its training data," at ~¼ the memory/compute of an all-softmax stack.
- **Modalities:** **Text in → text out only.** Artificial Analysis is explicit: "Solar Open2 250B does not support image input. It can only process text" / "is not multimodal." CloudPrice independently lists text as the sole input and output modality (1 of 5 each). Reasoning: yes. Languages: **English, Korean, Japanese**.
- **Pricing (as of 2026-10-09):** **No hosted per-token price published.** Open weights are downloadable at no license fee; the Upstage Solar License applies. For self-hosters the real cost is hardware — the model needs roughly **600 GB of VRAM at FP16**, e.g. AWS `p4de.24xlarge` (8× A100, 640 GB) at **$27.45/hr** or Azure ND96amsr A100 v4 at $32.77/hr, before redundancy and utilisation. Upstage's own hosted Solar line is priced far lower (Solar Pro 4 at $0.090/$0.360), which is a useful reference for what the same vendor charges for API access.
- **Architecture:** **250B total (250,287,794,944) / 15B active**, 48 layers, hidden size 4,096, head dimension 128, vocabulary 196,608. Hybrid attention pattern **[Softmax, Linear × 3] × 12**. No positional encoding; gated delta rule extended to negative eigenvalues. Initialized from Solar Open 1 by transferring the **5.69B-parameter shared skeleton** (2.3% of the 250B) that survives the architectural change, with everything else learned by full pre-training. Data curation refined a **20T-token pool into a 10T-token mixture**. Agent skills were built by training **twelve domain specialists** on purpose-built scenarios, then consolidated into one model via **Multi-teacher On-Policy Distillation (MOPD)**. Trained on NVIDIA B200 GPUs for **2M GPU-hours**. **License: Upstage Solar License** (note: Model Beat describes the weights as "unrestricted," while Artificial Analysis lists the Upstage Solar License — the license terms themselves were not read line-by-line here).

### Raw benchmarks found

> English and Korean figures are Upstage's own table from the technical report / ModelScope card, reproduced with Upstage's full comparison set so the gaps are visible, not just the leads. Independent figures are labeled.

Agent / tool use:

- APEX-Agents: **16.6%** (Upstage's table — **leads its size class**: vs Solar Open 100B 2.4, Command A+ 1.6, Mistral Medium 3.5 6.1, MiMo-V2.5 13.4, DeepSeek-V4-Flash 13.2). This is the one number Upstage leads with. **Caveat:** APEX-Agents baselines differ slightly between the paper and secondary coverage (13.2 vs 13.4 for the same models) — treat ordering as directional.
- MCP-Atlas: **58.2%** (vs MiMo-V2.5 63.9, DeepSeek-V4-Flash 58.2, Mistral Medium 3.5 30.7, Solar Open 100B 34.4)
- Terminal-Bench Hard: **28.3%** (vs MiMo-V2.5 41.7, DeepSeek-V4-Flash 34.1, Mistral Medium 3.5 33.3, Command A+ 25.0)
- **Terminal-Bench 2.1: 44.19%** (Artificial Analysis — the only *independent* terminal-agentic number, sourced via Vector Wire)
- GDPval-AA v2 (Elo): **1128** (vs DeepSeek-V4-Flash 1187, MiMo-V2.5 1145, Mistral Medium 3.5 929, Command A+ 712)
- τ³-bench (banking): **19.6%** (vs DeepSeek-V4-Flash 22.3, MiMo-V2.5 8.7, Mistral Medium 3.5 5.8)
- **Ko-GDPval (Korean officework-agent, in-house): 86.8** (vs DeepSeek-V4-Flash 85.0, MiMo-V2.5 81.0, Claude Haiku 4.5 68.3, GPT-5.4 mini 59.4, Solar Open 100B 3.4). Upstage's headline claim is that this makes it competitive with **DeepSeek-V4-Pro (1.6T) at under a sixth its size** — but the comparison rests on this **single** in-house benchmark, where DeepSeek-V4-Pro scores 86.9 (a tie, not a win).
- Tau3-Banking is covered by the τ³ banking row above; Tau2-Bench: no score published
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (vs DeepSeek-V4-Flash 88.9, MiMo-V2.5 83.0, Mistral Medium 3.5 77.5, Command A+ 75.6, Solar Open 100B 66.2)
- MMLU-Pro: **86.2%** — **leads its size class** (vs DeepSeek-V4-Flash 85.9, MiMo-V2.5 84.6, Mistral Medium 3.5 81.2, Command A+ 79.0, Solar Open 100B 80.4)
- HLE (without tools): **28.8%** (vs DeepSeek-V4-Flash 32.3, MiMo-V2.5 24.3, Mistral Medium 3.5 12.8, Command A+ 11.4, Solar Open 100B 11.5)
- AIME 2026: **95.7%** (vs DeepSeek-V4-Flash 97.0, Command A+ 96.0, MiMo-V2.5 92.3, Mistral Medium 3.5 89.0, Solar Open 100B 87.7)
- HMMT Feb 2026: **93.9%** (vs DeepSeek-V4-Flash 94.7, Command A+ 73.5, Solar Open 100B 68.9)
- AA-LCR: **62.3%** (vs MiMo-V2.5 62.7, DeepSeek-V4-Flash 63.7, Mistral Medium 3.5 61.0, Command A+ 46.0, Solar Open 100B 36.0)
- **Artificial Analysis Intelligence Index: 24.74 (~25)**, #108 — "well above average among comparable models (median: 18)" but far below frontier
- Coding Index: **45.0** (#82, CloudPrice)
- CritPt / Omniscience / AA-Omniscience: no verified public score found
- **Korean sovereign-AI programme, second-round evaluation on AAII v4.1.1 (reported 2026-08-13 by Edaily, Seoul Economic Daily, ITDaily and iNews24): Solar Open 2 at 37 — 2nd of four Korean finalists**, behind Motif 3 (47), ahead of SK Telecom's A.X-K2 (35) and LG AI Research's K-EXAONE 2.0 0803 (31)

Coding:

- LiveCodeBench v6: **92.4%** — **leads its size class** (vs DeepSeek-V4-Flash 92.3, MiMo-V2.5 89.1, Command A+ 86.1, Mistral Medium 3.5 84.9, Solar Open 100B 56.5)
- SWE-bench Verified: **70.4%** (vs DeepSeek-V4-Flash 73.8, MiMo-V2.5 73.0, Mistral Medium 3.5 69.6, Command A+ 14.4, Solar Open 100B 15.4)
- ArtifactsBench: **55.9%** (vs DeepSeek-V4-Flash 61.0, MiMo-V2.5 59.3, Mistral Medium 3.5 49.8, Command A+ 42.8, Solar Open 100B 43.4) — this is the multimodal-artifact-generation eval, where the report acknowledges a gap
- Terminal-Bench Hard: **28.3%**; Terminal-Bench 2.1: **44.19%** (Artificial Analysis)
- SWE-bench Pro, SWE Multilingual, SciCode, DeepSWE, Vibe Code Bench: no verified public score found
- Generational jump vs Solar Open 1 is real and large: LiveCodeBench v6 56.5 → 92.4, SWE-bench Verified 15.4 → 70.4, APEX-Agents 2.4 → 16.6, AA-LCR 36.0 → 62.3, IFBench 57.7 → 80.0

Instruction following / long context:

- IFBench: **80.0%** (vs DeepSeek-V4-Flash 80.3, MiMo-V2.5 67.1, Mistral Medium 3.5 69.0, Command A+ 73.9)
- Multi-Challenge: **61.0%** (vs DeepSeek-V4-Flash 62.0, Mistral Medium 3.5 49.8, Command A+ 45.8, MiMo-V2.5 39.0)

Korean benchmarks (Upstage's table; the report claims the highest average of any model compared, including fast-tier closed APIs — suite average **85.4** vs DeepSeek-V4-Flash's 84.9):

- KMMLU-Pro: **78.4** (vs DeepSeek-V4-Flash 78.9, GPT-5.4 mini 78.1, MiMo-V2.5 69.1, Claude Haiku 4.5 67.9, Solar Open 100B 64.0) — **a loss**
- CLIcK: **90.7** (vs DeepSeek-V4-Flash 89.2, GPT-5.4 mini 89.6)
- HAE-RAE v1.1: **73.8** (vs DeepSeek-V4-Flash 73.1, GPT-5.4 mini 69.4, MiMo-V2.5 61.7) — leads
- Ko-AIME'25 (in-house): **97.7** (vs DeepSeek-V4-Flash 98.0, GPT-5.4 mini 90.7) — a loss
- HRM8K: **92.2** (vs DeepSeek-V4-Flash 93.4, GPT-5.4 mini 91.3)
- KBank-MMLU (in-house): **80.8** (vs DeepSeek-V4-Flash 79.5, GPT-5.4 mini 79.0)
- KBL: **75.5** (vs GPT-5.4 mini 75.3, DeepSeek-V4-Flash 72.8)
- KorMedMCQA: **93.0** (vs GPT-5.4 mini 94.2, DeepSeek-V4-Flash 94.1)
- Ko-GDPval (in-house): **86.8** — leads; see agent section
- Blind pairwise preference test over **835 Korean conversations: 44.1% to 26.6%** in Solar Open 2's favor, which Upstage attributes to cultural grounding rather than extra safety training. **Caveat: the report contains no quantitative harm, refusal or jailbreak evaluation of any kind.**

Long context:

- **1,048,576 tokens native** — top tier, and architecturally the honest kind (no positional encoding, hybrid softmax/linear stack) rather than RoPE extrapolation.
- Retrieval evidence is **AA-LCR 62.3%** only. No MRCR / RULER / GraphWalks / LongBench v2 numbers published.
- Upstage itself flags that Solar Open 1 "fell short on limited long-context capability," and the 1M window is the stated fix — but there is no independent measurement of retrieval quality at long lengths.

### Normalized scores (1–100)

- **Tool use: 68/100.** APEX-Agents at 16.6% genuinely leads its size class, and Ko-GDPval 86.8 plus MCP-Atlas 58.2% show real agentic competence. Held to 68 by Terminal-Bench Hard at only 28.3%, **Terminal-Bench 2.1 at 44.19%** on the one independent harness, τ³ banking 19.6%, GDPval-AA 1128 Elo, and the fact that Upstage's flagship Ko-GDPval claim rests on a single **in-house** benchmark where DeepSeek-V4-Pro actually ties it. No Claw-Eval, Toolathon or SWE-Atlas figure exists.
- **Reasoning: 76/100.** MMLU-Pro 86.2% (class-leading) and GPQA Diamond 86.3% are strong mid-frontier results, with AIME 2026 95.7% and HMMT 93.9% showing real math. Capped by HLE at 28.8%, an AA Intelligence Index of only ~25 (#108), AA-LCR 62.3%, no CritPt or Omniscience data, and the 37/100 sovereign-AI placement behind Motif 3's 47.
- **Context window: 94/100.** **1,048,576 tokens, natively** — the top tier, achieved architecturally rather than by extrapolation, and the entire point of the model (holding full agent trajectories in one context). Not 100 because the only retrieval evidence is AA-LCR at 62.3%, with no MRCR/RULER at long lengths and no independent confirmation that quality holds at 1M.
- **Multimodal: 15/100.** **Text-only, confirmed by two independent sources.** Artificial Analysis states outright that it does not support image input and is not multimodal; CloudPrice lists text as the sole input and output modality. This is the floor score by methodology.
- **Coding: 78/100.** LiveCodeBench v6 at 92.4% is class-leading and impressive for an open 250B model, with SWE-bench Verified 70.4% and a huge generational jump over Solar Open 1. Held down by Terminal-Bench Hard 28.3% / Terminal-Bench 2.1 44.19%, ArtifactsBench 55.9%, SWE-bench Verified trailing DeepSeek-V4-Flash and MiMo-V2.5, and **no SWE-bench Pro, SciCode, DeepSWE or Vibe Code Bench data at all**.
- **Cost efficiency: 93/100.** **No hosted per-token price exists — the weights are downloadable at no license fee**, which makes marginal token cost zero for anyone who already runs GPUs, and Upstage is Korea's leading sovereign-AI vendor for exactly that reason. Held at 93 rather than 100 because there is no cheap hosted API to fall back on, the model needs ~600 GB of VRAM at FP16 (8× A100 at $27.45/hr and up), training cost 2M B200 GPU-hours, and the Upstage Solar License is not a standard OSI-style open license despite Model Beat calling it unrestricted.
- **Overall Score: 66/100.** Best fit: **Korean-language enterprise and officework agents on self-hosted sovereign infrastructure**, where Ko-GDPval 86.8, a native 1M context that fits whole agent trajectories, and 15B active parameters per token deliver genuine value — and where the text-only limitation does not matter. Not the pick for multimodal work, frontier reasoning, or hard agentic coding, all of which several open and closed alternatives beat.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research centered on the **official technical report** `arXiv:2607.20062v1` / v2 (Upstage, 22–24 Jul 2026) plus the complete official English and Korean benchmark tables as published on ModelScope's `upstage/Solar-Open2-250B` card and mirrored verbatim on r/LocalLLaMA, cross-checked against Artificial Analysis's model page (Intelligence Index 24.74, Terminal-Bench 2.1 44.19%, knowledge cutoff Feb 2026, text-only modality confirmation), CloudPrice's capability/benchmark API summary, benchlm.ai's Solar Open 2 comparison tables, Vector Wire's measurement ledger, Upstage's own English launch blog, Chosun's release coverage, and an independent critical analysis (OrcaRouter) that catalogues the losses Upstage under-weights. Surfaced the Korean sovereign-AI second-round placement (37, 2nd of 4) and the absence of any safety/harm evaluation in the report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Open_3.md`, using the same headings — worth re-checking if Upstage publishes a hosted API price, a multimodal variant, or independent MRCR/RULER numbers confirming retrieval at 1M.