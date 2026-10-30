# MiniMax M2.5 — findings by Qwen 3.8 Max

- Source: MiniMax (`minimax-m2.5`; id `opencode/minimax-m2.5`; AA `minimax-m2-5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** MiniMax's open-weight agentic-coding workhorse — a 230B-total / 10B-active Modified-MIT MoE that reached **top-3 on the official SWE-bench Verified leaderboard** (~80.2% vendor-claimed, 74.2% independently on Vals AI) at roughly 5–20% of Claude's price across 6 API providers. It is now **DEPRECATED** in favor of MiniMax-M2.7, is notably slow (38.4 tok/s, #72/78), has AA Intelligence Index v5.0 = N/A, carries a ~6-point vendor-vs-independent SWE-bench gap, and has no M2.5-specific reasoning/terminal benchmarks (M2.7's agentic numbers are NOT reattributed). Scored Overall 70 (div +3.2 vs curated 66.8).

## Model card

- **Name:** MiniMax M2.5 (MiniMax-M2.5)
- **Short description:** MiniMax's open-weight agentic-coding MoE, one generation behind M2.7, trained with reinforcement learning across hundreds of thousands of real-world environments and aimed at coding agents and tool use at a low price.
- **Provider / access:** Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`) under a Modified MIT license; served via MiniMax's API and **6 API providers** (AA), also cataloged through OpenCode/OpenRouter (id `opencode/minimax-m2.5`). A faster/pricier **M2.5-Lightning** tier exists. Self-hostable.
- **Release / knowledge:** Released **February 12, 2026**. **DEPRECATED** — MiniMax launched M2.7 as the successor ("we suggest considering it instead"); AA now benchmarks only the default 10k-input-token workload and treats other results as historical.
- **IDs:** id `opencode/minimax-m2.5`; AA model-page slug `minimax-m2-5`; HF `MiniMaxAI/MiniMax-M2.5`.
- **Context window:** **~200K** (196,608 native; AA spec 205k / FAQ 200k). NOTE: one third-party catalog record claimed 128K — that is wrong; AA and MiniMax both confirm the ~192–205K class.
- **Modalities:** Text in → Text out. Not multimodal — AA confirms no image input.
- **Pricing:** $0.30 / 1M input, $1.20 / 1M output (MiniMax API, AA), blended 7:2:1 = **$0.20 / 1M**, 90% cache discount. Tier spread is wide: M2.5 $0.15/$0.60 up to M2.5-Lightning $0.30/$2.40 (≈4×); one provider listed $0.27/$0.95. Open weights are free to self-host; via OpenCode it runs at ~5–20% of Claude's price. Cost-per-Index-task and Verbosity = N/A (Index not scored).
- **Architecture:** Sparse MoE, **230B total / 10B active** (the M2-series base is 229.9B / 9.8B). Reasoning model (extended thinking / chain-of-thought). License: **Modified MIT** — HF metadata declares `license_name: modified-mit`; AA shows plain "MIT" (simplified). The M2-series Modified-MIT carries commercial conditions (M2.7's was later revised to non-commercial); M2.5's exact terms are in its GitHub LICENSE.

### Raw benchmarks found

> **Provenance:** Mixed — MiniMax-vendor (SWE-bench Verified 80.2% headline, harness results, LiveCodeBench 79.2), independent (Vals AI SWE-bench Verified 74.2%; the official SWE-bench leaderboard ranking), and AA-measured (Speed, Cost, context, params, provider count, deprecation). AA Intelligence Index v5.0 is NOT scored.

- **Agent / tool use:**
  - SWE-bench Verified ≈ **80.2%** (vendor headline); the **official SWE-bench leaderboard ranks M2.5 #3 ("high")**, behind Claude 4.5 Opus and Gemini 3 Flash.
  - Independent **Vals AI = 74.2%** — about 6 points below the vendor claim (harness/independent-vs-vendor gap).
  - Harness detail: on Droid, **79.7% (M2.5) > 78.9% (Opus 4.6)**; completes SWE-bench Verified **37% faster than M2.1**, matching Opus 4.6's speed.
  - Design: "extensively trained with reinforcement learning in hundreds of thousands of complex real-world environments"; MiniMax positions it as SOTA in coding/agentic work.
  - AA Intelligence Index v5.0 = **N/A** → no AA-Briefcase / AutomationBench-AA / Terminal-Bench 4.0 / GDPval-AA scores.
  - GUARD: Terminal-Bench 2.0 57.0, SWE-bench Pro 56.2, SWE-bench Multilingual 76.5, and Multi-SWE-bench 52.7 that surface in coverage are **M2.7's** numbers, NOT M2.5's — not reattributed.
- **Reasoning / knowledge:** Reasoning model (extended thinking). No M2.5-specific GPQA Diamond / AIME / MMLU figure is verified here — the math/science numbers that surface belong to M2.7 or the general M2 series. AA Index N/A; general intelligence is described as competitive for the series but not independently quantified for M2.5.
- **Coding:**
  - SWE-bench Verified ≈ **80.2%** claimed / **74.2%** independent (Vals AI) — strong repo-agentic coding, top-3 on the official leaderboard.
  - LiveCodeBench = **79.2%** (vendor) — mid competition-style coding.
- **Long context:** ~200K window; no M2.5-specific long-context retrieval/reasoning benchmark verified.
- **Speed / cost (AA-measured):** Output speed **38.4 tok/s** — rank **#72/78**, 1 of 4 units, "notably slow" (open-weight median 74.0 t/s). TTFT **1.71s**. Cost $0.30/$1.20, blended $0.20, 90% cache — cheap; open weights free to self-host.

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: MiniMax open-weight 230B/10B-active MoE (AA 230B/10B; series base 229.9B/9.8B), reasoning, text-only, agentic-coding focus, released Feb 12 2026, strong SWE-bench Verified (top-3 official), LiveCodeBench 79.2, ~200K context, cheap pricing, 6 providers, Modified MIT. CORRECTED / FLAGGED: (1) SWE-bench Verified — vendor 80.2% vs independent Vals AI 74.2% (~6-pt inflation); official leaderboard #3 corroborates the strength. (2) License — HF metadata + SemiAnalysis confirm **Modified MIT** (commercial conditions); AA's plain "MIT" is simplified. (3) Context — a 128K catalog record is wrong; AA (205k/200k) + vendor confirm ~200K (196,608). (4) DEPRECATED — M2.7 is the successor; AA benchmarks only the 10k workload. (5) Speed is a genuine weakness — 38.4 tok/s, #72/78 (1/4, "notably slow"). (6) Reattribution guard: M2.7's agentic numbers (TB 2.0 57.0, SWE-Pro 56.2, SWE-Multilingual 76.5, Multi-SWE 52.7) NOT credited to M2.5. (7) ~4× pricing spread across tiers ($0.15/$0.60 → $0.30/$2.40 Lightning). Kept DISTINCT from minimax-m2.7 (L161), minimax-m3, minimax-m3.1-flash-preview, and the M2.5-Lightning tier — no double-count.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong agentic-coding evidence — top-3 on the official SWE-bench Verified leaderboard, 74.2% independent (Vals AI), 37% faster than M2.1 — plus an explicit RL-in-real-world-environments design; capped by the absence of M2.5-specific Terminal-Bench / tool-calling numbers and the ~6-pt vendor inflation on the headline.
- **Reasoning: 72/100.** A reasoning model (extended thinking) with strong coding, but no M2.5-specific GPQA / AIME / knowledge benchmark is verified and AA Intelligence Index v5.0 is N/A — competence is inferred from coding, not directly measured.
- **Context window: 76/100.** ~200K (196,608 native; AA 205k spec / 200k FAQ) — a solid 200K-class window; the stray 128K catalog record is wrong.
- **Multimodal: 50/100.** Text-only — AA confirms no image input.
- **Coding: 77/100.** SWE-bench Verified is genuinely strong (top-3 official; 74.2% independent) and LiveCodeBench 79.2% is mid; the repo-agentic strength is real but the 80.2% headline is vendor-inflated.
- **Cost efficiency: 85/100.** Open Modified-MIT weights (free self-host) plus $0.30/$1.20 blended $0.20 (90% cache) across 6 providers (~5–20% of Claude's price); tempered by deprecation and the ~4× tier spread. (Scored but NOT counted toward Overall.)
- **Overall Score: 70/100.** Half-up mean of the five quality dims (75+72+76+50+77)/5 = 70.0. Divergence **+3.2** vs the curated queue value 66.8 — the top-3 SWE-bench coding strength and cheap 6-provider economics outweigh the deprecation, slow speed, Index-N/A, and vendor-inflation drags. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — AA `minimax-m2-5` model page (deprecation banner, summary, spec table, Speed/Cost ranks, FAQ), MiniMax's M2.5 launch news, the official SWE-bench leaderboard, SemiAnalysis InferenceX (M2.5/M2.7 architecture + license), the MiniMax-M2 series arXiv paper, and provider/pricing listings; ≥4 independent searches. meta.json verified against primary sources, not inherited; the 80.2-vs-74.2 SWE-bench gap, Modified-MIT-vs-MIT license, 128K-vs-200K context, and M2.5-vs-M2.7 benchmark ownership were reconciled. No peer findings files read (zero-influence rule).
- **Future sources:** AA Intelligence Index v5.0 inclusion; M2.5-specific Terminal-Bench / GPQA / AIME / SWE-bench Multilingual numbers (distinct from M2.7); a canonical independent LiveCodeBench reproduction; clarification of M2.5's exact Modified-MIT commercial terms vs M2.7's revised license.
