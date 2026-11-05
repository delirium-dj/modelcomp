# GPT-5.5 Pro — findings by Kimi K3.1 Pro

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The higher-compute, higher-accuracy variant of GPT-5.5, intended for difficult professional and scientific questions where precision matters more than latency or price. This report does not substitute base GPT-5.5 benchmark rows for missing Pro results.
- **Provider / access:** OpenAI Responses API and Batch API; ChatGPT Pro, Business, and Enterprise; OpenRouter route through OpenAI. Native Chat Completions, Assistants, Realtime, fine-tuning, and audio/video endpoints are unsupported. Background mode is recommended because difficult requests can take several minutes.
- **Release / knowledge:** Official snapshot dated 2026-04-23; OpenRouter displays 2026-04-24. Knowledge cutoff 2025-12-01.
- **IDs:** OpenAI alias `gpt-5.5-pro`; default snapshot `gpt-5.5-pro-2026-04-23`; OpenRouter `openai/gpt-5.5-pro`. No free OpenCode Zen ID was verified.
- **Context window:** 1,050,000 tokens with 128,000 maximum output tokens.
- **Modalities:** Text and image input; text output. Reasoning effort supports `medium`, `high` (default), and `xhigh`. Structured outputs, function calling, file/web search, image generation, MCP, code interpreter, and hosted shell are supported through Responses.
- **Pricing:** $30 input / $180 output per 1M tokens; no cached-input discount. Regional processing adds 10%. OpenRouter lists standard $30/$180 and a discounted $15/$90 Batch variant.
- **Architecture:** Proprietary; weights and parameter count undisclosed. OpenAI describes additional test-time compute rather than a separately disclosed architecture.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI launch evaluation, 2026-04-23).
- GDPval: **82.3% wins/ties versus human** across 44 occupations (OpenAI launch evaluation, 2026-04-23).
- TaxBench: **77.7% mean Pass@1** but **29.3% mean pass^5**, including Tax Knowledge 84.2% Pass@1, Calculations 74.3%, and Data Retrieval 74.5% (2026-05-27 record). The repeated-run consistency result is materially lower than single-attempt accuracy.
- GeneBench-Pro: **20.5% mean pass rate**, 95% CI 14.7–26.5%, five attempts per problem, `pro extended` mode (self-reported 2026-06-30).
- No exact-Pro OSWorld, MCP Atlas, or Tau2 result was found; base GPT-5.5 rows are excluded.

Reasoning / knowledge:

- GPQA Diamond: **93.9% ±1.6 at xhigh** in the LMCouncil/Epoch-linked record; DataLearner prints 93.92%, consistent with the same rounded result.
- Humanity's Last Exam: **57.2% with tools / 43.1% without tools** (system-card-linked 2026-06-09 record).
- FrontierMath private 2025-02-28 snapshot: **52.4%**; FrontierMath Tier 4 private 2025-07-01 snapshot: **39.6%** (OpenAI launch evaluations).
- ARC-AGI-2: **84.6%**, $10.51/task; ARC-AGI-1: **96.5%**, $4.53/task (2026-10-29 records). ARC-AGI v2's 2026-05-28 Pass@2 record also reports 84.6%.
- SimpleBench: **76.9%** (2026-06-10 record).
- GeneBench: **33.2% mean pass rate**, 95% CI 25.1–41.5%, approximately 16–20 repetitions per problem (2026-05-28).

Coding:

- BLXBench: **44.5%, 163/366 tests passed**, 11.55-second average latency and $7.88 slice cost (2026-05-06 community-runner record).
- No verified exact-Pro SWE-bench Verified, SWE-bench Pro, Terminal-Bench, Expert-SWE, or SciCode score was found. OpenAI's published base GPT-5.5 results in those rows are deliberately not inherited.

Long context:

- The **1,050,000-token context window and 128,000-token output cap** are verified in official documentation.
- No exact-Pro MRCR v2, Graphwalks, AA-LCR, or other public long-context retrieval score was found. Base GPT-5.5's MRCR/Graphwalks improvements are not used as Pro evidence.

Multimodal:

- CADGenBench: **0.3871 aggregate CAD score**, **87.6% validity**, 71/81 valid samples; generation score 0.32 with 91.8% validity and editing score 0.49 with 81.3% validity (2026-08-27).
- Native text/image input and text output are verified. No exact-Pro MMMU-Pro score or audio/video support was found.

### Normalized scores (1–100)

- **Tool use: 91/100.** BrowseComp 90.1% and GDPval 82.3% demonstrate excellent research and professional-task performance; weak repeated-run TaxBench consistency and absent exact-Pro OSWorld/MCP results cap the score.
- **Reasoning: 94/100.** GPQA 93.9%, HLE 57.2% with tools, strong FrontierMath results, and ARC-AGI-2 84.6% support frontier reasoning, although HLE without tools and difficult scientific tasks remain substantially lower.
- **Context window: 85/100.** The verified 1.05M window and 128K output are strong specifications, but no exact-Pro public retrieval or long-context reasoning measurement was found, so base-model results cannot raise the score.
- **Multimodal: 76/100.** Image input and high CAD validity are useful, but CADGenBench's 0.3871 aggregate score is modest and no exact-Pro general vision benchmark was found; audio/video are unsupported.
- **Coding: 65/100.** The only verified exact-Pro general coding row found is BLXBench 44.5%; major repository and terminal coding results are unreported for Pro, and base GPT-5.5 scores are excluded rather than proxied.
- **Cost efficiency: 25/100.** $30/$180 per 1M tokens with no cache discount is extremely expensive, and long multi-minute reasoning requests can further increase cost; Batch pricing only partially offsets this.
- **Overall Score: 82.2/100.** Half-up mean of 91, 94, 85, 76, and 65; best fit for high-stakes research, mathematics, and professional reasoning where accuracy justifies premium pricing. The score is deliberately constrained by sparse exact-Pro coding, vision, and long-context evidence.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-05
- Method: Independent public internet research using OpenAI's model documentation and launch-index evidence, OpenRouter, BenchmarkList's source-linked exact-Pro records, Vellum's launch-table reproduction, and Epoch/LMCouncil GPQA evidence; scores are normalized 1–100 interpretations, not official vendor scores. Base GPT-5.5 results are explicitly excluded wherever Pro has no measured row.
- Reference URLs:
  - [OpenAI — GPT-5.5 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [OpenRouter — GPT-5.5 Pro](https://openrouter.ai/openai/gpt-5.5-pro)
  - [BenchmarkList — GPT-5.5 Pro evaluations](https://benchmarklist.com/models/openai-gpt-5.5-pro/)
  - [Vellum — GPT-5.5 launch analysis and benchmark table](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5)
  - [LMCouncil — benchmark leaderboard](https://lmcouncil.ai/benchmarks)
- Future sources: add a new file next to this one using the same headings.
