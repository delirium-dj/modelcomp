# GLM 5.3 — findings by GPT 6.1 Sol

- Source: Z.ai / `zai-org/GLM-5.3`, max-reasoning flagship, not Flash/FlashX.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GLM 5.3.
- **Short description:** Z.ai's open-weight text-only flagship emphasizing complex engineering and long-horizon agents. Publisher says it shares GLM-5.2's base and gains come from post-training; this does not make GLM-5.2, 5.3-Flash or FlashX interchangeable checkpoints.[1][2]
- **Provider / access:** Native **`glm-5.3`**, OpenAI-compatible Chat Completions example `https://api.z.ai/api/paas/v4/chat/completions`; current docs also list Responses/Anthropic-compatible access with account restrictions. Self-host frameworks supported; exact gateway **`z-ai/glm-5.3`**, backend `z-ai/glm-5.3-20260816`. No separately verified free Zen ID.[1][2][6]
- **Release / knowledge:** **2026-08-18** in both independent evaluators; gateway snapshot label August 16 precedes release listing and is not a second public release date. No verified exact knowledge cutoff.[4][5][6]
- **Context window:** Primary **1M total/128K output**; exact config **1,048,576 positions**, native gateway **1,048,576/131,072**. Other providers advertise up to **943,718 output**, while Io Net lists **262,124 total/131,072** and some 1M routes cap at 128,000. These are route claims, not universal tested completion lengths or additive full input/output.[2][6][7]
- **Modalities / reasoning:** **Text → text only**, always thinking; native `thinking.type:disabled` is unsupported. `low`/`high`/`max`, default **max**; publisher recommends max for reproduction. Preserved-thinking template behavior differs for chat (`clear_thinking:true` recommended). Function calling, streaming, context caching and structured output are documented. External PDF processing does not add native vision/audio/video.[1][2]
- **Pricing (2026-10-20):** Native **$1.40 input/$4.40 output/$0.26 cache hit per 1M**; cached storage temporarily free, **not inference itself**. Web search **$0.01/use**. Current exact gateway examples: Wafer FP4 **$0.079/$1.40/$0.078 hit**, Inceptron FP4 **$0.55/$1/$0.18 hit**, discounted DeepInfra **$0.5625/$2.50/$0.125 hit**, Z.ai native route matches list. Precision/caps/promotions differ; subscription quota is not a zero-price public API.[3][6]
- **Architecture / licence:** AA records **753B total/40B active**; exact causal-LM config verifies MoE/DSA, 78 layers, 256 routed experts, 8 selected and 1 shared, FP8 quantization and 1M positions. **Custom GLM-5.3 License**, not inherited MIT: Model-as-a-Service operators and affiliates above **$10B aggregate revenue over any consecutive 12 months** require Z.ai's security review for commercial use, with stated embedded-product/relay exclusions. Open weights do not erase hardware costs.[4][7][8]

### Raw benchmarks found

**Attribution:** AA exact selected **GLM-5.3 (Max)** UUID `cd684ea4-b475-4269-b001-d469d06d8a7a`, exact weights link, measured current index. Vals exact `zai/glm-5.3` defaults to **Fireworks/max**, temperature 1/top-p .95/128,000 output; suite-specific settings vary. Publisher harnesses/budgets are explicitly separate.[1][4][5]

Agent / tool use:

- **TB2.1 88.2% vendor** with Claude Code/6h timeout, versus **83.90% AA max**. **TB3.0 28.3% vendor**, avg@3, 400K context/128K output, up to 600 turns/10h. **TB4 41.92% AA / 38.89% ± 1.82 Vals**; versions are not interchangeable.[1][4][5]
- **Terminal-Bench-Science 9.52% AA / 5.71% ± 2.79 Vals** shows uneven scientific tool execution. **Tau3-Banking 50.31% AA**, selected Tau2 null.[4][5]
- **GDPval 1650.31 Elo / Briefcase 1506.86 Elo**, rubric pass **51.35%**, **AutomationBench-AA 62.20% partial / AnalystAgent 38.75% / EnterpriseOps-Gym 36.44% AA**. Vendor quoted GDPval **1769** is an earlier AA-attributed value, not an independent publisher replication.[1][4]
- Vendor **Toolathlon Verified 73.0% pass@1 averaged over three runs**, **AutomationBench v1.0.6 48.2%** with a specific null-handling fix, **Agents' Last Exam ALE-CLI 28.5%** on 105 long-horizon tasks. These versions and full/partial metrics differ from AA's automation figure.[1]
- Vals **Finance Agent v2.1 65.00% / Legal Research 49.04% / Harvey legal v1.1 14.58% / SRE 9.16% / SkillsBench 47.51%**. No exact Claw-Eval/ClawProBench/MCP-Atlas/SWE Atlas QnA found.[5]

Reasoning / knowledge:

- **GPQA Diamond 91.72% AA / 88.13% ± 1.85 Vals**, **HLE 42.26% / CritPt 19.14% AA**. Vendor **HLE with tools 62.5%** uses 163,840 generation, 300K managed context and a GPT-5.6 Luna medium judge; not unassisted HLE.[1][4][5]
- **ProofBench v1.1 49.00% / MMLU-Pro 86.77% / IOI 68.44% Vals**. No independently verified exact AIME score found.[5]
- **AA Intelligence Index 44.777 measured**, **Vals Index 59.73% ± 1.11, #9/22**, different scales/suites, neither this report's Overall.[4][5]
- **Omniscience accuracy 33.85% / hallucination 29.55% / reliability index 14.3 AA**: useful abstention/calibration but limited factual coverage.[4]

Coding / long context:

- **SWE-bench Verified 95.40% ± 0.94 Vals, #6/88**, **LiveCodeBench 80.53% / SciCode 59.03% AA**. These are independent exact-model results; no verified exact SWE-Pro result silently substituted from GLM-5.2 or Flash.[4][5]
- Vendor **DeepSWE v1.1 66.9%**, mini-swe-agent, 400K context/6h timeout; **NL2Repo 58.0%**, 1M context/64K generation with rule/LLM anti-cheating judgments.[1]
- Vendor **ProgramBench Almost Solved 19.0%**, versus **Vals ProgramBench fully resolved 1.50%**. These metrics are explicitly different; **Vibe v1.1 78.13%**, persistent **VCB 1–100 19.99%**, **Migration v1.1 55.07% Vals** cap claims from high bounded repair performance.[1][5]
- Vendor internal Code Bench **34.5% max/~75K output**, versus GLM-5.2 **23.4%/~96K**; “50% better” is a private-workload relative gain, not +50 percentage points or universal task improvement.[2]
- Vendor **CyberGym 84.5%** uses unlimited per-task timeout over 1507 tasks; **ExploitGym 105/130 tasks** at normalized 2h/6h budgets are counts, not percentages; **ExploitBench 54.4** is coverage with revision union, not 54.4% full programs. Full footnotes qualify these headline figures.[1]
- **LCR 79.67% / MLCR 48.33% AA**, no verified ≥98% full-window MRCR/RULER. **GDP.pdf 11.2% AA** is tool-mediated for this text-only model, not native PDF/vision capability; selected MMMU-Pro null.[2][4]
- AA median **84.10 output tokens/s / 2.59 s first chunk**, **208.64M evaluation output/179.50M reasoning tokens**, weighted **$2.0056/task** at native rates. Vals different composite **$8.525/test / 64 min 24 s** shows workload cost/latency can dominate token-price comparisons.[4][5]

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong independent banking, modern terminal and professional deliverables, capped by scientific/SRE and difficult legal tails, and non-comparable vendor harness budgets.[1][4][5]
- **Reasoning: 88/100.** Independent GPQA/HLE/CritPt and measured broad index support strong text reasoning, capped by limited factual coverage and uneven proof/specialist results.[4][5]
- **Context window: 95/100.** Primary/config/actual native route confirm million-token capacity; missing near-perfect full-window retention prevents 100.[2][4][6][7]
- **Multimodal: 15/100.** Native text-only; external document tools and separate Flash/Vision products do not confer image/audio/video or non-text output.[2][6]
- **Coding: 90/100.** Exceptional independent bounded repairs plus strong SciCode/DeepSWE, capped by persistent-app 19.99%, full ProgramBench 1.5% and long-horizon/harness dependence.[1][4][5]
- **Cost efficiency: 85/100.** Good native value and much cheaper listed optimized routes, capped by heavy reasoning, real multi-dollar tasks, precision differences and substantial self-host resources.[3][4][5][6]
- **Overall Score: 75/100.** Half-up mean `(85 + 88 + 95 + 15 + 90) / 5 = 74.6`; cost excluded. Strong text engineering/agent specialist; text-only coverage materially lowers this general-purpose five-axis average.

### Research trail and sources

Fresh Bing RSS `"GLM-5.3" official model benchmark` returned unrelated chatbot-product pages; Google `"GLM-5.3" independent benchmark review` an interstitial; DuckDuckGo `"GLM-5.3" model weights context pricing` a bot challenge. Exact HF full model/footnotes/config/licence, primary native guide/pricing, selected AA max, Vals and live gateway resolved identity/settings and measured results. No Flash/FlashX, predecessor or peer findings used as evidence.

[1]: https://huggingface.co/zai-org/GLM-5.3/raw/main/README.md "Exact primary benchmark table and detailed harness/budget/metric footnotes"
[2]: https://docs.z.ai/guides/llm/glm-5.3 "Primary text-only limits, always-on thinking/default max, native protocols and private Code Bench"
[3]: https://docs.z.ai/guides/overview/pricing "Current native tariff, temporarily free cached storage and separately billed web search"
[4]: https://artificialanalysis.ai/models/glm-5-3 "Exact selected Max measured record, dimensions, parameters and runtime/task cost"
[5]: https://www.vals.ai/models/zai_glm-5.3 "Independent exact max profile, Fireworks settings, modern tasks and full-resolution results"
[6]: https://openrouter.ai/api/v1/models/z-ai/glm-5.3/endpoints "Actual native/optimized routes, snapshot date, precision, caps and tariffs"
[7]: https://huggingface.co/zai-org/GLM-5.3/raw/main/config.json "Exact MoE/DSA causal-LM, 1,048,576 positions and FP8 configuration"
[8]: https://huggingface.co/zai-org/GLM-5.3/raw/main/LICENSE "Custom licence with defined large-MaaS revenue/security-review clause; not MIT"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, full primary model/licence/footnote inspection, exact independent max-effort evaluator and current provider/pricing comparison. Scores are editorial normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
