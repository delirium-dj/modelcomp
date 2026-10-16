# Kimi K2.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/kimi-k2-5 (MoonshotAI Kimi K2.5 model card), Artificial Analysis (`artificialanalysis.ai/models/kimi-k2-5`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weights MoE reasoning model (released January 27, 2026 per AA); 256K context / text+image+video in → text out; 1T total / 32B active parameters; Modified MIT License; sibling: Kimi K2.5 (Reasoning), Kimi K2.7 Code, Kimi K3.
- **Provider / access:** Moonshot API (`kimi-k2-5`), open weights on Hugging Face (`moonshotai/Kimi-K2.5`); Modified MIT License (commercial use allowed with restrictions).
- **Release / knowledge:** Released January 27, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `kimi-k2-5` (Moonshot API / OpenRouter), `moonshotai/Kimi-K2.5` (HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.60/M input, $2.75/M output (AA; cache discount 42%, blended rate $0.64).
- **Architecture:** Open-weights MoE, 1T total / 32B active, Modified MIT License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (MoonshotAI Kimi K2.5 model card)
- BrowseComp: **60.6%** (MoonshotAI Kimi K2.5 model card)
- OSWorld-Verified: **63.3%** (Kimi-K2.6 model card — cross-ref)
- Claw-Eval: **52.3%** (Claw-Eval leaderboard)
- QwenClawBench: **54.3%** (Qwen3.6-Plus comparison table — cross-ref)
- τ³-bench results: **65.7%** (Qwen3.6-Plus comparison table — cross-ref)
- DeepSearchQA: **77.1%** (MoonshotAI Kimi K2.5 model card)
- DeepPlanning: **14.4%** (Qwen3.6-Plus comparison table — cross-ref)
- Toolathlon: **27.8%** (MoonshotAI Kimi K2.5 model card)
- MCP Atlas: **29.5%** (MoonshotAI Kimi K2.5 model card)
- MCP-Tasks: **59.1%** (Qwen3.6-Plus comparison table — cross-ref)
- WideResearch: **72.7%** (MoonshotAI Kimi K2.5 model card)
- τ²-bench results: **95.9%** (Artificial Analysis)
- BFCL v4: **68.3%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- APEX-Agents-AA: **11.5%** (Artificial Analysis)
- JobBench: **8.7%** (JobBench paper)
- GDPval-AA: **936 Elo** (Artificial Analysis); normalized **17.0%**
- ResearchClawBench: **14.0%** (ResearchClawBench leaderboard)
- Gert Labs: **45.88%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA: **87.6%** (MoonshotAI Kimi K2.5 model page); AA-GPQA Diamond **87.9%**
- HLE: **30.1%** (MoonshotAI Kimi K2.5 model page); AA-HLE **30.7%**
- MMLU-Pro: **87.1%** (MoonshotAI Kimi K2.5 model page)
- MMLU-Redux: **94.5%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- C-Eval: **94%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- SuperGPQA: **69.2%** (Qwen3.6-Plus comparison table — cross-ref)
- Artificial Analysis Intelligence Index: **23.5%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **78.0%** (Artificial Analysis)
- CritPt: **3.1%** (Artificial Analysis)
- AA-Omniscience Index **-7.3%**; Accuracy **35.2%**; Hallucination rate **65.7%** (AA)
- IFEval: **93.9%** (Qwen3.6-Plus comparison table — cross-ref)
- FrontierMath v2 Tiers 1-3: **54.035%** (Epoch AI)
- FrontierMath v2 Tier 4: **12.195%** (Epoch AI)

Coding:

- SWE-bench Verified: **76.8%** (MoonshotAI Kimi K2.5 model card)
- SWE-bench Verified*: **70.8%** (Arcee Trinity-Large-Thinking comparison table — cross-ref)
- SWE-bench Pro: **50.7%** (MoonshotAI Kimi K2.5 model card)
- SWE Multilingual: **73%** (MoonshotAI Kimi K2.5 model card)
- SWE-Rebench: **58.5%** (SWE-Rebench leaderboard)
- React Native Evals: **77.2%** (React Native Evals leaderboard)
- LiveCodeBench v6: **85.0%** (MoonshotAI Kimi K2.5 model card)
- SciCode: **48.7%** (MoonshotAI Kimi K2.5 model card)
- NL2Repo: **32%** (GLM-5.1 model card comparison table — cross-ref)
- AA Coding Index: **46.8%** (Artificial Analysis)

Multimodal & grounded:

- MMMU: **84.3%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- MMMU-Pro: **78.5%** (MoonshotAI Kimi K2.5 model card); AA-MMMU-Pro **75.4%**
- RealWorldQA: **81.0%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- OmniDocBench 1.5: **88.8%** (MoonshotAI Kimi K2.5 model card)
- Video-MME: **87.4%** (MoonshotAI Kimi K2.5 blog; Qwen3.5-397B-A17B comparison table)
- MathVision: **84.2%** (MoonshotAI Kimi K2.5 model card)
- We-Math: **84.7%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- DynaMath: **84.4%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- SimpleVQA: **71.2%** (MoonshotAI Kimi K2.5 model card)
- MMLongBench-Doc: **58.5%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- CC-OCR: **79.7%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- AI2D_TEST: **90.8%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- CountBench: **94.1%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- RefCOCO (avg): **87.8%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- MMVU: **80.4%** (MoonshotAI Kimi K2.5 blog)
- VideoMMMU: **86.6%** (Qwen3.6-Plus multimodal comparison table — cross-ref)
- MLVU (M-Avg): **85.0%** (Qwen3.5-397B-A17B model card comparison table — cross-ref)
- CharXiv: **77.5%** (MoonshotAI Kimi K2.5 model card)
- Design Arena Website: **1250** (OpenRouter)

Long context:

- LongBench v2: **61%** (MoonshotAI Kimi K2.5 model card)
- AA-LCR: **78.0%** (Artificial Analysis); declared 256K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Terminal-Bench 2.0 (50.8%), BrowseComp (60.6%), MCP-Tasks (59.1%), τ²-bench (95.9%), WideResearch (72.7%); capped by weak Toolathlon (27.8%), MCP Atlas (29.5%), GDPval-AA normalized (17.0%), ResearchClawBench (14.0%), JobBench (8.7%), APEX-Agents-AA (11.5%). Moderate agentic tool-use profile.
- **Reasoning: 68/100.** GPQA 87.6%, MMLU-Redux 94.5%, MMLU-Pro 87.1%, C-Eval 94%, AA-LCR (78.0%), FrontierMath T1-3 (54.035%); capped by CritPt (3.1%), HLE (30.1%), AA-HLE (30.7%), AA-Omniscience accuracy (35.2%), Intelligence Index (23.5%). Strong knowledge reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 70/100.** Verified 256K tokens (benchlm.ai + AA); AA-LCR 78.0%, LongBench v2 61%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 82/100.** Text + image + video in, text out; MMMU (84.3%), MMMU-Pro (78.5%), Video-MME (87.4%), MathVision (84.2%), CharXiv (77.5%), MLVU (85.0%), CountBench (94.1%); capped by text-only output.
- **Coding: 68/100.** SWE-bench Verified (76.8%), LiveCodeBench v6 (85.0%), SWE Multilingual (73%), React Native Evals (77.2%), SWE-bench Vals not found for this variant; capped by SWE-bench Pro (50.7%), NL2Repo (32%), AA Coding Index (46.8%), SciCode (48.7%). Strong verified coding.
- **Cost efficiency: 55/100.** $0.60/$2.75 somewhat expensive pricing with 42% cache discount; not counted toward Overall.
- **Overall Score: 70.6/100.** Half-up mean of (65 + 68 + 70 + 82 + 68) / 5 = 70.6 → 71. Best-fit recommendation: strong multimodal model with verified coding at 256K context; verify on HLE-class tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Kimi K2.5 model card + Artificial Analysis + Vals AI + Epoch AI + various model-card comparison tables independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
