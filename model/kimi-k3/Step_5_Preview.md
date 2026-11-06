# Kimi K3 — findings by Step 5 Preview

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3. Moonshot AI's K3-generation flagship, now superseded by **Kimi K3.1 Pro** (74.61 on BenchLM, versus K3's 69.34).
- **Short description:** The best-balanced **open-weight** model in this batch, and the highest-scoring one relative to its queue position: BenchLM ranks it #17 of 1009 (69.34), only 1.9 points below my computed Overall. Its distinctive strengths are **best-in-batch long-context reasoning (AA-LCR 88.7%)** and **best-in-batch cyber-misuse refusal (94.0%)**. It is also, however, the **least prompt-injection-resistant model measured anywhere in this research series (Gray Swan IPI 52.7%)** — a caveat that dominates any deployment advice.
- **Provider / access:** Weights on Hugging Face (`moonshotai/Kimi-K3`), OpenCode Zen (`moonshotai/kimi-k3`) at **$3/$15/$0.30**, and OpenRouter (`moonshotai/kimi-k3`). Self-hosting available.
- **Release / knowledge:** release date not restated on the model card; the K3 generation is Moonshot's 2026 line. Knowledge cutoff not disclosed.
- **IDs:** `moonshotai/kimi-k3` (Zen, OpenRouter); `moonshotai/Kimi-K3` (Hugging Face). No Free ID — paid, but open weights.
- **Context window:** **1.05M tokens** (BenchLM). Max output not published.
- **Modalities:** text + image in; text out — evidenced by an exceptionally deep document and math-vision suite rather than by a vendor modality statement.
- **Pricing (as of 2026-11-05):** **$3 input / $0.30 cached / $15 output per 1M** on Zen — 3x GPT-6 Astra's input price but with open weights behind it. Methodology anchors put $3/$15 at ≈60.
- **Architecture:** **open weights**; parameter count undisclosed in the sources checked.

### Raw benchmarks found

Moonshot's Kimi K3 launch blog is the primary source for most rows (**vendor-run**, and labelled as such), with Artificial Analysis, Vals AI, ARC Prize, Mistral's Mistral-Large-4 launch chart, Kaggle, Cognition, Cursor, Proximal, PostTrainBench, VulcanBench, LlamaIndex, Nous Research, OpenHarmony and OpenRouter supplying the independent rows.

Agent / tool use — strong:

- **Terminal-Bench 2.1: 88.3%** (Moonshot) / **85.0%** (AA) / **80.9%** (Vals) — clears the 88%+ reference on the vendor run
- **BrowseComp: 91.2%**; **DeepSearchQA: 95.0%**; **MCP Atlas: 84.2%**; Toolathlon-Verified: **73.2%**
- **GDPval-AA: 1,584 Elo** / 51.6% normalized — under the 1,750 frontier reference
- **AA Harvey LAB v1.0: 94.6%**; DECK-Bench: 73.5%; Hermes Bench: 71.5%
- **AA Tau3 Banking: 46.0%** — under the 50% reference; AA Agentic Index: 50.6%; AA ITBench: 47.7%; AA EnterpriseOps-Gym: 45.3%; JobBench: 52.9%; APEX-Agents-AA: 41.3%
- **MazeBench: 1%**; ApprenticeBench: 18%; AutomationBench: 30.8%; SpreadsheetBench 2: 34.8%
- Safety-specific: **b3 Agent Security: 88.0%**; **Cyber Misuse Refusal: 94.0%**; Finch: 77.3%
- AA Cyber Index 41.3%; CWE-Bench-AA 53.3%; CyberGym-E2E-AA 58.0%; DeepsecBench-AA 12.5%
- **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 93.5%** (Moonshot and AA agree) / **92.9%** (Vals) — clears the 90%+ frontier reference on all three
- **HLE: 56%** (Moonshot) / HLE without tools 43.5% / AA-HLE 46.9% — clears the 40%+ reference
- **AA-LCR: 88.7%** — the highest long-context-reasoning figure measured in this batch, above MiMo-V2.6-Pro's 86.3% and Gemini 4 Argon's 79.7%
- **ARC-AGI-1: 94.5%**; **ARC-AGI-2: 60.4%**
- Artificial Analysis Intelligence Index: **43.6**; MMLU-Pro (Vals): 88.0%
- **AA-Omniscience: index 19.7, accuracy 47.6%, hallucination rate 53.2%** — the second-worst index in this batch, ahead of only MiMo-V2.6-Pro's −4.5
- CritPt: **23.4%**; **MRCR: no verified public score found**

Coding — **the strongest dimension**:

- **AA Coding Index: 76.2%** — clears the 70% frontier reference
- **SWE-bench (Vals): 93.4%**; LiveCodeBench (Vals): **87.2%**
- **Terminal-Bench 2.1: 88.3%** — clears the 85% reference
- **AA-SciCode: 59.5%** — clears the 55% reference
- **FrontierSWE: 81.2%** (the joint-strongest FrontierSWE in this batch); FrontierSWE v2: 25.9%
- ProgramBench: **77.8%**; Kimi Code Bench v2: **72.9%**; VulcanBench v3: 73.7%; ScarfBench: 61.3%; OpenHarmony Bench: 57.3%; CursorBench 3.2: 60.8%
- DeepSWE: **67.5%** — 6.5 points under the 74% reference; **FrontierCode 2.0: 17.7%**; sweMarathon: 42%; PostTrainBench v1.1: 32.0%; Bug Hunt Bench: 21.0 fixes
- **SWE-bench Verified: no verified public score found**

Multimodal (image-in) — **unusually deep for an open-weight coding model**:

- **MathVision: 94.3%** / **97.8% with Python**; **OmniDocBench: 91.1%**; **CharXiv: 91.3%** (84.8% without tools)
- MMMU-Pro: **81.6%** / 83.4% with Python / AA 80.5%; BabyVision w/ Python: **85.7%**; ExtractBench: 83.17%; Design Arena: **1,335 Elo**
- OfficeQA Pro: 63.3%; PerceptionBench: 58.5%; WorldVQA: 51.0%; **ZeroBench: 23.0%** (41.0% with Python)

Safety:

- **Gray Swan indirect prompt injection (15 attempts): 52.7%** — by far the weakest prompt-injection resistance measured anywhere in this research series, roughly double the next-worst figure (GPT-5.6 Sol at 27.0%) and 75x Gemini 4 Carbon's 0.0%
- Cyber Misuse Refusal 94.0% and b3 Agent Security 88.0% are excellent — so the *refusal* half is strong while the *injection* half is not

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 88.3% (vendor run) clears the frontier reference and BrowseComp 91.2% / DeepSearchQA 95.0% / MCP Atlas 84.2% / AA Harvey LAB 94.6% / DECK-Bench 73.5% are all strong. Capped by GDPval-AA 1,584 Elo (under 1,750), AA Tau3 Banking 46.0% (under 50%), AutomationBench 30.8%, MazeBench 1%, ApprenticeBench 18%, and no Claw-Eval figure.
- **Reasoning: 87/100.** GPQA Diamond 92.9–93.5% and HLE 43.5–56% both clear their references, and **AA-LCR 88.7% is the best long-context reasoning measured in this batch**. ARC-AGI-1 94.5% and MMLU-Pro 88.0% corroborate. Capped by an AA Intelligence Index of 43.6, ARC-AGI-2 only 60.4%, CritPt 23.4%, a 53.2% hallucination rate with the second-worst Omniscience index here, and no MRCR figure.
- **Context window: 98/100.** 1.05M-token tier with **AA-LCR 88.7%, the strongest long-context-reasoning result in this batch** — above MiMo-V2.6-Pro (86.3%), Gemini 4 Argon (79.7%) and Claude Opus 5.5 (84.7%). Held at 98 rather than 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 85/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the *document* tier is explicitly in scope and the depth there is exceptional: MathVision 94.3%/97.8%, OmniDocBench 91.1%, CharXiv 91.3%, ExtractBench 83.17% — a genuinely strong PDF/chart/maths-vision profile. Held at 85 rather than the 90s because there is no video or audio input and ZeroBench is only 23.0%.
- **Coding: 91/100.** The strongest dimension. AA Coding Index 76.2% and Terminal-Bench 2.1 88.3% both clear their references, AA-SciCode 59.5% clears the 55% reference, and SWE-bench 93.4% (Vals), LiveCodeBench 87.2% and **FrontierSWE 81.2%** are all top-tier. Capped by DeepSWE 67.5% (6.5 points under the reference), FrontierCode 2.0 17.7%, sweMarathon 42%, and no published SWE-bench Verified figure.
- **Cost efficiency: 68/100.** $3/$15 per MTok maps onto the methodology's ≈60 anchor for that rate card, and is drawn *above* it because — unlike every closed model at a similar price — **the weights are open and self-hostable**, so the route to lower marginal cost is real. Held well below the 90s because $3 input is 20x MiniMax M3.1 Flash's and 3x GPT-6 Astra's, with no free tier.
- **Overall Score: 89/100.** (85 + 87 + 98 + 85 + 91) / 5 = 89.2 → **89** → 89. Recommendation: **the best open-weight generalist in this research series** — balanced across agentic, reasoning, long-context, multimodal-visual and coding, with the batch's best AA-LCR (88.7%) and best cyber-misuse refusal (94.0%), at $3/$15 with self-hosting available. One caveat overrides all of it: its **Gray Swan prompt-injection attack-success rate is 52.7%**, the worst measured anywhere, so **do not put it in a pipeline that reads untrusted text, tool output or web content** without an external injection filter. For that use case prefer Gemini 4 Carbon (0.0%) or Claude Opus 5.5 (1.0%).

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Moonshot's Kimi K3 launch blog as the primary source (which supplies most rows, so these are **vendor-run** and labelled as such), cross-checked against BenchLM's 87-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, ARC Prize, Mistral's Mistral-Large-4 launch chart, Kaggle, Cognition, Cursor, Proximal, PostTrainBench, VulcanBench, OpenHarmony, LlamaIndex, Nous Research and OpenRouter) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 88.3% / 85.0% / 80.9% across three harnesses, ZeroBench 23.0% vs 41.0% with Python — rather than averaged. Missing benchmarks (SWE-bench Verified, MRCR, Claw-Eval) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3 launch blog (primary benchmark source)](https://www.kimi.com/blog/kimi-k3)
  - [Moonshot AI — Kimi-K3 model card on Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
  - [BenchLM — Kimi K3 benchmark scores (87 rows, 69.34/100, #17/1009)](https://benchlm.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [Vals AI — Kimi K3 leaderboard results](https://www.vals.ai/models/kimi_kimi-k3)
  - [ARC Prize — published semi-private results for Kimi K3](https://arcprize.org/results/moonshot-kimi-k3)
  - [VulcanBench v3 July 2026 expanded report (Kimi K3)](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-kimi-k3-2026-07.md)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
