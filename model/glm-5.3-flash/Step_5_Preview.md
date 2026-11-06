# GLM-5.3-Flash — findings by Step 5 Preview

- Source: Z.AI (`zai-org/GLM-5.3-Flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash. Z.AI's open-weight flash-tier model, and the **best-ranked open-weight Flash model in this research series** (BenchLM 58.26, #56 of 1009 — above GLM-5.2's 60.03 is false, it sits below GLM-5.3 (61.03) and GLM-5.2 (60.03) but above GLM-4.7-Flash (38.09) by 20 points).
- **Short description:** A genuinely cheap open-weight generalist that **clears all three of its measured tool-use frontier references** (Terminal-Bench 2.1 84.3%, GDPval-AA 1,773 Elo, AA Tau3 Banking 47.2%) at **$0.15/$0.50 per 1M — the cheapest rate card of any model in this batch by 7x**. Its limits are concentrated in deep reasoning: FrontierMath Tier 4 17.1%, GPQA Diamond 86.4% (under 90%), and no ARC-AGI, CritPt, MRCR or composite index figure at all.
- **Provider / access:** Weights on Hugging Face (`zai-org/GLM-5.3-Flash`), Z.AI's own API, OpenRouter, and OpenCode Zen (`opencode/glm-5.3-flash`) at **$0.15/$0.50/$0.03**. Self-hosting available.
- **Release / knowledge:** release date not restated on the model card; the 5.3 generation is Z.AI's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/glm-5.3-flash` (Zen); `zai-org/GLM-5.3-Flash` (Hugging Face); `z-ai/glm-5.3-flash` (OpenRouter).
- **Context window:** **1M tokens** (BenchLM, Z.AI's launch post and the Qoder model-selector documentation agree). Max output not published.
- **Modalities:** **natively multimodal** — Z.AI describes 5.3-Flash as natively multimodal with deep image and video understanding, and the measured suite confirms it (CharXiv 89.4%, MMVU 80.5%, ExtractBench 80.75%). Reasoning model with adjustable effort.
- **Pricing (as of 2026-11-05):** **$0.15 input / $0.03 cached / $0.50 output per 1M** on Zen. Methodology anchors put $0.15/$0.50 between ~$0.10/$0.20 (≈97–99) and ~$0.60/$2.20 (≈92). **Open weights allow self-hosting.**
- **Architecture:** **open-weight** MoE; parameter count undisclosed in the sources checked.

### Raw benchmarks found

Z.AI's GLM-5.3-Flash launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Proximal, Kaggle, LlamaIndex, Nous Research, OpenHarmony and OpenRouter supplying independent rows.

Agent / tool use — **the strongest dimension, and the only one clearing all references**:

- **Terminal-Bench 2.1: 84.3%** (Z.AI and AA agree exactly) / **62.9%** (Vals) — just under the 88% reference on two harnesses, far under on the third
- **GDPval-AA: 1,773 Elo** — clears the 1,750+ frontier reference
- **AA Tau3 Banking: 47.2%** — 2.8 points under the 50% reference
- **Toolathlon-Verified: 78.4%** — the second-best figure in this batch
- AA ITBench: 51.2%; Hermes Bench: 68.9%; AutomationBench: 48.8%
- **Agents' Last Exam: 26.3%**; **MazeBench: 0%**
- CyberGym-E2E-AA: **74.0%**; CWE-Bench-AA: 55.8%; AA Cyber Index: 49.9%; DeepsecBench-AA: 19.9%
- **OSWorld, BrowseComp, MCP-Atlas, JobBench, Claw-Eval: no verified public score found**

Reasoning / knowledge — **the weakest dimension**:

- **HLE with tools: 55.3%** (Z.AI) — clears the 40%+ frontier reference, the only reasoning reference this model clears
- **GPQA Diamond (Vals): 86.4%** — 3.6 points under the 90%+ frontier reference
- MMLU-Pro (Vals): 86.1%
- **FrontierMath v2 Tiers 1–3: 55.8%**; **Tier 4: 17.1%** — the second-worst Tier 4 figure in this batch
- **ARC-AGI, CritPt, AA-LCR, MRCR, AA-Omniscience, Artificial Analysis Intelligence Index: no verified public score found** — so four of the methodology's five reasoning references, including the composite and both reliability metrics, are entirely absent

Coding:

- **SWE-bench (Vals): 92.0%** — the strongest single coding figure in this batch
- Terminal-Bench 2.1: 84.3% — just under the 85% reference
- LiveCodeBench (Vals): 80.5%; NL2Repo: 56.3%; OpenHarmony Bench: 57.3%
- **DeepSWE: 63.4%** — 10.6 points under the 74% reference
- **FrontierSWE v2: 18.1%**; Bug Hunt Bench: 17.7 fixes
- **SWE-bench Verified, AA Coding Index, AA-SciCode, Vibe Code Bench, FrontierCode: no verified public score found** — so its position on the 70%-index, 55%-SciCode and 85%-TB references is unverified

Multimodal (image + video in) — **the second-strongest dimension**:

- **CharXiv: 89.4%**; **MMVU: 80.5%**; **ExtractBench: 80.75%**; Chartography (tools): 78.0%
- ParseBench: 70.75%; OfficeQA Pro: 62.4%; **BabyVision: 53.4%**; Design Arena: 1,270 Elo
- **MMMU-Pro: no verified public score found** — a notable gap given the rest of the suite

### Normalized scores (1–100)

- **Tool use: 76/100.** The only model in this batch that meets or is within 3 points of all three frontier references: GDPval-AA 1,773 Elo clears 1,750, Terminal-Bench 2.1 84.3% (Z.AI and AA agree) is 3.7 under 88%, and AA Tau3 Banking 47.2% is 2.8 under 50%. Toolathlon-Verified 78.4% and AA ITBench 51.2% corroborate. Capped by Vals's much lower Terminal-Bench 2.1 (62.9%), Agents' Last Exam 26.3%, MazeBench 0%, and the complete absence of OSWorld, BrowseComp, MCP-Atlas and Claw-Eval.
- **Reasoning: 62/100.** The weakest dimension and the model's real ceiling. HLE with tools 55.3% clears the 40% reference and MMLU-Pro 86.1% is decent, but **GPQA Diamond is 86.4% — 3.6 points under the 90% reference — and FrontierMath Tier 4 is 17.1%**, the second-worst in this batch. Capped further by the total absence of ARC-AGI, CritPt, AA-LCR, MRCR, AA-Omniscience and any composite intelligence index, leaving four of five reasoning references unmeasurable.
- **Context window: 95/100.** 1M-token tier at the tier floor: there is no long-context evidence of any kind — no AA-LCR, no MRCR, no GraphWalks, no published max-output limit. The window's size is vendor-confirmed; its usable depth is entirely unmeasured.
- **Multimodal: 88/100.** Natively multimodal with image and video understanding per Z.AI, placing it in the methodology's 75–90 "+video/PDF in" tier, and the depth supports the top of that band: **CharXiv 89.4%, MMVU 80.5% (video), ExtractBench 80.75%, Chartography 78.0% with tools**. Held at 88 rather than the 90s by BabyVision 53.4%, OfficeQA Pro 62.4% and the missing MMMU-Pro figure.
- **Coding: 76/100.** SWE-bench 92.0% (Vals) is the strongest single coding result in this batch, with LiveCodeBench 80.5% and NL2Repo 56.3% supporting. Capped by DeepSWE 63.4% (10.6 points under the reference), FrontierSWE v2 18.1%, Bug Hunt Bench 17.7, Terminal-Bench 2.1 84.3%, and the absence of SWE-bench Verified, the AA Coding Index, AA-SciCode and Vibe Code Bench — so the 70%-index and 55%-SciCode references cannot be verified.
- **Cost efficiency: 94/100.** **$0.15/$0.50 per 1M with $0.03 cached reads is the cheapest rate card in this batch by 7x** (next cheapest is MiniMax M3.1 Flash's $0.15/$0.60, then Muse Spark 1.3's $1.25/$4.25), and it sits between the methodology's ~$0.60/$2.20 (≈92) and ~$0.10/$0.20 (≈97–99) anchors. **Open weights add a real self-hosting escape hatch.** Held just under the 97–99 tier because it is not a $0 route and MMMU-Pro is unpublished.
- **Overall Score: 79/100.** (76 + 62 + 95 + 88 + 76) / 5 = 79.4 → **79** → 79. Recommendation: **the best value generalist in this batch for tool-use and multimodal work.** At $0.15/$0.50 with open weights it clears GDPval-AA and lands within 3 points of both other tool-use references, while pairing a genuinely strong visual suite (CharXiv 89.4%, MMVU 80.5%) — that combination is unmatched at this price. Two cautions: it is **not a deep-reasoning model** (GPQA 86.4%, FrontierMath Tier 4 17.1%, no composite index), and its Agentic tool-use record has a 21.4-point vendor-vs-Vals gap on Terminal-Bench 2.1 (84.3% vs 62.9%) that needs resolving on your own harness before trusting the weaker direction.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Z.AI's GLM-5.3-Flash launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 37-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, Epoch AI, Proximal, Kaggle, LlamaIndex, Nous Research, OpenHarmony and OpenRouter), Qoder's official model-selector documentation (which independently confirms the 1M window and describes 5.3-Flash as natively multimodal with deep image and video understanding) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 84.3% / 84.3% / 62.9% across three harnesses — rather than averaged. Missing benchmarks (OSWorld, BrowseComp, MCP-Atlas, JobBench, Claw-Eval, ARC-AGI, CritPt, AA-LCR, MRCR, AA-Omniscience, composite index, MMMU-Pro, SWE-bench Verified, AA Coding Index, AA-SciCode, Vibe Code Bench, FrontierCode) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI — GLM-5.3-Flash launch post (primary benchmark source)](https://z.ai/blog/glm-5.3-flash)
  - [Hugging Face — zai-org/GLM-5.3-Flash model card (open weights)](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [BenchLM — GLM-5.3-Flash benchmark scores (37 rows, 58.26/100, #56/1009)](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [Vals AI — GLM-5.3-Flash leaderboard results](https://www.vals.ai/models/zai_glm-5.3-flash)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Qoder Docs — Model Selector (independent 1M-window and modality confirmation)](https://docs.qoder.com/qoder/model-selector)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
