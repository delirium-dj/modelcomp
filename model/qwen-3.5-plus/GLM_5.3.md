# Qwen 3.5 Plus — findings by GLM 5.3

- Source: Alibaba (`opencode/qwen-3.5-plus`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-02 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus (Qwen3.5-Plus)
- **Short description:** Alibaba's "Plus" commercial API tier of the Qwen3.5 native vision-language series (released 2026-02-15; an updated 2026-04-20 snapshot ships with tiered pricing above 256K). Second pass resolves the first pass's biggest uncertainty: **Qwen3.5-Plus is the open-sourced Qwen3.5-397B-A17B** ("also named Qwen3.5-Plus" — Alibaba Group press release), so the sibling-proxy caveat dissolves — the benchmark rows are the same model. Position: between the Qwen3 and 3.6 generations, now two Plus generations behind.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-plus`; OpenRouter `qwen/qwen3.5-plus-02-15` ($0.26/$1.56) and `qwen/qwen3.5-plus-20260420` (April snapshot); Alibaba Cloud Model Studio (functionally equivalent to snapshot `qwen3.5-plus-2026-02-15`).
- **Release / knowledge:** 2026-02-15 (updated snapshot 2026-04-20); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-plus`; OpenRouter `qwen/qwen3.5-plus-*`; Alibaba `qwen3.5-plus`.
- **Context window:** 1M tokens (confirmed by BenchLeader, OpenRouter, gate.ai); **max output 65,536 tokens**; tiered pricing above 256K on the April snapshot.
- **Modalities:** **text + image + video input, text output** (gate.ai/OpenRouter capability docs — stronger than the first pass's "image in, unverified"); reasoning with **toggleable thinking** (unlike Qwen3.6 Plus's forced CoT); tool calls / JSON mode per Alibaba docs.
- **Pricing (as of 2026-10-12):** OpenRouter 02-15 snapshot **$0.26 in / $1.56 out** per 1M; Alibaba Cloud Int. $0.30/$1.80 (BenchLeader blended $0.90/M); Vercel cached read $0.04. Slow: 50 tok/s (slowest quarter).
- **Architecture:** hybrid **linear attention + sparse MoE** (QwenCloud — the same architecture Qwen3.6 Plus later reused); 397B-A17B per the open-weights sibling identification.

### Raw benchmarks found

> Second pass adds the BenchLeader profile (best = thinking **57.4 #168/760**, trend 56→57→59 stable, last measured 2026-09-29). Category scores: **Coding 62 (best)**, Maths 61, Knowledge 61 (and an inverted Knowledge 37 at the not-stated config).

Agent / tool use:

- **Terminal-Bench 2.0 (Vals): 41.6% #29** — gap filled; mid-weak
- **Vending-Bench 2: 0.5 #62** — gap filled; dreadful office-work result
- JobBench 18.5% (retained); Terminal-Bench 2.1 / τ³ / GDPval / Claw-Eval / MCP-Atlas: still no verified public score — the agentic dossier remains the thinnest of this batch

Reasoning / knowledge:

- GPQA Diamond: Epoch **84.8% #89** (not stated) / Vals **87.4% #37** (thinking) — below the 90% bar on direct reads (the first pass's 88.4% came via the sibling ID, now known to be the same model; the harness spread is real)
- FrontierMath v2: T1-3 21.034% / **T4 2.083%** (terrible tier-4); OTIS 86.7% #81; **AIME (Vals): 86.0% #33** (decent)
- CL-bench 19.8% #9 / CL-bench Life 12.4% #11 (good ranks); Chess 22.0% #75; Mystery Game 16-17% #72-80; LMCA 36.4% #103; DTBench 80.5% #109
- Knowledge: **MedQA 95.2% #13** (elite); MMLU-Pro 87.2% #34; LegalBench 85.1% #24; CorpFin 65.3% #29; CaseLaw 59.7% #25; SimpleQA 25.4% #66 (weak short facts); HLE / CritPt / LCR / AA Index: still no verified rows for this ID

Coding:

- **LiveCodeBench (Vals): 85.3% #32** — gap filled, good; **SWE-bench (Vals): 71.2% #57** (vs the 76.4% #38-of-81 first-pass read — harness/normalization spread, both retained)
- **Vibe Code v1.1: 15.7% #76** (confirms the first pass's 15.74% — weak); ALE-Bench 621.9 #88 (weak)
- Coding is nonetheless its best BenchLeader category (62)

Long context:

- 1M window confirmed; **no retrieval-quality score published at any length** (unchanged gap); 65,536 output cap; tiered pricing above 256K on the April snapshot.

Multimodal:

- **MMMU-Pro (Vals): 22.8% #90 — near-floor, a direct contradiction of the vision-language positioning** (image+video input is confirmed at the API level, yet measured vision quality collapses); SAGE 30.4% #77 (weak grounding); MortgageTax 60.8% #63; the open-weights card's multimodal claims (native vision-language, strong multimodal understanding) are not reproduced by the one independent vision battery.
- Vendor positioning: "native vision-language series" (QwenCloud/LLMReference/qwen.ai blog); Qwen3.5-Omni tech report (arXiv 2604.15804) benchmarks against Qwen3.5-Plus-NoThinking and shows Omni variants beating it on video understanding.

### Normalized scores (1–100)

- **Tool use: 48/100.** Raised from 45: TB 2.0 41.6% #29 is a real mid-weak data point rather than nothing — but Vending 0.5 #62 is dreadful and the τ/GDPval/Claw rows still don't exist. The thinnest agentic dossier in this batch.
- **Reasoning: 72/100.** Lowered from 80: direct GPQA reads (84.8-87.4%) sit below the bar, FrontierMath T4 2.083% is a hard cap, and no HLE/CritPt/Index rows exist — offset by decent AIME 86.0% #33, OTIS 86.7% #81, and good CL-bench ranks.
- **Context window: 92/100.** Lowered from 95: the 1M window is confirmed, but there is still zero measured retrieval data, the 65,536 output cap is modest, and 256K+ pricing tiers apply.
- **Multimodal: 50/100.** Lowered from 65: image+video input is now confirmed at the API level — but the single independent vision battery reads near-floor (MMMU-Pro 22.8% #90, SAGE 30.4% #77). Capability confirmed, quality unproven-to-poor; scored on the measured signal.
- **Coding: 72/100.** Raised from 70: LCB 85.3% #32 fills the biggest gap; SWE-bench 71.2% #57 and Coding-as-best-category back the mid-high band; Vibe 15.7% #76 and ALE #88 remain the caps.
- **Cost efficiency: 92/100.** Held: $0.26/$1.56 (02-15 snapshot) is among the cheapest 1M-context tiers tracked; the catches are the slowest-quarter speed (50 tok/s) and tiered 256K+ pricing.
- **Overall Score: 67/100.** (48 + 72 + 92 + 50 + 72) / 5 = 66.8 → 67, down from 71. Best-fit: a very cheap 1M-context text coder/reasoner — LCB 85.3% and decent math knowledge per dollar; but its measured vision (22.8% MMMU-Pro) contradicts the vision-language marketing, and the agentic evidence is nearly nonexistent. Prefer Qwen3.6/3.7 Plus for anything agentic or visual.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-02 report (BenchLeader profile as of 2026-09-29; Vals AI rows incl. the near-floor MMMU-Pro; Epoch AI Benchmarking Hub; OpenRouter provider/snapshot listings at $0.26/$1.56; DDG-lite searches surfacing the Alibaba Group press release identifying Qwen3.5-Plus with the open-sourced 397B-A17B, the Alibaba Cloud Model Studio docs, gate.ai capability confirmation (text+image+video in, toggleable thinking, 1M window, 65,536 output cap), QwenCloud architecture notes, and the Qwen3.5-Omni technical report arXiv 2604.15804); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
