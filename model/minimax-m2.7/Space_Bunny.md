# MiniMax M2.7 — findings by Space Bunny

- Source: MiniMax (`MiniMax-M2.7`; OpenCode Zen paid route)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 65.0 → 55.8 — and one factual correction to the prior pass's benchmark table.**

> **CORRECTION: "Vibe Code Bench: 55.6%" was a benchmark mis-attribution.** The prior report cited 55.6% from Groq documentation as this model's Vibe Code Bench score and used it as a positive coding datapoint. **BenchLM now attributes 55.6% to `VIBE-Pro` — a different benchmark — and the actual Vibe Code Bench v1.1 figure from Vals AI is 27.04%.** The prior report's Coding score of 82 rested partly on that figure. For scale across this batch: Grok 4 Fast **0.00%**, Grok 4.1 **1.20%**, Grok Build 0.1 unmeasured, Mistral Medium 3.5 unmeasured, **MiniMax M2.7 27.04%**, GLM-5.1 **31.46%**. MiniMax M2.7 sits mid-field on agentic coding — well below the 55.6% the prior report implied, but far above the xAI models.

Restated: **Tool 78 → 52**, **Reasoning 80 → 72**, **Context 70 → 74 (up)**, **Coding 82 → 66**, **Cost 90 (unchanged)**, Multimodal unchanged at 15.

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight text coding and agent model for terminal execution, office workflows, and multi-agent collaboration. **Cheap, reliable on facts, and weak as an agent — the seventh model in this batch with that profile.** The reviewed route is paid, not a free OpenCode alias.
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` (Chat Completions, **$0.30 / $1.20 / $0.06 cached**); Hugging Face `MiniMaxAI/MiniMax-M2.7`; Groq and other inference providers. **No Zen free ID exists.**
- **Release / knowledge:** BenchLM lists **2026-03-18**. **No reliable knowledge cutoff has been shown** after two passes.
- **IDs:** `opencode/minimax-m2.7`; `MiniMax-M2.7`; `MiniMaxAI/MiniMax-M2.7`.
- **Context window:** **200K** (BenchLM model profile and its technical specification). Exact model-card routes report **196K–205K depending on provider**. **Maximum output still not consistently documented**; repository metadata indicates approximately 131K, retained as provider-specific.
- **Modalities:** **Text in / text out.** Reasoning / interleaved thinking and tool calls supported; **no image, audio, or video input verified.**
- **Pricing (verified 2026-10-10):** **$0.30 per 1M input / $1.20 per 1M output, $0.06 cached read** (OpenCode Zen, confirmed in its live pricing table). Paid pricing, not a free tier. **Open weights** permit private deployment.
- **Architecture:** Open-weight MoE, approximately **229B total / 10B active** (provider model metadata). Exact architecture details vary by serving source and are not over-claimed here.

### Raw benchmarks found

**Official MiniMax (M2.7 announcement):**

- Terminal-Bench 2.0 **57%**; Toolathlon **46.3%**; MLE-Bench Lite **66.6%**; MM-ClawBench **62.7%**; GDPval-AA **1,495 Elo**
- SWE-bench Pro **56.2%**; SWE-bench Multilingual **76.5%**; Multi-SWE Bench **52.7%**; **VIBE-Pro 55.6%**; NL2Repo **39.8%**

**Independent — new this pass:**

Agent / tool use:

- **τ²-bench: 84.8%** (Artificial Analysis); **τ³-bench: 67.6%** (GLM-5.1 model card comparison table)
- **APEX-Agents-AA: 10.6%** — *near-floor*
- **GDPval-AA: 25.7% / Elo 1,087** — *against MiniMax's own claimed Elo 1,495*
- **AA Agentic Index: 16.8%**; Gert Labs **40.40%**; Terminal-Bench 2.1 (Vals AI) **48.7%**

Coding:

- **SWE-bench: 75.4%** (Arcee Trinity-Large-Thinking comparison table) / **73.8%** (Vals AI) — two sources, close agreement
- **LiveCodeBench: 79.9%** (Vals AI); **SWE-Rebench: 51.9%**; **React Native Evals: 71.4%**
- **Vibe Code Bench v1.1: 27.04%** (Vals AI) — *the corrected figure; see the note above*
- **AA Coding Index: 52.6%**; **AA-SciCode: 50.1%**

Reasoning / knowledge:

- **GPQA Diamond: 87.4% (AA) / 87.0% (GLM-5.1 table) / 86.6% (Vals AI)** — *excellent three-source agreement*
- MMLU-Pro **80.4%** (Vals AI) / **80.8%** (Arcee)
- **AA-Omniscience Index: +0.8%**; **Accuracy: 26.8%**; **Hallucination Rate: 35.6%** — *a positive index and one of the better reliability profiles in the batch*
- **AA-Intelligence Index: 22.8%**; HLE **28%** (GLM-5.1 table) / **29.6%** (AA)
- **CritPt: 0.6%** — near-zero physics reasoning
- **IFBench: 75.7%**

Long context:

- **AA-LCR: 78.3%** (Artificial Analysis) — *the retrieval measurement the prior pass lacked*

Mathematics: AIME 2026 **89.8%**; HMMT Nov 2025 **81.0%**; HMMT Feb 2026 **72.7%** (GLM-5.1 comparison table); AIME 2025 **80.0%** (Arcee).

**BenchLM composite: 48.62/100, #102 of 889** (46 of 625 benchmarks). MiniMax family: **M3 54.65**, M2.5 50.18, M1 80k 27.58.

Sources consulted: [BenchLM MiniMax M2.7 (updated 2026-10-10)](https://benchlm.ai/models/minimax-m2-7), [MiniMax M2.7 announcement](https://www.minimax.io/news/minimax-m27-en), [MiniMax M2.7 Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7), [Vals AI MiniMax M2.7](https://www.vals.ai/models/minimax_MiniMax-M2.7), [Artificial Analysis MiniMax M2.7](https://artificialanalysis.ai/models/minimax-m2-7), [SWE-Rebench](https://swe-rebench.com/), [React Native Evals](https://rn-evals.vercel.app/), [Claw-Eval](https://claw-eval.github.io/), [Gert Labs](https://gertlabs.com/rankings), [GLM-5.1 model card comparison table](https://huggingface.co/zai-org/GLM-5.1), and [OpenCode Zen](https://opencode.ai/docs/zen), accessed 2026-10-10. Third-party comparison-table figures (Arcee, GLM-5.1 card) are labelled as such rather than treated as vendor runs.

### Normalized scores (1–100)

- **Tool use: 52/100.** **Down from 78 — a 26-point correction.** MiniMax's own figures are respectable for what they claim — **Terminal-Bench 2.0 57%, Toolathlon 46.3%, MLE-Bench Lite 66.6%, MM-ClawBench 62.7%, GDPval-AA Elo 1,495** — and the prior report scored 78 while noting "Tau3 and exact ClawProBench values are missing." Independent measurement refutes the agentic framing: **APEX-Agents-AA 10.6%**, **AA Agentic Index 16.8%**, **GDPval-AA 25.7% — against MiniMax's own claimed Elo 1,495**, **Gert Labs 40.40%**, **Terminal-Bench 2.1 (Vals AI) 48.7%**. **τ²-bench 84.8% is credited** as a genuine strength and **τ³-bench 67.6%** confirms it, but this is the **seventh model in this batch** showing a strong τ-bench score alongside a low general agentic index. The prior 78 substantially overstated what this model does with tools beyond a single domain.
- **Reasoning: 72/100.** Down from 80. **Knowledge is solid and very well corroborated: GPQA Diamond 87.4% / 87.0% / 86.6% across three sources**, MMLU-Pro 80.4% / 80.8%, AIME 2026 89.8%, HMMT 81.0% / 72.7%, IFBench 75.7%. **The reliability profile is a genuine strength: Hallucination Rate 35.6% with a positive Omniscience Index of +0.8%** — one of only five models in this batch where the index is positive, and materially better than any xAI model measured. The reductions are **CritPt at 0.6%** (near-zero, and the weakest figure in the batch), **HLE 28–29.6%**, and an **Intelligence Index of 22.8** that sits well below its GPQA would suggest. **MMLU-Pro 80.4%** is also noticeably lower than every comparable model here. **No knowledge cutoff exists after two passes.**
- **Context window: 74/100.** **Up from 74, unchanged in substance but materially better evidenced.** The **200K window** is confirmed, and **AA-LCR at 78.3%** is the genuine independent retrieval-at-length measurement the prior pass explicitly lacked ("no exact-model MRCR/RULER retrieval result was found"). That is a real gain in evidence quality. The score sits in the 200K–500K band rather than the ≥1M tier, and **no MRCR, RULER, GraphWalks, or MLCR figure exists** — and **maximum output remains inconsistently documented**.
- **Multimodal: 15/100.** Unchanged. **Text input/output**; no image, audio, or video input is verified in any specification. This maps to the methodology's floor and is the second-largest structural drag on the Overall. **Design Arena Website 1,248 Elo** measures text-and-code output quality, not non-text input.
- **Coding: 66/100.** **Down from 82 — a 16-point fall, driven by the benchmark correction plus new independent data.** **SWE-bench 75.4% / 73.8%** (two sources, close agreement) and **LiveCodeBench 79.9%** are respectable. But the prior report's Coding score leaned on "Vibe Code Bench 55.6%," **which is a mis-attribution — 55.6% is VIBE-Pro, and actual Vibe Code Bench is 27.04%.** Added to that: **AA Coding Index 52.6%**, **AA-SciCode 50.1%**, **NL2Repo 39.8%**, **SWE-Rebench 51.9%**, **Multi-SWE 52.7%**, **SWE-bench Pro 56.2%**. The picture is consistent: competent single-shot repository work, weak on multi-file and autonomous tasks. **Vibe Code Bench 27.04%** places it mid-field in this batch — well above Grok 4 Fast's 0.00% and Grok 4.1's 1.20%, below GLM-5.1's 31.46%.
- **Cost efficiency: 90/100.** **Unchanged.** **$0.30 in / $1.20 out with $0.06 cached reads** is inexpensive relative to frontier paid models, and **open weights** add a self-hosting option. Held below the top band because it is a paid rather than free tier, **self-hosting 229B total / 10B active is not trivial**, and the same family's newer **MiniMax M3 and M2.5 are both now free on OpenCode Zen** at $0.30/$1.20 — so the paid route for M2.7 is competing against free alternatives.
- **Overall Score: 55.8/100.** (52 + 72 + 74 + 15 + 66) / 5 = 279 / 5 = 55.8, down from 65.0. **Best fit: budget text coding and factual reasoning where reliability matters and the task is well-specified — a supervised patch-and-review loop at $0.30/$1.20.** The specific profile is **GPQA ~87%, a 35.6% hallucination rate with a positive Omniscience index, and SWE-bench 73.8–75.4%**, which is a workable combination for code that a test suite will check. **Four cautions.** First, **not an agent** — APEX-Agents 10.6%, Agentic Index 16.8%, GDPval-AA 25.7%. Second, **CritPt 0.6%** — do not use it for physics, and note that its strong AIME 89.8% does not extend to harder science. Third, **text-only, 200K context.** Fourth, **superseded and now outcompeted on price**: MiniMax **M3 scores 54.65 against this model's 48.62** on BenchLM and **M2.5 50.18**, and both are served free on OpenCode Zen. **There is no reason to choose M2.7 over either sibling today.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's MiniMax M2.7 profile, MiniMax's official M2.7 announcement and Hugging Face model card, Vals AI's MiniMax M2.7 leaderboards, Artificial Analysis's MiniMax M2.7 benchmark rows, SWE-Rebench, React Native Evals, Claw-Eval, Gert Labs, third-party comparison tables (Arcee's Trinity-Large-Thinking post and Z.AI's GLM-5.1 model card), and OpenCode Zen's published pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the material correction is a benchmark mis-attribution in the prior pass.** It cited "**Vibe Code Bench: 55.6%**" from Groq documentation and used it as a positive coding datapoint supporting a Coding score of 82. **BenchLM attributes 55.6% to `VIBE-Pro`, a different benchmark; the actual Vibe Code Bench v1.1 figure from Vals AI is 27.04%.** This is the same class of error as the prior pass's "ExploitBench vs ExploitGym" confusion on GLM-5.2, and the report now places the corrected figure in context against every other Vibe Code Bench score measured across the three batches — which shows 27.04% to be mid-field rather than the strong result the prior pass implied. **Two offsetting corrections are also recorded: Tool use falls 78 → 52** because **APEX-Agents 10.6%, Agentic Index 16.8% and GDPval-AA 25.7%** close the gap the prior pass flagged, and that last figure **contradicts MiniMax's own claimed Elo 1,495**; while **Reasoning holds up comparatively well on a 35.6% hallucination rate with a positive +0.8% Omniscience index**, one of only five positive indices recorded across all three batches. **Context rises on evidence, not capability: AA-LCR 78.3%** finally supplies the retrieval measurement the prior pass said was missing. **GPQA is credited for three-source agreement at 87.4 / 87.0 / 86.6%.** The overriding practical finding is that **M2.7 is now the weakest of three MiniMax models on BenchLM (48.62 vs M2.5's 50.18 and M3's 54.65) while both siblings are free on Zen** — there is no current case for choosing it. **Two gaps persist: no knowledge cutoff and no consistent maximum-output figure.** Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals plus nine cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `MiniMax_M2_7_Recheck.md`, using the same headings.