# Model Findings Log

Purpose: per-model research findings with explicit attribution (signature = model that provided the findings).
Full normalized scores (Tool / Reasoning / Context / Multimodal / Coding / Cost / Overall) live in `model-comparison.md`. This file is the audit trail: what was found, what is missing, and who reported it.

- Last updated: 2026-09-17 (UTC)
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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Muse Spark 1.3 Free

### b) Findings

- Meta hosted multimodal reasoner (2026-09-02), same weights as standard 1.3. Free Contributor tier (`opencode/muse-spark-1.3-contributor-free`, Responses API) trades training-data consent for $0.
- Specs: 1,048,576 ctx, text/image/video/PDF in / text out, reasoning yes. Paid: Contributor $0.10/$0.20, Standard $1.25/$4.25. ~20% fewer tool calls, ~25% fewer tokens vs 1.2; $0.55/task Pareto-frontier.
- Agent: TB 2.1 88.8% (tie SOTA), Tau3 50.5% / 47% xhigh / 52% max (#1), GDPval 1754, OSWorld 66.9%. No verified Claw-Eval found.
- Reasoning: Index 61/62, MRCR 98.5%/98.1% (best to 1M), LCR 83%, GPQA 93.5%, HLE 48.7%, CritPt 24.9%.
- Coding: DeepSWE 75.4 (beats Opus 74.0), SWE-Atlas 59.4%, SciCode 58.8%, Coding Index 75.8%.
- Scores: 95 / 92 / 100 / 85 / 95 / 100 → Overall **95**.
- Fit: default for long-horizon coding/agentic when free available.

### c) Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

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

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Xiaomi MiMo-V2.5 Free (duplicate of MiMo V2.5 Free)

### b) Findings

- Same as `MiMo V2.5 Free` (`opencode/mimo-v2.5-free`). Duplicate request merged — see MiMo V2.5 Free findings/scores (Overall **82**).
- No separate weights, benchmarks, or pricing. Do not double-count in averages.

### c) Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## a) Model name: Xiaomi MiMo-V2,5-Pro Free (typo → MiMo-V2.5-Pro, no Free ID)

### b) Findings

- Requested with comma typo; resolved as `mimo-v2.5-pro` (Xiaomi flagship, MIT, 1.02T/42B, MTP, 27T FP8, SFT→RL→MOPD). **No Zen free ID** — paid Xiaomi rates ($0.435 miss / $0.87 out).
- Specs: 1M (Base 256K), **text-only** (AA: Pro image No; use V2.5 Free for omni), 1k+ call coherence (vendor 8,192 lines / 1,868 calls / 11.5h demo), GraphWalks BFS 0.56 / Parents 0.92 at 1M.
- Benchmarks: Tau2 94.2%, IFBench 79.9%, LCR 73–78%, SciCode 50.2%, TB Hard 43.2%, GPQA 86.6%, HLE 35.7%, Index 42.9–43, Coding Index 60.2. Vendor #1-open GDPVal/ClawEval claims — no isolated public Claw number in fetched sources.
- Scores: 82 / 78 / 100 / 15 / 82 / 85 → Overall **74** (100 at $0 → ~75–76).
- Fit: open long-horizon Pro; pair with V2.5 Free for vision/audio.

### c) Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17

---

## Changelog

- 2026-09-17: created log, added all 11 requested names (10 unique models + 1 duplicate note) with signatures.
