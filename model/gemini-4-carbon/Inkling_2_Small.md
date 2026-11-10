# Gemini 4 Carbon — findings by Inkling 2 Small

- Source: Google DeepMind (`gemini-4-carbon`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's October 2026 frontier reasoning model, pitched as its strongest model for cybersecurity work and long-horizon agentic workflows (knowledge work, software engineering, scientific reasoning). Rolled out first to a subset of cyber defenders, then trusted partners via the Fairwind Program, before wider availability. Not a `-cyber`-suffixed specialist SKU — the general Carbon flagship.
- **Provider / access:** Google API / Google AI Studio and the Gemini app ecosystem; Artificial Analysis tracks Google's API endpoint (Chat Completions-style). Limited-access rollout at launch (Fairwind Program).
- **Release / knowledge:** Released October 2026 (Artificial Analysis: 2026-10-28); knowledge cutoff not publicly stated.
- **IDs:** `gemini-4-carbon` (Google API); "High"/"Low" reasoning effort variants are serving-tier names of the same model, never separate models.
- **Context window:** 1,000,000 tokens (source: Artificial Analysis model page + BenchLM model card). Max output not publicly stated.
- **Modalities:** text, image, speech, and video in; text out; reasoning (thinking) yes; tool calls yes (agentic); JSON mode not confirmed publicly.
- **Pricing (as of 2026-11-10):** $4.00 / 1M input, $20.00 / 1M output, 95% cache discount (~$0.20 cached input) — Artificial Analysis ("somewhat expensive" vs $2/$10 medians). ~$7.76 per Intelligence Index task.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA Terminal-Bench 4.0: **65.2%** (AA: artificial-analysis-terminalbench-4-0 / BenchLM, via Google evaluation methodology)
- Terminal-Bench (AA, BenchLM mirror): **65.2%**
- AA AutomationBench: **77.8%** (Artificial Analysis automationbench-aa leaderboard)
- AutomationBench (Google-reported): **53.9%** (Google DeepMind Gemini 4 Carbon evaluation methodology)
- OSWorld 2.1 Offline: **81.5%** (Google evaluation methodology)
- CWE-bench v1: **71.0%** (Collinear CWE-bench leaderboard)
- ExploitGym: **53.5%** (Google evaluation methodology)
- AA-Briefcase Elo: **1611** (Artificial Analysis aa-briefcase leaderboard)
- AA-Briefcase (rubric): **61.8%** (BenchLM, cited against Anthropic Claude Fable/Mythos 5.2 launch post)
- GDPval-AA: **1733** (Artificial Analysis gdpval-aa leaderboard)
- GDP.pdf: **28.4%** (Artificial Analysis gdp-pdf leaderboard)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **60** (AA v5.0.1 — #4 of 74 in class per AA; BenchLM #2 of 1020 at 88.14/100 overall, partial coverage)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis aa-lcr leaderboard)
- AA-Omniscience Index: **53.5%** (Artificial Analysis omniscience leaderboard)
- AA-Omniscience Accuracy: **58.3%** (Artificial Analysis model page)
- AA-Omniscience Hallucination Rate: **11.4%** (Artificial Analysis model page)
- GraphWalks BFS 256K–1M: **96.2%** (Google evaluation methodology)
- CritPt / HLE: no verified public score found (CritPt v2 and HLE-Diamond are inside AA Index v5.0.1 but not published per-model)

Coding:

- FrontierSWE v2: **61.2%** (Proximal FrontierSWE v2 leaderboard)
- FrontierCode 2.0: **40.0%** (Cognition FrontierCode 2.0)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- GraphWalks BFS at 256K–1M: **96.2%**; AA-LCR: **79.3%** — long-context retrieval and reasoning at 1M are verified strengths.

Multimodal:

- Chartography (no tools): **72.5%** (Google evaluation methodology)
- Blueprint-Bench 2: **58.6%** (Google evaluation methodology)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1733, AA AutomationBench 77.8%, OSWorld 2.1 81.5%, AA-Briefcase Elo 1611 — frontier agentic/knowledge-work tool use; capped by ExploitGym 53.5% and a Google-reported AutomationBench (53.9%) that trails the AA-measured number.
- **Reasoning: 88/100.** AA Intelligence Index 60 (above-average for class, #4/74), AA-LCR 79.3%, GraphWalks 96.2%, Omniscience Accuracy 58.3% with only 11.4% hallucination; capped by missing public HLE/CritPt rows and a verbose 25.6 min/task profile.
- **Context window: 96/100.** 1M tokens, verified long-context retrieval (GraphWalks 256K–1M at 96.2%, AA-LCR 79.3%); capped only by undisclosed max output.
- **Multimodal: 85/100.** Text/image/speech/video in, text out; Chartography 72.5% and Blueprint-Bench 2 58.6% verify grounded visual reasoning; no audio/video output.
- **Coding: 78/100.** AA Terminal-Bench 4.0 65.2%, FrontierSWE v2 61.2%, CWE-bench 71.0%, FrontierCode 2.0 40.0%; agentic coding is solid but not best-in-class, and SWE-bench/LCB rows are unpublished.
- **Cost efficiency: 35/100.** $4.00/$20.00 per 1M with 95% cache discount — premium pricing; ~$7.76 per Intelligence Index task and very high verbosity (205M output tokens per index run) drag effective value.
- **Overall Score: 87/100.** (90 + 88 + 96 + 85 + 78) / 5 = 87.4 → 87. Best fit: frontier agentic knowledge-work and long-horizon engineering tasks where budget is secondary; not for cost-sensitive high-volume use.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (vendor blog, model-card/evaluation PDFs, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon — The Keyword (Google)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon is now available — Google DeepMind](https://deepmind.google/blog/gemini-4-carbon-is-now-available/)
  - [Gemini 4 Carbon — BenchLM](https://benchlm.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon (High) — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon Model Evaluation (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_4_carbon_model_evaluation.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
