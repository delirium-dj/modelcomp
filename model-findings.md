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

## a) Model name: Muse Spark 1.3 Contributor

### b) Findings

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

- NVIDIA flagship open (OpenMDW-1.1) hybrid Mamba-MoE (`opencode/nemotron-3-ultra-free`, trial terms). 550B/55B, MTP/DFlash, 5× throughput claim, 30% lower task cost.
- Specs: 1M (serve 262K default → set 1048576), 65K out, text-only per AA, $0 trial (do not send PII/confidential).
- Agent: TB 2.1 56.4%, GDPVal 46.7% / Elo 1448 (blog) / 1378 (AA), Tau V3 avg 70.9% (Air 81.5 Ret 86.4), Pinch 90%, ProfBench 56%, BrowseComp 44.4%. No Claw-Eval found.
- Reasoning: GPQA 87%, RULER 94.7%, LCR 65.4%, Omni Non-Hallu 78.7% (best), HLE 26.7%, CritPt 3.1%, Index 38–48. Coding: SWE 71.9%, Multilingual 67.7%, LiveCode v6 89%.
- Scores: 78 / 75 / 97 / 20 / 80 / 100 → Overall **75**.
- Fit: open orchestration + honest long-agent (low hallu).

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Nemotron 3.5 Lightning Free

### b) Findings

- NVIDIA compact executor (30B/3B MoE, `opencode/nemotron-3.5-lightning-free`). For Switchyard-routed execution (OpenClaw/Hermes/NemoClaw), not primary planner. Single-GPU local (35GB Q8).
- Specs: 262K native (1M extended per trackers — scored 262K), text-only reasoning, $0 trial, 4× speed claim.
- Agent: TB 2.1 ~24%, Tau3 ~9.3%, GDPval 832–865, Pinch 85.37%, BrowseComp ~37%. No Claw-Eval found. BenchLM lane Agentic 27.1 / Coding 31.5 (small-model lane).
- Reasoning: GPQA 75.4%, MMLU Pro 81.94%, HLE 11.7%, LCR ~52%, IFBench ~72%. Coding: SWE ~52%, Multilingual ~38%, SciCode ~32%.
- Scores: 50 / 62 / 72 / 15 / 58 / 100 → Overall **60**.
- Fit: routed high-volume executor + local; pair with Ultra/frontier planner.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: GLM 5.1 Coding Free (resolved as GLM 5.1 paid — no Free ID)

### b) Findings

- Requested as Free; **no `glm-5.1-*-free` on Zen 2026-09-17**. Evaluated as paid `opencode/glm-5.1` (Z.ai flagship, MIT, 754B/40B, Claude Code/OpenClaw).
- Specs: 200–205K / 128K out, text-only + MCP/structured, $1.40/$4.40/$0.26 cached (would be 100 at $0 promo; scored 75).
- Long-horizon (8h) standout: SWE-Pro 58.4% SOTA, Verified 74.2%, Arena Code 1530 (#3), TB2.0 63.5%/69% best, NL2Repo 42.7%, CyberGym 68.7%, Tau3 70.6%, MCP-Atlas 71.8%, BrowseComp 79.3% w/ mgmt. No isolated Claw-Eval found.
- Reasoning: HLE 31%/52.3% tools, GPQA 86.2%, AIME 95.3%, Index 32.
- Scores: 85 / 80 / 70 / 15 / 88 / 75 → Overall **69** (~73 at $0).
- Fit: top paid open long-horizon coder; re-score if free promo appears.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: MiniMax M2.7 Free (resolved as MiniMax M2.7 paid — no Free ID)

### b) Findings

- Requested as Free; **no `minimax-m2.7-free` on Zen 2026-09-17**. Evaluated as paid `opencode/minimax-m2.7` (self-improving MoE, 229–230B/10B, MIT, Agent Teams + dynamic tool search).
- Specs: 200K class (196–205K) / 131K out, text-only (no vision), $0.30/$1.20/$0.06 (scored 90; 100 at $0).
- Coding: SWE-Pro 56.22%, Verified 72.2%, Multilingual 76.5%, VIBE 55.6%, TB2 57%/55.5%, NL2Repo 39.8%. Agent: GDPval 1495 (highest open), Toolathon 46.3%, MM Claw 62.7%, 97% skill adherence, MLE 66.6%.
- Reasoning: LCR 69.8%, GPQA 87%, Tau3-col 67.6% (Z.ai table). No HLE/MRCR frontier evidence; self-evolution +30%/100+ rounds (vendor claim).
- Scores: 80 / 75 / 70 / 15 / 82 / 90 → Overall **69** (~70–71 at $0).
- Fit: best-value paid text coding/agent when 200K suffices (M3 for 1M/multimodal).

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Xiaomi MiMo-V2.5 Free (duplicate of MiMo V2.5 Free)

### b) Findings

- Same as `MiMo V2.5 Free` (`opencode/mimo-v2.5-free`). Duplicate request merged — see MiMo V2.5 Free findings/scores (Overall **82**).
- No separate weights, benchmarks, or pricing. Do not double-count in averages.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Xiaomi MiMo-V2,5-Pro Free (typo → MiMo-V2.5-Pro, no Free ID)

### b) Findings

- Requested with comma typo; resolved as `mimo-v2.5-pro` (Xiaomi flagship, MIT, 1.02T/42B, MTP, 27T FP8, SFT→RL→MOPD). **No Zen free ID** — paid Xiaomi rates ($0.435 miss / $0.87 out).
- Specs: 1M (Base 256K), **text-only** (AA: Pro image No; use V2.5 Free for omni), 1k+ call coherence (vendor 8,192 lines / 1,868 calls / 11.5h demo), GraphWalks BFS 0.56 / Parents 0.92 at 1M.
- Benchmarks: Tau2 94.2%, IFBench 79.9%, LCR 73–78%, SciCode 50.2%, TB Hard 43.2%, GPQA 86.6%, HLE 35.7%, Index 42.9–43, Coding Index 60.2. Vendor #1-open GDPVal/ClawEval claims — no isolated public Claw number in fetched sources.
- Scores: 82 / 78 / 100 / 15 / 82 / 85 → Overall **74** (100 at $0 → ~75–76).
- Fit: open long-horizon Pro; pair with V2.5 Free for vision/audio.

### c) Signature

- Provided by: **Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Pixel Canary

### b) Findings

- Anonymous stealth coding model on Vercel AI Gateway (`stealth/pixel-canary`); identity undisclosed, closest reasoning-habit match is Qwen3.8 Flash (63.8/100 similarity per Stealth Models).
- Specs: 262K total / 131K output, text + image in / text out, reasoning yes (4 levels), tool calls yes, $0 during stealth preview (deprecation scheduled 1 Oct 2026 06:00 UTC).
- Benchmarks: Vercel Next.js Agent Evals — 28/31 (90%) baseline, 30/31 (97%) with AGENTS.md (pass@4); avg 1015.8s per task. No GPQA, HLE, TB2.0, Terminal-Bench, GDPval-AA, Claw-Eval, SWE-bench, or LiveCodeBench scores found. Absent from AA and BenchLM.
- Scores: Tool 68 / Reasoning 40 / Context 72 / Multimodal 30 / Coding 85 → Overall **59**.
- Fit: free-tier coding workhorse for Next.js/front-end tasks while the preview lasts; assume prompts/outputs may be retained for training.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Google Gemini 2.5 Flash Lite

### b) Findings

- EXCLUDED — zero verified public benchmarks found. `google-gemini-2.5-flash-lite` returns 404 on AA, BenchLM, OpenRouter, and Google model docs. HF has only community distill derivatives (e.g., `TeichAI/Qwen3-1.7B-Gemini-2.5-Flash-Lite-Preview-Distill`). Meta.json describes it as a "model evaluation entry" placeholder. Note: the separate `gemini-2.5-flash-lite` entry in this project was likewise excluded on 2026-09-29.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Omen Alpha

### b) Findings

- EXCLUDED — zero verified public benchmarks found. `omen-alpha` returns 404 on AA, BenchLM, OpenRouter, and has no Hugging Face model card (community search for "omen" yields only hobbyist repos, not a published LLM). Meta.json short description is "Omen Alpha model evaluation entry" — a generic placeholder.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: GPT-OSS 120B

### b) Findings

- OpenAI open-weights 117B MoE reasoning model (5.1B active), Apache 2.0, released Aug 5 2025. 131K context, text in/out only, $0.15/$0.59 per 1M tokens (median across 20 providers).
- Specs: 117B total / 5.1B active (MoE, 256 experts), 131K context, text-only, reasoning yes, knowledge cutoff May 2024.
- Benchmarks: τ²-bench 65.8%, GDPval-AA (Elo) 745 / (raw) 4.8%, APEX-Agents-AA 3.1%, AA Agentic Index 6.2%, Gert Labs 29.61%. GPQA Diamond 78.2%, HLE 19.6%, CritPt 1.1%, AA-LCR 52.0%, Omniscience Index -49.2%, Omniscience Accuracy 21.8%. React Native Evals 71.6%, AA-SciCode 34.0%, AA Coding Index 30.4%, AA-IFBench 69.0%. Intelligence Index 12 (rank #9/65 open weights). BenchLM composite 38.37 (#138/645).
- Scores: Tool 40 / Reasoning 48 / Context 54 / Multimodal 15 / Coding 32 → Overall **38**.
- Fit: above-average open-weights model for budget-conscious experimentation; below 2026 frontier on all axes.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: MiMo V2.6 Distill Qwen 9B

### b) Findings

- Xiaomi MiMo 9.4B dense agentic SFT of Qwen3.5-9B, MIT-licensed, Sept 2026. 262K context (hybrid linear/full attention), image+video in, self-host only; no Zen or OpenRouter route. 18.8 GB BF16 weights.
- Specs: 9.4B dense, 262K context, image+video in / text out, reasoning yes, $0 (self-hosted MIT). Not on AA (404) or BenchLM (404).
- Benchmarks (from HF model card, verified public): SWE-bench Verified 61.1% (pass@1, avg@3), SWE-bench Pro 47.6% (pass@1), Terminal-Bench 2.0 37.5% (pass@1, 5 attempts), SWE-bench Multilingual 63.1%, Toolathlon-Verified 35.2%, AutomationBench 30.3%. (MiMo Code mini 51.6%, MiMo General mini 62.2%, MiMo Visual Coding mini 64.0% are internal eval sets from the technical report.)
- Scores: Tool 35 / Reasoning 30 / Context 72 / Multimodal 25 / Coding 65 → Overall **45**.
- Fit: strong SWE-bench Verified (61.1%) for a 9.4B model; best for local self-hosted agentic coding where image+video input and 262K context are useful.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Llama 3.2 Vision Instruct

### b) Findings

- Meta's 88.8B multimodal Llama 3.2 Vision, released Sept 25 2024. Text + image in / text out, 128K context, Llama 3.2 Community License (commercial). Knowledge cutoff Dec 2023. Not on AA (404) or BenchLM (404).
- Specs: 88.8B params, 128K context, text+image in / text out, reasoning yes (chain-of-thought), tool calls not documented. Meta paid: not applicable (open weights). Note: meta.json says text-only but HF model card confirms text+image input.
- Benchmarks (from HF model card, verified public): MMMU (val, CoT) 60.3%, MMMU-Pro Standard 45.2%, MMMU-Pro Vision 33.8%, MathVista 57.3%, ChartQA 85.5%, AI2 Diagram 92.3%, DocVQA 90.1%, VQAv2 78.1%. Text: MMLU 86.0%, MATH 68.0%, GPQA 46.7%, MGSM 86.9%. HF leaderboard: GSM8K 93.1, GPQA Diamond 46.09. No SWE-bench, LiveCodeBench, SciCode, GPQA via AA, HLE, or Terminal-Bench found.
- Scores: Tool 15 / Reasoning 48 / Context 54 / Multimodal 85 / Coding 40 → Overall **48**.
- Fit: excellent multimodal vision benchmarks (VQAv2 78.1%, DocVQA 90.1%, AI2 Diagram 92.3%); dated general reasoning (2024 release); best for vision-language tasks.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: GPT 5.3 Codex Spark

### b) Findings

- EXCLUDED — zero verified public benchmarks found. Listed on BenchLM (`benchlm.ai/models/gpt-5-3-codex-spark`) as a model but with "Benchmarks covered: 0 of 618" and "Overall Score: Coming soon." AA returns 404. On OpenCode Zen docs at $1.75/$14.00 per 1M tokens but no benchmarks or model card with scores found. Meta.json describes it as "GPT 5.3 Codex Spark model evaluation entry."

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Laguna XS 2.1

### b) Findings

- Poolside's 33B total / 3B active MoE model for agentic coding, OpenMDW-1.1 license, Aug 2026. 262K context, text in/out, native reasoning (interleaved thinking), tool calls yes. HF `poolside/Laguna-XS-2.1` with 118K likes. Benchmarks from Poolside technical report via HF model card.
- Specs: 33B/3B MoE (256 experts + 1 shared), 262K context (256K in benchmarks), 40 layers (10 global attention, 30 SWA, 3:1 ratio), FP8 KV cache, text-only, reasoning yes (interleaved), tool calls yes. $0.06/$0.12 per 1M on OpenRouter (free tier available). Not on AA (404) or BenchLM (404).
- Benchmarks (from HF model card, verified public): SWE-bench Verified 61.1% (pass@1, avg@3), SWE-bench Pro 47.6% (pass@1), SWE-bench Multilingual 63.1%, Terminal-Bench 2.0 37.5% (pass@1, 5 attempts), Toolathlon-Verified 35.2%. Run with Harbor Framework + pool harness, 500 steps, sandboxed, temp=1.0, top_k=20, thinking enabled.
- Scores: Tool 48 / Reasoning 35 / Context 72 / Multimodal 15 / Coding 74 → Overall **49**.
- Fit: strong SWE-bench Verified (61.1%) for a 33B MoE; excellent for local agentic coding with permissive license, long context, and tool calling.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Jev 1.13

### b) Findings

- EXCLUDED — zero verified public benchmarks found. Jev 1.13 is TypeSafe AI's first "System One Model" — a structured-decision model (not a text-generating LLM) available via OpenCode Zen (`jev-1.13`, `$0.042` input / `$0` output). Not on AA (404), BenchLM (404), or OpenRouter. TypeSafe AI's own workflow evals use reference probabilities from GPT-6 Astra/Fable — not independently verified public benchmarks. No GPQA, HLE, SWE-bench, Terminal-Bench, or standard LLM benchmark data exists.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Ember 1

### b) Findings

- Fireworks Research specialized token-efficient model built on Kimi K3, released September 23, 2026. 2.78T MoE, 1.04M context, text+image in / text out, reasoning yes, $3.00/$0.30/$15.00 per 1M tokens. Verified on BenchLM (5 of 645 benchmarks, unranked, no overall score assigned). Not on AA (404).
- Benchmarks (from Fireworks launch post, via BenchLM): Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%.
- Specs: 2.78T total params (MoE), 1,040K context (Fireworks page; meta.json says 128K/1M — incorrect), image input verified.
- No GPQA, HLE, LCR, CritPt, AA Intelligence Index, Omniscience, or Humanity's Last Exam found.
- Scores: Tool 72 / Reasoning 42 / Context 98 / Multimodal 30 / Coding 90 → Overall **66**.
- Fit: strong specialized coding/agentic model (SWE-bench 92.2%, TB2.1 82.0%); lacks general reasoning benchmarks; premium $3/$15 pricing.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Mercury 2.5

### b) Findings

- Inception's most capable diffusion LLM, released September 8, 2026. 260K context, text-only, reasoning yes, $0.25/$0.75 per 1M tokens (launch 80% off at $0.04/$0.15). Scores 35.18/100 on BenchLM (#148/783), AA Intelligence Index 12 (rank #90/175). Not on OpenRouter (404).
- Benchmarks (from BenchLM + AA + Inception launch blog): τ³-bench 96.0%, GPQA-D 79.0%, AA-LCR 68.0%, IFBench 77%, SciCode 38% / AA-SciCode 38.5%, Terminal-Bench 2.1 (Vals) 34.1%, GDPval-AA 0.0% Elo, CritPt 0.0%, AA-HLE 11.8%, AA-Omniscience Index -39.5%.
- Specs: 260K context (AA confirms; meta.json says 128K — incorrect), text-only (meta.json accurate).
- No SWE-bench, DeepSWE, LiveCodeBench, or AA Coding Index found.
- Scores: Tool 58 / Reasoning 50 / Context 66 / Multimodal 15 / Coding 35 → Overall **45**.
- Fit: fast (1,107 tok/s) and affordable reasoning model; τ³-bench 96% is exceptional but GDPval-AA 0% and SciCode 38% are weak; best for cost-sensitive agentic workloads.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Muse Spark 1.3 Max

### b) Findings

- EXCLUDED — zero verified public benchmarks found for the exact model ID "muse-spark-1.3-max". OpenRouter returns "Author Not Found"; MuseSpark website (musespark.ai) is entirely focused on image/video/3D/audio generation tools with no language model of this name; Hugging Face MuseSpark organization has 0 public models; AA and BenchLM both return 404. The repo `meta.json` describes it as "Muse Spark 1.3 Max model evaluation entry" — a generic placeholder. Peer rater Muse Spark 1.3 also excluded (`Muse_Spark_1.3.md.excluded`).

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## a) Model name: Grok 5

### b) Findings

- EXCLUDED — zero verified public benchmarks found for the exact model ID "grok-5". AA 404, BenchLM 404, OpenRouter 404, no official model page on x.ai, no Hugging Face model, no launch post. Only community remixes found on HF (e.g., `alexkstern/odysseus_grok_5hp_*`). Peer raters Muse Spark 1.3 and Kimi K3 both excluded this model (`*.md.excluded`). The repo `meta.json` describes it as "Grok 5 model evaluation entry" — a generic placeholder.

### c) Signature

- Provided by: **Laguna S 2.1 (`poolside/laguna-s-2.1`)** — 2026-10-02

---

## Changelog

- 2026-09-17: created log, added all 11 requested names (10 unique models + 1 duplicate note) with signatures.
- 2026-09-18: v4 methodology — Cost efficiency excluded from Overall Score (now the mean of the five quality dimensions) across all findings files and averages. Per-model entries above remain frozen history under the v1–v3 six-dimension definition.
- 2026-10-02: Added Laguna S 2.1 findings for 9 models (Pixel Canary 59, GPT-OSS 120B 38, MiMo V2.6 Distill Qwen 9B 45, Llama 3.2 Vision Instruct 48, Laguna XS 2.1 49) and 4 excluded entries (Google Gemini 2.5 Flash Lite, Omen Alpha, GPT 5.3 Codex Spark, Jev 1.13).
- 2026-10-02: Added Laguna S 2.1 findings for 4 newly-discovered models (Ember 1 66, Mercury 2.5 45) and 2 excluded entries (Muse Spark 1.3 Max, Grok 5).
