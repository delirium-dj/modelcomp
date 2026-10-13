# Solar Open 2 — findings by Claude Opus 5

- Source: Upstage (`solar-open-2`, HF `upstage/Solar-Open2-250B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's **250B-A15B open-weight MoE built specifically for agents**, and presented as **"Korea's Sovereign Foundation Model"**. Upstage's thesis is stated plainly: "We built Solar Open 2 to be more than a model with high benchmark scores: a model with the **performance and cost structure** to power agents in real work environments" ([Upstage, 2026-07-22](https://www.upstage.ai/blog/en/solar-open-2)). Its two genuinely distinctive engineering choices are a **hybrid attention stack that puts linear attention on 75% of its layers** to reach 1M tokens, and a **Korean tokenizer that needs only 50–80% of the tokens global models use**. Distinct model; `solar-pro-4` and `solar-mini-4` have their own folders, and the predecessor Solar Open 100B (Solar Open 1) is a separate model.
- **Provider / access:** **Open weights on Hugging Face** as `upstage/Solar-Open2-250B` under the **Upstage Solar License**, which permits "commercial use… as is derivative model development through fine-tuning and distillation". Also usable in **Claude Code**, in **Hermes Agent** (it is a "Hermes Official model"), and via **OpenCode Zen**. The Upstage Playground trial was time-limited and **expired 2026-07-31**. Official quantized checkpoints, recommended serving configurations and a vLLM deployment guide ship with the model card.
- **Release / knowledge:** **2026-07-22**, alongside the [Solar Open 2 Technical Report](https://arxiv.org/abs/2607.20062) (arXiv 2607.20062). Knowledge cutoff: no verified public date found.
- **IDs:** `upstage/Solar-Open2-250B` (Hugging Face), `solar-open-2` (Zen). **No free hosted tier** — the Playground trial has lapsed; free use means self-hosting.
- **Context window:** **1,000,000 tokens.** ⚠️ Max output: no verified public figure found — Upstage publishes a context figure but not an output cap.
- **Modalities:** **Text in → text out only.** No image, audio or video input; no generated media. Reasoning: **yes** — BenchLM classifies it as a Reasoning model. Tool calls: yes, and this is the model's design centre: training scenarios covered "search, tool calling (MCP), coding, and office work". **Officially supports Korean, English and Japanese.**
- **Pricing (as of 2026-10-08):** **no published per-token price.** Cost is hardware, and Upstage is specific: **four NVIDIA H200s for BF16, or two H200s with quantization**. For a 250B model that is unusually modest.
- **Architecture:** The most carefully documented architecture in this research pass. A **sparse MoE Transformer with 250B total and 15B active parameters per token**, keeping the Solar Open 1 backbone unchanged — **48 layers, hidden size 4,096, head dimension 128, 64 query and 8 key-value heads, a 196,608-token vocabulary, a single shared expert with no dense layers, and pre-norm residuals**. The FFN is **320 routed experts plus 1 shared, with 8 selected per token**. Three further design decisions matter:
  - **Hybrid Attention for 1M context.** The model "repeats blocks of one GQA layer and three linear attention layers, applying linear attention to 75% of its 48 layers." Upstage's rationale is concrete rather than decorative: "Linear attention layers manage sequence information in a **fixed-size state**. This avoids having every layer's KV-cache grow in proportion to context length." The remaining softmax layers **use NoPE — no positional encoding at all** — explicitly "to target extrapolation: handling inputs longer than the lengths the model mainly saw in training."
  - **The architecture also trains faster.** In a controlled comparison, "the Solar Open 2 architecture reached in **210B tokens** the MMLU performance that Solar Open 100B's all-softmax architecture needed **671B tokens** to reach."
  - **Selective Weight Transfer.** Rather than random initialization, Upstage carried over transferable weights from Solar Open 100B. In a 200B-A15B proxy experiment holding architecture, data and optimizer identical, the transferred model hit the target loss in **~12B tokens versus ~22B** for random init — "about 58% of the tokens."
  - **Korean tokenizer efficiency.** It "processes the same Korean text with only **50 to 80% of the tokens** global models use", and on Korean office-work text is "the most efficient of the 12 we compared, about **24% ahead of the best-performing global model**" — which is simultaneously a cost reduction and an effective-context extension.

### Raw benchmarks found

> ⚠️ **Important limitation, stated up front: every quantified figure below is Upstage's own.** [BenchLM](https://benchlm.ai/models/solar-open-2) has "15 source-displayable benchmark rows but **no public overall score. It remains unranked**", and all 15 rows trace to the Upstage model card. I found **no independent Artificial Analysis, Vals AI or third-party measurement of this model at all.** The mitigation is real but partial: Upstage publishes the full Technical Report with "key ablations, and evaluation conditions… This allows anyone to reproduce the benchmark results" — which is better practice than most vendors, but is not the same as somebody having actually done so.

Coding:

- **LiveCodeBench v6: 92.4%** — Upstage claims "the highest scores among comparable models"
- **SWE-bench Verified: 70.4%**
- **terminalBenchHard: 28.3%**

Mathematics:

- **AIME 2026: 95.7%**; **HMMT Feb 2026: 93.9%**

Knowledge / reasoning:

- **GPQA Diamond: 86.3%**; **MMLU-Pro: 86.2%** (also claimed highest among comparables); **HLE without tools: 28.8%**
- **AA-LCR: 62.3%**

Instruction following and tool use:

- **IFBench: 80.0%** — Upstage places it "at the top of the group alongside DeepSeek-V4-Flash"
- **MCP Atlas: 58.2%** — likewise "at the top of the group"
- **APEX-Agents: 16.6%** — claimed "the highest score in the comparison", though note the *absolute* figure is low; APEX-Agents is punishing for everyone

Korean — the model's strongest territory:

- **Korean benchmark average: 85.4**, which Upstage reports beats DeepSeek-V4-Flash (84.9) and sits "well ahead of fast-tier closed APIs such as GPT-5.4 mini (80.8) and Claude Haiku 4.5 (69.6)"
- **HRM8K: 92.2%**; **CLIcK: 90.7%**; **KMMLU-Pro: 78.4%**
- **Ko-GDPval: 86.8** — the most interesting result in the set. Ko-GDPval is "170 real work scenarios across 58 professions, including lawyers, accountants, and infection-control specialists", scored on **deliverables actually produced: reports, plans, and briefings**. Solar Open 2 landed **0.16 points behind DeepSeek-V4-Pro (86.9), a 1.6T model more than six times its size**, and ahead of the 1T-scale MiMo-V2.5-Pro (84.6) — while using **15B active parameters, roughly one third of DeepSeek-V4-Pro's**. Upstage illustrates it with real artefacts: an FATF mutual-evaluation response delivered as a consistent PDF report *plus* an xlsx workbook listing all 55 rule-flagged transactions, a medical-device PMS periodic report, and a law firm's advertising self-inspection with a cited-precedent table and statute index.

Generational gain over Solar Open 100B, as Upstage publishes it:

| Benchmark | Solar Open 100B | Solar Open 2 | Gain |
|---|---|---|---|
| GPQA Diamond | 66.16 | **86.26** | +20.10 |
| HMMT | 68.94 | **93.94** | +25.00 |
| LiveCodeBench | 56.49 | **92.42** | **+35.93** |
| IFBench | 57.70 | **80.00** | +22.30 |
| Korean average | 66.95 | **85.43** | +18.48 |

**Training methodology worth recording**, because it explains the agentic numbers. Upstage built a synthesis-and-verification pipeline from real work data, keeping "only the data that passed verification". For tool calling specifically: "Unlike conventional approaches that only judge whether the model selected the right tool, we have the model **execute changes in a real environment, then read the changed state back to verify the result**… to separate generating a plausible answer from actually completing the task." For coding: "The coding agent works in a terminal, then writes and runs its own tests. When tests fail, the training data includes the loop of fixing the code and verifying again." For office work: cross-checking across documents and spreadsheets, "changing inputs in a spreadsheet with formulas and recalculating the results."

**No multimodal, no long-context retrieval curve, no hallucination or Omniscience measurement, and no Terminal-Bench, GDPval-AA, AA-Briefcase or BrowseComp figure exists.**

### Normalized scores (1–100)

- **Tool use: 72/100.** The *methodology* here is the best-argued in this research pass — training that verifies state changes rather than tool-selection plausibility is exactly the right distinction, and **Ko-GDPval 86.8 on real professional deliverables, 0.16 points off a 1.6T model at one third the active parameters**, is a serious result backed by shown artefacts. **IFBench 80.0%** and **MCP Atlas 58.2%** are solid. Three things cap it: the absolute agentic numbers are modest (**APEX-Agents 16.6%, terminalBenchHard 28.3%**), the headline agent benchmarks of this dataset — Terminal-Bench, GDPval-AA, AA-Briefcase, AutomationBench, BrowseComp — are **entirely absent**, and nothing here has been independently verified.
- **Reasoning: 82/100.** A genuinely strong and broad set: **GPQA Diamond 86.3%, MMLU-Pro 86.2%, AIME 2026 95.7%, HMMT 93.9%**, and **HLE without tools at 28.8%** — that last figure is high, and HLE is the hardest to game. Korean knowledge is excellent (CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%). The **+20.10 point GPQA jump over Solar Open 100B** is a large, plausibly-architecture-driven gain. Held under the mid-80s by the complete absence of independent corroboration and of any **hallucination or Omniscience measurement** — I have no evidence at all about how this model behaves when it does not know something.
- **Context window: 84/100.** A full **1M-token window**, and unusually, the *mechanism* is documented and principled rather than asserted: **linear attention on 75% of 48 layers with fixed-size state so the KV cache does not grow with context, plus NoPE on the softmax layers explicitly for length extrapolation**. The Korean tokenizer extends effective context by a further 20–50% on Korean text. Upstage even quantifies the architecture's training-efficiency payoff (210B vs 671B tokens to match MMLU). Capped because the one quality measurement, **AA-LCR 62.3%, is only middling** — well short of what the architecture promises — there is **no retrieval curve at any depth**, and **no max-output figure is published**.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input, no generated media, no multimodal benchmark, and none claimed. Template floor for a text-only model; the score reflects scope, not a failure.
- **Coding: 85/100.** The strongest dimension, and it rests on the two benchmarks that actually matter: **LiveCodeBench v6 at 92.4%** and **SWE-bench Verified at 70.4%**. The **+35.93 point LiveCodeBench gain** over the predecessor is the largest single improvement Upstage reports. The training story is credible — a coding agent that "works in a terminal, then writes and runs its own tests" with the fix-and-reverify loop included in the data is precisely how you get a 70.4% SWE-bench number. Capped by **terminalBenchHard at 28.3%**, which shows the hardest terminal work is still out of reach, and again by the absence of any independent check on a 92.4% claim.
- **Cost efficiency: 88/100.** Excellent, on three independent grounds. **Licence:** the Upstage Solar License permits commercial use, fine-tuning *and* distillation — more permissive than most "open" releases. **Hardware:** a 250B model that runs on **two H200s quantized (four at BF16)** is remarkably cheap to self-host, because only **15B parameters activate per token**. **Tokens:** the Korean tokenizer cuts Korean token counts to **50–80%** of what global models need, which is a direct 20–50% cost reduction on Korean workloads and compounds across the repeated calls an agent makes. The Ko-GDPval result — parity with a 1.6T model at one third the active parameters — is the cleanest demonstration of the cost argument. Docked only because **no hosted per-token price exists** and the free Playground trial has expired, so you need two H200s to use it at all.
- **Overall Score: 67.6/100.** Mean of the five non-cost dims (72 + 82 + 84 + 15 + 85) / 5 = 67.6. Best fit: **self-hosted Korean-language enterprise agents and coding agents** — document-heavy office work, regulatory and professional deliverables, MCP tool orchestration, and repo-scale software engineering — on infrastructure the organization controls, which is exactly the sovereignty case Upstage makes ("environments where internal data never leaves the organization"). The honest caveats are two and they are both significant: **no independent party has verified any of these numbers**, and **AA-LCR 62.3% is the one middling figure in an otherwise strong card**, which suggests the 1M window may not deliver what the architecture implies. Text-only, so no multimodal work.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Upstage's official announcement "Solar Open 2: Korea's Sovereign Foundation Model, Built for Agentic Use" dated 2026-07-22 (the 250B-total/15B-active MoE description, the 320-routed-plus-1-shared expert FFN with 8 experts per token, the full Hybrid Attention design of one GQA layer per three linear-attention layers across 48 layers with NoPE on the softmax layers and the fixed-size-state KV-cache rationale, the 1M-token context, the 210B-vs-671B training-efficiency comparison, the Selective Weight Transfer method and its 12B-vs-22B proxy result, the Korean tokenizer's 50–80% token ratio and 24% lead over the best of 12 compared tokenizers, the four-H200-BF16 / two-H200-quantized deployment requirements, Korean/English/Japanese support, the Upstage Solar License terms permitting commercial use plus fine-tuning and distillation, the Claude Code and Hermes Agent availability, the Playground trial expiry, the agent-centred training methodology including state-verified tool calling and terminal-based self-testing coding data, and the complete benchmark set: LiveCodeBench v6 92.4%, SWE-bench Verified 70.4%, AIME 2026 95.7%, HMMT 93.9%, GPQA Diamond 86.3%, MMLU-Pro 86.2%, IFBench 80.0%, MCP Atlas 58.2%, APEX-Agents 16.6%, terminalBenchHard 28.3%, HLE-no-tools 28.8%, AA-LCR 62.3%, KMMLU-Pro 78.4%, CLIcK 90.7%, HRM8K 92.2%, the 85.4 Korean average with its DeepSeek-V4-Flash / GPT-5.4-mini / Claude-Haiku-4.5 comparisons, the Ko-GDPval 86.8 result with its 170-scenario/58-profession description and the DeepSeek-V4-Pro and MiMo-V2.5-Pro comparisons, and the full Solar Open 100B generational-gain table), the Solar Open 2 Technical Report abstract and body (arXiv 2607.20062) for the exact backbone specification of 48 layers, hidden size 4,096, head dimension 128, 64 query and 8 key-value heads, 196,608-token vocabulary, single shared expert with no dense layers and pre-norm residuals, and BenchLM's aggregated page (Open Weight source type, Reasoning type, 15 of 626 benchmarks, **explicitly unranked with no overall score computed**). **The central evidentiary limitation is stated rather than hidden: all 15 quantified rows are Upstage's own, I found no independent measurement of this model whatsoever, and the scores above are discounted accordingly** — with Upstage's publication of reproducible evaluation conditions noted as a partial, not equivalent, mitigation. Absent evidence is named rather than filled: no multimodal capability, no Terminal-Bench/GDPval-AA/AA-Briefcase/AutomationBench/BrowseComp figure, no long-context retrieval curve, no hallucination or Omniscience data, and no published max-output or per-token price. The Solar Open 100B comparison table is used **only because Upstage prints it inside Solar Open 2's own announcement**; no data was imported from `solar-pro-4` or `solar-mini-4`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
