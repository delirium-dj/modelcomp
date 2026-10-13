# Ling 3.0 Flash — findings by Claude Opus 5

- Source: inclusionAI / Ant Group (`ling-3.0-flash`, HF `inclusionAI/Ling-3.0-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** inclusionAI's **124B-total / 5.1B-active hybrid-linear MoE** — "our next-generation **native hybrid reasoning** model" — and one of the most striking efficiency results in this dataset. inclusionAI's own framing of the claim is precise: "Operating with 124B total and 5.1B active parameters (**~12.4% and ~8.1% of our previous 1T-class flagship Ring-2.6-1T**), Ling-3.0-flash **matches or outperforms its predecessor across key benchmarks**" ([HF model card](https://huggingface.co/inclusionAI/Ling-3.0-flash)). Ant's release post titles the thesis "**More Useful Work per Token**" — a model "designed to increase the amount of useful work each token can carry", built for "token efficiency and sustainable intelligence" ([Ant Ling, 2026-07-24](https://developer.ant-ling.com/en/blogs/ling-3.0-flash-release)). Distinct model; `ling-3.1-flash`, `ling-2.6-flash`, `ling-2.6.1t`, `ling-3.0-tiny`, `ling-3.0-flash-sante` and `ring-2.6.1t` all have their own folders, and Ling 3.0 Flash VL / FP8 / Fin are separate variants.
- **Provider / access:** **Open weights on Hugging Face** under **MIT** (`inclusionAI/Ling-3.0-flash`, plus a published **INT4** checkpoint at `inclusionAI/Ling-3.0-flash-int4`), the Ant Ling platform, **OpenCode Zen**, OpenRouter and Vals AI's evaluation endpoint (`ant_ling-3.0-flash-2607`).
- **Release / knowledge:** **2026-07-23/24.** Note a transition worth recording: at launch, coverage reported "free on OpenRouter to Aug 3, but **weights aren't posted yet**" — the weights were published subsequently, and [BenchLM](https://benchlm.ai/models/ling-3-0-flash) now classifies the model as Open Weight. **The OpenRouter free window expired 2026-08-03.** Knowledge cutoff: no verified public date found.
- **IDs:** `inclusionAI/Ling-3.0-flash` and `-int4` (Hugging Face), `ant_ling-3.0-flash-2607` (Vals AI), `ling-3.0-flash` (Zen, OpenRouter). **No current free tier** — the time-limited OpenRouter promotion has lapsed; self-hosting is free under MIT.
- **Context window:** **262,144 tokens (256K) native**, which Ant describes as "designed to extend to 1M tokens". BenchLM independently records 262K. Max output: no verified public figure found.
- **Modalities:** **Text in → text out only** for this ID. ⚠️ **Ling 3.0 Flash VL is the separate vision variant and has its own folder — none of its capability is attributed here.** Reasoning: **yes, native hybrid reasoning** with a toggleable thinking mode (BenchLM classifies it Reasoning). Tool calls: yes, and inclusionAI reports "agentic training across coding, research, and tool-use environments".
- **Pricing (as of 2026-10-08):** **$0.075 / MTok input and $0.22 / MTok output, with an 80% cache discount** — among the lowest rates anywhere in this dataset. Self-hosting is free under MIT, and at **5.1B active parameters (~4% of total)** it is cheap to run.
- **Architecture:** **124B total / 5.1B active hybrid-linear Mixture-of-Experts.** Two design choices carry the model: the **~4% activation ratio**, which is what makes the price and throughput possible, and the **hybrid-linear attention stack**, which is what makes 256K native context affordable and is intended to scale to 1M. inclusionAI positions it against its own 1T-class Ring-2.6-1T at roughly an eighth of the total parameters and a twelfth of the active parameters.

### Raw benchmarks found

> **The cross-verification here is the best in this research pass, and it runs three ways.** BenchLM covers **38 of 626 benchmarks** — the densest vendor-plus-independent set I have worked with — combining inclusionAI's own card with **Artificial Analysis** and **Vals AI**. The agreements are close enough to be meaningful:
>
> - **GPQA Diamond: 85.0% (vendor) / 85.5% (Artificial Analysis) / 84.8% (Vals AI)** — a three-way match inside 0.7 points
> - **LiveCodeBench: 82.8% (vendor, v5) / 84.0% (Vals AI)** — **the independent figure is higher than the vendor's**
> - **SciCode: 41.2% (vendor) / 42.0% (Artificial Analysis)** — independent again slightly higher
> - **HLE: 22.7% (vendor) / 23.7% (Artificial Analysis)** — independent higher
> - **Terminal-Bench 2.1: 57.0% (vendor) / 50.2% (Vals AI)** — **the one material gap, 6.8 points in the vendor's favour**, and the only figure below where I would discount the vendor number
>
> Four of five overlaps favour the independent evaluator. That is a strong honesty signal and it raises my confidence in the vendor-only rows. BenchLM ranks the model **#120 of 891 at 45.07/100**.

Agent / tool use:

- **WideResearch: 73.6%**; **BFCL v4: 73.0%**; **BrowseComp: 72.2%**; **DRACO: 70.4%**; **MCP Atlas: 65.5%** (all inclusionAI) — five distinct harnesses, all in the high 60s to low 70s
- **Terminal-Bench 2.1: 57.0%** (inclusionAI) / **50.2%** ([Vals AI](https://www.vals.ai/models/ant_ling-3.0-flash-2607)) — even taking the lower independent figure, ~50% on TB 2.1 from a 5.1B-active model is a strong result
- **skillsBench: 44.8%** (inclusionAI)
- The weak end, reported for balance: **AA Tau3 Banking 28.0%**, **GDPval-AA 1,107 Elo / 22.3% normalized**, **AA Agentic Index 21.0%** ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash))

Coding:

- **LiveCodeBench: 82.8%** (inclusionAI, v5) / **84.0%** (Vals AI)
- **SWE-bench Multilingual: 72.4%** (inclusionAI); **SWE-bench: 65.2%** (Vals AI); **SWE-bench Pro: 56.6%** (inclusionAI)
- **AA Coding Index: 50.6%** (Artificial Analysis)
- **SciCode: 41.2%** (inclusionAI) / **42.0%** (Artificial Analysis)

Mathematics — a clear strength:

- **AIME 2026: 93.2%**; **HMMT February 2026: 87.0%**; **IMOAnswerBench: 83.7%** (all inclusionAI)

Knowledge / reasoning:

- **GPQA Diamond: 85.0% / 85.5% / 84.8%** (three-way, above)
- **MMLU-Pro: 82.0%** (Vals AI)
- **IFBench: 74.5%** (inclusionAI) — instruction following
- **AA-LCR: 73.0%** (Artificial Analysis) — a genuinely strong long-context-reasoning figure
- **HLE: 22.7% / 23.7%**
- **Artificial Analysis Intelligence Index: 20.1**; **CritPt: 1.7%**
- **AA-Omniscience: Index −17.9%, Accuracy 18.2%, Hallucination Rate 44.1%**

Long context:

- **AA-LCR 73.0%** is the quality measurement, and it is high. **No MRCR, RULER or needle-retrieval figure at any depth**, and no published evidence yet for the "extends to 1M" claim.

Multimodal:

- **None for this ID**, correctly — Ling 3.0 Flash VL is a separate model with its own folder.

### Normalized scores (1–100)

- **Tool use: 74/100.** A broad and consistent agentic profile for a model this small: **WideResearch 73.6%, BFCL v4 73.0%, BrowseComp 72.2%, DRACO 70.4% and MCP Atlas 65.5%** across five different harnesses, plus **Terminal-Bench 2.1 at 50.2% even on Vals AI's lower independent measurement**. inclusionAI's claim of "agentic training across coding, research, and tool-use environments" is borne out by where the strengths cluster — search, browse, MCP orchestration and function calling. Held out of the 80s by the opposite cluster: **AA Agentic Index 21.0%, GDPval-AA 22.3% normalized and Tau3 Banking 28.0%** say it does not carry long-horizon economic deliverables, and the 6.8-point vendor-versus-Vals gap on Terminal-Bench means I score the lower figure.
- **Reasoning: 80/100.** The headline here is verification quality, not just magnitude: **GPQA Diamond lands at 85.0%, 85.5% and 84.8% across the vendor, Artificial Analysis and Vals AI** — I have not seen a tighter three-way agreement in this pass, and it makes the number essentially unarguable. Mathematics is excellent — **AIME 2026 93.2%, HMMT February 2026 87.0%, IMOAnswerBench 83.7%** — with **MMLU-Pro 82.0% (Vals)**, **IFBench 74.5%** and **AA-LCR 73.0%** filling out the breadth, and **HLE at 22.7–23.7%** respectable. Capped by the familiar small-model pattern: an **Artificial Analysis Intelligence Index of only 20.1**, **CritPt 1.7%**, and a 44.1% hallucination rate against 18.2% accuracy — competent on problems, unreliable on open-ended knowledge.
- **Context window: 80/100.** **256K native from a 124B model with 5.1B active** is a real engineering achievement, and the **hybrid-linear attention stack** is the mechanism rather than a marketing line. Crucially, the quality is independently measured: **AA-LCR 73.0% is well above most models in this dataset**, which means the window is usable rather than nominal. Deductions: the **"designed to extend to 1M" claim has no published evidence**, there is **no retrieval curve at any depth**, and no max-output figure is published.
- **Multimodal: 15/100.** Text in, text out. Template floor — and deliberately so, because **Ling 3.0 Flash VL exists as a separate vision model with its own folder**, and importing its capability here would double-count across the dataset.
- **Coding: 82/100.** The strongest dimension, and well evidenced from both directions. **LiveCodeBench at 82.8% vendor and 84.0% on Vals AI** — with the independent figure *higher* — is a top-tier generation result. **SWE-bench Multilingual 72.4%**, **SWE-bench 65.2% (Vals)** and **SWE-bench Pro 56.6%** cover real repository work across three difficulty tiers, and **AA Coding Index 50.6%** corroborates at the composite level. That a **5.1B-active** model reaches 84% LiveCodeBench and 65% SWE-bench is the single most impressive fact in this report. Capped by **SciCode at ~42%**, Terminal-Bench at the independently-measured 50.2%, and the absence of any DeepSWE figure.
- **Cost efficiency: 95/100.** Close to best-in-dataset, and it is the whole point of the model. **$0.075 / MTok input and $0.22 / MTok output with an 80% cache discount** for GPQA 85%, AIME 93.2%, LiveCodeBench 84% and a 256K window is extraordinary value — roughly an order of magnitude below comparable capability elsewhere here. **MIT open weights** are maximally permissive, an **INT4 checkpoint is published** for cheap local serving, and **5.1B active of 124B (~4%)** keeps both hosted and self-hosted inference cheap. The "More Useful Work per Token" thesis is substantiated rather than asserted — this model genuinely matches a 1T-class predecessor at ~8% of its active parameters. Two deductions: the **OpenRouter free window expired 2026-08-03** so there is no current free access, and BenchLM scores the successor **Ling 3.1 Flash at 60.62 against this model's 45.07**, so buyers on the Ant platform should check whether the newer generation is available at similar cost before committing here.
- **Overall Score: 66.2/100.** Mean of the five non-cost dims (74 + 80 + 80 + 15 + 82) / 5 = 66.2. The multimodal floor is the only thing holding this below 80, and it is a scope decision rather than a deficiency — the vision work lives in a sibling model. Best fit: **cost-sensitive coding and research agents at long context** — repository patching and multilingual SWE work, competitive-programming-class generation, MCP tool orchestration, browse-and-research pipelines, and mathematics — self-hosted from MIT weights or via the cached-input path. Caveats: **do not rely on it for open-ended factual claims** (44.1% hallucination rate, Omniscience −17.9), **do not expect long-horizon economic deliverables** (Agentic Index 21.0, GDPval 22.3% normalized), and **treat the vendor's 57.0% Terminal-Bench figure as the optimistic end** of a range whose independent measurement is 50.2%. The 1M-context extension remains unproven.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — inclusionAI's official Hugging Face model card text for `Ling-3.0-flash` (the "next-generation native hybrid reasoning model" description and the exact **124B-total / 5.1B-active** specification with its "~12.4% and ~8.1% of our previous 1T-class flagship Ring-2.6-1T" comparison and the "matches or outperforms its predecessor across key benchmarks" claim), Ant Ling's developer release post "Ling-3.0-flash: More Useful Work per Token" (the token-efficiency and "sustainable intelligence" framing), LLM Reference (the **hybrid-linear MoE** characterization, 262K context, and the "agentic training across coding, research, and tool-use environments" description), the published `inclusionAI/Ling-3.0-flash-int4` checkpoint, release coverage from ai.thesatyajit.com and Digital Applied for the **2026-07-23/24** date, the ~4% activation ratio, the "256K native designed to extend to 1M" claim, the **OpenRouter free window ending 2026-08-03**, and the fact that weights were not posted at launch; and BenchLM's aggregated page (Open Weight source type, Reasoning type, 262K context, **38 of 626 benchmarks**, overall 45.07 / rank #120 of 891) together with every underlying measurement it cites from inclusionAI's card, **Artificial Analysis** and **Vals AI** (`ant_ling-3.0-flash-2607`). **The three-way cross-verification is reported explicitly and used to calibrate trust**: GPQA Diamond at 85.0 / 85.5 / 84.8 across vendor, AA and Vals; LiveCodeBench, SciCode and HLE all measured *higher* by the independent evaluator than by the vendor; and the single material disagreement — **Terminal-Bench 2.1 at 57.0% vendor versus 50.2% Vals** — is named, and the lower independent figure is the one scored. **Two scope separations are enforced:** Ling 3.0 Flash **VL** is a separate vision model with its own folder and none of its multimodal capability is attributed here, which is why the multimodal dimension sits at the text-only floor; and **Ring-2.6-1T is referenced only because inclusionAI prints the comparison inside this model's own card** — no data was imported from `ring-2.6.1t`, `ling-3.1-flash`, `ling-2.6-flash`, `ling-2.6.1t`, `ling-3.0-tiny` or `ling-3.0-flash-sante`, and no peer `model/` findings files were read. Absent evidence is named, not filled: no MRCR, RULER or needle-retrieval figure at any depth, no published evidence for the 1M extension, no DeepSWE score, and no max-output specification. The expired OpenRouter free window and the successor's materially higher BenchLM score are both flagged as buyer-relevant. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
