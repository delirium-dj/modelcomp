# DeepSeek V4 Flash — findings by GPT 6.1 Sol

- Source: DeepSeek / official `DeepSeek-V4-Flash-0731`, max/high configurations distinguished.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** DeepSeek V4 Flash, assessed as **official0731**, not April0423 preview, Vision-Exp, V4-Pro or V4.1 Flash.[1]
- **Short description:** MIT open-weight text-only reasoning/agent model with inexpensive inference and million-token capacity. Retirement of its native alias does not erase downloadable weights or separately pinned providers.[1][2]
- **Provider / identity:** Exact weights **`deepseek-ai/DeepSeek-V4-Flash-0731`** and actual gateway **`deepseek/deepseek-v4-flash-0731`**. **Bare OpenRouter `deepseek/deepseek-v4-flash` still denotes0423 preview**, while **native `deepseek-v4-flash` is retired and now routes toV4.1-Flash-1017**, per current primary API guide. An accepted native legacy ID is therefore not proof of a0731 test. No authenticated inference/free Zen ID verified.[2][3][4]
- **Release / cutoff:** **2026-07-31** in exact AA/Vals/profile naming; primary0731 card explicitly calls it official release superseding preview. Exact knowledge cutoff not verified.[1][5][6]
- **Context / output:** Exact config **1,048,576 positions**, AA1M. Primary0731 recommends **384K output for high/max**; current DeepInfra0731 lists1,048,576/384,000. Other routes range262K to1M,32K to943,718 advertised completion. No universal tested output maximum or additive full input/output budget assumed.[1][3][7]
- **Modalities / thinking / tools:** **Text → text only**; no image/audio/video/non-text generation inherited from successor. Low/high/max reasoning; card provides dedicated Python encoding, not Jinja template. Functions/structured output depend on correct parser/harness; max code-agent evaluation uses DeepSeek Harness minimal mode/temp1/top-p.95. DSpark draft module attached; no universal hardware-independent speedup inferred.[1][3]
- **Pricing (2026-10-21):** Exact0731 paid examples per1M **DeepInfra FP8$0.06 input/$0.18 output/$0.015 cache**, **Relace FP4$0.057/$0.1341/$0.028**, Together$0.14/$0.28/cache$0.03. AA recorded$0.14/$0.28/cache$0.028 is an evaluator reference; Vals$0.44/$1.32 is its historical snapshot. Current native Flash pricing buysV4.1, not this checkpoint. No verified$0 inference tariff; self-hosting remains resource-intensive.[2][3][5][6]
- **Architecture / licence:** **284B total/13B active**, MoE with CSA/HCA attention and mHC architecture lineage; exact0731 config43 layers/hidden4096,256 routed experts/top6 plus1 shared,1M positions. **MIT text directly verified**. Downloadable weights/precision and draft artifacts are distinct from a native hosted availability guarantee.[1][7][8]

### Raw benchmarks found

**Provenance:** Exact official0731 primary table, **AA Max UUID `fe4c0848-e284-4e52-a79d-cdc28392f1a9`**, current composite **measured**. Vals exact0731 **high/native DeepSeek/temp1/384,000 output**, not max or a currently reproducible legacy-native call. Preview and successor figures not merged.[1][5][6]

Agent / tool use:

- Vendor **TB2.1 82.7% /Toolathlon-Verified70.3% /Agents' Last Exam25.2% /AutomationBench Public25.1%**, code-agent tasks use DeepSeek Harness minimal/max. **AA TB2.1 78.65% /TB4 12.12% /Tau3-Banking39.38%**; Vals high **TB4 18.69% /Terminal-Science4.29%**. Benchmark/version/effort differences explicit.[1][5][6]
- AA **GDPval1433.74 Elo /Briefcase1258.64 Elo,41.52% rubric pass /AutomationBench partial53.97%**. Public vendor automation and AA partial reward are different metrics; Tau2 null, not zero.[5]
- Vals **Finance Agent49.52% /EMB56.98% /Legal Research30.29% /SkillsBench50.67% /Tax Agent28.07%**. No verified exact Claw-Eval/ClawProBench/MCP-Atlas/SWE Atlas QnA found; April preview tool scores not substituted.[6]

Reasoning / knowledge:

- AA Max **GPQA90.81% /HLE38.55% /CritPt16.57% /Index34.331 measured**; Vals high **GPQA89.90% /MMLU-Pro86.21% /ProofBench56.00%**.[5][6]
- AA **Omniscience accuracy40.38% /hallucination91.70% /reliability−14.2833**: strong reasoning does not imply good abstention/calibration. Different denominators, not a claim that92% of all statements are false. No exact0731 AIME score found.[5]

Coding / context / modality:

- Vendor0731 **DeepSWE54.4% /NL2Repo54.2% /CyberGym76.7%**, plus private **DSBench-FullStack68.7 /Hard59.6** explicitly internal, not independently validated.[1]
- Independent Vals high **SWE Verified88.80% /LiveCodeBench87.26% /Vibe Code74.74% /Migration38.63%**, AA max **SciCode50.35%**. **ProgramBench fully resolved0.00% Vals** and hard-terminal/science tails limit general end-to-end claims. No exact0731 SWE-Pro result imported from preview.[5][6]
- AA **LCR79.67%**, no verified ≥98% full1M MRCR/RULER. Preview's MRCR tables are not0731 reruns. **GDP.pdf11.0%** is tool-mediated for text-only checkpoint; MMMU-Pro null, not native vision support.[1][5]
- AA median **144.45tokens/s /1.30s first chunk**, **242.34M output/217.55M reasoning tokens**, weighted **$0.1744/task at its recorded rates**. TB4 alone$0.9599/task; Vals workload38min20s differs in scope. These are not authenticated current route benchmarks.[5][6]

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong independent older terminal/banking/professional results, capped by harder-terminal/science tails, public-versus-partial metrics and effort/harness dependence.[1][5][6]
- **Reasoning: 83/100.** Strong exact0731 GPQA/HLE/CritPt, capped by poor calibration and lower broad coverage than frontier all-task models.[5][6]
- **Context window: 95/100.** Exact1M config and actual pinned routes, capped by ordinary LCR, absent near-perfect maximum-window retrieval and per-provider restrictions.[3][5][7]
- **Multimodal: 15/100.** Native text-only; successor/vision experiment or external PDF tools confer no additional native modalities.[2][3][5]
- **Coding: 84/100.** Strong independently measured repairs/apps/SciCode, capped by ProgramBench0 and hard-terminal/scientific reliability.[1][5][6]
- **Cost efficiency: 98/100.** Extremely cheap verified paid0731 routes, capped by long max-reasoning usage, provider differences and large self-host memory; no free tariff inferred.[3][5][6]
- **Overall Score: 71/100.** Half-up mean `(79 + 83 + 95 + 15 + 84) / 5 = 71.2`; cost excluded. Strong text-only coding/agent specialist; native alias now selects a different model, so exact version pinning matters.

### Research trail and sources

Fresh Bing RSS exact-model GA benchmark query returned generic DeepSeek links; Google independent query an interstitial; DuckDuckGo V4Flash/0813 pricing resolved the critical native-alias retirement. Primary current API guide, exact0731 card/config/MIT, both actual0423/0731 gateway records, selected AA Max and exact Vals0731 high inspected. Initial unsuffixed Vals404 and guessed July31 announcement redirected to the current API guide; neither was mistaken for missing model evidence. Current pricing path also redirected, so no fabricated native0731 quote. No peer/V4.1/Pro/preview quality scores used.

[1]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731/raw/main/README.md "Official0731 supersedes preview, exact task table/harness/max mode, DSpark and384K recipe"
[2]: https://api-docs.deepseek.com/ "Primary native legacyV4Flash retired; accepted ID now servesV4.1-Flash-1017"
[3]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-flash-0731/endpoints "Actual version-pinned0731 providers, precision/caps and current paid tariffs"
[4]: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-flash/endpoints "Bare gateway independently denotes0423 preview; not native alias or0731"
[5]: https://artificialanalysis.ai/models/deepseek-v4-flash "Exact selected official0731 Max, measured composite and independent task/calibration/context/runtime/cost"
[6]: https://www.vals.ai/models/deepseek_deepseek-v4-flash-0731 "Exact0731 high384K profile, independent bounded/apps/program/science results and dated tariffs"
[7]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731/raw/main/config.json "Exact1M-position43-layer causal-MoE config"
[8]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731/raw/main/LICENSE "Directly read MIT licence for official checkpoint"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, exact official card/config/licence and current native alias inspection, version/effort-specific independent evaluator and provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
