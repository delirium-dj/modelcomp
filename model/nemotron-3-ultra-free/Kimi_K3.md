# Nemotron 3 Ultra (Free) — findings by Kimi K3

- Source: NVIDIA / Nemotron 3 Ultra (`opencode/nemotron-3-ultra-free`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-24; **the `nemotron-3-ultra-free` ID is gone from today's Zen listing** — only `nemotron-3.5-lightning-free` remains among Nemotron free tiers; HF repo exists but is access-gated; no new benchmark coverage — scores unchanged)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free)
- **Short description:** NVIDIA's flagship open-weights hybrid (Mamba-MoE) reasoning model for long-running agents — PinchBench 90%, IFBench 81.7%, low hallucination (29.7%), 1M context. **Availability changed**: the Zen free ID was NOT in the `/zen/v1/models` list on 2026-10-13.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free` (**absent from the live Zen listing as of 2026-10-13** — likely promo ended/route renamed; treat the free path as unverified going forward); HF `nvidia/NVIDIA-Nemotron-3-Ultra` **exists but is gated** (HF API returns 401 gated, not 404), which matches the family's data-gating pattern (NVIDIA's post-training data requires approved access).
- **Release / knowledge:** 2026 (exact date not verified in either pass); cutoff not verified.
- **IDs:** `opencode/nemotron-3-ultra-free` (historical Free Zen ID — see availability note); HF `nvidia/NVIDIA-Nemotron-3-Ultra` (gated).
- **Context window:** 1M native; 262K default serve per Zen catalog note (first pass); no separate max-output figure verified.
- **Modalities:** text in/out (beyond-text unverified per catalog); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** free path uncertain (Zen promo appears ended); gated open weights → self-host.
- **Architecture:** open weights, hybrid Mamba-MoE (catalog); params not verified in my sources.

### Raw benchmarks found (benchlm.ai, first-pass snapshot — no new coverage added by any tracker since 2026-09-24)

Agent / tool use:

- PinchBench: **90.0%**; Harvey LAB (AA): **81.7%**
- τ²-bench: **83.3%**; τ³-bench: **70.9%**
- Terminal-Bench 2.1: **56.4%** (Vals 50.9%); terminalBenchHard: **36.4%**
- GDPval-AA: **1091 Elo** (33.1% normalized); BrowseComp: **44.4%**
- AA Agentic Index: **21.7%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GPQA-D; AA 86.7%; Vals 86.1%)
- HLE: **26.7%** (no tools); 37.4% (w/ tools); AA-HLE 28.4%
- AA-LCR: **67.0%**; LongBench v2: **61.9%**; CritPt: **3.1%**
- Artificial Analysis Intelligence Index: **22.9**; AA Openness Index: **83.3**; BenchLM overall **43.3/100, #102 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **21.6% / 29.7%** — low hallucination, low accuracy
- MMLU-Pro: **86.8%**; MMLU-ProX: **83.0%**; IFBench: **81.7%**

Coding:

- SWE-bench Verified: **71.9%**; SWE Multilingual: **67.7%**; SWE-bench (Vals): **69.0%**
- LiveCodeBench v6: **89.0%**; LiveCodeBench (Vals): **86.0%**
- SciCode: **44.6%**; AA-SciCode: **40.3%**; AA Coding Index: **49.3**

Long context:

- AA-LCR 67.0% / LongBench v2 61.9% within up-to-1M window; no MRCR rows.

Multimodal:

- Design Arena Website: **1149 Elo**; effectively text-only elsewhere.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 72/100.** Unchanged — PinchBench 90%, τ² 83.3%, Harvey LAB 81.7% strong; capped by TB 2.1 56.4% and Agentic Index 21.7%.
- **Reasoning: 68/100.** Unchanged — GPQA ~87%, HLE w/ tools 37.4%, IFBench 81.7%, low hallucination 29.7%; capped by HLE no-tools 26.7% and CritPt 3.1%.
- **Context window: 74/100.** Unchanged — 1M native; capped by LCR 67.0% and 262K default serve.
- **Multimodal: 15/100.** Unchanged — text-only; floor with one Design Arena row noted.
- **Coding: 72/100.** Unchanged — LiveCodeBench v6 89.0%, SWE-bench Verified 71.9%; capped by SciCode 44.6% and Coding Index 49.3.
- **Cost efficiency: 92/100.** −8 — the free Zen/NVIDIA-trial path can no longer be verified live (ID gone from the listing), so "guaranteed $0" is withdrawn; gated-but-free weights keep self-host value high.
- **Overall Score: 60/100.** Half-up mean of the five quality dims (72+68+74+15+72)/5 = 60.2 → 60 (unchanged; cost excluded anyway). Best fit (if you can reach the weights): long-horizon text agents with structured output needs; not for multimodal.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenCode Zen `/zen/v1/models` 2026-10-13 — `nemotron-3-ultra-free` absent, `nemotron-3.5-lightning-free` present; HF API `nvidia/NVIDIA-Nemotron-3-Ultra` — 401 gated, repo exists). No tracker added new benchmark coverage since the first pass; benchlm.ai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
