# Qwen3 Max — findings by Claude Opus 5

- Source: Alibaba (Qwen) (`qwen3-max`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's **proprietary Qwen3-generation flagship**, built around an "effective integration of thinking and non-thinking modes" with the thinking path targeting "intelligent agent programming, common-sense reasoning, and reasoning across mathematics, science, and general domains" ([Alibaba Cloud Model Studio](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)). Alibaba's own GA note claims it "has achieved state-of-the-art (SOTA) performance in its field and is better suited to meet the demands of agents operating in more complex scenarios." The honest framing in late 2026 is that **this is a superseded generation** — Alibaba's recommended-models page no longer lists it, and every later Max revision scores far above it on [BenchLM](https://benchlm.ai/models/qwen3-max) (Qwen3.8 Max 69.57, Qwen3.7 Max 62.14, versus Qwen3 Max at 39.36). Distinct model; `qwen-3.5` and `qwen-3.5-9b` have their own folders.
- **Provider / access:** **Alibaba Cloud Model Studio** (OpenAI-compatible), plus resellers. The current `qwen3-max` alias is **"functionally equivalent to the snapshot model `qwen3-max-2026-01-23`"**.
- **Release / knowledge:** `qwen3-max-preview` appeared around **2025-09-23**; general availability **December 2025**; the live alias now points at the **2026-01-23** snapshot. Knowledge cutoff: no verified public date found.
- **IDs:** `qwen3-max` and `qwen3-max-2026-01-23` (Alibaba Cloud Model Studio), `qwen3-max-preview` (superseded). **No free tier / no free ID.**
- **Context window:** **262,144 tokens (256K)** with **65,536 max output**. ⚠️ **Source conflict worth recording:** BenchLM lists "1M", but that figure is corroborated nowhere — Alibaba's own listing and every independent pricing aggregator I checked (CloudPrice, Model Price Watch, llm-stats, metatext, devtoolpicks) agree on **262,144**, and Alibaba's own tiered pricing table tops out in a **"128K–256K" band**, which would make no sense for a 1M model. I treat 262,144 as correct and BenchLM's 1M as an error.
- **Modalities:** **Text in → text out only.** No image, audio or video input; no generated media. Corroborating signal: Alibaba's Model Studio "Image & video — Understanding" section lists `qwen3.8-max` but **not** `qwen3-max`. Reasoning: **yes** — BenchLM classifies it as a Reasoning model, and Alibaba describes integrated thinking / non-thinking modes. Tool calls: yes, and agentic use is its stated design target.
- **Pricing (as of 2026-10-08):** **tiered by request size** — **$1.20 / MTok input and $6.00 / MTok output for requests up to 32K tokens**, rising with context to **$3.00 / $15.00 per MTok in the 128K–256K tier**. **Cached input $0.240 / MTok** (a 5× discount). Resellers quote lower headline rates (Requesty lists $0.86/$3.44), but Alibaba's own tiering is the reference.
- **Architecture:** **Not disclosed.** Alibaba publishes no parameter count, expert configuration or training-compute figure for Qwen3-Max; BenchLM classifies it **Proprietary**. The Qwen-Max family is described generally as supporting "a parameter scale of hundreds of billions", but that is the rolling `qwen-max` line, not this model, and I am not going to attribute a specific figure to it. No parameter count should be inferred from `qwen3.8-max`, which is a different model with its own folder.

### Raw benchmarks found

> **Alibaba published no benchmark table for Qwen3-Max that I could verify** — the Model Studio listing makes a bare SOTA claim without numbers. Everything quantified below is **third-party**, which is unusual and means the independent picture is the only picture. BenchLM covers 12 of 626 benchmarks and ranks it **#138 of 891 at 39.36/100**.

Agent / tool use:

- **τ²-bench: 74.3%** ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-max)) — genuinely strong, and the single best result this model has
- **AA-IFBench: 44.1%** (Artificial Analysis) — instruction following
- Gert Labs composite: **43.74%** ([Gert Labs rankings](https://gertlabs.com/rankings))
- **Terminal-Bench, SWE-bench, GDPval, AutomationBench, Toolathlon, BrowseComp: no verified public score found** — a wide agentic evidence gap for a model marketed at "agents operating in more complex scenarios"

Reasoning / knowledge:

- **AA-GPQA Diamond: 76.4%** (Artificial Analysis) — a strong graduate-science result
- **Artificial Analysis Intelligence Index: 15.6** (Artificial Analysis) — low, and badly out of step with the GPQA figure
- **AA-HLE: 11.9%**; **CritPt: 0.0%**
- **AA-Omniscience: Index −43.5%, Accuracy 24.4%, Hallucination Rate 89.9%** (Artificial Analysis). That hallucination rate is **among the worst I have recorded in this research pass** — on questions it gets wrong, this model confidently asserts an answer roughly nine times out of ten rather than declining.
- **MMLU-Pro, AIME and MATH: no verified public score found**

Coding:

- **Vibe Code Bench: 3.51%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — near-total failure on an agentic build-and-run harness
- **SWE-bench Verified / Pro, LiveCodeBench, HumanEval, MBPP, Terminal-Bench: no verified public score found.** Alibaba claims strength in "intelligent agent programming" and publishes nothing to support it.

Long context:

- **AA-LCR: 50.0%** (Artificial Analysis) — middling
- No MRCR, RULER or needle-retrieval figure at any depth

Multimodal:

- **None, and correctly so** — this is a text-only model.

### Normalized scores (1–100)

- **Tool use: 58/100.** **τ²-bench 74.3%** is a real, independently measured strength and the best evidence this model has for its agentic positioning; **AA-IFBench 44.1%** shows adequate instruction adherence. But the supporting evidence simply is not there — **no Terminal-Bench, SWE-bench, GDPval, AutomationBench or BrowseComp figure exists**, and the one agentic-execution harness that did measure it, Vibe Code Bench, returned **3.51%**. A model that handles structured tool-calling dialogues well but collapses when it has to actually drive a build is a narrow kind of agent. Scored on the one solid number, discounted for everything missing.
- **Reasoning: 52/100.** This dimension contains the sharpest contradiction in the report. **AA-GPQA Diamond 76.4%** is a strong score, yet the same evaluator's **Intelligence Index is 15.6**, **HLE is 11.9%** and **CritPt is 0.0%** — meaning the model does well on a benchmark it has likely seen the shape of, and poorly on everything designed to resist that. The decisive figure is **AA-Omniscience: −43.5 index, 24.4% accuracy, 89.9% hallucination rate.** A model that fabricates on ~90% of what it does not know is not safely usable for factual work regardless of its GPQA number, and no MMLU-Pro or AIME result exists to broaden the picture.
- **Context window: 60/100.** **262,144 tokens with 65,536 output** is a solid, vendor-corroborated window, and **cached input at $0.240/MTok** makes repeated long prompts much cheaper. **AA-LCR 50.0%** says usable quality is average — neither a strength nor a failure. Two deductions: there is **no retrieval curve at any depth**, and Alibaba's tiering means using the window is **2.5× more expensive per token** ($3.00/$15.00 in the 128K–256K band). I also discount BenchLM's uncorroborated 1M claim entirely rather than reward it.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input, no generated media, and Alibaba's own multimodal product listing excludes it. Template floor for a text-only model; no benchmark exists and none should.
- **Coding: 34/100.** The weakest dimension and the one with the biggest gap between claim and evidence. **Vibe Code Bench 3.51%** is close to a floor result, and there is **no SWE-bench Verified, LiveCodeBench, Terminal-Bench, HumanEval or MBPP number anywhere** — for a model whose vendor explicitly advertises "intelligent agent programming", publishing zero coding benchmarks is telling. The Gert Labs composite at 43.74% is the only partial counterweight, and it is an aggregate rather than a coding measure. Not scored lower only because 43.74% and the τ²-bench result imply the model is not actually incompetent at writing code, merely unevidenced and bad at executing it.
- **Cost efficiency: 44/100.** **$1.20 / $6.00 per MTok rising to $3.00 / $15.00 at long context** is frontier-adjacent pricing for a model with an Artificial Analysis Intelligence Index of **15.6** and an **89.9% hallucination rate**, and the output price bites hardest precisely because thinking tokens bill as output. **Cached input at $0.240 helps**, and τ²-bench 74.3% and GPQA 76.4% are worth something. The decisive problem is internal to Alibaba's own catalogue: **Qwen3.7 Max and Qwen3.8 Max score 62.14 and 69.57 on BenchLM against this model's 39.36**, and Alibaba has dropped Qwen3-Max from its recommended list. Paying flagship rates for a superseded generation is poor value. No free tier.
- **Overall Score: 43.8/100.** Mean of the five non-cost dims (58 + 52 + 60 + 15 + 34) / 5 = 43.8. Best fit: **structured text-only tool-calling workflows at moderate context** — τ²-bench 74.3% is real, and if your workload is conversational function calling with verified inputs, it performs. Avoid it for anything factual (89.9% hallucination rate), anything agentic that must execute code (Vibe Code Bench 3.51%), and anything multimodal (text only). The practical recommendation is blunt: **if you are on Alibaba's platform, use a later Max revision** — Alibaba's own numbers and its own recommended-models page both point away from this one.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Alibaba Cloud Model Studio's own `qwen3-max` documentation (the integrated thinking / non-thinking description, the "intelligent agent programming" positioning, the bare SOTA claim for "agents operating in more complex scenarios", and the statement that the live alias is functionally equivalent to the `qwen3-max-2026-01-23` snapshot), Alibaba's current Recommended Models page (which **no longer lists** `qwen3-max`, and whose image/video understanding section lists `qwen3.8-max` but not this model — the corroborating signal for text-only modality), BenchLM's aggregated page (Proprietary source type, Reasoning type, 12 of 626 benchmarks, overall 39.36 / rank #138 of 891, and the intra-family comparison), the convergent independent pricing and context records from CloudPrice, Model Price Watch, llm-stats, metatext, devtoolpicks and Requesty (262,144-token context, $1.20/$6.00 base, the $3.00/$15.00 128K–256K tier, and $0.240/MTok cached input), and the underlying Artificial Analysis, Vals AI and Gert Labs measurements. **Two source conflicts are reported rather than smoothed over:** BenchLM's "1M" context claim is rejected as uncorroborated and inconsistent with Alibaba's own 128K–256K pricing band, and the contradiction between AA-GPQA Diamond 76.4% and an Artificial Analysis Intelligence Index of 15.6 is stated explicitly and used to cap the reasoning score rather than averaged into a flattering middle. No parameter count is asserted, because Alibaba publishes none for this model; the "hundreds of billions" figure attached to the rolling `qwen-max` line and the 2.4T figure attached to `qwen3.8-max` are both explicitly **not** applied here. No data was imported from `qwen-3.5` or `qwen-3.5-9b`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
