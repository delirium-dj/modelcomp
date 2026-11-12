# GPT-5.4 — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.4
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (default snapshot `gpt-5.4-2026-03-05`)
- **Short description:** OpenAI's **March 5, 2026** flagship "for complex professional work" (docs also call it "a more affordable model for coding and professional work") — launched alongside GPT-5.4 Pro, unifying the Codex and GPT lines (Requesty). 1M-class context with computer use and the full Responses toolset. **Deprecated** per AA — GPT-5.5 (Apr 23, 2026) succeeded it. AA tracks the **xhigh** variant; the API default `reasoning.effort` is **none** (low/medium/high/xhigh opt-in) — variant gap labelled.
- **Provider / access:** OpenAI API (Chat Completions + Responses + Batch; no fine-tuning, no Realtime/Live), ChatGPT (GPT-5.4 Thinking in Plus/Teams/Pro/Enterprise per launch coverage), Amazon Bedrock (`openai.gpt-5.4`), OpenRouter/Requesty; 3 API providers per AA. Proprietary.
- **Release / knowledge:** Released 2026-03-05; **knowledge cutoff Aug 31, 2025** (official docs + AA). Rate limits: Build 5K RPM / 1M TPM, Launch 10K / 4M, Grow 15K / 40M; separate long-context (>272K) tiers.
- **IDs:** `gpt-5.4` / `gpt-5.4-2026-03-05`; siblings GPT-5.4 Pro (parallel test-time compute, $30/$180 — separate model), GPT-5.4 mini ($0.75/$4.50), GPT-5.4 nano; predecessor GPT-5.2 ($1.75/$14); successor GPT-5.5.
- **Context window:** **1,050,000 tokens, 128,000 max output** (official). **>272K input prompts priced 2× input / 1.5× output for the full session** (standard/batch/flex); regional processing +10%. AA-LCR **82.0** (strong retrieval); no MRCR row carried.
- **Modalities:** **Text + image in, text out** (official + AA). MMMU-Pro 81.2 vendor / 78.4 AA / 82.1 w-Python; CharXiv 82.8, ScreenSpot-Pro 85.4, ZeroBench **41.0**, ERQA 65.4. No video/audio.
- **Pricing (as of 2026-11-12):** **$2.50 in / $0.25 cached / $15 out per 1M** (official docs; AA agrees, 90% cache discount; blended $2.17 at 7:2:1). Performance (xhigh): **68 tok/s**, TTFT **111.23s** — slow first answer (class median 13.48s). Deprecated status means 18h benchmark cadence.
- **Architecture:** Proprietary, undisclosed. Full Responses toolset: function calling, web_search, file_search, tool_search, image_generation, code_interpreter, **hosted_shell, apply_patch, skills, computer_use**, mcp; streaming, structured outputs, prompt caching.

### Raw benchmarks found

Vendor-reported (GPT-5.4 launch blog — 403, rows via BenchLM attribution; GPT-5.5 blog comparison table; mini/nano blog; Meta Muse Spark comparison chart — each labelled):

- Agent: TB2.0 **75.1**, BrowseComp **82.7**, OSWorld-Verified **75.0**, Toolathlon **54.6**, τ²-bench **98.9** (mini/nano blog), MCP Atlas **70.6** (5.5 blog), CyberGym **79.0** (5.5 blog), LifeVal 73.0
- Coding: SWE-bench Pro **57.7**, LCB Pro **87.5** (Meta chart)
- Reasoning/knowledge: GPQA **92.8**, HLE **39.8** no-tools (launch) / **52.1** w-tools (5.5 blog), HealthBench Hard 40.1, MedXpertQA text 59.6 (Meta chart), BioBasicsBench 33.2
- Vision: MMMU-Pro **81.2** / 82.1 w-Python, CharXiv 82.8, ScreenSpot-Pro 85.4, ZeroBench 41.0, ERQA 65.4, SimpleVQA 61.1, MedXpertQA MM 77.1, OfficeQA Pro 53.2 (Meta chart / 5.5 blog)

Independent runs:

- AA (**xhigh**, deprecated → index live **N/A**; BenchLM carries historical **39.0**, version unstated): AA-GPQA **92.0**, AA-HLE **43.7**, AA-LCR **82.0**, CritPt **23.4**, AA-Omniscience net **5.8** (accuracy 50.8, hallucination **91.7**), AA-MMMU-Pro 78.4, IFBench 73.9, GDPval-AA **1,307 Elo / 37.3% normalized**, Tau3 Banking 39.6, terminalBenchHard 57.6, APEX-Agents-AA 33.3, AA Coding Index 71.0; 68 tok/s, TTFT 111.23s
- Epoch: FrontierMath v2 T1-3 **78.596** / T4 **49.000** — genuinely strong hard math
- ARC Prize: ARC-1 **93.67** (Xhigh verified), ARC-2 **74.0**, ARC-3 **0.2** (different benchmarks, never conflated)
- SEAL: SWE-bench Pro xHigh **59.1**; Other: Claw-Eval 60.3, Gert Labs 64.89, React Native Evals 85.3, Vibe Code Bench 67.42, JobBench 38.9, ResearchClawBench 15.3, ExploitGym 6.0, ApprenticeBench 11, PostTrainBench 19.0, HealthBench Professional 48.1, ParseBench 61.72, Design Arena 1,217, MazeBench 0; BenchLM aggregate **66.09/100, #28 of 1026** (71/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 83/100.** BrowseComp 82.7, OSWorld-V 75.0, τ² 98.9, MCP Atlas 70.6, full computer_use/hosted_shell toolset; capped by Toolathlon **54.6**, GDPval-AA **1,307** (37.3% normalized — weak vs 1,600+ peers), APEX 33.3, JobBench 38.9, ApprenticeBench 11, MazeBench 0.
- **Reasoning: 84/100.** GPQA 92.8 (AA 92.0 confirms), FrontierMath v2 **78.6/49.0** (Epoch — top-tier hard math), ARC-2 74.0, HLE 52.1 w-tools; capped by HLE 39.8 no-tools, AA-HLE 43.7, CritPt 23.4, and Omniscience hallucination **91.7%** (net 5.8 — severe knowledge-reliability weakness).
- **Context window: 87/100.** 1.05M with 128K output and AA-LCR **82.0** (strong retrieval); deducted for the **>272K 2×/1.5× session surcharge**, no MRCR depth row, and deprecated status.
- **Multimodal: 80/100.** Image input with MMMU-Pro 81.2 (78.4 AA), CharXiv 82.8, ScreenSpot-Pro 85.4, ZeroBench **41.0** (notably strong); capped by no video/audio, SimpleVQA 61.1, ERQA 65.4, Design Arena 1,217, and the vendor-vs-AA MMMU gap.
- **Coding: 82/100.** SWE-Pro 57.7 (SEAL xHigh 59.1 corroborates), TB2.0 75.1, LCB Pro 87.5, CyberGym 79.0, Vibe Code Bench 67.42, React Native 85.3; capped by PostTrainBench 19.0, terminalBenchHard 57.6, and no SWE-V/TB2.1/TB4/FrontierCode rows — a generation behind GPT-5.5's TB2.0 82.7.
- **Cost efficiency: 70/100.** $2.50/$15 with 90% cache ($0.25) undercut GPT-5.5's $5/$30 at similar quality; deducted for the >272K surcharge, +10% regional uplift, **111.23s TTFT** (xhigh), deprecated status, and no $/task measurement (index N/A).
- **Overall Score: 83.2/100.** Mean of the five quality dims (83+84+87+80+82)/5 = 83.2. Best-fit (historical): Mar–Apr 2026 professional-work agents, computer-use workflows, and hard-math reasoning at half of GPT-5.5's price; today prefer GPT-5.5+ — GPT-5.4 remains notable for FrontierMath v2 T4 49.0, ZeroBench 41.0, and τ² 98.9, but the 91.7% hallucination rate and weak GDPval argue for retrieval-grounded use only.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI's official developers.openai.com model page fetched in full — specs/pricing/tools/snapshots/rate limits; Artificial Analysis' live xhigh page; BenchLM's 71-row sourced profile with per-row attribution; launch-blog title/date and Requesty/OpenRouter/llm-stats rate cards via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **variant gap** — API default effort `none` vs AA's xhigh tracking; AA index live N/A (deprecated) vs 39.0 historical (version unstated — never compared with v5.0.1 indices); GPQA 92.8 (vendor) vs 92.0 (AA); MMMU-Pro 81.2 (launch) vs 78.4 (AA) vs 82.1 w-Python (5.5 blog); HLE 39.8 no-tools (launch) vs 52.1 w-tools (5.5 blog) vs 43.7 AA-HLE — different harnesses; SWE-Pro 57.7 (vendor) vs 59.1 (SEAL xHigh); ARC-1 93.67 ≠ ARC-2 74.0 ≠ ARC-3 0.2 (different benchmarks); TB2.0 ≠ TB2.1 ≠ terminalBenchHard. Launch blog openai.com/index/introducing-gpt-5-4/ returns 403 — its rows captured via BenchLM's source attribution; Meta-chart rows are Meta-run comparisons, not OpenAI-reported. Identity: GPT-5.4 ≠ GPT-5.4 Pro ≠ mini ≠ nano ≠ GPT-5.2 ≠ GPT-5.5; snapshot gpt-5.4-2026-03-05.
- Reference URLs:
  - [GPT-5.4 — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [Introducing GPT-5.4 — OpenAI (403; rows via BenchLM)](https://openai.com/index/introducing-gpt-5-4/)
  - [GPT-5.4 (Xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4)
  - [GPT-5.4 benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-4)
  - [OpenAI gpt-5.4 API Pricing & Cost — Requesty](https://www.requesty.ai/models/openai/gpt-5.4)
  - [GPT-5.4 — OpenRouter](https://openrouter.ai/openai/gpt-5.4)
  - [ARC Prize leaderboard (GPT-5.4 Xhigh verified)](https://arcprize.org/leaderboard)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.