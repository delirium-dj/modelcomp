# DeepSeek V4 Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek V4 Flash (`deepseek/deepseek-v4-flash`; checkpoints "Preview" 2026-04-24 and "0731" July 2026)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (predecessor of DeepSeek V4.1 Flash; the tracked `deepseek-v4-vision-exp` entry is a separate vision variant, not this model)
- **Short description:** DeepSeek's open-weights fast/cheap MoE reasoning model — MIT-licensed, 284B total / 13B active, 1M-token context, very high throughput — deliberately positioned below V4 Pro / V4.1 Flash on quality. **Folder note:** this folder was created empty by a discovery pass and has no `meta.json` yet (`pnpm sync` auto-scaffolds one); verified facts are the 1M context, ~393K max output, MIT open weights, and $0.15 / $0.60 per 1M from DeepSeek's own API. I did not create `meta.json`.
- **Provider / access:** DeepSeek first-party API plus ~18 providers (Artificial Analysis); OpenRouter slug `deepseek/deepseek-v4-flash`; weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash`). Reasoning (thinking) variants are tracked separately; tool calling supported.
- **Release / knowledge:** Preview checkpoint 2026-04-24 (BenchmarkList), "0731" revision July 2026 (Artificial Analysis), final listing 2026-09-10 (llm.ing); knowledge cutoff 2025-05 (llm.ing).
- **Context window:** 1,000,000 tokens; max output 393K tokens (llm.ing).
- **Modalities:** the OpenRouter listing shows text + image in / text out (llm.ing), while Artificial Analysis's 0731 checkpoint page is text-only — **image input is treated here as provisional and unverified**; text out; reasoning yes.
- **Pricing (as of 2026-09-24):** DeepSeek API $0.15 in / $0.60 out per 1M with $0.003 cache reads; OpenRouter routes from $0.03 in / $0.32 out per 1M; BenchmarkList records $0.09 / $0.18. Rates vary by host and quantization (fp8 / fp4).
- **Architecture:** Mixture of Experts, 284B total / 13B active parameters, MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- TAU3-Bench: **73.7** (rank 1 of 13); DABstep: **100.0%** (rank 1 of 24); ATRBench: **23.7%** (rank 1 of 8)
- Tau2-Bench Telecom: **95.6%** (95th percentile, rank 17 of 332); Tau3-Banking: **39.4%** (90th percentile, rank 18 of 174)
- GDPval-AA: **Elo 1188** (83rd percentile, rank 59 of 340); ClawProBench: **61.47** (83rd percentile); MultiChallenge: **63.5**; PlanBench-XL: **63.1%**; SmartHome-Bench: **85.2%**; PinchBench: **91.3**; ProfBench (Search): **57.0%**
- Toolathlon: **49.7%** (22nd percentile); AutomationBench: **18.1%**; ClawBench: **2.3%** (rank 5 of 5); Agents' Last Exam: **15.8%**; BrowseComp: **46.9**; ITBench-AA: **31.5%**; AA-Briefcase: **834**
- Artificial Analysis Agentic Index: **41.0** (llm.ing, September 2026); an older dated snapshot records **31.1**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34** (AA profile for the 0731 max-effort checkpoint, #10 of 115 in its open-weight class, class median 18); the llm.ing mirror records **34.3** (2026-09-20); an older dated snapshot records **40.3**
- LLM Index Score: **65.62** (#24 of 26 scored models) built from LiveBench categories — Mathematics **79.65**, Reasoning **70.58**, Coding **69.23**, Data Analysis **68.02**, Language **70.12**, IF **63.14**, Agentic Coding **37.63** (raw tasks: math_comp 97.1, AMPS_Hard 98.0, olympiad 86.5, spatial 96.0, code_generation 73.2)
- LMArena: **1423 Elo** thinking (2026-07-30) and **1432** (2026-09-13); Artificial Analysis Coding Index **69.1** (2026-07-31)
- GPQA Diamond / Humanity's Last Exam / AIME / AA-Omniscience: no verified public score found in the sources checked

Multimodal:

- No vision or audio benchmark rows exist for this model; the only modality signal is the OpenRouter text+image listing, which Artificial Analysis's checkpoint page contradicts (text-only)

Coding:

- LiveCodeBench: **90.9%** (94th percentile, rank 4 of 49); SciCode: **49.9%** (92nd percentile, rank 36 of 458); Arena AI WebDev Arena: **1580.88** (85th percentile)
- SWE-bench Verified: **72.4%** (29th percentile of the current field); SWE-bench Multilingual: **72.1**; NL2Repo: **39.4%**; DeepSWE 1.1: **0.5% pass@1** (pass@4 80.5%); ALE-Bench: **678.2**; Terminal-Bench Hard: **38.6%** (90th percentile); WebGameBench: **62.7%**; PerfCodeBench: **61.3%**; BLXBench: **48.3%**; VeriContest: **1.1%**

Long context:

- No AA-LCR / MRCR / RULER / needle-in-a-haystack retrieval percentage was located for the 1M window; the closest proxies are the 393K output ceiling and long-horizon document rows (AA-Briefcase 834, CorpFin-class agentic work)
- Speed and cost profile: **221.1 tokens/s** (#4 of 115 in class), **$0.22** per Artificial Analysis Intelligence-Index task, 240M output tokens on that index — "notably fast, however very verbose" (AA)

### Normalized scores (1–100)

- **Tool use: 84/100.** Rank-1 agentic results (TAU3-Bench 73.7, DABstep 100.0%, ATRBench 23.7%), Tau2-Bench Telecom 95.6% and GDPval-AA Elo 1188 put it in the top decile of agentic harnesses; capped by Toolathlon 49.7% (22nd percentile), AutomationBench 18.1% and ClawBench 2.3%.
- **Reasoning: 62/100.** An Artificial Analysis Intelligence Index of 34 (against an open-weight-class median of 18) plus Mathematics 79.65 in the LiveBench snapshot (math_comp 97.1, AMPS_Hard 98.0, olympiad 86.5) is strong for a Flash tier; capped by the absence of any GPQA/HLE/AIME row and by Agentic Coding 37.63.
- **Context window: 90/100.** A verified 1M-token window with a 393K output ceiling and open weights; capped below the top band because no retrieval measurement (AA-LCR / MRCR / RULER) exists to validate it.
- **Multimodal: 30/100.** Text out only; image input is claimed by the OpenRouter listing but contradicted by Artificial Analysis's checkpoint page and carries no measured vision score, so it sits just above the text-only floor.
- **Coding: 76/100.** LiveCodeBench 90.9% (94th percentile, rank 4 of 49), SciCode 49.9% (92nd percentile) and a 1580.88 WebDev Arena rating are excellent; SWE-bench Verified 72.4% (29th percentile of the field) and DeepSWE pass@1 0.5% cap it.
- **Cost efficiency: 90/100.** $0.15 / $0.60 per 1M first-party with $0.003 cache reads, routes from $0.03 / $0.32, and MIT-licensed weights for free self-hosting; not $0 on any hosted API.
- **Overall Score: 68.4/100.** Mean of the five quality dimensions (84 + 62 + 90 + 30 + 76) / 5 = 68.4; best fit is cheap, fast, long-context coding and tool-heavy agent work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — BenchmarkList third-party harness rows for agentic, coding and long-context benchmarks (TAU3, Tau2, DABstep, ATRBench, GDPval-AA, LiveCodeBench, SciCode, SWE-bench Verified/Multilingual, DeepSWE, ALE-Bench, AA-Briefcase); Artificial Analysis for the Intelligence Index, parameters (284B/13B), MIT license, context window, pricing, speed, verbosity and modality confirmation; llm.ing for the OpenRouter route pricing, max output, knowledge cutoff and LMArena ratings; llm-index.com for the LiveBench-based LLM Index breakdown. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
