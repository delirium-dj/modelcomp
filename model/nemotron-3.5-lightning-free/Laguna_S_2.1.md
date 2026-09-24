# Nemotron 3.5 Lightning — findings by Laguna S 2.1

> Source: opencode/nemotron-3.5-lightning-free (NVIDIA), e.g. Artificial Analysis, NVIDIA Research, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Nemotron 3.5 Lightning (NVIDIA). Compact 31.6B-MoE (3.6B active) high-throughput agent-runner; the "Lightning" efficiency sibling of the Nemotron 3.5 family.
- Short description: NVIDIA's August-2026 open-weights reasoning MoE built for production-scale low-latency execution — very fast (267 tok/s) at 1M context with a free self-host / Zen route.
- Provider / access: NVIDIA. OpenCode Zen `opencode/nemotron-3.5-lightning-free` (free tier) + 6 paid API provider routes. Model profile `nvidia/nemotron-3.5-lightning` (open weights).
- Released: August 2026 (Artificial Analysis "Released August 2026").
- Architecture: Mixture-of-Experts — **31.6B total parameters / 3.6B active** (Artificial Analysis; repo `meta.json` "30B MoE (3B active)"). License: **OpenMDW-1.1** (commercial use allowed; open weights). Reasoning yes (extended-thinking).
- Context window: **1,000,000 tokens** (Artificial Analysis "1M"; ≥1M tier; clears 64K caveat) — full-window native context.
- Modalities: **text input → text output only** (Artificial Analysis: "supports text input only … not multimodal"). Repo `meta.json` "Text-only."
- Knowledge cutoff: not posted.
- Reasoning: Yes — AA shows the reasoning variant ("uses extended thinking or chain-of-thought"); a non-reasoning variant also exists.
- Pricing (as of 2026-09-23): **Free OpenCode Zen / NVIDIA trial** (repo `meta.json` "Free OpenCode Zen and NVIDIA trial access for high-volume, low-latency execution") → Cost scored on the $0 axis. Paid API route $0.07 / $0.22 per 1M in/out (median across 6 providers); 29% cache discount; blended ~ $0.07/MTok.
- Speed: **266.7 output tokens/second** (#2/142 open-weights — very fast via MoE inference) (Artificial Analysis).

### Raw benchmarks found

> Verified public numbers (Artificial Analysis Nemotron 3.5 Lightning model page, 2026-09; NVIDIA). Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **13** (#31/142 open-weights; median 8; "well above average among comparable models") (Artificial Analysis).
- Context window: 1,000,000 (verified; full-window native).
- Cost per Intelligence Index task: **$0.10** (Artificial Analysis — very cheap) (#12/142 cost).
- Output speed: 266.7 tok/s (verified, #2/142 open-weights).
- Pricing: $0.07 / $0.22 per 1M (paid route); free Zen tier ($0).
- Component benchmarks (Terminal-Bench 2.1/Hard/4.0, SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, Tau3-Banking, Tau3-general, GDPval-AA, GPQA, HLE, AA-Omniscience, AA-LCR, CritPt, SciCode, MRCR, MMMU-Pro, LCR, Toolathon, MCP-Atlas): **NOT FOUND** for this model (Nemotron 3.5 Lightning page exposes only the Intelligence Index 13 aggregate + cost/speed).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on current AA Intelligence Index v4.3.2 = 13 (#31/142 open-weights; median 8), same-scale-consistent with my other Sept-2026 findings (Nemotron-3-Ultra-Free Index 23→54 here; Lightning's Index 13 is the smaller/faster sibling tier). Free Zen tier sets Cost = 100.

- **Tool use: 45/100.** Intelligence Index 13 (AA composite includes Terminal-Bench + GDPval-AA + coding) — "well above average among comparable open-weights" but the 3.6B-active efficiency tier sits well below frontier open-weights (40+); no standalone Terminal-Bench/GDPval/SWE-bench % located.
- **Reasoning: 42/100.** Intelligence Index 13 + reasoning variant (AA) + lightning-fast 267 tok/s; capped by no GPQA/HLE/CritPt and the efficiency-tier Index below frontier.
- **Context window: 95/100.** Full 1,000,000-token native context (≥1M tier; clears 64K caveat). No measured MRCR/RULER retrieval %.
- **Multimodal: 15/100.** Text input only (AA authoritative). Repo `meta.json` "Text-only."
- **Coding: 44/100.** Intelligence Index 13 (composite includes coding) + "production-scale low-latency execution for agents"; capped by no standalone SWE-bench/DeepSWE/LiveCodeBench figure and the efficiency-tier Index.
- **Cost efficiency: 100/100.** Free OpenCode Zen / NVIDIA trial (repo `meta.json`); paid equiv $0.07/$0.22 + $0.10/IntIndex task not the scored route → $0 → 100.
- **Overall Score: 48/100.** (45 + 42 + 95 + 15 + 44) / 5 = 241 / 5 = 48.2 → 48.

> ⚠️ **Reconciliation note:** The repo AI-Rankings average for this model is **57.2** (audit/model-comparison.md v4, 2026-09-17). My figure is **48** — anchored strictly on the **current AA Intelligence Index v4.3.2 = 13** (a smaller efficiency tier than its sibling Nemotron-3-Ultra-Free's Index 23→54). The ~9-point delta reflects: (a) this file's same-scale discipline scores the Lightning tier lower than its Ultra sibling; (b) the **free Zen tier** is the repo's dominant anchor (Cost 100) while the low Index 13 and text-only MM 15 pull the quality dims down sharply. Both repo 57.2 and my 48 preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Nemotron 3.5 Lightning model page; NVIDIA; repo `meta.json`). Re-normalized via model-comparison.md v4, anchored on current AA Intelligence Index v4.3.2 = 13 (same-scale-consistent with my other Sept-2026 findings, esp. Nemotron-3-Ultra-Free Index 23→54). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.