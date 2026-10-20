# Qwen 3.5 397B — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / `Qwen/Qwen3.5-397B-A17B`, reasoning-enabled open checkpoint.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen 3.5 397B (Qwen3.5-397B-A17B).
- **Short description:** Alibaba's permissively licensed large sparse vision-language model, with native image/video understanding and hybrid linear/full attention. The repository shorthand identifies this exact 397B/17B checkpoint, not a separate text-only 128K model or the entire Qwen 3.5 family.[1][2]
- **Provider / access:** Open weights; vLLM/SGLang and other serving frameworks expose OpenAI-compatible **Chat Completions**. Exact hosted gateway `qwen/qwen3.5-397b-a17b`, backend `qwen/qwen3.5-397b-a17b-20260216`; Morph advertises `morph-qwen35-397b`. Official card calls **Qwen3.5-Plus the corresponding hosted version with extra production features**, including default 1M and built-in tools; those service features/results are not silently inherited by the open checkpoint.[1][4][5]
- **Release / knowledge:** **2026-02-16**, confirmed by AA and exact dated gateway; no verified exact official knowledge cutoff found.[3][4]
- **IDs:** Weights `Qwen/Qwen3.5-397B-A17B`; gateway ID above. Local `opencode/qwen-3.5-397b` is the project's identity mapping, not independently verified live Zen availability. No free Zen route is claimed. `397B` is a parameter-size suffix, not a hyphenated version component.
- **Context window:** **262,144 native total**, confirmed by config and standard serving examples; **extensible to 1,010,000 via YaRN**, explicitly a changed configuration. Static YaRN can degrade shorter-text behavior. Exact gateway examples: Alibaba **262,144/65,536 output**, DeepInfra **262,144/81,920**, DigitalOcean **131,072/117,964**, Venice **128,000/32,768**. Some providers advertise 235,929 output, a provider-specific cap rather than a universal model specification. Publisher recommends **32,768 generation for most queries / 81,920 for demanding benchmarks**; recommendation is not a hard architectural output limit.[1][2][4]
- **Modalities / tools:** Native text/image/**video** input → text, with documented video API example and processor settings. Document/OCR tasks operate on visual content; raw PDF/file support depends on the serving layer. No native audio/non-text output. Thinking is on by default; use `enable_thinking` through the correct runtime/API rather than unsupported `/think`/`/nothink` text switches. Tool calling requires the correct `qwen3_coder` parser; MCP integration is provided through Qwen-Agent.[1][2][4]
- **Pricing (2026-10-20):** Exact Alibaba gateway **$0.39 input/$2.34 output per 1M**; DeepInfra **$0.45/$3.00/$0.22 cache read**, StreamLake **$0.60/$3.60/$0.12**. Morph's own page advertises **$0.50/$3.50/$0.30 cache**, native 262,144 context/131,072 output. AA evaluation uses **$0.60/$3.60**, not necessarily today's cheapest route. Region, precision, modality support and caps differ. Apache weights do not require a per-token licence fee, but 397B self-hosting has real compute/memory costs; no $0 API score is justified.[3][4][5]
- **Architecture:** **397B total / 17B activated**, 60-layer sparse MoE with **512 routed experts, 10 routed plus one shared active**, hidden size 4096. Repeating three Gated DeltaNet blocks followed by one gated full-attention block, with a vision encoder; config verifies 262,144 positions and video token support. **Apache-2.0** open weights.[1][2]

### Raw benchmarks found

**Attribution:** Official model-card tables are vendor results for the exact checkpoint. AA selected record is **Qwen3.5 397B A17B (Reasoning)**, UUID `0e66bae9-41f1-42fc-9276-ce8cb6f72919`, links exact weights, native 262,144 context, measured current index. No Plus/non-reasoning scores are substituted. Guessed Vals paths returned 404; no exact Vals result is claimed.[1][3]

Agent / tool use:

- **Terminal Bench 2: 52.5% vendor**, versus **Terminal-Bench 2.1 51.31% AA**; different version/harness. **TB4 0.0% AA is a measured value**, with a corresponding evaluation row, not a null interpreted as zero.[1][3]
- **Tau2-Bench 86.7% vendor / 95.61% AA**, versus **Tau3-Banking 13.40% AA**. Vendor airline evaluation applies fixes proposed in the Opus 4.5 card; the aggregate is not a telecom-only or banking result.[1][3]
- **BFCL v4 72.9%**, **VITA-Bench 49.7%**, **DeepPlanning 34.3%**, **Tool Decathlon 38.3%**, **MCP-Mark 46.1% vendor**. MCP-Mark is not MCP-Atlas; no score transfers between them.[1]
- **GDPval-AA 792.97 Elo / Briefcase 562.40 Elo**, rubric pass **12.12%**, **AutomationBench 6.89% partial score**, **Apex Agents 15.34% / EnterpriseOps-Gym 30.89% AA**. Strong Tau2 and function calling do not imply strong long-horizon professional execution.[3]
- **BrowseComp 69.0% simple context-folding / 78.6% discard-all vendor**, **HLE with tools 48.3%**. Tool-response pruning and context management affect results. No verified exact Claw-Eval/ClawProBench/MCP-Atlas/SWE Atlas QnA found.[1]

Reasoning / knowledge:

- Publisher **GPQA row 88.4%**; AA explicitly **GPQA Diamond 89.29%**. **HLE 28.7% vendor / 28.96% AA**; vendor **HLE-Verified 37.6%** is a revised dataset, not the same benchmark.[1][3]
- **AIME 2026 91.3%**, **HMMT February 2025 94.8% / November 2025 92.7%**, **IMOAnswerBench 80.9% vendor**. No exact independent AIME result in selected AA record; null is not zero.[1][3]
- **MMLU-Pro 87.8% vendor**, **IFBench 76.5% vendor / 78.78% AA**, **CritPt 1.71% AA**.[1][3]
- **AA Intelligence Index 18.420**, measured current composite, not a launch-era scale or this report's Overall. **Omniscience accuracy 30.80% / hallucination 88.95% / reliability −30.75** show weak calibrated factual reliability despite good graduate-science QA.[3]

Coding:

- **SWE-bench Verified 76.4%**, **SWE-bench Multilingual 69.3%**, **SecCodeBench 68.3%**, **LiveCodeBench v6 83.6% vendor**. Vendor scaffold results are not independent full-harness replication.[1]
- **SciCode 44.79% AA**. No verified exact SWE-Pro, DeepSWE or Vibe Code result found; AA LiveCodeBench field is null, so the vendor v6 result remains separately attributed.[3]
- Morph's provider-authored discussion identifies quantization/output-budget problems but cites external experiments: its approximately 70% versus 30% AIME truncation claim is **secondary and not adopted as a verified exact-checkpoint measurement here**. Provider fidelity claims are not neutral replication or proof all FP8 serving is faulty.[5]

Long context / multimodal:

- **LCR 68.7% vendor / 77.33% AA**, **LongBench v2 63.2% vendor**. No verified near-perfect MRCR/RULER at extended 1M found. Native versus YaRN-extended capability and hosted Plus default context remain separate.[1][3]
- **MMMU 85.0% / MMMU-Pro 79.0% vendor**, **MMMU-Pro 77.28% AA**, **GDP.pdf 12.2% all-pass AA**.[1][3]
- Vendor **OmniDocBench 1.5 90.8%**, **OCRBench 93.1%**, **MMLongBench-Doc 61.5%**, **CharXiv RQ 80.8%**; benchmark scales and task definitions are distinct.[1]
- Vendor **VideoMME 87.5% with subtitles / 83.7% without**, **VideoMMMU 84.7%**, **LVBench 75.5%**. Video sampling/processor configuration is part of the actual model deployment, unlike merely borrowing another model's video score.[1]
- Vendor **BabyVision 52.3% with code interpreter / 43.3% without**, **V* 95.8% with interpreter / 91.1% without**; tool gains do not describe unassisted vision. **ScreenSpot Pro 65.6% / OSWorld-Verified 62.2% / AndroidWorld 66.8% vendor** are specific GUI-agent setups.[1]
- AA median **55.19 output tokens/s / 2.23 s first chunk**, **95.08M evaluation output / 79.62M reasoning tokens**, **$0.4746 weighted task cost** under its serving assumptions. First chunk is not time to final answer; self-host/quantized routes are not guaranteed this speed.[3]

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2, BFCL and TB2.1 support useful bounded tools, capped by Tau3 13.40%, measured TB4 0%, very low AutomationBench and weak professional deliverables.[1][3]
- **Reasoning: 78/100.** Independent GPQA 89.29% and HLE 28.96% plus vendor math establish substantial reasoning, capped by CritPt 1.71%, factual miscalibration and poor current broader-work index.[1][3]
- **Context window: 76/100.** Native/evaluated 262,144 belongs in the 200K–500K tier; documented optional 1.01M extension is qualified rather than scored as an unconditionally native million-token endpoint.[1][2][3][4]
- **Multimodal: 87/100.** Genuine image/video and document-vision coverage with substantial measured/vendor evidence, capped by no audio/non-text generation and weak all-pass document work.[1][2][3]
- **Coding: 78/100.** Vendor SWE 76.4%/LCB v6 83.6% and independent SciCode support useful coding, but bounded-harness dependence and poor newer agent evaluations cap broad autonomy.[1][3]
- **Cost efficiency: 85/100.** Affordable exact-model hosted routes and Apache availability offer good paid value, capped by provider/precision differences, real task costs and substantial self-host resources.[1][3][4][5]
- **Overall Score: 77/100.** Half-up mean `(68 + 78 + 76 + 87 + 78) / 5 = 77.4`; cost excluded. Best fit: controllable open-weight multilingual image/video reasoning and bounded coding, with correct parser and deliberately chosen native/extended deployment.

### Research trail and sources

Fresh Bing `"Qwen3.5-397B-A17B" official benchmarks` returned no exact results; Google `"Qwen3.5-397B-A17B" independent benchmark review` an interstitial; DuckDuckGo `"Qwen3.5-397B-A17B" context pricing review` provided exact weights and provider/review leads. Official full card tables/footnotes/settings were inspected, with remaining visual rows and deployment sections extracted directly from the public README after display truncation. Config, exact AA record, gateway and provider-authored review were compared. Vals `qwen_qwen3.5-397b-a17b` and `alibaba_qwen3.5-397b-a17b` returned 404; no nonexistence inference or peer report substitution.

[1]: https://huggingface.co/Qwen/Qwen3.5-397B-A17B/raw/main/README.md "Primary exact model card, vendor tables, footnotes, modalities, settings, extension and licence"
[2]: https://huggingface.co/Qwen/Qwen3.5-397B-A17B/raw/main/config.json "Exact native positions, vision/video tokens and MoE/attention architecture"
[3]: https://artificialanalysis.ai/models/qwen3-5-397b-a17b "Exact selected Reasoning record and independent measured quality/cost/runtime"
[4]: https://openrouter.ai/api/v1/models/qwen/qwen3.5-397b-a17b/endpoints "Exact dated provider routes, precision, modalities, limits and token tariffs"
[5]: https://www.morphllm.com/qwen-3-5 "Provider's own route/pricing and secondary deployment/quantization discussion"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact publisher README/configuration and provider checks, selected independent evaluator record and source/harness comparison. Scores are normalized editorial 1–100 interpretations, not official vendor scores; no peer findings consulted.
- Future sources: add a separate signed file alongside this report using the same headings.
