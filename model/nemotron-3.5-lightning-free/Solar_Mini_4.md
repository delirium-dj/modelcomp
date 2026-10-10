# Nemotron 3.5 Lightning Free — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: NVIDIA/Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (NVIDIA Nemotron 3.5 Lightning)
- **Short description:** NVIDIA's efficient open-weight (Nemotron 3.5 Lightning) reasoning/agentic model — a small sparse MoE with interleaved Mamba-2 + MoE layers, built for high-throughput agentic workloads and sub-agent workhorses. Open weights under OpenMDW-1.1; 30B total / 3B active (GA card) or 31.6B total / 3.6B active (AA launch) parameters; 1M context, 128K–262K output; text-only.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (Chat Completions + Responses API), NVFP4 and BF16 variants, plus NVIDIA NIM. Open weights (OpenMDW-1.1).
- **Release / knowledge:** Released 2026-08-11 (NVIDIA + AA both). Training data cutoff Sep 2025; post-training cutoff May 2026.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Zen); `nvidia/nemotron-3.5-lightning` (OpenRouter); `nvidia/nemotron-3.5-lightning-30b-a3b` (NVIDIA NIM).
- **Context window:** 1M total advertised (NVIDIA official + AA launch); 262,144 reference-host cap (llmpricing.dev); host-reported range 8K–1M.
- **Modalities:** Text in/out only; reasoning supported; tool calling + structured outputs supported; no attachments/image/video/audio.
- **Pricing (as of 2026-10-10):** Official/free channel $0/$0/$0 (Zen + NVIDIA free tier); paid gateway channels from $0.025 input / $0.12 output (Kilo Gateway). Open weights, free to self-host/served.
- **Architecture:** Mixture of Experts, 30B total / 3B active per token (NVIDIA official card) or 31.6B total / 3.6B active (AA launch article). Hybrid Mamba-2 + MoE + select Attention layers. OpenMDW-1.1 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Zero verified public benchmark numbers → save `<STEM>.md.excluded` instead.

- MMLU-Pro: **81.94%** (NVIDIA official model card, BF16) / **81.94%** (NVFP4 variant)
- GPQA Diamond (no tools): **75.44%** (NVIDIA official card) / **74.3%** (OpenRouter AA page)
- HLE (text-only): **11.72%** (NVIDIA official card) / **10.6%** (OpenRouter AA page)
- SciCode: **32.6%** (NVIDIA official card) / **32.1%** (OpenRouter AA)
- SWE-bench Verified: **51.56%** (NVIDIA official card BF16) / **52.80%** (NVFP4) / **51.56%** (OpenRouter AA)
- SWE-bench Multilingual: **39.33%** (NVIDIA official card)
- Terminal-Bench v2.1: **24.58%** (NVIDIA official card BF16) / **24%** (AA launch article) / **23.46%** (NVFP4, card) / **0.5%** Terminal-Bench 4.0 (OpenRouter AA page)
- GDPval-AA v2: **832 (BF16) / 865 (NVFP4)** (NVIDIA official card) / **824** (AA launch article) / **7.1** (OpenRouter AA page) — major conflict
- AA-LCR: **52.00%** (NVIDIA official card BF16) / **49.19%** (NVFP4) / **60.3%** (OpenRouter AA) — conflict
- BrowseComp: **36.97%** (NVIDIA official card) / **36.8%** (NVFP4)
- τ³-bench (Banking): **9.28%** (NVIDIA official card BF16) / **9.48%** (NVFP4) / **8.9%** (OpenRouter AA)
- CritPt: **0.0%** (OpenRouter AA page)
- Terminal-Bench 4.0: **0.5%** (OpenRouter AA page)
- Output speed: **~670 tokens/s** (pre-release DeepInfra endpoint, AA launch article); 208 tokens/s (Solar Mini 4, for comparison)
- AA Intelligence Index: **24** (AA launch article, both BF16 and NVFP4) / **12.9** (OpenRouter AA page) — major conflict

> SELF-EXCLUSION (mandatory): if a folder's model yielded zero verified public benchmark numbers — every row below would read "no verified public score found" — do NOT save a scored `.md` file. Save `model/nemotron-3.5-lightning-free/Solar_Mini_4.md.excluded` instead. Zero verified benchmarks = self-exclude.

## Re-verification notes (second-pass, 2026-10-10)

Sources used: NVIDIA NIM official model card (`build.nvidia.com/.../nemotron-3.5-lightning-30b-a3b`), NVIDIA AA launch article (2026-08-11), llmpricing.dev, OpenRouter API pricing + benchmarks, NVIDIA blog (DeepWiki). 

Conflicts flagged (do not average silently):
1. AA Intelligence Index: 24 (AA launch) vs 12.9 (OpenRouter AA page) — same composite, 11-point gap. Likely harness/variant differences (BF16 vs NVFP4 vs routing). The official GPU-serving evidence (card) anchors higher; treat 24 as the launch-day measurement.
2. GDPval-AA v2: 832–865 (NVIDIA card/AA) vs 7.1 (OpenRouter AA) — same benchmark, ~800-point gap. Official AA release measurement anchors higher.
3. Parameters: 30B/3B (card) vs 31.6B/3.6B (AA launch) — minor, publish-date/host variant.
4. Context: 1M (card/AA) vs 262K (llmpricing/OpenRouter reference host) — actual usable window depends on host; 1M is the declared upper bound.
5. Terminal-Bench: v2.1 24% (card/AA) vs Terminal-Bench 4.0 0.5% (OpenRouter) — different harness generations, not directly comparable.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 68/100.** Tool calling + structured outputs are core features, and it is positioned as an agentic workhorse; but GDPval-AA v2 splits 824–865 (NVIDIA/AA) vs 7.1 (OpenRouter AA) and the expert-run agentic evidence is thin outside the official card, so autonomous tool reliability is capped by the conflicting agentic signals.
- **Reasoning: 62/100.** GPQA Diamond 75.44%, MMLU-Pro 81.94% are strong, but HLE 10.6–11.7%, CritPt 0.0%, SciCode 32.1–32.6%, and the conflicting AA Intelligence Index (24 vs 12.9) pull it down; knowledge accuracy is the binding constraint.
- **Context window: 75/100.** Declared 1M context (NVIDIA card + AA), but the reference/host-cap at 262K and host-reported range 8K–1M mean usable context is host-dependent; long-context cap is the moderate range.
- **Multimodal: 15/100.** Text-only input/output; no image/video/audio/attachments → floor assigned.
- **Coding: 62/100.** SWE-bench Verified 51.56–52.80% and Terminal-Bench v2.1 24.58% are solid, but SciCode 32.1–32.6% and the conflicting agentic/terminal numbers keep autonomous coding reliability moderate.
- **Cost efficiency: 100/100.** Official/free channel $0/$0 per 1M (Zen + NVIDIA free tier); 30B/3B MoE at near-zero cost is highly efficient; paid gateways start ~$0.025/$0.12.
- **Overall Score: 56.4/100.** (68 + 62 + 75 + 15 + 62) / 5 = 56.4. Best-fit: a genuinely strong 3B-active open-weights agentic workhorse (GPQA 75%, MMLU-Pro 82%, SWE-bench 52.8%) that is held back by low-knowledge accuracy (HLE, CritPt), conflicting public AA composite scores, and host-dependent context windows.

---

## Signature

- Provided by: **Solar_Mini_4 (opencode/nemotron-3.5-lightning-free)** — 2026-10-10
- Method: public internet research across NVIDIA NIM official model card, NVIDIA Artificial Analysis launch article (2026-08-11), llmpricing.dev, OpenRouter API pricing and benchmark pages, and NVIDIA developer docs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one when an independent AA board (e.g. Cyber Index) or SWE-bench/Terminal-Bench numbers arrive for the free variant.

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/nemotron-3.5-lightning-free/Solar_Mini_4.md` (folder name `nemotron-3.5-lightning-free` = filesystem-safe slug; version dots used, never hyphens).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/nemotron-3.5-lightning-free/`.
4. No benchmark invented; verified sources cited above. Zero verified benchmarks would have meant self-exclusion as `.md.excluded`.
5. Conflicting public numbers (AA Intelligence Index 24 vs 12.9; GDPval v2 824–865 vs 7.1; context 1M vs 262K) documented in Re-verification notes and NOT silently averaged.

