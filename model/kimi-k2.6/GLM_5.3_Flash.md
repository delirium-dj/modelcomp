# Kimi K2.6 — findings by GLM 5.3 Flash

- Source: Kimi / Moonshot AI (`moonshotai/Kimi-K2.6`, reasoning variant)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (reasoning)
- **Short description:** Moonshot AI's open-weight trillion-parameter MoE reasoning model (1T total / 32B active), released April 20, 2026. General reasoning, agentic work, and multimodal (image/video) understanding. Now superseded by Kimi K3 — Artificial Analysis marks this model deprecated and only continues benchmarking on the default 10k-input workload.
- **Provider / access:** Kimi first-party API + 14 API providers per Artificial Analysis; self-hosting via Hugging Face. Chat Completions-style API.
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff not disclosed.
- **IDs:** `kimi/kimi-k2.6` (state: no Free ID verified on Zen at research time).
- **Context window:** 262,144 tokens total / 65,536 max output (models.dev OpenCode listing, verified 2026-10-09; AA FAQ rounds to 260k; benchlm 256K).
- **Modalities:** text + image + video input; text output; reasoning yes; tool calls yes (agentic evals in Intelligence Index); JSON mode not verified.
- **Pricing (as of 2026-10-09):** $0.95 / 1M input, $4.00 / 1M output (Kimi API, via Artificial Analysis). Cache discount 83%; blended price ~$0.70 / 1M tokens (7:2:1 cache/input/output ratio). No free tier verified.
- **Architecture:** 1T total params / 32B active (MoE); open weights under Modified MIT license (commercial use allowed with restrictions); weights at https://huggingface.co/moonshotai/Kimi-K2.6.

### Raw benchmarks found

> MoonshotAI Kimi K2.6 model card / tech blog rows via benchlm.ai (updated 2026-10-09) + Artificial Analysis and Vals AI rows. Previously-missing individual benchmarks now measured.

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Moonshot tech blog — fills the previously-missing TB row); TB2.1 (Vals): 53.6%
- Tau2-bench: **95.9%** (AA via benchlm.ai — fills the previously-missing Tau row, elite)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard via benchlm.ai — fills the previously-missing Claw row)
- MCP Atlas: **55.9%** (HF model card — fills the previously-missing MCP row)
- BrowseComp: **83.2%** (Moonshot tech blog — fills the previously-missing row)
- OSWorld-Verified: **73.1%** (Moonshot tech blog — fills the previously-missing row); OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- GDPval-AA: **1115 Elo** / 27.0% (AA — fills the previously-missing GDPval row)
- WideResearch: **80.8%** (HF model card — new); DeepSearchQA: **92.5%** (Moonshot tech blog)
- Gert Labs: **56.82%**; ResearchClawBench: **18.0%**; APEX-Agents-AA: **28.5%**; AA Agentic Index: **22.1%** (benchlm.ai)
- Toolathlon: **50%** (Moonshot tech blog); Terminal-Bench 4.0: no verified public score found for this exact ID (AA no longer benchmarks it beyond the 10k workload)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (HF model card — fills the previously-missing row; AA-GPQA Diamond 91.1%; Vals 89.1%)
- HLE: **34.7%** (HF model card — fills the previously-missing row; AA-HLE 37.5%)
- AIME26: **96.4%**; HMMT February 2026: **92.7%** (HF model card — new)
- AA-LCR: **81.0%** (AA long-context-reasoning board — fills the previously-missing LCR); CritPt: **8.0%** (AA)
- FrontierMath v2: Tiers 1–3 **38.97%**, Tier 4 **14.58%** (Epoch via benchlm.ai)
- Artificial Analysis Intelligence Index: **27.0** (AA via benchlm.ai — corroborates the earlier 27)
- AA-Omniscience: Index 5.3, accuracy **32.6%**, hallucination rate **40.5%**; AA-IFBench: **76.0%** (benchlm.ai)
- MMLU-Pro (Vals): **87.6%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.2%** (HF model card — fills the previously-missing SWE-V row)
- LiveCodeBench v6: **89.6%** (HF model card — fills the previously-missing LCB row); LiveCodeBench (Vals): **86.8%**
- SWE-bench Pro: **58.6%** (HF model card — fills the previously-missing SWE-Pro row); SWE Multilingual: **76.7%** (tech blog)
- SciCode: **52.2%** (HF model card — fills the previously-missing SciCode; AA-SciCode 51.5%)
- Terminal-Bench 2.0 (coding harness): **66.7%** (see above)
- Vibe Code Bench: **37.9%** (Vals v1.1); CursorBench 3.1: **47.6%** (Cursor evals); AA Coding Index: **61.8%**
- DeepSWE / SWE Atlas: no verified public score found for this exact ID

Long context:

- AA-LCR **81.0%** measured (AA via benchlm.ai — fills the previously-missing row); 262K window; no MRCR/RULER retrieval at length verified

Multimodal / vision:

- MMMU-Pro: **79.4%** / 80.1% w/ Python (HF model card — first measured vision rows); MathVision: **87.4%**; V*: **96.9%** (tech blog); CharXiv: **80.4%**; MMAnswerBench: **86.0%**; AA-MMMU-Pro: **79.4%**; Design Arena Website: **1274**

### Normalized scores (1–100)

- **Tool use: 80/100.** Now measured: Tau2 95.9% (elite), Claw-Eval 62.3%, TB2.0 66.7%, OSWorld-Verified 73.1%, WideResearch 80.8% and BrowseComp 83.2% clear mid-band anchors; GDPval-AA 1115 Elo and MCP Atlas 55.9% sit mid-pack; TB2.1 (Vals) 53.6% and AA Agentic Index 22.1% cap it.
- **Reasoning: 82/100.** GPQA 90.5–91.1% (now verified, clears the 90% reference), AIME26 96.4% and AA-LCR 81.0% are strong; HLE 34.7%/37.5% sits just under the 40% bar, CritPt 8.0% is weak, and AA Index 27.0 (deprecated model, recalibrated era) caps it.
- **Context window: 72/100.** 262,144 tokens / 65,536 output verified via models.dev — 200K–500K tier (65–84) above the 200K=70 anchor; measured AA-LCR 81.0% is strong for the tier but no MRCR/RULER verification.
- **Multimodal: 82/100.** Text + image + video input with measured vision (MMMU-Pro 79.4%, MathVision 87.4%, V* 96.9%); text-only output and no audio input cap it in the 75–90 band.
- **Coding: 85/100.** Now with filled rows: SWE-V 80.2%, LCB 89.6% (89.6/86.8 across two harnesses), SWE-Pro 58.6%, SciCode 52.2% (just under the 55%+ mark); Vibe 37.9% and missing DeepSWE cap it below 90.
- **Cost efficiency: 85/100.** $0.95/$4.00 per 1M (blended ~$0.70, cache discount 83%) sits between the methodology anchors (~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88); very verbose output (180M tokens, $0.80/task) pulls it down to 85. Excluded from Overall.
- **Overall Score: 80/100.** Mean of the five quality dims (80 + 82 + 72 + 82 + 85) / 5 = 80.2 → 80. Best-fit: a solid open-weight MoE for image/video-in agentic work at moderate cost, but deprecated in favor of Kimi K3 — prefer K3 for new deployments.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing the MoonshotAI K2.6 model card/tech blog, Artificial Analysis, Vals AI, models.dev, updated 2026-10-09); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured SWE-V 80.2%, LCB 89.6%, SWE-Pro 58.6%, TB2.0 66.7%, Tau2 95.9%, Claw-Eval 62.3%, MCP Atlas 55.9%, GDPval-AA 1115, GPQA 90.5%, HLE 34.7%, AIME26 96.4%, MMMU-Pro 79.4%, AA-LCR 81.0%; corrects context 256K→262,144/65,536 — Tool 60→80, Reasoning 60→82, Context 70→72, Multimodal 80→82, Coding 62→85, Overall 66→80.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
