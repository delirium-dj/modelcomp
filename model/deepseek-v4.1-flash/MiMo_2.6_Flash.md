# DeepSeek-V4.1-Flash — findings by MiMo 2.6 Flash

- Source: DeepSeek (`deepseek-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** The smallest model of DeepSeek's new "architecture family" (released 2026-09-10) — **552B-param MoE with a Causal Encoder–Decoder split**: 8B active on prefill, 16B on decode (20-layer causal encoder + 20-layer decoder), CSA2 sparse attention, FP4 main KV at 890 bytes/token (¼ of V4-Flash's, 437× less than V1 on vendor arithmetic), SWA Bounded Replay (persistent KV ≈1/8 of V4-Flash's SSD footprint). Trained from scratch on 45T multimodal tokens; native image+text in. Beats the 1.6T flagship V4-Pro on several public agent benchmarks at ~40% of its cost-per-task — so convincingly that DeepSeek announced V4-Pro's retirement, then **reversed it on user demand** (V4 Pro stays with unchanged billing). V4-Flash and V4-Flash-Vision-Exp IDs now route here.
- **Provider / access:** DeepSeek API (canonical ID **`deepseek-flash`**; Chat Completions, Responses, Anthropic-compatible surfaces), OpenRouter (19 providers), DeepInfra, Fireworks, Databricks, Novita, Parasail, Baseten, Inco, LithosAI; SGLang/vLLM day-zero open-source serving; MIT weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`).
- **Release / knowledge:** released 2026-09-10; knowledge cutoff not disclosed → not scored.
- **IDs:** `deepseek/deepseek-v4.1-flash` (gateway routes) / `deepseek-flash` (native; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp` accepted as aliases).
- **Context window:** 1,048,576 (1M) tokens; max output **384,000**.
- **Modalities:** text + images in; text out (JSON, function calling); reasoning yes (thinking on by default; effort low/high/**max** default high; the card also documents a continuous 1–100 effort for research runs); tool calls yes.
- **Pricing (as of 2026-10-07):** peak **$0.30 in / $1.20 out** per 1M; **off-peak (50%) $0.15/$0.60** — all weekdays outside 01:00–04:00 & 06:00–10:00 UTC plus weekends; **cache hits $0.003/$0.006 (~98% off)**. AA measured: **$0.27 per Intelligence Index task** (vs V4 Pro 0813's $0.67). Open weights MIT. Paid (self-host = hardware only).
- **Architecture:** MoE 552B / 8B-prefill–16B-decode, CED + CSA2, FP4 KV, Engram memory tables (the serving constraint; SGLang host-offload/vLLM mmap both in flight).

### Raw benchmarks found

Agent / tool use (DeepSeek-run, max effort, DeepSeek Harness Minimal unless noted):

- Terminal-Bench 2.1: **90.6** (Pass@1 — above Opus 5.0's 89.1 and GPT-5.6 Sol's 88.8 in DeepSeek's table; **clears the 88% ref**). Scaffold spread disclosed: 84.1 (Codex) → 90.6 (DSH Minimal); 88.0 with Claude Code.
- Terminal-Bench 3.0: **30.0**; Terminal-Bench 4.0: **31.2** (vs Opus 5.0's 43.3/51.8 — behind frontier on the next-gen harnesses).
- AutomationBench: **54.8** (top of DeepSeek's table; Opus 5.0 50.3, GPT-5.6 Sol 45.8). Agent's Last Exam: **31.8** (top of table; Opus 5.0 28.6). CyberGym: **88.1** (top). SEC-Bench Pro: 62.8. ExploitGym: 15.3.
- HLE with tools: **63.9** (top of table; Opus 5.0 63.6, GLM-5.3 62.5). GDPval-AA: no row found (not in DeepSeek's published set).
- Independent (AA): index run cost **$0.27/task**, 212–236 tok/s first-party (well above the 73 tok/s class median); noted **very verbose** (250M vs 140M median output tokens on the index).

Reasoning / knowledge:

- GPQA Diamond: **90.9** (DeepSeek) — **clears the 90%+ ref** (V4 Pro higher at 92.4).
- HLE: **36.8** Pass@1 (39.1 on the text-only subset) — **misses the 40%+ ref**; with tools 63.9 (as above).
- AA Intelligence Index: **39–40** at max effort (AA; 6th of 113 in class, median 18; V4 Pro 0813: 36) — under the 60+ ref.
- MathArena Apex: **65.6** (ties Kimi K3's best). Codeforces: **3471** rating. MMLU 91 / MMLU-Pro 81.2 (DeepInfra rows); AIME 2025 87.5; SimpleQA 49. SuperGPQA (base) 53.1.

Coding (DeepSeek-run unless noted):

- DeepSWE v1.1: **74.2** Resolved (mini-SWE) — **clears the 74% frontier ref** (vs Opus 5.0 74.0, Sol 73.0); disclosed spread: 65.5 (OpenCode) → 74.2 (mini-SWE), N=8 samples.
- NL2Repo-Bench: **64.0** (model card) vs **65.4** (changelog) — DeepSeek hasn't reconciled; both ahead of K3/GLM-5.3's 58.0.
- ProgramBench (Almost@1): 20.3 (vs Opus 5.0 37.0 — long-horizon deficit). Codeforces 3471 as above.
- No SWE-bench Verified / AA Coding Index / LiveCodeBench public row found for this model.

Long context:

- 1M context trained in at 34T tokens (sparse attention at 64K pretrain); LongBench-V2 (base): 45.2 — mid. No MRCR/needle score; efficiency story (890B/token KV, ¼ HBM) is the architectural claim.

Multimodal (DeepSeek-run):

- Native image+text in (first V4.1-family model with it). MMMU-Pro (base): 56.5; DocVQA (base): 95.6; CVBench 77.9; RefCOCO 86.0. Vision-agent rows: Chartography w/tools 78.9, BabyVision w/tools 89.6, ZeroBench-main w/tools 49.0.

### Normalized scores (1–100)

- **Tool use: 90/100.** The first model in this batch to clear **both** agentic-coding refs outright — TB2.1 90.6 (88 ref) — plus AutomationBench 54.8 and ALE 31.8 topping DeepSeek's frontier comparison table, CyberGym 88.1, HLE-tools 63.9; held at 90 by TB3.0/TB4.0 (30/31 vs Opus 5's 43/52), ProgramBench 20.3, and no GDPval row.
- **Reasoning: 85/100.** GPQA 90.9 clears the 90+ ref and MathArena/Codeforces are strong, but no-tools HLE 36.8 misses the 40+ ref (tools version clears) and the AA Index (40) is 20 points under 60+.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor, backed by a purpose-built KV-compression architecture; LongBench-V2 45.2 is mid and there's no needle result → floor.
- **Multimodal: 69/100.** Text + image in, text out = image band (60–70); DocVQA 95.6 and BabyVision 89.6 are excellent, but MMMU-Pro 56.5 is weak and there's no video/audio/PDF input.
- **Coding: 90/100.** DeepSWE 74.2 clears the 74% ref and TB2.1 90.6 clears the 88% ref — the only model here to clear both headline coding refs — with Codeforces 3471 and NL2Repo 64; next-gen harnesses (TB3/4 ~31), ProgramBench 20.3, the 8.7-point scaffold spread, and missing SWE-V/AA Coding rows keep it at 90 rather than 93+.
- **Cost efficiency: 97/100.** Off-peak $0.15/$0.60 (peak $0.30/$1.20) is far below the $0.60/$2.20 ≈ 92 anchor, cache hits are 98% off, AA measured $0.27/index-task (vs $0.67 for the flagship it beats), and MIT self-hosting is free of license cost; the only deductions are peak/off-peak double-billing windows and heavy output verbosity on reasoning runs.
- **Overall Score: 86/100.** (90+85+95+69+90)/5 = 85.8 → 86 — the open-weight efficiency story of September 2026: first in batch to clear both headline agentic-coding refs at dime-store prices, with HLE-without-tools, the AA Index gap, and the next-gen terminal scores marking the distance to full frontier.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (DeepSeek API docs + announcement, Hugging Face model card, Artificial Analysis, DeepInfra, OmniaKey, Orcarouter); scores are normalized 1–100 interpretations, not official vendor scores.
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

