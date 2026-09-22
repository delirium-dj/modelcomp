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
