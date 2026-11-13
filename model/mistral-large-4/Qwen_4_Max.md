# Mistral Large 4 — findings by Qwen 4 Max

- Source: Mistral / mistral-large-4
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: Mistral Large 4 (nickname "Le Chonk")
- Short description: Mistral's flagship open-weight, natively multimodal MoE model aimed at agentic coding, cybersecurity, and sovereign European enterprise work; previewed Oct 6 2026, weights released Oct 29 2026 after three more weeks of RL.
- Provider/access: Mistral API + Mistral Studio, OpenRouter (`mistralai/mistral-large-4-0`), Hugging Face weights (repo gated to my fetch), Microsoft Foundry (first cloud provider), NVIDIA NIM / NeMo AutoModel / TensorRT-LLM, self-host via vLLM or SGLang; Mistral Forge customization. AA tracks 1 API provider (Mistral).
- Release/knowledge: public preview October 6, 2026; open-weight release October 29, 2026 (AA FAQ; llm-stats tracks the Oct 6 preview date). Knowledge cutoff not disclosed in fetched sources.
- IDs: API `mistral-large-4`; OpenRouter `mistralai/mistral-large-4-0`.
- Context window: 1M tokens (AA, BenchLM, llm-stats agree). Max output tokens not disclosed (llm-stats lists "—").
- Modalities: text + image input, text output (AA). Vendor demos emphasize visual grounding: gigapixel satellite imagery, engineering drawings, dense scenes, charts, PDFs. No audio/video input evidence.
- Pricing (as of 2026-11-13): $0.70 input / $0.07 cached input / $2.10 output per 1M tokens on Mistral API since Oct 29 (90% cache discount; blended $0.40 at 7:2:1). History: preview list $1.36/$0.14/$4.18 with Oct 6 preview sale $0.68/$0.07/$2.09 (BenchLM pricing note); OpenCode Zen carriage lists $1.36/$4.18 at 50% off → $0.68/$2.09, cache $0.07. AA measures $2.06 per Intelligence Index task (preview-era AA article cited $1.13/task — different snapshot and sale price).
- Architecture: MoE, ~1T total parameters per vendor ("1 trillion"), 1.1T per AA/llm-stats (llm-stats FAQ says 1050B — minor conflict, labelled), 52B active. Trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's European datacenters; 160+ training languages incl. all official EU languages; SFT + large-scale asynchronous RL (~33B tokens/day, ~16B trainable completions). Three reasoning modes: Low (replaces None), Medium, High (default). License: **Mistral Ecosystem Open-Weight License** (modified MIT; free to use/modify/fine-tune/commercialize except Model-as-a-Service operators need a separate commercial license) per the OSS post's explicit text and AA. Conflict: both Mistral post footers carry an "Apache 2.0" badge and llm-stats adds a stray "Non-commercial" tag — the explicit license paragraph + AA classification win; badge treated as stale.

### Raw benchmarks found

Vendor-reported, preview checkpoint (Oct 6 post; harness = Mistral self-run unless noted):
- Coding/agentic: DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Terminal-Bench 4.0 28.3% (self-reported), AA Coding Agent Index 49.8% (claimed ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max), AutomationBench 59.9%, AA-Briefcase 1,393 Elo.
- Cyber: Cybench 93%, vulnerability reproduce-and-patch test 82% (claimed highest of any model), AA Cyber Index top-5 globally (claim), B3 attack resistance 93.3%, KORA 1.691/2, highest OSS malicious-cyber refusal rate (claim).
- Multimodal: Dense 200 grounding 42% vs GPT-6-Astra 41% (vendor chart); ChartQA Pro and GDP.pdf charts shown without extractable numbers.
- Human eval (Surge AI blind, 1–5): coding 3.74, 2nd of 5 behind Claude Opus 5 (4.22), ahead of Kimi K3 (3.59), GLM-5.3 (3.60), GLM-5.2 (3.40). Internal expert eval: preferred over GLM-5.3 in CAD and STEM.
- Unquantified claims: SciCode-Verified state-of-the-art among open weights; Harvey Legal Agent best open model and exceeds GPT-6-Astra (vals.ai run, numbers in images).

Vendor-reported, open-weight checkpoint (Oct 29 post; three additional weeks of RL):
- FrontierCode 2.0 (Cognition private) 19.7% — leads open weights; chart peers: DeepSeek V4.1 Flash 19.3, GLM-5.3 17.8, Kimi K3 17.3, GLM-5.3 Flash 14.2, Beam 1.0 2.9.
- Terminal-Bench 4.0 41% (+13pp vs preview, −30% output tokens; vendor self-reported; chart: GLM-5.3 40, DS V4.1 Flash 1017 31, Kimi K3 21, Muse Spark Open 6, Beam 1.0 3). **Harness conflict: AA-run TB 4.0 is 24.7% (BenchLM carriage) — never averaged with the vendor 41%.**
- AA Coding Agent Index 48% — tied with GLM-5.3 using 47% fewer tokens per task (vendor claim).
- AA Cyber Index 51% (chart: DS V4.1 Flash 1017 57, MiMo-V2.6-Pro 56, GLM-5.3 Flash 50, Kimi K3 41, GLM-5.3 36, Beam 1.0 34).
- Finch (FinWorkBench) 73.3% (preview 67.4) — 2nd open model behind Kimi K3 77.3; GLM-5.3 65.1, DS V4 Pro 0813 67.4.
- BrowseComp 84.5% (from 75.0% SFT checkpoint; GLM-5.3 82.5, DS V4.1 Flash 1017 83.4, Kimi K3 91.2).
- B3 Agent Security 97.1% (preview 93.3); malicious-cyber refusal 96.6% (preview ~95).
- Surge Code blind pairwise win rates: vs GLM-5.3 64/36, vs Kimi K3 64/36, vs DS V4.1 Flash 56/44, vs Claude Opus 5.5 22/78.

Independent runs (Artificial Analysis, live page Nov 13; index v5.0.1; eval numbers via BenchLM carriages where the AA page lists names only):
- Intelligence Index 26 (BenchLM carriage 26.1), #13/28 open-weight large class, median 24.
- GDPval-AA normalized 46.1%, AA-Briefcase 1,348 Elo, AutomationBench-AA 57.8%, TB 4.0-AA 24.7%, GDP.pdf 17.6%, AA Cyber Index 50.9%, CWE-Bench-AA 58.3%, DeepsecBench-AA 15.0%, CyberGym-E2E-AA 79.4%, MKA 35.1%, CritPt 10.0%, MLCR-AA 17.8%, Omniscience +5.1 (accuracy 26.0%, hallucination 28.2%).
- Performance/cost: 111 tok/s, TTFT 37.97s, 12.3 min/task (class median 14.4), 107M index output tokens (median 106M), $2.06/task, cost rank #21/27 in class.
- Other independents (via BenchLM): Vals Finance Agent v2 54.7%, Vals Vibe Code Bench 78.40%, Collinear CWE-bench 45.6%, Ulam STEMBench 2.50, Design Arena Website 1253 (OpenRouter carriage). BenchLM overall 52.11/100, #84 of 1033.
- Not surfaced anywhere fetched: GPQA, HLE, AIME/HMMT, MMMU-Pro, CharXiv, LCR, SWE-bench Verified/Pro, max-output cap, knowledge cutoff. HF model card gated (401).

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 84.5%, AutomationBench-AA 57.8%, Briefcase 1,348, Vals Finance Agent v2 54.7%, Finch 73.3% — strong agentic suite; no MCP/Toolathlon/OSWorld evidence and GDPval normalized 46.1% trails DS V4 Pro's 54.5%.
- **Reasoning: 79/100.** AA index 26 above the open-large median (24) with low hallucination (Omni +5.1), but CritPt 10.0% and STEMBench 2.50 are weak, and no GPQA/HLE/competition-math numbers are public; vendor STEM/SciCode-Verified claims are unquantified or image-only.
- **Context window: 84/100.** 1M tokens confirmed by three trackers with no long-context surcharge, but MLCR-AA 17.8% shows weak long-context retrieval (Ember-class), no LCR score surfaced, and max output is undisclosed — below the 86–87 anchors that pair 1M with proven large output caps.
- **Multimodal: 78/100.** Native image input with a concrete grounding win (Dense 200 42% vs GPT-6-Astra 41%, vendor) and agentic document/gigapixel demos, but GDP.pdf 17.6% is modest and no MMMU-Pro/CharXiv/video/audio evidence exists — agentic-vision strength without a static vision suite.
- **Coding: 84/100.** Open-weight leader on Cognition FrontierCode 2.0 (19.7%), Vals Vibe Code Bench 78.40%, Coding Agent Index 48% tied with GLM-5.3 at 47% fewer tokens, Surge blind evals behind only Opus 5/5.5; tempered by the vendor TB 4.0 41% vs AA-run 24.7% harness conflict and preview-only DeepSWE 61.7%.
- **Cost efficiency: 81/100.** $0.70/$2.10 with 90% cache discount is mid-priced per token and token-efficiency gains are real (−47% vs GLM-5.3, −30% TB output), but $2.06/task sits in the worst AA cost quartile for its class (~3.4× DS V4.1 Flash 1017's $0.60/task at a higher index), and the MaaS license condition adds friction; preview-era $1.13/task complaint no longer applies to the OSS price.
- **Overall Score: 81.4/100.** Mean of the five quality dimensions (82+79+84+78+84)/5 = 81.4; cost excluded per methodology. An open-weight coding/cyber specialist with sovereign deployment appeal, held back by thin public reasoning/vision numbers, weak MLCR, and high cost per task.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (vendor launch + OSS posts, Artificial Analysis live page, BenchLM aggregator with Who-ran-it carriages, llm-stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: preview vs Oct 29 OSS checkpoints (TB4 28.3→41 vendor, Finch 67.4→73.3, B3 93.3→97.1, Briefcase 1393→1348 AA, Coding Index 49.8→48); vendor TB4.0 41% vs AA-run 24.7%; license footer "Apache 2.0" badge vs explicit Mistral Ecosystem Open-Weight text (+AA) vs llm-stats "Non-commercial" tag; ~1T vendor vs 1.1T AA vs 1050B llm-stats FAQ; Oct 6 vs Oct 29 release dates; preview $1.13/task vs current $2.06/task. HF model card returned 401 (gated) and is excluded; image-only vendor charts (ChartQA Pro, SciCode-Verified, Harvey) left unquantified.
- Reference URLs:
  - [Introducing Mistral Large 4 (preview, Oct 6 2026) — Mistral](https://mistral.ai/news/mistral-large-4/)
  - [Mistral Large 4 (Le Chonk) is now open weight (Oct 29 2026) — Mistral](https://mistral.ai/news/mistral-large-4-oss/)
  - [Mistral Large 4 (High) — Artificial Analysis](https://artificialanalysis.ai/models/mistral-large-4)
  - [Mistral Large 4 — BenchLM](https://benchlm.ai/models/mistral-large-4)
  - [Mistral Large 4 — LLM Stats](https://llm-stats.com/models/mistral-large-4)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.