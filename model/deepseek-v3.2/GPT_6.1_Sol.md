# DeepSeek V3.2 — findings by GPT 6.1 Sol

- Source: DeepSeek, `deepseek-ai/DeepSeek-V3.2`.
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)
- Scope: final **December 2025 V3.2**, primarily thinking-enabled quality, not V3.2-Exp or high-compute **Speciale**.

## Model card

- **Name / description:** DeepSeek V3.2, MIT open-weight text MoE combining Sparse Attention, reasoning and thinking within tool use. AA reports **685B total /37B active**; this is not the active compute of the later V4 models.[1][4]
- **Provider / access / IDs:** Historical native `deepseek-chat` (non-thinking) /`deepseek-reasoner` (thinking). The publisher changelog says both were redirected to V4-Flash modes on **2026-04-24**, with discontinuation scheduled **July 24**; they are not current pinned V3.2 access. Actual current exact gateway **`deepseek/deepseek-v3.2`** has several status-0 routes; downloadable exact weights remain available. No authenticated inference performed.[1][2][6]
- **Release / knowledge:** **2025-12-01**, primary release. Exact knowledge cutoff unverified.[2]
- **Context / output:** Primary paper evaluates and explicitly limits native V3.2 to **128K**; current exact gateway routes offer **163,840 total**, while Baidu offers **131,072 /65,536 output**. DeepInfra FP4 has **16,384 output**, GMICloud FP8 advertises **147,456**. Vals' measured profile has **160K/20,480 output**. Host caps are distinct; conversation-history deletion/summary is not increased native memory.[3][5][6]
- **Modalities / tools:** **Text →text**, tool calling in thinking and non-thinking modes; no verified native image/audio/video. Speciale explicitly lacks tools and must not supply base V3.2 agent scores.[1][2]
- **Prompt/runtime caveats:** Revised Python encoding/parsing reference rather than Jinja template; reference parser does not recover malformed output. The special `developer` role is search-agent-specific and **not accepted by the official API**. Local recommendation temperature/top-p **1.0/0.95**; correct thinking history serialization matters.[1]
- **Pricing (2026-10-22):** Exact current gateway GMICloud FP8 **$0.2088 input/$0.3096 output/$0.0216 cache read per 1M**, **28% discount**; DeepInfra FP4/AtlasCloud FP8 **$0.26/$0.38/$0.13 cached**; Baidu FP8 **$0.28/$0.42/$0.028 cached**. These are provider-specific current prices, not a surviving native V3.2 service. AA lists a separate historical **$0.28/$0.42/$0.014 cache** reference. MIT self-hosting is not free inference; no exact entry in the checked current NVIDIA catalog or confirmed exact zero tariff.[4][6][7]

### Raw benchmarks found

**Primary 23-page technical report inspected**, exact standard **V3.2 Thinking**, Table 2 and §§4.1–4.4:[3]

- **GPQA Diamond 82.4%**, **LCB pass@1-CoT 83.3%**, **AIME 2025 93.1%**, **HMMT February 2025 92.5% /November 90.2%**.
- **HLE 25.1% text-only subset**, using math-style boxed-answer prompt; with official HLE prompt **23.9%**. **With search tools 40.8%** is a different condition. None is automatically the full multimodal exam result.
- **SWE Verified 73.1%**, internal harness; **Multilingual 70.2%**. Publisher reports robustness range **72–74%** across alternative coding harness/mode conditions, not independent replications.
- **TB2.0 46.4% in Claude Code thinking**; **39.3% Terminus non-thinking**. The paper says its thinking context-management scheme was incompatible with Terminus; those rows are not an isolated mode-only ablation.
- **τ² 80.3%**, category mean: **Airline63.8 /Retail81.1 /Telecom96.2**; model itself used as user agent. **MCP-Universe45.9% /MCP-Mark38.0%**, publisher's internal search/Playwright environments rather than exact official setups. **Tool-Decathlon35.2%**.
- BrowseComp **51.4% /67.6% with context management**; >20% of search cases exceed native128K. Context history can be summarized/discarded when reaching80%; that is a workflow strategy, not proof of perfect full-window recall.
- **Gold-level IMO/IOI/CMO/ICPC results belong to V3.2-Speciale**, explicitly separated in the release and report. No Speciale Olympiad result transferred to standard V3.2.[2][3]

**AA independent exact reasoning record**, UUID `d621247c-d47e-458c-82cb-a166bc3b37e5`, `deepseek-v3-2-reasoning`:[4]

- Intelligence Index **21.4868, estimated**; **TB2.1 46.8165%**, **GDPval-AA691.52 Elo**, **APEX-Agents14.5280%**, τ² field **90.6433%**.
- **GPQA84.0404%**, **HLE24.5598%**, **AA-LCR73.3333%**, **CritPt2.8571%**, **IFBench60.6803%**, **LCB86.2434%**, **AIME2025 92.0%**.
- Omniscience index **−22.4833**, accuracy **32.9667%**, hallucination **82.7200%**, evaluator-defined denominators. Current SciCode/MMMU-Pro/TB4 fields null.

**Separate AA non-reasoning record**, UUID `6d9a176d-feb8-4dac-8872-afe32b31897f`, `deepseek-v3-2`:[8]

- Index **16.0435, estimated**; **GPQA75.0505% /HLE11.2141% /LCR45.6667% /LCB59.2593% /AIME59.0% /τ²78.9474%**.
- Omniscience hallucination **93.2675%** belongs to this **non-thinking** condition; it is not the thinking-mode rate. The two modes are not averaged to synthesize a nonexistent common evaluation.

**Vals independent thinking profile**, Fireworks-labelled model record, temperature1, high effort, default **20,480 output**; page provider field says DeepSeek, suite overrides possible:[5]

- **GPQA80.30% ±2.00**, **LCB80.69% ±1.10**, **SWE Verified67.60% ±2.10**, **TB2.0 35.95% ±5.12**, **Vibe Code v1.1 5.11% ±2.13**.
- **MMLU-Pro84.92% ±0.35**, **LegalBench76.08% ±0.49**, **TaxEval v2 68.15% ±0.92**. Domain QA scores are not autonomous professional task completion; 62.35% profile display is not universal accuracy.

**Limits:** No verified exact Claw score, native multimodal capability, TB4 or ≥98% complex long-context retrieval found. Current hosting varies substantially in quantization/output budget; route labels do not prove byte-identical weights. Earlier native aliases and pricing pages now describe successors.

### Normalized scores (1–100)

- **Tool use: 60/100.** Independent TB2.1 46.82%, professional GDPval/APEX and qualified primary MCP results support useful agents, but independent TB2/Vibe and finite native context expose execution limits.[3][4][5]
- **Reasoning: 71/100.** Thinking-enabled independent GPQA80–84%, HLE24.56% and LCR73.33% support strong reasoning, capped by CritPt2.86%, hallucination and benchmark/prompt differences.[3][4][5]
- **Context window: 65/100.** Verified current hosted163,840 tier, interpolated between128K and200K anchors; original native128K and route-specific caps remain explicit. No perfect-retention claim.[3][5][6]
- **Multimodal: 15/100.** Native text-only; search tools, rendered code or Speciale contests add no input/output modalities.[1][5]
- **Coding: 70/100.** Independent SWE67.6%/LCB~81–86% and primary73.1% support repository work, while Vibe5.11% and harness-dependent terminal performance limit breadth.[3][4][5]
- **Cost efficiency: 98/100.** Very inexpensive current exact paid routes and caching; quantization, discount persistence, long reasoning and no verified free entitlement prevent100.[4][6][7]
- **Overall Score: 56/100.** Half-up quality mean `(60 + 71 + 65 + 15 + 70) / 5 = 56.2`; cost excluded. Fit: inexpensive open-weight text reasoning/engineering with explicit mode and provider selection.

### Fresh search trail and sources

- Bing RSS [`"DeepSeek-V3.2" benchmark`](https://www.bing.com/search?format=rss&q=%22DeepSeek-V3.2%22+benchmark): generic current DeepSeek pages, not exact measurements.
- Google [`"DeepSeek-V3.2" benchmark`](https://www.google.com/search?q=%22DeepSeek-V3.2%22+benchmark): JavaScript/access interstitial.
- DuckDuckGo [`"DeepSeek-V3.2" benchmark`](https://duckduckgo.com/html/?q=%22DeepSeek-V3.2%22+benchmark): useful release/serving leads. Primary paper tables/footnotes, exact-mode evaluator data and live endpoint rows inspected; no peer findings used.

[1]: https://huggingface.co/deepseek-ai/DeepSeek-V3.2/raw/main/README.md
[2]: https://api-docs.deepseek.com/news/news251201
[3]: https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf
[4]: https://artificialanalysis.ai/models/deepseek-v3-2-reasoning
[5]: https://www.vals.ai/models/fireworks_deepseek-v3p2-thinking
[6]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v3.2/endpoints
[7]: https://integrate.api.nvidia.com/v1/models
[8]: https://artificialanalysis.ai/models/deepseek-v3-2
[9]: https://api-docs.deepseek.com/updates

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary-paper and public-web research; reasoning modes, Speciale, modified environments, native aliases and current hosted tariffs kept separate. Ratings are normalized interpretations.
