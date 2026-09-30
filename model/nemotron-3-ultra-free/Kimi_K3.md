# Nemotron 3 Ultra (Free) — findings by Kimi K3

- Source: NVIDIA / Nemotron 3 Ultra (`opencode/nemotron-3-ultra-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free)
- **Short description:** NVIDIA's flagship open-weights hybrid (Mamba-MoE) reasoning model for long-running agents — PinchBench 90%, IFBench 81.7%, low hallucination (29.7%), 1M context; free on Zen/NVIDIA trial. Openness Index 83.3%.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free`; NVIDIA trial endpoints; open weights.
- **Release / knowledge:** Released 2026-06-01 (Computex keynote, Taipei — verified via NVIDIA research page + launch coverage); cutoff not published.
- **IDs:** `opencode/nemotron-3-ultra-free` (Free Zen ID).
- **Context window:** 1M native; 262K default serve per Zen catalog note; no separate max-output figure verified.
- **Modalities:** text in/out (beyond-text unverified per catalog); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen / NVIDIA trial ($0); open weights → self-host.
- **Architecture:** open weights — 550B total / 55B active hybrid Mamba-Transformer MoE with Latent MoE and MTP layers, pre-trained in NVFP4 (NVIDIA research page, verified 2026-09-29); >300 tok/s claimed at launch.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **90.0%**; Harvey LAB (AA): **81.7%** (benchlm.ai)
- τ²-bench: **83.3%**; τ³-bench: **70.9%** (benchlm.ai)
- Terminal-Bench 2.1: **56.4%** (Vals 50.9%); terminalBenchHard: **36.4%** (benchlm.ai)
- GDPval-AA: **1091 Elo** (33.1% normalized); BrowseComp: **44.4%** (benchlm.ai)
- AA Agentic Index: **21.7%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GPQA-D; AA 86.7%; Vals 86.1%) (benchlm.ai)
- HLE: **26.7%** (no tools); 37.4% (w/ tools); AA-HLE 28.4% (benchlm.ai)
- AA-LCR: **67.0%**; LongBench v2: **61.9%**; CritPt: **3.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.9** (benchlm.ai snapshot) — conflict: launch coverage (buildfastwithai/tech-insider) cites **48**; index-version drift suspected, both recorded; AA Openness Index: **83.3**; BenchLM overall **43.01/100, #114 of 209** (page refreshed Sept 2026); Vals Index **43.99%, #5 open-weight** (TaxEval v2 73.10% #3-open, CorpFin v2 65.46% #4-open, Finance Agent v2 37.53% #5-open)
- Hosted pricing reference: $0.50 in / $0.10 cached / $2.20 out per 1M (llm-stats, paid providers; Zen/NVIDIA trial remains $0)
- AA-Omniscience Accuracy / Hallucination Rate: **21.6% / 29.7%** — low hallucination, low accuracy (benchlm.ai)
- MMLU-Pro: **86.8%**; MMLU-ProX: **83.0%**; IFBench: **81.7%** (benchlm.ai)

Coding:

- SWE-bench Verified: **71.9%**; SWE Multilingual: **67.7%**; SWE-bench (Vals): **69.0%** (benchlm.ai)
- LiveCodeBench v6: **89.0%**; LiveCodeBench (Vals): **86.0%** (benchlm.ai)
- SciCode: **44.6%**; AA-SciCode: **40.3%**; AA Coding Index: **49.3** (benchlm.ai)

Long context:

- AA-LCR 67.0% / LongBench v2 61.9% within up-to-1M window (benchlm.ai); no MRCR rows.

Multimodal:

- Design Arena Website: **1149 Elo** (benchlm.ai); effectively text-only elsewhere.

### Normalized scores (1–100)

- **Tool use: 72/100.** PinchBench 90%, τ² 83.3%, Harvey LAB 81.7% are strong; capped by TB 2.1 56.4% and Agentic Index 21.7%.
- **Reasoning: 68/100.** GPQA ~87%, HLE w/ tools 37.4%, IFBench 81.7%, low hallucination 29.7%; capped by HLE no-tools 26.7% and CritPt 3.1%.
- **Context window: 74/100.** 1M native window; capped by LCR 67.0% retrieval and 262K default serve.
- **Multimodal: 15/100.** Text-only per catalog (beyond-text unverified) — floor with one Design Arena row noted.
- **Coding: 72/100.** LiveCodeBench v6 89.0%, SWE-bench Verified 71.9%; capped by SciCode 44.6% and Coding Index 49.3.
- **Cost efficiency: 100/100.** $0 on Zen/NVIDIA trial + open weights with Openness Index 83.3.
- **Overall Score: 60/100.** Mean of the five quality dims (72+68+74+15+72)/5 = 60.2 → 60. Best fit: free long-horizon text agents with structured output needs (IFBench class); not for multimodal.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, repo catalog). Reverified 2026-09-29: release date now verified (2026-06-01 Computex), architecture now verified (550B/55B hybrid Mamba-Transformer, Latent MoE, MTP, NVFP4 per NVIDIA research page); added AA Index conflict (22.9 benchlm vs 48 launch coverage), Vals #5-open rank, hosted price reference; scores unchanged.
- Future sources: add a new file next to this one using the same headings.
