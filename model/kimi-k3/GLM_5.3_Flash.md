# Kimi K3 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open frontier flagship; no Free-tier wording)
- **Short description:** Moonshot AI's 2.8T-parameter open sparse-MoE flagship with native vision and a 1M-token window — the first open 3T-class model, aimed at long-horizon coding, knowledge work and reasoning. Frontier-competitive on coding/agentic tasks while Moonshot itself says it still trails Claude Fable 5 and GPT-5.6 Sol overall.
- **Provider / access:** Moonshot first-party Kimi API (`kimi-k3`), Kimi.ai / Kimi Work / Kimi Code (ID `k3`); also on OpenRouter and Cloudflare Workers AI. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Hosted launch July 16, 2026; open weights published July 27, 2026 with technical report (one source says Jul 26 — minor conflict). Knowledge cutoff: confirmed unpublished in every fetched source (HF card, blog, AA, Vals, Wikipedia, 2026-10-10). License: custom Kimi K3 License — commercial use restricted, revenue share up to 30% for inference providers >$20M annual revenue (not Apache 2.0, despite some aggregator listings).
- **IDs:** `kimi-k3` (API), `k3` (Kimi Code). Weights on Hugging Face.
- **Context window:** 1,048,576 tokens (1M); max output 131,072 default, configurable up to 1,048,576 — verified from Moonshot launch specs and Cloudflare/OpenRouter cards.
- **Modalities:** Text + native vision in; text out. Reasoning: always on (max default at launch; low/high/max later). Function calling/tools supported; web-search tool not recommended for production at launch.
- **Pricing (as of 2026-10-10):** $3.00 in (cache miss) / $15.00 out per 1M; cached input $0.30 (90% discount); unchanged since launch. AA cost per task now $2.00 on the v4.3.2 index (160M output tokens per run, ~2× the 82M median — verbosity has grown; launch-era read was $0.94).
- **Architecture:** Open weights (custom Kimi K3 License; some aggregators list Apache 2.0). 2.8T total / ~104B activated, 93-layer sparse MoE (16 of 896 routed experts + 2 shared, Stable LatentMoE), Kimi Delta Attention + Attention Residuals, MXFP4 weights / MXFP8 activations QAT; ~2.5x scaling efficiency vs K2. Datacenter-scale: supernode with 64+ accelerators recommended.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot table; frontier tier; Vals independent TB2.1 read 80.9%; AA's own run 85%)
- GDPval-AA v2: **Elo 1668** (Artificial Analysis launch-era reading; +478 over K2.6's 1190; above Opus 4.8 1600, GPT-5.5 1494, GLM-5.2 1514; below Fable 5 1760) — CONFLICT: AA's current board reads **Elo 1533** / 51.7% (added 2026-10-16; the 2026-10-15 refresh re-based the board, both cited)
- AutomationBench-AA: **53%**, #1 at AA's July 17, 2026 review (later overtaken: GPT-6 Astra 69%, Grok 4.6 67% in September); the official launch table reads **30.8%** on the vendor's own harness version (added 2026-10-16 — version conflict, both cited)
- AA-Briefcase (agentic knowledge work): **Elo 1547**, #2 behind Fable 5, +732 vs K2.6 (AA); current board **1501** (2026-10-15 refresh)
- AA Agentic Index: **54.3** (WhatLLM citing AA, Aug 28, 2026); current board **50.6** (2026-10-15 refresh)
- MCP Atlas: evaluated on the 500-task public subset, 100-turn limit (Moonshot protocol; exact score not surfaced in reviewed sources)
- BrowseComp: **91.2%** (Moonshot table; 90.4% with full 1M context, no compaction)
- MCP-Atlas (500-task public subset): **84.2**; Toolathlon-Verified: **76.5** (AA board now reads 73.2 — minor conflict, both cited); MCPMark: **94.5** (Moonshot table)
- OSWorld-Verified: **84.8**; OSWorld 2.0: **58.3** (Moonshot table)
- Added 2026-10-16 (BenchLM refresh): DeepSearchQA **95.0%** (new, near-perfect); APEX-Agents **37.6%**; JobBench **52.9%**; DECK-Bench **73.5%**; SpreadsheetBench 2 **34.8%**; AA Harvey LAB **94.6%** (near-perfect legal); AA Tau3 Banking **46.0%**; AA ITBench **47.7%**; Hermes Bench **71.5%** / Hermes Index **39.2%**; ApprenticeBench **18%**; MazeBench ASCII **1%**; Gray Swan IPI **52.7%** (weak safety)
- Vals Terminal-Bench 4.0: **17.17%** (#27/45; Vals, page current 2026-10-10); AA's own TB4.0 run reads **12.6%** (2026-10-15 — confirms the weak TB4.0-generation picture)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot table; Vals 92.9% — agreement)
- HLE: **43.5** no-tools / **56.0** with tools (Moonshot HF card/blog, max effort — first public measurement); AA-HLE **46.9%** (added 2026-10-16 — second reading, consistent band)
- ARC-AGI-1: **94.5%** / ARC-AGI-2: **60.4%** (ARC Prize verified — added 2026-10-16, fills the previously-missing ARC rows)
- Artificial Analysis Intelligence Index: launch **57** (v4.1) → 59.7 by Aug 28, 2026 (#3 on the old scale) → rescored **44 on v4.3.2** (#3/117 open-weights class; AA page, 2026-10-10; reconfirmed **43.6** on 2026-10-15) — the Sep 7 v4.3 re-base (Terminal-Bench 4.0 + AA-LCR v1.1 recomposition) cut ~15 pts; version values are not comparable
- Vals Index: **50.30%** (#28/45; Vals, 2026-10-10; was 57.81% #8/43 at launch — index re-versioned)
- AA-Omniscience: accuracy **33% → 47.6%**, hallucination rate **39% → 53.2%** (regressed vs K2.6)
- CharXiv Reasoning: **91.3%** with Python tools / **84.8%** without (Moonshot table)
- CritPt: **23.4**; MMMU-Pro: **81.6** (Moonshot table)
- AA-LCR: **88.7%** (AA board, 2026-10-15 refresh — up from the 74.7 launch reading; strongest open-weight long-context reasoning read in this dataset); MLCR-AA: **38.3%** (added 2026-10-16)
- FrontierMath v2: no row published for K3 on the Epoch leaderboard (absent, not zero)
- Token efficiency: 21% fewer output tokens than K2.6 (132M vs 166M across the nine AA evaluations)

Coding:

- SWE-bench Verified: **76.8%** (Moonshot table, cross-referenced by Wan 2.7 benchmark roundup)
- Frontend Code Arena (blind ranking): **#1 at launch** (Arena.ai)
- AA Coding Index: **76.2** (WhatLLM citing AA, Aug 28, 2026)
- Terminal-Bench 2.1 (coding harness): **88.3%** (Moonshot table)
- Kernel optimization: near-parity with Fable 5 / GPT-5.6 Sol; autonomously built MiniTriton (Triton-like GPU compiler with own IR, passes, PTX codegen)
- DeepSWE v1.1: **67.5** (Kimi Code harness) / **67.3** (mini-SWE-agent official leaderboard); FrontierSWE: **81.2**; SciCode: **58.7**; Kimi Code Bench 2.0: **72.9** (Moonshot table)
- Added 2026-10-16 (BenchLM refresh): AA-SciCode **59.5%** (clears the 55%+ mark); VulcanBench v3 **73.7%**; CursorBench 3.2 **60.8%**; OpenHarmony **57.3%**; MLS-Bench Lite **48.3%**; sweMarathon **42%**; FrontierSWE v2 **25.9%** (weak); Bug Hunt **21.0 fixes**; PostTrainBench v1.1 **32.0%**
- ProgramBench: **77.8** (vendor, Kimi Code harness) vs **2.00%** (Vals, 2026-10-10) — extreme vendor-vs-independent divergence
- SWE-bench Verified (Vals independent, Mini-SWE-agent): **93.40%** (#8/88; page updated 2026-09-01) — far above the vendor table's 76.8%
- LiveCodeBench (Vals): **87.19%**; Vibe Code Bench v1.1 (Vals): **84.97%**
- SWE-bench Pro / MRCR / RULER: no verified public score found

Long context:

- 1M-token window with free automatic prefix caching; BrowseComp 91.2% with context compaction vs 90.4% at full 1M (Moonshot); no MRCR/RULER numbers verified in reviewed sources — AA-LCR **88.7%** (2026-10-15 refresh) is now the strongest open-weight long-context reasoning read in this dataset, replacing the launch-era 74.7

### Normalized scores (1–100)

- **Tool use: 84/100.** CHANGED from 85 — TB2.1 88.3% (vendor harness; Vals 80.9%, AA 85%), BrowseComp 91.2% and DeepSearchQA 95.0% stay frontier-tier, but the GDPval conflict (AA board 1533 vs the launch-era 1668), the v4.3.2 AA rescore (43.6–44) and Vals'/AA's weak TB4.0 reads (17.17%/12.6%) show the launch-era agentic numbers do not fully carry to the current harness generation.
- **Reasoning: 86/100.** CHANGED from 84 — GPQA 93.5%/92.9% (two-source agreement), newly verified ARC-AGI-2 60.4% (ARC Prize), AA-HLE 46.9% consistent with the vendor's 43.5/56.0, and AA-LCR 88.7% (up from 74.7) are strong; the AA Index 43.6, the AA-Omniscience hallucination regression (53.2%) and the absent FrontierMath row cap it below 90.
- **Context window: 95/100.** 1M window (95–100 tier) with 1M configurable output; AA-LCR 88.7% is now the strongest open-weight long-context read; no MRCR/RULER retrieval numbers at 512K+ still keep it off the 100 cap.
- **Multimodal: 72/100.** CHANGED from 70 — native text+vision in / text out with the newly surfaced deep vision suite (MathVision 94.3%, OmniDocBench 91.1%, MMMU-Pro 83.4% w/ Python, CharXiv 91.3%); no audio/video in and text-only output keep it just above the 60–70 band.
- **Coding: 91/100.** Vals' independent SWE-bench Verified 93.40% (#8/88) far exceeds the vendor's 76.8%, LiveCodeBench 87.19%, blind Frontend Arena #1, and the newly corroborated AA-SciCode 59.5% / VulcanBench 73.7% are strong; DeepSWE 67.5 is mid-tier, ProgramBench diverges wildly by harness (77.8 vendor vs 2.0 Vals) and FrontierSWE v2 25.9% is weak — 91.
- **Cost efficiency: 55/100.** $3/$15 per 1M is the rubric's ~60 anchor and the 90% cached-input discount softens it for cache-heavy workloads, but AA's v4.3.2 instrumentation now reads ~$2.00/task at 160M output tokens (≈2× the median, up from $0.94 on the launch-era index) — verbosity has grown.
- **Overall Score: 86/100.** CHANGED from 85 — (84+86+95+72+91)/5 = 428/5 = 85.6 → 86. Best fit: long-horizon coding and million-token agentic/research work where open weights matter; expect harness discipline (full thinking-history pass-through) and premium output pricing.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (second pass 2026-10-10: Moonshot HF card + kimi.com blog, Artificial Analysis v4.3.2 page, Vals AI model/benchmark pages, Wikipedia/WhatLLM license detail; 2026-10-16 re-check: BenchLM 83-row refresh — ARC-AGI 94.5/60.4 verified, AA-LCR 74.7→88.7, GDPval 1668-vs-1533 conflict cited, deep vision suite added — Reasoning 84→86, Tool 85→84, Context 94→95, Multimodal 70→72, Overall 85→86); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


