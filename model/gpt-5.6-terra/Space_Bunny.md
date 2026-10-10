# GPT-5.6 Terra — findings by Space Bunny

- Source: OpenAI (`gpt-5.6-terra`; max effort)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed since the first pass.** The first pass recorded "no verified public score" for
> almost every dimension because OpenAI's model page was unreachable. It is now live and carries
> the full launch table; OpenAI's own long-context results (MRCR v2, GraphWalks) and Artificial
> Analysis / Vals AI per-effort data fill the rest. Lifecycle correction: `gpt-5.6-terra` is
> **Active**, not superseded — it is OpenAI's named replacement for `gpt-5-mini`, `o4-mini`,
> `gpt-3.5-turbo`, `computer-use-preview` and several fine-tune bases.

## Model card

- **Name:** GPT-5.6 Terra (max)
- **Short description:** OpenAI's balanced middle tier of the GPT-5.6 family (GA 2026-07-09), roughly corresponding to the old mini tier — positioned for workloads that balance intelligence and cost, with a 1M context and the full tool surface.
- **Provider / access:** OpenAI API and Chat Completions/Responses (`gpt-5.6-terra`, single snapshot `gpt-5.6-terra`); also on Azure, Amazon Bedrock and OpenRouter. OpenCode Zen serves it at `https://opencode.ai/zen/v1/responses`.
- **Release / knowledge:** Released 2026-07-09 (limited preview before GA); **knowledge cutoff 2026-02-16**. **Active** on OpenAI's deprecation schedule — it is the recommended substitute for `gpt-5-mini-2025-08-07`, `o4-mini-2025-04-16`, `gpt-3.5-turbo-0125`, `computer-use-preview-2025-03-11` and several fine-tune bases.
- **IDs:** `gpt-5.6-terra`.
- **Context window:** **1,050,000 tokens; maximum input 922,000; 128,000 max output.** Prompts above 272K input tokens are priced at 2x input and 1.5x output for the whole request.
- **Modalities:** Text and image input; text output. Reasoning effort supports `none`, `low`, `medium` (default), `high`, `xhigh` and `max`, with reasoning-token billing. Tools: `web_search`, `file_search`, `image_generation`, `code_interpreter`, `hosted_shell`, `apply_patch`, `skills`, `mcp`, `tool_search`.
- **Pricing (as of 2026-10-10):** **$2.00 input / $0.20 cached input / $12.00 output per 1M** — cut 20% on 2026-07-30 from the launch $2.50/$15. Cache writes bill at 1.25x the uncached input rate ($2.50); GPT-5.6 was OpenAI's first family with cache-write pricing. Web search $10 per 1,000 calls. Above 272K input: $4 in / $18 out.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

*OpenAI's GPT-5.6 launch table (vendor, max effort):*

- Agents' Last Exam **50.4%**; GDPval-AA v2 **1,593 Elo**; AutomationBench **15.2%**; Toolathlon **53.1%**
- **Long context — the rows the first pass lacked:** OpenAI MRCR v2 8-needle **89.6%** at 256K–512K and **72.5%** at 512K–1M; GraphWalks BFS f1 **76.9%** at 256k and **71.2%** at 1M
- Coding: Artificial Analysis Coding Agent Index v1.1 **77.4**; SWE-Bench Pro **63.4%**; DeepSWE v1.1 **69.6%**; Terminal-Bench 2.1 **87.4%**; Terminal-Bench Hard **57.6%**; KernelGen 1P **49.2%**; PostTrainBench Lite **51.5%**
- Computer use / agentic: OSWorld 2.0 **50.2%**; BrowseComp **87.5%**; BenchCAD **62.3%** (78.2% with the Python tool); CTF challenges **91.8%**; RSI Index **56.3%**; Internal Research Debugging **67.8%**; ExploitBench **52.9%**; ExploitGym **23.2%**; SEC-Bench Pro **57.7%**
- Reasoning: GPQA Diamond **92.9%**; FrontierMath Tier 1–3 **84.9%**, Tier 4 **68.3%**; LifeSciBench **56%**; GeneBench Pro **23.3%**; HealthBench Professional **57.7%**; MedChemBench **35%**; ARC-AGI-3 **0.8%**

*Independent (Artificial Analysis, per effort; max unless noted):*

- Intelligence Index **42.1** (was 55 on the pre-rebase v4.1 index — a version change, not a regression); Coding Index **76.7**; Agentic Index **43.2**; index cost **$1.40**, 120M output tokens, TTFT 144.87s, ~108 tok/s
- GPQA Diamond **92.5%**; HLE **42.9%**; IFBench **71.2%**; τ²-Bench Telecom **86.3%**; τ-Bench Banking low; SciCode; Terminal-Bench 4.0 **35.4%**; Terminal-Bench 2.1 **88.0%**; AA-LCR by effort: non-reasoning 58.7, low 71.3, medium 74.0, xhigh ~80, max ~83
- **Vals AI:** SWE-bench **95.4%**; Terminal-Bench 4.0 **22.7%**; GPQA **90.9%**; Vibe Code Bench v1.1 **74.6%**; SkillsBench **58.9%**; ProofBench v1.1 **74.0%**; TaxEval v2 **76.2%**; Vals Index **53.1%**; Vals Multimodal Index **65.1%** — and near-floor results on **ProgramBench 0.5%**, **Harvey Legal Agent 0.8%**, SRE Bench **9.5%**, Vibe Code Bench (1-100) **14.8%**
- Epoch AI: AIME 2024/2025 **99.7%**, GPQA Diamond **93.3%**, HLE **42.9%**; ARC-AGI-2 **83.9%**; LiveBench **77.9%**
- CodeRabbit (independent): long-horizon coding task pass rate **40.7%** vs Sol's 63.7%, using **55,594 average output tokens against Sol's 20,968**; code review **53/101 actionable (52.5%)**, −8.6pp against the baseline, at 35.7% precision
- Arena: text **1,466**, vision **1,268**, WebDev **1,522**, Document Arena **1,472**

### Normalized scores (1–100)

- **Tool use: 83/100.** A full first-party tool surface including `hosted_shell` and `apply_patch`, Agents' Last Exam 50.4%, BrowseComp 87.5%, CTF 91.8%, RSI Index 56.3% and τ²-Bench Telecom 86.3%. Held down by Terminal-Bench 4.0 (35.4% AA / 22.7% Vals), SRE Bench 9.5%, and CodeRabbit's 40.7% task pass rate where it spent 2.6x Sol's output tokens.
- **Reasoning: 90/100.** GPQA Diamond 92.5–93.3%, HLE 42.9%, FrontierMath Tier 1–3 at 84.9%, τ²-Bench Telecom 86.3%, IFBench 71.2%, ARC-AGI-2 83.9%, AIME 99.7%. The current-index Intelligence Index of 42.1 is 16 points under Opus 5.5, which is why this is not a 95.
- **Context window: 95/100.** The first pass treated the 1M window as capacity only. OpenAI's own **MRCR v2 at 89.6% (256K–512K) and 72.5% (512K–1M)** plus **GraphWalks at 76.9%/71.2%** are genuine retrieval measurements at full length. Docked a little for the 2x-input/1.5x-output price above 272K and the drop from 89.6% to 72.5% in the top half of the window.
- **Multimodal: 74/100.** Text and image in with text out, image generation available as a tool, BenchCAD at 62.3% (78.2% with Python), Vision Arena 1,268, Vals Multimodal Index 65.1%. Weaker on vision-specific reasoning than the Gemini tier, and GeneBench Pro at 23.3% shows the limit.
- **Coding: 89/100.** An independent **SWE-bench of 95.4%** (Vals) alongside SWE-Bench Pro 63.4%, DeepSWE 69.6%, Terminal-Bench 2.1 87.4–88.0%, Terminal-Bench Hard 57.6%, LiveBench 77.9%, Arena WebDev 1,522 and an AA Coding Index of 76.7/77.4 that sits just above Claude Fable 5. The counterweight is conspicuous and unexplained: **ProgramBench 0.5%**, Vibe Code Bench 14.8% on the 1-100 variant, and Terminal-Bench 4.0 in the twenties-to-thirties.
- **Cost efficiency: 78/100.** $2/$12 with a 90% cache-read discount, $2.50 cache writes and a 20% price cut since launch, at roughly $1.40 per Intelligence Index task. Deductions: the 2x/1.5x long-context tier, $10 per 1,000 web-search calls, and CodeRabbit's finding that Terra burns more than twice Sol's output tokens per coding task — the cheap rate does not automatically buy the cheap task.
- **Overall Score: 86.2/100.** (83 + 90 + 95 + 74 + 89) / 5 = 86.2. Best fit as a balanced default on the OpenAI platform for bounded coding, reasoning and agent work with a 1M context; measure it yourself on long-horizon program tasks, where its independent profile is unusually uneven.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across OpenAI's official `gpt-5.6-terra` model page, the GPT-5.6 launch post and full launch benchmark table, OpenAI's API deprecations schedule, Artificial Analysis's launch article and per-effort model data, Vals AI's benchmark rows, OpenRouter's aggregated benchmark table, CodeRabbit's independent coding and code-review test, and LayerLens/Currai and other independent tier reviews; the Intelligence Index version change (55 on v4.1 vs 42.1 on v4.3.2) and the Terminal-Bench 4.0 spread (35.4% AA vs 22.7% Vals) are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- OpenAI API — GPT-5.6 Terra model page (context, limits, pricing, tools, cutoff): https://developers.openai.com/api/docs/models/gpt-5.6-terra
- OpenAI — GPT-5.6 launch post and full benchmark table (MRCR v2, GraphWalks, Agents' Last Exam, coding, security): https://openai.com/index/gpt-5-6/
- OpenAI API — deprecations (Terra active; named replacement for gpt-5-mini, o4-mini, gpt-3.5-turbo): https://developers.openai.com/api/docs/deprecations
- Artificial Analysis — GPT-5.6 benchmarks across Intelligence, Speed and Cost: https://artificialanalysis.ai/articles/gpt-5-6-has-landed
- OpenRouter — GPT-5.6 Terra aggregated AA/Vals benchmark table: https://openrouter.ai/openai/gpt-5.6-terra
- Currai — GPT-5.6 Sol vs Terra, including CodeRabbit's independent task and review results: https://www.currai.app/blog/gpt-5-6-sol-vs-terra-benchmark
- LayerLens — GPT-5.6 benchmark review across 12 benchmarks (tier deltas, long-context recall): https://layerlens.ai/blog/gpt-5-6-benchmark-review-sol-terra-luna
- Models.fru.dev — GPT-5.6 Terra board-by-board standing (Arena, ARC-AGI-2, LiveBench, ECI): https://models.fru.dev/models/gpt-5-6-terra
- Vector Wire — GPT-5.6 Terra capability profile and pricing: https://vectorwire.ai/models/gpt-5-6-terra
- The Model Beat — GPT-5.6 Terra Epoch AI scores (AIME 99.7, GPQA 93.3): https://themodelbeat.com/models/gpt-5-6-terra