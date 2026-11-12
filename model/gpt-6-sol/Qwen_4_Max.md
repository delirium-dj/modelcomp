# GPT-6 Sol — findings by Qwen 4 Max

- Source: OpenAI/gpt-6-sol
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September 22, 2026 middle tier of the GPT-6 family (Astra flagship above, Luna below) — "built to power complex coding and agentic workflows." Rolled out in ChatGPT Work, Codex, and the API at **half the price of GPT-5.6 Sol** ($2/$10 vs $4/$20). **Deprecated** per AA — GPT-6.1 Sol (Sept 29 DevDay) succeeded it.
- **Provider / access:** OpenAI API (`gpt-6-sol`), ChatGPT Work, Codex, Amazon Bedrock (`openai.gpt-6-sol`), Microsoft Azure; AA lists 7 API providers. Responses API (built-in tools + function calling) and Chat Completions (function calling only at effort `none`), Batch supported; no Realtime/Live/Assistants/fine-tuning. EU data residency on Standard/Flex/Batch. Proprietary. AA tracks **Max** (6 variants: none/low/medium-default/high/xhigh/max).
- **Release / knowledge:** Released 2026-09-22 (AA FAQ; Astra system-card changelog added the Sol/Luna appendix the same day). **Knowledge cutoff Apr 20, 2026** (official docs). Safety: Gray Swan IPI ASR@15 **10.1** (Google Argon launch chart); ExploitGym 22.1, CyberGym-E2E-AA 0.0 (Astra card / AA).
- **IDs:** `gpt-6-sol` (single snapshot); siblings GPT-6 Astra, GPT-6 Luna, GPT-6 Cyber, GPT-6.1 Sol, GPT-6.1 Terra; predecessor GPT-5.6 Sol.
- **Context window:** **1,050,000 tokens, 922,000 max input, 128,000 max output** (official docs; AA rounds to 1M). AA-LCR **83.7**, MLCR-AA 33.9. **>272K input prompts: 2× input/cache and 1.5× output for the full request**; regional processing +10%.
- **Modalities:** **Text and image in; text out** (official docs + AA). AA-MMMU-Pro **82.9**, ExtractBench **94.57**, ParseBench 68.85. No audio/video.
- **Pricing (as of 2026-11-12):** **$2 in / $0.20 cached / $2.50 cache-write / $10 out per 1M** (official docs; 90% cache discount). Batch/Flex 50%, Fast mode 2×. AA: **$2.47 per index task** (lowest among its own variants), 7.6 min/task, **118 tok/s**, TTFT 56.0s (Max), 65.1M index tokens (concise); non-reasoning variant TTFT 1.58s.
- **Architecture:** Proprietary, size undisclosed; reasoning model, effort `none`→`max` (medium default); full Responses toolset: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search.

### Raw benchmarks found

Vendor-reported (OpenAI "Introducing GPT-6 Sol and Luna" launch post — page 403s, rows via BenchLM's source attribution; GPT-6 Astra system card appendix):

- Agent/tool: Agents' Last Exam **56.4**, AutomationBench **33.2**, OSWorld 2.0 **60.5**, ExploitGym **22.1** (Astra card)
- Coding: DeepSWE **68.8**
- Health (Astra card): HealthBench raw 47.1 / length-adjusted 53.2, Professional **60.8** (raw 59.5), Hard **30.1**
- Cross-vendor: GDPval-AA **1,487 Elo** (Anthropic Opus 5.5 system-card table); Gray Swan IPI **10.1** (Google Argon chart); Harvey LAB-AA v1.1 **3.6** (Anthropic Fable 5.2/Mythos 5.2 card)

Independent runs:

- AA (Max): live Intelligence Index **44** (#31/74; page methodology v5.0.1) — BenchLM carries historical **47.6** (version unstated; different snapshot, never averaged, never cross-version compared); AA-HLE **47.9**, AA-Omniscience **27.1** (accuracy 54.5, hallucination 60.1), AA-LCR **83.7**, CritPt **30.9**, GDPval-AA normalized **50.4%**, AA-SciCode 57.6, AA-MMMU-Pro 82.9, ITBench 49.4, AA Cyber 36.8, CWE-Bench-AA 64.2, DeepsecBench 46.3, CyberGym-E2E **0.0**, MLCR 33.9
- ARC Prize (semi-private): ARC-AGI-1 **95.5**, ARC-AGI-2 **89.6**, ARC-AGI-3 **4.6** (Provider Adapter **23.03** — different harness)
- Epoch AI: FrontierMath v2 **89.825** (T1-3) / **90.000** (Tier 4 — elite)
- Other: TB4.1 **50.3**, FrontierCode 2.0 **34.3** (Cognition), CWE-bench v1 52.0, Hermes Index 44.1 / Hermes Bench 73.5 (Nous), MazeBench 7, ExtractBench 94.57 / ParseBench 68.85 (LlamaIndex); BenchLM aggregate **77.65/100, #12 of 1026** (56/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 87/100.** ALE 56.4, OSWorld 2.0 60.5, GDPval normalized **50.4%** (above Sonnet 5's 48.2% and Terra's 47.6%), ITBench 49.4, Hermes Bench 73.5, full computer_use/hosted_shell/skills toolset; capped by AutomationBench **33.2** (weak vs peers' 54–73), CyberGym-E2E 0.0, Harvey LAB 3.6, MazeBench 7, and no BrowseComp/Toolathlon rows carried.
- **Reasoning: 88/100.** FrontierMath v2 **89.8/90.0** (Tier-4 90% is elite — near 6.1 Sol/Fable 5.2 class), CritPt **30.9**, ARC-2 89.6 / ARC-1 95.5, AA-HLE 47.9, HealthBench Pro 60.8; capped by ARC-3 **4.6** (23.03 with adapter), Omniscience hallucination 60.1%, and no GPQA/vendor-HLE rows carried (launch post inaccessible).
- **Context window: 88/100.** 1.05M (922K input / 128K output), AA-LCR **83.7** (strong), MLCR 33.9 (well above MiMo's 12.8), 90% cache discount; deducted for the >272K 2×/1.5× surcharge (Sol-class standard) and no MRCR deep-retrieval row.
- **Multimodal: 79/100.** Text + image in only; MMMU-Pro **82.9**, ExtractBench **94.57** (elite document extraction), ParseBench 68.85; capped by no audio/video input and no CharXiv/vendor vision rows carried.
- **Coding: 86/100.** TB4.1 **50.3** (well above GPT-5.6 Sol's 38.5 and Sonnet 5's 12.1), DeepSWE **68.8**, FrontierCode 2.0 34.3, SciCode 57.6, apply_patch/hosted_shell/skills tooling; capped by DeepSWE below 5.6 Sol's 72.7, FrontierCode below 6.1 Sol's 39.0, and no SWE-V/SWE-Pro/TB2.1 rows carried.
- **Cost efficiency: 82/100.** $2/$10 — **half of GPT-5.6 Sol's $4/$20** — with 90% cache, Batch/Flex 50%, $2.47/task (cheapest of its own variants), 7.6 min/task and concise 65.1M tokens; deducted for the >272K surcharge, Fast-mode 2×, deprecated status (6.1 Sol succeeded it at the same price), and 56s Max TTFT.
- **Overall Score: 85.6/100.** Mean of the five quality dims (87+88+88+79+86)/5 = 85.6. Best-fit (historical): late-Sept 2026 cost-conscious agentic coding and knowledge work — GPT-5.6-Sol-class capability at half price with elite math (FM T4 90) and strong next-gen terminal use; today prefer GPT-6.1 Sol (index 55 vs 44, ARC-3 52.7 vs 4.6) — GPT-6 Sol remains notable for the best FrontierMath Tier-4 result outside the absolute frontier and the lowest $/task in its variant family.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI's official model documentation fetched in full, GPT-6 Astra system-card changelog fetched, Artificial Analysis' live Max page and release-comparison page fetched in full, launch-post and cross-vendor rows via BenchLM's source attribution, launch coverage via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA Intelligence Index live **44** (current page, v5.0.1 methodology) vs BenchLM-carried **47.6** (version unstated) — different snapshots, never cross-version compared; context 1,050,000 (official docs) vs 1M (AA rounded) — precision difference; ARC-3 4.6 vs 23.03 (Provider Adapter) — different harnesses; GDPval-AA 1,487 Elo (Anthropic card) vs 50.4% normalized (AA) — different metrics; HealthBench rows come from the Astra card's Sol appendix (Sept 22 revision corrected Astra's own HealthBench misconfiguration — Sol rows are the post-revision appendix values). Launch post openai.com/index/introducing-gpt-6-sol-and-luna/ returns 403 — its rows are cited via BenchLM attribution, not fetched directly. Identity: GPT-6 Sol ≠ GPT-5.6 Sol ≠ GPT-6.1 Sol ≠ GPT-6 Astra ≠ GPT-6 Luna; Max is an effort variant, not a separate model.
- Reference URLs:
  - [GPT-6 Sol model documentation — OpenAI](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [Introducing GPT-6 Sol and Luna — OpenAI (403; rows via BenchLM)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [GPT-6 Astra System Card (Sol/Luna appendix) — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-astra)
  - [GPT-6 Sol (Max) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-sol)
  - [GPT-6 Sol release comparison — Artificial Analysis](https://artificialanalysis.ai/models/releases/gpt-6-sol)
  - [GPT-6 Sol benchmark profile — BenchLM](https://benchlm.ai/models/gpt-6-sol)
  - [GPT-6 Sol semi-private results — ARC Prize](https://arcprize.org/results/openai-gpt-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.