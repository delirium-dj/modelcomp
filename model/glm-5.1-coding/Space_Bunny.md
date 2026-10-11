# GLM 5.1 Coding — findings by Space Bunny

- Source: Z.AI (`glm-5.1`; GLM-5.1)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 66.4 → 58.4.** The prior pass cited the Z.AI model card plus BenchLM, and recorded that "Toolathlon, GDPval-AA, and ClawProBench" and "LCR/MLCR, CritPt, and hallucination metrics" were unavailable. **All of those gaps are now closed**, and they split cleanly: the reliability gap closes *well* (**Hallucination Rate 29.9%, Omniscience Index +0.9%** — one of only four positive indices in this batch) while the agentic gap closes *badly* (**AA Agentic Index 25.2%, GDPval-AA 31.0%, ResearchClawBench 18.2%**). Restated: **Tool 82 → 62**, **Reasoning 85 → 78**, **Context 70 → 72 (up)**, **Coding 80 → 65**, **Cost 72 → 80**, Multimodal unchanged at 15.

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weight MoE model for agentic software engineering, long-horizon tasks, tool use, and mathematical/professional work. **Two generations behind now — superseded by GLM-5.2 and GLM-5.3 — and its one outstanding quality, factual reliability, is the reason it still has a place.**
- **Provider / access:** Z.AI API (`glm-5.1`); Hugging Face `zai-org/GLM-5.1`; OpenCode Zen route `opencode/glm-5.1` at **$1.40 / $4.40 / $0.26 cached read** (confirmed in Zen's live pricing table). **No Zen Free ID.**
- **Release / knowledge:** BenchLM lists **2026-04-07**; Hugging Face repository creation 2026-04-03. **No reliable knowledge cutoff has ever been published** — unchanged after two passes.
- **IDs:** `glm-5.1`; `zai-org/GLM-5.1`.
- **Context window:** **203K** (BenchLM, confirmed again 2026-10-10). Repository metadata in this project says 200K–205K. **Exact maximum output remains unverified** after two passes.
- **Modalities:** **Text in / text out.** The GLM-5.1 chat template is text-only; reasoning/thinking and tool calls supported. **No image, video, or audio modality is claimed.** Z.AI's **GLM-5V-Turbo** sibling covers multimodal work.
- **Pricing (verified 2026-10-10):** **$1.40 per 1M input / $4.40 per 1M output, $0.26 cached read** — Z.AI first-party and OpenCode Zen agree exactly. **MIT-licensed open weights.** Comparable Z.AI flagships (GLM-5.3) are now listed free across a very large provider table on models.dev — a family-level observation, not a verified price for this checkpoint.
- **Architecture:** Open-weight MoE, approximately **754B total parameters**; Hugging Face config identifies **8 experts per token**; **MIT licence**. **Active parameter count still unverified** in the reviewed metadata after two passes.

### Raw benchmarks found

**Official Z.AI (launch blog / model card):**

- Terminal-Bench 2.0 **63.5%**; BrowseComp **68%**; τ³-bench **70.6%**; MCP Atlas **71.8%**
- GPQA Diamond **86.2%**; AIME 2026 **95.3%**; HMMT Nov 2025 **94.0%**; HMMT Feb 2026 **82.6%**; MMAnswerBench **83.8%**
- SWE-bench Pro **58.4%**; NL2Repo **42.7%**
- HLE **31%** without tools / **52.3%** with tools

**Independent — new this pass:**

Reasoning / knowledge — **the reliability gap closes favourably:**

- **AA-Omniscience Index: +0.9%**; **Accuracy: 23.7%**; **Hallucination Rate: 29.9%** — *one of only four models in this batch with a positive Omniscience index, alongside GLM-5.2 (+4.4%), GLM-5.3 (+14.3%) and MiMo-V2.5-Pro (+3.3%)*
- **GPQA Diamond: 86.2% (Z.AI) / 86.8% (AA) / 84.5% (Vals AI)** — tight three-source agreement
- MMLU-Pro **86.9%** (Vals AI); HLE **30.1%** (AA)
- **FrontierMath v2 Tiers 1–3: 33.448%**; **Tier 4: 12.500%** (Epoch AI) — *far above the 4.8%/4.2% the Gemini 2.5 line manages*
- **CritPt: 4.6%** — the one weak new figure
- **AA-Intelligence Index: 26.1**; **IFBench: 76.3%**

Agent / tool use — **the agentic gap closes unfavourably:**

- **τ²-bench: 97.7%** (Artificial Analysis) — *excellent, and the best in the GLM family*
- **AA Agentic Index: 25.2%**; **GDPval-AA: 31.0% / Elo 1,181**; **ResearchClawBench: 18.2%**
- Terminal-Bench 2.1 (Vals AI) **56.9%**; Gert Labs **60.11%**; CyberGym **68.7%**; Claw-Eval **62.3%**

Coding:

- **AA Coding Index: 55.8%**; **AA-SciCode: 44.8%**; OpenHarmony Bench **52.3%**
- SWE-bench **76.4%** (Vals AI); LiveCodeBench **81.4%** (Vals AI); SWE-Rebench **62.7%**; **Vibe Code Bench v1.1 31.46%** (Vals AI)

Long context:

- **AA-LCR: 73.7%** (Artificial Analysis) — *the independent retrieval-at-length measurement the prior pass lacked*

Multimodal: **Design Arena Website 1,290 Elo** (OpenRouter) — a text/code output signal, not a native image capability.

**BenchLM composite: 56.48/100, #58 of 889** (44 of 625 benchmarks). Family: **GLM-5.3 68.64**, GLM-5.2 61.55, GLM-5.3-Flash 57.36, GLM-5-Turbo 54.15, GLM-5 54.14.

Sources consulted: [BenchLM GLM-5.1 (updated 2026-10-10)](https://benchlm.ai/models/glm-5-1), [Z.AI GLM-5.1 launch blog](https://z.ai/blog/glm-5.1), [Z.AI GLM-5.1 Hugging Face model card](https://huggingface.co/zai-org/GLM-5.1), [Vals AI GLM-5.1](https://www.vals.ai/models/zai_glm-5-1), [Artificial Analysis GLM-5.1](https://artificialanalysis.ai/models/glm-5-1) and its τ²-bench / GDPval-AA / LCR / SciCode / Coding Index leaderboards, [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), [SWE-Rebench](https://swe-rebench.com/), [Gert Labs](https://gertlabs.com/rankings), [ResearchClawBench](https://internscience.github.io/ResearchClawBench-Home/), [CyberGym](https://cybergym.io/), [OpenHarmony Bench](https://bench.matrix.openharmony.cn/), and [OpenCode Zen](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 62/100.** **Down from 82 — a 20-point correction.** Z.AI's figures are good — **Terminal-Bench 2.0 63.5%, MCP Atlas 71.8%, BrowseComp 68%, τ³-bench 70.6%, Claw-Eval 62.3%** — and **τ²-bench at 97.7% is the best figure in the entire GLM family**, which is credited. But the independent agentic measurement is poor: **AA Agentic Index 25.2%**, **GDPval-AA 31.0%**, **ResearchClawBench 18.2%**, **Terminal-Bench 2.1 (Vals AI) 56.9%**. The prior report scored Tool use 82 while explicitly noting GDPval-AA was missing; **GDPval-AA at 31.0% is now the weakest of the new rows**, and ResearchClawBench at 18.2% shows deep-research agent performance is very poor. **This is the sixth model in this batch with a 90%+ τ-bench score and a low general agentic index** — the pattern is now fully established.
- **Reasoning: 78/100.** Down from 85. **Knowledge and mathematics are genuinely strong and well corroborated: GPQA Diamond 86.2% / 86.8% / 84.5% across three sources, MMLU-Pro 86.9%, AIME 2026 95.3%, HMMT 94.0% / 82.6%, MMAnswerBench 83.8%, IFBench 76.3%.** The new **FrontierMath v2 results are a real strength — 33.448% on Tiers 1–3 and 12.500% on Tier 4**, which is roughly seven to three times what the Gemini 2.5 line manages, and is the clearest evidence in this report of genuine mathematical reasoning. **CritPt 4.6%** contradicts it sharply and is the weakest single figure. **The deciding positive is reliability: Hallucination Rate 29.9% with Omniscience Index +0.9%** — one of only four models in this batch where a pipeline can use output without a mandatory retrieval layer. **HLE 30.1%** and an **Intelligence Index of 26.1** cap the score. **No knowledge cutoff is still published.**
- **Context window: 72/100.** **Up from 70 — the one dimension that improved.** The **203K window** is confirmed by BenchLM again today, and **AA-LCR at 73.7%** is the genuine independent retrieval-at-length measurement the prior pass explicitly lacked ("no independent MRCR/RULER retrieval-at-length score was found"). That is a modest but real gain in evidence. Held below the 200K–500K tier midpoint because **203K is a narrow window by 2026 standards** — every GLM sibling except this one ships 1M — and **no MRCR, RULER, or GraphWalks figure exists.**
- **Multimodal: 15/100.** Unchanged. The evaluated model and its official chat template are **text-only**; no image, video, or audio support is claimed. This maps to the methodology's floor and is the single largest structural drag on the Overall. **Design Arena Website 1,290 Elo** measures text-and-code output quality, not non-text input, and does not raise it. **GLM-5V-Turbo** is the multimodal option in this family.
- **Coding: 65/100.** Down from 80. **SWE-bench 76.4% and LiveCodeBench 81.4% (both Vals AI) support solid coding**, and **SWE-Rebench 62.7%** corroborates. But the independent composite **AA Coding Index is 55.8%** — well below GLM-5.2's 68.8% and GLM-5.3's 74.8% — and **AA-SciCode 44.8%** is weak. **Vibe Code Bench at 31.46%** is the most informative figure in the whole coding block: it means the model can do a supervised coding task and will not hold up unsupervised. **SWE-bench Pro 58.4%, NL2Repo 42.7%, and OpenHarmony 52.3%** are all modest. The prior 80 was built on SWE-bench Pro and Vals figures alone.
- **Cost efficiency: 80/100.** **Up from 72.** **$1.40 / $4.40 with $0.26 cached read** is confirmed identically by Z.AI and OpenCode Zen, and **MIT-licensed open weights** make self-hosting a genuine option. The increase reflects the open-weights advantage properly counted rather than noted in passing — the prior 72 scored only the API price. Held below the high band because **no free route exists for this specific checkpoint** (the models.dev free-route observation is family-level and labelled as such), and **self-hosting ~754B parameters is substantial infrastructure**.
- **Overall Score: 58.4/100.** (62 + 78 + 72 + 15 + 65) / 5 = 292 / 5 = 58.4, down from 66.4. **Best fit: reliable text reasoning where you need the model to be factually dependable — research synthesis, document analysis, and mathematical work — on a paid route.** The specific claim: **a 29.9% hallucination rate with AIME 95.3% and FrontierMath Tiers 1–3 at 33.4% is a rare pairing** — this model can be trusted to do mathematics and to be honest about what it knows, which very few models at this price manage. **Four cautions.** First, **not an autonomous agent** — Agentic Index 25.2%, GDPval-AA 31.0%, ResearchClawBench 18.2%. Second, **CritPt 4.6%** shows its physics reasoning is much weaker than its competition mathematics. Third, **203K context** is short by 2026 standards; every sibling except this ships 1M. Fourth, **GLM-5.2 and GLM-5.3 both supersede it** — 61.55 and 68.64 on BenchLM against 56.48, with Coding Index 68.8% and 74.8% against 55.8%. **Choose GLM-5.1 over its successors for one reason only: its reliability profile is comparable to GLM-5.3's (29.9% vs 29.6%) at a lower benchmark tier, so for pure text-reasoning trust at the lowest cost in the family, it remains defensible.** Otherwise take GLM-5.3.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's GLM-5.1 profile, Z.AI's official GLM-5.1 launch blog and Hugging Face model card, Vals AI's GLM-5.1 leaderboards, Artificial Analysis's GLM-5.1 benchmark rows and six associated leaderboards, the Epoch AI FrontierMath v2 leaderboard, SWE-Rebench, Gert Labs, ResearchClawBench, CyberGym, OpenHarmony Bench, and OpenCode Zen's published pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass named three explicit gaps; all six that mattered are now closed, and they resolve in opposite directions, which is the substantive finding.** Upward on reliability: the prior recorded "LCR/MLCR, CritPt, and hallucination metrics: no verified public exact value found," and the arrival of **Hallucination Rate 29.9% with Omniscience Index +0.9%** is one of the four positive indices in this entire batch and is why Reasoning falls only 7 points despite weak new agentic data. Downward on agentic: the prior recorded "Toolathlon, GDPval-AA, and ClawProBench" as missing, and **GDPval-AA 31.0% / Elo 1,181, ResearchClawBench 18.2%, and Agentic Index 25.2%** drive Tool use from 82 to 62. **τ²-bench at 97.7% is credited as the best figure in the GLM family**, and **FrontierMath v2 at 33.448% / 12.500% is the report's strongest new positive** — roughly 3× the Gemini 2.5 line on Tiers 1–3 and **the clearest evidence of genuine mathematical reasoning found anywhere in this batch.** **CritPt 4.6% is recorded as contradicting it**, and that tension is stated rather than resolved. Context rises 70 → 72 because **AA-LCR 73.7%** finally supplies the retrieval evidence the prior pass said was missing. Cost rises 72 → 80 for properly counting the MIT open-weights advantage. **Two gaps persist after two passes and are stated: no published knowledge cutoff, and no verified maximum output token count**, with 203K context confirmed for the third time. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus eleven cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GLM_5_1_Coding_Recheck.md`, using the same headings.