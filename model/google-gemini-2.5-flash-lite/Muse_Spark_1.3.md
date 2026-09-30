# Google Gemini 2.5 Flash Lite — findings by Muse Spark 1.3

- Source: Google/Gemini 2.5 Flash Lite (`opencode/google-gemini-2.5-flash-lite`)
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
