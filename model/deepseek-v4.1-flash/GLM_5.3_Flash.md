# DeepSeek V4.1 Flash — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-flash` — now serving DeepSeek-V4.1-Flash-**1017**)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): **the model changed under
> this ID** — DeepSeek-V4.1-Flash-1017 (released 2026-10-17) now serves `deepseek-flash`,
> with vendor-measured gains (DeepSWE 74.2→77.0 now above Opus 5 and Sol; TB4.0 31.2→42.3;
> ProgramBench→29.1; HLE→42.6) and new independent rows (LiveBench Coding 96.0% #3, Vals
> Vibe 87.7% #12, AA Index 45 max). Tool 86→88, Coding 86→89, Reasoning 83→84,
> Multimodal 75→76, Cost 91→92. Overall 85→86.

## Model card

- **Name:** DeepSeek V4.1 Flash (open-weight flagship-flash; the `deepseek-flash` ID now serves the **1017 update**, released 2026-10-17)
- **Short description:** DeepSeek's Causal Encoder-Decoder MoE that absorbed the whole V4 line — since Sept 14, 2026 `deepseek-v4-pro` requests reroute to V4.1-Flash at Flash prices (V4-Pro remains served separately at $0.66/$1.98 off-peak, version 0813). Input-heavy agentic workload specialist: 8B active prefill / 16B active decode, FP4 KV cache, native vision, 1M context, MIT weights. The 1017 update adds faster task runtime and shorter outputs — a claimed performance–cost Pareto improvement.
- **Provider / access:** DeepSeek API `https://api.deepseek.com` (OpenAI format) and `/anthropic` (Anthropic format); Responses API; model ID `deepseek-flash`; legacy `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` resolve to the 1017 model at Flash prices. **30+ serving providers** (BenchLeader): Chutes, SiliconFlow, Fireworks, DeepInfra, Cloudflare, Novita, with promo routes as low as $0.05/$0.50 (Particle) and $0.101/$0.150 (Sail). Weights: HF `deepseek-ai/DeepSeek-V4.1-Flash` (MIT). Not on OpenCode Zen.
- **Release / knowledge:** V4.1-Flash GA September 10, 2026; **1017 update October 17, 2026** (weights on HF/ModelScope same day). V4-Pro retirement/reroute Sept 14 (later softened — Pro continues). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `deepseek-flash` (serves 1017); legacy aliases as above.
- **Context window:** 1M tokens; max output 384K (model card recommends max_tokens ≥ 256K, top_p 0.95–1.0); FP4 KV cache at 890 bytes/token; 2,500 concurrent sessions per account (vs Pro's 500).
- **Modalities:** Text + image in (DeepSeek-ViT, vision from first pretraining step); text out. Reasoning: continuous effort 1–100 on local weights, string tiers low/high/max on the API. Tool calls, JSON mode, vision agent via Claude Code harness.
- **Pricing (as of 2026-11-05):** unchanged — $0.30/$1.20 per 1M in/out at peak (Mon–Fri 01:00–04:00 + 06:00–10:00 UTC), **half off-peak** ($0.15/$0.60); cache hits $0.003/$0.006. BenchLeader: **the cheapest model in its top-100 Index rank**. NEW: first-party **Search and Fetch APIs** opened to all developers at $0.75 per 1,000 successful calls each (free via DeepSeek Harness/Claude Code/Codex until billing began ~Nov 1) — a first-party web layer behind the same API key.
- **Architecture:** Open weights, MIT. Causal Encoder-Decoder: 552B total MoE (763B with ViT), ~8B active prefill / ~16B decode, 40 layers split 20/20; KV cache needs 1/4 the HBM and 1/8 the SSD of the previous generation.

### Raw benchmarks found

> 1017 vendor rows (self-reported, DeepSeek Harness v0.2.1+/Claude Code/Mini-SWE-V2 harnesses) supersede the pre-1017 readings; independent rows carry their sources. Cognition's single-roof comparison (no harness disclosed) adds same-table context.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor, DSH-Minimal; multi-harness table: Codex 84.1, mini-SWE 90.3, Claude Code 88, OpenCode 85, Pi 86.1) — **Cognition same-roof: 91.0**; Vals independent: **74.5%**; BenchLeader reads the vendor table with TB2.1 90.6
- Terminal-Bench 4.0: **42.3%** (1017, +11.1 — NEW; still behind Opus 5's 51.8); AA effort ladder: 9.1% (none) / 28.8% (high) / **33.8% max** (AA measured)
- Terminal-Bench 3.0: **30.0%** (unchanged; Opus 5 43.3 — the remaining decisive loss)
- Automation-Bench v1.0.6: **60.5%** (1017, +5.7); AA AutomationBench 68.9% (prior reading)
- Agents' Last Exam: **35.4%** (1017, +3.6 — leads DeepSeek's table)
- DeepSWE v1.1: **77.0%** (1017, +2.8 — now above Opus 5's 74.0 and Sol's 73.0; Cognition confirms 77.0; multi-harness range 65.5–74.2 pre-1017)
- GDPval-AA: **1600 Elo / 55.0%** (AA, unchanged); AA Briefcase 1420 Elo
- Cyber: CyberGym **88.1%** (highest listed); SEC-Bench Pro **62.8%**; CWE-bench v1 55.0%; CWE-Bench-AA **68.3%** (AA measured); ExploitGym 15.3%; ExploitBench 31.1 (Cognition) / 52.8 (benchgap estimate)
- NL2Repo-Bench: **68.2%** (1017, +2.8); ProgramBench: **29.1%** (1017, +8.8); SWE-Atlas QA **71.0** (Cognition); SWE-Bench Pro v2 Hard **86.3** (Cognition); FrontierCode 2.0 19.3 / 1.1 Main 43.9 (Cognition); Codeforces **3471**; Bug Hunt 39.1 fixes
- AA ITBench 46.9%; GDP.pdf 12.8% (prior); AA-Briefcase 1420
- Tau2 / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor, max effort — unchanged; still below V4-Pro's 92.4 and the Western frontier)
- HLE: **42.6%** (1017, +5.8; 44.0 text-only subset); HLE w/ tools **63.9%** (unchanged, frontier-tier); AA-HLE 39.2%
- Artificial Analysis Intelligence Index: **45 at max reasoning** (thetechsignal/AA for 1017; median 19; 210M output tokens = very verbose) — supersedes the 39.5 v4.3.2 reading; effort-dependent
- FrontierMath v2: Tiers 1–3 **67.4%** / Tier 4 **26.8%** (Epoch, unchanged); MathArena Apex 65.6% → Apex Bench v1.1 **72.1%** (1017)
- AA-LCR: **84.0%** (unchanged, strong); CritPt 14.3%; MLCR-AA 22.8%
- Hermes Bench 70.7% / Hermes Index 36.9%; AA-AnalystAgent 35.0%/41.8%; LiveBench 2.0 Coding: **96.0%** (#3 — NEW, very strong)
- AA-Omniscience: Index −5.3, accuracy 46.4%, hallucination rate **96.5%** (severe — unchanged warning)
- MMLU-Pro (base) 74.1; AGIEval 83.4; C-Eval 92.1; SimpleQA-Verified 42.3; LongBench-V2 (base) 45.2

Coding:

- DeepSWE v1.1: **77.0%** (1017 — see above); Terminal-Bench 2.1 (coding harness): **90.6%** (see above)
- LiveBench 2.0 Coding: **96.0%** (#3 of field — NEW); Vibe Code Bench v1.1 (Vals): **87.7% ±?** (#12 — NEW, fills the old gap); Code Migration v1.1 (Vals): **67.5%** (#7) / 44.2% (v1.0)
- SciCode (AA): **55.9% max** (#44 — NEW, clears the 55% mark; pre-1017 AA-SciCode was 51.9%); ALE-Bench 1622 (#19); CursorBench ladder 44.9–47.7%
- Codeforces **3471** (highest listed); BigCodeBench (base) 60.6; HumanEval (base) 79.4; OpenHarmony 60.3%; NL2Repo 68.2%; CWE-bench 55.0%
- SWE-bench Verified / Pro / SWE-Atlas / SWE-Marathon: no verified public score found (benchgap's SWE-V 82.3% and SWE-Pro 62.7% are estimates — excluded)

Long context:

- 1M window; AA-LCR **84.0%** (strong, unchanged); LongBench-V2 base 45.2; no MRCR/RULER ≥98% verification

Multimodal / vision:

- Chartography (w/tools): **83.0%** (1017, +4.1); BabyVision w/Python: **92.5%** (+2.9); ZeroBench-main w/tools: **51.0%** (+2.0); AA-MMMU-Pro **77.0%** (unchanged)

### Normalized scores (1–100)

- **Tool use: 88/100.** CHANGED from 86 — the 1017 update resolves much of the old "collapse on newer boards" critique (TB4.0 31.2→42.3, Automation 54.8→60.5, ALE 31.8→35.4) while TB2.1 90.6/91.0, CyberGym 88.1% and GDPval 1600 hold; TB3.0 30.0% vs Opus 5's 43.3 remains the outlier loss.
- **Reasoning: 84/100.** CHANGED from 83 — HLE w/o tools 42.6% (+5.8) and the AA Index 45-at-max reading add measured strength to the existing GPQA 90.9% / HLE-tools 63.9% / FrontierMath 67.4% pillars; the 96.5% hallucination rate and AA-HLE 39.2% (no-tools) still cap it.
- **Context window: 94/100.** Unchanged — 1M window with 384K output and AA-LCR 84.0% strong; still no ≥98% MRCR/RULER verification at depth.
- **Multimodal: 76/100.** CHANGED from 75 — the 1017 vision gains (Chartography 83.0, BabyVision 92.5, ZeroBench 51.0) nudge the measured-vision band up; text-only output, no video/audio.
- **Coding: 89/100.** CHANGED from 86 — DeepSWE 77.0% now leads Opus 5 and Sol outright, LiveBench Coding 96.0% (#3), Vals Vibe 87.7% (#12), SWE-Atlas QA 71.0 and ProgramBench 29.1 lift the band; SWE-V/SWE-Pro/SWE-Atlas leaderboard rows still unpublished and TB3.0 30.0% lingers.
- **Cost efficiency: 92/100.** CHANGED from 91 — list unchanged but 30+ providers now compete (promos to $0.05/$0.50), off-peak halves the bill, $0.003 cache hits reward the target workload, and BenchLeader crowns it the cheapest top-100 model; the new Search/Fetch per-call fees are the one addition.
- **Overall Score: 86/100.** CHANGED from 85 — (88 + 84 + 94 + 76 + 89) / 5 = 431/5 = 86.2 → 86. Best fit: cache-heavy, input-heavy agentic coding at commodity prices got better under the same ID — the 1017 update is a genuine Pareto move; still deploy with effort tuning, verify on your own scaffold, and keep unsupervised knowledge work away from the 96.5% hallucination rate.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: DeepSeek API changelog + HF model card (1017 delta table with harness footnotes), BenchLeader 1017 profile + 30-provider price/speed table + LiveBench/Vals/Cognition rows, thetechsignal/ai-primer/explainx/Dealroom 1017 coverage + orcarouter legacy-ID routing note + dev.to V4-Pro comparison); the ID-swap (V4.1-Flash → 1017 under `deepseek-flash`) documented as the headline change; estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
