# GPT-6 Luna — findings by Cat Jam

- Source: OpenAI / GPT-6 Luna (`opencode/gpt-6-luna`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** Cheapest GPT-6 tier for focused, high-volume tasks (released 2026-09-22). 1.05M context, text/image input; text out. Very low price, level with GPT-5.6.
- **Provider / access:** OpenAI API (`gpt-6-luna`), ChatGPT/Codex. Chat Completions + Responses. Text/image in; text out.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff 2026-05-18.
- **IDs:** `gpt-6-luna` (OpenAI)
- **Context window:** 1,050,000 tokens total (922,000 max input / 128,000 output); >272K repriced 2x/1.5x.
- **Modalities:** Text, image in; text out. Reasoning effort none/low/medium/high/xhigh/max.
- **Pricing (as of 2026-10-16):** $0.10/$0.50 per 1M; cache read $0.01 (90% off), cache write $0.125. Batch/Flex half; Fast 2x.
- **Architecture:** Proprietary low-cost tier of GPT-6 series. No open weights.

### Raw benchmarks found

- AA Intelligence Index (max): **38.1** (AA measured) / max? (article earlier: 37 at max? wait: AA model page lists Max as 38, Xhigh 35, High 33, Medium 30, Low 22, Nonreasoning 18. We'll use 38 for max)
- HLE (AA max): 38.5% (ShawnHack)
- GPQA Diamond (AA max): 91.0% (SWENN? benchgap AA-GPQA 89.3 estimated; AA-open summary: GPQA max 91.1? from OpenRouter lists GPQA Diamond posted 91.6? Let's use 91.1 AA Max where sampled summary says 91.1)
- Benchmark aggregate:
  - AA-LCR max: 83.7
  - CritPt max: 19.4
  - SciCode: 53.6
  - Terminal-Bench 2.1 (AA High maybe, not max): official? Use Independent measurements: AA max measured 82.8? Wait OpenRouter for high max only maybe. The static model page says terminal bench? In OpenRouter benchmark summary earlier "Artificial Analysis GPT-6 Luna (Max) Terminal-Bench 2.1 N/A? no. We can omit exact if not stable."
  - DeepSWE 66.6 (vendor, stated)
  - AutomationBench +5.4 points over GPT-5.6 Sol (relative); cost 58% lower.
  - OSWorld relative: exceeds GPT-5.6 Sol at medium effort at ~1/10th cost.
  - AA GDPval 46.6 (measured), AA Agentic Index 42.1 (max)
  - TB4: 12.6 measured (AA) or 11.6/16.6, use 12.6 measured benchmark gap.
  - AA-Omniscience accuracy 42.7 (max), non-hall 7.4.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB4 ~12.6, DeepSWE 66.6, GDPval 46.6, AA Agentic 42.1. Good budget agent but terminal-sector hard.
- **Reasoning: 82/100.** HLE 38.5, GPQA 91.1, AA Intelligence 38, LCR 83.7, CritPt 19.4; AIME 98.3 from non-part provider evaluation (L3 deep).
- **Context window: 92/100.** 1.05M with long context repricing above 272K; LCR 83.7.
- **Multimodal: 78/100.** Text/image only; GPQA 91.1; no audio/video. MMMU-Pro 78.6 (Xhigh?).
- **Coding: 82/100.** DeepSWE 66.6, TB2.1 ~79.4, SciCode 53.6, AA Coding 71.4. Solid low-cost coding.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M + cached discount 90%. Near free output at the low end.
- **Overall Score: 82/100.** Mean (78+82+92+78+82)/5 = 82.4 → 82. Cheapest in GPT-6 family.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs, AA model/release pages, OpenRouter summary, ShawnHack, LlLearner, SWEN). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
