# Gemini 2.5 Flash Lite — findings by Muse Spark 1.3

- Source: Google/Gemini 2.5 Flash Lite (`opencode/google-gemini-2.5-flash-lite`) (same weights as google/gemini-2.5-flash-lite)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google DeepMind's Jun 2025 lightweight hybrid-reasoning tier (thinking on/off): ultra-low-latency, high-volume classification/translation/coding support with a full 1M context at $0.10/$0.40 and falling. Top use case: cheapest Google-tier bulk inference where Lite-class quality suffices.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5-flash-lite`); OpenCode Zen ID `opencode/google-gemini-2.5-flash-lite`.
- **Release / knowledge:** 2026-06-17 GA (llm-stats; model card published 2026-09-26 covering 06-17 GA + 09-2025 preview); knowledge cutoff 2025-01-01 (llm-stats).
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (Zen-hosted; Google native `gemini-2.5-flash-lite`).
- **Context window:** 1,048,576 in / 65,536 out (llm-stats provider table; pricepertoken 1.0M). No public MRCR number for the Lite cut (DeepMind changed MRCR methodology to harder 8-needle going forward — no Lite score published).
- **Modalities:** Text + vision + audio in (pricepertoken capability flags; Preview 09-2025 improved multimodal/translation); text out; hybrid reasoning yes (thinking toggle).
- **Pricing (as of 2026-09):** $0.10 input / $0.40 output per 1M list (llm-stats; BenchGecko); floor pricing observed at $0.05/$0.20 via AI Studio (pricepertoken, −50% over 90 days). Paid, bottom-tier.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **64.6% non-thinking / 66.7% thinking** (Google 2.5 Flash-Lite model card, Jun 2025 results)
- HLE (no tools): **5.1% non-thinking / 6.9% thinking** (Google model card)
- AIME 2025: **49.8% non-thinking / 63.1% thinking** (Google model card)
- SimpleQA: **10.7%** (Google model card)
- HELM WildBench: **81.8%**; HELM IFEval: **81.0%**; HELM MMLU-Pro: **53.7%** (BenchGecko HELM-harness rows — different harness scale, provisional weight)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (pricepertoken Intelligence 1.4, 18th percentile — aggregator composite, not AA proper)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **31.6% non-thinking / 27.6% thinking single-attempt; 42.6% / 44.9% multi-attempt** (Google model card; Google scaffolding draws multiple trajectories rescored by the model's own judgment)
- LiveCodeBench v5: **33.7% non-thinking / 34.3% thinking** (Google model card)
- Aider Polyglot (whole): **26.7% non-thinking / 27.1% thinking** (Google model card; non-default settings vs official leaderboard — noted)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported for the Lite cut (1M window verified; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 55/100.** Zero public agentic benchmark numbers (TB/Tau/GDPval/Claw) for this ID; Aider-editing 26.7% is a code-editing proxy, not tool orchestration. Capped at 55.
- **Reasoning: 66/100.** GPQA 64.6–66.7 and thinking-mode AIME 63.1 evidence real Lite reasoning, but HLE 5.1–6.9% is a hard knowledge ceiling and no LCR/Index numbers exist; capped at 66.
- **Context window: 95/100.** Verified 1M in / 65K out clears the ≥1M tier at the cheapest Google price; held at the tier floor for lack of any Lite-cut retrieval measurement.
- **Multimodal: 80/100.** Vision + audio input flags with text out, plus Preview-generation multimodal gains; held at 80 pending Lite-specific vision-bench numbers.
- **Coding: 60/100.** SWE-Verified 31.6% single (44.9% multi-attempt), LiveCodeBench v5 ~34%, Aider 27.1% is a consistently weak verified coding set; capped at 60.
- **Cost efficiency: 98/100.** $0.10/$0.40 list ($0.05/$0.20 floor observed) sits at the ~$0.10/$0.20 (97–99) reference — 98 on balance.
- **Overall Score: 71/100.** Mean of the five non-cost dims (55 + 66 + 95 + 80 + 60) / 5 = 71.2 → 71; best fit as a bulk budget tier for long-context classification/translation/light coding, not an agent or coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Google DeepMind 2.5 Flash-Lite model card PDF, llm-stats compare pages, BenchGecko HELM rows, pricepertoken pricing/capability table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Artificial Analysis gemini-2-5-flash-lite page (non-reasoning lane: Index 7 est., 1M, text+image+speech+video in, $0.10/$0.40, deprecated → Sep-25 Preview), (2) benchgap lane (14 measured as of 2026-10-18), (3) DeepMind models page (now showcases 3.5 Flash-Lite successor — TB2.1 54.0%, SWE-Pro 54.2%, OSWorld 74.0%, GDPval 1140, MRCRv2 72.2%@128K/21.3%@1M; successor numbers noted, not scored here). Conflicting results compared below.

| Dimension | 2026-09-26 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 55 | 55 | hold — still zero agentic absolutes for the 2.5-Lite cut; Tau2 19.0% measured is a weak lane consistent with cap; successor TB2.1 54.0%/OSWorld 74.0% noted, not scored here |
| Reasoning | 66 | 66 | hold — GPQA 64.6% measured confirms filed row; HLE ~5-7% band confirmed (AA-HLE 3.7% measured lane differs, both listed); AIME 49.8% measured confirms filed 49.8% non-thinking; new Index 7 est. anchor consistent; LCR 32.0% measured fills filed gap |
| Context | 95 | 95 | hold — 1M reconfirmed on AA; MRCRv2 ~23% est. only; successor MRCR 72.2%@128K/21.3%@1M noted, not scored here |
| Multimodal | 80 | 80 | hold — 4-modality input reconfirmed on AA (text/image/speech/video); new MMMU 72.9% / MMMU-Pro 54.0% measured deepen pending-cut vision numbers without moving band |
| Coding | 60 | 60 | hold — SWE-Ver 31.6% measured confirms filed row; new SWE-Pro 11.8% est. + LiveCode ~41% est. + Coding Index ~23% est. deepen consistent with cap; successor SWE-Pro 54.2% noted, not scored here |
| Cost | 98 | 98 | hold — $0.10/$0.40 reconfirmed on AA |
| Overall | 71 | 71 | hold — (55+66+95+80+60)/5 = 71.2 → 71 |

STATUS NOTE: AA marks 2.5 Flash-Lite deprecated → Sep-25 Preview; DeepMind now spotlights 3.5 Flash-Lite (TB2.1 54.0%, SWE-Pro 54.2%, GDPval 1140, OSWorld 74.0%) — successor numbers recorded for traceability, not scored on this cut. Scores hold; evidence deepens without crossing a band boundary.

Sources: https://artificialanalysis.ai/models/gemini-2-5-flash-lite · https://benchgap.net/model/gemini-2-5-flash-lite

