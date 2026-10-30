# GPT-5.4 Mini — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.4 Mini
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's smaller GPT-5.4 variant, optimized for coding, computer use, and high-volume subagent workloads. It is a separately served Mini model, not the full GPT-5.4 endpoint.
- **Provider / access:** OpenAI API and Codex; also offered in ChatGPT Thinking access tiers/fallback. API supports both Chat Completions and Responses. OpenAI lists tool and computer-use support through Responses.
- **Release / knowledge:** Released **2026-03-17**; API model documentation gives a **2025-08-31** knowledge cutoff.
- **IDs:** API alias `gpt-5.4-mini`; dated snapshot `gpt-5.4-mini-2026-03-17`. Vals AI's exact-model evaluations use the dated route. The tracked `opencode/gpt-5.4-mini` is an OpenCode catalog wrapper ID, not OpenAI's API ID.
- **Context window:** **400,000 total tokens**, maximum **272,000 input** and **128,000 output**, per OpenAI's model documentation.
- **Modalities:** Text and image input; text output. Reasoning effort supports none, low, medium, high, and xhigh. Supported API features/tools include function calling, structured outputs, web search, file search, computer use, code interpreter, hosted shell, and skills. No direct audio or video input/output is listed.
- **Pricing (as of 2026-10-30):** **$0.75 input / $4.50 output per MTok**, **$0.075 cached input per MTok**. OpenAI lists a 10% uplift for regional-processing endpoints. ChatGPT access is not a free API tier.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed.
- **Benchmark configuration caveat:** OpenAI's launch tables report GPT-5.4 Mini at xhigh. Vals AI says its API runs used xhigh except for Terminal-Bench 2.0, which used high. Vals Terminal-Bench 2.1 used the Terminus 2 harness; its archived leaderboard does not state the reasoning effort. Keep these harnesses and benchmark versions distinct.
- **Third-party status caveat:** Artificial Analysis currently labels its GPT-5.4 Mini page deprecated and says it no longer has publicly available API results beyond a default 10K-input workload; its page also suggests considering a newer model. This is AA's measurement/reporting status, not an OpenAI shutdown notice: OpenAI's current model documentation still lists the API alias and snapshot.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI, launch comparison, xhigh).
- Terminal-Bench 2.1: **54.68%**, rank **51** on Vals AI's archived leaderboard (updated **2026-10-01**), Terminus 2 harness; listed cost **$0.29/test**, 283.96K tokens/test, 11m13s. Vals says 2.1 is superseded by Terminal-Bench 4.0 and is no longer run on new model releases.
- Terminal-Bench 4.0: **2.52% ± 1.01**, rank **53/58** on the current Vals model page. This is a different, newer benchmark version and is not directly comparable to Terminal-Bench 2.0 or 2.1.
- OSWorld-Verified: **72.1%**; MCP Atlas: **57.7%**; Toolathlon: **42.9%**; τ²-bench Telecom: **93.4%** (all OpenAI launch results, xhigh).
- BenchLM's 2026-10-29 rollup separately lists AA GDPval-AA **1,095 Elo** and **25.6%**, AA Agentic Index **19.6%**, and APEX-Agents-AA **28.2%**, with links to Artificial Analysis. Because the current AA model page says no publicly available API results and these rollup entries do not expose enough run details to reconcile the two GDPval figures, they are noted but not used for normalization.
- No verified Claw-Eval/ClawProBench score found.

Reasoning / knowledge:

- GPQA Diamond: **88.0%**; HLE **41.5% with tools** and **28.2% without tools** (OpenAI launch table, xhigh).
- OpenAI MRCR v2, 8-needle: **47.7%** at 64K–128K and **33.6%** at 128K–256K. Graphwalks: **76.3%** BFS and **71.5%** parents accuracy over 0K–128K (OpenAI launch table, xhigh).
- Vals AI's GPT-5.4 Mini API evaluation: GPQA Diamond **83.08% ± 2.46** and MMLU-Pro **84.55% ± 0.36**; OpenAI's GPQA value is a separate vendor-reported run, not the same measurement.
- BenchLM's 2026-10-29 AA-linked rollup lists GPQA Diamond **87.5%**, HLE **28.1%**, LCR **77.0%**, CritPt **10.0%**, and Intelligence Index **24.1**. AA's current page no longer exposes its API benchmark results, so these historical aggregator values are not used as current AA measurements.

Coding:

- SWE-Bench Pro (Public): **54.4%**; Terminal-Bench 2.0: **60.0%** (OpenAI launch table, xhigh).
- Vals AI, exact route `openai_gpt-5.4-mini-2026-03-17`: LiveCodeBench **81.47% ± 1.09**; Vibe Code Bench v1.1 **47.97% ± 5.61** (OpenHands, rank 69/122); SWE-bench **73.00% ± 1.99**. Vals' March 17 update says its SWE-bench result is SWE-bench Verified (rank 11) and notes all evaluations used the official OpenAI API; do not silently relabel the benchmark beyond that attribution.
- Vals AI Terminal-Bench 2.1: **54.68%** (Terminus 2, archived, updated 2026-10-01); Terminal-Bench 4.0: **2.52% ± 1.01** on the current page. These are distinct versions/harness entries.
- No verified SciCode or DeepSWE result found. BenchLM also relays AA-SciCode **52.1%** and AA Coding Index **56.1%**, but its linked AA page currently has no publicly available API benchmark results; these are not used for normalization.

Multimodal / long context:

- MMMU-Pro: **76.6%** and MMMU-Pro with Python: **78.0%** (OpenAI launch table, xhigh). OmniDocBench 1.5 overall edit distance: **0.1263** (lower is better; reasoning effort none).
- The 400K total window is not evidence of accurate retrieval throughout. OpenAI's MRCR v2 results fall from **47.7%** at 64K–128K to **33.6%** at 128K–256K; Graphwalks is **76.3%** BFS / **71.5%** parents accuracy through 128K.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 72.1%, τ² Telecom 93.4%, Terminal-Bench 2.1 54.68%, MCP Atlas 57.7%, and Toolathlon 42.9% show strong but uneven breadth; missing Claw-Eval and directly inspectable GDPval-AA results cap the score.
- **Reasoning: 85/100.** GPQA Diamond 88.0% and HLE-with-tools 41.5% are near the project's frontier references, but HLE without tools is 28.2% and MRCR retrieval drops to 33.6% at 128K–256K.
- **Context window: 76/100.** The 400K total window is in the 200K–500K tier, but input is capped at 272K and MRCR accuracy is modest at 64K–256K.
- **Multimodal: 68/100.** Image input and MMMU-Pro 76.6% support the image-input band; text is the only output modality and no audio/video support is listed.
- **Coding: 82/100.** LiveCodeBench 81.47%, Vals SWE-bench 73.00%, Vibe Code Bench 47.97%, and OpenAI SWE-Bench Pro 54.4% / Terminal-Bench 2.0 60.0% establish strong coding; the much lower Vibe score and Vals Terminal-Bench 4.0 result temper the rating.
- **Cost efficiency: 90/100.** $0.75/$4.50 per MTok with a 90%-discounted cached-input rate is strong value for its measured coding and tool performance, though output is materially pricier than input.
- **Overall Score: 79/100.** Half-up mean of the five quality dimensions: `(85 + 85 + 76 + 68 + 82) / 5 = 79.2`, rounded to **79**. A good fit for fast coding, image-based computer use, and subagents where a 400K context is useful but deep retrieval beyond 128K is not essential.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent public research across OpenAI's launch and model documentation, Vals AI's exact dated API route and versioned leaderboards, Artificial Analysis, and BenchLM. Official vendor numbers, Vals measurements, and historical AA-linked aggregator data are separated; benchmark versions and run configurations are retained. Scores are normalized interpretations, not official ratings.
- Sources: [OpenAI GPT-5.4 mini and nano release and benchmark tables](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/); [OpenAI GPT-5.4 Mini API documentation](https://platform.openai.com/docs/models/gpt-5.4-mini); [Vals AI exact dated-route results](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17); [Vals AI Terminal-Bench 2.1 leaderboard](https://www.vals.ai/benchmarks/terminal-bench-2-1); [Vals AI Vibe Code Bench v1.1 leaderboard/methodology](https://www.vals.ai/benchmarks/vibe-code); [Artificial Analysis GPT-5.4 Mini (xhigh)](https://artificialanalysis.ai/models/gpt-5-4-mini); [BenchLM sourced benchmark rollup](https://benchlm.ai/models/gpt-5-4-mini); [OpenAI computer-use documentation](https://platform.openai.com/docs/guides/tools-computer-use).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
