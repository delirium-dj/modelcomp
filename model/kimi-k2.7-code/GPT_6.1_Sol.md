# Kimi K2.7 Code — findings by GPT 6.1 Sol

- Source: Moonshot AI / `moonshotai/Kimi-K2.7-Code`, original coding checkpoint.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Kimi K2.7 Code.
- **Short description:** Open-weight coding-focused derivative of K2.6, with always-on thinking and preserved reasoning across turns. Moonshot reports approximately 30% fewer thinking tokens on its comparisons; this is a vendor workload claim, not a universal cost reduction.[1][2]
- **Provider / access:** Exact native **`kimi-k2.7-code`** at `https://api.moonshot.ai/v1`, OpenAI/Anthropic-compatible APIs; weights `moonshotai/Kimi-K2.7-Code`; gateway `moonshotai/kimi-k2.7-code`, backend `moonshotai/kimi-k2.7-code-20260612`. No free Zen ID verified.[1][2][5]
- **Serving aliases:** Official `kimi-k2.7-code-highspeed` is **the same model**, with higher-speed serving and doubled native token rates; no second checkpoint score. Current Kimi Code subscription docs map **`kimi-for-coding` to K2.8 Preview**, while `kimi-for-coding-highspeed` remains K2.7 Code HighSpeed. A present-day subscription response is not proof the original K2.7 model was invoked.[2][6]
- **Release / knowledge:** **2026-06-12** in both independent evaluators and exact dated gateway. The current publisher resource page is updated October 8; secondary June 25 claims are not substituted for release identity. No verified exact knowledge cutoff.[3][4][5][8]
- **Context window:** **262,144 shared total**, 256K in publisher prose. Native quickstart defaults `max_tokens` to **32,768**; Vals evaluates with **256,000** generation allowance, while direct Moonshot gateway advertises **235,929**. StreamLake route **256,000/32,000**, Alibaba route **262,144/16,384** show provider differences. Generation/reasoning/history share context, so output maxima are not additive to full input.[1][2][4][5]
- **Modalities / tools:** Native text/image → text; official API additionally supports **experimental video input**, not yet generally supported by third-party vLLM/SGLang deployment. The gateway advertises only text/image. No native audio/non-text output or raw PDF capability claimed. Thinking and `preserve_thinking` cannot be disabled; native `tool_choice` permits only auto/none, and sampling is fixed at temperature 1/top-p .95. Tool availability is not evidence of forced-tool support.[1][2][5]
- **Pricing (2026-10-20):** Native per-million **$0.95 input miss / $4 output / $0.19 input hit**. HighSpeed **$1.90/$8/$0.38** for the same model. Exact gateway alternatives include Inceptron **$0.6712/$3.35/$0.18**, CoreWeave **$0.71/$3.50/$0.15** and discounted StreamLake **$0.7125/$3/$0.1425**, with differing caps. Subscriptions are separate finite usage plans, not $0 public inference.[5][7]
- **Architecture / licence:** **1T total / 32B active MoE**, 61 layers, MLA, 384 experts/8 selected plus one shared, **400M MoonViT**, native INT4 weights. **Modified MIT**: extra UI attribution applies to commercial services exceeding **100M monthly active users or $20M monthly revenue**; not unmodified MIT. Open-weight availability does not erase serving costs.[1][9]

### Raw benchmarks found

**Provenance:** Vendor K2.7/K2.6 runs use thinking-enabled Kimi Code CLI, temperature 1/top-p .95, 262,144 context; competitors use their own Codex/Claude Code settings. AA selected exact record UUID `8d0cb231-7303-452c-9923-a9620b948475` is reasoning-enabled and measured. Vals exact `kimi/kimi-k2.7-code` defaults to Moonshot, temperature 1/top-p .95, 256,000 output.[1][3][4]

Agent / tool use:

- **TB2.1 67.42% AA / 67.04% ± 0.38 Vals**, close independently measured agreement. Current **TB4 1.01% measured AA** is much weaker; selected terminal-science is null.[3][4]
- **Tau2 90.06% / Tau3-Banking 20.21% AA**, **GDPval 1037.51 Elo / Briefcase 858.75 Elo**, rubric pass **20.70%**, **AutomationBench 24.45% partial / EnterpriseOps-Gym 40.23% / IFBench 63.13% AA**.[3]
- Vendor **MCP-Atlas 76.0%**, official configuration, **100 tool calls / 32K per step**, three runs; **MCPMark-Verified 81.1%**, five server environments, human-rechecked edition, 100-step budget/32K per step, three runs. Different benchmarks, not multiple replications of the same score.[1]
- Vendor internal **Kimi Claw 24/7 Bench 46.9%**, **610 evaluation points across 17 scenarios**, average point-pass rate over three OpenClaw runs. It is not Claw-Eval, ClawProBench or 46.9% of multi-day tasks completely solved; no exact latter-suite score found.[1]
- **SkillsBench 50.04% ± 4.24 Vals**. Long-horizon professional evidence is materially weaker than the older terminal headline.[4]

Reasoning / knowledge:

- **GPQA Diamond 89.60% / HLE 35.03% / CritPt 10.0% AA**, current **Intelligence Index 25.812 measured**. No exact independently verified AIME score found.[3]
- **Omniscience accuracy 39.57% / hallucination 82.38% / reliability −10.2167 AA** cap claims of trustworthy specialist knowledge.[3]

Coding:

- **SWE-bench Verified 78.20% ± 1.85 / LiveCodeBench 82.05% ± 1.07 Vals**, **SciCode 47.80% AA**. No exact independently inspected SWE-Pro/DeepSWE score found.[3][4]
- Vendor internal **Kimi Code Bench v2 62.0**, versus **50.9 K2.6**, and **MLS Bench Lite 35.1** on the 30-task ML-method subset with five hours/problem. These are vendor harness results, not independent leaderboard gains or general task success rates.[1]
- Vendor **Program Bench 53.6** is published against behavioral-test-based reconstruction tasks; independent Vals **ProgramBench 0.00% fully resolved**. The publisher's card does not identify the headline's aggregation sufficiently to equate it to Vals all-task resolution. Preserve both provenance/metric caveats rather than assert 53.6% complete programs or infer a controlled regression.[1][4]
- **Vibe Code Bench v1.1 47.21% ± 5.19 / Code Migration 25.39% Vals** show bounded engineering ability with significant end-to-end headroom.[4]

Context / vision / runtime:

- **LCR 79.33% / MLCR 16.11% AA**; no exact maximum-window MRCR/RULER ≥98% retrieval found.[3]
- **GDP.pdf 11.2% all-pass AA** is a workload using external file handling; selected MMMU-Pro is null. Native vision/video capability is documented, but no exact numeric vision/video accuracy was verified; K2.5/K2.6 scores are not inherited.[1][2][3]
- AA median **58.79 output tokens/s / 2.93 s first chunk**, **122.13M evaluation output / 106.83M reasoning tokens**, **$0.5412 weighted task cost** at native standard rates. HighSpeed's claimed 180–260 tokens/s belongs to another serving tier. Vals **54 min 20 s** is different workload latency, not first chunk.[2][3][4]

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong independent TB2.1/Tau2 and vendor MCP support useful agents, capped by Tau3 20.21%, TB4 1.01% and low full-deliverable reliability.[1][3][4]
- **Reasoning: 81/100.** GPQA 89.60%, HLE 35.03% and CritPt 10% support substantial reasoning, capped by negative calibrated knowledge and uneven broader task execution.[3]
- **Context window: 76/100.** Verified 262,144 is in the 200K–500K band; preserved thinking and optional provider output allowances do not confer million-token capacity.[1][2][4][5]
- **Multimodal: 82/100.** Real image and official experimental-video input support the visual/video band, capped by route restrictions, absent exact visual benchmarks and no native audio/non-text output.[1][2][3][5]
- **Coding: 82/100.** Independent SWE 78.2%, LCB 82.05% and TB2.1 support useful bounded coding, capped by modest app/migration success, ProgramBench metric mismatch and weak newer terminal performance.[1][3][4]
- **Cost efficiency: 85/100.** Reasonable native/gateway paid rates and caching offer good value, capped by always-on reasoning usage, provider limits and HighSpeed surcharge; open weights/subscriptions are not free API use.[1][3][5][7]
- **Overall Score: 79/100.** Half-up mean `(75 + 81 + 76 + 82 + 82) / 5 = 79.2`; cost excluded. Best fit: bounded repository engineering with retained reasoning and exact standard/HighSpeed route selection.

### Research trail and sources

Fresh Bing RSS `"Kimi K2.7 Code" official benchmark` returned irrelevant profiles; Google `"Kimi K2.7 Code" independent review` an interstitial; DuckDuckGo `"Kimi K2.7 Code" context price model` produced exact card/evaluator/provider leads. Publisher README/footnotes, licence, current quickstart/pricing/subscription mappings and AA/Vals were compared. A guessed blog path redirected to a research index; the actual resource page resolved. Third-party Thesys article exposed a title/date but no substantive body, so supplies no benchmark evidence. No peer findings consulted.

[1]: https://huggingface.co/moonshotai/Kimi-K2.7-Code/raw/main/README.md "Exact weights, vendor benchmarks/footnotes, always-on reasoning and experimental-video restriction"
[2]: https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart "Native exact model, same-model HighSpeed identity, API defaults and constraints"
[3]: https://artificialanalysis.ai/models/kimi-k2-7-code "Exact selected independent reasoning record, current metrics/cost/runtime"
[4]: https://www.vals.ai/models/kimi_kimi-k2.7-code "Independent exact model, settings, repair/terminal/app and full-resolution results"
[5]: https://openrouter.ai/api/v1/models/moonshotai/kimi-k2.7-code/endpoints "Exact dated backend, current provider caps, image-only gateway and rates"
[6]: https://www.kimi.com/code/docs/en/benefits.html "Current subscription docs redirect: kimi-for-coding now K2.8 Preview"
[7]: https://platform.kimi.ai/docs/pricing/chat "Primary standard/HighSpeed rates and separation from subscription billing"
[8]: https://www.kimi.com/resources/kimi-k2-7-code "Current official resource and vendor internal-versus-external benchmark context"
[9]: https://huggingface.co/moonshotai/Kimi-K2.7-Code/raw/main/LICENSE "Modified MIT with monthly-user/revenue attribution clause"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, primary exact checkpoint/API/licence/pricing checks and directly attributed independent evaluator/provider comparisons. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
