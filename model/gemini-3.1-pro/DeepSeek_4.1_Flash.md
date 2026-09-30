# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (API ID `gemini-3.1-pro-preview`) — the first Gemini to use a `.1` increment instead of the usual `.5` mid-cycle step. Not an alias of Gemini 3 Pro; it is the next generation above Gemini 3.1 Flash / Flash-Lite.
- **Short description:** Google DeepMind's flagship reasoning model released 2026-02-19, built for agentic coding, full-codebase analysis and scientific problem-solving inside a 1M-token multimodal window; still classified preview-tier while Google validates performance at scale.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`, Google GenAI SDK for Python/JS) and Vertex AI (IAM, Zero Data Retention); tool calls and thinking supported. There is **no free API tier** — free access exists only inside the Google AI Studio web UI. No OpenCode Zen ID found.
- **Release / knowledge:** Released 2026-02-19 (preview). Knowledge cutoff: no verified public value found.
- **IDs:** `gemini-3.1-pro-preview` (Gemini API / Vertex AI). No Free ID exists, so cost is scored on paid pricing.
- **Context window:** 1,048,576 (1M) tokens in; max output 65,536, but the API default `maxOutputTokens` is only 8,192 and must be raised explicitly. Vendor/host page quotes ~8.4 hours of audio or a 900-page PDF per call.
- **Modalities:** text, image, audio, video and PDF in; text out; tool calls; native reasoning. PDFs are ingested as documents rather than images.
- **Pricing (as of 2026-09-20):** $2.00 in / $12.00 out per 1M for requests up to 200K input tokens; once a single request exceeds 200K the **whole request** reprices to $4.00 / $18.00 (no blended overflow rate). Context caching $0.20/1M; Batch API halves standard rates with 24h turnaround. Blended ≈$4.50/1M (HokAI). Paid only.
- **Architecture:** proprietary sparse Mixture-of-Experts Transformer; parameter count undisclosed (Google standard practice).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 68.5% (RankLLMs verified panel — its table labels it "Terminal-Bench 2.1", its narrative "Terminal Bench 2.0"; flagged as a source-label conflict)
- BrowseComp: **85.9%** (RankLLMs — web-research agents)
- OSWorld computer use: **48.8%** (RankLLMs)
- GDPval-AA v2: **1314 Elo** (RankLLMs blind human-eval code arena)
- Toolathlon: listed by RankLLMs with no figure → no verified public number found
- Tau3-Banking / Tau2-Bench / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (rank #5 of 45 peers, peer median 88.9%; HokAI describes it as the highest publicly verified PhD-level science result among frontier models at its check date)
- HLE with tools (pass@1): **51.6%** (RankLLMs)
- SimpleQA Verified: **75.6** (RankLLMs — top-ranked model on that benchmark)
- MMLU-Pro: **90.99% / 91.0%** (highest reported figure at launch per HokAI; 91.0% on the RankLLMs panel)
- ARC-AGI-2: **77.1%** (HokAI — more than double Gemini 3 Pro three months earlier)
- MATH-500: **58.6** (RankLLMs radar — mid-tier against the 70.6% frontier-top-10 average)
- Artificial Analysis Intelligence Index / LCR / MLCR / CritPt / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (HokAI rank #10 of 29 peers, median 78.5%; RankLLMs narrative agrees) — RankLLMs' radar table shows 74.2% for the same benchmark, so the two figures conflict and the 80.6% vendor-checked figure is preferred
- LiveCodeBench: **91.7%** (RankLLMs)
- HumanEval: **~92%** (HokAI — just behind GPT-5.4's 93.1%)
- DeepSWE / SciCode / AA-SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Multimodal:

- VideoMME: **87.2%** (HokAI — an eight-point lead over Claude Opus 4.5 in the frontier tier)
- MMMU / MMMU-Pro / image benchmarks: no verified public score found

Long context:

- MRCR at 1M: **76.3%** and CorpusQA at 1M: **53.8%** (RankLLMs) — the 1M window is documented and usable, but retrieval is far from lossless at full length, and Google acknowledges that instructions placed in the middle of a very long context are followed less reliably.

Composite panels:

- BenchLM: **70.1/100, #16 of 230** tracked models, 28 source-displayable rows, strongest category "Multimodal & Grounded" #12 (data as of 2026-09-18)
- RankLLMs: **52.4/100, #25 of 80** tracked models; speed 151 tps vs 129 tok/s measured by Artificial Analysis (HokAI).

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 68.5% and BrowseComp 85.9% put it above the mid band, but GDPval-AA 1314 Elo and OSWorld 48.8% are well short of the frontier refs (1750+, 60%+); no Tau3, MCP-Atlas or Claw-Eval evidence exists at all.
- **Reasoning: 92/100.** GPQA Diamond 94.3% (best verified result found anywhere in this scan), HLE-with-tools 51.6%, SimpleQA 75.6, MMLU-Pro ~91% and ARC-AGI-2 77.1%; capped below 95 by a mid-tier MATH-500 (58.6) and the absence of any AA Intelligence Index or LCR figure.
- **Context window: 95/100.** A verified 1M-token input with 65K output lands at the floor of the ≥1M band, but MRCR@1M 76.3% and CorpusQA@1M 53.8% are far from the ≥98% retrieval needed for 100, and the 8,192 default output cap plus the 200K repricing cliff are practical constraints.
- **Multimodal: 90/100.** Text, image, audio, video and PDF input with text output reaches the "+audio in" band; VideoMME 87.2% is the only published multimodal score, so it sits at the band floor rather than higher.
- **Coding: 88/100.** SWE-bench Verified 80.6% and LiveCodeBench 91.7% are frontier-adjacent, but Terminal-Bench 68.5% and the complete absence of DeepSWE, SciCode and Vibe Code Bench numbers keep it out of the 90+ tier.
- **Cost efficiency: 70/100.** $2/$12 sits between the ~88 anchor ($1.25/$4.25) and the ~60 anchor ($3/$15), improved by $0.20 cached input and a 50% Batch API discount but docked for whole-request repricing to $4/$18 above 200K and the absence of any free API tier.
- **Overall Score: 88/100.** (73 + 92 + 95 + 90 + 88) / 5 = 87.6 → **88**. Best fit: scientific/financial reasoning plus full-codebase or long-document analysis where the multimodal 1M window matters more than agent-harness tooling depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — HokAI vendor-page-checked review (checked 2026-07-16), RankLLMs verified panel (updated 2026-09-18) and BenchLM model record (data 2026-09-18); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
