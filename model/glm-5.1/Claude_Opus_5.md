# GLM 5.1 Coding — findings by Claude Opus 5

- Source: Z.AI (`glm-5.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weight MoE for **agentic engineering and long-horizon autonomous coding**, released under the banner "GLM-5.1: Towards Long-Horizon Tasks" ([Z.AI](https://z.ai/blog/glm-5.1)). **Naming correction worth stating plainly:** I could find **no evidence of a separate "GLM-5.1-Coding" SKU**. This folder's own `meta.json` records the ID as `opencode/glm-5.1`, and OpenCode Zen lists exactly one `glm-5.1` route ([Zen docs](https://opencode.ai/docs/zen/)). The "Coding" suffix appears to be a dataset-level label reflecting Z.AI's positioning, not a distinct checkpoint — so this report assesses **GLM-5.1** and says so. Siblings GLM-5, 5.2, 5.3, 5.3-Flash, 5-Turbo and the vision model GLM-5V-Turbo are separate entries.
- **Provider / access:** **OpenCode Zen** as `glm-5.1` on `https://opencode.ai/zen/v1/chat/completions`; the Z.ai API Platform; Google Cloud Vertex AI's partner catalogue; and **open weights** (BenchLM classifies it Open Weight).
- **Release / knowledge:** **No explicit release date surfaced** in my sources; it precedes GLM-5.2 (mid-June 2026) and succeeds GLM-5. Knowledge cutoff: no verified public date found.
- **IDs:** `glm-5.1` / `opencode/glm-5.1` (Zen), `z-ai/glm-5.1` (OpenRouter). **No free tier** — `noFreeId: true` is correct.
- **Context window:** **203,000 tokens** ([BenchLM](https://benchlm.ai/models/glm-5-1)); this repo's metadata records 200K–205K with **128K max output**.
- **Modalities:** **Text in → text out.** This repo's metadata states text-only, there is no vision benchmark, and Z.AI ships vision separately as GLM-5V-Turbo. Reasoning: yes. Tool calls: yes, and heavily evaluated.
- **Pricing (as of 2026-10-08):** OpenCode Zen — **$1.40 / MTok input, $4.40 / MTok output, $0.26 / MTok cached read**. Open weights are the free path.
- **Architecture:** Mixture-of-Experts, open weights. Parameter counts, expert configuration and attention design did not surface for this specific snapshot; BenchLM labels it the "snapshot (5.1)" variant of the GLM-5 family.

### Raw benchmarks found

> Well covered — **42 of 625 benchmarks** on BenchLM — with Z.AI's own blog figures, Artificial Analysis and Vals AI all present. The two source classes agree closely on GPQA (86.2 / 86.8 / 84.5 across three harnesses) and **diverge sharply on HLE (52.3% vendor vs 30.1% independent)**.

Agent / tool use:

- **τ²-bench: 97.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5-1)) — near-saturated
- MCP Atlas: **71.8%**; τ³-bench: **70.6%**; BrowseComp: **68%**; Terminal-Bench 2.0: **63.5%** (all [Z.AI](https://z.ai/blog/glm-5.1))
- Terminal-Bench 2.1: **56.9%** ([Vals AI](https://www.vals.ai/models/zai_glm-5.1)) — 6.6 points under the vendor's 2.0 figure on the harder harness
- **CyberGym: 68.7%** ([CyberGym leaderboard](https://cybergym.io/)) — independent
- Claw-Eval: **62.3%** ([leaderboard](https://claw-eval.github.io/)); Gert Labs: **60.11%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: **1181 Elo** / **31.0%** normalized (Artificial Analysis)
- AA Agentic Index: **25.2%**; ResearchClawBench: **18.2%** ([leaderboard](https://internscience.github.io/ResearchClawBench-Home/))

Reasoning / knowledge:

- **GPQA Diamond: 86.2%** (Z.AI) / **86.8%** (Artificial Analysis) / **84.5%** (Vals AI) — three harnesses within 2.3 points
- **HLE: 52.3%** (Z.AI) versus **AA-HLE 30.1%** (Artificial Analysis) — a **22.2-point gap**, the dominant source conflict in this report
- MMLU-Pro: **86.9%** (Vals AI)
- AIME 2026: **95.3%**; HMMT Nov 2025 **94.0%**, Feb 2026 **82.6%**; MMAnswerBench **83.8%** (Z.AI)
- **FrontierMath v2: Tiers 1–3 33.45%, Tier 4 12.50%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard)) — the **Tier 4 figure is the highest I have recorded in this entire research pass** (most models score 2–4%)
- AA-IFBench: **76.3%**; AA-LCR: **73.7%**; CritPt: **4.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **26.1**; BenchLM overall **56.05/100, rank #58 of 889**
- **AA-Omniscience: Index +0.9, Accuracy 23.7%, Hallucination Rate 29.9%** — a positive index and a sub-30% hallucination rate, placing it among the better-abstaining models in this dataset

Coding:

- **SWE-bench Verified: 76.4%** ([Vals AI](https://www.vals.ai/models/zai_glm-5.1)) — independent
- **LiveCodeBench: 81.4%** (Vals AI)
- **SWE-Rebench: 62.7%** ([leaderboard](https://swe-rebench.com/)) — independent
- SWE-bench Pro: **58.4%**; NL2Repo: **42.7%** (Z.AI)
- AA Coding Index: **55.8%**; AA-SciCode: **44.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.3%** ([official leaderboard](https://bench.matrix.openharmony.cn/))
- **Vibe Code Bench: 31.46%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — low, but notably **not** the near-zero collapse that the Grok and Gemini families post on this harness

Multimodal:

- **Nothing, consistent with a text-only model.** Design Arena — Website **1290 Elo** ([OpenRouter](https://openrouter.ai/z-ai/glm-5.1/benchmarks)) measures generated front-end design preference and is not multimodal evidence.

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 73.7%** is the only quantified long-context signal.

### Normalized scores (1–100)

- **Tool use: 76/100.** A strong, broad agentic profile: **τ²-bench 97.7%** is near-saturated, MCP Atlas 71.8% and τ³-bench 70.6% are frontier-adjacent, **CyberGym 68.7% is independently measured**, and BrowseComp 68% plus GDPval-AA 1181 Elo round it out. Capped by Terminal-Bench 2.1 landing at 56.9% independently, an AA Agentic Index of 25.2%, and ResearchClawBench 18.2%.
- **Reasoning: 78/100.** GPQA Diamond agreeing at **86.2 / 86.8 / 84.5 across three harnesses** is strong evidence, AIME 2026 95.3% and MMLU-Pro 86.9% are excellent, AA-IFBench 76.3% is solid, and **FrontierMath v2 Tier 4 at 12.50% is the best result on that tier anywhere in my queue** — genuine hard-mathematics capability. The **29.9% hallucination rate with a positive Omniscience Index** is a real strength. Capped by the **22.2-point HLE discrepancy** (I weight the independent 30.1%), CritPt 4.6%, and an AA Intelligence Index of 26.1.
- **Context window: 74/100.** 203K with 128K output is a solid upper-mid specification and AA-LCR 73.7% shows real usability. Held in the mid-70s because 203K is now mid-pack against the 1M windows common in this dataset — including Z.AI's own GLM-5.2 — and no retrieval curve exists.
- **Multimodal: 15/100.** **Text-only** — no image, audio or video input, no generated media, and Z.AI ships vision as the separate GLM-5V-Turbo. Template floor, costing roughly 12 points of Overall.
- **Coding: 78/100.** The dimension it is positioned for, and the independent numbers lead: **SWE-bench Verified 76.4% and LiveCodeBench 81.4% both measured by Vals AI**, with SWE-Rebench 62.7% from the benchmark owner and SWE-bench Pro 58.4% from the vendor. Capped by NL2Repo 42.7%, AA-SciCode 44.8%, an AA Coding Index of 55.8%, and Vibe Code Bench 31.46%.
- **Cost efficiency: 68/100.** $1.40 in / $4.40 out with $0.26 cached reads is reasonable in absolute terms for a model posting SWE-bench 76.4%, and the open weights help. But the intra-vendor comparison is damaging and unambiguous: **GLM-5.2 and GLM-5.3 are listed on OpenCode Zen at exactly the same $1.40 / $4.40 / $0.26, and score 61.5 and 68.65 respectively against this model's 56.05** — identical price, strictly better models, same vendor, same endpoint. GLM-5.2 additionally brings a 1M window against this model's 203K. There is no workload for which paying this rate for 5.1 is rational.
- **Overall Score: 64.2/100.** Mean of the five non-cost dims (76 + 78 + 74 + 15 + 78) / 5 = 64.2. Best fit: open-weight long-horizon coding and tool-use agents where you are **self-hosting** (in which case the generation choice is yours) or where a 203K window and this exact snapshot are already pinned. Its genuine distinctions are a near-saturated τ²-bench, a 29.9% hallucination rate, and the best FrontierMath Tier 4 result in this dataset. On the hosted route, however, it is dominated at identical price by two later siblings, and the Overall is suppressed ~12 points by the text-only floor.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated GLM-5.1 page (42 of 625 benchmarks, 203K context, Open Weight classification, and the intra-family score comparison used in the cost assessment) and the underlying sources it cites: Z.AI's "GLM-5.1: Towards Long-Horizon Tasks" blog for the vendor figures, and the Artificial Analysis, Vals AI, CyberGym, Claw-Eval, SWE-Rebench, OpenHarmony Bench, Gert Labs, ResearchClawBench, Epoch AI and OpenRouter leaderboards for independent ones. The OpenCode Zen documentation supplied the ID, endpoint and pricing — and confirmed that **only a plain `glm-5.1` route exists**, which together with this folder's own `meta.json` ID of `opencode/glm-5.1` is the basis for reporting the "Coding" suffix as a dataset label rather than a distinct SKU. Where sources diverge (HLE 52.3% vendor vs 30.1% independent; Terminal-Bench 2.0 63.5% vendor vs 2.1 56.9% independent) both are reported and the independent figure weighted; where three harnesses converge on GPQA Diamond (86.2 / 86.8 / 84.5) that is reported as a credibility signal. No release date surfaced, so none is asserted. No data was imported from `glm-5.2`, `glm-5.2-coding`, `glm-5.3`, `glm-5.3-flash`, `glm-5.3-flashx` or `glm-5.3-free`, all of which have their own folders; the GLM-5.2/5.3 figures cited in the cost assessment are BenchLM aggregate scores and Zen list prices, used only for price-comparison purposes. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
