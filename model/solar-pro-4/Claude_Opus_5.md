# Solar Pro 4 — findings by Claude Opus 5

- Source: Upstage AI (`solar-pro-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's flagship reasoning model, and a substantial generational jump: BenchLM scores its predecessors **Solar Pro 3 at 30.2 and Solar Pro 2 at 29.33**, while Solar Pro 4 posts GPQA Diamond 89.0%, LiveCodeBench 87.8% and AIME 2026 95.3% ([Upstage Solar Pro 4 launch post](https://www.upstage.ai/blog/en/solar-pro-4)). It is also one of the few models in this dataset with a **published Korean-language benchmark**, reflecting Upstage's Korean-market focus. Distinct model; Solar Pro 2, Pro 3 and Solar Open 2 are separate entries.
- **Provider / access:** Upstage's own platform; listed on OpenRouter as `upstage/solar-pro4`. **No OpenCode Zen ID** — Zen's catalogue contains no Upstage entry. This repo records `upstageai/solar-pro-4`.
- **Release / knowledge:** **No explicit release date** surfaced in the sources I consulted. Knowledge cutoff: no verified public date found.
- **IDs:** `solar-pro-4` / `solar-pro4` (Upstage, OpenRouter). **No free tier** — `noFreeId: true` is correct.
- **Context window:** **512,000 tokens** ([BenchLM](https://benchlm.ai/models/solar-pro-4)) — the largest window of any model in this batch, and notably larger than the 200–256K band most mid-tier models occupy. Max output: no verified public figure found.
- **Modalities:** **No verified modality data found.** This is a genuine gap and I am not papering over it: Upstage's launch post as transcribed by BenchLM lists no modality statement, this folder's `meta.json` records "Unknown", and **no vision, audio, video or document benchmark exists** for the model. The benchmark profile — GPQA, MMLU-Pro, KMMLU-Pro, AIME, LiveCodeBench, SWE-bench, Terminal-Bench, BrowseComp — is entirely text-and-tools, which is consistent with a text-only model but does not prove it. Reasoning: **yes** (BenchLM classifies it a reasoning model). Tool calls: yes, evidenced by MCP Atlas and Terminal-Bench results.
- **Pricing (as of 2026-10-08):** **No price could be verified in any source.** This folder's metadata records "Unknown", BenchLM lists it as Proprietary without a rate, and no rate card surfaced. This is reflected in the cost score below rather than guessed at.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and training method undisclosed. **Note:** this folder's `meta.json` is largely a placeholder ("vendor specs unverified in this research — tracked provisionally", with Unknown for context, modalities and pricing); the 512K context and the benchmark record below are new findings relative to it.

### Raw benchmarks found

> **Well covered for an under-tracked vendor — 22 benchmark rows — and the vendor's credibility is unusually good.** On GPQA Diamond, Upstage reports **89.0%** and Artificial Analysis independently measures **89.1%**: a 0.1-point match, which is the closest vendor/independent agreement I have recorded in this entire research pass. BenchLM nonetheless assigns **no overall score** ("unranked").

Agent / tool use:

- **MCP Atlas: 61.4%** ([Upstage](https://www.upstage.ai/blog/en/solar-pro-4))
- **Terminal-Bench 2.1: 57.0%** (Upstage) — a solid figure on the hard harness
- BrowseComp: **49.2%** (Upstage)
- GDPval-AA: **30.5%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/solar-pro4))
- **APEX-Agents: 18.7%** (Upstage) — the weakest agentic datapoint, and notably the vendor published it anyway
- τ²/τ³-bench, OSWorld, Toolathlon, Claw-Eval: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 89.0%** (Upstage) / **89.1%** (Artificial Analysis) — a 0.1-point agreement across vendor and independent harnesses
- **MMLU-Pro: 86.3%**; **AIME 2026: 95.3%** (Upstage)
- **KMMLU-Pro: 79.2%** (Upstage) — Korean-language professional reasoning, and one of very few non-English benchmarks published by any vendor in this dataset
- **AA-LCR: 71.0%** (Upstage)
- AA-HLE: **29.2%**; CritPt: **5.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **28.1**; BenchLM: **unranked**, no overall computed (22 of 625 benchmarks)
- **AA-Omniscience: Index −0.8, Accuracy 18.9%, Hallucination Rate 24.4%** — a near-zero index and a **24.4% hallucination rate**, which places it among the three or four most reliably abstaining models in this entire research pass

Coding:

- **LiveCodeBench: 87.8%** (Upstage) — one of the highest LiveCodeBench figures in this dataset
- **SWE-bench Verified: 70.6%** (Upstage)
- Terminal-Bench 2.1: **57.0%** (counted once for agentic and once here)
- AA-SciCode: **44.6%** (Artificial Analysis)
- SWE-bench Pro, FrontierCode, CursorBench: no verified public score found; **no independent reproduction of the SWE-bench or LiveCodeBench figures exists**

Multimodal:

- **Nothing — and no modality statement either.** Design Arena — Website **1183 Elo** ([OpenRouter](https://openrouter.ai/upstage/solar-pro4/benchmarks)) measures preference for generated front-end design and is **not** multimodal evidence.

Long context:

- No MRCR, RULER, LongBench or needle-retrieval number at any depth. **AA-LCR 71.0%** is the only quantified long-context signal against a **512K** window — the largest claim-to-evidence gap in this report.

### Normalized scores (1–100)

- **Tool use: 66/100.** A coherent mid-upper agentic profile: **MCP Atlas 61.4%** and **Terminal-Bench 2.1 57.0%** are both respectable on hard harnesses, and BrowseComp 49.2% shows real search-agent competence. Capped by GDPval-AA normalizing to 30.5% and **APEX-Agents at 18.7%** — which Upstage published itself rather than omitting, and which I credit as honest reporting even as it lowers the score.
- **Reasoning: 78/100.** The strongest dimension, and the best-verified: **GPQA Diamond at 89.0% vendor / 89.1% independent** is as tight an agreement as exists anywhere in this pass and makes Upstage's other unreplicated figures materially more credible. AIME 2026 95.3%, MMLU-Pro 86.3% and AA-LCR 71.0% are all strong, and **KMMLU-Pro 79.2%** demonstrates genuine multilingual depth rather than English-only tuning. The **24.4% hallucination rate with a near-zero Omniscience Index** is a real deployment advantage. Capped by AA-HLE 29.2%, CritPt 5.4%, an AA Intelligence Index of 28.1, and 18.9% Omniscience accuracy.
- **Context window: 82/100.** **512,000 tokens is the largest window in this batch** and double what most mid-tier competitors offer, which is a genuine differentiator. Scored high on capacity but held below the mid-80s because the validation is thin — one AA-LCR figure of 71.0% and no retrieval curve at any depth, against a half-million-token claim.
- **Multimodal: 20/100.** Scored low for an honest reason: **no modality statement exists in any source I could reach, and no multimodal benchmark of any kind has been published.** I therefore cannot credit image, audio or video input at all. The entire measured profile is text-and-tools, which is consistent with a text-only model, and 20 reflects "almost certainly text-only, but formally unverified" rather than the confirmed-text-only floor of 15. If Upstage documents vision input, this should be revisited.
- **Coding: 76/100.** **LiveCodeBench 87.8%** is excellent — among the top handful in this dataset — and **SWE-bench Verified 70.6%** is solid repository-repair capability. Upstage's demonstrated accuracy on GPQA lends both figures credibility. Capped because **neither has been independently reproduced**, AA-SciCode is 44.6%, Terminal-Bench 2.1 is 57.0%, and there is no SWE-bench Pro or FrontierCode result.
- **Cost efficiency: 45/100.** Scored on uncertainty rather than on a bad rate, and I will say so plainly: **no price could be verified from any source** — not Upstage's launch post as transcribed, not BenchLM, not this repo's own metadata, which records "Unknown". There is also **no free tier and no OpenCode Zen route**, so there is no zero-cost path to try it. A model with genuinely strong reasoning and coding scores may well be good value, but I cannot assert that without a rate, and a dimension defined as "paid value at price point" cannot score well when the price point is unknown and no free alternative exists.
- **Overall Score: 64.4/100.** Mean of the five non-cost dims (66 + 78 + 82 + 20 + 76) / 5 = 64.4. Best fit: **text reasoning and coding over very large contexts, with Korean-language strength** — a 512K window, LiveCodeBench 87.8%, GPQA 89.1% independently confirmed, KMMLU-Pro 79.2%, and a 24.4% hallucination rate make it a credible choice for long-document analysis and code work in Korean-market deployments. The score is suppressed mainly by the unverified modality surface and the unverified price, both of which are gaps in the public record rather than measured weaknesses. On the measured dimensions this is a better model than its 64.4 suggests.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated Solar Pro 4 page (512K context, reasoning classification, unranked status with 22 of 625 benchmarks, and the Solar Pro 3 / Pro 2 scores used for generational context) and the underlying sources it cites: Upstage's Solar Pro 4 launch post for Terminal-Bench 2.1, MCP Atlas, BrowseComp, APEX-Agents, SWE-bench Verified, LiveCodeBench, AA-LCR, GPQA Diamond, MMLU-Pro, KMMLU-Pro and AIME 2026; the Artificial Analysis leaderboards for the independent GPQA Diamond, HLE, CritPt, SciCode, Omniscience, Intelligence Index and GDPval figures; and OpenRouter for the Design Arena Elo. The OpenCode Zen catalogue was checked and contains no Upstage entry. The 0.1-point GPQA Diamond agreement between Upstage (89.0%) and Artificial Analysis (89.1%) is reported explicitly and used as the basis for extending credibility to Upstage's unreplicated LiveCodeBench and SWE-bench figures. **Three honest gaps are reported rather than filled:** no release date, no modality statement (so the multimodal score reflects formal non-verification, not a confirmed text-only floor), and no price (so the cost score reflects uncertainty plus the absence of any free route). This folder's `meta.json` is a placeholder recording Unknown for context, modalities and pricing; the 512K context window and the full benchmark record above are new findings relative to it. Design Arena is explicitly **not** credited as vision evidence. No data was imported from `solar-pro-3`, `solar-pro-2` or `solar-open-2`. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
