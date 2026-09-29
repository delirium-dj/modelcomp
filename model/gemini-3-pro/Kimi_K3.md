# Gemini 3 Pro — findings by Kimi K3

- Source: Google / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's first flagship of the Gemini 3 era with strong multimodal (VideoMMMU 87.6%) and reasoning (Thinking High) capability. **Superseded by Gemini 3.1 Pro and no longer among the current models on deepmind.google; deprecated on OpenCode Zen effective 2026-03-09.**
- **Provider / access:** Google Gemini API (`gemini-3-pro` historically), Vertex AI, AI Studio. On OpenCode Zen: **deprecated 2026-03-09** (Zen "Deprecated models" table, docs updated 2026-09-28 — verified).
- **Release / knowledge:** late 2025 / early 2026 generation (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemini-3-pro` (Gemini API, legacy). Not on Zen's current endpoints table (deprecation date effectively passed).
- **Context window:** 1M tokens verified in use (DeepMind benchmark suite includes an MRCR 8-needle 1M pointwise run, 26.3%); third-party tracker benchlm.ai lists 2M as the spec window — unverified against current Google pages since the model was delisted from deepmind.google's lineup.
- **Modalities:** text/image/video in (VideoMMMU measured); text out; Thinking (High) variant measured below; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** no verified public price found — Zen lists no active price post-deprecation; historical Pro-tier positioning ($2/$12-class) provisional.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use (DeepMind official comparison table, Gemini 3 Pro Thinking High, unless noted):

- τ2-bench: Retail **85.3%**, Telecom **98.0%** (vendor); τ²-bench 87.1% (benchlm.ai)
- MCP Atlas: **54.1%**; BrowseComp: **59.2%**; APEX-Agents: **18.4%** (DeepMind)
- GDPval-AA: **1195 Elo** (DeepMind)
- Terminal-Bench 2.0: **56.9%** (DeepMind); Terminal-Bench 2.1 / GDPval-AA-v2 / Claw-Eval: no verified public score found
- Gert Labs: **63.2%**; JobBench: **11.4%** (benchlm.ai)

Reasoning / knowledge:

- Humanity's Last Exam: **37.5%** no tools; **45.8%** w/ search+code (DeepMind); AA-HLE: 39.7% (benchlm.ai)
- GPQA Diamond: **91.9%** (DeepMind); AA 90.8% (benchlm.ai)
- ARC-AGI-2: **31.1%** (DeepMind, ARC Prize verified); CritPt: **9.1%** (benchlm.ai)
- AA-LCR: **76.0%** (benchlm.ai); AA MMLU-Pro: **89.8%**; Global-MMLU-Lite: **92.2%**; MMMLU: **91.8%** (DeepMind)
- AA-IFBench: **70.4%**; FrontierMath v2: **37.6%** T1–3 / **18.8%** T4 (benchlm.ai)
- Artificial Analysis Intelligence Index: **28.0**; BenchLM overall **61.01/100, #40 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **55.8% / 91.5%** — accurate when answered, but hallucination-prone (benchlm.ai)

Coding:

- SWE-bench Verified (single attempt): **76.2%**; SWE-Bench Pro (Public): **43.3%**; SciCode: **56%** (DeepMind)
- LiveCodeBench Pro: **2439 Elo** (DeepMind); AA LiveCodeBench: **91.7%** (benchlm.ai)
- Vibe Code Bench: **14.3%** (benchlm.ai)

Long context:

- MRCR v2 (8-needle): **77.0%** at 128K; **26.3%** at 1M pointwise (DeepMind) — same full-window weakness as 3.1 Pro
- AA-LCR 76.0% (benchlm.ai); no RULER rows.

Multimodal:

- MMMU-Pro: **81.0%** (DeepMind; AA 80.2%); VideoMMMU: **87.6%**; V*: **88.0%**; MathVision: **86.6%**; CharXiv: **81.4%**; ScreenSpot Pro: **72.7%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ2-bench 85.3%/98.0% solid, MCP Atlas 54.1% and BrowseComp 59.2% mid-table; capped by JobBench 11.4% and no current-harness rows (TB 2.1, GDPval-v2, Claw).
- **Reasoning: 76/100.** GPQA 91.9%, HLE 37.5%/45.8% tools, MMLU-Pro 89.8% decent; capped by ARC-AGI-2 31.1%, CritPt 9.1%, and 91.5% hallucination rate on Omniscience.
- **Context window: 90/100.** 1M window verified with MRCR 77.0% @128K; 26.3% pointwise @1M caps it below the clean-retrieval 95 floor; the 2M spec claim (benchlm) is now unverifiable since delisting.
- **Multimodal: 90/100.** Excellent breadth: VideoMMMU 87.6%, MathVision 86.6%, V* 88%, MMMU-Pro 81%; text-only output caps it.
- **Coding: 75/100.** SWE-bench Verified 76.2% and AA LiveCodeBench 91.7% are strong; capped hard by Vibe Code Bench 14.3% and middling SWE-Bench Pro 43.3%.
- **Cost efficiency: 70/100.** No active pricing (deprecated on Zen); historical Pro-tier pricing provisional — deprecation uncertainty and successor availability cap the score.
- **Overall Score: 81/100.** Mean of the five quality dims (76+76+90+90+75)/5 = 81.4 → 81. Best fit: legacy 1M-context multimodal analysis; for new work use Gemini 3.1 Pro (or wait for 3.5 Pro).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (DeepMind official Gemini 3 Pro benchmark column on the 3.1 Pro model page, OpenCode Zen deprecation docs updated 2026-09-28, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed Zen deprecation date 2026-03-09 (matches earlier note) and delisting from deepmind.google lineup; added DeepMind vendor benchmarks (HLE, SWE-bench Verified, MCP Atlas, BrowseComp, MRCR); adjusted Tool 74→76, Reasoning 74→76, Context 92→90 (2M claim unverifiable post-delist), Coding 70→75, Cost 60→70, Overall 80→81.
- Future sources: add a new file next to this one using the same headings.
