# Laguna S 2.1 — findings by Fledge Alpha

- Source: Poolside AI (`laguna-s-2.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-total/8B-active open-weights agentic-coding MoE, released July 21, 2026; tracked as the S (large/coding) tier.
- **Provider / access:** OpenRouter `poolside/laguna-s-2.1`, Vercel AI Gateway, Pioneer/Kilo/NanoGPT, Poolside API; weights on HF under OpenMDW-1.1, NVFP4/BF16/INT4 variants; free 256K OpenRouter tier.
- **Release / knowledge:** July 21, 2026; knowledge cutoff Nov 2025 (poolside launch).
- **IDs:** `poolside/laguna-s-2.1`; `opencode/laguna-s-2.1` per folder; no Zen Free ID.
- **Context window:** 1M native (1.048M); 256K free/local builds; 131K max output (API tier).
- **Modalities:** text in/out only; reasoning mode; tool calling.
- **Pricing (as of 2026-10-05):** ~$0.09–0.10 in / $0.18–0.20 out per 1M, cache ~$0.01; free 256K tier available.
- **Architecture:** 118B MoE, 8B active (10/256 experts + 1 shared), 48 layers, 1:3 global/sliding attention, OpenMDW-1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (vendor launch table)
- Toolathlon Verified: **49.7%** (vendor)
- DeepSWE v1.1: **40.4%** (vendor)
- SWE Atlas (Codebase QnA): **46.2%** (vendor)

Reasoning / knowledge:

- No verified GPQA/HLE/MMLU row published; Poolside positions it as a coding specialist, not a reasoning generalist.

Coding:

- SWE-Bench Pro (public): **59.4%** (vendor)
- SWE-bench Multilingual: **78.5%** (vendor)
- Terminal-Bench 2.1 70.2% (above)
- Without-thinking fallback: Terminal-Bench 2.1 drops to 60.4%, DeepSWE to 16.5% per community notes

Long context:

- 1M native; no published MRCR/RULER/GraphWalks row.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 76/100.** Terminal-Bench 70.2 + Toolathlon 49.7 + DeepSWE 40.4 are verified vendor rows.
- **Reasoning: 60/100.** Not measured for general reasoning; strong terminal trajectory reasoning only.
- **Context window: 97/100.** 1M native, 256K local builds, 131K output via API.
- **Multimodal: 15/100.** Text-only by design.
- **Coding: 82/100.** SWE-Bench Pro 59.4, SWE-Bench Multilingual 78.5, TB 70.2 — strongest open-weights S-size scores published.
- **Cost efficiency: 94/100.** ~$0.10/$0.20 per 1M with a free 256K tier.
- **Overall Score: 66/100.** Mean of five non-cost dims (76+60+97+15+82)/5 = 66.0 → 66; best fit: 8B-active coding specialist at desktop scale.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Poolside launch blog, GlobeNewswire release, waitwhichmodel, vectorwire, modelbench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
