# Nemotron 3.5 Bolt 74B-A9B — findings by Muse Spark 1.3

- Source: NVIDIA/Nemotron 3.5 Bolt, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open-weight 74B/9B-active Mamba-2 vision-language MoE — first of the Bolt family, ~1/7 the params of Ultra at ~2 points lower Index, fitting in 24GB VRAM.
- **Provider / access:** NVIDIA NIM / Build.nvidia.com, Hugging Face weights, local (24GB); OpenCode Zen `opencode/nemotron-3.5-bolt-74b-a9b`.
- **Release / knowledge:** 2026-10-15 (with Super VL; AA article same day); cutoff not disclosed
- **IDs:** `opencode/nemotron-3.5-bolt-74b-a9b` (state explicitly: no Free ID exists on Zen)
- **Context window:** 262,144 (256K) total — verified via AA article + repo metadata
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-17):** Open weights under OpenMDW-1.1 (self-host free / NIM served); no Zen per-token list price — scored on self-host value
- **Architecture:** 74B total / 9B active hybrid Mamba-2 MoE; OpenMDW-1.1 license

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **21.4** (AA — 4th among <100B params, #1 US in class; +8.6 over Nemotron 3 Super 12.8 at 39% fewer params)
- Terminal-Bench 2.1: **51.0% measured** (benchgap; AA-TB2.1 lane 50.2% est. — consistent)
- BrowseComp: **66.8% measured** (benchgap)
- Tau3-bench: **17.0% measured** (benchgap — weak lane)
- MCP Atlas: **52.2% measured** (benchgap — mid lane)
- Claw-Eval: **62.1% estimated** (benchgap est. — provisional, no measured absolute)
- AutomationBench-AA: **15.5% vs Ultra 3.0%** (AA — Bolt leads its big sibling here)


Reasoning / knowledge:

- GPQA Diamond: **86.4% measured** (benchgap; AA-GPQA 86.0% est. — consistent)
- HLE: **24.7% measured** (benchgap AA-HLE; HLE est lane 33.5% — measured taken)
- AA-LCR: **69.7% measured** (benchgap; trails Ultra 79% per AA)
- CritPt: **4.3% measured** (benchgap — weak lane)
- AA-Omniscience Accuracy: **17.1% measured** (benchgap)
- AA-Briefcase: **912 vs Ultra 874 Elo** (AA — Bolt leads on analytical quality)

Coding:

- SWE-bench Verified: **65.5% estimated** (benchgap est. — provisional; Vals SWE 66.3% est.)
- SWE-bench Pro: **43.0% estimated** (benchgap est. — provisional)
- LiveCodeBench v6: **80.3% estimated** (benchgap est. high confidence — provisional)
- AA-SciCode: **39.7% measured** (benchgap)
- DeepSWE: **51.9% estimated** (benchgap est. low confidence — provisional)
- PinchBench: **88.5% measured** (benchgap — standout niche lane)

Long context:

- **256K verified; MRCRv2 72.9% estimated (benchgap est. low confidence — provisional)**

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 51.0% measured plus BrowseComp 66.8%, MCP Atlas 52.2% measured, Index 21.4 (#1 US <100B); capped by Tau3 17.0% and est-only Claw lane.
- **Reasoning: 76/100.** GPQA 86.4% measured plus LCR 69.7% and Briefcase 912 over Ultra; capped by HLE 24.7% and CritPt 4.3%.
- **Context window: 72/100.** 256K verified; mid tier below 400K–1M models.
- **Multimodal: 68/100.** Text+image in, text out; vision-language MoE but fewer measured vision absolutes than Super VL caps it.
- **Coding: 74/100.** SciCode 39.7% measured plus SWE est band ~66/43%, LiveCode ~80% est., PinchBench 88.5%; capped with SWE/LiveCode estimated-only.
- **Cost efficiency: 95/100.** Open weights self-host free (24GB) / NIM; no Zen per-token price — near-free value.
- **Overall Score: 72/100.** Mean (72+76+72+68+74)/5 = 72.4 → 72; best-fit local-serve efficient agent pick at 24GB.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (AA Super+Bolt article 2026-10-15, benchgap measured lane, BenchLM cross-check); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
