# Big Pickle (GLM 4.6 stealth) — findings by Kimi K3

- Source: OpenCode Zen stealth `opencode/big-pickle` — community consensus: Z.AI GLM-4.6 weights (`zai-org/GLM-4.6`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; GLM-4.6 release date, params, license, and paid pricing now verified from official HF card + OpenRouter; new independent benchmarks fill the terminal-bench and SWE-bench gaps)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (stealth; consensus identity: GLM-4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen. Community consensus identifies it as Z.AI's open-weight GLM-4.6 — roughly Sonnet-4-class coding at zero token cost during the promo. All scores below are measured GLM-4.6 numbers, provisional for the stealth deployment.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (free promo) — **verified still listed live as `big-pickle` on Zen `/zen/v1/models` as of 2026-10-13**; underlying GLM-4.6 also via Z.AI API / open weights / OpenRouter `z-ai/glm-4.6`.
- **Release / knowledge:** stealth promo 2026; underlying GLM-4.6 **released 2025-09-30** (OpenRouter listing, verified this pass); knowledge cutoff **Mar 2025** (OpenRouter).
- **IDs:** `opencode/big-pickle` (Free Zen ID); base `zai-org/GLM-4.6` (HF) / `z-ai/glm-4.6` (OpenRouter).
- **Context window:** 200K total (160K in / 32K out) per Zen listing; GLM-4.6 native 200K (expanded from 4.5's 128K — official HF card; OpenRouter lists 205K) — consistent.
- **Modalities:** text in/out; reasoning yes; tool calls (incl. tool use during inference — HF card); JSON mode. **Weight license: MIT** (HF card, verified this pass).
- **Pricing (as of 2026-10-13):** Free Zen tier (promo ongoing, verified today); paid GLM-4.6 equivalent **$0.43/$1.75 per 1M** on OpenRouter (verified this pass — corrects first-pass catalog estimate of ~$0.60/$2.20, which was ~40% high).
- **Architecture:** open-weight **GLM-4.6 (Z.AI); 357B params, MoE, BF16/F32** (official HF card — param count verified this pass; first pass said undisclosed).

### Raw benchmarks found (measured on GLM-4.6 = consensus identity; provisional for big-pickle)

Agent / tool use:

- τ²-bench (Tau2-Bench): **76.9%** (benchlm.ai, first-pass snapshot)
- Terminal-Bench 2.0: **24.5%** (tbench.ai leaderboard, via HF eval-results — **new this pass**; fills first pass's missing terminal/agent coverage, and it is weak)
- Mercor Apex Agents: **4** (Mercor Apex Agents leaderboard, via HF eval-results — **new this pass**)
- GDPval / MCP rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (AA); 74.5% (Vals) — wide harness split (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): **5.5%** (benchlm.ai, first-pass snapshot)
- AA-LCR: **26.3%**; CritPt: **0.0%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **14.9**; BenchLM overall **39.8/100, #115 of 507** (benchlm.ai, first-pass snapshot)
- AA-Omniscience Index: **−31.7** — accuracy 21.4% / hallucination 67.6% (benchlm.ai, first-pass snapshot)
- MMLU-Pro (Vals): **82.2%**; FrontierMath v2: **3.8%** T1–3 / **2.1%** T4; AA-IFBench: **36.7%** (benchlm.ai, first-pass snapshot)
- Vendor claims (HF card, unaudited): clear gains over GLM-4.5 across 8 public benchmarks; competitive with DeepSeek-V3.1-Terminus and Claude Sonnet 4 — treated as positioning, not measured evidence.

Coding:

- LiveCodeBench (Vals): **81.0%** (benchlm.ai, first-pass snapshot)
- SWE-bench Pro: **9.67** (ScaleAI SWE-bench Pro public leaderboard, via HF eval-results — **new this pass**; low on this hard leaderboard)
- Vibe Code Bench: **3.1%** (benchlm.ai, first-pass snapshot)
- SWE-bench Verified / SciCode: no verified public score found

Long context:

- AA-LCR 26.3% within 200K (benchlm.ai, first-pass snapshot) — weak retrieval even at 200K.

Multimodal:

- Text-only (Zen listing; HF card is text-generation only) — floor.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 60/100.** −2 — τ²-bench 76.9% remains the strong row, but the newly verified Terminal-Bench 2.0 24.5% and Mercor Apex Agents 4 are both weak; the first pass's cap for "total absence of terminal/agent coverage" was justified, and the new rows confirm ceiling rather than raise it.
- **Reasoning: 55/100.** Unchanged — Vals GPQA 74.5% decent; capped by HLE 5.5%, CritPt 0%, FrontierMath ~4%, hallucination 67.6%. No new reasoning rows this pass.
- **Context window: 60/100.** Unchanged — 200K window re-verified (HF card: expanded from 128K) but LCR 26.3% means poor usable depth.
- **Multimodal: 15/100.** Unchanged — text-only — floor.
- **Coding: 66/100.** −2 — LiveCodeBench 81.0% is genuinely good (stealth coding reputation checks out), but the newly verified SWE-bench Pro 9.67 row is low and Vibe Code 3.1% still caps hard.
- **Cost efficiency: 98/100.** Unchanged — $0 during Zen promo (promo verified still live 2026-10-13); paid-equivalent now verified even cheaper than first pass thought ($0.43/$1.75).
- **Overall Score: 51/100.** Mean of the five quality dims (60+55+60+15+66)/5 = 51.2 → 51 (was 52; small downward drift on newly verified weak tool/SWE rows). Best fit: free everyday coding/chat on Zen while the promo lasts; identity remains unofficial but now rests on a fully verified base-model card.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (OpenCode Zen `/zen/v1/models` listing verified 2026-10-13 — `big-pickle` still live; official HF model card `zai-org/GLM-4.6` — 357B params, MIT license, 200K context, vendor benchmark claims; HF eval-results panel citing tbench.ai Terminal-Bench 2.0 24.5%, ScaleAI SWE-bench Pro 9.67, Mercor Apex Agents 4; OpenRouter `z-ai/glm-4.6` — $0.43/$1.75, released 2025-09-30, cutoff Mar 2025). First-pass benchlm.ai rows retained and flagged as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
