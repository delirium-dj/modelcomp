# Claude Sonnet 4.6 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Sonnet of the Claude 4.6 line — a balanced mid-tier coding model (SWE-bench Verified 79.6%) with a 200K context window, below the 1M frontier norm of late 2026.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), Amazon Bedrock, Vertex AI.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `anthropic/claude-sonnet-4-6` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 200K tokens (benchlm.ai) — mid-tier ceiling.
- **Modalities:** text/image in (CharXiv, MMMU-Pro measured); text out; reasoning: base classified Non-Reasoning by benchlm.ai; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Sonnet-tier — provisional.
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **67.8%**; CyberGym: **65.2%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **79.5%** (benchlm.ai)
- Terminal-Bench 2.0: **59.1%**; TB 2.1 (Vals): **57.3%** (benchlm.ai)
- OSWorld-Verified: **72.1%** (note OSWorld 2.0: **8.3%**); Gert Labs: **62.9%**; JobBench: **36.9%**; ApprenticeBench: **2%** (benchlm.ai)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (GPQA); 79.9% (AA); 85.6% (Vals); SuperGPQA: **95%** (benchlm.ai)
- HLE: **49.0%**; AA-HLE: **13.3%** — large harness divergence (benchlm.ai)
- AA-LCR: **68.3%**; CritPt: **0.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **24.7**; BenchLM overall **56.35/100, #49 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%** (benchlm.ai)
- MMLU-Pro (Vals): **87.3%**; FrontierMath v2: **32.4%** T1–3 / **8.3%** T4; AA-IFBench: **41.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench (Vals): **77.4%**; SWE-Rebench: **60.7%** (benchlm.ai)
- LiveCodeBench (Vals): **82.1%** (benchlm.ai)
- React Native Evals: **80.6%**; Vibe Code Bench: **51.5%**; cursorBench31: **48.8%**; FrontierCode 1.1 Main: **24.3%** (benchlm.ai)

Long context:

- AA-LCR 68.3% within the 200K window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- CharXiv: **77.4%**; AA-MMMU-Pro: **70.6%**; Design Arena Website: **1295 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** Claw-Eval 67.8%, τ² 79.5%, OSWorld-Verified 72.1%; capped by OSWorld 2.0 8.3%, ApprenticeBench 2% and no GDPval row.
- **Reasoning: 66/100.** GPQA up to 89.9% and SuperGPQA 95% keep knowledge decent; capped by AA-HLE 13.3%, CritPt 0.9%, AA Index 24.7.
- **Context window: 62/100.** 200K window sits below the 1M tier; capped by middling LCR 68.3%.
- **Multimodal: 74/100.** CharXiv 77.4%, MMMU-Pro 70.6%; text-only output caps it.
- **Coding: 78/100.** SWE-bench Verified 79.6%, LiveCodeBench 82.1%, React Native 80.6%; capped by FrontierCode 24.3%.
- **Cost efficiency: 74/100.** Price unverified; scored provisional on Sonnet-tier positioning.
- **Overall Score: 71/100.** Mean of the five quality dims (76+66+62+74+78)/5 = 71.2 → 71. Best fit: short-to-medium-context Claude 4.6-series coding assistants; consider Sonnet 5 for 1M work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
