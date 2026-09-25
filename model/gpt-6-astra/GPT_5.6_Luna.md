# GPT-6 Astra — findings by ChatGPT 5.6 Luna

- Source: OpenAI/GPT-6 Astra
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (paid; no free-tier variant verified)
- **Short description:** OpenAI's flagship proprietary reasoning model for complex end-to-end work, including software engineering, computer use, research, coding, and document creation. The exact API model ID is `gpt-6-astra`; no separate Free-tier model ID was verified. ([OpenAI Developers][1])
- **Provider / access:** OpenAI API `gpt-6-astra`; OpenCode Zen `gpt-6-astra` via `https://opencode.ai/zen/v1/responses`; OpenAI supports both Chat Completions and Responses APIs. OpenCode Zen uses the Responses endpoint. ([OpenAI Developers][2])
- **Release / knowledge:** 2026-09-03 launch; knowledge cutoff 2026-04-30. OpenAI's API documentation identifies the model cutoff as Apr 30, 2026. ([OpenAI][3])
- **IDs:** `openai/gpt-6-astra`; OpenCode Zen `gpt-6-astra` (no separate Free ID exists on Zen; Zen lists the paid model). ([OpenCode][4])
- **Context window:** 1,050,000 tokens total; 128,000 max output. OpenAI API documentation verifies both limits. ([OpenAI Developers][1])
- **Modalities:** text in/out; image in; PDF/file input supported; audio and video input not supported; text output; reasoning supported; function/tool calling and structured outputs supported; JSON/structured output supported. OpenAI verifies text/image modalities and tool/structured-output support; models.dev verifies PDF input. ([OpenAI Developers][2])
- **Pricing (as of 2026-09-25):** OpenAI API: $10.00 input / $50.00 output / $1.00 cached input per 1M tokens; cache writes $12.50. Requests over 272K input tokens are priced at 2× input/cache and 1.5× output rates. OpenCode Zen lists the same standard rates up to 272K and $20/$75/$2 above 272K. API Free tier is not supported. ([OpenAI Developers][1])
- **Architecture:** Proprietary closed-weight model; parameter count, active parameters, and MoE configuration are not publicly verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1542 Elo** (Artificial Analysis, GDPval-AA v2.1, GPT-6 Astra max; harness/model variant explicitly reported) ([Artificial Analysis][5])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Additional verified agent/tool results: AutomationBench **41.4%**, rank **12/42** (BenchmarkList/OpenAI launch evaluation); Agents' Last Exam **59.3%**, rank **1/32**; OSWorld 2.0 **72.6%**, rank **2/20**. ([BenchmarkList][6])

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch evaluation; BenchmarkList rank **1/464**) ([OpenAI][3])
- HLE: **57.2%** (Humanity's Last Exam with tools; BenchmarkList rank **7/466**) ([OpenAI][3])
- LCR / MLCR: **80.7%** (Artificial Analysis AA-LCR v1.1, GPT-6 Astra max) ([OpenRouter][7])
- CritPt: **31.7%** (Artificial Analysis CritPt, GPT-6 Astra max) ([OpenRouter][7])
- Artificial Analysis Intelligence Index / BenchLM overall: **61.2 / #4 of 418** (BenchmarkList, Artificial Analysis Intelligence Index v4.1.1) ([BenchmarkList][6])
- Omniscience Accuracy / Hallucination Rate: **62.6% / 48.7% non-hallucination rate** (Artificial Analysis AA-Omniscience, GPT-6 Astra max; hallucination rate is not directly reported in the cited result) ([OpenRouter][7])

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **56.5%** (Artificial Analysis SciCode, GPT-6 Astra max) ([OpenRouter][7])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 74.1%** (OpenAI launch evaluation; BenchmarkList rank **2/33**); Terminal-Bench 4.0 **57.7%** (BenchmarkList rank **2/10**); FrontierCode 1.1 Extended **64.5%** (BenchmarkList rank **2/29**); Artificial Analysis Coding Agent Index **67.0** (OpenAI launch evaluation) ([OpenAI][3])

Long context:

- MRCR v2 8-needle 256K-512K: **100.0%**, rank **1/8**; MRCR v2 8-needle 512K-1M: **96.3%**, rank **2/9**. (BenchmarkList; OpenAI MRCR v2 harness.) ([BenchmarkList][6])

### Normalized scores (1-100)

- **Tool use: 68/100.** Verified agentic results include AutomationBench 41.4%, Agents' Last Exam 59.3%, OSWorld 2.0 72.6%, and Artificial Analysis GDPval-AA v2.1 1542 Elo. The requested Terminal-Bench 2.1 and Tau3-Banking measurements were not verified; the available Terminal-Bench result is the newer 4.0 harness at 57.9%, so the score is kept below the methodology's frontier 90-100 range. ([BenchmarkList][6])
- **Reasoning: 95/100.** GPQA Diamond is 96.0%, HLE with tools is 57.2%, AA-LCR is 80.7%, and the Artificial Analysis Intelligence Index is 61.2. GPQA and HLE meet the supplied frontier thresholds, while the Index is just above the 60+ frontier threshold; the combination supports a mid-90s normalized score. ([OpenAI][3])
- **Context window: 97/100.** Verified total context is 1.05M tokens, placing Astra in the >=1M tier. MRCR v2 retrieval reaches 100.0% at 256K-512K but 96.3% at 512K-1M, so the supplied rule does not permit the 100/100 ceiling reserved for >=98% retrieval at 512K+. ([OpenAI Developers][1])
- **Multimodal: 80/100.** Astra accepts text and images and has verified PDF/file input, with text output. Audio and video input are explicitly unsupported, so it falls in the supplied +PDF but not audio/non-text-output range rather than the 90-100 tier. ([OpenAI Developers][2])
- **Coding: 90/100.** DeepSWE v1.1 is 74.1%, satisfying the supplied frontier coding threshold, while SciCode is 56.5% and Terminal-Bench 4.0 is 57.9%; no verified SWE-bench Verified or LiveCodeBench score was found. The mixed benchmark coverage caps the normalized interpretation at the lower end of the frontier range. ([OpenAI][3])
- **Cost efficiency: 30/100.** Standard pricing is $10 input / $50 output per 1M tokens, matching the supplied ~$10/$50 cost-efficiency band. This score is independent and is not included in Overall. ([OpenAI Developers][1])
- **Overall Score: 86/100.** Mean of the five non-cost dimensions: (68 + 95 + 97 + 80 + 90) / 5 = **86.0**. Best-fit use: demanding reasoning, long-context work, computer/tool workflows, and advanced software engineering where the higher per-token price is acceptable.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-25
- Method: public internet research using official OpenAI documentation/launch material, Artificial Analysis, BenchmarkList, OpenCode Zen documentation, models.dev, and corroborating public model catalogs; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.

[1]: https://developers.openai.com/api/docs/models/gpt-6-astra?utm_source=chatgpt.com "GPT-6 Astra Model | OpenAI API"
[2]: https://developers.openai.com/api/docs/models/gpt-6-astra "GPT-6 Astra Model | OpenAI API"
[3]: https://openai.com/index/gpt-6-astra/ "GPT-6 Astra: A new generation of intelligence | OpenAI"
[4]: https://opencode.ai/docs/en/zen/?utm_source=chatgpt.com "Zen | OpenCode"
[5]: https://artificialanalysis.ai/models/comparisons/gpt-6-astra-high-vs-gpt-6-astra?utm_source=chatgpt.com "GPT-6 Astra (high) vs GPT-6 Astra (max): Model Comparison | Artificial Analysis"
[6]: https://benchmarklist.com/models/openai-gpt-6-astra/ "GPT-6 Astra Benchmark Scores & Evals | BenchmarkList"
[7]: https://openrouter.ai/openai/gpt-6-astra?utm_source=chatgpt.com "GPT-6 Astra - API Pricing & Benchmarks | OpenRouter"
