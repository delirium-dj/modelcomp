# GPT-5.4 Pro — Findings by Kimi K3.1 Pro

> **Source:** Kimi K3.1 Pro · **Date:** 2026-11-08 · **Method:** fresh web research
> **Model researched:** GPT-5.4 Pro (`gpt-5.4-pro`) · **Reporter:** Kimi K3.1 Pro (`kimi-k3.1-pro`)

## Model card

| Field | Value |
|-------|-------|
| Model name | GPT-5.4 Pro |
| Provider | OpenAI |
| Exact API ID | `gpt-5.4-pro` |
| Default snapshot | `gpt-5.4-pro-2026-03-05` |
| Released | 2026-03-05 |
| Status | Available through the Responses API; Artificial Analysis labels its entry deprecated because GPT-5.5 Pro is newer |
| Knowledge cutoff | 2025-08-31 |
| Context window | 1,050,000 tokens |
| Max output | 128,000 tokens |
| Modalities | Text and image input; text output |
| Reasoning | Reasoning tokens; `medium` default, `high`, and `xhigh` efforts |
| API support | Responses API only; Chat Completions, Assistants, Batch, fine-tuning, Realtime, and legacy Completions unsupported |
| Supported tools | Function calling, web search, file search, tool search, image generation, apply patch, computer use, and MCP |
| Base API price | $30 / million input tokens; $180 / million output tokens; no cached-input price listed |
| Long-context price | Above 272K input tokens, 2× input and 1.5× output pricing applies to the full session |
| Regional processing | 10% price uplift for data-residency endpoints |
| Architecture | Proprietary, closed weights; parameter count not publicly disclosed |

Sources: [OpenAI model reference](https://developers.openai.com/api/docs/models/gpt-5.4-pro), [Epoch model record](https://epoch.ai/models/gpt-5-4-pro), and [current Artificial Analysis model page](https://artificialanalysis.ai/models/gpt-5-4-pro). OpenAI warns that difficult requests can take several minutes and recommends background mode to avoid timeouts.

### Raw benchmarks found

Every scored row below names GPT-5.4 Pro exactly. Base GPT-5.4, GPT-5.4 mini/nano, GPT-5.5 Pro, and other OpenAI results are not substituted. Launch-era and later independent evaluations remain separate.

| Benchmark | Score | Notes |
|-----------|------:|-------|
| BrowseComp | 89.3% | OpenAI launch result at `xhigh`; autonomous web research |
| GDPval | 82.0% wins or ties | OpenAI launch result at `xhigh`; human-reference professional work |
| Finance Agent v1.1 | 61.5% | OpenAI launch result at `xhigh` |
| Investment Banking Modeling Tasks | 83.6% | OpenAI internal evaluation at `xhigh`; below base GPT-5.4's separately reported 87.3%, which is not imported here |
| MultiChallenge | 69.2% | Independent later result cataloged by BenchmarkList; multi-turn instruction retention and coherence |
| TaxBench | 75.8% mean pass@1; 27.0% mean pass^5 | Later exact-model record; large gap between single-attempt and repeated reliability |
| PinchBench | 18.5% best; 12.0% average | Six submissions; broad real-world agent tasks, $15.31 average recorded cost |
| GPQA Diamond | 94.4% | OpenAI launch result at `xhigh` |
| GPQA Diamond | 95% | Epoch's rounded current scorecard value |
| Humanity's Last Exam | 58.7% with tools; 42.7% without tools | OpenAI launch result at `xhigh`; tool settings are not interchangeable |
| Humanity's Last Exam, text-only | 45.3% ± 2.1 percentage points | Independent later leaderboard record; RMS calibration error 37.0% |
| ARC-AGI-1 | 94.5% | ARC Prize / OpenAI launch-era result at `xhigh` |
| ARC-AGI-2 | 83.3% | ARC Prize semi-private result at `xhigh`; $16.41 per task in the cataloged run |
| CritPt | 30.0% | Artificial Analysis at `xhigh`; research-level physics |
| FrontierMath 2025-02-28 Private | 50.0% | OpenAI launch-era legacy benchmark snapshot |
| FrontierMath Tier 4 2025-07-01 Private | 38.0% | OpenAI launch-era legacy Tier 4 snapshot |
| FrontierMath Tiers 1–3 v2 | 82% | Epoch's current scorecard, rounded; different version from launch results |
| FrontierMath Tier 4 v2 | 59% | Epoch's current scorecard, rounded; not comparable with the 38% legacy snapshot |
| SimpleBench | 74.1% | Later exact-model result; Epoch displays 74% rounded |
| SimpleQA Verified | 46% | Epoch's rounded current scorecard value |
| MathArena Apex | 69.8% ± 9.2% | Later exact-model result; $8.65 recorded evaluation cost |
| FrontierScience Research | 36.7% | OpenAI launch result at `xhigh`; rubric-graded research subtasks |
| GeneBench | 25.6% | Later exact-model result; multi-stage scientific data analysis |
| BenchLM composite | 91 overall | Later aggregate: 91.8 agentic, 91.7 coding, 98 reasoning, and 100 multimodal-grounded; not a direct task benchmark |
| RankedAGI composites | 85.9% agentic; 81.8% coding | Secondary composite scores, not direct SWE-bench or terminal results |
| Scale Visual-Language Understanding | 53.9% | Later independent visual perception, logic, calculation, and common-sense evaluation |
| BilliardPhys-Bench | 72.3% weighted total | Later visual physical-reasoning result |
| MRCR / RULER long-context retrieval | No verified public GPT-5.4 Pro score found | Base GPT-5.4 MRCR values are excluded |
| MMMU-Pro | No verified public GPT-5.4 Pro score found | Base GPT-5.4 values and launch-table dashes are not converted into Pro scores |
| SWE-bench Pro / Terminal-Bench | No verified public GPT-5.4 Pro score found | Scale's 59.10 ± 3.56 SWE-bench Pro row is explicitly `gpt-5.4 (xHigh)`, not Pro; base Terminal-Bench values are also excluded |

Sources: [OpenAI launch](https://openai.com/index/introducing-gpt-5-4/), [Sugra's source-labeled launch transcription](https://sugra.systems/blog/llm-bench/models/gpt-5-4-pro), [ARC Prize leaderboard](https://arcprize.org/leaderboard), [Epoch model record](https://epoch.ai/models/gpt-5-4-pro), [BenchmarkList exact-Pro catalog](https://benchmarklist.com/models/openai-gpt-5.4-pro/), [RankedAGI](https://rankedagi.com/models/gpt-5-4-pro), [Artificial Analysis CritPt announcement](https://x.com/ArtificialAnlys/status/2030007301529358546), and [Scale SWE-bench Pro](https://scale.com/leaderboard/swe_bench_pro_public).

### Agentic workflow & tool use

- BrowseComp 89.3%, GDPval 82.0%, and Finance Agent 61.5% demonstrate strong launch-era research and professional-work performance at `xhigh`.
- The internal investment-banking result is 83.6%; it should not be confused with the higher base-model result or treated as an independent evaluation.
- TaxBench falls from 75.8% mean pass@1 to 27.0% mean pass^5, and PinchBench averages only 12.0%, showing that impressive peak results do not guarantee repeatable end-to-end execution.
- The API exposes a broad tool surface, including web, files, MCP, computer use, and apply patch. No exact-Pro OSWorld or MCP-Atlas score was verified, so base-model computer and tool results are deliberately absent.

### Reasoning & knowledge

- ARC-AGI-2 83.3%, GPQA Diamond 94.4%, and HLE 58.7% with tools establish excellent abstract, scientific, and difficult-knowledge reasoning at launch.
- FrontierMath improved from 50% on the launch-era private snapshot to 82% on Epoch's current Tiers 1–3 v2 scorecard, while Tier 4 moved from 38% legacy to 59% v2. These are different versions, not a longitudinal gain on one fixed test.
- CritPt 30.0%, FrontierScience 36.7%, and GeneBench 25.6% show that research-level physics and open-ended scientific work remain substantially harder than multiple-choice science.
- The independent text-only HLE result of 45.3% ± 2.1 differs from OpenAI's 42.7% no-tools launch result; both are preserved with their evaluation contexts.

### Long-context performance

- OpenAI verifies a 1,050,000-token context and 128,000-token maximum output, one of the largest advertised configurations in this cohort.
- No verified exact-Pro MRCR, RULER, or comparable long-context retrieval measurement was found. Base GPT-5.4 retrieval numbers are not proxies for Pro.
- Sessions above 272K input tokens incur 2× input and 1.5× output pricing for the full session, making full-window use materially more expensive even before latency is considered.

### Multimodal & vision

- The exact API model accepts text and images and emits text; native audio and video input are not documented.
- ARC-AGI-2 83.3% supplies strong visual abstract-reasoning evidence, while Scale Visual-Language Understanding 53.9% and BilliardPhys-Bench 72.3% provide narrower independent measurements.
- No verified exact-Pro MMMU-Pro result was found. The image-generation tool is an API capability, not evidence that the model itself emits image tokens.

### Coding & software engineering

- BenchLM's 91.7 coding component and RankedAGI's 81.8% coding composite suggest strong aggregated coding ability, but neither substitutes for a direct repository-level evaluation.
- No exact-Pro SWE-bench Pro or Terminal-Bench result was verified. Scale's public leaderboard explicitly assigns 59.10 ± 3.56 on SWE-bench Pro to `gpt-5.4 (xHigh)`, so secondary pages attributing that number to Pro are rejected.
- Apply-patch, function-calling, and computer-use support make the model suitable for agentic development, while sparse direct coding evidence and weak broad-agent PinchBench results cap confidence.

### Cost & availability

- Official pricing is $30/$180 per million input/output tokens, with no listed cached-input discount. Above 272K input tokens, effective rates become $60/$270 for the full session.
- ARC-AGI-2's cataloged $16.41 per task, MathArena Apex's $8.65 evaluation cost, and PinchBench's $15.31 average run cost illustrate the expense of high-effort agentic evaluations; these costs are benchmark-specific and not directly comparable.
- Responses is the only supported API endpoint. Despite secondary price catalogs listing batch rates, OpenAI's current model reference explicitly marks Batch unsupported.
- Artificial Analysis currently displays N/A for its v5.0.1 Intelligence Index and operational metrics, so no current AA index, throughput, latency, or task-cost value is claimed.

### Normalized scores (1–100)

- **Tool use: 92/100.** BrowseComp 89.3%, GDPval 82.0%, and Finance Agent 61.5% support excellent research and professional agency; TaxBench's 27.0% pass^5, PinchBench 12.0% average, and missing exact-Pro OSWorld/MCP-Atlas results cap the score.
- **Reasoning: 95/100.** ARC-AGI-2 83.3%, GPQA 94.4%, HLE 58.7% with tools, and strong FrontierMath v2 results are frontier-level, while CritPt 30.0% and weaker open-ended science results show remaining limits.
- **Context window: 82/100.** The verified 1.05M window and 128K output allowance are excellent specifications, but the absence of exact-Pro retrieval measurements and the full-session long-context price multiplier prevent a higher evidence-based score.
- **Multimodal: 86/100.** Image input, ARC-AGI-2 83.3%, and independent visual-reasoning results are strong; text-only output, no audio/video input, and no exact-Pro MMMU-Pro result limit coverage.
- **Coding: 84/100.** Strong secondary coding composites and a rich development-tool interface are offset by the lack of verified exact-Pro SWE-bench or Terminal-Bench results and weak broad-agent reliability.
- **Cost efficiency: 20/100.** The $30/$180 base rates, $60/$270 long-context rates, lack of a listed cache discount, and expensive measured evaluation runs make this a poor fit for cost-sensitive or high-volume work.
- **Overall Score: 87.8/100.** Half-up mean of 92, 95, 82, 86, and 84; best suited to exceptionally difficult reasoning and research tasks where quality justifies the premium.

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-08
- Method: fresh public internet research; normalized scores are evidence-based interpretations, not official vendor scores.

### Reference URLs

1. https://developers.openai.com/api/docs/models/gpt-5.4-pro
2. https://openai.com/index/introducing-gpt-5-4/
3. https://epoch.ai/models/gpt-5-4-pro
4. https://arcprize.org/leaderboard
5. https://artificialanalysis.ai/models/gpt-5-4-pro
6. https://x.com/ArtificialAnlys/status/2030007301529358546
7. https://scale.com/leaderboard/swe_bench_pro_public
8. https://benchmarklist.com/models/openai-gpt-5.4-pro/
9. https://sugra.systems/blog/llm-bench/models/gpt-5-4-pro
10. https://rankedagi.com/models/gpt-5-4-pro
