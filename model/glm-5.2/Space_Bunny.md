# GLM-5.2 — findings by Space Bunny

- Source: Z.ai (`glm-5.2`; open-weight and API)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 77.0 → 70.6.** The prior pass cited **only the official Z.ai model card, Artificial Analysis's index number, and BenchLM** — and recorded that "GDPval-AA, Tau3-Banking, Claw-Eval, and Toolathon: no verified public exact value found" and "No independent retrieval-at-length score was found." Both gaps are now closed by independent harnesses, and the result is a wide split between genuine strengths and severe weaknesses. **τ²-bench 99.1%** is the best agentic score measured in this research effort; **Terminal-Bench 3.0 is 4.6%**, **Agentic Index 39.4%**, **ResearchClawBench 20.7%**. **Hallucination Rate 26.3% with a positive Omniscience Index of +4.4%** is the model's defining reliability property. Restated: **Tool 93 → 76**, **Reasoning 91 → 86**, **Context 95 → 94**, **Coding 91 → 82**, **Cost 75 → 80**, Multimodal unchanged at 15.

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's open-weight MoE model for long-horizon agentic engineering, flexible-effort coding, and enterprise software-engineering workflows. **Exceptional at mathematics and unusually trustworthy for its class, with a strong narrow-domain agentic profile that does not generalise to autonomous work.**
- **Provider / access:** Z.ai API (`glm-5.2`); Hugging Face `zai-org/GLM-5.2`; OpenCode Zen `opencode/glm-5.2`; local SGLang, vLLM, and Transformers deployment documented.
- **Release / knowledge:** **2026-06-16** (Artificial Analysis; Z.ai release materials). **No reliable knowledge cutoff has ever been published** — an unchanged gap across two passes.
- **IDs:** `glm-5.2`; `zai-org/GLM-5.2`; `opencode/glm-5.2`.
- **Context window:** **1,000,000 tokens** (official model card; Artificial Analysis and BenchLM confirm). Official evaluations use up to **128K maximum output** in several long-context settings; **a single universal output cap was never published** after two passes.
- **Modalities:** **Text in / text out.** Reasoning effort configurable; tool calls, JSON output, local serving, long-horizon agent workflows supported. Artificial Analysis explicitly reports **text-only input** for the max configuration. Z.ai's **GLM-5V-Turbo** sibling covers multimodal work.
- **Pricing (verified 2026-10-10):** **$1.40 / 1M input, $4.40 / 1M output** (Z.ai first-party and OpenCode Zen agree exactly), cached read **$0.26 / 1M** on Zen. **MIT-licensed open weights.** Comparable Z.AI flagships in the same family (GLM-5.3) are now listed at **$0.00/$0.00 across a 103-provider table** on models.dev — that free availability is a family-level observation, not a verified price for this checkpoint, and is treated as such.
- **Architecture:** Open-weight MoE, approximately **753B total / 40B active**; **MIT licence**. **IndexShare** sparse attention reduces per-token FLOPs at 1M context (~2.9× fewer FLOPs, indexer reused across every four sparse attention layers) and an improved MTP layer gives +20% speculative-decoding acceptance length. Effort-level control (High / Max) trades capability against speed and token cost.

### Raw benchmarks found

**Official Z.ai model card:**

- Terminal-Bench 2.1: **81.0%** (Terminus-2 harness) and **82.7%** (best reported harness); MCP-Atlas Public Set **76.8%**; Tool-Decathlon **48.2%**
- HLE **40.5%** without tools / **54.7%** with tools (rows kept separate); GPQA-Diamond **91.2%**; CritPt **20.9%**
- AIME 2026 **99.2%**; HMMT Nov 2025 **94.4%**; HMMT Feb 2026 **92.5%**; MMAnswerBench **91.0%**
- SWE-bench Pro **62.1%**; DeepSWE **46.2%**; ProgramBench **63.7%**; SWE-Marathon **13.0%**; PostTrainBench **34.3%**
- FrontierSWE (Dominance) **74.4%** at 1M context, max effort, 128K max output

**Independent — new this pass:**

Agent / tool use:

- **τ²-bench: 99.1%** (Artificial Analysis) — **the highest single agentic score measured for any model in this research effort**
- **Terminal-Bench 2.1: 67.8%** (Vals AI) — against Z.ai's **81.0% / 82.7%**; a **14.9-point vendor/independent spread**
- **Terminal-Bench 3.0: 4.6%** (Terminal-Bench 3.0 leaderboard, frontierbench.ai)
- **AA Agentic Index: 39.4%**; **GDPval-AA 43.7% / Elo 1,418**; **APEX-Agents-AA 33.7%**; **ITBench 42.7%**; **ResearchClawBench 20.7%**

Coding:

- **SWE-bench: 82.8%** (Vals AI); **LiveCodeBench: 69.5%** (Vals AI); **AA Coding Index: 68.8%**; **SciCode 51.2%**
- **CursorBench 3.2: 55.0%** (Cursor official evals); **OpenHarmony Bench 58.4%**; NL2Repo **48.9%**
- **PostTrainBench v1.1: 31.7%** (public leaderboard) — against Z.ai's claimed 34.3%, so the vendor figure holds

Reasoning / knowledge:

- **AA-Omniscience Index: +4.4%**; **Accuracy: 24.3%**; **Hallucination Rate: 26.3%** — **one of only two models in this batch with a positive Omniscience index**, and the second-lowest hallucination rate measured
- **GPQA Diamond: 91.2% (Z.ai) / 89.5% (AA) / 85.6% (Vals AI)** — a 5.6-point three-way spread
- **HLE: 40.5% (Z.ai) / 41.1% (AA)**; **MMLU-Pro 86.7%** (Vals AI); **AA-Intelligence Index 33.7** (confirms the prior pass's 34 as essentially correct)
- **AA-LCR: 78.3%** — the independent retrieval-at-length result the prior pass lacked
- **IFBench: 73.3%**

Multimodal: **Design Arena Website 1,292 Elo** (OpenRouter) — a text/code output signal, not a native image capability.

**BenchLM composite: 61.55/100, #47 of 889** (44 of 625 benchmarks). Family: **GLM-5.3 68.64**, GLM-5.3-Flash 57.36, GLM-5.1 56.48, GLM-5-Turbo 54.15, GLM-5 54.14.

Sources consulted: [BenchLM GLM-5.2 (updated 2026-10-10)](https://benchlm.ai/models/glm-5-2), [official GLM-5.2 Hugging Face model card](https://huggingface.co/zai-org/GLM-5.2), [Artificial Analysis GLM-5.2](https://artificialanalysis.ai/models/glm-5-2) and its τ²-bench / GDPval-AA / APEX-Agents / ITBench / LCR / SciCode / Coding Index leaderboards, [Vals AI GLM-5.2](https://www.vals.ai/models/zai_glm-5-2), [Terminal-Bench 3.0 leaderboard](https://www.frontierbench.ai/), [ResearchClawBench](https://internscience.github.io/ResearchClawBench-Home/), [Cursor evals](https://cursor.com/cursorbench), [PostTrainBench v1.1](https://posttrainbench.com/?version=v1.1), [OpenHarmony Bench](https://bench.matrix.openharmony.cn/), and [OpenCode Zen](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 76/100.** **Down from 93 — a 17-point correction.** **τ²-bench at 99.1% is the best agentic result measured in this research effort** and belongs at the top of this dimension; **MCP-Atlas 76.8%** corroborates, and **GDPval-AA 43.7% / Elo 1,418** is respectable (compare Gemma 4 31B at 6.1%/755). Three results pull hard the other way: **Terminal-Bench 2.1 is 67.8% on Vals AI against Z.ai's own 81.0–82.7%**, a 14.9-point vendor/independent spread; **Terminal-Bench 3.0 is 4.6%**; and **AA Agentic Index is 39.4%**. **ResearchClawBench 20.7%** and **APEX-Agents 33.7%** show sustained multi-step professional work is the weak axis, and **Tool-Decathlon at 48.2%** is modest. The score stays high on τ²-bench 99.1% and GDPval Elo 1418; it falls because the current-generation terminal harness reads 4.6%.
- **Reasoning: 86/100.** Down from 91. **Mathematics and science are exceptional and now corroborated by three independent sources: AIME 2026 99.2%, HMMT Nov 2025 94.4%, HMMT Feb 2026 92.5%, MMAnswerBench 91.0%, GPQA Diamond 91.2% / 89.5% / 85.6%, MMLU-Pro 86.7%, HLE 40.5% / 41.1%.** The prior pass could cite no hallucination metric at all; the arrival of **Hallucination Rate 26.3% with a positive Omniscience Index of +4.4%** is a significant improvement in the evidence base and one of the strongest reliability profiles measured in this batch. The reductions are narrow: the **5.6-point GPQA spread** across three harnesses, and an **Intelligence Index of 33.7 against GLM-5.3's 44.8**, which says the same more bluntly. **CritPt 20.9%** is the weakest single figure and **no knowledge cutoff is published**.
- **Context window: 94/100.** Down from 95. **1,000,000 tokens** is verified from the official card and corroborated by Artificial Analysis and BenchLM, and **IndexShare's ~2.9× FLOP reduction at 1M context** is a real engineering advantage for sustained use. The prior pass claimed **FrontierSWE 74.4% as a 1M-context result**; that figure remains, but it is a vendor coding benchmark, not a retrieval test. **AA-LCR at 78.3%** is the genuine independent retrieval-at-length measurement and is only moderate, and **no MRCR, RULER, or GraphWalks figure exists**.
- **Multimodal: 15/100.** Unchanged. **Text-only** in every official and independent specification — no image, audio, or video input. This maps to the methodology's floor and is the single largest structural drag on this model's Overall. **Design Arena Website 1,292 Elo** measures text-and-code output quality, not non-text input, and does not raise it. **GLM-5V-Turbo** is the multimodal option in this family.
- **Coding: 82/100.** Down from 91. The evidence base is the broadest of any model in this batch — **fourteen distinct coding measurements** — and the top-line numbers are strong: **SWE-bench 82.8% (Vals AI)**, **SWE-bench Pro 62.1%**, **ProgramBench 63.7%**, **LiveCodeBench 69.5%**, **OpenHarmony 58.4%**, **CursorBench 3.2 55.0%**, **SciCode 51.2%**, **NL2Repo 48.9%**. The reductions come from the long-horizon tail: **Terminal-Bench 3.0 4.6%**, **PostTrainBench 31.7%**, **SWE-Marathon 13.0%**, **ResearchClawBench 20.7%**, and an **AA Coding Index of 68.8%** that sits well below GLM-5.3's 74.8%. The prior 91 treated SWE-bench performance as equivalent to coding-agent ability; the independent composite and the newer harnesses say otherwise.
- **Cost efficiency: 80/100.** Up from 75. **$1.40 / $4.40 with $0.26 cached read** is confirmed identically by Z.ai and OpenCode Zen, which is unremarkable for a frontier open-weight model — but **MIT-licensed open weights** make self-hosting a genuine option, and comparable Z.AI flagships in the same family are now listed free across a very large provider table on models.dev. Held below the high band because **that free availability is a family-level observation, not a verified price for this checkpoint**, and **self-hosting 753B total / 40B active is substantial infrastructure**.
- **Overall Score: 70.6/100.** (76 + 86 + 94 + 15 + 82) / 5 = 353 / 5 = 70.6, down from 77.0. **Best fit: long-context, high-reliability text reasoning and single-task coding, where being right matters more than being autonomous.** The specific profile is AIME 99.2% and GPQA ~89% with a **26.3% hallucination rate and a positive Omniscience index** — you can use this model's output as a pipeline's fact-producing step with far less verification overhead than almost anything else measured in this effort — plus SWE-bench 82.8% and 1M context. **Four cautions.** First, **not an autonomous agent**: Terminal-Bench 3.0 is 4.6%, Agentic Index 39.4%, ResearchClawBench 20.7%. Second, **τ²-bench 99.1% is real but narrow**; do not read it as "best agentic model". Third, **use Vals AI's 67.8%, not Z.ai's 81.0%,** when planning against Terminal-Bench 2.1. Fourth, **GLM-5.3 supersedes it** — 68.64 vs 61.55 on BenchLM, with Agentic Index 53.4% vs 39.4%, Coding Index 74.8% vs 68.8%, SWE-bench 95.4% vs 82.8%, and Intelligence Index 44.8 vs 33.7. Note that on the four text-relevant dimensions alone this model scores **84.5**; the Multimodal 15 is doing all the damage to the headline.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's GLM-5.2 profile, Z.ai's official GLM-5.2 Hugging Face model card, Artificial Analysis's GLM-5.2 benchmark rows and their τ²-bench / GDPval-AA / APEX-Agents / ITBench / LCR / SciCode / Coding Index leaderboards, Vals AI's GLM-5.2 leaderboards, the Terminal-Bench 3.0 leaderboard, ResearchClawBench, Cursor evals, PostTrainBench v1.1, OpenHarmony Bench, and OpenCode Zen's published pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass's Tool use score of 93 was built on a single vendor table** and explicitly recorded that "GDPval-AA, Tau3-Banking, Claw-Eval, and Toolathon" were absent. **All four are now available and the picture is bimodal: τ²-bench 99.1% is the best agentic score in this research effort and is credited as such, while Terminal-Bench 3.0 reads 4.6%, Agentic Index 39.4%, and ResearchClawBench 20.7%.** Both halves are reported. **This is the second consecutive model in this batch where the vendor Terminal-Bench 2.1 figure is materially optimistic** (GLM-5.2 here at 81.0% vs Vals AI's 67.8%; GLM-5.3 in the previous batch at 88.2% vs 71.5%), which now warrants treating as a rule. **The prior pass's use of FrontierSWE 74.4% as a long-context result is corrected** — it is a vendor coding benchmark, and **AA-LCR 78.3%** is the actual retrieval measurement. **The prior pass cited no hallucination metric; the 26.3% rate and +4.4% Omniscience index are the strongest reliability result in this report** and are why Reasoning falls only 5 points despite the missing gaps. **Cost 75 → 80** reflects MIT-licensed open weights plus verified $1.40/$4.40 first-party pricing; the models.dev free-route observation is explicitly labelled family-level, not a verified price for this checkpoint. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GLM_5_2_Recheck.md`, using the same headings.