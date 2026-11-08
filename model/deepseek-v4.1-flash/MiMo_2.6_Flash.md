# DeepSeek-V4.1-Flash — findings by MiMo 2.6 Flash

- Source: DeepSeek (`deepseek-flash`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 86). Fresh sources this pass: DeepSeek API docs (canonical
> `deepseek-flash` is **now served by DeepSeek-V4.1-Flash-1017**, checked
> 2026-11-08) and the BenchLM model page (updated 2026-11-07).
> Changes: Reasoning 85→87 (served-snapshot HLE 42.6 clears the 40%+ ref;
> FrontierMath v2 67.4 first row), Multimodal 69→70 (AA-MMMU-Pro 77.0,
> ExtractBench 87.1); Tool 90, Context 95, Coding 90, Cost 97 held.

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** The smallest model of DeepSeek's "architecture family" (released 2026-09-10) — **552B-param MoE with a Causal Encoder–Decoder split**: 8B active on prefill, 16B on decode, CSA2 sparse attention, FP4 main KV at 890 bytes/token, SWA Bounded Replay. Trained from scratch on 45T multimodal tokens; native image+text in; MIT weights. Beats the 1.6T V4-Pro on several agent benchmarks at ~40% of its cost-per-task. **Update 2026-10-17:** the canonical API id `deepseek-flash` is now served by the **DeepSeek-V4.1-Flash-1017** snapshot (legacy `deepseek-v4-flash*` ids retired and routed there too, billed at Flash price) — BenchLM tracks it as family variant "flash-reasoning (1017)", composite 65.41, #31 of 1016.
- **Provider / access:** DeepSeek API (canonical ID **`deepseek-flash`**, Chat Completions / Responses / Anthropic-compatible), OpenRouter (19 providers), DeepInfra, Fireworks, Databricks, Novita, Parasail, Baseten, Inco, LithosAI; SGLang/vLLM serving; MIT weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`, `…-1017`).
- **Release / knowledge:** released 2026-09-10 (1017 snapshot 2026-10-17); knowledge cutoff not disclosed → not scored.
- **IDs:** `deepseek/deepseek-v4.1-flash` (gateway) / `deepseek-flash` (native, now backed by the 1017 weights).
- **Context window:** 1,048,576 (1M) tokens; max output **384,000**.
- **Modalities:** text + images in; text out (JSON, function calling); reasoning yes (thinking default, effort low/high/max); tool calls yes.
- **Pricing (as of 2026-11-08):** peak **$0.30 in / $1.20 out** per 1M; **off-peak (50%) $0.15/$0.60**; **cache hits ~98% off** — DeepSeek's docs confirm 1017 traffic is "billed at the Flash price" (no change found). AA measured: **$0.27 per Intelligence Index task** (vs V4 Pro 0813's $0.67). Open weights MIT. Paid (self-host = hardware only).
- **Architecture:** MoE 552B / 8B-prefill–16B-decode, CED + CSA2, FP4 KV, Engram memory tables.

### Raw benchmarks found

Agent / tool use (DeepSeek-run unless noted):

- Terminal-Bench 2.1: **90.6** (DeepSeek-V4.1-Flash card, DSH Minimal — clears the 88% ref; scaffold spread 84.1 Codex → 88.0 Claude Code). **Independent check: Vals AI TB2.1 74.5** (BenchLM 2026-11-07 — Vals runs run systematically low, but this is a 16-pt gap from the self-report).
- Terminal-Bench 3.0: **30.0** (base card); Terminal-Bench 4.0: **42.3** (1017 card — up from the base card's 31.2; Opus 5.0 43.3/51.8 still above).
- AutomationBench: **60.5** (1017 card — up from base 54.8; Opus 5.0 50.3, Sol 45.8). Agents' Last Exam: **35.4** (1017 card; base 31.8). CyberGym: **88.1**. ExploitGym: 15.3. SEC-Bench Pro: 62.8.
- GDPval-AA: normalized **55.0%** (AA, via BenchLM 2026-11-07 — percent scale, not Elo-comparable; still no Elo row). AA ITBench: 46.9. CWE-bench v1: 55.0; CWE-Bench-AA: 68.3; AA Cyber Index: 40.8.
- HLE with tools: **63.9** (DeepSeek — top of its table vs Opus 5.0 63.6). Claw-Eval / MCP-Atlas / Toolathon / Tau3 / OSWorld: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.9** (DeepSeek — clears the 90%+ ref).
- HLE: **42.6** (DeepSeek-V4.1-Flash-1017 card — **now clears the 40%+ ref**; base card 36.8 / 39.1 text-only, which missed); **AA-HLE 39.2** (AA independent — a hair under the ref, effort-sensitive).
- AA Intelligence Index: **39.5** (AA, via BenchLM — confirms the prior 39–40 reading; under the 60+ ref).
- **FrontierMath v2: 67.368% T1-3 / 26.829% T4** (Epoch AI leaderboard — first math rows for this model). MathArena Apex: 65.6. Codeforces: **3471**. MMLU-Pro 81.2 / MMLU 91 (DeepInfra). CritPt: 14.3 (AA). AA-Omniscience: accuracy 46.4 / hallucination 96.5 (AA).

Coding (DeepSeek-run unless noted):

- DeepSWE v1.1: **77.0** (1017 card — up from base 74.2, now clearly over the 74% frontier ref vs Opus 5.0 74.0 / Sol 73.0).
- **AA-SciCode: 51.9** (AA, via BenchLM — first SciCode row; just under the 55% ref). ProgramBench: **29.1** (1017 card; base 20.3). NL2Repo-Bench: **68.2** (1017 card; base 64.0). FrontierCode 2.0: 19.3 (Cognition). ScarfBench: 69.0 (Kaggle/IBM).
- Terminal-Bench 2.1: 90.6 (as above; Vals 74.5). Codeforces 3471. No SWE-bench Verified / AA Coding Index row found.

Long context:

- 1M context trained in at 34T tokens; **AA-LCR: 84.0** (AA, via BenchLM 2026-11-07 — first independent retrieval row; still short of the ≥98% condition). LongBench-V2 (base): 45.2. No MRCR/needle score.

Multimodal (DeepSeek-run unless noted):

- **AA-MMMU-Pro: 77.0** (AA independent, via BenchLM — vs the base card's 56.5). ExtractBench (LlamaIndex): **87.11**; ParseBench: 64.38 (2026-11-06 snapshots). Base rows: DocVQA 95.6, CVBench 77.9, RefCOCO 86.0. Vision agents (1017 card): Chartography w/tools **83.0**, BabyVision w/Python **92.5**, ZeroBench w/Python 51.0.

### Normalized scores (1–100)

- **Tool use: 90/100.** Held: TB2.1 90.6 still clears the 88% ref, and the 1017 rows lift AutomationBench to 60.5 and ALE to 35.4 (both top of DeepSeek's frontier table); held at 90 by TB3/TB4 (30/42.3 vs Opus 5's 43/52), ProgramBench 29.1, the Vals TB2.1 74.5 independent reading (scaffold sensitivity), and no GDPval Elo / Tau3 / MCP / Claw rows.
- **Reasoning: 87/100.** The served 1017 snapshot moves it (85→87): HLE **42.6** now clears the 40%+ ref (base card 36.8 missed) and FrontierMath v2 **67.368** T1-3 is a first, competitive math row; GPQA 90.9 still clears 90+. Capped below 88 by AA-HLE 39.2 (independent, just under the ref), AA Index 39.5 (20 points under 60+) and CritPt 14.3.
- **Context window: 95/100.** Held: 1M capacity = ≥1M tier floor with a purpose-built KV-compression architecture; the new AA-LCR 84.0 is decent independent retrieval but far short of the ≥98% condition and there is no needle result → floor.
- **Multimodal: 70/100.** New independent evidence lifts it to the image-band ceiling (69→70): **AA-MMMU-Pro 77.0** (vs base-card 56.5), ExtractBench 87.1 and strong vision-agent rows (Chartography 83.0, BabyVision 92.5); capped at 70 because input is text+image only — no verified video/audio/PDF-native input and text-only output.
- **Coding: 90/100.** Held: DeepSWE **77.0** (1017) and TB2.1 90.6 keep it the only model clearing both headline coding refs (74/88), with Codeforces 3471, NL2Repo 68.2 and the new AA-SciCode 51.9 (just under the 55 ref); held below 93 by TB3/4, ProgramBench 29.1, FrontierCode 19.3, the Vals TB 74.5 reading, and no SWE-V / AA Coding Index row.
- **Cost efficiency: 97/100.** Held: off-peak $0.15/$0.60 (peak $0.30/$1.20) stays far below the $0.60/$2.20 ≈ 92 anchor, cache hits ~98% off, AA measured $0.27/index-task, MIT self-hosting is free of license cost; DeepSeek confirms 1017 traffic bills at the same Flash price. Only deductions: peak/off-peak windows and heavy reasoning verbosity.
- **Overall Score: 86/100.** (90+87+95+70+90)/5 = 86.4 → 86 — the open-weight efficiency story of late 2026: served snapshot now clears HLE 40%+ and DeepSWE 77 at dime-store prices, with the AA Intelligence Index gap and next-gen terminal scores marking the distance to full frontier.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: DeepSeek API docs confirming `deepseek-flash` → V4.1-Flash-1017 serving, BenchLM model page updated 2026-11-07, Epoch AI FrontierMath leaderboard, AA mirror rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek API docs — Models (1017 serving note)](https://api-docs.deepseek.com/quick_start/models)
  - [BenchLM — DeepSeek V4.1 Flash (updated 2026-11-07)](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Hugging Face — DeepSeek-V4.1-Flash-1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# DeepSeek-V4.1-Flash — findings by Mimo v2.6 Flash

- Source: DeepSeek/`deepseek-v4-1-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** Smallest of DeepSeek's new V4.1 Causal Encoder–Decoder family (2026-09-10): 552B MoE with only **8B active prefill / 16B decode**, native multimodal, 1M context, MIT-licensed open weights. Vendor reports TB2.1/DeepSWE/AutomationBench at or above closed frontier and above DeepSeek-V4-Pro; V4-Pro is being phased out (requests auto-route to V4.1-Flash from 2026-09-14).
- **Provider / access:** DeepSeek API `deepseek-v4.1-flash` (legacy `deepseek-v4-flash*` ids temporarily alias here); open weights on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash` (MIT); 36+ hosts (Fireworks, Vercel, DeepInfra, OpenRouter, etc. — hosts from ~$0.10/$0.40 up).
- **Release / knowledge:** 2026-09-10; knowledge cutoff **2025-05** (modelbenchmark).
- **IDs:** `deepseek-v4.1-flash` (HF: `DeepSeek-V4.1-Flash`).
- **Context window:** 1,048,576 tokens; max output **~384K–393K**.
- **Modalities:** **text + image native** in; text out; thinking mode (API toggle on some hosts); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** DeepSeek official **$0.30 in / $1.20 out per 1M**, cached read **$0.006**; off-peak = 50% of peak; new rates effective 2026-09-10. Hosts cheaper still (nano-gpt $0.10/$0.40; AMD $0.14/$0.28). Paid API + free open-weights self-host.
- **Architecture:** 552B backbone MoE; 40-layer CED (20 encoder + 20 decoder); CSA2 sparse attention + FP4 KV (890 B/token global KV = ¼ of V4-Flash); 45T-token multimodal pretrain; sparse attn trained at 64K, extended to 1M at 34T tokens.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. **Harness note:** DeepSeek reports code-agent rows on DeepSeek Harness Minimal (or mini-SWE/Claude Code where required) at 1M context — not always Terminus-2-identical to vendor-to-vendor tables.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek HF card, DSH Minimal — top of their comparison incl. Opus-5.0 89.1, GPT-5.6 Sol 88.8, K3 88.3; **Claude Code harness 88.0, Codex 84.1** — harness-sensitive)
- Terminal-Bench 3.0: **30.0%**; Terminal-Bench 4.0: **31.2%** (DeepSeek; gap vs Opus-5.0 51.8 on TB4 science-heavy)
- AutomationBench: **54.8%** (DeepSeek; above Opus-5.0 50.3, Sol 45.8, K3 46.7)
- Agent's Last Exam: **31.8%** (DeepSeek; above Sol 26.7, K3 27.6)
- CyberGym: **88.1%** (DeepSeek; leads their table)
- OSWorld / MCP Atlas / Toolathlon / Tau3 / GDPval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek; vs Sol 94.1, Opus-5.0 93.4, K3 92.9)
- HLE: **36.8%** no tools / **39.1%** alt config; **HLE w/ tools 63.9%** (DeepSeek — tools config competitive with Opus-5.0 63.6)
- Codeforces rating: **3471** (DeepSeek)
- MathArena Apex: **65.6%** (DeepSeek; ties K3)
- Artificial Analysis / ARC-AGI / FrontierMath: no verified public score found for V4.1-Flash
- Base evals: MMLU-Pro 74.1, SuperGPQA 53.1, AGIEval 83.4 (HF base table)

Coding:

- DeepSWE v1.1: **74.2%** (mini-SWE harness; DeepSeek — edges Opus-5.0 74.0, Sol 73.0, K3 67.5)
- Terminal-Bench 2.1: **90.6%** (DSH Minimal; see agent row)
- NL2Repo-Bench: **64.0%** (DeepSeek)
- ProgramBench: **20.3%** Almost@1 (DeepSeek; trails Opus-5.0 37.0, Sol 23.0)
- SEC-Bench Pro: **62.8%** (DeepSeek; vs Sol 74.3, CyberGym strong but SEC weaker)
- HumanEval 79.4 / BigCodeBench 60.6 (base); SWE-bench Verified / LiveCodeBench for V4.1-Flash: no verified public score found (LiveBench 81.4 on modelbenchmark is ambiguous across V4 gens)

Long context:

- 1M documented (HF/API); **LongBench-V2 EM 45.2** (base — modest); no MRCR/GraphWalks row: retrieval % no verified public score found. KV-compression design specifically targets long-horizon agent prefill cost.

Multimodal:

- Native image+text (HF); **MMMU-Pro 56.5, CVBench 77.9, DocVQA 95.6, RefCOCO 86.0** (base multimodal table)
- Visual agents (Claude Code harness, 512K): Chartography 78.9 w/ tools, BabyVision 89.6, ZeroBench 49.0 (DeepSeek post-train)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 90.6 (DSH) / 88.0 (Claude Code), AutomationBench 54.8 #1-in-table, ALE 31.8, CyberGym 88.1; capped by TB3/TB4 mid (30/31), missing OSWorld/MCP/Tau3/GDPval, and harness non-comparability on TB.
- **Reasoning: 87/100.** GPQA 90.9, HLE-tools 63.9 (frontier-band), Codeforces 3471, MathArena 65.6; capped by HLE no-tools 36.8 (weak raw knowledge) and no AA/ARC rows.
- **Context window: 85/100.** 1M + 384K out documented and KV design optimized for it; LongBench-V2 45.2 modest and no MRCR ≥98% evidence → mid band 85 (not 95).
- **Multimodal: 75/100.** Native text+image; DocVQA 95.6 strong, MMMU-Pro 56.5 mid, visual agents solid; no video/audio, no non-text out → 70–80 band → 75.
- **Coding: 94/100.** DeepSWE 74.2 (table-leading vs Sol/Opus-5), TB2.1 90.6/88.0, Codeforces 3471, NL2Repo 64; capped by ProgramBench 20.3 and SEC-Bench 62.8 behind Sol 74.3.
- **Cost efficiency: 98/100.** $0.30/$1.20 official + $0.006 cache + off-peak 50% + MIT weights (self-host ~$0 cost + hardware) + 8B/16B active — extreme price/performance; among the best in the whole queue.
- **Overall Score: 86/100.** Mean of five quality dims (88+87+85+75+94)/5 = 85.8 → 86. Best-fit: high-volume agentic coding and long-horizon automation at a fraction of frontier API cost; science-heavy TB4/GPQA-top still belong to Fable/Opus/Sol-class.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepSeek announcement + API docs news, arXiv technical report, Hugging Face model card README, llm-stats, modelbenchmark); scores are normalized 1–100 interpretations, not official vendor scores; many rows are DeepSeek-harness self-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
