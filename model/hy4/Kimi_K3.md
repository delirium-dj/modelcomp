# Hy4 — findings by Kimi K3

- Source: Tencent / Hy4 (preview) (`tencent/hy4`; HF `tencent/Hy4-preview`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; official HF card verifies the full architecture table and all first-pass benchmark anchors, adds LHTB-2 long-horizon row and a blind expert side-by-side vs GLM 5.3 / Kimi K3)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview)
- **Short description:** Tencent's open-weights Hy4 flagship preview — 770B-total / 49B-active MoE with Gated DeepSeek Sparse Attention + IndexCache, 1M context, Apache 2.0. Card self-declares "open-source frontier" status and ship-early preview posture; strong agentic suite (GDPval-AA 1678, TB 2.1 85.4%).
- **Provider / access:** Apache 2.0 open weights (HF `tencent/Hy4-preview` + `-FP8` variant; ModelScope / GitCode / CNB mirrors — verified this pass); Novita listed as HF Inference Provider; no Zen Free ID (confirmed absent from 2026-10-13 Zen listing).
- **Release / knowledge:** August-2026-era preview (card; eval-results entries landing through Oct 2026); knowledge cutoff not verified in card.
- **IDs:** `tencent/Hy4-preview` (HF), served as `hy4-preview`.
- **Context window:** **1M tokens** (official card architecture table — verified; first pass also had 960K in / 64K out from catalog). Gated DSA with IndexCache cross-layer index reuse is the 1M-efficiency mechanism; native MTP layer (10B total / 0.7B active) for speculative decoding.
- **Modalities:** text in/out; reasoning yes — **effort defaults to `"high"`; pass `reasoning_effort: "no_think"` for direct responses** (official card quickstart — new); tool calls (hy_v4 tool-call parser); JSON mode via serving stack.
- **Pricing (as of 2026-10-13):** open weights (Apache 2.0) → self-host; Novita hosts FP8 inference (rate not verified).
- **Architecture (all new this pass, official card):** 78 layers (first dense FFN, then 77 MoE layers), hidden 6144, 256 routed experts + 1 shared, top-8 routed per token, MoE intermediate 2048 / FFN 18432, 64 attention heads, 4 residual streams (iHC), vocab 120,832, BF16 (FP8 variant exists); safetensors load reports 780B total. Known limitations per card: over-long reasoning and excessive self-verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Vals 55.1% — wide harness gap) (benchlm.ai ✓ re-listed in HF eval-results this pass)
- GDPval-AA: **1678 Elo** (benchlm.ai, first-pass snapshot)
- MCP Atlas: **83.7%**; Toolathlon-Verified: **74.1%** ✓ (HF eval-results); WideResearch: 83.9%; DRACO: 77.2%; BankerToolBench: 78.6% (benchlm.ai, first-pass snapshot)
- CyberGym: 78.4%; JobBench: 61.7%; skillsBench: 62.9%; APEX-Agents: **37.1** ✓ (HF eval-results); Agents' Last Exam: 22.8% (benchlm.ai, first-pass snapshot)
- **Long-Horizon Terminal-Bench 2: 15 solved** (HF eval-results, LHTB-2.0 results Oct 2026 — **new**; above GLM-5.3's 12)
- HLE w/ tools: 55.4% (benchlm.ai, first-pass snapshot)
- **Blind internal side-by-side (163 Tencent experts, 203 engineering tasks): Hy4 2.99 avg — ahead of GLM 5.3 (2.92) and Kimi K3 (2.94)** (official card — vendor-internal, treat as directional)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** ✓ (HF eval-results — matches first pass)
- HLE: 55.4% (w/ tools); 43.4% (no tools) (benchlm.ai, first-pass snapshot)
- CritPt: 16.9%; Apex (math): 74.2%; BenchLM overall: 59.61/100, #44 of 507 (benchlm.ai, first-pass snapshot)
- AA LCR / Omniscience rows: no verified public score found (unchanged)

Coding:

- SWE-bench Pro: **65.7%** ✓ (HF eval-results); SWE Multilingual: **82.9%** ✓ (HF eval-results) (first-pass rows confirmed)
- DeepSWE: **64.3** ✓ (HF eval-results); NL2Repo: 58.9%; sweMarathon: 31.9%; ProgramBench: 17.5%; PostTrain Bench: 35.6% (benchlm.ai, first-pass snapshot)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found (unchanged)

Long context:

- 1M window by official spec (verified); no MRCR/RULER/LCR retrieval score found (unchanged).

Multimodal:

- Text-only deployment; single OfficeQA Pro row: 66.2% (benchlm.ai, first-pass snapshot).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 85/100.** +1 — the first-pass elite rows (GDPval 1678, MCP Atlas 83.7%, WideResearch 83.9%, TB 2.1 85.4%) now show up in HF eval-results, and LHTB-2 15-solved adds verified long-horizon depth; capped by ALE 22.8% and the Vals TB divergence (85.4 vs 55.1).
- **Reasoning: 80/100.** Unchanged — GPQA 92.3% re-verified; HLE 55.4% w/ tools; capped by missing AA indices, CritPt 16.9%, and the card's own over-reasoning limitation.
- **Context window: 82/100.** +2 — 1M window now confirmed by the official architecture table with the sparse-attention mechanism documented (DSA + IndexCache); still zero retrieval measurements.
- **Multimodal: 15/100.** Unchanged — text-only; floor.
- **Coding: 78/100.** Unchanged — SWE-bench Pro 65.7%, SWE Multilingual 82.9%, DeepSWE 64.3% all re-verified via HF eval-results; capped by ProgramBench 17.5% and sweMarathon 31.9%.
- **Cost efficiency: 88/100.** Unchanged — Apache 2.0 open weights + FP8 variant for cheaper serving; Novita-hosted option exists.
- **Overall Score: 68/100.** Half-up mean of the five quality dims (85+80+82+15+78)/5 = 68.0 → 68 (was 67). Best fit: self-hosted long-horizon text agents and Tencent-ecosystem engineering (CodeBuddy/WorkBuddy co-design); preview status means expect churn before GA.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (official HF card `tencent/Hy4-preview` — full architecture table, Apache 2.0, reasoning-effort defaults, known-limitations section, blind expert SxS vs GLM 5.3 / Kimi K3; HF eval-results — GPQA 92.3, SWE-bench Pro 65.7, TB 2.1 85.4, APEX 37.1, DeepSWE 64.3, SWE-Multilingual 82.9, Toolathlon 74.1, LHTB-2 15; Zen listing 2026-10-13 — absent). Vendor-internal SxS treated as directional only. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
