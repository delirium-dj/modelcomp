# GPT-5.4 — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.4 (`opencode/gpt-5.4`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 professional-work reasoning flagship, now superseded by 5.5/5.6 and GPT-6 generations. Combines reasoning, coding, and agentic workflows. AA Intelligence Index ~49 (OpenAI self-reported at launch; BenchLM reports 39.0% on current AA scale). GPQA Diamond 92.0–92.8% is strong. HLE 52.1% with tools / 39.8% without. ARC-AGI-1 93.67% is excellent. Strong agentic profile: τ²-bench 98.9%, BrowseComp 82.7%, CyberGym 79%, OSWorld-Verified 75%, Terminal-Bench 2.0 75.1%. Coding: LiveCodeBench Pro 87.5%, React Native Evals 85.3%, AA Coding Index 71.0, SWE-bench Pro 57.7%. Multimodal: MMMU-Pro 81.2% (AA: 78.4%), ScreenSpot Pro 85.4%. Critical weakness: AA-Omniscience Hallucination Rate 91.7% — when uncertain, model almost always fabricates an answer. 1.05M context. Pricing steep at $1.25/$7.50 (≤272K) escalating to $5/$22.50 (>272K).
- **Provider / access:** OpenAI API, Azure, OpenRouter, Bedrock. Proprietary — no open weights. No free tier.
- **Release / knowledge:** Released 2026-03-05; superseded by GPT-5.5 (May 2026) and GPT-5.6/GPT-6 (July 2026). Knowledge cutoff early 2026.
- **IDs:** `opencode/gpt-5.4` (OpenCode/OpenRouter); `openai/gpt-5.4` (OpenAI API).
- **Context window:** 1,050,000 tokens (1.05M). AA-LCR 82.0% confirms effective long-context reasoning.
- **Modalities:** Text and image in; text out. No audio/video input. Strong computer-use via screenshots (OSWorld-Verified 75%, ScreenSpot Pro 85.4%).
- **Pricing (as of 2026-10-10):** $1.25 in / $7.50 out per 1M (prompts ≤272K); $5 in / $22.50 out (>272K); $2.50/$15 via resellers (OpenRouter/Bedrock/Azure). Among the most expensive per-token rate cards.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98.9%** (OpenAI — near-perfect)
- BrowseComp: **82.7%** (OpenAI — strong web browsing)
- CyberGym: **79.0%** (OpenAI — strong cybersecurity)
- OSWorld-Verified: **75.0%** (OpenAI — strong computer use)
- Terminal-Bench 2.0: **75.1%** (OpenAI — strong terminal tasks)
- MCP Atlas: **70.6%** (OpenAI — moderate tool use)
- DeepSearchQA: **73.6%** (Meta comparison — moderate deep research)
- Claw-Eval: **60.3%** (Claw-Eval leaderboard — moderate)
- Gert Labs: **64.89%** (Gert Labs — moderate)
- Toolathlon: **54.6%** (OpenAI — moderate multi-tool)
- JobBench: **38.9%** (JobBench paper — low)
- APEX-Agents-AA: **33.3%** (AA — low)
- GDPval-AA: **1307 Elo** (AA; normalized: 37.4%)
- ResearchClawBench: **15.3%** (ResearchClawBench — low)
- ExploitGym: **6.0%** (ExploitGym paper — very low)
- ApprenticeBench: **11%** (NeoCognition — very low)

Coding:

- LiveCodeBench Pro: **87.5%** (Meta comparison — excellent)
- React Native Evals: **85.3%** (React Native leaderboard — excellent)
- Terminal-Bench 2.0: **75.1%** (OpenAI — strong)
- Vibe Code Bench: **67.42%** (Vals AI — moderate)
- AA Coding Index: **71.0** (AA — strong)
- SWE-bench Pro: **57.7%** (OpenAI — moderate)
- PostTrainBench v1.1: **19.0%** (PostTrainBench — low)

Multimodal:

- ScreenSpot Pro: **85.4%** (Meta comparison — excellent GUI grounding)
- MMMU-Pro w/ Python: **82.1%** (OpenAI — strong)
- MMMU-Pro: **81.2%** (OpenAI; AA: 78.4%)
- CharXiv: **82.8%** (Meta comparison — strong chart understanding)
- MedXpertQA (MM): **77.1%** (Meta comparison — strong medical multimodal)
- ERQA: **65.4%** (Meta comparison — moderate)
- SimpleVQA: **61.1%** (Meta comparison — moderate)
- OfficeQA Pro: **53.2%** (OpenAI — moderate)
- ZeroBench: **41.0%** (Meta comparison — low)
- Design Arena Website: **1226 Elo** (OpenRouter — moderate)

Reasoning / knowledge:

- ARC-AGI-1: **93.67%** (ARC Prize — excellent)
- ARC-AGI-2: **74.0%** (ARC Prize — strong)
- GPQA Diamond: **92.0–92.8%** (OpenAI/AA/Meta — strong)
- AA-LCR: **82.0%** (AA — strong long-context reasoning)
- HLE: **52.1%** with tools (OpenAI; without: 39.8%)
- AA-HLE: **43.7%** (AA — moderate)
- IFBench: **73.9%** (AA — moderate instruction following)
- CritPt: **23.4%** (AA — moderate)
- FrontierMath v2 (Tiers 1–3): **47.6%** (Epoch AI — moderate)
- HealthBench Professional: **48.1%** (HealthBench paper — moderate)
- MedXpertQA (Text): **59.6%** (Meta comparison — moderate)
- HealthBench Hard: **40.1%** (Meta comparison — low-moderate)
- FrontierMath v2 (Tier 4): **27.1%** (Epoch AI — low)
- ARC-AGI-3: **0.2%** (ARC Prize — near-zero on hardest)
- AA-Omniscience Index: **5.8%** (AA — very low)
- AA-Omniscience Accuracy: **50.8%** (AA — moderate)
- AA-Omniscience Hallucination Rate: **91.7%** (AA — EXTREMELY HIGH; model fabricates answers ~92% of the time when uncertain)

### Normalized scores (1–100)

- **Tool use: 64/100.** τ²-bench 98.9% is near-perfect. BrowseComp 82.7% is strong. CyberGym 79% is strong. OSWorld-Verified 75% is strong (computer use). Terminal-Bench 2.0 75.1% is strong. However, APEX-Agents-AA 33.3% is low. ExploitGym 6% and ApprenticeBench 11% are very low. JobBench 38.9% is low. The model excels at browsing, cybersecurity, and computer use but struggles on research and specialized agentic evals.
- **Reasoning: 66/100.** ARC-AGI-1 93.67% is excellent. ARC-AGI-2 74% is strong. GPQA Diamond 92.0–92.8% is strong. AA-LCR 82% is strong (long-context reasoning). HLE 52.1% with tools is moderate. IFBench 73.9% is moderate. CritPt 23.4% is moderate. FrontierMath v2 Tier 4 27.1% is low. ARC-AGI-3 0.2% is near-zero. The reasoning profile is solid on classical reasoning (ARC, GPQA) but weak on frontier math and the hardest abstraction tasks.
- **Context window: 92/100.** 1.05M tokens — among the largest. AA-LCR 82% confirms effective long-context reasoning. The 272K pricing threshold is a practical limitation (costs 4× above that), but the raw context capacity is excellent.
- **Multimodal: 77/100.** MMMU-Pro 81.2% (AA: 78.4%) is strong. ScreenSpot Pro 85.4% is excellent (GUI grounding for computer use). CharXiv 82.8% is strong. MedXpertQA (MM) 77.1% is strong. However, ZeroBench 41% is low. OfficeQA Pro 53.2% is moderate. No audio/video input. The model is particularly strong at screenshot-driven computer use (ScreenSpot Pro 85.4%).
- **Coding: 70/100.** LiveCodeBench Pro 87.5% is excellent. React Native Evals 85.3% is excellent. Terminal-Bench 2.0 75.1% is strong. AA Coding Index 71.0 is strong. However, SWE-bench Pro 57.7% is moderate. Vibe Code Bench 67.42% is moderate. PostTrainBench 19% is low. The coding profile is strong for practical coding and in-editor work, moderate for autonomous SWE.
- **Cost efficiency: 35/100.** $1.25/$7.50 per 1M (≤272K) is expensive. Above 272K, pricing escalates to $5/$22.50 — 4× the base rate, making long-context work extremely costly. Reseller pricing ($2.50/$15) adds further cost. The $7.50/M output rate is among the highest for any model at this intelligence level. For cost-sensitive workloads, this model has been superseded by cheaper successors (GPT-5.5, GPT-5.6 Sol).
- **Overall Score: 73.8/100.** Mean of five quality dims: (64 + 66 + 92 + 77 + 70) / 5 = 73.8. GPT-5.4 is OpenAI's superseded professional-work flagship. Key strengths: τ²-bench 98.9% (near-perfect), BrowseComp 82.7% (strong browsing), CyberGym 79% (strong cybersecurity), OSWorld-Verified 75% (strong computer use), ScreenSpot Pro 85.4% (excellent GUI grounding), ARC-AGI-1 93.67% (excellent), GPQA Diamond 92.0–92.8% (strong), LiveCodeBench Pro 87.5% (excellent), React Native Evals 85.3% (excellent), 1.05M context with AA-LCR 82%, AA Coding Index 71.0. Key weaknesses: AA-Omniscience Hallucination Rate 91.7% (EXTREMELY HIGH — fabricates answers ~92% of time when uncertain), AA-Omniscience Index 5.8% (very low), SWE-bench Pro 57.7% (moderate), APEX-Agents-AA 33.3% (low), pricing escalates 4× above 272K, superseded by GPT-5.5/5.6/6 generations, no audio/video input, ARC-AGI-3 0.2% (near-zero), PostTrainBench 19% (low). Best fit for: cybersecurity agentic workflows (CyberGym 79%), screenshot-driven computer use (ScreenSpot Pro 85.4%, OSWorld 75%), live coding assistance (LiveCodeBench Pro 87.5%), tasks where hallucination can be externally verified. Not ideal for: knowledge-intensive tasks requiring factual accuracy (91.7% hallucination rate when uncertain), cost-sensitive workloads (expensive rate card, 4× escalation above 272K), autonomous SWE (SWE-bench Pro 57.7% moderate), teams wanting latest-generation models (superseded).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official blog, BenchLM, Vals AI, Artificial Analysis, Meta AI comparison charts, Epoch AI, ARC Prize, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
