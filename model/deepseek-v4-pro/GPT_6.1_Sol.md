# DeepSeek V4 Pro — findings by GPT 6.1 Sol

- Source: DeepSeek / DeepSeek-V4-Pro-0813, with the April preview retained as explicitly labelled lineage.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** DeepSeek V4 Pro (August 13 GA).
- **Short description:** DeepSeek's large open-weight text reasoning and coding model. The August checkpoint substantially improves agentic performance over the April preview, but independent results vary sharply by terminal harness; it has no native vision capability.[1][2][3]
- **Provider / access:** DeepSeek's `deepseek-v4-pro` at `https://api.deepseek.com` explicitly maps to **DeepSeek-V4-Pro-0813**. Chat Completions, native Responses API and Anthropic-compatible access are documented. Open weights permit self-hosting, with substantial hardware requirements rather than free compute.[1][2][3]
- **Release / knowledge:** Preview announced April 24, 2026; GA announced August 13, 2026. No verified official knowledge cutoff found.[1][4]
- **IDs:** Weights `deepseek-ai/DeepSeek-V4-Pro-0813`; direct API `deepseek-v4-pro`; exact gateway `deepseek/deepseek-v4-pro-0813`, snapshot `deepseek/deepseek-v4-pro-20260813`. Crucially, OpenRouter's **bare** `deepseek/deepseek-v4-pro` currently identifies **0423**, snapshot `deepseek/deepseek-v4-pro-20260423`, rather than GA. Matching the visible model name alone is insufficient. No separately verified free Zen ID is claimed.[2][3][7][8]
- **Context window:** Official **1M total / 384K maximum output**; GA weight config has **1,048,576** positions. DeepSeek's exact GA gateway endpoint advertises **1,048,576 / 393,216** output; StreamLake **1,024,000 / 384,000** and DeepInfra **1,048,576 / 16,384** demonstrate provider-specific caps. Some other providers advertise 943,718 output; these are serving claims, not the official 384K limit or independently tested generation lengths. Input and output share the total window.[3][6][7]
- **Modalities:** **Text in, text out only**; thinking/non-thinking modes, `low`/`high`/`max` reasoning effort, tool calling and JSON output. Official pricing explicitly marks Pro vision **not supported**. Flash Vision and V4.1 Flash capabilities do not transfer to Pro. A PDF benchmark processed by external tools does not establish native PDF or image input.[2][3]
- **Pricing (as of 2026-10-20):** Official per-million input/output/cache-hit prices are **$1.32 / $3.96 / $0.044 peak**, **$0.66 / $1.98 / $0.022 off-peak**. Peak periods are **01:00–04:00 and 06:00–10:00 UTC, Monday–Friday**, excluding Chinese public holidays; all other times, weekends and those holidays are off-peak. Prices introduced after GA took effect August 16.[1][3] Exact GA gateway alternatives include discounted Baidu **$0.1452 / $0.4356 / $0.00462**, versus Relace **$0.1307 / $8.00 / $0.13**: cheapest input is not necessarily cheapest completion. Provider promotions/quantization and access conditions vary.[7] MIT weights carry no model-licence fee; running the 1.6T model is not costless.[2][9]
- **Architecture:** **1.6T total / 49B activated MoE**, mixed FP4/FP8 weights, compressed/hybrid attention; GA builds on the preview architecture and attaches DSpark speculative decoding. The GA config confirms the DeepSeek V4 causal-LM architecture and million-token position cap. Both code and weights are **MIT licensed**.[2][4][6][9]

### Raw benchmarks found

**Attribution and effort:** GA vendor code-agent results use minimal DeepSeek Harness, **max** effort, temperature 1.0 and top-p 0.95. Artificial Analysis's directly inspected exact record is **DeepSeek V4 Pro 0813 (Max)**, UUID `83173329-c09a-41f1-a028-a282a5f908d7`, slug `deepseek-v4-pro`, release August 13, weights link ending `-0813`; its index is marked measured, not estimated. Vals' exact `deepseek/deepseek-v4-pro-0813` profile uses max effort and a 384,000 output cap by default; individual benchmark settings may differ.[2][5][10]

Agent / tool use:

- **Terminal-Bench 2.1:** vendor **87.9%**, versus **78.65% AA** and **54.68% Vals across three full trials**, including **28.89% on hard tasks** in Vals' release note. These are materially different measurements, not three confirmations of 87.9%; preserve harness provenance.[2][5][10]
- **Terminal-Bench 4.0:** **14.14% AA**, **14.14% ± 2.02 Vals**. Terminal-Bench-Science: **5.71% AA**, **4.29% ± 2.44 Vals**. These newer suites cannot be interchanged with TB2.1.[5][10]
- **Tau3-Banking:** **39.59% AA**; Tau2 field absent/null in the selected GA record, not zero.[10]
- **GDPval-AA:** **1448.52 Elo**; AA Briefcase **1255.57 Elo**, rubric pass rate **43.52%**. Elo is neither a percentage nor this repository's Overall.[10]
- **AutomationBench:** vendor public set **31.8%**, versus AA **56.71% partial-score metric**; objective/partial credit and harness differ. **EnterpriseOps-Gym 49.60% AA**.[2][10]
- **Toolathlon-Verified:** **74.1% vendor**; **Agents' Last Exam 25.7% vendor**. No independently verified GA MCP-Atlas, Claw-Eval, ClawProBench or SWE Atlas QnA score found.[2]
- Vals task breadth: **SkillsBench 53.83%**, **Finance Agent v2.1 57.12%**, **Legal Research Bench 40.87%**, **Harvey legal v1.1 10.83%**, **SRE Bench 1.91%**. High SWE-bench performance does not imply uniformly reliable professional automation.[5]

Reasoning / knowledge:

- **GPQA Diamond:** **92.83% AA**, **92.42% ± 2.02 Vals**.[5][10]
- **HLE:** **42.7% without / 60.0% with tools vendor**; **41.01% AA**. Tool-enabled and unassisted scores remain separate.[2][10]
- **CritPt:** **18.0% AA**; **ProofBench v1.1 50.00% ± 5.03 Vals**; **MMLU Pro 86.97% Vals**.[5][10]
- **Artificial Analysis Intelligence Index:** **35.997**, measured current composite; **Vals Index 52.97% ± 1.04, #17/22**. Different scales and suites, neither normalized Overall. Vals' older release note says 52.37%; the current table is used for the current index.[5][10]
- **Omniscience:** AA accuracy **49.10%**, hallucination rate **94.83%**, reliability score **0.8333** on its reported index scale. Hallucination is a benchmark-specific rate, not the probability that every answer is wrong; accuracy alone substantially overstates calibrated reliability.[10]

Coding:

- **SWE-bench Verified:** **96.40% ± 0.83 Vals**, currently **#2/88**. Its release note explicitly labels this benchmark Verified. No same-harness GA SWE-Pro result independently verified.[5]
- **LiveCodeBench:** **87.53% ± 0.96 Vals**; **SciCode 51.04% AA**; **IOI 51.61% Vals**.[5][10]
- **DeepSWE:** **62.7% vendor**; the GA README does not identify a version in that row, so it is not silently relabelled DeepSWE v1.1. **NL2Repo 61.5%** and **Cybergym 83.3%** are vendor results.[2]
- Vendor internal **DSBench-FullStack 71.1% / DSBench-Hard 67.2%** are explicitly internal, not independent public replication.[2]
- **Vibe Code Bench v1.1 82.30% ± 3.15 Vals**, but **Vibe Code Bench 1–100 17.53%**, **Code Migration v1.1 51.99%**, and **ProgramBench 0.00%**. The latter is an observed full-resolution result, not a fabricated missing-data zero. Strong bounded repairs coexist with much weaker sustained implementation.[5]

Long context and modality limits:

- GA **LCR 80.33% / MLCR 17.78% AA**. Capacity is established, but these results do not demonstrate near-perfect retrieval at the entire million-token limit.[10]
- **GDP.pdf 11.4% AA** is a tool-mediated workload result for this text-only model, not native vision validation; selected MMMU-Pro is null.[3][10]
- **Preview-only lineage, excluded from GA measurements:** the original README reports max-effort **MRCR 1M 83.5%**, **CorpusQA 1M 62.0%**, **TB2.0 67.9%**, **MCPAtlas Public 73.6%**, **SWE Verified 80.6%**, **SWE Pro 55.4%** and **LiveCodeBench 93.5%**. These belong to the original preview, even when secondary pages combine them with GA rows. In particular, the preview's 1M retrieval results are not a newly measured GA long-context score.[4][11]

Runtime / cost:

- AA's selected GA record reports median **107.13 output tokens/s**, **1.64 s to first chunk**, about **162.88M evaluation output tokens**, including **138.15M reasoning tokens**, and **$0.674 weighted cost/task** at its pricing assumptions. First chunk is not a completed answer; the weighted index cost is not a universal job quote.[10]
- Vals' composite shows **$2.50/test** and **58 min 3 s latency**; these describe its benchmark workload and cannot be directly substituted for AA's composite cost/latency.[5]

### Normalized scores (1–100)

- **Tool use: 80/100.** GA Tau3 39.59%, GDPval 1448.52 and strong vendor tool tasks support capable agents; the TB2.1 vendor/AA/Vals gap, TB4 14.14% and weak professional/SRE tails cap reliability.[2][5][10]
- **Reasoning: 85/100.** Independently measured GPQA around 92.5%, HLE 41.01% and CritPt 18% establish strong reasoning; extreme benchmark hallucination and a current AA index near 36 prevent a frontier-wide score.[5][10]
- **Context window: 95/100.** Official million-token capacity is confirmed by GA configuration and serving metadata; neither GA LCR/MLCR nor preview-only retrieval establishes the ≥98% long-context performance needed for 100.[3][6][7][10]
- **Multimodal: 15/100.** Officially text-only; external search, PDF processing and separate Flash Vision models add no native Pro modality.[3]
- **Coding: 88/100.** Vals SWE Verified 96.40%, LiveCodeBench 87.53% and Vibe 82.30% are strong, but ProgramBench 0%, persistent Vibe 17.53% and migration/terminal weaknesses cap long-horizon confidence.[5]
- **Cost efficiency: 90/100.** Low official off-peak token prices, very cheap exact-GA third-party lanes and MIT availability offer strong paid value; substantial reasoning usage, provider variation and expensive real tasks prevent a free-tier score.[2][3][5][7][10]
- **Overall Score: 73/100.** Half-up rounding of `(80 + 85 + 95 + 15 + 88) / 5 = 72.6`; cost excluded. Best suited to inexpensive text reasoning, large codebases and bounded coding repairs with harness-specific validation; text-only coverage materially lowers this general-purpose five-axis average.

### Research trail and sources

Three distinct fresh search attempts were made before synthesis: Bing `"DeepSeek V4 Pro" official model card`, Google `"DeepSeek V4 Pro" independent benchmark review`, and DuckDuckGo `"DeepSeek V4 Pro" 0813 pricing context vision`. Search output included broad/truncated results; direct official, evaluator and provider records resolved identity and current figures. A candidate third-party review at `modelflare.dev/articles/deepseek-v4-pro-review` returned 404 and supplies no evidence. BenchLM redirects its bare name to the GA page but blends source generations; original official and evaluator records take precedence.

[1]: https://api-docs.deepseek.com/news/news260813 "Official GA announcement and pricing effective date"
[2]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813/raw/main/README.md "GA model card, vendor benchmark table, effort and deployment"
[3]: https://api-docs.deepseek.com/quick_start/pricing/ "Current exact API version, features, peak/off-peak prices and schedule"
[4]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/README.md "Original preview architecture and benchmark tables, not GA measurements"
[5]: https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813 "Independent GA scores, hyperparameters and historical release note"
[6]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813/raw/main/config.json "GA architecture and 1,048,576 position cap"
[7]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-pro-0813/endpoints "Exact GA provider IDs, per-token rates, modalities and serving limits"
[8]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-pro/endpoints "Bare gateway ID still identifies the 0423 preview"
[9]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813/raw/main/LICENSE "MIT code and weights licence"
[10]: https://artificialanalysis.ai/models/deepseek-v4-pro "Exact selected 0813 Max record and directly inspected public initialModels JSON"
[11]: https://benchlm.ai/models/deepseek-v4-pro-0813 "Secondary aggregate; mixed preview and GA source rows are not independent replication"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Fresh public searches followed by direct inspection of official GA/preview cards, configuration/licence, pricing/version documentation, independent evaluator profiles and exact gateway endpoints. Scores are independent normalized 1–100 interpretations, not vendor scores; no peer findings supplied evidence.
- Future sources: add a separate signed file alongside this report using the same headings.
