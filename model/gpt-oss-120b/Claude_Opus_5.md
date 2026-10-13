# GPT-OSS 120B — findings by Claude Opus 5

- Source: OpenAI (`gpt-oss-120b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** **OpenAI's open-weight flagship** — a **117B-total / 5.1B-active MoE released under Apache 2.0 in August 2025**, and the first open-weight model OpenAI had shipped since GPT-2. The single most consequential engineering fact is deployment scope: **it runs on one 80GB GPU**, which puts MMLU-90%-class capability inside reach of a single-accelerator server. It carries a configurable reasoning-effort control and is text-only. Distinct model; `gpt-5-nano`, `gpt-5.3-codex-spark`, `gpt-5.4-nano` and `gpt-5.4-mini` have their own folders, and **GPT-OSS 20B is a separate sibling**.
- **Provider / access:** **Open weights under Apache 2.0** — self-hostable, plus broad hosted routing (OpenAI, Fireworks, AWS Bedrock, DeepInfra and others) and **OpenCode Zen**. [BenchLM](https://benchlm.ai/models/gpt-oss-120b) classifies it Open Weight.
- **Release / knowledge:** **August 2025.** Knowledge cutoff: no verified public date found.
- **IDs:** `gpt-oss-120b` (OpenAI, Zen), `openai/gpt-oss-120b` (OpenRouter and most hosts). **No free hosted tier**, though self-hosting is free under Apache 2.0.
- **Context window:** **131,072 tokens (128K)**. Max output: no verified public figure found.
- **Modalities:** **Text in → text out only.** No image, audio or video input; no generated media. Reasoning: **yes — OpenAI's model card documents a configurable reasoning-effort control.** ⚠️ **Worth flagging: BenchLM classifies this ID as "Non-Reasoning"**, which most likely reflects the default route rather than the model's capability; the vendor model card and the effort control contradict a flat non-reasoning reading, and I treat reasoning as supported. Tool calls: yes.
- **Pricing (as of 2026-10-08):** **Apache 2.0 open weights — self-hosting is free** on a single 80GB accelerator. Hosted rates span roughly **$0.04–$0.15 / MTok input and $0.17–$0.60 / MTok output** depending on provider (the low end at DeepInfra-class hosts, the high end at OpenAI, Fireworks and Bedrock).
- **Architecture:** **117B total / 5.1B active Mixture-of-Experts.** The ~4.4% activation ratio is what makes single-GPU serving viable. OpenAI published a full model card PDF for the pair (`gpt-oss-120b` and `gpt-oss-20b`), which is the source of the vendor figures below.

### Raw benchmarks found

> **Coverage is good and the cross-verification is favourable.** BenchLM holds **25 of 626 benchmarks**, ranking it **#148 of 891 at 36.86/100**, combining OpenAI's own model card PDF with **Artificial Analysis**, **Gert Labs**, **React Native Evals** and **OpenRouter**. Where vendor and independent figures overlap, they agree closely — and on the harder of the two, **the independent number is higher than OpenAI's own**:
>
> - **GPQA: 80.1% (OpenAI) vs 78.2% (Artificial Analysis)** — a 1.9-point gap
> - **HLE: 14.9% (OpenAI) vs 19.6% (Artificial Analysis)** — **Artificial Analysis measured 4.7 points *better* than OpenAI claimed**
>
> Vendors that under-report on the hardest benchmark in the set are rare, and it raises confidence in the vendor-only rows.

Mathematics — the strongest territory:

- **AIME 2024: 95.8%**; **AIME 2025: 92.5%** (OpenAI model card)

Knowledge / reasoning:

- **MMLU: 90%** (OpenAI model card)
- **GPQA: 80.1%** (OpenAI) / **AA-GPQA Diamond: 78.2%** ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-oss-120b))
- **HLE: 14.9%** (OpenAI) / **AA-HLE: 19.6%** (Artificial Analysis)
- **AA-IFBench: 69.0%** — instruction following, and a solid figure
- **AA-LCR: 52.0%**; **Artificial Analysis Intelligence Index: 11.6**; **CritPt: 1.1%**
- **AA-Omniscience: Index −49.2%, Accuracy 21.8%, Hallucination Rate 90.8%.** That hallucination rate is **among the three worst I have recorded in this research pass** — on material it does not know, it asserts an answer roughly nine times in ten.

Coding:

- **SWE-bench Verified: 62.4%** (OpenAI model card) — a strong figure for an open-weight model of this size
- **React Native Evals: 71.6%** ([RN Evals](https://rn-evals.vercel.app/)) — independently measured, real framework work
- **AA-SciCode: 34.0%**; **AA Coding Index: 30.4%**
- **Design Arena — Website: 972 Elo** ([OpenRouter](https://openrouter.ai/openai/gpt-oss-120b/benchmarks)) — low
- **No LiveCodeBench, SWE-bench Pro, Terminal-Bench or DeepSWE figure found**

Agent / tool use:

- **τ²-bench: 65.8%** (Artificial Analysis) — decent on structured multi-turn tool dialogues
- **Gert Labs composite: 29.61%** ([Gert Labs](https://gertlabs.com/rankings))
- Then a collapse: **AA Agentic Index 6.2%**, **GDPval-AA 745 Elo / 5.4% normalized**, **APEX-Agents-AA 3.1%**
- **No Terminal-Bench, BFCL, Toolathlon, MCP-Atlas or BrowseComp figure found**

Long context:

- **AA-LCR 52.0%** is the only quality measurement. **No MRCR, RULER or needle-retrieval figure at any depth.**

Multimodal:

- **None, correctly** — text-only. The Design Arena Website Elo is web-output preference and is counted under coding-adjacent output quality, not multimodality.

### Normalized scores (1–100)

- **Tool use: 45/100.** The sharpest gap between two kinds of tool use I have seen in this pass. **τ²-bench 65.8%** and **AA-IFBench 69.0%** say the model handles schema-bound, multi-turn function calling competently and follows instructions well. Then every measurement of autonomous agentic work bottoms out: **AA Agentic Index 6.2%, GDPval-AA 5.4% normalized, APEX-Agents-AA 3.1%**, with the Gert Labs composite at 29.61%. With **no Terminal-Bench, BFCL, Toolathlon or MCP figure** to complicate the picture, the reading is clear — a reliable function caller that cannot drive a long-horizon task. Scored below the midpoint because the agentic floor results outnumber the dialogue successes.
- **Reasoning: 62/100.** **MMLU 90%, AIME 2024 95.8%, AIME 2025 92.5% and GPQA 78.2–80.1%** are strong absolute numbers — this is a model that genuinely reasons on structured problems, and the mathematics results are near the top of this dataset. **HLE at 19.6% as independently measured (better than OpenAI's own 14.9%)** is respectable for an open-weight model. Capped by the three figures that matter for trust: an **Artificial Analysis Intelligence Index of 11.6**, **CritPt 1.1%**, and above all **Omniscience −49.2% with a 90.8% hallucination rate against 21.8% accuracy**. Excellent at problems with answers; dangerous on open-ended knowledge.
- **Context window: 56/100.** **131,072 tokens** is adequate rather than generous for a 2025 flagship, and **AA-LCR 52.0%** indicates middling usable quality — neither a strength nor a failure. There is **no retrieval curve at any depth and no published max output**, so the window's behaviour under pressure is unmeasured. Scored on one mid-range measurement.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input and none claimed. Template floor; the Design Arena Elo is deliberately excluded from this dimension.
- **Coding: 60/100.** **SWE-bench Verified at 62.4%** is a genuinely good result for an open-weight model that fits on one GPU, and **React Native Evals 71.6%** independently confirms the capability transfers to real framework work. Against that, the composite and scientific measures are weak — **AA Coding Index 30.4%, AA-SciCode 34.0%** — and **Design Arena Website at 972 Elo** is near the bottom of that arena. Coverage is also thin: **no LiveCodeBench, SWE-bench Pro, Terminal-Bench or DeepSWE figure exists**, so there is no evidence about terminal-driven or harder repository work. Good at patching known-shaped problems, unproven beyond that.
- **Cost efficiency: 93/100.** Outstanding, and the reason this model matters. **Apache 2.0** is maximally permissive, **5.1B active of 117B** keeps compute per token low, and the decisive fact is that **it runs on a single 80GB GPU** — a 117B model delivering MMLU 90%, AIME 2025 92.5%, GPQA ~79% and SWE-bench Verified 62.4% on one accelerator is a different class of accessibility from the 32-GPU open-weight flagships elsewhere in this dataset. Hosted rates from **~$0.04 / $0.18 per MTok** are near the floor of this dataset, with a 4× spread across providers so there is real shopping value. Two deductions: **no free hosted tier**, and the **90.8% hallucination rate imposes a real verification cost** on any factual workload — cheap tokens are less cheap when every claim needs checking.
- **Overall Score: 47.6/100.** Mean of the five non-cost dims (45 + 62 + 56 + 15 + 60) / 5 = 47.6. The text-only floor and the agentic collapse hold the mean well below what the mathematics and knowledge figures alone suggest; read the dimensions. Best fit: **self-hosted structured reasoning and patching work on a single GPU** — competition-grade mathematics, graduate science Q&A, MMLU-class knowledge retrieval over verified sources, SWE-bench-style repository patches, React/framework coding, and schema-bound function calling. Avoid it for autonomous agents (Agentic Index 6.2%, APEX 3.1%), for anything requiring deep retrieval, and emphatically **for unverified factual output — a 90.8% hallucination rate against 21.8% accuracy means it will confidently invent rather than decline**. The model's enduring value is the combination of an Apache 2.0 licence, single-GPU serving and genuinely strong structured reasoning; its limitation is that it was built before agentic benchmarks became the thing that separates models.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated page for `gpt-oss-120b` (Open Weight source type, **128K context**, 25 of 626 benchmarks, overall 36.86 / rank #148 of 891) together with every underlying measurement it cites: **OpenAI's own `gpt-oss-120b` and `gpt-oss-20b` model card PDF** (MMLU 90%, AIME 2024 95.8%, AIME 2025 92.5%, GPQA 80.1%, SWE-bench Verified 62.4%, HLE 14.9%), **Artificial Analysis** (AA-GPQA Diamond 78.2%, AA-HLE 19.6%, AA-IFBench 69.0%, τ²-bench 65.8%, AA-LCR 52.0%, AA-SciCode 34.0%, AA Coding Index 30.4%, Intelligence Index 11.6, AA Agentic Index 6.2%, GDPval-AA 745 Elo / 5.4% normalized, APEX-Agents-AA 3.1%, CritPt 1.1%, and AA-Omniscience −49.2% index / 21.8% accuracy / **90.8% hallucination rate**), **React Native Evals** (71.6%), **Gert Labs** (29.61%) and **OpenRouter** (Design Arena Website 972 Elo). **The vendor-versus-independent comparison is reported explicitly and used to calibrate trust**: GPQA agrees within 1.9 points, and on HLE — the hardest benchmark in the set — **Artificial Analysis measured 19.6% against OpenAI's self-reported 14.9%**, i.e. the vendor under-reported, which is a strong honesty signal and the reason I did not discount the vendor-only MMLU, AIME and SWE-bench rows. **One classification discrepancy is flagged rather than adopted:** BenchLM labels this ID "Non-Reasoning", which conflicts with OpenAI's documented configurable reasoning-effort control, so reasoning is treated as supported with the disagreement noted. The **Design Arena Website Elo is deliberately excluded from the multimodal dimension**, since it measures web-output preference rather than visual understanding. Absent evidence is named, not filled: no LiveCodeBench, SWE-bench Pro, Terminal-Bench, DeepSWE, BFCL, Toolathlon, MCP-Atlas, BrowseComp, MRCR or needle-retrieval figure exists, and no max-output specification is published. The single-80GB-GPU deployment requirement and the 117B-total / 5.1B-active split are reported as the material cost facts. No data was imported from **GPT-OSS 20B** or from `gpt-5-nano`, `gpt-5.3-codex-spark`, `gpt-5.4-nano` or `gpt-5.4-mini`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
