# Kimi K2.6 — findings by Qwen 3.7 Plus

- Source: Moonshot AI/Kimi-K2.6 (`opencode/kimi-k2.6`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight trillion-parameter MoE flagship released spring 2026, built for long-horizon coding, coding-driven design, and agent-swarm orchestration. AA Intelligence Index 54 (per AA article on MiniMax M3; BenchLM reports 27.0% on current scale). Exceptional math: AIME 2026 96.4%, HMMT Feb 2026 92.7%. Strong coding: SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, SWE-bench Pro 58.6%, LiveCodeBench (Vals) 86.8%. Strong agentic: τ²-bench 95.9%, DeepSearchQA 92.5%, BrowseComp 83.2%, OSWorld-Verified 73.1%. Strong multimodal: V* 96.9%, MathVision 87.4%, MMMU-Pro 79.4%. GPQA Diamond 90.5–91.1% is strong. HLE 34.7% is modest. AA-Omniscience Hallucination Rate 40.5% is moderate. Open weights. 256K context (smaller than many peers). Affordable at $0.95/$4.00 per 1M.
- **Provider / access:** Moonshot AI API, OpenRouter, Hugging Face. Open weights.
- **Release / knowledge:** Released April 2026; knowledge cutoff not precisely documented.
- **IDs:** `opencode/kimi-k2.6` (OpenCode/OpenRouter); `moonshotai/Kimi-K2.6` (Hugging Face).
- **Context window:** 262,144 tokens (256K); ~236K output. Smaller than many peers (1M for MiniMax M3, Muse Spark 1.1).
- **Modalities:** Text and image in; text out. Strong multimodal with V* 96.9% and MathVision 87.4%.
- **Pricing (as of 2026-10-10):** $0.95 in / $4.00 out per 1M; $0.16 cached. $0.80/$3.40 via OpenRouter. Affordable for a frontier-class model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.9%** (AA — excellent)
- DeepSearchQA: **92.5%** (Moonshot — excellent deep research)
- BrowseComp: **83.2%** (Moonshot — strong web browsing)
- WideResearch: **80.8%** (Moonshot — strong wide research)
- OSWorld-Verified: **73.1%** (Moonshot — strong computer use)
- Terminal-Bench 2.0: **66.7%** (Moonshot — moderate)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard — moderate)
- MCP Atlas: **55.9%** (Moonshot — moderate tool use)
- Gert Labs: **56.82%** (Gert Labs — moderate)
- Terminal-Bench 2.1 (Vals): **53.6%** (Vals AI — moderate)
- Toolathlon: **50%** (Moonshot — moderate)
- APEX-Agents-AA: **28.5%** (AA — low)
- AA Agentic Index: **22.1%** (AA — low)
- GDPval-AA: **1115 Elo** (AA; normalized: 27.0%)
- ResearchClawBench: **18.0%** (ResearchClawBench — low)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper — very low)

Coding:

- LiveCodeBench v6: **89.6%** (Moonshot — excellent)
- LiveCodeBench (Vals): **86.8%** (Vals AI — excellent)
- SWE-bench Verified: **80.2%** (Moonshot — strong)
- SWE-bench (Vals): **76.2%** (Vals AI — strong)
- SWE Multilingual: **76.7%** (Moonshot — strong multilingual coding)
- SWE-bench Pro: **58.6%** (Moonshot — moderate)
- AA Coding Index: **61.8** (AA — moderate)
- Terminal-Bench 2.0: **66.7%** (Moonshot — moderate)
- AA-SciCode: **51.5%** (AA — moderate)
- SciCode: **52.2%** (Moonshot — moderate)
- CursorBench 3.1: **47.6%** (Cursor — moderate)
- Vibe Code Bench: **37.89%** (Vals AI — low)

Multimodal:

- V*: **96.9%** (Moonshot — excellent visual reasoning)
- MathVision: **87.4%** (Moonshot — excellent math vision)
- MMAnswerBench: **86.0%** (Moonshot — strong)
- CharXiv: **80.4%** (Moonshot — strong chart understanding)
- MMMU-Pro w/ Python: **80.1%** (Moonshot — strong)
- MMMU-Pro: **79.4%** (Moonshot/AA — strong)
- Design Arena Website: **1274 Elo** (OpenRouter — strong)

Reasoning / knowledge:

- AA-LCR: **81.0%** (AA — strong long-context reasoning)
- IFBench: **76.0%** (AA — moderate instruction following)
- GPQA Diamond: **90.5%** (Moonshot; AA: 91.1%; Vals: 89.1% — strong)
- MMLU-Pro (Vals): **87.6%** (Vals AI — strong)
- HLE: **34.7%** (Moonshot; AA: 37.5% — modest)
- CritPt: **8.0%** (AA — low)
- AIME 2026: **96.4%** (Moonshot — exceptional math)
- HMMT Feb 2026: **92.7%** (Moonshot — exceptional math)
- FrontierMath v2 (Tiers 1–3): **38.97%** (Epoch AI — moderate)
- FrontierMath v2 (Tier 4): **14.58%** (Epoch AI — low)
- AA-Omniscience Index: **5.3%** (AA — very low)
- AA-Omniscience Accuracy: **32.6%** (AA — low)
- AA-Omniscience Hallucination Rate: **40.5%** (AA — moderate)

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench 95.9% is near-perfect. DeepSearchQA 92.5% is excellent. BrowseComp 83.2% is strong. WideResearch 80.8% is strong. OSWorld-Verified 73.1% is strong (computer use). However, AA Agentic Index 22.1% is low. APEX-Agents-AA 28.5% is low. GDPval-AA 1115 Elo is modest. OSWorld 2.0 4.6% is very low. The model excels at research and browsing but struggles on standardized AA agentic composites.
- **Reasoning: 55/100.** GPQA Diamond 90.5–91.1% is strong. AA-LCR 81% is strong (long-context reasoning). MMLU-Pro 87.6% is strong. IFBench 76% is moderate. AIME 2026 96.4% is exceptional (math). HMMT Feb 92.7% is exceptional. However, HLE 34.7% is modest. CritPt 8% is low. AA-Omniscience Accuracy 32.6% is low. FrontierMath v2 Tier 4 14.58% is low. The reasoning profile is mathematically exceptional but weak on open-ended knowledge tasks.
- **Context window: 55/100.** 256K tokens — smaller than many peers (MiniMax M3 1M, Muse Spark 1.1 1M, GPT-5.4 1.05M). AA-LCR 81% confirms effective use of the context. The 236K output is generous. However, 256K is a limitation for long-document or long-horizon work where competitors offer 1M.
- **Multimodal: 82/100.** V* 96.9% is exceptional (visual reasoning). MathVision 87.4% is excellent. MMAnswerBench 86% is strong. CharXiv 80.4% is strong. MMMU-Pro 79.4% is strong. Design Arena 1274 Elo is strong. Text and image input only — no audio/video. The multimodal profile is among the strongest in this price tier, especially for visual-mathematical tasks.
- **Coding: 70/100.** LiveCodeBench v6 89.6% is excellent. LiveCodeBench (Vals) 86.8% is excellent. SWE-bench Verified 80.2% is strong. SWE-bench (Vals) 76.2% is strong. SWE Multilingual 76.7% is strong. However, SWE-bench Pro 58.6% is moderate. CursorBench 3.1 47.6% is moderate. Vibe Code Bench 37.89% is low. AA Coding Index 61.8 is moderate. The coding profile is strong for competitive/live coding, moderate for real-world SWE and vibe coding.
- **Cost efficiency: 88/100.** $0.95/$4.00 per 1M with $0.16 cached is affordable for a frontier-class model. Open weights — free self-hosting. 256K context is smaller but cheaper per token than 1M models. The combination of open weights, affordable API pricing, and strong coding/math makes this an excellent value proposition.
- **Overall Score: 65.4/100.** Mean of five quality dims: (65 + 55 + 55 + 82 + 70) / 5 = 65.4. Kimi K2.6 is Moonshot AI's open-weight coding and math specialist. Key strengths: AIME 2026 96.4% (exceptional math), HMMT Feb 92.7% (exceptional), τ²-bench 95.9% (near-perfect), DeepSearchQA 92.5% (excellent research), V* 96.9% (exceptional visual reasoning), MathVision 87.4% (excellent), LiveCodeBench v6 89.6% (excellent), SWE-bench Verified 80.2% (strong), BrowseComp 83.2% (strong), GPQA Diamond 90.5–91.1% (strong), open weights, affordable ($0.95/$4.00), OSWorld-Verified 73.1% (computer use). Key weaknesses: 256K context (smaller than 1M peers), AA Agentic Index 22.1% (low), AA-Omniscience Index 5.3% (very low), AA-Omniscience Accuracy 32.6% (low), HLE 34.7% (modest), CritPt 8% (low), OSWorld 2.0 4.6% (very low), Vibe Code Bench 37.89% (low), no audio/video input, GDPval-AA 1115 Elo (modest). Best fit for: mathematical reasoning (AIME 96.4%, HMMT 92.7%), live coding assistance (LiveCodeBench 89.6%), visual-mathematical tasks (V* 96.9%, MathVision 87.4%), deep research (DeepSearchQA 92.5%), teams wanting open weights for self-hosting, cost-sensitive deployments needing strong coding. Not ideal for: long-context work exceeding 256K, standardized agentic composites (AA Agentic Index 22.1%), knowledge-intensive tasks requiring high recall (AA-Omniscience Accuracy 32.6%), vibe coding (Vibe Code Bench 37.89%), multimodal pipelines needing audio/video.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Moonshot AI/Kimi official blog, BenchLM, Vals AI, Artificial Analysis, Cursor evals, Hugging Face model card, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
