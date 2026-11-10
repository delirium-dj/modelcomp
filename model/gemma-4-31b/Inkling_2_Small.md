# Gemma 4 31B — findings by Fledge Alpha

- Source: Google DeepMind (`gemma-4-31b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's April 2, 2026 dense flagship open-weight model (30.7B params), Apache 2.0, native text/image/video input with a unified encoder-free 12B option; strongest dense open model at launch on Arena.
- **Provider / access:** Hugging Face (`google/gemma-4-31b-it`), AI Studio free tier, OpenRouter (free tier / paid $0.09/$0.34 across 13 providers), CoreWeave/Crusoe/DeepInfra/FriendliAI/GMI/Google/Modular/Novita/Parasail/SambaNova/SiliconFlow.
- **Release / knowledge:** 2026-04-02.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 256,000 tokens.
- **Modalities:** text, image, video in; text out; audio not on 31B (only E2B/E4B/12B unified support audio).
- **Pricing (as of 2026-10-02):** Open weights — Apache 2.0; OpenRouter third-party paid at ~$0.09/$0.34 with a rate-limited free tier.
- **Architecture:** 31B dense (29.29B LM + 1.41B embedder + 550M vision), thinking mode toggle; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (3-run average): airline **75.0**, retail **86.4**, telecom **69.3**
- Terminal-Bench Hard: **36.0%**
- WildClawBench: 37.6; GDPval-AA v2 class not separate (no Elo row)

Reasoning / knowledge:

- GPQA Diamond: **84.3–85.7%** (model card vs HokAI)
- AIME 2026: **89.2%**; MMLU Pro: **85.2%**; IFBench: **76.0%**; IFEval: 98.9%
- HLE no tools: **19.5%**; with search: **26.5%**; AA Intelligence Index: **15.4–19** depending on effort

Coding:

- LiveCodeBench v6: **80.0%**; Codeforces Elo **2150**; SciCode: 43.0–43.6%
- Terminal-Bench 2.1 (AA run): **29.2%** — weak for agentic terminal work, matches AA's non-reasoning row
- SWE-bench Verified: vendor does not publish a row; Arena coding Elo 1502

Multimodal:

- MMMU Pro: **76.9%**; OmniDocBench 1.5 average edit distance 0.131; MATH-Vision 85.6%; MedXPertQA MM 61.3%

Long context:

- MRCR v2 8-needle 128k average: **66.4%** — top of the open-weight 30B class but mid-tier in the catalog.

### Normalized scores (1–100)

- **Tool use: 64/100.** τ²-Retail 86.4% and airline 75% are good; Terminal-Bench Hard 36% and AA Terminal-Bench 2.1 29.2% cap agentic credibility.
- **Reasoning: 72/100.** GPQA 85%, AIME 89.2%, MMLU Pro 85.2% are credible for dense 30B; HLE 19.5% reflects the ~25-point gap to hosted frontier.
- **Context window: 60/100.** 256K is half of the current frontier window class.
- **Multimodal: 80/100.** Text + image + video in; MMMU Pro 76.9% ranks top-quartile in its class.
- **Coding: 68/100.** LCB v6 80% and Codeforces 2150 place it well above the 26B A4B tier, but no SWE-bench Verified row and AA Terminal 2.1 29.2% temper the agent-coding story.
- **Cost efficiency: 96/100.** Apache 2.0 open weights with a free tier on AI Studio and OpenRouter paid at $0.09/$0.34 — the only catalog entry fully owner-price-free.
- **Overall Score: 69/100.** Half-up mean of the five non-cost dims: (64+72+60+80+68)/5 = 68.8 → 69.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google AI model card, Gemma 4 technical report, Artificial Analysis gemma-4 release page, HokAI writeup, ModelCap, jasonfutrill summary, aimodelsnavi); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
