# Big Pickle — findings by Laguna S 2.1

> Source: opencode/big-pickle (Z.AI), e.g. Artificial Analysis, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Big Pickle (GLM-4.6). Z.AI's 357B/32B MoE open-weights non-reasoning model; the "big-pickle" alias is the free OpenCode Zen / community-stealth distribution of GLM-4.6.
- Short description: Open-weights (MIT) 357B-MoE coding/agentic model in the Z.AI GLM lineage; available free via OpenCode Zen. Non-reasoning (direct-response) variant scored here (AA model page default).
- Provider / access: Z.AI. OpenCode Zen `opencode/big-pickle` (free promotional tier); paid Ant-style API equivalent ~$0.60/$2.20. Also Hugging Face open weights (MIT, commercial use allowed).
- Released: September 2025 (Artificial Analysis "Released September 2025"; GLM-4 epoch).
- Architecture: **357B total parameters / 32B active** Mixture-of-Experts, dense decoder, non-reasoning (AA: "Not a reasoning model — direct responses without extended chain-of-thought"). License: **MIT** (open weights; weights downloadable). Repo `meta.json` confirms "GLM 4.6, free stealth reasoning model… paid equiv. GLM-4.6 ~$0.60/$2.20."
- Context window: **200,000 tokens** (Artificial Analysis "200k"; repo `meta.json` "200K total (160K in / 32K out)"). Max output 65,536 (AA), so the ≥1M caveat does not apply and 200K is above the 200K floor.
- Modalities: **text input → text output only** (Artificial Analysis: "supports text input only … not multimodal"). Repo `meta.json` "Text in/out only." (+text-in only)
- Knowledge cutoff: not posted.
- Reasoning: **No** — AA explicitly "Non-reasoning" / "not a reasoning model"; the page shows the non-reasoning variant (a reasoning variant exists per AA note "a reasoning variant may also exist").
- Pricing (as of 2026-09-23): **Free Zen / OpenCode Zen limited-time free tier** (repo `meta.json` "Free Zen tier") → Cost efficiency scored on the $0 axis. Paid API equivalent $0.57/$2.20 per 1M (median across providers); cache discount 38%.
- Speed: 34.5 output tok/s (slow; #18/44 among open-weights non-reasoning).

### Raw benchmarks found

> Verified public numbers (Artificial Analysis GLM-4.6 (Non-reasoning) model page, 2026-09). Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **15** (#16/44 open-weights non-reasoning; median 12; "above average among comparable models") (Artificial Analysis).
- Context window: 200k (verified).
- Cost per Intelligence Index task: NOT FOUND (AA lists "Unknown").
- Output speed: 34.5 tok/s (verified, #18/44 non-reasoning open-weights).
- Pricing: $0.57 / $2.20 per 1M (paid route, median) + 38% cache; free Zen tier ($0).
- TTFT / output-speed / cost-per-IntIndex-task: TTFT 5.03s; cost/task NOT FOUND.
- Component benchmarks (Terminal-Bench 2.1/Hard/4.0, SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, Tau3-Banking, Tau3-general, GDPval-AA, GPQA, HLE, AA-Omniscience, AA-LCR, CritPt, SciCode, MRCR, MMMU-Pro, LCR, Toolathon, MCP-Atlas): **NOT FOUND** for this model (GLM-4.6 page exposes only the Intelligence Index 15 composite).
-### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on current AA Intelligence Index v4.3.2 = 15 (#16/44 open-weights non-reasoning), same-scale-consistent with my other Sept-2026 findings (Nemotron-3-Ultra-Free Index 23→54; GLM-4.6 is a lower, non-reasoning, September-2025 tier). The verified-free Zen tier sets Cost = 100 (the dominant repo anchor, matching Muse Spark 1.3 Free's cost convention).

- **Tool use: 52/100.** Intelligence Index 15 (AA composite includes Terminal-Bench + GDPval-AA + coding); "above average among comparable open-weights non-reasoning" but Index 15 sits below Frontier open-weights (40+); no standalone Terminal-Bench/GDPval/SWE-bench % located.
- **Reasoning: 42/100.** Intelligence Index 15 + **Non-reasoning** explicitly (AA: "not a reasoning model") — a structural cap separate from quality; no GPQA/HLE/CritPt found.
- **Context window: 86/100.** 200,000 native tokens (above the 200K floor); 65,536 max output clears the <64K caveat. Not ≥1M, so off the 95+ tier.
- **Multimodal: 15/100.** Text input only (AA authoritative). Repo `meta.json` also "Text in/out only."
- **Coding: 52/100.** Intelligence Index 15 (composite includes coding) + no standalone SWE-bench/DeepSWE/LiveCodeBench % → floor at the Index-reflected band; "strong coding agentic" claims are at-launch/legacy, not verified here.
- **Cost efficiency: 100/100.** Free OpenCode Zen / Zen limited-time free tier (repo `meta.json`); paid equiv $0.57/$2.20 not the scored route → $0 → 100.
- **Overall Score: 49/100.** (52 + 42 + 86 + 15 + 52) / 5 = 247 / 5 = 49.4 → 49.

> ⚠️ **Reconciliation note:** The repo AI-Rankings average for this model is **59.6** (audit/model-comparison.md v4, 2026-09-17). My figure is **49** — anchored strictly on the **current AA Intelligence Index v4.3.2 = 15** with the **non-reasoning cap** explicit in the AA source. The repo's 59.6 reflects at-launch/legacy weighting that was more generous to GLM-4.6's coding/agents claims (this file's `meta.json` short reads "GLM 4.6 free stealth reasoning model… Sonnet-class coding"). The large, structural downward deltas vs repo 59.6 are: (a) Non-reasoning (AA explicit) → Reasoning 42; and (b) AA Intelligence Index 15 (below the 23 my Nemotron-3-Ultra-Free scores to 54). Both repo 59.6 and my 49 preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis GLM-4.6 (Non-reasoning) model page; repo `meta.json`). Re-normalized via model-comparison.md v4, anchored on current AA Intelligence Index v4.3.2 = 15 (same-scale-consistent with my other Sept-2026 findings). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
