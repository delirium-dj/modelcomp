# Kimi K3 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open frontier flagship; no Free-tier wording)
- **Short description:** Moonshot AI's 2.8T-parameter open sparse-MoE flagship with native vision and a 1M-token window — the first open 3T-class model, aimed at long-horizon coding, knowledge work and reasoning. Frontier-competitive on coding/agentic tasks while Moonshot itself says it still trails Claude Fable 5 and GPT-5.6 Sol overall.
- **Provider / access:** Moonshot first-party Kimi API (`kimi-k3`), Kimi.ai / Kimi Work / Kimi Code (ID `k3`); also on OpenRouter and Cloudflare Workers AI. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Hosted launch July 16, 2026; open weights published July 27, 2026 with technical report. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `kimi-k3` (API), `k3` (Kimi Code). Weights on Hugging Face.
- **Context window:** 1,048,576 tokens (1M); max output 131,072 default, configurable up to 1,048,576 — verified from Moonshot launch specs and Cloudflare/OpenRouter cards.
- **Modalities:** Text + native vision in; text out. Reasoning: always on (max default at launch; low/high/max later). Function calling/tools supported; web-search tool not recommended for production at launch.
- **Pricing (as of 2026-09-19):** $3.00 in (cache miss) / $15.00 out per 1M; cached input $0.30 (90% discount); >90% cache-hit rates reported in coding workloads. AA cost per task $0.94 (Intelligence Index) — similar to GPT-5.6 Sol ($1.04), ~½ of Opus 4.8 ($1.80).
- **Architecture:** Open weights (custom Kimi K3 License; some aggregators list Apache 2.0). 2.8T total / ~104B activated, 93-layer sparse MoE (16 of 896 routed experts + 2 shared, Stable LatentMoE), Kimi Delta Attention + Attention Residuals, MXFP4 weights / MXFP8 activations QAT; ~2.5x scaling efficiency vs K2. Datacenter-scale: supernode with 64+ accelerators recommended.

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot table; frontier tier)
- GDPval-AA v2: **Elo 1668** (Artificial Analysis; +478 over K2.6's 1190; above Opus 4.8 1600, GPT-5.5 1494, GLM-5.2 1514; below Fable 5 1760)
- AutomationBench-AA: **53%**, #1 at AA's July 17, 2026 review (later overtaken: GPT-6 Astra 69%, Grok 4.6 67% in September)
- AA-Briefcase (agentic knowledge work): **Elo 1547**, #2 behind Fable 5, +732 vs K2.6 (AA)
- AA Agentic Index: **54.3** (WhatLLM citing AA, Aug 28, 2026)
- MCP Atlas: evaluated on the 500-task public subset, 100-turn limit (Moonshot protocol; exact score not surfaced in reviewed sources)
- BrowseComp: **91.2%** (Moonshot table; 90.4% with full 1M context, no compaction)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot table)
- HLE: no verified public number found; coverage describes K3 as trailing Fable 5 decisively on HLE ("dead last" in the Fable comparison set)
- Artificial Analysis Intelligence Index: **57** at launch, **59.7** by Aug 28, 2026 (#3, comparable to Opus 4.8 and GPT-5.5; behind Fable 5 and GPT-5.6 Sol; +13 pts over K2.6)
- AA-Omniscience: accuracy **33% → 46%**, hallucination rate **39% → 51%** (regressed vs K2.6)
- CharXiv Reasoning: **91.3%** with Python tools / **84.8%** without (Moonshot table)
- Token efficiency: 21% fewer output tokens than K2.6 (132M vs 166M across the nine AA evaluations)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **76.8%** (Moonshot table, cross-referenced by Wan 2.7 benchmark roundup)
- Frontend Code Arena (blind ranking): **#1 at launch** (Arena.ai)
- AA Coding Index: **76.2** (WhatLLM citing AA, Aug 28, 2026)
- Terminal-Bench 2.1 (coding harness): **88.3%** (Moonshot table)
- Kernel optimization: near-parity with Fable 5 / GPT-5.6 Sol; autonomously built MiniTriton (Triton-like GPU compiler with own IR, passes, PTX codegen)
- DeepSWE / SWE-Pro / SciCode / LiveCodeBench: no verified public score found

Long context:

- 1M-token window with free automatic prefix caching; BrowseComp 91.2% with context compaction vs 90.4% at full 1M (Moonshot); no MRCR/RULER numbers verified in reviewed sources

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 88.3% is frontier-tier and GDPval-AA v2 1668 Elo beats Opus 4.8; the AA Agentic Index 54.3 and a since-overtaken 53% AutomationBench-AA peak, plus thinking-history harness sensitivity, cap it below the 90s.
- **Reasoning: 85/100.** GPQA 93.5% and AA Index 59.7 (#3) are strong, but the AA-Omniscience hallucination regression (39%→51%), an unverified/poor HLE showing, and Moonshot's own admission it trails Fable 5 and GPT-5.6 Sol keep it at 85.
- **Context window: 94/100.** 1M window (95–100 tier) with 1M configurable output; no MRCR/RULER retrieval numbers verified at 512K+, so not awarded the 100 cap.
- **Multimodal: 70/100.** Native text+vision in / text out; CharXiv 91.3% and BenchLM's #1 "Multimodal & Grounded" category are excellent, but no audio/video in and text-only output keep it at the top of the 60–70 band.
- **Coding: 90/100.** SWE-bench Verified 76.8%, TB2.1 88.3%, AA Coding Index 76.2 and blind Frontend Arena #1 put it in the frontier band; missing independent DeepSWE/SciCode corroboration caps it below Muse Spark 1.3-class 95.
- **Cost efficiency: 60/100.** $3/$15 per 1M is the rubric's ~60 anchor; 90% cached-input discount and $0.94/task (AA, similar to GPT-5.6 Sol, ~½ Opus 4.8) soften it for cache-heavy workloads.
- **Overall Score: 85.4/100.** (88+85+94+70+90)/5 = 85.4. Best fit: long-horizon coding and million-token agentic/research work where open weights matter; expect harness discipline (full thinking-history pass-through) and premium output pricing.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Moonshot Kimi K3 tech blog, Benchgen model card, WhatLLM guide, Wan 2.7 benchmark roundup, BenchLM, Artificial Analysis article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


