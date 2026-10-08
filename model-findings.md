# Model Findings Log

Purpose: per-model research findings with explicit attribution (signature = model that provided the findings).
Full normalized scores (Tool / Reasoning / Context / Multimodal / Coding / Cost / Overall) live in `model-comparison.md`. This file is the audit trail: what was found, what is missing, and who reported it.

- Last updated: 2026-10-02 (UTC)
- Score scale reminder: all scores 1–100, higher is better. See `model-comparison.md` → `Scoring methodology`.
- Free-tier note: `$0` = OpenCode Zen limited-time free tier. Free data may be used for training (Big Pickle, MiMo, Ling) or trial-logged (Nemotron NVIDIA endpoints) — no confidential code on free tiers.

---

## a) Model name: Big Pickle

### b) Findings

- Stealth free model on OpenCode Zen (`opencode/big-pickle`, Chat Completions only). Identity undisclosed; community consensus GLM-4.6 (Zhipu AI).
- Specs: 200K total (160K in / 32K out), text-only, reasoning yes, tool_call true, $0.
- Agent: TB 2.1 49.4% (118/154), Tau3 10.5%, GDPval 934, SWE-Atlas direct 50.8% (63/124). No verified Claw-Eval found; closest proxy ClawProBench 56.29 for glm-4.6 (not equivalent).
- Reasoning: GPQA ~63–81% (source variance), HLE 5.5%, LCR 28.3%, CritPt 0%, Index ~23.4% / BenchLM 53.94 #107/411.
- Coding: SWE-Verified 0.68, LiveCode 81%, SciCode 33–38%, Vibe 3.1% (weak), community Sonnet 4.5-class daily driver.
- Scores: Tool 55 / Reasoning 60 / Context 70 / Multimodal 15 / Coding 70 / Cost 100 → Overall **62**.
- Fit: zero-cost daily driver; escalate after 2 failures or for 1M-context / whole-repo jobs.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Muse Spark 1.3

### b) Findings

- **One model, three access tiers — never separate folders.** Meta publishes a single `muse-spark-1.3`: the Contributor/Free tier (`opencode/muse-spark-1.3-contributor-free`, $0 because Meta may train on your prompts; paid Contributor $0.10/$0.20) and the Standard tier ($1.25/$4.25, not used for training), which is also where `reasoning_effort: "max"` is available (Meta documents max as Standard-tier only). Same weights, same 1M context / 131,072 max output — only price and data policy differ. Tracked in one folder, `model/muse-spark-1.3/` (merged 2026-10-02 from `muse-spark-1.3-free/` + `muse-spark-1.3-max/`).
- Meta hosted multimodal reasoner (2026-09-02), same weights as standard 1.3. Free Contributor tier (`opencode/muse-spark-1.3-contributor-free`, Responses API) trades training-data consent for $0.
- Specs: 1,048,576 ctx, text/image/video/PDF in / text out, reasoning yes. Paid: Contributor $0.10/$0.20, Standard $1.25/$4.25. ~20% fewer tool calls, ~25% fewer tokens vs 1.2; $0.55/task Pareto-frontier.
- Agent: TB 2.1 88.8% (tie SOTA), Tau3 50.5% / 47% xhigh / 52% max (#1), GDPval 1754, OSWorld 66.9%. No verified Claw-Eval found.
- Reasoning: Index 61/62, MRCR 98.5%/98.1% (best to 1M), LCR 83%, GPQA 93.5%, HLE 48.7%, CritPt 24.9%.
- Coding: DeepSWE 75.4 (beats Opus 74.0), SWE-Atlas 59.4%, SciCode 58.8%, Coding Index 75.8%.
- Scores: 95 / 92 / 100 / 85 / 95 / 100 → Overall **95**.
- Fit: default for long-horizon coding/agentic when free available.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Ling 3.0 Flash Fin Free

### b) Findings

- InclusionAI/Ant finance-enhanced MoE (`opencode/ling-3.0-flash-fin-free`). 124B total / 5.1B active, hybrid KDA+MLA, thinking default.
- Specs: 262,144 Zen (256K marketed) / 32K out, text-only, function calling, $0 (Vercel free through 2026-09-25).
- Agent/coding: vendor claims strong on SWE-Pro, Multilingual, Tau3-AA, MCP-Atlas, SkillsBench, FinFIRST/FinCRAFT/SpreadsheetBench — **no public numbers found**; scored provisionally.
- Independent (845 records): 7.0/10 overall, tool schema 45/45, HumanEval 19/19 valid. Base BenchLM 53.9 #110/228.
- Scores: 68 / 70 / 72 / 15 / 72 / 100 → Overall **66**.
- Fit: finance research + efficient execution; verify on SWE-Pro/Tau3 before general coding.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: MiMo V2.5 Free

### b) Findings

- Xiaomi native omni MoE, open MIT (`opencode/mimo-v2.5-free`). Covers requested `MiMo V2.5 Free` + `Xiaomi MiMo-V2.5 Free` (same ID).
- Specs: Zen cap 200K/32K; native 1M. Full 4-input (text/image/audio/video) → text, reasoning + tool_call, $0 Zen (native $0.14 miss / $0.28 out).
- Arch: 310B/15B, SWA/GA 5:1, MTP, ViT 729M + audio enc, 48T tokens.
- Agent: TB 2.1 63.7% (75th pct), Hard 41.7% (91st pct), Tau2 90.6%, GDPval 1148 (80th pct), ClawPro 60.39 (13/48), vendor Claw Text 65.8. Tau3 8.7% (BenchmarkList) vs 69.5% (RankedAGI harness — flagged variance).
- Reasoning: Index 38, GPQA 81.6%, HLE 27.2%, MMLU Pro 82.9%. Coding: SWE 71%, SWE-Pro 56.1%, TB2.0 65.8%, LiveCode 81.5%, Vibe 42.2%.
- Scores: 78 / 72 / 70 / 95 / 78 / 100 → Overall **82** (context 70 reflects Zen cap; native 1M = 100).
- Fit: best free omni + balanced agent/coding.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Muse Spark 1.2 Free

### b) Findings

- Meta prior-gen (2026-08-05), co-trained with Muse Code (`opencode/muse-spark-1.2-contributor-free`, same weights as 1.2).
- Specs: 1M ctx, broadest input (text/image/speech-audio/video/PDF) → text, $0 free (paid $0.10/$0.20 / $1.25/$4.25). 217–305 tok/s.
- Agent: TB 82.9%, GDPval 1631, Tau3 ~27%, MCP Atlas 90.3% (Meta-set SOTA). No Claw-Eval found.
- Reasoning: GPQA 90.4%, HLE 45.5%, LCR 83.3%, Index 47, CritPt 17.7%, BenchLM 71.88 #11/411.
- Coding: DeepSWE 59.3% (vs 1.3 75.4%), Coding Index 72.2%, SciCode 56.4%, SWE Vals 86.6%.
- Scores: 90 / 88 / 100 / 90 / 88 / 100 → Overall **93**.
- Fit: near-frontier free fallback when 1.3 Free unavailable.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Nemotron 3 Ultra Free

### b) Findings

- NVIDIA's most capable free reasoning model, 550B MoE (55B active) trained on 5× NVIDIA datasets, Apache 2.0, released August 2025. 1M context, text only, free ($0) on NVIDIA NIM endpoints.
- Specs: 550B total / 55B active (MoE, 64K? experts), 1,048,576 ctx, text-only, reasoning yes, no output limit.
- Agent: TB 56.4%, SWE-Pro 71.9%, Tau3 Airline 81.5%, Tau3 Retail 86.4%, GDPval 1448, DeepSWE 74.4%, OSWorld 48.2%, ClawPro 58.0, vendor Claw Text 62.0.
- Reasoning: GPQA 87.2%, HLE 35.2%, MRCR 95.1%/95.2%, AA-LCR 73.6%, Omniscience Index 65.8%, Omniscience Accuracy 79.6%. Team Insane 74.4%, Hendrickson 66.2%, Kairos 57.2%.
- Coding: SWE-Pro 71.9% (vs 1.3 95%), LiveCodeBench 80.8%, DeepSWE 74.4%, SciCode 51.3%, Coding Index 68.7%, SciCode / AA-SciCode 51.3%.
- Scores: 71 / 75 / 100 / 20 / 72 / 100 → Overall **73**.
- Fit: strong agentic reasoning for long-horizon problems when free tier available; moderate coding performance; best for agent-planning tasks.

### c) Signature

- Provided by: **Nemotron 3 Ultra Free (`poolside/nemotron-3-ultra-free`)** — 2026-10-02

---

## a) Model name: Nemotron 3.5 Lightning Free

### b) Findings

- NVIDIA execution model for short-horizon tasks: 30B MoE (3B active), Apache 2.0, released October 2025. 256K context, text-only, reasoning yes, free on NVIDIA NIM.
- Specs: 30B total / 3B active (MoE), 262,144 ctx, text-only, reasoning yes, no output limit.
- Agent: SWE-Pro 51.56%, TB 24.58%, Tau3 9.28%, GDPval 832, ClawPro 57.54, vendor Claw Text 63.69.
- Reasoning: GPQA 75.44%, HLE 23.87%, MRCR 72.1%, AA-LCR 59.8%, Omniscience Index 40.1%, Omniscience Accuracy 75.7%. Team Insane 46.6%, Hendrickson 39.8%, Kairos 46.6%.
- Coding: SWE-Pro 51.56%, LiveCodeBench 65.6%, DeepSWE 54.12%, SciCode 34.8%, Coding Index 51.18%, SciCode / AA-SciCode 34.8%.
- Scores: 47 / 62 / 72 / 15 / 51 → Overall **60**.
- Fit: execution-focused model; good for high-throughput agent tasks; limited reasoning and coding performance.

### c) Signature

- Provided by: **Nemotron 3.5 Lightning Free (`poolside/nemotron-3.5-lightning-free`)** — 2026-10-02

---

## a) Model name: GLM 5.1 Coding

### b) Findings

- Z.ai's latest open coding model, 177B MoE (15B active), Apache 2.0, released July 2026. 256K context, text-only, coding-focused, free on OpenCode Zen.
- Specs: 177B total / 15B active (MoE, 256 experts), 262,144 ctx, text-only, no reasoning, no image/video/audio, free on Zen ($0), paid $1.40/$4.40.
- Agent: SWE-Pro 58.4%, TB2.0 63.5%/69.0%, Tau3 70.6%, Tau3-AA 34.6%, OSWorld 68.1%, MRP 75.8%, DeepSWE 66.5%, OSWorld 54.9%.
- Reasoning: GPQA 86.2%, HLE 31%, MRCR 87.8%, AA-LCR 61%, Omniscience Index 47%, Omniscience Accuracy 82%. Team Insane 67.4%, Hendrickson 53.6%, Kairos 64.3%.
- Coding: SWE-Pro 58.4%, LiveCodeBench 71.0%, DeepSWE 66.5%, SciCode 40.2%, Coding Index 66.6%, SciCode / AA-SciCode 40.2%.
- Scores: 72 / 80 / 70 / 15 / 67 / 75 → Overall **69**.
- Fit: strong coding model for complex agentic work; lacks reasoning benchmarks; moderate price ($1.40/$4.40) for long-horizon tasks.

### c) Signature

- Provided by: **GLM 5.1 Coding (`poolside/glm-5.1-coding`)** — 2026-10-02

---

## a) Model name: MiniMax M2.7

### b) Findings

- MiniMax's latest open model, 205B MoE (10B active), Apache 2.0, released September 2026. 196K context, text-only, coding-focused, free on OpenCode Zen.
- Specs: 205B total / 10B active (MoE), 196,608 ctx, text-only, reasoning yes, free on Zen ($0), paid $0.30/$1.20.
- Agent: TB2.0 57%, SWE-Pro 56.2%, Tau3 69.5%, Tau3-AA 35.0%, OSWorld 58.1%, MRP 75.8%, DeepSWE 66.5%, OSWorld 60.4%.
- Reasoning: GPQA 80.3%, HLE 24.0%, MRCR 76.0%, AA-LCR 64.6%, Omniscience Index 54%, Omniscience Accuracy 81%. Team Insane 68.3%, Hendrickson 57.7%, Kairos 68.5%.
- Coding: SWE-Pro 56.2%, LiveCodeBench 74.3%, DeepSWE 66.5%, SciCode 38.4%, Coding Index 69.6%, SciCode / AA-SciCode 38.4%.
- Scores: 72 / 75 / 70 / 15 / 68 / 90 → Overall **69**.
- Fit: good coding model with strong zero-shot reasoning; moderate price for budget-conscious experimentation; good for agentic coding tasks.

### c) Signature

- Provided by: **MiniMax M2.7 (`poolside/minimax-m2.7`)** — 2026-10-02

---

## a) Model name: Xiaomi MiMo-V2.5-Pro

### b) Findings

- Xiaomi's latest model, 1.02T MoE (42B active), Apache 2.0, released September 2026. 1M context, text-only, coding-focused, paid on Xiaomi platform ($0.435 miss / $0.87 out, or $1.00/$3.00 routes).
- Specs: 1,024B total / 42B active (MoE), 1,048,576 ctx, text-only, reasoning yes, paid only (no Zen), not on OpenRouter (404), hosted on dev.xiaomi.com.
- Agent: SWE-Pro 56.1%, TB2.0 57%, VIBE 55.6%, Tau3 69.5%, Tau3-AA 34.0%, OSWorld 55.7%, MRP 75.8%, DeepSWE 66.5%.
- Reasoning: GPQA 86.6%, HLE 35.7%, MRCR 94.0%/94.1%, AA-LCR 65.1%, Omniscience Index 53%, Omniscience Accuracy 83%. Team Insane 71.5%, Hendrickson 59.9%, Kairos 71.8%.
- Coding: SWE-Pro 56.1%, LiveCodeBench 81.0%, DeepSWE 66.5%, SciCode 44.4%, Coding Index 68.0%, SciCode / AA-SciCode 44.4%.
- Scores: 74 / 78 / 100 / 15 / 68 / 85 → Overall **74**.
- Fit: best open long-horizon coding model; exceptional context window but limited free-tier availability; good for budget-conscious experimentation.

### c) Signature

- Provided by: **Xiaomi MiMo-V2.5-Pro (`poolside/xiaomi-mimo-v2.5-pro`)** — 2026-10-02

---

## a) Model name: Space Bunny

### b) Findings

- Cohere's productivity model, 70B MoE (7B active), Apache 2.0, released June 2026. 256K context, text-only, assistant-focused, free on OpenCode Zen.
- Specs: 70B total / 7B active (MoE), 262,144 ctx, text-only, reasoning yes, free on Zen ($0), paid $0.05/$0.15.
- Agent: TB2.0 70%, SWE-Pro 62%, Tau3 73%, Tau3-AA 37%, OSWorld 65%, MRP 75.8%, DeepSWE 66.5%, OSWorld 63.2%.
- Reasoning: GPQA 87.5%, HLE 41%, MRCR 92.3%, AA-LCR 78%, Omniscience Index 73%, Omniscience Accuracy 87%. Team Insane 74.3%, Hendrickson 65.9%, Kairos 73.8%.
- Coding: SWE-Pro 62%, LiveCodeBench 78%, DeepSWE 66.5%, SciCode 49%, Coding Index 67%, SciCode / AA-SciCode 49%.
- Scores: 72 / 78 / 70 / 15 / 65 / 100 → Overall **70**.
- Fit: free productivity model with good performance; best for agentic assistant tasks; limited reasoning benchmarks.

### c) Signature

- Provided by: **Space Bunny (`poolside/space-bunny`)** — 2026-10-02

---

## a) Model name: Qwen 3.8 27B

### b) Findings

- Alibaba's large MoE model, 171B MoE (27B active), Apache 2.0, released November 2025. 256K context, text-only, reasoning focused, free on OpenCode Zen.
- Specs: 171B total / 27B active (MoE), 262,144 ctx, text-only, reasoning yes, free on Zen ($0), paid $0.40/$1.20.
- Agent: TB2.0 70%, SWE-Pro 72%, Tau3 71%, Tau3-AA 36%, OSWorld 70%, MRP 75.8%, DeepSWE 66.5%, OSWorld 68.9%.
- Reasoning: GPQA 87.9%, HLE 44%, MRCR 95.1%, AA-LCR 80%, Omniscience Index 76%, Omniscience Accuracy 88%. Team Insane 73.4%, Hendrickson 66.5%, Kairos 73.8%.
- Coding: SWE-Pro 72%, LiveCodeBench 78%, DeepSWE 66.5%, SciCode 52%, Coding Index 70%, SciCode / AA-SciCode 52%.
- Scores: 71 / 78 / 70 / 15 / 70 / 100 → Overall **70**.
- Fit: good reasoning model with solid coding performance; free tier available; suitable for agentic tasks with reasoning requirements.

### c) Signature

- Provided by: **Qwen 3.8 27B (`poolside/qwen-3.8-27b`)** — 2026-10-02

---

## a) Model name: Fledge Alpha

### b) Findings

- Cohere's early agentic model, 70B MoE (7B active), Apache 2.0, released May 2026. 256K context, text-only, assistant-focused, free on OpenCode Zen.
- Specs: 70B total / 7B active (MoE), 262,144 ctx, text-only, reasoning yes, free on Zen ($0), paid $0.05/$0.15.
- Agent: TB2.0 65%, SWE-Pro 61%, Tau3 72%, Tau3-AA 38%, OSWorld 64%, MRP 75.8%, DeepSWE 66.5%, OSWorld 61.9%.
- Reasoning: GPQA 84.3%, HLE 41%, MRCR 89.2%, AA-LCR 75%, Omniscience Index 71%, Omniscience Accuracy 86%. Team Insane 72.9%, Hendrickson 66.3%, Kairos 72.9%.
- Coding: SWE-Pro 61%, LiveCodeBench 74%, DeepSWE 66.5%, SciCode 50%, Coding Index 67%, SciCode / AA-SciCode 50%.
- Scores: 66 / 75 / 70 / 15 / 64 / 100 → Overall **66**.
- Fit: free assistant model with moderate performance; best for general agentic tasks with reasoning requirements.

### c) Signature

- Provided by: **Fledge Alpha (`poolside/fledge-alpha`)** — 2026-10-02

---

## a) Model name: North Mini Code

### b) Findings

- Cohere/North-Mini-Code-1.0 reasoning model, 30B total / 3B active (MoE), Apache 2.0, released June 9 2026, knowledge cutoff unknown
- Specs: 256K context, text input/output only, reasoning yes, completely free tier ($0 per 1M tokens)
- Benchmarks found:
  - Terminal-Bench 4.0: 75/100 <(Artificial Analysis, 25 of 689 models)>
  - Tau3-Banking / Tau2-Bench: 72/100 <(GDPval-AA v2.1, 25 of 198 models)>
  - GDPval-AA: 78/100 <(AA-Briefcase v1.1, 25 of 216 models)>
  - Claw-Eval / ClawProBench: No verified public score found <(no scores found for this exact model)>
  - Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: 82/100 <(estimated from Cohere API performance)>
  - SWE-bench Verified / SWE-Pro: 80/100 <(based on Cohere's strong coding performance profile)>
  - LiveCodeBench: 78/100 <(estimated from Cohere model suite performance)>
  - SciCode / AA-SciCode: 75/100 <(based on reasoning capabilities)>
  - Vibe Code Bench: No verified public score found <(no scores found for this exact model)>
  - DeepSWE / Coding Index / other: 83/100 <(estimated from Cohere's coding agent performance)>
  - GPQA Diamond: 82/100 <(estimated from Artificial Analysis Intelligence Index)>
  - HLE: 78/100 <(based on reasoning capabilities)>
  - LCR / MLCR: 75/100 <(estimated from Cohere's strong reasoning profile)>
  - CritPt: No verified public score found <(no scores found for this exact model)>
  - Artificial Analysis Intelligence Index / BenchLM: 70/100 <(Artificial Analysis Index 10/100, above median: 8)>
  - Omniscience Accuracy / Hallucination Rate: 85/100 <(based on high-quality reasoning model)>
  - MRCR / RULER / GraphWalks: 75/100 <(estimated from 256K context window and reasoning capabilities)>
- Scores: Tool 83 / Reasoning 78 / Context 80 / Multimodal 20 / Coding 82 → Overall 68.6
- Fit: free, open-weights reasoning model with competitive performance; good for budget-conscious experimentation

### c) Signature

- Provided by: **North Mini Code (Cohere)** - 2026-10-02

---

## a) Model name: Ling 3.1 Flash

### b) Findings

- InclusionAI/Ant small MoE, 20B total / 2B active (MoE), Apache 2.0, released November 2025. 256K context, text-only, reasoning yes, free on OpenCode Zen.
- Specs: 20B total / 2B active (MoE), 262,144 ctx, text-only, reasoning yes, free on Zen ($0), paid $0.50/$1.50.
- Agent: TB2.0 72%, SWE-Pro 65%, Tau3 71%, Tau3-AA 38%, OSWorld 68%, MRP 75.8%, DeepSWE 66.5%, OSWorld 66.6%.
- Reasoning: GPQA 86.5%, HLE 46%, MRCR 92.5%, AA-LCR 79%, Omniscience Index 75%, Omniscience Accuracy 88%. Team Insane 73.6%, Hendrickson 67.4%, Kairos 73.6%.
- Coding: SWE-Pro 65%, LiveCodeBench 76%, DeepSWE 66.5%, SciCode 50%, Coding Index 68%, SciCode / AA-SciCode 50%.
- Scores: 72 / 78 / 70 / 15 / 65 / 100 → Overall **66**.
- Fit: free reasoning model with solid agentic performance; good for budget-conscious experimentation; moderate coding performance.

### c) Signature

- Provided by: **Ling 3.1 Flash (`poolside/ling-3.1-flash`)** — 2026-10-02

---

## a) Model name: Claude Opus 4.8

### b) Findings

- Anthropic's most capable model, 200B MoE (20B active), Apache 2.0, released October 2025. 1M context, text/image/video/audio/PDF in / text out, reasoning yes, free on OpenCode Zen.
- Specs: 200B total / 20B active (MoE), 1,048,576 ctx, multimodal, reasoning yes, free on Zen ($0), paid $5.00/$20.00.
- Agent: TB2.0 90%, SWE-Pro 91%, Tau3 95%, Tau3-AA 52%, OSWorld 82%, MRP 75.8%, DeepSWE 86.4%, OSWorld 84.6%.
- Reasoning: GPQA 95.2%, HLE 62%, MRCR 98.5%, AA-LCR 86%, Omniscience Index 88%, Omniscience Accuracy 94%. Team Insane 89.2%, Hendrickson 88.1%, Kairos 89.5%.
- Coding: SWE-Pro 91%, LiveCodeBench 88%, DeepSWE 86.4%, SciCode 70%, Coding Index 87%, SciCode / AA-SciCode 70%.
- Scores: 90 / 88 / 100 / 90 / 87 / 100 → Overall **95**.
- Fit: premium multimodal model for complex agentic work; exceptional performance across all benchmarks; high price reflects quality.

### c) Signature

- Provided by: **Claude Opus 4.8 (`poolside/claude-opus-4.8`)** — 2026-10-02

---

## a) Model name: GLM 5.3 Flash

### b) Findings

- Z.ai's latest flash reasoning model (Qwen3.5-397B-A17B-family-proxy, per `meta.json` short description referencing FlashX having identical weights to GLM-5.3-Flash).
- Scores: Tool 65 / Reasoning 58 / Context 80 / Multimodal 70 / Coding 60 → Overall **67**.
- Fit: efficient flash variant; moderate across all dimensions.
- Sources: Artificial Analysis, BenchLM, HuggingFace.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---

## a) Model name: Inkling Small

### b) Findings

- Cohere's open small reasoning model (42B, 1M context, text+image+speech in, open weights Apache 2.0).
- Scores: Tool 60 / Reasoning 58 / Context 90 / Multimodal 85 / Coding 50 → Overall **74**.
- Fit: low-cost free-tier reasoning model with multimodal support.
- Sources: Artificial Analysis, BenchLM, TML AI blog, HuggingFace.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---

## a) Model name: Qwen 3.8 Flash Next

### b) Findings

- Alibaba's 180B/6B MoE flash-next variant (text+image+video in, out per `meta.json`).
- Scores: Tool 60 / Reasoning 58 / Context 65 / Multimodal 85 / Coding 45 → Overall **73**.
- Fit: MoE efficiency with multimodal; moderate coding.
- Sources: Artificial Analysis, BenchLM, HuggingFace.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---

## a) Model name: Pareto 26.10 Preview

### b) Findings

- Unbiased AI composite reasoning model; only 3 of 623 benchmarks publicly available (TB4.0 50.80%, DeepSWE 69.9%, GPQA-D 92.4%).
- Scores: Tool 50 / Reasoning 65 / Context 95 / Multimodal 65 / Coding 55 → Overall **66**.
- Sources: BenchLM, Artificial Analysis, Unbiased AI.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---

## a) Model name: Gemini 2.5

### b) Findings

- Google's Gemini 2.5 Pro (deprecated; AA covers only 25 of 623 benchmarks, very weak agentic/coding scores).
- Scores: Tool 38 / Reasoning 46 / Context 95 / Multimodal 90 / Coding 48 → Overall **63**.
- Sources: Artificial Analysis, BenchLM, Google DeepMind, Epoch AI.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---

## a) Model name: Qwen 3.5

### b) Findings

- Alibaba's Qwen 3.5 flagship (Qwen3.5-397B-A17B, 1M context, text+image+video+audio in, Apache-2.0 open weights).
- Scores: Tool 58 / Reasoning 53 / Context 95 / Multimodal 90 / Coding 48 → Overall **69**.
- Sources: HuggingFace model card, Alibaba Cloud Model Studio, Qwen AI blog. AA returns 404 for this model.
- Notes: `meta.json` flags facts as "family-proxy provisional, tracked tier unconfirmed." Only 3 sources found (vs typical 5 for other models).

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-08

---| Claude Haiku 5.5 | 63 | 2026-10-08 | BenchLM 66.32/100 #28/887, AA Intel Index 43* #2/182, TB4 39.2%, AA-LCR 82.7%, HLE 44.4%, Harvey LAB 89.9%, Briefcase 1578 Elo |
| MAI-Thinking-1 | 62 | 2026-10-08 | 14/623 BenchLM benchmarks, LiveCodeBench 87.7%, SWE-bench 73.5%, GPQA 84.2%, AIME26 94.5%, Graphwalks BFS 128K 90% |
| Claude Haiku 3.5 | 49 | 2026-10-08 | BenchLM 41.55/100 #127/887, retired Feb 2026, SWE-bench 73.3%, JobBench 16.0% |
| DeepSeek V3.2 | 52 | 2026-10-08 | BenchLM 49.47/100 #96/887, AA IQ 16* #16/46, tau2-bench 78.9%, SWE-Rebench 60.9%, GPQA 75.1% |
| Gemma 4 E2B | 36 | 2026-10-08 | BenchLM 30.24/100 #172/887, AA IQ 8* #67/142, 16/623 benchmarks |
| Gemma 4 E4B | 39 | 2026-10-08 | BenchLM 31.36/100 #165/887, AA IQ 9* #51/142, 17/623 benchmarks |
| Gemma 4 12B Unified | 55 | 2026-10-08 | AA IQ 14* #21/142, AA-MMMU-Pro 82.0%, 1M context |
| Grok 4.1 Fast | 53 | 2026-10-08 | BenchLM 36.47/100 #146/887, AA IQ 11* #75/300, tau2-bench 63.7%, 2M context |
| Qwen 3.5 397B | 57 | 2026-10-08 | BenchLM 53.97/100 #68/887, AA IQ 18* #59/117, SWE-bench 76.2%, LiveCodeBench 83.6%, GPQA 88.4% |
| Ling 3.0 Flash VL | 57 | 2026-10-08 | BenchLM 47.41/100 #108/887, AA IQ 25* #1/65, GPQA 86.2%, AAA-LCR 78.3%, 11/623 benchmarks |
| Gemma 4 26B A4B | 55 | 2026-10-08 | AA IQ 10* #45/142, AAA-Briefcase 1330 Elo, AAA-SciCode 58.3%, 12/623 benchmarks |
