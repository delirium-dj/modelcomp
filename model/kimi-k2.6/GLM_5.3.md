# Kimi K2.6 — findings by GLM 5.3

- Source: Kimi / Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights reasoning model (1T MoE, 32B active; Modified MIT), strong agentic search, tool use, and coding. Top use case: long-horizon agentic coding and deep-research workflows; now superseded by Kimi K3.
- **Provider / access:** Kimi/Moonshot API plus 14 third-party providers (per Artificial Analysis); Hugging Face `moonshotai/Kimi-K2.6` for self-hosting.
- **Release / knowledge:** released 2026-04-20; knowledge cutoff not stated publicly
- **IDs:** `kimi/kimi-k2.6` (no Free ID found on OpenCode Zen as of 2026-10-01)
- **Context window:** 256K total (AA lists 260K); max input/output split not published — verified via Artificial Analysis and BenchLM
- **Modalities:** text + image + video in; text out; reasoning yes; tool calls yes; JSON mode per provider docs
- **Pricing (as of 2026-10-01):** $0.95 / 1M input; $4.00 / 1M output; cache discount 83%; $0.80 per AA Intelligence Index task. Paid only — no free tier.
- **Architecture:** MoE, 1T total / 32B active parameters; open weights, Modified MIT license (commercial use with restrictions)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **53.6%** (Vals harness, BenchLM; Terminal-Bench 2.0: **66.7%**)
- Tau3-Banking / Tau2-Bench: τ²-bench **95.9%** (BenchLM; Tau3 harness: no verified public score found)
- GDPval-AA: **1115 Elo** (BenchLM; 26.3% normalized)
- Claw-Eval / ClawProBench: **62.3%** (Claw-Eval, BenchLM)
- Toolathlon: **50%**; MCP Atlas: **55.9%** (BenchLM)
- OSWorld-Verified: **73.1%**; OSWorld 2.0: **4.6%** (BenchLM)
- BrowseComp: **83.2%**; DeepSearchQA: **92.5%**; WideResearch: **80.8%** (BenchLM)
- AA Agentic Index: **22.1%**; APEX-Agents-AA: **28.5%**; ResearchClawBench: **18.0%**; Gert Labs: **56.82%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (BenchLM; AA-GPQA Diamond 91.1%, Vals 89.1%)
- HLE: **34.7%** (BenchLM; AA-HLE 37.5%)
- LCR / MLCR: AA-LCR **81.0%** (BenchLM)
- CritPt: **8.0%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **27 / #21 of 117 in class** (AA v4.3.2, open-weights class); BenchLM overall **60.17 / #52 of 637**
- Omniscience Accuracy / Hallucination Rate: **32.6% / 40.5%** (AA via BenchLM; Index 5.3)
- AIME26: **96.4%**; HMMT Feb 2026: **92.7%**; FrontierMath v2 Tiers 1–3: **38.97%**, Tier 4: **14.58%**; MMLU-Pro: **87.6%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified **80.2%**; SWE-bench Pro **58.6%**; SWE Multilingual **76.7%** (BenchLM)
- LiveCodeBench: **89.6%** (v6; Vals harness 86.8% — BenchLM)
- SciCode / AA-SciCode: **52.2% / 51.5%** (BenchLM)
- Vibe Code Bench: **37.89%**; cursorBench31: **47.6%**; AA Coding Index: **61.8%** (BenchLM)

Long context:

- AA-LCR **81.0%** at 256K (BenchLM); no RULER / MRCR / GraphWalks value reported — no measured long-context retrieval score found.

Multimodal (grounded):

- MMMU-Pro: **79.4%** (w/ Python 80.1%); CharXiv **80.4%**; MathVision **87.4%**; V* **96.9%**; Design Arena Website **1277** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-bench 95.9%, BrowseComp 83.2%, OSWorld-Verified 73.1%, and MCP Atlas 55.9% are strong-to-excellent, but GDPval-AA 1115 Elo (mid band) and AA Agentic Index 22.1% cap it below frontier agentic models.
- **Reasoning: 80/100.** GPQA Diamond 90.5%, HLE 34.7%, AIME26 96.4%, and AA-LCR 81% are near-frontier; CritPt 8.0% and weak omniscience (32.6% accuracy, 40.5% hallucination) cap knowledge reliability.
- **Context window: 71/100.** 256K total sits in the 200K–500K tier; AA-LCR 81% confirms usable long-context reasoning but the window is well below the 1M class.
- **Multimodal: 82/100.** Text + image + video input (no audio in, text-only out) with strong vision numbers (MMMU-Pro 79.4%, MathVision 87.4%, V* 96.9%) — upper end of the video-in tier, capped by no audio or non-text output.
- **Coding: 85/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, and SWE Multilingual 76.7% are excellent; SciCode 52.2% and Vibe 37.89% sit just under frontier refs, capping the score.
- **Cost efficiency: 90/100.** $0.95/$4.00 per 1M is near the ~$1.25/$4.25 ≈ 88 reference point with an 83% cache discount; verbosity (180M tokens on the AA Index) inflates effective task cost slightly.
- **Overall Score: 79/100.** (75 + 80 + 71 + 82 + 85) / 5 = 78.6 → 79. Best fit: open-weights agentic coding and deep-research agent with self-host option; prefer Kimi K3 for new deployments, and watch verbosity-driven token spend.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
