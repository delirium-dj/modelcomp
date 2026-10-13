# Mistral Large 4 — findings by Claude Opus 5

- Source: Mistral AI (`mistral-large-4`, "ML4" / "le Chonk")
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's **1-trillion-parameter natively multimodal hybrid instruct-and-reasoning MoE** with 52B active — "our largest and most capable model to date", launched as a public preview and positioned explicitly as a sovereignty play: "**Forged in Europe. Built for AI sovereignty**", trained from scratch on **3,800 NVIDIA Grace Blackwell GPUs in Mistral's own European datacenters** ([Mistral AI, 2026-10-06](https://mistral.ai/news/mistral-large-4/)). Its sharpest differentiator is cybersecurity, where Mistral makes an argument no other vendor in this dataset makes: closed frontier models **refuse** legitimate vulnerability work, and ML4 does not. Distinct model; Mistral Large 2/3, Medium 3/3.5 and the Ministral line have their own folders.
- **Provider / access:** **Public preview API on Mistral Studio** (served on the same European infrastructure it was trained on); **OpenCode Zen** as `mistral-large-4` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)); OpenRouter as `mistralai/mistral-large-4-0`. Mistral promises "multiple regions worldwide, including a European deployment that Mistral operates end-to-end, independently of other digital service providers and under European law."
- **Release / knowledge:** **Public preview 2026-10-06.** **Weights are not yet out** — Mistral states "Weights drop end of this month" and "We will release the weights by the end of the month", and [BenchLM](https://benchlm.ai/models/mistral-large-4) accordingly lists Source Type as **"Pending"** rather than Open Weight. Until then Mistral is "red-teaming the model in real-world settings with cybersecurity leaders, vetted partners, and state authorities, who will access the same model with reduced moderation and expanded cyber capabilities." Knowledge cutoff: no verified public date found. **The RL run is still in flight** and Mistral reports "no signs of saturation", so these figures describe a moving target.
- **IDs:** `mistral-large-4` (Mistral Studio, Zen), `mistralai/mistral-large-4-0` (OpenRouter). **No free tier.**
- **Context window:** **1,000,000 tokens** ([BenchLM](https://benchlm.ai/models/mistral-large-4)). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out** — "natively multimodal", with vision as a headline capability (see multimodal below). No audio, no video, no generated media. Reasoning: **hybrid** — BenchLM classifies it Hybrid, and Mistral describes it as a model that "unifies instruction, reasoning, and agentic capabilities in a single model". Tool calls: yes, extensively evaluated. **Natively fluent in 160+ languages**, including every official EU language.
- **Pricing (as of 2026-10-08):** **$1.36 / MTok input, $4.18 / MTok output** (Mistral's own listing). **OpenCode Zen currently runs a 50% discount: $0.68 in / $2.09 out, with cached input at $0.07** (list $0.14).
- **Architecture:** **1 trillion total parameters, 52B active**, Mixture-of-Experts, natively multimodal, hybrid instruct+reasoning. Mistral defers full architectural detail to the weights release. What it does disclose is the **RL infrastructure**, in unusual depth: a composable environment interface combining single-turn chat, scientific problem solving, safety alignment, factuality and long-horizon tool use over shared scaffolds (code sandboxes, web search, external APIs); verification mixing reward models, unit tests, LLM judges and static checks; an autoscaling actor fleet generating "tens of thousands of rollouts in parallel" with asynchronous training; and **rollout budgets of millions of tokens across multiple compactions**. At ~3,000 GPUs a single run produces **~33 billion tokens/day, ~16 billion trainable completion tokens** after filtering and masking. Funded by Mistral's **€3 billion Series D**, "the largest equity round ever raised by a European technology company."

### Raw benchmarks found

> **Unusually strong verification on the two figures where both parties measured.** Mistral reports AutomationBench **59.9%** and AA-Briefcase **1,393 Elo**; Artificial Analysis independently measures **59.9%** and **1393** — exact matches. That materially raises confidence in Mistral's unreplicated numbers. BenchLM covers 19 of 626 benchmarks.

Agent / tool use:

- **Cybench: 93.0%** (Mistral; 40 exercises drawn from security competitions) — "one of the highest scores reported for an open-weight model"
- **CyberGym-E2E: 82%** (Mistral) — reproduce a real open-source vulnerability then patch it — **"the highest of any model"**. Mistral's accompanying observation is the most interesting finding in this report: "Several leading closed models, **including Claude Opus 5.5 and GPT-6 Astra, score near zero on the same test because they refuse to perform the task**."
- **Artificial Analysis Cyber Index: top five models globally**, leading open-weight models developed outside China "by a wide margin" (Mistral, citing AA)
- **AA AutomationBench: 59.9%** (Mistral) / **59.9%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/automationbench-aa)) — 657 business workflows across Gmail, Google Sheets, Slack and Salesforce; ahead of Kimi K3, MiMo-V2.6-Pro and DeepSeek V4 Pro
- **AA-Briefcase: 1,393 Elo** (Mistral) / **1393** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/aa-briefcase)) — long-horizon knowledge work; ahead of DeepSeek V4 Pro
- **GDPval-AA: 1,422 Elo** / **46.1%** normalized (Artificial Analysis) — a very high normalized figure
- **Terminal-Bench 4.0: 28.3%** (Mistral) / **26.8%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)) — high for this harness, where most models in this dataset score under 5%
- **Finance Agent v2: 54.7%** ([Vals AI](https://www.vals.ai/benchmarks/fabv2)) — third-party
- **Harvey's Legal Agent Benchmark: outperforms all open-source models** (Mistral, evaluated via vals.ai; no number published) — Mistral states ML4 "exceeds GPT-6-Astra" on both legal and financial third-party evaluations
- Coding Agent Index: **49.8%** (Mistral) — ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max
- GDP.pdf: **18.6%** (Artificial Analysis)
- Safety, which is genuinely best-in-class here: **Lakera B3 AI Security Benchmark — resists 93.3% of indirect prompt-injection attacks**, with Mistral noting "we see no higher scores among competitors"; **KORA Benchmark 1.691** out of a 2.0 "Exemplary" maximum, its highest measured score among OSS models; and a **cyber refusal rate on JailbreakBench, StrongREJECT and AgentHarm higher than all OSS models** despite its strong cyber capability

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38.4**; **AA-LCR: 81.3%**; **AA-HLE: 35.0%**; CritPt: **10.6%** (Artificial Analysis)
- BenchLM overall: **59.01/100, rank #55 of 891**
- **AA-Omniscience: Index −5.3, Accuracy 25.8%, Hallucination Rate 41.9%**
- **GPQA Diamond, MMLU-Pro and AIME: no verified public score found** — Mistral published none, which is a notable gap for a flagship
- Internal expert evaluation versus GLM-5.3: ML4 preferred in **CAD and STEM**, on par or close in finance and coding (no numbers)

Coding:

- **Vibe Code Bench: 78.40%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — **by far the highest score on this harness anywhere in my research pass**, where GPT-5.4 mini managed 47.97% and most models scored 0–31%
- **DeepSWE v1.1: 61.7%**; **SWE-Atlas-QnA: 59.4%**; Terminal-Bench 4: **28.3%** (Mistral)
- AA-SciCode: **54.2%** (Artificial Analysis); **SciCode-Verified: state of the art among open-weight models** (Mistral, no number)
- **Blind human evaluation with Surge AI** — professional annotators, model identities hidden, 1–5 scale: **ML4 Preview 2nd of 5 at 3.74**, ahead of GLM-5.3 (3.60), Kimi K3 (3.59) and GLM-5.2 (3.40), behind only Claude Opus 5 (4.22)
- **SWE-bench Verified / Pro, LiveCodeBench: no verified public score found**

Multimodal:

- **Dense 200 (visual grounding): 42% — against GPT-6 Astra's 41%** (Mistral). Beating a frontier closed model on grounding is the strongest multimodal claim here, and Mistral says of visual grounding generally that ML4 "goes further still, surpassing even frontier closed models."
- **AA-MMMU-Pro: 76.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/mmmu-pro)) — independent, and high
- ChartQA Pro and GDP.pdf are both reported; GDP.pdf measured at **18.6%**
- Demonstrated rather than benchmarked: inspecting **gigapixel satellite imagery** for disaster response, verifying mechanical parts in **engineering drawings** by zooming and re-inspecting, and retrieving evidence from PDFs
- Design Arena — Website: **1261 Elo** ([OpenRouter](https://openrouter.ai/mistralai/mistral-large-4-0/benchmarks))

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 81.3%** is the quantified signal and it is strong. Indirect but relevant: Mistral's RL pipeline is "optimized for long trajectories, supporting rollout budgets of **millions of tokens across multiple compactions**", i.e. long-horizon operation is a trained-for property rather than an afterthought.

### Normalized scores (1–100)

- **Tool use: 85/100.** The strongest and broadest agentic profile in this entire research pass. **AutomationBench 59.9% and AA-Briefcase 1,393 Elo are confirmed exactly by Artificial Analysis**, GDPval-AA 1,422 Elo / 46.1% is independently excellent, **Terminal-Bench 4.0 at ~27–28% is near the top of a harness that annihilates most models**, and the cyber results are extraordinary — **Cybench 93.0% and CyberGym-E2E 82%, the latter the highest of any model**. The safety picture is equally strong: 93.3% B3 injection resistance with no higher competitor score, and the highest OSS cyber refusal rate. Short of the high 80s only because GDP.pdf sits at 18.6% and the Harvey legal result is published without a number.
- **Reasoning: 76/100.** **AA-LCR 81.3%, AA-HLE 35.0% and an Artificial Analysis Intelligence Index of 38.4** are all strong and all independent — the AA index in particular is among the highest non-frontier figures here. **KORA 1.691 of 2.0** indicates genuinely responsible engagement. Capped by CritPt 10.6%, a 41.9% hallucination rate against 25.8% accuracy, and the conspicuous absence of **any GPQA Diamond, MMLU-Pro or AIME figure** from a flagship launch.
- **Context window: 88/100.** A 1M-token window on a hybrid reasoning model, with **AA-LCR 81.3%** confirming real usable quality, and a post-training pipeline explicitly built for million-token rollouts across multiple compactions — long-horizon capability here is engineered, not claimed. Held under 90 by the absence of any retrieval curve and of a published max-output figure.
- **Multimodal: 82/100.** Genuinely strong and independently corroborated: **AA-MMMU-Pro 76.4%** from Artificial Analysis, plus **Dense 200 visual grounding at 42% beating GPT-6 Astra's 41%** — one of very few instances in this dataset of an open-weight-bound model beating a frontier closed model on a vision benchmark. The gigapixel-satellite and engineering-drawing workflows are substantive rather than decorative. Capped by text-only output, no audio or video, and GDP.pdf at 18.6% showing document-agent work is still weak.
- **Coding: 82/100.** **Vibe Code Bench 78.40% is the standout result of my entire research pass on that harness** — a benchmark that returns 0–4% for the Grok family and under 1% for Gemini 2.5 Pro — and it is measured by Vals AI, not Mistral. DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, AA-SciCode 54.2% and SciCode-Verified open-weight SOTA round it out, and the **blind Surge AI human evaluation placing it 2nd of 5 at 3.74, ahead of GLM-5.3 and Kimi K3**, is exactly the kind of identity-masked evidence most vendors avoid. Capped by the absence of **any SWE-bench Verified or LiveCodeBench figure** and by Terminal-Bench 4 at 28.3%.
- **Cost efficiency: 88/100.** **$1.36 in / $4.18 out list, and currently $0.68 / $2.09 with $0.07 cached reads on OpenCode Zen's 50% discount** — for a model posting Vibe Code Bench 78.4%, MMMU-Pro 76.4%, AA-LCR 81.3% and the best cyber scores in the field, that is strong value, and at the discounted rate it is excellent. Sovereignty adds real non-price value: European-operated deployment under European law, on infrastructure Mistral owns end to end. Docked because **the weights are not actually out yet** (Source Type "Pending"; promised "end of this month"), there is no free tier, and 1T parameters will make self-hosting demanding even at 52B active.
- **Overall Score: 82.6/100.** Mean of the five non-cost dims (85 + 76 + 88 + 82 + 82) / 5 = 82.6 — **the highest Overall I have assigned in this research pass**. Best fit: **security engineering and sovereign enterprise work** — vulnerability reproduction and patching where closed models simply refuse, 657-workflow business automation, legal and financial agent tasks, engineering-drawing and satellite-imagery grounding, and long-horizon knowledge deliverables — with European data residency under EU law. Two honest caveats: the weights are promised but unreleased, and the RL run is still in flight, so every figure here describes a preview that Mistral itself expects to improve. Verify factual output (41.9% hallucination rate), and note that no GPQA or SWE-bench number exists yet.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Mistral AI's "Introducing Mistral Large 4" launch post (the 2026-10-06 public-preview date and end-of-month weights commitment, the 1T-total/52B-active natively-multimodal hybrid MoE description, the 3,800 Grace Blackwell European training cluster, 160+ language coverage, $1.36/$4.18 pricing, the red-teaming programme with reduced-moderation access for cyber partners and state authorities, the European sovereign-deployment commitment, the full RL-infrastructure disclosure including ~33B tokens/day and million-token rollout budgets across compactions, the €3B Series D context, and the vendor benchmark set: Cybench 93.0%, CyberGym-E2E 82% with the closed-model-refusal observation, AA Cyber Index top-five placement, DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Terminal-Bench 4 28.3%, Coding Agent Index 49.8%, AutomationBench 59.9%, AA-Briefcase 1,393, Dense 200 42% vs GPT-6 Astra 41%, Lakera B3 93.3%, KORA 1.691, the Surge AI blind human evaluation, and the unquantified SciCode-Verified and Harvey Legal Agent claims), BenchLM's aggregated page (1M context, Hybrid reasoning type, **Pending** source type, 19 of 626 benchmarks, overall 59.01 / rank #55), the OpenCode Zen pricing table (including its current 50% discount), and the underlying Artificial Analysis, Vals AI and OpenRouter leaderboards. The exact vendor/independent agreement on AutomationBench (59.9/59.9) and AA-Briefcase (1393/1393) is reported explicitly and used to calibrate trust in Mistral's unreplicated figures; claims published without numbers (SciCode-Verified SOTA, Harvey Legal Agent, the GLM-5.3 internal comparison) are recorded as unquantified and **not** scored. The unreleased-weights status and the in-flight RL run are both flagged as limiting the durability of every figure. No data was imported from `mistral-medium-3.5`, which has its own folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
