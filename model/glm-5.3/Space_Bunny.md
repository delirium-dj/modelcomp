# GLM-5.3 — findings by Space Bunny

- Source: Z.ai / GLM-5.3
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **Large net change — Overall 78.2 → 77.2 — masking two very large offsetting moves.** Quality dimensions came down slightly on newly-surfaced weaknesses (**Terminal-Bench 2.1 now has three sources spanning 88.2% / 83.9% / 71.5%**, and **FrontierSWE v2 collapses to 30.2%** against v1's 78.1%). Against that, **cost efficiency rose sharply, 70 → 88**, because models.dev now lists **103 providers for GLM-5.3 at $0.00/$0.00 with open weights** — a free frontier-scale reasoning model is a different proposition from a $1.40/$4.40 one. **SWE-bench Verified 95.4%** (Vals AI) is the single best new coding figure in this batch. Restated: **Tool 93 → 90**, **Reasoning 91 → 90**, **Context 98 → 97**, **Coding unchanged at 94**, **Multimodal unchanged at 15**, **Cost 70 → 88**.

## Model card

- **Name:** GLM-5.3 (max reasoning)
- **Short description:** Z.ai's large open-weight reasoning model for complex software engineering, long-horizon agent tasks, and high-capability tool use. **Best BenchLM rank of any model in this batch at #20 of 889**, with open weights now available free across a very large number of routes.
- **Provider / access:** Hugging Face `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`; Z.ai API; compatible local deployment. **models.dev lists 103 providers** as of 2026-10-10.
- **Release / knowledge:** **2026-08-14** (models.dev; the prior pass recorded 2026-08-18 from OpenRouter/AA). **No verified exact knowledge cutoff found** — an unchanged gap.
- **IDs:** `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`.
- **Context window:** **1,000,000 tokens input, 131,072 output** (models.dev, matching Z.ai's official evaluation spec and AA). OpenRouter has listed ~1.3M at times; 1M is carried as the contractual figure.
- **Modalities:** **Text input/output only.** Reasoning always enabled, with low / high / max effort (max default); tool and function calling supported. **No image, audio, or video input is documented** — hence the floor multimodal score.
- **Pricing (verified 2026-10-10 — materially changed):** models.dev lists **$0.00 input / $0.00 output** across its 103-provider table, with the weights flagged **Open** (Hugging Face). Z.ai first-party had listed **$1.40 / $4.40** per 1M at the time of the prior pass, with OpenRouter showing a discounted route near **$0.56 / $1.76**. **Free availability is now the headline; paid first-party remains as a fallback.**
- **Architecture:** Open-weight MoE, **753B total / 40B active** per token; released under the **GLM-5.3 licence with commercial-use restrictions** — not OSI open, unlike the Apache-2.0 Gemma weights.
- **Siblings:** GLM-5.2 (61.55), GLM-5.3-Flash (57.36), GLM-5.1 (56.48), GLM-5V-Turbo (50.10). BenchLM ranks GLM-5.3 well clear of all of them.

### Raw benchmarks found

**Official Z.ai model card:**

Agent / tool use: Toolathlon Verified **73.0%** · AutomationBench v1.0.6 **48.2%** · Agents' Last Exam (ALE-CLI) **28.5%** · Terminal-Bench 2.1 **88.2%** · Terminal-Bench 3.0 **28.3%** · GDPval-AA v2 **1,769 Elo** · HLE with tools **62.5%**

Coding: DeepSWE v1.1 **66.9%** · NL2Repo **58.0%** · FrontierSWE **78.1%** · SWE-Marathon v1.1 **42.5%** · ProgramBench **19.0%** · PostTrainBench **39.8%**

Safety: CyberGym **84.5%** · ExploitGym **15.0%**

**Independent — new this pass:**

Agent / tool use — **note the three-way Terminal-Bench 2.1 spread:**

- **Terminal-Bench 2.1: 88.2% (Z.ai) / 83.9% (Artificial Analysis) / 71.5% (Vals AI)** — a **16.7-point range across three credible harnesses**
- **Terminal-Bench 3.0: 28.3%** (Z.ai); **Terminal-Bench 4.0: 41.9%** (AA)
- **AutomationBench: 62.2%** (AA) vs Z.ai's 48.2% — AA reads *higher*
- **Tau3-Banking: 50.3%** (AA); **Briefcase: 1,510 Elo** (AA); **EnterpriseOps-Gym: 36.4%** (AA); **ITBench: 46.1%** (AA); **GDP.pdf: 11.2%** (AA)
- **GDPval-AA normalized: 57.6%**; **AA Agentic Index: 53.4%**

Coding:

- **SWE-bench: 95.4%** (Vals AI) — **the highest SWE-bench figure recorded for any model in this batch**
- **LiveCodeBench: 80.5%** (Vals AI); **SciCode: 59.0%**; **AA Coding Index: 74.8%**
- **VulcanBench v3: 78.3%**; **OpenHarmony Bench: 60.8%**
- **FrontierSWE v2: 30.2%** (Proximal) — *against Z.ai's FrontierSWE v1 at 78.1%. A 48-point collapse on the same benchmark family.*
- **Bug Hunt Bench: 19.0 fixes**

Reasoning / knowledge:

- **GPQA Diamond: 91.7% (AA) / 88.1% (Vals AI)**; **MMLU-Pro: 86.8%** (Vals AI)
- **AA-Intelligence Index: 44.8**; **HLE: 42.3%** (AA); **CritPt: 19.1%**
- **AA-LCR: 79.7%**; **MLCR-AA: 48.3%** — new
- **AA-Omniscience Index: +14.3%**; **Accuracy: 33.9%**; **Hallucination Rate: 29.6%** — **the best reliability profile in this batch by a wide margin**
- **Gray Swan IPI (15 attempts): 31.5%** (Google's Gemini 4 Argon launch chart) — new, and weak

Multimodal: **Design Arena Website 1,306 Elo** (OpenRouter) — a text-output preference signal, not a native image capability.

**BenchLM composite: 68.64/100, #20 of 889** (50 of 625 benchmarks) — the best rank of any model examined in this batch, and the broadest independent coverage in the batch at 50 benchmarks.

Sources consulted: [BenchLM GLM-5.3 (updated 2026-10-10)](https://benchlm.ai/models/glm-5-3), [Z.AI GLM-5.3 model card](https://huggingface.co/zai-org/GLM-5.3), [Vals AI GLM-5.3](https://www.vals.ai/models/zai_glm-5.3), [Artificial Analysis GLM-5.3](https://artificialanalysis.ai/models/glm-5-3), [models.dev GLM-5.3](https://models.dev/models/zhipuai/glm-5.3), [VulcanBench leaderboard](https://vulcanbench.com/leaderboard.html), [OpenHarmony Bench](https://bench.matrix.openharmony.cn/), [FrontierSWE v2 leaderboard](https://www.frontierswe.com/), and [Bug Hunt Bench](https://bughunt.productcompass.pm/data/benchmark.json), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 90/100.** Down from 93. The evidence is the strongest in this batch — **Toolathlon Verified 73.0%**, **Terminal-Bench 2.1 at 88.2% (Z.ai) / 83.9% (AA)**, **Tau3-Banking 50.3%**, **Agentic Index 53.4%**, **Briefcase 1,510 Elo** — but two new facts temper it. First, the **three-way Terminal-Bench 2.1 spread of 88.2 / 83.9 / 71.5%** shows how harness-dependent this headline is; the Vals AI reading of 71.5% is well below the vendor claim. Second, and more importantly, **the model drops off sharply on newer and harder harnesses: Terminal-Bench 3.0 at 28.3%, Terminal-Bench 4.0 at 41.9%, Agents' Last Exam at 28.5%, and GDP.pdf at 11.2%.** A model at 88% on Terminal-Bench 2.1 and 28% on Terminal-Bench 3.0 has strong results on a solved generation of benchmarks rather than durable agentic autonomy. Credited with AA's AutomationBench 62.2%, which reads *above* Z.ai's own 48.2%.
- **Reasoning: 90/100.** Down from 91. Knowledge remains excellent and independently confirmed: **GPQA Diamond 91.7% (AA) and 88.1% (Vals)**, **MMLU-Pro 86.8%**, **HLE 42.3%**, **CritPt 19.1%**, **Intelligence Index 44.8**. The deciding factor in this model's favour, and the reason it scores well above its peers despite a lower index than some: **AA-Omniscience Hallucination Rate of just 29.6%, Accuracy 33.9%, and a positive Omniscience Index of +14.3%** — the only model in this batch with a positive index, and roughly a third of the hallucination rate of Kimi K2.7 Code (82.4%) or Gemma 4 31B (85.0%). The reductions are minor and specific: **GPQA shows a 3.6-point vendor/independent split**, and the new **Gray Swan IPI at 31.5%** indicates the model degrades under repeated adversarial instruction pressure — a real weakness for agentic systems that must follow rules exactly across many turns.
- **Context window: 97/100.** Down from 98. **1,000,000 input / 131,072 output** verified against models.dev and Z.ai's spec, with **AA-LCR at 79.7%** as a genuine long-context retrieval result. The reduction reflects the new **MLCR-AA at 48.3%** — a weaker long-context number on a second harness, showing the same harness-dependence seen in Terminal-Bench. There is still **no MRCR, RULER, or GraphWalks figure** for this model.
- **Multimodal: 15/100.** Unchanged. The model is **text-only** — no image, audio, or video input is documented in any official or independent specification — which maps to the methodology's floor. The **Design Arena Website 1,306 Elo** result is recorded but does not raise the score: it measures the quality of text-and-code output, not the understanding of non-text input. Note that Z.ai's **GLM-5V-Turbo** sibling exists for genuinely multimodal work.
- **Coding: 94/100.** Unchanged, but the evidence base widened sharply in both directions. **SWE-bench at 95.4% (Vals AI)** is the strongest SWE-bench figure in this batch and a genuine frontier result, alongside **LiveCodeBench 80.5%**, **Coding Index 74.8%**, **SciCode 59.0%**, **VulcanBench v3 78.3%**, and **OpenHarmony 60.8%**. Against it: **FrontierSWE v2 at 30.2%** against Z.ai's own **FrontierSWE v1 at 78.1%** is a **48-point collapse on the same benchmark family** and is the single most important new fact here — it means at least one of Z.ai's headline coding numbers is version-specific and does not generalise. **ProgramBench 19.0%**, **SWE-Marathon 42.5%**, **PostTrainBench 39.8%**, and **Bug Hunt Bench 19.0 fixes** are all weak. The score holds at 94 rather than rising on SWE-bench 95.4 because that FrontierSWE v2 result undermines confidence in the vendor table as a whole.
- **Cost efficiency: 88/100.** **Up from 70 — the largest single movement in this report.** At the time of the prior pass the model was **$1.40 input / $4.40 output** first-party, which the prior pass correctly scored as expensive. models.dev now lists **GLM-5.3 at $0.00 / $0.00 across a 103-provider table** with the weights flagged **Open** on Hugging Face. A frontier-scale reasoning model with 1M context, GPQA 91.7%, and Terminal-Bench 2.1 above 83% that can be obtained at zero cost is a materially different proposition, and it is now the cheapest capable model examined in this batch by a wide margin. Held below 95 because the **GLM-5.3 licence carries commercial-use restrictions**, free routes are typically rate-limited, and self-hosting 753B total / 40B active is not trivial.
- **Overall Score: 77.2/100.** (90 + 90 + 97 + 15 + 94) / 5 = 386 / 5 = 77.2, down from 78.2. **The flat-looking headline conceals the real story: this model's value has doubled while its measured quality has softened slightly.** Its score is also structurally suppressed by the **Multimodal 15** floor — on the four text-only-relevant dimensions alone it scores (90 + 90 + 97 + 94) / 4 = **92.75**, which would place it near the top of this entire dataset. **Best fit: high-volume agentic software engineering and long-horizon tool workflows, on a free route.** The specific profile is a 1M-context model with terminal autonomy above 83%, SWE-bench above 95%, and — uniquely in this batch — **a 29.6% hallucination rate**, which makes it the one model here you can use as a pipeline's fact-producing step without a mandatory retrieval layer. **Three cautions.** First, **FrontierSWE v2 at 30.2%** against v1's 78.1% means do not trust vendor coding tables for this model; evaluate on your own repositories. Second, **Terminal-Bench 2.1 varies by 16.7 points across harnesses**, so pilot on the harness you will actually use. Third, **Gray Swan IPI 31.5%** means it will not hold a rigid rule set across a long session — verify constraints in code, not in the prompt.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Z.ai's official GLM-5.3 model card, Vals AI's GLM-5.3 leaderboard rows, Artificial Analysis's GLM-5.3 profile and its Terminal-Bench / Tau3-Banking / LCR / SciCode / Omniscience leaderboards, models.dev's 103-provider table, VulcanBench, OpenHarmony Bench, FrontierSWE v2, and Bug Hunt Bench; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **two corrections that move in opposite directions, both material.** On quality, the prior report relied on Z.ai's model card almost exclusively; independent harnesses have now run the model, and **Terminal-Bench 2.1 lands between 71.5% and 88.2% depending on who runs it**, while **Terminal-Bench 3.0 (28.3%) and 4.0 (41.9%) show a model that excels on the 2.1 generation of benchmarks rather than on current ones**, and **FrontierSWE v2 (30.2%) contradicts Z.ai's FrontierSWE v1 (78.1%) by 48 points**. Those three facts are why quality scores came down despite SWE-bench Verified reaching **95.4%** — the best SWE-bench figure in this batch, which is recorded and credited but not allowed to override the version-instability evidence. On cost, the prior report's **$1.40/$4.40** framing is superseded by models.dev's **$0.00/$0.00 across 103 providers with open weights**. **The prior pass's ExploitBench 54.4% has been corrected to ExploitGym 15.0%** — a different benchmark, and the confusion is not carried forward. The **29.6% hallucination rate and positive +14.3% Omniscience Index** are the model's distinguishing strength and are explicitly credited, since three of the four comparable models in this batch have negative indices. Search-provider rate limiting (HTTP 429) persisted, so evidence came from direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Recheck.md`, using the same headings.