# GPT-6 Luna — findings by Qwen 4 Max

- Source: OpenAI / gpt-6-luna
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: GPT-6 Luna
- Short description: OpenAI's most efficient GPT-6 tier (Sept 22, 2026, launched alongside GPT-6 Sol) for focused, high-volume tasks — trained with methods similar to GPT-6 Astra; positioned for summarization, extraction, routine coding, computer use, and implementer/QA subagent roles at near-floor token prices.
- Provider/access: OpenAI API (Chat Completions + Responses + Batch); Bedrock `openai.gpt-6-luna`; Google Cloud private preview; AA tracks 8 providers, llm-stats 1 (OpenAI). ChatGPT Work + Codex (Plus/Pro/Business/Enterprise/Edu), Free/Go desktop app; Arena and GitHub Copilot availability reported (kie.ai). OpenCode Zen resells $0.10/$0.50, $0.20/$0.75 >272K (carried from OpenCode Console). Successor to GPT-5.6 Luna (deprecated); distinct from GPT-6 Sol / Astra / GPT-6.1 Terra.
- Release/knowledge: September 22, 2026 (AA, llm-stats, kie.ai agree). Knowledge cutoff May 18, 2026 (docs; llm-stats "May 2026"). Current, not deprecated.
- IDs: `gpt-6-luna` (default snapshot, no dated variants listed).
- Context window: 1,050,000 tokens; max input 922,000; max output 128,000 (official docs). >272K input prompts billed 2× input/cache and 1.5× output for the full request.
- Modalities: text + image input, text output. Effort none / low / medium (default) / high / xhigh / max. Tools (Responses): web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search — full toolset. Chat Completions supports function calling only at effort none. Streaming, structured outputs, prompt caching.
- Pricing (as of 2026-11-13, official docs): $0.10 input / $0.01 cached input (90% off) / $0.125 cache write (1.25×) / $0.50 output per 1M. Batch/Flex 50%, Fast 2×, regional +10%; EU data residency on Standard/Fast/Flex/Batch. AA blended $0.077 (7:2:1), $0.15/task. Vendor: ~50% below GPT-5.6 Luna promotional pricing (output −58.3% arithmetic, kie.ai). Rate limits Build 5K RPM/2M TPM → Grow 30K/180M.
- Architecture: proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor launch post (openai.com/index/introducing-gpt-6-sol-and-luna/) is 403 to my fetch; vendor rows below are carried via BenchLM (with source attribution) and kie.ai press analysis. AA numbers are independent Max-effort runs unless labelled.

- Intelligence Index: AA live 28 (v5.0.1, Max) — #13/36 price class (median 24); BenchLM carriage 27.9; launch-era article value 38 (version unstated — not comparable). AA launch analysis: broadly level with GPT-5.6 Luna overall, gains on some evals and regressions on others; Coding Agent Index 41 vs 43 for GPT-5.6 Luna.
- Vendor launch claims: AutomationBench +5.4pp over GPT-5.6 Luna at high effort with 58% lower cost/task; DeepSWE 66.6% (launch post via BenchLM); ExploitGym 11.6%, BioBasicsBench 37.6%, HealthBench 50.0 raw / 54.5 length-adjusted, HealthBench Pro 60.8 / 61.2 raw, HealthBench Hard 31.4% (GPT-6 Astra system card carriages).
- Agentic (AA independent/carriages): GDPval-AA 1444 Elo / 46.6% normalized (Anthropic's Haiku 5.5 table lists 1437 — snapshot difference labelled), Briefcase 1337, AutomationBench-AA 53.2% (strict 20.2% via Meta Ember post), AnalystAgent 43.8%, GDP.pdf 22.8%, MKA 36.8%, TB4.0-AA 12.6%, TB4.1 15.2% (tbench), ALE Linux 57.1% (Meta carriage), OSWorld 2.1 Offline 48.9% (**Anthropic-run**, Haiku 5.5 system card — not OpenAI-reported), Vals TB2.1 73.0% (vs GPT-5.6 Luna's 79.0 — matched-harness regression). Cyber: AA Cyber Index 52.7%, CWE-AA 56.7%, Deepsec 23.5%, CyberGym-E2E 77.9%. Hermes Index 33.9% / Bench 70.5% (Nous); MazeBench 0%.
- Reasoning (AA independent): AA-HLE 38.5%, CritPt 19.4%, Omniscience −8.3 (accuracy 39.6%, hallucination 79.3% — high but improved from GPT-5.6 Luna's 92.6%); FrontierMath v2 T1–3 78.947% / T4 56.098% (Epoch — T4 above Haiku 5.5's 46.3); ARC-AGI-1 86.67% / ARC-2 59.3% / ARC-3 0.1% (semi-private; adapter 0.59%). No GPQA/AIME rows surfaced.
- Coding: DeepSWE 66.6% (vendor), AA-SciCode 54.6%, FrontierCode 2.0 21.9% (Cognition) / 25.2% (AA via Meta), VulcanBench v4 71.9%, BugHunt 18.3 fixes. No SWE-V/SWE-Pro/LCB rows surfaced.
- Multimodal: AA-MMMU-Pro 79.7%, ExtractBench 91.01% (ExtractBench Pro 0% — separate harder variant, labelled), ParseBench 64.13%, PerceptionBench tools 62.8% (Meta carriage), Chartography no-tools 29.1% (Anthropic-run).
- Long context: AA-LCR 83.3% (independent), MLCR-AA 26.1% — essentially level with GPT-5.6 Luna (83.7%).
- Performance (AA Max): 106 tok/s, TTFT 79.33s, 11.8 min/task, 110M index tokens (somewhat verbose; ~50K output tokens/task per AA article — ~⅓ of Haiku 5.5 Max).
- BenchLM overall 61.04/100, #47 of 1033 (72 benchmarks). Family: GPT-6 Sol 77.44, GPT-6 Astra 85.68, GPT-5.6 Luna 63.2.

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval 1444 Elo / 46.6%, Briefcase 1337, AutomationBench-AA 53.2%, CyberGym-E2E 77.9% — solid professional-work tool use, but below Haiku 5.5 (GDPval 1620, Briefcase 1578, OSWorld 72.4) and below predecessor GPT-5.6 Luna's GDPval 1582; TB4.0 12.6% is weak.
- **Reasoning: 83/100.** HLE 38.5%, CritPt 19.4%, FrontierMath T4 56.1% (strong for the tier), ARC-2 59.3% — broadly level with GPT-5.6 Luna; hallucination 79.3% remains high despite improvement, and no GPQA/AIME evidence caps the score.
- **Context window: 87/100.** 1.05M tokens with LCR 83.3% and MLCR 26.1%, 128K output — matches the GPT-5.6 Luna anchor (87: LCR 83.7 + 2×/1.5× >272K surcharge); same surcharge structure applies here.
- **Multimodal: 77/100.** MMMU-Pro 79.7%, ExtractBench 91.01%, ParseBench 64.13%, PerceptionBench 62.8% tools — strong document/extraction vision, no CharXiv/video/audio evidence; matches the GPT-5.6 Luna image-in calibration (77).
- **Coding: 80/100.** DeepSWE 66.6% (vendor) and SciCode 54.6% show real repo-level ability, but Vals TB2.1 73.0% (vs 79.0 predecessor), TB4.1 15.2%, FrontierCode 2.0 21.9%, and Coding Agent Index 41 (vs 43) are matched-harness regressions — slightly below GPT-5.6 Luna's coding evidence.
- **Cost efficiency: 95/100.** $0.10/$0.50 with 90% cache reads, blended $0.077, $0.15/task at index 28 — half the predecessor's per-task cost ($0.33) at level capability; Batch/Flex 50% helps further. Deductions: >272K surcharge, Fast 2×, and Muse Ember/MiMo Flash deliver higher index at similar per-task cost.
- **Overall Score: 81.4/100.** Mean of the five quality dimensions (80+83+87+77+80)/5 = 81.4; cost excluded per methodology. A cost-halved successor that is broadly capability-level with GPT-5.6 Luna (82.4) — small agentic/coding regressions offset by knowledge-work and factuality gains, exactly the mixed picture AA and kie.ai report.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official developers.openai.com model page, Artificial Analysis model page, BenchLM aggregator with Who-ran-it carriages, llm-stats provider table, kie.ai launch analysis, Anthropic Haiku 5.5 post for cross-vendor carriages); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: GDPval 1444 (AA) vs 1437 (Anthropic table); index 28 live vs 27.9 carriage vs 38 launch-era (version unstated); vendor "+5.4pp AutomationBench, −58% cost" vs AA "broadly level, Coding Agent Index 41 vs 43"; vendor "50% cheaper" vs 58.3% arithmetic output reduction; AA 8 providers vs llm-stats 1; ExtractBench 91.01% vs ExtractBench Pro 0% (different variants). OSWorld 48.9% and Chartography 29.1% are Anthropic-run, not OpenAI-reported; HealthBench/ExploitGym/BioBasics rows are GPT-6 Astra system-card carriages. Vendor launch post returned 403 and is excluded. GPT-6 Luna kept distinct from GPT-5.6 Luna, GPT-6 Sol/Astra, and GPT-6.1 Terra.
- Reference URLs:
  - [GPT-6 Luna — OpenAI API Docs](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [GPT-6 Luna (Max) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-luna)
  - [GPT-6 Luna — BenchLM](https://benchlm.ai/models/gpt-6-luna)
  - [GPT-6 Luna — LLM Stats](https://llm-stats.com/models/gpt-6-luna)
  - [GPT-6 Luna 101 — kie.ai](https://kie.ai/blog/gpt-6-luna)
  - [Introducing Claude Haiku 5.5 (GPT-6 Luna comparison column) — Anthropic](https://www.anthropic.com/claude-haiku-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.