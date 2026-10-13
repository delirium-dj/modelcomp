# Inkling — findings by GLM 5.3

- Source: Thinking Machines Lab (`thinkingmachines/inkling`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights model (released 2026-07-15): a 975B-total / 41B-active MoE generalist pretrained on 45T tokens of text, images, audio and video, built as a customization base with controllable thinking effort. Second pass adds AA's full independent profile: **Intelligence Index 25 (#28/117 in class, median 18)**, **186.3 tok/s output (#6/117 in class)**, a now-live first-party API at **$1.00/$4.05**, and **Apache 2.0 license confirmed**. A smaller sibling, **Inkling Small**, shipped ~2026-07-30 (separate AA page). Top use case: fine-tunable multimodal foundation for agentic and interaction-model workflows.
- **Provider / access:** open weights on Hugging Face `thinkingmachines/Inkling` (+ NVFP4 checkpoint, **Apache 2.0**); **Thinking Machines's own API is live** ($1.00/$4.05, cache discount 83%, TTFT 1.81 s) plus **7 API providers** (Together AI, Fireworks, Modal, Databricks, Baseten et al.); Tinker fine-tuning (64K/256K context options); SGLang/vLLM/TokenSpeed/llama.cpp support. Still absent from the OpenCode Zen endpoint list.
- **Release / knowledge:** 2026-07-15; knowledge cutoff not stated publicly.
- **IDs:** `thinkingmachines/Inkling`; `opencode/Inkling` referenced in repo metadata but not in the current Zen endpoint list — no Zen Free ID.
- **Context window:** **1M tokens native — AA-confirmed**; Tinker serves 64K/256K options.
- **Modalities:** **text, image, and speech input, text out** (AA confirms the served modality set — no video input at serving time despite video in the pretraining mix); reasoning (controllable thinking effort 0.2-0.99; AA measures the xhigh variant); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-12):** **$1.00 in / $4.05 out per 1M** (first-party API; blended ~$0.72/M; cache discount 83%) — AA calls it "particularly expensive when comparing to other open weight models of similar size" (class medians $0.43/$1.68); self-host license $0. Previously no canonical price existed — this resolves that gap.
- **Architecture:** MoE transformer, 975B total / 41B active (AA-confirmed); DeepSeek-V3-style 256 routed experts + 2 shared (6 active), sigmoid aux-loss-free balancing; 5:1 sliding-window/global attention interleave; relative positional embeddings (no RoPE); short convolutions on K/V and residual branches; Muon + Adam hybrid optimizer on GB300 NVL72.

### Raw benchmarks found

> Second-pass corrections: (1) **the 77.6% SWE-bench Verified is a vendor-run result, not AA's** — datallmlab documents that press coverage (and the research brief that fed the first pass) misattributed it to Artificial Analysis; the row stays but as vendor data with reduced confidence. (2) AA's independent profile landed: II 25, class rank #28/117, speed #6/117. Vendor figures remain effort-0.99 ceilings (theairankings caveat).

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (vendor, contamination-zeroed) / Vals variant 47.6% — unchanged
- MCP Atlas 76.0% / 74.1%; Toolathlon-Verified 45.5%; τ³-Banking 23.7-29.1% (vendor/AA-run); BrowseComp w/ context management 77.1%; GDPval-AA 1238 Elo (vendor) / 1165 (BenchLM); AA Agentic Index 24.3%; EnterpriseOps-Gym 38.0%; AnalystAgent 23.8% — all unchanged; Claw-Eval / SWE Atlas still unmeasured

Reasoning / knowledge:

- GPQA Diamond 87.2-87.9%; HLE 29.7% text / 46.0% tools; AIME 2026 97.1%; AA-LCR 77.3%; CritPt 5.4%; **AA Intelligence Index 25 — independently confirmed by AA's own xhigh measurement** (first pass had it via BenchLM); Omniscience index 2.0-2.1, accuracy 41.6%; IFBench 79.8%; ForecastBench Brier 61.1/63.7 — unchanged
- AA capability indexes (Finance, Strategy, Legal, Healthcare, Engineering, Economics) exist for Inkling but values sit behind interactive charts — not captured this pass; flagged for future re-research

Coding:

- **SWE-bench Verified 77.6% — vendor-run (bash-only), attribution corrected this pass**; SWE-bench Pro 54.3%; LiveCodeBench (Vals) 85.5%; AA-SciCode 47.0%; AA Coding Index 52.1%; FrontierSWE v2 4.1%; Design Arena Agentic Web Dev Elo 1257 (vendor-cited leaderboard — still the top open-weights webdev row) — unchanged; Vibe Code still unmeasured

Long context:

- **1M window AA-confirmed**; AA-LCR 77.3%; no MRCR/RULER per-length data — unchanged.

Multimodal:

- Vendor suite retained: MMMU-Pro 73.5%, CharXiv RQ 78.1%/82.0% w/ Python, **Audio MC 56.6%, MMAU 77.2%, VoiceBench 91.4%** (strongest open-weights audio claim — still no independent audio verification); AA confirms the modality set (text+image+speech) but publishes no independent multimodal scores. Safety: FORTRESS 78.0%/95.9%, StrongREJECT 98.6%.

### Normalized scores (1–100)

- **Tool use: 74/100.** Held: no new independent agent rows landed; MCP Atlas 76%, BrowseComp 77.1%, TB 2.1 63.8% remain top-tier open-weights results, with GDPval mid-band and Toolathlon 45.5% / τ³ ~24-29% lagging frontier agents.
- **Reasoning: 80/100.** Held: AA's independent II 25 confirms the BenchLM read; HLE-with-tools 46.0% near-frontier, GPQA 87.2% and AIME 97.1% strong, calibration a differentiator — CritPt 5.4% and weak Omniscience still cap it.
- **Context window: 95/100.** Held: 1M now AA-confirmed; AA-LCR 77.3% solid; no ≥98% retrieval evidence; Tinker serving still tops at 256K.
- **Multimodal: 91/100.** Held: text+image+speech in with the best open-weights audio suite (still vendor-run only) and solid vision; text-only output, no video input at serving.
- **Coding: 73/100.** Held: the 77.6% SWE-bench stays but with the attribution corrected to vendor-run (confidence reduced, value unchanged); LCB 85.5% and Design Arena 1257 are the competitive rows; SWE-Pro 54.3% and FrontierSWE 4.1% sit well below frontier agentic coding.
- **Cost efficiency: 83/100.** Lowered from 88: the first pass's "no canonical price" was resolved the wrong way — $1.00/$4.05 is 2.3-2.4× the open-weights class median (AA: "particularly expensive"), and 975B-total self-hosting is heavy; the offsets are Apache 2.0 ($0 license), the 83% cache discount, and elite speed (186 tok/s, #6/117) that lowers wall-clock cost.
- **Overall Score: 83/100.** (74 + 80 + 95 + 91 + 73) / 5 = 82.6 → 83, unchanged. Best-fit: the most balanced open-weights generalist found and the best Apache-2.0 base for audio-capable fine-tuning, now with a fast first-party API; but it's priced like a premium API while measuring like a good-not-frontier model, and frontier agents still beat it on agentic coding.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (Artificial Analysis Inkling page — independent II 25, speed 186.3 tok/s #6/117, $1.00/$4.05 first-party pricing, 1M window, Apache 2.0, 7 providers; datallmlab's attribution investigation of the 77.6% SWE-bench row; theairankings effort-0.99-ceiling caveat; orcarouter/eesel/buildfastwithai reviews; BenchLM page; no BenchLeader page exists — 404; vendor rows from the first pass retained with the attribution correction); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
