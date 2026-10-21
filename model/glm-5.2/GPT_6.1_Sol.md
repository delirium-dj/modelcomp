# GLM 5.2 — findings by GPT 6.1 Sol

- Source: Z.ai / `zai-org/GLM-5.2`, max reasoning, ordinary model rather than Coding-suffix identity.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GLM5.2, not GLM5.2 Coding, GLM5.3 or a Flash/vision variant.
- **Short description:** MIT open-weight text-only flagship emphasizing long-context engineering. Strong reasoning/older coding-agent results do not imply strong success on every newer terminal or whole-program benchmark.[1][2]
- **Provider / IDs:** Native ordinary **`glm-5.2`**, `https://api.z.ai/api/paas/v4/chat/completions`; current exact gateway **`z-ai/glm-5.2`** has multiple actual providers, including Z.ai FP8, backend20260616. **Coding Plan currently reroutes ordinary5.2 requests to5.3**, so using that subscription ID is not proof of a fresh5.2 run. AA supersession is not global shutdown; native standard guide and exact provider routes remain. No authenticated generation/model-pinned free Zen tariff verified.[2][3][4]
- **Release / knowledge:** AA dates **2026-06-16**, matching gateway snapshot and primary dated FrontierSWE reference. Vals lists **June13**, while its evaluation note isJune17; source metadata differs, not proof of two interchangeable checkpoints. Exact training cutoff unverified.[1][3][5][6]
- **Context / output:** Primary **1M/128K output**, exact config **1,048,576 positions**, native gateway1,048,576/**131,072 completion**. Some routes only262K; others advertise943,718 output, not independently tested universal generation lengths or additive full input/output. Vals131,072 cap differs from vendor reasoning-evaluation163,840.[1][2][3][7]
- **Modalities / reasoning / tools:** **Text → text only**, functions/structured output, caching, streaming and external MCP tools. Native example says thinking enabled by default, can disable, variable effort; **max** evaluation retained. External PDF parsing, Coding Plan vision MCP and code-generated videos do not add native image/audio/video generation/understanding.[1][2][4]
- **Pricing (2026-10-21):** Native per1M **$1.40 input/$4.40 output/$0.26 cache read**; temporarily free **cache storage**, not inference; web search **$0.01/use**. Current discounted DeepInfra FP4 **$0.5625/$1.80/$0.105 cache**, Flex **$0.45/$1.44/$0.084**. Wafer's very cheap input$0.0341 accompanies output$7, not universally cheapest tasks. Precision/promotions/caps differ; no$0 inference assumed.[3][8]
- **Architecture / licence:** AA records **753B total/40B active**, not independently summed from weights; secondary744B counts not silently equated. Exact config verifies **78-layer MoE/DSA**,256 routed experts/top8 plus1 shared, hidden6144, IndexShare pattern/1M positions. **Unmodified MIT licence directly read**, not GLM5.3's custom licence. Huge total weights still impose self-host resources.[1][5][7][9]

### Raw benchmarks found

**Attribution:** Complete exact primary table **and full harness/metric footnotes inspected**. AA selected **Max UUID `f7a4ea75-e548-4069-80d4-9be8bc7c009b`**, current composite **measured**. Vals exact native zAI profile/temp1/top-p.95/**max/131,072 output**; dated launch ranks versus current suite distinguished.[1][5][6]

Agent / tool use:

- Vendor **TB2.1 Terminus2 81.0%**,256K context/48K generation/4h timeout; **best harness82.7%**, ClaudeCode with128K override/no wall-clock limit/five-run mean. Independent **AA77.90% /Vals67.79%**, different harness/budgets. **AA TB4 1.01% measured**, not missing or a same-version replication.[1][5][6]
- Independent AA **Tau2 99.12% /Tau3-Banking34.64% /IFBench73.33%**, **GDPval1372.01 Elo /Briefcase1228.86 Elo,36.06% rubric pass /AutomationBench partial28.40% /EnterpriseOps-Gym42.73%**.[5]
- Vendor **MCP-Atlas public76.8%**,500 tasks/thinking/10min task timeout/Gemini3Pro judge; **Tool-Decathlon48.2%**, official service128K cap. Preserve its publisher's name rather than assuming every Toolathlon version is identical.[1]
- Vals **EMB61.53% /Finance Agent v2 49.70% /Legal Research31.25% /SkillsBench45.08% /SRE0.00% measured**. No verified exact Claw-Eval/ClawProBench/SWE Atlas Codebase QnA found.[6]

Reasoning / knowledge:

- Vendor **HLE text40.5%, with tools54.7% /GPQA91.2% /CritPt20.9% /AIME2026 99.2%**. Reasoning generation163,840/temp1/top-p.95; default text-only, starred competitors full-set; GPT5.5-medium judge. Tool-HLE300K context without context management, not unassisted/full1M performance.[1]
- Independent **AA GPQA89.49% /HLE41.15% /CritPt20.86%**, Vals **GPQA85.61% /MMLU-Pro86.71% /LegalBench84.07%**. Exact AIME2025 field absent, not borrowed from2026.[5][6]
- **AA Index33.705 measured**; Vals displayed56.71% differs from its datedJune17 **65.02%/#5 overall**. Different indices/suites and snapshots, not this report's Overall.[5][6]
- AA **Omniscience accuracy24.33% /hallucination26.30% /reliability4.4333**: restrained guessing but incomplete factual knowledge; denominators differ.[5]

Coding / context / modality:

- Independent **SWE Verified82.80% Vals /SciCode51.16% AA /LiveCodeBench69.50% Vals /Vibe Code63.96% /Migration37.87% Vals**. Useful bounded-to-app engineering evidence, capped by **ProgramBench fully resolved0.50%** and modern terminal weakness.[5][6]
- Vendor **SWE Pro62.1%**, tailored OpenHands/400K context/32K output; **NL2Repo48.9%**,400K/48K with anti-hacking checks; **DeepSWE46.2%**,official pier+mini-swe-agent/400K/2h/offline container.[1]
- Vendor **ProgramBench63.7**,200 instances/ClaudeCode/max/400K/64K/2000-turn/6h. Metric aggregation is not clarified by that table; **not silently treated as replicated fully resolved success or averaged with Vals0.50%**.[1][6]
- Vendor/external-attributed **FrontierSWE dominance74.4** (June16 snapshot), **PostTrainBench34.3 /SWE-Marathon13.0**,1M/max/128K; exact dominance/long-task metrics are not ordinary repair accuracy or independently rerun here.[1]
- AA **LCR78.33% /MLCR12.78%**; no verified ≥98% full1M MRCR/RULER retention. **GDP.pdf10.4% is tool-mediated for text-only model**, MMMU-Pro null; no native multimodal score fabricated.[2][5]
- AA median **85.90tokens/s /3.34s first chunk**, **177.56M output/157.35M reasoning tokens**, weighted **$1.4726/task**; TB4 **$7.812/task** despite1.01% success. Vals workload **35min16s**, dated cost$2.08/test, different scope. Low token prices do not erase long reasoning/failure costs.[5][6]

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong older terminal/customer-service and useful banking/deliverables, capped by TB4 1.01%, SRE0, modest automation and harness-budget dependence.[1][5][6]
- **Reasoning: 85/100.** Strong independent HLE/GPQA/CritPt and measured broad index, capped by limited factual coverage and uneven specialist/long-context quality.[5][6]
- **Context window: 95/100.** Primary/config/native route establish1M tier, capped by ordinary LCR/MLCR and absence of near-perfect maximum-window retrieval.[2][3][5][7]
- **Multimodal: 15/100.** Text-only native model; external document/vision tools and successor products do not add modalities.[2][3]
- **Coding: 84/100.** Strong independent repairs/SciCode and useful app/migration performance, capped by full-program0.50%, hard-terminal1.01% and vendor-metric/scaffold differences.[1][5][6]
- **Cost efficiency: 86/100.** Good native paid value and cheaper listed optimized routes/caching, capped by heavy max-effort token usage, expensive failed tasks and self-host resources.[3][5][8]
- **Overall Score: 71/100.** Half-up mean `(78 + 85 + 95 + 15 + 84) / 5 = 71.4`; cost excluded. Strong text-only engineering/reasoning specialist; native modality breadth materially lowers this general-purpose average.

### Research trail and sources

Fresh Bing RSS exact-model official benchmark query returned unrelated Wikipedia links; Google independent query an interstitial; DuckDuckGo weights/context/pricing supplied actual provider/primary leads. Exact primary full table/footnotes, native guide/pricing/current Coding Plan routing, config/MIT text, selected AA Max, exact Vals and live providers compared. Current subscription5.3 routing is distinct from actual5.2 standard routes; no Coding-suffix/successor or peer report evidence imported. Date/parameter/ProgramBench metric differences retained without invented resolution.

[1]: https://huggingface.co/zai-org/GLM-5.2/raw/main/README.md "Complete exact benchmark table and all task-specific harness/budget/full-set/metric footnotes"
[2]: https://docs.z.ai/guides/llm/glm-5.2 "Primary text-only1M/128K, variable thinking and ordinary native API example"
[3]: https://openrouter.ai/api/v1/models/z-ai/glm-5.2/endpoints "Actual June16 native/third-party routes, precision/caps/promotions and exact tariffs"
[4]: https://docs.z.ai/devpack/overview "Current Coding Plan ordinary5.2 requests route to5.3; not a pinned5.2 benchmark call"
[5]: https://artificialanalysis.ai/models/glm-5-2 "Exact selected Max measured record, parameters, independent tasks/calibration/context/runtime/cost"
[6]: https://www.vals.ai/models/zai_glm-5.2 "Exact native max131K profile, current repairs/apps/full-program/SRE and dated launch notes"
[7]: https://huggingface.co/zai-org/GLM-5.2/raw/main/config.json "Exact1048576-position78-layer MoE/DSA/IndexShare configuration"
[8]: https://docs.z.ai/guides/overview/pricing "Native$1.40/$0.26 cached/$4.40, temporarily free cache storage rather than inference, search charges"
[9]: https://huggingface.co/zai-org/GLM-5.2/raw/main/LICENSE "Directly read unmodified MIT licence, distinct from successor's custom terms"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, full primary card/footnote/licence/config inspection and exact max-effort independent evaluator/current provider/routing comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
